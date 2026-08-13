import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Diabetic Shoes? | MedicareInfoPro FAQ",
  description: "Learn when Medicare Part B covers therapeutic diabetic shoes and inserts, the qualifying foot conditions, provider requirements, and expected out-of-pocket costs.",
  alternates: { canonical: "https://medicareinfopro.com/faqs/does-medicare-cover-diabetic-shoes" },
};

const FAQ = {
  question: "Does Medicare cover diabetic shoes?",
  shortAnswer:
    "Yes. Medicare Part B can cover therapeutic shoes and inserts for people with diabetes who have certain diabetes-related foot conditions. You need documentation from the clinician managing your diabetes, a prescription from an appropriate practitioner, and a Medicare-enrolled supplier. After the Part B deductible, you generally pay 20% of the Medicare-approved amount if the supplier accepts assignment.",
  category: "Medical Equipment",
  updated: "August 2026",
  sections: [
    {
      heading: "Who may qualify for therapeutic shoes and inserts?",
      content:
        "Medicare requires both diabetes and at least one qualifying foot condition. Examples listed by Medicare and CMS include a previous partial or complete foot amputation, a history of foot ulceration, pre-ulcerative calluses, peripheral neuropathy with evidence of callus formation, foot deformity, or poor circulation. The clinician treating your diabetes must certify that you have diabetes and need therapeutic shoes or inserts because of your condition.<br><br>This is more specific than simply having diabetes or wanting a more comfortable shoe. If you use Medicare for diabetes medications, you may also find our <a href='/does-medicare-cover-ozempic' class='text-[#1a3fa8] underline underline-offset-2'>Ozempic coverage guide</a> and <a href='/does-medicare-cover-wegovy' class='text-[#1a3fa8] underline underline-offset-2'>Wegovy coverage guide</a> useful for understanding how prescription coverage works separately from Part B equipment benefits.",
    },
    {
      heading: "What does Medicare typically cover each year?",
      content:
        "For eligible people, Medicare may cover one pair of custom-molded shoes and three pairs of inserts, or one pair of extra-depth shoes and three pairs of inserts, during a calendar year. Medicare can also cover separate insert replacements in certain circumstances. The exact item must be prescribed and furnished by qualified practitioners and suppliers who meet Medicare's requirements.<br><br>Therapeutic footwear is part of the broader Part B durable medical equipment benefit. Visit our <a href='/coverage/medical-equipment' class='text-[#1a3fa8] underline underline-offset-2'>medical equipment coverage page</a> for a broader explanation of supplier enrollment, assignment, and Part B cost-sharing.",
    },
    {
      heading: "How much will you pay?",
      content:
        "After you meet the Part B deductible, you generally pay 20% of the Medicare-approved amount when the supplier accepts assignment. A Medigap policy may help pay some or all of the Part B coinsurance, depending on the plan. A Medicare Advantage plan must cover Medicare-covered therapeutic shoes, but it may use network suppliers, prior authorization, and different copays or coinsurance.<br><br>Compare the cost protections in <a href='/medicare-advantage-vs-medigap' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage versus Medigap</a> and use our <a href='/medicare-supplement-plan-g-vs-plan-n' class='text-[#1a3fa8] underline underline-offset-2'>Plan G versus Plan N guide</a> if you are comparing Medigap cost-sharing options.",
    },
    {
      heading: "How can you avoid a coverage problem?",
      content:
        "Before ordering, confirm that the clinician managing your diabetes will complete the required certification and that the prescribing practitioner and supplier are properly enrolled in Medicare. Ask the supplier whether it accepts assignment and request an estimate of your share before the items are made. Keep copies of the prescription, certification, and supplier paperwork.<br><br>Do not let a supplier substitute general comfort shoes for a covered therapeutic-shoe order without explaining the difference. The Medicare benefit has specific clinical and supplier rules, and ordinary footwear is not automatically covered.",
    },
  ],
  relatedFaqs: [
    { question: "Does Medicare cover oxygen therapy?", href: "/faqs/does-medicare-cover-oxygen-therapy" },
    { question: "Does Medicare cover lift chairs?", href: "/faqs/does-medicare-cover-lift-chairs" },
    { question: "How does Medicare Part B work?", href: "/medicare-part-b" },
    { question: "Does Medicare cover prescription drugs?", href: "/coverage/prescription-drugs" },
  ],
  officialSources: [
    { label: "Medicare.gov: Therapeutic shoes and inserts", href: "https://www.medicare.gov/coverage/therapeutic-shoes-inserts" },
    { label: "CMS: Therapeutic footwear compliance tips", href: "https://www.cms.gov/training-education/medicare-learning-networkr-mln/compliance/medicare-provider-compliance-tips/therapeutic-footwear" },
  ],
};

export default function MedicareDiabeticShoesFaqPage() {
  return <FaqQuestionPage faq={FAQ} />;
}
