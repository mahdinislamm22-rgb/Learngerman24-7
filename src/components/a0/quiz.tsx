"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { A0Question } from "@/content/a0";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/provider";
import { markLessonDone } from "@/app/(a0)/actions";
import { cn } from "@/lib/cn";

type Answer = { chosen: number; correct: boolean };

/**
 * The quick check at the end of a lesson.
 *
 * Answering is immediate and explained — a beginner learns nothing from
 * a score at the end, and everything from finding out why an answer was
 * wrong while the question is still in their head.
 */
export function Quiz({
  questions,
  lessonSlug,
  nextSlug,
  explainLang,
}: {
  questions: A0Question[];
  lessonSlug: string;
  nextSlug?: string;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [saved, setSaved] = useState(false);

  const answered = Object.keys(answers).length;
  const score = Object.values(answers).filter((a) => a.correct).length;
  const allDone = answered === questions.length;
  const bn = explainLang === "bn";

  async function finish() {
    setSaved(true);
    await markLessonDone(lessonSlug, score, questions.length);
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-[19px] font-bold">{t.a0.quickCheck}</h2>
        <span className="tnum font-[family-name:var(--font-mono)] text-[12.5px] text-ink-faint">
          {answered}/{questions.length}
        </span>
      </div>

      {questions.map((q, qi) => {
        const given = answers[q.id];

        return (
          <Card key={q.id}>
            <CardBody className="flex flex-col gap-3">
              <p className={cn("text-[15.5px] font-semibold", bn && "bn")}>
                <span className="mr-1.5 text-ink-faint">{qi + 1}.</span>
                {pick(q.ask, explainLang)}
              </p>

              {q.german ? (
                <p className="prose-de rounded-[var(--radius-control)] bg-surface-2 px-3 py-2 text-[16px]">
                  {q.german}
                </p>
              ) : null}

              <ul className="flex flex-col gap-2">
                {q.options.map((opt, oi) => {
                  const chosen = given?.chosen === oi;
                  const isAnswer = oi === q.answerIndex;
                  const reveal = Boolean(given);

                  return (
                    <li key={oi}>
                      <button
                        type="button"
                        disabled={reveal}
                        onClick={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [q.id]: { chosen: oi, correct: isAnswer },
                          }))
                        }
                        className={cn(
                          "flex w-full items-center gap-2.5 rounded-[var(--radius-control)] border px-3.5 py-3 text-left text-[15px] transition-colors",
                          !reveal &&
                            "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
                          reveal &&
                            isAnswer &&
                            "border-sage/40 bg-sage-soft text-ink",
                          reveal &&
                            chosen &&
                            !isAnswer &&
                            "border-clay/40 bg-clay-soft text-ink",
                          reveal &&
                            !chosen &&
                            !isAnswer &&
                            "border-line bg-surface text-ink-faint",
                        )}
                      >
                        {reveal && isAnswer ? (
                          <Check size={16} className="shrink-0 text-sage" />
                        ) : reveal && chosen ? (
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

              {given ? (
                <div
                  className={cn(
                    "rounded-[var(--radius-control)] px-3.5 py-3",
                    given.correct ? "bg-sage-soft" : "bg-clay-soft",
                  )}
                >
                  <span
                    className={cn(
                      "label",
                      given.correct ? "text-sage" : "text-clay",
                    )}
                  >
                    {given.correct ? t.common.correct : t.common.wrong}
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
              ) : null}
            </CardBody>
          </Card>
        );
      })}

      {allDone ? (
        <Card className="border-iris-line bg-iris-soft">
          <CardBody className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[16px] font-bold">
                {saved ? t.a0.lessonDone : t.a0.finishLesson}
              </p>
              <p className="tnum mt-0.5 text-[14px] text-ink-soft">
                {score}/{questions.length}
              </p>
            </div>

            {!saved ? (
              <Button onClick={finish}>{t.a0.finishLesson}</Button>
            ) : nextSlug ? (
              <Link href={`/anfaenger/lektion/${nextSlug}`}>
                <Button>{t.a0.nextLesson}</Button>
              </Link>
            ) : (
              <Link href="/anfaenger">
                <Button variant="secondary">{t.common.backToDashboard}</Button>
              </Link>
            )}
          </CardBody>
        </Card>
      ) : null}
    </section>
  );
}
