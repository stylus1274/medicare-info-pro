import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance Broker in Temple Terrace, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Temple Terrace, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Temple Terrace FL", "health insurance broker Temple Terrace", "Medicare broker Temple Terrace FL", "independent insurance agent Temple Terrace"],
  openGraph: {
    title: "Health Insurance Broker in Temple Terrace, FL | Medicare Information Project",
    description: "Independent health insurance broker in Temple Terrace, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-temple-terrace",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-temple-terrace" },
};

export default function Page() {
  return (
    <HealthInsuranceBrokerTemplate
      data={{
        city: "Temple Terrace",
        slug: "temple-terrace",
        county: "Hillsborough",
        zip: "33617",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Ruskin", slug: "ruskin" },
          { name: "Valrico", slug: "valrico" },
        ],
      }}
    />
  );
}
