import { Gem } from "lucide-react";

import { useLanguage } from "@/i18n/useLanguage";

export function FamilyInvitation() {
  const { t } = useLanguage();

  return (
    <section id="invitation" className="scroll-mt-18 px-6 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl text-primary sm:text-5xl">{t("Dear Family and Friends")}</h2>

        <blockquote className="mt-8 text-base italic leading-7 text-muted-foreground">
          {t("“A cord of three strands is not quickly broken.")}
        </blockquote>
        <p className="mt-6 font-display text-xl text-foreground">{t("ECCLESIASTES 4:12”")}</p>

        <p className="mt-10 text-base leading-8 text-muted-foreground">
          {t("Together with our families, we joyfully invite you to celebrate our marriage on")}{" "}
          <strong className="font-semibold text-foreground">{t("NOV 15, 2026")}</strong>.{" "}
          {t("The ceremony will be held at")}{" "}
          <strong className="font-semibold text-foreground">{t("Repi Full Gospel church")}</strong>,{" "}
          {t("Addis Ababa")}.
        </p>
        <p className="mt-7 text-base leading-8 text-muted-foreground">
          {t("The ceremony begins at")}{" "}
          <strong className="font-semibold text-foreground">{t("3:00 PM")}</strong>.
        </p>
        <p className="mt-7 text-base leading-8 text-muted-foreground">
          {t("We would be honored to have you share this special day with us.")}
        </p>

        <div
          className="mx-auto mt-10 flex w-fit flex-col items-center text-accent"
          aria-hidden="true"
        >
          <Gem className="size-5" strokeWidth={1.5} />
          <span className="-mt-1 size-8 rounded-full border-[3px] border-accent" />
        </div>
      </div>
    </section>
  );
}
