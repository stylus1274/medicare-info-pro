import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Medicare Out-of-Pocket Costs: Your Guide to Copays, Deductibles, and Maximizing Savings",
  "url": "https://medicareinfopro.com/blog/medicare-out-of-pocket-costs",
  "datePublished": "2026-06-19",
  "dateModified": "2026-06-19",
  "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/medicare-out-of-pocket-costs"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the maximum out-of-pocket cost for Medicare in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare (Parts A and B) has no out-of-pocket maximum. You could theoretically owe unlimited amounts in a single year. Medicare Advantage plans are required to cap your out-of-pocket costs for covered in-network services. In 2026, the maximum allowed cap for Medicare Advantage plans is $9,350 for in-network services and $14,000 for combined in-network and out-of-network services."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Part B deductible in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Medicare Part B deductible in 2026 is $257. After you meet this deductible, Medicare pays 80% of approved outpatient services and you pay the remaining 20% coinsurance with no cap."
      }
    },
    {
      "@type": "Question",
      "name": "Does Original Medicare have an out-of-pocket maximum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Original Medicare does not have an annual out-of-pocket maximum. This is one of the most significant financial risks of staying with Original Medicare without a Medigap supplement plan. A Medicare Supplement (Medigap) plan or Medicare Advantage plan can protect you from unlimited cost exposure."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Medicare Part A cost in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most people pay no premium for Medicare Part A if they or their spouse worked and paid Medicare taxes for at least 40 quarters. The Part A inpatient hospital deductible is $1,676 per benefit period in 2026. For hospital stays beyond 60 days, daily coinsurance applies: $419 per day for days 61 to 90, and $838 per day for lifetime reserve days."
      }
    },
    {
      "@type": "Question",
      "name": "What does Medicare not cover that I have to pay for out of pocket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare does not cover routine dental care, routine vision exams and eyeglasses, hearing aids, long-term custodial care, most care received outside the United States, and cosmetic procedures. These are common sources of unexpected out-of-pocket costs for Medicare beneficiaries."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my Medicare out-of-pocket costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most effective ways to reduce Medicare out-of-pocket costs are: enrolling in a Medicare Supplement (Medigap) plan to cover Original Medicare cost-sharing; choosing a Medicare Advantage plan with a low out-of-pocket maximum; applying for Extra Help or a Medicare Savings Program if you have limited income; and using preventive services that Medicare covers at no cost."
      }
    },
    {
      "@type": "Question",
      "name": "What is IRMAA and how does it affect my Medicare costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IRMAA stands for Income-Related Monthly Adjustment Amount. If your modified adjusted gross income from two years ago exceeds certain thresholds, you pay a higher Part B and Part D premium. In 2026, IRMAA surcharges begin for individuals with income above $106,000 and couples above $212,000. The surcharge is added on top of the standard premium."
      }
    }
  ]
} as const;

export const metadata: Metadata = {
  title: "Medicare Out-of-Pocket Costs: Copays, Deductibles, and How to Save in 2026",
  description:
    "Medicare is not free. Learn exactly what you pay under Parts A, B, C, and D in 2026, why Original Medicare has no out-of-pocket maximum, and the best strategies to limit your annual costs.",
  keywords: [
    "Medicare out-of-pocket costs",
    "Medicare deductible 2026",
    "Medicare copay 2026",
    "Medicare coinsurance",
    "Medicare Part A costs 2026",
    "Medicare Part B costs 2026",
    "Medicare out-of-pocket maximum",
    "how to reduce Medicare costs",
  ],
  openGraph: {
    title: "Medicare Out-of-Pocket Costs: Copays, Deductibles, and How to Save in 2026",
    description:
      "Medicare is not free. Learn exactly what you pay under Parts A, B, C, and D in 2026, why Original Medicare has no out-of-pocket maximum, and the best strategies to limit your annual costs.",
    url: "https://medicareinfopro.com/blog/medicare-out-of-pocket-costs",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Calculator and financial documents representing Medicare out-of-pocket costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Out-of-Pocket Costs: Copays, Deductibles, and How to Save in 2026",
    description:
      "Medicare is not free. Learn exactly what you pay under Parts A, B, C, and D in 2026, why Original Medicare has no out-of-pocket maximum, and the best strategies to limit your annual costs.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog/medicare-out-of-pocket-costs",
  },
};

