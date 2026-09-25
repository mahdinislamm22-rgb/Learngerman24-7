import { tasksA } from "./tasks-a";
import { tasksB } from "./tasks-b";
import { tasksC } from "./tasks-c";
import type { SchreibenTask } from "./types";

export * from "./types";

/** All writing tasks, in code order. Add a task to one of the files and
 *  it appears in the list, the picker and the practice flow automatically. */
export const SCHREIBEN_TASKS: SchreibenTask[] = [...tasksA, ...tasksB, ...tasksC].sort(
  (a, b) => a.code.localeCompare(b.code),
);

export function getSchreibenTask(code: string): SchreibenTask | undefined {
  return SCHREIBEN_TASKS.find((t) => t.code === code);
}

/** Categories present, for filtering the list. */
export function schreibenCategories(): SchreibenTask["category"][] {
  return [...new Set(SCHREIBEN_TASKS.map((t) => t.category))];
}
