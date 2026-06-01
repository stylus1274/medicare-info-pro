import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

export const metadata: Metadata = {
  title: "Health Insurance Broker in Riverview, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Riverview, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Riverview FL", "health insurance broker Riverview", "Medicare broker Riverview FL", "independent insurance agent Riverview"],
  openGraph: {
    title: "Health Insurance Broker in Riverview, FL | Medicare Information Project",
    description: "Independent health insurance broker in Riverview, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-riverview",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-riverview" },
};

export default function Page() {
  return (
    <HealthInsuranceBrokerTemplate
      data={{
        city: "Riverview",
        slug: "riverview",
        county: "Hillsborough",
        zip: "33578",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Ruskin", slug: "ruskin" },
          { name: "Valrico", slug: "valrico" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
  );
}
