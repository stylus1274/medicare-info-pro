import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://medicareinfopro.com/sitemap.xml",
      "https://medicareinfopro.com/pages-sitemap.xml",
      "https://medicareinfopro.com/post-sitemap.xml",
    ],
  };
}
