// src/app/page.tsx

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";
import PlayerShowcase from "./components/PlayerShowcase";
import ServicesSection from "./components/ServicesSection";
import OurTeamSection from "./components/OurTeamSection";
import SocialResponsibilitySection from "./components/SocialResponsibilitySection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <AboutSection />
      <PlayerShowcase />
      <ServicesSection />
      <OurTeamSection />
      <SocialResponsibilitySection />
      <ContactSection />
    </main>
  );
}
