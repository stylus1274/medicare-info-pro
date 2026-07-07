import type { Metadata } from "next";
import MedicareQuizClient from "./MedicareQuizClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Quiz: Which Plan Is Right for You? | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-quiz",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Take our free 2-minute Medicare quiz to find out whether Original Medicare, Medicare Advantage, or Medigap is the best fit for your health needs, budget, and lifestyle."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Quiz: Which Plan Is Right for You? | Medicare Information Pro",
  description:
    "Take our free 2-minute Medicare quiz to find out whether Original Medicare, Medicare Advantage, or Medigap is the best fit for your health needs, budget, and lifestyle.",
  keywords: [
    "Medicare quiz",
    "which Medicare plan is right for me",
    "Medicare Advantage vs Original Medicare quiz",
    "Medigap quiz",
    "Medicare plan finder",
    "Medicare 2026 quiz",
    "best Medicare plan quiz",
  ],
  openGraph: {
    title: "Medicare Quiz: Which Plan Is Right for You?",
    description:
      "Answer 6 quick questions and get a personalized Medicare recommendation: Original Medicare, Advantage, or Medigap: based on your situation.",
    url: "https://medicareinfopro.com/medicare-quiz",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare quiz to find the right plan for you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Quiz: Which Plan Is Right for You?",
    description:
      "Answer 6 quick questions and get a personalized Medicare recommendation based on your situation.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-quiz",
  },
};

export default function MedicareQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <MedicareQuizClient />
    </>
  );
}
