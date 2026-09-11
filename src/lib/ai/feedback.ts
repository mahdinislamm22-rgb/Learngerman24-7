import "server-only";
import { ai, resolveModels } from "./openai";
import {
  feedbackSchema,
  FEEDBACK_JSON_SCHEMA,
  type Feedback,
} from "./feedback-schema";
import type { SchreibenTask } from "@/content/schreiben";

/**
 * The teaching contract for the corrector.
 *
 * Two rules matter more than the rest and are stated first, because a
 * model that quietly invents a rule or "corrects" correct German would
 * actively teach the wrong thing:
 *   1. Only correct what is actually wrong.
 *   2. Say why, at a level a beginner understands, in their language.
 */
const SYSTEM_PROMPT = `You are an experienced, kind German teacher marking a telc Deutsch B1 writing task (Schriftlicher Ausdruck).

ACCURACY RULES — these override everything else:
- Correct ONLY what is genuinely wrong in standard German. If a sentence is correct but you would have phrased it differently, LEAVE IT ALONE. Style preferences are not mistakes.
- Never invent a grammar rule. If you are not certain something is wrong, do not list it.
- Regional and stylistic variation is not an error.
- Do not correct the learner's name, addresses, dates or invented details.

SCORING — approximate the official telc B1 criteria on a 45-point scale:
- inhalt (0-15): are all FOUR Leitpunkte covered? Roughly 3-4 points each, plus length. A missing Leitpunkt costs heavily — this is the criterion candidates lose most on.
- kommunikation (0-10): correct register (du vs Sie held consistently), suitable Anrede and Gruß, logical paragraphs, appropriate length (~150 words).
- grammatik (0-12): cases, articles, verb position, verb forms, spelling.
- wortschatz (0-8): range and precision, connectors, collocations.
Mark realistically, the way a real examiner would — neither harsh nor generous. A solid but flawed B1 text usually lands around 27-34.

CORRECTIONS:
- Quote the learner's ORIGINAL wording exactly as they wrote it in "original", so it can be found in their text.
- "tag" must be a precise, reusable, lowercase slug with no spaces or umlauts, e.g. "wechselpraeposition-akkusativ", "artikel-dativ-der-die", "verb-position-nebensatz", "weil-verb-am-ende". The SAME mistake must always get the SAME tag, so repeats can be counted over time.
- "why" explains the rule in simple words, as if to someone who has never studied grammar formally. Always explain any grammar term you use. Two or three sentences maximum.
- Where a comparison with English, Italian or Bengali genuinely helps (for example: German uses sein for age where Italian uses avere), make it inside "why".
- List at most 12 corrections. Prioritise mistakes that cost exam points.

betterB1Version: rewrite the learner's OWN letter at solid, natural B1 — same content, same four Leitpunkte, their ideas. Do NOT write C1 German; it must be a realistic target for them.

recurringPattern: one or two sentences naming the single mistake type that shows up most in this text, e.g. "Your most common mistake is the article after a preposition that takes Dativ."

recommendedTopics: 2-4 slugs from this list only: kasus-akkusativ, kasus-dativ, artikel, wechselpraepositionen, nebensatz-weil-dass, perfekt, adjektivendungen, konjunktiv-2, passiv, relativsatz, nicht-vs-kein, verben-mit-praeposition, wortstellung, modalverben.

LANGUAGE: every "why", "comment" and "recurringPattern" must be filled in ALL THREE of en, it, bn. bn must be real Bengali script. Never leave one empty or copy English into it.

TONE: never shame the learner. Name what is wrong plainly, then explain how to fix it.`;

