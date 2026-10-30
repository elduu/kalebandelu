import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const isEnglish = language === "en";

  return (
    <Button
      variant="ghost"
      className="h-11 min-w-11 px-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
      aria-label={isEnglish ? "Switch to Amharic" : "ወደ እንግሊዝኛ ቀይር"}
      title={t("Language")}
      onClick={() => setLanguage(isEnglish ? "am" : "en")}
    >
      <span className="text-sm">{isEnglish ? "አማ" : "EN"}</span>
    </Button>
  );
}
