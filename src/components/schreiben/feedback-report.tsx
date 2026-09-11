"use client";

import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { Feedback } from "@/lib/ai/feedback-schema";
import { SCORE_MAX, totalScore } from "@/lib/ai/feedback-schema";
import type { SchreibenTask } from "@/content/schreiben";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

export function FeedbackReport({
  feedback,
  task,
  originalText,
  explainLang,
}: {
  feedback: Feedback;
  task: SchreibenTask;
  originalText: string;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const bn = explainLang === "bn";
  const total = totalScore(feedback.scores);
  const passed = total >= SCORE_MAX.total * 0.6;

  const criteria = [
    { key: "inhalt", label: t.schreiben.crit.inhalt, max: SCORE_MAX.inhalt },
    { key: "kommunikation", label: t.schreiben.crit.kommunikation, max: SCORE_MAX.kommunikation },
    { key: "grammatik", label: t.schreiben.crit.grammatik, max: SCORE_MAX.grammatik },
    { key: "wortschatz", label: t.schreiben.crit.wortschatz, max: SCORE_MAX.wortschatz },
  ] as const;

  return (
    <div className="flex flex-col gap-6">
      {/* ---- score ----------------------------------------------------- */}
      <Card className={passed ? "border-sage/35" : "border-clay/35"}>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
            <div>
              <span className="label">{t.schreiben.yourScore}</span>
              <p
                className={cn(
                  "tnum font-[family-name:var(--font-display)] text-[46px] font-extrabold leading-none",
                  passed ? "text-sage" : "text-clay",
                )}
              >
                {total}
                <span className="text-[20px] text-ink-faint">/45</span>
              </p>
            </div>
            <Badge tone={passed ? "sage" : "clay"}>
              {passed ? t.schreiben.wouldPass : t.schreiben.wouldNotPass}
            </Badge>
          </div>

          <div className="flex flex-col gap-3 border-t border-line pt-4">
            {criteria.map((c) => {
              const value = feedback.scores[c.key];
              const pct = (value / c.max) * 100;
              return (
                <div key={c.key} className="flex flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className={cn("text-[14px] font-semibold", bn && "bn")}>
                      {c.label}
                    </span>
                    <span className="tnum font-[family-name:var(--font-mono)] text-[12.5px] text-ink-soft">
                      {value}/{c.max}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        pct >= 75 ? "bg-sage" : pct >= 60 ? "bg-iris" : "bg-clay",
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <p className={cn("border-t border-line pt-3 text-[12.5px] leading-relaxed text-ink-faint", bn && "bn")}>
            {t.schreiben.scoreDisclaimer}
          </p>
        </CardBody>
      </Card>

      {/* ---- the recurring pattern ------------------------------------- */}
      <Card className="border-clay/30 bg-clay-soft">
        <CardBody>
          <span className="label text-clay">{t.schreiben.patternTitle}</span>
          <p className={cn("mt-1.5 text-[16px] leading-relaxed", bn && "bn")}>
            {pick(feedback.recurringPattern, explainLang)}
          </p>
        </CardBody>
      </Card>

      {/* ---- Leitpunkte ------------------------------------------------ */}
      <section>
        <h2 className={cn("mb-3 text-[19px] font-bold", bn && "bn")}>
          {t.schreiben.leitpunkteCheck}
        </h2>
        <Card>
          <ul className="divide-y divide-line">
            {feedback.leitpunkte
              .slice()
              .sort((a, b) => a.index - b.index)
              .map((lp) => (
                <li key={lp.index} className="flex gap-3 p-4">
                  {lp.covered ? (
                    <Check size={17} className="mt-0.5 shrink-0 text-sage" aria-hidden />
                  ) : (
                    <X size={17} className="mt-0.5 shrink-0 text-clay" aria-hidden />
                  )}
                  <div className="min-w-0">
                    <p className="prose-de text-[14.5px] font-semibold">
                      {task.leitpunkte[lp.index - 1] ?? `Leitpunkt ${lp.index}`}
                    </p>
                    <p className={cn("mt-1 text-[14px] text-ink-soft", bn && "bn")}>
                      {pick(lp.comment, explainLang)}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </Card>
      </section>

      {/* ---- corrections ----------------------------------------------- */}
      <section>
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className={cn("text-[19px] font-bold", bn && "bn")}>
            {t.schreiben.correctionsTitle}
          </h2>
          <span className="text-[13px] text-ink-faint">
            {feedback.corrections.length}
          </span>
        </div>

        {feedback.corrections.length === 0 ? (
          <Card>
            <CardBody>
              <p className={cn("text-[15px] text-sage", bn && "bn")}>
                {t.schreiben.noCorrections}
              </p>
            </CardBody>
          </Card>
        ) : (
          <ul className="flex flex-col gap-2">
            {feedback.corrections.map((c, i) => (
              <li key={i}>
                <Card>
                  <CardBody className="flex flex-col gap-2 p-4">
                    <Badge tone="neutral">{t.schreiben.mistakeCat[c.category]}</Badge>

                    <p className="prose-de text-[15px] leading-relaxed">
                      <span className="text-clay line-through decoration-clay/40">
                        {c.original}
                      </span>
                    </p>
                    <p className="prose-de text-[15px] font-semibold leading-relaxed text-sage">
                      {c.corrected}
                    </p>

                    <p className={cn("border-t border-line pt-2 text-[14px] leading-relaxed text-ink-soft", bn && "bn")}>
                      {pick(c.why, explainLang)}
                    </p>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ---- better version + model answer ------------------------------ */}
      <Collapsible title={t.schreiben.betterVersion} defaultOpen>
        <p className="prose-de whitespace-pre-line text-[15.5px] leading-relaxed">
          {feedback.betterB1Version}
        </p>
      </Collapsible>

      <Collapsible title={t.schreiben.yourOriginal}>
        <p className="prose-de whitespace-pre-line text-[15.5px] leading-relaxed text-ink-soft">
          {originalText}
        </p>
      </Collapsible>

      <Collapsible title={t.schreiben.modelAnswer}>
        <p className="prose-de whitespace-pre-line text-[15.5px] leading-relaxed">
          {task.modelAnswerDe}
        </p>
        <p className={cn("mt-4 border-t border-line pt-3 text-[14px] leading-relaxed text-ink-soft", bn && "bn")}>
          {pick(task.modelNotes, explainLang)}
        </p>
      </Collapsible>
    </div>
  );
}

function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Card>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="text-[17px] font-semibold">{title}</span>
        <ChevronDown
          size={17}
          aria-hidden
          className={cn(
            "shrink-0 text-ink-faint transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="border-t border-line px-5 py-4">{children}</div>
      ) : null}
    </Card>
  );
}
