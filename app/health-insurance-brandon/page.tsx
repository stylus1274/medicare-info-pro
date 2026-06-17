import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance in Brandon, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find the right health insurance in Brandon, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance in Brandon, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Brandon, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Brandon FL", "health insurance Brandon", "Medicare plans Brandon", "ACA plans Brandon FL", "health insurance agent Brandon"],
  openGraph: {
    title: "Health Insurance in Brandon, FL | Medicare Information Project",
    description: "Independent agents in Brandon, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-brandon",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-brandon" },
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
        city: "Brandon",
        slug: "brandon",
        county: "Hillsborough",
        zip: "33510",
        neighboringCities: [
          { name: "Riverview", slug: "riverview" },
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
