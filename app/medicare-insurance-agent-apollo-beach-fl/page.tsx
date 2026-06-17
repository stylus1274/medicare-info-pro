import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Apollo Beach FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-apollo-beach-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Apollo Beach, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-apollo-beach-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Apollo Beach, FL.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-apollo-beach-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Apollo Beach",
    "addressRegion": "FL",
    "postalCode": "33572",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Apollo Beach"
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
  title: "Medicare Insurance Agent Apollo Beach FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Apollo Beach, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Apollo Beach",
        cityFull: "Apollo Beach, FL",
        county: "Hillsborough County",
        slug: "apollo-beach",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Apollo Beach, FL",
        subheadline: "Licensed Medicare insurance agents serving Apollo Beach and South Hillsborough County. We compare plans from 17+ carriers and verify your local doctors are covered, all at no cost to you.",
        metaTitle: "Medicare Insurance Agent Apollo Beach FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Apollo Beach, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "Bayfront Health Sun City Center",
          "HCA Florida South Tampa Hospital",
          "BayCare Medical Group South County",
        ],
        neighborhoods: ["Apollo Beach 33572", "Ruskin 33570", "Sun City Center 33573", "Gibsonton 33534"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Apollo Beach?", a: "A licensed Medicare insurance agent in Apollo Beach compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We check which plans include your doctors at AdventHealth Riverview and Bayfront Health Sun City Center." },
          { q: "Is Medicare insurance guidance free in Apollo Beach?", a: "Yes. Our service is completely free to Apollo Beach residents. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Apollo Beach, FL?", a: "Apollo Beach (ZIP 33572) has access to Medicare Advantage HMO and PPO plans, Medigap plans, and Part D drug plans. Plan availability and premiums vary by ZIP code." },
          { q: "How do I compare Medicare plans in Apollo Beach?", a: "We pull all available plans for your ZIP code, compare premiums, copays, drug formularies, and out-of-pocket maximums, and verify your doctors are in-network before recommending any plan." },
          { q: "When can I enroll in a Medicare plan in Apollo Beach?", a: "New enrollees have a 7-month Initial Enrollment Period around their 65th birthday. The Annual Enrollment Period runs October 15 through December 7 for plan changes." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Apollo Beach", href: "/local-medicare-agent-apollo-beach" },
          { label: "Medicare Agent Apollo Beach", href: "/medicare-agent-apollo-beach" },
          { label: "Medicare Insurance Agent Sun City Center", href: "/medicare-insurance-agent-sun-city-center-fl" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare 101", href: "/medicare-101" },
        ],
      }}
    />
    </>
  );
}
