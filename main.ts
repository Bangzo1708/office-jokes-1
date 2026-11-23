import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for "Make the AI Judge Laugh: Office Jokes".
// Chosen from three hand-written candidates for the strongest
// setup-punchline turn: a review that praises you, a paycheck that
// undercuts you. Fully deterministic: the same bytes on every run.
const JOKE =
  "My performance review says I exceed expectations, but my paycheck says I meet budget.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
