import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

export const metadata: Metadata = {
  title: "Medigap Plan G: The Complete Guide for 2026 | MedicareInfoPro",
  description: "Plan G has become the most popular Medigap plan in America. We break down exactly what it covers, what it costs, and who it is best for in 2026.",
  keywords: ["Medicare Plan G", "Medigap Plan G", "Medicare Supplement Plan G", "Plan G 2026", "Medigap Florida", "Medicare supplement costs"],
  openGraph: {
    title: "Medigap Plan G: The Complete Guide for 2026",
    description: "Plan G covers virtually all Medicare cost-sharing except the Part B deductible. Here is what to know before you enroll.",
    url: "https://medicare-info-pro.vercel.app/blog/plan-g-complete-guide",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80", width: 1200, height: 630, alt: "Medicare Supplement Plan G insurance documents on a desk" }],
  },
  twitter: { card: "summary_large_image", title: "Medigap Plan G: The Complete Guide for 2026", description: "Plan G covers virtually all Medicare cost-sharing except the Part B deductible. Here is what to know." },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/blog/plan-g-complete-guide" },
};

const POST = {
  slug: "plan-g-complete-guide",
  title: "Medigap Plan G: The Complete Guide for 2026",
  excerpt: "Plan G has become the most popular Medigap plan in America, and for good reason. We break down exactly what it covers, what it costs, and who it is best for in 2026.",
  category: "Supplements" as const,
  date: "March 2026",
  readTime: "10 min read",
  author: GREG_WOHL,
  featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  imageAlt: "Medicare Supplement Plan G insurance documents on a desk",
  keyTakeaways: [
    { label: "Covers Almost Everything", text: "Plan G covers all Medicare cost-sharing except the Part B deductible ($257 in 2026), which you pay once per year." },
    { label: "No Network Restrictions", text: "Plan G works with any doctor or hospital that accepts Medicare nationwide. No referrals, no prior authorizations, no network limits." },
    { label: "Best Time to Enroll", text: "Your Medigap Open Enrollment Period is the six-month window starting when you turn 65 and enroll in Part B. During this window, you cannot be denied or charged more based on health history." },
    { label: "Premiums Vary by Insurer", text: "All Plan G policies offer identical benefits. The only difference between insurers is price, so shopping multiple companies is always worthwhile." },
    { label: "High-Deductible Option Available", text: "High-Deductible Plan G offers the same coverage but requires a $2,870 deductible in 2026 before benefits begin, in exchange for significantly lower monthly premiums." },
  ],
  quickFacts: [
    { label: "Part B Deductible Covered?", value: "No ($257 in 2026 — you pay once per year)" },
    { label: "Part B Coinsurance Covered?", value: "Yes — 100%" },
    { label: "Part A Deductible Covered?", value: "Yes — 100%" },
    { label: "Skilled Nursing Coinsurance?", value: "Yes — 100%" },
    { label: "Foreign Travel Emergency?", value: "Yes — 80% up to plan limits" },
    { label: "Prescription Drugs Covered?", value: "No — requires separate Part D plan" },
  ],
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        { label: "Covers Almost Everything", text: "Plan G covers all Medicare cost-sharing except the Part B deductible ($257 in 2026), which you pay once per year." },
        { label: "No Network Restrictions", text: "Plan G works with any doctor or hospital that accepts Medicare nationwide. No referrals, no prior authorizations, no network limits." },
        { label: "Best Time to Enroll", text: "Your Medigap Open Enrollment Period is the six-month window starting when you turn 65 and enroll in Part B. During this window, you cannot be denied or charged more based on health history." },
        { label: "Premiums Vary by Insurer", text: "All Plan G policies offer identical benefits. The only difference between insurers is price, so shopping multiple companies is always worthwhile." },
        { label: "High-Deductible Option Available", text: "High-Deductible Plan G offers the same coverage but requires a $2,870 deductible in 2026 before benefits begin, in exchange for significantly lower monthly premiums." },
      ],
    },
    {
      type: "section" as const,
      heading: "What Plan G Covers",
      content: `<a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Supplement Plan G</a> is the most comprehensive Medigap plan available to new Medicare enrollees. It covers the Medicare Part A deductible ($1,676 in 2026), Part A coinsurance and hospital costs for up to 365 additional days after Medicare benefits are exhausted, and the Part B coinsurance (20 percent of the Medicare-approved amount for outpatient services).

Plan G also covers skilled nursing facility care coinsurance (days 21 through 100 of a skilled nursing stay), the first three pints of blood, and foreign travel emergency care at 80 percent up to plan limits. The only Medicare cost-sharing that Plan G does not cover is the Part B deductible, which is $257 in 2026 and is paid once per year.

Because Plan G works with Original Medicare rather than replacing it, you can see any doctor or specialist who accepts Medicare nationwide. There are no network restrictions, no referrals required, and no prior authorizations for services covered by Medicare.`,
    },
    {
      type: "section" as const,
      heading: "Plan G vs. Plan F vs. Plan N",
      content: `Plan F was the most comprehensive Medigap plan ever offered, covering even the Part B deductible. However, Plan F is no longer available to people who became eligible for Medicare on or after January 1, 2020. If you became eligible before that date and have Plan F, you can keep it, but new enrollees must choose Plan G as the most comprehensive option.

Plan N is a lower-premium alternative to Plan G. It covers most of the same costs but requires copays of up to $20 for office visits and up to $50 for emergency room visits that do not result in inpatient admission. Plan N also does not cover Part B excess charges, which occur when a provider charges more than the Medicare-approved amount.

The right choice between Plan G and Plan N depends on how often you use healthcare services. If you see doctors frequently, Plan G's higher premium may result in lower total annual costs. If you are generally healthy and rarely visit doctors, <a href='/do-i-need-a-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Plan N's lower premium may result in lower total costs</a>. A licensed Medicare advisor can run the numbers for your specific situation.`,
    },
    {
      type: "section" as const,
      heading: "High-Deductible Plan G",
      content: `High-Deductible Plan G (HD-G) offers the same coverage as standard Plan G but requires you to pay a $2,870 deductible in 2026 before the plan begins paying. In exchange, the monthly premium is significantly lower, often $30 to $60 per month compared to $120 to $200 per month for standard Plan G depending on age.

HD-G is attractive for people who are generally healthy and want catastrophic protection without paying for comprehensive coverage they may not use. If you have a year with significant healthcare needs and exceed the $2,870 deductible, the plan covers everything above that amount just like standard Plan G.

The tradeoff is that in a bad year, you could pay up to $2,870 in cost-sharing before the plan kicks in. For people who can absorb that amount without financial hardship, HD-G can result in significant premium savings over time. Understanding your full <a href='/costs-at-a-glance' class='text-[#1a3fa8] underline underline-offset-2'>Medicare costs for 2026</a> helps you decide whether the standard or high-deductible version makes more sense.`,
    },
    {
      type: "section" as const,
      heading: "Plan G Premiums in Florida for 2026",
      content: `Medigap premiums vary by age, gender, tobacco use, and insurer. In Florida, Plan G premiums for a 65-year-old non-tobacco user typically range from approximately $120 to $200 per month depending on the insurer and the county.

All Plan G policies offer identical benefits, so the only reason to pay more for the same plan is insurer preference, financial stability ratings, or customer service reputation. Shopping multiple insurers is always worthwhile.

Premiums increase with age under most pricing structures. Some insurers use attained-age pricing, where premiums increase as you get older. Others use issue-age pricing, where premiums are based on your age when you first enroll and increase only with inflation. When comparing Plan G premiums, ask each insurer about their historical rate increase patterns.`,
    },
    {
      type: "summary" as const,
      heading: "Bottom Line",
      content: "Plan G is the gold standard for Medicare supplement coverage for new enrollees. It eliminates nearly all out-of-pocket Medicare costs and gives you freedom to see any Medicare-accepting provider in the country. The key is enrolling during your Medigap Open Enrollment Period, when you have guaranteed access at standard rates regardless of your health history.",
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
