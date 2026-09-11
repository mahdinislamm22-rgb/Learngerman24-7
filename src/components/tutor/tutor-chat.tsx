"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/i18n/provider";

type Topic = "grammar" | "vocab" | "writing" | "exam";

type TopicProgress = Record<
  Topic,
  {
    questions: number;
    streak: number;
    lastAsked: string | null;
  }
>;

type PracticeCard = {
  id: string;
  title: string;
  prompt: string;
  detail: string;
  topic: Topic;
};

type Flashcard = {
  id: string;
  topic: Topic;
  front: string;
  back: string;
  createdAt: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
  followUps?: string[];
};

const STORAGE_KEY = "deutsch-b1-tutor-chat-v1";
const PRACTICE_STORAGE_KEY = "deutsch-b1-tutor-practice-v1";
const FLASHCARD_STORAGE_KEY = "deutsch-b1-tutor-flashcards-v1";
const PROGRESS_STORAGE_KEY = "deutsch-b1-tutor-progress-v1";
const EXAM_STORAGE_KEY = "deutsch-b1-tutor-exam-v1";

const TOPIC_LABELS: Record<Topic, string> = {
  grammar: "Grammar",
  vocab: "Vocabulary",
  writing: "Writing",
  exam: "Exam",
};

const DEFAULT_PROGRESS: TopicProgress = {
  grammar: { questions: 0, streak: 0, lastAsked: null },
  vocab: { questions: 0, streak: 0, lastAsked: null },
  writing: { questions: 0, streak: 0, lastAsked: null },
  exam: { questions: 0, streak: 0, lastAsked: null },
};

const TOPICS: Array<{ key: Topic; label: string }> = [
  { key: "grammar", label: TOPIC_LABELS.grammar },
  { key: "vocab", label: TOPIC_LABELS.vocab },
  { key: "writing", label: TOPIC_LABELS.writing },
  { key: "exam", label: TOPIC_LABELS.exam },
];

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function buildExamMicroTasks(currentTopic: Topic): string[] {
  const baseMap: Record<Topic, string[]> = {
    grammar: [
      "Write 3 sentences with a different preposition and explain the case.",
      "Correct the word order in 4 sentences and explain why it changes.",
      "Turn one simple sentence into a B1 sentence with a connector.",
    ],
    vocab: [
      "List 5 useful B1 verbs with one example sentence each.",
      "Choose the best phrase for a formal email and explain why.",
      "Rewrite this topic in natural German with more precise vocabulary.",
    ],
    writing: [
      "Write a 5-sentence paragraph with a clear topic sentence.",
      "Add three connectors to improve flow and clarity.",
      "Replace weak words with more natural B1 alternatives.",
    ],
    exam: [
      "Outline the key points you would mention in 60 seconds.",
      "Give 3 good answer openings for a speaking question.",
      "Check one sample answer for article, word order, and clarity.",
    ],
  };

  return baseMap[currentTopic] ?? baseMap.grammar;
}

function buildPracticeCards(topic: Topic, question: string, answer: string): PracticeCard[] {
  const cleanQuestion = question.trim().replace(/\s+/g, " ");
  const cleanAnswer = answer.trim().replace(/\s+/g, " ");
  const answerSnippet = cleanAnswer.length > 180 ? `${cleanAnswer.slice(0, 180)}…` : cleanAnswer;

  const cardsByTopic: Record<Topic, Array<Omit<PracticeCard, "id" | "topic">>> = {
    grammar: [
      {
        title: "Quick correction",
        prompt: "Rewrite the sentence with the correct case and natural word order.",
        detail: cleanQuestion || "Use the idea from the tutor answer and improve the sentence structure.",
      },
      {
        title: "Mini rule check",
        prompt: "Explain the rule in one short sentence, then add one example.",
        detail: answerSnippet,
      },
      {
        title: "Speed drill",
        prompt: "Write 3 short sentences using the same structure from the answer.",
        detail: "Aim for accuracy, not long explanations.",
      },
    ],
    vocab: [
      {
        title: "Word bank",
        prompt: "Pick 5 useful words from the answer and write them in a sentence.",
        detail: answerSnippet,
      },
      {
        title: "Context task",
        prompt: "Use the phrase in a realistic B1 situation.",
        detail: cleanQuestion || "Use the exact idea from the tutor answer.",
      },
      {
        title: "Revision check",
        prompt: "Summarise the meaning in German and give a natural example.",
        detail: "Keep the explanation short and precise.",
      },
    ],
    writing: [
      {
        title: "Paragraph upgrade",
        prompt: "Turn the answer into a clearer B1 paragraph with connectors.",
        detail: answerSnippet,
      },
      {
        title: "Email fix",
        prompt: "Rewrite the same idea as a polite, natural email.",
        detail: cleanQuestion || "Use a common exam situation such as a complaint, request, or invitation.",
      },
      {
        title: "Message polish",
        prompt: "Shorten the answer and keep the same meaning with smoother German.",
        detail: "Focus on clarity, tone, and natural phrasing.",
      },
    ],
    exam: [
      {
        title: "Timed response",
        prompt: "Answer the idea in 60 to 90 seconds without stopping to edit.",
        detail: answerSnippet,
      },
      {
        title: "Checklist review",
        prompt: "Check the answer against article, order, connectors, and tone.",
        detail: "Your goal is calm, clear, exam-ready German.",
      },
      {
        title: "Model answer",
        prompt: "Write a B1 model answer in a clear structure with 3 points.",
        detail: cleanQuestion || "Use a realistic telc prompt.",
      },
    ],
  };

  return cardsByTopic[topic].map((card, index) => ({
    ...card,
    id: `${topic}-${Date.now()}-${index}`,
    topic,
  }));
}

