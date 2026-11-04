import { Heart, Phone } from "lucide-react";

import { NAV_ITEMS } from "@/data/navigation";
import { useLanguage } from "@/i18n/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-wedding-band px-6 py-14 text-center text-primary-foreground">
      <p className="font-display text-4xl">
        {t("Kaleb")} <span className="text-accent">&</span> {t("Elbethel")}
      </p>
      <p className="mt-4 text-[0.65rem] uppercase tracking-normal text-primary-foreground/60">
        15 · 11 · 2026 · {t("Addis Ababa")}
      </p>
      <p className="mt-5 font-display text-xl italic text-accent">{t("#KalebAndElbethelForever")}</p>

      <nav
        aria-label={t("Footer navigation")}
        className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3"
      >
        {NAV_ITEMS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="text-xs text-primary-foreground/75 hover:text-accent"
          >
            {t(label)}
          </a>
        ))}
      </nav>

      <Heart className="mx-auto mt-7 size-4 fill-accent text-accent" aria-hidden />

      {/* Credit: bold and easy to notice */}
      <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-accent/60 bg-primary-foreground/5 px-6 py-6">
        <p className="text-xs uppercase tracking-wider text-primary-foreground/70">
          {t("Made by")}
        </p>
        <a
          href="https://inviteyours.com"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-1 block text-2xl font-bold tracking-wide text-accent underline-offset-4 hover:underline sm:text-3xl"
        >
          inviteyours.com
        </a>

        <a
          href="tel:+251909571370"
          aria-label="0909571370"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-lg font-bold tracking-wide text-accent-foreground shadow-lg transition hover:bg-accent/90 sm:text-xl"
        >
          <Phone className="size-5" aria-hidden />
          0909571370
        </a>
      </div>
    </footer>
  );
}