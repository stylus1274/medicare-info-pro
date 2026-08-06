import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://medicareinfopro.com/free-medicare-enrollment-help-brandon-fl/#webpage",
  "name": "Free Medicare Enrollment Help in Brandon, FL",
  "url": "https://medicareinfopro.com/free-medicare-enrollment-help-brandon-fl/",
  "isPartOf": { "@id": "https://medicareinfopro.com/#website" },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization",
  },
  "description":
    "Free Medicare enrollment help in Brandon, FL. Licensed local agents at 915 Oakfield Dr help you enroll on time, avoid lifetime penalties, and choose the right plan from 17+ carriers.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicareinfopro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Medicare in Brandon, FL", "item": "https://medicareinfopro.com/medicare-brandon-fl/" },
      { "@type": "ListItem", "position": 3, "name": "Free Enrollment Help", "item": "https://medicareinfopro.com/free-medicare-enrollment-help-brandon-fl/" },
    ],
  },
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/#organization",
  "name": "Medicare Information Pro",
  "description": "Free Medicare enrollment assistance in Brandon, FL. Licensed independent agents help you enroll on time and avoid costly penalties.",
  "url": "https://medicareinfopro.com/free-medicare-enrollment-help-brandon-fl/",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US",
  },
  "priceRange": "Free",
  "areaServed": { "@type": "City", "name": "Brandon" },
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Medicare Initial Enrollment Period for someone turning 65 in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Initial Enrollment Period (IEP) is a 7-month window: it starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. For example, if you turn 65 in June, your IEP runs from March 1 through September 30. Enrolling in Part B after this window results in a permanent 10% premium surcharge for each 12-month period you delayed.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Medicare enrollment help in Brandon really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Information Pro's enrollment assistance is completely free. Insurance carriers pay licensed agents a commission. Your monthly premium is identical whether you enroll through us or directly with the carrier. There is no fee, no obligation, and no pressure to choose any specific plan.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens if I miss my Medicare enrollment deadline in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Missing your Initial Enrollment Period for Part B results in a permanent 10% premium surcharge for each 12-month period you went without coverage. For Part D, the penalty is 1% of the national base premium for each month you delayed. These penalties last for as long as you have Medicare. Our Brandon agents help you identify your exact deadlines and avoid these costly mistakes.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I still enroll in Medicare if I am still working at 65 in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your employer's size. If your employer has 20 or more employees, you may be able to delay Part B without penalty while covered by employer insurance. If your employer has fewer than 20 employees, Medicare becomes primary and you should enroll during your IEP. Our Brandon agents review your specific situation at no cost.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Annual Enrollment Period and can I change plans in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Annual Enrollment Period runs October 15 through December 7 each year. During this window, Brandon residents can switch Medicare Advantage plans, switch from Medicare Advantage back to Original Medicare, or change their Part D drug plan. Changes take effect January 1. Our office is open extended hours during AEP.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a Special Enrollment Period and do I qualify in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Special Enrollment Period (SEP) allows you to enroll in or change Medicare outside the standard windows due to qualifying life events, such as losing employer coverage, moving to a new service area, or qualifying for Extra Help. Our Brandon agents can determine whether you qualify for an SEP and help you act within the required timeframe.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Free Medicare Enrollment Help in Brandon, FL — Avoid Lifetime Penalties",
  description:
    "Missing your Medicare enrollment window means permanent premium surcharges. Brandon-based MIP agents at 915 Oakfield Dr walk you through every step. Free, same-day callbacks. Call 813-699-5559.",
  alternates: { canonical: "https://medicareinfopro.com/free-medicare-enrollment-help-brandon-fl/" },
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
      <LocalAgentPage
        config={{
          city: "Brandon",
          cityFull: "Brandon, FL",
          county: "Hillsborough County",
          slug: "brandon",
          pageType: "enrollment",
          headline: "Free Medicare Enrollment Help in Brandon, FL",
          subheadline:
            "Missing your Medicare enrollment window results in permanent premium surcharges that last for life. Our licensed agents at 915 Oakfield Dr, Brandon walk you through every enrollment period, calculate your exact deadlines, and help you choose the right plan from 17+ carriers at no cost.",
          bodyText:
            "Medicare has four main enrollment windows: the Initial Enrollment Period (7 months around your 65th birthday), the General Enrollment Period (January 1 through March 31 each year), the Annual Enrollment Period (October 15 through December 7), and Special Enrollment Periods triggered by qualifying life events. Getting the timing wrong can mean a 10% Part B penalty or a 1% per month Part D penalty, both permanent. Our Brandon agents specialize in enrollment timing and have helped hundreds of Hillsborough County residents enroll correctly the first time.",
          metaTitle: "Free Medicare Enrollment Help in Brandon, FL — Avoid Lifetime Penalties",
          metaDescription:
            "Missing your Medicare enrollment window means permanent premium surcharges. Brandon-based MIP agents at 915 Oakfield Dr walk you through every step. Free, same-day callbacks. Call 813-699-5559.",
          nearbyLandmarks: [
            "HCA Florida Brandon Hospital",
            "AdventHealth Brandon",
            "BayCare Medical Group Brandon",
          ],
          neighborhoods: [
            "Brandon 33510",
            "Brandon 33511",
            "Brandon 33527",
            "Valrico 33594",
            "Seffner 33584",
          ],
          faqs: [
            {
              q: "What is the Medicare Initial Enrollment Period for someone turning 65 in Brandon?",
              a: "Your Initial Enrollment Period (IEP) is a 7-month window: it starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. For example, if you turn 65 in June, your IEP runs from March 1 through September 30. Enrolling in Part B after this window results in a permanent 10% premium surcharge for each 12-month period you delayed.",
            },
            {
              q: "Is Medicare enrollment help in Brandon really free?",
              a: "Yes. Medicare Information Pro's enrollment assistance is completely free. Insurance carriers pay licensed agents a commission. Your monthly premium is identical whether you enroll through us or directly with the carrier. There is no fee, no obligation, and no pressure to choose any specific plan.",
            },
            {
              q: "What happens if I miss my Medicare enrollment deadline in Brandon?",
              a: "Missing your Initial Enrollment Period for Part B results in a permanent 10% premium surcharge for each 12-month period you went without coverage. For Part D, the penalty is 1% of the national base premium for each month you delayed. These penalties last for as long as you have Medicare. Our Brandon agents help you identify your exact deadlines and avoid these costly mistakes.",
            },
            {
              q: "Can I still enroll in Medicare if I am still working at 65 in Brandon?",
              a: "It depends on your employer's size. If your employer has 20 or more employees, you may be able to delay Part B without penalty while covered by employer insurance. If your employer has fewer than 20 employees, Medicare becomes primary and you should enroll during your IEP. Our Brandon agents review your specific situation at no cost.",
            },
            {
              q: "What is the Annual Enrollment Period and can I change plans in Brandon?",
              a: "The Annual Enrollment Period runs October 15 through December 7 each year. During this window, Brandon residents can switch Medicare Advantage plans, switch from Medicare Advantage back to Original Medicare, or change their Part D drug plan. Changes take effect January 1. Our office is open extended hours during AEP.",
            },
            {
              q: "What is a Special Enrollment Period and do I qualify in Brandon?",
              a: "A Special Enrollment Period (SEP) allows you to enroll in or change Medicare outside the standard windows due to qualifying life events, such as losing employer coverage, moving to a new service area, or qualifying for Extra Help. Our Brandon agents can determine whether you qualify for an SEP and help you act within the required timeframe.",
            },
          ],
          relatedLinks: [
            { label: "Medicare in Brandon, FL (Hub)", href: "/medicare-brandon-fl/" },
            { label: "Medicare Agent in Brandon", href: "/medicare-agent-brandon/" },
            { label: "Medicare Enrollment Assistance Brandon", href: "/medicare-enrollment-assistance-brandon/" },
            { label: "Turning 65 in Brandon, FL", href: "/turning-65-brandon-fl/" },
            { label: "Medicare Advantage Plans Brandon", href: "/medicare-advantage-plans-brandon-florida/" },
            { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon/" },
            { label: "Free Medicare Kit", href: "/free-medicare-kit/" },
            { label: "Free Consultation", href: "/free-consultation/" },
          ],
        }}
      />
    </>
  );
}
