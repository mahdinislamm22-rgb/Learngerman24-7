"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { Modelltest } from "@/content/modelltests";
import { MT_MINUTES } from "@/content/modelltests";
import { splitGaps } from "@/content/sprachbausteine";
import { gradeModelltest, type MtResult } from "@/app/(b1)/pruefungen/actions";
import { ReadingText } from "@/components/lesen/reading-text";
import { SpeechPlayer } from "@/components/hoeren/speech-player";
import { ExamResult } from "./exam-result";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

type Stage = "intro" | "lesenSb" | "hoeren" | "schreiben" | "grading" | "result";

/**
 * A full written telc B1 paper under exam conditions.
 *
 * Three things make this different from practising a section on its own,
 * and all three are the point:
 *
 *   1. NO FEEDBACK UNTIL THE END. You cannot learn to sit an exam while
 *      being told after every question whether you were right.
 *   2. REAL TIMING. Ninety minutes for Lesen and Sprachbausteine together,
 *      thirty for the letter. Most candidates who fail do not fail on
 *      German — they fail on time, so the clock is part of the practice.
 *   3. ONE SCORE OUT OF 225, against the real pass mark of 135.
 *
 * The timer warns but never locks you out. Being thrown out of your own
 * practice mid-sentence teaches nothing except not to practise.
 */
