import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance in Wimauma FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-in-wimauma-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Wimauma, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-in-wimauma-fl#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Wimauma, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-in-wimauma-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wimauma",
    "addressRegion": "FL",
    "postalCode": "33598",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Wimauma"
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
  title: "Medicare Enrollment Assistance in Wimauma FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Wimauma, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
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
        city: "Wimauma",
        cityFull: "Wimauma, FL",
        county: "Hillsborough County",
        slug: "wimauma",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Wimauma, FL",
        subheadline: "Medicare enrollment has strict deadlines that can result in permanent penalties if missed. Our specialists help Wimauma residents identify their enrollment window, compare plans, and enroll correctly the first time.",
        metaTitle: "Medicare Enrollment Assistance in Wimauma FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Wimauma, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "South Bay Hospital",
          "HCA Florida South Tampa Hospital",
        ],
        neighborhoods: ["Wimauma 33598", "Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572"],
        faqs: [
          { q: "When do I need to enroll in Medicare in Wimauma?", a: "Your Initial Enrollment Period is a 7-month window starting 3 months before your 65th birthday month. Enrolling late results in permanent Part B penalties of 10% per 12-month delay." },
          { q: "Is Medicare enrollment assistance free in Wimauma?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What Medicare plans are available during enrollment in Wimauma?", a: "Wimauma (ZIP 33598) has access to Medicare Advantage, Medigap, and Part D plans from multiple carriers. We compare all available options for your specific ZIP code." },
          { q: "Can I get enrollment help by phone in Wimauma?", a: "Yes. We offer free phone and video enrollment assistance for Wimauma residents who prefer not to travel to our Brandon office." },
          { q: "What is a Special Enrollment Period and do I qualify in Wimauma?", a: "A Special Enrollment Period allows you to enroll outside of standard windows due to qualifying life events such as losing employer coverage, moving, or gaining eligibility for Medicaid. We help Wimauma residents determine if they qualify." },
        ],
        relatedLinks: [
          { label: "Medicare Consulting Wimauma", href: "/medicare-consulting-services-wimauma" },
          { label: "Medicare Insurance Agent Wimauma", href: "/medicare-insurance-agent-wimauma-fl" },
          { label: "Medicare Enrollment Sun City Center", href: "/medicare-enrollment-assistance-in-sun-city-center-fl" },
          { label: "Enrollment Timeline", href: "/enrollment-timeline" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
