import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Agent Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-agent-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Looking for a Medicare agent in Brandon, FL? Greg Wohl and the Medicare Information Project team offer free, independent Medicare guidance. 17+ carriers, no pressure."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/medicare-agent-brandon/#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare agents in Brandon, FL. Free, no-pressure help comparing Medicare plans from 17+ carriers. Located at 915 Oakfield Dr, Brandon.",
  "url": "https://medicareinfopro.com/medicare-agent-brandon/",
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
      "name": "How do I find a Medicare agent in Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Information Pro is a licensed independent Medicare agency located at 915 Oakfield Dr, Brandon, FL 33511. Our agents serve Brandon, Valrico, Riverview, and Seffner. Call 813-699-5559 or schedule a free consultation at medicareinfopro.com."
      }
    },
    {
      "@type": "Question",
      "name": "What does a Medicare agent in Brandon charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nothing. Medicare agents are compensated by the insurance carriers, not by you. You pay the same premium whether you enroll through an agent or directly with the carrier. Our service is always free."
      }
    },
    {
      "@type": "Question",
      "name": "What can a Medicare agent in Brandon help me with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Medicare agent in Brandon can help you understand your enrollment windows and deadlines, compare Medicare Advantage and Medicare Supplement plans available in your ZIP code, find Part D plans that cover your specific medications, and complete your enrollment paperwork. Our agents also provide ongoing support after enrollment."
      }
    },
    {
      "@type": "Question",
      "name": "Is it better to use a local Medicare agent or go online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A local independent agent provides personalized guidance that online tools cannot replicate. We verify your specific doctors are in-network, check your exact drug list against formularies, and explain the trade-offs in plain language. Online tools show you options but do not help you evaluate them for your specific situation."
      }
    }
  ]
} as const;
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Medicare Agent in Brandon, FL — Greg Wohl & Team, No Cost',
  description: 'Greg Wohl and the MIP team are based in Brandon, FL. Independent guidance across 17+ carriers — Medicare Advantage, Medigap, and Part D. No cost, no pressure. Call today.',
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
        pageType: "agent",
        headline: "Medicare Agent in Brandon, FL",
        subheadline: "Independent, licensed Medicare agents serving Brandon and Hillsborough County. We compare plans from 17+ carriers at no cost to you, helping you find the right coverage for your doctors, prescriptions, and budget.",
        metaTitle: "Medicare Agent Brandon FL | Medicare Information Project",
        metaDescription: "Looking for a Medicare agent in Brandon, FL? Greg Wohl and the Medicare Information Project team offer free, independent Medicare guidance. 17+ carriers, no pressure.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "Brandon Regional Medical Center",
          "South Tampa Care Center",
        ],
        neighborhoods: ["Brandon 33511", "Brandon 33510", "Valrico 33594", "Riverview 33578", "Seffner 33584", "Fish Hawk"],
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
            q: "Do I need a Medicare agent in Brandon, FL?",
            a: "You are not required to use an agent, but working with a licensed independent agent is free and can save you significant time and money. An agent who knows the Brandon area understands which plans have strong networks at HCA Brandon, AdventHealth, and BayCare, and can verify your specific doctors are in-network before you enroll.",
          },
          {
            q: "How much does it cost to use a Medicare agent?",
            a: "Nothing. Independent Medicare agents are compensated by the insurance carriers, not by you. Your monthly premium is identical whether you enroll through an agent or directly with the carrier. There is no markup, no fee, and no obligation.",
          },
          {
            q: "What Medicare plans are available in Brandon, FL?",
            a: "Brandon residents have access to a wide range of Medicare Advantage (Part C), Medicare Supplement (Medigap), and Part D drug plans. Plan availability depends on your ZIP code. We compare all available options in 33511 and surrounding ZIP codes to find the best fit.",
          },
          {
            q: "Can you help me during the Annual Enrollment Period?",
            a: "Yes. The Annual Enrollment Period runs October 15 through December 7 each year. This is the main window to switch Medicare Advantage or Part D plans. We help Brandon residents review their current coverage and compare it against new options every fall.",
          },
          {
            q: "What if I am still working and have employer coverage?",
            a: "If you or your spouse are still working and covered by an employer group health plan, you may be able to delay Part B without penalty. The rules depend on employer size. We can walk you through the coordination of benefits rules specific to your situation.",
          },
          {
            q: "Do you serve areas outside Brandon?",
            a: "Yes. We serve all of Hillsborough County including Riverview, Valrico, Seffner, Fish Hawk, Gibsonton, and surrounding communities. Our office is located in Brandon for easy in-person meetings.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Medicare Agent Valrico", href: "/medicare-agent-valrico" },
          { label: "Medicare Agent Apollo Beach", href: "/medicare-agent-apollo-beach" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare 101 Overview", href: "/medicare-101" },
          { label: "Plan Comparison Tool", href: "/plan-comparison" },
        ],
      }}
    />
    </>
  );
}
