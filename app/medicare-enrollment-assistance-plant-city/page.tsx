import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance Plant City FL | Medicare Information Project",
  description: "Free Medicare enrollment assistance in Plant City, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Plant City",
        cityFull: "Plant City, FL",
        county: "Hillsborough County",
        slug: "plant-city",
        pageType: "enrollment",
        headline: "Medicare Enrollment Assistance in Plant City, FL",
        subheadline: "Our independent Medicare enrollment specialists serve Plant City and eastern Hillsborough County. We help you navigate every enrollment period, compare plans from 17+ carriers, and enroll on time so you never face a penalty you did not have to pay.",
        metaTitle: "Medicare Enrollment Assistance Plant City FL | Medicare Information Project",
        metaDescription: "Free Medicare enrollment assistance in Plant City, FL. We help you enroll on time, avoid penalties, and choose the right plan from 17+ carriers.",
        nearbyLandmarks: [
          "AdventHealth Plant City",
          "South Florida Baptist Hospital",
          "BayCare Medical Group Plant City",
          "HCA Florida Brandon Hospital",
        ],
        neighborhoods: ["Plant City 33563", "Plant City 33565", "Plant City 33566", "Valrico 33594"],
        faqs: [
          {
            q: "When do I need to enroll in Medicare in Plant City?",
            a: "Your Initial Enrollment Period is a 7-month window that starts 3 months before your 65th birthday month and ends 3 months after. A late Part B enrollment results in a permanent 10% penalty for each 12-month period you delayed. Visit our turning 65 guide for a full timeline.",
          },
          {
            q: "Is Medicare enrollment assistance free in Plant City?",
            a: "Yes. Our enrollment assistance is completely free to Plant City residents. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "What Medicare plans are available in Plant City?",
            a: "Plant City residents in Hillsborough County have access to Medicare Advantage plans from Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, and other carriers, plus all Medigap plan letters and Part D drug plans. We compare every option available for your specific ZIP code. See our comparing Medicare plans Plant City page for more.",
          },
          {
            q: "Can you help me if I am still working at 65 in Plant City?",
            a: "Yes. If you have employer coverage from a company with 20 or more employees, you may be able to delay Part B without penalty. We help Plant City residents in this situation determine the right time to enroll. Our do I need Medicare page covers this scenario in detail.",
          },
          {
            q: "Do you serve areas near Plant City?",
            a: "Yes. We serve all of eastern Hillsborough County including Valrico, Brandon, Seffner, and Bartow in Polk County.",
          },
        ],
        relatedLinks: [
          { label: "Comparing Medicare Plans Plant City", href: "/comparing-medicare-plans-plant-city" },
          { label: "Medicare Consulting Plant City", href: "/medicare-consulting-services-plant-city" },
          { label: "Medicare Enrollment Assistance Bartow", href: "/medicare-enrollment-assistance-bartow" },
          { label: "Turning 65 Guide", href: "/turning-65-and-becoming-eligible-for-medicare" },
        ],
      }}
    />
  );
}
