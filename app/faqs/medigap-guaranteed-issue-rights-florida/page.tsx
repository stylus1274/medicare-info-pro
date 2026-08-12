import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "What Are Medigap Guaranteed Issue Rights in Florida? | MedicareInfoPro FAQ",
  description: "Learn when Florida Medicare beneficiaries may have a protected right to buy a Medigap policy without medical underwriting, what proof to keep, and when to apply.",
  alternates: { canonical: "https://medicareinfopro.com/faqs/medigap-guaranteed-issue-rights-florida" },
};

const FAQ = {
  question: "What are Medigap guaranteed issue rights in Florida?",
  shortAnswer:
    "Medigap guaranteed issue rights are limited protections that can require an insurer to sell you certain Medicare Supplement policies without denying you or charging more because of health problems. They apply during your initial Medigap Open Enrollment Period and after certain qualifying coverage changes. The event and your timing determine whether the protection applies.",
  category: "Medigap and Medicare Supplement",
  updated: "August 2026",
  sections: [
    {
      heading: "Your first six months are the broadest protection",
      content:
        "Your Medigap Open Enrollment Period begins when you are 65 or older and your Medicare Part B coverage starts. It lasts six months. During that time, you can buy any Medigap policy sold in Florida, even if you have health problems. After that period, a carrier can generally use medical underwriting unless you have another protected right.<br><br>Our <a href='/medigap-open-enrollment' class='text-[#1a3fa8] underline underline-offset-2'>Medigap Open Enrollment guide</a> explains how that six-month period works and why the date your Part B begins matters.",
    },
    {
      heading: "When can a guaranteed issue right apply later?",
      content:
        "Federal protections may apply after certain events, such as a Medicare Advantage plan leaving Medicare or your service area, a move outside a Medicare SELECT service area, loss of certain employer or union coverage that supplements Medicare, or a qualifying trial right after trying Medicare Advantage. The available Medigap policy choices can depend on the exact event.<br><br>Medicare advises applicants in many protected situations to apply no more than 63 days after qualifying coverage ends. Keep termination letters, plan notices, emails, and other documents that prove why the coverage ended. For plan-switching context, read <a href='/medicare-advantage-vs-medigap' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage versus Medigap</a> and <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare versus Medicare Advantage</a>.",
    },
    {
      heading: "What should Florida consumers do before changing coverage?",
      content:
        "Do not assume a fall Annual Enrollment Period change creates a general right to buy Medigap without underwriting. It does not automatically do so. Do not cancel an existing policy until you know that a replacement policy has been approved and you understand its effective date.<br><br>The Florida Office of Insurance Regulation offers a Medicare Supplement resource center with consumer information, rate-search tools, forms, and SHINE counseling resources. For a Florida plan comparison, review our <a href='/medicare-supplement-plans-florida-2026' class='text-[#1a3fa8] underline underline-offset-2'>Florida Medicare Supplement plans guide</a>. You can also compare the two most common Medigap options in our <a href='/medicare-supplement-plan-g-vs-plan-n' class='text-[#1a3fa8] underline underline-offset-2'>Plan G versus Plan N guide</a>.",
    },
  ],
  relatedFaqs: [
    { question: "When is the best time to buy a Medigap plan?", href: "/medigap-open-enrollment" },
    { question: "What is the difference between Medicare Advantage and Medigap?", href: "/medicare-advantage-vs-medigap" },
    { question: "What is Medigap Plan G?", href: "/plan-g-complete-guide" },
    { question: "How do Medigap premiums increase?", href: "/medigap-premium-increases" },
  ],
  officialSources: [
    { label: "Medicare.gov: Buying a Medigap policy", href: "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/buying-a-medigap-policy" },
    { label: "Medicare.gov: Changing a Medigap policy", href: "https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies" },
    { label: "Florida Office of Insurance Regulation: Medicare Supplement", href: "https://floir.gov/life-health/medicare-supplement" },
  ],
};

export default function MedigapGuaranteedIssueRightsFloridaFaqPage() {
  return <FaqQuestionPage faq={FAQ} />;
}
