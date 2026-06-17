import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/local-medicare-agent-temple-terrace#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Temple Terrace, FL.",
  "url": "https://medicareinfopro.com/local-medicare-agent-temple-terrace",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Temple Terrace",
    "addressRegion": "FL",
    "postalCode": "33617",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Temple Terrace"
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
  title: "Local Medicare Agent Temple Terrace FL | Medicare Information Project",
  description: "Find a local Medicare agent in Temple Terrace, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    <LocalAgentPage
      config={{
        city: "Temple Terrace",
        cityFull: "Temple Terrace, FL",
        county: "Hillsborough County",
        slug: "temple-terrace",
        pageType: "local-agent",
        headline: "Local Medicare Agent in Temple Terrace, FL",
        subheadline: "Temple Terrace residents have access to excellent healthcare facilities, and choosing the right Medicare plan means making sure those facilities are in your network. Our local agents help you navigate every option at no cost.",
        metaTitle: "Local Medicare Agent Temple Terrace FL | Medicare Information Project",
        metaDescription: "Find a local Medicare agent in Temple Terrace, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
        nearbyLandmarks: [
          "AdventHealth Tampa",
          "HCA Florida University Hospital",
          "Tampa General Hospital",
          "USF Health Morsani College of Medicine",
        ],
        neighborhoods: ["Temple Terrace 33617", "Temple Terrace 33637", "Thonotosassa 33592"],
        faqs: [
          { q: "Why use a local Medicare agent in Temple Terrace?", a: "Temple Terrace is close to major hospital systems including AdventHealth Tampa and HCA Florida University Hospital. A local agent verifies your specific doctors and specialists are in-network before you enroll, so you avoid unexpected costs." },
          { q: "Is Medicare guidance free for Temple Terrace residents?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare Advantage plans are available in Temple Terrace?", a: "Temple Terrace (ZIP codes 33617 and 33637) has access to multiple Medicare Advantage plans from several carriers. We compare all available options for your specific ZIP code." },
          { q: "How do I know if my Temple Terrace doctor accepts my Medicare plan?", a: "We check provider directories for every plan we recommend. We confirm your primary care doctor and any specialists you see are in-network before suggesting a plan." },
          { q: "Can I get a Medigap plan in Temple Terrace?", a: "Yes. Medigap plans are available in Temple Terrace and are sold by private insurers. We compare Medigap options alongside Medicare Advantage so you can make an informed decision." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Local Medicare Agent Valrico", href: "/local-medicare-agent-valrico" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement-insurance-plans-temple-terrace" },
          { label: "Medicare Advantage", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
