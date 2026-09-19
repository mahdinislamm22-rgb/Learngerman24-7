import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Library, Search } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { ALL_WORDS, THEMES, themeCounts, wordsByTheme } from "@/content/vokabeln";
import { pick, type Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Wortschatz" };

export default async function VokabelnPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: progress } = await supabase
    .from("vocab_progress")
    .select("word, streak, known")
    .eq("user_id", user!.id);

  const rows = progress ?? [];
  const learned = rows.filter((r) => r.known || Number(r.streak ?? 0) >= 3).length;
  const counts = new Map(themeCounts().map((c) => [c.theme, c.count]));

  const explainLang = lang as Lang;
  const bn = lang === "bn";

  return (
    <>
      <h1 className={cn("text-[28px] font-extrabold", bn && "bn")}>{t.vokabeln.title}</h1>
      <p className={cn("mt-1 max-w-[62ch] text-[15px] text-ink-soft", bn && "bn")}>
        {t.vokabeln.sub}
      </p>

      <Card className="mt-5 border-iris-line bg-iris-soft">
        <CardBody className="flex flex-wrap items-center gap-4">
          <div className="min-w-0 flex-1">
            <span className="label text-iris">{t.vokabeln.yourProgress}</span>
            <p className="tnum mt-0.5 text-[22px] font-bold leading-none">
              {learned} <span className="text-ink-faint">/ {ALL_WORDS.length}</span>
            </p>
            <p className={cn("mt-1 text-[13px] text-ink-soft", bn && "bn")}>
              {t.vokabeln.learnedNote}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/vokabeln/ueben?theme=alle&mode=recall">
              <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-control)] bg-iris px-4 py-2.5 text-[14px] font-semibold text-white">
                {t.vokabeln.recallMode} <ArrowRight size={15} aria-hidden />
              </span>
            </Link>
            <Link href="/vokabeln/ueben?theme=alle&mode=quiz">
              <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border border-iris-line bg-surface px-4 py-2.5 text-[14px] font-semibold text-iris">
                {t.vokabeln.quizMode}
              </span>
            </Link>
          </div>
        </CardBody>
      </Card>

      <h2 className={cn("mt-7 text-[19px] font-bold", bn && "bn")}>{t.vokabeln.themes}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {THEMES.map((theme) => {
          const count = counts.get(theme.key) ?? 0;
          if (count === 0) return null;
          const top = wordsByTheme(theme.key).slice(0, 3).map((w) => w.de).join(" · ");
          return (
            <li key={theme.key}>
              <Link
                href={`/vokabeln/ueben?theme=${theme.key}`}
                className="block h-full rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-iris-line"
              >
                <div className="flex items-start gap-3">
                  <Library size={17} className="mt-0.5 shrink-0 text-iris" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={cn("text-[15.5px] font-bold", bn && "bn")}>
                        {pick(theme.label, explainLang)}
                      </h3>
                      <Badge tone="neutral">{count}</Badge>
                    </div>
                    <p className="prose-de mt-1 truncate text-[13px] text-ink-faint">{top}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2 className={cn("mt-8 flex items-center gap-2 text-[19px] font-bold", bn && "bn")}>
        <Search size={17} aria-hidden />
        {t.vokabeln.allWords}
      </h2>
      <p className={cn("mt-1 max-w-[62ch] text-[13.5px] text-ink-soft", bn && "bn")}>
        {t.vokabeln.allWordsNote}
      </p>

      <div className="mt-3 overflow-hidden rounded-[var(--radius-card)] border border-line">
        <ul className="divide-y divide-line">
          {ALL_WORDS.map((word) => (
            <li key={word.de} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-surface px-4 py-2.5">
              <span className="prose-de text-[15px] font-semibold">
                {word.article ? <span className="text-iris">{word.article} </span> : null}
                {word.de}
              </span>
              <span className={cn("text-[14px] text-ink-soft", bn && "bn")}>
                {pick(word.meaning, explainLang)}
              </span>
              {word.example ? (
                <span className="prose-de w-full text-[13px] text-ink-faint">{word.example}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
