import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";

export const metadata: Metadata = {
  title: "Health Insurance in Apollo Beach, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Apollo Beach, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Apollo Beach FL", "health insurance Apollo Beach", "Medicare plans Apollo Beach", "ACA plans Apollo Beach FL"],
  openGraph: {
    title: "Health Insurance in Apollo Beach, FL | Medicare Information Project",
    description: "Independent agents in Apollo Beach, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-apollo-beach",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-apollo-beach" },
};

export default function Page() {
  return (
    <HealthInsuranceTemplate
      data={{
        city: "Apollo Beach",
        slug: "apollo-beach",
        county: "Hillsborough",
        zip: "33572",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Sun City", slug: "sun-city" },
          { name: "Wimauma", slug: "wimauma" },
          { name: "Valrico", slug: "valrico" },
        ],
      }}
    />
  );
}
