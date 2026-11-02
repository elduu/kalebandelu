import { useState } from "react";
import { Play } from "lucide-react";

import coverPhoto from "@/assets/image_14.webp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLanguage } from "@/i18n/useLanguage";

// TODO: paste your Cloudinary video link here.
const VIDEO_URL = "https://res.cloudinary.com/dkfawrhqz/video/upload/v1793622595/Abrsh_hxuvim.mp4";

export function Films() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="films" className="bg-secondary px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="In motion" title="Our Film" />

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="relative aspect-video overflow-hidden bg-black shadow-xl">
          {playing ? (
            <video
              src={VIDEO_URL}
              poster={coverPhoto}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            >
              {t("Your browser does not support video playback.")}
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={t("Play film")}
              className="group absolute inset-0 block h-full w-full"
            >
              {/* Blurred copy fills the frame, the full photo sits on top uncropped */}
              <img
                src={coverPhoto}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
              />
              <img
                src={coverPhoto}
                alt={t("Our wedding film")}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain"
              />
              <span className="absolute inset-0 bg-wedding-band/25 transition group-hover:bg-wedding-band/35" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition group-hover:scale-105 sm:size-20">
                  <Play className="size-7 translate-x-0.5 sm:size-8" aria-hidden />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}