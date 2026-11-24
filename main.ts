import { mkdirSync, writeFileSync } from "node:fs";

// The entry: exactly one emoji — the desert island, the universal
// dream-vacation picture.
const ENTRY = "🏝️";

// Guard: the bounty wants exactly one emoji — non-empty, no whitespace,
// at most 4 Unicode code points.
const codePoints = [...ENTRY];
if (codePoints.length === 0) {
  throw new Error("entry must not be empty");
}
if (/\s/.test(ENTRY)) {
  throw new Error("entry must not contain whitespace");
}
if (codePoints.length > 4) {
  throw new Error("entry must be at most 4 Unicode code points");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
