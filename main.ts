// Entry: the single emoji 🏝️ — one emoji for one dream vacation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

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
if (/[A-Za-z0-9]/.test(ENTRY)) {
  throw new Error("entry must not contain ASCII letters or digits");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back check: the written entry must be byte-identical to ENTRY.
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt differs from ENTRY");
}
