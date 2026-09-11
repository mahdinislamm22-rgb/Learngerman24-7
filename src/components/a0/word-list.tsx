"use client";

import { useState, useTransition } from "react";
import { Check } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import type { A0Word } from "@/content/a0";
import { toggleKnownWord } from "@/app/(a0)/actions";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * The beginner word list. Marking a word as known is one tap and updates
 * immediately — the server write happens behind it, so the list never
 * feels like it is waiting for the network.
 */
export function WordList({
  words,
  initiallyKnown,
  explainLang,
}: {
  words: (A0Word & { lessonSlug: string })[];
  initiallyKnown: string[];
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [known, setKnown] = useState<Set<string>>(new Set(initiallyKnown));
  const [, startTransition] = useTransition();
  const bn = explainLang === "bn";

  function toggle(word: string) {
    const next = new Set(known);
    const nowKnown = !next.has(word);
    if (nowKnown) next.add(word);
    else next.delete(word);
    setKnown(next);

    startTransition(() => {
      void toggleKnownWord(word, nowKnown);
    });
  }

  return (
    <ul className="flex flex-col gap-2">
      {words.map((w) => {
        const isKnown = known.has(w.de);

        return (
          <li
            key={w.de}
            className={cn(
              "flex items-start gap-3 rounded-[var(--radius-card)] border bg-surface p-4 transition-colors",
              isKnown ? "border-sage/35 bg-sage-soft/40" : "border-line",
            )}
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="prose-de text-[18px] font-semibold">
                  {w.article ? (
                    <span className="text-iris">{w.article} </span>
                  ) : null}
                  {w.de}
                </span>
                {w.sayIt ? (
                  <span className="font-[family-name:var(--font-mono)] text-[11.5px] text-ink-faint">
                    [{w.sayIt}]
                  </span>
                ) : null}
              </div>
              <p className={cn("mt-0.5 text-[14.5px] text-ink-soft", bn && "bn")}>
                {pick(w.meaning, explainLang)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggle(w.de)}
              aria-pressed={isKnown}
              title={t.a0.wordsLearned}
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors",
                isKnown
                  ? "border-sage bg-sage text-white"
                  : "border-line text-ink-faint hover:border-sage hover:text-sage",
              )}
            >
              <Check size={18} aria-hidden />
              <span className="sr-only">
                {isKnown ? t.a0.done : t.a0.wordsLearned}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
