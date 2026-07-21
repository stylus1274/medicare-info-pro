import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "../../components/CompareMedicarePlansTemplate";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Clermont FL | Advantage vs. Medigap Guide",
  description: "Compare Medicare Advantage vs. Medicare Supplement plans in Clermont, FL. Licensed agents serving South Lake County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
  keywords: [
    "comparing medicare plans clermont fl",
    "medicare advantage vs medigap clermont",
    "best medicare plan clermont florida",
    "medicare plan comparison clermont fl",
    "medicare advantage vs supplement clermont",
    "which medicare plan is best clermont",
    "medicare options clermont florida 2026",
    "south lake county medicare plan comparison",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in Clermont FL | Advantage vs. Medigap Guide",
    description: "Compare Medicare Advantage vs. Medicare Supplement plans in Clermont, FL. Licensed agents serving South Lake County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-clermont/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-clermont/",
  },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Clermont",
        slug: "clermont",
        county: "Lake County",
        zip: "34711",
        carriers: [
          "Humana",
          "UnitedHealthcare",
          "Aetna",
          "Florida Blue",
          "Cigna",
          "WellCare",
          "Devoted Health",
          "Mutual of Omaha",
          "Allstate Health Solutions",
          "Simply Healthcare",
        ],
        neighboringCities: [
          { name: "Leesburg", slug: "leesburg" },
          { name: "The Villages", slug: "the-villages" },
          { name: "Ocala", slug: "ocala" },
          { name: "Kissimmee", slug: "kissimmee" },
          { name: "Minneola", slug: "minneola" },
        ],
        relatedCityLinks: [
          { label: "Medicare Agent Clermont", href: "/medicare-agent-clermont" },
          { label: "Medicare Supplement Plans Clermont", href: "/medicare-supplement-insurance-plans-clermont" },
          { label: "Medicare Advantage Plans Clermont", href: "/medicare-advantage-plans-clermont-florida" },
          { label: "Medicare Enrollment Assistance Clermont", href: "/medicare-enrollment-assistance-clermont" },
          { label: "Compare Medicare Plans Leesburg", href: "/comparing-medicare-plans-leesburg" },
          { label: "Compare Medicare Plans The Villages", href: "/comparing-medicare-plans-the-villages" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
