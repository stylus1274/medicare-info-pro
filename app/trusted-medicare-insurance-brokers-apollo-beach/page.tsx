import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trusted Medicare Insurance Brokers Apollo Beach FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-brokers-apollo-beach",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find trusted Medicare insurance brokers in Apollo Beach, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Brokers Apollo Beach FL | Medicare Information Project",
  description: "Find trusted Medicare insurance brokers in Apollo Beach, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
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
        city: "Apollo Beach",
        cityFull: "Apollo Beach, FL",
        county: "Hillsborough County",
        slug: "apollo-beach",
        pageType: "broker",
        headline: "Trusted Medicare Insurance Brokers in Apollo Beach, FL",
        subheadline: "An independent Medicare broker in Apollo Beach works for you, not for any single insurance company. We compare plans from 17+ carriers and verify your local doctors are covered, at no cost.",
        metaTitle: "Trusted Medicare Insurance Brokers Apollo Beach FL | Medicare Information Project",
        metaDescription: "Find trusted Medicare insurance brokers in Apollo Beach, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "Bayfront Health Sun City Center",
          "HCA Florida South Tampa Hospital",
          "BayCare Medical Group South County",
        ],
        neighborhoods: ["Apollo Beach 33572", "Ruskin 33570", "Sun City Center 33573", "Gibsonton 33534"],
        faqs: [
          { q: "What does an independent Medicare broker do in Apollo Beach?", a: "An independent Medicare broker in Apollo Beach compares plans from multiple carriers rather than promoting a single company. We compare Medicare Advantage, Medigap, and Part D plans available in ZIP 33572 and verify your specific doctors are covered." },
          { q: "Is working with a Medicare broker free in Apollo Beach?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "How do I find a trusted Medicare broker near Apollo Beach?", a: "Our Brandon office serves the entire South Hillsborough County area including Apollo Beach. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "What plans can an Apollo Beach Medicare broker compare?", a: "Our Apollo Beach brokers compare Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from 17+ carriers. We verify your doctors at AdventHealth Riverview and Bayfront Health Sun City Center are covered." },
          { q: "Can a Medicare broker in Apollo Beach help me switch plans?", a: "Yes. The Annual Enrollment Period (October 15 to December 7) is the main window to switch plans. We review your current coverage and compare all available alternatives each year." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Apollo Beach", href: "/medicare-insurance-agent-apollo-beach-fl" },
          { label: "Trusted Brokers Brandon", href: "/trusted-medicare-insurance-brokers-brandon" },
          { label: "Trusted Brokers Ruskin", href: "/trusted-medicare-insurance-brokers-ruskin" },
          { label: "Our Team", href: "/our-team" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
