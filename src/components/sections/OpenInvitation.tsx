import { MailOpen } from "lucide-react";

import eventHero from "@/assets/image_2.webp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";

type OpenInvitationProps = {
  onOpen: () => void;
};

/** The welcome page. The guest's tap on the button opens the main invitation. */
export function OpenInvitation({ onOpen }: OpenInvitationProps) {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-wedding-band px-6 text-center text-primary-foreground">
      {/* Blurred photo background */}
      <img
        src={eventHero}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-md"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative max-w-md">
        <p className="text-[0.65rem] font-medium uppercase tracking-normal text-accent">
          {t("Together with their families")}
        </p>
        <h1 className="mt-5 text-6xl leading-[0.95] sm:text-7xl">
          {t("Kaleb")} <span className="block text-script text-accent">&</span>{" "}
          {t("Elbethel")}
        </h1>
        <p className="mt-6 text-[0.7rem] uppercase tracking-normal text-primary-foreground/75">
          15 · 11 · 2026 · {t("Addis Ababa")}
        </p>

        <Button
          autoFocus
          onClick={onOpen}
          className="mt-10 h-12 rounded-none bg-accent px-8 text-xs uppercase tracking-normal text-accent-foreground hover:bg-accent/90"
        >
          <MailOpen />
          {t("Open invitation")}
        </Button>
      </div>
    </main>
  );
}