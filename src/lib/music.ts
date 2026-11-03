import { MUSIC_URL } from "@/config/event";

/** Remembers (for this browser tab) that the guest turned the music off. */
const MUSIC_OFF_KEY = "invitation-music-off";

let audio: HTMLAudioElement | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

function getAudio() {
  if (!audio) {
    audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.preload = "auto";
    audio.addEventListener("play", notify);
    audio.addEventListener("pause", notify);
    audio.addEventListener("error", () => {
      console.error("[music] The file could not be loaded:", MUSIC_URL, audio?.error);
    });
  }
  return audio;
}

export function isMusicOff() {
  try {
    return sessionStorage.getItem(MUSIC_OFF_KEY) === "1";
  } catch {
    return false;
  }
}

function setMusicOff(off: boolean) {
  try {
    if (off) sessionStorage.setItem(MUSIC_OFF_KEY, "1");
    else sessionStorage.removeItem(MUSIC_OFF_KEY);
  } catch {
    // Storage unavailable: ignore.
  }
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export const isPlaying = () => !!audio && !audio.paused;

/** Must be called straight from a tap/click handler so the browser allows sound. */
export async function playMusic() {
  setMusicOff(false);
  try {
    await getAudio().play();
    return true;
  } catch (error) {
    console.error("[music] play() was rejected:", error, "URL:", MUSIC_URL);
    return false;
  }
}

export function pauseMusic() {
  setMusicOff(true); // the guest wants silence, so don't restart it later
  audio?.pause();
}