import { useState } from "react";
import { MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { GUEST_WISHES } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function Wishes() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="wishes"
      className="scroll-mt-18 bg-background py-16 sm:py-24"
      aria-label={t("Wishes from friends and family")}
    >
      <h2 className="px-5 text-center text-4xl text-primary sm:text-5xl">
        {t("Messages from Guests")}
      </h2>

      {/* The list is rendered twice so the marquee loops seamlessly; the copy is hidden from AT. */}
      <div
        className="wishes-window mt-10 overflow-hidden"
        tabIndex={0}
        aria-label={t("Guest messages")}
      >
        <div className="wishes-track flex w-max gap-6">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-6" aria-hidden={copy === 1 ? true : undefined}>
              {GUEST_WISHES.map((wish) => (
                <article
                  key={wish.name}
                  className="min-h-64 w-64 shrink-0 rounded-lg border border-accent/25 bg-secondary/50 p-5 sm:min-h-72"
                >
                  <h3 className="text-lg text-foreground">{t(wish.name)}</h3>
                  <p className="mt-3 whitespace-normal text-sm italic leading-6 text-muted-foreground">
                    “{t(wish.message)}”
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          closeLabel={t("Close messages")}
          className="max-h-[80svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto"
        >
          <DialogTitle className="pr-6 font-display text-3xl text-primary">
            {t("Messages from Guests")}
          </DialogTitle>
          <DialogDescription>{t("From those we love")}</DialogDescription>
          <div className="divide-y divide-border">
            {GUEST_WISHES.map((wish) => (
              <article key={wish.name} className="py-6">
                <h3 className="text-xl text-primary">{t(wish.name)}</h3>
                <p className="mt-2 text-sm italic leading-7 text-muted-foreground">
                  “{t(wish.message)}”
                </p>
              </article>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
