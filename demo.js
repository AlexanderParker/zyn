const DEFAULT_PRESETS = [{"name":"Chime","seed":478693073,"type":3,"volume":3.02},{"name":"Brushed Cymbal","seed":4231611057,"type":7,"volume":3.38},{"name":"Distant Steel Drum","seed":647414438,"type":8,"volume":3.28},{"name":"Low Tuba","seed":3508761276,"type":6,"volume":5,"octave":1},{"name":"Metal Block","seed":1006061878,"type":8,"volume":2.91},{"name":"Distant Pan Flute","seed":3073154778,"type":8,"volume":5},{"name":"Plink","seed":791989228,"type":8,"volume":2.6},{"name":"Organish","seed":3577246970,"type":0,"volume":2.18,"octave":1},{"name":"Slow Saw","seed":2903551290,"type":0,"octave":0,"volume":4.27},{"name":"Machine Room","seed":1899734110,"type":0,"volume":2.91},{"name":"Forest","seed":3703184240,"type":0,"octave":3,"volume":4.53},{"name":"Icy Surface","seed":177070610,"type":0,"octave":3,"volume":2.44},{"name":"Reesey","seed":2802378710,"type":0,"octave":1,"volume":4.79},{"name":"Bright","seed":2471452471,"type":1,"octave":2,"volume":5},{"name":"Fluteish","seed":4185492621,"type":1,"octave":0,"volume":1.51},{"name":"Sticky","seed":1997576022,"type":2,"octave":1,"volume":1.92},{"name":"Space Bounce","seed":1312145262,"type":2,"octave":0,"volume":3.49},{"name":"Torn","seed":4157822792,"type":2,"octave":0,"volume":4.06},{"name":"Riser FX","seed":999169202,"type":2,"octave":-2,"volume":3.49},{"name":"Tooba","seed":3207311602,"type":2,"octave":0,"volume":5},{"name":"Low Pulse","seed":4119084792,"type":2,"octave":0,"volume":3.23},{"name":"Burrr","seed":1946705502,"type":2,"octave":1,"volume":1.71},{"name":"Mysterious Flute","seed":125033892,"type":2,"octave":1,"volume":4.48},{"name":"Growl","seed":1475503702,"type":2,"octave":2,"volume":2.18},{"name":"Something Atmospheric","seed":1621326803,"type":3,"octave":1,"volume":5},{"name":"Bottle","seed":1205717743,"type":3,"octave":3,"volume":3.49},{"name":"Airy","seed":2975351643,"type":3,"octave":1,"volume":3.64},{"name":"Metal Screeching","seed":1290867423,"type":3,"octave":3},{"name":"Happy Note","seed":834173283,"type":3,"octave":2,"volume":3.02},{"name":"Bowed Windchime","seed":3899372973,"type":3,"octave":2,"volume":3.54},{"name":"Bouncing Lead","seed":439588263,"type":3,"octave":2,"volume":3.17},{"name":"Vibrant","seed":3456065433,"type":3,"octave":2,"volume":1.77},{"name":"BrAssy","seed":1903295973,"type":3,"octave":0,"volume":1.66},{"name":"Frog Cave","seed":974930234,"type":4,"octave":1,"volume":2.5},{"name":"Chirp!","seed":1596900054,"type":4,"octave":1,"volume":1.71},{"name":"Simple Saw","seed":487383414,"type":4,"octave":1,"volume":2.34},{"name":"Echo Plink","seed":1880275504,"type":4,"octave":1,"volume":2.5},{"name":"Moody Pad","seed":3249553214,"type":4,"octave":1,"volume":5},{"name":"Woof","seed":1494359974,"type":4,"octave":1,"volume":2.18},{"name":"Distant Alarm FX","seed":258062945,"type":5,"octave":1,"volume":3.12},{"name":"Jingle Pop","seed":11692995,"type":5,"octave":3,"volume":2.6},{"name":"Xylophobe","seed":146036665,"type":5,"octave":2,"volume":3.33},{"name":"Slowbell","seed":2775190395,"type":5,"octave":1,"volume":3.43},{"name":"Spooky Bell","seed":220428035,"type":5,"octave":1,"volume":1.61},{"name":"Slide Bell","seed":3298940435,"type":5,"octave":1,"volume":1.56},{"name":"Whisper","seed":2416549245,"type":5,"octave":1,"volume":3.02},{"name":"Soft","seed":2275909786,"type":6,"octave":3,"volume":3.17},{"name":"Cosmic Scenery","seed":3820606356,"type":6,"octave":1,"volume":3.17},{"name":"Hollow","seed":1311445996,"type":6,"octave":1,"volume":2.34},{"name":"Tunnel Tunes","seed":1672631246,"type":6,"octave":1,"volume":2.08},{"name":"Clean Saw","seed":3503739726,"type":6,"octave":1,"volume":2.7},{"name":"Another Bell Thing","seed":2191083686,"type":6,"octave":2,"volume":2.76},{"name":"A bit brassy","seed":3465917626,"type":6,"octave":1,"volume":3.17},{"name":"Faint block of wood","seed":3860572117,"type":7,"octave":2,"volume":5},{"name":"Brushy","seed":4044206767,"type":7,"octave":0,"volume":3.54},{"name":"Blocky block","seed":793333747,"type":7,"octave":2,"volume":1.71},{"name":"Wibble","seed":1804795437,"type":7,"octave":2,"volume":2.86},{"name":"Trash hat","seed":1812995347,"type":7,"octave":2,"volume":2.29},{"name":"Blip Kick","seed":1671058337,"type":7,"octave":2,"volume":4.21},{"name":"Blop","seed":1582893757,"type":7,"octave":1,"volume":4.21},{"name":"Tick","seed":4030513007,"type":7,"octave":1,"volume":1.98},{"name":"Low brush","seed":168631047,"type":7,"octave":1,"volume":4.79},{"name":"Echoey blocks","seed":2410507547,"type":7,"octave":2,"volume":2.55},{"name":"Hitty hat","seed":1224382097,"type":7,"octave":2,"volume":2.13},{"name":"Pop","seed":3523971957,"type":7,"octave":1,"volume":1.1},{"name":"Echo Keys","seed":62672728,"type":8,"octave":1,"volume":2.86},{"name":"Chopsticks in space","seed":3591657978,"type":8,"octave":1,"volume":4.63},{"name":"Zip","seed":3646906478,"type":8,"octave":1,"volume":3.02},{"name":"Quack Lead","seed":3216176018,"type":8,"octave":1,"volume":2.29},{"name":"Bell Pad","seed":4209125248,"type":8,"octave":1,"volume":4.28},{"name":"Bell Bass","seed":1194888198,"type":8,"octave":2,"volume":4.42},{"name":"Tinkerbells","seed":3511194118,"type":8,"octave":1,"volume":2.13},{"name":"Spider Bell","seed":3517159268,"type":8,"octave":1,"volume":3.8},{"name":"Space Theme","seed":2770483119,"type":9,"octave":1,"volume":3.28},{"name":"Venting","seed":1188631729,"type":9,"octave":0,"volume":2.03},{"name":"Wobbler","seed":1269970899,"type":9,"octave":-1,"volume":3.69},{"name":"Sky Whales","seed":2452561269,"type":9,"octave":2,"volume":4.42},{"name":"Ringing Alarm","seed":3828508999,"type":9,"octave":2,"volume":2.91},{"name":"Spray","seed":2337955819,"type":9,"octave":2,"volume":3.12},{"name":"Panic","seed":413693269,"type":9,"octave":-2,"volume":2.6},{"name":"Wonky Radio","seed":12797009,"type":9,"octave":0},{"name":"Graveyard Shift","seed":4225477799,"type":9,"octave":0,"volume":3.17},{"name":"Alien Invasion","seed":1642584029,"type":9,"octave":-1},{"name":"Nee naw :(","seed":323807379,"type":9,"octave":0,"volume":2.55},{"name":"Fanfare","seed":888821021,"type":1,"octave":2,"volume":4.68},{"name":"Clicky Bass","seed":1867196894,"type":4,"octave":0,"volume":1.6},{"name":"Echo bass","seed":274188674,"type":4,"octave":-1,"volume":3.1},{"name":"High Strung","seed":509434356,"type":6,"octave":3,"volume":4.17},{"name":"Sub Thing","seed":2765367605,"type":5,"octave":0,"volume":4.71},{"name":"Blimp","seed":3818465904,"type":4,"octave":0,"volume":1},{"name":"Chip","seed":909507278,"type":8,"octave":0,"volume":1},{"name":"Broken Clock","seed":351396565,"type":5,"octave":2,"volume":1},{"name":"Crystals","seed":3642840588,"type":8,"octave":1,"volume":2.44},{"name":"Yonder Glade","seed":972077410,"type":0,"octave":3,"volume":1},{"name":"Sewer Pipes","seed":3656672588,"type":8,"octave":2,"volume":2.85},{"name":"Hi hat","seed":2218903937,"type":7,"octave":0,"volume":4.01},{"name":"Victory","seed":259410201,"type":1,"octave":0,"volume":4.87},{"name":"Rolling","seed":4021332303,"type":3,"octave":-1,"volume":2.6},{"name":"Deep hit","seed":1611221502,"type":2,"octave":-1,"volume":3.65},{"name":"Zombie Playground","seed":1098400960,"type":0,"octave":1,"volume":1},{"name":"Dull Thud","seed":3574705757,"type":7,"octave":-2,"volume":4.23},{"name":"Dirty CPU","seed":180069256,"type":6,"octave":2,"volume":1.67},{"name":"Jump","seed":3095350768,"type":8,"octave":2,"volume":1},{"name":"Layers","seed":3185116091,"type":1,"octave":-1,"volume":2.37},{"name":"Space Organ","seed":3691103581,"type":1,"octave":1,"volume":3.17},{"name":"The Deep","seed":1899475861,"type":1,"octave":0,"volume":1.96},{"name":"Basic","seed":185045751,"type":1,"octave":0,"volume":1.83},{"name":"Tangy","seed":2360196101,"type":1,"octave":0,"volume":1},{"name":"Pretty","seed":3140249671,"type":1,"octave":3,"volume":2.76},{"name":"Hollow Streets","seed":1455000701,"type":1,"octave":2,"volume":4.39},{"name":"Sawn Again","seed":3055857821,"type":1,"octave":1,"volume":2.08},{"name":"Phased BASS","seed":3648134941,"type":1,"octave":-2,"volume":1},{"name":"Haunting","seed":2126128071,"type":1,"octave":0,"volume":1},{"name":"Wah Wah","seed":3423244941,"type":1,"octave":2,"volume":2.12},{"name":"Burnt Reeses","seed":3165769041,"type":1,"octave":-2,"volume":1}];

