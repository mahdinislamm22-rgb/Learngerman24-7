"use client";

import { useMemo, useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { pick, type Exercise, type Lang } from "@/lib/types";
import type {
  McPayload,
  GapPayload,
  ArticlePayload,
  TrueFalsePayload,
  OrderPayload,
} from "@/content/grammatik";
import { gradeExercise } from "@/app/(b1)/grammatik/actions";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

type Given = string | number | boolean | string[] | null;
type Answered = { given: Given; correct: boolean };

/**
 * One exercise at a time, checked on the server.
 *
 * The correct answer is never sent to the browser until after the learner
 * has answered — `gradeExercise` looks it up from the content server-side.
 * That also means every answer is recorded and every mistake reaches the
 * Mistake Bank without the page having to be trusted.
 */
export function ExerciseRunner({
  exercises,
  explainLang,
  mode = "practice",
  onFinish,
  finishLabel,
}: {
  exercises: Exercise[];
  explainLang: Lang;
  mode?: "learn" | "practice" | "exam";
  /** Called with the final score once the last item is answered. */
  onFinish?: (score: number, total: number) => void;
  finishLabel?: string;
}) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<Record<string, Answered>>({});
  const [busy, setBusy] = useState(false);
  const [finished, setFinished] = useState(false);

  const exercise = exercises[index];
  const result = exercise ? answered[exercise.id] : undefined;
  const score = Object.values(answered).filter((a) => a.correct).length;
  const total = exercises.length;
  const last = index >= total - 1;
  const bn = explainLang === "bn";

  async function submit(given: Given) {
    if (!exercise || busy || result) return;
    setBusy(true);
    try {
      const graded = await gradeExercise(exercise.id, given, mode);
      setAnswered((prev) => ({
        ...prev,
        [exercise.id]: { given, correct: graded.correct },
      }));
    } finally {
      setBusy(false);
    }
  }

  function advance() {
    if (last) {
      setFinished(true);
      onFinish?.(score, total);
      return;
    }
    setIndex((i) => i + 1);
  }

  if (!exercise) return null;

  if (finished) {
    const pct = Math.round((score / total) * 100);
    return (
      <Card className={pct >= 80 ? "border-sage/40 bg-sage-soft" : "border-iris-line bg-iris-soft"}>
        <CardBody className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[17px] font-bold">{t.gram.finished}</p>
            <p className="tnum mt-0.5 text-[15px] text-ink-soft">
              {score} / {total} · {pct}%
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              setAnswered({});
              setIndex(0);
              setFinished(false);
            }}
          >
            {t.gram.again}
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* ---- progress ------------------------------------------------- */}
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-iris transition-[width] duration-300"
            style={{ width: `${((index + (result ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
        <span className="tnum font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
          {index + 1}/{total}
        </span>
      </div>

      <Card>
        <CardBody className="flex flex-col gap-4">
          <p className={cn("text-[15px] font-semibold", bn && "bn")}>
            {pick(exercise.prompt, explainLang)}
          </p>

          <ExerciseBody
            exercise={exercise}
            disabled={Boolean(result) || busy}
            given={result?.given ?? null}
            onAnswer={submit}
          />

          {result ? (
            <div
              className={cn(
                "rounded-[var(--radius-control)] px-3.5 py-3",
                result.correct ? "bg-sage-soft" : "bg-clay-soft",
              )}
            >
              <span
                className={cn("label", result.correct ? "text-sage" : "text-clay")}
              >
                {result.correct ? t.common.correct : t.common.wrong}
              </span>
              <p className={cn("mt-1 text-[14.5px] leading-relaxed", bn && "bn")}>
                {pick(exercise.explanation, explainLang)}
              </p>
            </div>
          ) : null}

          {result ? (
            <div>
              <Button onClick={advance}>
                {last ? (finishLabel ?? t.gram.seeResult) : t.common.next}
                <ArrowRight size={16} aria-hidden />
              </Button>
            </div>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* One renderer per exercise kind                                      */
/* ------------------------------------------------------------------ */

function ExerciseBody({
  exercise,
  disabled,
  given,
  onAnswer,
}: {
  exercise: Exercise;
  disabled: boolean;
  given: Given;
  onAnswer: (given: Given) => void;
}) {
  switch (exercise.kind) {
    case "mc": {
      const p = exercise.payload as McPayload;
      return (
        <div className="flex flex-col gap-3">
          {p.german ? <GermanLine text={p.german} /> : null}
          <Choices
            options={p.options}
            chosen={typeof given === "number" ? given : null}
            disabled={disabled}
            onPick={(i) => onAnswer(i)}
          />
        </div>
      );
    }

    case "gap": {
      const p = exercise.payload as GapPayload;
      return (
        <div className="flex flex-col gap-3">
          <p className="prose-de rounded-[var(--radius-control)] bg-surface-2 px-3.5 py-3 text-[16.5px] leading-relaxed">
            {p.before}{" "}
            <span
              className={cn(
                "mx-0.5 inline-block min-w-[5.5rem] rounded border-b-2 px-2 text-center font-semibold",
                given ? "border-iris text-iris" : "border-line-strong text-ink-faint",
              )}
            >
              {typeof given === "string" && given ? given : " "}
            </span>{" "}
            {p.after}
          </p>
          <Choices
            options={p.options ?? []}
            chosen={null}
            disabled={disabled}
            onPick={(i) => onAnswer((p.options ?? [])[i])}
          />
        </div>
      );
    }

    case "article": {
      const p = exercise.payload as ArticlePayload;
      return (
        <div className="flex flex-col gap-3">
          <p className="prose-de text-center text-[26px] font-bold tracking-tight">
            {p.noun}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {(["der", "die", "das"] as const).map((a) => (
              <button
                key={a}
                type="button"
                disabled={disabled}
                onClick={() => onAnswer(a)}
                className={cn(
                  "prose-de rounded-[var(--radius-control)] border py-3.5 text-[17px] font-semibold transition-colors",
                  given === a
                    ? "border-iris bg-iris text-white"
                    : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                  disabled && given !== a && "opacity-50",
                )}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      );
    }

    case "truefalse": {
      const p = exercise.payload as TrueFalsePayload;
      return (
        <div className="flex flex-col gap-3">
          <GermanLine text={p.statement} />
          <div className="grid grid-cols-2 gap-2">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                type="button"
                disabled={disabled}
                onClick={() => onAnswer(v)}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-[var(--radius-control)] border py-3.5 text-[15px] font-semibold transition-colors",
                  given === v
                    ? "border-iris bg-iris text-white"
                    : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                  disabled && given !== v && "opacity-50",
                )}
              >
                {v ? <Check size={16} aria-hidden /> : <X size={16} aria-hidden />}
                {v ? "richtig" : "falsch"}
              </button>
            ))}
          </div>
        </div>
      );
    }

    case "order":
      return (
        <OrderBuilder
          words={(exercise.payload as OrderPayload).words}
          disabled={disabled}
          onAnswer={(seq) => onAnswer(seq)}
        />
      );

    default:
      return null;
  }
}

function GermanLine({ text }: { text: string }) {
  return (
    <p className="prose-de rounded-[var(--radius-control)] bg-surface-2 px-3.5 py-3 text-[16.5px] leading-relaxed">
      {text}
    </p>
  );
}

function Choices({
  options,
  chosen,
  disabled,
  onPick,
}: {
  options: string[];
  chosen: number | null;
  disabled: boolean;
  onPick: (index: number) => void;
}) {
  if (options.length === 0) return null;
  const short = options.every((o) => o.length <= 12);

  return (
    <div className={cn("grid gap-2", short ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1")}>
      {options.map((opt, i) => (
        <button
          key={`${opt}-${i}`}
          type="button"
          disabled={disabled}
          onClick={() => onPick(i)}
          className={cn(
            "prose-de rounded-[var(--radius-control)] border px-3.5 py-3 text-[15.5px] transition-colors",
            short ? "text-center font-semibold" : "text-left",
            chosen === i
              ? "border-iris bg-iris text-white"
              : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
            disabled && chosen !== i && "opacity-50",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/**
 * Word-order builder.
 *
 * Tapping a word moves it into the sentence; tapping it in the sentence
 * takes it back. Deliberately not drag-and-drop — this has to work with a
 * thumb on a phone.
 */
function OrderBuilder({
  words,
  disabled,
  onAnswer,
}: {
  words: string[];
  disabled: boolean;
  onAnswer: (sequence: string[]) => void;
}) {
  const { t } = useI18n();
  // Shuffled once per mount, seeded by nothing — but computed in a memo so
  // it does not reshuffle on every keystroke elsewhere on the page.
  const bank = useMemo(() => shuffleStable(words), [words]);
  const [placed, setPlaced] = useState<number[]>([]);

  const remaining = bank.map((_, i) => i).filter((i) => !placed.includes(i));

  return (
    <div className="flex flex-col gap-3">
      <div className="min-h-[56px] rounded-[var(--radius-control)] border border-dashed border-line-strong bg-surface-2 p-2.5">
        {placed.length === 0 ? (
          <span className="text-[13px] text-ink-faint">{t.gram.tapWords}</span>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {placed.map((wi, pos) => (
              <button
                key={`${wi}-${pos}`}
                type="button"
                disabled={disabled}
                onClick={() => setPlaced((p) => p.filter((_, k) => k !== pos))}
                className="prose-de rounded-[var(--radius-control)] border border-iris-line bg-iris-soft px-2.5 py-1.5 text-[15px]"
              >
                {bank[wi]}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {remaining.map((wi) => (
          <button
            key={wi}
            type="button"
            disabled={disabled}
            onClick={() => setPlaced((p) => [...p, wi])}
            className="prose-de rounded-[var(--radius-control)] border border-line bg-surface px-2.5 py-1.5 text-[15px] hover:border-iris-line hover:bg-iris-soft"
          >
            {bank[wi]}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          disabled={disabled || placed.length !== bank.length}
          onClick={() => onAnswer(placed.map((i) => bank[i]))}
        >
          {t.common.check}
        </Button>
        {placed.length > 0 && !disabled ? (
          <Button size="sm" variant="ghost" onClick={() => setPlaced([])}>
            {t.gram.reset}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

/**
 * A deterministic shuffle.
 *
 * Math.random() would give the server and the client different orders and
 * React would report a hydration mismatch, so the order is derived from
 * the words themselves — same input, same order, but not the answer order.
 */
function shuffleStable(words: string[]): string[] {
  return [...words]
    .map((w, i) => ({ w, k: hash(`${w}:${i}`) }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.w);
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
