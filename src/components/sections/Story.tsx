import { SectionLabel } from "@/components/common/SectionLabel";
import { STORY_CHAPTERS, STORY_CLOSING } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function Story() {
  const { t } = useLanguage();

  return (
    <section
      id="story"
      className="scroll-mt-18 bg-background px-5 py-16 sm:px-6 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <SectionLabel>Our story</SectionLabel>
          <h2 className="mt-5 text-5xl leading-none text-primary sm:text-6xl">
            {t("How it all began")}
          </h2>
        </div>

        <ol className="relative mt-14 space-y-14 sm:mt-20 sm:space-y-20">
          {/* Center line on desktop */}
          <span
            aria-hidden
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-accent/30 md:block"
          />

          {STORY_CHAPTERS.map((chapter, index) => {
            const reversed = index % 2 === 1;

            return (
              <li
                key={chapter.title}
                className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16"
              >
                {/* Dot on the line */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-accent md:block"
                />

                {/* Photo: shown whole, never cropped */}
                <figure
                  className={`flex items-center justify-center rounded-2xl border border-accent/20 bg-secondary/60 p-3 shadow-sm sm:p-4 ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={chapter.photo}
                    alt={t(chapter.alt)}
                    loading="lazy"
                    className="h-auto max-h-[28rem] w-auto max-w-full rounded-lg object-contain"
                  />
                </figure>

                <div className={`text-center md:text-left ${reversed ? "md:order-1 md:text-right" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t(chapter.year)}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
                    {t(chapter.title)}
                  </h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{t(chapter.text)}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Compact closing */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-accent/25 bg-secondary/50 px-6 py-8 text-center sm:mt-24 sm:px-10">
          <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {STORY_CLOSING.paragraphs.map((paragraph) => (
              <p key={paragraph}>{t(paragraph)}</p>
            ))}
          </div>
          <p className="mt-6 font-display text-2xl italic text-primary sm:text-3xl">
            {t(STORY_CLOSING.final)}
          </p>
        </div>
      </div>
    </section>
  );
}