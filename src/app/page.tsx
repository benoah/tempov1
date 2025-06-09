// NY OG KORREKT page.tsx (UTEN Navbar og Footer)
import Hero from "./components/Hero";
import PlayerShowcase from "./components/PlayerShowcase";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import "./globals.css"; // Denne linjen sikrer at alle globale stiler gjelder

export default function Home() {
  return (
    <>
      <Hero />
      <PlayerShowcase />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
