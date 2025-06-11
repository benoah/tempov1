// src/app/page.tsx
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlayerShowcase from "./components/PlayerShowcase";
import ServicesSection from "./components/ServicesSection";
import SocialResponsibilitySection from "./components/SocialResponsibilitySection";
import OurTeamSection from "./components/OurTeamSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      {/**
     
  
       */}
      <Hero />
      <VideoSection videoSrc="/images/svart.mp4" />;
      <PlayerShowcase />
      {/* Moved to videos folder */}
      {/* 1. Vision + Values (Start here to set the tone) */}
      <AboutSection /> {/* <-- Move this up */}
      {/* 2. What We Offer */}
      <ServicesSection />
      {/* 3. Why We Care */}
      <SocialResponsibilitySection />
      {/* 4. Who We Are */}
      <OurTeamSection />
      {/* 5. Call to Action */}
      <ContactSection />
    </main>
  );
}
