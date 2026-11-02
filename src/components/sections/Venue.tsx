import { Church, Home, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";

type Place = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Exact coordinates like "9.0054,38.7636" (best), or a place name. Used for the preview map and as a fallback for the button. */
  query: string;
  /** Optional: the Google Maps share link (https://maps.app.goo.gl/...). If set, the button opens exactly this link. */
  url?: string;
};

// TODO: fill in the three places below.
const PLACES: Place[] = [
  {
    id: "groom",
    label: "Groom’s House",
    icon: Home,
    query: "9.0054,38.7636",
    url: "https://maps.google.com/maps?q=8.974977,38.688409&ll=8.974977,38.688409&z=16",
  },
  {
    id: "bride",
    label: "Bride’s House",
    icon: Home,
    query: "9.0054,38.7636",
    url: "https://maps.google.com/maps?q=8.998239,38.701927&ll=8.998239,38.701927&z=16",
  },
  {
    id: "church",
    label: "Church",
    icon: Church,
    query: "9.0054,38.7636",
    url: "https://maps.app.goo.gl/FuXbaaVDYJceayAw8",
  },
];

/** The place shown in the preview map. */
const PREVIEW_PLACE = PLACES[2];

const embedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

const openUrl = ({ url, query }: Place) =>
  url ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export function Venue() {
  const { t } = useLanguage();

  return (
    <section
      id="venue"
      className="scroll-mt-18 bg-secondary/60 px-5 py-12 sm:px-6 sm:py-16"
      aria-label={t("Locations")}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-script text-3xl text-accent">{t("Find us")}</p>
          <h2 className="mt-1 text-3xl leading-tight text-primary sm:text-4xl">
            {t("Locations")}
          </h2>
          <div className="mx-auto mt-3 h-px w-14 bg-accent" />
        </div>

        {/* Preview only: the top strip with Google's "Open in Maps" card is cropped out and the map is not clickable. */}
        <div className="relative mt-8 h-72 overflow-hidden border border-border bg-card shadow-sm sm:h-96">
          <iframe
            title={`${t("Map")}: ${t(PREVIEW_PLACE.label)}`}
            src={embedUrl(PREVIEW_PLACE.query)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            className="pointer-events-none absolute inset-x-0 -top-[4.5rem] block h-[calc(100%+4.5rem)] w-full border-0"
          />
        </div>

        {/* Under the map. On phones: smaller and scrollable sideways. */}
        <div
          role="group"
          aria-label={t("Choose a location")}
          className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {PLACES.map((place) => {
            const Icon = place.icon;
            return (
              <Button
                key={place.id}
                asChild
                variant="outline"
                className="h-9 shrink-0 rounded-none px-4 text-[0.65rem] uppercase tracking-normal sm:h-12 sm:text-xs"
              >
                <a href={openUrl(place)} target="_blank" rel="noreferrer noopener">
                  <Icon className="size-3.5 sm:size-4" />
                  {t(place.label)}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}