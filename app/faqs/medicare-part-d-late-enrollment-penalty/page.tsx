import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "What Is the Medicare Part D Late Enrollment Penalty? | MedicareInfoPro FAQ",
  description: "Learn when the Medicare Part D late enrollment penalty applies, the 63-day creditable-coverage rule, the 2026 calculation, and how to request reconsideration.",
  alternates: { canonical: "https://medicareinfopro.com/faqs/medicare-part-d-late-enrollment-penalty" },
};

const FAQ = {
  question: "What is the Medicare Part D late enrollment penalty?",
  shortAnswer:
    "The Part D late enrollment penalty is an extra amount added to your monthly Medicare drug-plan premium if you go 63 continuous days or more after becoming eligible without Part D or other creditable prescription drug coverage. In 2026, Medicare calculates it as 1% of $38.99 for each full uncovered month, then rounds to the nearest 10 cents.",
  category: "Prescription Drug Coverage",
  updated: "August 2026",
  sections: [
    {
      heading: "How does the 63-day rule work?",
      content:
        "You may owe the penalty if you do not join Part D when first eligible and then go 63 days or more in a row without Part D or other creditable prescription drug coverage. Creditable coverage is expected to pay, on average, at least as much as standard Medicare drug coverage. A plan from an employer, union, VA, TRICARE, or another source may be creditable, but you should ask the plan for written confirmation.<br><br>Discount cards, manufacturer coupons, free clinics, and drug discount websites are not creditable drug coverage. For the basics, visit our <a href='/medicare-part-d' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part D guide</a> and <a href='/how-medicare-part-d-works' class='text-[#1a3fa8] underline underline-offset-2'>how Medicare Part D works</a>.",
    },
    {
      heading: "What does the 2026 calculation look like?",
      content:
        "Medicare uses the national base beneficiary premium, not your individual plan's premium. For 2026, the base amount is $38.99. If you had 14 full uncovered months, Medicare would calculate 14% of $38.99, or $5.46, then round the result to $5.50. That $5.50 is added to the plan premium for 2026.<br><br>The number can change from year to year because the national base beneficiary premium can change. The penalty generally continues for as long as you have Medicare drug coverage. Our <a href='/medicare-part-d-out-of-pocket-cap' class='text-[#1a3fa8] underline underline-offset-2'>Part D out-of-pocket cap guide</a> explains a separate 2026 Part D cost rule.",
    },
    {
      heading: "Can I avoid or challenge the penalty?",
      content:
        "You can usually avoid the penalty by enrolling when first eligible or maintaining continuous creditable drug coverage. Keep every creditable-coverage notice, because a new drug plan can ask for proof of your prior coverage. People who qualify for Extra Help generally do not pay the Part D late enrollment penalty.<br><br>If you think a plan assessed the penalty incorrectly, the plan should send a reconsideration notice and request form. You can request a review and provide proof of creditable coverage. See our <a href='/how-to-get-help-paying-for-medicare' class='text-[#1a3fa8] underline underline-offset-2'>help paying for Medicare guide</a> for Extra Help information and our <a href='/faqs/medicare-and-cobra' class='text-[#1a3fa8] underline underline-offset-2'>Medicare and COBRA FAQ</a> if an employment transition is involved.",
    },
  ],
  relatedFaqs: [
    { question: "Does COBRA count as employer coverage for Medicare?", href: "/faqs/medicare-and-cobra" },
    { question: "What is a Medicare Special Enrollment Period?", href: "/what-is-the-special-enrollment-period" },
    { question: "How does Medicare Part D work?", href: "/how-medicare-part-d-works" },
    { question: "How can I get help paying for Medicare?", href: "/how-to-get-help-paying-for-medicare" },
  ],
  officialSources: [
    { label: "Medicare.gov: Avoid late enrollment penalties", href: "https://www.medicare.gov/basics/costs/medicare-costs/avoid-penalties" },
    { label: "Medicare.gov: Creditable prescription drug coverage", href: "https://www.medicare.gov/health-drug-plans/part-d/basics/creditable-coverage" },
    { label: "CMS: Part D late enrollment penalty appeals", href: "https://www.cms.gov/medicare/appeals-grievances/prescription-drug/late-enrollment-penalty-appeals" },
  ],
};

export default function MedicarePartDLateEnrollmentPenaltyFaqPage() {
  return <FaqQuestionPage faq={FAQ} />;
}
