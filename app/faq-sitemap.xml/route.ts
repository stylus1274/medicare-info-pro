import { sitemapLastmodXml } from "@/lib/sitemap-lastmod";
import { FAQ_SLUGS } from "@/app/faq-sitemap";

const BASE_URL = "https://medicareinfopro.com";

export const dynamic = "force-dynamic";

export async function GET() {
  const urls = FAQ_SLUGS.map(
    (slug) => `  <url>\n    <loc>${BASE_URL}${slug}/</loc>${sitemapLastmodXml(slug)}\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
