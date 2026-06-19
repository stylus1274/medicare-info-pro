import { NextResponse } from "next/server";

const BASE_URL = "https://medicareinfopro.com";

const BLOG_SLUGS = [
  "/blog/medicare-out-of-pocket-costs",
  "/blog/how-to-get-help-paying-for-medicare",
  "/blog/feeling-trapped-in-medicare-advantage-plans",
  "/blog/2025-medicare-scams-florida",
  "/blog/medicare-ambulance-coverage-2025",
  "/blog/understanding-the-2000-out-of-pocket-cap-for-medicare-part-d-in-2025",
  "/blog/does-medicare-cover-home-health-care",
  "/blog/what-is-the-special-enrollment-period",
  "/blog/does-medicare-cover-cataract-surgery",
  "/blog/does-medicare-cover-ambulance-rides",
  "/blog/why-is-health-insurance-so-expensive-in-florida",
  "/blog/how-much-does-health-insurance-cost-per-month-in-florida",
  "/blog/what-are-the-best-medicare-plans-for-seniors",
  "/blog/is-reinstating-a-part-d-plan-possible",
  "/blog/best-medicare-advantage-plans-florida",
  "/blog/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
  "/blog/medicare-qualifications-florida",
  "/blog/how-to-reduce-medicare-premiums-based-on-income-2026",
  "/blog/medicare-advantage-changes-2026-florida",
  "/blog/medicare-set-aside-explained",
  "/blog/florida-medicare-if-still-working-at-65",
  "/blog/does-medicare-cover-ozempic",
  "/blog/switch-medicare-advantage-florida",
  "/blog/medicare-coverage-for-scooters",
  "/blog/how-medicare-premiums-are-calculated",
  "/blog/why-is-medicare-coverage-so-important",
  "/blog/can-i-drop-my-medicare-advantage-plan-and-go-back-to-original-medicare",
  "/blog/florida-health-insurance-cost",
  "/blog/medicare-plans-cancer-treatment",
  "/blog/medicare-scams-florida",
  "/blog/medicare-supplement-plans-in-florida",
  "/blog/how-to-choose-medicare-advantage-plans-2026",
  "/blog/original-medicare-vs-medicare-advantage-in-florida",
  "/blog/pros-and-cons-of-florida-medicare-supplement-plans",
  "/blog/medicare-age",
  "/blog/the-pros-and-cons-of-enrolling-in-a-medicare-advantage-plan-in-florida",
  "/blog/medicare-supplement-plans-florida-2026",
  "/blog/medicare-disability-eligibility-requirements",
  "/blog/medicare-issues-for-veterans-tampa",
  "/blog/medicare-why-are-there-so-many-letters",
  "/blog/value-added-benefits-through-medicare-advantage",
  "/blog/medigap-premium-increases",
  "/blog/why-medicare-denies-mobility-scooter-claims-florida",
  "/blog/best-medicare-agent-in-florida",
  "/blog/5-best-medicare-consultants-in-tampa-bay",
  "/blog/maximize-medicare-benefits-florida-seniors",
  "/blog/medicare-advantage-travel-benefits-florida-residents",
  "/blog/best-medicare-plans-for-snowbirds-in-florida",
  "/blog/can-i-have-both-medicare-and-medicaid",
  "/blog/medicare-part-d-out-of-pocket-cap",
  "/blog/resolving-common-challenges-when-selecting-medicare-in-florida",
  "/blog/medicare-and-employer-insurance-after-65-brandon-fl",
  "/blog/understanding-medicare-part-b",
  "/blog/which-medicare-advantage-plans-tampa-free-post-hospital-meals",
  "/blog/do-you-need-to-work-with-a-medicare-insurance-agent",
  "/blog/what-are-the-6-things-medicare-doesnt-cover",
  "/blog/medicare-broker-vs-agent",
  "/blog/affordable-health-insurance-options-for-tampa-families",
  "/blog/use-medicare-insurance-agent-in-florida",
  "/blog/plan-g-complete-guide",
  "/blog/working-past-65",
  "/blog/medicare-without-social-security",
  "/blog/why-choose-medigap-plan-g",
  "/blog/does-medicare-cover-life-alert",
  "/blog/2026-medicare-advantage-changes",
  "/blog/irmaa-explained",
  "/blog/part-d-2000-cap",
  "/blog/medigap-open-enrollment",
  "/blog/annual-enrollment-period-guide",
  "/blog/medicare-vs-medicaid",
];

export async function GET() {
  const now = new Date().toISOString();

  const urls = BLOG_SLUGS.map(
    (path) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
