import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance in Riverview FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-in-riverview-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Riverview, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-in-riverview-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Riverview, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-in-riverview-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Riverview",
    "addressRegion": "FL",
    "postalCode": "33578",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Riverview"
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
  title: "Medicare Enrollment Assistance in Riverview FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Riverview, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
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
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Riverview, FL",
        subheadline: "Riverview is one of Florida's fastest-growing communities, and thousands of residents are approaching Medicare age each year. Our specialists help you identify your enrollment window, compare plans, and enroll without penalties.",
        metaTitle: "Medicare Enrollment Assistance in Riverview FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Riverview, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "When do I need to enroll in Medicare in Riverview?", a: "Your Initial Enrollment Period is a 7-month window starting 3 months before your 65th birthday month. Enrolling late results in permanent Part B penalties of 10% per 12-month delay." },
          { q: "Is Medicare enrollment assistance free in Riverview?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What if I am still working when I turn 65 in Riverview?", a: "If you have employer coverage from an employer with 20 or more employees, you may be able to delay Part B without penalty. We help Riverview residents in this situation understand their options and determine the right time to enroll." },
          { q: "What Medicare plans are available during enrollment in Riverview?", a: "Riverview residents across ZIP codes 33569, 33578, and 33579 have access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code." },
          { q: "What is a Special Enrollment Period and do I qualify in Riverview?", a: "A Special Enrollment Period allows you to enroll outside of standard enrollment windows due to qualifying life events such as losing employer coverage, moving, or gaining eligibility for Medicaid. We help Riverview residents determine if they qualify." },
        ],
        relatedLinks: [
          { label: "Medicare Consulting Riverview", href: "/medicare-consulting-services-riverview" },
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl" },
          { label: "Medicare Enrollment Brandon", href: "/medicare-enrollment-assistance-in-brandon-fl" },
          { label: "Still Working?", href: "/still-working" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
