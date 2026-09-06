import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

// ─── Schema: WebPage ─────────────────────────────────────────────────────────
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://medicareinfopro.com/medicare-brandon-fl/#webpage",
  "name": "Medicare in Brandon, FL — Plans, Agents & Enrollment Help",
  "url": "https://medicareinfopro.com/medicare-brandon-fl/",
  "isPartOf": { "@id": "https://medicareinfopro.com/#website" },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization",
  },
  "description":
    "Complete guide to Medicare in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans across ZIP codes 33510, 33511, 33527, and 33594. Free help from local independent agents.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicareinfopro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Medicare in Brandon, FL", "item": "https://medicareinfopro.com/medicare-brandon-fl/" },
    ],
  },
} as const;

// ─── Schema: LocalBusiness ────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/#organization",
  "name": "Medicare Information Pro",
  "alternateName": "MIP",
  "description":
    "Independent Medicare insurance agency serving Brandon, FL and Hillsborough County. We compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
  "url": "https://medicareinfopro.com/medicare-brandon-fl/",
  "telephone": "+1-813-699-5559",
  "email": "info@medicareinfopro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9378,
    "longitude": -82.2859,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
  ],
  "areaServed": [
    { "@type": "City", "name": "Brandon", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Valrico" },
    { "@type": "City", "name": "Riverview" },
    { "@type": "City", "name": "Seffner" },
  ],
  "serviceType": [
    "Medicare Advantage Plan Comparison",
    "Medicare Supplement (Medigap) Enrollment",
    "Medicare Part D Prescription Drug Plans",
    "Medicare Enrollment Assistance",
    "Medicare Consulting",
  ],
  "priceRange": "Free",
  "sameAs": [
    "https://www.facebook.com/medicareinfopro",
  ],
} as const;

