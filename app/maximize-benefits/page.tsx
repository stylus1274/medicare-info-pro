import type { Metadata } from "next";
import MaximizeBenefitsClient from "./MaximizeBenefitsClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "How Florida Seniors Can Maximize Medicare Benefits After 65 | Medicare Information Pro",
  "url": "https://medicareinfopro.com/maximize-benefits",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "A complete guide for Florida seniors on maximizing Medicare benefits: choosing the right plan, avoiding costly enrollment mistakes, Medicare Savings Programs, preventive services, and finding trusted guidance.",
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
  title: "How Florida Seniors Can Maximize Medicare Benefits After 65 | Medicare Information Pro",
  description:
    "A complete guide for Florida seniors on maximizing Medicare benefits: choosing the right plan, avoiding costly enrollment mistakes, Medicare Savings Programs, preventive services, and finding trusted guidance.",
  keywords: [
    "maximize Medicare benefits Florida",
    "Medicare after 65 Florida",
    "Medicare Advantage vs Original Medicare",
    "Medicare Savings Programs Florida",
    "Florida SHINE program",
    "Medicare enrollment periods",
    "Medigap Florida open enrollment",
    "Medicare Part D 2026",
    "Medicare late enrollment penalty",
  ],
  openGraph: {
    title: "How Florida Seniors Can Maximize Medicare Benefits After 65",
    description:
      "Clear, unbiased guidance on choosing the right Medicare plan, avoiding costly mistakes, and getting the most value from your coverage in 2026.",
    url: "https://medicareinfopro.com/maximize-benefits",
    type: "article",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/blog-maximize-benefits-hero_f1969887.jpg",
        width: 1200,
        height: 630,
        alt: "Florida senior couple reviewing Medicare documents at a kitchen table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Florida Seniors Can Maximize Medicare Benefits After 65",
    description:
      "Clear, unbiased guidance on choosing the right Medicare plan, avoiding costly mistakes, and getting the most value from your coverage in 2026.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/blog-maximize-benefits-hero_f1969887.jpg",
    ],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/maximize-benefits",
  },
};

export default function MaximizeBenefitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MaximizeBenefitsClient />
    </>
  );
}
