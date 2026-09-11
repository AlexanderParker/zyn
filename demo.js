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
  typeIcons: ["\u2601\uFE0F", "\uD83C\uDFB8", "\uD83D\uDD0A", "\uD83C\uDFB9", "\uD83E\uDE95", "\uD83D\uDD14", "\uD83C\uDFBB", "\uD83E\uDD41", "\uD83D\uDD28", "\u2728"],
  // Oscilloscope state
  scopeEnabled: true,
  scopeAnimId: null,
  analyserL: null,
  analyserR: null,
  scopeSplitter: null,
  findSimilarTimer: null,
  findSimilarTarget: null,  // Original instrument stored for retry
  // Instrument Design state
  designedInstrument: null,
  designSaves: [],
  isDesignActive: false,
  useDesignedInstrument: false, // Manual toggle for keyboard playback
  findSeedTimer: null,
  findSeedTarget: null,
  findSeedBestScore: null,
  findSeedBestSeed: null,

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
    this.setupPresetKeyboardNavigation();
    this.setupFocusSentinels();
    this.loadDesignSaves();
    this.initDesignTab();
    this.initChannels();
    this.renderChannelPresets();
    // Start oscilloscope
    this.initScope();
    this.drawScope();
    document.getElementById("scopeToggle").classList.remove("btn-secondary");
    document.getElementById("scopeToggle").classList.add("btn-info");
    // Handle widescreen transitions and resize
    let resizeTimer;
    const widescreenQuery = window.matchMedia("(min-width: 1400px)");
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.rebuildPianoKeyboard();
        this.updateWidescreenSidePanels(widescreenQuery.matches);
        if (widescreenQuery.matches) {
          this.renderInstrumentVisualizer();
          this.updateRecordingTabState();
        }
      }, 150);
    };
    widescreenQuery.addEventListener("change", onResize);
    window.addEventListener("resize", onResize);
    // Set up side panels on initial load if already widescreen
    if (widescreenQuery.matches) {
      this.updateWidescreenSidePanels(true);
    }
    // Auto-enable MIDI if previously enabled
    if (localStorage.getItem("zynMidiEnabled") === "true") {
      this.initMIDI();
    }
    // Restore force-route setting
    if (localStorage.getItem("zynForceRoute") === "true") {
      this.forceRouteToActive = true;
      const btn = document.getElementById("forceRouteToggle");
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-success");
      btn.textContent = "\u2611 Route to Active";
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
    // Highlight on-screen piano key
    const pianoNote = note - 60;
    const pianoKey = document.querySelector(`[data-note="${pianoNote}"]`);
    if (pianoKey) pianoKey.classList.add("pressed");
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
      // Unhighlight on-screen piano key (only if no other channel holds the same note)
      const stillHeld = Object.keys(this.midiNotes).some(k => k.endsWith(`_${note}`));
      if (!stillHeld) {
        const pianoNote = note - 60;
        const pianoKey = document.querySelector(`[data-note="${pianoNote}"]`);
        if (pianoKey) pianoKey.classList.remove("pressed");
      }
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
    this.updateChannelCodeSample();
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
    this.updateCodeSample(data.seed);
    this.activePresetIndex = null;
  },

  createChannelInputs() {
    const container = document.getElementById("midiChannelsSection");
    const grid = document.createElement("div");
    grid.className = "channel-grid";
    for (let ch = 0; ch < 16; ch++) {
      const row = document.createElement("div");
      row.className = "channel-row";
      row.id = `channelRow${ch}`;

      const label = document.createElement("label");
      label.className = "channel-label";
      label.tabIndex = 0;
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
      input.title = `Instrument assigned to MIDI channel ${ch + 1}`;

      // Set Active button
      const setActiveBtn = document.createElement("button");
      setActiveBtn.id = `setActive${ch}`;
      setActiveBtn.className = "set-active-btn";
      setActiveBtn.textContent = "\u{1F3AF} Set Active";
      setActiveBtn.title = `Set channel ${ch + 1} as active`;
      setActiveBtn.addEventListener("click", () => {
        if (setActiveBtn.getAttribute("aria-disabled") === "true") return;
        this.setActiveChannel(ch);
      });

      const clearBtn = document.createElement("button");
      clearBtn.id = `clearChannel${ch}`;
      clearBtn.textContent = "\u{1F5D1} Clear";
      clearBtn.className = "clear-btn";
      clearBtn.title = "Clear channel assignment";
      clearBtn.addEventListener("click", () => {
        if (clearBtn.getAttribute("aria-disabled") === "true") return;
        this.clearChannel(ch);
      });

      const header = document.createElement("div");
      header.className = "channel-header";
      header.appendChild(label);
      header.appendChild(activityDot);

      const buttons = document.createElement("div");
      buttons.className = "channel-buttons";
      buttons.appendChild(setActiveBtn);
      buttons.appendChild(clearBtn);

      row.appendChild(header);
      row.appendChild(buttons);
      row.appendChild(input);
      grid.appendChild(row);
    }
    container.appendChild(grid);

    // Arrow key navigation between channel labels
    grid.addEventListener("keydown", (e) => {
      const focused = document.activeElement;
      if (!focused || !focused.classList.contains("channel-label")) return;
      if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
      const labels = Array.from(grid.querySelectorAll(".channel-label"));
      const idx = labels.indexOf(focused);
      if (idx === -1) return;
      let next = -1;
      if (e.key === "ArrowDown") next = Math.min(idx + 1, labels.length - 1);
      else if (e.key === "ArrowUp") next = Math.max(idx - 1, 0);
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = labels.length - 1;
      if (next !== -1 && next !== idx) {
        e.preventDefault();
        labels[next].focus();
        labels[next].scrollIntoView({ block: "nearest" });
      }
    });
  },

  clearChannel(ch) {
    if (ch === this.activeChannel) return;
    this.releaseAllNotesOnChannel(ch);
    this.channels[ch] = null;
    this.saveChannels();
    this.updateChannelDisplay();
    this.updateChannelCodeSample();
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
        setActiveBtn.setAttribute("aria-disabled", isActive ? "true" : "false");
        setActiveBtn.textContent = isActive ? "\u2705 Active" : "\u{1F3AF} Set Active";
      }
      const row = document.getElementById(`channelRow${ch}`);
      if (row) {
        row.classList.toggle("active", isActive);
      }
      const clearBtn = document.getElementById(`clearChannel${ch}`);
      if (clearBtn) {
        clearBtn.setAttribute("aria-disabled", isActive ? "true" : "false");
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
    this.updateChannelCodeSample();
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
    const grid = document.createElement("div");
    grid.className = "channel-preset-grid";
    this.channelPresets.forEach((preset, index) => {
      const item = document.createElement("div");
      item.className = "preset-item";

      const name = document.createElement("span");
      name.className = "preset-name";
      name.textContent = preset.name;
      name.title = "Click to load this channel configuration";
      name.tabIndex = 0;
      name.setAttribute("role", "button");
      name.addEventListener("click", () => this.loadChannelPreset(preset));
      name.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); this.loadChannelPreset(preset); }
      });

      const actions = document.createElement("div");
      actions.className = "preset-controls";

      const renameBtn = document.createElement("button");
      renameBtn.className = "preset-btn rename";
      renameBtn.textContent = "Rename";
      renameBtn.title = "Rename this channel preset";
      renameBtn.addEventListener("click", () => {
        const newName = prompt("Enter new name:", preset.name);
        if (newName && newName.trim()) {
          this.renameChannelPreset(index, newName.trim());
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "preset-btn delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.title = "Delete this channel preset";
      deleteBtn.addEventListener("click", () => {
        if (confirm(`Delete channel preset "${preset.name}"?`)) {
          this.deleteChannelPreset(index);
        }
      });

      actions.appendChild(renameBtn);
      actions.appendChild(deleteBtn);

      item.appendChild(name);
      item.appendChild(actions);
      grid.appendChild(item);
    });
    container.appendChild(grid);

    // Arrow key navigation between channel preset names
    grid.addEventListener("keydown", (e) => {
      const focused = document.activeElement;
      if (!focused || !focused.classList.contains("preset-name")) return;
      if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
      const names = Array.from(grid.querySelectorAll(".preset-name"));
      const idx = names.indexOf(focused);
      if (idx === -1) return;
      let next = -1;
      if (e.key === "ArrowDown") next = Math.min(idx + 1, names.length - 1);
      else if (e.key === "ArrowUp") next = Math.max(idx - 1, 0);
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = names.length - 1;
      if (next !== -1 && next !== idx) {
        e.preventDefault();
        names[next].focus();
        names[next].scrollIntoView({ block: "nearest" });
      }
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

  copyToClipboard(text, triggerEl) {
    navigator.clipboard.writeText(text).then(() => {
      if (triggerEl) {
        const orig = triggerEl.textContent;
        triggerEl.textContent = "\u2705 Copied!";
        setTimeout(() => { triggerEl.textContent = orig; }, 1200);
      } else {
        this.showCopyToast();
      }
    });
  },

  showCopyToast() {
    let toast = document.getElementById("copyToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "copyToast";
      toast.className = "copy-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = "\u2705 Copied to clipboard";
    toast.classList.add("show");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
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

    // Build tab bar
    const tabBar = document.createElement("div");
    tabBar.className = "preset-tabs";
    tabBar.setAttribute("role", "tablist");
    tabBar.setAttribute("aria-label", "Preset categories");
    const contentContainer = document.createElement("div");
    contentContainer.className = "preset-tab-panels";

    const types = [];
    for (let type = 0; type <= 9; type++) {
      if (byType[type] && byType[type].length > 0) types.push(type);
    }

    // Determine which tab to activate (preserve selection across re-renders)
    let activeType = types.includes(this._activePresetTab) ? this._activePresetTab : types[0];

    types.forEach((type, idx) => {
      const typeName = this.typeNames[type];
      const icon = this.typeIcons[type];
      const isActive = type === activeType;

      // Tab button
      const tab = document.createElement("button");
      tab.className = "preset-tab";
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.tabIndex = isActive ? 0 : -1;
      tab.innerHTML = `<span class="preset-tab-icon">${icon}</span><span class="preset-tab-label">${typeName}</span><span class="preset-tab-count">${byType[type].length}</span>`;
      if (isActive) tab.classList.add("active");

      // Tab content panel
      const content = document.createElement("div");
      content.className = "preset-tab-panel";
      content.setAttribute("role", "tabpanel");
      content.tabIndex = 0;
      content.style.display = isActive ? "block" : "none";

      tab.addEventListener("click", () => {
        tabBar.querySelectorAll(".preset-tab").forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); t.tabIndex = -1; });
        contentContainer.querySelectorAll(".preset-tab-panel").forEach(p => { p.style.display = "none"; });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        tab.tabIndex = 0;
        content.style.display = "block";
        this._activePresetTab = type;
      });

      tabBar.appendChild(tab);
      contentContainer.appendChild(content);

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
        name.title = `Click to load instrument seed ${preset.seed}`;
        name.tabIndex = 0;
        name.setAttribute("role", "button");
        name.addEventListener("click", () => this.loadPreset(preset));
        name.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); this.loadPreset(preset); }
        });

        const seed = document.createElement("span");
        seed.className = "preset-seed";
        seed.tabIndex = 0;
        seed.textContent = preset.seed;
        seed.title = "Instrument seed number";

        const seedCopyBtn = document.createElement("button");
        seedCopyBtn.className = "btn-icon btn-xs";
        seedCopyBtn.textContent = "\uD83D\uDCCB";
        seedCopyBtn.title = "Copy seed to clipboard";
        seedCopyBtn.addEventListener("click", (e) => { e.stopPropagation(); this.copyToClipboard(String(preset.seed), seedCopyBtn); });

        headerRow.appendChild(name);
        headerRow.appendChild(seed);
        headerRow.appendChild(seedCopyBtn);

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
        copyBtn.addEventListener("click", () => this.copyToClipboard(String(preset.seed), copyBtn));

        const renameBtn = document.createElement("button");
        renameBtn.className = "preset-btn rename";
        renameBtn.textContent = "Rename";
        renameBtn.title = "Rename this preset";
        renameBtn.addEventListener("click", () => {
          const newName = prompt("Enter new name:", preset.name);
          if (newName && newName.trim()) {
            this.renamePreset(preset.index, newName.trim());
          }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "preset-btn delete";
        deleteBtn.title = "Delete this preset";
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
    });

    container.appendChild(tabBar);
    container.appendChild(contentContainer);

    // Arrow key navigation for preset category tabs
    tabBar.addEventListener("keydown", (e) => {
      const tabs = Array.from(tabBar.querySelectorAll(".preset-tab"));
      const idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;
      let next = -1;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      if (next !== -1) {
        e.preventDefault();
        tabs[next].focus();
        tabs[next].click();
      }
    });
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
    const typeLabel = document.getElementById("instrumentTypeLabel");
    const typeIdx = Math.abs(seed) % 10;
    if (typeLabel) typeLabel.textContent = `${this.typeIcons[typeIdx]} ${this.typeNames[typeIdx]}`;
    const headerSeed = document.getElementById("instrumentHeaderSeed");
    if (headerSeed) headerSeed.textContent = `#${seed}`;
    this.updateCodeSample(seed);
    if (this.channels[this.activeChannel]) this.syncActiveChannel();
  },

  updateCodeSample(seed) {
    const el = document.getElementById("codeSample");
    if (!el) return;
    el.textContent =
`<script src="Z.js"><\/script>
<script>
  // Initialise audio (must be called after user interaction)
  Z.init();

  // Generate instrument from seed ${seed}
  const instrument = Z.getInstrument(${seed});

  // Play middle C (one-shot with full ADSR envelope)
  Z.play(0, instrument);

  // Or use noteOn/noteOff for sustained notes:
  // const voiceId = Z.noteOn(0, instrument);
  // Z.noteOff(voiceId);
<\/script>`;
    this.updateChannelCodeSample();
  },

  updateChannelCodeSample() {
    const el = document.getElementById("channelCodeSample");
    if (!el) return;
    const lines = [];
    lines.push(`<script src="Z.js"><\/script>`);
    lines.push(`<script>`);
    lines.push(`  // Initialise audio (must be called after user interaction)`);
    lines.push(`  Z.init();`);
    lines.push(``);
    const assigned = [];
    for (let i = 0; i < 16; i++) {
      const ch = this.channels[i];
      if (ch) assigned.push({ index: i, seed: ch.seed, octave: ch.octave, volume: ch.volume });
    }
    if (assigned.length === 0) {
      lines.push(`  // No channels configured`);
    } else {
      lines.push(`  // Set up instruments for each channel`);
      lines.push(`  const channels = {};`);
      assigned.forEach(ch => {
        const type = this.typeNames[Math.abs(ch.seed) % 10];
        lines.push(`  channels[${ch.index}] = {`);
        lines.push(`    instrument: Z.getInstrument(${ch.seed}), // ${type}`);
        lines.push(`    octave: ${ch.octave},`);
        lines.push(`    volume: ${ch.volume}`);
        lines.push(`  };`);
      });
      lines.push(``);
      lines.push(`  // Play middle C on channel ${assigned[0].index}`);
      lines.push(`  const ch = channels[${assigned[0].index}];`);
      lines.push(`  Z.play(0, ch.instrument, ch.volume);`);
    }
    lines.push(`<\/script>`);
    el.textContent = lines.join("\n");
  },

  handleKeyPress(event) {
    if (this.isTextInputActive()) return;

    // Alt+key shortcuts
    if (event.altKey && !event.ctrlKey && !event.metaKey) {
      const tabMap = { "1": "about", "2": "presets", "3": "instrument", "4": "recording", "5": "midi", "6": "code", "7": "design" };
      if (tabMap[event.key]) {
        event.preventDefault();
        const tabId = tabMap[event.key];
        // Try widescreen side panel tab first, fall back to narrow tab
        const sideTab = document.querySelector(`.side-panel-tab[data-side-panel-id="tab-${tabId}"]`);
        if (sideTab) {
          sideTab.click();
          sideTab.focus();
        } else {
          const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
          if (btn) btn.click();
        }
        return;
      }
      const actionMap = { "g": () => this.handleRandomInstrument(), "s": () => this.handleFindSimilar(false), "d": () => this.handleFindSimilar(true), "r": () => this.toggleRecording() };
      const action = actionMap[event.key.toLowerCase()];
      if (action) {
        event.preventDefault();
        action();
        return;
      }
    }

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
    const blackNotes = [1, 3, 6, 8, 10];
    const isBlack = (n) => blackNotes.includes(((n % 12) + 12) % 12);

    // Measure actual white key width from CSS (handles mobile breakpoints)
    const probe = document.createElement("div");
    probe.className = "key white";
    probe.style.visibility = "hidden";
    keyboard.appendChild(probe);
    const whiteKeyW = probe.offsetWidth + 2; // width + margin
    keyboard.removeChild(probe);
    const pianoStyle = getComputedStyle(keyboard);
    const padPx = parseFloat(pianoStyle.paddingLeft) + parseFloat(pianoStyle.paddingRight);

    // Calculate how many white keys fit
    const availableW = keyboard.clientWidth - padPx;
    const minWhiteKeys = 10; // original range has 10 white keys
    const whiteKeyCount = Math.max(minWhiteKeys, Math.floor(availableW / whiteKeyW));

    // Count white keys in candidate range, centered on note 8 (original midpoint)
    const center = 8;
    let lo = center, hi = center;
    let whites = isBlack(center) ? 0 : 1;
    while (whites < whiteKeyCount) {
      lo--;
      if (!isBlack(lo)) whites++;
      if (whites >= whiteKeyCount) break;
      hi++;
      if (!isBlack(hi)) whites++;
    }
    // Extend to include any trailing black keys at edges
    while (isBlack(lo)) lo--;
    while (isBlack(hi)) hi++;

    for (let i = lo; i <= hi; i++) {
      const key = document.createElement("div");
      key.className = `key ${isBlack(i) ? "black" : "white"}`;
      key.dataset.note = i;
      const pianoKey = `piano_${i}`;
      const noteVal = i;
      key.addEventListener("mousedown", () => {
        if (!this.activeNotes[pianoKey]) {
          this.playNoteOn(noteVal, pianoKey);
        }
      });
      key.addEventListener("mouseup", () => this.playNoteOff(pianoKey));
      key.addEventListener("mouseleave", () => this.playNoteOff(pianoKey));
      key.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (!this.activeNotes[pianoKey]) {
          this.playNoteOn(noteVal, pianoKey);
        }
      });
      key.addEventListener("touchend", (e) => {
        e.preventDefault();
        this.playNoteOff(pianoKey);
      });
      keyboard.appendChild(key);
    }
  },

  rebuildPianoKeyboard() {
    const keyboard = document.getElementById("pianoKeyboard");
    const prevKeyCount = keyboard.children.length;
    keyboard.innerHTML = "";
    this.createPianoKeyboard();
    // Only re-highlight if key count changed
    if (keyboard.children.length !== prevKeyCount) {
      Object.values(this.activeNotes).forEach(({ note }) => {
        const keyEl = document.querySelector(`[data-note="${note}"]`);
        if (keyEl) keyEl.classList.add("pressed");
      });
    }
  },

  getActiveInstrument() {
    if (this.useDesignedInstrument && this.designedInstrument) {
      // Filter out disabled oscillators and return a playable version
      const allOscs = this.designedInstrument.oscs;
      const enabledIndices = [];
      allOscs.forEach((o, i) => { if (o.enabled !== false) enabledIndices.push(i); });
      if (enabledIndices.length === 0) return this.randInstrument; // Fallback if all disabled
      const enabledOscs = enabledIndices.map(i => allOscs[i]);
      // Remap fmMatrix and fmDelays to only include enabled oscillator routes
      let fmMatrix = null;
      let fmDelays = null;
      if (this.designedInstrument.fmMatrix) {
        const n = enabledIndices.length;
        fmMatrix = Array.from({ length: n }, (_, si) =>
          Array.from({ length: n }, (_, ti) =>
            this.designedInstrument.fmMatrix[enabledIndices[si]]?.[enabledIndices[ti]] || 0
          )
        );
        // Set to null if all zeros
        if (!fmMatrix.some(row => row.some(v => v !== 0))) fmMatrix = null;
        // Also remap delays if matrix is active
        if (fmMatrix && this.designedInstrument.fmDelays) {
          fmDelays = Array.from({ length: n }, (_, si) =>
            Array.from({ length: n }, (_, ti) =>
              this.designedInstrument.fmDelays[enabledIndices[si]]?.[enabledIndices[ti]] ?? 0.001
            )
          );
        }
      }
      return { ...this.designedInstrument, oscs: enabledOscs, fmMatrix, fmDelays };
    }
    return this.randInstrument;
  },

  getActiveInstrumentSettings() {
    // Returns { volume, octave } for the active instrument
    if (this.useDesignedInstrument && this.designedInstrument) {
      return {
        volume: this.designedInstrument.volume ?? 1.0,
        octave: this.designedInstrument.octave ?? 0
      };
    }
    return { volume: 1.0, octave: 0 };
  },

  updateInstrumentToggle() {
    const btn = document.getElementById("instrumentToggleBtn");
    if (!btn) return;
    if (this.useDesignedInstrument) {
      btn.textContent = "\uD83C\uDFA8 Design";
      btn.classList.remove("btn-secondary");
      btn.classList.add("btn-info");
      btn.title = "Playing designed instrument — click to switch to generated";
    } else {
      btn.textContent = "\uD83C\uDFB9 Generator";
      btn.classList.remove("btn-info");
      btn.classList.add("btn-secondary");
      btn.title = "Playing generated instrument — click to switch to designed";
    }
  },

  playNoteOn(note, trackingKey) {
    // Start recording on first note if armed
    if (this.isRecordingArmed && !this.isRecording) {
      this.startRecording();
    }
    const uiOctave = parseInt(document.getElementById("octaveSelect").value);
    const instSettings = this.getActiveInstrumentSettings();
    const octave = uiOctave + instSettings.octave;
    const gain = this.volume * instSettings.volume;
    const voiceId = Z.noteOn(note + octave * 12, this.getActiveInstrument(), gain);
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
    this.findSimilarTarget = null;
    document.getElementById("retrySimilarButton").style.display = "none";
    this.setVolume(1.0);
    this.updateInstrumentAndPushState(newSeed);
  },

  compareInstruments(a, b) {
    // Returns a normalized score from 0-100 where 100 is a perfect match
    let totalWeight = 0;
    let matchScore = 0;

    // Helper: similarity between 0-1 based on difference within a range
    const proximity = (v1, v2, maxDiff) => {
      const diff = Math.abs(v1 - v2);
      return Math.max(0, 1 - diff / maxDiff);
    };

    // Helper: ADSR envelope similarity (0-1)
    const envSimilarity = (ea, eb) => {
      if (!ea || !eb) return ea === eb ? 1 : 0;
      let sum = 0;
      for (const k of ["A", "D", "S", "R"]) {
        // Times can vary widely, use log scale for comparison
        const t1 = ea[k][0], t2 = eb[k][0];
        const timeSim = proximity(Math.log(t1 + 0.001), Math.log(t2 + 0.001), 3);
        // Levels are 0-1
        const levelSim = proximity(ea[k][1], eb[k][1], 1);
        sum += (timeSim + levelSim) / 2;
      }
      return sum / 4;
    };

    // Helper: LFO similarity (0-1)
    const lfoSimilarity = (la, lb) => {
      if (!la && !lb) return 1;
      if (!la || !lb) return 0;
      let sum = 0;
      sum += la.type === lb.type ? 1 : 0.25;
      sum += proximity(Math.log(la.frequency + 0.1), Math.log(lb.frequency + 0.1), 4);
      sum += proximity(la.depth, lb.depth, Math.max(la.depth, lb.depth, 1));
      return sum / 3;
    };

    // Oscillator count similarity (weight: 10)
    const maxOscs = Math.max(a.oscs.length, b.oscs.length);
    const minOscs = Math.min(a.oscs.length, b.oscs.length);
    const oscCountSim = minOscs / maxOscs;
    matchScore += oscCountSim * 10;
    totalWeight += 10;

    // Compare matched oscillators
    for (let i = 0; i < minOscs; i++) {
      const oa = a.oscs[i], ob = b.oscs[i];
      const oscWeight = 90 / maxOscs; // Distribute 90 points across oscillators

      // Waveform (weight: 15% of osc)
      const wfMatch = oa.waveform === ob.waveform ? 1 : 0;
      matchScore += wfMatch * oscWeight * 0.15;
      totalWeight += oscWeight * 0.15;

      // Octave (weight: 8% of osc) - range is -3 to 3
      const octSim = proximity(oa.oct, ob.oct, 6);
      matchScore += octSim * oscWeight * 0.08;
      totalWeight += oscWeight * 0.08;

      // Detune (weight: 5% of osc) - typically 0 or small values
      const detSim = proximity(oa.detune || 0, ob.detune || 0, 100);
      matchScore += detSim * oscWeight * 0.05;
      totalWeight += oscWeight * 0.05;

      // Filter type (weight: 8% of osc)
      const ftMatch = oa.filterType === ob.filterType ? 1 : 0;
      matchScore += ftMatch * oscWeight * 0.08;
      totalWeight += oscWeight * 0.08;

      // Filter Q (weight: 5% of osc) - range 0-30
      const fqSim = proximity(oa.filterQ || 0, ob.filterQ || 0, 30);
      matchScore += fqSim * oscWeight * 0.05;
      totalWeight += oscWeight * 0.05;

      // Gain envelope (weight: 15% of osc)
      const gainEnvSim = envSimilarity(oa.adsrGain, ob.adsrGain);
      matchScore += gainEnvSim * oscWeight * 0.15;
      totalWeight += oscWeight * 0.15;

      // Filter envelope (weight: 10% of osc)
      const filterEnvSim = envSimilarity(oa.adsrFilter, ob.adsrFilter);
      matchScore += filterEnvSim * oscWeight * 0.10;
      totalWeight += oscWeight * 0.10;

      // Filter Q envelope (weight: 5% of osc)
      const filterQEnvSim = envSimilarity(oa.adsrFilterQ, ob.adsrFilterQ);
      matchScore += filterQEnvSim * oscWeight * 0.05;
      totalWeight += oscWeight * 0.05;

      // Pitch envelope (weight: 7% of osc)
      const pEnvSim = envSimilarity(oa.pENV || null, ob.pENV || null);
      matchScore += pEnvSim * oscWeight * 0.07;
      totalWeight += oscWeight * 0.07;

      // LFOs (weight: 4% each = 12% of osc)
      matchScore += lfoSimilarity(oa.gLFO || null, ob.gLFO || null) * oscWeight * 0.04;
      matchScore += lfoSimilarity(oa.fLFO || null, ob.fLFO || null) * oscWeight * 0.04;
      matchScore += lfoSimilarity(oa.pLFO || null, ob.pLFO || null) * oscWeight * 0.04;
      totalWeight += oscWeight * 0.12;

      // FM (weight: 5% of osc)
      const fmSim = lfoSimilarity(oa.FM || null, ob.FM || null);
      matchScore += fmSim * oscWeight * 0.05;
      totalWeight += oscWeight * 0.05;

      // Effects (weight: 5% of osc)
      const delA = oa.fx?.del, delB = ob.fx?.del;
      const verbA = oa.fx?.verb, verbB = ob.fx?.verb;
      let fxSim = 0, fxCount = 0;
      // Delay
      if (!delA && !delB) { fxSim += 1; fxCount++; }
      else if (delA && delB) {
        fxSim += (proximity(delA.time, delB.time, 0.5) + proximity(delA.feedback, delB.feedback, 0.8)) / 2;
        fxCount++;
      } else { fxCount++; }
      // Reverb
      if (!verbA && !verbB) { fxSim += 1; fxCount++; }
      else if (verbA && verbB) {
        fxSim += (proximity(verbA.duration, verbB.duration, 3) + proximity(verbA.decay, verbB.decay, 0.5)) / 2;
        fxCount++;
      } else { fxCount++; }
      matchScore += (fxCount > 0 ? fxSim / fxCount : 0) * oscWeight * 0.05;
      totalWeight += oscWeight * 0.05;
    }

    // FM Matrix comparison (weight: 3 points)
    const fmA = a.fmMatrix, fmB = b.fmMatrix;
    if (!fmA && !fmB) {
      matchScore += 3;
    } else if (fmA && fmB) {
      const maxN = Math.max(fmA.length, fmB.length);
      const minN = Math.min(fmA.length, fmB.length);
      let fmSim = 0;
      let fmCells = 0;
      for (let s = 0; s < minN; s++) {
        for (let t = 0; t < minN; t++) {
          const va = fmA[s]?.[t] || 0;
          const vb = fmB[s]?.[t] || 0;
          fmSim += proximity(va, vb, 2);
          fmCells++;
        }
      }
      const sizePenalty = minN / maxN;
      matchScore += (fmCells > 0 ? (fmSim / fmCells) * sizePenalty : 0) * 3;
    }
    // One has matrix, other doesn't: 0 points
    totalWeight += 3;

    // Return percentage (0-100)
    return totalWeight > 0 ? (matchScore / totalWeight) * 100 : 0;
  },

  handleFindSimilar(mode) {
    // mode: false = timed 10s, true = retry, "threshold" = search until threshold
    if (this.findSimilarTimer) return; // Already running
    const btn = document.getElementById("findSimilarButton");
    const retryBtn = document.getElementById("retrySimilarButton");
    const searchUntilBtn = document.getElementById("searchUntilSimilarButton");
    const thresholdSelect = document.getElementById("similarThresholdSelect");
    const isThreshold = mode === "threshold";
    const retry = mode === true;

    // On retry or threshold, use the stored original target; otherwise capture current instrument
    const target = (retry || isThreshold) && this.findSimilarTarget
      ? this.findSimilarTarget
      : this.randInstrument;
    if (!retry && !isThreshold) this.findSimilarTarget = target;
    if (isThreshold && !this.findSimilarTarget) this.findSimilarTarget = target;

    const threshold = isThreshold && thresholdSelect ? parseInt(thresholdSelect.value) : 0;
    const typeIdx = Z.instrumentTypes.indexOf(target.type);
    const searchTypeDigit = typeIdx >= 0 ? typeIdx : Math.abs(this.randInstrumentSeed) % 10;
    let bestSeed = null;
    let bestScore = -1;
    let tested = 0;
    const duration = isThreshold ? 0 : 10000;
    const startTime = Date.now();

    btn.textContent = "\u{1F50D} Searching...";
    btn.classList.remove("btn-info");
    btn.classList.add("btn-warning");
    retryBtn.style.display = "none";
    if (searchUntilBtn && isThreshold) searchUntilBtn.textContent = "\u23F9 Cancel";

    const batchSize = 100;
    const finishSimilar = () => {
      clearInterval(this.findSimilarTimer);
      this.findSimilarTimer = null;
      this.cancelFindSimilar = null;
      btn.textContent = "\u{1F50D} Find Similar";
      btn.classList.remove("btn-warning");
      btn.classList.add("btn-info");
      retryBtn.style.display = "";
      if (searchUntilBtn) searchUntilBtn.textContent = "\uD83C\uDFAF Search Until";
      if (bestSeed !== null) {
        document.getElementById("instrumentSeedInput").value = bestSeed;
        this.activePresetIndex = null;
        this.updateInstrumentAndPushState(bestSeed);
      }
    };
    this.cancelFindSimilar = finishSimilar;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (!isThreshold && elapsed >= duration) {
        finishSimilar();
        return;
      }
      // Test a batch of random seeds in the same type
      for (let i = 0; i < batchSize; i++) {
        const seed = Math.floor(Math.random() * Math.floor(Z.mInt / 10)) * 10 + searchTypeDigit;
        const candidate = Z.getInstrument(seed);
        const score = this.compareInstruments(target, candidate);
        if (score > bestScore) {
          bestScore = score;
          bestSeed = seed;
          if (isThreshold && bestScore >= threshold) {
            finishSimilar();
            return;
          }
        }
        tested++;
      }
      // Update button with progress
      const pct = bestScore > 0 ? " \u2014 " + bestScore.toFixed(1) + "%" : "";
      if (!isThreshold) {
        const remaining = Math.ceil((duration - elapsed) / 1000);
        btn.textContent = `\u{1F50D} ${remaining}s${pct}`;
      } else {
        btn.textContent = `\u{1F50D} Searching...${pct}`;
      }
    };

    tick();
    this.findSimilarTimer = setInterval(tick, 100);
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
    // Clear MIDI notes and unhighlight piano keys
    Object.keys(this.midiNotes).forEach((key) => {
      const midiNote = parseInt(key.split("_")[1]);
      const pianoNote = midiNote - 60;
      const pianoKey = document.querySelector(`[data-note="${pianoNote}"]`);
      if (pianoKey) pianoKey.classList.remove("pressed");
    });
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
      btn.textContent = "\u23F9\uFE0F Stop Rec";
      btn.classList.add("btn-danger", "recording-pulse");
    } else if (this.isRecordingArmed) {
      btn.textContent = "\u{1F7E1} Armed...";
      btn.classList.add("btn-warning", "recording-pulse");
    } else {
      btn.textContent = "\u{1F534} Record";
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
      name.tabIndex = 0;
      name.setAttribute("role", "button");
      name.addEventListener("click", () => this.renameClip(index));
      name.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); this.renameClip(index); }
      });

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
      downloadBtn.textContent = "\u{1F4BE} Save WAV";
      downloadBtn.className = "btn-success";
      downloadBtn.title = "Export this clip as a WAV file";
      downloadBtn.addEventListener("click", () => this.downloadClipAsWav(index));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "\u{1F5D1} Delete";
      deleteBtn.className = "btn-danger";
      deleteBtn.title = "Delete this clip";
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

  // True only when the focused element is something you TYPE into.
  //
  // It used to be true for any <input>, which included every slider on the
  // page: touching the volume slider stood the whole QWERTY keyboard down
  // until you clicked somewhere else, with nothing to say why. A range, a
  // checkbox and a button take focus but consume no letters.
  isTextInputActive() {
    const el = document.activeElement;
    if (!el) return false;
    if (el.isContentEditable) return true;
    const tag = el.tagName;
    if (tag === "TEXTAREA") return true;
    if (tag !== "INPUT") return false;
    const typed = ["text", "number", "search", "email", "password", "tel", "url", "date", "time"];
    return typed.includes((el.getAttribute("type") || "text").toLowerCase());
  },

  // A rotary control built on a <div>.
  //
  // Drag vertically to change, shift for fine, wheel to step, double-click to
  // recentre, arrows and Home when focused. Not an <input type="range">: a
  // real input takes keyboard focus and would put the note keys out of action
  // for as long as it held it, which is exactly the complaint that made these
  // knobs rather than sliders.
  setupKnob(id, opts) {
    const el = document.getElementById(id);
    if (!el) return;
    const { min, max, step = 1, unit = "", name = "", onChange } = opts;
    const dial = el.querySelector(".knob-dial");
    const label = el.querySelector(".knob-label");
    let value = 0;

    const render = () => {
      // 270 degrees of travel, centred, which is the span a hand can cover in
      // one movement without letting go.
      const t = (value - min) / (max - min);
      dial.style.setProperty("--knob-angle", `${-135 + t * 270}deg`);
      label.textContent = `${name} ${value > 0 ? "+" : ""}${value}${unit}`;
      el.setAttribute("aria-valuenow", String(value));
      el.dataset.live = value === 0 ? "0" : "1";
    };

    const set = (v) => {
      const next = Math.max(min, Math.min(max, Math.round(v / step) * step));
      if (next === value) return;
      value = next;
      render();
      if (onChange) onChange(value);
    };

    let dragFrom = 0, dragStart = 0;
    el.addEventListener("pointerdown", (e) => {
      // Focus follows the click for keyboard users, but the note keys keep
      // working because this is not an input -- see isTextInputActive.
      el.setPointerCapture(e.pointerId);
      dragFrom = e.clientY;
      dragStart = value;
      e.preventDefault();
    });
    el.addEventListener("pointermove", (e) => {
      if (!el.hasPointerCapture(e.pointerId)) return;
      // 150 px of travel covers the range; shift gives a tenth of that.
      const span = (max - min) * (e.shiftKey ? 0.1 : 1);
      set(dragStart + ((dragFrom - e.clientY) * span) / 150);
    });
    const release = (e) => {
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
    el.addEventListener("wheel", (e) => {
      e.preventDefault();
      set(value + (e.deltaY < 0 ? step : -step) * (e.shiftKey ? 1 : 5));
    }, { passive: false });
    // A sweep you cannot get back to centre is a sweep you daren't use.
    el.addEventListener("dblclick", () => set(0));
    el.addEventListener("keydown", (e) => {
      const big = e.shiftKey ? 1 : 5;
      if (e.key === "ArrowUp" || e.key === "ArrowRight") set(value + step * big);
      else if (e.key === "ArrowDown" || e.key === "ArrowLeft") set(value - step * big);
      else if (e.key === "Home") set(0);
      else return;
      e.preventDefault();
      e.stopPropagation();
    });

    render();
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
    // Keyboard support for .tab-help accordions
    document.querySelectorAll(".tab-help[role='button']").forEach(el => {
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          el.click();
        }
      });
    });
  },

  setupFocusSentinels() {
    const tabOrder = ["about", "presets", "instrument", "recording", "midi", "code", "design"];
    document.querySelectorAll(".tab-content").forEach(panel => {
      const sentinel = document.createElement("div");
      sentinel.className = "focus-sentinel";
      sentinel.tabIndex = 0;
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.addEventListener("focus", () => {
        const panelId = panel.id.replace("tab-", "");
        const idx = tabOrder.indexOf(panelId);
        const nextId = tabOrder[(idx + 1) % tabOrder.length];
        // Try widescreen side panel tab first
        const sideTab = document.querySelector(`.side-panel-tab[data-side-panel-id="tab-${nextId}"]`);
        if (sideTab) {
          sideTab.focus();
          return;
        }
        // Fall back to narrow tab button
        const btn = document.querySelector(`.tab-btn[data-tab="${nextId}"]`);
        if (btn) btn.focus();
      });
      panel.appendChild(sentinel);
    });
  },

  setupPresetKeyboardNavigation() {
    const container = document.getElementById("presetAccordion");
    if (!container) return;
    container.addEventListener("keydown", (e) => {
      if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
      const focused = document.activeElement;
      if (!focused || !focused.classList.contains("preset-name")) return;
      const activePanel = container.querySelector('.preset-tab-panel[style*="display: block"]');
      if (!activePanel) return;
      const names = Array.from(activePanel.querySelectorAll(".preset-name"));
      const idx = names.indexOf(focused);
      if (idx === -1) return;
      let next = -1;
      if (e.key === "ArrowDown") next = Math.min(idx + 1, names.length - 1);
      else if (e.key === "ArrowUp") next = Math.max(idx - 1, 0);
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = names.length - 1;
      if (next !== -1 && next !== idx) {
        e.preventDefault();
        names[next].focus();
        names[next].scrollIntoView({ block: "nearest" });
      }
    });
  },

  updateWidescreenSidePanels(isWide) {
    const sideContainer = document.querySelector(".side-panels");
    if (!sideContainer) return;
    const sidePanelIds = ["tab-about", "tab-presets", "tab-recording", "tab-midi", "tab-code", "tab-design"];

    if (isWide && !sideContainer.querySelector(".side-panel-tabs")) {
      // Entering widescreen — build tab bar + content area
      const tabBar = document.createElement("div");
      tabBar.className = "side-panel-tabs";
      tabBar.setAttribute("role", "tablist");
      tabBar.setAttribute("aria-label", "Side panels");

      sidePanelIds.forEach((id, i) => {
        const panel = document.getElementById(id);
        if (!panel) return;
        const title = panel.dataset.panelTitle || id;

        // Create tab button
        const tab = document.createElement("button");
        tab.className = "side-panel-tab";
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
        tab.setAttribute("aria-controls", `side-body-${id}`);
        tab.tabIndex = i === 0 ? 0 : -1;
        tab.dataset.sidePanelId = id;
        tab.textContent = title;
        if (i === 0) tab.classList.add("active");
        tabBar.appendChild(tab);

        // Create body wrapper and move all panel children into it
        const body = document.createElement("div");
        body.className = "side-panel-body";
        body.setAttribute("role", "tabpanel");
        body.id = `side-body-${id}`;
        body.tabIndex = i === 0 ? 0 : -1;
        body.dataset.sidePanelId = id;
        body.style.display = i === 0 ? "block" : "none";
        while (panel.firstChild) body.appendChild(panel.firstChild);

        sideContainer.insertBefore(body, panel);

        // Click handler — switch tabs
        tab.addEventListener("click", () => {
          const allTabs = sideContainer.querySelectorAll(".side-panel-tab");
          const allBodies = sideContainer.querySelectorAll(".side-panel-body");
          allTabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); t.tabIndex = -1; });
          allBodies.forEach(b => { b.style.display = "none"; b.tabIndex = -1; });
          tab.classList.add("active");
          tab.setAttribute("aria-selected", "true");
          tab.tabIndex = 0;
          body.style.display = "block";
          body.tabIndex = 0;
          this.isDesignActive = (id === "tab-design");
          if (id === "tab-design") {
            this.redrawDesignCanvases();
            this.useDesignedInstrument = true;
            this.updateInstrumentToggle();
          }
          if (id === "tab-recording") this.updateRecordingTabState();
        });
      });

      sideContainer.insertBefore(tabBar, sideContainer.firstChild);

      // Arrow key navigation for side panel tabs
      tabBar.addEventListener("keydown", (e) => {
        const tabs = Array.from(tabBar.querySelectorAll(".side-panel-tab"));
        const idx = tabs.indexOf(document.activeElement);
        if (idx === -1) return;
        let next = -1;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % tabs.length;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next !== -1) {
          e.preventDefault();
          tabs[next].focus();
          tabs[next].click();
        }
      });
    } else if (!isWide && sideContainer.querySelector(".side-panel-tabs")) {
      // Leaving widescreen — restore original DOM
      sidePanelIds.forEach(id => {
        const panel = document.getElementById(id);
        if (!panel) return;
        const body = sideContainer.querySelector(`.side-panel-body[data-side-panel-id="${id}"]`);
        if (body) {
          while (body.firstChild) panel.appendChild(body.firstChild);
          body.remove();
        }
      });
      const tabBar = sideContainer.querySelector(".side-panel-tabs");
      if (tabBar) tabBar.remove();
    }
  },

  setupTabs() {
    const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
    const tabContents = document.querySelectorAll(".tab-content");

    const activateTab = (btn) => {
      const tabId = btn.dataset.tab;

      // Update button states
      tabBtns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); b.tabIndex = -1; });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      btn.tabIndex = 0;

      // Update content states
      tabContents.forEach(content => {
        const isActive = content.id === `tab-${tabId}`;
        content.classList.toggle("active", isActive);
        content.tabIndex = isActive ? 0 : -1;
      });

      this.isDesignActive = (tabId === "design");
      if (tabId === "design") {
        this.redrawDesignCanvases();
        this.useDesignedInstrument = true;
        this.updateInstrumentToggle();
      }
      // Update no clips message visibility when switching to recording tab
      if (tabId === "recording") {
        this.updateRecordingTabState();
      }
      // Redraw instrument visualizer when switching to instrument tab
      if (tabId === "instrument") {
        this.renderInstrumentVisualizer();
      }
    };

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => activateTab(btn));
    });

    // Arrow key navigation between tabs
    document.querySelector(".tab-nav").addEventListener("keydown", (e) => {
      const idx = tabBtns.indexOf(document.activeElement);
      if (idx === -1) return;
      let next = -1;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % tabBtns.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + tabBtns.length) % tabBtns.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabBtns.length - 1;
      if (next !== -1) {
        e.preventDefault();
        tabBtns[next].focus();
        activateTab(tabBtns[next]);
      }
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
    document.getElementById("findSimilarButton").addEventListener("click", () => this.handleFindSimilar(false));
    document.getElementById("retrySimilarButton").addEventListener("click", () => this.handleFindSimilar(true));
    document.getElementById("searchUntilSimilarButton").addEventListener("click", () => {
      if (this.findSimilarTimer) {
        if (this.cancelFindSimilar) this.cancelFindSimilar();
      } else {
        this.handleFindSimilar("threshold");
      }
    });
    document.getElementById("copyHeaderSeed").addEventListener("click", (e) => {
      e.stopPropagation();
      this.copyToClipboard(String(this.randInstrumentSeed), document.getElementById("copyHeaderSeed"));
    });
    document.getElementById("copyJsonButton").addEventListener("click", () => {
      this.copyToClipboard(JSON.stringify(this.randInstrument, null, 2), document.getElementById("copyJsonButton"));
    });
    document.getElementById("copyCodeButton").addEventListener("click", () => {
      const code = document.getElementById("codeSample").textContent;
      this.copyToClipboard(code, document.getElementById("copyCodeButton"));
    });
    document.getElementById("copyChannelCodeButton").addEventListener("click", () => {
      const code = document.getElementById("channelCodeSample").textContent;
      this.copyToClipboard(code, document.getElementById("copyChannelCodeButton"));
    });
    document.getElementById("copyDesignCodeButton").addEventListener("click", () => {
      const code = document.getElementById("designCodeSample").textContent;
      this.copyToClipboard(code, document.getElementById("copyDesignCodeButton"));
    });
    document.getElementById("stopAllButton").addEventListener("click", this.handleStopAll.bind(this));
    document.getElementById("instrumentToggleBtn").addEventListener("click", () => {
      this.useDesignedInstrument = !this.useDesignedInstrument;
      this.updateInstrumentToggle();
    });
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
    // Live filter modulation. Unlike everything else on this page these reach
    // notes that are already sounding, so hold a chord down and sweep them.
    // Deliberately not saved with a preset: they are a performance control,
    // not part of what a seed is.
    this.filterMod = { cutoff: 0, res: 0 };
    const applyFilterMod = () => Z.setFilterMod(this.filterMod.cutoff, this.filterMod.res);

    this.setupKnob("filterCutoffMod", {
      min: -48, max: 48, step: 1, unit: " st", name: "Cutoff",
      onChange: (v) => { this.filterMod.cutoff = v; applyFilterMod(); },
    });
    this.setupKnob("filterResMod", {
      min: -30, max: 30, step: 1, unit: " dB", name: "Res",
      onChange: (v) => { this.filterMod.res = v; applyFilterMod(); },
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
    document.getElementById("forceRouteToggle").addEventListener("click", (e) => {
      this.forceRouteToActive = !this.forceRouteToActive;
      const btn = e.currentTarget;
      btn.classList.toggle("btn-secondary", !this.forceRouteToActive);
      btn.classList.toggle("btn-success", this.forceRouteToActive);
      btn.textContent = this.forceRouteToActive ? "\u2611 Route to Active" : "\u2610 Route to Active";
      localStorage.setItem("zynForceRoute", this.forceRouteToActive ? "true" : "false");
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
    ctx.fillStyle = "#0a0a0a";
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
      card.tabIndex = 0;
      card.setAttribute("role", "region");

      // Build aria-label summary
      const descParts = [`Oscillator ${i + 1}: ${osc.waveform}`];
      descParts.push(`octave ${osc.oct > 0 ? "+" : ""}${osc.oct}`);
      descParts.push(`detune ${osc.detune || 0}`);
      if (osc.filterType) descParts.push(`${osc.filterType} filter Q:${osc.filterQ !== undefined ? osc.filterQ.toFixed(1) : "?"}`);
      card.setAttribute("aria-label", descParts.join(", "));

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

      const octBadge = document.createElement("span");
      octBadge.className = "osc-badge";
      octBadge.textContent = `oct ${osc.oct > 0 ? "+" : ""}${osc.oct}`;
      header.appendChild(octBadge);

      const detBadge = document.createElement("span");
      detBadge.className = "osc-badge";
      detBadge.textContent = `detune ${osc.detune || 0}`;
      header.appendChild(detBadge);
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
        modRow.tabIndex = 0;
        modRow.setAttribute("aria-label", "Modulation: " + mods.join(", "));
        mods.forEach(m => {
          const badge = document.createElement("span");
          badge.className = "osc-badge mod";
          badge.textContent = m;
          modRow.appendChild(badge);
        });
        card.appendChild(modRow);
      }

      // Per-oscillator effects
      const fx = osc.fx;
      if (fx && (fx.del || fx.verb)) {
        const fxRow = document.createElement("div");
        fxRow.className = "mod-badges";
        fxRow.tabIndex = 0;
        const fxParts = [];
        if (fx.del) {
          const delBadge = document.createElement("span");
          delBadge.className = "osc-badge fx";
          const mixStr = (fx.del.mix !== undefined && fx.del.mix !== 1) ? ` mix:${(fx.del.mix * 100).toFixed(0)}%` : "";
          delBadge.textContent = `Delay ${(fx.del.time * 1000).toFixed(0)}ms fb:${(fx.del.feedback * 100).toFixed(0)}%${mixStr}`;
          fxRow.appendChild(delBadge);
          fxParts.push(`Delay ${(fx.del.time * 1000).toFixed(0)}ms feedback ${(fx.del.feedback * 100).toFixed(0)}%${mixStr}`);
        }
        if (fx.verb) {
          const verbBadge = document.createElement("span");
          verbBadge.className = "osc-badge fx";
          verbBadge.textContent = `Reverb ${fx.verb.duration.toFixed(1)}s decay:${(fx.verb.decay * 100).toFixed(0)}%`;
          fxRow.appendChild(verbBadge);
          fxParts.push(`Reverb ${fx.verb.duration.toFixed(1)}s decay ${(fx.verb.decay * 100).toFixed(0)}%`);
        }
        fxRow.setAttribute("aria-label", "Effects: " + fxParts.join(", "));
        card.appendChild(fxRow);
      }

      container.appendChild(card);
    });

    // FM Matrix visualization
    if (inst.fmMatrix) {
      const hasRouting = inst.fmMatrix.some(row => row.some(v => v !== 0));
      if (hasRouting) {
        const matrixCard = document.createElement("div");
        matrixCard.className = "osc-card";
        matrixCard.tabIndex = 0;
        matrixCard.setAttribute("role", "region");
        matrixCard.setAttribute("aria-label", "FM Matrix routing");

        const header = document.createElement("div");
        header.className = "osc-header";
        const label = document.createElement("span");
        label.className = "osc-label";
        label.textContent = "FM Matrix";
        header.appendChild(label);
        matrixCard.appendChild(header);

        const n = inst.oscs.length;
        const grid = document.createElement("div");
        grid.className = "fm-matrix-grid";
        grid.style.cssText = `display: grid; grid-template-columns: auto repeat(${n}, 1fr); gap: 2px;`;

        // Corner cell
        const corner = document.createElement("div");
        corner.className = "fm-matrix-label";
        corner.textContent = "";
        grid.appendChild(corner);

        // Column headers
        for (let t = 0; t < n; t++) {
          const th = document.createElement("div");
          th.className = "fm-matrix-label";
          th.textContent = `O${t + 1}`;
          grid.appendChild(th);
        }

        // Rows
        for (let s = 0; s < n; s++) {
          const rh = document.createElement("div");
          rh.className = "fm-matrix-label";
          rh.textContent = `O${s + 1}`;
          grid.appendChild(rh);

          for (let t = 0; t < n; t++) {
            const cell = document.createElement("div");
            cell.className = "fm-matrix-cell";
            const val = inst.fmMatrix[s]?.[t] || 0;
            cell.textContent = val === 0 ? "-" : val.toFixed(2);
            if (val !== 0) {
              const intensity = Math.abs(val);
              const hue = val > 0 ? 190 : 350;
              cell.style.background = `hsla(${hue}, 80%, 50%, ${intensity * 0.4})`;
            }
            grid.appendChild(cell);
          }
        }

        matrixCard.appendChild(grid);
        container.appendChild(matrixCard);
      }
    }
  },

  createEnvBlock(label, adsr, color) {
    const block = document.createElement("div");
    block.className = "env-block";
    block.tabIndex = 0;

    const fmtTime = (t) => t >= 1 ? t.toFixed(1) + "s" : Math.round(t * 1000) + "ms";
    const fmtLevel = (l) => Math.round(l * 100) + "%";
    block.setAttribute("aria-label",
      `${label} envelope: attack ${fmtTime(adsr.A[0])} ${fmtLevel(adsr.A[1])}, ` +
      `decay ${fmtTime(adsr.D[0])} ${fmtLevel(adsr.D[1])}, ` +
      `sustain ${fmtTime(adsr.S[0])} ${fmtLevel(adsr.S[1])}, ` +
      `release ${fmtTime(adsr.R[0])} ${fmtLevel(adsr.R[1])}`
    );

    const lbl = document.createElement("div");
    lbl.className = "env-label";
    lbl.textContent = label;
    block.appendChild(lbl);

    const canvas = document.createElement("canvas");
    canvas.className = "adsr-canvas";
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", `${label} ADSR envelope graph`);
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
    const bottomPad = 14;
    const drawW = w - pad * 2;
    const drawH = h - pad - bottomPad;

    // ADSR: {A: [time, level], D: [time, level], S: [time, level], R: [time, level]}
    const aTime = adsr.A[0], aLevel = adsr.A[1];
    const dTime = adsr.D[0], dLevel = adsr.D[1];
    const sTime = adsr.S[0], sLevel = adsr.S[1];
    const rTime = adsr.R[0], rLevel = adsr.R[1];

    const totalTime = aTime + dTime + sTime + rTime;
    if (totalTime === 0) return;

    const timeToX = (t) => pad + (t / totalTime) * drawW;
    const levelToY = (l) => pad + drawH - (l * drawH);
    const fmtTime = (t) => t >= 1 ? t.toFixed(1) + "s" : Math.round(t * 1000) + "ms";

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

    // Draw dots at each point
    for (let i = 1; i < points.length; i++) {
      ctx.beginPath();
      ctx.arc(points[i][0], points[i][1], 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    // Phase labels between points
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
        ctx.fillText(labels[i], xMids[i], h - bottomPad - 1);
      }
    }

    // Time labels at each point
    ctx.font = "8px sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    const phaseTimes = [aTime, dTime, sTime, rTime];
    let lastLabelEnd = 0;
    for (let i = 0; i < 4; i++) {
      const label = fmtTime(phaseTimes[i]);
      const x = points[i + 1][0];
      const labelW = ctx.measureText(label).width;
      const labelLeft = x - labelW / 2;
      if (labelLeft > lastLabelEnd + 2) {
        ctx.fillText(label, x, h - 2);
        lastLabelEnd = x + labelW / 2;
      }
    }
  },

  // =========================================
  //  INSTRUMENT DESIGN TAB
  // =========================================

  createDefaultOsc() {
    return {
      enabled: true,
      waveform: "sine",
      oct: 0,
      detune: 0,
      filterType: "lowpass",
      filterQ: 10,
      adsrGain: { A: [0.01, 1], D: [0.1, 0.8], S: [0.5, 0.6], R: [0.2, 0] },
      adsrFilter: { A: [0.01, 1], D: [0.1, 0.5], S: [0.3, 0.3], R: [0.2, 0] },
      adsrFilterQ: { A: [0.01, 1], D: [0.1, 0.5], S: [0.3, 0.3], R: [0.2, 0] },
      gLFO: false,
      fLFO: false,
      pLFO: false,
      FM: false,
      pENV: false,
      dist: null,
      fx: { del: null, verb: null }
    };
  },

  loadDesignSaves() {
    try {
      const stored = localStorage.getItem("zynDesigns");
      if (stored) this.designSaves = JSON.parse(stored) || [];
    } catch (e) {
      this.designSaves = [];
    }
  },

  saveDesignSaves() {
    localStorage.setItem("zynDesigns", JSON.stringify(this.designSaves));
  },

  initDesignTab() {
    try {
      const stored = localStorage.getItem("zynCurrentDesign");
      if (stored) {
        this.designedInstrument = JSON.parse(stored);
      }
    } catch (e) { /* ignore */ }
    if (!this.designedInstrument || !this.designedInstrument.oscs || !this.designedInstrument.oscs.length) {
      this.designedInstrument = { type: "custom", volume: 1.0, octave: 0, oscs: [this.createDefaultOsc()] };
    }
    this.renderDesignUI();
    this.restoreFindSeedState();
  },

  renderDesignUI() {
    const container = document.getElementById("designContent");
    if (!container) return;
    container.innerHTML = "";

    // Global settings section (volume and octave)
    const globalSection = document.createElement("div");
    globalSection.className = "divider";

    const globalLabel = document.createElement("label");
    globalLabel.tabIndex = 0;
    globalLabel.style.cssText = "margin-bottom: var(--space-2); display: block; font-weight: 500; color: var(--text-primary);";
    globalLabel.textContent = "Global Settings";
    globalSection.appendChild(globalLabel);

    const globalRow = document.createElement("div");
    globalRow.className = "design-row";

    // Volume control
    if (this.designedInstrument.volume === undefined) this.designedInstrument.volume = 1.0;
    const volCtrl = this.buildDesignNumber("Volume", this.designedInstrument.volume, 0.1, 5, 0.1,
      (v) => { this.designedInstrument.volume = v; this.updateDesignedInstrument(); }
    );
    volCtrl.querySelector("input").classList.add("design-input-flat");
    globalRow.appendChild(volCtrl);

    // Octave offset control
    if (this.designedInstrument.octave === undefined) this.designedInstrument.octave = 0;
    const octOptions = [];
    for (let o = -3; o <= 3; o++) octOptions.push({ value: String(o), label: o > 0 ? `+${o}` : String(o) });
    globalRow.appendChild(this.buildDesignSelectOptions("Octave", String(this.designedInstrument.octave), octOptions,
      (v) => { this.designedInstrument.octave = parseInt(v); this.updateDesignedInstrument(); }
    ));

    globalSection.appendChild(globalRow);
    container.appendChild(globalSection);

    // Oscillators section
    const oscSection = document.createElement("div");
    oscSection.className = "divider";

    const oscLabel = document.createElement("label");
    oscLabel.tabIndex = 0;
    oscLabel.style.cssText = "margin-bottom: var(--space-2); display: block; font-weight: 500; color: var(--text-primary);";
    oscLabel.textContent = "Oscillators";
    oscSection.appendChild(oscLabel);

    const btnRow = document.createElement("div");
    btnRow.style.cssText = "display: flex; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-3);";

    const addBtn = document.createElement("button");
    addBtn.className = "btn-secondary btn-sm";
    addBtn.textContent = "\u2795 Add Oscillator";
    addBtn.title = "Add a new oscillator (max 5)";
    if (this.designedInstrument.oscs.length >= 5) {
      addBtn.setAttribute("aria-disabled", "true");
      addBtn.style.opacity = "0.5";
    }
    addBtn.addEventListener("click", () => {
      if (this.designedInstrument.oscs.length >= 5) return;
      this.designedInstrument.oscs.push(this.createDefaultOsc());
      this.renderDesignUI();
    });
    btnRow.appendChild(addBtn);

    const loadGenBtn = document.createElement("button");
    loadGenBtn.className = "btn-info btn-sm";
    loadGenBtn.textContent = "\u2B07 Load from Generator";
    loadGenBtn.title = "Load the current generated instrument into the designer";
    loadGenBtn.addEventListener("click", () => {
      if (!this.randInstrument || !this.randInstrument.oscs) return;
      this.designedInstrument = JSON.parse(JSON.stringify(this.randInstrument));
      this.renderDesignUI();
    });
    btnRow.appendChild(loadGenBtn);

    oscSection.appendChild(btnRow);

    const oscContainer = document.createElement("div");
    oscContainer.id = "designOscillators";
    this.designedInstrument.oscs.forEach((osc, i) => {
      oscContainer.appendChild(this.buildOscEditor(osc, i));
    });
    oscSection.appendChild(oscContainer);
    container.appendChild(oscSection);

    // FM Matrix section (only show if >1 oscillator)
    if (this.designedInstrument.oscs.length > 1) {
      container.appendChild(this.buildFMMatrixEditor());
    }

    // Actions section
    container.appendChild(this.buildDesignActions());

    // JSON view
    container.appendChild(this.buildDesignJsonView());

    this.writeDesignJson();
  },

  buildOscEditor(osc, index) {
    // Default enabled to true for backwards compatibility
    if (osc.enabled === undefined) osc.enabled = true;

    const card = document.createElement("div");
    card.className = "design-osc" + (osc.enabled ? "" : " osc-disabled");
    card.tabIndex = 0;
    card.setAttribute("role", "region");
    card.setAttribute("aria-label", `Oscillator ${index + 1}: ${osc.waveform}`);

    // Header — matches instrument visualizer osc-card style
    const header = document.createElement("div");
    header.className = "design-osc-header";
    header.tabIndex = 0;
    header.setAttribute("role", "button");
    header.setAttribute("aria-expanded", "true");

    const headerLeft = document.createElement("div");
    headerLeft.className = "design-osc-header-left";

    // Enable/disable toggle — before the title
    const enableLabel = document.createElement("label");
    enableLabel.className = "design-osc-enable";
    enableLabel.title = osc.enabled ? "Oscillator enabled — click to disable" : "Oscillator disabled — click to enable";
    const enableCb = document.createElement("input");
    enableCb.type = "checkbox";
    enableCb.checked = osc.enabled;
    enableCb.addEventListener("mousedown", (e) => e.preventDefault()); // Prevent focus stealing
    enableCb.addEventListener("change", (e) => {
      e.stopPropagation();
      osc.enabled = enableCb.checked;
      card.classList.toggle("osc-disabled", !osc.enabled);
      body.classList.toggle("disabled", !osc.enabled);
      enableLabel.title = osc.enabled ? "Oscillator enabled — click to disable" : "Oscillator disabled — click to enable";
      this.updateDesignedInstrument();
    });
    enableLabel.addEventListener("click", (e) => e.stopPropagation());
    enableLabel.appendChild(enableCb);
    headerLeft.appendChild(enableLabel);

    const chevron = document.createElement("span");
    chevron.className = "design-osc-chevron";
    chevron.textContent = "\u25BC";
    headerLeft.appendChild(chevron);

    const oscLabel = document.createElement("span");
    oscLabel.className = "osc-label";
    oscLabel.textContent = `Osc ${index + 1}`;
    headerLeft.appendChild(oscLabel);

    const wfBadge = document.createElement("span");
    wfBadge.className = "osc-badge waveform";
    wfBadge.textContent = osc.waveform;
    headerLeft.appendChild(wfBadge);

    const octBadge = document.createElement("span");
    octBadge.className = "osc-badge";
    octBadge.textContent = `oct ${osc.oct >= 0 ? "+" : ""}${osc.oct}`;
    if (osc.oct === 0) octBadge.style.display = "none";
    headerLeft.appendChild(octBadge);

    const filterBadge = document.createElement("span");
    filterBadge.className = "osc-badge filter";
    filterBadge.textContent = osc.filterType ? `${osc.filterType} Q:${(osc.filterQ || 10).toFixed(1)}` : "";
    if (!osc.filterType) filterBadge.style.display = "none";
    headerLeft.appendChild(filterBadge);

    header.appendChild(headerLeft);

    // Header right: remove button
    const headerRight = document.createElement("div");
    headerRight.style.cssText = "display: flex; align-items: center; gap: var(--space-2);";

    if (this.designedInstrument.oscs.length > 1) {
      const removeBtn = document.createElement("button");
      removeBtn.className = "btn-danger btn-sm";
      removeBtn.textContent = "\uD83D\uDDD1";
      removeBtn.title = `Remove oscillator ${index + 1}`;
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        // Remove corresponding FM matrix row and column
        if (this.designedInstrument.fmMatrix) {
          this.designedInstrument.fmMatrix.splice(index, 1);
          this.designedInstrument.fmMatrix.forEach(row => row.splice(index, 1));
          if (this.designedInstrument.fmMatrix.length <= 1) {
            this.designedInstrument.fmMatrix = null;
          }
        }
        // Also remove from delays matrix
        if (this.designedInstrument.fmDelays) {
          this.designedInstrument.fmDelays.splice(index, 1);
          this.designedInstrument.fmDelays.forEach(row => row.splice(index, 1));
          if (this.designedInstrument.fmDelays.length <= 1) {
            this.designedInstrument.fmDelays = null;
          }
        }
        this.designedInstrument.oscs.splice(index, 1);
        this.renderDesignUI();
      });
      headerRight.appendChild(removeBtn);
    }

    header.appendChild(headerRight);

    const body = document.createElement("div");
    body.className = "design-osc-body" + (osc.enabled ? "" : " disabled");

    // Helper to sync badges from current osc state
    const syncBadges = () => {
      wfBadge.textContent = osc.waveform;
      octBadge.textContent = `oct ${osc.oct >= 0 ? "+" : ""}${osc.oct}`;
      octBadge.style.display = osc.oct === 0 ? "none" : "";
      filterBadge.textContent = osc.filterType ? `${osc.filterType} Q:${(osc.filterQ || 10).toFixed(1)}` : "";
      filterBadge.style.display = osc.filterType ? "" : "none";
      card.setAttribute("aria-label", `Oscillator ${index + 1}: ${osc.waveform}`);
    };

    header.addEventListener("click", () => {
      const isExpanded = body.style.display !== "none";
      body.style.display = isExpanded ? "none" : "block";
      header.setAttribute("aria-expanded", !isExpanded);
      chevron.textContent = isExpanded ? "\u25B6" : "\u25BC";
    });
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); header.click(); }
    });

    card.appendChild(header);

    // Basic controls row
    const basicRow = document.createElement("div");
    basicRow.className = "design-row";

    // Waveform
    basicRow.appendChild(this.buildDesignSelect("Waveform", osc.waveform,
      ["sine", "square", "sawtooth", "triangle"],
      (v) => { osc.waveform = v; syncBadges(); this.updateDesignedInstrument(); }
    ));

    // Octave
    const octOptions = [];
    for (let o = -3; o <= 3; o++) octOptions.push({ value: String(o), label: o > 0 ? `+${o}` : String(o) });
    basicRow.appendChild(this.buildDesignSelectOptions("Octave", String(osc.oct), octOptions,
      (v) => { osc.oct = parseInt(v); syncBadges(); this.updateDesignedInstrument(); }
    ));

    // Detune
    const detuneCtrl = this.buildDesignNumber("Detune (¢)", osc.detune, -100, 100, 1,
      (v) => { osc.detune = v; this.updateDesignedInstrument(); }
    );
    detuneCtrl.querySelector("input").classList.add("design-input-flat");
    basicRow.appendChild(detuneCtrl);

    body.appendChild(basicRow);

    // ADSR Envelopes — side by side like instrument visualizer
    if (!osc.adsrFilter || osc.adsrFilter === false) osc.adsrFilter = { A: [0.01, 1], D: [0.1, 0.5], S: [0.3, 0.3], R: [0.2, 0] };
    if (!osc.adsrFilterQ || osc.adsrFilterQ === false) osc.adsrFilterQ = { A: [0.01, 1], D: [0.1, 0.5], S: [0.3, 0.3], R: [0.2, 0] };

    const envRow = document.createElement("div");
    envRow.className = "design-env-row-container";
    envRow.appendChild(this.buildDesignEnvelope("Gain", osc.adsrGain, "rgba(0, 217, 255, 0.9)",
      () => this.updateDesignedInstrument()
    ));

    // Filter Freq envelope tile — with filter type select underneath
    const filterFreqTile = this.buildDesignEnvelope("Filter Freq", osc.adsrFilter, "rgba(255, 171, 0, 0.9)",
      () => this.updateDesignedInstrument()
    );
    const filterTypes = ["none", "lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "allpass"];
    const filterSelect = this.buildDesignSelect("Filter", osc.filterType || "none", filterTypes,
      (v) => {
        osc.filterType = v === "none" ? null : v;
        qControl.style.display = v === "none" ? "none" : "flex";
        syncBadges();
        this.updateDesignedInstrument();
      }
    );
    filterSelect.style.marginTop = "var(--space-2)";
    filterFreqTile.appendChild(filterSelect);
    envRow.appendChild(filterFreqTile);

    // Filter Q envelope tile — with Q input underneath
    const filterQTile = this.buildDesignEnvelope("Filter Q", osc.adsrFilterQ, "rgba(255, 171, 0, 0.6)",
      () => this.updateDesignedInstrument()
    );
    const qControl = this.buildDesignNumber("Q", osc.filterQ || 10, 0, 30, 0.1,
      (v) => { osc.filterQ = v; syncBadges(); this.updateDesignedInstrument(); }
    );
    qControl.style.marginTop = "var(--space-2)";
    if (!osc.filterType) qControl.style.display = "none";
    filterQTile.appendChild(qControl);
    envRow.appendChild(filterQTile);

    // Pitch envelope tile (optional, also in the envelope row)
    const pEnvEnabled = osc.pENV !== false && osc.pENV !== null;
    const pEnvData = (osc.pENV && typeof osc.pENV === "object") ? osc.pENV : { amount: 2, A: [0.01, 1], D: [0.1, 0.5], S: [0.3, 0.3], R: [0.2, 0] };
    const pEnvTile = this.buildDesignEnvelope("", pEnvData, "rgba(233, 69, 96, 0.9)",
      () => this.updateDesignedInstrument()
    );
    // Build a wrapper tile with toggle header
    const pEnvToggleTile = document.createElement("div");
    pEnvToggleTile.className = "design-env-tile";
    const pEnvHeader = document.createElement("label");
    pEnvHeader.className = "design-tile-header";
    pEnvHeader.style.marginBottom = "0";
    const pEnvCb = document.createElement("input");
    pEnvCb.type = "checkbox";
    pEnvCb.checked = pEnvEnabled;
    const pEnvSpan = document.createElement("span");
    pEnvSpan.textContent = "Pitch Env";
    pEnvHeader.appendChild(pEnvCb);
    pEnvHeader.appendChild(pEnvSpan);
    pEnvToggleTile.appendChild(pEnvHeader);
    const pEnvContent = document.createElement("div");
    pEnvContent.className = "design-tile-content" + (pEnvEnabled ? "" : " disabled");
    // Move children from pEnvTile into the content wrapper
    while (pEnvTile.firstChild) pEnvContent.appendChild(pEnvTile.firstChild);
    // Add amount control after the ADSR grid
    const pAmountCtrl = this.buildDesignNumber("Amt", pEnvData.amount || 2, 0.1, 12, 0.1, (v) => { pEnvData.amount = v; this.updateDesignedInstrument(); });
    pAmountCtrl.style.marginTop = "var(--space-2)";
    pEnvContent.appendChild(pAmountCtrl);
    pEnvToggleTile.appendChild(pEnvContent);
    pEnvCb.addEventListener("change", () => {
      if (pEnvCb.checked) {
        osc.pENV = pEnvData;
        pEnvContent.classList.remove("disabled");
      } else {
        osc.pENV = false;
        pEnvContent.classList.add("disabled");
      }
      this.updateDesignedInstrument();
    });
    if (pEnvEnabled) osc.pENV = pEnvData;
    envRow.appendChild(pEnvToggleTile);
    body.appendChild(envRow);

    // LFOs — side by side tiles
    const lfoRow = document.createElement("div");
    lfoRow.className = "design-tiles-row";
    lfoRow.appendChild(this.buildDesignLFOSection("Gain LFO", osc.gLFO,
      (lfo) => { osc.gLFO = lfo; this.updateDesignedInstrument(); }
    ));
    lfoRow.appendChild(this.buildDesignLFOSection("Filter LFO", osc.fLFO,
      (lfo) => { osc.fLFO = lfo; this.updateDesignedInstrument(); }
    ));
    lfoRow.appendChild(this.buildDesignLFOSection("Pitch LFO", osc.pLFO,
      (lfo) => { osc.pLFO = lfo; this.updateDesignedInstrument(); }
    ));
    body.appendChild(lfoRow);

    // FM + Distortion — side by side tiles
    const modRow = document.createElement("div");
    modRow.className = "design-tiles-row";

    // FM tile
    const fmData = (osc.FM && typeof osc.FM === "object") ? osc.FM : { type: "sine", frequency: 3, depth: 100 };
    modRow.appendChild(this.buildDesignToggleSection("FM Synthesis", osc.FM !== false && osc.FM !== null,
      () => {
        const frag = document.createDocumentFragment();
        const row = document.createElement("div");
        row.className = "design-row";
        row.appendChild(this.buildDesignSelect("Type", fmData.type, ["sine", "square", "sawtooth", "triangle"], (v) => { fmData.type = v; this.updateDesignedInstrument(); }));
        row.appendChild(this.buildDesignNumber("Freq (Hz)", fmData.frequency, 0.1, 100, 0.1, (v) => { fmData.frequency = v; this.updateDesignedInstrument(); }));
        row.appendChild(this.buildDesignNumber("Depth (Hz)", fmData.depth, 1, 500, 1, (v) => { fmData.depth = v; this.updateDesignedInstrument(); }));
        frag.appendChild(row);
        return frag;
      },
      (enabled) => {
        if (enabled) osc.FM = fmData;
        else osc.FM = false;
        this.updateDesignedInstrument();
      }
    ));

    // Distortion tile
    const distData = (osc.dist && typeof osc.dist === "object") ? osc.dist : { oversample: "2x" };
    modRow.appendChild(this.buildDesignToggleSection("Distortion", !!osc.dist,
      () => {
        const frag = document.createDocumentFragment();
        const row = document.createElement("div");
        row.className = "design-row";
        row.appendChild(this.buildDesignSelectOptions("Oversample", distData.oversample || "none",
          [{ value: "none", label: "None" }, { value: "2x", label: "2x" }, { value: "4x", label: "4x" }],
          (v) => { distData.oversample = v; this.updateDesignedInstrument(); }
        ));
        frag.appendChild(row);
        return frag;
      },
      (enabled) => {
        if (enabled) osc.dist = distData;
        else osc.dist = null;
        this.updateDesignedInstrument();
      }
    ));
    body.appendChild(modRow);

    // Per-oscillator effects — side by side tiles
    const fxRow = document.createElement("div");
    fxRow.className = "design-tiles-row";

    const fx = osc.fx || {};
    const delData = (fx.del && typeof fx.del === "object") ? fx.del : { time: 0.25, feedback: 0.3, mix: 1 };
    if (delData.mix === undefined) delData.mix = 1; // Default mix for existing data
    const verbData = (fx.verb && typeof fx.verb === "object") ? fx.verb : { duration: 1.5, decay: 0.8 };

    fxRow.appendChild(this.buildDesignToggleSection("Delay", !!fx.del,
      () => {
        const frag = document.createDocumentFragment();
        const row = document.createElement("div");
        row.className = "design-row";
        row.appendChild(this.buildDesignNumber("Time (s)", delData.time, 0, 0.5, 0.001,
          (v) => { delData.time = v; this.updateDesignedInstrument(); }
        ));
        row.appendChild(this.buildDesignNumber("Feedback", delData.feedback, 0, 0.8, 0.01,
          (v) => { delData.feedback = v; this.updateDesignedInstrument(); }
        ));
        row.appendChild(this.buildDesignNumber("Mix", delData.mix, 0, 1, 0.01,
          (v) => { delData.mix = v; this.updateDesignedInstrument(); }
        ));
        frag.appendChild(row);
        return frag;
      },
      (enabled) => {
        if (enabled) osc.fx.del = delData;
        else osc.fx.del = null;
        this.updateDesignedInstrument();
      }
    ));

    fxRow.appendChild(this.buildDesignToggleSection("Reverb", !!fx.verb,
      () => {
        const frag = document.createDocumentFragment();
        const row = document.createElement("div");
        row.className = "design-row";
        row.appendChild(this.buildDesignNumber("Time (s)", verbData.duration, 0.1, 3.1, 0.1,
          (v) => { verbData.duration = v; this.updateDesignedInstrument(); }
        ));
        row.appendChild(this.buildDesignNumber("Decay", verbData.decay, 0.5, 1.0, 0.01,
          (v) => { verbData.decay = v; this.updateDesignedInstrument(); }
        ));
        frag.appendChild(row);
        return frag;
      },
      (enabled) => {
        if (enabled) osc.fx.verb = verbData;
        else osc.fx.verb = null;
        this.updateDesignedInstrument();
      }
    ));

    body.appendChild(fxRow);

    card.appendChild(body);
    return card;
  },

  // --- Design UI building helpers ---

  buildDesignSelect(label, value, options, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "design-control";
    const lbl = document.createElement("label");
    lbl.className = "design-label";
    lbl.textContent = label;
    const sel = document.createElement("select");
    sel.className = "design-select";
    sel.title = label;
    options.forEach(opt => {
      const o = document.createElement("option");
      o.value = opt; o.textContent = opt;
      if (opt === value) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", () => onChange(sel.value));
    wrap.appendChild(lbl);
    wrap.appendChild(sel);
    return wrap;
  },

  buildDesignSelectOptions(label, value, options, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "design-control";
    const lbl = document.createElement("label");
    lbl.className = "design-label";
    lbl.textContent = label;
    const sel = document.createElement("select");
    sel.className = "design-select";
    sel.title = label;
    options.forEach(opt => {
      const o = document.createElement("option");
      o.value = opt.value; o.textContent = opt.label;
      if (opt.value === value) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", () => onChange(sel.value));
    wrap.appendChild(lbl);
    wrap.appendChild(sel);
    return wrap;
  },

  buildDesignNumber(label, value, min, max, step, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "design-control";
    const lbl = document.createElement("label");
    lbl.className = "design-label";
    lbl.textContent = label;
    const input = document.createElement("input");
    input.type = "number";
    input.className = "design-input";
    input.min = min; input.max = max; input.step = step;
    input.value = value;
    input.title = label;
    input.addEventListener("input", () => {
      const v = parseFloat(input.value);
      if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
    });
    wrap.appendChild(lbl);
    wrap.appendChild(input);
    return wrap;
  },

  buildFMKnob(value, delay, onChangeAmt, onChangeDelay) {
    const wrapper = document.createElement("div");
    wrapper.className = "fm-knob-wrapper";

    // Amount range: -5 to 5
    const AMT_MIN = -5, AMT_MAX = 5;
    // Delay range: 0 to 50ms
    const DLY_MIN = 0, DLY_MAX = 50;

    // Helper to create a single knob with label and value
    const createKnob = (labelText, initialValue, min, max, formatFn, onChange) => {
      const container = document.createElement("div");
      container.className = "fm-knob-container";

      const label = document.createElement("div");
      label.className = "fm-knob-label";
      label.textContent = labelText;

      const knob = document.createElement("div");
      knob.className = "fm-knob";
      knob.title = `Drag to adjust ${labelText}. Double-click to reset.`;

      const indicator = document.createElement("div");
      indicator.className = "fm-knob-indicator";
      knob.appendChild(indicator);

      const valueInput = document.createElement("input");
      valueInput.type = "text";
      valueInput.className = "fm-knob-value";

      let currentValue = initialValue;

      const updateVisual = (updateInput = true) => {
        // Map value to -135..+135 degrees
        const normalized = (currentValue - min) / (max - min) * 2 - 1; // -1 to 1
        const angle = normalized * 135;
        indicator.style.transform = `rotate(${angle}deg)`;
        if (updateInput) {
          valueInput.value = formatFn(currentValue);
        }
        // Color based on value
        if (currentValue === 0 || (min === 0 && currentValue === min)) {
          knob.style.borderColor = "";
        } else {
          const hue = currentValue > 0 ? 190 : 350;
          const intensity = Math.min(1, Math.abs(currentValue) / Math.max(Math.abs(min), Math.abs(max)));
          knob.style.borderColor = `hsla(${hue}, 80%, 50%, ${0.3 + intensity * 0.7})`;
        }
      };

      updateVisual();

      // Input editing
      valueInput.addEventListener("focus", () => {
        if (valueInput.value === "-") valueInput.value = "0";
        valueInput.select();
      });
      valueInput.addEventListener("blur", () => {
        let v = parseFloat(valueInput.value);
        if (isNaN(v)) v = min === 0 ? min : 0;
        currentValue = Math.round(Math.max(min, Math.min(max, v)) * 100) / 100;
        updateVisual();
        onChange(currentValue);
      });
      valueInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") valueInput.blur();
        if (e.key === "Escape") { updateVisual(); valueInput.blur(); }
      });

      // Drag interaction
      let dragging = false;
      let startY = 0;
      let startValue = 0;

      const onStart = (e) => {
        dragging = true;
        startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        startValue = currentValue;
        knob.classList.add("active");
        e.preventDefault();
      };

      const onMove = (e) => {
        if (!dragging) return;
        const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        const range = max - min;
        const delta = (startY - clientY) / 100 * range;
        currentValue = Math.round(Math.max(min, Math.min(max, startValue + delta)) * 100) / 100;
        updateVisual();
        onChange(currentValue);
        e.preventDefault();
      };

      const onEnd = () => {
        if (!dragging) return;
        dragging = false;
        knob.classList.remove("active");
      };

      knob.addEventListener("mousedown", onStart);
      knob.addEventListener("touchstart", onStart, { passive: false });
      document.addEventListener("mousemove", onMove);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("mouseup", onEnd);
      document.addEventListener("touchend", onEnd);

      knob.addEventListener("dblclick", () => {
        currentValue = min === 0 ? min : 0;
        updateVisual();
        onChange(currentValue);
      });

      container.appendChild(label);
      container.appendChild(knob);
      container.appendChild(valueInput);
      return container;
    };

    // Amount knob
    const amtKnob = createKnob("Amt", value, AMT_MIN, AMT_MAX,
      (v) => v === 0 ? "-" : v.toFixed(2),
      onChangeAmt
    );

    // Delay knob (value in seconds, display in ms)
    const dlyKnob = createKnob("Dly", delay * 1000, DLY_MIN, DLY_MAX,
      (v) => v.toFixed(1),
      (v) => onChangeDelay(v / 1000)
    );

    wrapper.appendChild(amtKnob);
    wrapper.appendChild(dlyKnob);
    return wrapper;
  },

  buildDesignEnvelope(label, adsr, color, onChange) {
    const tile = document.createElement("div");
    tile.className = "design-env-tile";

    if (label) {
      const heading = document.createElement("div");
      heading.className = "design-env-label";
      heading.textContent = label;
      tile.appendChild(heading);
    }

    const canvas = document.createElement("canvas");
    canvas.className = "design-env-canvas";
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", `${label || "Envelope"} ADSR graph`);
    canvas.title = "Drag points to adjust envelope";
    tile.appendChild(canvas);

    const grid = document.createElement("div");
    grid.className = "design-env-grid";

    // Store inputs for syncing from drag
    const inputs = {};

    const redraw = () => {
      requestAnimationFrame(() => this.drawADSR(canvas, adsr, color));
      onChange();
    };

    // Store draw function on canvas for redrawDesignCanvases()
    canvas._drawFn = () => this.drawADSR(canvas, adsr, color);

    ["A", "D", "S", "R"].forEach(stage => {
      const col = document.createElement("div");
      col.className = "design-env-col";

      const stageLabel = document.createElement("span");
      stageLabel.className = "design-env-stage";
      stageLabel.textContent = stage;
      col.appendChild(stageLabel);

      const timeInput = document.createElement("input");
      timeInput.type = "number";
      timeInput.className = "design-input";
      timeInput.min = 0; timeInput.max = 5; timeInput.step = 0.001;
      timeInput.value = adsr[stage][0];
      timeInput.title = `${stage} time (seconds)`;
      timeInput.addEventListener("input", () => {
        const v = parseFloat(timeInput.value);
        if (!isNaN(v)) { adsr[stage][0] = Math.max(0, Math.min(5, v)); redraw(); }
      });
      col.appendChild(timeInput);

      const levelInput = document.createElement("input");
      levelInput.type = "number";
      levelInput.className = "design-input";
      levelInput.min = 0; levelInput.max = 1; levelInput.step = 0.01;
      levelInput.value = adsr[stage][1];
      levelInput.title = `${stage} level (0-1)`;
      levelInput.addEventListener("input", () => {
        const v = parseFloat(levelInput.value);
        if (!isNaN(v)) { adsr[stage][1] = Math.max(0, Math.min(1, v)); redraw(); }
      });
      col.appendChild(levelInput);

      inputs[stage] = { time: timeInput, level: levelInput };
      grid.appendChild(col);
    });

    // --- Drag interaction on canvas ---
    let dragging = null;
    const stages = ["A", "D", "S", "R"];

    const getCanvasPoints = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const pad = 4;
      const bottomPad = 14;
      const drawW = w - pad * 2;
      const drawH = h - pad - bottomPad;
      const aTime = adsr.A[0], dTime = adsr.D[0], sTime = adsr.S[0], rTime = adsr.R[0];
      const totalTime = aTime + dTime + sTime + rTime;
      if (totalTime === 0) return [];
      const timeToX = (t) => pad + (t / totalTime) * drawW;
      const levelToY = (l) => pad + drawH - (l * drawH);
      return [
        { x: pad, y: levelToY(0) },
        { x: timeToX(aTime), y: levelToY(adsr.A[1]) },
        { x: timeToX(aTime + dTime), y: levelToY(adsr.D[1]) },
        { x: timeToX(aTime + dTime + sTime), y: levelToY(adsr.S[1]) },
        { x: timeToX(totalTime), y: levelToY(adsr.R[1]) },
      ];
    };

    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const findClosestPoint = (pos) => {
      const points = getCanvasPoints();
      if (points.length === 0) return -1;
      let closest = -1, minDist = 20;
      for (let i = 1; i < points.length; i++) {
        const dx = pos.x - points[i].x;
        const dy = pos.y - points[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) { minDist = dist; closest = i; }
      }
      return closest;
    };

    const updateFromDrag = (pos) => {
      if (dragging < 1 || dragging > 4) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const pad = 4;
      const bottomPad = 14;
      const drawW = w - pad * 2;
      const drawH = h - pad - bottomPad;

      const level = Math.max(0, Math.min(1, (pad + drawH - pos.y) / drawH));
      const stage = stages[dragging - 1];
      adsr[stage][1] = Math.round(level * 100) / 100;
      inputs[stage].level.value = adsr[stage][1];

      const totalTime = adsr.A[0] + adsr.D[0] + adsr.S[0] + adsr.R[0];
      const fracX = Math.max(0, Math.min(1, (pos.x - pad) / drawW));
      const cumTime = fracX * totalTime;

      let preceding = 0;
      for (let i = 0; i < dragging - 1; i++) preceding += adsr[stages[i]][0];
      const newTime = Math.max(0.001, cumTime - preceding);

      const oldTime = adsr[stage][0];
      const nextStageIdx = dragging;
      if (nextStageIdx < 4) {
        const nextStage = stages[nextStageIdx];
        const nextOld = adsr[nextStage][0];
        const delta = newTime - oldTime;
        const nextNew = Math.max(0.001, nextOld - delta);
        adsr[nextStage][0] = Math.round(nextNew * 1000) / 1000;
        inputs[nextStage].time.value = adsr[nextStage][0];
      }

      adsr[stage][0] = Math.round(newTime * 1000) / 1000;
      inputs[stage].time.value = adsr[stage][0];
      redraw();
    };

    const onDown = (e) => {
      const pos = getMousePos(e);
      const idx = findClosestPoint(pos);
      if (idx >= 1) { dragging = idx; canvas.style.cursor = "grabbing"; e.preventDefault(); }
    };
    const onMove = (e) => {
      if (dragging !== null) { updateFromDrag(getMousePos(e)); e.preventDefault(); }
      else { canvas.style.cursor = findClosestPoint(getMousePos(e)) >= 1 ? "grab" : "default"; }
    };
    const onUp = () => { if (dragging !== null) { dragging = null; canvas.style.cursor = "default"; } };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("mouseleave", onUp);
    canvas.addEventListener("touchstart", onDown, { passive: false });
    canvas.addEventListener("touchmove", onMove, { passive: false });
    canvas.addEventListener("touchend", onUp);

    tile.appendChild(grid);

    // Initial draw (deferred to allow layout)
    requestAnimationFrame(() => this.drawADSR(canvas, adsr, color));

    return tile;
  },

  buildDesignToggleSection(label, enabled, buildContent, onToggle) {
    const tile = document.createElement("div");
    tile.className = "design-tile" + (enabled ? " enabled" : "");

    const header = document.createElement("label");
    header.className = "design-tile-header";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = enabled;
    const span = document.createElement("span");
    span.textContent = label;
    header.appendChild(cb);
    header.appendChild(span);
    tile.appendChild(header);

    const content = document.createElement("div");
    content.className = "design-tile-content" + (enabled ? "" : " disabled");

    // Always build content (visible but greyed when disabled)
    const built = buildContent();
    if (built) content.appendChild(built);

    // Prevent checkbox from stealing focus (allows keyboard to keep playing)
    cb.addEventListener("mousedown", (e) => e.preventDefault());

    cb.addEventListener("change", () => {
      if (cb.checked) {
        content.classList.remove("disabled");
        tile.classList.add("enabled");
        onToggle(true);
      } else {
        content.classList.add("disabled");
        tile.classList.remove("enabled");
        onToggle(false);
      }
    });

    tile.appendChild(content);
    return tile;
  },

  buildDesignLFOSection(label, lfo, onChange) {
    const isEnabled = lfo !== false && lfo !== null && lfo !== undefined;
    const data = (lfo && typeof lfo === "object") ? lfo : { type: "sine", frequency: 5, depth: 0.3 };
    return this.buildDesignToggleSection(label, isEnabled,
      () => {
        const frag = document.createDocumentFragment();
        const row = document.createElement("div");
        row.className = "design-row";
        row.appendChild(this.buildDesignSelect("Type", data.type, ["sine", "square", "sawtooth", "triangle"],
          (v) => { data.type = v; onChange(data); }
        ));
        row.appendChild(this.buildDesignNumber("Freq (Hz)", data.frequency, 0.1, 100, 0.1,
          (v) => { data.frequency = v; onChange(data); }
        ));
        row.appendChild(this.buildDesignNumber("Depth", data.depth, 0, 1, 0.01,
          (v) => { data.depth = v; onChange(data); }
        ));
        frag.appendChild(row);
        return frag;
      },
      (enabled) => {
        if (enabled) onChange(data);
        else onChange(false);
      }
    );
  },

  buildFMMatrixEditor() {
    const section = document.createElement("div");
    section.className = "divider";

    const inst = this.designedInstrument;
    const n = inst.oscs.length;

    // Initialize or resize amount matrix
    if (!inst.fmMatrix) {
      inst.fmMatrix = Array.from({ length: n }, () => new Array(n).fill(0));
    }
    while (inst.fmMatrix.length < n) {
      inst.fmMatrix.push(new Array(n).fill(0));
    }
    inst.fmMatrix.length = n;
    inst.fmMatrix.forEach(row => {
      while (row.length < n) row.push(0);
      row.length = n;
    });

    // Initialize or resize delay matrix (default 1ms)
    if (!inst.fmDelays) {
      inst.fmDelays = Array.from({ length: n }, () => new Array(n).fill(0.001));
    }
    while (inst.fmDelays.length < n) {
      inst.fmDelays.push(new Array(n).fill(0.001));
    }
    inst.fmDelays.length = n;
    inst.fmDelays.forEach(row => {
      while (row.length < n) row.push(0.001);
      row.length = n;
    });

    const hasRouting = inst.fmMatrix.some(row => row.some(v => v !== 0));

    // Header with toggle
    const header = document.createElement("label");
    header.className = "design-tile-header";
    header.style.marginBottom = "var(--space-2)";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = hasRouting;
    cb.addEventListener("mousedown", (e) => e.preventDefault());
    const span = document.createElement("span");
    span.textContent = "FM Matrix";
    header.appendChild(cb);
    header.appendChild(span);
    section.appendChild(header);

    const content = document.createElement("div");
    content.className = "design-tile-content" + (hasRouting ? "" : " disabled");

    // Grid of knobs
    const grid = document.createElement("div");
    grid.className = "fm-matrix-editor";
    grid.style.gridTemplateColumns = `auto repeat(${n}, 1fr)`;

    // Corner label
    const corner = document.createElement("div");
    corner.className = "fm-matrix-editor-label";
    corner.textContent = "";
    corner.style.fontSize = "0.6rem";
    grid.appendChild(corner);

    // Column headers
    for (let t = 0; t < n; t++) {
      const th = document.createElement("div");
      th.className = "fm-matrix-editor-label";
      th.textContent = `O${t + 1}`;
      grid.appendChild(th);
    }

    // Rows of knobs
    for (let s = 0; s < n; s++) {
      const rh = document.createElement("div");
      rh.className = "fm-matrix-editor-label";
      rh.textContent = `O${s + 1}`;
      grid.appendChild(rh);

      for (let t = 0; t < n; t++) {
        const knob = this.buildFMKnob(
          inst.fmMatrix[s][t],
          inst.fmDelays[s][t],
          (val) => { inst.fmMatrix[s][t] = val; this.updateDesignedInstrument(); },
          (val) => { inst.fmDelays[s][t] = val; this.updateDesignedInstrument(); }
        );
        grid.appendChild(knob);
      }
    }

    content.appendChild(grid);

    cb.addEventListener("change", () => {
      if (cb.checked) {
        content.classList.remove("disabled");
        // Restore saved matrices or initialize new ones
        if (inst._fmMatrixBackup) {
          inst.fmMatrix = inst._fmMatrixBackup;
          inst.fmDelays = inst._fmDelaysBackup || Array.from({ length: n }, () => new Array(n).fill(0.001));
          delete inst._fmMatrixBackup;
          delete inst._fmDelaysBackup;
          this.updateDesignedInstrument();
          this.renderDesignUI(); // Rebuild to show restored values
        } else if (!inst.fmMatrix) {
          inst.fmMatrix = Array.from({ length: n }, () => new Array(n).fill(0));
          inst.fmDelays = Array.from({ length: n }, () => new Array(n).fill(0.001));
        }
      } else {
        // Store backup before clearing
        if (inst.fmMatrix && inst.fmMatrix.some(row => row.some(v => v !== 0))) {
          inst._fmMatrixBackup = inst.fmMatrix.map(row => [...row]);
          inst._fmDelaysBackup = inst.fmDelays.map(row => [...row]);
        }
        inst.fmMatrix = null;
        inst.fmDelays = null;
        content.classList.add("disabled");
        this.updateDesignedInstrument();
        this.renderDesignUI(); // Rebuild to reset knobs visually
      }
    });

    section.appendChild(content);
    return section;
  },

  buildDesignActions() {
    const section = document.createElement("div");
    section.className = "divider";

    const label = document.createElement("label");
    label.tabIndex = 0;
    label.style.cssText = "margin-bottom: var(--space-2); display: block; font-weight: 500; color: var(--text-primary);";
    label.textContent = "Actions";
    section.appendChild(label);

    // Find Seed row
    const findRow = document.createElement("div");
    findRow.className = "control-group";
    findRow.style.marginBottom = "var(--space-3)";

    // Type selector for constraining search
    const typeSelect = document.createElement("select");
    typeSelect.id = "findSeedTypeSelect";
    typeSelect.className = "design-select";
    typeSelect.title = "Constrain search to a specific instrument type";
    const anyOption = document.createElement("option");
    anyOption.value = "any";
    anyOption.textContent = "Any Type";
    typeSelect.appendChild(anyOption);
    this.typeNames.forEach((name, i) => {
      const opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = `${this.typeIcons[i]} ${name}`;
      typeSelect.appendChild(opt);
    });
    findRow.appendChild(typeSelect);

    const findBtn = document.createElement("button");
    findBtn.id = "findSeedButton";
    findBtn.className = "btn-info";
    findBtn.textContent = "\uD83D\uDD0D Find Seed";
    findBtn.title = "Search for a seed that matches this design";
    findBtn.addEventListener("click", () => this.handleFindSeed(false));
    findRow.appendChild(findBtn);

    const improveBtn = document.createElement("button");
    improveBtn.id = "findImprovedButton";
    improveBtn.className = "btn-secondary";
    improveBtn.textContent = "\uD83D\uDD04 Find Improved";
    improveBtn.title = "Search until a better match is found";
    improveBtn.style.display = "none";
    improveBtn.addEventListener("click", () => {
      if (this.findSeedTimer) {
        if (this.cancelFindSeed) this.cancelFindSeed();
      } else {
        this.handleFindSeed(true);
      }
    });
    findRow.appendChild(improveBtn);

    const thresholdSelect = document.createElement("select");
    thresholdSelect.id = "findSeedThresholdSelect";
    thresholdSelect.title = "Match threshold for continuous search";
    [80, 85, 90, 95].forEach(v => {
      const opt = document.createElement("option");
      opt.value = String(v);
      opt.textContent = `${v}%`;
      if (v === 90) opt.selected = true;
      thresholdSelect.appendChild(opt);
    });
    findRow.appendChild(thresholdSelect);

    const searchUntilBtn = document.createElement("button");
    searchUntilBtn.id = "searchUntilSeedButton";
    searchUntilBtn.className = "btn-secondary";
    searchUntilBtn.textContent = "\uD83C\uDFAF Search Until";
    searchUntilBtn.title = "Search continuously until the threshold is met";
    searchUntilBtn.addEventListener("click", () => {
      if (this.findSeedTimer) {
        if (this.cancelFindSeed) this.cancelFindSeed();
      } else {
        this.handleFindSeed("threshold");
      }
    });
    findRow.appendChild(searchUntilBtn);

    const loadGenBtn = document.createElement("button");
    loadGenBtn.id = "loadSeedInGenerator";
    loadGenBtn.className = "btn-success";
    loadGenBtn.textContent = "\u27A1 Load in Generator";
    loadGenBtn.title = "Load the found seed in the Instrument tab";
    loadGenBtn.style.display = "none";
    loadGenBtn.addEventListener("click", () => {
      const seed = parseInt(loadGenBtn.dataset.seed);
      if (!isNaN(seed)) {
        document.getElementById("instrumentSeedInput").value = seed;
        this.activePresetIndex = null;
        this.updateInstrumentAndPushState(seed);
        // Switch to instrument tab
        const sideTab = document.querySelector('.side-panel-tab[data-side-panel-id="tab-instrument"]');
        if (sideTab) sideTab.click();
        else {
          const btn = document.querySelector('.tab-btn[data-tab="instrument"]');
          if (btn) btn.click();
        }
      }
    });
    findRow.appendChild(loadGenBtn);
    section.appendChild(findRow);

    // Save design row
    const saveRow = document.createElement("div");
    saveRow.className = "save-preset-row";
    saveRow.style.marginBottom = "var(--space-3)";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "designNameInput";
    nameInput.placeholder = "Enter design name...";
    nameInput.title = "Name for the saved design";

    const saveBtn = document.createElement("button");
    saveBtn.className = "btn-success";
    saveBtn.textContent = "\uD83D\uDCBE Save Design";
    saveBtn.title = "Save the current instrument design";
    saveBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      if (!name) { alert("Please enter a name for the design"); return; }
      this.designSaves.push({ name, instrument: JSON.parse(JSON.stringify(this.designedInstrument)), bestSeed: this.findSeedBestSeed, bestScore: this.findSeedBestScore, timestamp: Date.now() });
      this.saveDesignSaves();
      nameInput.value = "";
      this.renderDesignSaves();
    });

    saveRow.appendChild(nameInput);
    saveRow.appendChild(saveBtn);
    section.appendChild(saveRow);

    // Saved designs container
    const savesContainer = document.createElement("div");
    savesContainer.id = "designSavesContainer";
    section.appendChild(savesContainer);

    // Export/Import
    const ioRow = document.createElement("div");
    ioRow.style.cssText = "display: flex; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-3);";

    const exportBtn = document.createElement("button");
    exportBtn.className = "btn-secondary";
    exportBtn.textContent = "\uD83D\uDCE4 Export Designs";
    exportBtn.title = "Export all designs to a JSON file";
    exportBtn.addEventListener("click", () => this.exportDesigns());

    const importBtn = document.createElement("button");
    importBtn.className = "btn-secondary";
    importBtn.textContent = "\uD83D\uDCE5 Import Designs";
    importBtn.title = "Import designs from a JSON file";
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
    fileInput.style.display = "none";
    fileInput.addEventListener("change", (e) => { if (e.target.files[0]) this.importDesigns(e.target.files[0]); fileInput.value = ""; });
    importBtn.addEventListener("click", () => fileInput.click());

    ioRow.appendChild(exportBtn);
    ioRow.appendChild(importBtn);
    ioRow.appendChild(fileInput);
    section.appendChild(ioRow);

    // Render saved designs
    requestAnimationFrame(() => this.renderDesignSaves());

    return section;
  },

  buildDesignJsonView() {
    const section = document.createElement("div");
    section.className = "divider";

    const helpToggle = document.createElement("div");
    helpToggle.className = "tab-help";
    helpToggle.tabIndex = 0;
    helpToggle.setAttribute("role", "button");
    helpToggle.setAttribute("aria-expanded", "false");
    helpToggle.textContent = "View Raw JSON";

    const helpContent = document.createElement("div");
    helpContent.className = "tab-help-content";
    helpContent.tabIndex = -1;

    helpToggle.addEventListener("click", () => {
      helpToggle.classList.toggle("expanded");
      const expanded = helpToggle.classList.contains("expanded");
      helpToggle.setAttribute("aria-expanded", expanded);
      helpContent.classList.toggle("show", expanded);
      helpContent.tabIndex = expanded ? 0 : -1;
    });
    helpToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); helpToggle.click(); }
    });

    const jsonHeader = document.createElement("div");
    jsonHeader.className = "json-section-header";
    const copyBtn = document.createElement("button");
    copyBtn.className = "btn-secondary btn-sm";
    copyBtn.textContent = "\uD83D\uDCCB Copy JSON";
    copyBtn.title = "Copy design JSON to clipboard";
    copyBtn.addEventListener("click", () => {
      const json = document.getElementById("designJson");
      if (json) navigator.clipboard.writeText(json.textContent);
    });
    jsonHeader.appendChild(copyBtn);

    const jsonPre = document.createElement("pre");
    jsonPre.id = "designJson";
    jsonPre.tabIndex = 0;

    helpContent.appendChild(jsonHeader);
    helpContent.appendChild(jsonPre);

    section.appendChild(helpToggle);
    section.appendChild(helpContent);
    return section;
  },

  updateDesignedInstrument() {
    this.writeDesignJson();
    // Reset find-seed state on any instrument edit
    if (this.findSeedTimer) { clearInterval(this.findSeedTimer); this.findSeedTimer = null; }
    this.cancelFindSeed = null;
    this.findSeedBestScore = null;
    this.findSeedBestSeed = null;
    this.findSeedTarget = null;
    this.persistFindSeedState();
    const improveBtn = document.getElementById("findImprovedButton");
    if (improveBtn) { improveBtn.style.display = "none"; improveBtn.textContent = "\uD83D\uDD04 Find Improved"; }
    const searchUntilBtn = document.getElementById("searchUntilSeedButton");
    if (searchUntilBtn) searchUntilBtn.textContent = "\uD83C\uDFAF Search Until";
    const loadBtn = document.getElementById("loadSeedInGenerator");
    if (loadBtn) loadBtn.style.display = "none";
    const findBtn = document.getElementById("findSeedButton");
    if (findBtn) { findBtn.textContent = "\uD83D\uDD0D Find Seed"; findBtn.classList.remove("btn-warning"); findBtn.classList.add("btn-info"); findBtn.disabled = false; }
  },

  redrawDesignCanvases() {
    document.querySelectorAll(".design-env-canvas").forEach(canvas => {
      if (canvas._drawFn) requestAnimationFrame(() => canvas._drawFn());
    });
  },

  writeDesignJson() {
    const jsonEl = document.getElementById("designJson");
    if (jsonEl) jsonEl.textContent = JSON.stringify(this.designedInstrument, null, 2);
    this.updateDesignCodeSample();
    try { localStorage.setItem("zynCurrentDesign", JSON.stringify(this.designedInstrument)); } catch (e) { /* quota */ }
  },

  persistFindSeedState() {
    try {
      if (this.findSeedBestSeed !== null && this.findSeedBestScore !== null) {
        localStorage.setItem("zynFindSeed", JSON.stringify({ seed: this.findSeedBestSeed, score: this.findSeedBestScore }));
      } else {
        localStorage.removeItem("zynFindSeed");
      }
    } catch (e) { /* quota */ }
  },

  restoreFindSeedState() {
    try {
      const stored = localStorage.getItem("zynFindSeed");
      if (stored) {
        const { seed, score } = JSON.parse(stored);
        this.findSeedBestSeed = seed;
        this.findSeedBestScore = score;
        this.showFindSeedResult(seed, score);
      }
    } catch (e) { /* ignore */ }
  },

  showFindSeedResult(seed, score) {
    const improveBtn = document.getElementById("findImprovedButton");
    const loadBtn = document.getElementById("loadSeedInGenerator");
    if (improveBtn) improveBtn.style.display = "";
    if (seed !== null && loadBtn) {
      loadBtn.style.display = "";
      loadBtn.dataset.seed = seed;
      const typeIdx = Math.abs(seed) % 10;
      const pct = score !== null && score >= 0 ? ` ${score.toFixed(1)}%` : "";
      loadBtn.textContent = `\u27A1 Load #${seed} (${this.typeNames[typeIdx]})${pct}`;
    }
  },

  updateDesignCodeSample() {
    const el = document.getElementById("designCodeSample");
    if (!el) return;
    // Build a clean instrument object (filter out disabled oscs, remove 'enabled' property)
    const allOscs = this.designedInstrument.oscs;
    const enabledIndices = [];
    allOscs.forEach((o, i) => { if (o.enabled !== false) enabledIndices.push(i); });
    const cleanInst = {
      type: this.designedInstrument.type,
      oscs: enabledIndices.map(i => { const { enabled, ...rest } = allOscs[i]; return rest; })
    };
    // Include remapped fmMatrix and fmDelays if present and has non-zero values
    if (this.designedInstrument.fmMatrix && enabledIndices.length > 1) {
      const n = enabledIndices.length;
      const remapped = Array.from({ length: n }, (_, si) =>
        Array.from({ length: n }, (_, ti) =>
          this.designedInstrument.fmMatrix[enabledIndices[si]]?.[enabledIndices[ti]] || 0
        )
      );
      if (remapped.some(row => row.some(v => v !== 0))) {
        cleanInst.fmMatrix = remapped;
        // Include delays if fmMatrix is active
        if (this.designedInstrument.fmDelays) {
          cleanInst.fmDelays = Array.from({ length: n }, (_, si) =>
            Array.from({ length: n }, (_, ti) =>
              this.designedInstrument.fmDelays[enabledIndices[si]]?.[enabledIndices[ti]] ?? 0.001
            )
          );
        }
      }
    }
    const vol = this.designedInstrument.volume ?? 1.0;
    const oct = this.designedInstrument.octave ?? 0;
    const instJson = JSON.stringify(cleanInst, null, 2);
    const noteArg = oct === 0 ? "0" : String(oct * 12);
    const gainArg = vol === 1.0 ? "" : `, ${vol.toFixed(2)}`;
    el.textContent =
`<script src="Z.js"><\/script>
<script>
  // Initialise audio (must be called after user interaction)
  Z.init();

  // Custom designed instrument
  const instrument = ${instJson};

  // Play middle C (one-shot with full ADSR envelope)
  Z.play(${noteArg}, instrument${gainArg});

  // Or use noteOn/noteOff for sustained notes:
  // const voiceId = Z.noteOn(${noteArg}, instrument${gainArg});
  // Z.noteOff(voiceId);
<\/script>`;
  },

  renderDesignSaves() {
    const container = document.getElementById("designSavesContainer");
    if (!container) return;
    container.innerHTML = "";
    if (this.designSaves.length === 0) {
      container.innerHTML = '<div class="no-presets">No saved designs yet.</div>';
      return;
    }
    const grid = document.createElement("div");
    grid.className = "channel-preset-grid";
    this.designSaves.forEach((design, index) => {
      const item = document.createElement("div");
      item.className = "preset-item";

      const name = document.createElement("span");
      name.className = "preset-name";
      name.tabIndex = 0;
      name.textContent = design.name;
      name.title = "Click to load this design";
      name.addEventListener("click", () => {
        this.designedInstrument = JSON.parse(JSON.stringify(design.instrument));
        this.findSeedBestSeed = design.bestSeed ?? null;
        this.findSeedBestScore = design.bestScore ?? null;
        this.findSeedTarget = null;
        this.persistFindSeedState();
        this.renderDesignUI();
        this.showFindSeedResult(this.findSeedBestSeed, this.findSeedBestScore);
      });
      name.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); name.click(); }
      });

      const actions = document.createElement("div");
      actions.className = "preset-controls";

      const renameBtn = document.createElement("button");
      renameBtn.className = "preset-btn rename";
      renameBtn.textContent = "Rename";
      renameBtn.addEventListener("click", () => {
        const newName = prompt("Enter new name:", design.name);
        if (newName && newName.trim()) {
          this.designSaves[index].name = newName.trim();
          this.saveDesignSaves();
          this.renderDesignSaves();
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "preset-btn delete";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        if (confirm(`Delete design "${design.name}"?`)) {
          this.designSaves.splice(index, 1);
          this.saveDesignSaves();
          this.renderDesignSaves();
        }
      });

      actions.appendChild(renameBtn);
      actions.appendChild(deleteBtn);
      item.appendChild(name);
      item.appendChild(actions);
      grid.appendChild(item);
    });
    container.appendChild(grid);
  },

  handleFindSeed(mode) {
    // mode: false = timed 10s, true = find improved, "threshold" = search until threshold
    if (this.findSeedTimer) return;
    const findBtn = document.getElementById("findSeedButton");
    const improveBtn = document.getElementById("findImprovedButton");
    const searchUntilBtn = document.getElementById("searchUntilSeedButton");
    const loadBtn = document.getElementById("loadSeedInGenerator");
    const typeSelect = document.getElementById("findSeedTypeSelect");
    const thresholdSelect = document.getElementById("findSeedThresholdSelect");
    const isThreshold = mode === "threshold";
    const findImproved = mode === true;

    const target = (findImproved || isThreshold) && this.findSeedTarget ? this.findSeedTarget : JSON.parse(JSON.stringify(this.designedInstrument));
    if (!findImproved && !isThreshold) {
      this.findSeedTarget = target;
      this.findSeedBestScore = null;
    } else if (isThreshold && !this.findSeedTarget) {
      this.findSeedTarget = target;
    }

    const threshold = isThreshold && thresholdSelect ? parseInt(thresholdSelect.value) : 0;

    // Get type constraint from selector
    const typeValue = typeSelect ? typeSelect.value : "any";
    const constrainType = typeValue !== "any";
    const searchTypeDigit = constrainType ? parseInt(typeValue) : -1;

    let bestSeed = (findImproved || isThreshold) ? (this.findSeedBestSeed ?? null) : null;
    let bestScore = (findImproved || isThreshold) ? (this.findSeedBestScore ?? -1) : -1;
    let tested = 0;
    const duration = (findImproved || isThreshold) ? 0 : 10000;
    const startTime = Date.now();

    if (findBtn) { findBtn.textContent = "\uD83D\uDD0D Searching..."; findBtn.classList.remove("btn-info"); findBtn.classList.add("btn-warning"); findBtn.disabled = true; }
    if (improveBtn && findImproved) { improveBtn.textContent = "\u23F9 Cancel"; }
    if (improveBtn && !findImproved && !isThreshold) improveBtn.style.display = "none";
    if (searchUntilBtn && isThreshold) { searchUntilBtn.textContent = "\u23F9 Cancel"; }
    if (loadBtn && !findImproved && !isThreshold) loadBtn.style.display = "none";

    const batchSize = 100;
    const finishSearch = (seed, score) => {
      clearInterval(this.findSeedTimer);
      this.findSeedTimer = null;
      this.cancelFindSeed = null;
      this.findSeedBestScore = score;
      this.findSeedBestSeed = seed;
      this.persistFindSeedState();
      if (findBtn) { findBtn.textContent = "\uD83D\uDD0D Find Seed"; findBtn.classList.remove("btn-warning"); findBtn.classList.add("btn-info"); findBtn.disabled = false; }
      if (improveBtn) improveBtn.textContent = "\uD83D\uDD04 Find Improved";
      if (searchUntilBtn) searchUntilBtn.textContent = "\uD83C\uDFAF Search Until";
      this.showFindSeedResult(seed, score);
    };
    this.cancelFindSeed = () => finishSearch(bestSeed, bestScore);

    const tick = () => {
      const elapsed = Date.now() - startTime;
      // Time-limited mode (initial search): stop after duration
      if (!findImproved && !isThreshold && elapsed >= duration) {
        finishSearch(bestSeed, bestScore);
        return;
      }
      let foundMatch = false;
      for (let i = 0; i < batchSize; i++) {
        // Generate seed — constrain to type if selected
        const seed = constrainType
          ? Math.floor(Math.random() * Math.floor(Z.mInt / 10)) * 10 + searchTypeDigit
          : Math.floor(Math.random() * Z.mInt);
        const candidate = Z.getInstrument(seed);
        const score = this.compareInstruments(target, candidate);
        if (score > bestScore) {
          bestScore = score;
          bestSeed = seed;
          if (findImproved) { foundMatch = true; break; }
          if (isThreshold && bestScore >= threshold) { foundMatch = true; break; }
        }
        tested++;
      }
      if ((findImproved || isThreshold) && foundMatch) {
        finishSearch(bestSeed, bestScore);
        return;
      }
      const pct = bestScore > 0 ? " \u2014 " + bestScore.toFixed(1) + "%" : "";
      if (!findImproved && !isThreshold) {
        const remaining = Math.ceil((duration - elapsed) / 1000);
        if (findBtn) findBtn.textContent = `\uD83D\uDD0D ${remaining}s${pct}`;
      } else {
        if (findBtn) findBtn.textContent = `\uD83D\uDD0D Searching...${pct}`;
      }
    };

    tick();
    this.findSeedTimer = setInterval(tick, 100);
  },

  exportDesigns() {
    if (this.designSaves.length === 0) { alert("No designs to export"); return; }
    const data = JSON.stringify(this.designSaves, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "zyn-designs.json"; a.click();
    URL.revokeObjectURL(url);
  },

  importDesigns(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) throw new Error("Invalid format");
        let count = 0;
        imported.forEach(d => {
          if (d.name && d.instrument && Array.isArray(d.instrument.oscs)) {
            this.designSaves.push({ name: d.name, instrument: d.instrument, timestamp: d.timestamp || Date.now() });
            count++;
          }
        });
        this.saveDesignSaves();
        this.renderDesignSaves();
        alert(`Imported ${count} design(s)`);
      } catch (err) {
        alert("Failed to import: Invalid design file");
      }
    };
    reader.readAsText(file);
  },
};

window.addEventListener("load", () => ZynDemo.init());
