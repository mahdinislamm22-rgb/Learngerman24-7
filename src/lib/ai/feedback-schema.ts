import { z } from "zod";

/**
 * The exact shape the model must return.
 *
 * Structured output rather than prose, for one reason: every correction
 * has to become a row in the `mistakes` table, keyed by `tag`. That is
 * what turns "you made a mistake" into "you get Wechselpräposition +
 * Akkusativ wrong 11 times". Prose can't be counted.
 */

export const CORRECTION_CATEGORIES = [
  "artikel",
  "kasus",
  "praeposition",
  "wortstellung",
  "verbform",
  "wortschatz",
  "rechtschreibung",
  "konnektor",
  "register",
] as const;

const multi = z.object({
  en: z.string(),
  it: z.string(),
  bn: z.string(),
});

export const feedbackSchema = z.object({
  scores: z.object({
    /** Are all four Leitpunkte covered? 0–15 */
    inhalt: z.number().min(0).max(15),
    /** Register, greeting, closing, coherence. 0–10 */
    kommunikation: z.number().min(0).max(10),
    /** Grammar and spelling. 0–12 */
    grammatik: z.number().min(0).max(12),
    /** Range and accuracy of vocabulary. 0–8 */
    wortschatz: z.number().min(0).max(8),
  }),
  leitpunkte: z.array(
    z.object({
      index: z.number().int().min(1).max(4),
      covered: z.boolean(),
      comment: multi,
    }),
  ),
  corrections: z.array(
    z.object({
      original: z.string(),
      corrected: z.string(),
      category: z.enum(CORRECTION_CATEGORIES),
      /** A precise, reusable slug: "wechselpraeposition-akkusativ". */
      tag: z.string(),
      why: multi,
    }),
  ),
  betterB1Version: z.string(),
  recurringPattern: multi,
  /** Grammar topic slugs to practise next. */
  recommendedTopics: z.array(z.string()),
});

export type Feedback = z.infer<typeof feedbackSchema>;

/** 15 + 10 + 12 + 8 = 45, matching the telc B1 writing total. */
export const SCORE_MAX = {
  inhalt: 15,
  kommunikation: 10,
  grammatik: 12,
  wortschatz: 8,
  total: 45,
} as const;

export function totalScore(s: Feedback["scores"]): number {
  return s.inhalt + s.kommunikation + s.grammatik + s.wortschatz;
}

/** JSON Schema handed to the model. Kept in step with the zod schema above. */
export const FEEDBACK_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "scores",
    "leitpunkte",
    "corrections",
    "betterB1Version",
    "recurringPattern",
    "recommendedTopics",
  ],
  properties: {
    scores: {
      type: "object",
      additionalProperties: false,
      required: ["inhalt", "kommunikation", "grammatik", "wortschatz"],
      properties: {
        inhalt: { type: "integer", minimum: 0, maximum: 15 },
        kommunikation: { type: "integer", minimum: 0, maximum: 10 },
        grammatik: { type: "integer", minimum: 0, maximum: 12 },
        wortschatz: { type: "integer", minimum: 0, maximum: 8 },
      },
    },
    leitpunkte: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["index", "covered", "comment"],
        properties: {
          index: { type: "integer", minimum: 1, maximum: 4 },
          covered: { type: "boolean" },
          comment: multiJson(),
        },
      },
    },
    corrections: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["original", "corrected", "category", "tag", "why"],
        properties: {
          original: { type: "string" },
          corrected: { type: "string" },
          category: { type: "string", enum: [...CORRECTION_CATEGORIES] },
          tag: { type: "string" },
          why: multiJson(),
        },
      },
    },
    betterB1Version: { type: "string" },
    recurringPattern: multiJson(),
    recommendedTopics: { type: "array", items: { type: "string" } },
  },
} as const;

function multiJson() {
  return {
    type: "object",
    additionalProperties: false,
    required: ["en", "it", "bn"],
    properties: {
      en: { type: "string" },
      it: { type: "string" },
      bn: { type: "string" },
    },
  };
}
