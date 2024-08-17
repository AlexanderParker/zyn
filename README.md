# ZYN.JS
This is a small JS audio synthesizer which clocks in at around 5k.

It could be useful for small code-golf projects, js13k etc. It's not designed to be extremely controllable, the idea is to allow a wide range of sounds to be generated from simple integer seeds.

Currently it's good for one-hit samples played at different pitches, though you could easily write a simple sequencer for music if you wish (this was part of just such a project - the music-generating part sounded awful so I've released the subjectively "good" bit!)

This means for a 5k overhead, you should be able to generate basically limitless sounds for the price of a few integers.

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

Check out [the demo page](https://alexanderparker.github.io/zyn/). It's pretty bare-bones but provides a simple keyboard sound player. 

Use the QWERTY keys like a piano keyboard to sample the sounds. You can also use + and - to change the seed, and Page Up / Down to change the octave.

# Show and Tell

I'd love to see what people make with this. Feel free to share your creations and I'll list below.

# Nice "Presets"

* [Cavern Drips (2550542884)](https://alexanderparker.github.io/zyn/?instrumentSeed=2550542884)


# Bugs and Improvements

PRs and suggestions are welcome as always, though I'm not providing any official support I'll definitely try to address things as I can.

# Comfort Note

While it's been designed to create generally pleasing results, due to the random nature, some sounds may be unexpectedly harsh, so keep your headphones at a safe volume when trying new seeds!

# Have fun!