import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Valrico, FL | Medicare Information Project",
  description:
    "Compare Medicare Advantage, Medigap, and Part D plans in Valrico, FL. Independent agents serving Hillsborough County help you find the right plan at no cost.",
  keywords: ["comparing Medicare plans Valrico", "Medicare plans Valrico FL", "Medicare Advantage Valrico", "Medigap Valrico FL"],
  openGraph: {
    title: "Comparing Medicare Plans in Valrico, FL",
    description: "Independent Medicare agents in Valrico, FL compare every available plan to find the right fit for your doctors, prescriptions, and budget.",
    url: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-valrico",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-valrico" },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Valrico",
        slug: "valrico",
        county: "Hillsborough",
        zip: "33594",
        carriers: ["Humana", "Aetna", "UnitedHealthcare", "Cigna", "WellCare", "Devoted Health", "Simply Healthcare", "Florida Blue", "Molina Healthcare", "Anthem BCBS"],
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Plant City", slug: "plant-city" },
        ],
      }}
    />
  );
}