const POST = {
  slug: "medicare-out-of-pocket-costs",
  title: "Medicare Out-of-Pocket Costs: Your Guide to Copays, Deductibles, and Maximizing Savings",
  excerpt:
    "Medicare comes with premiums, deductibles, copays, and coinsurance that can add up quickly. This guide breaks down exactly what you pay under each part of Medicare in 2026 and shows you the best strategies to protect yourself from unexpected costs.",
  date: "June 19, 2026",
  readTime: "11 min read",
  category: "Costs" as const,
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
  imageAlt: "Calculator and financial documents representing Medicare out-of-pocket costs",
  author: GREG_WOHL,
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Original Medicare has no out-of-pocket maximum",
          text: "Unlike most private insurance, Original Medicare (Parts A and B) does not cap your annual out-of-pocket costs. A serious illness or extended hospital stay could result in tens of thousands of dollars in cost-sharing with no limit.",
        },
        {
          label: "Part A deductible resets per benefit period",
          text: "The Part A inpatient hospital deductible is $1,676 in 2026 and applies per benefit period, not per year. If you are discharged and readmitted after 60 days, the deductible resets and you owe it again.",
        },
        {
          label: "Part B charges 20% coinsurance with no cap",
          text: "After meeting the $257 Part B deductible, you pay 20% of the Medicare-approved amount for all covered outpatient services indefinitely. There is no annual limit on this coinsurance under Original Medicare.",
        },
        {
          label: "Part D now has a $2,000 out-of-pocket cap",
          text: "Starting in 2025, the Medicare Part D out-of-pocket maximum for covered drugs is $2,000 per year. Once you reach this threshold, you pay nothing for covered drugs for the rest of the year.",
        },
        {
          label: "Medigap and Medicare Advantage can eliminate most cost-sharing",
          text: "A Medicare Supplement (Medigap) Plan G covers nearly all Original Medicare cost-sharing. Medicare Advantage plans cap your annual out-of-pocket costs at no more than $9,350 for in-network services in 2026.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Understanding the Four Types of Medicare Cost-Sharing",
      content:
        "Before diving into the specific costs under each part of <a href='/what-is-medicare' class='text-[#1a3fa8] underline underline-offset-2'>Medicare</a>, it helps to understand the four basic cost-sharing mechanisms that determine what you pay.\n\n<strong>Premium:</strong> A premium is the monthly fee you pay for coverage, regardless of whether you use any services. Most people pay no premium for Part A, while the standard Part B premium is $185 per month in 2026.\n\n<strong>Deductible:</strong> A deductible is the amount you must pay out of pocket before Medicare begins covering your costs. Part A and Part B each have separate deductibles.\n\n<strong>Copay:</strong> A copay is a fixed dollar amount you pay for a specific service, such as $20 for a primary care visit. Copays are more common under Medicare Advantage plans than under Original Medicare.\n\n<strong>Coinsurance:</strong> Coinsurance is a percentage of the cost you pay after meeting your deductible. Under Original Medicare Part B, you pay 20% coinsurance for most covered outpatient services, with Medicare paying the other 80%.\n\nThe combination of these four elements determines your total annual healthcare spending. The challenge with Original Medicare is that there is no annual limit on how much you can owe in deductibles and coinsurance combined.",
    },
    {
      type: "section" as const,
      heading: "Medicare Part A Costs in 2026",
      content:
        "<a href='/medicare-part-a' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part A</a> covers inpatient hospital care, skilled nursing facility (SNF) care, hospice care, and some home health services. While most beneficiaries pay no monthly premium for Part A, the cost-sharing for hospital stays can be substantial.\n\n<table>\n<thead><tr><th>Service</th><th>2026 Cost</th><th>Notes</th></tr></thead>\n<tbody>\n<tr><td>Part A premium</td><td>$0 for most people</td><td>Free if you or spouse worked 40+ quarters; up to $518/month otherwise</td></tr>\n<tr><td>Inpatient hospital deductible</td><td>$1,676 per benefit period</td><td>Resets if readmitted after 60 days; can apply multiple times per year</td></tr>\n<tr><td>Hospital days 1 to 60</td><td>$0 coinsurance</td><td>Covered after deductible</td></tr>\n<tr><td>Hospital days 61 to 90</td><td>$419 per day</td><td>Daily coinsurance applies</td></tr>\n<tr><td>Lifetime reserve days (91+)</td><td>$838 per day</td><td>60 lifetime reserve days total; once used, they are gone permanently</td></tr>\n<tr><td>Skilled nursing facility days 1 to 20</td><td>$0 coinsurance</td><td>Requires qualifying 3-night hospital stay first</td></tr>\n<tr><td>SNF days 21 to 100</td><td>$209.50 per day</td><td>Daily coinsurance applies</td></tr>\n<tr><td>SNF days 101+</td><td>100% of cost</td><td>Medicare coverage ends; you pay everything</td></tr>\n</tbody>\n</table>\n\nThe benefit period structure is one of the most misunderstood aspects of Part A. A benefit period begins the day you are admitted as an inpatient and ends when you have been out of the hospital or SNF for 60 consecutive days. If you are readmitted after that 60-day gap, a new benefit period begins and the $1,676 deductible applies again. There is no limit to how many benefit periods you can have in a year.",
    },
    {
      type: "section" as const,
      heading: "Medicare Part B Costs in 2026",
      content:
        "<a href='/medicare-part-b' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part B</a> covers outpatient medical services, doctor visits, preventive care, durable medical equipment, and most medically necessary treatments received outside a hospital. Part B has both a monthly premium and annual cost-sharing.\n\n<strong>Standard Part B premium:</strong> $185 per month in 2026. Higher-income beneficiaries pay more due to IRMAA surcharges (see below).\n\n<strong>Part B deductible:</strong> $257 per year in 2026. You pay this once per calendar year before Part B begins covering your costs.\n\n<strong>Part B coinsurance:</strong> After meeting your deductible, you pay 20% of the Medicare-approved amount for all covered services. Medicare pays the remaining 80%. There is no annual cap on this 20% coinsurance under Original Medicare.\n\nTo put this in perspective: if you have a major surgery with $100,000 in approved outpatient charges, your 20% share would be $20,000. Without a Medigap plan or Medicare Advantage, you would owe that full amount.\n\n<strong>Preventive services:</strong> Many preventive services, including annual wellness visits, flu shots, mammograms, and colorectal cancer screenings, are covered at 100% with no deductible or coinsurance. Taking advantage of these services is one of the easiest ways to reduce your overall healthcare costs.",
    },
    {
      type: "proTip" as const,
      content:
        "The 20% Part B coinsurance with no cap is the single biggest financial risk in Original Medicare. A single serious diagnosis, such as cancer or heart disease, can generate hundreds of thousands of dollars in outpatient charges over the course of treatment. A <a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medigap Plan G</a> covers 100% of this coinsurance after you meet the Part B deductible, capping your annual exposure at just $257 in 2026. Talk to a <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare specialist</a> to see if Plan G makes sense for your situation.",
    },
    {
      type: "section" as const,
      heading: "Medicare Part D Costs in 2026",
      content:
        "Medicare Part D covers prescription drugs. Costs vary by plan, but all Part D plans share a common structure that includes a premium, deductible, and tiered copays or coinsurance.\n\n<strong>Part D premium:</strong> Varies by plan. The national average benchmark premium in 2026 is approximately $36 per month, but plans range from $0 to over $100 per month depending on the drugs covered and your location.\n\n<strong>Part D deductible:</strong> The maximum allowed deductible in 2026 is $590. Many plans charge less; some charge none.\n\n<strong>Part D copays and coinsurance:</strong> After the deductible, you pay a copay or coinsurance for each prescription based on the drug tier. Generic drugs typically have the lowest copays, while specialty drugs can have significant coinsurance.\n\n<strong>The $2,000 out-of-pocket cap:</strong> Starting in 2025, there is a $2,000 annual cap on out-of-pocket costs for covered Part D drugs. Once you reach this threshold, you pay $0 for covered drugs for the rest of the calendar year. This is a major improvement from previous years when there was no cap and catastrophic drug costs could be unlimited.\n\nLearn more about how this cap works in our detailed article on the <a href='/blog/part-d-2000-cap' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part D $2,000 out-of-pocket cap</a>.",
    },
    {
      type: "section" as const,
      heading: "The Critical Gap: Original Medicare Has No Out-of-Pocket Maximum",
      content:
        "This is the most important cost fact every Medicare beneficiary needs to understand: <strong>Original Medicare (Parts A and B) has no annual out-of-pocket maximum.</strong>\n\nMost employer-sponsored health plans and ACA marketplace plans cap your annual out-of-pocket costs at a specific dollar amount. Once you hit that cap, the insurance pays 100% for the rest of the year. Original Medicare has no such protection.\n\nUnder Original Medicare, you could theoretically owe:\n\n<ul><li>Multiple Part A deductibles in a single year if you have repeated hospitalizations</li><li>Unlimited 20% Part B coinsurance on outpatient services</li><li>Daily coinsurance for extended hospital stays beyond 60 days</li><li>Full cost of care after 100 days in a skilled nursing facility</li></ul>\n\nFor someone with a serious illness, these costs can easily reach $20,000, $50,000, or more in a single year. This is why most financial advisors and Medicare specialists recommend pairing Original Medicare with either a Medigap supplement plan or enrolling in a Medicare Advantage plan that includes an out-of-pocket maximum.",
    },
    {
      type: "section" as const,
      heading: "Medicare Advantage vs. Medigap: Two Ways to Limit Your Costs",
      content:
        "There are two primary ways to protect yourself from Original Medicare's unlimited cost exposure.\n\n<strong>Medicare Supplement (Medigap) plans</strong> work alongside Original Medicare and pay some or all of the cost-sharing that Original Medicare leaves behind. The most popular plan, <a href='/blog/why-choose-medigap-plan-g' class='text-[#1a3fa8] underline underline-offset-2'>Plan G</a>, covers the Part A deductible, Part A coinsurance, Part B coinsurance, skilled nursing facility coinsurance, and foreign travel emergency care. After paying the $257 Part B deductible, you pay nothing for covered services for the rest of the year. Medigap plans have higher monthly premiums but provide predictable, low out-of-pocket costs.\n\n<strong>Medicare Advantage plans</strong> replace Original Medicare and are required by law to cap your annual out-of-pocket costs for covered in-network services. In 2026, the maximum allowed cap is $9,350 for in-network services and $14,000 for combined in-network and out-of-network services. Many plans set their caps lower. Medicare Advantage plans often have lower premiums than Medigap but may require referrals, prior authorizations, and network restrictions.\n\n<table>\n<thead><tr><th>Feature</th><th>Original Medicare Only</th><th>Original Medicare + Medigap Plan G</th><th>Medicare Advantage</th></tr></thead>\n<tbody>\n<tr><td>Out-of-pocket maximum</td><td>None</td><td>$257/year (Part B deductible only)</td><td>Up to $9,350 in-network (2026)</td></tr>\n<tr><td>Monthly premium</td><td>$185 (Part B only)</td><td>$185 + Medigap premium ($100-$300+)</td><td>$0 to $100+ (varies by plan)</td></tr>\n<tr><td>Network restrictions</td><td>Any Medicare provider</td><td>Any Medicare provider</td><td>Usually network-based</td></tr>\n<tr><td>Referrals required</td><td>No</td><td>No</td><td>Often yes (HMO plans)</td></tr>\n<tr><td>Drug coverage</td><td>Separate Part D plan needed</td><td>Separate Part D plan needed</td><td>Usually included (MAPD)</td></tr>\n<tr><td>Extra benefits (dental, vision)</td><td>No</td><td>No</td><td>Often yes</td></tr>\n</tbody>\n</table>\n\nFor a deeper comparison, see our article on <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare vs. Medicare Advantage</a>.",
    },
    {
      type: "section" as const,
      heading: "IRMAA: Higher Costs for Higher-Income Beneficiaries",
      content:
        "If your income exceeds certain thresholds, you pay more for Medicare Part B and Part D through the Income-Related Monthly Adjustment Amount (IRMAA). IRMAA is based on your modified adjusted gross income (MAGI) from two years prior. For 2026, Social Security uses your 2024 tax return.\n\nIRMAA surcharges begin for individuals with income above $106,000 and married couples filing jointly above $212,000. The surcharges increase in tiers as income rises.\n\nFor example, an individual with 2024 income of $130,000 would pay an additional $74.00 per month on top of the standard $185 Part B premium, for a total of $259 per month. At the highest income tier (above $500,000 for individuals), the Part B premium reaches $628.90 per month.\n\nIf your income has dropped significantly since the year used for the IRMAA calculation, you can request a reconsideration from Social Security using Form SSA-44. Common qualifying life events include retirement, divorce, and the death of a spouse. Learn more in our article on <a href='/blog/irmaa-explained' class='text-[#1a3fa8] underline underline-offset-2'>how IRMAA works and how to appeal it</a>.",
    },
    {
      type: "section" as const,
      heading: "How to Reduce Your Medicare Out-of-Pocket Costs",
      content:
        "There are several proven strategies to reduce what you pay for Medicare each year.\n\n<strong>1. Add a Medigap or Medicare Advantage plan.</strong> As described above, both options can dramatically reduce or cap your out-of-pocket exposure. The right choice depends on your health needs, budget, and preferred doctors.\n\n<strong>2. Apply for Extra Help or a Medicare Savings Program.</strong> If your income and resources are limited, you may qualify for programs that pay your Part B premium, reduce your Part D costs, or cover your deductibles and copays entirely. See our guide on <a href='/blog/how-to-get-help-paying-for-medicare' class='text-[#1a3fa8] underline underline-offset-2'>how to get help paying for Medicare</a> for full details.\n\n<strong>3. Use preventive services.</strong> Medicare covers dozens of preventive services at no cost, including annual wellness visits, cancer screenings, flu and pneumonia vaccines, and cardiovascular screenings. Using these services can catch health issues early and reduce long-term costs.\n\n<strong>4. Review your Part D plan annually.</strong> During the Annual Enrollment Period (October 15 to December 7), you can switch to a different Part D plan. If your medications have changed, a different plan may offer lower copays or a lower premium. Our article on the <a href='/blog/annual-enrollment-period-guide' class='text-[#1a3fa8] underline underline-offset-2'>Annual Enrollment Period</a> explains how to compare plans.\n\n<strong>5. Ask about generic alternatives.</strong> Generic drugs are placed on lower tiers in most Part D formularies and carry significantly lower copays than brand-name equivalents. Ask your doctor whether a generic is appropriate for your prescriptions.\n\n<strong>6. Appeal IRMAA if your income has dropped.</strong> If you are paying IRMAA surcharges based on income that no longer reflects your current situation, file a life-change event appeal with Social Security to have your premiums recalculated.",
    },
    {
      type: "summary" as const,
      heading: "2026 Medicare Cost-Sharing at a Glance",
      content:
        "<ul><li><strong>Part A premium:</strong> $0 for most; up to $518/month if fewer than 40 work quarters</li><li><strong>Part A hospital deductible:</strong> $1,676 per benefit period (resets after 60 days out of hospital)</li><li><strong>Part A hospital coinsurance:</strong> $0 days 1-60; $419/day days 61-90; $838/day lifetime reserve days</li><li><strong>Part A SNF coinsurance:</strong> $0 days 1-20; $209.50/day days 21-100; 100% after day 100</li><li><strong>Part B premium:</strong> $185/month standard (higher with IRMAA)</li><li><strong>Part B deductible:</strong> $257/year</li><li><strong>Part B coinsurance:</strong> 20% of approved amount with no annual cap</li><li><strong>Part D deductible:</strong> Up to $590 (varies by plan)</li><li><strong>Part D out-of-pocket cap:</strong> $2,000/year for covered drugs</li><li><strong>Medicare Advantage OOP max:</strong> Up to $9,350 in-network (2026)</li></ul>\n\nIf you want help reviewing your current coverage and finding ways to reduce your out-of-pocket costs, our <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare specialists</a> offer free consultations with no obligation to enroll.",
    },
  ],
  relatedPosts: [
    {
      title: "How Medicare Premiums Are Calculated in 2026",
      href: "/how-medicare-premiums-are-calculated",
      category: "Costs" as const,
    },
    {
      title: "How to Get Help Paying for Medicare: Extra Help, LIS, and Medicare Savings Programs",
      href: "/how-to-get-help-paying-for-medicare",
      category: "Costs" as const,
    },
    {
      title: "Medicare Part D $2,000 Out-of-Pocket Cap Explained",
      href: "/part-d-2000-cap",
      category: "Part D" as const,
    },
  ],
  faqSchema,
  articleSchema,
};

export default function Page() {
  return <BlogPostClient post={POST} />;
}
