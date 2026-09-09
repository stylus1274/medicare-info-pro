import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  webpack(config, { webpack }) {
    const { Compilation, sources } = webpack;

    config.plugins.push({
      apply(compiler) {
        compiler.hooks.thisCompilation.tap("PublicBrandNameStandardization", (compilation) => {
          compilation.hooks.processAssets.tap(
            {
              name: "PublicBrandNameStandardization",
              stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
            },
            (assets) => {
              for (const [assetName, asset] of Object.entries(assets)) {
                if (!/\.(?:html|js|json|txt|xml)$/i.test(assetName)) continue;

                const source = asset.source().toString();
                const standardized = source
                  .replace(/Medicare Information Pro(?!ject)/g, "Medicare Information Project")
                  .replaceAll("Insurance Central of Tampa Bay", "Medicare Information Project")
                  .replaceAll("MedicareInfoPro", "Medicare Information Project");

                if (source !== standardized) {
                  compilation.updateAsset(assetName, new sources.RawSource(standardized));
                }
              }
            }
          );
        });
      },
    });

    return config;
  },
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
        destination: "/get-started/",
        permanent: true,
      },
      {
        source: "/free-consultation/",
        destination: "/get-started/",
        permanent: true,
      },
      {
        // Old stale slugs with year — redirect to clean evergreen slugs at root level
        source: "/blog/understanding-the-2000-out-of-pocket-cap-for-medicare-part-d-in-2025",
        destination: "/medicare-part-d-out-of-pocket-cap/",
        permanent: true,
      },
      {
        source: "/blog/2025-medicare-scams-florida",
        destination: "/medicare-scams-florida/",
        permanent: true,
      },
      {
        source: "/blog/medicare-ambulance-coverage-2025",
        destination: "/does-medicare-cover-ambulance-rides/",
        permanent: true,
      },
      {
        source: "/medicare-ambulance-coverage-2025",
        destination: "/does-medicare-cover-ambulance-rides/",
        permanent: true,
      },
      {
        source: "/medicare-part-c-explained",
        destination: "/medicare-part-c/",
        permanent: true,
      },
      {
        source: "/medicare-part-c-explained/",
        destination: "/medicare-part-c/",
        permanent: true,
      },
      {
        // Catch-all: redirect any /blog/[slug] to /[slug]/
        source: "/blog/:slug",
        destination: "/:slug/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
