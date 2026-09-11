"use client";

import { useMemo, useState } from "react";
import { Check, X, AlertTriangle } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import { splitGaps, type SbSet } from "@/content/sprachbausteine";
import { gradeSbSet, type SbResult } from "@/app/(b1)/sprachbausteine/actions";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * A Sprachbausteine set, laid out like the printed paper.
 *
 * The text carries numbered gaps and the answers are chosen below it,
 * rather than inline. That is not a compromise for small screens — it is
 * how the exam itself is set out, and practising the same eye movement is
 * part of the point.
 *
 * Everything is answered first and graded at the end, again like the real
 * paper. Immediate per-gap feedback would teach a rhythm the exam will
 * not allow.
 */
export function SbRunner({
  set,
  explainLang,
}: {
  set: SbSet;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<SbResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const bn = explainLang === "bn";

  const answered = Object.values(answers).filter(Boolean).length;

  // Each bank word may be used only once. Flag repeats rather than
  // blocking them: in the exam nobody stops you either.
  const duplicateKeys = useMemo(() => {
    const t2 = set.teil2.items.map((i) => String(i.nr));
    const used = t2.map((nr) => answers[nr]).filter(Boolean);
    return new Set(used.filter((v, i) => used.indexOf(v) !== i));
  }, [answers, set.teil2.items]);

  async function submit() {
    setBusy(true);
    setError("");
    try {
      const res = await gradeSbSet(set.code, answers);
      if ("error" in res) setError(res.error);
      else {
        setResult(res);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError(t.sb.gradeFailed);
    } finally {
      setBusy(false);
    }
  }

  const resultFor = (nr: number) => result?.items.find((i) => i.nr === nr);

  return (
    <div className="flex flex-col gap-6">
      {result ? <ScoreCard result={result} bn={bn} /> : null}

      {/* ---- Teil 1 ------------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <PartHeading
          label={t.sb.teil1}
          hint={t.sb.teil1Hint}
          bn={bn}
        />

        <Card>
          <CardBody>
            <h3 className="prose-de mb-2 text-[15px] font-bold">
              {set.teil1.heading}
            </h3>
            <GappedText text={set.teil1.text} answers={answers} result={result} />
          </CardBody>
        </Card>

        <ol className="flex flex-col gap-2">
          {set.teil1.items.map((item) => {
            const r = resultFor(item.nr);
            return (
              <li key={item.nr}>
                <Card className={r ? borderFor(r.correct) : undefined}>
                  <CardBody className="flex flex-col gap-2.5 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="tnum font-[family-name:var(--font-mono)] text-[13px] font-bold text-ink-faint">
                        {item.nr}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.options.map((opt, oi) => {
                          const chosen = answers[String(item.nr)] === String(oi);
                          const isAnswer = r && oi === item.answerIndex;
                          return (
                            <button
                              key={oi}
                              type="button"
                              disabled={Boolean(result) || busy}
                              onClick={() =>
                                setAnswers((p) => ({ ...p, [item.nr]: String(oi) }))
                              }
                              className={cn(
                                "prose-de rounded-[var(--radius-control)] border px-3 py-2 text-[14.5px] transition-colors",
                                !result &&
                                  (chosen
                                    ? "border-iris bg-iris text-white"
                                    : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft"),
                                result && isAnswer && "border-sage bg-sage text-white",
                                result &&
                                  chosen &&
                                  !isAnswer &&
                                  "border-clay bg-clay text-white",
                                result && !chosen && !isAnswer && "border-line bg-surface text-ink-faint",
                              )}
                            >
                              {String.fromCharCode(97 + oi)}) {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {r ? <Why r={r} bn={bn} /> : null}
                  </CardBody>
                </Card>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ---- Teil 2 ------------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <PartHeading label={t.sb.teil2} hint={t.sb.teil2Hint} bn={bn} />

        <Card>
          <CardBody>
            <h3 className="prose-de mb-2 text-[15px] font-bold">
              {set.teil2.heading}
            </h3>
            <GappedText text={set.teil2.text} answers={answers} result={result} bank={set.teil2.bank} />
          </CardBody>
        </Card>

        {/* The shared bank. Five of these fifteen are never the answer. */}
        <Card className="bg-surface-2">
          <CardBody className="p-4">
            <span className="label">{t.sb.wordBank}</span>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
              {set.teil2.bank.map((b) => {
                const used = Object.values(answers).includes(b.key);
                return (
                  <span
                    key={b.key}
                    className={cn(
                      "prose-de text-[14.5px]",
                      used && !result && "text-ink-faint line-through",
                    )}
                  >
                    <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
                      {b.key}){" "}
                    </span>
                    {b.word}
                  </span>
                );
              })}
            </div>
            <p className={cn("mt-2.5 text-[12.5px] text-ink-faint", bn && "bn")}>
              {t.sb.bankNote}
            </p>
          </CardBody>
        </Card>

        <ol className="flex flex-col gap-2">
          {set.teil2.items.map((item) => {
            const r = resultFor(item.nr);
            const chosen = answers[String(item.nr)] ?? "";
            const isDuplicate = chosen && duplicateKeys.has(chosen);

            return (
              <li key={item.nr}>
                <Card className={r ? borderFor(r.correct) : undefined}>
                  <CardBody className="flex flex-col gap-2 p-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="tnum font-[family-name:var(--font-mono)] text-[13px] font-bold text-ink-faint">
                        {item.nr}
                      </span>
                      <label className="sr-only" htmlFor={`gap-${item.nr}`}>
                        {t.sb.chooseWord} {item.nr}
                      </label>
                      <select
                        id={`gap-${item.nr}`}
                        value={chosen}
                        disabled={Boolean(result) || busy}
                        onChange={(e) =>
                          setAnswers((p) => ({ ...p, [item.nr]: e.target.value }))
                        }
                        className={cn(
                          "prose-de min-w-[11rem] rounded-[var(--radius-control)] border bg-surface px-3 py-2 text-[15px]",
                          isDuplicate && !result ? "border-amber" : "border-line",
                        )}
                      >
                        <option value="">— {t.sb.chooseWord} —</option>
                        {set.teil2.bank.map((b) => (
                          <option key={b.key} value={b.key}>
                            {b.key}) {b.word}
                          </option>
                        ))}
                      </select>

                      {isDuplicate && !result ? (
                        <span className="inline-flex items-center gap-1 text-[12.5px] text-amber">
                          <AlertTriangle size={13} aria-hidden />
                          {t.sb.usedTwice}
                        </span>
                      ) : null}
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
        <p
          role="alert"
          className="rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-4 py-3 text-[14px] text-clay"
        >
          {error}
        </p>
      ) : null}

      {!result ? (
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" onClick={submit} disabled={busy || answered === 0}>
            {busy ? t.common.oneMoment : t.sb.submit}
          </Button>
          <span className={cn("tnum text-[13px] text-ink-faint", bn && "bn")}>
            {answered}/20 {t.sb.answered}
          </span>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ScoreCard({ result, bn }: { result: SbResult; bn: boolean }) {
  const { t } = useI18n();
  const pct = Math.round((result.correct / (result.total || 1)) * 100);
  const good = pct >= 60;

  return (
    <Card className={good ? "border-sage/40 bg-sage-soft" : "border-clay/30 bg-clay-soft"}>
      <CardBody className="flex flex-col gap-2">
        <span className="label">{t.sb.yourScore}</span>
        <p className="tnum text-[26px] font-bold leading-none">
          {result.points} <span className="text-ink-faint">/ {result.maxPoints}</span>
        </p>
        <p className="tnum text-[14px] text-ink-soft">
          {result.correct}/{result.total} · {pct}%
        </p>
        <p className={cn("mt-1 text-[13px] text-ink-soft", bn && "bn")}>
          {t.sb.scoreNote}
        </p>
      </CardBody>
    </Card>
  );
}

function PartHeading({
  label,
  hint,
  bn,
}: {
  label: string;
  hint: string;
  bn: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-2">
        <h2 className={cn("text-[18px] font-bold", bn && "bn")}>{label}</h2>
        <Badge tone="neutral">10 × 1,5 P.</Badge>
      </div>
      <p className={cn("max-w-[62ch] text-[13.5px] text-ink-soft", bn && "bn")}>{hint}</p>
    </div>
  );
}

function Why({ r, bn }: { r: { correct: boolean; given: string; answer: string; why: import("@/lib/types").Multi }; bn: boolean }) {
  const { lang } = useI18n();
  return (
    <div
      className={cn(
        "rounded-[var(--radius-control)] px-3 py-2.5",
        r.correct ? "bg-sage-soft" : "bg-clay-soft",
      )}
    >
      <p className="flex flex-wrap items-center gap-2 text-[13.5px]">
        {r.correct ? (
          <Check size={14} className="text-sage" aria-hidden />
        ) : (
          <X size={14} className="text-clay" aria-hidden />
        )}
        {!r.correct ? (
          <span className="prose-de">
            <span className="text-clay line-through">{r.given || "—"}</span>
            {" → "}
            <strong className="text-sage">{r.answer}</strong>
          </span>
        ) : (
          <span className="prose-de font-semibold text-sage">{r.answer}</span>
        )}
      </p>
      <p className={cn("mt-1 text-[13.5px] leading-relaxed text-ink", bn && "bn")}>
        {pick(r.why, lang as Lang)}
      </p>
    </div>
  );
}

/**
 * Render a text whose gaps are written as {1} … {20}.
 *
 * Before grading each gap shows the learner's own choice, so the text can
 * be read back as a whole sentence — which is how you catch an answer
 * that is grammatically fine but makes no sense in context.
 */
function GappedText({
  text,
  answers,
  result,
  bank,
}: {
  text: string;
  answers: Record<string, string>;
  result: SbResult | null;
  bank?: { key: string; word: string }[];
}) {
  const parts = splitGaps(text);

  return (
    <p className="prose-de whitespace-pre-line text-[16px] leading-[1.9]">
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;

        const chosen = answers[String(part)] ?? "";
        const shown = bank
          ? (bank.find((b) => b.key === chosen)?.word ?? "")
          : chosen;
        const r = result?.items.find((it) => it.nr === part);

        return (
          <span
            key={i}
            className={cn(
              "mx-0.5 inline-flex min-w-[4.5rem] items-baseline justify-center gap-1 rounded border-b-2 px-1.5 text-center font-semibold",
              !r && (shown ? "border-iris text-iris" : "border-line-strong text-ink-faint"),
              r && (r.correct ? "border-sage text-sage" : "border-clay text-clay"),
            )}
          >
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-ink-faint">
              {part}
            </span>
            {shown || (r ? r.answer : "  ")}
          </span>
        );
      })}
    </p>
  );
}

function borderFor(correct: boolean) {
  return correct ? "border-sage/35" : "border-clay/35";
}
