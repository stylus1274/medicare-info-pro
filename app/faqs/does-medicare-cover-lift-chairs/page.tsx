import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Lift Chairs? | MedicareInfoPro FAQ",
  description: "Learn when Medicare Part B covers a lift chair's seat-lift mechanism, what clinical requirements apply, what parts of the chair are excluded, and what you may pay.",
  alternates: { canonical: "https://medicareinfopro.com/faqs/does-medicare-cover-lift-chairs" },
};

const FAQ = {
  question: "Does Medicare cover lift chairs?",
  shortAnswer:
    "Medicare Part B may cover the motorized seat-lift mechanism in a lift chair when it is medically necessary, but it does not cover the full chair, upholstery, or furniture frame. To qualify, a doctor must prescribe the mechanism as part of an active treatment plan, and you must meet Medicare's clinical criteria. After the Part B deductible, you generally pay 20% of the Medicare-approved amount for the covered mechanism.",
  category: "Medical Equipment",
  updated: "August 2026",
  sections: [
    {
      heading: "What part of a lift chair does Medicare cover?",
      content:
        "A lift chair is partly furniture and partly durable medical equipment. Medicare can cover only the seat-lift mechanism that helps raise a person from a seated position. It does not cover the chair frame, cushion, upholstery, or other furniture components. This distinction is why a supplier may show both a covered amount for the mechanism and a separate amount you must pay for the chair itself.<br><br>For a broader overview of what qualifies as Part B equipment, see our <a href='/coverage/medical-equipment' class='text-[#1a3fa8] underline underline-offset-2'>Medicare medical equipment guide</a>. It also explains why coverage varies between a medically necessary device and an item primarily intended for convenience or comfort.",
    },
    {
      heading: "Who can qualify for a covered seat-lift mechanism?",
      content:
        "Medicare's policy says the person must generally have severe arthritis of the hip or knee, or a severe neuromuscular disease. The person must be completely unable to stand from a regular armchair or from any chair in the home, but able to walk once standing. A physician must prescribe the mechanism as part of an active treatment plan intended to improve or maintain the person's condition.<br><br>A diagnosis by itself does not guarantee coverage. The medical record and prescription need to show how the mechanism supports the treatment plan. If your mobility needs involve a power wheelchair or scooter instead, read our <a href='/medicare-coverage-for-scooters' class='text-[#1a3fa8] underline underline-offset-2'>Medicare scooter coverage guide</a> for the different criteria.",
    },
    {
      heading: "What will you pay for a lift chair?",
      content:
        "After you meet the Part B deductible, Original Medicare generally pays 80% of the Medicare-approved amount for the covered seat-lift mechanism and you pay 20%. You are also responsible for the non-covered chair portion. Ask the supplier for a written breakdown before ordering so you can see the covered mechanism amount and the furniture amount separately.<br><br>A Medigap policy may help with the Part B coinsurance for the covered mechanism. Medicare Advantage plans must cover Medicare-covered DME, but their supplier networks, prior authorization rules, and cost-sharing can be different. Our <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare versus Medicare Advantage guide</a> explains those structural differences.",
    },
    {
      heading: "What should you ask the supplier and your clinician?",
      content:
        "Ask whether the supplier is enrolled in Medicare and accepts assignment, whether it will submit the claim for the seat-lift mechanism, and what documentation it needs from your physician. Ask your clinician whether the treatment plan and prescription clearly address the Medicare criteria. If you have Medicare Advantage, contact the plan before delivery to confirm supplier-network and prior-authorization requirements.<br><br>If the supplier says the entire chair is covered, ask for that statement in writing. Medicare's policy covers the mechanism only, so a clear itemized estimate can prevent an unexpected bill.",
    },
  ],
  relatedFaqs: [
    { question: "Does Medicare cover oxygen therapy?", href: "/faqs/does-medicare-cover-oxygen-therapy" },
    { question: "Does Medicare cover diabetic shoes?", href: "/faqs/does-medicare-cover-diabetic-shoes" },
    { question: "Does Medicare cover bathroom safety devices?", href: "/faqs/does-medicare-cover-bathroom-safety-devices" },
    { question: "Does Medicare cover skilled nursing care?", href: "/coverage/skilled-nursing" },
  ],
  officialSources: [
    { label: "CMS: National Coverage Determination for seat-lift mechanisms", href: "https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?NCDId=221" },
    { label: "CMS: Seat lift mechanisms local coverage determination", href: "https://www.cms.gov/medicare-coverage-database/view/lcd.aspx?LCDId=33801" },
  ],
};

export default function MedicareLiftChairsFaqPage() {
  return <FaqQuestionPage faq={FAQ} />;
}
