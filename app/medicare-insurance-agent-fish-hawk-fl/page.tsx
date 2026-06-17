import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Fish Hawk FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-fish-hawk-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Fish Hawk, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Fish Hawk FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Fish Hawk, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Fish Hawk",
        cityFull: "Fish Hawk, FL",
        county: "Hillsborough County",
        slug: "fish-hawk",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Fish Hawk, FL",
        subheadline: "Fish Hawk is a planned community in southeastern Hillsborough County with growing Medicare needs. Our licensed agents compare plans from 17+ carriers and verify your local doctors are covered, all at no cost.",
        metaTitle: "Medicare Insurance Agent Fish Hawk FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Fish Hawk, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Brandon",
        ],
        neighborhoods: ["Fish Hawk 33547", "Lithia 33547", "Riverview 33579", "Brandon 33511"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Fish Hawk?", a: "A licensed Medicare insurance agent in Fish Hawk compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at HCA Florida Brandon Hospital and AdventHealth Brandon are in-network." },
          { q: "Is Medicare guidance free for Fish Hawk residents?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What ZIP code does Fish Hawk use for Medicare plan searches?", a: "Fish Hawk uses ZIP code 33547, which it shares with Lithia. We search available plans specifically for your address to ensure accuracy." },
          { q: "What Medicare Advantage plans are available in Fish Hawk?", a: "Fish Hawk residents have access to multiple Medicare Advantage HMO and PPO plans. We compare all available options for ZIP 33547 and verify your specific doctors are in-network." },
          { q: "Can I get a Medigap plan in Fish Hawk?", a: "Yes. Medigap plans are available in Fish Hawk and allow you to see any Medicare-accepting doctor nationwide. We compare Medigap options alongside Medicare Advantage so you can choose the right fit." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Insurance Agent Lithia", href: "/medicare-insurance-agent-lithia-fl" },
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement-insurance-plans-brandon" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
