import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MAPS_SEARCH_URL, SCHEDULE } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";
import { downloadWeddingCalendar } from "@/lib/calendar";

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
            {t("Sunday")} · {t("Novmber, 2026")}
          </p>
          <p className="mt-1 text-[0.7rem] italic text-muted-foreground">
            {t("")}
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

        <div className="mt-7 border-t border-accent/20 pt-4 text-center">
          {/* <p className="text-xs leading-5 text-muted-foreground">
            {t("The Garden at Entoto · Addis Ababa")}
          </p> */}
          {/* <div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Button
              onClick={downloadWeddingCalendar}
              variant="link"
              className="min-h-11 px-0 text-xs text-primary"
            >
              <CalendarDays className="size-4" />
              {t("Add to calendar")}
            </Button>
            <Button asChild variant="link" className="min-h-11 px-0 text-xs text-primary">
              <a href={MAPS_SEARCH_URL} target="_blank" rel="noreferrer noopener">
                <MapPin className="size-4" />
                {t("Open in maps")}
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div> */}
          {/* <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {t("Formal or traditional attire")}
            <span className="block">{t("Outdoor ceremony, indoor reception")}</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}