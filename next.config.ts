import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... your other configurations
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      // ADDED FOR SQUARESPACE IMAGES
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
