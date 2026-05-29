import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

export const metadata: Metadata = {
  title: "Medigap Plan G: The Complete Guide for 2026 | MedicareInfoPro",
  description:
    "Medigap Plan G is the most comprehensive Medicare Supplement plan available to new enrollees. Learn what it covers, what it costs in 2026, how it compares to Plan N, and whether it is right for you.",
  keywords: [
    "Medigap Plan G 2026",
    "Medicare Supplement Plan G",
    "Plan G vs Plan N",
    "Medicare Plan G cost",
    "best Medigap plan",
    "Medicare Supplement Florida",
    "Plan G coverage",
  ],
  openGraph: {
    title: "Medigap Plan G: The Complete Guide for 2026",
    description: "Plan G covers virtually all Medicare cost-sharing except the Part B deductible. Here is what it covers, what it costs, and how to decide if it is the right choice for you.",
    url: "https://medicare-info-pro.vercel.app/blog/plan-g-complete-guide",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80", width: 1200, height: 630, alt: "Senior couple reviewing Medicare Supplement Plan G insurance documents" }],
  },
  twitter: { card: "summary_large_image", title: "Medigap Plan G: The Complete Guide for 2026", description: "Plan G covers virtually all Medicare cost-sharing except the Part B deductible. Here is what to know." },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/blog/plan-g-complete-guide" },
};

