import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Agent Apollo Beach FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-agent-apollo-beach",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare guidance for Apollo Beach, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-agent-apollo-beach#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Apollo Beach, FL.",
  "url": "https://medicareinfopro.com/medicare-agent-apollo-beach",
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
  title: "Medicare Agent Apollo Beach FL | Medicare Information Project",
  description: "Free Medicare guidance for Apollo Beach, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you.",
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
        pageType: "agent",
        headline: "Medicare Agent in Apollo Beach, FL",
        subheadline: "Independent Medicare agents serving Apollo Beach and South Hillsborough County. We compare plans from 17+ carriers at no cost, helping you find coverage that fits your doctors, prescriptions, and budget.",
        metaTitle: "Medicare Agent Apollo Beach FL | Medicare Information Project",
        metaDescription: "Free Medicare guidance for Apollo Beach, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you.",
        nearbyLandmarks: [
          "HCA Florida South Tampa Hospital",
          "AdventHealth Riverview",
          "BayCare Medical Group South County",
          "Bayfront Health Sun City Center",
        ],
        neighborhoods: ["Apollo Beach 33572", "Ruskin 33570", "Sun City Center 33573", "Wimauma 33598", "Gibsonton 33534"],
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
            q: "What Medicare plans are available in Apollo Beach, FL?",
            a: "Apollo Beach residents in ZIP code 33572 have access to Medicare Advantage, Medicare Supplement, and Part D plans from multiple carriers. Plan options and costs vary by ZIP code. We compare all available plans in Apollo Beach and surrounding South Hillsborough communities.",
          },
          {
            q: "Is there a local Medicare agent near Apollo Beach?",
            a: "Yes. Our office is located in Brandon, just a short drive from Apollo Beach. We also offer phone and video consultations for Apollo Beach residents who prefer to meet remotely. All consultations are free.",
          },
          {
            q: "How do I know if my Apollo Beach doctor accepts my Medicare plan?",
            a: "Network verification is one of the most important steps before enrolling in a Medicare Advantage plan. We check provider directories for your specific doctors and specialists before recommending any plan.",
          },
          {
            q: "When can I enroll in Medicare in Apollo Beach?",
            a: "Your Initial Enrollment Period begins 3 months before your 65th birthday month and ends 3 months after. Missing this window can result in permanent late enrollment penalties. We help Apollo Beach residents understand their exact enrollment window.",
          },
          {
            q: "Can I switch Medicare plans if I move to Apollo Beach?",
            a: "Yes. Moving to a new service area is a qualifying life event that triggers a Special Enrollment Period. You have up to 2 months after your move to enroll in a new plan available in Apollo Beach.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Medicare Agent Sun City", href: "/medicare-agent-sun-city" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare 101 Overview", href: "/medicare-101" },
          { label: "Enrollment Timeline", href: "/enrollment-timeline" },
        ],
      }}
    />
    </>
  );
}
