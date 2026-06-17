import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Supplement Insurance Plans Bartow FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-bartow",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Supplement (Medigap) insurance plans in Bartow, FL. We help you find the right plan to cover the gaps in Original Medicare at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-supplement-insurance-plans-bartow#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Bartow, FL.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-bartow",
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
  title: "Medicare Supplement Insurance Plans Bartow FL | Medicare Information Project",
  description: "Compare Medicare Supplement (Medigap) insurance plans in Bartow, FL. We help you find the right plan to cover the gaps in Original Medicare at no cost.",
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
        pageType: "supplement",
        headline: "Medicare Supplement Insurance Plans in Bartow, FL",
        subheadline: "Original Medicare covers about 80% of your medical costs. A Medicare Supplement plan covers the other 20% so you never face an unexpected hospital bill. Our independent agents in Bartow compare every Medigap plan available from 17+ carriers and find the one that fits your health needs and budget.",
        metaTitle: "Medicare Supplement Insurance Plans Bartow FL | Medicare Information Project",
        metaDescription: "Compare Medicare Supplement (Medigap) insurance plans in Bartow, FL. We help you find the right plan to cover the gaps in Original Medicare at no cost.",
        nearbyLandmarks: [
          "Bartow Regional Medical Center",
          "AdventHealth Heart of Florida",
          "Polk County Health Department",
          "Lakeland Regional Health",
        ],
        neighborhoods: ["Bartow 33830", "Bartow 33831", "Lake Alfred 33850", "Auburndale 33823"],
        faqs: [
          {
            q: "What is a Medicare Supplement plan in Bartow?",
            a: "A Medicare Supplement plan, also called Medigap, is a private insurance policy that works alongside Original Medicare to cover costs like deductibles, copayments, and coinsurance. Bartow residents who choose Original Medicare often pair it with a Medigap plan for predictable, low out-of-pocket costs. See our medicare supplement page for a full comparison of all plan letters.",
          },
          {
            q: "What are the most popular Medigap plans in Bartow?",
            a: "Plan G is the most popular Medigap plan for new enrollees in Bartow. It covers all gaps in Original Medicare except the Part B deductible. Plan N is a lower-premium alternative with small copays at doctor visits. Plan F is still available to those who became eligible before January 1, 2020.",
          },
          {
            q: "How much does a Medicare Supplement plan cost in Bartow?",
            a: "Premiums vary by plan letter, carrier, age, gender, and tobacco use. In Bartow, Plan G premiums typically range from $80 to $180 per month for a 65-year-old. We compare rates from all carriers available in your ZIP code to find the lowest premium for the same coverage.",
          },
          {
            q: "Can I keep my doctors with a Medigap plan in Bartow?",
            a: "Yes. Medigap plans work with any doctor or hospital that accepts Medicare nationwide. There are no networks, no referrals, and no prior authorizations. This is one of the key advantages over Medicare Advantage for Bartow residents who want full provider freedom.",
          },
          {
            q: "Is it free to compare Medicare Supplement plans in Bartow?",
            a: "Yes, completely free. We compare every Medigap plan available in Bartow at no cost to you. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or apply directly.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
          { label: "Medicare Consulting Bartow", href: "/medicare-consulting-services-bartow" },
          { label: "Medicare Enrollment Assistance Bartow", href: "/medicare-enrollment-assistance-bartow" },
          { label: "Comparing Medicare Plans Plant City", href: "/comparing-medicare-plans-plant-city" },
        ],
      }}
    />
    </>
  );
}
