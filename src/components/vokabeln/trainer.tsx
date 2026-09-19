"use client";

import { useMemo, useState } from "react";
import { Check, RotateCcw, Flame } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { VocabWord } from "@/content/vokabeln";
import { answerVocab, finishVocabRound } from "@/app/(b1)/vokabeln/actions";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";
import { Input } from "@/components/ui/input";

/** Vocabulary drill: meaning in, German word typed into the gap. */
export function VocabTrainer({
  words,
  explainLang,
  mode = "recall",
}: {
  words: VocabWord[];
  explainLang: Lang;
  mode?: "recall" | "quiz";
}) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [correctCount, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const word = words[index];
  const bn = explainLang === "bn";

  const options = useMemo(() => {
    if (!word) return [];
    const pool = words.filter((candidate) => candidate.de !== word.de);
    const distractors = pool.filter((candidate) => candidate.meaning.en !== word.meaning.en).slice(0, 3);
    return [word, ...distractors].sort((a, b) => hash(a.de + word.de) - hash(b.de + word.de));
  }, [word, words]);

  async function answer(given = typed) {
    if (chosen || busy || !word || !given.trim()) return;
    setBusy(true);
    setChosen(given.trim());
    try {
      const res = await answerVocab(word.de, given);
      if (res.correct) {
        setCorrect((c) => c + 1);
        setStreak((s) => s + 1);
      } else {
        setStreak(0);
      }
    } finally {
      setBusy(false);
    }
  }

  async function next() {
    if (index >= words.length - 1) {
      setDone(true);
      await finishVocabRound(correctCount + (isRight ? 1 : 0), words.length);
      return;
    }
    setChosen(null);
    setTyped("");
    setIndex((i) => i + 1);
  }

  if (done || !word) {
    const pct = words.length ? Math.round((correctCount / words.length) * 100) : 0;
    return (
      <Card className={pct >= 80 ? "border-sage/40 bg-sage-soft" : "border-iris-line bg-iris-soft"}>
        <CardBody className="flex flex-col gap-4">
          <div>
            <p className="text-[18px] font-bold">{t.vokabeln.roundDone}</p>
            <p className="tnum mt-1 text-[15px] text-ink-soft">
              {correctCount} / {words.length} · {pct}%
            </p>
          </div>
          <p className={cn("text-[14px] text-ink-soft", bn && "bn")}>{t.vokabeln.roundNote}</p>
          <div>
            <Button onClick={() => window.location.reload()}>
              <RotateCcw size={16} aria-hidden />
              {t.vokabeln.nextRound}
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }

  const isRight = chosen !== null && chosen === word.de;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3">
        <span className="tnum font-[family-name:var(--font-mono)] text-[13px] text-ink-soft">
          {index + 1} / {words.length}
        </span>
        <span className="tnum text-[13px] text-ink-soft">
          <strong className="text-sage">{correctCount}</strong>{" "}
          {t.common.correct.toLowerCase()}
        </span>
        {streak >= 3 ? (
          <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-clay">
            <Flame size={14} aria-hidden />
            {streak}
          </span>
        ) : null}
        <span className="ml-auto">
          <Badge tone={word.priority === 1 ? "clay" : word.priority === 2 ? "iris" : "neutral"}>
            {t.vokabeln.priority} {word.priority}
          </Badge>
        </span>
      </div>

      <Card>
        <CardBody className="flex flex-col gap-5 py-6">
          <div className="flex flex-col gap-3">
            <p className={cn("text-center text-[15px] text-ink-soft", bn && "bn")}>
              {mode === "quiz" ? t.vokabeln.chooseAnswer : t.vokabeln.typeAnswer}
            </p>
            <p className={cn("text-center text-[22px] font-semibold text-ink", bn && "bn")}>
              {pick(word.meaning, explainLang)}
            </p>
            {mode === "quiz" ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {options.map((option) => {
                  const selected = chosen === option.de;
                  const right = chosen !== null && option.de === word.de;
                  return (
                    <button
                      key={option.de}
                      type="button"
                      disabled={chosen !== null || busy}
                      onClick={() => void answer(option.de)}
                      className={cn(
                        "prose-de rounded-[var(--radius-control)] border px-3 py-3 text-left text-[15px] font-semibold transition-colors",
                        chosen === null && "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                        right && "border-sage bg-sage-soft",
                        selected && !right && "border-clay bg-clay-soft",
                        chosen !== null && !selected && !right && "text-ink-faint",
                      )}
                    >
                      {option.article ? `${option.article} ` : ""}{option.de}
                    </button>
                  );
                })}
              </div>
            ) : (
              <form
                className="flex flex-col gap-2 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  void answer();
                }}
              >
                <Input
                  autoFocus
                  value={typed}
                  onChange={(event) => setTyped(event.target.value)}
                  disabled={chosen !== null || busy}
                  placeholder={t.vokabeln.typeAnswer}
                  aria-label="German word"
                />
                <Button type="submit" disabled={!typed.trim() || chosen !== null || busy}>
                  {t.vokabeln.checkAnswer}
                </Button>
              </form>
            )}
          </div>

          {chosen !== null ? (
            <div
              className={cn(
                "flex flex-col gap-2 rounded-[var(--radius-control)] px-3.5 py-3",
                isRight ? "bg-sage-soft" : "bg-clay-soft",
              )}
            >
              {word.example ? (
                <p className="prose-de text-[15px] leading-relaxed">{word.example}</p>
              ) : null}
              <p className="flex items-center gap-2 text-[14px] font-semibold">
                {isRight ? <Check size={16} className="text-sage" aria-hidden /> : null}
                {isRight ? t.vokabeln.correctAnswer : `${t.vokabeln.solution}: ${word.de}`}
              </p>
              {word.note ? (
                <p className={cn("text-[13.5px] leading-relaxed text-ink-soft", bn && "bn")}>
                  {pick(word.note, explainLang)}
                </p>
              ) : null}
              {word.seenIn ? (
                <p className="text-[12.5px] text-ink-faint">
                  {t.vokabeln.seenIn}: {word.seenIn}
                </p>
              ) : null}
            </div>
          ) : null}

          {chosen !== null ? (
            <div>
              <Button onClick={next} className="w-full sm:w-auto">
                {index >= words.length - 1 ? t.vokabeln.finish : t.common.next}
              </Button>
            </div>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
}

function hash(value: string): number {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}
