import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Get Help Paying for Medicare: Extra Help, LIS, and Medicare Savings Programs Explained",
  "url": "https://medicareinfopro.com/blog/how-to-get-help-paying-for-medicare",
  "datePublished": "2026-06-19",
  "dateModified": "2026-06-19",
  "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/how-to-get-help-paying-for-medicare"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Extra Help for Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extra Help, also called the Low Income Subsidy (LIS), is a federal program that helps people with limited income and resources pay for Medicare Part D prescription drug costs, including premiums, deductibles, and copays. In 2026, Extra Help can save beneficiaries up to $5,900 per year on drug costs."
      }
    },
    {
      "@type": "Question",
      "name": "What are Medicare Savings Programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Savings Programs (MSPs) are state-administered programs that help pay Medicare premiums, deductibles, and copays for people with limited income and resources. There are four types: QMB, SLMB, QI, and QDWI. Florida administers these programs through the Agency for Health Care Administration."
      }
    },
    {
      "@type": "Question",
      "name": "Who qualifies for Extra Help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To qualify for Extra Help in 2026, your annual income must be at or below $23,340 for an individual or $31,860 for a married couple. Your resources must be at or below $17,220 for an individual or $34,360 for a couple. Some assets are excluded, including your home, one car, and life insurance policies."
      }
    },
    {
      "@type": "Question",
      "name": "How do I apply for Extra Help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply for Extra Help online at ssa.gov, by calling Social Security at 1-800-772-1213, or by visiting your local Social Security office. If you qualify for Medicaid or a Medicare Savings Program, you are automatically enrolled in Extra Help."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get help paying my Part B premium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Specified Low-Income Medicare Beneficiary (SLMB) and Qualifying Individual (QI) programs both pay the Medicare Part B premium for eligible beneficiaries. The Qualified Medicare Beneficiary (QMB) program covers Part B premiums as well as Part A and Part B deductibles and copays."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Extra Help and a Medicare Savings Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extra Help specifically reduces Part D prescription drug costs. Medicare Savings Programs reduce costs for Part A and Part B, including premiums, deductibles, and copays. The two programs have different eligibility rules and are administered by different agencies, but many people qualify for both."
      }
    },
    {
      "@type": "Question",
      "name": "Does Florida have any additional programs to help with Medicare costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Florida administers the four federal Medicare Savings Programs through the Agency for Health Care Administration (AHCA). Florida residents can apply through the ACCESS Florida portal at myflorida.com/accessflorida or by calling 1-866-762-2237. Some counties also have local SHINE (Serving Health Insurance Needs of Elders) counselors who provide free assistance."
      }
    }
  ]
} as const;

export const metadata: Metadata = {
  title: "How to Get Help Paying for Medicare: Extra Help, LIS, and Savings Programs",
  description:
    "Millions of Medicare beneficiaries qualify for programs that reduce or eliminate their Medicare costs. Learn about Extra Help, the Low Income Subsidy, and Medicare Savings Programs and how to apply.",
  keywords: [
    "help paying for Medicare",
    "Extra Help Medicare",
    "Low Income Subsidy Medicare",
    "Medicare Savings Programs",
    "QMB Medicare",
    "SLMB Medicare",
    "how to apply for Extra Help",
    "Medicare financial assistance Florida",
  ],
  openGraph: {
    title: "How to Get Help Paying for Medicare: Extra Help, LIS, and Savings Programs",
    description:
      "Millions of Medicare beneficiaries qualify for programs that reduce or eliminate their Medicare costs. Learn about Extra Help, the Low Income Subsidy, and Medicare Savings Programs and how to apply.",
    url: "https://medicareinfopro.com/blog/how-to-get-help-paying-for-medicare",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Person reviewing Medicare financial assistance paperwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Help Paying for Medicare: Extra Help, LIS, and Savings Programs",
    description:
      "Millions of Medicare beneficiaries qualify for programs that reduce or eliminate their Medicare costs. Learn about Extra Help, the Low Income Subsidy, and Medicare Savings Programs and how to apply.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog/how-to-get-help-paying-for-medicare",
  },
};

