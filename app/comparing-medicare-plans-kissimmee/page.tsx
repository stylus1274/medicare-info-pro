import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "../../components/CompareMedicarePlansTemplate";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Kissimmee FL | Advantage vs. Medigap Guide",
  description: "Compare Medicare Advantage, Medicare Supplement, and Part D plans in Kissimmee, FL. Get free independent plan guidance for your doctors, prescriptions, and budget in Osceola County.",
  keywords: [
    "comparing medicare plans kissimmee fl",
    "medicare advantage vs medigap kissimmee",
    "best medicare plan kissimmee florida",
    "medicare plan comparison kissimmee fl",
    "medicare advantage vs supplement kissimmee",
    "medicare options osceola county 2026",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in Kissimmee FL | Advantage vs. Medigap Guide",
    description: "Compare Medicare Advantage, Medigap, and Part D options available in Kissimmee and Osceola County.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-kissimmee/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-kissimmee/",
  },
};

export default function Page() {
  return (
    <CompareMedicarePlansTemplate
      data={{
        city: "Kissimmee",
        slug: "kissimmee",
        county: "Osceola County",
        zip: "34741",
        carriers: [
          "Humana",
          "UnitedHealthcare",
          "Aetna",
          "Florida Blue",
          "Cigna",
          "Wellcare",
          "Devoted Health",
          "Simply Healthcare",
          "Molina Healthcare",
          "Alignment Health",
        ],
        neighboringCities: [
          { name: "Clermont", slug: "clermont" },
          { name: "Orlando", slug: "orlando" },
          { name: "St. Cloud", slug: "st-cloud" },
          { name: "Davenport", slug: "davenport" },
          { name: "Poinciana", slug: "poinciana" },
        ],
        inlineResources: [
          { label: "Medicare agent guidance in Kissimmee", href: "/medicare-agent-kissimmee" },
          { label: "Medicare Supplement plans in Kissimmee", href: "/medicare-supplement-insurance-plans-kissimmee" },
        ],
        relatedCityLinks: [
          { label: "Medicare Agent Kissimmee", href: "/medicare-agent-kissimmee" },
          { label: "Medicare Supplement Plans Kissimmee", href: "/medicare-supplement-insurance-plans-kissimmee" },
          { label: "Medicare Advantage Plans Kissimmee", href: "/medicare-advantage-plans-kissimmee-florida" },
          { label: "Medicare Enrollment Assistance Kissimmee", href: "/medicare-enrollment-assistance-kissimmee" },
          { label: "Compare Medicare Plans Clermont", href: "/comparing-medicare-plans-clermont" },
          { label: "Original Medicare vs. Medicare Advantage", href: "/original-vs-advantage" },
          { label: "Free Medicare Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
