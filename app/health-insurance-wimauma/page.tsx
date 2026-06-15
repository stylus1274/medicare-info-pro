import type { Metadata } from "next";
import HealthInsuranceTemplate from "@/components/HealthInsuranceTemplate";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insurance in Wimauma, FL | Medicare Information Project",
  description:
    "Find the right health insurance in Wimauma, FL. Independent agents compare Medicare, ACA Marketplace, and private plans at no cost to you. Call 813-699-5559.",
  keywords: ["health insurance Wimauma FL", "health insurance Wimauma", "Medicare plans Wimauma FL", "ACA plans Wimauma FL"],
  openGraph: {
    title: "Health Insurance in Wimauma, FL | Medicare Information Project",
    description: "Independent agents in Wimauma, FL compare every health insurance option — Medicare, Marketplace, and private plans — completely free.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-wimauma",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-wimauma" },
};

export default function Page() {
  return (
    <HealthInsuranceTemplate
      data={{
        city: "Wimauma",
        slug: "wimauma",
        county: "Hillsborough",
        zip: "33598",
        neighboringCities: [
          { name: "Sun City", slug: "sun-city" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Riverview", slug: "riverview" },
          { name: "Brandon", slug: "brandon" },
          { name: "Valrico", slug: "valrico" },
        ],
      }}
    />
  );
}
