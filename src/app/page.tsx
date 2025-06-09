// src/app/page.tsx
import Hero from "./components/Hero";
import PlayerShowcase from "./components/PlayerShowcase";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PlayerShowcase />
      <ContactSection />
    </>
  );
}
