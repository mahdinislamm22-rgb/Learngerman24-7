"use client";

import { useMemo, useState } from "react";
import { Check, X, RotateCcw, Flame } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { VocabWord } from "@/content/vokabeln";
import { answerVocab, finishVocabRound } from "@/app/(b1)/vokabeln/actions";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * Vocabulary drill: German word in, meaning out.
 *
 * The wrong options are drawn from the SAME theme wherever possible. Four
 * options from four unrelated themes can be answered by elimination
 * without knowing the word at all, which feels like progress and teaches
 * nothing.
 */
export function VocabTrainer({
  words,
  explainLang,
}: {
  words: VocabWord[];
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [correctCount, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const word = words[index];
  const bn = explainLang === "bn";

  // Options are derived from the word list, so server and client build the
  // same set — no hydration mismatch, and no reshuffle on every render.
  const options = useMemo(() => {
    if (!word) return [];
    const sameTheme = words.filter((x) => x.de !== word.de && x.theme === word.theme);
    const others = words.filter((x) => x.de !== word.de && x.theme !== word.theme);
    const pool = [...sameTheme, ...others];

    const distractors: VocabWord[] = [];
    for (const candidate of pool) {
      if (distractors.length >= 3) break;
      if (distractors.some((d) => d.meaning.en === candidate.meaning.en)) continue;
      if (candidate.meaning.en === word.meaning.en) continue;
      distractors.push(candidate);
    }

    return [word, ...distractors].sort((a, b) =>
      // Deterministic order derived from the words themselves.
      hash(a.de + word.de) - hash(b.de + word.de),
    );
  }, [word, words]);

  async function answer(option: VocabWord) {
    if (chosen || busy || !word) return;
    setBusy(true);
    setChosen(option.de);
    try {
      const res = await answerVocab(word.de, option.meaning.en);
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
      await finishVocabRound(correctCount, words.length);
      return;
    }
    setChosen(null);
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
          <div className="text-center">
            <p className="prose-de text-[28px] font-bold leading-tight">
              {word.article ? <span className="text-iris">{word.article} </span> : null}
              {word.de}
            </p>
            {word.plural ? (
              <p className="prose-de mt-1 text-[13.5px] text-ink-faint">Plural: {word.plural}</p>
            ) : null}
          </div>

          <ul className="flex flex-col gap-2">
            {options.map((opt) => {
              const picked = chosen === opt.de;
              const isAnswer = chosen !== null && opt.de === word.de;
              return (
                <li key={opt.de}>
                  <button
                    type="button"
                    disabled={chosen !== null || busy}
                    onClick={() => answer(opt)}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-[var(--radius-control)] border px-3.5 py-3 text-left text-[15px] transition-colors",
                      chosen === null && "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                      isAnswer && "border-sage bg-sage-soft",
                      picked && !isAnswer && "border-clay bg-clay-soft",
                      chosen !== null && !picked && !isAnswer && "border-line bg-surface text-ink-faint",
                    )}
                  >
                    {chosen !== null && isAnswer ? (
                      <Check size={16} className="shrink-0 text-sage" aria-hidden />
                    ) : picked ? (
                      <X size={16} className="shrink-0 text-clay" aria-hidden />
                    ) : (
                      <span aria-hidden className="h-4 w-4 shrink-0 rounded-full border border-line-strong" />
                    )}
                    <span className={cn(bn && "bn")}>{pick(opt.meaning, explainLang)}</span>
                  </button>
                </li>
              );
            })}
          </ul>

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

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
