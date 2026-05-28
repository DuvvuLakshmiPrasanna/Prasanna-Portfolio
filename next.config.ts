import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isUserSite = repo.endsWith(".github.io");
const basePath = isGitHubPages && !isUserSite ? `/${repo}` : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  // Ensure Turbopack resolves modules from the project root
  turbopack: {
    root: __dirname,
  },
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // Disable dev indicators overlay
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
