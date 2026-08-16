import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const canonicalUrl = "https://medicareinfopro.com/part-d-2000-cap";
const publishedDate = "2026-01-01";
const modifiedDate = "2026-08-16";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Medicare Part D $2,100 Out-of-Pocket Cap: 2026 Guide",
  description:
    "Learn how the 2026 $2,100 Medicare Part D out-of-pocket cap works, what counts, what does not count, and how the Medicare Prescription Payment Plan affects monthly bills.",
  url: canonicalUrl,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
  author: {
    "@type": "Person",
    name: "Greg Wohl",
    jobTitle: "Licensed Medicare Specialist",
    url: "https://medicareinfopro.com/greg-wohl",
  },
  publisher: {
    "@type": "Organization",
    name: "Medicare Information Project",
    url: "https://medicareinfopro.com",
    "@id": "https://medicareinfopro.com/#organization",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Medicare Part D out-of-pocket cap in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The annual out-of-pocket threshold for covered Part D drugs is $2,100 in 2026. After you reach it, you pay no cost sharing for covered Part D drugs for the rest of that calendar year.",
      },
    },
    {
      "@type": "Question",
      name: "Do Part D premiums count toward the $2,100 cap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The monthly premium for your drug plan does not count toward the Part D out-of-pocket cap. The cap applies to covered prescription drug cost sharing, such as deductible, copayments, and coinsurance, along with certain qualifying payments made on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Medicare Prescription Payment Plan lower drug costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Medicare Prescription Payment Plan can spread covered Part D drug costs across monthly bills, but it does not reduce the total amount you owe for those drugs or lower your plan premium.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Part D cap apply to all prescriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It applies to Part D drugs covered by your plan. A drug that is excluded or not covered by your plan may not count toward the cap, so review the plan formulary and coverage rules.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Part D $2,100 Out-of-Pocket Cap: 2026 Guide",
  description:
    "Understand the 2026 $2,100 Medicare Part D out-of-pocket cap, the $615 maximum deductible, what counts toward the cap, and the Medicare Prescription Payment Plan.",
  keywords: [
    "Medicare Part D 2100 cap",
    "Medicare drug out of pocket cap 2026",
    "Part D out of pocket maximum 2026",
    "Medicare Prescription Payment Plan",
    "Part D deductible 2026",
  ],
  openGraph: {
    title: "Medicare Part D $2,100 Out-of-Pocket Cap: 2026 Guide",
    description:
      "A current explanation of the Part D cap, covered costs, plan premiums, the 2026 deductible limit, and the Medicare Prescription Payment Plan.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Prescription medication bottles representing Medicare Part D drug costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Part D $2,100 Out-of-Pocket Cap: 2026 Guide",
    description: "How the 2026 Part D cap works, what counts toward it, and how payments can be spread across the year.",
  },
  alternates: { canonical: canonicalUrl },
};

