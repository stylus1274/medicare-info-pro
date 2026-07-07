import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance in Wimauma, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-wimauma",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find the right health insurance in Wimauma, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/health-insurance-wimauma#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Wimauma, FL.",
  "url": "https://medicareinfopro.com/health-insurance-wimauma",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wimauma",
    "addressRegion": "FL",
    "postalCode": "33598",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Wimauma"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance in Wimauma, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Wimauma, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Wimauma FL", "health insurance Wimauma", "Medicare plans Wimauma FL", "ACA plans Wimauma FL"],
  openGraph: {
    title: "Health Insurance in Wimauma, FL | Medicare Information Project",
    description: "Independent agents in Wimauma, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicareinfopro.com/health-insurance-wimauma",
    type: "website",
  },
  alternates: { canonical: "https://medicareinfopro.com/health-insurance-wimauma" },
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
      <HealthInsuranceTemplate
      data={{
        city: "Wimauma",
        slug: "wimauma",
        county: "Hillsborough",
        zip: "33598",
        neighboringCities: [
          { name: "Sun City", slug: "sun-city" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Riverview", slug: "riverview" },
          { name: "Brandon", slug: "brandon" },
          { name: "Valrico", slug: "valrico" },
        ],
      }}
    />
    </>
  );
}
