import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getI18n } from "@/lib/i18n/server";
import { getLesenSet, LESEN_SETS } from "@/content/lesen";
import { pick, type Lang } from "@/lib/types";
import { LesenRunner } from "@/components/lesen/runner";
import { cn } from "@/lib/cn";

export async function generateStaticParams() {
  return LESEN_SETS.map((s) => ({ code: s.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  return { title: `Leseverstehen ${code}` };
}

export default async function LesenSetPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const set = getLesenSet(code);
  if (!set) notFound();

  const { lang, t } = await getI18n();
  const explainLang = lang as Lang;
  const bn = lang === "bn";

  return (
    <>
      <Link
        href="/lesen"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
      >
        <ArrowLeft size={14} aria-hidden />
        {t.nav.reading}
      </Link>

      <h1 className="mt-4 font-[family-name:var(--font-mono)] text-[12px] font-semibold text-ink-faint">
        {set.code}
      </h1>
      <h2 className={cn("mt-1 text-[24px] font-extrabold leading-tight", bn && "bn")}>
        {pick(set.title, explainLang)}
      </h2>

      <div className="mt-6">
        <LesenRunner set={set} explainLang={explainLang} />
      </div>
    </>
  );
}
