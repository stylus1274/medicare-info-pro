import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Agent Tallahassee FL | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-agent-tallahassee",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Looking for a licensed Medicare agent in Tallahassee, FL? Medicare Information Pro offers free, independent Medicare guidance. We compare plans from 17+ carriers with no pressure."
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-agent-tallahassee#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Tallahassee, FL and Leon County.",
  "url": "https://medicareinfopro.com/medicare-agent-tallahassee",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr, Suite A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tallahassee"
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
  title: "Medicare Agent Tallahassee FL | Medicare Information Pro",
  description: "Looking for a licensed Medicare agent in Tallahassee, FL? Medicare Information Pro offers free, independent Medicare guidance. We compare plans from 17+ carriers with no pressure.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-agent-tallahassee",
  },
  openGraph: {
    title: "Medicare Agent Tallahassee FL | Medicare Information Pro",
    description: "Looking for a licensed Medicare agent in Tallahassee, FL? Medicare Information Pro offers free, independent Medicare guidance. We compare plans from 17+ carriers with no pressure.",
    url: "https://medicareinfopro.com/medicare-agent-tallahassee",
    siteName: "Medicare Information Pro",
    type: "website",
  },
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
          city: "Tallahassee",
          cityFull: "Tallahassee, FL",
          county: "Leon County",
          slug: "tallahassee",
          pageType: "agent",
          headline: "Medicare Agent in Tallahassee, FL",
          subheadline: "Independent, licensed Medicare agents serving Tallahassee and Leon County. We compare plans from 17+ carriers at no cost to you, helping you find the right coverage for your doctors, prescriptions, and budget.",
          metaTitle: "Medicare Agent Tallahassee FL | Medicare Information Pro",
          metaDescription: "Looking for a licensed Medicare agent in Tallahassee, FL? Medicare Information Pro offers free, independent Medicare guidance. We compare plans from 17+ carriers with no pressure.",
          nearbyLandmarks: [
            "Tallahassee Memorial HealthCare",
            "Capital Regional Medical Center",
            "HCA Florida Capital Hospital",
            "FSU Health Family Medicine",
            "Big Bend Hospice",
          ],
          neighborhoods: [
            "Tallahassee 32301",
            "Tallahassee 32303",
            "Tallahassee 32308",
            "Tallahassee 32312",
            "Midtown Tallahassee",
            "Killearn Estates",
            "Southwood",
            "Betton Hills",
          ],
          testimonials: [
            {
              name: "Patricia M.",
              location: "Tallahassee, FL",
              text: "I was turning 65 and had no idea where to start with Medicare. The team at Medicare Information Pro walked me through every option and helped me find a plan that covers my doctors at Tallahassee Memorial. Completely free and zero pressure.",
            },
            {
              name: "James R.",
              location: "Tallahassee, FL",
              text: "I had been paying too much for my Medicare Supplement for years. After one call with Greg's team, I switched to a better plan and saved over $90 a month. I wish I had called sooner.",
            },
          ],
          faqs: [
            {
              q: "Do I need a Medicare agent in Tallahassee, FL?",
              a: "You are not required to use an agent, but working with a licensed independent agent is completely free and can save you significant time and money. An agent familiar with Tallahassee's healthcare landscape understands which plans have strong networks at Tallahassee Memorial HealthCare, Capital Regional, and HCA Florida Capital Hospital, and can verify your specific doctors are in-network before you enroll.",
            },
            {
              q: "How much does it cost to use a Medicare agent in Tallahassee?",
              a: "Nothing. Independent Medicare agents are compensated by the insurance carriers, not by you. Your monthly premium is identical whether you enroll through an agent or directly with the carrier. There is no markup, no fee, and no obligation to enroll.",
            },
            {
              q: "What Medicare plans are available in Tallahassee, FL?",
              a: "Tallahassee residents have access to Medicare Advantage (Part C), Medicare Supplement (Medigap), and Part D prescription drug plans. Plan availability and pricing depend on your specific ZIP code in Leon County. We compare all available options in Tallahassee ZIP codes to find the best fit for your doctors, medications, and budget.",
            },
            {
              q: "Can you help me switch Medicare plans during the Annual Enrollment Period?",
              a: "Yes. The Annual Enrollment Period runs October 15 through December 7 each year. This is the main window to switch Medicare Advantage or Part D plans. We help Tallahassee residents review their current coverage and compare it against all new options available for the coming year.",
            },
            {
              q: "Do you serve Tallahassee residents remotely or in person?",
              a: "We serve Tallahassee residents by phone, video call, or in-person meeting. Our licensed agents are available to walk you through your options at your convenience, whether you prefer a face-to-face appointment or a virtual consultation from the comfort of your home.",
            },
            {
              q: "What if I am a state employee or retiree in Tallahassee?",
              a: "Florida state employees and retirees have unique Medicare coordination considerations, particularly around the State Group Insurance Program. Our agents are experienced in helping state workers and retirees understand how Medicare works alongside their state benefits and when it makes sense to transition to a Medicare plan.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
            { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
            { label: "Medicare Supplement Plans Tallahassee", href: "/medicare-supplement-insurance-plans-tallahassee" },
            { label: "Compare Medicare Plans Tallahassee", href: "/comparing-medicare-plans-tallahassee" },
            { label: "Medicare Advantage Plans Tallahassee", href: "/medicare-advantage-plans-tallahassee-florida" },
            { label: "Medicare Enrollment Assistance Tallahassee", href: "/medicare-enrollment-assistance-tallahassee" },
            { label: "Free Consultation", href: "/free-consultation" },
            { label: "Medicare 101 Overview", href: "/medicare-101" },
          ],
        }}
      />
    </>
  );
}
