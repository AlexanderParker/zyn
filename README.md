# ZYN.JS

A small JS audio synthesizer (~8.9kb minified, ~3.2kb gzipped) that generates a wide range of instruments from simple integer seeds.

It could be useful for small code-golf projects, js13k etc. It's not designed to be extremely controllable, the idea is to allow a wide range of sounds to be generated from simple integer seeds.

## Features

- **Procedural instrument generation** from integer seeds using a seeded PRNG (Mulberry32)
- **10 instrument types**: pad, lead, bass, key, pluck, bell, string, drum, perc, fx -- selected by the last digit (0-9) of the seed
- **Note on/off** with proper ADSR envelope handling for sustained notes
- **Per-oscillator effects**: delay with feedback, convolution reverb
- **Modulation**: gain/filter/pitch LFOs, FM synthesis, pitch envelopes
- **Stop all** playback with smooth fade-out
- **Audio warm-up** to eliminate first-play delay from browser autoplay policies
- **Automatic cleanup** of cached effect nodes to prevent memory exhaustion

## Demo

Check out [the demo page](https://alexanderparker.github.io/zyn/?instrumentSeed=3703184240). It provides an interactive interface to explore instruments with:

- On-screen piano keyboard (mouse/touch)
- Computer keyboard input (QWERTY layout, Q = middle C)
- MIDI controller support with velocity sensitivity
- MIDI pedal support (sustain, sostenuto, soft/una corda)
- Octave selector (+/- 3 octaves, Page Up/Down keys, also applies to MIDI)
- Volume control (0-500%)
- Instrument type filter with random generation (type numbers shown in UI)
- Default presets included on first load, covering all 10 instrument types
- Preset system with save/load/rename/delete (stored in localStorage)
- Preset export/import as JSON files
- Presets save octave and volume settings
- MIDI enable/disable with status indicator (green = active, red = inactive) and remembered preference
- 16-channel MIDI routing -- assign different instruments to each MIDI channel with independent octave and volume settings
- Switchable active channel -- click "Set Active" on any channel to make it the target for keyboard input, instrument generation, and preset loads
- Channel configuration presets -- save, load, export, and import entire 16-channel setups
- Per-channel activity indicators -- green dot on note-on, red flash on note-off
- Audio recording -- arm recording, play notes to capture, save clips as WAV files

## Quick Start

Simply import the minified Z.js into your project, initialise it, generate an instrument, then play it:

```js
// Must be called after user interaction or browser will complain.
Z.init();

// Generate an instrument for the given seed:
let seed = 13;
let instrument = Z.getInstrument(seed);

// Play note 0 (Middle C) - one-shot with full ADSR
Z.play(0, instrument);
```

Optionally, you can specify a volume (gain) for playback:

```js
Z.play(0, instrument, 0.1); // 10% gain.
```

### Sustained Notes

For sustained (note on/off) playback, use `noteOn` and `noteOff`:

```js
// Start a sustained note - returns a voice ID
let voiceId = Z.noteOn(0, instrument, 1.0);

// Later, release the note (respects the instrument's release envelope)
Z.noteOff(voiceId);
```

### Stop All

To immediately stop all playing sounds with a smooth fade:

```js
Z.stopAll();
```

## API

| Method | Description |
|---|---|
| `Z.init()` | Initialise the AudioContext. Must be called after user interaction. |
| `Z.warmUp()` | Pre-warm the audio pipeline to eliminate first-play delay. Called automatically by play/render. |
| `Z.getInstrument(seed)` | Generate an instrument object from an integer seed. Last digit (0-9) determines the type. |
| `Z.play(note, instrument, gain?)` | Play a one-shot note (full ADSR, then stops). |
| `Z.noteOn(note, instrument, gain?)` | Start a sustained note. Returns a `voiceId`. |
| `Z.noteOff(voiceId)` | Release a sustained note by its voice ID. |
| `Z.stopAll()` | Stop all active voices with a quick fade-out. |
| `Z.instrumentTypes` | Array of type names: `["pad", "lead", "bass", "key", "pluck", "bell", "string", "drum", "perc", "fx"]` |

## Instrument Types

The last digit of the seed selects the instrument type:

| Digit | Type | Character |
|---|---|---|
| 0 | Pad | Slow attack, sustained, soft |
| 1 | Lead | Medium attack, expressive |
| 2 | Bass | Punchy, short attack |
| 3 | Key | Piano-like, medium decay |
| 4 | Pluck | Very short decay, no sustain |
| 5 | Bell | Sharp attack, long decay, metallic |
| 6 | String | Slow attack, sustained, bowed |
| 7 | Drum | Very percussive, noise-based |
| 8 | Perc | Percussive, pitched, tuned |
| 9 | FX | Special effects, experimental |

## Building

The minified Z.js is built from zyn-unminified.js using terser:

```
npm install
npm run build
```

## Show and Tell

I'd love to see what people make with this. Feel free to share your creations and I'll list below.

- Your demo here?

## Bugs and Improvements

PRs and suggestions are welcome as always, though I'm not providing any official support I'll definitely try to address things as I can.

## Comfort Note

While it's been designed to create generally pleasing results, due to the random nature, some sounds may be unexpectedly harsh, so keep your headphones at a safe volume when trying new seeds!

## Instrument Format

If you wanted to, you could create your own instruments instead of using the random generator. Or you could tweak a random instrument if you found something close to what you wanted that just needs a slight adjustment.

An example instrument structure is given below (field explanation follows):

```json
{
  "type": "key",
  "oscs": [
    {
      "waveform": "sine",
      "adsrGain": {
        "A": [0.057, 0],
        "D": [0.132, 1],
        "S": [0.224, 0.129],
        "R": [0.060, 0]
      },
      "filterType": "lowpass",
      "adsrFilter": {
        "A": [0.066, 0],
        "D": [0.016, 1],
        "S": [0.144, 0.603],
        "R": [0.317, 0]
      },
      "filterQ": 6.65,
      "adsrFilterQ": {
        "A": [0.066, 0],
        "D": [0.181, 0.007],
        "S": [0.296, 1],
        "R": [0.368, 0]
      },
      "gLFO": {
        "type": "square",
        "frequency": 1.09,
        "depth": 0.14
      },
      "fLFO": false,
      "pLFO": false,
      "FM": false,
      "pENV": false,
      "oct": -1,
      "detune": 0,
      "fx": {
        "del": { "time": 0.12, "feedback": 0.70 },
        "verb": null
      }
    }
  ]
}
```

- **type** - A friendly name for the instrument type (pad, lead, bass, key, pluck, bell, string, drum, perc, fx). Determined by seed but not always perfectly descriptive given the random nature.
- **oscs** - An array of oscillators - each oscillator is an object.
  - **waveform** - Base waveform: "sine", "square", "sawtooth", "triangle", or "noise"
  - **adsrGain** - ADSR envelope for gain: **A**ttack, **D**ecay, **S**ustain, **R**elease
    - Each step is an array with 2 values: [time (seconds), amount (0-1)]
  - **filterType** - Filter type: "lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", or "allpass"
  - **adsrFilter** - ADSR envelope for the filter cutoff frequency.
  - **filterQ** - Filter Q (resonance) value.
  - **adsrFilterQ** - ADSR envelope for the filter Q / resonance.
  - **gLFO** - Gain LFO (low frequency oscillator), or `false` if unused.
    - **type**: LFO waveform ("sine", "square", "sawtooth", "triangle")
    - **frequency**: LFO rate in Hz.
    - **depth**: LFO depth.
  - **fLFO** - Filter frequency LFO (same fields as gLFO), or `false`.
  - **pLFO** - Pitch LFO (same fields as gLFO), or `false`.
  - **FM** - Frequency modulation config, or `false`.
    - **type**: Modulator waveform.
    - **frequency**: Modulator frequency ratio.
    - **depth**: Modulation depth.
  - **pENV** - Pitch envelope (ADSR format with an additional `amount` field), or `false`.
  - **oct** - Relative octave offset (e.g. -1 = one octave down)
  - **detune** - Detune in semitones.
  - **fx** - Effects
    - **del** - Delay config or `null`.
      - **time** - Delay time in seconds.
      - **feedback** - Feedback amount (0-1).
    - **verb** - Reverb config or `null`.
      - **duration** - Impulse response length in seconds.
      - **decay** - Decay rate.

## Have fun!
