import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/useLanguage";

import image1 from "@/assets/image_1.webp";
import image2 from "@/assets/image_2.webp";
import image3 from "@/assets/image_5.webp";
import image4 from "@/assets/image_8.webp";
import image5 from "@/assets/image_12.webp";
import image6 from "@/assets/image_13.webp";
import image7 from "@/assets/image_14.webp";
// import image8 from "@/assets/image_8.webp";
import image9 from "@/assets/image_28.webp";
import image10 from "@/assets/image_30.webp";
import image11 from "@/assets/image_32.webp";
import image12 from "@/assets/image_35.webp";
import image13 from "@/assets/image_13.webp";
import image14 from "@/assets/image_14.webp";
import image15 from "@/assets/image_15.webp";
import image16 from "@/assets/image_16.webp";
import image17 from "@/assets/image_17.webp";
import image18 from "@/assets/image_18.webp";
import image19 from "@/assets/image_19.webp";
import image21 from "@/assets/image_21.webp";
import image22 from "@/assets/image_22.webp";
import image20 from "@/assets/image_20.webp";
import image24 from "@/assets/image_31.webp";
import image25 from "@/assets/image_25.webp";
import image26 from "@/assets/image_27.webp";

/** How many photos show before "See all" is tapped. */
const INITIAL_COUNT = 10;

const GALLERY_PHOTOS = [
  { src: image1, shape: "aspect-[3/4]" },
  { src: image2, shape: "aspect-[2/3]" },
  { src: image3, shape: "aspect-[4/5]" },
  { src: image4, shape: "aspect-[2/3]" },
  { src: image5, shape: "aspect-[2/3]" },
  { src: image6, shape: "aspect-[3/4]" },
  { src: image7, shape: "aspect-square" },
  // { src: image8, shape: "aspect-[4/5]" },
  { src: image9, shape: "aspect-[2/3]" },
  { src: image10, shape: "aspect-[2/3]" },
  { src: image11, shape: "aspect-[3/4]" },
  { src: image12, shape: "aspect-square" },
  { src: image13, shape: "aspect-[4/5]" },
  { src: image14, shape: "aspect-[4/3]" },
  { src: image15, shape: "aspect-[2/3]" },
  { src: image16, shape: "aspect-[3/4]" },
  { src: image17, shape: "aspect-square" },
  { src: image18, shape: "aspect-[4/5]" },
  { src: image19, shape: "aspect-[4/3]" },
  { src: image20, shape: "aspect-[4/5]" },
  { src: image22, shape: "aspect-[4/3]" },
  { src: image21, shape: "aspect-[2/3]" },
  { src: image24, shape: "aspect-[3/4]" },
  { src: image26, shape: "aspect-[3/4]" },
];

export function Gallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const count = GALLERY_PHOTOS.length;
  const visiblePhotos = showAll ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, INITIAL_COUNT);
  const hasMore = count > INITIAL_COUNT;
  const active = selected === null ? null : GALLERY_PHOTOS[selected];
  const altFor = (index: number) => `${t("Wedding photograph")} ${index + 1}`;

  const showPrevious = () => setSelected((i) => (i === null ? 0 : (i - 1 + count) % count));
  const showNext = () => setSelected((i) => (i === null ? 0 : (i + 1) % count));

  function toggleShowAll() {
    setShowAll((value) => !value);
    // After collapsing, bring the top of the gallery back into view.
    if (showAll) sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="scroll-mt-18 px-5 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        eyebrow={t("Captured moments")}
        title={t("Our Gallery")}
        description={t("A collection of moments we will cherish forever.")}
      />

      <div className="gallery-masonry mx-auto mt-12 max-w-5xl">
        {visiblePhotos.map((photo, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => setSelected(index)}
            aria-label={`${t("Enlarge")} ${altFor(index)}`}
            className="mb-3 block h-auto w-full break-inside-avoid overflow-hidden rounded-lg p-0 sm:mb-4"
          >
            <img
              src={photo.src}
              alt={altFor(index)}
              loading="lazy"
              className={`${photo.shape} w-full object-cover transition-transform duration-500 motion-safe:hover:scale-105`}
            />
          </Button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="h-12 rounded-full border-accent bg-transparent px-8 text-xs uppercase text-accent hover:bg-secondary"
            onClick={toggleShowAll}
            aria-expanded={showAll}
          >
            {showAll ? t("Show less") : `${t("See all photos")} (${count})`}
          </Button>
        </div>
      )}

      <Dialog open={active !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          closeLabel={t("Close photograph")}
          className="w-[calc(100%-2rem)] max-w-4xl bg-background p-4 pt-12"
        >
          <DialogTitle className="sr-only">{t("Wedding photograph")}</DialogTitle>
          <DialogDescription className="sr-only">
            {selected === null ? "" : altFor(selected)}
          </DialogDescription>

          {active && selected !== null && (
            <img
              src={active.src}
              alt={altFor(selected)}
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