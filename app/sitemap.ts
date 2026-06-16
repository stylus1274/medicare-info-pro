import type { MetadataRoute } from "next";

const BASE_URL = "https://medicareinfopro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitemap index — points to the two child sitemaps.
  // Next.js serves this at /sitemap.xml automatically.
  // Child sitemaps are served at /pages-sitemap.xml and /blog-sitemap.xml.
  return [
    {
      url: `${BASE_URL}/pages-sitemap.xml`,
    },
    {
      url: `${BASE_URL}/blog-sitemap.xml`,
    },
  ];
}
