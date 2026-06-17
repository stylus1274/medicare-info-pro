import type { Metadata } from "next";
import CostsAtAGlanceClient from "./CostsAtAGlanceClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Costs at a Glance 2026 | Premiums, Deductibles & IRMAA | Medicare Information Pro",
  "url": "https://medicareinfopro.com/costs-at-a-glance",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "All 2026 Medicare costs in one place - Part A, B, C, and D premiums, deductibles, copays, IRMAA surcharges, and the $2,100 Part D out-of-pocket cap. Updated for 2026.",
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
  title: "Medicare Costs at a Glance 2026 | Premiums, Deductibles & IRMAA | Medicare Information Pro",
  description:
    "All 2026 Medicare costs in one place - Part A, B, C, and D premiums, deductibles, copays, IRMAA surcharges, and the $2,100 Part D out-of-pocket cap. Updated for 2026.",
  keywords: [
    "Medicare costs 2026",
    "Part B premium 2026",
    "Part A deductible 2026",
    "IRMAA brackets 2026",
    "Part D out-of-pocket cap",
    "Medicare Advantage costs",
    "Medicare savings programs",
    "Medicare premiums deductibles",
  ],
  openGraph: {
    title: "Medicare Costs at a Glance 2026 | Medicare Information Pro",
    description:
      "All 2026 Medicare premiums, deductibles, IRMAA surcharges, and the $2,100 Part D cap - in one easy reference guide.",
    url: "https://medicare-info-pro.vercel.app/costs-at-a-glance",
    type: "article",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/costs-at-a-glance-hero-JopWaFr37Vbs3hSEyn8o4X.webp",
        width: 1200,
        height: 630,
        alt: "Medicare Costs at a Glance 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Costs at a Glance 2026 | Medicare Information Pro",
    description:
      "2026 Medicare premiums, deductibles, IRMAA surcharges, and the $2,100 Part D cap - all in one place.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/costs-at-a-glance-hero-JopWaFr37Vbs3hSEyn8o4X.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/costs-at-a-glance",
  },
};

export default function CostsAtAGlancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <CostsAtAGlanceClient />
    </>
  );
}
