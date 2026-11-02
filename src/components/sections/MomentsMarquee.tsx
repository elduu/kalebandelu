import { useLanguage } from "@/i18n/useLanguage";

import image1 from "@/assets/image_1.webp";
import image2 from "@/assets/image_2.webp";
import image3 from "@/assets/image_3.webp";
import image4 from "@/assets/image_4.webp";
import image5 from "@/assets/image_5.webp";
import image6 from "@/assets/image_6.webp";
import image7 from "@/assets/image_7.webp";
import image8 from "@/assets/image_8.webp";
import image9 from "@/assets/image_9.webp";
import image10 from "@/assets/image_10.webp";
import image11 from "@/assets/image_11.webp";
import image12 from "@/assets/image_12.webp";
import image13 from "@/assets/image_13.webp";
import image14 from "@/assets/image_14.webp";
import image15 from "@/assets/image_15.webp";
import image16 from "@/assets/image_16.webp";
import image17 from "@/assets/image_17.webp";
import image18 from "@/assets/image_18.webp";
import image19 from "@/assets/image_19.webp";


const MOMENT_PHOTOS = [
  { src: image1, alt: "Wedding moment 1" },
  { src: image2, alt: "Wedding moment 2" },
  { src: image3, alt: "Wedding moment 3" },
  { src: image4, alt: "Wedding moment 4" },
  { src: image5, alt: "Wedding moment 5" },
  { src: image6, alt: "Wedding moment 6" },
  { src: image7, alt: "Wedding moment 7" },
  { src: image8, alt: "Wedding moment 8" },
  { src: image9, alt: "Wedding moment 9" },
  { src: image10, alt: "Wedding moment 10" },
  { src: image11, alt: "Wedding moment 11" },
  { src: image12, alt: "Wedding moment 12" },
  { src: image13, alt: "Wedding moment 13" },
  { src: image14, alt: "Wedding moment 14" },
  { src: image15, alt: "Wedding moment 15" },
  { src: image16, alt: "Wedding moment 16" },
  { src: image17, alt: "Wedding moment 17" },
  { src: image18, alt: "Wedding moment 18" },
  { src: image19, alt: "Wedding moment 19" },

];

/** One continuous, slowly scrolling strip of photos. Pauses on hover/focus. */
export function MomentsMarquee() {
  const { t } = useLanguage();

  return (
    <section id="moments" className="bg-secondary/60 py-14 sm:py-20" aria-label={t("Moments")}>
      <h2 className="text-script text-center text-4xl text-accent sm:text-5xl">{t("Moments")}</h2>

      <div className="moments-window mt-10 overflow-hidden" tabIndex={0}>
        <div className="moments-track flex w-max">
          {/* Rendered twice so the loop is seamless; the copy is hidden from assistive tech. */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {MOMENT_PHOTOS.map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={copy === 0 ? t(photo.alt) : ""}
                  draggable={false}
                  className="block h-44 w-auto max-w-none shrink-0 sm:h-56"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}