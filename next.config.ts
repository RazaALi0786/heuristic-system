import type { NextConfig } from "next";

// Keep only valid Next.js config options here. Tailwind and theme-related
// settings belong in `tailwind.config.js`.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable TypeScript build-time errors (keeps the existing behavior)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
