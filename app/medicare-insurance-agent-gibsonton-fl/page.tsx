import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Gibsonton FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-gibsonton-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Gibsonton, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-gibsonton-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Gibsonton, FL.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-gibsonton-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gibsonton",
    "addressRegion": "FL",
    "postalCode": "33534",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Gibsonton"
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
  title: "Medicare Insurance Agent Gibsonton FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Gibsonton, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Gibsonton",
        cityFull: "Gibsonton, FL",
        county: "Hillsborough County",
        slug: "gibsonton",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Gibsonton, FL",
        subheadline: "Gibsonton residents deserve the same quality Medicare guidance as any larger community. Our licensed agents compare plans from 17+ carriers and verify your local doctors are covered, at no cost to you.",
        metaTitle: "Medicare Insurance Agent Gibsonton FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Gibsonton, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Gibsonton 33534", "Riverview 33578", "Apollo Beach 33572", "Ruskin 33570"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Gibsonton?", a: "A licensed Medicare insurance agent in Gibsonton compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at AdventHealth Riverview and HCA Florida Brandon Hospital are covered." },
          { q: "Is Medicare guidance free in Gibsonton, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Gibsonton?", a: "Gibsonton (ZIP 33534) has access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code." },
          { q: "How do I find a Medicare agent near Gibsonton?", a: "Our Brandon office is about 15 minutes from Gibsonton. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "Can a Gibsonton Medicare agent help me compare drug plans?", a: "Yes. We compare all Part D plans available in ZIP 33534 against your specific medications to find the plan with the lowest total drug cost for you." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl" },
          { label: "Medicare Insurance Agent Apollo Beach", href: "/medicare-insurance-agent-apollo-beach-fl" },
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Part D Drug Plans", href: "/part-d" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
