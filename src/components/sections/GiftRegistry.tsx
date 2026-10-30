import { Gift } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { GIFT_OPTIONS } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function GiftRegistry() {
  const { t } = useLanguage();

  return (
    <section id="gifts" className="scroll-mt-18 px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="With gratitude"
        title="Gift Registry"
        description="Your presence is the greatest gift of all. Thank you for celebrating this beautiful chapter with us."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GIFT_OPTIONS.map(({ name, type }) => (
          <article key={name} className="border border-border bg-card p-6">
            <Gift className="size-6 text-accent" />
            <p className="mt-5 text-xs uppercase text-muted-foreground">{t(type)}</p>
            <h3 className="mt-3 min-h-16 break-words text-2xl text-primary">{t(name)}</h3>
            <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
              {t("Gift details coming soon")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
