import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import { I18nProvider } from "@/components/i18n/provider";
import { Sidebar } from "@/components/shell/sidebar";
import { BottomNav } from "@/components/shell/bottom-nav";
import { Topbar } from "@/components/shell/topbar";
import { daysUntil } from "@/lib/exam";

export default async function B1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // The proxy already redirects, but a layout that can't assume a user is
  // a layout that leaks. Belt and braces.
  if (!user) redirect("/login");

  const [{ data: profile }, { lang, t }] = await Promise.all([
    supabase
      .from("profiles")
      .select("display_name, exam_date, explanation_lang, daily_minutes")
      .eq("id", user.id)
      .single(),
    getI18n(),
  ]);

  const name =
    profile?.display_name ?? user.email?.split("@")[0] ?? "";

  return (
    <I18nProvider lang={lang} t={t}>
      <div className="flex min-h-dvh">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar name={name} daysLeft={daysUntil(profile?.exam_date)} />
          <main className="flex-1 px-5 pb-24 pt-6 sm:px-7 lg:pb-10">
            <div className="mx-auto w-full max-w-[880px]">{children}</div>
          </main>
        </div>
        <BottomNav />
      </div>
    </I18nProvider>
  );
}
