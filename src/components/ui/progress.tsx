import { cn } from "@/lib/cn";

/**
 * A skill bar for the dashboard. Colour is semantic, not decorative:
 * below 60% (the telc pass line) it reads clay, because that is exactly
 * the thing the learner needs to notice.
 */
export function SkillBar({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  /** 0–100 */
  value: number;
  hint?: string;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const tone =
    pct >= 75 ? "bg-sage" : pct >= 60 ? "bg-iris" : "bg-clay";

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[14px] font-semibold text-ink">{label}</span>
        <span className="tnum font-[family-name:var(--font-mono)] text-[12px] text-ink-soft">
          {pct}%
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-500", tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
      {hint ? (
        <span className="text-[12px] text-ink-faint">{hint}</span>
      ) : null}
    </div>
  );
}
