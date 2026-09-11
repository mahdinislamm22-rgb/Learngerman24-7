import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { allA0Questions } from "@/content/a0";
import type { Lang } from "@/lib/types";
import { Practice } from "@/components/a0/practice";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Üben" };

export default async function PracticePage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: progress } = await supabase
    .from("a0_progress")
    .select("lesson_slug")
    .eq("user_id", user!.id)
    .eq("status", "done");

  const doneSlugs = new Set((progress ?? []).map((p) => p.lesson_slug));

  // Only practise what has actually been taught — testing a beginner on a
  // lesson they have not opened yet teaches them nothing except that the
  // app is unfair.
  const questions = allA0Questions().filter((q) => doneSlugs.has(q.lessonSlug));

  return (
    <>
      <h1 className="text-[28px] font-extrabold">{t.a0.practiceTitle}</h1>
      <p className="mt-1 mb-6 text-[15px] text-ink-soft">{t.a0.practiceSub}</p>

      {questions.length === 0 ? (
        <Card>
          <CardBody className="flex flex-col items-start gap-3">
            <p className="max-w-[52ch] text-[15px] text-ink-soft">
              {t.a0.lessonsSub}
            </p>
            <Link href="/anfaenger/lektionen">
              <Button>{t.a0.startHere}</Button>
            </Link>
          </CardBody>
        </Card>
      ) : (
        <Practice questions={questions} explainLang={lang as Lang} />
      )}
    </>
  );
}
