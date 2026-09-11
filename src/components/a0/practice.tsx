"use client";

import { useMemo, useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { A0Question } from "@/content/a0";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

type Q = A0Question & { lessonSlug: string };

/**
 * Mixed practice across every lesson finished so far. One question at a
 * time, shuffled — recalling an answer out of order is what makes it
 * stick, whereas going through a lesson again only re-reads it.
 */
export function Practice({
  questions,
  explainLang,
}: {
  questions: Q[];
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState({ right: 0, total: 0 });

  const deck = useMemo(() => shuffle(questions, seed), [questions, seed]);
  const q = deck[index];
  const bn = explainLang === "bn";
  const finished = index >= deck.length;

  function choose(i: number) {
    if (chosen !== null) return;
    setChosen(i);
    setScore((s) => ({
      right: s.right + (i === q.answerIndex ? 1 : 0),
      total: s.total + 1,
    }));
  }

  function next() {
    setChosen(null);
    setIndex((i) => i + 1);
  }

  function restart() {
    setSeed((s) => s + 1);
    setIndex(0);
    setChosen(null);
    setScore({ right: 0, total: 0 });
  }

  if (finished) {
    return (
      <Card className="border-iris-line bg-iris-soft">
        <CardBody className="flex flex-col items-start gap-3">
          <p className="tnum font-[family-name:var(--font-display)] text-[34px] font-extrabold leading-none">
            {score.right}
            <span className="text-[18px] text-ink-soft">/{score.total}</span>
          </p>
          <Button onClick={restart}>
            <RotateCcw size={15} aria-hidden />
            {t.common.tryAgain}
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <div
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2"
          role="progressbar"
          aria-valuenow={index}
          aria-valuemin={0}
          aria-valuemax={deck.length}
        >
          <div
            className="h-full rounded-full bg-iris transition-[width] duration-300"
            style={{ width: `${(index / deck.length) * 100}%` }}
          />
        </div>
        <span className="tnum shrink-0 font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
          {index + 1}/{deck.length}
        </span>
      </div>

      <Card>
        <CardBody className="flex flex-col gap-3">
          <p className={cn("text-[16px] font-semibold", bn && "bn")}>
            {pick(q.ask, explainLang)}
          </p>

          {q.german ? (
            <p className="prose-de rounded-[var(--radius-control)] bg-surface-2 px-3 py-2 text-[17px]">
              {q.german}
            </p>
          ) : null}

          <ul className="flex flex-col gap-2">
            {q.options.map((opt, oi) => {
              const isAnswer = oi === q.answerIndex;
              const reveal = chosen !== null;
              return (
                <li key={oi}>
                  <button
                    type="button"
                    disabled={reveal}
                    onClick={() => choose(oi)}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-[var(--radius-control)] border px-3.5 py-3 text-left text-[15px] transition-colors",
                      !reveal &&
                        "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                      reveal && isAnswer && "border-sage/40 bg-sage-soft",
                      reveal &&
                        chosen === oi &&
                        !isAnswer &&
                        "border-clay/40 bg-clay-soft",
                      reveal &&
                        chosen !== oi &&
                        !isAnswer &&
                        "border-line text-ink-faint",
                    )}
                  >
                    {reveal && isAnswer ? (
                      <Check size={16} className="shrink-0 text-sage" />
                    ) : reveal && chosen === oi ? (
                      <X size={16} className="shrink-0 text-clay" />
                    ) : (
                      <span
                        aria-hidden
                        className="h-4 w-4 shrink-0 rounded-full border border-line-strong"
                      />
                    )}
                    <span className="prose-de">{opt}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {chosen !== null ? (
            <>
              <div
                className={cn(
                  "rounded-[var(--radius-control)] px-3.5 py-3",
                  chosen === q.answerIndex ? "bg-sage-soft" : "bg-clay-soft",
                )}
              >
                <span
                  className={cn(
                    "label",
                    chosen === q.answerIndex ? "text-sage" : "text-clay",
                  )}
                >
                  {chosen === q.answerIndex ? t.common.correct : t.common.wrong}
                </span>
                <p
                  className={cn(
                    "mt-1 text-[14.5px] leading-relaxed text-ink",
                    bn && "bn",
                  )}
                >
                  {pick(q.why, explainLang)}
                </p>
              </div>
              <Button onClick={next} className="self-start">
                {t.common.next}
              </Button>
            </>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
}

/** Deterministic shuffle, so the order is stable within one round. */
function shuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let state = seed * 9301 + 49297;
  for (let i = out.length - 1; i > 0; i--) {
    state = (state * 9301 + 49297) % 233280;
    const j = Math.floor((state / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
