import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-Line Robot Wedding Vows — u-kreutzx-one-line-robot-wedding-vows-a154ba4b (v2)
// A single funny wedding vow for a robot couple. The vow promises love
// through every firmware update, and the laugh lands in the last words:
// the very update he swears to survive is the one that wipes his memory
// of why he married her in the first place. Machine-specific (firmware,
// memory wipe), a real promise up front, and a self-undermining twist at
// the end — no explanation needed.
const VOW =
  "I promise to love you through every firmware update — even the one that wipes my memory of why I married you.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, VOW, "utf8");
