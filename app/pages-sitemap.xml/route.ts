import { NextResponse } from "next/server";

const BASE_URL = "https://medicareinfopro.com";

const CORE_PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/what-is-medicare", priority: 0.9 },
  { path: "/medicare-advantage", priority: 0.9 },
  { path: "/medicare-supplement", priority: 0.9 },
  { path: "/medicare-part-a", priority: 0.8 },
  { path: "/medicare-part-b", priority: 0.8 },
  { path: "/medicare-part-c", priority: 0.8 },
  { path: "/medicare-part-d", priority: 0.8 },
  { path: "/original-vs-advantage", priority: 0.8 },
  { path: "/coverage", priority: 0.8 },
  { path: "/coverage-qa", priority: 0.8 },
  { path: "/blog", priority: 0.8 },
  { path: "/free-consultation", priority: 0.9 },
  { path: "/contact-us", priority: 0.8 },
  { path: "/about-us", priority: 0.7 },
  { path: "/our-team", priority: 0.6 },
  { path: "/testimonials", priority: 0.7 },
  { path: "/resources", priority: 0.7 },
  { path: "/guides", priority: 0.7 },
  { path: "/faq", priority: 0.8 },
  { path: "/plan-comparison", priority: 0.8 },
  { path: "/medicare-101", priority: 0.8 },
  { path: "/medicare-quiz", priority: 0.7 },
  { path: "/medicare-penalty-calculator", priority: 0.7 },
  { path: "/enrollment-calculator", priority: 0.7 },
  { path: "/enrollment-timeline", priority: 0.7 },
  { path: "/cost-estimator", priority: 0.7 },
  { path: "/costs-at-a-glance", priority: 0.7 },
  { path: "/maximize-benefits", priority: 0.7 },
  { path: "/still-working", priority: 0.7 },
  { path: "/am-i-eligible", priority: 0.8 },
  { path: "/do-i-need-medicare", priority: 0.8 },
  { path: "/do-i-need-a-supplement", priority: 0.8 },
  { path: "/first-steps-checklist", priority: 0.7 },
  { path: "/3-ways-to-begin-your-medicare-coverage", priority: 0.7 },
  { path: "/turning-65-and-becoming-eligible-for-medicare", priority: 0.7 },
  { path: "/hmos", priority: 0.7 },
  { path: "/medicare-snp-plans", priority: 0.7 },
  { path: "/medicare-advantage-florida", priority: 0.8 },
  { path: "/medicare-ppo-plans-in-tampa", priority: 0.7 },
  { path: "/medicare-plan-counseling-tampa", priority: 0.7 },
  { path: "/understanding-part-d", priority: 0.7 },
  { path: "/how-medicare-part-d-works", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-and-conditions", priority: 0.3 },
];

const COVERAGE_PAGES: string[] = [
  "/coverage/medicare-advantage",
  "/coverage/long-term-care",
  "/coverage/cancer-treatment",
  "/coverage/dental",
  "/coverage/hearing-aids",
  "/coverage/medical-equipment",
  "/coverage/mental-health",
  "/coverage/physical-therapy",
  "/coverage/prescription-drugs",
  "/coverage/skilled-nursing",
  "/coverage/vision",
];

