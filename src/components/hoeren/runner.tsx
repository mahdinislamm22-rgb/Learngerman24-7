"use client";

import { useState } from "react";
import { Check, X, Eye } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { HoerSet } from "@/content/hoeren";
import { gradeHoerSet, type HoerResult } from "@/app/(b1)/hoeren/actions";
import { SpeechPlayer } from "./speech-player";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * The listening paper.
 *
 * The transcript is deliberately unavailable until after grading. Showing
 * it earlier would be kinder and completely useless: the exam gives you
 * one pass and no text, and that is the only thing worth practising.
 *
 * Practice mode exists for after you have already scored it, when
 * replaying a track to hear what you missed is the point.
 */
export function HoerRunner({
  set,
  explainLang,
}: {
  set: HoerSet;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<HoerResult | null>(null);
  const [practice, setPractice] = useState(false);
  const [showTranscript, setShowTranscript] = useState<Record<string, boolean>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const bn = explainLang === "bn";

  const answered = Object.values(answers).filter(Boolean).length;
  const resultFor = (nr: number) => result?.items.find((i) => i.nr === nr);

  async function submit() {
    setBusy(true);
    setError("");
    try {
      const res = await gradeHoerSet(set.code, answers);
      if ("error" in res) setError(res.error);
      else {
        setResult(res);
        setPractice(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError(t.hoeren.gradeFailed);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-7">
      {result ? <ScoreCard result={result} bn={bn} /> : null}

      {!result ? (
        <p className={cn("rounded-[var(--radius-control)] bg-iris-soft px-3.5 py-2.5 text-[13.5px] text-ink", bn && "bn")}>
          {t.hoeren.onceHint}
        </p>
      ) : null}

      {set.teile.map((teil) => (
        <section key={teil.teil} className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h2 className={cn("text-[18px] font-bold", bn && "bn")}>
                {t.hoeren.part} {teil.teil}
              </h2>
              <Badge tone={teil.maxPlays > 1 ? "sage" : "clay"}>
                {teil.maxPlays}× {t.hoeren.listen}
              </Badge>
            </div>
            <p className={cn("max-w-[64ch] text-[13.5px] text-ink-soft", bn && "bn")}>
              {pick(teil.instruction, explainLang)}
            </p>
          </div>

          {teil.tracks.map((track) => (
            <Card key={track.id}>
              <CardBody className="flex flex-col gap-3">
                <SpeechPlayer
                  transcript={track.transcript}
                  maxPlays={teil.maxPlays}
                  unlimited={practice}
                  label={pick(track.label, explainLang)}
                />

                <ul className="flex flex-col gap-2">
                  {track.items.map((item) => {
                    const r = resultFor(item.nr);
                    const chosen = answers[String(item.nr)] ?? "";

                    return (
                      <li
                        key={item.nr}
                        className={cn(
                          "rounded-[var(--radius-control)] border p-3",
                          r ? (r.correct ? "border-sage/35 bg-sage-soft" : "border-clay/35 bg-clay-soft") : "border-line",
                        )}
                      >
                        <p className="prose-de text-[14.5px]">
                          <span className="mr-1.5 font-[family-name:var(--font-mono)] text-[12.5px] font-bold text-ink-faint">
                            {item.nr}
                          </span>
                          {item.statement}
                        </p>

                        <div className="mt-2 flex gap-2">
                          {[true, false].map((v) => {
                            const val = String(v);
                            const picked = chosen === val;
                            const isAns = r && v === item.answer;
                            return (
                              <button
                                key={val}
                                type="button"
                                disabled={Boolean(result) || busy}
                                onClick={() => setAnswers((p) => ({ ...p, [item.nr]: val }))}
                                className={cn(
                                  "inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border px-3 py-1.5 text-[13.5px] font-semibold transition-colors",
                                  !result && (picked ? "border-iris bg-iris text-white" : "border-line bg-surface hover:border-iris-line hover:bg-iris-soft"),
                                  result && isAns && "border-sage bg-sage text-white",
                                  result && picked && !isAns && "border-clay bg-clay text-white",
                                  result && !picked && !isAns && "border-line bg-surface text-ink-faint",
                                )}
                              >
                                {v ? <Check size={13} aria-hidden /> : <X size={13} aria-hidden />}
                                {v ? "richtig" : "falsch"}
                              </button>
                            );
                          })}
                        </div>

                        {r ? (
                          <p className={cn("mt-2 text-[13.5px] leading-relaxed text-ink", bn && "bn")}>
                            {pick(r.why, explainLang)}
                          </p>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>

                {result ? (
                  <div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        setShowTranscript((p) => ({ ...p, [track.id]: !p[track.id] }))
                      }
                    >
                      <Eye size={14} aria-hidden />
                      {showTranscript[track.id] ? t.hoeren.hideText : t.hoeren.showText}
                    </Button>
                    {showTranscript[track.id] ? (
                      <p className="prose-de mt-2 whitespace-pre-line rounded-[var(--radius-control)] bg-surface-2 p-3.5 text-[14.5px] leading-relaxed">
                        {track.transcript}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </CardBody>
            </Card>
          ))}
        </section>
      ))}

      {error ? (
        <p role="alert" className="rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-4 py-3 text-[14px] text-clay">
          {error}
        </p>
      ) : null}

      {!result ? (
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" onClick={submit} disabled={busy || answered === 0}>
            {busy ? t.common.oneMoment : t.hoeren.submit}
          </Button>
          <span className={cn("tnum text-[13px] text-ink-faint", bn && "bn")}>
            {answered}/20 {t.hoeren.answered}
          </span>
        </div>
      ) : (
        <p className={cn("text-[13px] text-ink-soft", bn && "bn")}>{t.hoeren.practiceNote}</p>
      )}
    </div>
  );
}

function ScoreCard({ result, bn }: { result: HoerResult; bn: boolean }) {
  const { t } = useI18n();
  const pct = Math.round((result.correct / (result.total || 1)) * 100);

  return (
    <Card className={pct >= 60 ? "border-sage/40 bg-sage-soft" : "border-clay/30 bg-clay-soft"}>
      <CardBody className="flex flex-col gap-3">
        <div>
          <span className="label">{t.hoeren.yourScore}</span>
          <p className="tnum text-[26px] font-bold leading-none">
            {result.points} <span className="text-ink-faint">/ {result.maxPoints}</span>
          </p>
          <p className="tnum mt-1 text-[14px] text-ink-soft">
            {result.correct}/{result.total} · {pct}%
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-2.5">
          {([1, 2, 3] as const).map((n) => (
            <span key={n} className="tnum text-[13px] text-ink-soft">
              {t.hoeren.part} {n}:{" "}
              <strong className={result.byTeil[n].correct / (result.byTeil[n].total || 1) >= 0.6 ? "text-sage" : "text-clay"}>
                {result.byTeil[n].correct}/{result.byTeil[n].total}
              </strong>
            </span>
          ))}
        </div>
        <p className={cn("text-[13px] text-ink-soft", bn && "bn")}>{t.hoeren.scoreNote}</p>
      </CardBody>
    </Card>
  );
}

