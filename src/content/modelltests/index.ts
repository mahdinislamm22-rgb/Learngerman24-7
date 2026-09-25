import { les01 } from "@/content/lesen/set-01";
import { les02 } from "@/content/lesen/set-02";
import { les03 } from "@/content/lesen/set-03";
import { sb01 } from "@/content/sprachbausteine/set-01";
import { sb02 } from "@/content/sprachbausteine/set-02";
import { sb03 } from "@/content/sprachbausteine/set-03";
import { hoer01 } from "@/content/hoeren/set-01";
import { hoer02 } from "@/content/hoeren/set-02";
import { hoer03 } from "@/content/hoeren/set-03";
import { getSchreibenTask } from "@/content/schreiben";
import { validateLesenSet } from "@/content/lesen";
import { validateSet as validateSbSet } from "@/content/sprachbausteine";
import { validateHoerSet } from "@/content/hoeren";
import { MT_PLAN, type Modelltest } from "./types";

export type { Modelltest, SectionKey } from "./types";
export { MT_POINTS, MT_MINUTES, MT_PLAN } from "./types";

/**
 * The Modelltests that exist so far.
 *
 * MT_PLAN lists fifteen; this list holds the ones whose content is written.
 * Keeping them apart is deliberate — the app can then show what is coming
 * without pretending an unwritten test is available, and a half-written
 * test can never quietly ship with missing items.
 */
const mt01: Modelltest = {
  code: "MT-01",
  nr: 1,
  title: {
    de: "Modelltest 1",
    en: "Mock exam 1",
    it: "Prova modello 1",
    bn: "মডেল টেস্ট ১",
  },
  focus: MT_PLAN[0].theme,
  lesen: les01,
  sprachbausteine: sb01,
  hoeren: hoer01,
  // SCH-01 is the invitation task: informal register, four Leitpunkte.
  schreiben: getSchreibenTask("SCH-01")!,
};

const mt02: Modelltest = {
  code: "MT-02",
  nr: 2,
  title: {
    de: "Modelltest 2",
    en: "Mock exam 2",
    it: "Prova modello 2",
    bn: "মডেল টেস্ট ২",
  },
  focus: MT_PLAN[1].theme,
  lesen: les02,
  sprachbausteine: sb02,
  hoeren: hoer02,
  // SCH-09 is the application enquiry: formal register, four Leitpunkte.
  schreiben: getSchreibenTask("SCH-09")!,
};

const mt03: Modelltest = {
  code: "MT-03",
  nr: 3,
  title: {
    de: "Modelltest 3",
    en: "Mock exam 3",
    it: "Prova modello 3",
    bn: "মডেল টেস্ট ৩",
  },
  focus: MT_PLAN[2].theme,
  lesen: les03,
  sprachbausteine: sb03,
  hoeren: hoer03,
  // SCH-10 cancels a doctor's appointment: formal register, four Leitpunkte.
  schreiben: getSchreibenTask("SCH-10")!,
};

export const MODELLTESTS: Modelltest[] = [mt01, mt02, mt03];

export function getModelltest(code: string): Modelltest | undefined {
  return MODELLTESTS.find((m) => m.code === code);
}

/** Which of the fifteen are written, and which are still to come. */
export function modelltestPlan() {
  return MT_PLAN.map((p) => {
    const built = MODELLTESTS.find((m) => m.nr === p.nr);
    return { nr: p.nr, theme: p.theme, code: built?.code ?? null, ready: Boolean(built) };
  });
}

/**
 * Validate a whole paper by validating each section with its own checker.
 *
 * Nothing new is checked here. The point is that a Modelltest cannot be
 * sound unless every section is, and those checks already exist — so the
 * exam inherits them rather than growing a second, weaker copy.
 */
export function validateModelltest(mt: Modelltest): string[] {
  const problems = [
    ...validateLesenSet(mt.lesen),
    ...validateSbSet(mt.sprachbausteine),
    ...validateHoerSet(mt.hoeren),
  ];

  if (mt.schreiben.leitpunkte.length !== 4) {
    problems.push(`${mt.code}: the writing task needs exactly 4 Leitpunkte.`);
  }
  if (!mt.schreiben.modelAnswerDe.trim()) {
    problems.push(`${mt.code}: the writing task has no model answer.`);
  }

  return problems.map((p) => `${mt.code} → ${p}`);
}

export function validateAllModelltests(): string[] {
  return MODELLTESTS.flatMap(validateModelltest);
}
