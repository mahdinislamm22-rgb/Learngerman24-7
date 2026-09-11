import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Not everything is a card. Use this for genuinely separate objects —
 * a lesson, a stat, a task. Plain sections should stay plain.
 */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-line bg-surface",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-[17px] font-semibold leading-snug", className)}
      {...props}
    />
  );
}