const POST = {
  slug: "part-d-2000-cap",
  title: "The Medicare Part D $2,100 Out-of-Pocket Cap: 2026 Guide",
  excerpt:
    "In 2026, Medicare Part D limits your out-of-pocket cost sharing for covered drugs to $2,100 for the calendar year. Learn what counts, what does not, and how the Medicare Prescription Payment Plan changes the timing of bills rather than your total cost.",
  category: "Part D" as const,
  author: GREG_WOHL,
  date: "August 16, 2026",
  readTime: "10 min read",
  featuredImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
  image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
  imageAlt: "Prescription medication bottles representing Medicare Part D drug costs",
  keyTakeaways: [
    {
      label: "$2,100 threshold in 2026",
      text: "After your covered Part D drug spending reaches the annual out-of-pocket threshold, you pay no cost sharing for covered Part D drugs for the rest of the calendar year.",
    },
    {
      label: "Premiums do not count",
      text: "Your monthly Part D premium is separate from the cap. The cap applies to covered-drug cost sharing and certain qualifying payments made on your behalf.",
    },
    {
      label: "The deductible can be up to $615",
      text: "A plan may have no deductible, but no Part D plan may have a deductible higher than $615 in 2026.",
    },
    {
      label: "Payment plan changes timing, not price",
      text: "The Medicare Prescription Payment Plan can spread covered drug costs over monthly bills, but it does not reduce what you owe overall or your monthly premium.",
    },
  ],
  quickFacts: [
    { label: "2026 out-of-pocket threshold", value: "$2,100" },
    { label: "2026 maximum deductible", value: "$615" },
    { label: "After the threshold", value: "$0 cost sharing for covered Part D drugs" },
    { label: "Cap resets", value: "January 1 each year" },
  ],
  sections: [
    {
      type: "intro" as const,
      content: `Medicare Part D now has an annual limit on out-of-pocket cost sharing for covered prescription drugs. In 2026, that threshold is <strong>$2,100</strong>. Once you reach it, you pay no cost sharing for covered Part D drugs for the rest of the calendar year.<br /><br />The cap can offer meaningful protection if you use expensive medications. It does not mean every prescription is free, eliminate your plan premium, or replace the need to check whether a drug is on your plan's formulary. This guide explains the distinction so you can review your <a href='/coverage/prescription-drugs' class='text-[#1a3fa8] underline underline-offset-2'>Medicare prescription drug coverage</a> with realistic expectations.`,
    },
    {
      type: "section" as const,
      heading: "How the $2,100 Part D Cap Works",
      content: `In 2026, Medicare drug plans and Medicare Advantage plans with drug coverage generally move through three stages: a deductible stage, an initial coverage stage, and catastrophic coverage. A Part D plan can have a deductible of up to <strong>$615</strong> in 2026, although some plans have a lower deductible or none at all.<br /><br />After you meet the deductible, the standard benefit generally uses 25% coinsurance until your out-of-pocket spending for covered Part D drugs reaches $2,100. At that point, you automatically enter catastrophic coverage and pay no cost sharing for covered Part D drugs for the remainder of that calendar year. The <a href='https://www.medicare.gov/health-drug-plans/part-d/basics/costs' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>official Medicare.gov Part D cost guide</a> explains the current stages and plan limits.<br /><br />The threshold resets on January 1. If you reach it in October, you have zero cost sharing for covered drugs in November and December, then a new annual cycle starts the next January.`,
    },
    {
      type: "section" as const,
      heading: "What Counts Toward the Cap, and What Does Not",
      content: `Your deductible, copayments, and coinsurance for covered Part D drugs count toward the out-of-pocket threshold. Certain qualifying payments made on your behalf can count too, including some help available through <a href='/how-to-get-help-paying-for-medicare' class='text-[#1a3fa8] underline underline-offset-2'>Extra Help and other Medicare cost-assistance programs</a>.<br /><br />Your monthly Part D premium does <strong>not</strong> count toward the $2,100 threshold. The cap also does not make a drug count if your plan does not cover it. Drugs that are excluded from Part D, outside the plan's formulary, or obtained without following a required coverage rule may leave you with costs that do not count toward the cap. Check your formulary, pharmacy network, and any prior authorization or step-therapy requirements before assuming a medication will be covered.<br /><br />Your monthly Explanation of Benefits, or EOB, is an important record. It shows what you filled, what the plan paid, what you and others paid, your coverage stage, and the amounts that count toward your out-of-pocket costs.`,
    },
    {
      type: "inlineCta" as const,
      heading: "Not Sure Whether Your Drugs Are Covered?",
      body: "A licensed independent Medicare specialist can help you compare formularies, pharmacy networks, estimated drug costs, and plan rules before you enroll. Call 813-699-5559 or request a free consultation.",
    },
    {
      type: "section" as const,
      heading: "The Medicare Prescription Payment Plan Does Not Lower Drug Costs",
      content: `The Medicare Prescription Payment Plan is an optional payment option offered by all Medicare drug plans and Medicare Advantage plans with drug coverage. It can help you manage the timing of drug bills by spreading your share of covered Part D drug costs across monthly bills during the calendar year.<br /><br />It does <strong>not</strong> lower your total drug cost, reduce your monthly plan premium, or change what your plan covers. You still pay your plan premium separately. Instead of paying the pharmacy at the time you fill a prescription, your plan pays the pharmacy and then bills you for your share. The amount of a monthly bill can change based on your remaining balance and the number of months left in the year, so it is not necessarily an identical payment every month.<br /><br />The official <a href='https://www.medicare.gov/prescription-payment-plan' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Prescription Payment Plan overview</a> can help you decide whether the cash-flow benefit fits your situation.`,
    },
    {
      type: "section" as const,
      heading: "How the Cap Affects Plan Shopping",
      content: `The cap protects you after you reach it, but it does not make every Part D plan equally suitable. Before enrolling, compare whether your medications are on the formulary, their tier, any utilization-management rules, preferred pharmacies, the premium, and the deductible. A plan with a low premium can still be a poor fit if it places your medication on a costly tier or does not cover it.<br /><br />Review your Annual Notice of Change each fall and use Medicare Plan Compare during the <a href='/annual-enrollment-period-guide' class='text-[#1a3fa8] underline underline-offset-2'>Annual Enrollment Period</a> if your drugs, pharmacies, or plan rules have changed. If you are considering whether to delay Part D enrollment, review the <a href='/faqs/medicare-part-d-late-enrollment-penalty' class='text-[#1a3fa8] underline underline-offset-2'>Part D late-enrollment penalty FAQ</a> before making a coverage decision.`,
    },
    {
      type: "section" as const,
      heading: "Extra Help and Other Cost Assistance",
      content: `Extra Help is a Medicare program for people with limited income and resources that can reduce Part D premiums, deductibles, and copayments. People who qualify for Medicaid, a Medicare Savings Program, or Supplemental Security Income generally qualify automatically. If you do not qualify automatically, you can apply.<br /><br />Cost-assistance programs can interact with the Part D threshold, but eligibility and the amount of help are individual. Do not assume that the $2,100 cap is the only protection available. Start with our <a href='/how-to-get-help-paying-for-medicare' class='text-[#1a3fa8] underline underline-offset-2'>guide to getting help paying for Medicare</a>, then verify the programs available to you through Medicare or Social Security.`,
    },
    {
      type: "summary" as const,
      heading: "Bottom Line",
      content: "The 2026 Part D out-of-pocket threshold limits cost sharing for covered Part D drugs to $2,100 for the calendar year. It does not include plan premiums, and it does not make non-covered drugs count toward the threshold. Compare your actual medications, formulary rules, preferred pharmacies, premium, and deductible each year. Use the Medicare Prescription Payment Plan if spreading eligible drug bills would help your monthly budget, but remember that it changes payment timing rather than total cost.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "What is the Medicare Part D out-of-pocket cap in 2026?",
          answer: "The annual out-of-pocket threshold is $2,100 in 2026. After you reach it, you pay no cost sharing for covered Part D drugs for the rest of that calendar year.",
        },
        {
          question: "Do Part D premiums count toward the $2,100 cap?",
          answer: "No. Your monthly Part D premium does not count. The threshold applies to covered-drug cost sharing such as the deductible, copayments, and coinsurance, plus certain qualifying payments made on your behalf.",
        },
        {
          question: "Does the Part D cap apply to Medicare Advantage drug plans?",
          answer: "Yes. The Part D benefit rules apply to standalone Part D plans and Medicare Advantage plans that include Part D drug coverage.",
        },
        {
          question: "Does the Medicare Prescription Payment Plan save money?",
          answer: "No. It can spread your share of covered Part D drug costs across monthly bills, but it does not reduce total drug costs, your premium, or the amount you owe for covered medications.",
        },
        {
          question: "What happens if a drug is not on my plan formulary?",
          answer: "A drug that is not covered by your plan may not count toward the Part D out-of-pocket threshold. Ask about formulary exceptions, covered alternatives, and your appeal rights before paying out of pocket.",
        },
        {
          question: "When does the Part D cap reset?",
          answer: "The threshold resets each January 1. There is no carryover from one calendar year to the next.",
        },
      ],
    },
  ],
  relatedPosts: [
    { title: "Medicare Part D Late Enrollment Penalty", href: "/faqs/medicare-part-d-late-enrollment-penalty", category: "Part D" as const },
    { title: "Annual Enrollment Period Guide", href: "/annual-enrollment-period-guide", category: "Enrollment" as const },
    { title: "Help Paying for Medicare", href: "/how-to-get-help-paying-for-medicare", category: "Costs" as const },
    { title: "Medicare Costs at a Glance", href: "/costs-at-a-glance", category: "Costs" as const },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogPostClient post={POST} />
    </>
  );
}
