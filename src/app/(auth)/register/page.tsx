import Link from "next/link";
import type { Metadata } from "next";
import { register } from "../actions";
import { AuthForm } from "@/components/auth/auth-form";
import { Input, Field } from "@/components/ui/input";
import { getI18n } from "@/lib/i18n/server";

export const metadata: Metadata = { title: "Register" };

export default async function RegisterPage() {
  const { t, lang } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  return (
    <>
      <h1 className={`mb-1.5 text-[26px] font-extrabold ${bn}`}>
        {t.auth.registerTitle}
      </h1>
      <p className={`mb-6 text-[15px] text-ink-soft ${bn}`}>
        {t.auth.registerSub}
      </p>

      <AuthForm action={register} submitLabel={t.auth.registerTitle}>
        <Field label={t.auth.name} hint={t.auth.nameHint}>
          <Input name="display_name" autoComplete="name" />
        </Field>
        <Field label={t.auth.email}>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@example.com"
          />
        </Field>
        <Field label={t.auth.password} hint={t.auth.passwordHint}>
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </Field>
      </AuthForm>

      <p className={`mt-5 text-[13.5px] text-ink-soft ${bn}`}>
        {t.auth.hasAccount}{" "}
        <Link href="/login" className="text-iris hover:underline">
          {t.common.signIn}
        </Link>
      </p>
    </>
  );
}
