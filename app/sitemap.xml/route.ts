import { NextResponse } from "next/server";

const BASE_URL = "https://medicareinfopro.com";

export const revalidate = 3600;

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/pages-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/post-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/faq-sitemap.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
