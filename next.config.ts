import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project repo from /<repo-name>, so the base path is
 * injected at build time by the deploy workflow. It stays empty for local
 * builds and for a <user>.github.io repo.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
