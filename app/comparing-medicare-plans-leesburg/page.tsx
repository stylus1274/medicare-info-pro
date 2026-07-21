import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "../../components/CompareMedicarePlansTemplate";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Leesburg FL | Advantage vs. Medigap Guide",
  description: "Compare Medicare Advantage vs. Medicare Supplement plans in Leesburg, FL. Licensed agents serving Lake County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
  keywords: [
    "comparing medicare plans leesburg fl",
    "medicare advantage vs medigap leesburg",
    "best medicare plan leesburg florida",
    "medicare plan comparison leesburg fl",
    "medicare advantage vs supplement leesburg",
    "which medicare plan is best leesburg",
    "medicare options leesburg florida 2026",
    "lake county medicare plan comparison",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in Leesburg FL | Advantage vs. Medigap Guide",
    description: "Compare Medicare Advantage vs. Medicare Supplement plans in Leesburg, FL. Licensed agents serving Lake County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-leesburg/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-leesburg/",
  },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Leesburg",
        slug: "leesburg",
        county: "Lake County",
        zip: "34748",
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
          { name: "The Villages", slug: "the-villages" },
          { name: "Ocala", slug: "ocala" },
          { name: "Clermont", slug: "clermont" },
          { name: "Gainesville", slug: "gainesville" },
          { name: "Tavares", slug: "tavares" },
        ],
        relatedCityLinks: [
          { label: "Medicare Agent Leesburg", href: "/medicare-agent-leesburg" },
          { label: "Medicare Supplement Plans Leesburg", href: "/medicare-supplement-insurance-plans-leesburg" },
          { label: "Medicare Advantage Plans Leesburg", href: "/medicare-advantage-plans-leesburg-florida" },
          { label: "Medicare Enrollment Assistance Leesburg", href: "/medicare-enrollment-assistance-leesburg" },
          { label: "Compare Medicare Plans The Villages", href: "/comparing-medicare-plans-the-villages" },
          { label: "Compare Medicare Plans Clermont", href: "/comparing-medicare-plans-clermont" },
          { label: "Compare Medicare Plans Ocala", href: "/comparing-medicare-plans-ocala" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
