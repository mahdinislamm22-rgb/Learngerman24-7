import { de } from "./de";
import { en } from "./en";
import { it } from "./it";
import { bn } from "./bn";
import type { Dict } from "./shape";
import { DEFAULT_UI_LANG, UI_LANGS, type UiLang } from "./shape";

export * from "./shape";

export const DICTS: Record<UiLang, Dict> = { de, en, it, bn };

export const UI_LANG_COOKIE = "ui_lang";

export function isUiLang(value: unknown): value is UiLang {
  return typeof value === "string" && (UI_LANGS as readonly string[]).includes(value);
}

export function getDict(lang: UiLang): Dict {
  return DICTS[lang] ?? DICTS[DEFAULT_UI_LANG];
}

/** Fill `{name}`-style placeholders. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in values ? String(values[key]) : whole,
  );
}

/**
 * Bengali is not written in the Latin alphabet, so it needs its own font
 * and a `lang` attribute for screen readers and line breaking.
 */
export function htmlLangFor(lang: UiLang): string {
  return lang;
}
