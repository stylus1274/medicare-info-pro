import type { Metadata } from "next";
import DoINeedSupplementClient from "./DoINeedSupplementClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Do I Need a Medicare Supplement (Medigap) Plan? | Medicare Information Pro",
  "url": "https://medicareinfopro.com/do-i-need-a-supplement",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find out if you need a Medicare Supplement (Medigap) plan. Compare Plan G, Plan N, and Plan D side by side, take our 4-question quiz, and learn about the critical 6-month open enrollment window.",
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
  title: "Do I Need a Medicare Supplement (Medigap) Plan? | Medicare Information Pro",
  description:
    "Find out if you need a Medicare Supplement (Medigap) plan. Compare Plan G, Plan N, and Plan D side by side, take our 4-question quiz, and learn about the critical 6-month open enrollment window.",
  keywords: [
    "do I need a Medicare supplement",
    "Medigap plan comparison",
    "Medicare supplement plan G",
    "Medicare supplement plan N",
    "Medigap open enrollment period",
    "Medicare gap coverage",
    "Original Medicare out of pocket costs",
    "Medigap vs Medicare Advantage",
  ],
  openGraph: {
    title: "Do I Need a Medicare Supplement (Medigap) Plan? | Medicare Information Pro",
    description:
      "Compare Medigap plans side by side, take our 4-question quiz to find the right plan, and learn about the one-time 6-month open enrollment window you can't afford to miss.",
    url: "https://medicare-info-pro.vercel.app/do-i-need-a-supplement",
    siteName: "Medicare Information Pro",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/medigap-supplement-hero-JgrPY7ed2EbbhJXpTKArCd.webp",
        width: 1200,
        height: 630,
        alt: "Senior reviewing Medicare supplement plan documents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do I Need a Medicare Supplement (Medigap) Plan? | Medicare Information Pro",
    description:
      "Compare Medigap plans, take our quiz, and learn about the 6-month open enrollment window you can't miss.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/medigap-supplement-hero-JgrPY7ed2EbbhJXpTKArCd.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/do-i-need-a-supplement",
  },
};

export default function DoINeedSupplementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <DoINeedSupplementClient />
    </>
  );
}
