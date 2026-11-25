import { writeFileSync, mkdirSync } from "node:fs";

// One sentence, 125 chars, a childhood memory: grandma's kitchen,
// fresh rice, wood smoke, and summer evenings that felt endless.
const ENTRY =
  "Grandma's kitchen smelled of fresh rice and wood smoke, and the summer evenings were so long we believed they would never end.";

// writeEntry() wraps the write with an explicit utf8 encoding so the
// entry lands byte-exact, with no trailing newline added.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
