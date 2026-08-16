import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const canonicalUrl = "https://medicareinfopro.com/why-choose-medigap-plan-g";
const publishedDate = "2024-08-01";
const modifiedDate = "2026-08-16";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Is Medigap Plan G Right for You? 2026 Coverage, Costs and Tradeoffs",
  description:
    "Understand what Medicare Supplement Plan G covers in 2026, what it does not cover, how premiums work, and how it compares with Plan N and Medicare Advantage.",
  url: canonicalUrl,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
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
      name: "What does Medigap Plan G cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard Medigap Plan G covers Medicare Part A coinsurance and hospital costs, Part B coinsurance or copayments, blood, Part A hospice coinsurance, skilled nursing facility coinsurance, the Part A deductible, Part B excess charges, and 80% of eligible foreign travel emergency costs. It does not cover the Part B deductible.",
      },
    },
    {
      "@type": "Question",
      name: "Does Plan G cover the Medicare Part B deductible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Plan G does not cover the annual Part B deductible. The Part B deductible is $283 in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can anyone buy Medigap Plan G?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must have Original Medicare Part A and Part B to buy a Medigap policy. Availability and pricing can be most favorable during the six-month Medigap Open Enrollment Period that begins when you are 65 or older and enrolled in Part B. Outside a protected period, underwriting may apply.",
      },
    },
    {
      "@type": "Question",
      name: "Are all Plan G policies the same?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most states, standardized Plan G benefits are the same regardless of insurer. Premiums, discounts, rate-setting methods, and customer service can differ, so compare the same plan letter across carriers.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Is Medigap Plan G Right for You? 2026 Coverage, Costs and Tradeoffs",
  description:
    "Learn what Medigap Plan G covers in 2026, its costs and limits, the $283 Part B deductible, and how Plan G compares with Plan N and Medicare Advantage.",
  keywords: [
    "Medigap Plan G",
    "Medicare Supplement Plan G",
    "Plan G coverage 2026",
    "Plan G vs Plan N",
    "high deductible Plan G",
    "Medigap Plan G Florida",
  ],
  openGraph: {
    title: "Is Medigap Plan G Right for You? 2026 Coverage, Costs and Tradeoffs",
    description:
      "A current guide to Plan G benefits, exclusions, enrollment timing, premiums, and comparisons with Plan N and Medicare Advantage.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare Supplement Plan G documents and cost planning materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Medigap Plan G Right for You? 2026 Coverage, Costs and Tradeoffs",
    description:
      "A current guide to Plan G benefits, exclusions, enrollment timing, and premium comparisons.",
  },
  alternates: { canonical: canonicalUrl },
};

