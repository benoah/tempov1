// src/components/VideoSection.tsx

import React from "react";

/**
 * Props for the VideoSection component.
 * @param videoSrc - The URL of the video file (e.g., .mp4).
 * @param children - React nodes to be rendered on top of the video background.
 * @param className - Optional additional CSS classes for the container.
 */
interface VideoSectionProps {
  videoSrc: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable component to display a section with a looping, muted video background.
 * Content passed as children will be displayed on top of the video.
 */
export default function VideoSection({
  videoSrc,
  children,
  className,
}: VideoSectionProps) {
  return (
    // The main container for the video section.
    // 'relative' allows positioning children absolutely within it.
    // 'h-96' sets a fixed height, 'w-full' makes it span full width.
    // 'overflow-hidden' prevents video overflow.
    // 'flex items-center justify-center' centers the content vertically and horizontally.
    // 'text-white' sets default text color for content.
    // 'className' allows external styling overrides or additions.
    <div
      className={`relative w-full h-96 overflow-hidden flex items-center justify-center text-white ${
        className || ""
      }`}
    >
      {/* Video Background Element */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" // 'inset-0' for full cover, 'z-0' for background, 'opacity' for blending.
        autoPlay // Automatically starts playback.
        loop // Continuously repeats the video.
        muted // Mutes the audio, crucial for autoplay in most browsers.
        playsInline // Ensures video plays directly within the element on iOS devices.
        preload="auto" // Hints to the browser to preload the video for faster startup.
      >
        {/* Source for the video file. Replace with your actual video URL. */}
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback text for browsers that do not support the video tag. */}
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      {/* 'relative z-10' ensures the content is above the video. */}
      {/* 'text-center' centers text within the content area. */}
      {/* 'px-4 py-8' adds padding around the content. */}
      <div className="relative z-10 text-center px-4 py-8">
        {children} {/* Render any child components passed to VideoSection */}
      </div>
    </div>
  );
}
