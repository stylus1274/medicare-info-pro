import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Riverview FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-riverview-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Riverview, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Riverview FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Riverview, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Riverview, FL",
        subheadline: "Riverview is one of the fastest-growing communities in Florida, and Medicare options here are expanding rapidly. Our licensed agents compare plans from 17+ carriers and verify your local doctors are covered.",
        metaTitle: "Medicare Insurance Agent Riverview FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Riverview, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Riverview?", a: "A licensed Medicare insurance agent in Riverview compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at AdventHealth Riverview and HCA Florida Brandon Hospital are in-network before recommending any plan." },
          { q: "Is Medicare guidance free in Riverview, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What ZIP codes in Riverview do you serve?", a: "We serve all Riverview ZIP codes including 33569, 33578, and 33579. Plan availability can vary by ZIP code, so we always check your specific address." },
          { q: "How do I compare Medicare Advantage plans in Riverview?", a: "We pull all available Medicare Advantage plans for your ZIP code, compare premiums, copays, out-of-pocket maximums, and drug formularies, and verify your doctors are in-network before making any recommendation." },
          { q: "What is the best Medicare plan in Riverview?", a: "The best plan depends on your specific doctors, medications, and budget. We compare all available options in your ZIP code and help you identify the plan that best fits your individual needs." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Medicare Insurance Agent Gibsonton", href: "/medicare-insurance-agent-gibsonton-fl" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
