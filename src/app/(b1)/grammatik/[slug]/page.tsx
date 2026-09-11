import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getI18n } from "@/lib/i18n/server";
import { getLesson, LESSONS, nextLesson, practiceSet } from "@/content/grammatik";
import { pick, type Lang } from "@/lib/types";
import { LessonView } from "@/components/grammatik/lesson-view";
import { ExerciseRunner } from "@/components/grammatik/exercise-runner";
import { QuickTest } from "@/components/grammatik/quick-test";
import { MarkLessonRead } from "@/components/grammatik/mark-lesson-read";
import { cn } from "@/lib/cn";

export async function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: lesson ? `Grammatik · ${lesson.slug}` : "Grammatik" };
}

export default async function GrammarLessonPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { slug } = await params;
  const { tab } = await searchParams;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const { lang, t } = await getI18n();
  const explainLang = lang as Lang;
  const bn = lang === "bn";
  const activeTab = tab === "practice" || tab === "test" ? tab : "lesson";
  const next = nextLesson(slug);
  const tabs = [
    ["lesson", t.gram.lessonTab],
    ["practice", t.gram.practiceTab],
    ["test", t.gram.testTab],
  ] as const;

  return (
    <>
      <Link href="/grammatik" className={cn("inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris", bn && "bn")}>
        <ArrowLeft size={14} aria-hidden />
        {t.gram.title}
      </Link>
      <div className="mt-4 flex flex-col gap-1">
        <h1 className="text-[25px] font-extrabold">{lesson.slug}</h1>
        <p className={cn("text-[15px] text-ink-soft", bn && "bn")}>{pick(lesson.title, explainLang)}</p>
      </div>
      <nav className="mt-5 flex flex-wrap gap-1 rounded-[var(--radius-control)] bg-surface-2 p-1" aria-label="Grammar views">
        {tabs.map(([value, label]) => (
          <Link key={value} href={`/grammatik/${slug}${value === "lesson" ? "" : `?tab=${value}`}`} className={cn("rounded-[var(--radius-control)] px-3 py-2 text-[13px] font-semibold transition-colors", activeTab === value ? "bg-surface text-ink shadow-sm" : "text-ink-soft hover:text-ink", bn && "bn")}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-6">
        {activeTab === "lesson" ? <LessonView lesson={lesson} explainLang={explainLang} t={t} /> : null}
        {activeTab === "practice" ? <ExerciseRunner exercises={practiceSet(lesson)} explainLang={explainLang} mode="practice" /> : null}
        {activeTab === "test" ? <QuickTest slug={lesson.slug} exercises={lesson.quickTest} explainLang={explainLang} /> : null}
      </div>
      {activeTab === "lesson" && next ? (
        <Link href={`/grammatik/${next.slug}`} className={cn("mt-8 flex items-center justify-between rounded-[var(--radius-card)] border border-iris-line bg-iris-soft px-4 py-3 text-[14px] font-semibold text-iris", bn && "bn")}>
          {t.common.next}: {pick(next.title, explainLang)}
          <ArrowRight size={16} aria-hidden />
        </Link>
      ) : null}
      {activeTab === "lesson" ? <MarkLessonRead slug={slug} /> : null}
    </>
  );
}