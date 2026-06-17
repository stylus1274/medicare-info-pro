import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Supplement Insurance Plans Sun City FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-sun-city",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Supplement (Medigap) insurance plans in Sun City Center, FL. Independent agents help retirees find the lowest premium for the coverage they need."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Supplement Insurance Plans Sun City FL | Medicare Information Project",
  description: "Compare Medicare Supplement (Medigap) insurance plans in Sun City Center, FL. Independent agents help retirees find the lowest premium for the coverage they need.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <LocalAgentPage
      config={{
        city: "Sun City Center",
        cityFull: "Sun City Center, FL",
        county: "Hillsborough County",
        slug: "sun-city",
        pageType: "supplement",
        headline: "Medicare Supplement Insurance Plans in Sun City Center, FL",
        subheadline: "Many Sun City Center retirees choose Medigap for its predictable costs and freedom to see any Medicare-accepting doctor nationwide. We compare plans from multiple carriers to find the best value for your retirement lifestyle.",
        metaTitle: "Medicare Supplement Insurance Plans Sun City FL | Medicare Information Project",
        metaDescription: "Compare Medicare Supplement (Medigap) insurance plans in Sun City Center, FL. Independent agents help retirees find the lowest premium for the coverage they need.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "Sun City Center Medical Associates",
          "HCA Florida South Tampa Hospital",
        ],
        neighborhoods: ["Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572", "Wimauma 33598"],
        faqs: [
          { q: "What is a Medicare Supplement plan in Sun City Center?", a: "A Medicare Supplement plan, also called Medigap, is a private insurance policy that helps pay for costs Original Medicare does not cover. Medigap plans allow you to see any doctor or hospital that accepts Medicare nationwide, including Bayfront Health Sun City Center." },
          { q: "What Medigap plans are available in Sun City Center?", a: "Sun City Center residents can choose from standardized Medigap plans A through N. Plan G is currently the most comprehensive plan available to new Medicare enrollees. We compare all available options for ZIP 33573." },
          { q: "How much does a Medicare Supplement plan cost in Sun City Center?", a: "Medigap premiums in Sun City Center vary by carrier, plan type, age, and gender. For the same plan letter, premiums can differ significantly between carriers. We compare all available options to find the lowest premium." },
          { q: "Is Medigap guidance free in Sun City Center?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "Why do many Sun City Center retirees choose Medigap over Medicare Advantage?", a: "Many Sun City Center retirees prefer Medigap because it allows them to see any Medicare-accepting doctor or specialist nationwide without referrals or network restrictions. This is especially valuable for retirees who travel or have established relationships with specific specialists." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Sun City Center", href: "/medicare-insurance-agent-sun-city-center-fl" },
          { label: "Medicare Supplement Plans Apollo Beach", href: "/medicare-supplement-insurance-plans-apollo-beach" },
          { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
