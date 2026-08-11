import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Medicare Information Pro - Medicare Enrollment Assistance Kissimmee FL",
  "description": "Licensed independent Medicare agents providing free enrollment help for Kissimmee and Osceola County residents.",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-kissimmee/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Kissimmee",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Enrollment Assistance",
  "priceRange": "Free Consultation"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I enroll in Medicare in Kissimmee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Initial Enrollment Period is generally a seven-month window that begins three months before the month you turn 65, includes your birthday month, and ends three months after. Your circumstances may differ if you have qualifying employer coverage or another qualifying event."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get free Medicare enrollment help in Kissimmee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Information Pro provides Medicare enrollment assistance and plan comparisons at no cost to Kissimmee and Osceola County residents. Licensed agents are compensated by carriers when an enrollment is completed."
      }
    },
    {
      "@type": "Question",
      "name": "Can moving to Kissimmee create a Medicare Special Enrollment Period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A move that changes your Medicare Advantage or Part D service area can create a Special Enrollment Period. Exact eligibility and timing depend on your move and previous coverage, so review your situation as soon as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Can I enroll in Medicare while I am still working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Possibly. The right timing depends on the size and type of your employer coverage, as well as whether you or your spouse are actively working. Review your situation before delaying Medicare Part B because late-enrollment penalties can apply when coverage is not considered creditable or qualifying."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch Medicare plans during the Annual Enrollment Period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Annual Enrollment Period runs from October 15 through December 7 each year. During that time, you can change Medicare Advantage plans, return to Original Medicare subject to applicable rules, or change Part D drug plans."
      }
    }
  ]
} as const;

export const metadata: Metadata = {
  title: "Medicare Enrollment Assistance Kissimmee FL | Free Help Enrolling",
  description: "Get free Medicare enrollment assistance in Kissimmee, FL. Licensed independent agents help Osceola County residents understand Medicare deadlines, plan options, and enrollment steps.",
  keywords: [
    "medicare enrollment assistance kissimmee",
    "medicare enrollment help kissimmee fl",
    "medicare enrollment kissimmee florida",
    "medicare enrollment osceola county",
    "enroll in medicare kissimmee",
    "medicare agent enrollment kissimmee",
    "medicare special enrollment period kissimmee",
  ],
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-enrollment-assistance-kissimmee/",
  },
  openGraph: {
    title: "Medicare Enrollment Assistance Kissimmee FL | Free Help Enrolling",
    description: "Get free Medicare enrollment help in Kissimmee and Osceola County from a licensed independent agent.",
    url: "https://medicareinfopro.com/medicare-enrollment-assistance-kissimmee/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
};

