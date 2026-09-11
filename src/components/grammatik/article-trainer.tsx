"use client";

import { useState } from "react";
import { Flame, RotateCcw } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import { ARTICLE_RULES, type TrainerNoun } from "@/content/grammatik";
import { answerArticle } from "@/app/(b1)/grammatik/actions";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

const ARTICLES = ["der", "die", "das"] as const;
type Art = (typeof ARTICLES)[number];

/**
 * der / die / das, one word at a time.
 *
 * Separate from the exercise runner on purpose: this is a memory drill,
 * not a grammar exercise. It wants a fast rhythm, a visible streak, and
 * the ending rule shown at the moment of the mistake — which is when it
 * actually sticks.
 */
export function ArticleTrainer({
  words,
  explainLang,
}: {
  words: TrainerNoun[];
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [given, setGiven] = useState<Art | null>(null);
  const [truth, setTruth] = useState<Art | null>(null);
  const [busy, setBusy] = useState(false);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  const word = words[index];
  const bn = explainLang === "bn";
  const finished = index >= words.length;

  async function answer(a: Art) {
    if (!word || given || busy) return;
    setBusy(true);
    setGiven(a);
    try {
      const res = await answerArticle(word.de, a);
      setTruth(res.answer);
      setDone((d) => d + 1);
      if (res.correct) {
        setRight((r) => r + 1);
        setStreak((s) => {
          const next = s + 1;
          setBest((b) => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
      }
    } finally {
      setBusy(false);
    }
  }

  function next() {
    setGiven(null);
    setTruth(null);
    setIndex((i) => i + 1);
  }

  function restart() {
    setIndex(0);
    setGiven(null);
    setTruth(null);
    setRight(0);
    setDone(0);
    setStreak(0);
  }

  if (finished || !word) {
    const pct = done ? Math.round((right / done) * 100) : 0;
    return (
      <Card className={pct >= 80 ? "border-sage/40 bg-sage-soft" : "border-iris-line bg-iris-soft"}>
        <CardBody className="flex flex-col gap-4">
          <div>
            <p className="text-[18px] font-bold">{t.gram.trainerDone}</p>
            <p className="tnum mt-1 text-[15px] text-ink-soft">
              {right} / {done} · {pct}% · {t.gram.bestStreak}: {best}
            </p>
          </div>
          <p className={cn("text-[14px] text-ink-soft", bn && "bn")}>
            {t.gram.trainerDoneNote}
          </p>
          <div>
            <Button onClick={restart}>
              <RotateCcw size={16} aria-hidden />
              {t.gram.again}
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }

  const correct = given !== null && truth !== null && given === truth;

  return (
    <div className="flex flex-col gap-3">
      {/* ---- score bar -------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3">
        <span className="tnum font-[family-name:var(--font-mono)] text-[13px] text-ink-soft">
          {index + 1} / {words.length}
        </span>
        <span className="tnum text-[13px] text-ink-soft">
          <strong className="text-sage">{right}</strong> {t.common.correct.toLowerCase()}
        </span>
        {streak >= 3 ? (
          <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-clay">
            <Flame size={14} aria-hidden />
            {streak}
          </span>
        ) : null}
        <span className="ml-auto">
          <Badge tone={word.level === 1 ? "sage" : word.level === 2 ? "iris" : "amber"}>
            {t.gram.level} {word.level}
          </Badge>
        </span>
      </div>

      <Card>
        <CardBody className="flex flex-col gap-5 py-7">
          <p className="prose-de text-center text-[30px] font-bold tracking-tight">
            {word.de}
          </p>

          <div className="grid grid-cols-3 gap-2">
            {ARTICLES.map((a) => {
              const isTruth = truth === a;
              const isGiven = given === a;
              return (
                <button
                  key={a}
                  type="button"
                  disabled={given !== null || busy}
                  onClick={() => answer(a)}
                  className={cn(
                    "prose-de rounded-[var(--radius-control)] border py-4 text-[18px] font-semibold transition-colors",
                    given === null &&
                      "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                    given !== null && isTruth && "border-sage bg-sage text-white",
                    given !== null &&
                      isGiven &&
                      !isTruth &&
                      "border-clay bg-clay text-white",
                    given !== null &&
                      !isGiven &&
                      !isTruth &&
                      "border-line bg-surface text-ink-faint",
                  )}
                >
                  {a}
                </button>
              );
            })}
          </div>

          {given !== null ? (
            <div
              className={cn(
                "flex flex-col gap-2 rounded-[var(--radius-control)] px-3.5 py-3",
                correct ? "bg-sage-soft" : "bg-clay-soft",
              )}
            >
              <p className="prose-de text-[16px] font-semibold">
                {truth} {word.de}
                <span className={cn("ml-2 font-normal text-ink-soft", bn && "bn")}>
                  · {pick(word.meaning, explainLang)}
                </span>
              </p>

              {word.rule ? (
                <p className={cn("text-[13.5px] leading-relaxed text-ink-soft", bn && "bn")}>
                  <strong className="text-ink">{ARTICLE_RULES[word.rule].label}</strong>
                  {" — "}
                  {pick(ARTICLE_RULES[word.rule].why, explainLang)}
                </p>
              ) : null}
            </div>
          ) : null}

          {given !== null ? (
            <div>
              <Button onClick={next} className="w-full sm:w-auto">
                {t.common.next}
              </Button>
            </div>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
}
