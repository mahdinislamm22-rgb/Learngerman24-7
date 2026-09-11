import { begruessung } from "./01-begruessung";
import { alphabet } from "./02-alphabet";
import { zahlen } from "./03-zahlen";
import { sichVorstellen } from "./04-sich-vorstellen";
import type { A0Lesson, A0Word } from "./types";

export * from "./types";

/** The beginner course, in order. Add a lesson here and it appears
 *  everywhere — list, navigation, progress — with no other change. */
export const A0_LESSONS: A0Lesson[] = [
  begruessung,
  alphabet,
  zahlen,
  sichVorstellen,
].sort((a, b) => a.order - b.order);

export function getA0Lesson(slug: string): A0Lesson | undefined {
  return A0_LESSONS.find((l) => l.slug === slug);
}

export function nextA0Lesson(slug: string): A0Lesson | undefined {
  const i = A0_LESSONS.findIndex((l) => l.slug === slug);
  return i >= 0 ? A0_LESSONS[i + 1] : undefined;
}

/** Every word from every lesson, for the word list page. */
export function allA0Words(): (A0Word & { lessonSlug: string })[] {
  return A0_LESSONS.flatMap((lesson) =>
    lesson.blocks.flatMap((block) =>
      block.kind === "words"
        ? block.words.map((w) => ({ ...w, lessonSlug: lesson.slug }))
        : [],
    ),
  );
}

/** Every quiz question from every lesson, for the practice page. */
export function allA0Questions() {
  return A0_LESSONS.flatMap((lesson) =>
    lesson.quiz.map((q) => ({ ...q, lessonSlug: lesson.slug })),
  );
}
