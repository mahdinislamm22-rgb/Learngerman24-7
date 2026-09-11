"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getDict } from "@/lib/i18n";
import { getUiLang } from "@/lib/i18n/server";

export type ProfileState = { error?: string };

export async function saveExamDate(
  _prev: ProfileState,
  formData: FormData,
): Promise<ProfileState> {
  const t = getDict(await getUiLang()).dash;
  const examDate = String(formData.get("exam_date") ?? "");
  if (!examDate) return { error: t.pickDate };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: t.notSignedIn };

  const { error } = await supabase
    .from("profiles")
    .update({ exam_date: examDate })
    .eq("id", user.id);

  if (error) return { error: t.saveFailed };

  revalidatePath("/dashboard");
  return {};
}
