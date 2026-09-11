"use client";

import { ExerciseRunner } from "@/components/grammatik/exercise-runner";
import type { Exercise, Lang } from "@/lib/types";
import { finishQuickTest } from "@/app/(b1)/grammatik/actions";

export function QuickTest({
  slug,
  exercises,
  explainLang,
}: {
  slug: string;
  exercises: Exercise[];
  explainLang: Lang;
}) {
  return (
    <ExerciseRunner
      exercises={exercises}
      explainLang={explainLang}
      mode="exam"
      onFinish={(score, total) => void finishQuickTest(slug, score, total)}
    />
  );
}