import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Agent Sun City FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-agent-sun-city",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare guidance for Sun City Center, FL residents. Independent agents compare 17+ carriers to find the right Medicare plan for your retirement community."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-agent-sun-city#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Sun City Center, FL.",
  "url": "https://medicareinfopro.com/medicare-agent-sun-city",
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
  title: "Medicare Agent Sun City FL | Medicare Information Project",
  description: "Free Medicare guidance for Sun City Center, FL residents. Independent agents compare 17+ carriers to find the right Medicare plan for your retirement community.",
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
        city: "Sun City Center",
        cityFull: "Sun City Center, FL",
        county: "Hillsborough County",
        slug: "sun-city",
        pageType: "agent",
        headline: "Medicare Agent in Sun City Center, FL",
        subheadline: "Specialized Medicare guidance for Sun City Center's active retirement community. We compare plans from 17+ carriers at no cost, helping you find the right coverage for your doctors, prescriptions, and lifestyle.",
        metaTitle: "Medicare Agent Sun City FL | Medicare Information Project",
        metaDescription: "Free Medicare guidance for Sun City Center, FL residents. Independent agents compare 17+ carriers to find the right Medicare plan for your retirement community.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "HCA Florida South Tampa Hospital",
          "Sun City Center Medical Center",
          "AdventHealth Riverview",
        ],
        neighborhoods: ["Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572", "Wimauma 33598", "Gibsonton 33534"],
        guidanceSection: {
          title: "Prepare for a Medicare Plan Conversation",
          intro: "A short preparation list can help you make the most of a Medicare conversation and compare options that fit your situation.",
          items: [
            "Your current Medicare card and any plan materials you have received.",
            "The names of doctors, hospitals, and pharmacies you prefer to use.",
            "A current list of prescription medications, including dosage and quantity.",
            "Questions about enrollment timing, plan costs, coverage, or provider access.",
          ],
        },
        faqs: [
          {
            q: "What Medicare plans are popular in Sun City Center?",
            a: "Sun City Center is a retirement community with a high concentration of Medicare beneficiaries. Both Medicare Advantage and Medigap plans are popular here. Advantage plans often include dental, vision, and fitness benefits that appeal to active retirees. Medigap plans offer more flexibility for those who travel or see specialists frequently.",
          },
          {
            q: "Is Bayfront Health Sun City Center in-network for Medicare Advantage?",
            a: "Bayfront Health Sun City Center participates in many Medicare Advantage networks, but coverage varies by plan. We verify your specific hospital and doctor network status before recommending any plan.",
          },
          {
            q: "Can I get help with Medicare if I am a snowbird in Sun City Center?",
            a: "Yes. If you split time between Florida and another state, plan selection is especially important. Some Medicare Advantage plans have limited out-of-area coverage. We help snowbirds find plans with adequate nationwide coverage or recommend Original Medicare with a Medigap plan for maximum flexibility.",
          },
          {
            q: "When should I review my Medicare plan in Sun City Center?",
            a: "You should review your plan every year during the Annual Enrollment Period (October 15 to December 7). Plan formularies, premiums, and networks change annually. We contact our Sun City Center clients each fall to review their coverage.",
          },
          {
            q: "How do I get started with a Medicare agent in Sun City Center?",
            a: "Call us at 813-699-5559 or complete the free consultation form on our website. We offer phone, video, and in-person meetings at our Brandon office, which is about 20 minutes from Sun City Center.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Apollo Beach", href: "/medicare-agent-apollo-beach" },
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Medicare Agent Wimauma", href: "/medicare-agent-wimauma" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare 101 Overview", href: "/medicare-101" },
          { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
        ],
      }}
    />
    </>
  );
}
