import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Plant City, FL | Medicare Information Project",
  description:
    "Compare Medicare Advantage, Medigap, and Part D plans in Plant City, FL. Independent agents serving Hillsborough County help you find the right plan at no cost.",
  keywords: ["comparing Medicare plans Plant City", "Medicare plans Plant City FL", "Medicare Advantage Plant City", "Medigap Plant City FL"],
  openGraph: {
    title: "Comparing Medicare Plans in Plant City, FL",
    description: "Independent Medicare agents in Plant City, FL compare every available plan to find the right fit for your doctors, prescriptions, and budget.",
    url: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-plant-city",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-plant-city" },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Plant City",
        slug: "plant-city",
        county: "Hillsborough",
        zip: "33563",
        carriers: ["Humana", "Aetna", "UnitedHealthcare", "Cigna", "WellCare", "Devoted Health", "Simply Healthcare", "Florida Blue", "Molina Healthcare", "Anthem BCBS"],
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Valrico", slug: "valrico" },
          { name: "Apollo Beach", slug: "apollo-beach" },
        ],
      }}
    />
  );
}
