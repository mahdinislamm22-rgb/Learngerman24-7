"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { saveExamDate, type ProfileState } from "@/app/(b1)/dashboard/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/components/i18n/provider";

function Save() {
  const { pending } = useFormStatus();
  const { t } = useI18n();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? t.common.saving : t.common.save}
    </Button>
  );
}

export function ExamDateForm({ defaultValue }: { defaultValue?: string }) {
  const [state, action] = useActionState<ProfileState, FormData>(
    saveExamDate,
    {},
  );
  const { t } = useI18n();

  return (
    <form action={action} className="flex flex-wrap items-end gap-2">
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold">{t.dash.examDate}</span>
        <Input
          type="date"
          name="exam_date"
          defaultValue={defaultValue}
          required
          className="w-[190px]"
        />
      </label>
      <Save />
      {state.error ? (
        <p role="alert" className="w-full text-[13px] text-clay">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
