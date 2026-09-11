/**
 * Checks your AI key without leaving the terminal.
 *
 *   npm run check-ai
 *
 * Tells you which provider your key belongs to, whether the key works,
 * whether your configured model exists, and which models you can use.
 * It never prints your key.
 */

const PROVIDERS = {
  gemini: {
    label: "Google Gemini",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    note: "Free tier available. Keys: https://aistudio.google.com/apikey",
  },
  groq: {
    label: "Groq",
    baseURL: "https://api.groq.com/openai/v1/",
    note: "Free tier available. Keys: https://console.groq.com/keys",
  },
  openrouter: {
    label: "OpenRouter",
    baseURL: "https://openrouter.ai/api/v1/",
    note: "Mostly paid. Models ending in :free are weak for German.",
  },
  openai: {
    label: "OpenAI",
    baseURL: "https://api.openai.com/v1/",
    note: "No free tier.",
  },
};

/** Models that exist but cannot answer a chat request. */
const NOT_CHAT =
  /embed|embedding|imagen|image|veo|tts|audio|aqa|whisper|guard|vision|rerank|moderation|live|realtime|learnlm|attributed/i;

/** Cheap, fast models suit this job: short input, structured output. */
const PREFERRED = /flash|mini|small|lite|instant|turbo|8b|9b|haiku/i;

function detect(key) {
  const forced = (process.env.AI_PROVIDER || "").trim().toLowerCase();
  if (Object.hasOwn(PROVIDERS, forced)) return forced;

  // Google issues two formats: the older AIza... keys and the newer AQ.
  // Authentication Keys that AI Studio now hands out by default.
  if (key.startsWith("AIza") || key.startsWith("AQ.")) return "gemini";
  if (key.startsWith("gsk_")) return "groq";
  if (key.startsWith("sk-or-")) return "openrouter";
  return "openai";
}

const say = (s = "") => process.stdout.write(s + "\n");

