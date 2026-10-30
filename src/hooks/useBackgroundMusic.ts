import { useCallback, useEffect, useRef, useState } from "react";

/** User-initiated looping audio. Never auto-plays. */
export function useBackgroundMusic(url: string, volume = 0.3) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const player = new Audio(url);
    player.loop = true;
    player.volume = volume;
    audio.current = player;
    return () => {
      player.pause();
      audio.current = null;
    };
  }, [url, volume]);

  const toggle = useCallback(async () => {
    const player = audio.current;
    if (!player) return;
    setError(false);

    if (playing) {
      player.pause();
      setPlaying(false);
      return;
    }
    try {
      await player.play();
      setPlaying(true);
    } catch {
      setError(true);
    }
  }, [playing]);

  return { playing, error, toggle };
}
