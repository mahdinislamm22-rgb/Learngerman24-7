import { NextResponse } from "next/server";
import { ai, explainAiError, resolveModels } from "@/lib/ai/openai";
import { createClient } from "@/lib/supabase/server";

type Topic = "grammar" | "vocab" | "writing" | "exam";
const VALID_TOPICS = new Set<Topic>(["grammar", "vocab", "writing", "exam"]);

type TutorMessage = {
  role: "user" | "assistant";
  content: string;
  followUps?: string[];
};

const FALLBACK_PROMPTS: Record<Topic, string[]> = {
  grammar: [
    "Explain this grammar pattern with one short example.",
    "Give me 3 mini exercises using the same rule.",
    "Turn this into a natural B1 sentence.",
  ],
  vocab: [
    "Give me a B1 word list with example sentences.",
    "How do I use this word in context?",
    "Create 3 short tasks with these words.",
  ],
  writing: [
    "Rewrite my sentence in a more natural B1 style.",
    "Give me a model sentence for this situation.",
    "Turn this into a full paragraph.",
  ],
  exam: [
    "List the common mistakes in this type of exam task.",
    "Give me a timed practice plan for this section.",
    "Write a model answer for this prompt.",
  ],
};

/**
 * Shape the stored chat into something every provider will accept.
 *
 * Google's API — which is what a Gemini key routes to — requires the
 * conversation to START with a user turn and to alternate from there. The
 * chat opens with a greeting from the tutor, so the very first question
 * would otherwise be sent as [system, assistant, user] and rejected
 * outright. OpenAI tolerates that shape, which is exactly why this is easy
 * to miss: the same code works on one provider and fails on another.
 *
 * So: drop any leading assistant turns, and collapse consecutive turns of
 * the same role (which a failed request can leave behind).
 */
function conversationForModel(
  history: TutorMessage[],
): Array<{ role: "user" | "assistant"; content: string }> {
  const firstUser = history.findIndex((m) => m.role === "user");
  if (firstUser === -1) return [];

  const out: Array<{ role: "user" | "assistant"; content: string }> = [];

  for (const msg of history.slice(firstUser)) {
    const previous = out[out.length - 1];
    if (previous && previous.role === msg.role) {
      // Two turns from the same side: merge rather than drop, so nothing
      // the learner actually wrote is lost from the context.
      previous.content = `${previous.content}\n\n${msg.content}`;
      continue;
    }
    out.push({ role: msg.role, content: msg.content });
  }

  // The question is appended as a user turn by the caller, so the history
  // must not already end on one.
  if (out[out.length - 1]?.role === "user") out.pop();

  return out;
}

function sanitizeMessages(history: unknown): TutorMessage[] {
  if (!Array.isArray(history)) return [];

  return history.flatMap((entry) => {
    if (!entry || typeof entry !== "object") return [];
    const message = entry as { role?: unknown; content?: unknown; followUps?: unknown };
    const content = typeof message.content === "string" ? message.content.trim() : "";
    const role = message.role === "user" || message.role === "assistant" ? message.role : null;

    if (!role || !content) return [];

    const followUps = Array.isArray(message.followUps)
      ? message.followUps.filter((item): item is string => typeof item === "string").slice(0, 3)
      : [];

    return [{ role, content, followUps }];
  });
}

async function generateFollowUps(topic: Topic, answer: string): Promise<string[]> {
  const followPrompt = `Create exactly 3 short B1 study tasks based on this answer and topic. Return only a JSON object like {"followUps":["...","...","..."]}. Topic: ${topic}. Answer: ${answer}`;

  try {
    const completion = await askTutorModel({
      messages: [{ role: "user", content: followPrompt }],
      temperature: 0.7,
      max_tokens: 220,
    });

    const raw = completion.choices[0]?.message?.content?.trim();
    if (!raw) return FALLBACK_PROMPTS[topic] ?? [];

    const parsed = JSON.parse(raw.replace(/^```json\s*/i, "").replace(/```$/, "").trim());
    if (Array.isArray(parsed.followUps)) {
      return parsed.followUps.filter((item: unknown): item is string => typeof item === "string").slice(0, 3);
    }
  } catch {
    // Fall back to safe topic prompts below.
  }

  return FALLBACK_PROMPTS[topic] ?? [];
}

