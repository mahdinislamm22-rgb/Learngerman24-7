import Link from "next/link";
import type { Metadata } from "next";
import { requestReset } from "../actions";
import { AuthForm } from "@/components/auth/auth-form";
import { Input, Field } from "@/components/ui/input";
import { getI18n } from "@/lib/i18n/server";

export const metadata: Metadata = { title: "Reset password" };

export default async function ForgotPasswordPage() {
  const { t, lang } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  return (
    <>
      <h1 className={`mb-1.5 text-[26px] font-extrabold ${bn}`}>
        {t.auth.forgotTitle}
      </h1>
      <p className={`mb-6 text-[15px] text-ink-soft ${bn}`}>
        {t.auth.forgotSub}
      </p>

      <AuthForm action={requestReset} submitLabel={t.auth.sendLink}>
        <Field label={t.auth.email}>
          <Input name="email" type="email" autoComplete="email" required />
        </Field>
      </AuthForm>

      <p className={`mt-5 text-[13.5px] text-ink-soft ${bn}`}>
        <Link href="/login" className="text-iris hover:underline">
          {t.auth.backToLogin}
        </Link>
      </p>
    </>
  );
}
