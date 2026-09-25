import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getI18n } from "@/lib/i18n/server";
import { getModelltest, MODELLTESTS } from "@/content/modelltests";
import { pick, type Lang } from "@/lib/types";
import { ExamRunner } from "@/components/pruefungen/exam-runner";
import { cn } from "@/lib/cn";

export async function generateStaticParams() {
  return MODELLTESTS.map((m) => ({ code: m.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  return { title: `Modelltest ${code}` };
}

export default async function ModelltestPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const mt = getModelltest(code);
  if (!mt) notFound();

  const { lang, t } = await getI18n();
  const explainLang = lang as Lang;
  const bn = lang === "bn";

  return (
    <>
      <Link
        href="/pruefungen"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris"
      >
        <ArrowLeft size={14} aria-hidden />
        {t.nav.exams}
      </Link>

      <h1 className={cn("mt-4 text-[26px] font-extrabold leading-tight", bn && "bn")}>
        {pick(mt.title, explainLang)}
      </h1>
      <p className={cn("mt-1 text-[14.5px] text-ink-soft", bn && "bn")}>
        {pick(mt.focus, explainLang)}
      </p>

      <div className="mt-6">
        <ExamRunner mt={mt} explainLang={explainLang} />
      </div>
    </>
  );
}
