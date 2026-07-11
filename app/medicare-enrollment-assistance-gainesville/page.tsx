import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Medicare Enrollment Assistance Gainesville FL",
  "description": "Licensed Medicare agents providing free enrollment assistance to Gainesville and Alachua County residents. Help with Medicare Advantage, Medigap, and Part D enrollment.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-gainesville/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Gainesville",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Enrollment Assistance",
  "priceRange": "Free"
};

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance in Gainesville FL | Free Help from Licensed Agents",
  description: "Need help enrolling in Medicare in Gainesville, FL? Licensed agents serving Alachua County guide you through every enrollment window, plan type, and deadline. Free, no-pressure assistance.",
  keywords: [
    "medicare enrollment assistance gainesville fl",
    "medicare enrollment help gainesville florida",
    "how to enroll in medicare gainesville",
    "medicare enrollment gainesville fl",
    "medicare sign up gainesville florida",
    "medicare enrollment period gainesville",
    "medicare agent gainesville enrollment",
  ],
  openGraph: {
    title: "Medicare Enrollment Assistance in Gainesville FL | Free Help from Licensed Agents",
    description: "Need help enrolling in Medicare in Gainesville, FL? Licensed agents serving Alachua County guide you through every enrollment window, plan type, and deadline. Free, no-pressure assistance.",
    url: "https://medicareinfopro.com/medicare-enrollment-assistance-gainesville/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-enrollment-assistance-gainesville/",
  },
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
          pageType: "enrollment",
          city: "Gainesville",
          cityFull: "Gainesville, FL",
          county: "Alachua County",
          slug: "gainesville",
          headline: "Medicare Enrollment Assistance in Gainesville, FL",
          subheadline: "Enrolling in Medicare for the first time or switching plans can be overwhelming. Our licensed agents in Alachua County walk you through every step, every deadline, and every option available to you, completely free of charge.",
          metaTitle: "Medicare Enrollment Assistance in Gainesville FL | Free Help from Licensed Agents",
          metaDescription: "Need help enrolling in Medicare in Gainesville, FL? Licensed agents serving Alachua County guide you through every enrollment window, plan type, and deadline. Free, no-pressure assistance.",
          agent: {
            name: "Paxton DeMent",
            title: "Licensed Medicare Agent",
            location: "Brandon FL",
            photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/rYnJIbXyXhSEATDJ.jpg",
          },
          nearbyLandmarks: [
            "UF Health Shands Hospital",
            "North Florida Regional Medical Center",
            "Malcom Randall VA Medical Center",
            "UF Health Family Medicine",
            "Gainesville VA Outpatient Clinic",
          ],
          neighborhoods: [
            "Gainesville 32601",
            "Gainesville 32603",
            "Gainesville 32605",
            "Gainesville 32608",
            "Haile Plantation",
            "Tioga",
            "Newberry",
            "High Springs",
            "Alachua",
            "Waldo",
          ],
          testimonials: [
            {
              name: "Barbara L.",
              location: "Gainesville, FL",
              text: "Paxton made the whole Medicare enrollment process simple. I had no idea there were so many deadlines to keep track of. He walked me through everything, helped me pick the right plan for my doctors at UF Health, and I never felt pressured. Completely free service.",
            },
            {
              name: "Robert K.",
              location: "Gainesville, FL",
              text: "I was turning 65 and completely lost when it came to Medicare. Paxton explained the Initial Enrollment Period, the difference between Medicare Advantage and Medigap, and helped me avoid a Part B late penalty. I could not have done it without him.",
            },
          ],
          faqs: [
            {
              q: "When should I enroll in Medicare in Gainesville?",
              a: "Your Initial Enrollment Period (IEP) is a 7-month window that begins 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. Enrolling in the first 3 months of your IEP ensures your coverage starts on the first day of your birthday month. Missing this window without qualifying for a Special Enrollment Period can result in permanent late enrollment penalties.",
            },
            {
              q: "What happens if I miss my Medicare enrollment deadline?",
              a: "Missing your Initial Enrollment Period without a qualifying reason results in a Part B late enrollment penalty of 10% added to your monthly premium for every 12-month period you were eligible but did not enroll. This penalty is permanent and lasts for as long as you have Part B. A Part D late penalty also applies if you go more than 63 days without creditable drug coverage.",
            },
            {
              q: "Can I get help enrolling in Medicare if I am still working at 65?",
              a: "Yes, and this is one of the most important situations to get guidance on. If you have employer coverage through a company with 20 or more employees, you may be able to delay Medicare enrollment without penalty. However, the rules are complex and depend on your employer's plan structure. Our agents help Gainesville residents who are still working navigate this decision correctly to avoid costly mistakes.",
            },
            {
              q: "What is the Annual Enrollment Period and how does it affect Gainesville residents?",
              a: "The Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. During this window, you can switch from Original Medicare to Medicare Advantage, switch between Medicare Advantage plans, or change your Part D drug plan. Changes take effect January 1. This is the most important window for reviewing your coverage each year, as plan benefits, premiums, and networks change annually.",
            },
            {
              q: "Do I need help enrolling in Medicare or can I do it myself?",
              a: "You can enroll directly through Social Security or Medicare.gov, but many Gainesville residents find the process confusing, especially when choosing between plan types. A licensed independent agent helps you compare every plan available in your ZIP code, verify your doctors are in-network, check your drug formulary, and avoid costly enrollment mistakes, all at no cost to you.",
            },
            {
              q: "How do I enroll in a Medicare Supplement plan in Gainesville?",
              a: "Medicare Supplement (Medigap) plans are sold by private insurance carriers and require a separate application from Medicare enrollment. The best time to enroll is during your 6-month Medigap Open Enrollment Period, which begins the month you are both 65 and enrolled in Part B. During this window, carriers cannot deny coverage or charge higher premiums based on your health. Outside this window, medical underwriting typically applies in Florida.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Gainesville", href: "/medicare-agent-gainesville" },
            { label: "Medicare Supplement Plans Gainesville", href: "/medicare-supplement-insurance-plans-gainesville" },
            { label: "Compare Medicare Plans Gainesville", href: "/comparing-medicare-plans-gainesville" },
            { label: "Medicare Advantage Plans Gainesville", href: "/medicare-advantage-plans-gainesville-florida" },
            { label: "Medicare Enrollment Assistance Tallahassee", href: "/medicare-enrollment-assistance-tallahassee" },
            { label: "Medicare Enrollment Timeline", href: "/enrollment-timeline" },
            { label: "Medicare Late Enrollment Penalties", href: "/medicare-penalty-calculator" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
