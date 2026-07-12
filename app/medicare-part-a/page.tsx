import type { Metadata } from "next";
import MedicarePartAClient from "./MedicarePartAClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Part A: Hospital Insurance Explained | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-part-a/",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Medicare Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and home health services. Most people pay no premium. Learn what is covered, 2026 costs, and how to enroll.",
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
  title: "Medicare Part A: Hospital Insurance Explained | Medicare Information Pro",
  description:
    "Medicare Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and home health services. Most people pay no premium. Learn what is covered, 2026 costs, and how to enroll.",
  keywords: [
    "medicare part a",
    "medicare part a coverage",
    "medicare hospital insurance",
    "medicare part a costs 2026",
    "medicare part a deductible 2026",
    "medicare part a eligibility",
    "medicare part a enrollment",
    "what does medicare part a cover",
    "medicare inpatient coverage",
    "medicare skilled nursing coverage",
  ],
  openGraph: {
    title: "Medicare Part A: Hospital Insurance Explained",
    description:
      "Medicare Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and home health services. Most people pay no premium. Learn what is covered and 2026 costs.",
    url: "https://medicareinfopro.com/medicare-part-a/",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Part A: Hospital Insurance Explained",
    description:
      "What does Medicare Part A cover? Hospital stays, skilled nursing, hospice, and home health. Most people pay $0 premium. See 2026 costs and enrollment details.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-part-a/",
  },
};

export default function MedicarePartAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MedicarePartAClient />
    </>
  );
}
