"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getSchreibenTask } from "@/content/schreiben";
import { generateFeedback } from "@/lib/ai/feedback";
import { totalScore, SCORE_MAX } from "@/lib/ai/feedback-schema";
import { feedbackModel, explainAiError } from "@/lib/ai/openai";
import { recordCorrections, updateMastery, topWeakTags } from "@/lib/mistakes";
import { countWords } from "@/lib/words";

export type SubmitState = { error?: string };

/** Autosave. Fire-and-forget from the editor — never blocks typing. */
export async function saveDraft(taskCode: string, text: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("writing_drafts").upsert(
    {
      user_id: user.id,
      task_code: taskCode,
      text,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,task_code" },
  );
}

export async function submitWriting(
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const taskCode = String(formData.get("task_code") ?? "");
  const text = String(formData.get("text") ?? "").trim();
  const seconds = Number(formData.get("seconds") ?? 0);

  const task = getSchreibenTask(taskCode);
  if (!task) return { error: "Unknown task." };

  const words = countWords(text);
  if (words < 30) {
    return {
      error: `Your text is only ${words} words. Write at least 30 before asking for feedback — below that there is nothing useful to correct.`,
    };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not signed in." };

  let submissionId: string;

  try {
    const weakTags = await topWeakTags(supabase, user.id);
    const feedback = await generateFeedback({ task, text, knownWeakTags: weakTags });

    const total = totalScore(feedback.scores);

    const { data: inserted, error } = await supabase
      .from("writing_submissions")
      .insert({
        user_id: user.id,
        task_code: taskCode,
        text,
        word_count: words,
        seconds_spent: Math.round(seconds),
        scores: { ...feedback.scores, total },
        feedback,
        model: feedbackModel(),
      })
      .select("id")
      .single();

    if (error || !inserted) {
      return { error: "Your feedback came back, but saving it failed. Try again." };
    }

    submissionId = inserted.id;

    // Everything after this point is bookkeeping — if a piece fails, the
    // learner should still get their feedback rather than an error page.
    await Promise.allSettled([
      recordCorrections(supabase, user.id, feedback.corrections, {
        kind: "writing",
        id: submissionId,
      }),
      updateMastery(supabase, user.id, "schreiben", total / SCORE_MAX.total),
      supabase
        .from("writing_drafts")
        .delete()
        .match({ user_id: user.id, task_code: taskCode }),
    ]);
  } catch (e) {
    // explainAiError turns provider errors (bad key, no credit, rate limit,
    // unknown model) into something you can actually act on.
    return {
      error: `${explainAiError(e)} Your text has not been lost — it is still in the editor.`,
    };
  }

  revalidatePath("/schreiben");
  revalidatePath("/fehler");
  revalidatePath("/dashboard");
  redirect(`/schreiben/ergebnis/${submissionId}`);
}
