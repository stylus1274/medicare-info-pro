import type { Metadata } from "next";
import MedicareAdvantageFLClient from "./MedicareAdvantageFLClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Advantage Plans in Florida | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-advantage-florida",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Advantage plans in Florida: HMO, PPO, PFFS, and Special Needs Plans. Understand eligibility, enrollment periods, and how to choose the right plan. Free guidance from licensed agents.",
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
  title: "Medicare Advantage Plans in Florida | Medicare Information Project",
  description:
    "Compare Medicare Advantage plans in Florida: HMO, PPO, PFFS, and Special Needs Plans. Understand eligibility, enrollment periods, and how to choose the right plan. Free guidance from licensed agents.",
  keywords: [
    "Medicare Advantage Florida",
    "Medicare Advantage plans Florida",
    "Medicare Part C Florida",
    "HMO Medicare Florida",
    "PPO Medicare Florida",
    "Special Needs Plans Florida",
    "Medicare Advantage enrollment Florida",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Advantage Plans in Florida",
    description:
      "Compare HMO, PPO, PFFS, and Special Needs Plans available in Florida. Free guidance from licensed Medicare agents.",
    url: "https://medicare-info-pro.vercel.app/medicare-advantage-florida",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-advantage-florida",
  },
};

export default function MedicareAdvantageFLPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MedicareAdvantageFLClient />
    </>
  );
}
