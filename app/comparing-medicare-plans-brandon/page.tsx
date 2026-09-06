import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Comparing Medicare Plans in Brandon, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Advantage, Medigap, and Part D plans in Brandon, FL. Independent agents serving Hillsborough County help you find the right plan at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/comparing-medicare-plans-brandon/#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Free Medicare plan comparison in Brandon, FL. Independent agents compare all Medicare Advantage, Medigap, and Part D plans available in your ZIP code.",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-brandon/",
  "telephone": "+1-813-699-5559",
  "priceRange": "Free consultation",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9378,
    "longitude": -82.2859
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Brandon"},
    {"@type": "City", "name": "Valrico"},
    {"@type": "City", "name": "Riverview"},
    {"@type": "City", "name": "Seffner"}
  ],
  "sameAs": [
    "https://www.facebook.com/medicareinfopro",
    "https://medicareinfopro.com"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I compare Medicare plans in Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To compare Medicare plans in Brandon, you need to evaluate Medicare Advantage vs. Original Medicare with a Supplement, compare Part D drug plans for your specific medications, and verify that your doctors and hospitals are in-network. Our Brandon agents do this comparison for free using all plans available in your ZIP code."
      }
    },
    {
      "@type": "Question",
      "name": "What Medicare plans are available in Brandon ZIP codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brandon ZIP codes 33510, 33511, and 33527 have access to approximately 90 Medicare Advantage plans and multiple Medicare Supplement options from 17+ carriers for 2026. Plan availability and pricing vary by ZIP code, so it is important to compare plans specific to your address."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most important factor when comparing Medicare plans in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most important factors are whether your current doctors and hospitals are in the plan's network, whether your prescription drugs are covered at an affordable tier, and the total annual cost including premiums, deductibles, and expected cost-sharing. Our Brandon agents analyze all three factors for your specific situation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I compare Medicare plans for free in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Information Pro at 915 Oakfield Dr, Brandon, FL 33511 provides free plan comparison services. Our independent agents compare all available plans in your ZIP code at no cost. Call 813-699-5559 or schedule a free consultation online."
      }
    }
  ]
} as const;
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Compare Medicare Plans in Brandon, FL — Advantage vs. Medigap vs. Part D',
  description:
    'Not sure whether Medicare Advantage or Medigap is right for you? Brandon-based MIP agents compare all three paths side-by-side — free, unbiased, no sales pressure.',
  keywords: ["comparing Medicare plans Brandon", "Medicare plans Brandon FL", "Medicare Advantage Brandon", "Medigap Brandon FL", "Medicare Part D Brandon"],
  openGraph: {
    title: "Comparing Medicare Plans in Brandon, FL",
    description: "Independent Medicare agents in Brandon, FL compare every available plan to find the right fit for your doctors, prescriptions, and budget.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-brandon",
    type: "website",
  },
  alternates: { canonical: "https://medicareinfopro.com/comparing-medicare-plans-brandon" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  );
}
