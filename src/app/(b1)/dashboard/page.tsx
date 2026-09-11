import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { fill } from "@/lib/i18n";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkillBar } from "@/components/ui/progress";
import { ExamDateForm } from "@/components/dashboard/exam-date-form";
import { SECTIONS, WRITTEN_PASS, WRITTEN_TOTAL, daysUntil } from "@/lib/exam";
import type { Dict } from "@/lib/i18n/shape";

export const metadata: Metadata = { title: "Dashboard" };

/** Dimensions shown on the dashboard, in exam order. */
const TRACKED = [
  { key: "grammatik", label: "grammar" },
  { key: "wortschatz", label: "vocab" },
  { key: "lesen", label: "reading" },
  { key: "sprachbausteine", label: "langElements" },
  { key: "schreiben", label: "writing" },
  { key: "hoeren", label: "listening" },
] as const satisfies readonly { key: string; label: keyof Dict["nav"] }[];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [
    { data: profile },
    { data: mastery },
    { count: attemptCount },
    { count: openMistakes },
    { count: writingCount },
    { count: mockCount },
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("display_name, exam_date, daily_minutes")
      .eq("id", user!.id)
      .single(),
    supabase
      .from("skill_mastery")
      .select("dimension, score")
      .eq("user_id", user!.id),
    supabase
      .from("attempts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user!.id),
    supabase
      .from("mistakes")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user!.id)
      .eq("status", "open"),
    supabase
      .from("writing_submissions")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user!.id),
    supabase
      .from("mock_attempts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user!.id)
      .not("finished_at", "is", null),
  ]);

  const scores = new Map(
    (mastery ?? []).map((m) => [m.dimension as string, Number(m.score) * 100]),
  );

  const name = profile?.display_name ?? "";
  const left = daysUntil(profile?.exam_date);
  const hasData = (attemptCount ?? 0) > 0;

  return (
    <>
      <h1 className={`text-[28px] font-extrabold ${bn}`}>
        {name ? fill(t.dash.greeting, { name }) : t.dash.greetingNoName}
      </h1>
      <p className={`mt-1 text-[15px] text-ink-soft ${bn}`}>{t.dash.sub}</p>

      {/* ---- countdown ------------------------------------------------ */}
      <section className="mt-6">
        {left === null ? (
          <Card>
            <CardBody className="flex flex-col gap-3">
              <CardTitle className={bn}>{t.dash.examWhen}</CardTitle>
              <p className={`max-w-[52ch] text-[14.5px] text-ink-soft ${bn}`}>
                {t.dash.examWhenText}
              </p>
              <ExamDateForm />
            </CardBody>
          </Card>
        ) : (
          <Card>
            <CardBody className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <span className="label">{t.dash.daysLeft}</span>
                <p className="tnum font-[family-name:var(--font-display)] text-[42px] font-extrabold leading-none">
                  {Math.max(left, 0)}
                  <span className="ml-1.5 text-[16px] font-semibold text-ink-soft">
                    {left === 1 ? t.dash.day : t.dash.days}
                  </span>
                </p>
              </div>
              <div className="h-10 w-px bg-line" aria-hidden />
              <div>
                <span className="label">{t.dash.passMark}</span>
                <p className="tnum font-[family-name:var(--font-display)] text-[22px] font-extrabold leading-tight">
                  {WRITTEN_PASS}
                  <span className="text-ink-faint">/{WRITTEN_TOTAL}</span>
                </p>
                <p className={`text-[12.5px] text-ink-faint ${bn}`}>
                  {t.dash.passMarkNote}
                </p>
              </div>
            </CardBody>
          </Card>
        )}
      </section>

      {/* ---- next action --------------------------------------------- */}
      <section className="mt-4">
        <Card className="border-iris-line bg-iris-soft">
          <CardBody className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <CardTitle className={bn}>{t.dash.nextUpTitle}</CardTitle>
              <p className={`mt-1 max-w-[54ch] text-[14.5px] text-ink-soft ${bn}`}>
                {t.dash.nextUpText}
              </p>
            </div>
            <Link href="/schreiben">
              <Button>{t.common.start}</Button>
            </Link>
          </CardBody>
        </Card>
      </section>

      {/* ---- skills --------------------------------------------------- */}
      <section className="mt-8">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className={`text-[19px] font-bold ${bn}`}>
            {t.dash.strengthsTitle}
          </h2>
          {!hasData ? <Badge tone="neutral">{t.dash.noDataBadge}</Badge> : null}
        </div>

        <Card>
          <CardBody className="flex flex-col gap-4">
            {!hasData ? (
              <p className={`max-w-[56ch] text-[14.5px] text-ink-soft ${bn}`}>
                {t.dash.noDataText}
              </p>
            ) : (
              TRACKED.map((row) => (
                <SkillBar
                  key={row.key}
                  label={t.nav[row.label]}
                  value={scores.get(row.key) ?? 0}
                />
              ))
            )}
          </CardBody>
        </Card>
      </section>

      {/* ---- counters -------------------------------------------------- */}
      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label={t.dash.statExercises} value={attemptCount ?? 0} />
        <Stat
          label={t.dash.statOpenMistakes}
          value={openMistakes ?? 0}
          tone="clay"
        />
        <Stat label={t.dash.statTexts} value={writingCount ?? 0} />
        <Stat label={t.dash.statMocks} value={mockCount ?? 0} />
      </section>

      {/* ---- exam structure reference --------------------------------- */}
      <section className="mt-8">
        <h2 className={`mb-1 text-[19px] font-bold ${bn}`}>
          {t.dash.examTableTitle}
        </h2>
        <p className={`mb-4 max-w-[58ch] text-[14.5px] text-ink-soft ${bn}`}>
          {t.dash.examTableSub}
        </p>
        <Card>
          <div className="scroll-x">
            <table className="w-full min-w-[440px] text-[14px]">
              <thead>
                <tr className="border-b border-line bg-surface-2">
                  <th className="label px-4 py-2.5 text-left">
                    {t.dash.colPart}
                  </th>
                  <th className="label px-4 py-2.5 text-right">
                    {t.dash.colItems}
                  </th>
                  <th className="label px-4 py-2.5 text-right">
                    {t.dash.colPoints}
                  </th>
                  <th className="label px-4 py-2.5 text-right">
                    {t.dash.colTime}
                  </th>
                </tr>
              </thead>
              <tbody>
                {SECTIONS.map((s) => (
                  <tr key={s.key} className="border-b border-line last:border-0">
                    <td className="px-4 py-2.5">
                      <span className="font-semibold">{s.label}</span>
                      <span className="ml-2 text-[12.5px] text-ink-faint">
                        {s.labelEn}
                      </span>
                    </td>
                    <td className="tnum px-4 py-2.5 text-right text-ink-soft">
                      {s.items ?? "—"}
                    </td>
                    <td className="tnum px-4 py-2.5 text-right font-semibold">
                      {s.points}
                    </td>
                    <td className="tnum px-4 py-2.5 text-right text-ink-soft">
                      {s.minutes ? `${s.minutes} min` : t.dash.inBlock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <p
          className={`mt-3 max-w-[62ch] text-[12.5px] leading-relaxed text-ink-faint ${bn}`}
        >
          {t.dash.sourceNote}
        </p>
      </section>

      <p className={`mt-8 text-[13px] text-ink-faint ${bn}`}>
        {t.dash.phaseNote}{" "}
        <Link href="/schreiben" className="text-iris hover:underline">
          {t.dash.nextUpTitle}
        </Link>
      </p>
    </>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "clay";
}) {
  return (
    <Card>
      <CardBody className="p-4">
        <p
          className={`tnum font-[family-name:var(--font-display)] text-[26px] font-extrabold leading-none ${
            tone === "clay" && value > 0 ? "text-clay" : ""
          }`}
        >
          {value}
        </p>
        <p className="mt-1 text-[12.5px] text-ink-faint">{label}</p>
      </CardBody>
    </Card>
  );
}
