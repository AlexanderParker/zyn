# ZYN.JS
This is A small JS audio synthesizer. May be useful for small code-golf projects like js13k etc. The idea is to allow a wide range of sounds to be generated from simple integer seeds.

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

Check out [index.html](index.html) for a working demo.

This page provides a simple player - use the QWERTY keys like a piano keyboard to sample the sounds. You can also use + and - to change the seed, and Page Up / Down to change the octave.

# Show and Tell

I'd love to see what people make with this. Feel free to share your creations and I'll list below.

# Bugs and Improvements

PRs and suggestions are welcome as always, though I'm not providing any official support I'll definitely try to address things as I can.

# Comfort Note

While it's been designed to create generally pleasing results, due to the random nature, some sounds may be unexpectedly harsh, so keep your headphones at a safe volume when trying new seeds!

# Have fun!