/**
 * telc Deutsch B1 exam constants.
 *
 * Verified 7 Sept 2026 against published format descriptions. These drive
 * the exam simulator's scoring, so they live in one place rather than
 * being sprinkled through components.
 *
 * NOTE: all practice material in this app is ORIGINAL, written in the telc
 * format. It is not licensed telc content and must never be presented as
 * an official exam question.
 */

export type SectionKey =
  | "lesen"
  | "sprachbausteine"
  | "hoeren"
  | "schreiben"
  | "sprechen";

export type SectionSpec = {
  key: SectionKey;
  label: string;
  labelEn: string;
  points: number;
  items: number | null;
  parts: number;
  minutes: number | null;
  half: "written" | "oral";
};

export const SECTIONS: SectionSpec[] = [
  {
    key: "lesen",
    label: "Leseverstehen",
    labelEn: "Reading",
    points: 75,
    items: 20,
    parts: 3,
    minutes: null, // shares a 90-minute block with Sprachbausteine
    half: "written",
  },
  {
    key: "sprachbausteine",
    label: "Sprachbausteine",
    labelEn: "Language elements",
    points: 30,
    items: 20,
    parts: 2,
    minutes: null,
    half: "written",
  },
  {
    key: "hoeren",
    label: "Hörverstehen",
    labelEn: "Listening",
    points: 75,
    items: 20,
    parts: 3,
    minutes: 30,
    half: "written",
  },
  {
    key: "schreiben",
    label: "Schriftlicher Ausdruck",
    labelEn: "Writing",
    points: 45,
    items: 1,
    parts: 1,
    minutes: 30,
    half: "written",
  },
  {
    key: "sprechen",
    label: "Mündliche Prüfung",
    labelEn: "Speaking",
    points: 75,
    items: null,
    parts: 3,
    minutes: 15,
    half: "oral",
  },
];

/** Lesen + Sprachbausteine are one self-paced 90-minute block. */
export const LESEN_SPRACHBAUSTEINE_MINUTES = 90;

export const WRITTEN_TOTAL = 225;
export const ORAL_TOTAL = 75;
export const EXAM_TOTAL = 300;

/** 60% in each half, independently. No compensation between them. */
export const PASS_RATIO = 0.6;
export const WRITTEN_PASS = Math.round(WRITTEN_TOTAL * PASS_RATIO); // 135
export const ORAL_PASS = Math.round(ORAL_TOTAL * PASS_RATIO); // 45

/** Writing task expectations. */
export const SCHREIBEN_TARGET_WORDS = 150;
export const SCHREIBEN_LEITPUNKTE = 4;

export type Grade = "sehr gut" | "gut" | "befriedigend" | "ausreichend" | "nicht bestanden";

export function gradeFor(ratio: number): Grade {
  if (ratio >= 0.9) return "sehr gut";
  if (ratio >= 0.8) return "gut";
  if (ratio >= 0.7) return "befriedigend";
  if (ratio >= 0.6) return "ausreichend";
  return "nicht bestanden";
}

/** Whole days from today until the exam. Negative once it has passed. */
export function daysUntil(examDate: string | Date | null | undefined): number | null {
  if (!examDate) return null;
  const exam = typeof examDate === "string" ? new Date(examDate) : examDate;
  if (Number.isNaN(exam.getTime())) return null;
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const startOfExam = new Date(exam);
  startOfExam.setHours(0, 0, 0, 0);
  return Math.round((startOfExam.getTime() - startOfToday.getTime()) / 86_400_000);
}
