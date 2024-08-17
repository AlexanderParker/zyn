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
  // Initialize AudioContext
  init: () => {
    Z.ctx = new (window.AudioContext || window.webkitAudioContext)();
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
    ctx.setValueAtTime(A[1], t);
    lr(A[1] * max, t + A[0]);
    lr(D[1] * max, t + A[0] + D[0]);
    lr(S[1] * max, t + A[0] + D[0] + S[0]);
    lr(R[1] * max, tEnd);
    return tEnd;
  },
  // Render audio for given notes and layer
  render: (noteOffset, notes, layer) => {
    if (notes.length == 0) return;
    let rootNote = layer.rootNote + noteOffset;
    let oscs = [];
    let nGains = [];
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
        if (cnf.waveform == "noise") {
          osc = Z.aC.createBufferSource();
          if (!Z.noiseBuffer) {
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
          osc = Z.aC.createOscillator();
          osc.type = cnf.waveform || "sine";
          osc.frequency.value = oFreq;
        }
        let nGain = Z.aC.createGain();
        finalStopTime = Math.max(finalStopTime, Z.adsr(nGain.gain, now, cnf.adsrGain, layer.gain * voiceGain));
        let gLFO = cnf.gLFO ? Z.aC.createOscillator() : null;
        if (gLFO) {
          let gLFOg = Z.aC.createGain();
          gLFO.type = cnf.gLFO.type || "sine";
          gLFO.frequency.value = cnf.gLFO.frequency || 1;
          gLFOg.gain.value = cnf.gLFO.depth || 0;
          gLFO.connect(gLFOg);
          gLFOg.connect(nGain.gain);
          gLFO.start(now);
          gLFO.stop(finalStopTime);
        }
        let nFilt = Z.aC.createBiquadFilter();
        nFilt.Q.value = cnf.filterQ || 0;
        finalStopTime = Math.max(finalStopTime, Z.adsr(nFilt.frequency, now, cnf.adsrFilter, 20000), Z.adsr(nFilt.Q, now, cnf.adsrFilterQ, 30));
        let fLFO = cnf.fLFO ? Z.aC.createOscillator() : null;
        if (fLFO) {
          let fLFOg = Z.aC.createGain();
          fLFO.type = cnf.fLFO.type || "sine";
          fLFO.frequency.value = cnf.fLFO.frequency || 1;
          fLFOg.gain.value = cnf.fLFO.depth || 0;
          fLFO.connect(fLFOg);
          fLFOg.connect(nFilt.frequency);
          fLFO.start(now);
          fLFO.stop(finalStopTime);
        }
        if (cnf.pENV && cnf.waveform != "noise") {
          finalStopTime = Math.max(finalStopTime, Z.adsr(osc.frequency, now, cnf.pENV, oFreq * cnf.pENV.amount || 0));
        }
        let pLFO = cnf.waveform !== "noise" && cnf.pLFO ? Z.aC.createOscillator() : null;
        if (pLFO) {
          let pLFOg = Z.aC.createGain();
          pLFO.type = cnf.pLFO.type || "sine";
          pLFO.frequency.value = cnf.pLFO.frequency || 1;
          pLFOg.gain.value = cnf.pLFO.depth * oFreq || 0;
          pLFO.connect(pLFOg);
          pLFOg.connect(osc.frequency);
          pLFO.start(now);
          pLFO.stop(finalStopTime);
        }
        if (cnf.FM) {
          let FM = Z.aC.createOscillator();
          let FMGain = Z.aC.createGain();
          FM.type = cnf.FM.type || "sine";
          FM.frequency.value = Math.min(Math.max(cnf.FM.frequency * oFreq || 1, -22050), 22050);
          FMGain.gain.value = cnf.FM.depth || 0;
          FM.connect(FMGain);
          FMGain.connect(osc.frequency);
          FM.start(now);
          FM.stop(finalStopTime);
        }
        let nPan = Z.aC.createStereoPanner();
        if (typeof layer.pan == "function") {
          nPan.pan.setValueAtTime(layer.pan(layer) || 0, now);
        } else {
          nPan.pan.setValueAtTime(layer.pan || 0, now);
        }
        osc.connect(nFilt);
        nFilt.connect(nGain);
        nGain.connect(nPan);
        let nDel, nVerb;
        if (!cnf?.fx?.del) {
          let nDelID = Z.id({ ...cnf, d: "0" });
          nDel = Z.fxNodes[nDelID];
          if (!nDel) {
            nDel = Z.aC.createGain();
            Z.fxNodes[nDelID] = Z.aC.createGain();
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
        if (!cnf?.fx?.verb) {
          let noId = Z.id({ ...cnf, r: "0" });
          nVerb = Z.fxNodes[noId];
          if (!nVerb) {
            nVerb = Z.aC.createGain();
            Z.fxNodes[noId] = Z.aC.createGain();
          }
        } else {
          let rC = cnf.fx.verb;
          let rId = Z.id(rC);
          nVerb = Z.fxNodes[rId];
          if (!nVerb) {
            nVerb = Z.aC.createConvolver();
            let gVerb = Z.aC.createGain();
            let length = SR * rC.duration;
            let imp = Z.aC.createBuffer(2, length, SR);
            let impL = imp.getChannelData(0);
            let impR = imp.getChannelData(1);
            for (let i = 0; i < length; i++) {
              impL[i] = impR[i] = Z.randSample() * Math.pow(1 - i / length, rC.decay);
            }
            nVerb.buffer = imp;
            gVerb.gain.value = 1;
            Z.fxNodes[rId] = gVerb;
          }
        }
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
    // Start and stop oscillators
    oscs.forEach((osc) => {
      osc.start(now);
      osc.stop(finalStopTime);
    });
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
    let a = [2, 2, 1, 2];
    let b = [0, 1, 1, 0];
    let c = [0.1, 0.2, 0.3, 0.5];
    // Define instrument types (this could use more work / experimentation)
    let iTypes = [
      {
        t: "pad",
        g: [a, b],
        f: [a, b],
        p: [a, b],
        o: 6,
        w: Z.waveforms,
      },
      {
        t: "key",
        g: [c, b],
        f: [c, b],
        p: [c, b],
        o: 4,
        w: Z.waveforms,
      },
      {
        t: "drum",
        g: [
          [0.1, 0.02, 0.5, 0],
          [1, 0.3, 0, 0],
        ],
        f: [
          [0.1, 0.11, 0.2, 0],
          [1, 1, 0, 0],
        ],
        p: [
          [0.25, 0.25, 0.2, 0],
          [1, 1, 0, 0],
        ],
        o: 2,
        w: ["noise", ...Z.waveforms],
      },
    ];
    // Select a random instrument type (we should probably add this as a parameter too)
    let iType = iTypes[Math.floor(r(iTypes.length))];
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
                  duration: hl(),
                  decay: r(),
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
  // Play a single note with a given instrument
  play: (note, instrument) => {
    let layer = {
      progression: [note],
      progressionStretch: 1,
      poly: 1,
      polyDir: "start",
      rootNote: 0,
      gain: 0.5,
      pan: 0,
      instrument: instrument,
    };
    Z.render(0, [note], layer);
  },
};
