import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance in Brandon FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Brandon, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Brandon",
        cityFull: "Brandon, FL",
        county: "Hillsborough County",
        slug: "brandon",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Brandon, FL",
        subheadline: "Missing your Medicare enrollment window can result in permanent penalties. Our Brandon-based enrollment specialists help you identify your exact enrollment dates, compare plans, and enroll correctly the first time.",
        metaTitle: "Medicare Enrollment Assistance in Brandon FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Brandon, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          { q: "When do I need to enroll in Medicare in Brandon?", a: "Your Initial Enrollment Period is a 7-month window that starts 3 months before your 65th birthday month and ends 3 months after. Enrolling late can result in permanent Part B penalties of 10% per 12-month delay." },
          { q: "Is Medicare enrollment assistance free in Brandon?", a: "Yes. Our enrollment assistance is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What if I am still working when I turn 65 in Brandon?", a: "If you have employer coverage from an employer with 20 or more employees, you may be able to delay Part B without penalty. We help Brandon residents in this situation understand their options and determine the right time to enroll." },
          { q: "What is the Annual Enrollment Period for Brandon residents?", a: "The Annual Enrollment Period runs October 15 through December 7 each year. During this window, Brandon residents can switch Medicare Advantage plans, change Part D drug plans, or move between Original Medicare and Medicare Advantage." },
          { q: "Can I get enrollment help if I missed my Medicare enrollment window in Brandon?", a: "Yes. If you missed your Initial Enrollment Period, you may qualify for a Special Enrollment Period depending on your circumstances. We help Brandon residents understand their options and minimize any penalties." },
        ],
        relatedLinks: [
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Still Working?", href: "/still-working" },
          { label: "Enrollment Timeline", href: "/enrollment-timeline" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
