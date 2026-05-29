import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

export const metadata: Metadata = {
  title: "IRMAA Explained: How Income Affects Your Medicare Premiums | MedicareInfoPro",
  description:
    "IRMAA is an income-related surcharge added to your Medicare Part B and Part D premiums. Learn the 2026 brackets, how to appeal, and strategies to reduce your IRMAA.",
  keywords: [
    "IRMAA Medicare 2026",
    "Medicare income related adjustment",
    "Medicare Part B premium high income",
    "IRMAA brackets 2026",
    "how to appeal IRMAA",
    "reduce Medicare IRMAA",
    "Medicare surcharge income",
  ],
  openGraph: {
    title: "IRMAA Explained: How Income Affects Your Medicare Premiums",
    description: "Higher income means higher Medicare premiums. Here are the 2026 IRMAA brackets, how the surcharge is calculated, and how to appeal if your income has dropped.",
    url: "https://medicare-info-pro.vercel.app/blog/irmaa-explained",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80", width: 1200, height: 630, alt: "Tax documents and calculator representing Medicare IRMAA income surcharge" }],
  },
  twitter: { card: "summary_large_image", title: "IRMAA Explained: How Income Affects Your Medicare Premiums", description: "Higher income means higher Medicare premiums. Here are the 2026 IRMAA brackets and how to appeal." },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/blog/irmaa-explained" },
};

