import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Supplement Insurance Plans Tallahassee FL | Medicare Information Pro",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-tallahassee",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Compare Medicare Supplement (Medigap) insurance plans in Tallahassee, FL. Independent agents help you find the lowest premium for Plan G, Plan N, and other Medigap options."
} as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-supplement-insurance-plans-tallahassee#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Tallahassee, FL and Leon County.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-tallahassee",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr, Suite A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tallahassee"
  },
  "serviceType": "Medicare Supplement Insurance",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Supplement Insurance Plans Tallahassee FL | Medicare Information Pro",
  description: "Compare Medicare Supplement (Medigap) insurance plans in Tallahassee, FL. Independent agents help you find the lowest premium for Plan G, Plan N, and other Medigap options.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-supplement-insurance-plans-tallahassee",
  },
  openGraph: {
    title: "Medicare Supplement Insurance Plans Tallahassee FL | Medicare Information Pro",
    description: "Compare Medicare Supplement (Medigap) insurance plans in Tallahassee, FL. Independent agents help you find the lowest premium for Plan G, Plan N, and other Medigap options.",
    url: "https://medicareinfopro.com/medicare-supplement-insurance-plans-tallahassee",
    siteName: "Medicare Information Pro",
    type: "website",
  },
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
          city: "Tallahassee",
          cityFull: "Tallahassee, FL",
          county: "Leon County",
          slug: "tallahassee",
          pageType: "supplement",
          headline: "Medicare Supplement Insurance Plans in Tallahassee, FL",
          subheadline: "Medicare Supplement (Medigap) plans help cover the out-of-pocket costs that Original Medicare leaves behind. Our licensed agents compare Medigap plans from multiple carriers to find the lowest premium for Tallahassee residents.",
          metaTitle: "Medicare Supplement Insurance Plans Tallahassee FL | Medicare Information Pro",
          metaDescription: "Compare Medicare Supplement (Medigap) insurance plans in Tallahassee, FL. Independent agents help you find the lowest premium for Plan G, Plan N, and other Medigap options.",
          nearbyLandmarks: [
            "Tallahassee Memorial HealthCare",
            "Capital Regional Medical Center",
            "HCA Florida Capital Hospital",
            "FSU Health Family Medicine",
            "Bond Community Health Center",
          ],
          neighborhoods: [
            "Tallahassee 32301",
            "Tallahassee 32303",
            "Tallahassee 32308",
            "Tallahassee 32312",
            "Killearn Estates",
            "Southwood",
            "Midtown Tallahassee",
            "Betton Hills",
          ],
          testimonials: [
            {
              name: "Dorothy H.",
              location: "Tallahassee, FL",
              text: "I was paying $220 a month for my Medigap plan and had no idea I could get the exact same Plan G coverage for $148. Medicare Information Pro compared every carrier available in Tallahassee and saved me over $860 a year.",
            },
            {
              name: "William S.",
              location: "Tallahassee, FL",
              text: "As a retired state employee, I was confused about how Medigap worked alongside my state retiree benefits. The team explained everything clearly and helped me find the right plan for my situation. No pressure at all.",
            },
          ],
          faqs: [
            {
              q: "What is a Medicare Supplement plan in Tallahassee?",
              a: "A Medicare Supplement plan, also called Medigap, is a private insurance policy that helps pay for costs Original Medicare does not cover, such as copays, coinsurance, and deductibles. Medigap plans allow you to see any doctor or hospital that accepts Medicare nationwide — including Tallahassee Memorial HealthCare, Capital Regional, and HCA Florida Capital Hospital.",
            },
            {
              q: "What Medigap plans are available in Tallahassee, FL?",
              a: "Tallahassee residents can choose from standardized Medigap plans labeled A through N. Plan G is currently the most comprehensive plan available to new Medicare enrollees, covering all out-of-pocket costs except the Part B deductible. Plan N is a lower-premium alternative with small copays. We compare all plans available in Leon County ZIP codes.",
            },
            {
              q: "How much does a Medicare Supplement plan cost in Tallahassee?",
              a: "Medigap premiums in Tallahassee vary by carrier, plan type, age, and gender. For the same plan letter, premiums can differ by $50 to $100 or more per month between carriers offering identical coverage. We compare all available options to find the lowest premium for your chosen plan.",
            },
            {
              q: "Is Medicare Supplement guidance free in Tallahassee?",
              a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your monthly premium is identical whether you work with us or enroll directly with the carrier. There is no markup and no obligation.",
            },
            {
              q: "Can I switch Medigap plans in Tallahassee?",
              a: "Outside of your initial Medigap Open Enrollment Period — the 6-month window that begins when you turn 65 and enroll in Part B — switching plans may require medical underwriting. We help Tallahassee residents understand their options and the best timing for switching Medigap plans.",
            },
            {
              q: "How does Medigap work for Florida state retirees in Tallahassee?",
              a: "Florida state retirees have unique Medicare coordination considerations. Depending on your retirement date and coverage elections, transitioning to a Medigap plan may offer significant savings and broader provider access. Our agents are experienced in helping state retirees evaluate their options when transitioning off the State Group Insurance Program.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Tallahassee", href: "/medicare-agent-tallahassee" },
            { label: "Compare Medicare Plans Tallahassee", href: "/comparing-medicare-plans-tallahassee" },
            { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon" },
            { label: "Medicare Advantage vs. Medigap", href: "/medicare-advantage-vs-medigap" },
            { label: "Why Choose Medigap Plan G", href: "/why-choose-medigap-plan-g" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
