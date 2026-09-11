import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, RotateCcw, CircleAlert } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { getSchreibenTask } from "@/content/schreiben";
import { feedbackSchema } from "@/lib/ai/feedback-schema";
import type { Lang } from "@/lib/types";
import { FeedbackReport } from "@/components/schreiben/feedback-report";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Ergebnis" };

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: row } = await supabase
    .from("writing_submissions")
    .select("task_code, text, word_count, seconds_spent, feedback, created_at, model")
    .eq("id", id)
    .eq("user_id", user!.id)
    .maybeSingle();

  if (!row) notFound();

  const task = getSchreibenTask(row.task_code as string);
  if (!task) notFound();

  // Validate rather than cast: a row written by an older version of the
  // schema should show a clear message, not crash the page.
  const parsed = feedbackSchema.safeParse(row.feedback);
  if (!parsed.success) {
    return (
      <>
        <h1 className="text-[24px] font-extrabold">{t.schreiben.resultTitle}</h1>
        <p className={`mt-3 text-[15px] text-clay ${bn}`}>
          {t.schreiben.feedbackUnreadable}
        </p>
        <Link href={`/schreiben/${row.task_code}`} className="mt-4 inline-block">
          <Button>{t.schreiben.tryAgain}</Button>
        </Link>
      </>
    );
  }

  const minutes = Math.round(Number(row.seconds_spent ?? 0) / 60);

  return (
    <>
      <Link
        href="/schreiben"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
      >
        <ArrowLeft size={14} aria-hidden />
        {t.nav.writing}
      </Link>

      <div className="mt-4 mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h1 className={`text-[26px] font-extrabold ${bn}`}>
          {t.schreiben.resultTitle}
        </h1>
        <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
          {task.code} · {row.word_count} {t.schreiben.words}
          {minutes > 0 ? ` · ${minutes} min` : ""}
        </span>
      </div>

      <FeedbackReport
        feedback={parsed.data}
        task={task}
        originalText={row.text as string}
        explainLang={lang as Lang}
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/schreiben/${task.code}`}>
          <Button>
            <RotateCcw size={15} aria-hidden />
            {t.schreiben.tryAgain}
          </Button>
        </Link>
        <Link href="/fehler">
          <Button variant="secondary">
            <CircleAlert size={15} aria-hidden />
            {t.nav.mistakes}
          </Button>
        </Link>
      </div>

      <p className="mt-6 text-[12px] text-ink-faint">
        {t.schreiben.correctedBy} {String(row.model ?? "—")}
      </p>
    </>
  );
}
