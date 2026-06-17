import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Consulting Services Riverview FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-consulting-services-riverview",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Expert Medicare consulting services in Riverview, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-consulting-services-riverview#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Riverview, FL.",
  "url": "https://medicareinfopro.com/medicare-consulting-services-riverview",
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
  title: "Medicare Consulting Services Riverview FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Riverview, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
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
        pageType: "consulting",
        headline: "Medicare Consulting Services in Riverview, FL",
        subheadline: "Riverview is growing fast, and so are the Medicare options available here. Our consultants help Riverview residents compare every available plan, verify doctor networks, and enroll with confidence, all at no cost.",
        metaTitle: "Medicare Consulting Services Riverview FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Riverview, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "What is included in Medicare consulting services in Riverview?", a: "Our Riverview Medicare consulting service includes a full review of your healthcare needs, a comparison of all available plans in your ZIP code, verification that your doctors at AdventHealth Riverview are in-network, and enrollment assistance." },
          { q: "How much does Medicare consulting cost in Riverview?", a: "Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "When should I start Medicare consulting in Riverview?", a: "Ideally, you should start 3 to 6 months before your 65th birthday or before losing employer coverage. Early planning helps you avoid enrollment penalties and gaps in coverage." },
          { q: "Can a Medicare consultant help me compare plans in Riverview?", a: "Yes. We compare all Medicare Advantage, Medigap, and Part D plans available in your Riverview ZIP code and verify your specific doctors are covered before making any recommendation." },
          { q: "What if I already have Medicare and live in Riverview?", a: "We help existing Medicare beneficiaries review their current coverage, compare alternatives during the Annual Enrollment Period, and address problems such as unexpected bills or coverage gaps." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl" },
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
