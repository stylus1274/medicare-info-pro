import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl/#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed independent Medicare insurance agents in Brandon, FL serving Brandon, Valrico, Riverview, and Seffner. Free plan comparison across 17+ carriers.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl/",
  "telephone": "+1-813-699-5559",
  "priceRange": "Free consultation",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9378,
    "longitude": -82.2859
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Brandon"},
    {"@type": "City", "name": "Valrico"},
    {"@type": "City", "name": "Riverview"},
    {"@type": "City", "name": "Seffner"}
  ],
  "sameAs": [
    "https://www.facebook.com/medicareinfopro",
    "https://medicareinfopro.com"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you have a Medicare insurance agent near Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511. Our licensed agents serve Brandon, Valrico, Riverview, and Seffner at no cost to you. Call 813-699-5559 to speak with an agent today."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to use a Medicare agent in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our service is completely free. Medicare agents are compensated by the insurance carriers, not by you. You pay the same premium whether you enroll through an agent or directly with the carrier — and an independent agent can compare 17+ carriers to find you the best option."
      }
    },
    {
      "@type": "Question",
      "name": "What Medicare plans are available in Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brandon residents in ZIP codes 33510, 33511, and 33527 have access to Medicare Advantage plans, Medicare Supplement (Medigap) plans including Plan G and Plan N, and Part D prescription drug plans. Our agents compare all available options in your specific ZIP code."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Medicare agent help me during the Annual Enrollment Period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Annual Enrollment Period runs October 15 to December 7 each year. During this window you can switch Medicare Advantage plans, switch from Medicare Advantage to Original Medicare, or change your Part D plan. Our Brandon agents are available to review your options at no cost."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an independent Medicare agent and a captive agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An independent agent like MIP represents multiple carriers and can compare plans across 17+ companies to find the best fit for your needs. A captive agent works for a single carrier and can only offer that company's plans. Independent agents typically have access to more options and can provide more objective comparisons."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Medicare Information Pro located in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511. We serve Brandon, Valrico, Riverview, Seffner, and surrounding Hillsborough County communities. Call 813-699-5559 or visit our website to schedule a free consultation."
      }
    }
  ]
} as const;
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Local Medicare Agent in Brandon, FL — Free, No-Pressure Help',
  description: 'MIP\'s office is at 915 Oakfield Dr, Brandon. Independent agents compare 17+ carriers — Medicare Advantage, Medigap, and Part D — at no cost to you. Call 813-699-5559.',
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
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Brandon, FL",
        subheadline: "Our licensed Medicare insurance agents in Brandon help you compare every available plan in your ZIP code. We represent 17+ carriers and our service is always free.",
        metaTitle: "Medicare Insurance Agent Brandon FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          { q: "What does a Medicare insurance agent in Brandon do?", a: "A licensed Medicare insurance agent in Brandon helps you compare Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors are in-network, review drug formularies, and explain your options so you can make an informed decision." },
          { q: "Is working with a Medicare insurance agent free in Brandon?", a: "Yes. Our service is completely free. Insurance carriers pay us a commission, not you. Your premium is the same whether you work with us or enroll directly." },
          { q: "Which Medicare plans are available in Brandon, FL?", a: "Brandon residents across ZIP codes 33510, 33511, and 33527 have access to Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from multiple carriers." },
          { q: "How do I find a Medicare insurance agent near Brandon?", a: "Our office is located in Brandon, FL. You can reach us at 813-699-5559 or schedule a free consultation online. We also offer phone and video appointments." },
          { q: "Can a Brandon Medicare agent help me during the Annual Enrollment Period?", a: "Yes. The Annual Enrollment Period (October 15 to December 7) is our busiest time of year. We help Brandon residents review their current plan, compare alternatives, and switch if a better option is available." },
        ],
        relatedLinks: [
          { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Enrollment Brandon", href: "/medicare-enrollment-assistance-in-brandon-fl" },
          { label: "Medicare Advantage", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
