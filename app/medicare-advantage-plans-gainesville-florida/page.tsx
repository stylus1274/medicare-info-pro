import type { Metadata } from "next";
import MedicareAdvantagePlansGainesvilleClient from "./MedicareAdvantagePlansGainesvilleClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Advantage Plans in Gainesville, FL | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-advantage-plans-gainesville-florida/",
  "description": "Compare Medicare Advantage plans in Gainesville, FL. Local agents serving Alachua County help you find the right plan from 8+ carriers at no cost.",
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-advantage-plans-gainesville-florida/#localbusiness",
  "name": "Medicare Information Pro",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr, Suite A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US",
  },
  "areaServed": { "@type": "City", "name": "Gainesville" },
  "serviceType": "Medicare Insurance Consulting",
  "priceRange": "Free",
} as const;

export const metadata: Metadata = {
  title: "Medicare Advantage Plans in Gainesville FL | Compare Plans Free",
  description: "Compare Medicare Advantage plans in Gainesville, FL. Independent agents serving Alachua County verify your UF Health doctors are in-network and compare 8+ carriers. Free consultations.",
  keywords: [
    "medicare advantage plans gainesville fl",
    "medicare advantage gainesville florida",
    "medicare advantage plans alachua county",
    "best medicare advantage plan gainesville",
    "medicare advantage gainesville fl 2026",
    "medicare part c gainesville florida",
    "medicare advantage plans near gainesville",
  ],
  openGraph: {
    title: "Medicare Advantage Plans in Gainesville FL | Compare Plans Free",
    description: "Compare Medicare Advantage plans in Gainesville, FL. Independent agents serving Alachua County verify your UF Health doctors are in-network and compare 8+ carriers. Free consultations.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-gainesville-florida/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-gainesville-florida/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <MedicareAdvantagePlansGainesvilleClient />
    </>
  );
}
