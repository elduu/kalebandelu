import { useLanguage } from "@/i18n/useLanguage";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-normal text-accent">{t(eyebrow)}</p>
      <h2 className="mt-3 text-4xl text-primary sm:text-5xl">{t(title)}</h2>
      <div className="mx-auto mt-5 h-px w-14 bg-accent" />
      {description && (
        <p className="mt-5 text-sm leading-7 text-muted-foreground">{t(description)}</p>
      )}
    </div>
  );
}
