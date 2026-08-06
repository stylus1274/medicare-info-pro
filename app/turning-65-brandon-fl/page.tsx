import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://medicareinfopro.com/turning-65-brandon-fl/#webpage",
  "name": "Turning 65 in Brandon, FL — Your Medicare Guide",
  "url": "https://medicareinfopro.com/turning-65-brandon-fl/",
  "isPartOf": { "@id": "https://medicareinfopro.com/#website" },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization",
  },
  "description":
    "Turning 65 in Brandon, FL? This guide covers your Medicare enrollment window, plan options in Hillsborough County, local hospitals, and how to get free help from a licensed local agent.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://medicareinfopro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Medicare in Brandon, FL", "item": "https://medicareinfopro.com/medicare-brandon-fl/" },
      { "@type": "ListItem", "position": 3, "name": "Turning 65 in Brandon", "item": "https://medicareinfopro.com/turning-65-brandon-fl/" },
    ],
  },
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/#organization",
  "name": "Medicare Information Pro",
  "description": "Local Medicare guidance for Brandon, FL residents turning 65. Free consultations at 915 Oakfield Dr.",
  "url": "https://medicareinfopro.com/turning-65-brandon-fl/",
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
      "name": "When should I start the Medicare process if I am turning 65 in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start 3 to 4 months before your 65th birthday. Your Initial Enrollment Period opens 3 months before your birthday month, so you can enroll in Part A and Part B before your coverage actually starts. This gives you time to also compare Medicare Advantage and Medigap plans with a local Brandon agent before your coverage begins.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I automatically get Medicare when I turn 65 in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are already receiving Social Security benefits, you will be automatically enrolled in Medicare Part A and Part B starting the month you turn 65. If you are not yet collecting Social Security, you must actively enroll through Social Security. Our Brandon agents can walk you through the enrollment process at no cost.",
      },
    },
    {
      "@type": "Question",
      "name": "What Medicare plans are available to Brandon residents turning 65?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brandon residents turning 65 in ZIP codes 33510, 33511, 33527, and 33594 can choose from Original Medicare (Parts A and B) with or without a Medigap supplement and Part D drug plan, or a Medicare Advantage plan (Part C) that bundles hospital, medical, and often drug coverage. For 2026, Hillsborough County has approximately 90 Medicare Advantage plans from 7 carriers.",
      },
    },
    {
      "@type": "Question",
      "name": "Will my Brandon doctors accept my new Medicare plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All providers who accept Medicare accept Original Medicare. If you choose a Medicare Advantage plan, network participation varies by carrier and plan. HCA Florida Brandon Hospital and AdventHealth Brandon are in-network for most Hillsborough County Medicare Advantage plans, but your specific specialists may vary. Our agents verify your exact doctors before recommending any plan.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Medigap open enrollment window for Brandon residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Medigap open enrollment window is a 6-month period that starts the month you are both 65 or older and enrolled in Medicare Part B. During this window, no insurer can deny you a Medigap policy or charge you more due to pre-existing conditions. After this window closes, you may be subject to medical underwriting. This is the most important window for Brandon residents to act in.",
      },
    },
    {
      "@type": "Question",
      "name": "I am still working at 65 in Brandon. Do I need to enroll in Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your employer's size. If your employer has 20 or more employees, your employer plan is primary and you can delay Part B without penalty. If your employer has fewer than 20 employees, Medicare becomes primary and you should enroll during your Initial Enrollment Period to avoid a lifetime penalty. Call our Brandon office at 813-699-5559 for a free review of your specific situation.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does Medicare cost for someone turning 65 in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most people pay $0 for Medicare Part A (hospital) if they or their spouse worked at least 40 quarters. Part B costs $185.00 per month in 2026 for most people (higher for higher incomes). Medicare Advantage plans in Hillsborough County average around $11.50 per month. Medigap plans in Brandon range from $65 to $803 per month depending on your age, plan letter, and carrier.",
      },
    },
    {
      "@type": "Question",
      "name": "Where can I get free Medicare help in Brandon when I turn 65?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511. Our licensed independent agents offer free in-person, phone, and video consultations. We compare every plan available in your ZIP code and help you enroll correctly. Call 813-699-5559 or visit medicareinfopro.com to schedule.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Turning 65 in Brandon, FL — Your Complete Medicare Guide (2026)",
  description:
    "Turning 65 in Brandon? Your Medicare enrollment window opens 3 months before your birthday. Local MIP agents at 915 Oakfield Dr compare 90+ plans in Hillsborough County. Free help.",
  alternates: { canonical: "https://medicareinfopro.com/turning-65-brandon-fl/" },
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
          headline: "Turning 65 in Brandon, FL — Your Medicare Guide",
          subheadline:
            "Your Medicare enrollment window opens 3 months before your 65th birthday. Brandon-based MIP agents at 915 Oakfield Dr help you understand your options, compare every plan available in your ZIP code, and enroll correctly the first time. Missing this window means permanent penalties.",
          bodyText:
            "For 2026, Hillsborough County has approximately 90 Medicare Advantage plans from 7 carriers, averaging $11.50 per month. Medigap premiums for a 65-year-old in Brandon range from $65 to $803 per month depending on the plan letter and carrier. Part B costs $185.00 per month for most people. Your Medigap open enrollment window, which opens when you first enroll in Part B at 65, is the single most important window in your Medicare journey: it is the only time insurers cannot deny you coverage or charge more for pre-existing conditions. Our local agents help you use it wisely.",
          metaTitle: "Turning 65 in Brandon, FL — Your Complete Medicare Guide (2026)",
          metaDescription:
            "Turning 65 in Brandon? Your Medicare enrollment window opens 3 months before your birthday. Local MIP agents at 915 Oakfield Dr compare 90+ plans in Hillsborough County. Free help.",
          nearbyLandmarks: [
            "HCA Florida Brandon Hospital",
            "AdventHealth Brandon",
            "BayCare Medical Group Brandon",
            "St. Joseph's Hospital",
          ],
          neighborhoods: [
            "Brandon 33510",
            "Brandon 33511",
            "Brandon 33527",
            "Valrico 33594",
            "Seffner 33584",
            "Riverview 33578",
          ],
          testimonials: [
            {
              name: "Patricia L.",
              location: "Brandon, FL 33511",
              text: "I was nervous about losing my doctors when I turned 65. The MIP team verified every one of my specialists was in-network before I enrolled. That peace of mind was worth everything.",
            },
            {
              name: "Robert K.",
              location: "Brandon, FL 33527",
              text: "I had no idea my Medigap window was so short. Greg explained everything clearly and got me enrolled in Plan G before the window closed. I would have missed it without his help.",
            },
            {
              name: "Sandra M.",
              location: "Brandon, FL 33511",
              text: "I had no idea where to start with Medicare. Greg walked me through everything step by step and found me a plan that covers my doctors and costs less than I expected.",
            },
          ],
          faqs: [
            {
              q: "When should I start the Medicare process if I am turning 65 in Brandon?",
              a: "Start 3 to 4 months before your 65th birthday. Your Initial Enrollment Period opens 3 months before your birthday month, so you can enroll in Part A and Part B before your coverage actually starts. This gives you time to also compare Medicare Advantage and Medigap plans with a local Brandon agent before your coverage begins.",
            },
            {
              q: "Do I automatically get Medicare when I turn 65 in Brandon?",
              a: "If you are already receiving Social Security benefits, you will be automatically enrolled in Medicare Part A and Part B starting the month you turn 65. If you are not yet collecting Social Security, you must actively enroll through Social Security. Our Brandon agents can walk you through the enrollment process at no cost.",
            },
            {
              q: "What Medicare plans are available to Brandon residents turning 65?",
              a: "Brandon residents turning 65 in ZIP codes 33510, 33511, 33527, and 33594 can choose from Original Medicare (Parts A and B) with or without a Medigap supplement and Part D drug plan, or a Medicare Advantage plan (Part C) that bundles hospital, medical, and often drug coverage. For 2026, Hillsborough County has approximately 90 Medicare Advantage plans from 7 carriers.",
            },
            {
              q: "Will my Brandon doctors accept my new Medicare plan?",
              a: "All providers who accept Medicare accept Original Medicare. If you choose a Medicare Advantage plan, network participation varies by carrier and plan. HCA Florida Brandon Hospital and AdventHealth Brandon are in-network for most Hillsborough County Medicare Advantage plans, but your specific specialists may vary. Our agents verify your exact doctors before recommending any plan.",
            },
            {
              q: "What is the Medigap open enrollment window for Brandon residents?",
              a: "Your Medigap open enrollment window is a 6-month period that starts the month you are both 65 or older and enrolled in Medicare Part B. During this window, no insurer can deny you a Medigap policy or charge you more due to pre-existing conditions. After this window closes, you may be subject to medical underwriting. This is the most important window for Brandon residents to act in.",
            },
            {
              q: "I am still working at 65 in Brandon. Do I need to enroll in Medicare?",
              a: "It depends on your employer's size. If your employer has 20 or more employees, your employer plan is primary and you can delay Part B without penalty. If your employer has fewer than 20 employees, Medicare becomes primary and you should enroll during your Initial Enrollment Period to avoid a lifetime penalty. Call our Brandon office at 813-699-5559 for a free review of your specific situation.",
            },
            {
              q: "How much does Medicare cost for someone turning 65 in Brandon?",
              a: "Most people pay $0 for Medicare Part A if they or their spouse worked at least 40 quarters. Part B costs $185.00 per month in 2026 for most people. Medicare Advantage plans in Hillsborough County average around $11.50 per month. Medigap plans in Brandon range from $65 to $803 per month depending on your age, plan letter, and carrier.",
            },
            {
              q: "Where can I get free Medicare help in Brandon when I turn 65?",
              a: "Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511. Our licensed independent agents offer free in-person, phone, and video consultations. We compare every plan available in your ZIP code and help you enroll correctly. Call 813-699-5559 or visit medicareinfopro.com to schedule.",
            },
          ],
          relatedLinks: [
            { label: "Medicare in Brandon, FL (Hub)", href: "/medicare-brandon-fl/" },
            { label: "Free Medicare Enrollment Help Brandon", href: "/free-medicare-enrollment-help-brandon-fl/" },
            { label: "Medicare Advantage Plans Brandon", href: "/medicare-advantage-plans-brandon-florida/" },
            { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon/" },
            { label: "Medicare Agent in Brandon", href: "/medicare-agent-brandon/" },
            { label: "Turning 65 Guide (Full)", href: "/turning-65-and-becoming-eligible-for-medicare/" },
            { label: "Free Medicare Kit", href: "/free-medicare-kit/" },
            { label: "Free Consultation", href: "/free-consultation/" },
          ],
        }}
      />
    </>
  );
}