export default function MedicareEnrollmentAssistanceKissimmeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocalAgentPage
        config={{
          pageType: "enrollment",
          city: "Kissimmee",
          cityFull: "Kissimmee, FL",
          county: "Osceola County",
          slug: "kissimmee",
          headline: "Medicare Enrollment Assistance in Kissimmee, FL",
          subheadline: "Medicare enrollment does not have to feel overwhelming. Our licensed independent agents help Kissimmee and Osceola County residents understand enrollment timing, compare plan choices, and complete the steps needed to enroll with confidence. The guidance is free and there is no pressure.",
          bodyText: "Whether you are turning 65, retiring, losing employer coverage, moving to Central Florida, or reviewing coverage during the Annual Enrollment Period, the applicable Medicare deadline can depend on your circumstances. We help you identify the enrollment window that applies to you, review your doctors and prescriptions, and compare your coverage options before you submit an application. Start with our <a href='/medicare-agent-kissimmee' class='text-[#1a3fa8] underline underline-offset-2'>Medicare agent guidance for Kissimmee residents</a> or use our <a href='/comparing-medicare-plans-kissimmee' class='text-[#1a3fa8] underline underline-offset-2'>Kissimmee Medicare plan comparison guide</a> to understand the differences between Original Medicare, Medicare Supplement coverage, and Medicare Advantage. If you are moving to Kissimmee, review our <a href='/what-is-the-special-enrollment-period' class='text-[#1a3fa8] underline underline-offset-2'>Special Enrollment Period guide</a> as soon as possible. There is no cost to you and no obligation.",
          metaTitle: "Medicare Enrollment Assistance Kissimmee FL | Free Help Enrolling",
          metaDescription: "Get free Medicare enrollment assistance in Kissimmee, FL. Licensed independent agents help Osceola County residents understand Medicare deadlines, plan options, and enrollment steps.",
          agent: {
            name: 'Jose F. Diaz "JD"',
            title: "Licensed Independent Agent",
            location: "Brandon, FL",
            photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/jUJZJkjvpOtQygpw.jpg",
          },
          nearbyLandmarks: [
            "HCA Florida Osceola Hospital",
            "AdventHealth Kissimmee",
            "Osceola Community Health Services",
            "Orlando Health St. Cloud Hospital",
          ],
          neighborhoods: [
            "Kissimmee 34741",
            "Kissimmee 34742",
            "Kissimmee 34743",
            "Kissimmee 34744",
            "Kissimmee 34746",
            "Kissimmee 34747",
            "Poinciana",
            "St. Cloud",
          ],
          testimonials: [],
          faqs: [
            {
              q: "When should I enroll in Medicare in Kissimmee?",
              a: "Your Initial Enrollment Period is generally a seven-month window that begins three months before the month you turn 65, includes your birthday month, and ends three months after. Your circumstances may differ if you have qualifying employer coverage or another qualifying event. We can help you identify the window that applies to you.",
            },
            {
              q: "Can I get free Medicare enrollment help in Kissimmee?",
              a: "Yes. We provide Medicare enrollment assistance and plan comparisons at no cost to Kissimmee and Osceola County residents. Licensed agents are compensated by carriers when an enrollment is completed, not by you.",
            },
            {
              q: "Can moving to Kissimmee create a Medicare Special Enrollment Period?",
              a: "A move that changes your Medicare Advantage or Part D service area can create a Special Enrollment Period. Exact eligibility and timing depend on your move and previous coverage, so review your situation as soon as possible after relocating.",
            },
            {
              q: "Can I enroll in Medicare while I am still working?",
              a: "Possibly. The right timing depends on the size and type of your employer coverage, as well as whether you or your spouse are actively working. Review your situation before delaying Medicare Part B because late-enrollment penalties can apply when coverage is not considered creditable or qualifying.",
            },
            {
              q: "What is the Part B late enrollment penalty?",
              a: "If you delay Part B after becoming eligible and do not have qualifying coverage, you may owe a late-enrollment penalty for as long as you have Part B. The exact amount depends on how long you went without qualifying coverage. Reviewing your timing before you decline or delay Part B can help you avoid mistakes.",
            },
            {
              q: "Can I switch Medicare plans during the Annual Enrollment Period?",
              a: "Yes. The Annual Enrollment Period runs from October 15 through December 7 each year. During that time, you can change Medicare Advantage plans, return to Original Medicare subject to applicable rules, or change Part D drug plans. Changes generally take effect January 1.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Kissimmee", href: "/medicare-agent-kissimmee" },
            { label: "Medicare Supplement Plans Kissimmee", href: "/medicare-supplement-insurance-plans-kissimmee" },
            { label: "Comparing Medicare Plans Kissimmee", href: "/comparing-medicare-plans-kissimmee" },
            { label: "Medicare Advantage Plans Kissimmee", href: "/medicare-advantage-plans-kissimmee-florida" },
            { label: "Medicare Enrollment Timeline", href: "/enrollment-timeline" },
            { label: "Medicare Special Enrollment Period Guide", href: "/what-is-the-special-enrollment-period" },
            { label: "Free Medicare Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
