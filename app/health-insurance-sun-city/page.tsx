import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance in Sun City, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-sun-city",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find the right health insurance in Sun City, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance in Sun City, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Sun City, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Sun City FL", "health insurance Sun City Center", "Medicare plans Sun City FL", "ACA plans Sun City FL"],
  openGraph: {
    title: "Health Insurance in Sun City, FL | Medicare Information Project",
    description: "Independent agents in Sun City, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-sun-city",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-sun-city" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <HealthInsuranceTemplate
      data={{
        city: "Sun City",
        slug: "sun-city",
        county: "Hillsborough",
        zip: "33573",
        neighboringCities: [
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Riverview", slug: "riverview" },
          { name: "Brandon", slug: "brandon" },
          { name: "Wimauma", slug: "wimauma" },
          { name: "Valrico", slug: "valrico" },
        ],
      }}
    />
    </>
  );
}
