import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "IRMAA Explained: Understanding Medicare Income-Related Monthly Adjustment Amount",
  "url": "https://medicareinfopro.com/blog/irmaa-explained",
  "datePublished": "2026-06-05",
  "dateModified": "2026-06-05",
  "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  "author": {
    "@type": "Person",
    "name": "Greg Wohl",
    "jobTitle": "Licensed Medicare Specialist",
    "url": "https://medicareinfopro.com/greg-wohl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "url": "https://medicareinfopro.com",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://medicareinfopro.com/blog/irmaa-explained"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": []
} as const;

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "IRMAA Explained: Understanding Medicare Income-Related Monthly Adjustment Amounts",
  description: "Learn about IRMAA, how it affects your Medicare premiums, and strategies to manage these costs.",
  keywords: ["IRMAA", "Medicare premiums", "income-related monthly adjustment amount", "Medicare costs"],
  openGraph: { title: "IRMAA Explained: Understanding Medicare Income-Related Monthly Adjustment Amounts", description: "Learn about IRMAA, how it affects your Medicare premiums, and strategies to manage these costs.", url: "https://medicare-info-pro.vercel.app/blog/irmaa-explained", type: "article", images: [{ url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80", width: 1200, height: 630, alt: "Money and documents" }] },
  twitter: { card: "summary_large_image", title: "IRMAA Explained: Understanding Medicare Income-Related Monthly Adjustment Amounts", description: "Learn about IRMAA, how it affects your Medicare premiums, and strategies to manage these costs." },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/blog/irmaa-explained" },
};
const POST = {
  slug: "irmaa-explained",
  title: "IRMAA Explained: Understanding Medicare Income-Related Monthly Adjustment Amounts",
  excerpt: "IRMAA can significantly increase your Medicare premiums. This post explains what IRMAA is and how to navigate it.",
  category: "Costs" as const,
  date: "2026-06-05",
  readTime: "5 min read",
  author: GREG_WOHL,
  featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  imageAlt: "Tax and income documents representing IRMAA Medicare premium surcharges",
  keyTakeaways: [
    "IRMAA is an extra charge added to your Medicare Part B and Part D premiums based on your income.",
    "Your modified adjusted gross income (MAGI) from two years prior determines if you pay IRMAA.",
    "There are specific income thresholds that trigger IRMAA, which are adjusted annually.",
    "You can appeal an IRMAA decision if your income has decreased due to certain life-changing events.",
    "Understanding IRMAA is crucial for managing your overall Medicare costs effectively.",
  ],
  quickFacts: [
    { label: "What is IRMAA?", value: "Income-Related Monthly Adjustment Amount" },
    { label: "Who pays IRMAA?", value: "High-income Medicare beneficiaries" },
    { label: "Based on what income?", value: "MAGI from two years prior" },
    { label: "Affected parts?", value: "Medicare Part B and Part D" },
  ],
  sections: [
    { type: "keyTakeaways" as const, items: [
        { label: "IRMAA is an extra", text: "IRMAA is an extra charge added to your Medicare Part B and Part D premiums based on your income." },
        { label: "Your modified adjusted gross", text: "Your modified adjusted gross income (MAGI) from two years prior determines if you pay IRMAA." },
        { label: "There are specific income", text: "There are specific income thresholds that trigger IRMAA, which are adjusted annually." },
        { label: "You can appeal an", text: "You can appeal an IRMAA decision if your income has decreased due to certain life-changing events." },
        { label: "Understanding IRMAA is crucial", text: "Understanding IRMAA is crucial for managing your overall Medicare costs effectively." },
      ]},
    { type: "section" as const, heading: "What is IRMAA?", content: `The Income-Related Monthly Adjustment Amount, or IRMAA, is an additional premium that some Medicare beneficiaries pay for their Part B and Part D coverage. This extra cost is determined by your modified adjusted gross income (MAGI) from two years prior. It ensures that those with higher incomes contribute more to their Medicare costs, helping to sustain the program for everyone. Understanding IRMAA is essential for accurately forecasting your total <a href='/costs-at-a-glance' class='text-[#1a3fa8] underline underline-offset-2'>Medicare costs</a>.

Medicare uses your tax return from two years ago to calculate your IRMAA. For example, your 2026 IRMAA will be based on your 2024 tax return. This look-back period can sometimes lead to confusion, especially if your income has changed significantly. It's important to keep track of your income levels to anticipate any potential IRMAA charges.

IRMAA affects both your <a href='/medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part B</a> and <a href='/coverage/prescription-drugs' class='text-[#1a3fa8] underline underline-offset-2'>Part D premiums</a>. This means that if you are subject to IRMAA, you will pay a higher premium for both your medical insurance and your prescription drug coverage. These adjustments are applied on a sliding scale, with higher incomes leading to larger additional amounts.` },
    { type: "section" as const, heading: "How is IRMAA Determined?", content: `The Social Security Administration (SSA) is responsible for determining who pays IRMAA. They obtain your tax information directly from the IRS. If your MAGI exceeds certain thresholds, the SSA will notify you of your IRMAA determination. These thresholds are adjusted annually, so it's important to stay informed about the current year's limits.

Your MAGI includes your adjusted gross income plus any tax-exempt interest income. This comprehensive calculation ensures that all relevant income sources are considered when assessing your IRMAA liability. It's not just your taxable income that matters, but also other forms of income that might not be taxed.

If you disagree with the SSA's IRMAA determination, or if your income has significantly decreased due to a life-changing event, you have the right to appeal. Life-changing events can include marriage, divorce, death of a spouse, work stoppage, or loss of income-producing property. Providing documentation for these events can help reduce or eliminate your IRMAA.` },
    { type: "section" as const, heading: "2026 IRMAA Income Thresholds and Surcharges", content: `The income thresholds for IRMAA are tiered and updated each year by the Social Security Administration. For 2026, IRMAA kicks in when your 2024 MAGI exceeds $109,000 (single filers) or $218,000 (married filing jointly). Here are the exact 2026 brackets from CMS:

<table style="width:100%;border-collapse:collapse;font-size:0.875rem;margin:1rem 0">
<thead><tr style="background:#1a3fa8;color:#fff">
<th style="padding:0.6rem 0.75rem;text-align:left">Single MAGI</th>
<th style="padding:0.6rem 0.75rem;text-align:left">Joint MAGI</th>
<th style="padding:0.6rem 0.75rem;text-align:right">Part B Premium</th>
<th style="padding:0.6rem 0.75rem;text-align:right">Part D Surcharge</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:0.5rem 0.75rem">Up to $109,000</td><td style="padding:0.5rem 0.75rem">Up to $218,000</td><td style="padding:0.5rem 0.75rem;text-align:right">$202.90</td><td style="padding:0.5rem 0.75rem;text-align:right">$0</td></tr>
<tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb"><td style="padding:0.5rem 0.75rem">$109,001 - $137,000</td><td style="padding:0.5rem 0.75rem">$218,001 - $274,000</td><td style="padding:0.5rem 0.75rem;text-align:right">$284.10</td><td style="padding:0.5rem 0.75rem;text-align:right">$14.50</td></tr>
<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:0.5rem 0.75rem">$137,001 - $171,000</td><td style="padding:0.5rem 0.75rem">$274,001 - $342,000</td><td style="padding:0.5rem 0.75rem;text-align:right">$405.80</td><td style="padding:0.5rem 0.75rem;text-align:right">$37.60</td></tr>
<tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb"><td style="padding:0.5rem 0.75rem">$171,001 - $205,000</td><td style="padding:0.5rem 0.75rem">$342,001 - $410,000</td><td style="padding:0.5rem 0.75rem;text-align:right">$527.50</td><td style="padding:0.5rem 0.75rem;text-align:right">$60.80</td></tr>
<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:0.5rem 0.75rem">$205,001 - $499,999</td><td style="padding:0.5rem 0.75rem">$410,001 - $749,999</td><td style="padding:0.5rem 0.75rem;text-align:right">$649.20</td><td style="padding:0.5rem 0.75rem;text-align:right">$84.10</td></tr>
<tr style="background:#f9fafb"><td style="padding:0.5rem 0.75rem">$500,000 or more</td><td style="padding:0.5rem 0.75rem">$750,000 or more</td><td style="padding:0.5rem 0.75rem;text-align:right">$689.90</td><td style="padding:0.5rem 0.75rem;text-align:right">$84.10</td></tr>
</tbody></table>

Note: Part D surcharges shown above are added to your plan's own premium. The standard Part B premium for most beneficiaries is $202.90 per month in 2026. If your income is close to a threshold, strategic financial planning in 2024 (the look-back year) can help you avoid moving into a higher bracket. Consulting with a financial advisor or <a href='/get-help' class='text-[#1a3fa8] underline underline-offset-2'>Medicare advisor</a> can be beneficial in these situations.` },
    { type: "section" as const, heading: "Appealing an IRMAA Decision", content: `If you believe your IRMAA determination is incorrect, or if your financial situation has changed, you can file an appeal with the Social Security Administration. The SSA provides specific forms and procedures for this process. It's important to act promptly once you receive an IRMAA notice, as there are deadlines for filing appeals.

To appeal, you will typically need to provide documentation supporting your claim. This could include tax returns, pay stubs, or official documents related to life-changing events. The more evidence you can provide, the stronger your appeal will be. The SSA will review your case and make a new determination.

Successfully appealing an IRMAA decision can lead to a reduction or elimination of the additional premium, saving you money on your monthly Medicare costs. Many beneficiaries find this process worthwhile, especially if their income has genuinely decreased. For more information on managing your <a href='/do-i-need-a-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medicare supplement</a> options, consider exploring available resources.` },
    { type: "summary" as const, heading: "Bottom Line", content: "IRMAA is an important consideration for many Medicare beneficiaries, particularly those with higher incomes. It represents an additional cost for both Part B and Part D premiums, determined by your income from two years prior. Understanding how IRMAA is calculated, the income thresholds, and your right to appeal can help you manage your Medicare expenses more effectively. Proactive planning and staying informed are key to navigating these adjustments and ensuring you are prepared for your healthcare costs." },
    { type: "faq" as const, items: [
      { question: "What does IRMAA stand for?", answer: "IRMAA stands for Income-Related Monthly Adjustment Amount. It is an extra charge added to your Medicare Part B and Part D premiums if your income is above certain levels." },
      { question: "How is my income for IRMAA calculated?", answer: "Your IRMAA is calculated based on your modified adjusted gross income (MAGI) from your tax return two years prior to the current Medicare year. For example, 2026 IRMAA uses 2024 MAGI." },
      { question: "Can I avoid paying IRMAA?", answer: "If your income is below the annual thresholds, you will not pay IRMAA. If your income has decreased due to a life-changing event, you may be able to appeal the IRMAA decision." },
      { question: "What are the income thresholds for IRMAA?", answer: "The income thresholds for IRMAA are adjusted annually by the Social Security Administration. They are tiered, meaning the higher your income, the higher your IRMAA surcharge. You can find the latest thresholds on the SSA website." },
      { question: "Does IRMAA apply to Medicare Advantage plans?", answer: "While you still pay your Part B premium (and any associated IRMAA) when enrolled in a Medicare Advantage plan, the IRMAA specifically applies to the Part B and Part D premiums. Some Medicare Advantage plans may have their own premiums in addition to Part B." },
      { question: "What if my income has changed recently?", answer: "If your income has significantly decreased due to a life-changing event (e.g., retirement, divorce, death of a spouse), you can request a new IRMAA determination from the SSA by providing documentation of the event." },
      { question: "Where can I get help with IRMAA?", answer: "You can contact the Social Security Administration directly for questions about your IRMAA determination. You can also seek assistance from a <a href='/get-help' class='text-[#1a3fa8] underline underline-offset-2'>Medicare advisor</a>." },
    ]},
  ],
  relatedPosts: [
    { title: "Part D $2,000 Cap", href: "/part-d-2000-cap", category: "Part D" as const },
    { title: "2026 Medicare Advantage Changes", href: "/2026-medicare-advantage-changes", category: "Enrollment" as const },
    { title: "Annual Enrollment Period Guide", href: "/annual-enrollment-period-guide", category: "Enrollment" as const },
  ],
};
export default function Page() {
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
