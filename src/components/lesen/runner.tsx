"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { pick, type Lang, type Multi } from "@/lib/types";
import type { LesenSet } from "@/content/lesen";
import { gradeLesenSet, type LesenResult } from "@/app/(b1)/lesen/actions";
import { ReadingText } from "./reading-text";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * The whole reading paper, in the order it is printed.
 *
 * Answered first, graded at the end — the same reason as Sprachbausteine:
 * per-question feedback would train a rhythm the exam does not allow.
 */
export function LesenRunner({
  set,
  explainLang,
}: {
  set: LesenSet;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<LesenResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const bn = explainLang === "bn";

  const answered = Object.values(answers).filter(Boolean).length;
  const resultFor = (nr: number) => result?.items.find((i) => i.nr === nr);
  const set1 = (nr: number, v: string) => setAnswers((p) => ({ ...p, [nr]: v }));

  async function submit() {
    setBusy(true);
    setError("");
    try {
      const res = await gradeLesenSet(set.code, answers);
      if ("error" in res) setError(res.error);
      else {
        setResult(res);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError(t.lesen.gradeFailed);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-7">
      {result ? <ScoreCard result={result} bn={bn} /> : null}

      <p className={cn("rounded-[var(--radius-control)] bg-iris-soft px-3.5 py-2.5 text-[13.5px] text-ink", bn && "bn")}>
        {t.lesen.tapHint}
      </p>

      {/* ---- Teil 1 — headings --------------------------------------- */}
      <section className="flex flex-col gap-3">
        <PartHead n={1} label={t.lesen.teil1} hint={pick(set.teil1.instruction, explainLang)} bn={bn} />

        <Card className="bg-surface-2">
          <CardBody className="p-4">
            <span className="label">{t.lesen.headings}</span>
            <ul className="mt-2 flex flex-col gap-1">
              {set.teil1.headings.map((h) => (
                <li key={h.key} className="prose-de text-[14.5px]">
                  <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
                    {h.key}){" "}
                  </span>
                  {h.text}
                </li>
              ))}
            </ul>
            <p className={cn("mt-2.5 text-[12.5px] text-ink-faint", bn && "bn")}>
              {t.lesen.headingsNote}
            </p>
          </CardBody>
        </Card>

        {set.teil1.texts.map((txt) => {
          const r = resultFor(txt.nr);
          return (
            <Card key={txt.nr} className={r ? edge(r.correct) : undefined}>
              <CardBody className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Badge tone="neutral">{txt.nr}</Badge>
                </div>
                <ReadingText text={txt.text} glossary={set.glossary} explainLang={explainLang} />

                <div className="flex flex-wrap gap-1.5">
                  {set.teil1.headings.map((h) => {
                    const chosen = answers[String(txt.nr)] === h.key;
                    const isAns = r && h.key === txt.answerKey;
                    return (
                      <button
                        key={h.key}
                        type="button"
                        disabled={Boolean(result) || busy}
                        onClick={() => set1(txt.nr, h.key)}
                        className={cn(
                          "h-9 w-9 rounded-[var(--radius-control)] border font-[family-name:var(--font-mono)] text-[13px] font-semibold transition-colors",
                          !result && (chosen ? "border-iris bg-iris text-white" : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft"),
                          result && isAns && "border-sage bg-sage text-white",
                          result && chosen && !isAns && "border-clay bg-clay text-white",
                          result && !chosen && !isAns && "border-line bg-surface text-ink-faint",
                        )}
                      >
                        {h.key}
                      </button>
                    );
                  })}
                </div>

                {r ? <Why r={r} bn={bn} /> : null}
              </CardBody>
            </Card>
          );
        })}
      </section>

      {/* ---- Teil 2 — long text -------------------------------------- */}
      <section className="flex flex-col gap-3">
        <PartHead n={2} label={t.lesen.teil2} hint={pick(set.teil2.instruction, explainLang)} bn={bn} />

        <Card>
          <CardBody>
            <h3 className="prose-de mb-2 text-[16px] font-bold">{set.teil2.heading}</h3>
            <ReadingText text={set.teil2.text} glossary={set.glossary} explainLang={explainLang} />
          </CardBody>
        </Card>

        {set.teil2.questions.map((q) => {
          const r = resultFor(q.nr);
          return (
            <Card key={q.nr} className={r ? edge(r.correct) : undefined}>
              <CardBody className="flex flex-col gap-2.5 p-4">
                <p className="prose-de text-[15px] font-semibold">
                  <span className="mr-1.5 font-[family-name:var(--font-mono)] text-[13px] text-ink-faint">
                    {q.nr}
                  </span>
                  {q.question}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {q.options.map((opt, oi) => {
                    const chosen = answers[String(q.nr)] === String(oi);
                    const isAns = r && oi === q.answerIndex;
                    return (
                      <li key={oi}>
                        <button
                          type="button"
                          disabled={Boolean(result) || busy}
                          onClick={() => set1(q.nr, String(oi))}
                          className={cn(
                            "flex w-full items-start gap-2.5 rounded-[var(--radius-control)] border px-3.5 py-2.5 text-left text-[14.5px] transition-colors",
                            !result && (chosen ? "border-iris bg-iris text-white" : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft"),
                            result && isAns && "border-sage bg-sage-soft",
                            result && chosen && !isAns && "border-clay bg-clay-soft",
                            result && !chosen && !isAns && "border-line bg-surface text-ink-faint",
                          )}
                        >
                          <span className="font-[family-name:var(--font-mono)] text-[12px] opacity-70">
                            {String.fromCharCode(97 + oi)})
                          </span>
                          <span className="prose-de">{opt}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {r ? <Why r={r} bn={bn} /> : null}
              </CardBody>
            </Card>
          );
        })}
      </section>

      {/* ---- Teil 3 — adverts ---------------------------------------- */}
      <section className="flex flex-col gap-3">
        <PartHead n={3} label={t.lesen.teil3} hint={pick(set.teil3.instruction, explainLang)} bn={bn} />

        <div className="grid gap-2 sm:grid-cols-2">
          {set.teil3.anzeigen.map((ad) => (
            <Card key={ad.key} className="bg-surface-2">
              <CardBody className="p-3.5">
                <p className="prose-de text-[14.5px] font-bold">
                  <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
                    {ad.key}){" "}
                  </span>
                  {ad.title}
                </p>
                <div className="mt-1">
                  <ReadingText
                    text={ad.text}
                    glossary={set.glossary}
                    explainLang={explainLang}
                    className="text-[13.5px] leading-relaxed"
                  />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <ol className="flex flex-col gap-2">
          {set.teil3.situations.map((sit) => {
            const r = resultFor(sit.nr);
            const chosen = answers[String(sit.nr)] ?? "";
            return (
              <li key={sit.nr}>
                <Card className={r ? edge(r.correct) : undefined}>
                  <CardBody className="flex flex-col gap-2.5 p-4">
                    <p className="prose-de text-[14.5px]">
                      <span className="mr-1.5 font-[family-name:var(--font-mono)] text-[13px] font-bold text-ink-faint">
                        {sit.nr}
                      </span>
                      {sit.text}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="sr-only" htmlFor={`sit-${sit.nr}`}>
                        {t.lesen.chooseAd} {sit.nr}
                      </label>
                      <select
                        id={`sit-${sit.nr}`}
                        value={chosen}
                        disabled={Boolean(result) || busy}
                        onChange={(e) => set1(sit.nr, e.target.value)}
                        className="prose-de min-w-[13rem] rounded-[var(--radius-control)] border border-line bg-surface px-3 py-2 text-[14.5px]"
                      >
                        <option value="">— {t.lesen.chooseAd} —</option>
                        {set.teil3.anzeigen.map((ad) => (
                          <option key={ad.key} value={ad.key}>
                            {ad.key}) {ad.title}
                          </option>
                        ))}
                        <option value="x">x) {t.lesen.noneFits}</option>
                      </select>
                    </div>
                    {r ? <Why r={r} bn={bn} /> : null}
                  </CardBody>
                </Card>
              </li>
            );
          })}
        </ol>
      </section>

      {error ? (
        <p role="alert" className="rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-4 py-3 text-[14px] text-clay">
          {error}
        </p>
      ) : null}

      {!result ? (
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" onClick={submit} disabled={busy || answered === 0}>
            {busy ? t.common.oneMoment : t.lesen.submit}
          </Button>
          <span className={cn("tnum text-[13px] text-ink-faint", bn && "bn")}>
            {answered}/20 {t.lesen.answered}
          </span>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ScoreCard({ result, bn }: { result: LesenResult; bn: boolean }) {
  const { t } = useI18n();
  const pct = Math.round((result.correct / (result.total || 1)) * 100);

  return (
    <Card className={pct >= 60 ? "border-sage/40 bg-sage-soft" : "border-clay/30 bg-clay-soft"}>
      <CardBody className="flex flex-col gap-3">
        <div>
          <span className="label">{t.lesen.yourScore}</span>
          <p className="tnum text-[26px] font-bold leading-none">
            {result.points} <span className="text-ink-faint">/ {result.maxPoints}</span>
          </p>
          <p className="tnum mt-1 text-[14px] text-ink-soft">
            {result.correct}/{result.total} · {pct}%
          </p>
        </div>

        {/* Which of the three parts is actually weak. */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-2.5">
          {([1, 2, 3] as const).map((n) => (
            <span key={n} className="tnum text-[13px] text-ink-soft">
              {t.lesen.part} {n}:{" "}
              <strong className={result.byTeil[n].correct / (result.byTeil[n].total || 1) >= 0.6 ? "text-sage" : "text-clay"}>
                {result.byTeil[n].correct}/{result.byTeil[n].total}
              </strong>
            </span>
          ))}
        </div>

        <p className={cn("text-[13px] text-ink-soft", bn && "bn")}>{t.lesen.scoreNote}</p>
      </CardBody>
    </Card>
  );
}

function PartHead({ n, label, hint, bn }: { n: number; label: string; hint: string; bn: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-2">
        <h2 className={cn("text-[18px] font-bold", bn && "bn")}>
          {label}
        </h2>
        <Badge tone="neutral">{n === 2 ? "5" : n === 1 ? "5" : "10"} Items</Badge>
      </div>
      <p className={cn("max-w-[64ch] text-[13.5px] text-ink-soft", bn && "bn")}>{hint}</p>
    </div>
  );
}

function Why({
  r,
  bn,
}: {
  r: { correct: boolean; given: string; answer: string; why: Multi };
  bn: boolean;
}) {
  const { lang } = useI18n();
  return (
    <div className={cn("rounded-[var(--radius-control)] px-3 py-2.5", r.correct ? "bg-sage-soft" : "bg-clay-soft")}>
      <p className="flex flex-wrap items-center gap-2 text-[13.5px] font-semibold">
        {r.correct ? <Check size={14} className="text-sage" aria-hidden /> : <X size={14} className="text-clay" aria-hidden />}
        {r.correct ? (
          <span className="text-sage">{r.answer}</span>
        ) : (
          <span>
            <span className="text-clay line-through">{r.given || "—"}</span>
            {" → "}
            <span className="text-sage">{r.answer}</span>
          </span>
        )}
      </p>
      <p className={cn("mt-1 text-[13.5px] leading-relaxed text-ink", bn && "bn")}>
        {pick(r.why, lang as Lang)}
      </p>
    </div>
  );
}

function edge(correct: boolean) {
  return correct ? "border-sage/35" : "border-clay/35";
}