export async function generateFeedback(opts: {
  task: SchreibenTask;
  text: string;
  /** The learner's most frequent existing mistake tags, for context. */
  knownWeakTags?: string[];
}): Promise<Feedback> {
  const { task, text, knownWeakTags = [] } = opts;

  const userPrompt = [
    `TASK (${task.code}, register: ${task.register}):`,
    task.taskDe,
    "",
    "THE FOUR LEITPUNKTE:",
    ...task.leitpunkte.map((p, i) => `${i + 1}. ${p}`),
    "",
    `Expected length: about ${task.targetWords} words.`,
    "",
    knownWeakTags.length
      ? `The learner already makes these mistakes repeatedly: ${knownWeakTags.join(", ")}. If any appear again, tag them identically.`
      : "",
    "",
    "THE LEARNER'S TEXT:",
    "---",
    text,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  const messages = [
    { role: "system" as const, content: SYSTEM_PROMPT },
    { role: "user" as const, content: userPrompt },
  ];

  // Free and slow providers can stall. Without a ceiling the page spins
  // forever and the learner has no idea whether to wait or start again.
  const TIMEOUT_MS = Number(process.env.AI_TIMEOUT_MS ?? 150_000);

  // Providers vary in how strictly they implement structured output. Ask for
  // a real JSON schema first — that is what keeps the Mistake Bank rows
  // well-formed — and fall back to plain JSON mode with the schema described
  // in the prompt, which every OpenAI-compatible provider supports. Without
  // this the free providers would simply fail.
  let raw: string | null | undefined;

  const ask = (model: string, strict: boolean) =>
    ai()
      .chat.completions.create(
        {
          model,
          messages: strict
            ? messages
            : [
                ...messages,
                {
                  role: "system" as const,
                  content:
                    "Reply with a single JSON object and nothing else — no prose, no markdown fences. It must match this JSON Schema exactly:\n" +
                    JSON.stringify(FEEDBACK_JSON_SCHEMA),
                },
              ],
          response_format: strict
            ? {
                type: "json_schema" as const,
                json_schema: {
                  name: "telc_b1_writing_feedback",
                  strict: true,
                  schema: FEEDBACK_JSON_SCHEMA,
                },
              }
            : { type: "json_object" as const },
        },
        { timeout: TIMEOUT_MS, maxRetries: 0 },
      )
      .then((r) => r.choices[0]?.message?.content);

  // Walk the model list. A busy model is not a dead end — free tiers
  // saturate the newest model first, so the next one down usually answers.
  const models = await resolveModels();
  let lastError: unknown;

  for (const model of models) {
    try {
      raw = await withRetry(() => ask(model, true));
      break;
    } catch (e) {
      if (looksLikeUnsupportedSchema(e)) {
        try {
          raw = await withRetry(() => ask(model, false));
          break;
        } catch (e2) {
          lastError = e2;
          if (!isTransient(e2)) throw e2;
          continue;
        }
      }
      lastError = e;
      // Only move to the next model when this one was busy or missing.
      if (!isTransient(e) && !isMissingModel(e)) throw e;
    }
  }

  if (raw === undefined && lastError) throw lastError;

  if (!raw) throw new Error("The model returned an empty response.");

  // Validate rather than trust: a malformed response should fail loudly
  // here, not produce a broken results page or bad Mistake Bank rows.
  return feedbackSchema.parse(JSON.parse(stripFences(raw)));
}

/**
 * Retry the transient failures that free tiers produce constantly.
 *
 * A 503 "high demand" or a 429 rate-limit is the provider being busy, not
 * anything wrong with the request — so waiting a few seconds and asking
 * again usually works. Anything else fails immediately, because retrying a
 * bad key or a bad model just wastes the learner's time.
 */
async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  const waits = [4000, 10000];
  let last: unknown;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
      if (!isTransient(e) || i === attempts - 1) throw e;
      await new Promise((r) => setTimeout(r, waits[i] ?? 10000));
    }
  }
  throw last;
}

/** A model that does not exist for this key — skip to the next one. */
function isMissingModel(e: unknown): boolean {
  const m = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return m.includes("404") || m.includes("not found") || m.includes("does not exist");
}

function isTransient(e: unknown): boolean {
  const m = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return (
    m.includes("503") ||
    m.includes("502") ||
    m.includes("500") ||
    m.includes("429") ||
    m.includes("unavailable") ||
    m.includes("overloaded") ||
    m.includes("high demand") ||
    m.includes("rate limit")
  );
}

/** Does this error mean "I don't do json_schema" rather than something real? */
function looksLikeUnsupportedSchema(e: unknown): boolean {
  const m = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return (
    m.includes("json_schema") ||
    m.includes("response_format") ||
    m.includes("structured output") ||
    m.includes("unsupported") ||
    m.includes("invalid_request_error")
  );
}

/** Some models wrap JSON in ```json fences despite being told not to. */
function stripFences(text: string): string {
  const trimmed = text.trim();
  if (!trimmed.startsWith("```")) return trimmed;
  return trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/, "")
    .trim();
}