const QUICK_PROMPTS: Record<Topic, string[]> = {
  grammar: [
    "Explain the dative case with a simple example.",
    "Why do we say 'Ich freue mich auf den Urlaub' ?",
    "Teach me the difference between 'weil' and 'dass'.",
  ],
  vocab: [
    "Give me 10 useful B1 verbs with prepositions.",
    "What are the most common phrases for expressing opinions?",
    "Explain the difference between 'wissen' and 'kennen'.",
  ],
  writing: [
    "Help me fix this sentence: Ich bin heute zu spät wegen der Arbeit.",
    "How do I make a B1 email sound natural?",
    "Give me a good structure for a telc writing task.",
  ],
  exam: [
    "What mistakes usually lose points in the telc writing exam?",
    "Give me 5 B1 speaking questions and good answers.",
    "What should I check before I submit a writing answer?",
  ],
};

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi! I can help with grammar, vocabulary, sentence structure, and exam practice. Ask me anything in German or in your own language.",
  },
];

export function TutorChat() {
  const { t, lang } = useI18n();
  const [topic, setTopic] = useState<Topic>("grammar");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [practiceCards, setPracticeCards] = useState<PracticeCard[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [progress, setProgress] = useState<TopicProgress>(DEFAULT_PROGRESS);
  const [examMode, setExamMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [examTasks, setExamTasks] = useState<string[]>(buildExamMicroTasks("grammar"));
  const [savedNote, setSavedNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const savedProgress = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
      const savedFlashcards = window.localStorage.getItem(FLASHCARD_STORAGE_KEY);
      const savedPractice = window.localStorage.getItem(PRACTICE_STORAGE_KEY);
      const savedExam = window.localStorage.getItem(EXAM_STORAGE_KEY);

      if (savedProgress) {
        const parsed = JSON.parse(savedProgress) as Partial<TopicProgress>;
        setProgress({ ...DEFAULT_PROGRESS, ...parsed });
      }

      if (savedFlashcards) {
        const parsed = JSON.parse(savedFlashcards) as Flashcard[];
        if (Array.isArray(parsed)) setFlashcards(parsed);
      }

      if (savedPractice) {
        const parsed = JSON.parse(savedPractice) as PracticeCard[];
        if (Array.isArray(parsed)) setPracticeCards(parsed);
      }

      if (savedExam) {
        const parsed = JSON.parse(savedExam) as { examMode: boolean; timeLeft: number; tasks: string[] };
        if (parsed && typeof parsed.timeLeft === "number") {
          setExamMode(Boolean(parsed.examMode));
          setTimeLeft(parsed.timeLeft);
          if (Array.isArray(parsed.tasks) && parsed.tasks.length > 0) {
            setExamTasks(parsed.tasks);
          }
        }
      }
    } catch {
      window.localStorage.removeItem(PRACTICE_STORAGE_KEY);
      window.localStorage.removeItem(FLASHCARD_STORAGE_KEY);
      window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
      window.localStorage.removeItem(EXAM_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(flashcards));
  }, [flashcards]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(practiceCards));
  }, [practiceCards]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      EXAM_STORAGE_KEY,
      JSON.stringify({ examMode, timeLeft, tasks: examTasks }),
    );
  }, [examMode, timeLeft, examTasks]);

  useEffect(() => {
    if (!examMode) return;

    const interval = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setExamMode(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [examMode]);

  const sessionHistory = useMemo(() => {
    return messages
      .filter((message) => message.role === "user")
      .map((message) => message.content)
      .slice(-6)
      .reverse();
  }, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMessages(parsed);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    async function loadSavedChat() {
      try {
        const res = await fetch("/api/tutor");
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data.messages) && data.messages.length > 0) {
          setMessages(data.messages);
        }
        if (data.topic && TOPICS.some((item) => item.key === data.topic)) {
          setTopic(data.topic);
        }
      } catch {
        // Ignore saved chat fetch failures; local chat still works.
      }
    }

    loadSavedChat();
  }, []);

  async function askTutor() {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const nextHistory: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextHistory);
    setQuestion("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          question: trimmed,
          history: nextHistory.slice(-8),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "The tutor could not answer that question.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: String(data.answer || ""),
          followUps: Array.isArray(data.followUps) ? data.followUps : [],
        },
      ]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages(initialMessages);
    setPracticeCards([]);
    setSavedNote("");
    setError("");
    setQuestion("");
  }

  function saveFlashcard(message: Message) {
    const front = messages.filter((item) => item.role === "user").at(-1)?.content || question.trim() || "Tutor answer";
    const back = message.content.trim();

    if (!back) return;

    const nextCard: Flashcard = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      topic,
      front: front.length > 140 ? `${front.slice(0, 140)}…` : front,
      back: back.length > 320 ? `${back.slice(0, 320)}…` : back,
      createdAt: new Date().toISOString(),
    };

    setFlashcards((prev) => [nextCard, ...prev].slice(0, 12));
    setSavedNote("Saved to your flashcards.");
  }

  function startExamPrep() {
    setExamMode(true);
    setTimeLeft(15 * 60);
    setExamTasks(buildExamMicroTasks(topic));
    setQuestion(buildExamMicroTasks(topic)[0] ?? "");
  }

  function applyProgress() {
    setProgress((prev) => {
      const existing = prev[topic];
      return {
        ...prev,
        [topic]: {
          questions: existing.questions + 1,
          streak: existing.streak + 1,
          lastAsked: new Date().toISOString(),
        },
      };
    });
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-4 lg:self-start">
        <Card>
          <CardBody className="space-y-4">
            <div>
              <p className="label">Session history</p>
              <h3 className="mt-1 text-[18px] font-semibold">Recent prompts</h3>
            </div>

            {sessionHistory.length === 0 ? (
              <p className="text-[14px] text-ink-soft">No saved questions yet. Start with a topic below.</p>
            ) : (
              <div className="space-y-2">
                {sessionHistory.map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    type="button"
                    onClick={() => setQuestion(item)}
                    className="w-full rounded-[var(--radius-control)] border border-line bg-surface-2 px-3 py-2 text-left text-[13px] text-ink-soft transition hover:border-iris hover:text-ink"
                  >
                    {item.length > 90 ? `${item.slice(0, 90)}…` : item}
                  </button>
                ))}
              </div>
            )}

            <div className="space-y-2 border-t border-line pt-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Progress</p>
              {TOPICS.map((item) => (
                <div key={item.key} className="flex items-center justify-between gap-3 rounded-[var(--radius-control)] border border-line bg-surface-2 px-2.5 py-2">
                  <span className="text-[13px] text-ink-soft">{item.label}</span>
                  <span className="text-[12px] font-semibold text-ink">{progress[item.key].questions}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-line pt-3">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Flashcards</p>
              {flashcards.length === 0 ? (
                <p className="text-[13px] text-ink-soft">No saved cards yet.</p>
              ) : (
                <div className="space-y-2">
                  {flashcards.slice(0, 3).map((card) => (
                    <div key={card.id} className="rounded-[var(--radius-control)] border border-line bg-surface-2 p-2 text-[12px] text-ink-soft">
                      <div className="font-semibold text-ink">{card.front}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </aside>

      <div className="flex flex-col gap-4">
        <Card>
          <CardBody className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle className={lang === "bn" ? "bn" : undefined}>{t.nav.tutor}</CardTitle>
              <Button type="button" variant="ghost" size="sm" onClick={clearChat}>
                Clear chat
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {TOPICS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    setTopic(item.key);
                    setExamTasks(buildExamMicroTasks(item.key));
                  }}
                  className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold transition ${
                    topic === item.key
                      ? "border-iris bg-iris-soft text-ink"
                      : "border-line bg-surface-2 text-ink-soft hover:border-iris hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p className={`max-w-[62ch] text-[15px] leading-relaxed text-ink-soft ${lang === "bn" ? "bn" : ""}`}>
              Ask for grammar help, sentence corrections, word explanations, or exam practice. I’ll answer like a patient German teacher.
            </p>

            <div className="flex flex-wrap gap-2">
              {(QUICK_PROMPTS[topic] ?? []).map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setQuestion(prompt)}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-[12px] font-medium text-ink-soft transition hover:border-iris hover:text-ink"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="space-y-4">
            <div className="max-h-[420px] space-y-3 overflow-y-auto pr-1">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[72ch] rounded-[var(--radius-card)] border p-3 text-[15px] leading-relaxed ${
                    message.role === "assistant"
                      ? "border-iris/30 bg-iris-soft/20 text-ink"
                      : "border-line bg-surface text-ink"
                  }`}
                >
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">
                    {message.role === "assistant" ? "Tutor" : "You"}
                  </div>
                  <div className={lang === "bn" ? "bn" : undefined}>{message.content}</div>

                  {message.role === "assistant" && Array.isArray(message.followUps) && message.followUps.length > 0 ? (
                    <div className="mt-3 grid gap-2 sm:grid-cols-3">
                      {message.followUps.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setQuestion(item)}
                          className="rounded-[var(--radius-control)] border border-line bg-surface px-3 py-2 text-left text-[12px] font-medium text-ink-soft transition hover:border-iris hover:text-ink"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  ) : null}

                      {message.role === "assistant" ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Button type="button" variant="secondary" size="sm" onClick={() => saveFlashcard(message)}>
                            Save this answer as flashcard
                          </Button>
                        </div>
                      ) : null}
                </div>
              ))}
            </div>

                <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Practice cards</div>
                        <h4 className="mt-1 text-[16px] font-semibold">Follow-up tasks</h4>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={startExamPrep}>
                        Exam mode
                      </Button>
                    </div>

                    {practiceCards.length === 0 ? (
                      <p className="text-[14px] text-ink-soft">Ask a question so the tutor can generate a few micro-practice tasks.</p>
                    ) : (
                      <div className="space-y-3">
                        {practiceCards.map((card) => (
                          <button
                            key={card.id}
                            type="button"
                            onClick={() => setQuestion(card.prompt)}
                            className="w-full rounded-[var(--radius-control)] border border-line bg-surface p-3 text-left transition hover:border-iris hover:bg-iris-soft/10"
                          >
                            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                              {TOPIC_LABELS[card.topic]}
                            </div>
                            <div className="text-[14px] font-semibold text-ink">{card.title}</div>
                            <div className="mt-1 text-[13px] text-ink-soft">{card.prompt}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-[var(--radius-card)] border border-line bg-surface-2 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Exam prep</div>
                        <h4 className="mt-1 text-[16px] font-semibold">Micro-tasks</h4>
                      </div>
                      <div className="rounded-full border border-iris bg-iris-soft px-2 py-1 text-[12px] font-semibold text-ink">
                        {formatTime(timeLeft)}
                      </div>
                    </div>

                    <div className="mt-3 space-y-2">
                      {examTasks.map((task, index) => (
                        <button
                          key={`${task}-${index}`}
                          type="button"
                          onClick={() => setQuestion(task)}
                          className={`w-full rounded-[var(--radius-control)] border px-3 py-2 text-left text-[13px] ${
                            index === 0
                              ? "border-iris bg-iris-soft/20 text-ink"
                              : "border-line bg-surface text-ink-soft"
                          }`}
                        >
                          {task}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Button type="button" variant={examMode ? "secondary" : "primary"} size="sm" onClick={startExamPrep}>
                        {examMode ? "Restart timer" : "Start 15 min mode"}
                      </Button>
                      <Button type="button" variant="ghost" size="sm" onClick={() => setExamMode(false)}>
                        Stop
                      </Button>
                    </div>
                  </div>
                </div>

                {savedNote ? (
                  <div className="rounded-[var(--radius-control)] border border-sage bg-sage-soft/40 p-3 text-[13px] text-ink">{savedNote}</div>
                ) : null}

            {error ? (
              <div className="rounded-[var(--radius-control)] border border-clay-soft bg-clay-soft/50 p-3 text-[14px] text-clay">
                {error}
              </div>
            ) : null}

            <div className="space-y-3">
              <label className="text-[13px] font-semibold text-ink">Your question</label>
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                rows={5}
                placeholder="Ask about a grammar rule, a sentence, or a study problem…"
                className="w-full rounded-[var(--radius-control)] border border-line bg-surface px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-faint focus:border-iris outline-none"
              />
              <div className="flex items-center justify-between gap-3">
                <span className="text-[12.5px] text-ink-faint">
                  {loading ? "Thinking…" : "Short, specific questions work best."}
                </span>
                <Button
                  type="button"
                  onClick={async () => {
                    const trimmed = question.trim();
                    if (!trimmed || loading) return;
                    await askTutor();
                    if (!loading) {
                      applyProgress();
                    }
                  }}
                  disabled={loading || !question.trim()}
                >
                  {loading ? "Working…" : "Ask tutor"}
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