const POST = {
  slug: "irmaa-explained",
  title: "IRMAA Explained: How Income Affects Your Medicare Premiums",
  excerpt: "If your income exceeds certain thresholds, you pay more for Medicare Part B and Part D. This surcharge is called IRMAA. Here are the 2026 brackets, how the calculation works, and how to appeal if your income has recently dropped.",
  category: "Costs" as const,
  author: GREG_WOHL,
  date: "January 2026",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80",
  imageAlt: "Tax documents and a calculator on a desk representing Medicare income-related premium adjustments",
  sections: [
    {
      type: "intro" as const,
      content: `Most Medicare beneficiaries pay the standard Part B premium, which is $185.00 per month in 2026. But if your income exceeds certain thresholds, you pay more. The additional amount is called the Income-Related Monthly Adjustment Amount, or IRMAA. It applies to both Part B and Part D premiums.

IRMAA surprises many people who are new to Medicare. You may have retired and assumed your Medicare costs would be straightforward, only to receive a notice from Social Security telling you that your premiums are significantly higher than the standard rate. Understanding how IRMAA works, which income year it is based on, and how to appeal it can save you hundreds or even thousands of dollars per year.`,
    },
    {
      type: "keyTakeaways" as const,
      items: [
        { label: "Based on Income from Two Years Ago", text: "IRMAA is calculated using your Modified Adjusted Gross Income (MAGI) from two years prior. Your 2026 IRMAA is based on your 2024 tax return." },
        { label: "Five Surcharge Tiers Above Standard", text: "There are five income brackets above the standard premium threshold. Surcharges range from $74.00 to $443.90 per month for Part B in 2026, on top of the $185.00 standard premium." },
        { label: "Part D Also Has IRMAA", text: "IRMAA applies to Part D drug plans as well. The surcharge is paid directly to Medicare, not to your drug plan, and ranges from $13.70 to $85.80 per month in 2026." },
        { label: "You Can Appeal a Life-Changing Event", text: "If your income has dropped significantly due to retirement, divorce, death of a spouse, or other qualifying events, you can file an appeal with Social Security to use a more recent income year." },
        { label: "IRMAA Is Reassessed Annually", text: "Your IRMAA status is reassessed each year based on your most recent available tax return. If your income drops below the threshold, your surcharge is removed." },
      ],
    },
    {
      type: "section" as const,
      heading: "2026 IRMAA Brackets for Part B",
      content: `The following table shows the 2026 Part B IRMAA brackets for individual filers. Married couples filing jointly have thresholds that are approximately double the individual thresholds.

Individual income under $106,000: standard premium of $185.00 per month, no IRMAA surcharge.
Individual income $106,001 to $133,000: $185.00 plus $74.00 surcharge, total $259.00 per month.
Individual income $133,001 to $167,000: $185.00 plus $187.00 surcharge, total $372.00 per month.
Individual income $167,001 to $200,000: $185.00 plus $299.70 surcharge, total $484.70 per month.
Individual income $200,001 to $500,000: $185.00 plus $412.10 surcharge, total $597.10 per month.
Individual income over $500,000: $185.00 plus $443.90 surcharge, total $628.90 per month.

These amounts are per person. A married couple where both spouses are on Medicare and both have income above the threshold pay the surcharge twice.`,
    },
    {
      type: "section" as const,
      heading: "2026 IRMAA Brackets for Part D",
      content: `IRMAA also applies to Medicare Part D prescription drug coverage. The surcharge is added to whatever premium your specific drug plan charges and is paid directly to Medicare (deducted from your Social Security benefit if you receive one).

Individual income under $106,000: no Part D IRMAA surcharge.
Individual income $106,001 to $133,000: $13.70 per month surcharge.
Individual income $133,001 to $167,000: $35.30 per month surcharge.
Individual income $167,001 to $200,000: $57.00 per month surcharge.
Individual income $200,001 to $500,000: $78.60 per month surcharge.
Individual income over $500,000: $85.80 per month surcharge.

The Part D IRMAA applies whether you have a standalone Part D plan or a Medicare Advantage plan that includes drug coverage (MAPD).`,
    },
    {
      type: "section" as const,
      heading: "Which Income Year Is Used",
      content: `IRMAA is based on your Modified Adjusted Gross Income (MAGI) from two years prior to the current Medicare year. Your 2026 IRMAA is calculated using your 2024 federal tax return. Social Security uses the most recent tax return available from the IRS, which is typically two years old by the time Medicare premiums are set.

MAGI for IRMAA purposes is your Adjusted Gross Income plus tax-exempt interest income. It includes wages, self-employment income, capital gains, dividends, rental income, Social Security benefits (the taxable portion), IRA distributions, and pension income. It does not include Roth IRA distributions, which is one reason Roth conversions are a common IRMAA planning strategy.

The two-year lag can create situations where your current income is significantly lower than the income used to calculate your IRMAA. This is particularly common in the year you retire, when your prior-year income reflects a full year of employment but your current income is much lower. This is exactly the situation where an IRMAA appeal is appropriate.`,
    },
    {
      type: "section" as const,
      heading: "How to Appeal IRMAA",
      content: `If you experience a qualifying life-changing event that significantly reduced your income, you can file an appeal with Social Security to request that a more recent income year be used for your IRMAA calculation. Qualifying events include retirement or reduction in work hours, marriage, divorce or annulment, death of a spouse, loss of income-producing property due to a disaster, loss of pension income, and employer settlement payment.

To appeal, file Form SSA-44 (Medicare Income-Related Monthly Adjustment Amount: Life-Changing Event) with your local Social Security office. You will need to provide documentation of the life-changing event and evidence of your reduced income, such as a letter from your employer confirming your retirement date or a copy of your most recent tax return.

Social Security will review your appeal and, if approved, recalculate your IRMAA using the more recent income year. Approved appeals can result in a reduction or elimination of the surcharge, sometimes retroactively.`,
    },
    {
      type: "section" as const,
      heading: "Strategies to Reduce IRMAA",
      content: `For beneficiaries who are not yet on Medicare or who have flexibility in their income, there are several strategies that can reduce IRMAA exposure.

Roth conversions before age 65 can shift future income from taxable IRA distributions to tax-free Roth distributions. Since Roth distributions are not included in MAGI for IRMAA purposes, this can significantly reduce your IRMAA in retirement. The tradeoff is paying income tax on the converted amount in the year of conversion.

Qualified Charitable Distributions (QCDs) allow individuals age 70.5 or older to donate up to $105,000 per year directly from an IRA to a qualified charity. QCDs are excluded from taxable income and therefore do not count toward MAGI for IRMAA purposes.

Timing capital gains and IRA distributions to stay below IRMAA thresholds is another approach. Working with a financial advisor or CPA who understands IRMAA can help you plan distributions and income recognition to minimize your Medicare premiums.`,
    },
    {
      type: "faq" as const,
      items: [
        { question: "What is IRMAA?", answer: "IRMAA stands for Income-Related Monthly Adjustment Amount. It is a surcharge added to your Medicare Part B and Part D premiums if your income exceeds certain thresholds. It is based on your Modified Adjusted Gross Income from two years prior." },
        { question: "How do I know if I owe IRMAA?", answer: "Social Security will send you a notice called an IRMAA determination letter if you are subject to the surcharge. The notice will state the income year used, your income amount, and the surcharge being applied. If you receive Social Security benefits, the surcharge is deducted from your monthly payment." },
        { question: "Can I appeal my IRMAA?", answer: "Yes, if you experienced a qualifying life-changing event that significantly reduced your income. Qualifying events include retirement, divorce, death of a spouse, and others. File Form SSA-44 with Social Security and provide documentation of the event and your reduced income." },
        { question: "Does IRMAA apply to Medicare Advantage plans?", answer: "IRMAA applies to Part B and Part D premiums regardless of whether you are on Original Medicare or Medicare Advantage. If you have a Medicare Advantage plan that includes drug coverage, you pay the Part B IRMAA surcharge and the Part D IRMAA surcharge in addition to your plan's premium." },
        { question: "What income is included in MAGI for IRMAA?", answer: "MAGI for IRMAA includes Adjusted Gross Income plus tax-exempt interest. It includes wages, self-employment income, capital gains, dividends, rental income, taxable Social Security benefits, IRA distributions, and pension income. Roth IRA distributions are not included." },
      ],
    },
  ],
  relatedPosts: [
    { title: "Medicare Costs at a Glance: 2026 Premiums, Deductibles, and Copays", href: "/costs-at-a-glance", category: "Costs" as const },
    { title: "Medicare Cost Estimator", href: "/cost-estimator", category: "Costs" as const },
    { title: "Understanding Medicare Part D: Drug Coverage Explained", href: "/understanding-part-d", category: "Part D" as const },
    { title: "Medigap Plan G: The Complete Guide", href: "/blog/plan-g-complete-guide", category: "Supplements" as const },
  ],
};

export default function Page() {
  return <BlogPostClient post={POST} />;
}