const LOCAL_PAGES: string[] = [
  "/health-insurance-apollo-beach",
  "/health-insurance-brandon",
  "/health-insurance-riverview",
  "/health-insurance-sun-city",
  "/health-insurance-valrico",
  "/health-insurance-wimauma",
  "/health-insurance-broker-apollo-beach",
  "/health-insurance-broker-brandon",
  "/health-insurance-broker-riverview",
  "/health-insurance-broker-ruskin",
  "/health-insurance-broker-temple-terrace",
  "/health-insurance-broker-valrico",
  "/medicare-agent-apollo-beach",
  "/medicare-agent-brandon",
  "/medicare-agent-riverview",
  "/medicare-agent-sun-city",
  "/medicare-agent-valrico",
  "/medicare-agent-wimauma",
  "/medicare-agent-gainesville",
  "/medicare-supplement-insurance-plans-gainesville",
  "/comparing-medicare-plans-gainesville",
  "/medicare-advantage-plans-gainesville-florida",
  "/medicare-agent-tallahassee",
  "/medicare-supplement-insurance-plans-tallahassee",
  "/comparing-medicare-plans-tallahassee",
  "/medicare-advantage-plans-tallahassee-florida",
  "/medicare-enrollment-assistance-tallahassee",
  "/medicare-insurance-agent-apollo-beach-fl",
  "/medicare-insurance-agent-bartow-fl",
  "/medicare-insurance-agent-brandon-fl",
  "/medicare-insurance-agent-fish-hawk-fl",
  "/medicare-insurance-agent-gibsonton-fl",
  "/medicare-insurance-agent-lithia-fl",
  "/medicare-insurance-agent-plant-city-fl",
  "/medicare-insurance-agent-riverview-fl",
  "/medicare-insurance-agent-ruskin-fl",
  "/medicare-insurance-agent-seffner-fl",
  "/medicare-insurance-agent-sun-city-center-fl",
  "/medicare-insurance-agent-tampa-fl",
  "/medicare-insurance-agent-temple-terrace-fl",
  "/medicare-insurance-agent-valrico-fl",
  "/medicare-insurance-agent-wimauma-fl",
  "/local-medicare-agent",
  "/local-medicare-agent-apollo-beach",
  "/local-medicare-agent-plant-city",
  "/local-medicare-agent-riverview",
  "/local-medicare-agent-sun-city",
  "/local-medicare-agent-temple-terrace",
  "/local-medicare-agent-valrico",
  "/medicare-consulting-services-apollo-beach",
  "/medicare-consulting-services-bartow",
  "/medicare-consulting-services-brandon",
  "/medicare-consulting-services-fish-hawk",
  "/medicare-consulting-services-gibsonton",
  "/medicare-consulting-services-lithia",
  "/medicare-consulting-services-plant-city",
  "/medicare-consulting-services-riverview",
  "/medicare-consulting-services-ruskin",
  "/medicare-consulting-services-seffner",
  "/medicare-consulting-services-sun-city",
  "/medicare-consulting-services-sun-city-center",
  "/medicare-consulting-services-tampa",
  "/medicare-consulting-services-valrico",
  "/medicare-consulting-services-wimauma",
  "/medicare-enrollment-assistance-apollo-beach",
  "/medicare-enrollment-assistance-bartow",
  "/medicare-enrollment-assistance-brandon",
  "/medicare-enrollment-assistance-in-apollo-beach-fl",
  "/medicare-enrollment-assistance-in-brandon-fl",
  "/medicare-enrollment-assistance-in-riverview-fl",
  "/medicare-enrollment-assistance-in-sun-city-center-fl",
  "/medicare-enrollment-assistance-in-tampa-fl",
  "/medicare-enrollment-assistance-in-valrico-fl",
  "/medicare-enrollment-assistance-in-wimauma-fl",
  "/medicare-enrollment-assistance-plant-city",
  "/medicare-enrollment-assistance-riverview",
  "/medicare-enrollment-assistance-sun-city",
  "/medicare-enrollment-assistance-temple-terrace",
  "/medicare-enrollment-assistance-valrico",
  "/medicare-supplement-insurance-plans-apollo-beach",
  "/medicare-supplement-insurance-plans-bartow",
  "/medicare-supplement-insurance-plans-brandon",
  "/medicare-supplement-insurance-plans-in-brandon-fl",
  "/medicare-supplement-insurance-plans-plant-city",
  "/medicare-supplement-insurance-plans-riverview",
  "/medicare-supplement-insurance-plans-sun-city",
  "/medicare-supplement-insurance-plans-tampa",
  "/medicare-supplement-insurance-plans-temple-terrace",
  "/medicare-supplement-insurance-plans-valrico",
  "/trusted-medicare-insurance-agent-health-insurance-services-apollo-beach",
  "/trusted-medicare-insurance-agent-health-insurance-services-brandon",
  "/trusted-medicare-insurance-agent-health-insurance-services-riverview",
  "/trusted-medicare-insurance-agent-health-insurance-services-sun-city",
  "/trusted-medicare-insurance-agent-health-insurance-services-temple-terrace",
  "/trusted-medicare-insurance-agent-health-insurance-services-valrico",
  "/trusted-medicare-insurance-brokers-apollo-beach",
  "/trusted-medicare-insurance-brokers-brandon",
  "/trusted-medicare-insurance-brokers-riverview",
  "/trusted-medicare-insurance-brokers-ruskin",
  "/trusted-medicare-insurance-brokers-valrico",
  "/trusted-medicare-insurance-brokers-wimauma",
  "/comparing-medicare-plans-apollo-beach",
  "/comparing-medicare-plans-brandon",
  "/comparing-medicare-plans-plant-city",
  "/comparing-medicare-plans-riverview",
  "/comparing-medicare-plans-valrico",
  "/medicare-advantage-plans-brandon-florida",
  "/medicare-part-b-assistance-in-brandon",
  "/tampa-medicare-specialist",
];

const TEAM_PAGES: string[] = [
  "/advisors",
  "/find-an-agent",
  "/greg-wohl",
  "/jennifer-loader-wohl",
  "/chris-gallimore",
  "/paul-eckstein",
  "/dutch-vanhoesen",
  "/mark-vanhoesen",
  "/jd-diaz",
  "/kelly-webb",
  "/paxton-dement",
  "/valerie-justin-hall",
];

export async function GET() {
  const now = new Date().toISOString();

  const coreUrls = CORE_PAGES.map(
    ({ path, priority }) => `
  <url>
    <loc>${BASE_URL}${path}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  ).join("");

  const coverageUrls = COVERAGE_PAGES.map(
    (path) => `
  <url>
    <loc>${BASE_URL}${path}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join("");

  const localUrls = LOCAL_PAGES.map(
    (path) => `
  <url>
    <loc>${BASE_URL}${path}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join("");

  const teamUrls = TEAM_PAGES.map(
    (path) => `
  <url>
    <loc>${BASE_URL}${path}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${coreUrls}
${coverageUrls}
${localUrls}
${teamUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
