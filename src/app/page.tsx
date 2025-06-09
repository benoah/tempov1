// src/app/page.tsx
import Hero from "./components/Hero";
import PlayerShowcase from "./components/PlayerShowcase";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import VideoSection from "./components/VideoSection"; // Import the new VideoSection component

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PlayerShowcase />
      <ContactSection />
      {/* This is the new Video Section, placed after the ContactSection */}
      {/* Remember to replace the 'videoSrc' with your actual video URL! */}
      <VideoSection videoSrc="/videos/my-football-video.mp4">
        {" "}
        {/* <--- Changed videoSrc here */}
        {/* Content that will appear on top of the video background */}
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight drop-shadow-lg">
          Se Våre Spillere I Aksjon!
        </h2>
        <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
          Opplev spenningen og ferdighetene som gjør våre spillere unike.
        </p>
      </VideoSection>
    </>
  );
}
