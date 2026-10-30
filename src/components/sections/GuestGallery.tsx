import type { ChangeEvent } from "react";
import { Camera, Upload } from "lucide-react";

import { SectionLabel } from "@/components/common/SectionLabel";
import { Button } from "@/components/ui/button";
import { useImagePreview } from "@/hooks/useImagePreview";
import { useLanguage } from "@/i18n/useLanguage";

export function GuestGallery() {
  const { t } = useLanguage();
  const { preview, choose, clear } = useImagePreview();

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) choose(file);
    event.target.value = ""; // allow re-selecting the same file later
  }

  return (
    <section
      id="guest-gallery"
      className="scroll-mt-18 bg-secondary px-5 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Share the joy</SectionLabel>
            <h2 className="mt-5 text-5xl leading-none text-primary sm:text-6xl">
              {t("Guest Gallery")}
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            {t(
              "Share a favorite moment from the celebration and help us keep every beautiful memory close.",
            )}
          </p>
        </div>

        <div className="mt-10 grid min-h-72 grid-cols-2">
          {preview ? (
            <div className="relative col-span-2 overflow-hidden bg-secondary">
              <img
                src={preview.url}
                alt={`${t("Guest upload preview")}: ${preview.name}`}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-background/90 px-3 py-1 text-xs">
                {t("Your preview")}
              </span>
            </div>
          ) : (
            <label
              htmlFor="guest-photo"
              className="col-span-2 flex cursor-pointer flex-col items-center justify-center border border-dashed border-primary/40 bg-secondary px-6 text-center transition hover:border-primary hover:bg-muted"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-wedding-band text-primary-foreground">
                <Camera className="size-5" />
              </span>
              <span className="mt-4 font-display text-2xl text-primary">
                {t("Add your memory")}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {t("Choose a JPG, PNG, or WebP photo")}
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-normal text-primary">
                <Upload className="size-3.5" />
                {t("Select photo")}
              </span>
            </label>
          )}
          <input
            id="guest-photo"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            className="sr-only"
          />
        </div>

        {preview && (
          <div className="mt-5 flex justify-center">
            <Button variant="outline" onClick={clear} className="rounded-none">
              <Upload />
              {t("Choose another photo")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
