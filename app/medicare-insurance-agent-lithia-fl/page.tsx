import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Lithia FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-lithia-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Lithia, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-lithia-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Lithia, FL.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-lithia-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lithia",
    "addressRegion": "FL",
    "postalCode": "33547",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lithia"
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
  title: "Medicare Insurance Agent Lithia FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Lithia, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
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
        city: "Lithia",
        cityFull: "Lithia, FL",
        county: "Hillsborough County",
        slug: "lithia",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Lithia, FL",
        subheadline: "Lithia and Fish Hawk Ranch are growing communities in southeastern Hillsborough County. Our licensed Medicare insurance agents compare plans from 17+ carriers and verify your local doctors are covered, at no cost.",
        metaTitle: "Medicare Insurance Agent Lithia FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Lithia, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Brandon",
        ],
        neighborhoods: ["Lithia 33547", "Fish Hawk 33547", "Valrico 33596", "Brandon 33511"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Lithia?", a: "A licensed Medicare insurance agent in Lithia compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at HCA Florida Brandon Hospital and AdventHealth Brandon are in-network." },
          { q: "Is Medicare guidance free in Lithia, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Lithia?", a: "Lithia (ZIP 33547) has access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code and address." },
          { q: "How do I find a Medicare agent near Lithia?", a: "Our Brandon office is about 20 minutes from Lithia. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "What is the difference between Medicare Advantage and Medigap in Lithia?", a: "Medicare Advantage plans typically have lower premiums but require network restrictions and copays. Medigap plans have higher premiums but cover most out-of-pocket costs and allow you to see any Medicare-accepting doctor nationwide. We help you compare both." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Fish Hawk", href: "/medicare-insurance-agent-fish-hawk-fl" },
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Insurance Agent Valrico", href: "/medicare-insurance-agent-valrico-fl" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