function isRetryable(error: unknown): boolean {
  const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
  return (
    message.includes("429") ||
    message.includes("500") ||
    message.includes("502") ||
    message.includes("503") ||
    message.includes("504") ||
    message.includes("rate limit") ||
    message.includes("overloaded") ||
    message.includes("high demand") ||
    message.includes("timeout") ||
    message.includes("timed out")
  );
}

function isMissingModel(error: unknown): boolean {
  const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
  return message.includes("404") || message.includes("model not found") || message.includes("does not exist");
}

async function askTutorModel(options: {
  messages: Array<{ role: "system" | "user" | "assistant"; content: string }>;
  temperature: number;
  max_tokens: number;
}) {
  const models = await resolveModels();
  let lastError: unknown;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        return await ai().chat.completions.create(
          { model, ...options },
          { timeout: 60_000, maxRetries: 0 },
        );
      } catch (error) {
        lastError = error;
        if (!isRetryable(error) || attempt === 1) break;
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    }

    if (lastError && !isRetryable(lastError) && !isMissingModel(lastError)) {
      throw lastError;
    }
  }

  throw lastError ?? new Error("The tutor could not reach an available model.");
}

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ messages: [], topic: "grammar" });
  }

  const { data, error } = await supabase
    .from("tutor_chats")
    .select("messages, topic")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error && error.code !== "PGRST116") {
    return NextResponse.json({ error: explainAiError(error) }, { status: 500 });
  }

  return NextResponse.json({
    messages: Array.isArray(data?.messages) ? data.messages : [],
    topic: typeof data?.topic === "string" && VALID_TOPICS.has(data.topic as Topic) ? data.topic : "grammar",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawTopic = String(body?.topic || "grammar");
    const topic: Topic = VALID_TOPICS.has(rawTopic as Topic) ? (rawTopic as Topic) : "grammar";
    const question = String(body?.question || "").trim();
    const history = sanitizeMessages(body?.history);

    if (!question) {
      return NextResponse.json({ error: "Please ask a question first." }, { status: 400 });
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Please sign in to save your tutor chat." }, { status: 401 });
    }

    const systemPrompt =
      topic === "exam"
        ? `You are a strict but encouraging telc B1 German exam coach. Always answer in German unless the learner asks in English, Italian or Bengali. Focus on word order, articles, case, prepositions, connectors, clear paragraphing, and realistic B1 phrasing. Explain the rule, show one correct example, and give one short practice task. If correcting a sentence, quote the learner's version, then give the corrected version and a brief reason. Never invent a mistake. Keep the response practical and direct.`
        : `You are a friendly, patient German teacher helping a B1 learner prepare for the telc exam. Explain one main idea at a time using plain language. For grammar, state the rule, show a correct German example, contrast it with the common mistake, and finish with one mini exercise. For vocabulary, include meaning, collocation, and a natural B1 example. If correcting a sentence, quote the learner's version, then give the corrected version and a brief reason. If the learner asks in English, Italian or Bengali, answer in that language; otherwise prefer German. Never invent a mistake, never shame the learner, and keep the answer useful rather than vague.`;

    const messages = [
      { role: "system" as const, content: systemPrompt },
      ...conversationForModel(history),
      { role: "user" as const, content: question },
    ];

    const completion = await askTutorModel({
      messages,
      temperature: 0.7,
      max_tokens: 350,
    });

    const answer = completion.choices[0]?.message?.content?.trim();

    if (!answer) {
      return NextResponse.json({ error: "The tutor returned an empty answer." }, { status: 500 });
    }

    const followUps = await generateFollowUps(topic, answer);
    const storedMessages: TutorMessage[] = [
      ...history,
      { role: "user", content: question },
      { role: "assistant", content: answer, followUps },
    ];

    await supabase.from("tutor_chats").upsert(
      {
        user_id: user.id,
        topic,
        messages: storedMessages,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

    return NextResponse.json({ answer, followUps, messages: storedMessages });
  } catch (error) {
    // Log the real error, not just the friendly version. Without this the
    // cause only ever reaches the learner's browser, and a 500 in the
    // Vercel log has no message attached to explain itself.
    console.error("[tutor] request failed:", error);
    return NextResponse.json({ error: explainAiError(error) }, { status: 500 });
  }
}
