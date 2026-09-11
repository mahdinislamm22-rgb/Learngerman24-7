import Link from "next/link";
import type { Metadata } from "next";
import { PenLine, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { SCHREIBEN_TASKS } from "@/content/schreiben";
import { pick, type Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SCORE_MAX } from "@/lib/ai/feedback-schema";

export const metadata: Metadata = { title: "Schreiben" };

export default async function SchreibenPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: submissions } = await supabase
    .from("writing_submissions")
    .select("id, task_code, scores, created_at")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  // Best attempt per task, plus the most recent submission id to link to.
  const best = new Map<string, { total: number; id: string }>();
  for (const s of submissions ?? []) {
    const total = Number((s.scores as { total?: number } | null)?.total ?? 0);
    const code = s.task_code as string;
    const current = best.get(code);
    if (!current || total > current.total) {
      best.set(code, { total, id: s.id as string });
    }
  }

  const done = best.size;
  const explainLang = lang as Lang;

  return (
    <>
      <h1 className={`text-[28px] font-extrabold ${bn}`}>{t.nav.writing}</h1>
      <p className={`mt-1 max-w-[62ch] text-[15px] text-ink-soft ${bn}`}>
        {t.schreiben.intro}
      </p>

      <Card className="mt-6 border-iris-line bg-iris-soft">
        <CardBody className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <div>
            <span className="label text-iris">{t.schreiben.pointsLabel}</span>
            <p className="tnum font-[family-name:var(--font-display)] text-[30px] font-extrabold leading-none">
              45<span className="text-[16px] text-ink-soft">/225</span>
            </p>
          </div>
          <p className={`max-w-[46ch] text-[14px] text-ink-soft ${bn}`}>
            {t.schreiben.pointsNote}
          </p>
          <div className="ml-auto text-right">
            <span className="label">{t.schreiben.tasksDone}</span>
            <p className="tnum font-[family-name:var(--font-display)] text-[22px] font-extrabold">
              {done}
              <span className="text-ink-faint">/{SCHREIBEN_TASKS.length}</span>
            </p>
          </div>
        </CardBody>
      </Card>

      <ul className="mt-6 flex flex-col gap-2">
        {SCHREIBEN_TASKS.map((task) => {
          const result = best.get(task.code);
          const passed = result && result.total >= SCORE_MAX.total * 0.6;

          return (
            <li key={task.code}>
              <Link
                href={`/schreiben/${task.code}`}
                className="block rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-iris-line"
              >
                <div className="flex items-start gap-3.5">
                  <PenLine
                    size={18}
                    className="mt-1 shrink-0 text-iris"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-[family-name:var(--font-mono)] text-[11px] font-semibold text-ink-faint">
                        {task.code}
                      </span>
                      <Badge tone="neutral">
                        {t.schreiben.cat[task.category]}
                      </Badge>
                      <Badge tone={task.register === "informell" ? "sage" : "iris"}>
                        {task.register}
                      </Badge>
                    </div>
                    <p className={`mt-1.5 text-[15px] leading-snug ${bn}`}>
                      {pick(task.situation, explainLang)}
                    </p>
                  </div>

                  {result ? (
                    <span className="shrink-0 text-right">
                      <span
                        className={`tnum block font-[family-name:var(--font-display)] text-[19px] font-extrabold ${
                          passed ? "text-sage" : "text-clay"
                        }`}
                      >
                        {result.total}
                        <span className="text-[12px] text-ink-faint">/45</span>
                      </span>
                      {passed ? (
                        <Check
                          size={14}
                          className="ml-auto mt-0.5 text-sage"
                          aria-hidden
                        />
                      ) : null}
                    </span>
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {submissions && submissions.length > 0 ? (
        <section className="mt-8">
          <h2 className={`mb-3 text-[19px] font-bold ${bn}`}>
            {t.schreiben.historyTitle}
          </h2>
          <Card>
            <ul className="divide-y divide-line">
              {submissions.slice(0, 10).map((s) => {
                const total = Number(
                  (s.scores as { total?: number } | null)?.total ?? 0,
                );
                return (
                  <li key={s.id}>
                    <Link
                      href={`/schreiben/ergebnis/${s.id}`}
                      className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-surface-2"
                    >
                      <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
                        {s.task_code as string}
                      </span>
                      <span className="text-[13px] text-ink-soft">
                        {new Date(s.created_at as string).toLocaleDateString()}
                      </span>
                      <span className="tnum ml-auto font-semibold">
                        {total}
                        <span className="text-ink-faint">/45</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card>
        </section>
      ) : null}
    </>
  );
}
