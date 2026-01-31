let Z = {
  // Maximum 32-bit integer (we set explicitly to rule out differences between interpreters)
  mInt: 4294967296,
  // 32-bit random number generator function (Tommy Ettinger's Mulberry32)
  m32:
    (a) =>
    (f = 1) => {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return (((t ^ (t >>> 14)) >>> 0) / Z.mInt) * f;
    },
  // AudioContext
  ctx: null,
  // Track if audio has been warmed up
  warmedUp: false,
  // Maximum number of cached effect nodes before cleanup
  maxFxNodes: 50,
  // Initialize AudioContext
  init: () => {
    Z.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },
  // Warm up the audio context to eliminate first-play delay
  warmUp: () => {
    if (Z.warmedUp) return;
    if (!Z.ctx) Z.init();
    // Resume context if suspended (required by browsers after user interaction)
    if (Z.ctx.state === "suspended") {
      Z.ctx.resume();
    }
    // Play a silent buffer to initialize the audio pipeline
    let buffer = Z.ctx.createBuffer(1, 1, Z.ctx.sampleRate);
    let source = Z.ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(Z.ctx.destination);
    source.start(0);
    Z.warmedUp = true;
  },
  // Clean up old effect nodes to prevent memory exhaustion
  cleanupFxNodes: () => {
    let keys = Object.keys(Z.fxNodes);
    if (keys.length > Z.maxFxNodes) {
      // Remove oldest half of nodes
      let toRemove = keys.slice(0, Math.floor(keys.length / 2));
      toRemove.forEach((key) => {
        let node = Z.fxNodes[key];
        if (node && node.disconnect) {
          try {
            node.disconnect();
          } catch (e) {
            // Node may already be disconnected
          }
        }
        delete Z.fxNodes[key];
      });
    }
  },
  // Track active voices for note-off capability
  activeVoices: {},
  // Stop all currently playing sounds with quick fade
  stopAll: () => {
    if (!Z.aC) return;
    let now = Z.aC.currentTime;
    let fadeTime = 0.03; // 30ms quick fade for stop all
    let stopTime = now + fadeTime + 0.02;
    Object.keys(Z.activeVoices).forEach((key) => {
      let voice = Z.activeVoices[key];
      if (voice) {
        // Fade out gains smoothly
        voice.gains.forEach(({ gain }) => {
          try {
            gain.gain.cancelScheduledValues(now);
            gain.gain.setValueAtTime(gain.gain.value, now);
            gain.gain.linearRampToValueAtTime(0, now + fadeTime);
          } catch (e) {}
        });
        // Stop all oscillators after fade completes
        voice.oscs.forEach((osc) => {
          try { osc.stop(stopTime); } catch (e) {}
        });
        voice.allNodes.forEach((node) => {
          try { node.stop(stopTime); } catch (e) {}
        });
      }
    });
    Z.activeVoices = {};
  },
  // Getter for AudioContext
  get aC() {
    return this.ctx;
  },
  // Getter for sample rate
  get sampleRate() {
    return this.aC.sampleRate;
  },
  // Object to store effect nodes
  fxNodes: {},
  // Buffer for noise generation
  noiseBuffer: null,
  // Arrays of available waveforms and filters
  waveforms: ["sine", "square", "sawtooth", "triangle"],
  filters: ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "allpass"],
  // Generate a random sample between -1 and 1
  randSample: () => Math.random() * 2 - 1,
  // Generate a distortion curve
  getDistCurve: (k) => {
    let curve = new Float32Array(sampleRate);
    let deg = Math.PI / 180;
    for (let i = 0; i < Z.sampleRate; i++) {
      let x = (i * 2) / Z.sampleRate - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  },
  // Generate a unique ID for an object (found here https://stackoverflow.com/a/15710692)
  id: (obj) =>
    JSON.stringify(obj)
      .split("")
      .reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0),
  // Calculate frequency for a given note
  freq: (rootNote, noteOffset) => 261.63 * Math.pow(2, (rootNote + noteOffset) / 12),
  // Apply ADSR envelope to a parameter
  adsr: (ctx, t, env, max) => {
    let { A, D, S, R } = env;
    let tEnd = t + A[0] + D[0] + S[0] + R[0];
    let lr = ctx.linearRampToValueAtTime.bind(ctx);
    // Start from 0 to avoid click
    ctx.setValueAtTime(0, t);
    // Ramp up during attack (ensure minimum attack time to avoid click)
    lr(A[1] * max, t + Math.max(A[0], 0.005));
    lr(D[1] * max, t + A[0] + D[0]);
    lr(S[1] * max, t + A[0] + D[0] + S[0]);
    lr(R[1] * max, tEnd);
    return tEnd;
  },
  // Render audio for given notes and layer
  // Returns voice ID if sustained mode, null otherwise
  render: (noteOffset, notes, layer, sustained = false) => {
    if (notes.length == 0) return null;
    // Warm up audio context on first render
    Z.warmUp();
    // Clean up old effect nodes if cache is getting large
    Z.cleanupFxNodes();
    let rootNote = layer.rootNote + noteOffset;
    let oscs = [];
    let gains = [];
    let allNodes = [];
    let voiceGain = 1.0 / (notes.length * layer.instrument.oscs.length);
    let buf = 0; //0.005;
    let now = Z.aC.currentTime + buf;
    let finalStopTime = 0;
    let SR = Z.sampleRate;
    // Create and connect oscillators, filters, and effects for each note
    notes.forEach((note) => {
      layer.instrument.oscs.forEach((cnf) => {
        let osc;
        let oFreq = Z.freq(rootNote, note + cnf.oct * 12 + cnf.detune);
        // Create oscillator or noise source
        if (cnf.waveform == "noise") {
          // Create noise source
          osc = Z.aC.createBufferSource();
          if (!Z.noiseBuffer) {
            // Create noise buffer if it doesn't exist
            let bufferSize = 2 * SR;
            Z.noiseBuffer = Z.aC.createBuffer(1, bufferSize, SR);
            let output = Z.noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
              output[i] = Z.randSample();
            }
          }
          osc.buffer = Z.noiseBuffer;
          osc.loop = true;
        } else {
          // Create oscillator with specified waveform
          osc = Z.aC.createOscillator();
          osc.type = cnf.waveform || "sine";
          osc.frequency.value = oFreq;
        }
        // Create gain node and apply ADSR envelope
        let nGain = Z.aC.createGain();
        if (sustained) {
          // For sustained notes, just do attack to sustain, hold there
          finalStopTime = Math.max(finalStopTime, Z.adsrSustain(nGain.gain, now, cnf.adsrGain, layer.gain * voiceGain));
        } else {
          finalStopTime = Math.max(finalStopTime, Z.adsr(nGain.gain, now, cnf.adsrGain, layer.gain * voiceGain));
        }
        gains.push({ gain: nGain, env: cnf.adsrGain, max: layer.gain * voiceGain });
        // Create and connect gain LFO if specified
        let gLFO = cnf.gLFO ? Z.aC.createOscillator() : null;
        if (gLFO) {
          let gLFOg = Z.aC.createGain();
          gLFO.type = cnf.gLFO.type || "sine";
          gLFO.frequency.value = cnf.gLFO.frequency || 1;
          gLFOg.gain.value = cnf.gLFO.depth || 0;
          gLFO.connect(gLFOg);
          gLFOg.connect(nGain.gain);
          if (!sustained) {
            gLFO.start(now);
            gLFO.stop(finalStopTime);
          } else {
            allNodes.push(gLFO);
          }
        }
        // Create filter and apply ADSR envelope
        let nFilt = Z.aC.createBiquadFilter();
        nFilt.Q.value = cnf.filterQ || 0;
        if (sustained) {
          Z.adsrSustain(nFilt.frequency, now, cnf.adsrFilter, 20000);
          Z.adsrSustain(nFilt.Q, now, cnf.adsrFilterQ, 30);
        } else {
          finalStopTime = Math.max(finalStopTime, Z.adsr(nFilt.frequency, now, cnf.adsrFilter, 20000), Z.adsr(nFilt.Q, now, cnf.adsrFilterQ, 30));
        }
        // Create and connect filter LFO if specified
        let fLFO = cnf.fLFO ? Z.aC.createOscillator() : null;
        if (fLFO) {
          let fLFOg = Z.aC.createGain();
          fLFO.type = cnf.fLFO.type || "sine";
          fLFO.frequency.value = cnf.fLFO.frequency || 1;
          fLFOg.gain.value = cnf.fLFO.depth || 0;
          fLFO.connect(fLFOg);
          fLFOg.connect(nFilt.frequency);
          if (!sustained) {
            fLFO.start(now);
            fLFO.stop(finalStopTime);
          } else {
            allNodes.push(fLFO);
          }
        }
        // Apply pitch envelope if specified (not for noise)
        if (cnf.pENV && cnf.waveform != "noise") {
          if (sustained) {
            Z.adsrSustain(osc.frequency, now, cnf.pENV, oFreq * cnf.pENV.amount || 0);
          } else {
            finalStopTime = Math.max(finalStopTime, Z.adsr(osc.frequency, now, cnf.pENV, oFreq * cnf.pENV.amount || 0));
          }
        }
        // Create and connect pitch LFO if specified (not for noise)
        let pLFO = cnf.waveform !== "noise" && cnf.pLFO ? Z.aC.createOscillator() : null;
        if (pLFO) {
          let pLFOg = Z.aC.createGain();
          pLFO.type = cnf.pLFO.type || "sine";
          pLFO.frequency.value = cnf.pLFO.frequency || 1;
          pLFOg.gain.value = cnf.pLFO.depth * oFreq || 0;
          pLFO.connect(pLFOg);
          pLFOg.connect(osc.frequency);
          if (!sustained) {
            pLFO.start(now);
            pLFO.stop(finalStopTime);
          } else {
            allNodes.push(pLFO);
          }
        }
        // Create and connect FM (Frequency Modulation) if specified
        if (cnf.FM) {
          let FM = Z.aC.createOscillator();
          let FMGain = Z.aC.createGain();
          FM.type = cnf.FM.type || "sine";
          FM.frequency.value = Math.min(Math.max(cnf.FM.frequency * oFreq || 1, -22050), 22050);
          FMGain.gain.value = cnf.FM.depth || 0;
          FM.connect(FMGain);
          FMGain.connect(osc.frequency);
          if (!sustained) {
            FM.start(now);
            FM.stop(finalStopTime);
          } else {
            allNodes.push(FM);
          }
        }
        // Create stereo panner
        let nPan = Z.aC.createStereoPanner();
        if (typeof layer.pan == "function") {
          nPan.pan.setValueAtTime(layer.pan(layer) || 0, now);
        } else {
          nPan.pan.setValueAtTime(layer.pan || 0, now);
        }
        // Connect nodes: oscillator -> filter -> gain -> panner
        osc.connect(nFilt);
        nFilt.connect(nGain);
        nGain.connect(nPan);
        // Create delay effect if specified
        let nDel, nVerb;
        if (!cnf?.fx?.del) {
          let nDelID = Z.id({ ...cnf, d: "0" });
          nDel = Z.fxNodes[nDelID];
          if (!nDel) {
            nDel = Z.aC.createGain();
            Z.fxNodes[nDelID] = nDel; // Store the same node we use
          }
        } else {
          let dC = cnf.fx.del;
          let dId = Z.id(dC);
          nDel = Z.fxNodes[dId];
          if (!nDel) {
            nDel = Z.aC.createDelay();
            nDel.delayTime.value = dC.time;
            let dF = Z.aC.createGain();
            dF.gain.value = dC.feedback;
            nDel.connect(dF);
            dF.connect(nDel);
            Z.fxNodes[dId] = nDel;
          }
        }
        nPan.connect(nDel);
        // Create reverb effect if specified
        if (!cnf?.fx?.verb) {
          let noId = Z.id({ ...cnf, r: "0" });
          nVerb = Z.fxNodes[noId];
          if (!nVerb) {
            nVerb = Z.aC.createGain();
            Z.fxNodes[noId] = nVerb; // Store the same node we use
          }
        } else {
          let rC = cnf.fx.verb;
          let rId = Z.id(rC);
          nVerb = Z.fxNodes[rId];
          if (!nVerb) {
            nVerb = Z.aC.createConvolver();
            let length = SR * rC.duration;
            let imp = Z.aC.createBuffer(2, length, SR);
            let impL = imp.getChannelData(0);
            let impR = imp.getChannelData(1);
            for (let i = 0; i < length; i++) {
              impL[i] = impR[i] = Z.randSample() * Math.pow(1 - i / length, rC.decay);
            }
            nVerb.buffer = imp;
            Z.fxNodes[rId] = nVerb; // Store the same node we use
          }
        }
        // Connect Delay -> Reverb -> Output
        nDel.connect(nVerb);
        nVerb.connect(Z.aC.destination);
        oscs.push(osc);
      });
    });
    // Apply distortion if specified
    let dCurve = layer?.dist?.curve || null;
    if (dCurve) {
      nDist.curve = new Float32Array(dCurve);
      nDist.oversample = layer.dist.oversample || "none";
      nGains.forEach((nGain) => {
        nGain.connect(nDist);
      });
      nDist.connect(Z.aC.destination);
    }
    // Start oscillators
    oscs.forEach((osc) => {
      osc.start(now);
      if (!sustained) {
        osc.stop(finalStopTime);
      }
    });
    // Start LFOs for sustained notes
    if (sustained) {
      allNodes.forEach((node) => node.start(now));
      // Generate voice ID and store for later noteOff
      let voiceId = `${Date.now()}_${Math.random()}`;
      Z.activeVoices[voiceId] = { oscs, gains, allNodes };
      return voiceId;
    }
    return null;
  },
  // Apply ADSR envelope for sustained notes (attack -> decay -> sustain, hold at sustain)
  adsrSustain: (ctx, t, env, max) => {
    let { A, D, S } = env;
    let lr = ctx.linearRampToValueAtTime.bind(ctx);
    // Start from 0 to avoid click
    ctx.setValueAtTime(0, t);
    // Ramp up during attack phase
    lr(A[1] * max, t + Math.max(A[0], 0.005));
    lr(D[1] * max, t + A[0] + D[0]);
    lr(S[1] * max, t + A[0] + D[0] + S[0]);
    // Hold at sustain level (don't schedule release)
    return t + A[0] + D[0] + S[0];
  },
  // Release a sustained note by voice ID
  noteOff: (voiceId) => {
    let voice = Z.activeVoices[voiceId];
    if (!voice) return;
    let now = Z.aC.currentTime;
    let maxRelease = 0.015;
    // Apply release envelope to all gain nodes
    voice.gains.forEach(({ gain, env }) => {
      // Use instrument's release time, with small minimum to prevent clicks
      let r = Math.max(env.R[0], 0.015);
      gain.gain.cancelScheduledValues(now);
      // Get current value and ramp to 0
      let currentVal = gain.gain.value;
      gain.gain.setValueAtTime(currentVal, now);
      gain.gain.linearRampToValueAtTime(0, now + r);
      maxRelease = Math.max(maxRelease, r);
    });
    // Stop all oscillators after release completes
    let stopTime = now + maxRelease + 0.05;
    voice.oscs.forEach((osc) => {
      try { osc.stop(stopTime); } catch (e) {}
    });
    voice.allNodes.forEach((node) => {
      try { node.stop(stopTime); } catch (e) {}
    });
    delete Z.activeVoices[voiceId];
  },
  // Generate a random instrument based on a seed
  getInstrument: (seed) => {
    seed = parseInt(seed);
    let r = Z.m32(seed);
    let oscs = [];
    // Helper function to generate envelope parameters
    let gEnv = (t, v) => {
      let n = [r(v[0]), r(v[1]), r(v[2]), r(v[3])];
      n.normalize = function () {
        let maxValue = Math.max(...this);
        return this.map((num) => num / maxValue);
      };
      n = n.normalize();
      return {
        A: [r(t[0]), n[0]],
        D: [r(t[1]), n[1]],
        S: [r(t[2]), n[2]],
        R: [r(t[3]), n[3]],
      };
    };
    // Define 10 instrument types - last digit of seed (0-9) selects type
    // Each type has: t=name, g=gain envelope, f=filter envelope, p=pitch envelope,
    // o=max oscillators, w=available waveforms
    let iTypes = [
      // 0: pad - slow attack, sustained, soft
      {
        t: "pad",
        g: [[0.8, 0.5, 1, 0.8], [0, 1, 1, 0]],
        f: [[0.5, 0.3, 0.5, 0.5], [0, 1, 1, 0]],
        p: [[0.3, 0.2, 0.2, 0.3], [0, 1, 1, 0]],
        o: 4,
        w: Z.waveforms,
      },
      // 1: lead - medium attack, sustain, expressive
      {
        t: "lead",
        g: [[0.05, 0.2, 0.4, 0.3], [0, 1, 0.8, 0]],
        f: [[0.1, 0.3, 0.3, 0.2], [0.5, 1, 0.7, 0]],
        p: [[0.05, 0.1, 0.2, 0.1], [0, 1, 1, 0]],
        o: 3,
        w: ["sawtooth", "square", "triangle"],
      },
      // 2: bass - punchy, short attack, medium sustain
      {
        t: "bass",
        g: [[0.01, 0.1, 0.3, 0.2], [0, 1, 0.7, 0]],
        f: [[0.02, 0.15, 0.2, 0.1], [1, 0.5, 0.3, 0]],
        p: [[0.01, 0.05, 0.1, 0.05], [1, 0.5, 0.5, 0]],
        o: 2,
        w: ["sine", "sawtooth", "square", "triangle"],
      },
      // 3: key - piano-like, medium decay
      {
        t: "key",
        g: [[0.01, 0.3, 0.4, 0.3], [0, 1, 0.4, 0]],
        f: [[0.01, 0.2, 0.3, 0.2], [1, 0.6, 0.3, 0]],
        p: [[0.01, 0.1, 0.1, 0.1], [0, 1, 1, 0]],
        o: 3,
        w: Z.waveforms,
      },
      // 4: pluck - very short decay, no sustain
      {
        t: "pluck",
        g: [[0.005, 0.15, 0.05, 0.1], [0, 1, 0.1, 0]],
        f: [[0.005, 0.1, 0.05, 0.05], [1, 0.3, 0.1, 0]],
        p: [[0.005, 0.05, 0.02, 0.02], [0, 1, 1, 0]],
        o: 2,
        w: ["triangle", "sawtooth", "square"],
      },
      // 5: bell - sharp attack, long decay, metallic
      {
        t: "bell",
        g: [[0.001, 0.8, 0.5, 0.5], [0, 1, 0.3, 0]],
        f: [[0.001, 0.5, 0.4, 0.3], [1, 0.8, 0.5, 0]],
        p: [[0.001, 0.3, 0.2, 0.2], [0, 1, 1, 0]],
        o: 4,
        w: ["sine", "triangle"],
      },
      // 6: string - slow attack, sustained, bowed
      {
        t: "string",
        g: [[0.4, 0.2, 0.8, 0.4], [0, 1, 0.9, 0]],
        f: [[0.3, 0.2, 0.5, 0.3], [0.3, 1, 0.8, 0]],
        p: [[0.2, 0.1, 0.3, 0.2], [0, 1, 1, 0]],
        o: 4,
        w: ["sawtooth", "triangle"],
      },
      // 7: drum - very percussive, noise-based
      {
        t: "drum",
        g: [[0.005, 0.05, 0.1, 0.01], [1, 0.3, 0, 0]],
        f: [[0.005, 0.08, 0.05, 0.01], [1, 0.5, 0, 0]],
        p: [[0.005, 0.03, 0.02, 0.01], [1, 0.5, 0, 0]],
        o: 2,
        w: ["noise", "sine", "triangle"],
      },
      // 8: perc - percussive, pitched, tuned
      {
        t: "perc",
        g: [[0.001, 0.1, 0.15, 0.1], [1, 0.5, 0.1, 0]],
        f: [[0.001, 0.12, 0.1, 0.08], [1, 0.6, 0.2, 0]],
        p: [[0.001, 0.08, 0.05, 0.05], [1, 0.8, 0.5, 0]],
        o: 3,
        w: Z.waveforms,
      },
      // 9: fx - special effects, experimental
      {
        t: "fx",
        g: [[0.5, 0.5, 0.5, 0.5], [0.5, 1, 0.5, 0]],
        f: [[0.3, 0.4, 0.4, 0.3], [0.5, 1, 0.5, 0]],
        p: [[0.2, 0.3, 0.3, 0.2], [0.5, 1, 0.5, 0]],
        o: 5,
        w: ["noise", ...Z.waveforms],
      },
    ];
    // Select instrument type based on last digit of seed (0-9)
    let lastDigit = Math.abs(seed) % 10;
    let iType = iTypes[lastDigit];
    // Generate oscillators for the instrument
    for (let i = 0; i < Math.floor(r(iType.o) + 1); i++) {
      let waveform = iType.w[Math.floor(r(iType.w.length))];
      let nN = waveform != "noise";
      let hl = () => r(r() < 0.1 ? 100 : r() < 0.1 ? 10 : 1) + 0.1;
      oscs.push({
        waveform,
        adsrGain: gEnv(...iType.g),
        filterType: Z.filters[Math.floor(r(Z.filters.length))],
        adsrFilter: gEnv(...iType.f),
        filterQ: r(30),
        adsrFilterQ: gEnv(...iType.f),
        gLFO:
          r() < 0.1
            ? {
                type: Z.waveforms[Math.floor(r(Z.waveforms.length))],
                frequency: hl(),
                depth: r(1),
              }
            : false,
        fLFO:
          r() < 0.1 && nN
            ? {
                type: Z.waveforms[Math.floor(r(Z.waveforms.length))],
                frequency: hl(),
                depth: r(8000),
              }
            : false,
        pLFO:
          r() < 0.1 && nN
            ? {
                type: Z.waveforms[Math.floor(r(Z.waveforms.length))],
                frequency: hl(),
                depth: r(10) + 1,
              }
            : false,
        FM:
          r() < 0.3 && nN
            ? {
                type: Z.waveforms[Math.floor(r(Z.waveforms.length))],
                frequency: hl(),
                depth: r(100) + 1,
              }
            : false,
        pENV:
          r() < 0.05 && nN
            ? {
                amount: r(),
                ...gEnv(...iType.p),
              }
            : false,
        dist:
          r() < 0.05
            ? {
                curve: () => getDistCurve(r(500)),
                oversample: ["none", "2x", "4x"][Math.floor(r(3))],
              }
            : undefined,
        oct: Math.floor(r(4)) - 3,
        detune: r() < 0.2 ? 5 : 0,
        fx: {
          del:
            r() > 0.5
              ? {
                  time: r(0.5),
                  feedback: r(0.8),
                }
              : null,
          verb:
            r() > 0.5
              ? {
                  duration: r(3) + 0.1, // Max 3.1 seconds reverb
                  decay: r() * 0.5 + 0.5, // Faster decay (0.5-1.0)
                }
              : null,
        },
      });
    }
    return {
      type: iType.t,
      oscs: oscs,
    };
  },
  // Play a single note with a given instrument (one-shot, uses full ADSR)
  play: (note, instrument, gain = 1) => {
    let layer = {
      rootNote: 0,
      gain: 0.5 * gain,
      pan: 0,
      instrument: instrument,
    };
    Z.render(0, [note], layer, false);
  },
  // Start a sustained note (returns voiceId for noteOff)
  noteOn: (note, instrument, gain = 1) => {
    let layer = {
      rootNote: 0,
      gain: 0.5 * gain,
      pan: 0,
      instrument: instrument,
    };
    return Z.render(0, [note], layer, true);
  },
  // Instrument type names for reference
  instrumentTypes: ["pad", "lead", "bass", "key", "pluck", "bell", "string", "drum", "perc", "fx"],
};
