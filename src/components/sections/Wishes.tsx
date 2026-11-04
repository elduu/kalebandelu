import { useEffect, useState } from "react";
import { Loader2, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/useLanguage";
import { apiUrl } from "@/lib/api";

const WISHES_API = apiUrl("rsvp");

/** Fewer cards than this and the marquee would not fill the screen, so the list is repeated. */
const MIN_MARQUEE_CARDS = 8;

type Wish = { id: string; name: string; message: string };

// Cute stickers, cycled over the cards. Each one is paired with a soft tilt and a pastel tint.
const STICKERS = ["💌", "🌸", "💕", "🥂", "✨", "🕊️", "🌷", "💍", "🎀", "🦋"];
const TILTS = ["-rotate-12", "rotate-6", "-rotate-6", "rotate-12", "rotate-3"];
const TINTS = [
  "bg-rose-100",
  "bg-amber-100",
  "bg-sky-100",
  "bg-emerald-100",
  "bg-violet-100",
  "bg-pink-100",
];
const CARD_TILTS = ["-rotate-1", "rotate-1", "rotate-0", "rotate-1", "-rotate-1"];

/** Accepts an array or { rsvps | wishes | data | items: [...] } and keeps entries that have a wish. */
function normalizeWishes(payload: unknown): Wish[] {
  const source = payload as any;
  const list: any[] = Array.isArray(payload)
    ? payload
    : (source?.rsvps ?? source?.wishes ?? source?.data ?? source?.items ?? []);

  if (!Array.isArray(list)) return [];

  return list
    .map((item, index) => ({
      id: String(item?.id ?? index),
      name: String(item?.name ?? "").trim(),
      message: String(item?.wish ?? item?.message ?? "").trim(),
    }))
    .filter((wish) => wish.name && wish.message);
}

function Sticker({ index, className = "" }: { index: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex size-11 items-center justify-center rounded-full border-2 border-white text-2xl shadow-md ${
        TINTS[index % TINTS.length]
      } ${TILTS[index % TILTS.length]} ${className}`}
    >
      {STICKERS[index % STICKERS.length]}
    </span>
  );
}

export function Wishes() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(WISHES_API, { signal: controller.signal });
        if (!response.ok) throw new Error("Request failed");
        setWishes(normalizeWishes(await response.json()));
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  // Repeat a short list so the marquee always has enough cards to loop smoothly.
  const marqueeWishes =
    wishes.length > 0 && wishes.length < MIN_MARQUEE_CARDS
      ? Array.from({ length: Math.ceil(MIN_MARQUEE_CARDS / wishes.length) }, () => wishes).flat()
      : wishes;

  return (
    <section
      id="wishes"
      className="scroll-mt-18 bg-background py-16 sm:py-24"
      aria-label={t("Wishes from friends and family")}
    >
      <h2 className="px-5 text-center text-4xl text-primary sm:text-5xl">
        {t("Messages from Guests")}
      </h2>

      {loading && (
        <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="size-5 animate-spin" />
          {t("Loading messages...")}
        </div>
      )}

      {!loading && error && (
        <p className="mt-10 px-5 text-center text-muted-foreground">
          {t("Could not load messages. Please try again later.")}
        </p>
      )}

      {!loading && !error && wishes.length === 0 && (
        <p className="mt-10 px-5 text-center text-muted-foreground">
          {t("No messages yet. Be the first to send a wish! 💌")}
        </p>
      )}

      {wishes.length > 0 && (
        <>
          {/* ───────── SCROLLING CARDS: messages are cut after 3 lines ───────── */}
          <div
            className="wishes-window mt-10 overflow-hidden py-4"
            tabIndex={0}
            aria-label={t("Guest messages")}
          >
            <div className="wishes-track flex w-max gap-6">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-6" aria-hidden={copy === 1 ? true : undefined}>
                  {marqueeWishes.map((wish, index) => (
                    <article
                      key={`${wish.id}-${index}`}
                      className={`relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-accent/25 bg-secondary/50 p-5 pt-7 shadow-sm sm:h-48 ${
                        CARD_TILTS[index % CARD_TILTS.length]
                      }`}
                    >
                      <Sticker index={index} className="absolute -right-3 -top-4" />
                      <h3 className="truncate pr-8 text-lg text-foreground">{wish.name}</h3>
                      <p className="mt-3 line-clamp-3 whitespace-normal break-words text-sm italic leading-6 text-muted-foreground">
                        “{wish.message}”
                      </p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center px-5">
            <Button
              variant="outline"
              className="h-12 rounded-full border-accent bg-transparent px-7 text-xs uppercase text-accent hover:bg-secondary"
              onClick={() => setOpen(true)}
            >
              <MessageSquare className="size-4" />
              {t("View all messages")}
            </Button>
          </div>
        </>
      )}

      {/* ───────── "VIEW ALL MESSAGES" WINDOW: every message in full, never cut ───────── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          closeLabel={t("Close messages")}
          className="max-h-[80svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto"
        >
          <DialogTitle className="pr-6 font-display text-3xl text-primary">
            {t("Messages from Guests")} 💕
          </DialogTitle>
          <DialogDescription>{t("From those we love")}</DialogDescription>
          <div className="divide-y divide-border">
            {wishes.map((wish, index) => (
              <article key={`${wish.id}-${index}`} className="flex items-start gap-4 py-6">
                <Sticker index={index} className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-xl text-primary">{wish.name}</h3>
                  <p className="mt-2 line-clamp-none whitespace-pre-line break-words text-sm italic leading-7 text-muted-foreground">
                    “{wish.message}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}