const POST = {
  slug: "how-to-get-help-paying-for-medicare",
  title: "How to Get Help Paying for Medicare: Extra Help, LIS, and Medicare Savings Programs Explained",
  excerpt:
    "If you have limited income or resources, you may qualify for programs that significantly reduce your Medicare costs. This guide explains every major assistance program, who qualifies, and exactly how to apply.",
  date: "June 19, 2026",
  readTime: "10 min read",
  category: "Costs" as const,
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  imageAlt: "Person reviewing Medicare financial assistance paperwork",
  author: GREG_WOHL,
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Extra Help saves up to $5,900 per year",
          text: "The Extra Help program (also called the Low Income Subsidy) reduces Part D prescription drug costs for people with limited income. In 2026, it can save eligible beneficiaries up to $5,900 annually on drug premiums, deductibles, and copays.",
        },
        {
          label: "Medicare Savings Programs cover premiums and more",
          text: "Four Medicare Savings Programs can pay your Part B premium, and in some cases your Part A premium, deductibles, and copays. The most comprehensive program, QMB, eliminates nearly all cost-sharing under Original Medicare.",
        },
        {
          label: "Qualifying for Medicaid means automatic enrollment",
          text: "If you qualify for full Medicaid benefits, you are automatically enrolled in Extra Help and the most comprehensive Medicare Savings Program. You do not need to apply separately.",
        },
        {
          label: "Income and asset limits are higher than many expect",
          text: "Many people assume they earn too much to qualify, but the income and resource limits are more generous than most people realize. Your home, one vehicle, and certain other assets are excluded from the resource calculation.",
        },
        {
          label: "Florida has free counseling available",
          text: "Florida's SHINE program provides free, unbiased Medicare counseling from trained volunteers. SHINE counselors can help you apply for assistance programs and compare plans at no cost.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Why Medicare Costs Can Be a Burden",
      content:
        "Medicare is not free. Even with <a href='/what-is-medicare' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare</a>, beneficiaries face a standard <a href='/medicare-part-b' class='text-[#1a3fa8] underline underline-offset-2'>Part B premium</a> of $185 per month in 2026, a Part B deductible of $257, a Part A deductible of $1,676 per benefit period, and 20% coinsurance for most outpatient services with no out-of-pocket maximum.\n\nFor someone living on a fixed income, these costs can be significant. Fortunately, the federal government and states administer several programs specifically designed to reduce or eliminate Medicare costs for people with limited income and resources. Millions of eligible beneficiaries are not enrolled in these programs, often because they are unaware they qualify or do not know how to apply.\n\nThis guide covers every major assistance program, explains who qualifies, and walks through the application process step by step.",
    },
    {
      type: "section" as const,
      heading: "Extra Help: Reducing Part D Drug Costs",
      content:
        "Extra Help, officially known as the Low Income Subsidy (LIS), is a federal program administered by the Social Security Administration that helps pay <a href='/medicare-part-d' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part D</a> prescription drug costs. In 2026, the program can save eligible beneficiaries up to $5,900 per year.\n\n<strong>What Extra Help covers:</strong> Depending on your income and resource level, Extra Help can pay some or all of your Part D premium, reduce or eliminate your Part D deductible, and significantly lower your copays for covered drugs. Full Extra Help beneficiaries pay no more than $4.50 for generic drugs and $11.20 for brand-name drugs in 2026.\n\n<strong>Who qualifies:</strong> To qualify for Extra Help in 2026, your income must be at or below 150% of the Federal Poverty Level. For an individual, that is approximately $23,340 per year. For a married couple, it is approximately $31,860 per year. Your countable resources must be at or below $17,220 for an individual or $34,360 for a couple.\n\n<strong>What counts as a resource:</strong> Countable resources include bank accounts, stocks, bonds, and mutual funds. Your primary home, one vehicle, personal belongings, life insurance policies, and burial funds up to $1,500 per person are excluded from the calculation.\n\n<strong>Automatic enrollment:</strong> If you receive full Medicaid benefits, Supplemental Security Income (SSI), or a Medicare Savings Program, you are automatically enrolled in Extra Help. You do not need to apply separately.",
    },
    {
      type: "section" as const,
      heading: "Medicare Savings Programs: Help with Part A and Part B Costs",
      content:
        "Medicare Savings Programs (MSPs) are state-administered programs that help pay Medicare premiums, deductibles, and copays for people with limited income and resources. There are four types, each with different eligibility thresholds and benefits.\n\n<table>\n<thead><tr><th>Program</th><th>What It Pays</th><th>2026 Monthly Income Limit (Individual)</th><th>2026 Monthly Income Limit (Couple)</th></tr></thead>\n<tbody>\n<tr><td><strong>Qualified Medicare Beneficiary (QMB)</strong></td><td>Part A and Part B premiums, deductibles, and copays</td><td>$1,255</td><td>$1,704</td></tr>\n<tr><td><strong>Specified Low-Income Medicare Beneficiary (SLMB)</strong></td><td>Part B premium only</td><td>$1,478</td><td>$2,004</td></tr>\n<tr><td><strong>Qualifying Individual (QI)</strong></td><td>Part B premium only</td><td>$1,660</td><td>$2,239</td></tr>\n<tr><td><strong>Qualified Disabled and Working Individuals (QDWI)</strong></td><td>Part A premium only</td><td>$4,615</td><td>$6,189</td></tr>\n</tbody>\n</table>\n\nNote: Income limits are approximate and states may apply slightly different thresholds. Florida follows the federal guidelines with minor variations. Contact your state Medicaid office for the most current figures.\n\n<strong>The QMB program</strong> is the most comprehensive. If you qualify, providers who accept Medicare are prohibited by law from billing you for Medicare cost-sharing. This means no copays, no deductibles, and no coinsurance for covered services under Original Medicare. If a provider attempts to bill you for cost-sharing and you are enrolled in QMB, you have the right to report them to your State Medical Assistance office.\n\n<strong>The SLMB and QI programs</strong> pay only the Part B premium, which is $185 per month in 2026. This alone saves eligible beneficiaries $2,220 per year.",
    },
    {
      type: "proTip" as const,
      content:
        "If you qualify for a Medicare Savings Program, you automatically qualify for Extra Help with Part D costs as well. Applying for one program can unlock both benefits at the same time. A <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare specialist</a> or a SHINE counselor can help you determine which programs you qualify for and assist with the application process at no charge.",
    },
    {
      type: "section" as const,
      heading: "How to Apply for Extra Help",
      content:
        "Applying for Extra Help is straightforward and can be done in three ways:\n\n<strong>Online:</strong> Visit ssa.gov and complete the Application for Extra Help with Medicare Prescription Drug Plan Costs (Form SSA-1020). The online application takes approximately 15 minutes.\n\n<strong>By phone:</strong> Call Social Security at 1-800-772-1213 (TTY: 1-800-325-0778). Representatives are available Monday through Friday, 8 a.m. to 7 p.m.\n\n<strong>In person:</strong> Visit your local Social Security office. You can find the nearest office at ssa.gov/locator.\n\nSocial Security will notify you by mail within approximately 30 days whether you qualify. If approved, your Extra Help will be applied to your Part D plan automatically. You do not need to contact your drug plan separately.\n\nIf you are denied, you have the right to appeal the decision. You must request an appeal within 60 days of receiving the denial notice.",
    },
    {
      type: "section" as const,
      heading: "How to Apply for a Medicare Savings Program in Florida",
      content:
        "In Florida, Medicare Savings Programs are administered by the Agency for Health Care Administration (AHCA) through the Medicaid program. You can apply in the following ways:\n\n<strong>Online:</strong> Visit the ACCESS Florida portal at myflorida.com/accessflorida. You can create an account and submit an application for Medicaid and Medicare Savings Programs in one step.\n\n<strong>By phone:</strong> Call the Florida Medicaid helpline at 1-866-762-2237.\n\n<strong>In person:</strong> Visit your local Department of Children and Families (DCF) service center.\n\n<strong>Through a SHINE counselor:</strong> Florida's SHINE (Serving Health Insurance Needs of Elders) program provides free Medicare counseling through trained volunteers. SHINE counselors can help you complete the application and answer questions about your eligibility. To find a SHINE counselor near you, call the Elder Helpline at 1-800-963-5337.\n\nOnce approved, your Medicare Savings Program benefit is typically applied retroactively to the first day of the month in which you applied. If you have been paying a Part B premium that should have been covered, you may receive a refund.",
    },
    {
      type: "section" as const,
      heading: "Other Programs That Can Help",
      content:
        "Beyond Extra Help and Medicare Savings Programs, several other programs can reduce Medicare-related costs for eligible beneficiaries.\n\n<strong>Medicaid:</strong> If you qualify for full Medicaid benefits, Medicaid acts as secondary insurance and covers most Medicare cost-sharing, including deductibles and copays. You are also automatically enrolled in Extra Help. Learn more about the relationship between the two programs in our article on <a href='/blog/can-i-have-both-medicare-and-medicaid' class='text-[#1a3fa8] underline underline-offset-2'>having both Medicare and Medicaid</a>.\n\n<strong>State Pharmaceutical Assistance Programs (SPAPs):</strong> Some states offer additional drug cost assistance beyond Extra Help. Florida does not currently have a state-funded SPAP, but residents may qualify for manufacturer patient assistance programs for specific medications.\n\n<strong>Medicare Advantage Special Needs Plans (SNPs):</strong> Dual Eligible Special Needs Plans (D-SNPs) are Medicare Advantage plans specifically designed for people who have both Medicare and Medicaid. These plans often include additional benefits such as dental, vision, hearing, and transportation. Learn more about <a href='/medicare-snp-plans' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Special Needs Plans</a>.\n\n<strong>Veterans Benefits:</strong> If you are a veteran, the Department of Veterans Affairs (VA) may cover prescription drugs and other health services at low or no cost. VA benefits and Medicare can work together, and having both can significantly reduce your out-of-pocket costs.\n\n<strong>Pharmaceutical manufacturer programs:</strong> Many drug manufacturers offer patient assistance programs for people who cannot afford their medications. NeedyMeds (needymeds.org) and RxAssist (rxassist.org) maintain searchable databases of available programs.",
    },
    {
      type: "section" as const,
      heading: "What If You Are Already Enrolled in a Part D Plan?",
      content:
        "If you are already enrolled in a <a href='/medicare-part-d' class='text-[#1a3fa8] underline underline-offset-2'>Part D prescription drug plan</a> and you are approved for Extra Help, your benefit will be applied to your current plan. You will also gain a Special Enrollment Period that allows you to switch to a different Part D plan once per quarter during the first three quarters of the year.\n\nThis is important because not all Part D plans are equally cost-effective for Extra Help beneficiaries. Some plans have premiums above the Extra Help benchmark amount, which means you would still owe a partial premium. A licensed Medicare specialist can identify plans in your area where Extra Help covers the full premium, leaving you with no monthly drug plan cost.\n\nIf you are enrolled in a <a href='/medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage</a> plan that includes drug coverage (MAPD), Extra Help applies to the drug portion of your plan in the same way.",
    },
    {
      type: "summary" as const,
      heading: "Medicare Financial Assistance: Quick Reference",
      content:
        "<ul><li><strong>Extra Help / LIS:</strong> Reduces Part D drug costs; save up to $5,900 per year; apply through Social Security at ssa.gov</li><li><strong>QMB:</strong> Pays Part A and Part B premiums, deductibles, and copays; apply through Florida Medicaid at myflorida.com/accessflorida</li><li><strong>SLMB:</strong> Pays Part B premium ($185/month in 2026); apply through Florida Medicaid</li><li><strong>QI:</strong> Pays Part B premium; slightly higher income limit than SLMB; apply through Florida Medicaid</li><li><strong>QDWI:</strong> Pays Part A premium for working disabled individuals; apply through Florida Medicaid</li><li><strong>Dual Eligible SNPs:</strong> Medicare Advantage plans for people with both Medicare and Medicaid; often include extra benefits</li><li><strong>Free help:</strong> Florida SHINE counselors provide free assistance; call 1-800-963-5337</li></ul>\n\nIf you are unsure which programs you qualify for, our <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare specialists</a> can review your situation and help you apply. There is no cost for this service and no obligation to enroll in any plan.",
    },
  ],
  faqSchema,
  articleSchema,
};

export default function Page() {
  return <BlogPostClient post={POST} />;
}
