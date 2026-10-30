import { CalendarPlus, Heart } from "lucide-react";

import couplePortrait from "@/assets/image_14.webp";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/config/event";
import { useLanguage } from "@/i18n/useLanguage";
import { downloadWeddingCalendar } from "@/lib/calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

/** Builds the month grid: leading blanks, then 1..N, padded to full weeks. */
function buildMonthCells(year: number, month: number): (number | null)[] {
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const total = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  return Array.from({ length: total }, (_, index) => {
    const day = index - firstWeekday + 1;
    return day >= 1 && day <= daysInMonth ? day : null;
  });
}

export function CalendarSection() {
  const { t } = useLanguage();
  const cells = buildMonthCells(EVENT.year, EVENT.month);

  return (
    <section
      id="calendar"
      aria-label={t("Save the date")}
      className="relative isolate flex min-h-[540px] scroll-mt-18 items-center justify-center overflow-hidden px-5 py-16 sm:min-h-[620px]"
    >
      <img
        src={couplePortrait}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_38%] grayscale"
        loading="lazy"
      />
      <div className="calendar-photo-shade absolute inset-0 -z-10" />

      <div className="w-full max-w-[330px] rounded-lg border border-accent/30 bg-card/95 px-5 py-7 text-center shadow-xl sm:px-7 sm:py-8">
        <h2 className="text-3xl text-primary">{t("November 2026 ")}</h2>
        <p className="mt-1 text-script text-2xl text-accent">{t("Save the date")}</p>

        <div className="mt-6 grid grid-cols-7 gap-y-2 text-xs">
          {WEEKDAYS.map((day) => (
            <span key={day} className="pb-2 text-muted-foreground">
              {t(day)}
            </span>
          ))}

          {cells.map((day, index) => (
            <div key={index} className="flex h-9 items-center justify-center">
              {day !== null && <CalendarDay day={day} isWeddingDay={day === EVENT.day} />}
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={downloadWeddingCalendar}
          className="mt-4 h-auto min-h-11 w-full whitespace-normal text-xs text-primary"
        >
          <CalendarPlus className="shrink-0" />
          {t("Add to calendar")}
        </Button>
      </div>
    </section>
  );
}

function CalendarDay({ day, isWeddingDay }: { day: number; isWeddingDay: boolean }) {
  const { t } = useLanguage();

  if (!isWeddingDay) return <span className="text-foreground">{day}</span>;

  return (
    <span
      aria-label={t("Wedding day")}
      aria-current="date"
      className="relative flex size-9 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground shadow-md"
    >
      {day}
      <Heart className="absolute -right-1 -top-1 size-3 fill-primary text-primary" aria-hidden />
    </span>
  );
}
