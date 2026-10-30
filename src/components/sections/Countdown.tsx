import { SectionHeading } from "@/components/common/SectionHeading";
import { EVENT } from "@/config/event";
import { useCountdown } from "@/hooks/useCountdown";
import { useLanguage } from "@/i18n/useLanguage";

export function Countdown() {
  const { t } = useLanguage();
  const { days, hours, minutes, seconds } = useCountdown(EVENT.start);

  const units = [
    [days, "Days"],
    [hours, "Hours"],
    [minutes, "Minutes"],
    [seconds, "Seconds"],
  ] as const;

  return (
    <section
      className="bg-background px-6 py-16 text-center text-primary"
      aria-label={t("Wedding countdown")}
    >
      <SectionHeading eyebrow="Counting down to" title="Our Wedding Day" />

      <div className="flex justify-center">
        <div
          className="mt-9 grid w-full max-w-md grid-cols-4 border-y border-border"
          aria-label={t("Countdown to the wedding")}
        >
          {units.map(([value, label]) => (
            <div
              key={label}
              className="min-w-0 border-r border-border px-3 py-3 last:border-r-0 sm:min-w-24"
            >
              <span className="block font-display text-2xl tabular-nums sm:text-3xl">
                {String(value).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-normal text-muted-foreground">
                {t(label)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
