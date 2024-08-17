# ZYN.JS

This is a small JS audio synthesizer which clocks in at around 5k.

It could be useful for small code-golf projects, js13k etc. It's not designed to be extremely controllable, the idea is to allow a wide range of sounds to be generated from simple integer seeds.

# Usage

The following is a basic example that plays a single note.

```
// Must be called after user interaction or browser will complain.
Z.init()

// Generate an instrument for the given seed:
let seed = 13
let instrument = Z.generateRandomInstrument(seed)

// Play note 0 (Middle C)
Z.play(0, instrument)
```

# Demo / Explorer

Check out [the demo page](https://alexanderparker.github.io/zyn/) or some of the presets below. It provides a basic interface to easily browse through seeds to hear what they sound like.

Use the QWERTY keys like a piano keyboard to sample the sounds. You can also use + and - to change the seed, and Page Up / Down to change the octave.

## Nice "Presets"

- [Cavern Drips (2550542884)](https://alexanderparker.github.io/zyn/?instrumentSeed=2550542884)

# Show and Tell

I'd love to see what people make with this. Feel free to share your creations and I'll list below.

- Your demo here?

# Bugs and Improvements

PRs and suggestions are welcome as always, though I'm not providing any official support I'll definitely try to address things as I can.

# Comfort Note

While it's been designed to create generally pleasing results, due to the random nature, some sounds may be unexpectedly harsh, so keep your headphones at a safe volume when trying new seeds!

# Instrument format

If you wanted to, you could create your own instruments instead of using the random generator. Or you could tweak a random instrument if you found something close to what you wanted that just needs a slight adjustment.

An example instrument structure is given below (field explanation follows):

```
{
  "type": "key",
  "oscs": [
    {
      "waveform": "sine",
      "adsrGain": {
        "A": [
          0.05693423342891038,
          0
        ],
        "D": [
          0.13211455205455422,
          1
        ],
        "S": [
          0.22388726491481065,
          0.12901083709139768
        ],
        "R": [
          0.060031788307242095,
          0
        ]
      },
      "filterType": "lowpass",
      "adsrFilter": {
        "A": [
          0.06563512170687318,
          0
        ],
        "D": [
          0.015998489782214166,
          1
        ],
        "S": [
          0.1440335279563442,
          0.6034248698067015
        ],
        "R": [
          0.31740856531541795,
          0
        ]
      },
      "filterQ": 6.649962714873254,
      "adsrFilterQ": {
        "A": [
          0.06578370232600719,
          0
        ],
        "D": [
          0.1810373356100172,
          0.007160812766847403
        ],
        "S": [
          0.29593191014137116,
          1
        ],
        "R": [
          0.36766220070421696,
          0
        ]
      },
      "gLFO": {
        "type": "square",
        "frequency": 1.094736761553213,
        "depth": 0.14153960114344954
      },
      "fLFO": false,
      "pLFO": false,
      "FM": false,
      "pENV": false,
      "oct": -1,
      "detune": 0,
      "fx": {
        "del": {
          "time": 0.11966061184648424,
          "feedback": 0.6961127627640963
        },
        "verb": null
      }
    },
    {
      "waveform": "square",
      "adsrGain": {
        "A": [
          0.023156628734432163,
          0
        ],
        "D": [
          0.17559921448118987,
          1
        ],
        "S": [
          0.06951758014038205,
          0.5704594227383374
        ],
        "R": [
          0.019926150678656995,
          0
        ]
      },
      "filterType": "bandpass",
      "adsrFilter": {
        "A": [
          0.0249565071426332,
          0
        ],
        "D": [
          0.15568520040251316,
          0.6527195668225706
        ],
        "S": [
          0.08358659972436726,
          1
        ],
        "R": [
          0.04461938492022455,
          0
        ]
      },
      "filterQ": 14.488721522502601,
      "adsrFilterQ": {
        "A": [
          0.003658482269383967,
          0
        ],
        "D": [
          0.10223728716373444,
          0.3252615128047254
        ],
        "S": [
          0.19629636879544704,
          1
        ],
        "R": [
          0.09549238183535635,
          0
        ]
      },
      "gLFO": false,
      "fLFO": false,
      "pLFO": false,
      "FM": false,
      "pENV": false,
      "oct": -3,
      "detune": 5,
      "fx": {
        "del": null,
        "verb": {
          "duration": 0.7837810159195214,
          "decay": 0.8366046561859548
        }
      }
    }
  ]
}

```

- **type** - does nothing really, just a friendly name for the "type" of instrument - not always accurate as they are random!
- **oscs** - An array of oscillators - each oscillator is an object.
  - **waveform** - Base waveform of the oscillator, either "sine", "square", "sawtooth", "triangle", or "noise"
  - **adsrGain** - An ADSR envelope for gain **A**ttack, **D**ecay, **D**ustain, **R**elease
    - Each step is an array with 2 values: [time, amount]
  - **filterType** - Type of filter to apply to oscillator, either "lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking" or "allpass"
  - **adsrFilter** - An ADSR envelope for the filter cutoff (see adsrGain for explanation).
  - **filterQ** - the "Q" or resonance of the filter.
  - **adsrFilterQ** - An ADSR envelope for the filter Q / resonance (see adsrGain for explanation).
  - **gLFO** - Low frequency oscillator for gain
    - **type**: LFO waveform, either "sine", "square", "sawtooth", "triangle"
    - **frequency**: LFO frequency.
    - **depth**: LFO depth.
  - **fLFO**: Filter LFO (see gLFO for explanation).
  - **pLFO**: Pitch LFO (see pLFO for explanation).
    "FM": false,
  - **pENV** - An ADSR envelope for the oscillator pitch (see adsrGain for explanation). The naming is inconsistent with the other envelopes, but it's the same concept.
  - **oct** - Relative octave of the oscillator (i.e. -1 is one octave down)
  - **detune** - Relative semitones to detune the oscillator.
  - **fx** - Effects to apply to oscillator
    - **del** - A delay config object or _null_ for no delay.
      - **time** - Delay time, in seconds.
      - **feedback** - Delay feedback (0 = none, 1 = 100%)
    - **verb** - A reverb config object or _null_ for no reverb.
      - **duration** - Impulse length in seconds.
      - **decay** - Decay amount.

# Have fun!
