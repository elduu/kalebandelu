import { useEffect, useState } from "react";

import { MusicPlayer } from "@/components/controls/MusicPlayer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  AboutCouple,
  CalendarSection,
  Countdown,
  FamilyInvitation,
  Films,
  Gallery,
  GiftRegistry,
  GuestGallery,
  Hero,
  MomentsMarquee,
  Rsvp,
  Schedule,
  Story,
  Venue,
  Wishes,
} from "@/components/sections";
import { OpenInvitation } from "@/components/sections/OpenInvitation";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { playMusic } from "@/lib/music.ts";

/** The main invitation lives at this path; "/" is the welcome page. */
const MAIN_PATH = "/invitation";

const isMainPath = () => window.location.pathname.startsWith(MAIN_PATH);

export default function App() {
  const [entered, setEntered] = useState(isMainPath);

  // Keep the page in step with the browser's back/forward buttons.
  useEffect(() => {
    const onPopState = () => setEntered(isMainPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function handleOpen() {
    console.log("[music] Open invitation tapped");
    // Called straight from the tap, so the browser allows the sound.
    void playMusic();
    window.history.pushState({}, "", MAIN_PATH); // no reload, so the music keeps playing
    window.scrollTo(0, 0);
    setEntered(true);
  }

  return (
    <LanguageProvider>
      {entered ? (
        <div className="min-h-screen overflow-hidden bg-background text-foreground">
          <Header />

          <main>
            <Hero />
            <FamilyInvitation />
            <Countdown />
            <CalendarSection />
            <Schedule />
            <AboutCouple />
            <Story />
            <Films />
            <MomentsMarquee />
            <Gallery />
            <GuestGallery />
            <Rsvp />
            <GiftRegistry />
            <Wishes />
            <Venue />
          </main>

          <Footer />
          <MusicPlayer />
        </div>
      ) : (
        <OpenInvitation onOpen={handleOpen} />
      )}
    </LanguageProvider>
  );
}