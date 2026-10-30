import { Heart } from "lucide-react";

import { NAV_ITEMS } from "@/data/navigation";
import { useLanguage } from "@/i18n/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-wedding-band px-6 py-14 text-center text-primary-foreground">
      <p className="font-display text-4xl">
        {t("Amanuel")} <span className="text-accent">&</span> {t("Saron")}
      </p>
      <p className="mt-4 text-[0.65rem] uppercase tracking-normal text-primary-foreground/60">
        22 · 08 · 2027 · {t("Addis Ababa")}
      </p>
      <p className="mt-5 font-display text-xl italic text-accent">{t("#AmanuelAndSaronForever")}</p>

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
    </footer>
  );
}
