import "server-only";
import OpenAI from "openai";

/**
 * The AI client, server-only by construction.
 *
 * `server-only` makes the build fail if this file is ever imported into a
 * Client Component, so the key cannot leak into browser JavaScript.
 *
 * FOUR providers are supported, chosen automatically from the shape of the
 * key you paste. All four speak the OpenAI API, so one code path serves
 * them all — only the base URL and the model names differ.
 *
 *   Key starts with   Provider     Free tier?
 *   ---------------   ----------   ----------------------------------------
 *   AIza              Gemini       Yes — the best free option for German
 *   gsk_              Groq         Yes — very fast, weaker on German nuance
 *   sk-or-            OpenRouter   Some free models, mostly poor for this
 *   sk- / sk-proj-    OpenAI       No
 */

export type Provider = "openai" | "openrouter" | "gemini" | "groq";

type ProviderInfo = {
  id: Provider;
  label: string;
  baseURL?: string;
  defaultModel: string;
  /** Where to see which models this key can actually use. */
  modelsUrl: string;
};

const PROVIDERS: Record<Provider, ProviderInfo> = {
  gemini: {
    id: "gemini",
    label: "Google Gemini",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    // A chain, not one model. Google's free tier saturates the newest Flash
    // first, so falling back to an older one usually just works.
    defaultModel: "gemini-3.8-flash,gemini-3.7-flash,gemini-2.5-flash",
    modelsUrl: "https://aistudio.google.com/",
  },
  groq: {
    id: "groq",
    label: "Groq",
    baseURL: "https://api.groq.com/openai/v1",
    defaultModel: "llama-3.3-70b-versatile,llama-3.1-8b-instant",
    modelsUrl: "https://console.groq.com/docs/models",
  },
  openrouter: {
    id: "openrouter",
    label: "OpenRouter",
    baseURL: "https://openrouter.ai/api/v1",
    defaultModel: "anthropic/claude-opus-5",
    modelsUrl: "https://openrouter.ai/models",
  },
  openai: {
    id: "openai",
    label: "OpenAI",
    defaultModel: "gpt-5.6-terra",
    modelsUrl: "https://platform.openai.com/docs/models",
  },
};

function apiKey(): string {
  const key = (
    process.env.GEMINI_API_KEY ??
    process.env.GROQ_API_KEY ??
    process.env.OPENROUTER_API_KEY ??
    process.env.OPENAI_API_KEY ??
    ""
  ).trim();

  if (!key) {
    throw new Error(
      "NO_KEY: No API key found. Put your key in .env.local as OPENAI_API_KEY=... and restart `npm run dev`.",
    );
  }
  return key;
}

/**
 * Which service this key belongs to.
 *
 * AI_PROVIDER in .env.local wins, for when a key format is new or ambiguous.
 * Otherwise it is read from the prefix.
 *
 * Google issues two key formats: the older `AIza...` and the newer `AQ.`
 * Authentication Keys that AI Studio now hands out by default. Both are
 * Gemini keys — an `AQ.` key that isn't recognised here would be sent to
 * OpenAI and rejected, which looks like a bad key but isn't.
 */
export function detectProvider(key: string): Provider {
  const forced = process.env.AI_PROVIDER?.trim().toLowerCase();
  if (forced === "gemini" || forced === "groq" || forced === "openrouter" || forced === "openai") {
    return forced;
  }

  if (key.startsWith("AIza") || key.startsWith("AQ.")) return "gemini";
  if (key.startsWith("gsk_")) return "groq";
  if (key.startsWith("sk-or-")) return "openrouter";
  return "openai";
}

export function currentProvider(): ProviderInfo {
  return PROVIDERS[detectProvider(apiKey())];
}

/**
 * Which model corrects your writing.
 *
 * Model names change often, and every provider names them differently, so
 * this is only a starting guess. Set OPENAI_MODEL in .env.local to pin one,
 * and run `npm run check-ai` to see exactly which models your key can use.
 */
export function feedbackModel(): string {
  return feedbackModels()[0];
}

/**
 * The models to try, in order.
 *
 * OPENAI_MODEL accepts a comma-separated list, so a busy model is not a dead
 * end: if the first is overloaded the app moves to the next automatically.
 */
export function feedbackModels(): string[] {
  const raw = process.env.OPENAI_MODEL?.trim() || currentProvider().defaultModel;
  return raw
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);
}

