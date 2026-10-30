import { Music2, Pause } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MUSIC_URL } from "@/config/event";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useLanguage } from "@/i18n/useLanguage";

/** Floating play/pause button for the wedding soundtrack. */
export function MusicPlayer() {
  const { t } = useLanguage();
  const { playing, error, toggle } = useBackgroundMusic(MUSIC_URL);
  const label = t(playing ? "Pause music" : "Play music");

  return (
    <div className="fixed bottom-5 right-4 z-40">
      {error && (
        <p
          role="status"
          className="mb-2 max-w-52 border border-border bg-background p-3 text-sm text-foreground"
        >
          {t("Music unavailable. Try again.")}
        </p>
      )}
      <Button
        variant="outline"
        size="icon"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={label}
        title={label}
        className="size-12 rounded-full border-accent bg-background text-primary shadow-lg hover:bg-secondary"
      >
        {playing ? <Pause className="size-5" /> : <Music2 className="size-5" />}
      </Button>
    </div>
  );
}
