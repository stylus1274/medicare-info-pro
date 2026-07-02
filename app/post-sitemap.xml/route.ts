import { NextResponse } from "next/server";

const BASE_URL = "https://medicareinfopro.com";

const BLOG_SLUGS = [
  "/how-to-enroll-in-medicare",
  "/does-medicare-cover-dental",
  "/medicare-advantage-vs-medigap",
  "/best-medicare-advantage-plans-hillsborough-county",
  "/medicare-out-of-pocket-costs",
  "/how-to-get-help-paying-for-medicare",
  "/feeling-trapped-in-medicare-advantage-plans",
  "/2025-medicare-scams-florida",
  "/understanding-the-2000-out-of-pocket-cap-for-medicare-part-d-in-2025",
  "/does-medicare-cover-home-health-care",
  "/what-is-the-special-enrollment-period",
  "/does-medicare-cover-cataract-surgery",
  "/does-medicare-cover-ambulance-rides",
  "/why-is-health-insurance-so-expensive-in-florida",
  "/how-much-does-health-insurance-cost-per-month-in-florida",
  "/what-are-the-best-medicare-plans-for-seniors",
  "/is-reinstating-a-part-d-plan-possible",
  "/best-medicare-advantage-plans-florida",
  "/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
  "/medicare-qualifications-florida",
  "/how-to-reduce-medicare-premiums-based-on-income-2026",
  "/medicare-advantage-changes-2026-florida",
  "/medicare-set-aside-explained",
  "/florida-medicare-if-still-working-at-65",
  "/does-medicare-cover-ozempic",
  "/switch-medicare-advantage-florida",
  "/medicare-coverage-for-scooters",
  "/how-medicare-premiums-are-calculated",
  "/why-is-medicare-coverage-so-important",
  "/can-i-drop-my-medicare-advantage-plan-and-go-back-to-original-medicare",
  "/florida-health-insurance-cost",
  "/medicare-plans-cancer-treatment",
  "/medicare-scams-florida",
  "/medicare-supplement-plans-in-florida",
  "/how-to-choose-medicare-advantage-plans-2026",
  "/original-medicare-vs-medicare-advantage-in-florida",
  "/pros-and-cons-of-florida-medicare-supplement-plans",
  "/medicare-age",
  "/the-pros-and-cons-of-enrolling-in-a-medicare-advantage-plan-in-florida",
  "/medicare-supplement-plans-florida-2026",
  "/medicare-disability-eligibility-requirements",
  "/medicare-issues-for-veterans-tampa",
  "/medicare-why-are-there-so-many-letters",
  "/value-added-benefits-through-medicare-advantage",
  "/medigap-premium-increases",
  "/why-medicare-denies-mobility-scooter-claims-florida",
  "/best-medicare-agent-in-florida",
  "/5-best-medicare-consultants-in-tampa-bay",
  "/maximize-medicare-benefits-florida-seniors",
  "/medicare-advantage-travel-benefits-florida-residents",
  "/best-medicare-plans-for-snowbirds-in-florida",
  "/can-i-have-both-medicare-and-medicaid",
  "/medicare-part-d-out-of-pocket-cap",
  "/resolving-common-challenges-when-selecting-medicare-in-florida",
  "/medicare-and-employer-insurance-after-65-brandon-fl",
  "/understanding-medicare-part-b",
  "/which-medicare-advantage-plans-tampa-free-post-hospital-meals",
  "/do-you-need-to-work-with-a-medicare-insurance-agent",
  "/what-are-the-6-things-medicare-doesnt-cover",
  "/medicare-broker-vs-agent",
  "/affordable-health-insurance-options-for-tampa-families",
  "/use-medicare-insurance-agent-in-florida",
  "/plan-g-complete-guide",
  "/working-past-65",
  "/medicare-without-social-security",
  "/why-choose-medigap-plan-g",
  "/does-medicare-cover-life-alert",
  "/2026-medicare-advantage-changes",
  "/irmaa-explained",
  "/part-d-2000-cap",
  "/medigap-open-enrollment",
  "/annual-enrollment-period-guide",
  "/medicare-vs-medicaid",
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
