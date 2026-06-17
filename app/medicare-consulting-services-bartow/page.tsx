import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Consulting Services Bartow FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-consulting-services-bartow",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Expert Medicare consulting services in Bartow, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Bartow FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Bartow, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
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
        city: "Bartow",
        cityFull: "Bartow, FL",
        county: "Polk County",
        slug: "bartow",
        pageType: "consulting",
        headline: "Medicare Consulting Services in Bartow, FL",
        subheadline: "Navigating Medicare in Bartow does not have to be overwhelming. Our local Medicare consultants help Bartow residents compare every available plan, avoid costly enrollment mistakes, and choose coverage that fits their health and budget.",
        metaTitle: "Medicare Consulting Services Bartow FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Bartow, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "Bartow Regional Medical Center",
          "AdventHealth Heart of Florida",
          "Polk County Health Department",
          "Lakeland Regional Health",
        ],
        neighborhoods: ["Bartow 33830", "Bartow 33831", "Lake Alfred 33850", "Auburndale 33823"],
        faqs: [
          {
            q: "What does Medicare consulting in Bartow include?",
            a: "Our Bartow Medicare consulting service covers a full review of your healthcare needs, a side-by-side comparison of all Medicare Advantage, Medigap, and Part D plans available in your ZIP code, verification that your current doctors and specialists are in-network, and complete enrollment assistance. We also provide year-round support at no charge.",
          },
          {
            q: "Is Medicare consulting free in Bartow?",
            a: "Yes. Our consulting services are completely free to Bartow residents. We are compensated by insurance carriers when you enroll, and that compensation is identical regardless of which plan you choose — so our advice is always unbiased.",
          },
          {
            q: "Which Medicare plans are available in Bartow?",
            a: "Bartow residents in Polk County have access to a range of Medicare Advantage plans (HMO and PPO), Medicare Supplement plans (Medigap), and Part D prescription drug plans from major carriers including Humana, UnitedHealthcare, Aetna, Cigna, and Florida Blue. We compare all available options for your specific ZIP code.",
          },
          {
            q: "Can you help me switch Medicare plans in Bartow?",
            a: "Yes. During the Annual Enrollment Period (October 15 – December 7) and other qualifying periods, we can review your current plan and switch you to a better option if one exists. We handle all the paperwork.",
          },
          {
            q: "Do you serve areas near Bartow?",
            a: "Yes. In addition to Bartow, we serve all of Polk County and surrounding Hillsborough County communities including Plant City, Lakeland, Auburndale, and Lake Alfred.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Consulting — Plant City", href: "/medicare-consulting-services-plant-city" },
          { label: "Medicare Consulting — Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Agent — Bartow", href: "/medicare-insurance-agent-bartow-fl" },
          { label: "What Is Medicare", href: "/what-is-medicare" },
        ],
      }}
    />
    </>
  );
}
