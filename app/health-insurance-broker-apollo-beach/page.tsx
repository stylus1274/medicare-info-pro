import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance Broker in Apollo Beach, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-broker-apollo-beach",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Independent health insurance broker in Apollo Beach, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance Broker in Apollo Beach, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Apollo Beach, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Apollo Beach FL", "health insurance broker Apollo Beach", "Medicare broker Apollo Beach FL", "independent insurance agent Apollo Beach"],
  openGraph: {
    title: "Health Insurance Broker in Apollo Beach, FL | Medicare Information Project",
    description: "Independent health insurance broker in Apollo Beach, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-apollo-beach",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-apollo-beach" },
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
        city: "Apollo Beach",
        slug: "apollo-beach",
        county: "Hillsborough",
        zip: "33572",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Ruskin", slug: "ruskin" },
          { name: "Valrico", slug: "valrico" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
    </>
  );
}
