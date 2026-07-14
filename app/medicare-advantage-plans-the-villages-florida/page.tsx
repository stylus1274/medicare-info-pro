import type { Metadata } from "next";
import MedicareAdvantagePlansTheVillagesClient from "./MedicareAdvantagePlansTheVillagesClient";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans The Villages Florida | Compare 2026 Plans",
  description: "Compare Medicare Advantage plans in The Villages, FL. Independent agents serving Sumter County, Lady Lake, Fruitland Park, and surrounding areas. Free plan comparison, no obligation.",
  keywords: [
    "Medicare Advantage plans The Villages Florida",
    "Medicare Advantage The Villages FL",
    "Medicare plans Sumter County",
    "Medicare Advantage Lady Lake Florida",
    "Medicare plans The Villages 2026",
    "Medicare agent The Villages Florida",
    "Sumter County Medicare Advantage",
  ],
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-the-villages-florida/",
  },
  openGraph: {
    title: "Medicare Advantage Plans The Villages Florida | Compare 2026 Plans",
    description: "Compare Medicare Advantage plans in The Villages, FL. Independent agents serving Sumter County, Lady Lake, Fruitland Park, and surrounding areas.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-the-villages-florida/",
    type: "website",
  },
};

export default function MedicareAdvantagePlansTheVillagesPage() {
  return <MedicareAdvantagePlansTheVillagesClient />;
}
