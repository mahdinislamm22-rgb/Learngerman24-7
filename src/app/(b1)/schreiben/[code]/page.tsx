import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { getSchreibenTask, SCHREIBEN_TASKS } from "@/content/schreiben";
import { pick, type Lang } from "@/lib/types";
import { WritingEditor, UsefulPhrases } from "@/components/schreiben/editor";
import { Card, CardBody } from "@/components/ui/card";

export async function generateStaticParams() {
  return SCHREIBEN_TASKS.map((t) => ({ code: t.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  return { title: `Schreiben ${code}` };
}

export default async function TaskPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const task = getSchreibenTask(code);
  if (!task) notFound();

  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";
  const explainLang = lang as Lang;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: draft } = await supabase
    .from("writing_drafts")
    .select("text")
    .match({ user_id: user!.id, task_code: code })
    .maybeSingle();

  return (
    <>
      <Link
        href="/schreiben"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
      >
        <ArrowLeft size={14} aria-hidden />
        {t.nav.writing}
      </Link>

      <h1 className="mt-4 font-[family-name:var(--font-mono)] text-[12px] font-semibold text-ink-faint">
        {task.code}
      </h1>

      {/* ---- the task ------------------------------------------------- */}
      <Card className="mt-2">
        <CardBody className="flex flex-col gap-3">
          <p className={`text-[15px] text-ink-soft ${bn}`}>
            {pick(task.situation, explainLang)}
          </p>
          <p className="prose-de border-l-[3px] border-iris pl-3.5 text-[16px] leading-relaxed">
            {task.taskDe}
          </p>
          <p className={`text-[13px] text-ink-faint ${bn}`}>
            {t.schreiben.taskNote}
          </p>
        </CardBody>
      </Card>

      <div className="mt-6">
        <WritingEditor
          task={task}
          initialText={(draft?.text as string) ?? ""}
          explainLang={explainLang}
        />
      </div>

      <UsefulPhrases task={task} explainLang={explainLang} />
    </>
  );
}
