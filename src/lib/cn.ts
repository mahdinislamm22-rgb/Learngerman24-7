/**
 * Tiny class-name joiner. Deliberately not `clsx` + `tailwind-merge` —
 * two more dependencies for something twelve lines of code does here.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
