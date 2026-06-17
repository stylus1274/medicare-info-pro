import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/local-medicare-agent-sun-city#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Sun City Center, FL.",
  "url": "https://medicareinfopro.com/local-medicare-agent-sun-city",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sun City Center",
    "addressRegion": "FL",
    "postalCode": "33573",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Sun City Center"
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
  title: "Local Medicare Agent Sun City FL | Medicare Information Project",
  description: "Find a local Medicare agent in Sun City Center, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    <LocalAgentPage
      config={{
        city: "Sun City Center",
        cityFull: "Sun City Center, FL",
        county: "Hillsborough County",
        slug: "sun-city",
        pageType: "local-agent",
        headline: "Local Medicare Agent in Sun City Center, FL",
        subheadline: "Sun City Center is one of Florida's premier 55+ retirement communities, and Medicare planning is a top priority for residents here. Our local agents specialize in Medicare for retirees and help you choose the right plan for your lifestyle.",
        metaTitle: "Local Medicare Agent Sun City FL | Medicare Information Project",
        metaDescription: "Find a local Medicare agent in Sun City Center, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "HCA Florida South Tampa Hospital",
          "Sun City Center Medical Associates",
        ],
        neighborhoods: ["Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572", "Wimauma 33598"],
        faqs: [
          { q: "Why do Sun City Center residents need a local Medicare agent?", a: "Sun City Center is a retirement community where most residents are on Medicare. A local agent understands the specific plans available in ZIP 33573, which carriers have strong networks at Bayfront Health Sun City Center, and how to maximize your benefits as a retiree." },
          { q: "Is Medicare guidance free in Sun City Center?", a: "Yes. Our service is completely free to Sun City Center residents. Insurance carriers compensate us, not you. Your premium is the same whether you work with us or enroll on your own." },
          { q: "What is the difference between Medicare Advantage and Medigap in Sun City Center?", a: "Medicare Advantage plans typically have lower premiums but require network restrictions and copays. Medigap (Medicare Supplement) plans have higher premiums but cover most out-of-pocket costs and allow you to see any Medicare-accepting doctor nationwide. We help you compare both options." },
          { q: "I just moved to Sun City Center. When can I enroll in Medicare?", a: "Moving to a new service area is a qualifying event that may trigger a Special Enrollment Period. Contact us right away to determine your enrollment window and avoid gaps in coverage." },
          { q: "Do you help with Medicare Part D drug plans in Sun City Center?", a: "Yes. We compare all Part D plans available in ZIP 33573 against your specific medications to find the plan with the lowest total drug cost for you." },
        ],
        relatedLinks: [
          { label: "Medicare Agent Sun City", href: "/medicare-agent-sun-city" },
          { label: "Local Medicare Agent Apollo Beach", href: "/local-medicare-agent-apollo-beach" },
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Medigap vs Medicare Advantage", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
