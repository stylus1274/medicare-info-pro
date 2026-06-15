import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Plant City FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Plant City, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Plant City",
        cityFull: "Plant City, FL",
        county: "Hillsborough County",
        slug: "plant-city",
        pageType: "consulting",
        headline: "Medicare Consulting Services in Plant City, FL",
        subheadline: "Plant City residents deserve clear, unbiased Medicare guidance from someone who knows the local market. Our independent consultants compare every plan available in your area and help you enroll with confidence — at no cost.",
        metaTitle: "Medicare Consulting Services Plant City FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Plant City, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "AdventHealth Plant City",
          "HCA Florida Brandon Hospital",
          "BayCare Medical Group Plant City",
          "South Florida Baptist Hospital",
        ],
        neighborhoods: ["Plant City 33563", "Plant City 33565", "Plant City 33566", "Valrico 33594"],
        faqs: [
          {
            q: "What Medicare consulting services are available in Plant City?",
            a: "Our Plant City Medicare consulting service includes a full review of your health and financial needs, a comparison of all Medicare Advantage, Medigap, and Part D plans available in your ZIP code, verification that your doctors and hospitals are in-network, enrollment assistance, and year-round support — all at no cost.",
          },
          {
            q: "Is Medicare consulting free in Plant City?",
            a: "Yes, completely free. We are compensated by insurance carriers when you enroll, and that compensation is identical regardless of which plan you choose. You will never receive a bill from us.",
          },
          {
            q: "What Medicare Advantage plans are available in Plant City?",
            a: "Plant City residents in Hillsborough County have access to Medicare Advantage plans from Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, and other carriers. The specific plans and benefits vary by ZIP code. We pull every plan available for your address and compare them side by side.",
          },
          {
            q: "Can you help me if I am new to Medicare in Plant City?",
            a: "Absolutely. Whether you are turning 65, retiring, or losing employer coverage, we walk you through every step of the Medicare enrollment process and help you avoid the permanent late enrollment penalties that catch many new beneficiaries off guard.",
          },
          {
            q: "Do you serve areas near Plant City?",
            a: "Yes. We serve all of eastern Hillsborough County including Valrico, Brandon, Seffner, and Bartow in Polk County.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Consulting — Bartow", href: "/medicare-consulting-services-bartow" },
          { label: "Medicare Consulting — Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Agent — Plant City", href: "/medicare-insurance-agent-plant-city-fl" },
          { label: "Do I Need Medicare?", href: "/do-i-need-medicare" },
        ],
      }}
    />
  );
}
