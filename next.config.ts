import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... dine andre konfigurasjoner
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // LEGG TIL DENNE FOR Å TILLATE PLACEHOLDER-BILDER
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