// ─── Schema: FAQ ──────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Medicare plans are available in Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brandon residents in ZIP codes 33510, 33511, 33527, and 33594 have access to Medicare Advantage HMO and PPO plans, Medicare Supplement (Medigap) plans A through N, and Part D prescription drug plans. For 2026, Hillsborough County has approximately 90 Medicare Advantage plans from 7 carriers, with an average premium around $11.50 per month.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a Medicare agent physically located in Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511. Our licensed agents serve Brandon, Valrico, Riverview, and Seffner. You can call us at 813-699-5559 or schedule a free in-person, phone, or video consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "When can I enroll in Medicare if I am turning 65 in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Initial Enrollment Period (IEP) is a 7-month window that starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. Enrolling in Part B late results in a permanent 10% premium surcharge for each 12-month period you delayed. Our Brandon agents can calculate your exact enrollment window at no cost.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between Medicare Advantage and Medigap in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Advantage (Part C) replaces Original Medicare with a private plan that often includes dental, vision, and drug coverage, typically for a low monthly premium. Medigap supplements Original Medicare by covering most out-of-pocket costs like copays and deductibles. The right choice depends on your doctors, prescriptions, travel habits, and budget. Brandon-based MIP agents compare both paths side-by-side at no cost.",
      },
    },
    {
      "@type": "Question",
      "name": "Which hospitals in Brandon accept Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HCA Florida Brandon Hospital and AdventHealth Brandon both accept Original Medicare. Most Medicare Advantage plans in Hillsborough County also include these hospitals in-network, but network participation varies by carrier and plan year. Our agents verify your specific hospital and doctor networks before recommending any plan.",
      },
    },
    {
      "@type": "Question",
      "name": "Is working with a Medicare agent in Brandon free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely free. Insurance carriers pay our agents a commission. Your monthly premium is identical whether you enroll through us or directly with the carrier. There is no fee, no obligation, and no pressure.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Annual Enrollment Period and how does it affect Brandon residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Annual Enrollment Period (AEP) runs October 15 through December 7 each year. During this window, Medicare beneficiaries in Brandon can switch Medicare Advantage plans, switch from Medicare Advantage back to Original Medicare, or change their Part D drug plan. Changes take effect January 1. Our Brandon office is open extended hours during AEP.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I keep my Brandon doctors if I switch Medicare plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the plan. Original Medicare with a Medigap policy gives you the broadest access since any provider that accepts Medicare is covered. Medicare Advantage plans have specific networks. Our agents check your exact doctors and specialists against every plan's current provider directory before making a recommendation.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare in Brandon, FL — Plans, Agents & Free Enrollment Help",
  description:
    "Complete Medicare guide for Brandon, FL (33510, 33511, 33527). Compare 90+ Advantage plans, Medigap rates, and Part D options with a local independent agent at 915 Oakfield Dr. Free.",
  alternates: { canonical: "https://medicareinfopro.com/medicare-brandon-fl/" },
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
          pageType: "local-agent",
          headline: "Medicare in Brandon, FL",
          subheadline:
            "Brandon's locally-based independent Medicare agency. We compare every Medicare Advantage, Medigap, and Part D plan available in ZIP codes 33510, 33511, 33527, and 33594 — at no cost to you. Our office is at 915 Oakfield Dr, Brandon.",
          bodyText:
            "Hillsborough County has approximately 90 Medicare Advantage plans for 2026 from 7 carriers, with average premiums around $11.50 per month. Medigap premiums in Brandon range from $65 to $803 per month depending on your age, plan letter, and carrier. Our independent agents are not tied to any single carrier, so our only goal is finding the right plan for your doctors, prescriptions, and budget.",
          metaTitle: "Medicare in Brandon, FL — Plans, Agents & Free Enrollment Help",
          metaDescription:
            "Complete Medicare guide for Brandon, FL (33510, 33511, 33527). Compare 90+ Advantage plans, Medigap rates, and Part D options with a local independent agent at 915 Oakfield Dr. Free.",
          nearbyLandmarks: [
            "HCA Florida Brandon Hospital",
            "AdventHealth Brandon",
            "BayCare Medical Group Brandon",
            "St. Joseph's Hospital",
            "Brandon Regional Medical Center",
          ],
          neighborhoods: [
            "Brandon 33510",
            "Brandon 33511",
            "Brandon 33527",
            "Valrico 33594",
            "Seffner 33584",
            "Riverview 33578",
          ],
          agent: {
            name: "Greg Wohl",
            title: "Licensed Medicare Insurance Agent",
            location: "Brandon, FL",
            photoUrl: "https://medicareinfopro.com/images/greg-wohl.jpg",
          },
          guidanceSection: {
            title: "Prepare for a Medicare Plan Conversation",
            intro: "A short preparation list can help you make the most of a Medicare conversation and compare options that fit your situation.",
            items: [
              "Your current Medicare card and any plan materials you have received.",
              "The names of doctors, hospitals, and pharmacies you prefer to use.",
              "A current list of prescription medications, including dosage and quantity.",
              "Questions about enrollment timing, plan costs, coverage, or provider access.",
            ],
          },
          faqs: [
            {
              q: "What Medicare plans are available in Brandon, FL?",
              a: "Brandon residents in ZIP codes 33510, 33511, 33527, and 33594 have access to Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans. For 2026, Hillsborough County has approximately 90 Medicare Advantage plans from 7 carriers, with an average premium around $11.50 per month.",
            },
            {
              q: "Is there a Medicare agent physically located in Brandon?",
              a: "Yes. Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511. Our licensed agents serve Brandon, Valrico, Riverview, and Seffner. Call 813-699-5559 or schedule a free in-person, phone, or video consultation.",
            },
            {
              q: "When can I enroll in Medicare if I am turning 65 in Brandon?",
              a: "Your Initial Enrollment Period is a 7-month window: 3 months before your 65th birthday month, your birthday month itself, and 3 months after. Enrolling in Part B late results in a permanent 10% surcharge for each 12-month period you delayed. Our Brandon agents can calculate your exact window at no cost.",
            },
            {
              q: "What is the difference between Medicare Advantage and Medigap in Brandon?",
              a: "Medicare Advantage replaces Original Medicare with a private plan that often includes dental, vision, and drug coverage at a low monthly premium. Medigap supplements Original Medicare by covering most out-of-pocket costs. The right choice depends on your doctors, prescriptions, travel habits, and budget. Our agents compare both paths side-by-side at no cost.",
            },
            {
              q: "Which hospitals in Brandon accept Medicare?",
              a: "HCA Florida Brandon Hospital and AdventHealth Brandon both accept Original Medicare. Most Medicare Advantage plans in Hillsborough County include these hospitals in-network, but network participation varies by carrier and plan year. Our agents verify your specific hospital and doctor networks before recommending any plan.",
            },
            {
              q: "Is working with a Medicare agent in Brandon free?",
              a: "Yes, completely free. Insurance carriers pay our agents a commission. Your monthly premium is identical whether you enroll through us or directly with the carrier. There is no fee, no obligation, and no pressure.",
            },
            {
              q: "What is the Annual Enrollment Period and how does it affect Brandon residents?",
              a: "The Annual Enrollment Period runs October 15 through December 7 each year. During this window, Brandon beneficiaries can switch Medicare Advantage plans, switch back to Original Medicare, or change their Part D drug plan. Changes take effect January 1. Our Brandon office is open extended hours during AEP.",
            },
            {
              q: "Can I keep my Brandon doctors if I switch Medicare plans?",
              a: "It depends on the plan. Original Medicare with a Medigap policy gives you the broadest access since any provider that accepts Medicare is covered. Medicare Advantage plans have specific networks. Our agents check your exact doctors and specialists against every plan's current provider directory before making a recommendation.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent in Brandon", href: "/medicare-agent-brandon/" },
            { label: "Medicare Insurance Agent Brandon FL", href: "/medicare-insurance-agent-brandon-fl/" },
            { label: "Medicare Advantage Plans Brandon", href: "/medicare-advantage-plans-brandon-florida/" },
            { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon/" },
            { label: "Medicare Enrollment Assistance Brandon", href: "/medicare-enrollment-assistance-brandon/" },
            { label: "Compare Medicare Plans Brandon", href: "/comparing-medicare-plans-brandon/" },
            { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon/" },
            { label: "Health Insurance Broker Brandon", href: "/health-insurance-broker-brandon/" },
            { label: "Free Medicare Kit", href: "/free-medicare-kit/" },
            { label: "Free Consultation", href: "/free-consultation/" },
          ],
        }}
      />
    </>
  );
}
