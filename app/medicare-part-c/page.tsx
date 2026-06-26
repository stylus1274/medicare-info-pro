import type { Metadata } from "next";
import MedicarePartCClient from "./MedicarePartCClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Part C (Medicare Advantage) Explained | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-part-c",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Medicare Part C, also called Medicare Advantage, is an alternative to Original Medicare offered by private insurers. Learn how it works, what it covers, costs, plan types, and how to enroll.",
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
  title: "Medicare Part C (Medicare Advantage) Explained | Medicare Information Pro",
  description:
    "Medicare Part C, also called Medicare Advantage, is an alternative to Original Medicare offered by private insurers. Learn how it works, what it covers, costs, plan types, and how to enroll.",
  keywords: [
    "medicare part c",
    "what is medicare part c",
    "medicare advantage",
    "medicare part c explained",
    "medicare part c vs original medicare",
    "medicare advantage plans florida",
    "medicare part c costs",
    "medicare part c enrollment",
    "medicare advantage plan types",
    "HMO PPO medicare advantage",
  ],
  openGraph: {
    title: "Medicare Part C (Medicare Advantage) Explained",
    description:
      "Medicare Part C is Medicare Advantage. Learn how it works, plan types (HMO, PPO, SNP), what it covers, 2026 costs, and how to enroll.",
    url: "https://medicareinfopro.com/medicare-part-c",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Part C (Medicare Advantage) Explained",
    description:
      "What is Medicare Part C? It is Medicare Advantage. Learn plan types, costs, coverage, and how to enroll in 2026.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-part-c",
  },
};

export default function MedicarePartCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MedicarePartCClient />
    </>
  );
}
