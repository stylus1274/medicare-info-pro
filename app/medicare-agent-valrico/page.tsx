import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Agent Valrico FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-agent-valrico",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare guidance for Valrico, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-agent-valrico#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Valrico, FL.",
  "url": "https://medicareinfopro.com/medicare-agent-valrico",
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
  title: "Medicare Agent Valrico FL | Medicare Information Project",
  description: "Free Medicare guidance for Valrico, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you.",
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
        pageType: "agent",
        headline: "Medicare Agent in Valrico, FL",
        subheadline: "Independent Medicare agents serving Valrico and eastern Hillsborough County. We compare plans from 17+ carriers at no cost, helping you find coverage that fits your doctors, prescriptions, and budget.",
        metaTitle: "Medicare Agent Valrico FL | Medicare Information Project",
        metaDescription: "Free Medicare guidance for Valrico, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "Brandon Regional Medical Center",
        ],
        neighborhoods: ["Valrico 33594", "Valrico 33596", "Brandon 33511", "Seffner 33584", "Plant City 33563"],
        testimonials: [
          {
            name: "Patricia N.",
            location: "Valrico, FL",
            text: "I live in Valrico and was worried about finding a plan that covered my doctors in Brandon. Greg checked every provider and found a plan that worked perfectly. Completely free service.",
          },
          {
            name: "Richard B.",
            location: "Valrico, FL",
            text: "Very knowledgeable about the local area. He knew which plans had strong networks in Valrico and Brandon. Saved me a lot of research time.",
          },
        ],
        faqs: [
          {
            q: "What Medicare plans are available in Valrico, FL?",
            a: "Valrico residents in ZIP codes 33594 and 33596 have access to Medicare Advantage, Medigap, and Part D plans from multiple carriers. We compare all available options in your specific ZIP code.",
          },
          {
            q: "Are Valrico doctors in-network for Medicare Advantage plans?",
            a: "Many Valrico-area physicians participate in Medicare Advantage networks, but coverage varies by plan. We verify your specific doctors before recommending any plan to ensure continuity of care.",
          },
          {
            q: "How far is your office from Valrico?",
            a: "Our Brandon office is just a few miles from Valrico, making in-person consultations very convenient. We also offer free phone and video consultations if you prefer to meet remotely.",
          },
          {
            q: "Can I switch Medicare plans if I am not happy with my current coverage?",
            a: "Yes. The Annual Enrollment Period (October 15 to December 7) allows you to switch Medicare Advantage or Part D plans. In some cases, a Special Enrollment Period may allow changes outside this window.",
          },
          {
            q: "What is the difference between Medicare Supplement Plan G and Plan N?",
            a: "Plan G covers all Medicare cost-sharing except the Part B deductible ($283 in 2026). Plan N has a lower premium but requires copays of up to $20 for office visits and $50 for emergency room visits. The right choice depends on how often you use medical services.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare Supplement Plans", href: "/do-i-need-a-supplement" },
          { label: "Plan Comparison Tool", href: "/plan-comparison" },
        ],
      }}
    />
    </>
  );
}
