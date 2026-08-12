import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does COBRA Count as Employer Coverage for Medicare? | MedicareInfoPro FAQ",
  description: "COBRA is continuation coverage, not active employer coverage for Medicare Part B timing. Learn when to enroll, how the 8-month period works, and what to do before COBRA ends.",
  alternates: { canonical: "https://medicareinfopro.com/faqs/medicare-and-cobra" },
};

const FAQ = {
  question: "Does COBRA count as employer coverage for Medicare?",
  shortAnswer:
    "No. COBRA is continuation coverage, not coverage based on current active employment. It generally does not extend the 8-month Medicare Part B Special Enrollment Period that begins when active employment or job-based coverage ends. Do not wait until COBRA ends to review Part B enrollment.",
  category: "Eligibility and Enrollment",
  updated: "August 2026",
  sections: [
    {
      heading: "Why the distinction matters",
      content:
        "COBRA can continue a former employer's group health plan for a limited period after a job loss, reduction in hours, divorce, or another qualifying event. It is real health coverage, but Medicare does not treat it the same as employer coverage from your or your spouse's current employment for Part B enrollment purposes. If you are Medicare-eligible and rely on COBRA to delay Part B, you can face a coverage gap and a Part B late-enrollment penalty.<br><br>Medicare's official guidance says that the 8-month Part B Special Enrollment Period starts when you stop working or when job-based coverage ends, whichever happens first. That clock does not restart because you elected COBRA. For the broader rule, see our <a href='/working-past-65' class='text-[#1a3fa8] underline underline-offset-2'>working past 65 guide</a>.",
    },
    {
      heading: "What happens when you have both COBRA and Medicare?",
      content:
        "If you have both Medicare and COBRA, Medicare generally pays first and COBRA may pay second, subject to the COBRA plan's terms. If you have COBRA before enrolling in Medicare, Medicare warns that your COBRA coverage will probably end when you sign up. Ask the COBRA administrator for a written explanation of how enrollment in Part A and Part B will affect your plan.<br><br>For a fuller explanation of which coverage pays first, visit our <a href='/medicare-secondary-payer-rules' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Secondary Payer rules guide</a>.",
    },
    {
      heading: "What should I do before my job coverage ends?",
      content:
        "Write down your final day of active employment and final day of active group coverage. Ask the benefits office whether your prescription coverage is creditable for Part D purposes. Then review your Part B enrollment date before you elect COBRA or allow it to continue as your only coverage. You can use our <a href='/enrollment-timeline' class='text-[#1a3fa8] underline underline-offset-2'>Medicare enrollment timeline</a> and <a href='/what-is-the-special-enrollment-period' class='text-[#1a3fa8] underline underline-offset-2'>Special Enrollment Period guide</a> to understand the deadlines that may apply.<br><br>COBRA drug coverage can protect you from a Part D penalty only if it is creditable. Keep the creditable-coverage notice with your Medicare records.",
    },
  ],
  relatedFaqs: [
    { question: "When should I enroll in Medicare if I am still working?", href: "/working-past-65" },
    { question: "What is a Medicare Special Enrollment Period?", href: "/what-is-the-special-enrollment-period" },
    { question: "What is the Medicare Part D late enrollment penalty?", href: "/faqs/medicare-part-d-late-enrollment-penalty" },
    { question: "How do Medicare Secondary Payer rules work?", href: "/medicare-secondary-payer-rules" },
  ],
  officialSources: [
    { label: "Medicare.gov: COBRA coverage", href: "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65/cobra-coverage" },
    { label: "Medicare.gov: Working past 65", href: "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65" },
    { label: "U.S. Department of Labor: COBRA FAQs", href: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/cobra-continuation-health-coverage-workers" },
  ],
};

export default function MedicareAndCobraFaqPage() {
  return <FaqQuestionPage faq={FAQ} />;
}
