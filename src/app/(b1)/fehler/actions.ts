"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

async function currentUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { supabase, user };
}

export async function setMistakeStatus(
  id: string,
  status: "open" | "learning" | "learned",
) {
  const { supabase, user } = await currentUser();
  if (!user) return;

  await supabase
    .from("mistakes")
    .update({ status })
    .match({ id, user_id: user.id });

  revalidatePath("/fehler");
  revalidatePath("/dashboard");
}

export async function saveMistakeNote(id: string, note: string) {
  const { supabase, user } = await currentUser();
  if (!user) return;

  await supabase
    .from("mistakes")
    .update({ note: note.trim() || null })
    .match({ id, user_id: user.id });

  revalidatePath("/fehler");
}

export async function deleteMistake(id: string) {
  const { supabase, user } = await currentUser();
  if (!user) return;

  await supabase.from("mistakes").delete().match({ id, user_id: user.id });

  revalidatePath("/fehler");
  revalidatePath("/dashboard");
}
