import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Free Medicare enrollment assistance in Brandon, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-enrollment-assistance-brandon#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Brandon, FL.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-brandon",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Brandon"
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
  title: 'Free Medicare Enrollment Help in Brandon, FL — Don\'t Miss Your Deadline',
  description: 'Missing your Medicare enrollment window means lifetime penalties. Brandon-based MIP agents walk you through every step — free, same-day callbacks available. Call 813-699-5559.',
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
        city: "Brandon",
        cityFull: "Brandon, FL",
        county: "Hillsborough County",
        slug: "brandon",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Brandon, FL",
        subheadline: "Brandon is home to thousands of Medicare-eligible residents, and our local enrollment specialists are here to help every one of them. We compare plans from 17+ carriers, identify your exact enrollment window, and make sure you never pay a penalty you did not have to.",
        metaTitle: "Medicare Enrollment Assistance Brandon FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Brandon, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          {
            q: "When do I need to enroll in Medicare in Brandon?",
            a: "Your Initial Enrollment Period is a 7-month window that starts 3 months before your 65th birthday month and ends 3 months after. Enrolling late can result in a permanent Part B penalty of 10% for each 12-month period you delayed. Our enrollment timeline page walks through every enrollment period in detail.",
          },
          {
            q: "Is Medicare enrollment assistance free in Brandon?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is identical whether you work with us or enroll directly. There is no cost to you at any stage.",
          },
          {
            q: "What is the difference between Medicare Advantage and Medigap in Brandon?",
            a: "Medicare Advantage replaces Original Medicare with a private plan that often includes extra benefits like dental, vision, and hearing. Medigap works alongside Original Medicare to cover the 20% cost-sharing gap. Our comparing Medicare plans Brandon page explains both options in detail.",
          },
          {
            q: "What is the Annual Enrollment Period for Brandon residents?",
            a: "The Annual Enrollment Period runs October 15 through December 7 each year. During this window, Brandon residents can switch Medicare Advantage plans, change Part D drug plans, or move between Original Medicare and Medicare Advantage.",
          },
          {
            q: "Can I get help if I missed my Medicare enrollment window in Brandon?",
            a: "Yes. If you missed your Initial Enrollment Period, you may qualify for a Special Enrollment Period. We help Brandon residents understand their options and minimize any penalties. Use our Medicare penalty calculator to estimate what a delay may have cost.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Enrollment Assistance in Brandon FL", href: "/medicare-enrollment-assistance-in-brandon-fl" },
          { label: "Comparing Medicare Plans Brandon", href: "/comparing-medicare-plans-brandon" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Penalty Calculator", href: "/medicare-penalty-calculator" },
        ],
      }}
    />
    </>
  );
}
