import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Export as static HTML files for cPanel hosting
  output: "export",
  // Disable features that don't work with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
