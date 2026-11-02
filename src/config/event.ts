/** Core facts about the event. Edit here to reuse the invitation for another wedding. */

const DATE = "2026-11-15"; // ISO date (local to the venue)
const [year, month, day] = DATE.split("-").map(Number);

export const EVENT = {
  uid: "amanuel-saron-wedding-2027@inviteyours.com",
  /** Ceremony start (Addis Ababa, UTC+3). */
  start: new Date(`${DATE}T15:00:00+03:00`),
  /** Celebration end. */
  end: new Date(`${DATE}T22:00:00+03:00`),
  year,
  /** 1–12 */
  month,
  day,
} as const;

export const VENUE = {
  /** Search text used for the map deep links. */
  mapQuery: "Entoto Park Addis Ababa Ethiopia",
} as const;

/** Looping, user-initiated background music. Put the file in /public/audio. */
export const MUSIC_URL = "/audio/music.m4a";

/** Local-storage keys for visitor preferences. */
export const STORAGE_KEYS = {
  theme: "invitation-theme",
  language: "invitation-language",
} as const;
