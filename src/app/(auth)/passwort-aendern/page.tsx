import type { Metadata } from "next";
import { updatePassword } from "../actions";
import { AuthForm } from "@/components/auth/auth-form";
import { Input, Field } from "@/components/ui/input";
import { getI18n } from "@/lib/i18n/server";

export const metadata: Metadata = { title: "New password" };

export default async function UpdatePasswordPage() {
  const { t, lang } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  return (
    <>
      <h1 className={`mb-1.5 text-[26px] font-extrabold ${bn}`}>
        {t.auth.newPassTitle}
      </h1>
      <p className={`mb-6 text-[15px] text-ink-soft ${bn}`}>
        {t.auth.newPassSub}
      </p>

      <AuthForm action={updatePassword} submitLabel={t.auth.savePassword}>
        <Field label={t.auth.newPassword} hint={t.auth.passwordHint}>
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </Field>
      </AuthForm>
    </>
  );
}
