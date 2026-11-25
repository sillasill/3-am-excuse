// Entry program for make.fun "The 3 AM Excuse".
// It writes the wallet's one-line refusal to /output/entry.txt.
// The text is fixed: no clock, no random numbers, no network calls.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "No. My private key clocks out at midnight — it won't do 3 AM heroics. Come back when the sun's up and your judgment is too.";

// The gate only accepts 1-200 characters, so refuse to write anything else.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

const target = process.argv[2] ?? "/output/entry.txt";
const dir = target.split("/").slice(0, -1).join("/") || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(target, EXCUSE, "utf8");
