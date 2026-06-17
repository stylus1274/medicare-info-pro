import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Valrico FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-valrico-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Valrico, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-valrico-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Valrico, FL.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-valrico-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valrico",
    "addressRegion": "FL",
    "postalCode": "33594",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Valrico"
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
  title: "Medicare Insurance Agent Valrico FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Valrico, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Valrico",
        cityFull: "Valrico, FL",
        county: "Hillsborough County",
        slug: "valrico",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Valrico, FL",
        subheadline: "Valrico is a growing community just east of Brandon with convenient access to multiple hospital systems. Our licensed Medicare insurance agents compare plans from 17+ carriers and verify your local doctors are covered, at no cost.",
        metaTitle: "Medicare Insurance Agent Valrico FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Valrico, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Valrico 33594", "Valrico 33596", "Brandon 33511", "Lithia 33547"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Valrico?", a: "A licensed Medicare insurance agent in Valrico compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at HCA Florida Brandon Hospital and AdventHealth Brandon are in-network." },
          { q: "Is Medicare guidance free in Valrico, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What ZIP codes in Valrico do you serve?", a: "We serve Valrico ZIP codes 33594 and 33596. Plan availability can vary by ZIP code, so we always check your specific address." },
          { q: "How do I compare Medicare plans in Valrico?", a: "We pull all available Medicare plans for your ZIP code, compare premiums, copays, drug formularies, and out-of-pocket maximums, and verify your doctors are in-network before making any recommendation." },
          { q: "What Special Needs Plans are available in Valrico?", a: "Special Needs Plans (SNPs) are available in Hillsborough County for people with certain chronic conditions. We help Valrico residents identify whether an SNP might be a better fit than a standard Medicare Advantage plan." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Valrico", href: "/local-medicare-agent-valrico" },
          { label: "Medicare Agent Valrico", href: "/medicare-agent-valrico" },
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Special Needs Plans", href: "/special-needs-plans" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