/* -------------------------------------------------------------------------
   Automatic model discovery

   Model names change constantly and differ per provider, per account and
   per month. Hard-coding a guess produces a 404 that looks like a broken
   app. So unless OPENAI_MODEL is set explicitly, ask the provider which
   models this key can actually use and pick suitable ones.
   ------------------------------------------------------------------------- */

/** Models that exist but cannot do chat completions. */
const NOT_CHAT =
  /embed|embedding|imagen|image|veo|tts|audio|aqa|whisper|guard|vision|rerank|moderation|live|realtime|learnlm|attributed/i;

/** Cheap, fast models suit this job: short input, structured output. */
const PREFERRED = /flash|mini|small|lite|instant|turbo|8b|9b|haiku/i;

let discovered: string[] | null = null;

export async function resolveModels(): Promise<string[]> {
  // An explicit setting always wins — never override the user.
  if (process.env.OPENAI_MODEL?.trim()) return feedbackModels();
  if (discovered) return discovered;

  const provider = currentProvider();

  try {
    const res = await ai().models.list();
    const ids = res.data
      .map((m) => String(m.id).replace(/^models\//, ""))
      .filter((id) => !NOT_CHAT.test(id));

    if (ids.length) {
      // Preferred models first, newest-looking first within each group.
      const rank = (id: string) => (PREFERRED.test(id) ? 0 : 1);
      const sorted = ids.sort(
        (a, b) => rank(a) - rank(b) || b.localeCompare(a, undefined, { numeric: true }),
      );
      discovered = sorted.slice(0, 5);
      return discovered;
    }
  } catch {
    // Discovery is a convenience, not a requirement — fall through.
  }

  return provider.defaultModel
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);
}

let client: OpenAI | null = null;

export function ai(): OpenAI {
  if (client) return client;

  const key = apiKey();
  const provider = PROVIDERS[detectProvider(key)];

  client = new OpenAI({
    apiKey: key,
    ...(provider.baseURL ? { baseURL: provider.baseURL } : {}),
    ...(provider.id === "openrouter"
      ? {
          defaultHeaders: {
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "Deutsch B1",
          },
        }
      : {}),
  });

  return client;
}

/** Turn a provider error into something a learner can act on. */
export function explainAiError(e: unknown): string {
  const message = e instanceof Error ? e.message : String(e);
  const lower = message.toLowerCase();

  if (message.startsWith("NO_KEY:")) {
    return message.slice("NO_KEY:".length).trim();
  }

  let provider: ProviderInfo | null = null;
  try {
    provider = currentProvider();
  } catch {
    provider = null;
  }
  const name = provider?.label ?? "your provider";

  if (message.includes("401") || message.includes("403") || lower.includes("api key")) {
    return `${name} rejected the key. Check that the key in .env.local is current and belongs to ${name}, then restart the dev server. Key prefixes: AIza = Gemini, gsk_ = Groq, sk-or- = OpenRouter, sk- = OpenAI.`;
  }

  if (message.includes("404") || lower.includes("model not found") || lower.includes("does not exist")) {
    return `${name} has none of the models the app tried. It normally discovers your models automatically, so this usually means OPENAI_MODEL in .env.local names a model your key cannot use — remove that line to let the app choose, or run \`npm run check-ai -- --test\` to see what works.`;
  }

  if (
    message.includes("503") ||
    lower.includes("unavailable") ||
    lower.includes("overloaded") ||
    lower.includes("high demand")
  ) {
    return `${name} is overloaded. The app retried and tried every model in its list (${feedbackModels().join(", ")}) and all were busy. Your key and setup are fine — this is Google's free tier under load. Run \`npm run check-ai -- --test\` to see which models respond right now, then put a working one in OPENAI_MODEL. If Gemini stays busy, a free Groq key (console.groq.com/keys) is far less contended.`;
  }

  if (lower.includes("timeout") || lower.includes("timed out") || lower.includes("aborted")) {
    return `${name} took too long and the request was stopped. Free models are sometimes slow or overloaded — try again in a moment. If it keeps happening, switch to a faster model (run \`npm run check-ai\` to see your options) or raise the limit with AI_TIMEOUT_MS in .env.local.`;
  }

  if (message.includes("429") || lower.includes("rate limit") || lower.includes("quota")) {
    return `${name} rate-limited you. Free tiers allow only a few requests per minute and a limited number per day. Wait a minute and try again.`;
  }

  if (message.includes("402") || lower.includes("insufficient") || lower.includes("credit")) {
    return `Your ${name} account has no credit left. Add credit, or switch to a free provider — see the README.`;
  }

  return message;
}
