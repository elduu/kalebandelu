export const API_BASE = "https://apibase.inviteyours.com/api";
export const WEDDING_SLUG = "kalebandelu"; // must match the slug in your admin dashboard

export const apiUrl = (path: string) => `${API_BASE}/${WEDDING_SLUG}/${path}`;