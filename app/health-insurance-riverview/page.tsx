import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance in Riverview, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-riverview",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find the right health insurance in Riverview, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance in Riverview, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Riverview, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Riverview FL", "health insurance Riverview", "Medicare plans Riverview", "ACA plans Riverview FL"],
  openGraph: {
    title: "Health Insurance in Riverview, FL | Medicare Information Project",
    description: "Independent agents in Riverview, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-riverview",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-riverview" },
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
        city: "Riverview",
        slug: "riverview",
        county: "Hillsborough",
        zip: "33578",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Valrico", slug: "valrico" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Sun City", slug: "sun-city" },
          { name: "Wimauma", slug: "wimauma" },
        ],
      }}
    />
    </>
  );
}
