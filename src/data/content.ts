import { Clock3, Gem, Heart, type LucideIcon } from "lucide-react";

import couplePortrait from "@/assets/image_1.webp";
import eventHero from "@/assets/image_10.webp";
import guestCelebration from "@/assets/guest-celebration.jpg";
import storyDetail from "@/assets/story-detail.jpg";
import { VENUE } from "@/config/event";
import storyMet from "@/assets/image_2.webp";
import storyStruggles from "@/assets/image_2.webp";
import storyYes from "@/assets/image_2.webp";
import storyShemegelna from "@/assets/image_2.webp";
/* Every user-facing string below is an English key that is translated at render time. */

export const SCHEDULE: { time: string; title: string; detail: string; icon: LucideIcon }[] = [
  {
    time: "3:00 PM",
    title: "The Ceremony",
    detail: "Garden terrace · Please arrive by 2:30 PM",
    icon: Heart,
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    detail: "Drinks, canapés, and a little golden-hour magic",
    icon: Clock3,
  },
  {
    time: "6:00 PM",
    title: "Dinner & Dancing",
    detail: "The grand hall · Celebration until late",
    icon: Gem,
  },
];





export const STORY_CHAPTERS = [
  {
    year: "Nine years ago",
    title: "How we met",
    text: "Nine years ago, what seemed like an ordinary connection through social media became the beginning of an extraordinary story. We started as friends, sharing conversations and slowly becoming part of each other’s lives, never imagining where this journey would lead.",
    photo: storyMet,
    alt: "Kaleb and Elbethel when they first met",
  },
  {
    year: "Through every season",
    title: "Struggles and patience",
    text: "But every beautiful love story has its own challenges. Before love found its deepest roots, there were struggles, difficult moments, distance, patience, and seasons of uncertainty. It wasn’t always easy, but through every chapter, our story continued to unfold.",
    photo: storyStruggles,
    alt: "Kaleb and Elbethel through the years",
  },
  {
    year: "April 13, 2025 · Miyazya 5, 2017 E.C.",
    title: "Engagement: she said yes",
    text: "A beautiful new chapter began when she said YES, turning years of friendship and love into a promise of a lifetime.",
    photo: storyYes,
    alt: "Kaleb and Elbethel on their engagement day",
  },
  {
    year: "Tikimt 23, 2018 E.C.",
    title: "Shemegelna",
    text: "We took another meaningful step by formally sending the Shemegelna request, honoring our families, our culture, and the traditions passed down through generations. With happiness and blessings, the families accepted, bringing two families together.",
    photo: storyShemegelna,
    alt: "Kaleb and Elbethel with their families at the Shemegelna",
  },
];export const STORY_CLOSING = {
  paragraphs: [
    "What began with a simple hello nine years ago has become a journey of love, resilience, commitment, and faith.",
    "Through the struggles, we found strength. Through the waiting, we found patience. And through love, we found our way to each other.",
    "Our story is proof that the most beautiful beginnings don’t always come easily, but every chapter can lead to something worth forever.",
  ],
  final: "And this is only the beginning of our forever.",
};

export const ABOUT_COUPLE = [
  {
    name: "Saron",
    role: "The bride",
    text: "A warm heart, a joyful spirit, and a love for the little moments. Saron brings beauty to everyday life, and makes every gathering feel like home.",
    photoPosition: "object-right",
  },
  {
    name: "Amanuel",
    role: "The groom",
    text: "Thoughtful, gentle, and always ready with a smile. Amanuel treasures family, good conversation, and every new adventure he gets to share with Saron.",
    photoPosition: "object-left",
  },
] as const;

export const FILMS = [
  { title: "Engagement Film", photo: eventHero },
  { title: "Pre-Wedding Shoot", photo: couplePortrait },
] as const;

export const GALLERY_PHOTOS = [
  { src: couplePortrait, alt: "Amanuel and Saron walking in the garden", shape: "aspect-[2/3]" },
  { src: storyDetail, alt: "Wedding rings and stationery", shape: "aspect-[4/3]" },
  { src: guestCelebration, alt: "Friends celebrating together", shape: "aspect-[3/4]" },
  { src: eventHero, alt: "The wedding celebration at sunset", shape: "aspect-[3/2]" },
] as const;

export const GUEST_WISHES = [
  { name: "Hana", message: "May your life together be full of grace and laughter." },
  { name: "Dawit", message: "To a beautiful beginning and a lifetime of joy." },
  { name: "Selam", message: "We cannot wait to celebrate this chapter with you." },
] as const;

export const GIFT_OPTIONS = [
  { name: "Commercial Bank of Ethiopia", type: "Bank transfer" },
  { name: "Awash Bank", type: "Bank transfer" },
  { name: "Bank of Abyssinia", type: "Bank transfer" },
  { name: "Telebirr", type: "Mobile money" },
] as const;

export const MEAL_OPTIONS = ["Beef", "Chicken", "Fish", "Vegetarian", "Vegan"] as const;

const place = encodeURIComponent(VENUE.mapQuery);

export const VENUE_LINKS = [
  { label: "Google Maps", url: `https://www.google.com/maps/dir/?api=1&destination=${place}` },
  { label: "Apple Maps", url: `https://maps.apple.com/?daddr=${place}` },
  { label: "Waze", url: `https://waze.com/ul?q=${place}&navigate=yes` },
  { label: "View on map", url: `https://www.google.com/maps/search/?api=1&query=${place}` },
] as const;

export const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Entoto+Park+Addis+Ababa";

/** Photos for the auto-scrolling "Moments" strip. Add more entries to lengthen the loop. */
export const MOMENT_PHOTOS = [
  { src: couplePortrait, alt: "Amanuel and Saron walking in the garden", position: "object-left" },
  { src: storyDetail, alt: "Wedding rings and stationery", position: "object-center" },
  { src: guestCelebration, alt: "Friends celebrating together", position: "object-center" },
  { src: eventHero, alt: "The wedding celebration at sunset", position: "object-center" },
  { src: couplePortrait, alt: "Amanuel and Saron walking together", position: "object-right" },
  { src: eventHero, alt: "Amanuel and Saron at their garden celebration", position: "object-left" },
  { src: guestCelebration, alt: "Friends celebrating together", position: "object-right" },
  { src: storyDetail, alt: "Wedding rings and burgundy stationery", position: "object-right" },
] as const;
