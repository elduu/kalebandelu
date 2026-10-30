import { MOMENT_PHOTOS } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

/** One continuous, slowly scrolling strip of photos. Pauses on hover/focus. */
export function MomentsMarquee() {
  const { t } = useLanguage();

  return (
    <section id="moments" className="bg-secondary/60 py-14 sm:py-20" aria-label={t("Moments")}>
      <h2 className="text-script text-center text-4xl text-accent sm:text-5xl">{t("Moments")}</h2>

      <div className="moments-window mt-10 overflow-hidden" tabIndex={0}>
        <div className="moments-track flex w-max gap-[1.125rem]">
          {/* Rendered twice so the loop is seamless; the copy is hidden from assistive tech. */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-[1.125rem]"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {MOMENT_PHOTOS.map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={copy === 0 ? t(photo.alt) : ""}
                  loading="lazy"
                  draggable={false}
                  className={`h-36 w-56 shrink-0 rounded-xl object-cover shadow-md sm:h-40 sm:w-60 ${photo.position}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