const POST = {
  slug: "why-choose-medigap-plan-g",
  title: "Is Medigap Plan G Right for You? 2026 Coverage, Costs and Tradeoffs",
  excerpt:
    "Plan G is one of the most comprehensive Medigap options available to people new to Medicare, but it is not automatically the best fit for every budget or care preference. Learn what it covers, what you still pay, and how to compare it.",
  category: "Supplements" as const,
  date: "August 16, 2026",
  readTime: "10 min read",
  author: GREG_WOHL,
  featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  imageAlt: "Medicare Supplement Plan G documents and cost planning materials",
  keyTakeaways: [
    "Standard Plan G covers nearly all of the standardized Medigap benefits, but it does not pay the annual Part B deductible.",
    "The Part B deductible is $283 in 2026. You also pay a separate monthly Plan G premium and your Part B premium.",
    "Plan G benefits are standardized in most states, but premiums and rating methods vary by carrier.",
    "Your six-month Medigap Open Enrollment Period is generally the best time to buy a policy because later applications can be subject to underwriting unless you have a protected right.",
  ],
  quickFacts: [
    { label: "Part B deductible not covered", value: "$283 in 2026" },
    { label: "High-deductible Plan G", value: "$2,950 deductible in 2026" },
    { label: "Who can buy Medigap", value: "People with Original Medicare Part A and B" },
    { label: "Standard benefits", value: "Same Plan G benefits in most states" },
  ],
  sections: [
    {
      type: "intro" as const,
      content: `Medigap Plan G is a popular Medicare Supplement option because it pays many of the cost-sharing amounts left by Original Medicare. It can be a strong fit for someone who values broad provider access and more predictable medical cost sharing. It is not, however, automatically the best Medicare choice for every person.<br /><br />The right comparison starts with the facts: what Plan G covers, what it does not cover, what you still pay, when you can buy it, and how it differs from alternatives such as <a href='/medicare-supplement-plan-g-vs-plan-n' class='text-[#1a3fa8] underline underline-offset-2'>Medigap Plan N</a> or <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage</a>.`,
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Plan G covers most standardized gaps",
          text: "It pays the Part A deductible, Part A and Part B coinsurance, skilled nursing facility coinsurance, Part B excess charges, and other listed standardized benefits.",
        },
        {
          label: "You still pay the Part B deductible",
          text: "Plan G does not cover the $283 Part B deductible in 2026. It also does not include prescription drug, dental, vision, hearing, or routine long-term care coverage.",
        },
        {
          label: "Premiums are not standardized",
          text: "The medical benefits for the same Plan G letter are standardized in most states, but the price can vary substantially across insurance companies.",
        },
        {
          label: "Enrollment timing matters",
          text: "The six-month Medigap Open Enrollment Period begins when you are 65 or older and enrolled in Part B. After that, underwriting may apply unless you have a guaranteed-issue right.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Does Medigap Plan G Cover in 2026?",
      content: `Medigap is extra insurance sold by private companies to help pay your share of certain Original Medicare costs. In most states, policies with the same letter must offer the same standardized benefits. Standard Plan G covers the Part A coinsurance and hospital costs for up to an additional 365 days after Medicare benefits are used, Part B coinsurance or copayments, the first three pints of blood, Part A hospice coinsurance, skilled nursing facility care coinsurance, the Part A deductible, Part B excess charges, and 80% of eligible foreign travel emergency costs.<br /><br />The official <a href='https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medicare.gov Medigap benefit chart</a> provides the standardized benefit comparison. It is the best source for confirming what a lettered plan covers before you compare premiums.<br /><br />Plan G generally works with Original Medicare. You cannot use a Medigap policy while you are enrolled in a Medicare Advantage plan. If you are weighing the two paths, review our <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare vs. Medicare Advantage guide</a> first.`,
    },
    {
      type: "section" as const,
      heading: "What Plan G Does Not Cover",
      content: `Plan G does not cover the annual Medicare Part B deductible. In 2026, that deductible is <strong>$283</strong>. Once you meet it, Plan G pays the standardized Part B coinsurance or copayment benefit, subject to the terms of your policy and Medicare-covered services.<br /><br />Plan G also does not include Part D prescription drug coverage, routine dental, routine vision, routine hearing, private-duty nursing, or custodial long-term care. Some people obtain those services through separate coverage, while others choose a different Medicare path based on their priorities. Our <a href='/does-medicare-cover-dental' class='text-[#1a3fa8] underline underline-offset-2'>Medicare dental coverage guide</a> explains one common coverage gap.<br /><br />You will pay your Medigap premium in addition to your monthly Part B premium. A Medigap policy does not replace Original Medicare, and Medicare does not pay the Medigap premium for you.`,
    },
    {
      type: "section" as const,
      heading: "How Much Does Plan G Cost?",
      content: `There is no single Plan G price. Premiums vary by insurer, age, ZIP code, tobacco status, household discounts, rating method, and when you apply. Two insurers selling standard Plan G in the same area generally offer the same core medical benefits, but their premiums and future rate patterns can differ.<br /><br />The official <a href='https://www.medicare.gov/health-drug-plans/medigap/basics/costs' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medigap cost guidance</a> emphasizes that the price is the main difference between policies with the same plan letter. Compare the same plan letter across carriers, ask how the policy is rated, and check whether a discount has conditions that could change later.<br /><br />A high-deductible version of Plan G is available in some states. For 2026, the high-deductible amount is $2,950 before the policy begins paying benefits. That option can have a lower monthly premium, but it shifts more Medicare-covered costs to you early in the year.`,
    },
    {
      type: "inlineCta" as const,
      heading: "Want to Compare Plan G Premiums in Your ZIP Code?",
      body: "Our licensed independent Medicare specialists can compare standardized Plan G options, explain rating methods, and review Plan G versus Plan N or Medicare Advantage at no cost. Call 813-699-5559 or request a free consultation.",
    },
    {
      type: "section" as const,
      heading: "Plan G vs. Plan N and Medicare Advantage",
      content: `Plan G and Plan N are both Medigap policies that work with Original Medicare. Plan N can have a lower premium, but it may include certain office and emergency room copayments and does not cover Part B excess charges. Plan G generally offers more complete standardized cost sharing, but the premium difference should be considered alongside your expected use of care. Read our direct <a href='/medicare-supplement-plan-g-vs-plan-n' class='text-[#1a3fa8] underline underline-offset-2'>Plan G vs. Plan N comparison</a> before choosing based on a single benefit or premium quote.<br /><br />Medicare Advantage is different. It is a private-plan way to receive Medicare benefits, often with provider networks, plan-specific cost sharing, and frequently a built-in Part D drug benefit. A Medigap policy is designed to supplement Original Medicare and does not work with Medicare Advantage. Neither approach is universally better. The decision should reflect your doctors, travel needs, prescriptions, budget, preferred providers, and comfort with medical cost sharing.`,
    },
    {
      type: "section" as const,
      heading: "When Can You Buy Plan G?",
      content: `You need Original Medicare Part A and Part B before you can buy a Medigap policy. Your one-time Medigap Open Enrollment Period lasts six months and starts the first day of the month you are both 65 or older and enrolled in Part B. During that window, insurance companies generally must sell you any Medigap policy they offer in your state, regardless of health conditions.<br /><br />Outside that window, your ability to buy a policy and the price you pay may depend on underwriting unless you have a guaranteed-issue right. Certain events, such as losing qualifying coverage or moving out of a Medicare Advantage plan's service area, can create protected rights with specific application deadlines. The official <a href='https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medicare.gov Medigap timing tool</a> can help you understand the federal rules. You can also review our <a href='/faqs/medigap-guaranteed-issue-rights-florida' class='text-[#1a3fa8] underline underline-offset-2'>Florida Medigap guaranteed-issue rights FAQ</a>.`,
    },
    {
      type: "summary" as const,
      heading: "Bottom Line",
      content: "Plan G is one of the most comprehensive standardized Medigap options available to people new to Medicare. It can provide broad access to providers who accept Medicare and reduce many Original Medicare cost-sharing amounts. You still pay the Part B deductible, your Part B premium, and a separate Plan G premium. Compare the same Plan G letter across insurers, understand how the premium is rated, and make the choice during a protected enrollment period when possible.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "What does Medigap Plan G cover?",
          answer: "Standard Plan G covers the Part A deductible, Part A and Part B coinsurance or copayments, skilled nursing facility coinsurance, Part B excess charges, and other listed standardized benefits. It also covers 80% of eligible foreign travel emergency costs.",
        },
        {
          question: "Does Plan G cover the Medicare Part B deductible?",
          answer: "No. Plan G does not cover the annual Part B deductible. The Part B deductible is $283 in 2026.",
        },
        {
          question: "Does Plan G include prescription drug coverage?",
          answer: "No. Medigap policies sold today do not include Part D prescription drug coverage. You may need a separate Part D plan if you want Medicare drug coverage with Original Medicare and Medigap.",
        },
        {
          question: "Are all Plan G policies the same?",
          answer: "In most states, standard Plan G benefits are the same regardless of the insurer. Premiums, discounts, rating methods, and customer service can differ, so compare the same letter plan across carriers.",
        },
        {
          question: "Can I buy Plan G if I have Medicare Advantage?",
          answer: "Not while you remain enrolled in Medicare Advantage. You must switch to Original Medicare before a Medigap policy can start, and you should understand whether you have a protected right to buy a policy before leaving your plan.",
        },
        {
          question: "What is high-deductible Plan G?",
          answer: "It is a version of Plan G available in some states with a lower premium and a higher annual deductible. The high-deductible amount is $2,950 in 2026 before the policy begins paying benefits.",
        },
        {
          question: "Is Plan G better than Plan N?",
          answer: "It depends on your budget and care preferences. Plan G generally covers more standardized cost sharing, including Part B excess charges. Plan N may have a lower premium but can include office and emergency room copayments and does not cover excess charges.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "Medicare Supplement Plan G vs. Plan N",
      href: "/medicare-supplement-plan-g-vs-plan-n",
      category: "Supplements" as const,
    },
    {
      title: "Medigap Open Enrollment: Your One Guaranteed Chance",
      href: "/medigap-open-enrollment",
      category: "Supplements" as const,
    },
    {
      title: "Original Medicare vs. Medicare Advantage",
      href: "/original-vs-advantage",
      category: "Plans" as const,
    },
    {
      title: "Florida Medicare Supplement Plans: 2026 Guide",
      href: "/medicare-supplement-plans-florida-2026",
      category: "Supplements" as const,
    },
  ],
};

export default function PlanGPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPostClient post={POST} />
    </>
  );
}
