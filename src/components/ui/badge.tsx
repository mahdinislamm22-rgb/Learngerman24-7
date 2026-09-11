import * as React from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "iris" | "sage" | "clay" | "amber";

const TONES: Record<Tone, string> = {
  neutral: "bg-surface-2 text-ink-soft",
  iris: "bg-iris-soft text-iris",
  sage: "bg-sage-soft text-sage",
  clay: "bg-clay-soft text-clay",
  amber: "bg-amber-soft text-amber",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5",
        "font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.08em]",
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}

/**
 * The badge every memory shortcut must carry. A trick is never allowed
 * to look like a grammar rule (requirement #31).
 */
export function ShortcutBadge() {
  return (
    <Badge tone="amber" title="Merkhilfe — nicht die vollständige Regel">
      🧠 Merkhilfe — nicht die ganze Regel
    </Badge>
  );
}

/** Every practice item in this app is original, telc-format material. */
export function PracticeBadge() {
  return <Badge tone="neutral">Übungsmaterial · kein offizieller telc-Test</Badge>;
}
