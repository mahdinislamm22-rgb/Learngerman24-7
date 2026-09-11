import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Brain } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { lessonSummaries } from "@/content/grammatik";
import { pick, type Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Grammatik" };

export default async function GrammarPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: progress } = await supabase
    .from("grammar_progress")
    .select("topic_slug, lesson_read, best_test, mastered")
    .eq("user_id", user!.id);
  const byTopic = new Map((progress ?? []).map((row) => [row.topic_slug as string, row]));
  const explainLang = lang as Lang;
  const bn = lang === "bn";

  return (
    <>
      <h1 className={cn("text-[28px] font-extrabold", bn && "bn")}>{t.gram.title}</h1>
      <p className={cn("mt-1 max-w-[62ch] text-[15px] text-ink-soft", bn && "bn")}>
        {t.gram.sub}
      </p>

      <Link href="/grammatik/artikel-trainer" className="mt-6 block">
        <Card className="border-amber/30 bg-amber-soft transition-colors hover:border-amber">
          <CardBody className="flex flex-wrap items-center gap-4">
            <Brain size={22} className="shrink-0 text-amber" aria-hidden />
            <div className="min-w-0 flex-1">
              <h2 className={cn("text-[17px] font-bold", bn && "bn")}>{t.gram.trainerTitle}</h2>
              <p className={cn("mt-0.5 text-[14px] text-ink-soft", bn && "bn")}>{t.gram.trainerSub}</p>
            </div>
            <span className={cn("inline-flex items-center gap-1 text-[13px] font-semibold text-ink", bn && "bn")}>
              {t.gram.trainerCta} <ArrowRight size={15} aria-hidden />
            </span>
          </CardBody>
        </Card>
      </Link>

      <ul className="mt-6 flex flex-col gap-2">
        {lessonSummaries().map((lesson) => {
          const row = byTopic.get(lesson.slug);
          const state = row?.mastered ? "mastered" : row?.lesson_read ? "read" : "new";
          const weightTone = lesson.telcWeight === 3 ? "clay" : lesson.telcWeight === 2 ? "iris" : "neutral";
          return (
            <li key={lesson.slug}>
              <Link href={`/grammatik/${lesson.slug}`} className="block rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-iris-line">
                <div className="flex items-start gap-3.5">
                  <BookOpen size={18} className="mt-1 shrink-0 text-iris" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className={cn("text-[16px] font-bold", bn && "bn")}>{pick(lesson.title, explainLang)}</h2>
                      <Badge className={bn ? "bn" : undefined} tone={weightTone}>{t.gram.weight} {lesson.telcWeight}</Badge>
                      <Badge className={bn ? "bn" : undefined} tone={state === "mastered" ? "sage" : state === "read" ? "iris" : "neutral"}>
                        {state === "mastered" ? t.gram.mastered : state === "read" ? t.gram.continueLesson : t.gram.notStarted}
                      </Badge>
                    </div>
                    <p className={cn("mt-1.5 text-[14px] leading-snug text-ink-soft", bn && "bn")}>
                      {pick(lesson.telcRelevance, explainLang)}
                    </p>
                    <p className="mt-2 text-[12px] text-ink-faint">
                      {lesson.exerciseCount} {t.gram.exercises}
                    </p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 text-ink-faint" aria-hidden />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
