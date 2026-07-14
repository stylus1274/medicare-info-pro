import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "../../components/CompareMedicarePlansTemplate";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Ocala FL | Advantage vs. Medigap Guide",
  description: "Compare Medicare Advantage vs. Medicare Supplement plans in Ocala, FL. Licensed agents serving Marion County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
  keywords: [
    "comparing medicare plans ocala fl",
    "medicare advantage vs medigap ocala",
    "best medicare plan ocala florida",
    "medicare plan comparison ocala fl",
    "medicare advantage vs supplement ocala",
    "which medicare plan is best ocala",
    "medicare options ocala florida 2026",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in Ocala FL | Advantage vs. Medigap Guide",
    description: "Compare Medicare Advantage vs. Medicare Supplement plans in Ocala, FL. Licensed agents serving Marion County help you choose the right plan for your doctors, budget, and health needs. Free guidance.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-ocala/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-ocala/",
  },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Ocala",
        slug: "ocala",
        county: "Marion County",
        zip: "34471",
        carriers: [
          "Humana",
          "Aetna",
          "UnitedHealthcare",
          "Florida Blue",
          "WellCare",
          "Simply Healthcare",
          "Cigna",
          "Devoted Health",
          "Mutual of Omaha",
          "Allstate Health Solutions",
        ],
        neighboringCities: [
          { name: "The Villages", slug: "the-villages" },
          { name: "Gainesville", slug: "gainesville" },
          { name: "Leesburg", slug: "leesburg" },
          { name: "Crystal River", slug: "crystal-river" },
          { name: "Inverness", slug: "inverness" },
        ],
        relatedCityLinks: [
          { label: "Medicare Agent Ocala", href: "/medicare-agent-ocala" },
          { label: "Medicare Supplement Plans Ocala", href: "/medicare-supplement-insurance-plans-ocala" },
          { label: "Medicare Advantage Plans Ocala", href: "/medicare-advantage-plans-ocala-florida" },
          { label: "Medicare Enrollment Assistance Ocala", href: "/medicare-enrollment-assistance-ocala" },
          { label: "Compare Medicare Plans Gainesville", href: "/comparing-medicare-plans-gainesville" },
          { label: "Compare Medicare Plans The Villages", href: "/comparing-medicare-plans-the-villages" },
          { label: "Compare Medicare Plans Tallahassee", href: "/comparing-medicare-plans-tallahassee" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
