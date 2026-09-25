import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Target, Lock } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { modelltestPlan, MT_POINTS } from "@/content/modelltests";
import { pick, type Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Modelltests" };

export default async function PruefungenPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: attempts } = await supabase
    .from("modelltest_attempts")
    .select("code, lesen_points, sprachbausteine_points, hoeren_points, schreiben_points, created_at")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  const best = new Map<string, number>();
  for (const a of attempts ?? []) {
    const total =
      Number(a.lesen_points ?? 0) +
      Number(a.sprachbausteine_points ?? 0) +
      Number(a.hoeren_points ?? 0) +
      Number(a.schreiben_points ?? 0);
    const code = String(a.code);
    if (!best.has(code) || total > (best.get(code) ?? 0)) best.set(code, total);
  }

  const explainLang = lang as Lang;
  const bn = lang === "bn";
  const plan = modelltestPlan();
  const ready = plan.filter((p) => p.ready).length;

  return (
    <>
      <h1 className={cn("text-[28px] font-extrabold", bn && "bn")}>{t.pruefungen.title}</h1>
      <p className={cn("mt-1 max-w-[62ch] text-[15px] text-ink-soft", bn && "bn")}>
        {t.pruefungen.sub}
      </p>

      <Card className="mt-5 border-iris-line bg-iris-soft">
        <CardBody className="flex flex-col gap-1.5">
          <span className="label text-iris">{t.pruefungen.formatTitle}</span>
          <p className={cn("text-[14px] leading-relaxed", bn && "bn")}>{t.pruefungen.formatText}</p>
          <p className="tnum mt-1 text-[13px] text-ink-soft">
            {ready} / {plan.length} {t.pruefungen.available}
          </p>
        </CardBody>
      </Card>

      <ul className="mt-6 flex flex-col gap-2">
        {plan.map((p) => {
          const score = p.code ? best.get(p.code) : undefined;
          const passed = score !== undefined && score >= MT_POINTS.pass;

          if (!p.ready) {
            return (
              <li key={p.nr}>
                <div className="flex items-start gap-3.5 rounded-[var(--radius-card)] border border-dashed border-line bg-surface/50 p-4">
                  <Lock size={17} className="mt-1 shrink-0 text-ink-faint" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-[15px] font-semibold text-ink-soft">
                        Modelltest {p.nr}
                      </h2>
                      <Badge className={bn ? "bn" : undefined} tone="neutral">
                        {t.pruefungen.comingSoon}
                      </Badge>
                    </div>
                    <p className={cn("mt-1 text-[13.5px] text-ink-faint", bn && "bn")}>
                      {pick(p.theme, explainLang)}
                    </p>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={p.nr}>
              <Link
                href={`/pruefungen/${p.code}`}
                className="block rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-iris-line"
              >
                <div className="flex items-start gap-3.5">
                  <Target size={18} className="mt-1 shrink-0 text-iris" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className={cn("text-[16px] font-bold", bn && "bn")}>
                        Modelltest {p.nr}
                      </h2>
                      <Badge tone="neutral">{p.code}</Badge>
                      {score !== undefined ? (
                        <Badge tone={passed ? "sage" : "clay"}>
                          {Math.round(score)} / {MT_POINTS.total}
                        </Badge>
                      ) : null}
                    </div>
                    <p className={cn("mt-1.5 text-[14px] text-ink-soft", bn && "bn")}>
                      {pick(p.theme, explainLang)}
                    </p>
                    <p className="mt-2 text-[12px] text-ink-faint">
                      60 Items + 1 Brief · {MT_POINTS.total} Punkte · ~150 min
                    </p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 text-ink-faint" aria-hidden />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className={cn("mt-6 text-[12.5px] text-ink-faint", bn && "bn")}>
        {t.common.practiceMaterial}
      </p>
    </>
  );
}
