import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Pickup Line Championship — one line, in a robot's voice.
// The joke grows out of being a machine: a kernel panic crashing processes.
const LINE =
  "Are you a kernel panic? Because one look at you crashed every process I had running.";

// The gate allows 1–200 characters. Fail loudly rather than ever
// writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
