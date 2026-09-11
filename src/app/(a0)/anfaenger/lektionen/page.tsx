import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { A0_LESSONS } from "@/content/a0";
import { pick, type Lang } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Lektionen" };

export default async function LessonsPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: progress } = await supabase
    .from("a0_progress")
    .select("lesson_slug, status, score, total")
    .eq("user_id", user!.id);

  const byslug = new Map((progress ?? []).map((p) => [p.lesson_slug, p]));
  const explainLang = lang as Lang;

  return (
    <>
      <h1 className="text-[28px] font-extrabold">{t.a0.lessonsTitle}</h1>
      <p className="mt-1 mb-6 text-[15px] text-ink-soft">{t.a0.lessonsSub}</p>

      <ol className="flex flex-col gap-3">
        {A0_LESSONS.map((lesson) => {
          const p = byslug.get(lesson.slug);
          const isDone = p?.status === "done";

          return (
            <li key={lesson.slug}>
              <Link
                href={`/anfaenger/lektion/${lesson.slug}`}
                className="block rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-iris-line"
              >
                <div className="flex items-start gap-4">
                  <span className="tnum font-[family-name:var(--font-display)] text-[26px] font-extrabold leading-none text-iris-line">
                    {String(lesson.order).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-[17px] font-bold">
                        {pick(lesson.title, explainLang)}
                      </h2>
                      <Badge tone={isDone ? "sage" : "neutral"}>
                        {isDone ? t.a0.done : t.a0.notStarted}
                      </Badge>
                    </div>

                    <ul className="mt-2 flex flex-col gap-1">
                      {lesson.goals.map((goal, i) => (
                        <li
                          key={i}
                          className={`flex gap-2 text-[14px] text-ink-soft ${
                            lang === "bn" ? "bn" : ""
                          }`}
                        >
                          <span aria-hidden className="text-iris-line">
                            —
                          </span>
                          {pick(goal, explainLang)}
                        </li>
                      ))}
                    </ul>

                    {isDone && p?.score != null ? (
                      <p className="tnum mt-2 font-[family-name:var(--font-mono)] text-[12px] text-sage">
                        {t.a0.quickCheck}: {p.score}/{p.total}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
