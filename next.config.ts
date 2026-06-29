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
        // Old stale slugs with year — redirect to clean evergreen slugs at root level
        source: "/blog/understanding-the-2000-out-of-pocket-cap-for-medicare-part-d-in-2025",
        destination: "/medicare-part-d-out-of-pocket-cap",
        permanent: true,
      },
      {
        source: "/blog/2025-medicare-scams-florida",
        destination: "/medicare-scams-florida",
        permanent: true,
      },
      {
        source: "/blog/medicare-ambulance-coverage-2025",
        destination: "/does-medicare-cover-ambulance-rides",
        permanent: true,
      },
      {
        source: "/medicare-ambulance-coverage-2025",
        destination: "/does-medicare-cover-ambulance-rides",
        permanent: true,
      },
      {
        source: "/medicare-part-c-explained",
        destination: "/medicare-part-c",
        permanent: true,
      },
      {
        source: "/medicare-part-c-explained/",
        destination: "/medicare-part-c",
        permanent: true,
      },
      {
        // Catch-all: redirect any /blog/[slug] to /[slug]
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
