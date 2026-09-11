import type { Metadata } from "next";
import { getI18n } from "@/lib/i18n/server";
import { pickTrainerWords, } from "@/app/(b1)/grammatik/actions";
import { TRAINER_WORDS, type TrainerNoun } from "@/content/grammatik";
import { ArticleTrainer } from "@/components/grammatik/article-trainer";
import { cn } from "@/lib/cn";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Artikeltrainer" };

export default async function ArticleTrainerPage() {
  const { lang, t } = await getI18n();
  const picked = await pickTrainerWords(20);
  const words = picked
    .map((w) => TRAINER_WORDS.find((x) => x.de === w))
    .filter((w): w is TrainerNoun => Boolean(w));
  const bn = lang === "bn";

  return (
    <>
      <h1 className={cn("text-[28px] font-extrabold", bn && "bn")}>{t.gram.trainerTitle}</h1>
      <p className={cn("mt-1 max-w-[62ch] text-[15px] text-ink-soft", bn && "bn")}>{t.gram.trainerSub}</p>
      <div className="mt-6">
        <ArticleTrainer words={words} explainLang={lang} />
      </div>
    </>
  );
}