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
  // Master gain node for output (allows recording tap)
  masterGain: null,
  // Dynamics compressor to prevent clipping with polyphony
  compressor: null,
  // Track if audio has been warmed up
  warmedUp: false,
  // Maximum number of cached effect nodes before cleanup
  maxFxNodes: 50,
  // Initialize AudioContext
  init: () => {
    Z.ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Nodes belong to a context; a re-init leaves the old pair pointing at a
    // context nothing else uses, so they are rebuilt with everything else.
    Z.cutoffMod = null;
    Z.resMod = null;
    Z.masterGain = Z.ctx.createGain();
    // Insert compressor between master gain and destination to prevent clipping
    Z.compressor = Z.ctx.createDynamicsCompressor();
    Z.compressor.threshold.value = -12;
    Z.compressor.knee.value = 6;
    Z.compressor.ratio.value = 8;
    Z.compressor.attack.value = 0.003;
    Z.compressor.release.value = 0.15;
    Z.masterGain.connect(Z.compressor);
    Z.compressor.connect(Z.ctx.destination);
  },
  // Live filter modulation, in the units the two AudioParams it drives use:
  // cutoff in cents of detune (multiplicative -- the computed frequency of a
  // BiquadFilterNode is frequency * 2^(detune/1200)) and resonance in dB,
  // which is what Q already is for a lowpass.
  //
  // These exist because everything else about a note is scheduled at note-on.
  // A seed's filter envelope is written into the AudioParam the moment the
  // note starts, so there is no way to play the instrument -- only to trigger
  // it. Two constant sources connected into every filter give the one thing
  // that changes a note that is already sounding.
  cutoffMod: null,
  resMod: null,
  // Matches the plugin port's voice smoother, so the two sweep alike.
  modSmoothing: 0.012,
  // Set the live filter modulation. Applies to every sounding note and to
  // every note started afterwards, until it is set again.
  setFilterMod: (cutoffSemitones = 0, resonanceDb = 0) => {
    if (!Z.ctx) Z.init();
    Z.ensureFilterMod();
    let now = Z.aC.currentTime;
    // setTargetAtTime rather than a step: a filter coefficient jumped between
    // render quanta clicks.
    Z.cutoffMod.offset.setTargetAtTime(cutoffSemitones * 100, now, Z.modSmoothing);
    Z.resMod.offset.setTargetAtTime(resonanceDb, now, Z.modSmoothing);
  },
  // Creates the two constant sources on first use. Started at zero, so a
  // caller that never touches them changes nothing: summing 0 into detune and
  // into Q leaves both exactly where the envelope put them.
  ensureFilterMod: () => {
    if (Z.cutoffMod) return;
    Z.cutoffMod = Z.aC.createConstantSource();
    Z.cutoffMod.offset.value = 0;
    Z.cutoffMod.start();
    Z.resMod = Z.aC.createConstantSource();
    Z.resMod.offset.value = 0;
    Z.resMod.start();
  },
  // Drop a note's filters off the modulation buses once it has finished. A
  // connection from a running source keeps its destination alive, so leaving
  // these attached would retain every filter node ever created.
  releaseFilterMod: (filters) => {
    if (!filters || !Z.cutoffMod) return;
    filters.forEach((f) => {
      try { Z.cutoffMod.disconnect(f.detune); } catch (e) {}
      try { Z.resMod.disconnect(f.Q); } catch (e) {}
    });
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
    Z.ensureFilterMod();
  },
  // How many sounding voices run through each effect node. A node with a
  // count is carrying audio and must not be touched; one without is idle
  // and can go when the cache is over its limit.
  fxUse: {},
  // When each node was last routed through, as a running count of renders.
  // Object.keys does not return integer-like keys in insertion order, so
  // "oldest first" has to be tracked rather than assumed.
  fxLast: {},
  fxClock: 0,
  retainFx: (keys) => {
    Z.fxClock++;
    keys.forEach((k) => { Z.fxUse[k] = (Z.fxUse[k] || 0) + 1; Z.fxLast[k] = Z.fxClock; });
  },
  releaseFx: (keys) => {
    keys.forEach((k) => {
      if (!Z.fxUse[k]) return;
      if (--Z.fxUse[k] === 0) delete Z.fxUse[k];
    });
  },
  // Clean up old effect nodes to prevent memory exhaustion.
  //
  // Only idle nodes are removed. This used to take the oldest half
  // regardless, which cut the output path from under notes that were still
  // sounding: a song with eight instruments sat right at the limit and fell
  // silent every few bars. And without any removal at all, every new seed
  // that sounded left a convolver and a delay loop wired into the master
  // bus for good, each processing silence forever until the audio thread
  // could not keep up.
  cleanupFxNodes: () => {
    let keys = Object.keys(Z.fxNodes);
    if (keys.length <= Z.maxFxNodes) return;
    // Back down to the limit, least recently used idle nodes first. The
    // instruments a song is playing are used every bar and stay; the ones
    // rolled past are never used again and go.
    let idle = keys.filter((k) => !Z.fxUse[k]);
    idle.sort((a, b) => (Z.fxLast[a] || 0) - (Z.fxLast[b] || 0));
    let excess = keys.length - Z.maxFxNodes;
    for (let key of idle) {
      if (excess <= 0) break;
      let node = Z.fxNodes[key];
      if (node && node.disconnect) {
        try {
          node.disconnect();
        } catch (e) {
          // Node may already be disconnected
        }
      }
      delete Z.fxNodes[key];
      delete Z.fxLast[key];
      excess--;
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
        let dying = voice.filters;
        let dyingFx = voice.fxKeys;
        setTimeout(() => { Z.releaseFilterMod(dying); Z.releaseFx(dyingFx); },
                   Math.max(0, stopTime - now + 0.05) * 1000);
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
    // `sampleRate` as a bare global only exists in AudioWorkletGlobalScope, so
    // this threw a ReferenceError in a Window context. Read it from the context.
    let n = Z.sampleRate;
    let curve = new Float32Array(n);
    let deg = Math.PI / 180;
    for (let i = 0; i < n; i++) {
      let x = (i * 2) / n - 1;
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
  // `when` is an AudioContext time to start at, for scheduling ahead of the
  // clock. Everything below already derives from `now`, so one substitution
  // makes the whole graph land at the requested moment -- which is what a
  // sequencer needs: setTimeout jitters by milliseconds, and a tracker row
  // landing a few milliseconds late is audible as a flam.
  //
  // Omitted, it means "now", so every existing caller is unaffected.
  render: (noteOffset, notes, layer, sustained = false, when = null) => {
    if (notes.length == 0) return null;
    // Warm up audio context on first render
    Z.warmUp();
    // Clean up old effect nodes if cache is getting large
    Z.cleanupFxNodes();
    let rootNote = layer.rootNote + noteOffset;
    let oscs = [];
    let gains = [];
    let allNodes = [];
    // Every filter this render creates, so the modulation buses can be
    // detached from them once the note is done with.
    let filters = [];
    // Every effect node this render routes through, so they are known to be
    // in use until the note is done with.
    let fxKeys = [];
    let voiceGain = 1.0 / (notes.length * layer.instrument.oscs.length);
    let buf = 0; //0.005;
    let now = when !== null ? when : Z.aC.currentTime + buf;
    let finalStopTime = 0;
    let SR = Z.sampleRate;
    // Create and connect oscillators, filters, and effects for each note
    notes.forEach((note) => {
      let noteOscNodes = []; // Collect osc references for FM matrix wiring
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
        noteOscNodes.push({ osc, freq: oFreq, waveform: cnf.waveform });
        // Create gain node and apply ADSR envelope. A per-note release scale
        // is applied here rather than by editing the instrument, so the
        // instrument config -- which keys the effect-node cache -- is the
        // same for every note.
        let nGain = Z.aC.createGain();
        let gEnv = cnf.adsrGain;
        let rs = layer.releaseScale;
        if (rs && rs !== 1) gEnv = { ...gEnv, R: [gEnv.R[0] * rs, gEnv.R[1]] };
        if (sustained) {
          // For sustained notes, just do attack to sustain, hold there
          finalStopTime = Math.max(finalStopTime, Z.adsrSustain(nGain.gain, now, gEnv, layer.gain * voiceGain));
        } else {
          finalStopTime = Math.max(finalStopTime, Z.adsr(nGain.gain, now, gEnv, layer.gain * voiceGain));
        }
        gains.push({ gain: nGain, env: gEnv, max: layer.gain * voiceGain });
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
        // A per-note filter offset, in semitones. detune is multiplicative on
        // the computed frequency, the same thing the envelope scaling would
        // have been, and it leaves the instrument config untouched.
        if (layer.cutoff) nFilt.detune.value = layer.cutoff * 100;
        nFilt.Q.value = cnf.filterQ || 0;
        // Live modulation rides on top of whatever the envelope schedules:
        // connected inputs SUM with an AudioParam's automation, and detune is
        // applied multiplicatively to the result.
        Z.cutoffMod.connect(nFilt.detune);
        Z.resMod.connect(nFilt.Q);
        filters.push(nFilt);
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
        // Connect nodes: oscillator -> [shaper] -> filter -> gain -> panner
        // Shaping before the filter is deliberate: the filter then tames the
        // harmonics the shaper adds, which keeps affected seeds from turning harsh.
        if (cnf.dist) {
          let nShape = Z.aC.createWaveShaper();
          nShape.curve = Z.getDistCurve(cnf.dist.amount);
          nShape.oversample = cnf.dist.oversample || "none";
          osc.connect(nShape);
          nShape.connect(nFilt);
        } else {
          osc.connect(nFilt);
        }
        nFilt.connect(nGain);
        nGain.connect(nPan);
        // Create delay effect if specified (with dry/wet mix)
        let nDel, nDry, nVerb;
        if (!cnf?.fx?.del) {
          let nDelID = Z.id({ ...cnf, d: "0" });
          fxKeys.push(nDelID);
          nDel = Z.fxNodes[nDelID];
          if (!nDel) {
            nDel = Z.aC.createGain();
            Z.fxNodes[nDelID] = nDel; // Store the same node we use
          }
          nPan.connect(nDel);
        } else {
          let dC = cnf.fx.del;
          let dId = Z.id(dC);
          fxKeys.push(dId);
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
          // Create dry signal path with mix level
          let dryId = Z.id({ ...dC, dry: 1 });
          fxKeys.push(dryId);
          nDry = Z.fxNodes[dryId];
          if (!nDry) {
            nDry = Z.aC.createGain();
            nDry.gain.value = dC.mix ?? 1; // Default mix=1 (full dry signal)
            Z.fxNodes[dryId] = nDry;
          }
          nPan.connect(nDel); // Wet path (delayed)
          nPan.connect(nDry); // Dry path (immediate)
        }
        // Create reverb effect if specified
        if (!cnf?.fx?.verb) {
          let noId = Z.id({ ...cnf, r: "0" });
          fxKeys.push(noId);
          nVerb = Z.fxNodes[noId];
          if (!nVerb) {
            nVerb = Z.aC.createGain();
            Z.fxNodes[noId] = nVerb; // Store the same node we use
          }
        } else {
          let rC = cnf.fx.verb;
          let rId = Z.id(rC);
          fxKeys.push(rId);
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
        // Connect Delay -> Reverb -> Output (via master gain)
        nDel.connect(nVerb);
        if (nDry) nDry.connect(nVerb); // Dry path also goes to reverb
        nVerb.connect(Z.masterGain);
        oscs.push(osc);
      });
      // Wire FM matrix connections between oscillators for this note
      let fmMtx = layer.instrument.fmMatrix;
      let fmDel = layer.instrument.fmDelays;
      if (fmMtx) {
        for (let s = 0; s < noteOscNodes.length; s++) {
          if (!fmMtx[s]) continue;
          for (let t = 0; t < noteOscNodes.length; t++) {
            let amt = fmMtx[s][t];
            if (!amt) continue;
            if (noteOscNodes[s].waveform === "noise" || noteOscNodes[t].waveform === "noise") continue;
            let fmG = Z.aC.createGain();
            // Gain scales modulator amplitude - frequency-relative for consistent FM across octaves
            // amt=1 gives ±20% frequency deviation, amt=0.5 gives ±10%, etc.
            fmG.gain.value = amt * noteOscNodes[t].freq * 0.2;
            // Add delay to break feedback loops (default 1ms if not specified)
            let delayTime = fmDel?.[s]?.[t] ?? 0.001;
            let fmDelay = Z.aC.createDelay(0.1); // Max 100ms
            fmDelay.delayTime.value = delayTime;
            noteOscNodes[s].osc.connect(fmDelay);
            fmDelay.connect(fmG);
            fmG.connect(noteOscNodes[t].osc.frequency);
          }
        }
      }
    });
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
      Z.retainFx(fxKeys);
      Z.activeVoices[voiceId] = { oscs, gains, allNodes, filters, fxKeys };
      return voiceId;
    }
    // A one-shot has no noteOff to hang the cleanup off, so it is timed from
    // the stop time the envelopes already produced, with a margin.
    Z.retainFx(fxKeys);
    setTimeout(() => { Z.releaseFilterMod(filters); Z.releaseFx(fxKeys); },
               Math.max(0, finalStopTime - Z.aC.currentTime + 0.25) * 1000);
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
  // Release a sustained note by voice ID.
  // `when` is an AudioContext time, like render's: a sequencer that queues
  // notes ahead of the clock has to queue their ends ahead too, or every
  // note is cut short by exactly the lookahead. Omitted, it means now.
  noteOff: (voiceId, when = null) => {
    let voice = Z.activeVoices[voiceId];
    if (!voice) return;
    let now = Z.aC.currentTime;
    let at = when !== null ? Math.max(when, now) : now;
    let maxRelease = 0.015;
    // Apply release envelope to all gain nodes
    voice.gains.forEach(({ gain, env }) => {
      // Use instrument's release time, with small minimum to prevent clicks
      let r = Math.max(env.R[0], 0.015);
      let p = gain.gain;
      // Hold whatever the envelope has reached at `at` and ramp down from
      // there. cancelAndHoldAtTime is the only way to read a value in the
      // future; where it is missing, the value now is the same thing when
      // `at` is now, and the nearest thing available when it is not.
      if (p.cancelAndHoldAtTime) {
        p.cancelAndHoldAtTime(at);
      } else {
        p.cancelScheduledValues(at);
        p.setValueAtTime(p.value, at);
      }
      p.linearRampToValueAtTime(0, at + r);
      maxRelease = Math.max(maxRelease, r);
    });
    // Stop all oscillators after release completes
    let stopTime = at + maxRelease + 0.05;
    voice.oscs.forEach((osc) => {
      try { osc.stop(stopTime); } catch (e) {}
    });
    voice.allNodes.forEach((node) => {
      try { node.stop(stopTime); } catch (e) {}
    });
    setTimeout(() => { Z.releaseFilterMod(voice.filters); Z.releaseFx(voice.fxKeys); },
               Math.max(0, stopTime - now + 0.05) * 1000);
    delete Z.activeVoices[voiceId];
  },
  // Generate a random instrument based on a seed
  getInstrument: (seed) => {
    seed = parseInt(seed);
    let r = Z.m32(seed);
    // Side stream for the distortion curve amount. Drawing it from `r` would
    // shift every subsequent oscillator and change ~5% of all existing seeds
    // structurally. Same technique as the FM matrix below (seed + 9999).
    let dR = Z.m32(seed + 7777);
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
    // o=max oscillators, w=available waveforms, pe=pitch envelope chance
    let iTypes = [
      // 0: pad - slow attack, sustained, soft
      {
        t: "pad",
        g: [[0.8, 0.5, 1, 0.8], [1, 0.8, 0.6, 0]],
        f: [[0.5, 0.3, 0.5, 0.5], [1, 0.8, 0.6, 0.6]],
        p: [[0.3, 0.2, 0.2, 0.3], [0.1, 0.8, 0.6, 0.2]],
        pe: 0.05,
        o: 4,
        w: Z.waveforms,
      },
      // 1: lead - medium attack, sustain, expressive
      {
        t: "lead",
        g: [[0.05, 0.2, 0.4, 0.3], [1, 0.8, 0.6, 0]],
        f: [[0.1, 0.3, 0.3, 0.2], [0.5, 1, 0.7, 0.3]],
        p: [[0.05, 0.1, 0.2, 0.1], [0.2, 0.8, 0.5, 0.15]],
        pe: 0.05,
        o: 3,
        w: ["sawtooth", "square", "triangle"],
      },
      // 2: bass - punchy, short attack, medium sustain
      {
        t: "bass",
        g: [[0.01, 0.1, 0.3, 0.2], [1, 0.7, 0.4, 0]],
        f: [[0.02, 0.15, 0.2, 0.1], [1, 0.5, 0.3, 0.2]],
        p: [[0.01, 0.05, 0.1, 0.05], [1, 0.5, 0.5, 0.2]],
        pe: 0.1,
        o: 2,
        w: ["sine", "sawtooth", "square", "triangle"],
      },
      // 3: key - piano-like, medium decay
      {
        t: "key",
        g: [[0.01, 0.3, 0.4, 0.3], [1, 0.6, 0.3, 0]],
        f: [[0.01, 0.2, 0.3, 0.2], [1, 0.6, 0.3, 0.2]],
        p: [[0.01, 0.1, 0.1, 0.1], [0.15, 0.6, 0.3, 0.1]],
        pe: 0.05,
        o: 3,
        w: Z.waveforms,
      },
      // 4: pluck - very short decay, no sustain
      {
        t: "pluck",
        g: [[0.005, 0.15, 0.05, 0.1], [1, 0.3, 0.1, 0]],
        f: [[0.005, 0.1, 0.05, 0.05], [1, 0.3, 0.1, 0.1]],
        p: [[0.005, 0.05, 0.02, 0.02], [0.2, 0.3, 0.1, 0.1]],
        pe: 0.2,
        o: 2,
        w: ["triangle", "sawtooth", "square"],
      },
      // 5: bell - sharp attack, long decay, metallic
      {
        t: "bell",
        g: [[0.001, 0.8, 0.5, 0.5], [1, 0.5, 0.2, 0]],
        f: [[0.001, 0.5, 0.4, 0.3], [1, 0.8, 0.5, 0.3]],
        p: [[0.001, 0.3, 0.2, 0.2], [0.15, 0.5, 0.2, 0.1]],
        pe: 0.2,
        o: 4,
        w: ["sine", "triangle"],
      },
      // 6: string - slow attack, sustained, bowed
      {
        t: "string",
        g: [[0.4, 0.2, 0.8, 0.4], [1, 0.9, 0.7, 0]],
        f: [[0.3, 0.2, 0.5, 0.3], [0.3, 1, 0.8, 0.5]],
        p: [[0.2, 0.1, 0.3, 0.2], [0.1, 0.9, 0.7, 0.3]],
        pe: 0.15,
        o: 4,
        w: ["sawtooth", "triangle"],
      },
      // 7: drum - very percussive, noise-based
      {
        t: "drum",
        g: [[0.005, 0.05, 0.1, 0.01], [1, 0.3, 0, 0]],
        f: [[0.005, 0.08, 0.05, 0.01], [1, 0.5, 0, 0]],
        p: [[0.005, 0.03, 0.02, 0.01], [1, 0.5, 0, 0]],
        pe: 0.5,
        o: 2,
        w: ["noise", "sine", "triangle"],
      },
      // 8: perc - percussive, pitched, tuned
      {
        t: "perc",
        g: [[0.001, 0.1, 0.15, 0.1], [1, 0.5, 0.1, 0]],
        f: [[0.001, 0.12, 0.1, 0.08], [1, 0.6, 0.2, 0.1]],
        p: [[0.001, 0.08, 0.05, 0.05], [1, 0.8, 0.5, 0.2]],
        pe: 0.4,
        o: 3,
        w: Z.waveforms,
      },
      // 9: fx - special effects, experimental
      {
        t: "fx",
        g: [[0.5, 0.5, 0.5, 0.5], [0.5, 1, 0.5, 0]],
        f: [[0.3, 0.4, 0.4, 0.3], [0.5, 1, 0.5, 0.5]],
        p: [[0.2, 0.3, 0.3, 0.2], [0.5, 1, 0.5, 0.5]],
        pe: 0.3,
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
          r() < iType.pe && nN
            ? {
                amount: r(),
                ...gEnv(...iType.p),
              }
            : false,
        dist:
          r() < 0.05
            ? {
                // amount comes from the side stream; the r() test above and the
                // r(3) draw below stay on the main stream, exactly where they were
                amount: dR(500),
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
    // FM Matrix generation — uses separate PRNG to avoid changing existing seeds
    let fmMatrix = null;
    if (oscs.length > 1) {
      let fmR = Z.m32(seed + 9999);
      let firstDigit = parseInt(String(Math.abs(seed))[0]) || 0;
      let fmProb = firstDigit / 10; // 1=10%, 9=90%, 0=0%
      if (fmR() < fmProb) {
        let n = oscs.length;
        fmMatrix = Array.from({ length: n }, () => new Array(n).fill(0));
        // At least one modulation route, then 50% chance to add more
        do {
          let src = Math.floor(fmR(n));
          let tgt = Math.floor(fmR(n));
          if (fmMatrix[src][tgt] === 0) {
            fmMatrix[src][tgt] = fmR(2) - 1; // Range: -1 to 1
          }
        } while (fmR() < 0.5);
      }
    }
    return {
      type: iType.t,
      fmMatrix: fmMatrix,
      oscs: oscs,
    };
  },
  // Play a single note with a given instrument (one-shot, uses full ADSR).
  // `when` is an AudioContext time; omit it for "now".
  // `opts.cutoff` shifts this note's filter in semitones and `opts.release`
  // scales its release time; both apply to this note alone and leave the
  // instrument as it was.
  play: (note, instrument, gain = 1, when = null, opts = {}) => {
    let layer = {
      rootNote: 0,
      gain: 0.5 * gain,
      pan: 0,
      instrument: instrument,
      cutoff: opts.cutoff || 0,
      releaseScale: opts.release || 1,
    };
    Z.render(0, [note], layer, false, when);
  },
  // Start a sustained note (returns voiceId for noteOff)
  noteOn: (note, instrument, gain = 1, when = null, opts = {}) => {
    let layer = {
      rootNote: 0,
      gain: 0.5 * gain,
      pan: 0,
      instrument: instrument,
      cutoff: opts.cutoff || 0,
      releaseScale: opts.release || 1,
    };
    return Z.render(0, [note], layer, true, when);
  },
  // Instrument type names for reference
  instrumentTypes: ["pad", "lead", "bass", "key", "pluck", "bell", "string", "drum", "perc", "fx"],
};
