import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trusted Medicare Insurance Brokers Ruskin FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-brokers-ruskin",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find trusted Medicare insurance brokers in Ruskin, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Brokers Ruskin FL | Medicare Information Project",
  description: "Find trusted Medicare insurance brokers in Ruskin, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
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
        city: "Ruskin",
        cityFull: "Ruskin, FL",
        county: "Hillsborough County",
        slug: "ruskin",
        pageType: "broker",
        headline: "Trusted Medicare Insurance Brokers in Ruskin, FL",
        subheadline: "Ruskin is a growing waterfront community in South Hillsborough County. Our independent Medicare brokers compare plans from 17+ carriers and verify your local doctors are covered, at no cost to you.",
        metaTitle: "Trusted Medicare Insurance Brokers Ruskin FL | Medicare Information Project",
        metaDescription: "Find trusted Medicare insurance brokers in Ruskin, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "South Bay Hospital",
          "HCA Florida South Tampa Hospital",
        ],
        neighborhoods: ["Ruskin 33570", "Sun City Center 33573", "Apollo Beach 33572", "Wimauma 33598"],
        faqs: [
          { q: "What does an independent Medicare broker do in Ruskin?", a: "An independent Medicare broker in Ruskin compares plans from multiple carriers rather than promoting a single company. We compare Medicare Advantage, Medigap, and Part D plans available in ZIP 33570 and verify your specific doctors are covered." },
          { q: "Is working with a Medicare broker free in Ruskin?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "How do I find a trusted Medicare broker near Ruskin?", a: "Our Brandon office serves the entire South Hillsborough County area including Ruskin. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "What plans can a Ruskin Medicare broker compare?", a: "Our Ruskin brokers compare Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from 17+ carriers. We verify your doctors at Bayfront Health Sun City Center and AdventHealth Riverview are covered." },
          { q: "Can a Medicare broker in Ruskin help me compare Medigap plans?", a: "Yes. We compare Medigap plans alongside Medicare Advantage options so you can choose the coverage type that best fits your healthcare needs and budget." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Ruskin", href: "/medicare-insurance-agent-ruskin-fl" },
          { label: "Trusted Brokers Apollo Beach", href: "/trusted-medicare-insurance-brokers-apollo-beach" },
          { label: "Trusted Brokers Wimauma", href: "/trusted-medicare-insurance-brokers-wimauma" },
          { label: "Our Team", href: "/our-team" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
