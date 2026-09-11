import "server-only";
import { cookies } from "next/headers";
import { getDict, isUiLang, DEFAULT_UI_LANG, UI_LANG_COOKIE, type UiLang } from ".";
import type { Dict } from "./shape";

/**
 * The interface language for this request.
 *
 * A cookie rather than a URL prefix (/en/…, /bn/…): this is a personal
 * app, not a public multilingual site, so there is nothing to gain from
 * separate URLs per language and a lot of routing complexity to avoid.
 *
 * When a user is signed in their choice is also stored on their profile,
 * so it follows them to a different device. The cookie is written at the
 * same moment, which is what makes signed-out pages (homepage, login)
 * remember the choice too.
 */
export async function getUiLang(): Promise<UiLang> {
  const store = await cookies();
  const value = store.get(UI_LANG_COOKIE)?.value;
  return isUiLang(value) ? value : DEFAULT_UI_LANG;
}

/** Language plus its dictionary, for Server Components. */
export async function getI18n(): Promise<{ lang: UiLang; t: Dict }> {
  const lang = await getUiLang();
  return { lang, t: getDict(lang) };
}
