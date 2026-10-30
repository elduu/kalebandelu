import { Play } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { FILMS } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function Films() {
  const { t } = useLanguage();

  return (
    <section id="films" className="bg-secondary px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="In motion" title="Our Films" />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        {FILMS.map((film) => (
          <article key={film.title}>
            <div className="relative aspect-video overflow-hidden">
              <img
                src={film.photo}
                alt={t(film.title)}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-wedding-band/35 text-primary-foreground">
                <Play className="size-9" aria-hidden />
                <p className="mt-3 text-xs">{t("Film coming soon")}</p>
              </div>
            </div>
            <h3 className="mt-5 text-center text-2xl text-primary">{t(film.title)}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
