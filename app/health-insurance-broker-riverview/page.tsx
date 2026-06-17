import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance Broker in Riverview, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-broker-riverview",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Independent health insurance broker in Riverview, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/health-insurance-broker-riverview#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Riverview, FL and surrounding Hillsborough County communities.",
  "url": "https://medicareinfopro.com/health-insurance-broker-riverview",
  "telephone": "+1-813-699-5559",
  "priceRange": "Free Consultation",
  "image": "https://medicareinfopro.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Brandon, FL",
    "addressLocality": "Riverview",
    "addressRegion": "FL",
    "postalCode": "33578",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9378,
    "longitude": -82.2859
  },
  "areaServed": {
    "@type": "City",
    "name": "Riverview",
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
  title: "Health Insurance Broker in Riverview, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Riverview, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Riverview FL", "health insurance broker Riverview", "Medicare broker Riverview FL", "independent insurance agent Riverview"],
  openGraph: {
    title: "Health Insurance Broker in Riverview, FL | Medicare Information Project",
    description: "Independent health insurance broker in Riverview, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-riverview",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-riverview" },
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
      <HealthInsuranceBrokerTemplate
      data={{
        city: "Riverview",
        slug: "riverview",
        county: "Hillsborough",
        zip: "33578",
        neighboringCities: [
          { name: "Brandon", slug: "brandon" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Ruskin", slug: "ruskin" },
          { name: "Valrico", slug: "valrico" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
    </>
  );
}
