import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Oxygen Therapy? | MedicareInfoPro FAQ",
  description: "Learn when Medicare Part B covers home oxygen equipment, what medical-necessity rules apply, how the 36-month rental period works, and what you may pay.",
  alternates: { canonical: "https://medicareinfopro.com/faqs/does-medicare-cover-oxygen-therapy" },
};

const FAQ = {
  question: "Does Medicare cover oxygen therapy?",
  shortAnswer:
    "Yes. Original Medicare Part B can cover home oxygen equipment and supplies as durable medical equipment when a doctor or other treating practitioner determines that you meet Medicare's medical-necessity requirements. After you meet the Part B deductible, you generally pay 20% of the Medicare-approved amount. Medicare usually rents the equipment rather than buying it outright.",
  category: "Medical Equipment",
  updated: "August 2026",
  sections: [
    {
      heading: "What oxygen equipment can Medicare cover?",
      content:
        "Medicare's home-oxygen benefit can include stationary oxygen concentrators, portable equipment, oxygen contents, tubing, cannulas, masks, and other necessary accessories. The equipment must be ordered for home use and supplied by a Medicare-enrolled durable medical equipment supplier. Medicare's <a href='/coverage/medical-equipment' class='text-[#1a3fa8] underline underline-offset-2'>medical equipment coverage guide</a> explains the broader Part B DME rules that also apply to many other covered items.<br><br>Original Medicare coverage is based on medical necessity and the supplier rules. A Medicare Advantage plan must provide at least the same Medicare-covered services, but its network, prior authorization, supplier options, and cost-sharing can differ. Review your plan materials or use our <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare versus Medicare Advantage comparison</a> before arranging equipment.",
    },
    {
      heading: "What medical-necessity rules apply?",
      content:
        "A treating practitioner must order the oxygen and document that it is medically necessary. Medicare's National Coverage Determination contains detailed clinical criteria, including qualifying blood-gas or oxygen-saturation testing in many situations. Your supplier and clinical team handle much of the documentation, but you should ask whether the order, test results, and medical record support have been sent before delivery.<br><br>Coverage is not based only on a diagnosis or on a preference for oxygen at home. Ask the ordering clinician how your test results meet the coverage standard and keep copies of the order and supplier paperwork. If your needs are tied to home health services, our <a href='/does-medicare-cover-home-health-care' class='text-[#1a3fa8] underline underline-offset-2'>Medicare home health care guide</a> explains what is and is not included in that separate benefit.",
    },
    {
      heading: "How much does home oxygen cost with Medicare?",
      content:
        "After the Part B deductible, Original Medicare generally pays 80% of the Medicare-approved rental amount and you pay the remaining 20%. Medicare generally rents oxygen equipment for a 36-month period. During that rental period, the supplier provides the oxygen equipment, supplies, and routine service covered by the monthly payment. Medicare.gov explains that the supplier must continue to provide equipment and service for an additional period after the rental ends if you still have a medical need.<br><br>Use a supplier that accepts Medicare assignment whenever possible. That can help limit charges to the Medicare-approved amount. If you have a Medigap policy, it may help with Part B cost-sharing. See our <a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Supplement guide</a> and <a href='/medicare-advantage-vs-medigap' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage versus Medigap comparison</a> for the cost-sharing differences.",
    },
    {
      heading: "What should you do before equipment is delivered?",
      content:
        "Confirm that your clinician has sent the order and supporting records, ask whether your supplier is enrolled in Medicare and accepts assignment, and request a written explanation of your expected share of the cost. If you are enrolled in Medicare Advantage, call the plan before delivery to ask about supplier-network and prior-authorization requirements.<br><br>If a claim is denied or the supplier gives you conflicting information, do not assume you must pay the full amount immediately. Ask for the reason in writing and review your Medicare Summary Notice or plan Explanation of Benefits. A licensed agent can help you understand plan rules, while your clinician and supplier handle the medical documentation.",
    },
  ],
  relatedFaqs: [
    { question: "Does Medicare cover diabetic shoes?", href: "/faqs/does-medicare-cover-diabetic-shoes" },
    { question: "Does Medicare cover lift chairs?", href: "/faqs/does-medicare-cover-lift-chairs" },
    { question: "Does Medicare cover home health care?", href: "/does-medicare-cover-home-health-care" },
    { question: "Does Medicare cover scooters and wheelchairs?", href: "/medicare-coverage-for-scooters" },
  ],
  officialSources: [
    { label: "Medicare.gov: Oxygen equipment and accessories", href: "https://www.medicare.gov/coverage/oxygen-equipment-accessories" },
    { label: "CMS: National Coverage Determination for home use of oxygen", href: "https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?NCDId=169" },
  ],
};

export default function MedicareOxygenTherapyFaqPage() {
  return <FaqQuestionPage faq={FAQ} />;
}
