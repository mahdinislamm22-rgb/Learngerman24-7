import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import { getA0Lesson, nextA0Lesson, A0_LESSONS } from "@/content/a0";
import { getI18n } from "@/lib/i18n/server";
import { pick, type Lang } from "@/lib/types";
import { LessonBlock } from "@/components/a0/lesson-blocks";
import { Quiz } from "@/components/a0/quiz";
import { Card, CardBody } from "@/components/ui/card";

export async function generateStaticParams() {
  return A0_LESSONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getA0Lesson(slug);
  return { title: lesson ? (lesson.title.de ?? lesson.title.en) : "Lektion" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getA0Lesson(slug);
  if (!lesson) notFound();

  const { lang, t } = await getI18n();
  const explainLang = lang as Lang;
  const next = nextA0Lesson(slug);

  return (
    <article className="flex flex-col gap-6">
      <header>
        <Link
          href="/anfaenger/lektionen"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
        >
          <ArrowLeft size={14} aria-hidden />
          {t.a0.lessonsTitle}
        </Link>

        <p className="label mt-4">
          {t.a0.lesson} {lesson.order}
        </p>
        <h1 className="mt-1 text-[30px] font-extrabold leading-tight">
          {pick(lesson.title, explainLang)}
        </h1>
        {lesson.title.de ? (
          <p className="prose-de mt-1 text-[16px] text-ink-faint">
            {lesson.title.de}
          </p>
        ) : null}
      </header>

      {/* ---- what you'll learn ------------------------------------------ */}
      <Card>
        <CardBody className="flex flex-col gap-2">
          <span className="label">{t.a0.whatYouLearn}</span>
          <ul className="flex flex-col gap-1.5">
            {lesson.goals.map((goal, i) => (
              <li key={i} className="flex gap-2.5 text-[15px]">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-sage"
                  aria-hidden
                />
                <span className={lang === "bn" ? "bn" : undefined}>
                  {pick(goal, explainLang)}
                </span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      {/* ---- the lesson --------------------------------------------------- */}
      <div className="flex flex-col gap-5">
        {lesson.blocks.map((block, i) => (
          <LessonBlock key={i} block={block} lang={explainLang} t={t} />
        ))}
      </div>

      {/* ---- quick check --------------------------------------------------- */}
      <Quiz
        questions={lesson.quiz}
        lessonSlug={lesson.slug}
        nextSlug={next?.slug}
        explainLang={explainLang}
      />
    </article>
  );
}