const POST = {
  slug: "plan-g-complete-guide",
  title: "Medigap Plan G: The Complete Guide for 2026",
  excerpt: "Medigap Plan G is the most comprehensive Medicare Supplement plan available to people who became eligible for Medicare on or after January 1, 2020. It covers virtually all Medicare cost-sharing except the Part B deductible. Here is a complete breakdown of what it covers, what it costs in Florida in 2026, how it compares to Plan N, and how to decide if it is right for you.",
  category: "Supplements" as const,
  author: GREG_WOHL,
  date: "January 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80",
  imageAlt: "Senior couple at a table reviewing Medicare Supplement Plan G insurance documents",
  sections: [
    {
      type: "intro" as const,
      content: `Medigap Plan G has become the most popular Medicare Supplement plan in the United States, and for good reason. It provides near-complete coverage of Medicare's cost-sharing obligations, leaving beneficiaries with predictable, manageable out-of-pocket costs regardless of how much healthcare they use in a given year.

Plan G is available to anyone who is enrolled in Medicare Parts A and B. For people who became eligible for Medicare on or after January 1, 2020, Plan G is the most comprehensive option available (Plan F, which also covered the Part B deductible, is no longer available to new enrollees). This guide covers everything you need to know to evaluate Plan G and decide whether it belongs in your Medicare strategy.`,
    },
    {
      type: "keyTakeaways" as const,
      items: [
        { label: "Covers Almost Everything", text: "Plan G covers the Part A deductible ($1,676 in 2026), Part A coinsurance, Part B coinsurance (20 percent of all outpatient costs), skilled nursing facility coinsurance, and foreign travel emergency care. The only gap is the Part B deductible ($257 in 2026)." },
        { label: "No Network Restrictions", text: "Plan G works with any doctor or hospital that accepts Medicare nationwide. There are no referrals, no prior authorizations, and no network directories to check." },
        { label: "Premiums Vary by Insurer", text: "All Plan G policies offer identical benefits regardless of insurer. The differences are premium, financial stability, and customer service. Shopping multiple insurers for the same plan is always worthwhile." },
        { label: "Best Value for Frequent Healthcare Users", text: "Plan G's higher premium is typically offset by eliminated cost-sharing for people who use healthcare regularly. The break-even point versus Plan N is usually 3 to 5 doctor visits per year." },
        { label: "High-Deductible Plan G Is Available", text: "High-Deductible Plan G offers the same coverage as standard Plan G but requires you to pay a $2,870 deductible in 2026 before benefits begin. Premiums are significantly lower, making it attractive for healthy individuals." },
      ],
    },
    {
      type: "section" as const,
      heading: "What Plan G Covers",
      content: `Plan G covers the following Medicare cost-sharing items:

The Medicare Part A hospital deductible is $1,676 per benefit period in 2026. Without Plan G, you pay this amount each time you are admitted to the hospital and have not had a qualifying hospital stay in the prior 60 days. Plan G pays this deductible in full.

Part A coinsurance and hospital costs are covered for up to 365 days after Medicare benefits are exhausted. This is the coverage that matters most in a prolonged hospitalization.

Skilled nursing facility coinsurance is $209.50 per day for days 21 through 100 of a SNF stay. Plan G pays this coinsurance in full, eliminating what can otherwise be a $16,760 exposure for a 100-day SNF stay.

Part B coinsurance is 20 percent of the Medicare-approved amount for all outpatient services: doctor visits, specialist visits, outpatient surgery, lab work, imaging, physical therapy, chemotherapy, and more. There is no cap on this 20 percent under Original Medicare alone. Plan G pays this 20 percent in full.

Part B excess charges occur when a doctor does not accept Medicare assignment and charges more than the Medicare-approved amount. Plan G covers these excess charges, though they are relatively rare in Florida.

Foreign travel emergency care is covered at 80 percent of billed charges after a $250 deductible, up to a lifetime maximum of $50,000. This coverage is not provided by Original Medicare.

The one item Plan G does not cover is the Part B deductible, which is $257 in 2026. You pay this amount once per year before Part B benefits begin.`,
    },
    {
      type: "section" as const,
      heading: "What Plan G Does Not Cover",
      content: `While Plan G is comprehensive, it does not cover everything. Understanding the gaps helps you plan accordingly.

Plan G does not cover prescription drugs. If you have Plan G, you need a separate Medicare Part D drug plan for prescription coverage. Most people with Plan G pair it with a standalone Part D plan.

Plan G does not cover dental, vision, or hearing aids. These are not covered by Original Medicare either, so Plan G cannot fill gaps that do not exist in the underlying coverage. If you want dental or vision coverage, you need a separate policy or a Medicare Advantage plan that includes these benefits (though Medicare Advantage and Medigap cannot be used together).

Plan G does not cover long-term custodial care in a nursing home or assisted living facility. Medicare itself does not cover this type of care, so Plan G cannot fill this gap.

Plan G does not cover the Part B deductible ($257 in 2026). This is the only Medicare cost-sharing item that Plan G leaves to the beneficiary.`,
    },
    {
      type: "section" as const,
      heading: "Plan G vs. Plan N: Which Is Better?",
      content: `Plan N is the most common alternative to Plan G. Both plans cover the Part A deductible, Part B coinsurance, and skilled nursing facility coinsurance. The differences are:

Plan N requires copays of up to $20 for office visits and up to $50 for emergency room visits that do not result in inpatient admission. Plan G has no copays.

Plan N does not cover Part B excess charges. Plan G does. Excess charges are rare in Florida, but they are possible when seeing a doctor who does not accept Medicare assignment.

Plan N has lower premiums than Plan G, typically $20 to $50 per month less depending on age and insurer.

The math on which plan is better depends on your healthcare use. If you have frequent doctor visits, Plan G's higher premium is often offset by the eliminated copays. If you rarely see doctors and are in good health, Plan N's lower premium may result in lower total annual costs. A licensed Medicare advisor can run the numbers for your specific situation.`,
    },
    {
      type: "section" as const,
      heading: "High-Deductible Plan G",
      content: `High-Deductible Plan G (HD-G) offers the same coverage as standard Plan G but requires you to pay a $2,870 deductible in 2026 before the plan begins paying. In exchange, the monthly premium is significantly lower, often $30 to $60 per month compared to $120 to $200 per month for standard Plan G depending on age.

HD-G is attractive for people who are generally healthy and want catastrophic protection without paying for comprehensive coverage they may not use. If you have a year with significant healthcare needs and exceed the $2,870 deductible, the plan covers everything above that amount just like standard Plan G.

The tradeoff is that in a bad year, you could pay up to $2,870 in cost-sharing before the plan kicks in. For people who can absorb that amount without financial hardship, HD-G can result in significant premium savings over time.`,
    },
    {
      type: "section" as const,
      heading: "Plan G Premiums in Florida for 2026",
      content: `Medigap premiums vary by age, gender, tobacco use, and insurer. In Florida, Plan G premiums for a 65-year-old non-tobacco user typically range from approximately $120 to $200 per month depending on the insurer and the county.

All Plan G policies offer identical benefits, so the only reason to pay more for the same plan is insurer preference, financial stability ratings, or customer service reputation. Shopping multiple insurers is always worthwhile.

Premiums increase with age under most pricing structures. Some insurers use attained-age pricing, where premiums increase as you get older. Others use issue-age pricing, where premiums are based on your age when you first enroll and increase only with inflation. Issue-age pricing can result in lower lifetime costs if you enroll young and stay with the same insurer.

When comparing Plan G premiums, ask each insurer about their historical rate increase patterns. An insurer with a lower starting premium but aggressive annual increases may cost more over time than an insurer with a higher starting premium and more modest increases.`,
    },
    {
      type: "faq" as const,
      items: [
        { question: "What is the difference between Plan G and Plan F?", answer: "Plan F covers the Part B deductible ($257 in 2026) in addition to everything Plan G covers. However, Plan F is no longer available to people who became eligible for Medicare on or after January 1, 2020. If you became eligible before that date and have Plan F, you can keep it." },
        { question: "Does Plan G cover prescription drugs?", answer: "No. Plan G does not include prescription drug coverage. If you have Plan G, you need a separate Medicare Part D drug plan for prescription coverage." },
        { question: "Can I use Plan G with any doctor?", answer: "Yes. Plan G works with any doctor or hospital that accepts Medicare nationwide. There are no network restrictions, no referrals required, and no prior authorizations for services covered by Medicare." },
        { question: "When is the best time to enroll in Plan G?", answer: "The best time is during your Medigap Open Enrollment Period, which is the six-month window that begins when you turn 65 and enroll in Medicare Part B. During this window, you have guaranteed issue rights and cannot be denied or charged more based on your health history." },
        { question: "How much does Plan G cost in Florida?", answer: "Plan G premiums for a 65-year-old non-tobacco user in Florida typically range from approximately $120 to $200 per month depending on the insurer and county. Premiums increase with age. Shopping multiple insurers for the same plan is always worthwhile since benefits are identical." },
        { question: "What is High-Deductible Plan G?", answer: "High-Deductible Plan G offers the same coverage as standard Plan G but requires you to pay a $2,870 deductible in 2026 before benefits begin. Premiums are significantly lower, often $30 to $60 per month. It is attractive for healthy individuals who want catastrophic protection at a lower premium." },
      ],
    },
  ],
  relatedPosts: [
    { title: "Medigap Open Enrollment: Your One Guaranteed Chance", href: "/blog/medigap-open-enrollment", category: "Supplements" as const },
    { title: "Do I Need a Medicare Supplement?", href: "/do-i-need-a-supplement", category: "Supplements" as const },
    { title: "Original Medicare vs. Medicare Advantage: Which Is Right for You?", href: "/original-vs-advantage", category: "Plans" as const },
    { title: "Medicare Costs at a Glance: 2026 Premiums, Deductibles, and Copays", href: "/costs-at-a-glance", category: "Costs" as const },
  ],
};

export default function Page() {
  return <BlogPostClient post={POST} />;
}
