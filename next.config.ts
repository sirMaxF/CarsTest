import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.sstatic.net']
  },

  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
