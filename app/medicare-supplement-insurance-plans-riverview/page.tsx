import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Supplement Insurance Plans Riverview FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-riverview",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Supplement (Medigap) insurance plans in Riverview, FL. Independent agents help you find the lowest premium for the coverage you need."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-supplement-insurance-plans-riverview#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Riverview, FL.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-riverview",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Riverview",
    "addressRegion": "FL",
    "postalCode": "33578",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Riverview"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Supplement Insurance Plans Riverview FL | Medicare Information Project",
  description: "Compare Medicare Supplement (Medigap) insurance plans in Riverview, FL. Independent agents help you find the lowest premium for the coverage you need.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LocalAgentPage
      config={{
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "supplement",
        headline: "Medicare Supplement Insurance Plans in Riverview, FL",
        subheadline: "Riverview residents who want the freedom to see any Medicare-accepting doctor without network restrictions often choose Medigap. We compare plans from multiple carriers to find the best value for your situation.",
        metaTitle: "Medicare Supplement Insurance Plans Riverview FL | Medicare Information Project",
        metaDescription: "Compare Medicare Supplement (Medigap) insurance plans in Riverview, FL. Independent agents help you find the lowest premium for the coverage you need.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "What is a Medicare Supplement plan in Riverview?", a: "A Medicare Supplement plan, also called Medigap, is a private insurance policy that helps pay for costs Original Medicare does not cover. Medigap plans allow you to see any doctor or hospital that accepts Medicare nationwide, including AdventHealth Riverview and HCA Florida Brandon Hospital." },
          { q: "What Medigap plans are available in Riverview?", a: "Riverview residents can choose from standardized Medigap plans A through N. Plan G is currently the most comprehensive plan available to new Medicare enrollees. We compare all available options for your ZIP code." },
          { q: "How much does a Medicare Supplement plan cost in Riverview?", a: "Medigap premiums in Riverview vary by carrier, plan type, age, and gender. For the same plan letter, premiums can differ significantly between carriers. We compare all available options to find the lowest premium." },
          { q: "Is Medigap guidance free in Riverview?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "When is the best time to enroll in a Medigap plan in Riverview?", a: "The best time to enroll in a Medigap plan is during your 6-month Medigap Open Enrollment Period, which starts when you are 65 and enrolled in Part B. During this window, no medical underwriting is required." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl" },
          { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon" },
          { label: "Medicare Supplement Plans Valrico", href: "/medicare-supplement-insurance-plans-valrico" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
