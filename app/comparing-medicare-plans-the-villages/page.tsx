import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "../../components/CompareMedicarePlansTemplate";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in The Villages FL | Advantage vs. Medigap Guide",
  description: "Compare Medicare Advantage vs. Medicare Supplement plans in The Villages, FL. Licensed agents serving Sumter County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
  keywords: [
    "comparing medicare plans the villages fl",
    "medicare advantage vs medigap the villages",
    "best medicare plan the villages florida",
    "medicare plan comparison the villages fl",
    "medicare advantage vs supplement the villages",
    "which medicare plan is best the villages",
    "medicare options the villages florida 2026",
    "sumter county medicare plan comparison",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in The Villages FL | Advantage vs. Medigap Guide",
    description: "Compare Medicare Advantage vs. Medicare Supplement plans in The Villages, FL. Licensed agents serving Sumter County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-the-villages/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-the-villages/",
  },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "The Villages",
        slug: "the-villages",
        county: "Sumter County",
        zip: "32162",
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
          "Molina Healthcare",
        ],
        neighboringCities: [
          { name: "Ocala", slug: "ocala" },
          { name: "Gainesville", slug: "gainesville" },
          { name: "Leesburg", slug: "leesburg" },
          { name: "Clermont", slug: "clermont" },
          { name: "Inverness", slug: "inverness" },
        ],
        relatedCityLinks: [
          { label: "Medicare Agent The Villages", href: "/medicare-agent-the-villages" },
          { label: "Medicare Supplement Plans The Villages", href: "/medicare-supplement-insurance-plans-the-villages" },
          { label: "Medicare Advantage Plans The Villages", href: "/medicare-advantage-plans-the-villages-florida" },
          { label: "Medicare Enrollment Assistance The Villages", href: "/medicare-enrollment-assistance-the-villages" },
          { label: "Compare Medicare Plans Ocala", href: "/comparing-medicare-plans-ocala" },
          { label: "Compare Medicare Plans Gainesville", href: "/comparing-medicare-plans-gainesville" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
