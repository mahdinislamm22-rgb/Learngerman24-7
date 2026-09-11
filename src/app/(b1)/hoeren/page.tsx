import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Headphones } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { HOER_SETS, HOER_TOTAL_POINTS } from "@/content/hoeren";
import { pick, type Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Hörverstehen" };

export default async function HoerenPage() {
  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: progress } = await supabase
    .from("grammar_progress")
    .select("topic_slug, best_test")
    .eq("user_id", user!.id)
    .like("topic_slug", "hoeren:%");

  const byCode = new Map(
    (progress ?? []).map((r) => [String(r.topic_slug).replace("hoeren:", ""), r]),
  );

  const explainLang = lang as Lang;
  const bn = lang === "bn";

  return (
    <>
      <h1 className={cn("text-[28px] font-extrabold", bn && "bn")}>{t.hoeren.title}</h1>
      <p className={cn("mt-1 max-w-[62ch] text-[15px] text-ink-soft", bn && "bn")}>
        {t.hoeren.sub}
      </p>

      <Card className="mt-5 border-iris-line bg-iris-soft">
        <CardBody className="flex flex-col gap-1.5">
          <span className="label text-iris">{t.hoeren.formatTitle}</span>
          <p className={cn("text-[14px] leading-relaxed", bn && "bn")}>{t.hoeren.formatText}</p>
        </CardBody>
      </Card>

      <Card className="mt-3 border-amber/30 bg-amber-soft">
        <CardBody className="flex flex-col gap-1.5">
          <span className="label text-amber">{t.hoeren.voiceTitle}</span>
          <p className={cn("text-[13.5px] leading-relaxed", bn && "bn")}>{t.hoeren.voiceText}</p>
        </CardBody>
      </Card>

      <ul className="mt-6 flex flex-col gap-2">
        {HOER_SETS.map((set) => {
          const row = byCode.get(set.code);
          const score = row ? Number(row.best_test ?? 0) : null;
          return (
            <li key={set.code}>
              <Link
                href={`/hoeren/${set.code}`}
                className="block rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-iris-line"
              >
                <div className="flex items-start gap-3.5">
                  <Headphones size={18} className="mt-1 shrink-0 text-iris" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className={cn("text-[16px] font-bold", bn && "bn")}>
                        {pick(set.title, explainLang)}
                      </h2>
                      <Badge tone="neutral">{set.code}</Badge>
                      {score !== null ? (
                        <Badge tone={score >= 80 ? "sage" : score >= 60 ? "iris" : "clay"}>{score}%</Badge>
                      ) : (
                        <Badge className={bn ? "bn" : undefined} tone="neutral">{t.hoeren.notStarted}</Badge>
                      )}
                    </div>
                    <p className={cn("mt-1.5 text-[14px] leading-snug text-ink-soft", bn && "bn")}>
                      {pick(set.intro, explainLang)}
                    </p>
                    <p className="mt-2 text-[12px] text-ink-faint">
                      20 Items · {HOER_TOTAL_POINTS} Punkte
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
