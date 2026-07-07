import type { Metadata } from "next";
import AdvisorsClient from "./AdvisorsClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Medicare Advisors | Medicare Information Project",
  "url": "https://medicareinfopro.com/advisors",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Meet the licensed Medicare advisors at Medicare Information Project. Our agents are bound by a strict Code of Ethics and committed to finding the plan that is genuinely right for you."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Medicare Advisors | Medicare Information Project",
  description:
    "Meet the licensed Medicare advisors at Medicare Information Project. Our agents are bound by a strict Code of Ethics and committed to finding the plan that is genuinely right for you.",
  keywords: [
    "Medicare advisors",
    "licensed Medicare agents Florida",
    "Medicare Information Project advisors",
    "Medicare agent code of ethics",
    "independent Medicare agents Tampa",
    "Medicare help Florida",
  ],
  openGraph: {
    title: "Our Medicare Advisors",
    description:
      "Meet our licensed Medicare advisors. Independent agents bound by a strict Code of Ethics, committed to your best interest.",
    url: "https://medicareinfopro.com/advisors",
    type: "website",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/advisors",
  },
};

export default function AdvisorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <AdvisorsClient />
    </>
  );
}
