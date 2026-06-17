import type { Metadata } from "next";
import PenaltyCalculatorClient from "./PenaltyCalculatorClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Late Enrollment Penalty Calculator | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-penalty-calculator",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Calculate your Medicare Part B and Part D late enrollment penalties instantly. See exactly how much you will pay and for how long if you miss your enrollment window."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Late Enrollment Penalty Calculator | Medicare Information Project",
  description:
    "Calculate your Medicare Part B and Part D late enrollment penalties instantly. See exactly how much you will pay and for how long if you miss your enrollment window.",
  keywords: [
    "Medicare penalty calculator",
    "Medicare late enrollment penalty",
    "Medicare Part B penalty calculator",
    "Medicare Part D penalty calculator",
    "Medicare enrollment penalty",
    "how much is Medicare late penalty",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Late Enrollment Penalty Calculator",
    description:
      "Calculate your Medicare Part B and Part D late enrollment penalties. Free tool — see exactly how much you owe and for how long.",
    url: "https://medicare-info-pro.vercel.app/medicare-penalty-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-penalty-calculator",
  },
};

export default function PenaltyCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <PenaltyCalculatorClient />
    </>
  );
}
