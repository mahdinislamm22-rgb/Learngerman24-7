"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/provider";
import type { AuthState } from "@/app/(auth)/actions";

function Submit({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  const { t } = useI18n();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? t.common.oneMoment : children}
    </Button>
  );
}

/**
 * Shared shell for login / register / reset. Errors say what went wrong
 * and what to do about it — no apologies, no vagueness.
 */
export function AuthForm({
  action,
  submitLabel,
  children,
}: {
  action: (prev: AuthState, formData: FormData) => Promise<AuthState>;
  submitLabel: string;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState<AuthState, FormData>(action, {});
  const { lang } = useI18n();
  const bn = lang === "bn" ? "bn" : "";

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {children}

      {state.error ? (
        <p
          role="alert"
          className={`rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-3 py-2.5 text-[13.5px] text-clay ${bn}`}
        >
          {state.error}
        </p>
      ) : null}

      {state.message ? (
        <p
          role="status"
          className={`rounded-[var(--radius-control)] border border-sage/25 bg-sage-soft px-3 py-2.5 text-[13.5px] text-sage ${bn}`}
        >
          {state.message}
        </p>
      ) : null}

      <Submit>{submitLabel}</Submit>
    </form>
  );
}
