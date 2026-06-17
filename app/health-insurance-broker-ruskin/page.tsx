import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance Broker in Ruskin, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-broker-ruskin",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Independent health insurance broker in Ruskin, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/health-insurance-broker-ruskin#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Ruskin, FL and surrounding Hillsborough County communities.",
  "url": "https://medicareinfopro.com/health-insurance-broker-ruskin",
  "telephone": "+1-813-699-5559",
  "priceRange": "Free Consultation",
  "image": "https://medicareinfopro.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Brandon, FL",
    "addressLocality": "Ruskin",
    "addressRegion": "FL",
    "postalCode": "33570",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9378,
    "longitude": -82.2859
  },
  "areaServed": {
    "@type": "City",
    "name": "Ruskin",
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
  title: "Health Insurance Broker in Ruskin, FL | Medicare Information Project",
  description:
    "Independent health insurance broker in Ruskin, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559.",
  keywords: ["health insurance broker Ruskin FL", "health insurance broker Ruskin", "Medicare broker Ruskin FL", "independent insurance agent Ruskin"],
  openGraph: {
    title: "Health Insurance Broker in Ruskin, FL | Medicare Information Project",
    description: "Independent health insurance broker in Ruskin, FL — comparing every plan at no cost to you.",
    url: "https://medicare-info-pro.vercel.app/health-insurance-broker-ruskin",
    type: "website",
  },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/health-insurance-broker-ruskin" },
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
        city: "Ruskin",
        slug: "ruskin",
        county: "Hillsborough",
        zip: "33570",
        neighboringCities: [
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Brandon", slug: "brandon" },
          { name: "Riverview", slug: "riverview" },
          { name: "Valrico", slug: "valrico" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
    </>
  );
}
