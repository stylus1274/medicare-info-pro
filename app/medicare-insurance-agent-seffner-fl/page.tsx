import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Seffner FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-seffner-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Seffner, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Seffner FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Seffner, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <LocalAgentPage
      config={{
        city: "Seffner",
        cityFull: "Seffner, FL",
        county: "Hillsborough County",
        slug: "seffner",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Seffner, FL",
        subheadline: "Seffner is a community in central Hillsborough County with convenient access to Brandon and Plant City healthcare facilities. Our licensed agents compare plans from 17+ carriers at no cost.",
        metaTitle: "Medicare Insurance Agent Seffner FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Seffner, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "AdventHealth Plant City",
          "BayCare Medical Group Brandon",
        ],
        neighborhoods: ["Seffner 33584", "Brandon 33510", "Plant City 33563", "Valrico 33594"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Seffner?", a: "A licensed Medicare insurance agent in Seffner compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at HCA Florida Brandon Hospital and AdventHealth Brandon are in-network." },
          { q: "Is Medicare guidance free in Seffner, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Seffner?", a: "Seffner (ZIP 33584) has access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code." },
          { q: "How do I find a Medicare agent near Seffner?", a: "Our Brandon office is just a few miles from Seffner. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "Can I enroll in Medicare if I am still working in Seffner?", a: "Yes, but the rules are different if you have employer coverage. We help Seffner residents who are still working understand how their employer plan coordinates with Medicare and when to enroll to avoid penalties." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Insurance Agent Plant City", href: "/medicare-insurance-agent-plant-city-fl" },
          { label: "Medicare Insurance Agent Valrico", href: "/medicare-insurance-agent-valrico-fl" },
          { label: "Still Working?", href: "/still-working" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
