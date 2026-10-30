import { useState } from "react";
import { Menu, X } from "lucide-react";

import { LanguageToggle } from "@/components/controls/LanguageToggle";
import { ThemeToggle } from "@/components/controls/ThemeToggle";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/data/navigation";
import { useLanguage } from "@/i18n/useLanguage";

export function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/15 bg-wedding-band/95 text-primary-foreground backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 xl:flex xl:justify-between lg:px-8">
        <a
          href="#welcome"
          className="min-w-0 font-display text-2xl tracking-normal"
          aria-label={t("Amanuel and Saron, back to welcome")}
        >
          A <span className="mx-1 text-accent">&</span> S
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label={t("Main navigation")}>
          {NAV_ITEMS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.65rem] font-medium uppercase tracking-normal text-primary-foreground/75 transition-colors hover:text-accent"
            >
              {t(label)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden rounded-none border border-accent bg-transparent px-5 text-[0.65rem] uppercase tracking-normal text-accent shadow-none hover:bg-accent hover:text-accent-foreground sm:inline-flex"
          >
            <a href="#rsvp">{t("RSVP now")}</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent xl:hidden"
            aria-label={t(menuOpen ? "Close menu" : "Open menu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-primary-foreground/15 px-5 py-5 xl:hidden"
          aria-label={t("Mobile navigation")}
        >
          {NAV_ITEMS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block border-b border-primary-foreground/10 py-3 font-display text-xl"
            >
              {t(label)}
            </a>
          ))}
          <a
            href="#rsvp"
            onClick={closeMenu}
            className="mt-4 block text-sm uppercase tracking-normal text-accent"
          >
            {t("RSVP now")}
          </a>
        </nav>
      )}
    </header>
  );
}
