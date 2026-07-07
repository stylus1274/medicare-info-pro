import type { Metadata } from "next";
import DoINeedMedicareClient from "./DoINeedMedicareClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Do I Need Medicare? | Medicare Information Project",
  "url": "https://medicareinfopro.com/do-i-need-medicare",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Not sure if you need Medicare? Find out who must enroll, who can delay, what happens if you skip it, and how to decide based on your situation. Free guidance from licensed agents.",
  "about": {
    "@type": "MedicalCondition",
    "name": "Medicare"
  },
  "audience": {
    "@type": "Patient"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Do I Need Medicare? | Medicare Information Project",
  description:
    "Not sure if you need Medicare? Find out who must enroll, who can delay, what happens if you skip it, and how to decide based on your situation. Free guidance from licensed agents.",
  keywords: [
    "do I need Medicare",
    "do I have to sign up for Medicare",
    "Medicare enrollment decision",
    "Medicare vs employer insurance",
    "Medicare eligibility",
    "should I enroll in Medicare",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Do I Need Medicare?",
    description:
      "Not sure if Medicare is required for you? Learn who must enroll, who can delay, and what the consequences are of skipping enrollment.",
    url: "https://medicareinfopro.com/do-i-need-medicare",
    type: "website",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/do-i-need-medicare",
  },
};

export default function DoINeedMedicarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <DoINeedMedicareClient />
    </>
  );
}
