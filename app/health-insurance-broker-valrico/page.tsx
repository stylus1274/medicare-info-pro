import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance Broker in Valrico, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-broker-valrico",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Independent health insurance broker in Valrico, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance Broker in Valrico, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Valrico, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Valrico FL", "health insurance broker Valrico", "Medicare broker Valrico FL", "independent insurance agent Valrico"],
  openGraph: {
    title: "Health Insurance Broker in Valrico, FL | Medicare Information Project",
    description: "Independent health insurance broker in Valrico, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-valrico",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-valrico" },
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
        city: "Valrico",
        slug: "valrico",
        county: "Hillsborough",
        zip: "33594",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Ruskin", slug: "ruskin" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
    </>
  );
}
