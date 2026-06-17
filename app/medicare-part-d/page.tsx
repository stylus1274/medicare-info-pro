import type { Metadata } from "next";
import MedicarePartDClient from "./MedicarePartDClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Part D \u2014 Prescription Drug Coverage | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-part-d",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Everything you need to know about Medicare Part D in Florida: eligibility, costs, the Extra Help program, enrollment periods, and how to find the right plan for your medications.",
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
  title: "Medicare Part D — Prescription Drug Coverage | Medicare Information Project",
  description:
    "Everything you need to know about Medicare Part D in Florida: eligibility, costs, the Extra Help program, enrollment periods, and how to find the right plan for your medications.",
  keywords: [
    "Medicare Part D",
    "Medicare prescription drug coverage Florida",
    "Medicare Part D plans Hillsborough County",
    "Medicare Part D Extra Help",
    "Medicare Part D enrollment",
    "Medicare Part D costs 2025",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Part D — Prescription Drug Coverage",
    description:
      "Medicare Part D eligibility, costs, enrollment periods, the Extra Help program, and how to choose the right plan in Florida.",
    url: "https://medicare-info-pro.vercel.app/medicare-part-d",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-part-d",
  },
};

export default function MedicarePartDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MedicarePartDClient />
    </>
  );
}
