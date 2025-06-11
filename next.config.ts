import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      // ✅ Added for player images
      {
        protocol: "https",
        hostname: "images.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "focusedcollection.com",
      },
      {
        protocol: "https",
        hostname: "johngress.com",
      },
    ],
  },
};

export default nextConfig;
