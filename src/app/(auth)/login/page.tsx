import Link from "next/link";
import type { Metadata } from "next";
import { login } from "../actions";
import { AuthForm } from "@/components/auth/auth-form";
import { Input, Field } from "@/components/ui/input";
import { getI18n } from "@/lib/i18n/server";

export const metadata: Metadata = { title: "Login" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const { t, lang } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  return (
    <>
      <h1 className={`mb-1.5 text-[26px] font-extrabold ${bn}`}>
        {t.auth.loginTitle}
      </h1>
      <p className={`mb-6 text-[15px] text-ink-soft ${bn}`}>
        {t.auth.loginSub}
      </p>

      <AuthForm action={login} submitLabel={t.common.signIn}>
        <input type="hidden" name="next" value={next ?? "/dashboard"} />
        <Field label={t.auth.email}>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@example.com"
          />
        </Field>
        <Field label={t.auth.password}>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </Field>
      </AuthForm>

      <div
        className={`mt-5 flex flex-col gap-1.5 text-[13.5px] text-ink-soft ${bn}`}
      >
        <Link href="/passwort-vergessen" className="text-iris hover:underline">
          {t.auth.forgotLink}
        </Link>
        <span>
          {t.auth.noAccount}{" "}
          <Link href="/register" className="text-iris hover:underline">
            {t.common.signUp}
          </Link>
        </span>
      </div>
    </>
  );
}
