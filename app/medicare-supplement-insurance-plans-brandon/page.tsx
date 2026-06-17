import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Supplement Insurance Plans Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Supplement (Medigap) insurance plans in Brandon, FL. Independent agents help you find the lowest premium for the coverage you need."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-supplement-insurance-plans-brandon#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Brandon, FL.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-brandon",
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
  title: "Medicare Supplement Insurance Plans Brandon FL | Medicare Information Project",
  description: "Compare Medicare Supplement (Medigap) insurance plans in Brandon, FL. Independent agents help you find the lowest premium for the coverage you need.",
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
        pageType: "supplement",
        headline: "Medicare Supplement Insurance Plans in Brandon, FL",
        subheadline: "Medicare Supplement (Medigap) plans help cover the out-of-pocket costs that Original Medicare leaves behind. Our Brandon agents compare Medigap plans from multiple carriers to find the lowest premium for the coverage you need.",
        metaTitle: "Medicare Supplement Insurance Plans Brandon FL | Medicare Information Project",
        metaDescription: "Compare Medicare Supplement (Medigap) insurance plans in Brandon, FL. Independent agents help you find the lowest premium for the coverage you need.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          { q: "What is a Medicare Supplement plan in Brandon?", a: "A Medicare Supplement plan, also called Medigap, is a private insurance policy that helps pay for costs Original Medicare does not cover, such as copays, coinsurance, and deductibles. Medigap plans allow you to see any doctor or hospital that accepts Medicare nationwide." },
          { q: "What Medigap plans are available in Brandon, FL?", a: "Brandon residents can choose from standardized Medigap plans labeled A through N. Plan G is currently the most comprehensive plan available to new Medicare enrollees, covering all out-of-pocket costs except the Part B deductible." },
          { q: "How much does a Medicare Supplement plan cost in Brandon?", a: "Medigap premiums in Brandon vary by carrier, plan type, age, and gender. For the same plan letter, premiums can differ significantly between carriers. We compare all available options to find the lowest premium for your chosen plan." },
          { q: "Is Medicare Supplement guidance free in Brandon?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "Can I switch Medigap plans in Brandon?", a: "Outside of your initial Medigap Open Enrollment Period, switching plans may require medical underwriting. We help Brandon residents understand their options and timing for switching Medigap plans." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Supplement Plans Riverview", href: "/medicare-supplement-insurance-plans-riverview" },
          { label: "Medicare Advantage vs Medigap", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
