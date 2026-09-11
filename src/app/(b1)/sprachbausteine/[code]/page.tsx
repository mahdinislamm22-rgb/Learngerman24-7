import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getI18n } from "@/lib/i18n/server";
import { getSbSet, SB_SETS } from "@/content/sprachbausteine";
import { pick, type Lang } from "@/lib/types";
import { SbRunner } from "@/components/sprachbausteine/runner";
import { cn } from "@/lib/cn";

export async function generateStaticParams() {
  return SB_SETS.map((s) => ({ code: s.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  return { title: `Sprachbausteine ${code}` };
}

export default async function SbSetPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const set = getSbSet(code);
  if (!set) notFound();

  const { lang, t } = await getI18n();
  const explainLang = lang as Lang;
  const bn = lang === "bn";

  return (
    <>
      <Link
        href="/sprachbausteine"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
      >
        <ArrowLeft size={14} aria-hidden />
        {t.nav.langElements}
      </Link>

      <h1 className="mt-4 font-[family-name:var(--font-mono)] text-[12px] font-semibold text-ink-faint">
        {set.code}
      </h1>
      <h2 className={cn("mt-1 text-[24px] font-extrabold leading-tight", bn && "bn")}>
        {pick(set.title, explainLang)}
      </h2>
      <p className={cn("mt-1.5 max-w-[62ch] text-[14.5px] text-ink-soft", bn && "bn")}>
        {pick(set.intro, explainLang)}
      </p>

      <div className="mt-6">
        <SbRunner set={set} explainLang={explainLang} />
      </div>
    </>
  );
}
