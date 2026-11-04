import { Cake, Camera, Church, Home, Utensils, type LucideIcon } from "lucide-react";

import { useLanguage } from "@/i18n/useLanguage";

type ScheduleItem = {
  time: string;
  title: string;
  detail: string;
  icon: LucideIcon;
};

const SCHEDULE: ScheduleItem[] = [
  {
    time: "7:00 AM",
    title: "Morning Photo Session",
    detail: "Groom and bride photo session at the hotel.",
    icon: Camera,
  },
  {
    time: "11:00 AM",
    title: "Lunch Program",
    detail: "Lunch with guests at the groom’s and bride’s homes.",
    icon: Utensils,
  },
  {
    time: "2:00 PM",
    title: "Guests Gather",
    detail: "Guests gather and move to the bride’s house.",
    icon: Home,
  },
  {
    time: "3:00 PM",
    title: "Church Ceremony",
    detail: "The wedding ceremony at the church.",
    icon: Church,
  },
  {
    time: "6:00 PM",
    title: "Cake Ceremony & Photos",
    detail: "Cake ceremony and photo session at the church.",
    icon: Cake,
  },
];

export function Schedule() {
  const { t } = useLanguage();

  return (
    <section
      id="schedule"
      className="scroll-mt-18 bg-background px-5 py-10 text-foreground sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="text-script text-3xl text-accent">{t("The Big Day")}</p>
          <h2 className="mt-1 text-3xl leading-tight sm:text-4xl">{t("Wedding Schedule")}</h2>
          <div className="mx-auto mt-3 h-px w-14 bg-accent" />
          <p className="mt-4 text-xs text-muted-foreground">
            {t("Sunday")} · {t("November 15, 2026")}
          </p>
        </div>

        <ol className="mx-auto mt-8 max-w-lg sm:mt-10">
          {SCHEDULE.map(({ time, title, detail, icon: Icon }, index) => (
            <li
              key={title}
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 pb-7 last:pb-0 sm:gap-5 sm:pb-8"
            >
              {index < SCHEDULE.length - 1 && (
                <span aria-hidden className="absolute bottom-2 left-5 top-11 w-px bg-accent/30" />
              )}
              <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-accent bg-background text-accent">
                <Icon className="size-4" strokeWidth={1.5} />
              </span>
              <div className="min-w-0 pt-0.5">
                <span className="text-xs font-medium uppercase text-accent">{t(time)}</span>
                <h3 className="mt-1 font-display text-xl leading-tight text-foreground sm:text-2xl">
                  {t(title)}
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                  {t(detail)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}