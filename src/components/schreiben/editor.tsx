"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Clock, Circle, Save } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { SchreibenTask } from "@/content/schreiben";
import { submitWriting, saveDraft, type SubmitState } from "@/app/(b1)/schreiben/actions";
import { countWords } from "@/lib/words";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

const EXAM_SECONDS = 30 * 60;

function SubmitButton({ words }: { words: number }) {
  const { pending } = useFormStatus();
  const { t } = useI18n();
  const [waited, setWaited] = useState(0);

  // A spinner with no counter is indistinguishable from a frozen page, and a
  // correction can genuinely take a minute or two on a free model.
  useEffect(() => {
    if (!pending) return;
    const started = Date.now();
    // setState lives in the callbacks, not the effect body, so this does not
    // trigger the cascading-render lint rule.
    const tick = () => setWaited(Math.floor((Date.now() - started) / 1000));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [pending]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button type="submit" size="lg" disabled={pending || words < 30}>
        {pending ? t.schreiben.correcting : t.schreiben.submit}
      </Button>
      {pending ? (
        <span className="tnum font-[family-name:var(--font-mono)] text-[13px] text-ink-soft">
          {fmt(waited)}
          {waited > 45 ? ` · ${t.schreiben.stillWorking}` : ""}
        </span>
      ) : null}
    </div>
  );
}

export function WritingEditor({
  task,
  initialText,
  explainLang,
}: {
  task: SchreibenTask;
  initialText: string;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [text, setText] = useState(initialText);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [state, formAction] = useActionState<SubmitState, FormData>(
    submitWriting,
    {},
  );

  const words = countWords(text);
  const remaining = Math.max(0, EXAM_SECONDS - elapsed);
  const overtime = elapsed > EXAM_SECONDS;
  const bn = explainLang === "bn";

  // The timer starts on the first keystroke, not on page load — reading the
  // task shouldn't eat into the 30 minutes.
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  // Autosave two seconds after typing stops.
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (text === initialText) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      void saveDraft(task.code, text).then(() => setSavedAt(Date.now()));
    }, 2000);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [text, task.code, initialText]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="task_code" value={task.code} />
      <input type="hidden" name="seconds" value={elapsed} />

      {/* ---- status bar ------------------------------------------------ */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3">
        <span
          className={cn(
            "tnum inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[15px] font-semibold",
            overtime ? "text-clay" : "text-ink",
          )}
        >
          <Clock size={15} aria-hidden />
          {overtime ? "+" : ""}
          {fmt(overtime ? elapsed - EXAM_SECONDS : remaining)}
        </span>

        <span className="tnum text-[14px]">
          <strong
            className={cn(
              words > task.targetWords * 1.4 || (words > 0 && words < 80)
                ? "text-clay"
                : "text-sage",
            )}
          >
            {words}
          </strong>
          <span className="text-ink-faint"> / {task.targetWords} {t.schreiben.words}</span>
        </span>

        {savedAt ? (
          <span className="inline-flex items-center gap-1 text-[12.5px] text-ink-faint">
            <Save size={13} aria-hidden />
            {t.schreiben.draftSaved}
          </span>
        ) : null}

        <span className="ml-auto">
          <Badge tone="neutral">{t.common.practiceMaterial}</Badge>
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        {/* ---- the writing area --------------------------------------- */}
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="sr-only">
            {t.schreiben.yourText}
          </label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (!running) setRunning(true);
            }}
            spellCheck={false}
            placeholder={`${task.anrede}\n\n…`}
            className={cn(
              "prose-de min-h-[420px] w-full resize-y rounded-[var(--radius-card)]",
              "border border-line bg-surface p-4 text-[16px] leading-relaxed text-ink",
              "placeholder:text-ink-faint focus:border-iris-line",
            )}
          />
          <p className="text-[12px] text-ink-faint">
            {t.schreiben.spellcheckOff}
          </p>
        </div>

        {/* ---- Leitpunkte checklist ------------------------------------ */}
        <aside className="flex flex-col gap-3">
          <Card className="lg:sticky lg:top-4">
            <CardBody className="p-4">
              <span className="label">{t.schreiben.leitpunkte}</span>
              <ul className="mt-2 flex flex-col gap-2.5">
                {task.leitpunkte.map((p, i) => (
                  <li key={i} className="flex gap-2 text-[13.5px] leading-snug">
                    <Circle
                      size={13}
                      className="mt-1 shrink-0 text-iris-line"
                      aria-hidden
                    />
                    <span className="prose-de">{p}</span>
                  </li>
                ))}
              </ul>
              <p className={cn("mt-3 border-t border-line pt-3 text-[12.5px] text-ink-soft", bn && "bn")}>
                {t.schreiben.leitpunkteNote}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-4">
              <span className="label">{t.schreiben.register}</span>
              <p className="prose-de mt-1.5 text-[14px] font-semibold">
                {task.anrede}
              </p>
              <p className="prose-de mt-1 whitespace-pre-line text-[14px] text-ink-soft">
                {task.gruss}
              </p>
              <p className={cn("mt-2 text-[12.5px] text-ink-faint", bn && "bn")}>
                {task.register === "informell"
                  ? t.schreiben.useDu
                  : t.schreiben.useSie}
              </p>
            </CardBody>
          </Card>
        </aside>
      </div>

      {state.error ? (
        <p
          role="alert"
          className={cn(
            "rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-4 py-3 text-[14px] text-clay",
            bn && "bn",
          )}
        >
          {state.error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <SubmitButton words={words} />
        <span className={cn("text-[13px] text-ink-faint", bn && "bn")}>
          {words < 30 ? t.schreiben.minWords : t.schreiben.submitNote}
        </span>
      </div>
    </form>
  );
}

/** Useful phrases panel — separate so it can sit below the fold. */
export function UsefulPhrases({
  task,
  explainLang,
}: {
  task: SchreibenTask;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const bn = explainLang === "bn";

  return (
    <section className="mt-8">
      <h2 className={cn("mb-1 text-[19px] font-bold", bn && "bn")}>
        {t.schreiben.phrasesTitle}
      </h2>
      <p className={cn("mb-4 max-w-[58ch] text-[14.5px] text-ink-soft", bn && "bn")}>
        {t.schreiben.phrasesSub}
      </p>
      <ul className="flex flex-col gap-2">
        {task.usefulPhrases.map((p) => (
          <li key={p.de}>
            <Card>
              <CardBody className="p-4">
                <p className="prose-de text-[16px] font-semibold">{p.de}</p>
                <p className={cn("mt-1 text-[14px] text-ink-soft", bn && "bn")}>
                  {pick(p.note, explainLang)}
                </p>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

function fmt(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
