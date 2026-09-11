import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { allA0Words } from "@/content/a0";
import type { Lang } from "@/lib/types";
import { WordList } from "@/components/a0/word-list";

export const metadata: Metadata = { title: "Wörter" };

export default async function WordsPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: rows } = await supabase
    .from("a0_known_words")
    .select("word")
    .eq("user_id", user!.id);

  const words = allA0Words();

  return (
    <>
      <h1 className="text-[28px] font-extrabold">{t.a0.vocabTitle}</h1>
      <p className="mt-1 mb-6 text-[15px] text-ink-soft">{t.a0.vocabSub}</p>

      <WordList
        words={words}
        initiallyKnown={(rows ?? []).map((r) => r.word as string)}
        explainLang={lang as Lang}
      />
    </>
  );
}
