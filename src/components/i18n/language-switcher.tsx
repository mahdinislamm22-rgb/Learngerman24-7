"use client";

import { useTransition } from "react";
import { Languages } from "lucide-react";
import { setUiLang } from "@/lib/i18n/actions";
import { UI_LANGS, UI_LANG_META } from "@/lib/i18n/shape";
import { useI18n } from "./provider";
import { cn } from "@/lib/cn";

/**
 * Changes the whole interface language.
 *
 * A plain <select> on purpose: it is one tap on a phone, it is keyboard
 * accessible for free, and it uses the operating system's own picker —
 * which matters for a beginner who may not read the Latin alphabet
 * comfortably yet.
 */
export function LanguageSwitcher({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const { lang, t } = useI18n();
  const [pending, startTransition] = useTransition();

  return (
    <label
      className={cn(
        "relative inline-flex items-center gap-1.5",
        pending && "opacity-60",
        className,
      )}
    >
      <span className="sr-only">{t.lang.label}</span>
      <Languages
        size={15}
        aria-hidden
        className="pointer-events-none absolute left-2.5 text-ink-faint"
      />
      <select
        value={lang}
        disabled={pending}
        onChange={(e) => {
          const data = new FormData();
          data.set("lang", e.target.value);
          startTransition(() => {
            void setUiLang(data);
          });
        }}
        className={cn(
          "h-9 cursor-pointer appearance-none rounded-[var(--radius-control)]",
          "border border-line bg-surface pl-8 pr-7 text-[13px] font-semibold text-ink",
          "transition-colors hover:border-line-strong",
          compact && "h-8 text-[12.5px]",
        )}
      >
        {UI_LANGS.map((code) => (
          <option key={code} value={code}>
            {UI_LANG_META[code].flag} {UI_LANG_META[code].native}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 10 6"
        className="pointer-events-none absolute right-2.5 w-2.5 fill-ink-faint"
      >
        <path d="M0 0h10L5 6z" />
      </svg>
    </label>
  );
}
