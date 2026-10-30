import { SectionLabel } from "@/components/common/SectionLabel";
import { STORY_CHAPTERS, STORY_CLOSING } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";
import { cn } from "@/lib/utils";

export function Story() {
  const { t } = useLanguage();

  return (
    <section id="story" className="scroll-mt-18 px-5 py-12 sm:px-6 sm:py-18">
      <div className="mx-auto max-w-3xl">
        <div className="mb-9 text-center">
          <SectionLabel>A Journey of Friendship, Struggles, Love, and Commitment</SectionLabel>
          <h2 className="mt-3 text-3xl leading-tight text-primary sm:text-5xl">
            {t("From a Simple Hello")} <em className="font-normal">{t("to Forever")}</em>
          </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-accent" />
        </div>

        <ol className="space-y-7 sm:space-y-9">
          {STORY_CHAPTERS.map((chapter, index) => {
            const photoFirst = index % 2 === 0;
            const isOpening = index === 0;

            return (
              <li
                key={chapter.year}
                className={cn(
                  "story-chapter grid items-center gap-5 sm:gap-9",
                  photoFirst
                    ? "grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
                    : "grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]",
                )}
              >
                <div className={cn("relative min-w-0", !photoFirst && "col-start-2 row-start-1")}>
                  <img
                    src={chapter.photo}
                    alt={t(chapter.alt)}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover",
                      isOpening ? "aspect-[3/4]" : "aspect-square",
                    )}
                  />
                  {isOpening && (
                    <blockquote className="absolute -bottom-2 -right-2 w-[calc(100%+0.5rem)] border-l-2 border-accent bg-wedding-band px-3 py-3 font-display text-sm italic leading-snug text-primary-foreground sm:-right-4 sm:w-[90%] sm:px-4 sm:text-lg">
                      {t("“Home was never a place. It was finding each other.”")}
                    </blockquote>
                  )}
                </div>

                <div className={cn("min-w-0 py-2", !photoFirst && "col-start-1 row-start-1")}>
                  <span className="text-xs font-medium text-accent">
                    {t(chapter.year)}
                    <span className="ml-2 inline-block h-px w-6 align-middle bg-accent/50" />
                  </span>
                  <h3 className="mt-2 text-2xl leading-tight text-primary sm:text-3xl">
                    {t(chapter.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {t(chapter.text)}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-12 max-w-xl space-y-4 border-t border-accent/20 pt-8 text-center sm:mt-16">
          {STORY_CLOSING.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7"
            >
              {t(paragraph)}
            </p>
          ))}
          <p className="pt-2 font-display text-xl italic text-primary sm:text-2xl">
            {t(STORY_CLOSING.final)} ❤️
          </p>
        </div>
      </div>
    </section>
  );
}