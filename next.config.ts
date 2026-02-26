import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    webpackBuildWorker: true,
  },
};

export default nextConfig;