async function main() {
  const key = (
    process.env.GEMINI_API_KEY ??
    process.env.GROQ_API_KEY ??
    process.env.OPENROUTER_API_KEY ??
    process.env.OPENAI_API_KEY ??
    ""
  ).trim();

  if (!key) {
    say("\n  No key found in .env.local.");
    say("  Add a line like:  OPENAI_API_KEY=your-key-here");
    say("  Then run this again.\n");
    return 1;
  }

  const id = detect(key);
  const p = PROVIDERS[id];
  const configured = (process.env.OPENAI_MODEL || "").trim();
  const why = process.env.AI_PROVIDER ? "from AI_PROVIDER" : "from your key's prefix";

  say();
  say(`  Provider  ${p.label}   (${why})`);
  say(`  Key       ${key.slice(0, 6)}...${key.slice(-4)}  (${key.length} characters)`);
  say(
    `  Model     ${configured || "auto — the app asks your provider which models your key can use"}`,
  );
  say(`  ${p.note}`);
  say();

  // Google accepts two auth styles depending on key format, so try the
  // standard Bearer header first, then Google's own header.
  const attempts =
    id === "gemini"
      ? [
          ["Authorization: Bearer", { Authorization: `Bearer ${key}` }],
          ["x-goog-api-key", { "x-goog-api-key": key }],
        ]
      : [["Authorization: Bearer", { Authorization: `Bearer ${key}` }]];

  let res = null;
  let usedAuth = "";

  for (const [label, headers] of attempts) {
    try {
      const r = await fetch(new URL("models", p.baseURL), { headers });
      res = r;
      usedAuth = label;
      if (r.ok) break;
    } catch (e) {
      say(`  Could not reach ${p.label}: ${e.message}\n`);
      return 1;
    }
  }

  if (!res) {
    say(`  Could not reach ${p.label}.\n`);
    return 1;
  }

  if (res.status === 401 || res.status === 403) {
    say(`  ${p.label} rejected the key (HTTP ${res.status}, tried ${usedAuth}).`);
    say("  The key is wrong, expired, or belongs to a different service.");
    say("  Prefixes:  AIza / AQ. = Gemini   gsk_ = Groq   sk-or- = OpenRouter   sk- = OpenAI");
    say("  If the provider shown above looks wrong, force it in .env.local:");
    say("    AI_PROVIDER=gemini      (or groq, openrouter, openai)");
    say();
    return 1;
  }

  if (!res.ok) {
    let detail = "";
    try {
      detail = (await res.text()).slice(0, 300);
    } catch {
      detail = "";
    }
    say(`  ${p.label} returned HTTP ${res.status}.`);
    if (detail) say(`  ${detail}`);
    say();
    return 1;
  }

  let ids = [];
  try {
    const body = await res.json();
    ids = (body.data ?? body.models ?? [])
      .map((m) => m.id ?? m.name ?? "")
      .filter(Boolean)
      .map((s) => s.replace(/^models\//, ""))
      .sort();
  } catch {
    say("  The provider answered, but the model list could not be read.\n");
    return 1;
  }

  say(`  Key works (auth: ${usedAuth}). ${ids.length} models available.`);
  say();

  if (configured) {
    say(
      ids.includes(configured.split(",")[0].trim())
        ? `  "${configured}" is available. You are ready - restart npm run dev.`
        : `  "${configured}" is NOT available. Remove the OPENAI_MODEL line from\n  .env.local to let the app choose for itself, or pick one below.`,
    );
    say();
  }

  // Rank the same way the app does, so what you see here is what it will use.
  const chat = ids.filter((m) => !NOT_CHAT.test(m));
  const show = (chat.length ? chat : ids)
    .slice()
    .sort(
      (a, b) =>
        (PREFERRED.test(a) ? 0 : 1) - (PREFERRED.test(b) ? 0 : 1) ||
        b.localeCompare(a, undefined, { numeric: true }),
    );

  say("  The app would try these first, in this order:");
  for (const m of show.slice(0, 40)) say(`    ${m}`);
  if (show.length > 40) say(`    ... and ${show.length - 40} more`);
  say();

  // --test actually calls each candidate model. Listing a model only proves
  // it exists; a free tier can list a model that is too busy to answer.
  if (process.argv.includes("--test")) {
    const candidates = (configured || "")
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    // Add a couple of likely alternatives that exist for this key.
    for (const m of show) {
      if (candidates.length >= 6) break;
      if (!candidates.includes(m)) candidates.push(m);
    }

    say("  Testing each model with a real request. This takes a moment.");
    say();

    const working = [];
    for (const model of candidates) {
      const started = Date.now();
      try {
        const r = await fetch(new URL("chat/completions", p.baseURL), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(usedAuth.startsWith("x-goog")
              ? { "x-goog-api-key": key }
              : { Authorization: `Bearer ${key}` }),
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "user", content: "Reply with the word OK." }],
            max_tokens: 5,
          }),
        });
        const ms = Date.now() - started;
        if (r.ok) {
          working.push(model);
          say(`    OK       ${model}   (${ms} ms)`);
        } else {
          const body = await r.text();
          const short = /"message"\s*:\s*"([^"]{0,90})/.exec(body)?.[1] ?? `HTTP ${r.status}`;
          say(`    ${String(r.status).padEnd(8)} ${model}   ${short}`);
        }
      } catch (e) {
        say(`    ERROR    ${model}   ${e.message}`);
      }
    }

    say();
    if (working.length) {
      say(`  Working right now: ${working.join(", ")}`);
      say("  You do not have to do anything - the app finds these by itself.");
      say("  To pin them anyway, put this line in .env.local:");
      say(`    OPENAI_MODEL=${working.join(",")}`);
    } else {
      say("  Nothing answered. Either the whole free tier is busy, or the key");
      say("  cannot call chat models. Try again in 10 minutes, or get a free");
      say("  Groq key at https://console.groq.com/keys");
    }
    say();
  } else {
    say("  Tip: run  npm run check-ai -- --test  to find which models answer now.");
    say();
  }

  return 0;
}

// Set exitCode rather than calling process.exit(): exiting while a fetch
// handle is still closing crashes Node on Windows with a libuv assertion
// (the "Assertion failed ... src\\win\\async.c" message).
main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((e) => {
    say(`\n  Unexpected error: ${e?.message ?? e}\n`);
    process.exitCode = 1;
  });
