import type { NextConfig } from "next";

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
// so all internal links/assets need that repo name as a base path. The
// deploy workflow sets NEXT_PUBLIC_BASE_PATH automatically at build time;
// it's empty for local dev and for a user/organization <user>.github.io repo.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
