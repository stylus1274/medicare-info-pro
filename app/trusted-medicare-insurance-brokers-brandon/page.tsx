import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trusted Medicare Insurance Brokers Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-brokers-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find trusted Medicare insurance brokers in Brandon, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/trusted-medicare-insurance-brokers-brandon/#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Trusted independent Medicare insurance brokers in Brandon, FL. A+ BBB rating, 500+ clients served, 17+ carriers compared. Located at 915 Oakfield Dr, Brandon.",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-brokers-brandon/",
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
      "name": "How do I find a trusted Medicare insurance broker in Brandon, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for an independent broker who represents multiple carriers, is licensed in Florida, and has verifiable local reviews. Medicare Information Pro is located at 915 Oakfield Dr, Brandon, FL 33511, holds an A+ BBB rating, and has served 500+ clients across Brandon and Hillsborough County. Call 813-699-5559."
      }
    },
    {
      "@type": "Question",
      "name": "What makes a Medicare broker trustworthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A trustworthy Medicare broker is independent (represents multiple carriers, not just one), licensed in your state, transparent about how they are compensated, and willing to explain all your options including ones that may not pay them the highest commission. MIP is an independent broker representing 17+ carriers."
      }
    },
    {
      "@type": "Question",
      "name": "Do Medicare brokers in Brandon have to be licensed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Anyone selling Medicare insurance in Florida must hold a valid Florida Department of Financial Services insurance license and complete annual Medicare certification training. You can verify a broker's license at the Florida DFS website. All MIP agents are fully licensed and certified."
      }
    },
    {
      "@type": "Question",
      "name": "How is Medicare Information Pro different from other brokers in Brandon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MIP is an independent agency with a physical office in Brandon at 915 Oakfield Dr. We represent 17+ carriers, have served 500+ local clients, and provide ongoing support after enrollment — not just at sign-up. Our agents live and work in the Brandon community."
      }
    }
  ]
} as const;
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Trusted Medicare Brokers in Brandon, FL — 500+ Clients, A+ BBB Rating',
  description: '500+ clients served across Brandon and Hillsborough County. MIP\'s independent brokers compare 17+ carriers — Medicare Advantage, Medigap, Part D — at no cost. A+ BBB.',
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
        pageType: "broker",
        headline: "Trusted Medicare Insurance Brokers in Brandon, FL",
        subheadline: "An independent Medicare broker works for you, not for any single insurance company. Our Brandon brokers compare plans from 17+ carriers and help you find the right coverage at no cost.",
        metaTitle: "Trusted Medicare Insurance Brokers Brandon FL | Medicare Information Project",
        metaDescription: "Find trusted Medicare insurance brokers in Brandon, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          { q: "What is the difference between a Medicare broker and a Medicare agent in Brandon?", a: "A Medicare broker represents multiple insurance carriers and can compare plans from many companies. A captive agent works for only one carrier. Our Brandon brokers are independent and represent 17+ carriers, so we can compare all available options in your ZIP code." },
          { q: "Is working with a Medicare broker free in Brandon?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "How do I know if a Medicare broker in Brandon is trustworthy?", a: "Look for brokers who are licensed in Florida, represent multiple carriers, and have no incentive to steer you toward any particular plan. Our Brandon brokers are licensed, independent, and have served the local community for years." },
          { q: "What plans can a Brandon Medicare broker compare?", a: "Our Brandon brokers compare Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from 17+ carriers. We verify your doctors are in-network before recommending any plan." },
          { q: "Can a Brandon Medicare broker help me every year?", a: "Yes. We provide ongoing support to our clients. Each year during the Annual Enrollment Period, we review your current plan and compare alternatives to ensure you still have the best coverage for your needs." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Trusted Brokers Riverview", href: "/trusted-medicare-insurance-brokers-riverview" },
          { label: "Our Team", href: "/our-team" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
