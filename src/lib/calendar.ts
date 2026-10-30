import { EVENT } from "@/config/event";

/** Formats a Date as an iCalendar UTC timestamp, e.g. 20270822T120000Z. */
function toIcsDate(date: Date): string {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

/** Builds and downloads an .ics file so guests can save the date. */
export function downloadWeddingCalendar(): void {
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Amanuel and Saron//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${EVENT.uid}`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(EVENT.start)}`,
    `DTEND:${toIcsDate(EVENT.end)}`,
    "SUMMARY:Amanuel & Saron's Wedding",
    "LOCATION:Entoto Hills\\, Addis Ababa\\, Ethiopia",
    "DESCRIPTION:Join us for our wedding celebration.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([content], { type: "text/calendar" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "amanuel-and-saron-wedding.ics";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
