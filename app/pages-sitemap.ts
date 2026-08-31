import type { MetadataRoute } from "next";

const BASE_URL = "https://medicareinfopro.com";

// Core informational and tool pages
const CORE_PAGES = [
  "/",
  "/what-is-medicare",
  "/medicare-advantage",
  "/medicare-supplement",
  "/medicare-part-a",
  "/medicare-part-b",
  "/medicare-part-d",
  "/original-vs-advantage",
  "/coverage",
  "/coverage-qa",
  "/blog",
  "/free-consultation",
  "/contact-us",
  "/about-us",
  "/our-team",
  "/testimonials",
  "/resources",
  "/guides",
  "/faq",
  "/plan-comparison",
  "/medicare-101",
  "/medicare-quiz",
  "/medicare-penalty-calculator",
  "/enrollment-calculator",
  "/enrollment-timeline",
  "/cost-estimator",
  "/costs-at-a-glance",
  "/maximize-benefits",
  "/still-working",
  "/am-i-eligible",
  "/do-i-need-medicare",
  "/do-i-need-a-supplement",
  "/first-steps-checklist",
  "/3-ways-to-begin-your-medicare-coverage",
  "/turning-65-and-becoming-eligible-for-medicare",
  "/hmos",
  "/medicare-snp-plans",
  "/medicare-advantage-florida",
  "/medicare-ppo-plans-in-tampa",
  "/medicare-plan-counseling-tampa",
  "/understanding-part-d",
  "/how-medicare-part-d-works",
  "/privacy-policy",
  "/terms-and-conditions",
];

// Coverage sub-pages
const COVERAGE_SLUGS = [
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

// Local service area pages
const LOCAL_PAGES = [
  // Health insurance
  "/health-insurance-apollo-beach",
  "/health-insurance-brandon",
  "/health-insurance-riverview",
  "/health-insurance-sun-city",
  "/health-insurance-valrico",
  "/health-insurance-wimauma",
  // Health insurance brokers
  "/health-insurance-broker-apollo-beach",
  "/health-insurance-broker-brandon",
  "/health-insurance-broker-riverview",
  "/health-insurance-broker-ruskin",
  "/health-insurance-broker-temple-terrace",
  "/health-insurance-broker-valrico",
  // Medicare agents
  "/medicare-agent-apollo-beach",
  "/medicare-agent-brandon",
  "/medicare-agent-riverview",
  "/medicare-agent-sun-city",
  "/medicare-agent-valrico",
  "/medicare-agent-wimauma",
  // Medicare insurance agents (new format)
  "/medicare-insurance-agent-apollo-beach-fl",
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
  // Local medicare agent
  "/local-medicare-agent",
  "/local-medicare-agent-apollo-beach",
  "/local-medicare-agent-plant-city",
  "/local-medicare-agent-riverview",
  "/local-medicare-agent-sun-city",
  "/local-medicare-agent-temple-terrace",
  "/local-medicare-agent-valrico",
  // Medicare consulting services
  "/medicare-consulting-services-apollo-beach",
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
  // Medicare enrollment assistance
  "/medicare-enrollment-assistance-apollo-beach",
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
  // Medicare supplement insurance plans
  "/medicare-supplement-insurance-plans-apollo-beach",
  "/medicare-supplement-insurance-plans-brandon",
  "/medicare-supplement-insurance-plans-in-brandon-fl",
  "/medicare-supplement-insurance-plans-plant-city",
  "/medicare-supplement-insurance-plans-riverview",
  "/medicare-supplement-insurance-plans-sun-city",
  "/medicare-supplement-insurance-plans-tampa",
  "/medicare-supplement-insurance-plans-temple-terrace",
  "/medicare-supplement-insurance-plans-valrico",
  // Trusted medicare insurance agents
  "/trusted-medicare-insurance-agent-health-insurance-services-apollo-beach",
  "/trusted-medicare-insurance-agent-health-insurance-services-brandon",
  "/trusted-medicare-insurance-agent-health-insurance-services-riverview",
  "/trusted-medicare-insurance-agent-health-insurance-services-sun-city",
  "/trusted-medicare-insurance-agent-health-insurance-services-temple-terrace",
  "/trusted-medicare-insurance-agent-health-insurance-services-valrico",
  // Trusted medicare insurance brokers
  "/trusted-medicare-insurance-brokers-apollo-beach",
  "/trusted-medicare-insurance-brokers-brandon",
  "/trusted-medicare-insurance-brokers-riverview",
  "/trusted-medicare-insurance-brokers-ruskin",
  "/trusted-medicare-insurance-brokers-valrico",
  "/trusted-medicare-insurance-brokers-wimauma",
  // Comparing medicare plans
  "/comparing-medicare-plans-apollo-beach",
  "/comparing-medicare-plans-brandon",
  "/comparing-medicare-plans-plant-city",
  "/comparing-medicare-plans-riverview",
  "/comparing-medicare-plans-valrico",
  // Medicare advantage plans local
  "/medicare-advantage-plans-brandon-florida",
  "/medicare-part-b-assistance-in-brandon",
  "/medicare-plan-counseling-tampa",
  "/tampa-medicare-specialist",
];

// Team / advisor pages
const TEAM_PAGES = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const coreEntries: MetadataRoute.Sitemap = CORE_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.includes("free-consultation") ? 0.9 : 0.8,
  }));

  const coverageEntries: MetadataRoute.Sitemap = COVERAGE_SLUGS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const localEntries: MetadataRoute.Sitemap = LOCAL_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const teamEntries: MetadataRoute.Sitemap = TEAM_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...coreEntries,
    ...coverageEntries,
    ...localEntries,
    ...teamEntries,
  ];
}
