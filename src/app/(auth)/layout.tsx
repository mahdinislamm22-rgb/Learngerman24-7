import Link from "next/link";
import { getI18n } from "@/lib/i18n/server";
import { I18nProvider } from "@/components/i18n/provider";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang, t } = await getI18n();

  return (
    <I18nProvider lang={lang} t={t}>
      <div className="flex min-h-dvh flex-col">
        <header className="flex items-center gap-3 px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-[17px] font-extrabold tracking-tight text-ink"
          >
            Deutsch<span className="text-iris">B1</span>
          </Link>
          <div className="ml-auto">
            <LanguageSwitcher compact />
          </div>
        </header>

        <main className="flex flex-1 items-start justify-center px-5 pb-16 pt-4 sm:items-center sm:pt-0">
          <div className="w-full max-w-[400px]">{children}</div>
        </main>
      </div>
    </I18nProvider>
  );
}
