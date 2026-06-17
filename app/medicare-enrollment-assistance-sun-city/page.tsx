import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance Sun City FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-sun-city",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Sun City, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-sun-city#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Sun City Center, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-sun-city",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sun City Center",
    "addressRegion": "FL",
    "postalCode": "33573",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Sun City Center"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance Sun City FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Sun City, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
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
      <LocalAgentPage
      config={{
        city: "Sun City",
        cityFull: "Sun City, FL",
        county: "Hillsborough County",
        slug: "sun-city",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Sun City, FL",
        subheadline: "Sun City and Sun City Center are home to one of the largest concentrations of Medicare beneficiaries in Florida. Our independent enrollment specialists help residents compare every available plan, verify their doctors are in-network, and enroll on time at no cost.",
        metaTitle: "Medicare Enrollment Assistance Sun City FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Sun City, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "HCA Florida South Shore Hospital",
          "AdventHealth Sun City Center",
          "Sun City Center Medical Associates",
          "St. Joseph's Hospital South",
        ],
        neighborhoods: ["Sun City 33586", "Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572"],
        faqs: [
          {
            q: "When do I need to enroll in Medicare in Sun City?",
            a: "Your Initial Enrollment Period is a 7-month window that starts 3 months before your 65th birthday month and ends 3 months after. Enrolling late can result in a permanent Part B penalty of 10% for each 12-month period you delayed. See our turning 65 guide for a complete enrollment timeline.",
          },
          {
            q: "Is Medicare enrollment assistance free in Sun City?",
            a: "Yes. Our enrollment assistance is completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "What Medicare plans are popular in Sun City?",
            a: "Sun City residents have access to a wide range of Medicare Advantage plans with extra benefits like dental, vision, hearing, and fitness memberships, as well as comprehensive Medigap plans for those who prefer Original Medicare with predictable costs. Visit our medicare supplement page to compare Medigap options.",
          },
          {
            q: "Can you help me review my current Medicare plan in Sun City?",
            a: "Absolutely. We recommend an annual plan review for every Sun City resident. Plans change their premiums, formularies, and networks every year. We review your plan every Annual Enrollment Period at no charge.",
          },
          {
            q: "Do you serve areas near Sun City?",
            a: "Yes. We serve all of South Shore Hillsborough County including Sun City Center, Ruskin, Apollo Beach, Wimauma, and Riverview.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Consulting Sun City", href: "/medicare-consulting-services-sun-city" },
          { label: "Medicare Enrollment Assistance Sun City Center FL", href: "/medicare-enrollment-assistance-in-sun-city-center-fl" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
          { label: "Turning 65 Guide", href: "/turning-65-and-becoming-eligible-for-medicare" },
        ],
      }}
    />
    </>
  );
}
