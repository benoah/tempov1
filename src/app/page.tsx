// src/app/page.tsx

import Hero from "./components/Hero";
import PlayerShowcase from "./components/PlayerShowcase";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import VideoSection from "./components/VideoSection";
import SocialResponsibilitySection from "./components/SocialResponsibilitySection";
import OurTeamSection from "./components/OurTeamSection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Welcome to Tempo family */}
      <Hero />

      {/* Video Background Section - Football Excellence */}
      <VideoSection videoSrc="/images/hero-football.mp4" />

      {/* Social Responsibility Section - National Football Scholarship */}
      <SocialResponsibilitySection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section - Football */}
      <ServicesSection />

      {/* Our Team Section */}
      <OurTeamSection />

      {/* Players Section - Our Team */}
      <PlayerShowcase />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
