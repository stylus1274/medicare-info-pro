import type { Metadata } from "next";
import PlanComparisonClient from "./PlanComparisonClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Plan Comparison Tool | MedicareInfoPro",
  "url": "https://medicareinfopro.com/plan-comparison",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Original Medicare, Medicare Advantage HMO, Medicare Advantage PPO, and Medigap Plan G side by side. Interactive 2026 plan comparison tool for Medicare beneficiaries.",
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
  title: "Medicare Plan Comparison Tool | MedicareInfoPro",
  description:
    "Compare Original Medicare, Medicare Advantage HMO, Medicare Advantage PPO, and Medigap Plan G side by side. Interactive 2026 plan comparison tool for Medicare beneficiaries.",
  keywords: [
    "Medicare plan comparison",
    "compare Medicare plans",
    "Original Medicare vs Medicare Advantage",
    "Medicare Advantage vs Medigap",
    "Medicare plan comparison tool",
    "Medicare HMO vs PPO",
    "Medicare 2026 comparison",
  ],
  openGraph: {
    title: "Medicare Plan Comparison Tool | MedicareInfoPro",
    description:
      "Compare Original Medicare, Medicare Advantage, and Medigap plans side by side with our interactive 2026 comparison tool.",
    url: "https://medicareinfopro.com/plan-comparison",
    siteName: "MedicareInfoPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Plan Comparison Tool",
    description:
      "Interactive side-by-side comparison of Original Medicare, Medicare Advantage HMO, PPO, and Medigap Plan G for 2026.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/plan-comparison",
  },
};

export default function PlanComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <PlanComparisonClient />
    </>
  );
}
