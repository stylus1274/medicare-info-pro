import type { Metadata } from "next";
import SNPPlansClient from "./SNPPlansClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Special Needs Plans (SNP) | 2026 Guide | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-snp-plans",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Learn about Medicare Special Needs Plans (SNPs): C-SNP, D-SNP, and I-SNP. Find out who qualifies, what they cover, and which SNP plans are available in Brandon and Hillsborough County in 2026.",
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
  title: "Medicare Special Needs Plans (SNP) | 2026 Guide | Medicare Information Pro",
  description:
    "Learn about Medicare Special Needs Plans (SNPs): C-SNP, D-SNP, and I-SNP. Find out who qualifies, what they cover, and which SNP plans are available in Brandon and Hillsborough County in 2026.",
  keywords: [
    "Medicare Special Needs Plans",
    "Medicare SNP plans 2026",
    "D-SNP dual eligible Medicare",
    "C-SNP chronic condition Medicare",
    "Medicare SNP Brandon FL",
    "Medicare SNP Hillsborough County",
    "dual eligible Medicare Medicaid Florida",
  ],
  openGraph: {
    title: "Medicare Special Needs Plans (SNP) | 2026 Guide",
    description:
      "C-SNP, D-SNP, and I-SNP explained. Find out who qualifies and which SNP plans are available in Brandon and Hillsborough County for 2026.",
    url: "https://medicareinfopro.com/medicare-snp-plans",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Special Needs Plans (SNP) | 2026 Guide",
    description:
      "C-SNP, D-SNP, and I-SNP explained. Find out who qualifies in Brandon and Hillsborough County for 2026.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-snp-plans",
  },
};

export default function SNPPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <SNPPlansClient />
    </>
  );
}
