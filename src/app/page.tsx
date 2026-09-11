import Link from "next/link";
import {
  BookOpen,
  Library,
  FileText,
  PenLine,
  Bot,
  Target,
  TrendingUp,
  Blocks,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getI18n } from "@/lib/i18n/server";
import { I18nProvider } from "@/components/i18n/provider";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import type { Dict } from "@/lib/i18n/shape";

const FEATURE_ICONS = {
  grammar: BookOpen,
  vocab: Library,
  reading: FileText,
  langElements: Blocks,
  writing: PenLine,
  tutor: Bot,
  exams: Target,
  progress: TrendingUp,
} as const;

export default async function HomePage() {
  const { lang, t } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";
  const features = Object.keys(FEATURE_ICONS) as (keyof Dict["home"]["f"])[];

  return (
    <I18nProvider lang={lang} t={t}>
      <div className="min-h-dvh">
        {/* ---- header ------------------------------------------------- */}
        <header className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8">
          <span className="font-[family-name:var(--font-display)] text-[18px] font-extrabold tracking-tight">
            Deutsch<span className="text-iris">B1</span>
          </span>
          <nav className="flex items-center gap-2">
            <LanguageSwitcher compact />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                {t.common.signIn}
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">{t.common.signUp}</Button>
            </Link>
          </nav>
        </header>

        {/* ---- hero ---------------------------------------------------- */}
        <section className="mx-auto max-w-[1080px] px-5 pb-4 pt-8 sm:px-8 sm:pt-14">
          <Badge tone="iris" className="mb-5">
            {t.home.badge}
          </Badge>
          <h1
            className={`max-w-[17ch] text-[clamp(2.1rem,6.5vw,3.5rem)] font-extrabold leading-[1.05] ${bn}`}
          >
            {t.home.heroLine1}
            <br />
            <span className="text-iris">{t.home.heroLine2}</span>
          </h1>
          <p
            className={`mt-5 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft ${bn}`}
          >
            {t.home.sub}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/register">
              <Button size="lg">{t.home.ctaPrimary}</Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="secondary">
                {t.home.ctaSecondary}
              </Button>
            </Link>
          </div>
        </section>

        {/* ---- the two paths -------------------------------------------- */}
        <section className="mx-auto max-w-[1080px] px-5 py-10 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-iris-line bg-iris-soft">
              <CardBody className="flex h-full flex-col gap-2 p-6">
                <span className="text-[22px]" aria-hidden>
                  🎯
                </span>
                <h2 className={`text-[20px] font-bold ${bn}`}>
                  {t.home.b1Title}
                </h2>
                <p className={`text-[15px] text-ink-soft ${bn}`}>
                  {t.home.b1Text}
                </p>
                <Link href="/dashboard" className="mt-auto pt-4">
                  <Button className="w-full sm:w-auto">{t.home.b1Cta}</Button>
                </Link>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="flex h-full flex-col gap-2 p-6">
                <span className="text-[22px]" aria-hidden>
                  🇩🇪
                </span>
                <h2 className={`text-[20px] font-bold ${bn}`}>
                  {t.home.a0Title}
                </h2>
                <p className={`text-[15px] text-ink-soft ${bn}`}>
                  {t.home.a0Text}
                </p>
                <Link href="/anfaenger" className="mt-auto pt-4">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    {t.home.a0Cta}
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* ---- features -------------------------------------------------- */}
        <section className="mx-auto max-w-[1080px] px-5 pb-12 sm:px-8">
          <h2 className={`mb-1 text-[22px] font-bold ${bn}`}>
            {t.home.featuresTitle}
          </h2>
          <p className={`mb-6 max-w-[54ch] text-[15px] text-ink-soft ${bn}`}>
            {t.home.featuresSub}
          </p>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((key) => {
              const Icon = FEATURE_ICONS[key];
              return (
                <li key={key}>
                  <Card className="h-full">
                    <CardBody className="flex h-full flex-col gap-2 p-4">
                      <Icon size={19} className="text-iris" aria-hidden />
                      <h3 className={`text-[15px] font-bold ${bn}`}>
                        {t.home.f[key].title}
                      </h3>
                      <p
                        className={`text-[13.5px] leading-relaxed text-ink-soft ${bn}`}
                      >
                        {t.home.f[key].text}
                      </p>
                    </CardBody>
                  </Card>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className="border-t border-line">
          <div className="mx-auto max-w-[1080px] px-5 py-6 sm:px-8">
            <p
              className={`max-w-[70ch] text-[12.5px] leading-relaxed text-ink-faint ${bn}`}
            >
              {t.home.disclaimer}
            </p>
          </div>
        </footer>
      </div>
    </I18nProvider>
  );
}
