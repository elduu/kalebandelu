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

      <div className="mx-auto mt-8 max-w-xs border-t border-primary-foreground/15 pt-5 text-[0.7rem] text-primary-foreground/60">
        <p>
          {t("Made by")}{" "}
          <a
            href="https://inviteyours.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-primary-foreground/80 hover:text-accent"
          >
            inviteyours.com
          </a>
        </p>
        <a
          href="tel:+251909571370"
          className="mt-1 inline-flex items-center gap-1.5 hover:text-accent"
        >
          <Phone className="size-3" aria-hidden />
          0909571370
        </a>
      </div>
    </footer>
  );
}