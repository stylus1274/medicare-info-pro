import type { Metadata } from "next";
import CompareMedicarePlansTemplate from "@/components/CompareMedicarePlansTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Comparing Medicare Plans in Tallahassee, FL | Medicare Information Pro",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-tallahassee",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Advantage, Medigap, and Part D plans in Tallahassee, FL. Independent agents serving Leon County help you find the right plan at no cost."
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/comparing-medicare-plans-tallahassee#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Tallahassee, FL and surrounding Leon County communities.",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-tallahassee",
  "telephone": "+1-813-699-5559",
  "priceRange": "Free Consultation",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr, Suite A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.4383,
    "longitude": -84.2807
  },
  "areaServed": {
    "@type": "City",
    "name": "Tallahassee",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Insurance Consulting",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medicare Insurance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medicare Advantage Plans"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medicare Supplement Plans"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medicare Part D Drug Plans"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medicare Enrollment Assistance"
        }
      }
    ]
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Tallahassee, FL | Medicare Information Pro",
  description: "Compare Medicare Advantage, Medigap, and Part D plans in Tallahassee, FL. Independent agents serving Leon County help you find the right plan at no cost.",
  keywords: ["comparing Medicare plans Tallahassee", "Medicare plans Tallahassee FL", "Medicare Advantage Tallahassee", "Medigap Tallahassee FL", "Medicare Part D Tallahassee"],
  openGraph: {
    title: "Comparing Medicare Plans in Tallahassee, FL | Medicare Information Pro",
    description: "Independent Medicare agents compare every available plan in Tallahassee, FL to find the right fit for your doctors, prescriptions, and budget.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-tallahassee",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-tallahassee",
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
          city: "Tallahassee",
          slug: "tallahassee",
          county: "Leon",
          zip: "32301",
          carriers: [
            "Humana",
            "Aetna",
            "UnitedHealthcare",
            "Cigna",
            "WellCare",
            "Simply Healthcare",
            "Florida Blue",
            "Molina Healthcare",
            "Devoted Health",
            "Anthem BCBS",
          ],
          neighboringCities: [
            { name: "Brandon", slug: "brandon" },
            { name: "Riverview", slug: "riverview" },
            { name: "Apollo Beach", slug: "apollo-beach" },
            { name: "Valrico", slug: "valrico" },
          ],
          relatedCityLinks: [
            { label: "Medicare Agent in Tallahassee", href: "/medicare-agent-tallahassee" },
            { label: "Medicare Supplement Plans in Tallahassee", href: "/medicare-supplement-insurance-plans-tallahassee" },
          ],
        }}
      />
    </>
  );
}
