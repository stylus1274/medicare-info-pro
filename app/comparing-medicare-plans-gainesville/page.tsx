import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Comparing Medicare Plans in Gainesville, FL | Medicare Information Pro",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Advantage, Medigap, and Part D plans in Gainesville, FL. Independent agents serving Alachua County help you find the right plan at no cost."
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Compare Medicare Plans Gainesville FL",
  "description": "Independent Medicare agents helping Gainesville and Alachua County residents compare Medicare Advantage vs. Medicare Supplement plans. Free, unbiased guidance.",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Gainesville",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Plan Comparison",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Gainesville FL | Medicare Advantage vs Supplement",
  description: "Not sure which Medicare plan is right for you in Gainesville, FL? We compare Medicare Advantage vs. Medigap for Alachua County residents. Free, unbiased help from licensed agents.",
  keywords: [
    "comparing medicare plans gainesville fl",
    "medicare advantage vs supplement gainesville",
    "medicare plan comparison gainesville florida",
    "best medicare plan gainesville fl",
    "medicare options gainesville florida",
    "medicare advantage gainesville fl",
    "compare medicare gainesville",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in Gainesville FL | Medicare Advantage vs Supplement",
    description: "Not sure which Medicare plan is right for you in Gainesville, FL? We compare Medicare Advantage vs. Medigap for Alachua County residents. Free, unbiased help from licensed agents.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CompareMedicarePlansTemplate
        data={{
          city: "Gainesville",
          slug: "gainesville",
          county: "Alachua",
          zip: "32601",
          carriers: [
            "Humana",
            "Aetna",
            "UnitedHealthcare",
            "Florida Blue",
            "WellCare",
            "Simply Healthcare",
            "Molina Healthcare",
            "Devoted Health",
            "Cigna",
            "Anthem BCBS",
          ],
          neighboringCities: [
            { name: "Tallahassee", slug: "tallahassee" },
            { name: "Ocala", slug: "ocala" },
            { name: "Brandon", slug: "brandon" },
            { name: "Riverview", slug: "riverview" },
          ],
          relatedCityLinks: [
            { label: "Medicare Agent in Gainesville", href: "/medicare-agent-gainesville" },
            { label: "Medicare Supplement Plans in Gainesville", href: "/medicare-supplement-insurance-plans-gainesville" },
            { label: "Medicare Advantage Plans Gainesville", href: "/medicare-advantage-plans-gainesville-florida" },
            { label: "Medicare Enrollment Assistance Gainesville", href: "/medicare-enrollment-assistance-gainesville" },
          ],
        }}
      />
    </>
  );
}
