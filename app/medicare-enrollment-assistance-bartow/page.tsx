import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance Bartow FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-bartow",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Bartow, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-bartow#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Bartow, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-bartow",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bartow",
    "addressRegion": "FL",
    "postalCode": "33830",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bartow"
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
  title: "Medicare Enrollment Assistance Bartow FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Bartow, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
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
        city: "Bartow",
        cityFull: "Bartow, FL",
        county: "Polk County",
        slug: "bartow",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Bartow, FL",
        subheadline: "Bartow residents approaching Medicare eligibility can count on our local enrollment specialists for clear, no-cost guidance. We help you identify your enrollment window, compare every available plan, and enroll on time to avoid permanent penalties.",
        metaTitle: "Medicare Enrollment Assistance Bartow FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Bartow, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "Bartow Regional Medical Center",
          "AdventHealth Heart of Florida",
          "Polk County Health Department",
          "Lakeland Regional Health",
        ],
        neighborhoods: ["Bartow 33830", "Bartow 33831", "Lake Alfred 33850", "Auburndale 33823"],
        faqs: [
          {
            q: "When do I need to enroll in Medicare in Bartow?",
            a: "Your Initial Enrollment Period is a 7-month window that begins 3 months before your 65th birthday month and ends 3 months after. Enrolling late can result in a permanent Part B penalty of 10% for each 12-month period you delayed. Use our Medicare penalty calculator to see what a delay could cost you.",
          },
          {
            q: "Is Medicare enrollment assistance free in Bartow?",
            a: "Yes. Our enrollment assistance is completely free to Bartow residents. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "What Medicare plans are available in Bartow?",
            a: "Bartow residents in Polk County have access to Medicare Advantage plans from Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, and other carriers, as well as all standardized Medigap plan letters and Part D prescription drug plans. We compare every option available for your specific ZIP code. Learn more on our what is Medicare page.",
          },
          {
            q: "Can you help me if I am still working at 65 in Bartow?",
            a: "Yes. If you have employer coverage from a company with 20 or more employees, you may be able to delay Part B without penalty. We help Bartow residents in this situation determine the right time to enroll and avoid any unnecessary penalties.",
          },
          {
            q: "Do you serve areas near Bartow?",
            a: "Yes. In addition to Bartow, we serve all of Polk County and neighboring Hillsborough County communities including Plant City, Brandon, and Lakeland.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Consulting Bartow", href: "/medicare-consulting-services-bartow" },
          { label: "Medicare Enrollment Assistance Plant City", href: "/medicare-enrollment-assistance-plant-city" },
          { label: "Medicare Agent Bartow FL", href: "/medicare-insurance-agent-bartow-fl" },
          { label: "What Is Medicare", href: "/what-is-medicare" },
        ],
      }}
    />
    </>
  );
}
