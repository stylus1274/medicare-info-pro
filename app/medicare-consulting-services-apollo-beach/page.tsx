import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Consulting Services Apollo Beach FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-consulting-services-apollo-beach",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Expert Medicare consulting services in Apollo Beach, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-consulting-services-apollo-beach#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Apollo Beach, FL.",
  "url": "https://medicareinfopro.com/medicare-consulting-services-apollo-beach",
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
  title: "Medicare Consulting Services Apollo Beach FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Apollo Beach, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
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
        pageType: "consulting",
        headline: "Medicare Consulting Services in Apollo Beach, FL",
        subheadline: "Apollo Beach residents deserve clear, unbiased Medicare guidance. Our consultants compare plans from 17+ carriers, verify your local doctors are covered, and help you enroll with confidence, all at no cost.",
        metaTitle: "Medicare Consulting Services Apollo Beach FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Apollo Beach, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "Bayfront Health Sun City Center",
          "HCA Florida South Tampa Hospital",
          "BayCare Medical Group South County",
        ],
        neighborhoods: ["Apollo Beach 33572", "Ruskin 33570", "Sun City Center 33573", "Gibsonton 33534"],
        faqs: [
          { q: "What is included in Medicare consulting services in Apollo Beach?", a: "Our Apollo Beach Medicare consulting service includes a full review of your healthcare needs, a comparison of all available plans in ZIP 33572, verification that your doctors are in-network, and enrollment assistance. We also provide ongoing support when your needs change." },
          { q: "How much does Medicare consulting cost in Apollo Beach?", a: "Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "When should I start Medicare consulting in Apollo Beach?", a: "Ideally, you should start 3 to 6 months before your 65th birthday or before losing employer coverage. Early planning helps you avoid enrollment penalties and gaps in coverage." },
          { q: "Can a Medicare consultant help me compare plans in Apollo Beach?", a: "Yes. We compare Medicare Advantage, Medigap, and Part D plans available in ZIP 33572 and verify your specific doctors at AdventHealth Riverview and Bayfront Health Sun City Center are covered." },
          { q: "Can I get Medicare consulting help by phone in Apollo Beach?", a: "Yes. We offer free phone and video consultations for Apollo Beach residents who prefer not to travel to our Brandon office." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Apollo Beach", href: "/medicare-insurance-agent-apollo-beach-fl" },
          { label: "Local Medicare Agent Apollo Beach", href: "/local-medicare-agent-apollo-beach" },
          { label: "Medicare Consulting Sun City", href: "/medicare-consulting-services-sun-city" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Plan Comparison Tool", href: "/plan-comparison-tool" },
        ],
      }}
    />
    </>
  );
}
