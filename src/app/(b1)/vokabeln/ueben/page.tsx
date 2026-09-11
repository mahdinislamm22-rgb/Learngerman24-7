import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getI18n } from "@/lib/i18n/server";
import { findWord, THEMES, type Theme } from "@/content/vokabeln";
import { pickVocab } from "../actions";
import { pick, type Lang } from "@/lib/types";
import { VocabTrainer } from "@/components/vokabeln/trainer";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Wortschatz üben" };

// The word list is personal, so it must never be cached.
export const dynamic = "force-dynamic";

export default async function VocabPracticePage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>;
}) {
  const { theme } = await searchParams;
  const valid = THEMES.some((x) => x.key === theme);
  const chosen = (valid ? theme : "alle") as Theme | "alle";

  const { lang, t } = await getI18n();
  const explainLang = lang as Lang;
  const bn = lang === "bn";

  const picked = await pickVocab(chosen, 20);
  const words = picked
    .map((de) => findWord(de))
    .filter((w): w is NonNullable<typeof w> => Boolean(w));

  const label =
    chosen === "alle"
      ? t.vokabeln.allThemes
      : pick(THEMES.find((x) => x.key === chosen)!.label, explainLang);

  return (
    <>
      <Link
        href="/vokabeln"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
      >
        <ArrowLeft size={14} aria-hidden />
        {t.nav.vocab}
      </Link>

      <h1 className={cn("mt-4 text-[24px] font-extrabold", bn && "bn")}>{label}</h1>
      <p className={cn("mt-1 max-w-[62ch] text-[14px] text-ink-soft", bn && "bn")}>
        {t.vokabeln.trainerNote}
      </p>

      <div className="mt-6">
        <VocabTrainer words={words} explainLang={explainLang} />
      </div>
    </>
  );
}
