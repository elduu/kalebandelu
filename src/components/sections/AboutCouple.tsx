import couplePortrait from "@/assets/image_14.webp";
import { useLanguage } from "@/i18n/useLanguage";

export function AboutCouple() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative scroll-mt-18 overflow-hidden bg-wedding-band px-5 py-20 text-primary-foreground sm:px-6 sm:py-28"
    >
      {/* Background photo with a dark overlay so the text stays readable */}
      <img
        src={couplePortrait}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl uppercase leading-tight tracking-wide text-accent sm:text-4xl">
          {t("A Prayer for Our Forever")}
        </h2>
        <div className="mx-auto mt-5 h-px w-14 bg-accent" />

        <div className="mt-10 space-y-6 text-base leading-8 text-primary-foreground/90 sm:text-lg sm:leading-9">
          <p>
            {t(
              "May God remain at the center of our marriage, guide our steps, strengthen our love, and fill our home with peace, grace, and joy.",
            )}
          </p>
          <p>
            {t(
              "May our love grow deeper with every season, and may our lives always reflect His goodness and faithfulness.",
            )}
          </p>
        </div>

        <blockquote className="mt-10">
          <p className="font-display text-xl italic leading-8 text-primary-foreground sm:text-2xl sm:leading-9">
            “{t("Unless the LORD builds the house, the builders labor in vain.")}”
          </p>
          <footer className="mt-3 text-sm uppercase tracking-wider text-accent">
            — {t("Psalm 127:1")}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}