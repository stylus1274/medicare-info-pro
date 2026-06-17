import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Wimauma FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-wimauma-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Wimauma, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-wimauma-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Wimauma, FL.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-wimauma-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wimauma",
    "addressRegion": "FL",
    "postalCode": "33598",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Wimauma"
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
  title: "Medicare Insurance Agent Wimauma FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Wimauma, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Wimauma",
        cityFull: "Wimauma, FL",
        county: "Hillsborough County",
        slug: "wimauma",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Wimauma, FL",
        subheadline: "Wimauma is a rural community in South Hillsborough County where finding the right Medicare plan matters. Our licensed agents compare plans from 17+ carriers and verify your local doctors are covered, at no cost.",
        metaTitle: "Medicare Insurance Agent Wimauma FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Wimauma, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "South Bay Hospital",
          "HCA Florida South Tampa Hospital",
        ],
        neighborhoods: ["Wimauma 33598", "Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Wimauma?", a: "A licensed Medicare insurance agent in Wimauma compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at Bayfront Health Sun City Center and AdventHealth Riverview are in-network." },
          { q: "Is Medicare guidance free in Wimauma, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Wimauma?", a: "Wimauma (ZIP 33598) has access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code." },
          { q: "How do I find a Medicare agent near Wimauma?", a: "Our Brandon office serves all of South Hillsborough County including Wimauma. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "Are there Medicare plans that cover dental and vision in Wimauma?", a: "Yes. Many Medicare Advantage plans available in ZIP 33598 include dental, vision, and hearing benefits. We compare these extras alongside medical coverage to find the best overall value for you." },
        ],
        relatedLinks: [
          { label: "Medicare Agent Wimauma", href: "/medicare-agent-wimauma" },
          { label: "Medicare Insurance Agent Ruskin", href: "/medicare-insurance-agent-ruskin-fl" },
          { label: "Medicare Insurance Agent Sun City Center", href: "/medicare-insurance-agent-sun-city-center-fl" },
          { label: "Dental Coverage", href: "/dental-coverage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
