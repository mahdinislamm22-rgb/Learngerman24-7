"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { isUiLang, UI_LANG_COOKIE } from ".";

/**
 * Switch the interface language.
 *
 * Writes a cookie (so signed-out pages remember) and, when signed in,
 * the profile too (so the choice follows the user to their phone).
 */
export async function setUiLang(formData: FormData) {
  const lang = String(formData.get("lang") ?? "");
  if (!isUiLang(lang)) return;

  const store = await cookies();
  store.set(UI_LANG_COOKIE, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.from("profiles").update({ ui_lang: lang }).eq("id", user.id);
  }

  revalidatePath("/", "layout");
}
