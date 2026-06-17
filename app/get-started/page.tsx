import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Find Your Medicare Plan | Medicare Information Project",
  "url": "https://medicareinfopro.com/get-started",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Answer a few quick questions and we"
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Find Your Medicare Plan | Medicare Information Project",
  description:
    "Answer a few quick questions and we'll help match you with the right Medicare plan for your needs. Free, no-obligation consultation.",
  robots: { index: false, follow: false },
};

export default function GetStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <GetStartedClient />
    </>
  );
}
