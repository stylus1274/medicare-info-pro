import type { Metadata } from "next";
import HealthInsuranceBrokerTemplate from "@/components/HealthInsuranceBrokerTemplate";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Health Insurance Broker in Brandon, FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/health-insurance-broker-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Independent health insurance broker in Brandon, FL. We compare Medicare, ACA Marketplace, and private plans at no cost. Call 813-699-5559."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/health-insurance-broker-brandon/#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Independent Medicare insurance broker in Brandon, FL. Free comparison of Medicare Advantage, Medigap, and Part D plans from 17+ carriers. 500+ clients served.",
  "url": "https://medicareinfopro.com/health-insurance-broker-brandon/",
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
      "name": "What does a Medicare broker in Brandon, FL do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Medicare broker in Brandon compares plans from multiple insurance carriers on your behalf at no cost. MIP represents 17+ carriers and can show you Medicare Advantage, Medigap, and Part D options side by side so you can make an informed decision. We are located at 915 Oakfield Dr, Brandon, FL 33511."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Medicare broker the same as a Medicare agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The terms are often used interchangeably. Both refer to licensed professionals who help you compare and enroll in Medicare plans. The key distinction is independent vs. captive: an independent broker or agent represents multiple carriers, while a captive agent works for one company only. MIP is an independent broker."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find a trusted Medicare broker near Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Information Pro is a licensed independent Medicare broker located at 915 Oakfield Dr, Brandon, FL 33511. We have served 500+ clients across Brandon and Hillsborough County. Call 813-699-5559 for a free, no-obligation consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Do Medicare brokers in Brandon charge a fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Independent Medicare brokers are compensated by the insurance carriers, not by you. You pay the same premium whether you enroll through a broker or directly with the carrier. There is never a fee for our services."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Medicare broker help me switch plans in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. During the Annual Enrollment Period (October 15 to December 7) you can switch Medicare Advantage plans or Part D plans. During a Special Enrollment Period triggered by a qualifying life event, you may be able to switch outside of AEP. Our Brandon brokers can review your situation and identify your options."
      }
    }
  ]
} as const;
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Independent Medicare Broker in Brandon, FL — 915 Oakfield Dr',
  description:
    'Brandon\'s locally-based independent broker. We compare Medicare Advantage, Medigap, ACA, and private plans from 17+ carriers. Office at 915 Oakfield Dr. Free consultations.',
  keywords: ["health insurance broker Brandon FL", "health insurance broker Brandon", "Medicare broker Brandon FL", "independent insurance agent Brandon"],
  openGraph: {
    title: "Health Insurance Broker in Brandon, FL | Medicare Information Project",
    description: "Independent health insurance broker in Brandon, FL — comparing every plan at no cost to you.",
    url: "https://medicareinfopro.com/health-insurance-broker-brandon",
    type: "website",
  },
  alternates: { canonical: "https://medicareinfopro.com/health-insurance-broker-brandon" },
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
      <HealthInsuranceBrokerTemplate
      data={{
        city: "Brandon",
        slug: "brandon",
        county: "Hillsborough",
        zip: "33510",
        neighboringCities: [
          { name: "Riverview", slug: "riverview" },
          { name: "Valrico", slug: "valrico" },
          { name: "Apollo Beach", slug: "apollo-beach" },
          { name: "Ruskin", slug: "ruskin" },
          { name: "Temple Terrace", slug: "temple-terrace" },
        ],
      }}
    />
    </>
  );
}