const ZynDemo = {
  randInstrumentSeed: 0,
  randInstrument: {},
  activePresetIndex: null, // Index of currently loaded preset, null if manual
  volume: 1.0,            // Volume 0-5 (synced between keyboard slider and preset)
  activeNotes: {},  // Track active voiceIds by note number
  midiNotes: {},    // Track MIDI note voiceIds, keyed by "channel_note"
  sustainPedal: {},     // Per-channel sustain pedal state
  sustainedNotes: {},   // Notes held by sustain pedal, keyed by "channel_note"
  sostenutoPedal: {},   // Per-channel sostenuto pedal state
  sostenutoNotes: {},   // Notes held by sostenuto pedal, keyed by "channel_note"
  softPedal: {},        // Per-channel soft pedal state (una corda)
  softPedalAmount: 0.5, // Volume multiplier when soft pedal is pressed
  channels: new Array(16).fill(null), // Per-channel instrument assignments
  activeChannel: 0,  // Which channel (0-15) is currently active for keyboard/editing
  forceRouteToActive: false, // When true, all MIDI input routes to active channel
  channelPresets: [],  // Saved channel configuration presets
  activityTimeouts: {},  // Track timeout IDs for activity light fade
  // Recording state
  isRecordingArmed: false,  // Waiting for first note to start recording
  isRecording: false,       // Currently recording
  mediaRecorder: null,
  recordedChunks: [],
  recordingStream: null,
  clips: [],                // Array of { blob, url, name, saved } - saved means persisted to localStorage
  clipCounter: 0,
  maxStorageMB: 5,          // Conservative localStorage limit (updated on init if Storage API available)
  recordingSizeInterval: null,  // Interval for updating recording size display
  recordingStartTime: null,     // Timestamp when recording started
  presets: [],      // User presets from localStorage
  typeNames: ["Pad", "Lead", "Bass", "Key", "Pluck", "Bell", "String", "Drum", "Perc", "FX"],
  // Oscilloscope state
  scopeEnabled: true,
  scopeAnimId: null,
  analyserL: null,
  analyserR: null,
  scopeSplitter: null,

  init() {
    if (!Z.ctx) Z.init();
    this.queryStorageQuota();
    this.loadPresets();
    this.loadChannelPresets();
    this.loadClips();
    this.attachEventListeners();
    this.loadStateAndUpdateInstrument();
    this.setupCollapsible();
    this.setupTabs();
    this.createPianoKeyboard();
    this.renderPresetAccordion();
    this.initChannels();
    this.renderChannelPresets();
    // Start oscilloscope
    this.initScope();
    this.drawScope();
    document.getElementById("scopeToggle").classList.remove("btn-secondary");
    document.getElementById("scopeToggle").classList.add("btn-info");
    // Auto-enable MIDI if previously enabled
    if (localStorage.getItem("zynMidiEnabled") === "true") {
      this.initMIDI();
    }
    // Restore force-route setting
    if (localStorage.getItem("zynForceRoute") === "true") {
      this.forceRouteToActive = true;
      document.getElementById("forceRouteToggle").checked = true;
    }
    // Warm up audio on first user interaction to eliminate delay
    const warmUpOnce = () => {
      Z.warmUp();
      document.removeEventListener("click", warmUpOnce);
      document.removeEventListener("keydown", warmUpOnce);
    };
    document.addEventListener("click", warmUpOnce);
    document.addEventListener("keydown", warmUpOnce);
    // Warn about unsaved clips on page unload
    window.addEventListener("beforeunload", (e) => {
      if (this.hasUnsavedClips()) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    });
  },

  // MIDI Support
  initMIDI() {
    document.getElementById("enableMidiButton").style.display = "none";
    document.getElementById("midiStatusWrapper").style.display = "inline-flex";
    localStorage.setItem("zynMidiEnabled", "true");
    this.midiEnabled = true;
    this.updateMIDIStatus("Checking...", false);
    if (!navigator.requestMIDIAccess) {
      this.updateMIDIStatus("Not supported (use Chrome/Edge)", false);
      return;
    }
    navigator.requestMIDIAccess({ sysex: false }).then(
      (midiAccess) => {
        this.midiAccess = midiAccess;
        this.connectMIDIInputs();
        midiAccess.onstatechange = () => this.connectMIDIInputs();
      },
      (err) => {
        console.log("MIDI access denied:", err);
        this.updateMIDIStatus("Access denied", false);
      }
    );
  },

  disableMIDI() {
    this.midiEnabled = false;
    localStorage.setItem("zynMidiEnabled", "false");
    // Disconnect MIDI inputs
    if (this.midiAccess) {
      for (const input of this.midiAccess.inputs.values()) {
        input.onmidimessage = null;
      }
      this.midiAccess.onstatechange = null;
      this.midiAccess = null;
    }
    // Release any held MIDI notes
    Object.keys(this.midiNotes).forEach((key) => {
      Z.noteOff(this.midiNotes[key]);
    });
    this.midiNotes = {};
    Object.keys(this.sustainedNotes).forEach((key) => {
      Z.noteOff(this.sustainedNotes[key]);
    });
    this.sustainedNotes = {};
    this.sostenutoNotes = {};
    this.sustainPedal = {};
    this.sostenutoPedal = {};
    this.softPedal = {};
    // Show enable button, hide status
    document.getElementById("enableMidiButton").style.display = "";
    document.getElementById("midiStatusWrapper").style.display = "none";
  },

  connectMIDIInputs() {
    const inputs = Array.from(this.midiAccess.inputs.values());
    if (inputs.length === 0) {
      this.updateMIDIStatus("No devices", false);
      return;
    }
    let connectedNames = [];
    for (const input of inputs) {
      input.onmidimessage = (msg) => this.handleMIDIMessage(msg);
      if (input.state === "connected") {
        connectedNames.push(input.name);
      }
    }
    const hasDevices = connectedNames.length > 0;
    this.updateMIDIStatus(hasDevices ? connectedNames.join(", ") : "No devices", hasDevices);
  },

  updateMIDIStatus(status, active) {
    const el = document.getElementById("midiStatus");
    if (el) el.textContent = status;
    const color = active ? "#28a745" : "#dc3545";
    document.getElementById("midiDot").style.backgroundColor = color;
    document.getElementById("midiStatusWrapper").style.borderColor = color;
  },

  handleMIDIMessage(msg) {
    const [status, data1, data2] = msg.data;
    const command = status >> 4;
    const channel = status & 0x0F;
    // Note on (0x9) with velocity > 0
    if (command === 9 && data2 > 0) {
      this.midiNoteOn(data1, data2, channel);
    }
    // Note off (0x8) or note on with velocity 0
    else if (command === 8 || (command === 9 && data2 === 0)) {
      this.midiNoteOff(data1, channel);
    }
    // Control change (0xB)
    else if (command === 11) {
      this.handleMIDICC(data1, data2, channel);
    }
  },

  handleMIDICC(cc, value, channel = 0) {
    if (this.forceRouteToActive) channel = this.activeChannel;
    // Sustain pedal (CC 64)
    if (cc === 64) {
      const wasPressed = this.sustainPedal[channel];
      this.sustainPedal[channel] = value >= 64;
      if (wasPressed && !this.sustainPedal[channel]) {
        this.releaseSustainedNotes(channel);
      }
    }
    // Sostenuto pedal (CC 66)
    else if (cc === 66) {
      const wasPressed = this.sostenutoPedal[channel];
      this.sostenutoPedal[channel] = value >= 64;
      if (!wasPressed && this.sostenutoPedal[channel]) {
        const prefix = `${channel}_`;
        Object.keys(this.midiNotes).forEach((key) => {
          if (key.startsWith(prefix)) {
            this.sostenutoNotes[key] = true;
          }
        });
      } else if (wasPressed && !this.sostenutoPedal[channel]) {
        this.releaseSostenutoNotes(channel);
      }
    }
    // Soft pedal / Una corda (CC 67)
    else if (cc === 67) {
      this.softPedal[channel] = value >= 64;
    }
  },

  midiNoteOn(note, velocity, channel = 0) {
    // Force all MIDI input to active channel if enabled
    if (this.forceRouteToActive) channel = this.activeChannel;
    const key = `${channel}_${note}`;
    // If note is sustained on this channel, release it first
    if (this.sustainedNotes[key]) {
      Z.noteOff(this.sustainedNotes[key]);
      delete this.sustainedNotes[key];
      delete this.sostenutoNotes[key];
    }
    if (this.midiNotes[key]) return; // Already playing on this channel
    if (!Z.ctx) Z.init();
    if (Z.ctx.state === "suspended") {
      Z.ctx.resume();
    }
    Z.warmUp();
    // Start recording on first note if armed
    if (this.isRecordingArmed && !this.isRecording) {
      this.startRecording();
    }
    // Resolve channel instrument (fallback to channel 0)
    const channelData = this.getChannelForMidi(channel);
    let gain = (velocity / 127) * channelData.volume;
    if (this.softPedal[channel]) {
      gain *= this.softPedalAmount;
    }
    // MIDI note 60 = middle C, our note 0 = middle C
    const adjustedNote = note - 60 + (channelData.octave * 12);
    const voiceId = Z.noteOn(adjustedNote, channelData.instrument, gain);
    this.midiNotes[key] = voiceId;
    this.setActivityLight(channel, "#28a745");  // Green for note-on
  },

  midiNoteOff(note, channel = 0) {
    if (this.forceRouteToActive) channel = this.activeChannel;
    const key = `${channel}_${note}`;
    const voiceId = this.midiNotes[key];
    if (voiceId) {
      const sustainByDamper = this.sustainPedal[channel];
      const sustainBySostenuto = this.sostenutoPedal[channel] && this.sostenutoNotes[key];

      if (sustainByDamper || sustainBySostenuto) {
        this.sustainedNotes[key] = voiceId;
      } else {
        Z.noteOff(voiceId);
        delete this.sostenutoNotes[key];
        this.setActivityLight(channel, "#dc3545");  // Red for note-off
      }
      delete this.midiNotes[key];
    }
  },

  releaseSustainedNotes(channel) {
    const prefix = `${channel}_`;
    let released = false;
    Object.keys(this.sustainedNotes).forEach((key) => {
      if (key.startsWith(prefix)) {
        if (!this.sostenutoNotes[key] || !this.sostenutoPedal[channel]) {
          Z.noteOff(this.sustainedNotes[key]);
          delete this.sustainedNotes[key];
          released = true;
        }
      }
    });
    if (released) this.setActivityLight(channel, "#dc3545");
  },

  releaseSostenutoNotes(channel) {
    const prefix = `${channel}_`;
    let released = false;
    Object.keys(this.sostenutoNotes).forEach((key) => {
      if (key.startsWith(prefix)) {
        if (this.sustainedNotes[key] && !this.sustainPedal[channel]) {
          Z.noteOff(this.sustainedNotes[key]);
          delete this.sustainedNotes[key];
          released = true;
        }
        delete this.sostenutoNotes[key];
      }
    });
    if (released) this.setActivityLight(channel, "#dc3545");
  },

  // MIDI Channel management
  getChannelLabel(seed) {
    const type = Math.abs(seed) % 10;
    return `${this.typeNames[type]} #${seed}`;
  },

  getChannelForMidi(ch) {
    return this.channels[ch] || this.channels[this.activeChannel];
  },

  syncActiveChannel() {
    this.channels[this.activeChannel] = {
      seed: this.randInstrumentSeed,
      octave: parseInt(document.getElementById("octaveSelect").value),
      volume: this.volume,
      instrument: this.randInstrument,
      label: this.getChannelLabel(this.randInstrumentSeed)
    };
    this.saveChannels();
    this.updateChannelDisplay();
  },

  initChannels() {
    // Load persisted active channel
    const savedCh = parseInt(localStorage.getItem("zynActiveChannel"));
    if (!isNaN(savedCh) && savedCh >= 0 && savedCh < 16) {
      this.activeChannel = savedCh;
    }
    // Initialize the active channel with current generator state
    this.channels[this.activeChannel] = {
      seed: this.randInstrumentSeed,
      octave: parseInt(document.getElementById("octaveSelect").value),
      volume: this.volume,
      instrument: this.randInstrument,
      label: this.getChannelLabel(this.randInstrumentSeed)
    };
    this.loadChannels();
    this.createChannelInputs();
    // Load persisted active channel data into the UI
    if (this.channels[this.activeChannel]) {
      this.loadChannelToUI(this.activeChannel);
    }
    this.updateChannelDisplay();
  },

  setActiveChannel(ch) {
    if (ch === this.activeChannel) return;
    // Sync current state to outgoing channel before switching
    this.syncActiveChannel();
    // If target channel is unassigned, assign it with current generator state
    if (!this.channels[ch]) {
      this.channels[ch] = {
        seed: this.randInstrumentSeed,
        octave: parseInt(document.getElementById("octaveSelect").value),
        volume: this.volume,
        instrument: Z.getInstrument(this.randInstrumentSeed),
        label: this.getChannelLabel(this.randInstrumentSeed)
      };
    }
    this.activeChannel = ch;
    localStorage.setItem("zynActiveChannel", ch);
    this.loadChannelToUI(ch);
    this.saveChannels();
    this.updateChannelDisplay();
  },

  loadChannelToUI(ch) {
    const data = this.channels[ch];
    if (!data) return;
    this.randInstrumentSeed = data.seed;
    this.randInstrument = data.instrument;
    document.getElementById("instrumentSeedInput").value = data.seed;
    document.getElementById("octaveSelect").value = data.octave;
    this.volume = data.volume;
    const pct = Math.round(data.volume * 100);
    document.getElementById("mainVolume").value = pct;
    document.getElementById("mainVolumeLabel").textContent = `Volume: ${pct}%`;
    this.writeInstrumentToDiv();
    this.activePresetIndex = null;
  },

  createChannelInputs() {
    const container = document.getElementById("midiChannelsSection");
    for (let ch = 0; ch < 16; ch++) {
      const row = document.createElement("div");
      row.className = "channel-row";
      row.id = `channelRow${ch}`;

      const label = document.createElement("label");
      label.className = "channel-label";
      label.textContent = `Channel ${ch + 1}`;

      // Activity light dot
      const activityDot = document.createElement("span");
      activityDot.id = `activityDot${ch}`;
      activityDot.className = "channel-activity";

      const input = document.createElement("input");
      input.type = "text";
      input.id = `midiChannel${ch}`;
      input.readOnly = true;
      input.className = "channel-input";
      input.placeholder = "Unassigned";

      // Set Active button
      const setActiveBtn = document.createElement("button");
      setActiveBtn.id = `setActive${ch}`;
      setActiveBtn.className = "set-active-btn";
      setActiveBtn.textContent = "Set Active";
      setActiveBtn.title = `Set channel ${ch + 1} as active`;
      setActiveBtn.addEventListener("click", () => this.setActiveChannel(ch));

      const clearBtn = document.createElement("button");
      clearBtn.id = `clearChannel${ch}`;
      clearBtn.textContent = "Clear";
      clearBtn.className = "clear-btn";
      clearBtn.title = "Clear channel assignment";
      clearBtn.addEventListener("click", () => this.clearChannel(ch));

      row.appendChild(label);
      row.appendChild(activityDot);
      row.appendChild(input);
      row.appendChild(setActiveBtn);
      row.appendChild(clearBtn);
      container.appendChild(row);
    }
  },

  clearChannel(ch) {
    if (ch === this.activeChannel) return;
    this.releaseAllNotesOnChannel(ch);
    this.channels[ch] = null;
    this.saveChannels();
    this.updateChannelDisplay();
  },

  releaseAllNotesOnChannel(ch) {
    const prefix = `${ch}_`;
    Object.keys(this.midiNotes).forEach((key) => {
      if (key.startsWith(prefix)) {
        Z.noteOff(this.midiNotes[key]);
        delete this.midiNotes[key];
      }
    });
    Object.keys(this.sustainedNotes).forEach((key) => {
      if (key.startsWith(prefix)) {
        Z.noteOff(this.sustainedNotes[key]);
        delete this.sustainedNotes[key];
      }
    });
    Object.keys(this.sostenutoNotes).forEach((key) => {
      if (key.startsWith(prefix)) {
        delete this.sostenutoNotes[key];
      }
    });
  },

  updateChannelDisplay() {
    for (let ch = 0; ch < 16; ch++) {
      const input = document.getElementById(`midiChannel${ch}`);
      const channelData = this.channels[ch];
      const isActive = ch === this.activeChannel;
      if (input) {
        if (isActive) {
          input.value = this.getChannelLabel(this.randInstrumentSeed) + " (active)";
        } else if (channelData) {
          input.value = channelData.label + ` (oct:${channelData.octave >= 0 ? "+" : ""}${channelData.octave}, vol:${Math.round(channelData.volume * 100)}%)`;
        } else {
          input.value = "";
        }
      }
      // Update "Set Active" button
      const setActiveBtn = document.getElementById(`setActive${ch}`);
      if (setActiveBtn) {
        setActiveBtn.disabled = isActive;
        setActiveBtn.textContent = isActive ? "Active" : "Set Active";
      }
      const row = document.getElementById(`channelRow${ch}`);
      if (row) {
        row.classList.toggle("active", isActive);
      }
      const clearBtn = document.getElementById(`clearChannel${ch}`);
      if (clearBtn) {
        clearBtn.disabled = isActive;
      }
    }
  },

  saveChannels() {
    const serialized = this.channels.map((ch) => {
      if (!ch) return null;
      return { seed: ch.seed, octave: ch.octave, volume: ch.volume };
    });
    localStorage.setItem("zynMidiChannels", JSON.stringify(serialized));
  },

  loadChannels() {
    try {
      const stored = localStorage.getItem("zynMidiChannels");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          for (let i = 0; i < 16 && i < parsed.length; i++) {
            if (parsed[i] && typeof parsed[i].seed === "number") {
              this.channels[i] = {
                seed: parsed[i].seed,
                octave: parsed[i].octave || 0,
                volume: parsed[i].volume !== undefined ? parsed[i].volume : 1.0,
                instrument: Z.getInstrument(parsed[i].seed),
                label: this.getChannelLabel(parsed[i].seed)
              };
            }
          }
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
  },

  // Activity lights for MIDI channels
  setActivityLight(channel, color) {
    const dot = document.getElementById(`activityDot${channel}`);
    if (!dot) return;
    // Clear any existing timeout for this channel
    if (this.activityTimeouts[channel]) {
      clearTimeout(this.activityTimeouts[channel]);
      delete this.activityTimeouts[channel];
    }
    // Set the class based on color
    dot.classList.remove("on", "off");
    if (color === "#28a745") {
      dot.classList.add("on");
    } else if (color === "#dc3545") {
      dot.classList.add("off");
      // Fade out after 150ms
      this.activityTimeouts[channel] = setTimeout(() => {
        dot.classList.remove("off");
        delete this.activityTimeouts[channel];
      }, 150);
    }
  },

  // Channel presets (save/load channel configurations)
  loadChannelPresets() {
    try {
      const stored = localStorage.getItem("zynChannelPresets");
      if (stored) {
        this.channelPresets = JSON.parse(stored) || [];
      }
    } catch (e) {
      this.channelPresets = [];
    }
  },

  saveChannelPresets() {
    localStorage.setItem("zynChannelPresets", JSON.stringify(this.channelPresets));
  },

  addChannelPreset(name) {
    // Serialize all 16 channels + activeChannel index
    const channelState = this.channels.map((ch) => {
      if (!ch) return null;
      return { seed: ch.seed, octave: ch.octave, volume: ch.volume };
    });
    this.channelPresets.push({
      name,
      channels: channelState,
      activeChannel: this.activeChannel
    });
    this.saveChannelPresets();
    this.renderChannelPresets();
  },

  loadChannelPreset(preset) {
    // Restore all 16 channels
    for (let i = 0; i < 16; i++) {
      if (preset.channels[i] && typeof preset.channels[i].seed === "number") {
        this.channels[i] = {
          seed: preset.channels[i].seed,
          octave: preset.channels[i].octave || 0,
          volume: preset.channels[i].volume !== undefined ? preset.channels[i].volume : 1.0,
          instrument: Z.getInstrument(preset.channels[i].seed),
          label: this.getChannelLabel(preset.channels[i].seed)
        };
      } else {
        this.channels[i] = null;
      }
    }
    // Restore active channel
    const targetChannel = preset.activeChannel !== undefined ? preset.activeChannel : 0;
    this.activeChannel = targetChannel;
    localStorage.setItem("zynActiveChannel", targetChannel);
    // Update UI to match the active channel
    if (this.channels[targetChannel]) {
      this.loadChannelToUI(targetChannel);
    }
    this.saveChannels();
    this.updateChannelDisplay();
  },

  deleteChannelPreset(index) {
    this.channelPresets.splice(index, 1);
    this.saveChannelPresets();
    this.renderChannelPresets();
  },

  renameChannelPreset(index, newName) {
    if (this.channelPresets[index]) {
      this.channelPresets[index].name = newName;
      this.saveChannelPresets();
      this.renderChannelPresets();
    }
  },

  renderChannelPresets() {
    const container = document.getElementById("channelPresetsContainer");
    if (!container) return;
    container.innerHTML = "";
    if (this.channelPresets.length === 0) {
      container.innerHTML = '<div class="no-presets">No channel presets saved yet.</div>';
      return;
    }
    // Simple list (no accordion grouping)
    this.channelPresets.forEach((preset, index) => {
      const item = document.createElement("div");
      item.className = "preset-item";

      const name = document.createElement("span");
      name.className = "preset-name";
      name.textContent = preset.name;
      name.title = "Click to load";
      name.addEventListener("click", () => this.loadChannelPreset(preset));

      const renameBtn = document.createElement("button");
      renameBtn.className = "preset-btn rename";
      renameBtn.textContent = "Rename";
      renameBtn.addEventListener("click", () => {
        const newName = prompt("Enter new name:", preset.name);
        if (newName && newName.trim()) {
          this.renameChannelPreset(index, newName.trim());
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "preset-btn delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        if (confirm(`Delete channel preset "${preset.name}"?`)) {
          this.deleteChannelPreset(index);
        }
      });

      item.appendChild(name);
      item.appendChild(renameBtn);
      item.appendChild(deleteBtn);
      container.appendChild(item);
    });
  },

  exportChannelPresets() {
    if (this.channelPresets.length === 0) {
      alert("No channel presets to export");
      return;
    }
    const data = JSON.stringify(this.channelPresets, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "zyn-channel-presets.json";
    a.click();
    URL.revokeObjectURL(url);
  },

  importChannelPresets(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) {
          throw new Error("Invalid format");
        }
        let count = 0;
        imported.forEach((preset) => {
          if (preset.name && Array.isArray(preset.channels)) {
            this.channelPresets.push({
              name: preset.name,
              channels: preset.channels,
              activeChannel: preset.activeChannel !== undefined ? preset.activeChannel : 0
            });
            count++;
          }
        });
        this.saveChannelPresets();
        this.renderChannelPresets();
        alert(`Imported ${count} channel preset(s)`);
      } catch (err) {
        alert("Failed to import: Invalid channel preset file");
      }
    };
    reader.readAsText(file);
  },

  // Preset management
  loadPresets() {
    try {
      const stored = localStorage.getItem("zynPresets");
      if (stored === null) {
        // First load - populate with default presets
        this.presets = DEFAULT_PRESETS.map(p => ({ ...p }));
        this.savePresets();
      } else {
        this.presets = JSON.parse(stored) || [];
      }
    } catch (e) {
      this.presets = [];
    }
  },

  savePresets() {
    localStorage.setItem("zynPresets", JSON.stringify(this.presets));
  },

  addPreset(name, seed) {
    const type = Math.abs(seed) % 10;
    const octave = parseInt(document.getElementById("octaveSelect").value);
    const volume = this.volume;
    this.presets.push({ name, seed, type, octave, volume });
    this.savePresets();
    this.renderPresetAccordion();
  },

  renamePreset(index, newName) {
    if (this.presets[index]) {
      this.presets[index].name = newName;
      this.savePresets();
      this.renderPresetAccordion();
    }
  },

  updatePresetOctave(index, octave) {
    if (this.presets[index]) {
      this.presets[index].octave = octave;
      this.savePresets();
      if (this.activePresetIndex === index) {
        document.getElementById("octaveSelect").value = octave;
      }
    }
  },

  updatePresetVolume(index, volume) {
    if (this.presets[index]) {
      this.presets[index].volume = volume;
      this.savePresets();
      if (this.activePresetIndex === index) {
        this.setVolume(volume);
      }
    }
  },

  setVolume(vol) {
    this.volume = vol;
    const pct = Math.round(vol * 100);
    document.getElementById("mainVolume").value = pct;
    document.getElementById("mainVolumeLabel").textContent = `Volume: ${pct}%`;
  },

  deletePreset(index) {
    this.presets.splice(index, 1);
    this.savePresets();
    this.renderPresetAccordion();
  },

  loadPreset(preset) {
    document.getElementById("instrumentSeedInput").value = preset.seed;
    if (preset.octave !== undefined) {
      document.getElementById("octaveSelect").value = preset.octave;
    }
    this.setVolume(preset.volume !== undefined ? preset.volume : 1.0);
    this.activePresetIndex = preset.index;
    this.updateInstrumentAndPushState(preset.seed);
  },

  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      // Brief visual feedback could be added here
    });
  },

  renderPresetAccordion() {
    const container = document.getElementById("presetAccordion");
    container.innerHTML = "";

    // Group presets by type
    const byType = {};
    this.presets.forEach((preset, index) => {
      const type = preset.type;
      if (!byType[type]) byType[type] = [];
      byType[type].push({ ...preset, index });
    });

    // Check if any presets exist
    if (this.presets.length === 0) {
      container.innerHTML = '<div class="no-presets">No presets saved yet. Play an instrument and save it above!</div>';
      return;
    }

    // Render each type that has presets
    for (let type = 0; type <= 9; type++) {
      if (!byType[type] || byType[type].length === 0) continue;

      const typeName = this.typeNames[type];
      const header = document.createElement("button");
      header.className = "preset-type-header";
      header.innerHTML = `<span>${typeName}</span><span class="count">${byType[type].length}</span>`;
      header.addEventListener("click", () => {
        header.classList.toggle("active");
        content.style.display = header.classList.contains("active") ? "block" : "none";
      });

      const content = document.createElement("div");
      content.className = "preset-type-content";

      const grid = document.createElement("div");
      grid.className = "preset-grid";

      byType[type].forEach((preset) => {
        const item = document.createElement("div");
        item.className = "preset-item";

        // Header: name + seed
        const headerRow = document.createElement("div");
        headerRow.className = "preset-item-header";

        const name = document.createElement("span");
        name.className = "preset-name";
        name.textContent = preset.name;
        name.title = "Click to load";
        name.addEventListener("click", () => this.loadPreset(preset));

        const seed = document.createElement("span");
        seed.className = "preset-seed";
        seed.textContent = preset.seed;

        headerRow.appendChild(name);
        headerRow.appendChild(seed);

        // Controls row: octave, volume
        const controls = document.createElement("div");
        controls.className = "preset-controls";

        const octLabel = document.createElement("label");
        octLabel.textContent = "Oct:";
        const octaveSelect = document.createElement("select");
        octaveSelect.className = "btn-sm";
        for (let o = -3; o <= 3; o++) {
          const opt = document.createElement("option");
          opt.value = o;
          opt.textContent = o === 0 ? "0" : (o > 0 ? `+${o}` : o);
          if ((preset.octave !== undefined ? preset.octave : 0) === o) opt.selected = true;
          octaveSelect.appendChild(opt);
        }
        octaveSelect.addEventListener("change", (e) => {
          this.updatePresetOctave(preset.index, parseInt(e.target.value));
        });

        const volLabel = document.createElement("label");
        const volVal = preset.volume !== undefined ? preset.volume : 1.0;
        volLabel.textContent = `Vol: ${Math.round(volVal * 100)}%`;
        const volSlider = document.createElement("input");
        volSlider.type = "range";
        volSlider.className = "preset-volume";
        volSlider.min = 0;
        volSlider.max = 500;
        volSlider.value = Math.round(volVal * 100);
        volSlider.addEventListener("input", (e) => {
          const v = parseInt(e.target.value) / 100;
          volLabel.textContent = `Vol: ${Math.round(v * 100)}%`;
          this.updatePresetVolume(preset.index, v);
        });

        controls.appendChild(octLabel);
        controls.appendChild(octaveSelect);
        controls.appendChild(volLabel);
        controls.appendChild(volSlider);

        // Action buttons row
        const actions = document.createElement("div");
        actions.className = "preset-controls";

        const copyBtn = document.createElement("button");
        copyBtn.className = "preset-btn copy";
        copyBtn.textContent = "Copy";
        copyBtn.title = "Copy seed to clipboard";
        copyBtn.addEventListener("click", () => this.copyToClipboard(String(preset.seed)));

        const renameBtn = document.createElement("button");
        renameBtn.className = "preset-btn rename";
        renameBtn.textContent = "Rename";
        renameBtn.addEventListener("click", () => {
          const newName = prompt("Enter new name:", preset.name);
          if (newName && newName.trim()) {
            this.renamePreset(preset.index, newName.trim());
          }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "preset-btn delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          if (confirm(`Delete "${preset.name}"?`)) {
            this.deletePreset(preset.index);
          }
        });

        actions.appendChild(copyBtn);
        actions.appendChild(renameBtn);
        actions.appendChild(deleteBtn);

        item.appendChild(headerRow);
        item.appendChild(controls);
        item.appendChild(actions);
        grid.appendChild(item);
      });

      content.appendChild(grid);

      container.appendChild(header);
      container.appendChild(content);
    }
  },

  handleSavePreset() {
    const nameInput = document.getElementById("presetNameInput");
    const name = nameInput.value.trim();
    if (!name) {
      alert("Please enter a preset name");
      return;
    }
    this.addPreset(name, this.randInstrumentSeed);
    nameInput.value = "";
  },

  exportPresets() {
    if (this.presets.length === 0) {
      alert("No presets to export");
      return;
    }
    const data = JSON.stringify(this.presets, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "zyn-presets.json";
    a.click();
    URL.revokeObjectURL(url);
  },

  importPresets(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) {
          throw new Error("Invalid format");
        }
        // Validate and import presets
        let count = 0;
        imported.forEach((preset) => {
          if (preset.name && typeof preset.seed === "number") {
            const type = preset.type !== undefined ? preset.type : Math.abs(preset.seed) % 10;
            const octave = preset.octave !== undefined ? preset.octave : 0;
            const volume = preset.volume !== undefined ? preset.volume : 1.0;
            this.presets.push({ name: preset.name, seed: preset.seed, type, octave, volume });
            count++;
          }
        });
        this.savePresets();
        this.renderPresetAccordion();
        alert(`Imported ${count} preset(s)`);
      } catch (err) {
        alert("Failed to import: Invalid preset file");
      }
    };
    reader.readAsText(file);
  },

  getInstrument(seed) {
    this.randInstrument = Z.getInstrument(seed);
    return this.randInstrument;
  },

  updateInstrument(seed) {
    if (!Z.ctx) Z.init();
    this.randInstrumentSeed = seed;
    this.getInstrument(seed);
    this.writeInstrumentToDiv();
    if (this.channels[this.activeChannel]) this.syncActiveChannel();
  },

  handleKeyPress(event) {
    if (this.isTextInputActive()) return;

    const key = event.key.toLowerCase();
    const octaveSelect = document.getElementById("octaveSelect");
    const instrumentSeedInput = document.getElementById("instrumentSeedInput");

    if (key === "escape") {
      this.handleStopAll();
    } else if (key === "+" || key === "-") {
      const currentSeed = parseInt(instrumentSeedInput.value);
      instrumentSeedInput.value = key === "+" ? currentSeed + 1 : currentSeed - 1;
      this.updateInstrumentAndPushState(parseInt(instrumentSeedInput.value));
    } else if (key === "pageup" || key === "pagedown") {
      const currentOctave = parseInt(octaveSelect.value);
      octaveSelect.value = key === "pageup" ? Math.min(currentOctave + 1, 3) : Math.max(currentOctave - 1, -3);
      event.preventDefault();
    } else {
      // Prevent key repeat from triggering multiple notes
      const note = this.keyToNote(key);
      if (note !== undefined && !this.activeNotes[key]) {
        this.playNoteOn(note, key);
      }
    }
  },

  keyToNote(key) {
    const keyToNoteMap = {
      q: 0, 2: 1, w: 2, 3: 3, e: 4, r: 5, 5: 6,
      t: 7, 6: 8, y: 9, 7: 10, u: 11, i: 12,
      9: 13, o: 14, 0: 15, p: 16,
    };
    return keyToNoteMap[key];
  },

  createPianoKeyboard() {
    const keyboard = document.getElementById("pianoKeyboard");
    const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    for (let i = 0; i < 17; i++) {
      const key = document.createElement("div");
      const note = i % 12;
      key.className = `key ${["C#", "D#", "F#", "G#", "A#"].includes(keys[note]) ? "black" : "white"}`;
      key.dataset.note = i;
      const pianoKey = `piano_${i}`;
      key.addEventListener("mousedown", () => {
        if (!this.activeNotes[pianoKey]) {
          this.playNoteOn(i, pianoKey);
        }
      });
      key.addEventListener("mouseup", () => this.playNoteOff(pianoKey));
      key.addEventListener("mouseleave", () => this.playNoteOff(pianoKey));
      key.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (!this.activeNotes[pianoKey]) {
          this.playNoteOn(i, pianoKey);
        }
      });
      key.addEventListener("touchend", (e) => {
        e.preventDefault();
        this.playNoteOff(pianoKey);
      });
      keyboard.appendChild(key);
    }
  },

  playNoteOn(note, trackingKey) {
    // Start recording on first note if armed
    if (this.isRecordingArmed && !this.isRecording) {
      this.startRecording();
    }
    const octave = parseInt(document.getElementById("octaveSelect").value);
    const gain = this.volume;
    const voiceId = Z.noteOn(note + octave * 12, this.randInstrument, gain);
    this.activeNotes[trackingKey] = { voiceId, note };
    const keyEl = document.querySelector(`[data-note="${note}"]`);
    if (keyEl) keyEl.classList.add("pressed");
  },

  playNoteOff(trackingKey) {
    const active = this.activeNotes[trackingKey];
    if (active) {
      Z.noteOff(active.voiceId);
      const keyEl = document.querySelector(`[data-note="${active.note}"]`);
      if (keyEl) keyEl.classList.remove("pressed");
      delete this.activeNotes[trackingKey];
    }
  },

  handleKeyUp(event) {
    const key = event.key.toLowerCase();
    if (this.activeNotes[key]) {
      this.playNoteOff(key);
    }
  },

  writeInstrumentToDiv() {
    const container = document.getElementById("instrumentJson");
    container.textContent = JSON.stringify(this.randInstrument, null, 2);
    this.renderInstrumentVisualizer();
  },

  handleRandomInstrument() {
    const selectedType = document.querySelector('input[name="instrumentType"]:checked').value;
    let newSeed;
    if (selectedType === "any") {
      newSeed = Math.floor(Math.random() * Z.mInt);
    } else {
      // Generate random seed that ends with the specified digit (0-9)
      const baseSeed = Math.floor(Math.random() * Math.floor(Z.mInt / 10)) * 10;
      newSeed = baseSeed + parseInt(selectedType);
    }
    document.getElementById("instrumentSeedInput").value = newSeed;
    this.activePresetIndex = null;
    this.setVolume(1.0);
    this.updateInstrumentAndPushState(newSeed);
  },

  handleStopAll() {
    Z.stopAll();
    // Clear all active notes and update UI
    Object.keys(this.activeNotes).forEach((key) => {
      const active = this.activeNotes[key];
      if (active) {
        const keyEl = document.querySelector(`[data-note="${active.note}"]`);
        if (keyEl) keyEl.classList.remove("pressed");
      }
    });
    this.activeNotes = {};
    // Clear MIDI notes and sustained notes
    this.midiNotes = {};
    this.sustainedNotes = {};
    this.sustainPedal = {};
    this.sostenutoNotes = {};
    this.sostenutoPedal = {};
    this.softPedal = {};
    // Clear all activity lights
    for (let ch = 0; ch < 16; ch++) {
      if (this.activityTimeouts[ch]) {
        clearTimeout(this.activityTimeouts[ch]);
      }
      const dot = document.getElementById(`activityDot${ch}`);
      if (dot) dot.classList.remove("on", "off");
    }
    this.activityTimeouts = {};
    // Stop recording if active
    if (this.isRecording) {
      this.stopRecording();
    }
  },

  // Recording functionality
  armRecording() {
    if (this.isRecording) return;
    // Set up MediaStreamDestination connected to master gain
    if (!Z.ctx) Z.init();
    this.recordingStream = Z.ctx.createMediaStreamDestination();
    Z.masterGain.connect(this.recordingStream);
    this.isRecordingArmed = true;
    this.updateRecordButton();
  },

  startRecording() {
    if (this.isRecording || !this.isRecordingArmed) return;
    this.isRecording = true;
    this.isRecordingArmed = false;
    this.recordedChunks = [];
    this.recordingStartTime = Date.now();
    // Determine supported MIME type
    const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
      ? "audio/webm;codecs=opus"
      : "audio/webm";
    this.mediaRecorder = new MediaRecorder(this.recordingStream.stream, { mimeType });
    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) this.recordedChunks.push(e.data);
    };
    this.mediaRecorder.onstop = () => this.finalizeRecording();
    // Request data every 200ms so we can show running total
    this.mediaRecorder.start(200);
    this.updateRecordButton();
    // Start size display interval
    this.updateRecordingSize();
    this.recordingSizeInterval = setInterval(() => this.updateRecordingSize(), 200);
  },

  stopRecording() {
    if (!this.isRecording && !this.isRecordingArmed) return;
    // Clear size display interval
    if (this.recordingSizeInterval) {
      clearInterval(this.recordingSizeInterval);
      this.recordingSizeInterval = null;
    }
    document.getElementById("recordingSize").style.display = "none";
    if (this.isRecordingArmed) {
      // Was armed but never started - just disarm
      this.isRecordingArmed = false;
      if (this.recordingStream) {
        Z.masterGain.disconnect(this.recordingStream);
        this.recordingStream = null;
      }
      this.updateRecordButton();
      return;
    }
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }
    this.isRecording = false;
    if (this.recordingStream) {
      Z.masterGain.disconnect(this.recordingStream);
      this.recordingStream = null;
    }
    this.updateRecordButton();
  },

  updateRecordingSize() {
    const el = document.getElementById("recordingSize");
    if (!el) return;
    const totalBytes = this.recordedChunks.reduce((sum, chunk) => sum + chunk.size, 0);
    const kb = (totalBytes / 1024).toFixed(1);
    el.textContent = `Recording: ${kb} KB`;
    el.style.display = "inline";
  },

  finalizeRecording() {
    if (this.recordedChunks.length === 0) return;
    const blob = new Blob(this.recordedChunks, { type: "audio/webm" });
    const url = URL.createObjectURL(blob);
    const durationSecs = this.recordingStartTime ? (Date.now() - this.recordingStartTime) / 1000 : 0;
    this.clipCounter++;
    const clip = {
      blob,
      url,
      name: `Clip ${this.clipCounter}`,
      duration: durationSecs,
      saved: false  // Not yet persisted to localStorage
    };
    this.clips.push(clip);
    this.saveClip(this.clips.length - 1);  // Auto-save to localStorage
    this.renderClips();
  },

  toggleRecording() {
    if (this.isRecording) {
      this.stopRecording();
    } else if (this.isRecordingArmed) {
      this.stopRecording(); // Disarm
    } else {
      this.armRecording();
    }
  },

  updateRecordButton() {
    const btn = document.getElementById("recordButton");
    btn.classList.remove("btn-secondary", "btn-danger", "btn-warning", "recording-pulse");
    if (this.isRecording) {
      btn.textContent = "Stop Rec";
      btn.classList.add("btn-danger", "recording-pulse");
    } else if (this.isRecordingArmed) {
      btn.textContent = "Armed...";
      btn.classList.add("btn-warning", "recording-pulse");
    } else {
      btn.textContent = "Record";
      btn.classList.add("btn-secondary");
    }
  },

  renderClips() {
    const section = document.getElementById("clipsSection");
    const container = document.getElementById("clipsContainer");
    this.updateStorageIndicator();
    this.updateRecordingTabState();
    if (this.clips.length === 0) {
      section.style.display = "none";
      return;
    }
    section.style.display = "block";
    container.innerHTML = "";
    this.clips.forEach((clip, index) => {
      const row = document.createElement("div");
      row.className = "clip-item";

      const name = document.createElement("span");
      name.className = "preset-name";
      name.style.minWidth = "80px";
      name.textContent = clip.name + (clip.saved ? "" : " *");
      name.title = "Click to rename";
      name.addEventListener("click", () => this.renameClip(index));

      const duration = document.createElement("span");
      duration.className = "preset-seed";
      duration.style.minWidth = "45px";
      if (clip.duration !== undefined && clip.duration > 0) {
        const mins = Math.floor(clip.duration / 60);
        const secs = Math.floor(clip.duration % 60).toString().padStart(2, "0");
        duration.textContent = `${mins}:${secs}`;
      } else {
        duration.textContent = "--:--";
      }

      const audio = document.createElement("audio");
      audio.src = clip.url;
      audio.controls = true;
      audio.preload = "metadata";

      const downloadBtn = document.createElement("button");
      downloadBtn.textContent = "Save WAV";
      downloadBtn.className = "btn-sm btn-success";
      downloadBtn.addEventListener("click", () => this.downloadClipAsWav(index));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "btn-sm btn-danger";
      deleteBtn.addEventListener("click", () => this.deleteClip(index));

      row.appendChild(name);
      row.appendChild(duration);
      row.appendChild(audio);
      row.appendChild(downloadBtn);
      row.appendChild(deleteBtn);
      container.appendChild(row);
    });
  },

  async downloadClipAsWav(index) {
    const clip = this.clips[index];
    if (!clip) return;
    try {
      // Decode the webm blob to audio buffer
      const arrayBuffer = await clip.blob.arrayBuffer();
      const audioBuffer = await Z.ctx.decodeAudioData(arrayBuffer);
      // Convert to WAV
      const wavBlob = this.audioBufferToWav(audioBuffer);
      const url = URL.createObjectURL(wavBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = clip.name.replace(/[^a-z0-9]/gi, "_") + ".wav";
      a.click();
      URL.revokeObjectURL(url);
      this.renderClips();
    } catch (e) {
      alert("Failed to convert to WAV: " + e.message);
    }
  },

  audioBufferToWav(buffer) {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;
    // Interleave channels
    const length = buffer.length;
    const dataLength = length * blockAlign;
    const bufferLength = 44 + dataLength;
    const arrayBuffer = new ArrayBuffer(bufferLength);
    const view = new DataView(arrayBuffer);
    // WAV header
    const writeString = (offset, str) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };
    writeString(0, "RIFF");
    view.setUint32(4, bufferLength - 8, true);
    writeString(8, "WAVE");
    writeString(12, "fmt ");
    view.setUint32(16, 16, true); // fmt chunk size
    view.setUint16(20, format, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * blockAlign, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitDepth, true);
    writeString(36, "data");
    view.setUint32(40, dataLength, true);
    // Write audio data
    const channels = [];
    for (let ch = 0; ch < numChannels; ch++) {
      channels.push(buffer.getChannelData(ch));
    }
    let offset = 44;
    for (let i = 0; i < length; i++) {
      for (let ch = 0; ch < numChannels; ch++) {
        let sample = channels[ch][i];
        sample = Math.max(-1, Math.min(1, sample));
        sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
        view.setInt16(offset, sample, true);
        offset += 2;
      }
    }
    return new Blob([arrayBuffer], { type: "audio/wav" });
  },

  renameClip(index) {
    const clip = this.clips[index];
    if (!clip) return;
    const newName = prompt("Enter new name:", clip.name);
    if (newName && newName.trim()) {
      clip.name = newName.trim();
      if (clip.saved) {
        this.saveClipMetadata(index);
      }
      this.renderClips();
    }
  },

  deleteClip(index) {
    const clip = this.clips[index];
    if (clip) {
      URL.revokeObjectURL(clip.url);
      localStorage.removeItem(`zynClip_${index}`);
      this.clips.splice(index, 1);
      // Re-index remaining clips in localStorage
      this.reindexClips();
      this.renderClips();
    }
  },

  hasUnsavedClips() {
    return this.clips.some(clip => !clip.saved);
  },

  // Clip persistence
  async queryStorageQuota() {
    try {
      if (navigator.storage && navigator.storage.estimate) {
        const estimate = await navigator.storage.estimate();
        // Use quota minus usage, capped at a reasonable max for clips
        // localStorage is typically 5-10MB, but StorageManager reports total origin quota
        // We'll use a fraction of available space, max 50MB for clips
        const availableMB = (estimate.quota - estimate.usage) / (1024 * 1024);
        this.maxStorageMB = Math.min(50, Math.max(5, Math.floor(availableMB * 0.1)));
      }
    } catch (e) {
      // Fall back to conservative default
    }
  },

  getClipsStorageUsed() {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("zynClip_")) {
        total += localStorage.getItem(key).length * 2; // UTF-16 = 2 bytes per char
      }
    }
    return total;
  },

  updateStorageIndicator() {
    const indicator = document.getElementById("storageIndicator");
    if (!indicator) return;
    const used = this.getClipsStorageUsed();
    const usedMB = (used / (1024 * 1024)).toFixed(2);
    const maxMB = this.maxStorageMB;
    const pct = Math.min(100, (used / (maxMB * 1024 * 1024)) * 100).toFixed(0);
    indicator.style.color = pct > 80 ? "var(--accent-danger)" : pct > 50 ? "var(--accent-warning)" : "";
    indicator.textContent = `Storage: ${usedMB}MB / ~${maxMB}MB (${pct}%)`;
  },

  async saveClip(index) {
    const clip = this.clips[index];
    if (!clip || !clip.blob) return;
    try {
      // Convert blob to base64 in chunks to avoid call stack limits
      const arrayBuffer = await clip.blob.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = "";
      const chunkSize = 8192;
      for (let i = 0; i < bytes.length; i += chunkSize) {
        binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
      }
      const base64 = btoa(binary);
      const data = JSON.stringify({
        name: clip.name,
        type: clip.blob.type,
        duration: clip.duration,
        data: base64
      });
      // Check if we have space
      const newSize = data.length * 2;
      const currentUsed = this.getClipsStorageUsed();
      if (currentUsed + newSize > this.maxStorageMB * 1024 * 1024) {
        alert("Storage full! Delete some clips to save new ones.");
        return;
      }
      localStorage.setItem(`zynClip_${index}`, data);
      clip.saved = true;
      this.saveClipsIndex();
      this.updateStorageIndicator();
    } catch (e) {
      console.error("Failed to save clip:", e);
      alert("Failed to save clip: " + e.message);
    }
  },

  saveClipMetadata(index) {
    const clip = this.clips[index];
    if (!clip) return;
    const stored = localStorage.getItem(`zynClip_${index}`);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        data.name = clip.name;
        localStorage.setItem(`zynClip_${index}`, JSON.stringify(data));
      } catch (e) {}
    }
  },

  saveClipsIndex() {
    const index = this.clips.map(c => ({ name: c.name, saved: c.saved }));
    localStorage.setItem("zynClipsIndex", JSON.stringify(index));
    localStorage.setItem("zynClipCounter", this.clipCounter);
  },

  reindexClips() {
    // Remove all clip data and re-save with correct indices
    const oldKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("zynClip_")) {
        oldKeys.push(key);
      }
    }
    oldKeys.forEach(key => localStorage.removeItem(key));
    // Re-save each clip
    this.clips.forEach((clip, i) => {
      if (clip.saved && clip.blob) {
        this.saveClip(i);
      }
    });
    this.saveClipsIndex();
  },

  async loadClips() {
    try {
      const indexStr = localStorage.getItem("zynClipsIndex");
      const counter = localStorage.getItem("zynClipCounter");
      if (counter) this.clipCounter = parseInt(counter) || 0;
      if (!indexStr) return;
      const index = JSON.parse(indexStr);
      if (!Array.isArray(index)) return;
      for (let i = 0; i < index.length; i++) {
        const stored = localStorage.getItem(`zynClip_${i}`);
        if (stored) {
          try {
            const data = JSON.parse(stored);
            // Convert base64 back to blob
            const binary = atob(data.data);
            const bytes = new Uint8Array(binary.length);
            for (let j = 0; j < binary.length; j++) {
              bytes[j] = binary.charCodeAt(j);
            }
            const blob = new Blob([bytes], { type: data.type || "audio/webm" });
            const url = URL.createObjectURL(blob);
            this.clips.push({
              blob,
              url,
              name: data.name || `Clip ${i + 1}`,
              duration: data.duration || 0,
              saved: true
            });
          } catch (e) {
            console.error("Failed to load clip", i, e);
          }
        }
      }
      this.renderClips();
    } catch (e) {
      console.error("Failed to load clips:", e);
    }
  },

  updateInstrumentAndPushState(seed) {
    this.updateInstrument(seed);
    this.pushStateToHistory(seed);
  },

  pushStateToHistory(instrumentSeed) {
    const state = { instrumentSeed };
    const url = `?instrumentSeed=${instrumentSeed}`;
    history.pushState(state, "", url);
  },

  loadStateAndUpdateInstrument() {
    const urlParams = new URLSearchParams(window.location.search);
    const instrumentSeed = urlParams.get("instrumentSeed") || 0;
    document.getElementById("instrumentSeedInput").value = instrumentSeed;
    this.updateInstrument(parseInt(instrumentSeed));
  },

  handlePopState(event) {
    if (event.state && event.state.instrumentSeed !== undefined) {
      const instrumentSeed = event.state.instrumentSeed;
      document.getElementById("instrumentSeedInput").value = instrumentSeed;
      this.updateInstrument(parseInt(instrumentSeed));
    } else {
      this.loadStateAndUpdateInstrument();
    }
  },

  isTextInputActive() {
    const tag = document.activeElement.tagName;
    return tag === "INPUT" || tag === "TEXTAREA";
  },

  setupCollapsible() {
    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        const isExpanded = this.classList.contains("active");
        this.setAttribute("aria-expanded", isExpanded);
        content.classList.toggle("show", isExpanded);
        content.setAttribute("aria-hidden", !isExpanded);
      });
    }
  },

  setupTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const tabId = btn.dataset.tab;

        // Update button states
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Update content states
        tabContents.forEach(content => {
          content.classList.remove("active");
          if (content.id === `tab-${tabId}`) {
            content.classList.add("active");
          }
        });

        // Update no clips message visibility when switching to recording tab
        if (tabId === "recording") {
          this.updateRecordingTabState();
        }
      });
    });
  },

  updateRecordingTabState() {
    const noClipsMsg = document.getElementById("noClipsMessage");
    const clipsSection = document.getElementById("clipsSection");
    if (noClipsMsg && clipsSection) {
      noClipsMsg.style.display = this.clips.length === 0 ? "block" : "none";
    }
  },

  attachEventListeners() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
    window.addEventListener("popstate", this.handlePopState.bind(this));
    document.getElementById("instrumentSeedInput").addEventListener("change", (e) => {
      this.activePresetIndex = null;
      this.setVolume(1.0);
      this.updateInstrumentAndPushState(parseInt(e.target.value));
    });
    document.getElementById("randomInstrumentButton").addEventListener("click", this.handleRandomInstrument.bind(this));
    document.getElementById("stopAllButton").addEventListener("click", this.handleStopAll.bind(this));
    document.getElementById("recordButton").addEventListener("click", this.toggleRecording.bind(this));
    document.getElementById("mainVolume").addEventListener("input", (e) => {
      const vol = parseInt(e.target.value) / 100;
      this.volume = vol;
      document.getElementById("mainVolumeLabel").textContent = `Volume: ${e.target.value}%`;
      // Sync back to active preset
      if (this.activePresetIndex !== null && this.presets[this.activePresetIndex]) {
        this.presets[this.activePresetIndex].volume = vol;
        this.savePresets();
        this.renderPresetAccordion();
      }
      if (this.channels[this.activeChannel]) this.syncActiveChannel();
    });
    document.getElementById("octaveSelect").addEventListener("change", () => {
      if (this.channels[this.activeChannel]) this.syncActiveChannel();
    });
    document.getElementById("savePresetButton").addEventListener("click", this.handleSavePreset.bind(this));
    // Allow Enter key to save preset
    document.getElementById("presetNameInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.handleSavePreset();
    });
    // Export/Import presets
    document.getElementById("exportPresetsButton").addEventListener("click", this.exportPresets.bind(this));
    document.getElementById("importPresetsButton").addEventListener("click", () => {
      document.getElementById("importFileInput").click();
    });
    document.getElementById("importFileInput").addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        this.importPresets(e.target.files[0]);
        e.target.value = ""; // Reset so same file can be imported again
      }
    });
    // Channel preset save
    document.getElementById("saveChannelPresetButton").addEventListener("click", () => {
      const nameInput = document.getElementById("channelPresetNameInput");
      const name = nameInput.value.trim();
      if (!name) {
        alert("Please enter a channel preset name");
        return;
      }
      this.addChannelPreset(name);
      nameInput.value = "";
    });
    // Allow Enter key to save channel preset
    document.getElementById("channelPresetNameInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") document.getElementById("saveChannelPresetButton").click();
    });
    // Export/Import channel presets
    document.getElementById("exportChannelPresetsButton").addEventListener("click", this.exportChannelPresets.bind(this));
    document.getElementById("importChannelPresetsButton").addEventListener("click", () => {
      document.getElementById("importChannelFileInput").click();
    });
    document.getElementById("importChannelFileInput").addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        this.importChannelPresets(e.target.files[0]);
        e.target.value = "";
      }
    });
    // MIDI enable/disable buttons
    document.getElementById("enableMidiButton").addEventListener("click", this.initMIDI.bind(this));
    document.getElementById("disableMidiButton").addEventListener("click", this.disableMIDI.bind(this));
    // Oscilloscope toggle
    document.getElementById("scopeToggle").addEventListener("click", this.toggleScope.bind(this));
    // Force route toggle
    document.getElementById("forceRouteToggle").addEventListener("change", (e) => {
      this.forceRouteToActive = e.target.checked;
      localStorage.setItem("zynForceRoute", e.target.checked ? "true" : "false");
    });
  },

  // Oscilloscope
  initScope() {
    if (!Z.ctx) Z.init();
    this.scopeSplitter = Z.ctx.createChannelSplitter(2);
    this.analyserL = Z.ctx.createAnalyser();
    this.analyserR = Z.ctx.createAnalyser();
    this.analyserL.fftSize = 2048;
    this.analyserR.fftSize = 2048;
    Z.masterGain.connect(this.scopeSplitter);
    this.scopeSplitter.connect(this.analyserL, 0);
    this.scopeSplitter.connect(this.analyserR, 1);
  },

  toggleScope() {
    this.scopeEnabled = !this.scopeEnabled;
    const container = document.getElementById("oscilloscopeContainer");
    const btn = document.getElementById("scopeToggle");
    if (this.scopeEnabled) {
      if (!this.analyserL) this.initScope();
      container.style.display = "block";
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-info");
      this.drawScope();
    } else {
      container.style.display = "none";
      btn.classList.remove("btn-info");
      btn.classList.add("btn-secondary");
      if (this.scopeAnimId) {
        cancelAnimationFrame(this.scopeAnimId);
        this.scopeAnimId = null;
      }
    }
  },

  drawScope() {
    if (!this.scopeEnabled) return;
    this.scopeAnimId = requestAnimationFrame(() => this.drawScope());

    const canvas = document.getElementById("oscilloscopeCanvas");
    const ctx = canvas.getContext("2d");

    // Match canvas resolution to display size
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    const w = canvas.width;
    const h = canvas.height;
    const mid = h / 2;
    const bufLen = this.analyserL.frequencyBinCount;
    const dataL = new Uint8Array(bufLen);
    const dataR = new Uint8Array(bufLen);
    this.analyserL.getByteTimeDomainData(dataL);
    this.analyserR.getByteTimeDomainData(dataR);

    // Clear
    ctx.fillStyle = "#0a0a14";
    ctx.fillRect(0, 0, w, h);

    // Center line
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, mid);
    ctx.lineTo(w, mid);
    ctx.stroke();

    // Draw waveform helper
    const drawWave = (data, color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const sliceWidth = w / bufLen;
      let x = 0;
      for (let i = 0; i < bufLen; i++) {
        const v = data[i] / 128.0;
        const y = (v * mid);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }
      ctx.stroke();
    };

    // Left = cyan, Right = coral
    drawWave(dataL, "rgba(0, 217, 255, 0.8)");
    drawWave(dataR, "rgba(233, 69, 96, 0.8)");
  },

  // Instrument Visualizer
  renderInstrumentVisualizer() {
    const container = document.getElementById("instrumentVisualizer");
    if (!container) return;
    const inst = this.randInstrument;
    if (!inst || !inst.oscs) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = "";

    // Render each oscillator card
    inst.oscs.forEach((osc, i) => {
      const card = document.createElement("div");
      card.className = "osc-card";

      // Header
      const header = document.createElement("div");
      header.className = "osc-header";

      const label = document.createElement("span");
      label.className = "osc-label";
      label.textContent = `Osc ${i + 1}`;
      header.appendChild(label);

      const wfBadge = document.createElement("span");
      wfBadge.className = "osc-badge waveform";
      wfBadge.textContent = osc.waveform;
      header.appendChild(wfBadge);

      if (osc.oct !== 0) {
        const octBadge = document.createElement("span");
        octBadge.className = "osc-badge";
        octBadge.textContent = `oct ${osc.oct > 0 ? "+" : ""}${osc.oct}`;
        header.appendChild(octBadge);
      }
      if (osc.detune) {
        const detBadge = document.createElement("span");
        detBadge.className = "osc-badge";
        detBadge.textContent = `detune ${osc.detune}c`;
        header.appendChild(detBadge);
      }
      if (osc.filterType) {
        const fBadge = document.createElement("span");
        fBadge.className = "osc-badge filter";
        fBadge.textContent = `${osc.filterType} Q:${osc.filterQ !== undefined ? osc.filterQ.toFixed(1) : "?"}`;
        header.appendChild(fBadge);
      }

      card.appendChild(header);

      // ADSR Envelopes
      const envRow = document.createElement("div");
      envRow.className = "osc-envelopes";

      if (osc.adsrGain) {
        envRow.appendChild(this.createEnvBlock("Gain", osc.adsrGain, "rgba(0, 217, 255, 0.9)"));
      }
      if (osc.adsrFilter) {
        envRow.appendChild(this.createEnvBlock("Filter Freq", osc.adsrFilter, "rgba(255, 171, 0, 0.9)"));
      }
      if (osc.adsrFilterQ) {
        envRow.appendChild(this.createEnvBlock("Filter Q", osc.adsrFilterQ, "rgba(255, 171, 0, 0.6)"));
      }
      if (osc.pENV && osc.pENV !== false) {
        envRow.appendChild(this.createEnvBlock("Pitch", osc.pENV, "rgba(233, 69, 96, 0.9)"));
      }

      card.appendChild(envRow);

      // Modulation badges
      const mods = [];
      if (osc.gLFO && osc.gLFO !== false) {
        mods.push(`Gain LFO: ${osc.gLFO.type} ${osc.gLFO.frequency.toFixed(1)}Hz`);
      }
      if (osc.fLFO && osc.fLFO !== false) {
        mods.push(`Filter LFO: ${osc.fLFO.type} ${osc.fLFO.frequency.toFixed(1)}Hz`);
      }
      if (osc.pLFO && osc.pLFO !== false) {
        mods.push(`Pitch LFO: ${osc.pLFO.type} ${osc.pLFO.frequency.toFixed(1)}Hz`);
      }
      if (osc.FM && osc.FM !== false) {
        mods.push(`FM: ${osc.FM.type} depth:${osc.FM.depth.toFixed(0)}`);
      }
      if (osc.dist) {
        mods.push(`Distortion: ${osc.dist.oversample || "none"}`);
      }

      if (mods.length > 0) {
        const modRow = document.createElement("div");
        modRow.className = "mod-badges";
        mods.forEach(m => {
          const badge = document.createElement("span");
          badge.className = "osc-badge mod";
          badge.textContent = m;
          modRow.appendChild(badge);
        });
        card.appendChild(modRow);
      }

      container.appendChild(card);
    });

    // Effects chain (shared across all oscs)
    const fx = inst.oscs[0] && inst.oscs[0].fx;
    if (fx && (fx.del || fx.verb)) {
      const fxRow = document.createElement("div");
      fxRow.className = "fx-chain";

      const fxLabel = document.createElement("span");
      fxLabel.className = "fx-chain-label";
      fxLabel.textContent = "Effects:";
      fxRow.appendChild(fxLabel);

      if (fx.del) {
        const delBadge = document.createElement("span");
        delBadge.className = "osc-badge fx";
        delBadge.textContent = `Delay ${(fx.del.time * 1000).toFixed(0)}ms fb:${(fx.del.feedback * 100).toFixed(0)}%`;
        fxRow.appendChild(delBadge);
      }
      if (fx.verb) {
        const verbBadge = document.createElement("span");
        verbBadge.className = "osc-badge fx";
        verbBadge.textContent = `Reverb ${fx.verb.duration.toFixed(1)}s decay:${(fx.verb.decay * 100).toFixed(0)}%`;
        fxRow.appendChild(verbBadge);
      }
      container.appendChild(fxRow);
    }
  },

  createEnvBlock(label, adsr, color) {
    const block = document.createElement("div");
    block.className = "env-block";

    const lbl = document.createElement("div");
    lbl.className = "env-label";
    lbl.textContent = label;
    block.appendChild(lbl);

    const canvas = document.createElement("canvas");
    canvas.className = "adsr-canvas";
    block.appendChild(canvas);

    // Draw after DOM insertion via rAF
    requestAnimationFrame(() => this.drawADSR(canvas, adsr, color));
    return block;
  },

  drawADSR(canvas, adsr, color) {
    if (!canvas.clientWidth) return;
    canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1);
    canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1);
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    ctx.scale(dpr, dpr);

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const pad = 4;
    const drawW = w - pad * 2;
    const drawH = h - pad * 2;

    // ADSR: {A: [time, level], D: [time, level], S: [time, level], R: [time, level]}
    const aTime = adsr.A[0], aLevel = adsr.A[1];
    const dTime = adsr.D[0], dLevel = adsr.D[1];
    const sTime = adsr.S[0], sLevel = adsr.S[1];
    const rTime = adsr.R[0], rLevel = adsr.R[1];

    const totalTime = aTime + dTime + sTime + rTime;
    if (totalTime === 0) return;

    const timeToX = (t) => pad + (t / totalTime) * drawW;
    const levelToY = (l) => pad + drawH - (l * drawH);

    // Build points
    const points = [
      [pad, levelToY(0)],                                      // Start at 0
      [timeToX(aTime), levelToY(aLevel)],                      // Attack peak
      [timeToX(aTime + dTime), levelToY(dLevel)],              // Decay
      [timeToX(aTime + dTime + sTime), levelToY(sLevel)],      // Sustain
      [timeToX(totalTime), levelToY(rLevel)],                  // Release
    ];

    // Fill area
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.lineTo(points[points.length - 1][0], levelToY(0));
    ctx.lineTo(points[0][0], levelToY(0));
    ctx.closePath();
    ctx.fillStyle = color.replace(/[\d.]+\)$/, "0.15)");
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Phase labels
    ctx.font = "9px sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.textAlign = "center";
    const labels = ["A", "D", "S", "R"];
    const xMids = [
      (points[0][0] + points[1][0]) / 2,
      (points[1][0] + points[2][0]) / 2,
      (points[2][0] + points[3][0]) / 2,
      (points[3][0] + points[4][0]) / 2,
    ];
    for (let i = 0; i < 4; i++) {
      if (xMids[i] - (i > 0 ? xMids[i-1] : pad) > 12) {
        ctx.fillText(labels[i], xMids[i], h - 2);
      }
    }
  },
};

window.addEventListener("load", () => ZynDemo.init());
