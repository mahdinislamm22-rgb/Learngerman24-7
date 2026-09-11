"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { getDict } from "@/lib/i18n";
import { getUiLang } from "@/lib/i18n/server";

export type AuthState = { error?: string; message?: string };

/** Supabase requires 6+; we ask for 8 because this guards your exam data. */
const MIN_PASSWORD = 8;

/** Error text comes from the same dictionary as the rest of the interface,
 *  so a Bengali user gets a Bengali error, not a German one. */
async function messages() {
  return getDict(await getUiLang()).auth;
}

export async function register(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const m = await messages();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const displayName = String(formData.get("display_name") ?? "").trim();

  if (!email || !password) return { error: m.errNoCredentials };
  if (password.length < MIN_PASSWORD) return { error: m.errShortPassword };

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName || null } },
  });

  if (error) {
    console.error("[auth] sign-up failed:", error.status, error.message);
    const raw = error.message.toLowerCase();
    // Supabase says "User already registered". Saying that plainly is the
    // difference between signing in and creating a fourth near-identical
    // account because the first one seemed not to exist.
    if (raw.includes("already registered") || raw.includes("already exists")) {
      return { error: m.errAlreadyRegistered };
    }
    return { error: error.message };
  }

  // Email confirmation is OFF for this build, so the user is signed in
  // immediately. Turning it on later needs no code change here.
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function login(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const m = await messages();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/dashboard");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Log the real reason. Showing one generic message for every failure
    // is what made a login problem impossible to diagnose: a rate limit,
    // an unconfirmed address and a wrong password all looked identical.
    console.error("[auth] sign-in failed:", error.status, error.message);

    const raw = error.message.toLowerCase();
    if (raw.includes("not confirmed")) return { error: m.errNotConfirmed };
    if (error.status === 429 || raw.includes("rate limit") || raw.includes("too many")) {
      return { error: m.errTooManyTries };
    }
    return { error: m.errWrongCredentials };
  }

  revalidatePath("/", "layout");
  redirect(next.startsWith("/") ? next : "/dashboard");
}

export async function requestReset(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const m = await messages();
  const email = String(formData.get("email") ?? "").trim();
  if (!email) return { error: m.errNoEmail };

  const supabase = await createClient();
  const origin = (await headers()).get("origin") ?? "http://localhost:3000";

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/passwort-aendern`,
  });

  if (error) return { error: error.message };
  return { message: m.resetSent };
}

export async function updatePassword(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const m = await messages();
  const password = String(formData.get("password") ?? "");
  if (password.length < MIN_PASSWORD) return { error: m.errShortPassword };

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}
