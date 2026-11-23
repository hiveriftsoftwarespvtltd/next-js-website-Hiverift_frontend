import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.loca.lt",
  ],
};

export default nextConfig;
