import type { MetadataRoute } from "next";

// Sitemap index — Next.js serves this at /sitemap.xml
// Child sitemaps are served by route handlers at:
//   /pages-sitemap.xml  →  app/pages-sitemap.xml/route.ts
//   /blog-sitemap.xml   →  app/blog-sitemap.xml/route.ts

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://medicareinfopro.com/pages-sitemap.xml",
    },
    {
      url: "https://medicareinfopro.com/blog-sitemap.xml",
    },
  ];
}
