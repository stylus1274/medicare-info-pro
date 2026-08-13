import { FAQ_SLUGS } from "@/app/faq-sitemap";

const BASE_URL = "https://medicareinfopro.com";

export const dynamic = "force-dynamic";

export async function GET() {
  const lastModified = new Date().toISOString().split("T")[0];
  const urls = FAQ_SLUGS.map(
    (slug) => `  <url>\n    <loc>${BASE_URL}${slug}/</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
