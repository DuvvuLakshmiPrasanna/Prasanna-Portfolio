import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Turbopack resolves modules from the project root
  turbopack: {
    root: __dirname,
  },
  // Disable dev indicators overlay
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
