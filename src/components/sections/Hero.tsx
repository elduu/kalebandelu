import { ArrowDown } from "lucide-react";

import eventHero from "@/assets/image_20.webp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="welcome"
      className="relative min-h-[94svh] scroll-mt-18 overflow-hidden bg-wedding-band text-primary-foreground md:min-h-[100svh] lg:min-h-[min(100svh,56.25vw)] xl:min-h-[min(100svh,50vw)]"
    >
      <img
        src={eventHero}
        alt={t("Amanuel and Saron at their garden celebration")}
        width={1536}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[35%_center] sm:object-[40%_30%] md:object-[center_25%] lg:object-[center_20%]"
      />
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden />

      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl flex-col items-center justify-end px-6 pb-12 pt-32 text-center md:justify-center md:pb-0">
        <p className="reveal-up text-[0.65rem] font-medium uppercase tracking-normal text-accent">
          {t("Together with their families")}
        </p>
        <h1 className="reveal-up mt-5 max-w-5xl text-5xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">
          {t("Kaleb")} <span className="block text-script text-accent md:inline">&</span>{" "}
          {t("Elbethel")}
        </h1>
        <p className="reveal-up mt-8 max-w-xl font-display text-xl italic text-primary-foreground/90 md:text-2xl">
          {t("invite you to celebrate the beginning of their forever")}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-[0.68rem] uppercase tracking-normal text-primary-foreground/75">
          <span>{t("Addis Ababa")}</span>
          <span className="size-1 rotate-45 bg-accent" />
          <span>{t("Nov 15 , 2026")}</span>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="h-12 rounded-none bg-accent px-7 text-xs uppercase tracking-normal text-accent-foreground hover:bg-accent/90"
          >
            <a href="#rsvp">{t("RSVP now")}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-none border-primary-foreground/60 bg-transparent px-7 text-xs uppercase tracking-normal text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="#schedule">{t("View details")}</a>
          </Button>
        </div>

        <a
          href="#schedule"
          aria-label={t("Continue to our story")}
          className="mt-8 flex size-10 items-center justify-center rounded-full border border-primary-foreground/35 transition hover:border-accent hover:text-accent"
        >
          <ArrowDown className="size-4" />
        </a>
      </div>
    </section>
  );
}