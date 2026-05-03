import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This allows your tablet to connect without errors
  allowedDevOrigins: ['192.168.29.240'],
};

export default nextConfig;