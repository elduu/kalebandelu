import { ArrowUpRight, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { VENUE_LINKS } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function Venue() {
  const { t } = useLanguage();

  return (
    <section id="location" className="scroll-mt-18 bg-secondary px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Find your way"
        title="The Venue"
        description="The Garden at Entoto · Entoto Hills, Addis Ababa, Ethiopia"
      />

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
        {VENUE_LINKS.map((link) => (
          <Button key={link.label} asChild variant="outline" className="h-12 rounded-none text-xs">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <MapPin />
              {t(link.label)}
              <ArrowUpRight />
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
