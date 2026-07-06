import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicareAdvantagePlansTallahasseeClient from "./MedicareAdvantagePlansTallahasseeClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Advantage Plans in Tallahassee, FL | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-advantage-plans-tallahassee-florida",
  "description": "Compare Medicare Advantage plans in Tallahassee, FL. Local agents serving Leon County help you find the right plan from 10+ carriers at no cost.",
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-advantage-plans-tallahassee-florida#localbusiness",
  "name": "Medicare Information Pro",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr, Suite A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.4383, "longitude": -84.2807 },
  "areaServed": { "@type": "City", "name": "Tallahassee" },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization",
  },
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Medicare Advantage plans are available in Tallahassee, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tallahassee residents in Leon County have access to Medicare Advantage plans from carriers including Humana, Aetna, UnitedHealthcare, Florida Blue, WellCare, Simply Healthcare, Molina Healthcare, and Cigna. Plan availability varies by ZIP code. Our agents compare every available plan in your area at no cost.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Medicare Advantage better than Original Medicare in Tallahassee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your situation. Medicare Advantage often offers lower out-of-pocket costs and extra benefits like dental, vision, and hearing. However, it requires using a network of providers. Original Medicare with a Medigap supplement gives you more flexibility to see any Medicare-accepting doctor nationwide.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I keep my Tallahassee Memorial or Capital Regional doctors with Medicare Advantage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Medicare Advantage plans in Leon County include major Tallahassee providers like Tallahassee Memorial HealthCare, Capital Regional Medical Center, and HCA Florida Capital Hospital. However, network participation varies by plan and can change annually. We verify your specific doctors are in-network before recommending any plan.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a cost to get help comparing Medicare Advantage plans in Tallahassee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our services are completely free. We are licensed independent agents compensated by insurance carriers when you enroll. Your premium is identical whether you work with us or enroll directly. We are never paid more to recommend one plan over another.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans Tallahassee FL | Medicare Information Pro",
  description: "Compare Medicare Advantage plans in Tallahassee, FL. Independent agents serving Leon County compare 10+ carriers against your doctors and prescriptions - free.",
  keywords: [
    "medicare advantage plans tallahassee fl",
    "medicare advantage tallahassee florida",
    "medicare advantage leon county",
    "medicare advantage plans tallahassee",
    "best medicare advantage plans tallahassee",
  ],
  openGraph: {
    title: "Medicare Advantage Plans in Tallahassee, FL",
    description: "Compare Medicare Advantage plans in Tallahassee, FL. Independent agents serving Leon County compare 10+ carriers at no cost.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-tallahassee-florida",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-tallahassee-florida",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <MedicareAdvantagePlansTallahasseeClient />
      <Footer />
    </>
  );
}
