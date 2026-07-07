import type { Metadata } from "next";
import MedicareAdvantagePillarClient from "./MedicareAdvantagePillarClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Advantage (Part C): The Complete Guide | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-advantage",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Everything you need to know about Medicare Advantage plans. Learn how they work, the four plan types (HMO, PPO, SNP, PFFS), costs, pros and cons, and how to enroll.",
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
  title: "Medicare Advantage (Part C): The Complete Guide | Medicare Information Project",
  description:
    "Everything you need to know about Medicare Advantage plans. Learn how they work, the four plan types (HMO, PPO, SNP, PFFS), costs, pros and cons, and how to enroll.",
  keywords: [
    "Medicare Advantage guide",
    "Medicare Part C",
    "Medicare Advantage plans",
    "HMO PPO Medicare",
    "Medicare Advantage vs Original Medicare",
    "Medicare Advantage enrollment",
    "Medicare Advantage costs 2025",
    "Medicare Advantage Florida",
  ],
  openGraph: {
    title: "Medicare Advantage (Part C): The Complete Guide",
    description:
      "Everything you need to know about Medicare Advantage plans, including how they work, plan types, costs, and enrollment periods.",
    url: "https://medicareinfopro.com/medicare-advantage",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare Advantage plan comparison and guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Advantage (Part C): The Complete Guide",
    description:
      "Everything you need to know about Medicare Advantage plans, including how they work, plan types, costs, and enrollment periods.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage",
  },
};

export default function MedicareAdvantagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MedicareAdvantagePillarClient />
    </>
  );
}
