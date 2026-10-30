import { useLanguage } from "@/i18n/useLanguage";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  light?: boolean;
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  const { t } = useLanguage();

  return (
    <p
      className={cn(
        "text-[0.65rem] font-semibold uppercase tracking-normal",
        light ? "text-accent" : "text-primary",
      )}
    >
      {t(children)}
    </p>
  );
}
