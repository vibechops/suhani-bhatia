import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/work/agency", destination: "/work/womens-agency", permanent: true },
      { source: "/work/migrants", destination: "/work/migrant-welfare", permanent: true },
      { source: "/work/telangana-police", destination: "/work/transgender-rights", permanent: true },
      { source: "/work/pensions", destination: "/work/pension-delivery", permanent: true },
      { source: "/work/spatial-access", destination: "/work/mobile-geography", permanent: true },
      { source: "/work/policy-data-workflow", destination: "/work/welfare-data-workflow", permanent: true },
    ];
  },
};

export default nextConfig;
