import BlogPostClient, { GREG_WOHL } from "@/app/blog/BlogPostClient";
import type { Metadata } from "next";

const POST = {
  title: "Medicare Supplement Plan G vs. Plan N: Which Is Right for You?",
  slug: "medicare-supplement-plan-g-vs-plan-n",
  date: "July 2026",
  readTime: "11 min read",
  author: GREG_WOHL,
  category: "Supplements" as const,
  tags: ["Medigap", "Plan G", "Plan N", "Medicare Supplement", "Coverage Comparison"],
  featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  excerpt: "Plan G and Plan N are the two most popular Medigap plans in 2026. Both offer strong coverage, but the right choice depends on how often you see doctors and whether you want the lowest possible premium or the most predictable costs.",
  keyTakeaways: [
    "Plan G covers nearly all Medicare cost-sharing except the Part B deductible ($257 in 2026), making it the most comprehensive Medigap plan available to new enrollees.",
    "Plan N has lower monthly premiums than Plan G but requires copays of up to $20 for office visits and up to $50 for emergency room visits that do not result in inpatient admission.",
    "Plan N does not cover Part B excess charges, which means you could owe more if your doctor does not accept Medicare assignment.",
    "For people who rarely visit doctors, Plan N often saves money over the course of a year. For frequent users of medical care, Plan G typically provides better value.",
    "Both plans are standardized by the federal government, so the coverage is identical regardless of which insurance company you buy from. Only the premium differs.",
  ],
  sections: [
    {
      type: "paragraph" as const,
      content: "When you are choosing a <a href='/medicare-supplement'>Medicare Supplement</a> plan, Plan G and Plan N are the two options that come up most often. Both are standardized Medigap plans that work alongside Original Medicare to cover the out-of-pocket costs that Medicare Part A and Part B leave behind. The difference between them comes down to a straightforward trade-off: Plan G gives you more complete coverage, while Plan N offers lower monthly premiums in exchange for some small cost-sharing requirements.",
    },
    {
      type: "paragraph" as const,
      content: "This guide breaks down exactly what each plan covers, what each plan costs, and how to decide which one makes more financial sense for your specific situation.",
    },
    {
      type: "heading" as const,
      content: "What Plan G Covers",
    },
    {
      type: "paragraph" as const,
      content: "Plan G is the most comprehensive Medigap plan available to people who became eligible for Medicare on or after January 1, 2020. (Plan F, which also covered the Part B deductible, is no longer available to new Medicare enrollees.) Plan G covers the following:",
    },
    {
      type: "list" as const,
      items: [
        "Medicare Part A hospital coinsurance and hospital costs up to an additional 365 days after Medicare benefits are exhausted",
        "Medicare Part A hospice care coinsurance or copayment",
        "Medicare Part A deductible ($1,676 per benefit period in 2026)",
        "Medicare Part B coinsurance or copayment (the 20% you owe after Medicare pays 80%)",
        "Medicare Part B excess charges (the difference between what a doctor charges and the Medicare-approved amount)",
        "Skilled nursing facility care coinsurance",
        "First three pints of blood",
        "Foreign travel emergency care (up to plan limits)",
      ],
    },
    {
      type: "paragraph" as const,
      content: "The only cost Plan G does not cover is the Medicare Part B deductible, which is $257 in 2026. Once you pay that deductible at the start of each year, Plan G covers 100% of your remaining Medicare-approved costs for the rest of the year. This makes your healthcare costs highly predictable: your monthly premium plus $257 is essentially your maximum annual exposure for covered services.",
    },
    {
      type: "heading" as const,
      content: "What Plan N Covers",
    },
    {
      type: "paragraph" as const,
      content: "Plan N covers most of the same benefits as Plan G, with two important differences. First, Plan N does not cover Part B excess charges. Second, Plan N requires small copayments for certain outpatient visits. Here is the full coverage breakdown:",
    },
    {
      type: "list" as const,
      items: [
        "Medicare Part A hospital coinsurance and hospital costs up to an additional 365 days after Medicare benefits are exhausted",
        "Medicare Part A hospice care coinsurance or copayment",
        "Medicare Part A deductible ($1,676 per benefit period in 2026)",
        "Medicare Part B coinsurance or copayment — EXCEPT for copays of up to $20 for some office visits and up to $50 for emergency room visits that do not result in an inpatient admission",
        "Skilled nursing facility care coinsurance",
        "First three pints of blood",
        "Foreign travel emergency care (up to plan limits)",
      ],
    },
    {
      type: "paragraph" as const,
      content: "Plan N does NOT cover: the Part B deductible ($257 in 2026) or Part B excess charges. This means if your doctor charges more than the Medicare-approved amount and does not accept Medicare assignment, you could owe the difference out of pocket.",
    },
    {
      type: "heading" as const,
      content: "Plan G vs. Plan N: Side-by-Side Comparison",
    },
    {
      type: "table" as const,
      headers: ["Benefit", "Plan G", "Plan N"],
      rows: [
        ["Part A hospital coinsurance (365 extra days)", "Covered", "Covered"],
        ["Part A deductible ($1,676 per benefit period)", "Covered", "Covered"],
        ["Part A hospice coinsurance/copay", "Covered", "Covered"],
        ["Skilled nursing facility coinsurance", "Covered", "Covered"],
        ["Part B coinsurance/copay (20%)", "Covered in full", "Covered except up to $20 copay per office visit"],
        ["Part B deductible ($257 in 2026)", "NOT covered", "NOT covered"],
        ["Part B excess charges", "Covered", "NOT covered"],
        ["Emergency room copay", "None", "Up to $50 if not admitted"],
        ["Foreign travel emergency", "80% (after deductible)", "80% (after deductible)"],
        ["Monthly premium range (Florida, age 65)", "$120 to $200/mo", "$80 to $150/mo"],
      ],
    },
    {
      type: "inlineCta" as const,
      heading: "Not Sure Which Plan Fits Your Budget?",
      body: "Our licensed Medicare specialists compare Plan G and Plan N rates from multiple carriers at no cost to you.",
    },
    {
      type: "heading" as const,
      content: "Understanding Part B Excess Charges",
    },
    {
      type: "paragraph" as const,
      content: "The most significant coverage difference between Plan G and Plan N is Part B excess charges. This is a concept that confuses many people, so it is worth explaining clearly.",
    },
    {
      type: "paragraph" as const,
      content: "Medicare sets an approved amount for every covered service. Doctors who accept Medicare assignment agree to charge no more than that approved amount. However, doctors who do not accept Medicare assignment can charge up to 15% more than the Medicare-approved amount. That extra amount is called an excess charge.",
    },
    {
      type: "paragraph" as const,
      content: "Plan G covers excess charges in full. Plan N does not cover them at all, meaning you pay the difference out of pocket.",
    },
    {
      type: "paragraph" as const,
      content: "In Florida, the practical risk of excess charges is relatively low. The vast majority of Florida physicians accept Medicare assignment. However, if you travel frequently, see specialists in academic medical centers, or live in an area with a higher concentration of non-participating physicians, excess charges become a more meaningful consideration. You can check whether a specific doctor accepts Medicare assignment at medicare.gov.",
    },
    {
      type: "heading" as const,
      content: "The Premium Difference: How Much Can You Save with Plan N?",
    },
    {
      type: "paragraph" as const,
      content: "The monthly premium difference between Plan G and Plan N varies by insurance company, your age, your gender, your tobacco use status, and your ZIP code. In Florida, a 65-year-old non-tobacco user typically sees a premium difference of $30 to $60 per month between Plan G and Plan N from the same carrier.",
    },
    {
      type: "paragraph" as const,
      content: "Over the course of a year, that translates to $360 to $720 in premium savings with Plan N. Whether those savings outweigh Plan N's potential out-of-pocket costs depends on how often you use medical care.",
    },
    {
      type: "table" as const,
      headers: ["Scenario", "Plan G Annual Cost", "Plan N Annual Cost", "Winner"],
      rows: [
        ["Healthy, 2 doctor visits per year", "$257 deductible + $1,800 premium = $2,057", "$257 deductible + $1,200 premium + $40 copays = $1,497", "Plan N saves ~$560"],
        ["Moderate, 8 doctor visits per year", "$257 deductible + $1,800 premium = $2,057", "$257 deductible + $1,200 premium + $160 copays = $1,617", "Plan N saves ~$440"],
        ["Frequent, 20 doctor visits per year", "$257 deductible + $1,800 premium = $2,057", "$257 deductible + $1,200 premium + $400 copays = $1,857", "Plan N saves ~$200"],
        ["Frequent + 2 ER visits (not admitted)", "$257 deductible + $1,800 premium = $2,057", "$257 deductible + $1,200 premium + $400 copays + $100 ER = $1,957", "Plan N saves ~$100"],
        ["Frequent + excess charges", "$257 deductible + $1,800 premium = $2,057", "$257 deductible + $1,200 premium + $400 copays + $300 excess = $2,157", "Plan G saves ~$100"],
      ],
    },
    {
      type: "paragraph" as const,
      content: "Note: The premium figures above are illustrative examples based on typical Florida rates. Your actual premiums will vary by carrier, age, and location. The key takeaway is that Plan N almost always saves money for people with light to moderate healthcare use, and the savings narrow as usage increases.",
    },
    {
      type: "heading" as const,
      content: "Who Should Choose Plan G?",
    },
    {
      type: "paragraph" as const,
      content: "Plan G is the better choice in several situations:",
    },
    {
      type: "list" as const,
      items: [
        "You see doctors frequently and want to minimize copays and unpredictable out-of-pocket costs",
        "You see specialists who may not accept Medicare assignment, making excess charges a real risk",
        "You value simplicity and want to know exactly what you will owe each year (just the Part B deductible)",
        "You have a chronic condition that requires regular medical care",
        "You travel internationally and want the most comprehensive foreign travel emergency coverage",
        "You are risk-averse and prefer the peace of mind of near-complete coverage",
      ],
    },
    {
      type: "heading" as const,
      content: "Who Should Choose Plan N?",
    },
    {
      type: "paragraph" as const,
      content: "Plan N is the better choice in these situations:",
    },
    {
      type: "list" as const,
      items: [
        "You are generally healthy and visit doctors infrequently (fewer than 10 times per year)",
        "You want to lower your monthly premium and are comfortable with small copays when you do visit",
        "All of your doctors accept Medicare assignment, eliminating the excess charge risk",
        "You want to use the premium savings to fund a health savings account or other financial goal",
        "You are comfortable with some cost variability in exchange for a lower baseline cost",
      ],
    },
    {
      type: "heading" as const,
      content: "The Underwriting Question",
    },
    {
      type: "paragraph" as const,
      content: "One factor that often gets overlooked in the Plan G vs. Plan N decision is medical underwriting. During your <a href='/medigap-open-enrollment'>Medigap open enrollment period</a>, which begins the month you turn 65 and are enrolled in Part B, you have the right to buy any Medigap plan without medical underwriting. Insurance companies cannot deny you coverage or charge you more based on your health history during this window.",
    },
    {
      type: "paragraph" as const,
      content: "Outside of this window, insurance companies in most states can ask health questions and deny coverage based on your medical history. This has an important implication for the Plan G vs. Plan N decision: if you start with Plan N to save on premiums and later want to switch to Plan G because your health needs have increased, you may not be able to qualify for Plan G at that point.",
    },
    {
      type: "paragraph" as const,
      content: "This is why many advisors recommend that people who are on the fence between Plan G and Plan N choose Plan G during their open enrollment period. Once you have Plan G, you can always switch to a lower-cost Plan N later if you remain healthy and want to reduce premiums, though you would need to pass underwriting to do so. Starting with Plan N and trying to upgrade to Plan G later carries more risk.",
    },
    {
      type: "heading" as const,
      content: "How Premiums Are Priced: Age-Attained vs. Issue-Age vs. Community-Rated",
    },
    {
      type: "paragraph" as const,
      content: "Both Plan G and Plan N premiums increase over time, but the rate of increase depends on how the policy is priced. Understanding this is important when comparing quotes from different carriers.",
    },
    {
      type: "list" as const,
      items: [
        "Age-attained pricing: Your premium increases each year as you age. This is the most common pricing method and typically results in lower initial premiums that rise significantly over time.",
        "Issue-age pricing: Your premium is based on your age when you first buy the policy and does not increase solely because you get older. Premiums are typically higher initially but increase more slowly.",
        "Community-rated pricing: Everyone in the same geographic area pays the same premium regardless of age. These plans tend to be more expensive for younger enrollees but less expensive for older ones.",
      ],
    },
    {
      type: "paragraph" as const,
      content: "When comparing Plan G and Plan N quotes, make sure you are comparing the same pricing method. A Plan N with age-attained pricing may look cheaper than a Plan G with issue-age pricing today but could end up costing more over a 10 to 20-year period. Our agents can model long-term cost projections for you across multiple carriers. You can also learn more about <a href='/medigap-premium-increases'>why Medigap premiums increase</a> and how to manage them over time.",
    },
    {
      type: "heading" as const,
      content: "Plan G vs. Plan N vs. Medicare Advantage: A Broader Comparison",
    },
    {
      type: "paragraph" as const,
      content: "Some people compare Plan G and Plan N not just to each other but also to <a href='/medicare-advantage'>Medicare Advantage</a> plans, which take a completely different approach to covering Medicare costs. Here is a high-level comparison:",
    },
    {
      type: "table" as const,
      headers: ["Factor", "Plan G", "Plan N", "Medicare Advantage"],
      rows: [
        ["Monthly premium", "$120 to $200", "$80 to $150", "$0 to $50 (often very low)"],
        ["Network restrictions", "None (any Medicare provider)", "None (any Medicare provider)", "Usually limited network"],
        ["Referrals required", "No", "No", "Often yes (HMO)"],
        ["Out-of-pocket maximum", "Very low (just Part B deductible)", "Low (deductible + small copays)", "Up to $9,825 in-network (2026 avg)"],
        ["Prior authorization", "Rarely required", "Rarely required", "Frequently required"],
        ["Prescription drug coverage", "Requires separate Part D plan", "Requires separate Part D plan", "Usually included"],
        ["Extra benefits (dental, vision, hearing)", "Not included", "Not included", "Often included"],
        ["Predictability of costs", "Very high", "High", "Lower"],
      ],
    },
    {
      type: "paragraph" as const,
      content: "For a deeper look at this comparison, see our guide to <a href='/original-vs-advantage'>Original Medicare vs. Medicare Advantage</a>.",
    },
    {
      type: "heading" as const,
      content: "How to Get the Best Rate on Plan G or Plan N",
    },
    {
      type: "paragraph" as const,
      content: "Because Plan G and Plan N are standardized plans, the coverage is identical no matter which insurance company you buy from. This means the only reason to choose one carrier over another is price, financial stability, and customer service. Here is how to find the best rate:",
    },
    {
      type: "list" as const,
      items: [
        "Compare quotes from multiple carriers. Premiums for the same plan can vary by 30% to 50% between carriers in the same ZIP code.",
        "Work with an independent broker who represents multiple insurance companies, not a captive agent who only sells one carrier's products.",
        "Ask about household discounts. Many carriers offer 5% to 7% discounts when two people in the same household both have a Medigap policy with the same company.",
        "Consider the carrier's rate increase history. A carrier with a lower initial premium but a history of large annual increases may cost more over time than one with a slightly higher starting premium and more stable increases.",
        "Check the carrier's financial strength rating. Look for an A.M. Best rating of A or better.",
      ],
    },
    {
      type: "paragraph" as const,
      content: "Our agents compare rates from all major carriers in Florida at no cost to you. There is no obligation, and working with an independent agent does not increase your premium.",
    },
    {
      type: "heading" as const,
      content: "Frequently Asked Questions",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Is Plan G or Plan N better in 2026?",
          answer: "Neither plan is universally better. Plan G is better for people who use medical care frequently or want maximum predictability. Plan N is better for people who are generally healthy, visit doctors infrequently, and want to reduce their monthly premium. The right answer depends on your health, your doctors, and your financial priorities.",
        },
        {
          question: "How much cheaper is Plan N than Plan G?",
          answer: "In Florida, Plan N is typically $30 to $60 per month cheaper than Plan G from the same carrier for a 65-year-old. Over a year, that is $360 to $720 in premium savings. Whether those savings outweigh Plan N's copays and excess charge exposure depends on how often you use medical care.",
        },
        {
          question: "Does Plan N cover the Part B deductible?",
          answer: "No. Plan N does not cover the Medicare Part B deductible, which is $257 in 2026. Plan G also does not cover the Part B deductible. Neither plan covers it because Plan F, which did cover it, is no longer available to people who became eligible for Medicare after January 1, 2020.",
        },
        {
          question: "What are Part B excess charges and should I worry about them?",
          answer: "Part B excess charges occur when a doctor does not accept Medicare assignment and charges up to 15% more than the Medicare-approved amount. Plan G covers these charges; Plan N does not. In Florida, the majority of physicians accept Medicare assignment, so excess charges are a relatively low risk for most people. However, if you frequently see specialists or travel to areas where non-participating physicians are more common, Plan G's excess charge coverage has real value.",
        },
        {
          question: "Can I switch from Plan N to Plan G later?",
          answer: "You can apply to switch from Plan N to Plan G at any time, but outside of your Medigap open enrollment period, insurance companies can require medical underwriting and deny your application based on your health history. If you are in good health and want to switch, you may be approved. If you have developed health conditions since you first enrolled, you may be denied. This is why starting with Plan G during your open enrollment period is often the safer long-term strategy.",
        },
        {
          question: "Does Plan N cover emergency room visits?",
          answer: "Plan N covers emergency room visits but requires a copay of up to $50 if you are not admitted to the hospital as an inpatient. If you are admitted, the copay is waived. Plan G covers emergency room visits with no copay.",
        },
        {
          question: "Are Plan G and Plan N available in Florida?",
          answer: "Yes. Both Plan G and Plan N are available from multiple insurance carriers throughout Florida. Premiums vary by county, age, and carrier. Our agents can provide quotes for your specific ZIP code.",
        },
        {
          question: "What is the difference between Plan G and High-Deductible Plan G?",
          answer: "High-Deductible Plan G has the same coverage as standard Plan G but requires you to pay a deductible of $2,870 in 2026 before the plan begins paying. In exchange, the monthly premium is significantly lower, often $30 to $60 per month. High-Deductible Plan G is a good option for people who are very healthy and want to minimize their monthly premium while still having a safety net for catastrophic costs.",
        },
      ],
    },
    {
      type: "paragraph" as const,
      content: "Choosing between Plan G and Plan N is one of the most important Medicare decisions you will make. Both plans offer strong protection against Medicare's cost-sharing requirements, and both are far more predictable than a Medicare Advantage plan when it comes to out-of-pocket costs. The right choice comes down to your health, your doctors, and how you weigh premium savings against coverage completeness. For a personalized comparison of Plan G and Plan N rates in your area, <a href='/free-consultation'>schedule a free consultation</a> with one of our licensed Medicare specialists.",
    },
  ],
  relatedPosts: [
    { title: "Medigap Plan G: The Complete Guide for 2026", href: "/plan-g-complete-guide", category: "Supplements" as const },
    { title: "Medigap Open Enrollment: Your One Guaranteed Chance", href: "/medigap-open-enrollment", category: "Supplements" as const },
    { title: "Original Medicare vs. Medicare Advantage: Which Is Right for You?", href: "/original-vs-advantage", category: "Plans" as const },
  ],
};

export const metadata: Metadata = {
  title: "Medicare Supplement Plan G vs. Plan N: Which Is Right for You? | MedicareInfoPro",
  description: "Plan G and Plan N are the two most popular Medigap plans in 2026. Compare coverage, costs, copays, and excess charges to find out which plan is the better fit for your health and budget.",
  keywords: [
    "Medicare Plan G vs Plan N",
    "Medigap Plan G vs Plan N",
    "Medicare Supplement Plan N",
    "Plan G vs Plan N comparison",
    "Medicare Supplement comparison 2026",
    "Medigap Plan N Florida",
    "Plan N copays",
    "Part B excess charges",
  ],
  openGraph: {
    title: "Medicare Supplement Plan G vs. Plan N: Which Is Right for You?",
    description: "Plan G and Plan N are the two most popular Medigap plans in 2026. Compare coverage, costs, and copays to find the right fit.",
    type: "article",
    publishedTime: "2026-07-28",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Supplement Plan G vs. Plan N: Which Is Right for You?",
    description: "Plan G and Plan N are the two most popular Medigap plans in 2026. Compare coverage, costs, and copays.",
  },
};

export default function MedicareSupplementPlanGVsPlanNPage() {
  return <BlogPostClient post={POST} />;
}
