import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance Apollo Beach FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-apollo-beach",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Apollo Beach, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-apollo-beach#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Apollo Beach, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-apollo-beach",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Apollo Beach",
    "addressRegion": "FL",
    "postalCode": "33572",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Apollo Beach"
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
  title: "Medicare Enrollment Assistance Apollo Beach FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Apollo Beach, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
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
        city: "Apollo Beach",
        cityFull: "Apollo Beach, FL",
        county: "Hillsborough County",
        slug: "apollo-beach",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Apollo Beach, FL",
        subheadline: "Missing your Medicare enrollment window can result in permanent penalties. Our Apollo Beach enrollment specialists help you identify your exact enrollment dates, compare plans from 17+ carriers, and enroll correctly the first time.",
        metaTitle: "Medicare Enrollment Assistance Apollo Beach FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Apollo Beach, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "HCA Florida South Shore Hospital",
          "AdventHealth Brandon",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Apollo Beach",
        ],
        neighborhoods: ["Apollo Beach 33572", "Ruskin 33570", "Sun City Center 33573", "Gibsonton 33534"],
        faqs: [
          {
            q: "When do I need to enroll in Medicare in Apollo Beach?",
            a: "Your Initial Enrollment Period is a 7-month window that starts 3 months before your 65th birthday month and ends 3 months after. Enrolling late can result in a permanent Part B penalty of 10% for each 12-month period you delayed. Visit our enrollment timeline page for a full breakdown of every enrollment period.",
          },
          {
            q: "Is Medicare enrollment assistance free in Apollo Beach?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly. There is no cost to you at any stage.",
          },
          {
            q: "What if I am still working when I turn 65 in Apollo Beach?",
            a: "If you have employer coverage from a company with 20 or more employees, you may be able to delay Part B without penalty. We help Apollo Beach residents in this situation understand their options. See our do I need Medicare page for more details.",
          },
          {
            q: "What is the Annual Enrollment Period for Apollo Beach residents?",
            a: "The Annual Enrollment Period runs October 15 through December 7 each year. During this window, Apollo Beach residents can switch Medicare Advantage plans, change Part D drug plans, or move between Original Medicare and Medicare Advantage.",
          },
          {
            q: "Can I get help if I missed my Medicare enrollment window?",
            a: "Yes. If you missed your Initial Enrollment Period, you may qualify for a Special Enrollment Period depending on your circumstances. We help Apollo Beach residents understand their options and minimize any penalties.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Enrollment Assistance in Apollo Beach FL", href: "/medicare-enrollment-assistance-in-apollo-beach-fl" },
          { label: "Medicare Consulting Apollo Beach", href: "/medicare-consulting-services-apollo-beach" },
          { label: "Medicare Agent Apollo Beach", href: "/local-medicare-agent-apollo-beach" },
          { label: "Medicare Penalty Calculator", href: "/medicare-penalty-calculator" },
        ],
      }}
    />
    </>
  );
}
