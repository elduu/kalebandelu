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
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}
