import * as React from "react";
import { cn } from "@/lib/cn";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[var(--radius-control)] border border-line bg-surface",
        "px-3 text-[15px] text-ink placeholder:text-ink-faint",
        "transition-colors focus:border-iris-line",
        className,
      )}
      {...props}
    />
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-ink">{label}</span>
      {children}
      {hint ? <span className="text-[12.5px] text-ink-faint">{hint}</span> : null}
    </label>
  );
}
