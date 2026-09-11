"use client";

import { createContext, useContext } from "react";
import type { Dict, UiLang } from "@/lib/i18n/shape";

type Value = { lang: UiLang; t: Dict };

const I18nContext = createContext<Value | null>(null);

/**
 * Server layouts read the language and hand the dictionary down. Client
 * components (navigation, forms) pull it from here rather than each one
 * receiving a dozen string props.
 */
export function I18nProvider({
  lang,
  t,
  children,
}: Value & { children: React.ReactNode }) {
  return (
    <I18nContext.Provider value={{ lang, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): Value {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return value;
}
