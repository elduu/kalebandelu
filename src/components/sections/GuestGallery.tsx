import { useEffect, useState } from "react";
import { Download, Images, Loader2, Send } from "lucide-react";

import { SectionLabel } from "@/components/common/SectionLabel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/useLanguage";
import { apiUrl } from "@/lib/api";

const BOT_URL = "https://t.me/KALEBANDELBETHEL_BOT";
const PHOTOS_API = apiUrl("photos");

type GuestPhoto = { id: string; url: string; sender: string };

/** Accepts an array or { photos | data | images: [...] }, with items as strings or objects. */
function normalizePhotos(payload: unknown): GuestPhoto[] {
  const source = payload as any;
  const list: unknown[] = Array.isArray(payload)
    ? payload
    : Array.isArray(source?.photos)
      ? source.photos
      : Array.isArray(source?.data)
        ? source.data
        : Array.isArray(source?.images)
          ? source.images
          : [];

  return list
    .map((item, index) => {
      const url =
        typeof item === "string"
          ? item
          : ((item as any)?.image_url ??
            (item as any)?.url ??
            (item as any)?.secure_url ??
            (item as any)?.photo_url ??
            (item as any)?.src ??
            "");
      const id = String((item as any)?.id ?? index);
      const sender = String((item as any)?.sender ?? "").trim();
      return { id, url: String(url), sender };
    })
    .filter((photo) => photo.url);
}

async function downloadPhoto(url: string, index: number) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Download failed");
    const blob = await response.blob();
    const extension = blob.type.split("/")[1]?.replace("jpeg", "jpg") || "jpg";
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = `wedding-photo-${index + 1}.${extension}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  } catch {
    // If the image host blocks cross-origin fetch, fall back to opening the image.
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function GuestGallery() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<GuestPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(PHOTOS_API, { signal: controller.signal });
        if (!response.ok) throw new Error("Request failed");
        setPhotos(normalizePhotos(await response.json()));
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [open]);

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

        <div className="mx-auto mt-12 max-w-md text-center">
          <h3 className="font-display text-3xl text-primary">{t("Share your photos")}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">
            {t(
              "Tap the button and send your photos to our Telegram bot. They will appear in the gallery.",
            )}
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-none">
              <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
                <Send />
                {t("Send photos on Telegram")}
              </a>
            </Button>
            <Button variant="outline" className="rounded-none" onClick={() => setOpen(true)}>
              <Images />
              {t("View all photos")}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          closeLabel={t("Close photographs")}
          className="max-h-[92svh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto bg-background p-4 pt-12"
        >
          <DialogTitle className="font-display text-2xl text-primary">
            {t("Guest photographs")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t("Photos shared by guests through Telegram")}
          </DialogDescription>

          {loading && (
            <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
              <Loader2 className="size-5 animate-spin" />
              {t("Loading photos...")}
            </div>
          )}

          {error && !loading && (
            <p className="py-16 text-center text-muted-foreground">
              {t("Could not load photos. Please try again later.")}
            </p>
          )}

          {!loading && !error && photos.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              {t("No photos have been shared yet.")}
            </p>
          )}

          <div className="flex flex-col gap-8">
            {photos.map((photo, index) => (
              <figure key={`${photo.id}-${index}`} className="flex flex-col gap-3">
                <img
                  src={photo.url}
                  alt={`${t("Guest photograph")} ${index + 1}`}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="flex items-center justify-between gap-3">
                  <p className="min-w-0 truncate text-sm text-muted-foreground">
                    {photo.sender ? (
                      <>
                        {t("Shared by")}{" "}
                        <span className="font-medium text-foreground">{photo.sender}</span>
                      </>
                    ) : null}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 rounded-none"
                    onClick={() => downloadPhoto(photo.url, index)}
                  >
                    <Download />
                    {t("Download")}
                  </Button>
                </figcaption>
              </figure>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}