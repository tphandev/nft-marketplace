import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
