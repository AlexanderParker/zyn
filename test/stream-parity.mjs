// Pins the instrument-generation PRNG stream so that adding distortion cannot
// silently change every existing seed.
//
// The distortion curve amount must be drawn from a side PRNG, not the main `r`
// stream. If it leaks into `r`, every oscillator generated after it shifts and
// ~5% of all seeds become structurally different instruments. This test catches
// that immediately.
//
// Usage:
//   node test/stream-parity.mjs      # writes the baseline if absent, else compares

import { readFileSync, writeFileSync, existsSync } from "node:fs";

const src = readFileSync(new URL("../zyn-unminified.js", import.meta.url), "utf8");
const Z = eval(src + "; Z");

// Structural fingerprint that deliberately EXCLUDES dist, so it stays invariant
// across the distortion fix. If this changes, the main PRNG stream moved.
function fingerprint(inst) {
  return JSON.stringify(inst, (k, v) => (k === "dist" ? undefined : v));
}

const seeds = [];
for (let i = 0; i < 5000; i++) seeds.push((i * 7919) % 4294967296);

const out = seeds.map((s) => fingerprint(Z.getInstrument(s)));
const path = new URL("./stream-baseline.json", import.meta.url);

if (!existsSync(path)) {
  writeFileSync(path, JSON.stringify(out));
  console.log("baseline written:", out.length, "seeds");
  process.exit(0);
}

const baseline = JSON.parse(readFileSync(path, "utf8"));
if (baseline.length !== out.length) {
  console.log(`FAIL: baseline has ${baseline.length} seeds, got ${out.length}`);
  process.exit(1);
}

const diverged = [];
for (let i = 0; i < out.length; i++) {
  if (out[i] !== baseline[i]) diverged.push(seeds[i]);
}

if (diverged.length === 0) {
  console.log("PASS: stream unchanged across", out.length, "seeds");
  process.exit(0);
}

console.log(`FAIL: ${diverged.length} seeds diverged`);
console.log("first few:", diverged.slice(0, 5).join(", "));
process.exit(1);
