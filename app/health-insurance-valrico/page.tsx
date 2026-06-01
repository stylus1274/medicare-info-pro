import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";

export const metadata: Metadata = {
  title: "Health Insurance in Valrico, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Valrico, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Valrico FL", "health insurance Valrico", "Medicare plans Valrico FL", "ACA plans Valrico FL"],
  openGraph: {
    title: "Health Insurance in Valrico, FL | Medicare Information Project",
    description: "Independent agents in Valrico, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-valrico",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-valrico" },
};

export default function Page() {
  return (
    <HealthInsuranceTemplate
      data={{
        city: "Valrico",
        slug: "valrico",
        county: "Hillsborough",
        zip: "33594",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Sun City", slug: "sun-city" },
          { name: "Wimauma", slug: "wimauma" },
        ],
      }}
    />
  );
}
