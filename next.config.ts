import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/work/agency", destination: "/work/womens-agency", permanent: true },
      { source: "/work/migrants", destination: "/work/migrant-welfare", permanent: true },
    ];
  },
};

export default nextConfig;
