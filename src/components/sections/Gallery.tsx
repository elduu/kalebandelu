import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { GALLERY_PHOTOS } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function Gallery() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : GALLERY_PHOTOS[selected];
  const count = GALLERY_PHOTOS.length;

  const showPrevious = () => setSelected((i) => (i === null ? 0 : (i - 1 + count) % count));
  const showNext = () => setSelected((i) => (i === null ? 0 : (i + 1) % count));

  return (
    <section id="gallery" className="scroll-mt-18 px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Captured moments"
        title="Our Gallery"
        description="A collection of moments we will cherish forever."
      />

      <div className="gallery-masonry mx-auto mt-12 max-w-5xl">
        {GALLERY_PHOTOS.map((photo, index) => (
          <Button
            key={photo.src}
            variant="ghost"
            onClick={() => setSelected(index)}
            aria-label={`${t("Enlarge")} ${t(photo.alt)}`}
            className="mb-3 block h-auto w-full break-inside-avoid overflow-hidden rounded-lg p-0 sm:mb-4"
          >
            <img
              src={photo.src}
              alt={t(photo.alt)}
              loading="lazy"
              className={`${photo.shape} w-full object-cover transition-transform duration-500 motion-safe:hover:scale-105`}
            />
          </Button>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          closeLabel={t("Close photograph")}
          className="w-[calc(100%-2rem)] max-w-4xl bg-background p-4 pt-12"
        >
          <DialogTitle className="sr-only">{t("Wedding photograph")}</DialogTitle>
          <DialogDescription className="sr-only">{active ? t(active.alt) : ""}</DialogDescription>

          {active && (
            <img
              src={active.src}
              alt={t(active.alt)}
              className="mx-auto max-h-[70svh] max-w-full object-contain"
            />
          )}

          <div className="flex items-center justify-between">
            <Button
              size="icon"
              variant="ghost"
              aria-label={t("Previous photograph")}
              onClick={showPrevious}
            >
              <ChevronLeft />
            </Button>
            <span className="text-sm text-muted-foreground">
              {selected === null ? 0 : selected + 1} / {count}
            </span>
            <Button
              size="icon"
              variant="ghost"
              aria-label={t("Next photograph")}
              onClick={showNext}
            >
              <ChevronRight />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
