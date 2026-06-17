import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance Temple Terrace FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-temple-terrace",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Temple Terrace, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-temple-terrace#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Temple Terrace, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-temple-terrace",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Temple Terrace",
    "addressRegion": "FL",
    "postalCode": "33617",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Temple Terrace"
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
  title: "Medicare Enrollment Assistance Temple Terrace FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Temple Terrace, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
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
        city: "Temple Terrace",
        cityFull: "Temple Terrace, FL",
        county: "Hillsborough County",
        slug: "temple-terrace",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Temple Terrace, FL",
        subheadline: "Temple Terrace residents approaching Medicare eligibility can rely on our independent enrollment specialists for clear, unbiased guidance. We compare plans from 17+ carriers, identify your exact enrollment window, and make sure you enroll on time to avoid permanent penalties.",
        metaTitle: "Medicare Enrollment Assistance Temple Terrace FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Temple Terrace, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "AdventHealth Tampa",
          "Tampa General Hospital",
          "University of South Florida Health",
          "BayCare Medical Group Temple Terrace",
        ],
        neighborhoods: ["Temple Terrace 33617", "Temple Terrace 33637", "New Tampa 33647", "Brandon 33510"],
        faqs: [
          {
            q: "When do I need to enroll in Medicare in Temple Terrace?",
            a: "Your Initial Enrollment Period is a 7-month window that starts 3 months before your 65th birthday month and ends 3 months after. A late Part B enrollment results in a permanent 10% penalty for each 12-month period you delayed. Use our Medicare penalty calculator to see what a delay could cost you.",
          },
          {
            q: "Is Medicare enrollment assistance free in Temple Terrace?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "What Medicare plans are available in Temple Terrace?",
            a: "Temple Terrace residents in Hillsborough County have access to Medicare Advantage plans from Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, and other carriers, plus all standardized Medigap plan letters and Part D drug plans. We compare every option available for your specific ZIP code.",
          },
          {
            q: "Can you help me if I am still working at 65 in Temple Terrace?",
            a: "Yes. If you have employer coverage from a company with 20 or more employees, you may be able to delay Part B without penalty. Our do I need Medicare page explains this scenario in detail.",
          },
          {
            q: "Do you serve areas near Temple Terrace?",
            a: "Yes. We serve all of Hillsborough County including Brandon, Valrico, New Tampa, and the greater Tampa area.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Temple Terrace", href: "/local-medicare-agent-temple-terrace" },
          { label: "Medicare Insurance Agent Temple Terrace FL", href: "/medicare-insurance-agent-temple-terrace-fl" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
          { label: "Do I Need Medicare", href: "/do-i-need-medicare" },
        ],
      }}
    />
    </>
  );
}
