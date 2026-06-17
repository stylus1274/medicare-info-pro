import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Agent Wimauma FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-agent-wimauma",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare guidance for Wimauma, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Agent Wimauma FL | Medicare Information Project",
  description: "Free Medicare guidance for Wimauma, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <LocalAgentPage
      config={{
        city: "Wimauma",
        cityFull: "Wimauma, FL",
        county: "Hillsborough County",
        slug: "wimauma",
        pageType: "agent",
        headline: "Medicare Agent in Wimauma, FL",
        subheadline: "Independent Medicare agents serving Wimauma and South Hillsborough County. We compare plans from 17+ carriers at no cost, helping you find coverage that works for your doctors, prescriptions, and budget.",
        metaTitle: "Medicare Agent Wimauma FL | Medicare Information Project",
        metaDescription: "Free Medicare guidance for Wimauma, FL residents. Independent agents compare 17+ carriers to find the right Medicare Advantage, Supplement, or Part D plan for you.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "Sun City Center Medical Center",
        ],
        neighborhoods: ["Wimauma 33598", "Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572"],
        testimonials: [
          {
            name: "Rosa M.",
            location: "Wimauma, FL",
            text: "I was not sure which Medicare plan would cover my doctors in Sun City Center. Greg checked everything and found a plan that worked. The whole process was free and easy.",
          },
          {
            name: "George P.",
            location: "Wimauma, FL",
            text: "Excellent service. Very patient and thorough. Found me a plan with better drug coverage than what I had before.",
          },
        ],
        faqs: [
          {
            q: "What Medicare plans are available in Wimauma, FL?",
            a: "Wimauma residents in ZIP code 33598 have access to Medicare Advantage, Medigap, and Part D plans. We compare all available options in your ZIP code to find the best fit for your healthcare needs.",
          },
          {
            q: "Is there a Medicare agent near Wimauma?",
            a: "Our office is located in Brandon, about 25 minutes from Wimauma. We also offer free phone and video consultations for Wimauma residents who prefer to meet remotely.",
          },
          {
            q: "What hospitals near Wimauma accept Medicare?",
            a: "Bayfront Health Sun City Center and AdventHealth Riverview are the closest major hospitals to Wimauma and both accept Original Medicare. Medicare Advantage network coverage varies by plan. We verify hospital network status before recommending any plan.",
          },
          {
            q: "How do I enroll in Medicare for the first time in Wimauma?",
            a: "You can enroll online at SSA.gov, by phone with Social Security, or in person at a local Social Security office. We recommend contacting us before enrolling to make sure you choose the right plan combination from the start.",
          },
          {
            q: "Can I get Medicare help in Spanish in Wimauma?",
            a: "Yes. Our team includes bilingual agents who can assist Wimauma residents in Spanish. Please mention your language preference when you call or submit the consultation form.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Sun City", href: "/medicare-agent-sun-city" },
          { label: "Medicare Agent Apollo Beach", href: "/medicare-agent-apollo-beach" },
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare 101 Overview", href: "/medicare-101" },
          { label: "Enrollment Timeline", href: "/enrollment-timeline" },
        ],
      }}
    />
    </>
  );
}
