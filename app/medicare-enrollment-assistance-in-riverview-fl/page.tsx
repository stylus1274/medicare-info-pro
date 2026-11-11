import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Assistance in Riverview FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-in-riverview-fl/",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Request no-cost Medicare enrollment help in Riverview, FL. Talk with a licensed agent about timing, coverage questions, and plan options."
} as const;


export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance in Riverview, FL",
  description: "Request no-cost Medicare enrollment help in Riverview, FL. Talk with a licensed agent about timing, coverage questions, and plan options.",

  alternates: { canonical: "https://medicareinfopro.com/medicare-enrollment-assistance-in-riverview-fl/" },};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
<LocalAgentPage
      config={{
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Riverview, FL",
        subheadline: "Get help from a licensed agent serving Riverview. Bring your coverage questions and your list of doctors and prescriptions so we can review the plans we represent together.",
        servicesIntro: "An agent can help you prepare for enrollment, compare the insurance plans we represent for your ZIP code, and identify the coverage details you need to verify before you apply.",
        ctaLabel: "Request Enrollment Help",
        benefits: [
          "Licensed agents serving Riverview",
          "No agency consultation fee",
          "Review plans the agency represents for your address",
          "Help organizing questions about doctors, prescriptions, and costs",
        ],
        metaTitle: "Medicare Enrollment Assistance in Riverview FL | Medicare Information Project",
        metaDescription: "Request no-cost Medicare enrollment help in Riverview, FL. Talk with a licensed agent about timing, coverage questions, and plan options.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "What happens during a Medicare enrollment consultation for Riverview residents?", a: "Bring the names and office locations of the Riverview doctors you want to keep. We can review the exact network and drug coverage for the plans you are considering." },
          { q: "Is Medicare enrollment assistance free in Riverview?", a: "Medicare Information Project does not charge an agency consultation fee. Plan premiums and other coverage costs still apply." },
          { q: "Can I talk to an agent by phone?", a: "Yes. You can request a phone consultation. Share your ZIP code and the enrollment question you want to discuss when you request a callback." },
          { q: "Can I get help comparing plans after I enroll in Medicare?", a: "Yes. Bring your current coverage details, providers, and prescriptions. An agent can review plans the agency represents and help identify the questions to confirm before switching." },
        ],
        relatedLinks: [
          { label: "How to Enroll in Medicare in Riverview, FL", href: "/medicare-enrollment-assistance-riverview/" },
          { label: "Medicare Consulting Riverview", href: "/medicare-consulting-services-riverview/" },
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl/" },
          { label: "Medicare Enrollment Brandon", href: "/medicare-enrollment-assistance-in-brandon-fl/" },
          { label: "Still Working?", href: "/still-working/" },
          { label: "Free Consultation", href: "/get-started/" },
        ],
      }}
    />
    </>
  );
}
