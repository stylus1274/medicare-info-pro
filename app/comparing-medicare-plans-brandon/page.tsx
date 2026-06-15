import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Brandon, FL | Medicare Information Project",
  description:
    "Compare Medicare Advantage, Medigap, and Part D plans in Brandon, FL. Independent agents serving Hillsborough County help you find the right plan at no cost.",
  keywords: ["comparing Medicare plans Brandon", "Medicare plans Brandon FL", "Medicare Advantage Brandon", "Medigap Brandon FL", "Medicare Part D Brandon"],
  openGraph: {
    title: "Comparing Medicare Plans in Brandon, FL",
    description: "Independent Medicare agents in Brandon, FL compare every available plan to find the right fit for your doctors, prescriptions, and budget.",
    url: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-brandon",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/comparing-medicare-plans-brandon" },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Brandon",
        slug: "brandon",
        county: "Hillsborough",
        zip: "33510",
        carriers: ["Humana", "Aetna", "UnitedHealthcare", "Cigna", "WellCare", "Devoted Health", "Simply Healthcare", "Florida Blue", "Molina Healthcare", "Anthem BCBS"],
        neighboringCities: [
          { name: "Riverview", slug: "riverview" },
          { name: "Valrico", slug: "valrico" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Plant City", slug: "plant-city" },
        ],
      }}
    />
  );
}
