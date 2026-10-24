import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.loca.lt",
  ],
};

export default nextConfig;
