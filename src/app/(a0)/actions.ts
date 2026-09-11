"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

/** Record that a beginner lesson was completed, with the quick-check score. */
export async function markLessonDone(
  lessonSlug: string,
  score: number,
  total: number,
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("a0_progress").upsert(
    {
      user_id: user.id,
      lesson_slug: lessonSlug,
      status: "done",
      score,
      total,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_slug" },
  );

  revalidatePath("/anfaenger");
  revalidatePath(`/anfaenger/lektion/${lessonSlug}`);
}

/** Toggle a word between "still learning" and "I know this". */
export async function toggleKnownWord(word: string, known: boolean) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  if (known) {
    await supabase
      .from("a0_known_words")
      .upsert({ user_id: user.id, word }, { onConflict: "user_id,word" });
  } else {
    await supabase
      .from("a0_known_words")
      .delete()
      .eq("user_id", user.id)
      .eq("word", word);
  }

  revalidatePath("/anfaenger/woerter");
  revalidatePath("/anfaenger");
}
