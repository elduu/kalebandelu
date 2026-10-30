import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/i18n/useLanguage";

export function ThemeToggle() {
  const { t } = useLanguage();
  const { dark, toggle } = useTheme();
  const label = t(dark ? "Switch to light mode" : "Switch to dark mode");

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-11 text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
