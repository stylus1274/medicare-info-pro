import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance Broker in Ruskin, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-broker-ruskin",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Independent health insurance broker in Ruskin, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance Broker in Ruskin, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Ruskin, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Ruskin FL", "health insurance broker Ruskin", "Medicare broker Ruskin FL", "independent insurance agent Ruskin"],
  openGraph: {
    title: "Health Insurance Broker in Ruskin, FL | Medicare Information Project",
    description: "Independent health insurance broker in Ruskin, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-ruskin",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-ruskin" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <HealthInsuranceBrokerTemplate
      data={{
        city: "Ruskin",
        slug: "ruskin",
        county: "Hillsborough",
        zip: "33570",
        neighboringCities: [
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Valrico", slug: "valrico" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
    </>
  );
}
