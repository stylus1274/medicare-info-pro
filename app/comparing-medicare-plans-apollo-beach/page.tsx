import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Apollo Beach, FL | Medicare Information Project",
  description:
    "Compare Medicare Advantage, Medigap, and Part D plans in Apollo Beach, FL. Independent agents serving Hillsborough County help you find the right plan at no cost.",
  keywords: ["comparing Medicare plans Apollo Beach", "Medicare plans Apollo Beach FL", "Medicare Advantage Apollo Beach", "Medigap Apollo Beach FL"],
  openGraph: {
    title: "Comparing Medicare Plans in Apollo Beach, FL",
    description: "Independent Medicare agents in Apollo Beach, FL compare every available plan to find the right fit for your doctors, prescriptions, and budget.",
    url: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-apollo-beach",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-apollo-beach" },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Apollo Beach",
        slug: "apollo-beach",
        county: "Hillsborough",
        zip: "33572",
        carriers: ["Humana", "Aetna", "UnitedHealthcare", "Cigna", "WellCare", "Devoted Health", "Simply Healthcare", "Florida Blue", "Molina Healthcare", "Anthem BCBS"],
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Valrico", slug: "valrico" },
          { name: "Plant City", slug: "plant-city" },
        ],
      }}
    />
  );
}
