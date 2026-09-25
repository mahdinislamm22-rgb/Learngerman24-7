"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, BookOpen, TriangleAlert, Repeat } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { Modelltest } from "@/content/modelltests";
import type { MtResult, MtItem } from "@/app/(b1)/pruefungen/actions";
import { SkillBar } from "@/components/ui/progress";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * What the exam actually taught you.
 *
 * Built in the order a person needs it, which is not the order the paper
 * is printed in:
 *
 *   1. Did I pass, and by how much.
 *   2. WHICH MISTAKES, GROUPED. Four separate Dativ slips are one problem,
 *      not four, and seeing them as one is what makes them fixable.
 *   3. Every item, with the right answer and why — available, but below
 *      the diagnosis, because reading twenty explanations in a row is how
 *      you learn nothing.
 */
export function ExamResult({
  mt,
  result,
  explainLang,
}: {
  mt: Modelltest;
  result: MtResult;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const bn = explainLang === "bn";

  const pct = Math.round((result.totalPoints / result.maxPoints) * 100);

  return (
    <div className="flex flex-col gap-7">
      {/* ---- 1. the verdict ------------------------------------------ */}
      <Card className={result.passed ? "border-sage/40 bg-sage-soft" : "border-clay/30 bg-clay-soft"}>
        <CardBody className="flex flex-col gap-4">
          <div>
            <span className="label">{pick(mt.title, explainLang)}</span>
            <p className="tnum mt-1 text-[34px] font-extrabold leading-none">
              {result.totalPoints}
              <span className="text-[20px] font-bold text-ink-faint"> / {result.maxPoints}</span>
            </p>
            <p className="tnum mt-1.5 text-[15px] font-semibold">
              {result.passed ? (
                <span className="text-sage">{t.pruefungen.passed}</span>
              ) : (
                <span className="text-clay">{t.pruefungen.notYet}</span>
              )}
              <span className="ml-2 font-normal text-ink-soft">
                {t.pruefungen.passNeeds} {result.passMark} · {pct}%
              </span>
            </p>
          </div>

          {/* Distance to the pass mark, stated plainly either way. */}
          <p className={cn("text-[14px] leading-relaxed text-ink", bn && "bn")}>
            {result.passed
              ? `${t.pruefungen.marginOver} ${round(result.totalPoints - result.passMark)}.`
              : `${t.pruefungen.marginUnder} ${round(result.passMark - result.totalPoints)}.`}
          </p>
        </CardBody>
      </Card>

      {/* ---- per section --------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <h2 className={cn("text-[19px] font-bold", bn && "bn")}>{t.pruefungen.bySection}</h2>
        <Card>
          <CardBody className="flex flex-col gap-4">
            {(["lesen", "sprachbausteine", "hoeren"] as const).map((key) => {
              const sec = result.sections[key];
              return (
                <SkillBar
                  key={key}
                  label={`${sectionLabel(key)} — ${sec.points} / ${sec.maxPoints}`}
                  value={(sec.points / sec.maxPoints) * 100}
                  hint={`${sec.correct}/${sec.total} ${t.pruefungen.itemsCorrect}`}
                />
              );
            })}

            {result.schreiben.points !== null ? (
              <SkillBar
                label={`Schriftlicher Ausdruck — ${result.schreiben.points} / 45`}
                value={(result.schreiben.points / 45) * 100}
                hint={`${result.schreiben.words} ${t.schreiben.words}`}
              />
            ) : (
              <div className="rounded-[var(--radius-control)] border border-amber/30 bg-amber-soft px-3.5 py-3">
                <p className="text-[13.5px] leading-relaxed text-ink">
                  <strong>Schriftlicher Ausdruck: </strong>
                  {result.schreiben.error ?? t.pruefungen.writingNotMarked}
                </p>
              </div>
            )}
          </CardBody>
        </Card>
      </section>

      {/* ---- 2. the diagnosis ---------------------------------------- */}
      {result.groups.length > 0 ? (
        <section className="flex flex-col gap-3">
          <div>
            <h2 className={cn("flex items-center gap-2 text-[19px] font-bold", bn && "bn")}>
              <TriangleAlert size={17} aria-hidden />
              {t.pruefungen.whatWentWrong}
            </h2>
            <p className={cn("mt-0.5 max-w-[64ch] text-[14px] text-ink-soft", bn && "bn")}>
              {t.pruefungen.whatWentWrongNote}
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            {result.groups.map((g) => (
              <li key={g.tag}>
                <Card className={g.count >= 3 ? "border-clay/35" : undefined}>
                  <CardBody className="flex flex-wrap items-center gap-x-4 gap-y-2 p-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="prose-de text-[15px] font-bold">{prettyTag(g.tag)}</span>
                        <Badge tone={g.count >= 3 ? "clay" : "neutral"}>
                          {g.count}× {t.pruefungen.wrong}
                        </Badge>
                        {g.recurring ? (
                          <Badge tone="amber">
                            <Repeat size={11} aria-hidden /> {t.pruefungen.recurring}
                          </Badge>
                        ) : null}
                      </div>
                      <p className="tnum mt-1 text-[12.5px] text-ink-faint">
                        {t.pruefungen.questions}: {g.items.join(", ")}
                      </p>
                    </div>

                    {g.lessonSlug ? (
                      <Link href={`/grammatik/${g.lessonSlug}`}>
                        <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border border-iris-line bg-iris-soft px-3 py-2 text-[13px] font-semibold text-iris">
                          <BookOpen size={14} aria-hidden />
                          {t.pruefungen.reviewLesson}
                        </span>
                      </Link>
                    ) : null}
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <Card className="border-sage/40 bg-sage-soft">
          <CardBody>
            <p className={cn("text-[15px] font-semibold", bn && "bn")}>{t.pruefungen.noMistakes}</p>
          </CardBody>
        </Card>
      )}

      {/* ---- the writing feedback ------------------------------------ */}
      {result.schreiben.feedback ? (
        <section className="flex flex-col gap-3">
          <h2 className={cn("text-[19px] font-bold", bn && "bn")}>{t.pruefungen.yourLetter}</h2>
          <Card>
            <CardBody className="flex flex-col gap-3">
              <p className={cn("text-[14.5px] leading-relaxed", bn && "bn")}>
                {pick(result.schreiben.feedback.recurringPattern, explainLang)}
              </p>
              <div className="rounded-[var(--radius-control)] bg-surface-2 p-3.5">
                <span className="label">{t.schreiben.betterVersion}</span>
                <p className="prose-de mt-1.5 whitespace-pre-line text-[15px] leading-relaxed">
                  {result.schreiben.feedback.betterB1Version}
                </p>
              </div>
              <Link href="/fehler" className="text-[13.5px] font-semibold text-iris hover:underline">
                {t.pruefungen.seeAllCorrections}
              </Link>
            </CardBody>
          </Card>
        </section>
      ) : null}

      {/* ---- 3. every item ------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <div>
          <h2 className={cn("text-[19px] font-bold", bn && "bn")}>{t.pruefungen.allAnswers}</h2>
          <p className={cn("mt-0.5 max-w-[64ch] text-[14px] text-ink-soft", bn && "bn")}>
            {t.pruefungen.allAnswersNote}
          </p>
        </div>

        {(["lesen", "sprachbausteine", "hoeren"] as const).map((key) => {
          const rows = result.items.filter((i) => i.section === key);
          const wrong = rows.filter((i) => !i.correct).length;
          const open = openSection === key;

          return (
            <div key={key}>
              <button
                type="button"
                onClick={() => setOpenSection(open ? null : key)}
                className="flex w-full items-center gap-3 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3 text-left transition-colors hover:border-iris-line"
              >
                <span className="flex-1 text-[15px] font-bold">{sectionLabel(key)}</span>
                <Badge tone={wrong === 0 ? "sage" : wrong >= 5 ? "clay" : "iris"}>
                  {wrong} {t.pruefungen.wrong}
                </Badge>
                <span className="text-[13px] text-ink-faint">{open ? "−" : "+"}</span>
              </button>

              {open ? (
                <ul className="mt-2 flex flex-col gap-2">
                  {rows.map((item) => (
                    <ItemRow key={`${item.section}-${item.nr}`} item={item} explainLang={explainLang} />
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </section>

      <div className="flex flex-wrap gap-3 border-t border-line pt-4">
        <Link href="/pruefungen">
          <Button variant="secondary">{t.pruefungen.backToList}</Button>
        </Link>
        <Link href="/fehler">
          <Button variant="secondary">{t.nav.mistakes}</Button>
        </Link>
      </div>
    </div>
  );
}

function ItemRow({ item, explainLang }: { item: MtItem; explainLang: Lang }) {
  const { t } = useI18n();
  const bn = explainLang === "bn";

  return (
    <li
      className={cn(
        "rounded-[var(--radius-control)] border p-3.5",
        item.correct ? "border-sage/30 bg-sage-soft" : "border-clay/30 bg-clay-soft",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="tnum font-[family-name:var(--font-mono)] text-[12.5px] font-bold text-ink-faint">
          {item.nr}
        </span>
        {item.correct ? (
          <Check size={14} className="text-sage" aria-hidden />
        ) : (
          <X size={14} className="text-clay" aria-hidden />
        )}
        {item.correct ? (
          <span className="prose-de text-[14px] font-semibold text-sage">{item.answer}</span>
        ) : (
          <span className="prose-de text-[14px]">
            <span className="text-clay line-through">{item.given || t.pruefungen.noAnswer}</span>
            {" → "}
            <strong className="text-sage">{item.answer}</strong>
          </span>
        )}
      </div>
      <p className={cn("mt-1.5 text-[13.5px] leading-relaxed text-ink", bn && "bn")}>
        {pick(item.why, explainLang)}
      </p>
    </li>
  );
}

function sectionLabel(key: "lesen" | "sprachbausteine" | "hoeren"): string {
  if (key === "lesen") return "Leseverstehen";
  if (key === "sprachbausteine") return "Sprachbausteine";
  return "Hörverstehen";
}

/** Turn a machine tag into something readable: "kasus-dativ" → "Kasus · Dativ". */
function prettyTag(tag: string): string {
  return tag
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" · ");
}

function round(n: number): number {
  return Math.round(n * 10) / 10;
}
