import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { A0_LESSONS, allA0Words } from "@/content/a0";
import { pick, type Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SkillBar } from "@/components/ui/progress";

export const metadata: Metadata = { title: "Deutsch von null" };

export default async function A0Dashboard() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [{ data: progress }, { count: knownWords }] = await Promise.all([
    supabase
      .from("a0_progress")
      .select("lesson_slug, status")
      .eq("user_id", user!.id),
    supabase
      .from("a0_known_words")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user!.id),
  ]);

  const done = new Set(
    (progress ?? []).filter((p) => p.status === "done").map((p) => p.lesson_slug),
  );

  // The next lesson is simply the first one not yet finished.
  const nextLesson = A0_LESSONS.find((l) => !done.has(l.slug));
  const totalWords = allA0Words().length;
  const explainLang = lang as Lang;

  return (
    <>
      <h1 className="text-[28px] font-extrabold">{t.a0.dashGreeting}</h1>
      <p className="mt-1 text-[15px] text-ink-soft">{t.a0.sub}</p>

      {/* ---- continue where you left off --------------------------------- */}
      <section className="mt-6">
        <Card className="border-iris-line bg-iris-soft">
          <CardBody className="flex flex-wrap items-center justify-between gap-4">
            {nextLesson ? (
              <>
                <div className="min-w-0">
                  <span className="label text-iris">
                    {done.size === 0 ? t.a0.startHere : t.a0.nextLesson}
                  </span>
                  <p className="mt-1 text-[19px] font-bold">
                    {t.a0.lesson} {nextLesson.order} ·{" "}
                    {pick(nextLesson.title, explainLang)}
                  </p>
                </div>
                <Link href={`/anfaenger/lektion/${nextLesson.slug}`}>
                  <Button size="lg">
                    {t.common.start}
                    <ArrowRight size={16} aria-hidden />
                  </Button>
                </Link>
              </>
            ) : (
              <p className="text-[16px] font-semibold">{t.a0.allDone}</p>
            )}
          </CardBody>
        </Card>
      </section>

      {/* ---- progress ---------------------------------------------------- */}
      <section className="mt-4 grid gap-3 sm:grid-cols-2">
        <Card>
          <CardBody className="flex flex-col gap-3">
            <SkillBar
              label={t.a0.lessonsDone}
              value={(done.size / A0_LESSONS.length) * 100}
              hint={`${done.size} / ${A0_LESSONS.length}`}
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="tnum font-[family-name:var(--font-display)] text-[26px] font-extrabold leading-none">
              {knownWords ?? 0}
              <span className="text-[15px] font-semibold text-ink-faint">
                {" "}
                / {totalWords}
              </span>
            </p>
            <p className="mt-1 text-[12.5px] text-ink-faint">
              {t.a0.wordsLearned}
            </p>
          </CardBody>
        </Card>
      </section>

      {/* ---- all lessons -------------------------------------------------- */}
      <section className="mt-8">
        <h2 className="text-[19px] font-bold">{t.a0.lessonsTitle}</h2>
        <p className="mt-1 mb-4 text-[14.5px] text-ink-soft">
          {t.a0.lessonsSub}
        </p>

        <ul className="flex flex-col gap-2">
          {A0_LESSONS.map((lesson) => {
            const isDone = done.has(lesson.slug);
            return (
              <li key={lesson.slug}>
                <Link
                  href={`/anfaenger/lektion/${lesson.slug}`}
                  className="block rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-iris-line"
                >
                  <div className="flex items-center gap-3">
                    <span className="tnum font-[family-name:var(--font-display)] text-[20px] font-extrabold text-iris-line">
                      {String(lesson.order).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[16px] font-bold">
                        {pick(lesson.title, explainLang)}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-ink-faint">
                        {lesson.quiz.length} {t.a0.quickCheck.toLowerCase()} ·{" "}
                        {lesson.goals.length}{" "}
                        {t.a0.whatYouLearn.toLowerCase()}
                      </span>
                    </span>
                    <Badge tone={isDone ? "sage" : "neutral"}>
                      {isDone ? t.a0.done : t.a0.notStarted}
                    </Badge>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
