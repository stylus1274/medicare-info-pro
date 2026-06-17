import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Consulting Services Seffner FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-consulting-services-seffner",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Expert Medicare consulting services in Seffner, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Seffner FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Seffner, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
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
        pageType: "consulting",
        headline: "Medicare Consulting Services in Seffner, FL",
        subheadline: "Seffner residents can count on Medicare Information Project for independent, no-cost Medicare consulting. We compare every plan available in your area and guide you to the right coverage without pressure or bias.",
        metaTitle: "Medicare Consulting Services Seffner FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Seffner, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "AdventHealth Brandon",
          "HCA Florida Brandon Hospital",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Seffner 33584", "Brandon 33510", "Brandon 33511", "Plant City 33563"],
        faqs: [
          {
            q: "What Medicare consulting services are available in Seffner?",
            a: "Our Seffner Medicare consulting service includes a full review of your healthcare needs, a comparison of all Medicare Advantage, Medigap, and Part D plans available in ZIP 33584, doctor and hospital network verification, enrollment assistance, and year-round support — all at no cost.",
          },
          {
            q: "Is Medicare consulting free in Seffner?",
            a: "Yes, completely free. We are compensated by insurance carriers when you enroll, and that compensation is identical regardless of which plan you choose.",
          },
          {
            q: "What Medicare plans are available in Seffner?",
            a: "Seffner residents in Hillsborough County have access to Medicare Advantage plans from major carriers including Humana, UnitedHealthcare, Aetna, Cigna, and Florida Blue, as well as all standardized Medigap plan letters and Part D prescription drug plans. We compare every option available for your specific ZIP code.",
          },
          {
            q: "Can you help me compare Medicare plans in Seffner?",
            a: "Yes. We pull every plan available in your ZIP code and compare them side by side against your specific doctors, medications, and budget. We present a clear recommendation in plain language and answer every question before you decide.",
          },
          {
            q: "Do you serve areas near Seffner?",
            a: "Yes. We serve all of Hillsborough County including Brandon, Plant City, Valrico, Temple Terrace, and surrounding communities.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Consulting — Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Consulting — Plant City", href: "/medicare-consulting-services-plant-city" },
          { label: "Medicare Agent — Seffner", href: "/medicare-insurance-agent-seffner-fl" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
        ],
      }}
    />
    </>
  );
}