export function ExamRunner({
  mt,
  explainLang,
}: {
  mt: Modelltest;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [stage, setStage] = useState<Stage>("intro");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [text, setText] = useState("");
  const [result, setResult] = useState<MtResult | null>(null);
  const [error, setError] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const spent = useRef({ lesenSb: 0, hoeren: 0, schreiben: 0 });

  const bn = explainLang === "bn";
  const set = (k: string, v: string) => setAnswers((p) => ({ ...p, [k]: v }));

  const limits: Record<string, number> = {
    lesenSb: MT_MINUTES.lesenUndSprachbausteine * 60,
    hoeren: MT_MINUTES.hoeren * 60,
    schreiben: MT_MINUTES.schreiben * 60,
  };

  // One clock, restarted at each stage. setState lives in the interval
  // callback, not the effect body, so it does not cascade renders.
  useEffect(() => {
    if (stage !== "lesenSb" && stage !== "hoeren" && stage !== "schreiben") return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [stage]);

  function goTo(next: Stage) {
    if (stage === "lesenSb") spent.current.lesenSb = elapsed;
    if (stage === "hoeren") spent.current.hoeren = elapsed;
    if (stage === "schreiben") spent.current.schreiben = elapsed;
    setElapsed(0);
    setStage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit() {
    spent.current.schreiben = elapsed;
    setStage("grading");
    setError("");
    try {
      const res = await gradeModelltest({
        code: mt.code,
        answers,
        schreibenText: text,
        seconds: { ...spent.current },
      });
      if ("error" in res) {
        setError(res.error);
        setStage("schreiben");
      } else {
        setResult(res);
        setStage("result");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError(t.pruefungen.gradeFailed);
      setStage("schreiben");
    }
  }

  if (stage === "result" && result) {
    return <ExamResult mt={mt} result={result} explainLang={explainLang} />;
  }

  if (stage === "grading") {
    return (
      <Card className="border-iris-line bg-iris-soft">
        <CardBody className="flex flex-col gap-2 py-8 text-center">
          <p className="text-[17px] font-bold">{t.pruefungen.grading}</p>
          <p className={cn("text-[14px] text-ink-soft", bn && "bn")}>
            {t.pruefungen.gradingNote}
          </p>
        </CardBody>
      </Card>
    );
  }

  if (stage === "intro") {
    return (
      <div className="flex flex-col gap-4">
        <Card className="border-iris-line bg-iris-soft">
          <CardBody className="flex flex-col gap-3">
            <span className="label text-iris">{t.pruefungen.beforeYouStart}</span>
            <ul className={cn("flex flex-col gap-1.5 text-[14.5px] leading-relaxed", bn && "bn")}>
              <li>· {t.pruefungen.rule1}</li>
              <li>· {t.pruefungen.rule2}</li>
              <li>· {t.pruefungen.rule3}</li>
              <li>· {t.pruefungen.rule4}</li>
            </ul>
          </CardBody>
        </Card>

        <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
          <table className="w-full border-collapse text-left text-[14px]">
            <thead>
              <tr className="bg-surface-2">
                <th className="px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft">
                  {t.dash.colPart}
                </th>
                <th className="px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft">
                  {t.dash.colPoints}
                </th>
                <th className="px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft">
                  {t.dash.colTime}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-line bg-surface">
                <td className="px-3.5 py-2.5 font-semibold">Leseverstehen</td>
                <td className="tnum px-3.5 py-2.5">75</td>
                <td rowSpan={2} className="px-3.5 py-2.5 align-middle text-ink-soft">
                  90 min {t.dash.inBlock}
                </td>
              </tr>
              <tr className="border-t border-line bg-surface">
                <td className="px-3.5 py-2.5 font-semibold">Sprachbausteine</td>
                <td className="tnum px-3.5 py-2.5">30</td>
              </tr>
              <tr className="border-t border-line bg-surface">
                <td className="px-3.5 py-2.5 font-semibold">Hörverstehen</td>
                <td className="tnum px-3.5 py-2.5">75</td>
                <td className="px-3.5 py-2.5 text-ink-soft">30 min</td>
              </tr>
              <tr className="border-t border-line bg-surface">
                <td className="px-3.5 py-2.5 font-semibold">Schriftlicher Ausdruck</td>
                <td className="tnum px-3.5 py-2.5">45</td>
                <td className="px-3.5 py-2.5 text-ink-soft">30 min</td>
              </tr>
              <tr className="border-t border-line bg-surface-2">
                <td className="px-3.5 py-2.5 font-bold">{t.pruefungen.passLine}</td>
                <td className="tnum px-3.5 py-2.5 font-bold">135 / 225</td>
                <td className="px-3.5 py-2.5" />
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <Button size="lg" onClick={() => goTo("lesenSb")}>
            {t.pruefungen.startExam}
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </div>
    );
  }

  const limit = limits[stage] ?? 0;
  const over = elapsed > limit;

  return (
    <div className="flex flex-col gap-5">
      {/* ---- clock ---------------------------------------------------- */}
      <div className="sticky top-0 z-20 -mx-1 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[var(--radius-card)] border border-line bg-surface/95 px-4 py-3 backdrop-blur">
        <span
          className={cn(
            "tnum inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[15px] font-semibold",
            over ? "text-clay" : "text-ink",
          )}
        >
          <Clock size={15} aria-hidden />
          {over ? "+" : ""}
          {fmt(over ? elapsed - limit : limit - elapsed)}
        </span>
        <Badge tone="neutral">
          {stage === "lesenSb"
            ? "Lesen + Sprachbausteine"
            : stage === "hoeren"
              ? "Hörverstehen"
              : "Schriftlicher Ausdruck"}
        </Badge>
        {over ? (
          <span className="inline-flex items-center gap-1 text-[12.5px] text-clay">
            <AlertTriangle size={13} aria-hidden />
            {t.pruefungen.overtime}
          </span>
        ) : null}
      </div>

      {stage === "lesenSb" ? (
        <LesenSbStage mt={mt} answers={answers} set={set} explainLang={explainLang} />
      ) : null}

      {stage === "hoeren" ? (
        <HoerenStage mt={mt} answers={answers} set={set} explainLang={explainLang} />
      ) : null}

      {stage === "schreiben" ? (
        <SchreibenStage mt={mt} text={text} setText={setText} explainLang={explainLang} />
      ) : null}

      {error ? (
        <p role="alert" className="rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-4 py-3 text-[14px] text-clay">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
        {stage === "lesenSb" ? (
          <Button size="lg" onClick={() => goTo("hoeren")}>
            {t.pruefungen.toListening}
            <ArrowRight size={16} aria-hidden />
          </Button>
        ) : null}
        {stage === "hoeren" ? (
          <Button size="lg" onClick={() => goTo("schreiben")}>
            {t.pruefungen.toWriting}
            <ArrowRight size={16} aria-hidden />
          </Button>
        ) : null}
        {stage === "schreiben" ? (
          <Button size="lg" onClick={submit}>
            {t.pruefungen.finishExam}
          </Button>
        ) : null}
        <span className={cn("text-[13px] text-ink-faint", bn && "bn")}>
          {t.pruefungen.noGoingBack}
        </span>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Stage 1 — Leseverstehen and Sprachbausteine                         */
/* ================================================================== */

function LesenSbStage({
  mt,
  answers,
  set,
  explainLang,
}: {
  mt: Modelltest;
  answers: Record<string, string>;
  set: (k: string, v: string) => void;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const bn = explainLang === "bn";
  const g = mt.lesen;

  return (
    <div className="flex flex-col gap-7">
      {/* ---- Lesen Teil 1 -------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <Head n="Leseverstehen, Teil 1" hint={pick(g.teil1.instruction, explainLang)} bn={bn} />
        <Card className="bg-surface-2">
          <CardBody className="p-4">
            <ul className="flex flex-col gap-1">
              {g.teil1.headings.map((h) => (
                <li key={h.key} className="prose-de text-[14.5px]">
                  <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">{h.key}) </span>
                  {h.text}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        {g.teil1.texts.map((txt) => (
          <Card key={txt.nr}>
            <CardBody className="flex flex-col gap-3">
              <Badge tone="neutral">{txt.nr}</Badge>
              <ReadingText text={txt.text} glossary={g.glossary} explainLang={explainLang} />
              <div className="flex flex-wrap gap-1.5">
                {g.teil1.headings.map((h) => (
                  <Pick
                    key={h.key}
                    label={h.key}
                    active={answers[`lesen:${txt.nr}`] === h.key}
                    onClick={() => set(`lesen:${txt.nr}`, h.key)}
                  />
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </section>

      {/* ---- Lesen Teil 2 -------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <Head n="Leseverstehen, Teil 2" hint={pick(g.teil2.instruction, explainLang)} bn={bn} />
        <Card>
          <CardBody>
            <h3 className="prose-de mb-2 text-[16px] font-bold">{g.teil2.heading}</h3>
            <ReadingText text={g.teil2.text} glossary={g.glossary} explainLang={explainLang} />
          </CardBody>
        </Card>
        {g.teil2.questions.map((q) => (
          <Card key={q.nr}>
            <CardBody className="flex flex-col gap-2 p-4">
              <p className="prose-de text-[15px] font-semibold">
                <span className="mr-1.5 font-[family-name:var(--font-mono)] text-[13px] text-ink-faint">{q.nr}</span>
                {q.question}
              </p>
              <ul className="flex flex-col gap-1.5">
                {q.options.map((opt, oi) => (
                  <li key={oi}>
                    <Option
                      text={`${String.fromCharCode(97 + oi)}) ${opt}`}
                      active={answers[`lesen:${q.nr}`] === String(oi)}
                      onClick={() => set(`lesen:${q.nr}`, String(oi))}
                    />
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </section>

      {/* ---- Lesen Teil 3 -------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <Head n="Leseverstehen, Teil 3" hint={pick(g.teil3.instruction, explainLang)} bn={bn} />
        <div className="grid gap-2 sm:grid-cols-2">
          {g.teil3.anzeigen.map((ad) => (
            <Card key={ad.key} className="bg-surface-2">
              <CardBody className="p-3.5">
                <p className="prose-de text-[14.5px] font-bold">
                  <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">{ad.key}) </span>
                  {ad.title}
                </p>
                <div className="mt-1">
                  <ReadingText text={ad.text} glossary={g.glossary} explainLang={explainLang} className="text-[13.5px] leading-relaxed" />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        {g.teil3.situations.map((sit) => (
          <Card key={sit.nr}>
            <CardBody className="flex flex-col gap-2 p-4">
              <p className="prose-de text-[14.5px]">
                <span className="mr-1.5 font-[family-name:var(--font-mono)] text-[13px] font-bold text-ink-faint">{sit.nr}</span>
                {sit.text}
              </p>
              <select
                value={answers[`lesen:${sit.nr}`] ?? ""}
                onChange={(e) => set(`lesen:${sit.nr}`, e.target.value)}
                aria-label={`${t.lesen.chooseAd} ${sit.nr}`}
                className="prose-de min-w-[13rem] rounded-[var(--radius-control)] border border-line bg-surface px-3 py-2 text-[14.5px]"
              >
                <option value="">— {t.lesen.chooseAd} —</option>
                {g.teil3.anzeigen.map((ad) => (
                  <option key={ad.key} value={ad.key}>{ad.key}) {ad.title}</option>
                ))}
                <option value="x">x) {t.lesen.noneFits}</option>
              </select>
            </CardBody>
          </Card>
        ))}
      </section>

      {/* ---- Sprachbausteine ----------------------------------------- */}
      <section className="flex flex-col gap-3">
        <Head n="Sprachbausteine, Teil 1" hint={t.sb.teil1Hint} bn={bn} />
        <Card>
          <CardBody>
            <h3 className="prose-de mb-2 text-[15px] font-bold">{mt.sprachbausteine.teil1.heading}</h3>
            <GapText text={mt.sprachbausteine.teil1.text} />
          </CardBody>
        </Card>
        {mt.sprachbausteine.teil1.items.map((item) => (
          <Card key={item.nr}>
            <CardBody className="flex flex-wrap items-center gap-2 p-4">
              <span className="tnum font-[family-name:var(--font-mono)] text-[13px] font-bold text-ink-faint">{item.nr}</span>
              {item.options.map((opt, oi) => (
                <Pick
                  key={oi}
                  label={`${String.fromCharCode(97 + oi)}) ${opt}`}
                  active={answers[`sb:${item.nr}`] === String(oi)}
                  onClick={() => set(`sb:${item.nr}`, String(oi))}
                  wide
                />
              ))}
            </CardBody>
          </Card>
        ))}

        <Head n="Sprachbausteine, Teil 2" hint={t.sb.teil2Hint} bn={bn} />
        <Card>
          <CardBody>
            <h3 className="prose-de mb-2 text-[15px] font-bold">{mt.sprachbausteine.teil2.heading}</h3>
            <GapText text={mt.sprachbausteine.teil2.text} />
          </CardBody>
        </Card>
        <Card className="bg-surface-2">
          <CardBody className="p-4">
            <span className="label">{t.sb.wordBank}</span>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
              {mt.sprachbausteine.teil2.bank.map((b) => (
                <span key={b.key} className="prose-de text-[14.5px]">
                  <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">{b.key}) </span>
                  {b.word}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
        {mt.sprachbausteine.teil2.items.map((item) => (
          <Card key={item.nr}>
            <CardBody className="flex flex-wrap items-center gap-2.5 p-4">
              <span className="tnum font-[family-name:var(--font-mono)] text-[13px] font-bold text-ink-faint">{item.nr}</span>
              <select
                value={answers[`sb:${item.nr}`] ?? ""}
                onChange={(e) => set(`sb:${item.nr}`, e.target.value)}
                aria-label={`${t.sb.chooseWord} ${item.nr}`}
                className="prose-de min-w-[11rem] rounded-[var(--radius-control)] border border-line bg-surface px-3 py-2 text-[15px]"
              >
                <option value="">— {t.sb.chooseWord} —</option>
                {mt.sprachbausteine.teil2.bank.map((b) => (
                  <option key={b.key} value={b.key}>{b.key}) {b.word}</option>
                ))}
              </select>
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}

/* ================================================================== */
/* Stage 2 — Hörverstehen                                              */
/* ================================================================== */

function HoerenStage({
  mt,
  answers,
  set,
  explainLang,
}: {
  mt: Modelltest;
  answers: Record<string, string>;
  set: (k: string, v: string) => void;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const bn = explainLang === "bn";

  return (
    <div className="flex flex-col gap-6">
      <p className={cn("rounded-[var(--radius-control)] bg-iris-soft px-3.5 py-2.5 text-[13.5px]", bn && "bn")}>
        {t.hoeren.onceHint}
      </p>
      {mt.hoeren.teile.map((teil) => (
        <section key={teil.teil} className="flex flex-col gap-3">
          <Head
            n={`Hörverstehen, Teil ${teil.teil}`}
            hint={pick(teil.instruction, explainLang)}
            bn={bn}
          />
          {teil.tracks.map((track) => (
            <Card key={track.id}>
              <CardBody className="flex flex-col gap-3">
                <SpeechPlayer
                  transcript={track.transcript}
                  maxPlays={teil.maxPlays}
                  label={pick(track.label, explainLang)}
                />
                <ul className="flex flex-col gap-2">
                  {track.items.map((item) => (
                    <li key={item.nr} className="rounded-[var(--radius-control)] border border-line p-3">
                      <p className="prose-de text-[14.5px]">
                        <span className="mr-1.5 font-[family-name:var(--font-mono)] text-[12.5px] font-bold text-ink-faint">{item.nr}</span>
                        {item.statement}
                      </p>
                      <div className="mt-2 flex gap-2">
                        {[true, false].map((v) => (
                          <Pick
                            key={String(v)}
                            label={v ? "richtig" : "falsch"}
                            active={answers[`hoeren:${item.nr}`] === String(v)}
                            onClick={() => set(`hoeren:${item.nr}`, String(v))}
                            wide
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </section>
      ))}
    </div>
  );
}

/* ================================================================== */
/* Stage 3 — Schriftlicher Ausdruck                                    */
/* ================================================================== */

function SchreibenStage({
  mt,
  text,
  setText,
  explainLang,
}: {
  mt: Modelltest;
  text: string;
  setText: (v: string) => void;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const bn = explainLang === "bn";
  const task = mt.schreiben;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardBody className="flex flex-col gap-3">
          <p className={cn("text-[15px] text-ink-soft", bn && "bn")}>
            {pick(task.situation, explainLang)}
          </p>
          <p className="prose-de border-l-[3px] border-iris pl-3.5 text-[16px] leading-relaxed">
            {task.taskDe}
          </p>
        </CardBody>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[1fr_250px]">
        <div className="flex flex-col gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
            placeholder={`${task.anrede}\n\n…`}
            className="prose-de min-h-[400px] w-full resize-y rounded-[var(--radius-card)] border border-line bg-surface p-4 text-[16px] leading-relaxed text-ink placeholder:text-ink-faint focus:border-iris-line"
          />
          <p className="tnum text-[13px] text-ink-faint">
            {words} / {task.targetWords} {t.schreiben.words}
          </p>
        </div>

        <aside className="flex flex-col gap-3">
          <Card>
            <CardBody className="p-4">
              <span className="label">{t.schreiben.leitpunkte}</span>
              <ul className="mt-2 flex flex-col gap-2">
                {task.leitpunkte.map((p, i) => (
                  <li key={i} className="prose-de text-[13.5px] leading-snug">· {p}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4">
              <span className="label">{t.schreiben.register}</span>
              <p className="prose-de mt-1.5 text-[14px] font-semibold">{task.anrede}</p>
              <p className="prose-de mt-1 whitespace-pre-line text-[14px] text-ink-soft">{task.gruss}</p>
            </CardBody>
          </Card>
        </aside>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Head({ n, hint, bn }: { n: string; hint: string; bn: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-[17px] font-bold">{n}</h2>
      <p className={cn("max-w-[64ch] text-[13.5px] text-ink-soft", bn && "bn")}>{hint}</p>
    </div>
  );
}

function Pick({
  label,
  active,
  onClick,
  wide,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[var(--radius-control)] border font-[family-name:var(--font-mono)] text-[13px] font-semibold transition-colors",
        wide ? "prose-de px-3 py-2 text-[14px]" : "h-9 w-9",
        active
          ? "border-iris bg-iris text-white"
          : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
      )}
    >
      {label}
    </button>
  );
}

function Option({ text, active, onClick }: { text: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "prose-de flex w-full items-start gap-2 rounded-[var(--radius-control)] border px-3.5 py-2.5 text-left text-[14.5px] transition-colors",
        active
          ? "border-iris bg-iris text-white"
          : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft",
      )}
    >
      {text}
    </button>
  );
}

/** Sprachbausteine text with its gaps shown as numbers only. */
function GapText({ text }: { text: string }) {
  return (
    <p className="prose-de whitespace-pre-line text-[16px] leading-[1.9]">
      {splitGaps(text).map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span
            key={i}
            className="mx-0.5 inline-block min-w-[3.5rem] rounded border-b-2 border-line-strong px-1.5 text-center font-[family-name:var(--font-mono)] text-[12px] text-ink-faint"
          >
            {part}
          </span>
        ),
      )}
    </p>
  );
}

function fmt(seconds: number): string {
  const m = Math.floor(Math.max(0, seconds) / 60);
  const s = Math.max(0, seconds) % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
