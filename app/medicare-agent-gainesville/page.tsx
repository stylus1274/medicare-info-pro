import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Gainesville FL",
  "description": "Licensed Medicare agent serving Gainesville and Alachua County, FL. Free, independent Medicare plan comparisons with no pressure.",
  "url": "https://medicareinfopro.com/medicare-agent-gainesville/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Gainesville",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Insurance Agent",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Medicare Agent in Gainesville FL | Free Medicare Help | Medicare Information Pro",
  description: "Looking for a licensed Medicare agent in Gainesville, FL? Get free, independent Medicare guidance. We compare plans from 17+ carriers serving Alachua County with no pressure.",
  keywords: [
    "medicare agent gainesville fl",
    "medicare agent gainesville florida",
    "medicare insurance agent gainesville",
    "medicare help gainesville fl",
    "medicare plans gainesville florida",
    "medicare advisor gainesville",
    "local medicare agent gainesville",
  ],
  openGraph: {
    title: "Medicare Agent in Gainesville FL | Free Medicare Help",
    description: "Looking for a licensed Medicare agent in Gainesville, FL? Get free, independent Medicare guidance. We compare plans from 17+ carriers serving Alachua County with no pressure.",
    url: "https://medicareinfopro.com/medicare-agent-gainesville/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-agent-gainesville/",
  },
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
          pageType: "agent",
          city: "Gainesville",
          cityFull: "Gainesville, FL",
          county: "Alachua County",
          slug: "gainesville",
          headline: "Medicare Agent in Gainesville, FL",
          subheadline: "Free, independent Medicare guidance for Gainesville and Alachua County residents. We compare plans from 17+ carriers so you get the coverage that fits your doctors, your budget, and your life.",
          metaTitle: "Medicare Agent in Gainesville FL | Free Medicare Help",
          metaDescription: "Looking for a licensed Medicare agent in Gainesville, FL? Get free, independent Medicare guidance. We compare plans from 17+ carriers serving Alachua County with no pressure.",
          nearbyLandmarks: [
            "UF Health Shands Hospital",
            "North Florida Regional Medical Center",
            "UF Health Family Medicine",
            "Malcom Randall VA Medical Center",
            "Gainesville VA Outpatient Clinic",
          ],
          neighborhoods: [
            "Gainesville 32601",
            "Gainesville 32603",
            "Gainesville 32605",
            "Gainesville 32608",
            "Haile Plantation",
            "Tioga",
            "Duck Pond",
            "Millhopper",
          ],
          testimonials: [
            {
              name: "Barbara T.",
              location: "Gainesville, FL",
              text: "I retired from UF and had no idea how Medicare would work alongside my retiree benefits. Greg's team walked me through everything clearly and helped me find a plan that kept all my UF Health doctors in-network. Completely free and no pressure at all.",
            },
            {
              name: "Robert K.",
              location: "Gainesville, FL",
              text: "I had been on the same Medicare Supplement plan for years and was paying way too much. One call with Medicare Information Pro and I was switched to a better plan saving me over $80 a month. Wish I had called years ago.",
            },
          ],
          faqs: [
            {
              q: "Do I need a Medicare agent in Gainesville, FL?",
              a: "You are not required to use an agent, but working with a licensed independent agent is completely free and can save you significant time and money. An agent familiar with Gainesville's healthcare landscape understands which plans have strong networks at UF Health Shands, North Florida Regional, and the Malcom Randall VA, and can verify your specific doctors are in-network before you enroll.",
            },
            {
              q: "How much does it cost to use a Medicare agent in Gainesville?",
              a: "Nothing. Independent Medicare agents are compensated by the insurance carriers, not by you. Your monthly premium is identical whether you enroll through an agent or directly with the carrier. There is no markup, no fee, and no obligation to enroll.",
            },
            {
              q: "What Medicare plans are available in Gainesville, FL?",
              a: "Gainesville residents have access to Medicare Advantage (Part C), Medicare Supplement (Medigap), and Part D prescription drug plans. Plan availability and pricing depend on your specific ZIP code in Alachua County. We compare all available options in Gainesville ZIP codes to find the best fit for your doctors, medications, and budget.",
            },
            {
              q: "Can you help me switch Medicare plans during the Annual Enrollment Period?",
              a: "Yes. The Annual Enrollment Period runs October 15 through December 7 each year. This is the main window to switch Medicare Advantage or Part D plans. We help Gainesville residents review their current coverage and compare it against all new options available for the coming year.",
            },
            {
              q: "Do you serve Gainesville residents remotely or in person?",
              a: "We serve Gainesville residents by phone, video call, or in-person meeting. Our licensed agents are available to walk you through your options at your convenience, whether you prefer a face-to-face appointment or a virtual consultation from the comfort of your home.",
            },
            {
              q: "What if I am a UF or Santa Fe College retiree in Gainesville?",
              a: "University of Florida and Santa Fe College retirees have unique Medicare coordination considerations, particularly around university retiree health benefits. Our agents are experienced in helping university retirees understand how Medicare works alongside their retiree benefits and when it makes sense to transition to a standalone Medicare plan.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Supplement Plans Gainesville", href: "/medicare-supplement-insurance-plans-gainesville" },
            { label: "Compare Medicare Plans Gainesville", href: "/comparing-medicare-plans-gainesville" },
            { label: "Medicare Advantage Plans Gainesville", href: "/medicare-advantage-plans-gainesville-florida" },
            { label: "Medicare Enrollment Assistance Gainesville", href: "/medicare-enrollment-assistance-gainesville" },
            { label: "Medicare Agent Tallahassee", href: "/medicare-agent-tallahassee" },
            { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
            { label: "Free Consultation", href: "/free-consultation" },
            { label: "Medicare 101 Overview", href: "/medicare-101" },
          ],
        }}
      />
    </>
  );
}
