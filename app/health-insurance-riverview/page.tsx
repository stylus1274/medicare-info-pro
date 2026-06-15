import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";
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
  );
}
