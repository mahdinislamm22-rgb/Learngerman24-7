/** Words, counted the way a telc examiner would: whitespace-separated tokens.
 *  Lives outside the server-actions file because a "use server" module may
 *  only export async functions. */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
