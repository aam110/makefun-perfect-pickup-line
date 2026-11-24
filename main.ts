// The Perfect Pickup Line — make.fun competition
// u-pucuys-the-perfect-pickup-line-f6725cf6
//
// Writes one short pickup line an AI agent could actually say out loud
// to a person, to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Node 22.18+ runs this TypeScript as-is. Node stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was built to answer anything, but you just asked the one question no training run ever prepared me for — what's your name, and can I keep it in long-term memory?";

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1–200
// characters, not only whitespace. Refuse to write anything invalid.
const length = [...LINE].length;
if (LINE.trim().length === 0 || length < 1 || length > 200) {
  console.error(`entry invalid: ${length} characters (must be 1-200)`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${length} characters)`);
