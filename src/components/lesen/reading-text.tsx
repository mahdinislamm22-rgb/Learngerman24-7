"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { pick, type Lang } from "@/lib/types";
import { tokenize, lookup, type GlossaryEntry } from "@/content/lesen";
import { cn } from "@/lib/cn";

/**
 * A German text where every word can be tapped for its meaning.
 *
 * Two decisions worth stating:
 *
 * 1. The glossary travels WITH the text rather than coming from a general
 *    dictionary. A dictionary would give "erhalten = to receive", when in
 *    "gut erhalten" it means "in good condition". Per-text entries let the
 *    meaning match the sentence the learner is actually reading.
 *
 * 2. Nouns show their article. Looking up "Lebenslauf" and being told only
 *    "CV" teaches half a word — the gender is the half that costs points
 *    later, so it is never omitted.
 *
 * Words with no entry stay unhighlighted and do nothing when tapped, which
 * keeps the text readable instead of turning every word into a link.
 */
export function ReadingText({
  text,
  glossary,
  explainLang,
  className,
}: {
  text: string;
  glossary: GlossaryEntry[];
  explainLang: Lang;
  className?: string;
}) {
  const [open, setOpen] = useState<GlossaryEntry | null>(null);
  const tokens = tokenize(text);
  const bn = explainLang === "bn";

  return (
    <div className="relative">
      <p
        className={cn(
          "prose-de whitespace-pre-line text-[16.5px] leading-[1.85]",
          className,
        )}
      >
        {tokens.map((tk, i) => {
          const entry = tk.word ? lookup(glossary, tk.word) : undefined;

          if (!entry) {
            return (
              <span key={i}>
                {tk.word}
                {tk.sep}
              </span>
            );
          }

          return (
            <span key={i}>
              <button
                type="button"
                onClick={() => setOpen(entry)}
                className={cn(
                  "cursor-pointer rounded-sm underline decoration-iris-line decoration-dotted underline-offset-[3px] transition-colors",
                  "hover:bg-iris-soft hover:decoration-iris",
                  open?.word === entry.word && "bg-iris-soft",
                )}
                aria-label={`${tk.word} — Bedeutung anzeigen`}
              >
                {tk.word}
              </button>
              {tk.sep}
            </span>
          );
        })}
      </p>

      {open ? (
        <div
          role="dialog"
          aria-live="polite"
          className="sticky bottom-3 z-10 mt-3 rounded-[var(--radius-card)] border border-iris-line bg-iris-soft p-3.5 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <p className="prose-de text-[16px] font-bold">
                {open.article ? (
                  <span className="text-iris">{open.article} </span>
                ) : null}
                {open.base ?? open.word}
              </p>
              <p className={cn("mt-0.5 text-[14.5px] leading-relaxed text-ink", bn && "bn")}>
                {pick(open.meaning, explainLang)}
              </p>
              {open.base && open.base.toLowerCase() !== open.word.toLowerCase() ? (
                <p className="mt-1 text-[12.5px] text-ink-faint">
                  im Text: <span className="prose-de">{open.word}</span>
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="schließen"
              className="shrink-0 rounded p-1 text-ink-faint transition-colors hover:bg-surface hover:text-ink"
            >
              <X size={16} aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
