import type { Metadata } from "next";
import MedicareAdvantagePlansKissimmeeClient from "./MedicareAdvantagePlansKissimmeeClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Medicare Advantage plans are available in Kissimmee, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kissimmee and Osceola County residents can compare Medicare Advantage plans offered by multiple carriers. Specific plan availability, benefits, provider networks, and premiums vary by ZIP code and plan year."
      }
    },
    {
      "@type": "Question",
      "name": "Will my doctors at HCA Florida Osceola Hospital or AdventHealth Kissimmee accept my Medicare Advantage plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network participation varies by carrier and plan. A provider's network status should be verified for the specific plan year before you enroll, because networks can change."
      }
    },
    {
      "@type": "Question",
      "name": "Is a zero-premium Medicare Advantage plan really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A zero-premium plan has no additional monthly plan premium beyond the Medicare Part B premium, but it can still have copays, coinsurance, deductibles, and an annual out-of-pocket maximum."
      }
    },
    {
      "@type": "Question",
      "name": "When can I enroll in a Medicare Advantage plan in Kissimmee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main enrollment opportunities are the Initial Enrollment Period around your 65th birthday, the Annual Enrollment Period from October 15 through December 7, and the Medicare Advantage Open Enrollment Period from January 1 through March 31. Qualifying moves and other life events can create a Special Enrollment Period."
      }
    }
  ]
} as const;

export const metadata: Metadata = {
  title: "Medicare Advantage Plans in Kissimmee FL | Compare 2026 Plans",
  description: "Compare Medicare Advantage plans in Kissimmee, FL. Get free independent help checking doctors, drug coverage, and plan benefits available in Osceola County.",
  keywords: [
    "medicare advantage plans kissimmee fl",
    "medicare advantage kissimmee florida",
    "best medicare advantage plan kissimmee",
    "medicare advantage plans osceola county",
    "medicare advantage kissimmee 2026",
    "compare medicare advantage kissimmee fl",
  ],
  openGraph: {
    title: "Medicare Advantage Plans in Kissimmee FL | Compare 2026 Plans",
    description: "Compare Medicare Advantage plans available in Kissimmee and Osceola County with free independent guidance.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-kissimmee-florida/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-kissimmee-florida/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MedicareAdvantagePlansKissimmeeClient />
    </>
  );
}
