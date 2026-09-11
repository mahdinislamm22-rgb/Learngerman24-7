import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-iris text-white hover:bg-iris-deep active:bg-iris-deep shadow-sm",
  secondary:
    "bg-surface text-ink border border-line hover:border-line-strong hover:bg-surface-2",
  ghost: "text-ink-soft hover:text-ink hover:bg-surface-2",
  danger: "bg-clay text-white hover:brightness-95",
};

const SIZES: Record<Size, string> = {
  // 44px minimum tap target on the two sizes used on mobile.
  sm: "h-9 px-3 text-[13px]",
  md: "h-11 px-4 text-[15px]",
  lg: "h-12 px-6 text-base",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)]",
        "font-[family-name:var(--font-ui)] font-semibold whitespace-nowrap",
        "transition-colors duration-150",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
