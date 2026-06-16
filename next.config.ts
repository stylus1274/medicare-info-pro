import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.manus.space" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/free-consultation",
        destination: "/get-started",
        permanent: true,
      },
      {
        // Old stale slug with year in URL — 301 to clean evergreen slug
        source: "/blog/understanding-the-2000-out-of-pocket-cap-for-medicare-part-d-in-2025",
        destination: "/blog/medicare-part-d-out-of-pocket-cap",
        permanent: true,
      },
      {
        source: "/blog/2025-medicare-scams-florida",
        destination: "/blog/medicare-scams-florida",
        permanent: true,
      },
      {
        source: "/blog/medicare-ambulance-coverage-2025",
        destination: "/blog/does-medicare-cover-ambulance-rides",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
