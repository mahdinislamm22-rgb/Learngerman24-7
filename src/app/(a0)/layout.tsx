import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { I18nProvider } from "@/components/i18n/provider";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { A0Nav } from "@/components/shell/a0-nav";
import { logout } from "@/app/(auth)/actions";

export default async function A0Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { lang, t } = await getI18n();

  return (
    <I18nProvider lang={lang} t={t}>
      <div className="flex min-h-dvh flex-col">
        <header className="flex flex-wrap items-center gap-3 px-5 py-3 sm:px-7">
          <Link
            href="/anfaenger"
            className="font-[family-name:var(--font-display)] text-[16px] font-extrabold tracking-tight"
          >
            Deutsch<span className="text-iris">A0</span>
          </Link>

          <div className="ml-auto flex items-center gap-2.5">
            <LanguageSwitcher compact />
            <Link
              href="/dashboard"
              className="hidden text-[13px] font-semibold text-ink-soft transition-colors hover:text-iris sm:inline"
            >
              {t.nav.switchToB1}
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="text-[13px] font-semibold text-ink-faint transition-colors hover:text-clay"
              >
                {t.common.signOut}
              </button>
            </form>
          </div>
        </header>

        <A0Nav />

        <main className="flex-1 px-5 pb-24 pt-6 sm:px-7 lg:pb-12">
          <div className="mx-auto w-full max-w-[760px]">{children}</div>
        </main>
      </div>
    </I18nProvider>
  );
}
