import type { Metadata } from "next";
import FAQClient from "./FAQClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When am I eligible for Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most people become eligible for Medicare at age 65. You may also qualify before 65 if you have received Social Security Disability Insurance (SSDI) for 24 months, or if you have end-stage renal disease (ESRD) or ALS (Lou Gehrig's disease)."
      }
    },
    {
      "@type": "Question",
      "name": "When should I enroll in Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Initial Enrollment Period (IEP) is a 7-month window: 3 months before the month you turn 65, the month you turn 65, and 3 months after. Enrolling during the first 3 months of your IEP ensures your coverage starts on the first day of your birthday month. Enrolling late can result in permanent premium penalties."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to enroll in Medicare at 65 if I am still working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. If you or your spouse has employer-sponsored health coverage through a current employer with 20 or more employees, you can delay Medicare enrollment without penalty. However, you must enroll within 8 months of losing that coverage. If your employer has fewer than 20 employees, Medicare becomes your primary insurance at 65 and you should enroll."
      }
    },
    {
      "@type": "Question",
      "name": "How do I enroll in Medicare if I am not collecting Social Security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are not yet receiving Social Security benefits, Medicare will not automatically enroll you. You must sign up yourself through Social Security online at ssa.gov, by calling 1-800-772-1213, or by visiting your local Social Security office."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Annual Enrollment Period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Annual Enrollment Period (AEP) runs from October 15 through December 7 each year. During this period, you can switch between Original Medicare and Medicare Advantage, change Medicare Advantage plans, or change your Part D drug plan. Changes take effect January 1 of the following year."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Special Enrollment Period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Special Enrollment Period (SEP) allows you to enroll in or change Medicare coverage outside of standard enrollment windows due to a qualifying life event, such as losing employer coverage, moving out of a plan's service area, or gaining eligibility for Medicaid."
      }
    },
    {
      "@type": "Question",
      "name": "What does Medicare Part A cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Part A covers inpatient hospital care, skilled nursing facility care (after a qualifying hospital stay), hospice care, and home health services. Most people pay no premium for Part A if they or their spouse paid Medicare taxes for at least 10 years."
      }
    },
    {
      "@type": "Question",
      "name": "What does Medicare Part B cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Part B covers outpatient medical services including doctor visits, preventive care, lab tests, durable medical equipment, mental health services, and physical therapy. The standard Part B premium in 2026 is $202.90 per month."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Part B deductible in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Medicare Part B deductible in 2026 is $283. After you meet this deductible, Medicare pays 80% of covered services and you pay the remaining 20% coinsurance."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Part A deductible in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Medicare Part A inpatient hospital deductible in 2026 is $1,736 per benefit period. This covers your first 60 days of inpatient hospital care. Days 61 through 90 require a daily coinsurance of $422, and days 91 through 150 (lifetime reserve days) require $844 per day."
      }
    },
    {
      "@type": "Question",
      "name": "What is IRMAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IRMAA stands for Income-Related Monthly Adjustment Amount. If your income exceeds certain thresholds, you pay a higher Part B and Part D premium. IRMAA is based on your income from 2 years prior. In 2026, the surcharge begins for individuals with income above $109,000 and couples above $218,000."
      }
    },
    {
      "@type": "Question",
      "name": "What is Medicare Advantage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies approved by Medicare. Plans must cover everything Original Medicare covers, but most also include prescription drug coverage, dental, vision, and hearing benefits. You pay a monthly premium to the plan in addition to your Part B premium."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an HMO and a PPO Medicare Advantage plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HMO plans require you to use in-network providers and typically require referrals to see specialists. PPO plans allow you to see out-of-network providers at a higher cost and generally do not require referrals. HMOs tend to have lower premiums; PPOs offer more flexibility."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch from Medicare Advantage back to Original Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can switch during the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). Be aware that if you switch back to Original Medicare after your initial enrollment, you may not be able to get a Medigap plan without medical underwriting in most states."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Medicare Special Needs Plan (SNP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SNPs are a type of Medicare Advantage plan designed for people with specific chronic conditions (C-SNP), those who are dual-eligible for Medicare and Medicaid (D-SNP), or those living in certain institutions (I-SNP). They offer benefits tailored to the specific needs of their target population."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Medigap plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Medigap plan (also called Medicare Supplement Insurance) is a private insurance policy that helps pay the cost-sharing gaps in Original Medicare, such as deductibles, coinsurance, and copayments. Medigap plans are standardized by letter (A, B, C, D, F, G, K, L, M, N) and sold by private insurers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Medigap plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan G is the most comprehensive Medigap plan available to new Medicare enrollees (Plan F is no longer available to those who became eligible after January 1, 2020). Plan G covers the Part A deductible, Part A coinsurance, Part B coinsurance, skilled nursing facility coinsurance, and foreign travel emergency care. You pay only the Part B deductible of $283 per year out of pocket."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to buy a Medigap plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time to buy a Medigap plan is during your 6-month Medigap Open Enrollment Period, which begins the month you are both 65 or older and enrolled in Part B. During this window, insurers cannot deny you coverage or charge you more due to pre-existing conditions. After this window, you may face medical underwriting."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have both Medicare Advantage and a Medigap plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It is illegal for an insurer to sell you a Medigap policy if you are enrolled in a Medicare Advantage plan. Medigap plans only work with Original Medicare (Parts A and B)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Medicare Part D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Part D provides prescription drug coverage. It is offered through private insurance companies approved by Medicare. You can get Part D as a standalone plan (if you have Original Medicare) or as part of a Medicare Advantage plan that includes drug coverage (MAPD)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Part D deductible in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The maximum Part D deductible in 2026 is $590. Not all plans charge the full deductible, and some plans waive it for certain drug tiers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Part D out-of-pocket cap in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starting in 2025 and continuing in 2026, there is a $2,100 annual out-of-pocket cap on Part D drug costs. Once you reach this cap, you pay $0 for covered drugs for the rest of the year. This is a significant improvement from prior years."
      }
    },
    {
      "@type": "Question",
      "name": "What is a formulary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A formulary is the list of prescription drugs covered by a Part D or Medicare Advantage plan. Drugs are organized into tiers, with lower tiers generally having lower copays. Always check that your medications are on a plan's formulary before enrolling."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Part D late enrollment penalty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you go 63 or more consecutive days without creditable prescription drug coverage after your Initial Enrollment Period ends, you may owe a late enrollment penalty. The penalty is 1% of the national base beneficiary premium for each month you went without coverage, added permanently to your monthly Part D premium."
      }
    },
    {
      "@type": "Question",
      "name": "What are the Medicare costs in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key 2026 Medicare figures: Part B premium $202.90/month, Part B deductible $283/year, Part A deductible $1,736/benefit period, Part D out-of-pocket cap $2,100/year, SNF coinsurance (days 21-100) $212/day."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Savings Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Savings Programs are state-administered programs that help people with limited income and resources pay Medicare premiums, deductibles, and coinsurance. There are four levels: Qualified Medicare Beneficiary (QMB), Specified Low-Income Medicare Beneficiary (SLMB), Qualifying Individual (QI), and Qualified Disabled and Working Individuals (QDWI)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Extra Help for Part D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extra Help (also called the Low Income Subsidy or LIS) is a federal program that helps people with limited income pay Part D premiums, deductibles, and copayments. If you qualify, you may pay little or nothing for your prescription drugs."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my Medicare costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strategies to reduce Medicare costs include: enrolling during your Initial Enrollment Period to avoid late penalties, choosing a Medigap plan to cap your out-of-pocket exposure, comparing Part D plans annually during AEP, using generic drugs when available, and applying for Medicare Savings Programs or Extra Help if you have limited income."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover dental care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare does not cover routine dental care such as cleanings, fillings, or dentures. However, many Medicare Advantage plans include dental benefits. Some standalone dental plans are also available to Medicare beneficiaries."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover vision care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare does not cover routine eye exams or eyeglasses, except after cataract surgery. Medicare Advantage plans often include vision benefits. Medicare does cover treatment for eye diseases such as glaucoma and macular degeneration."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover hearing aids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare does not cover hearing aids or routine hearing exams. Some Medicare Advantage plans include hearing aid benefits with an annual allowance. Costs for hearing aids can range from $1,000 to $6,000 or more per pair."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover physical therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology with no annual visit cap. You pay 20% coinsurance after the Part B deductible."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover skilled nursing facility care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with conditions. Medicare Part A covers up to 100 days of SNF care per benefit period after a qualifying 3-day inpatient hospital stay. Days 1 through 20 are fully covered. Days 21 through 100 require a daily coinsurance of $212 in 2026."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare FAQ Center | MedicareInfoPro",
  description:
    "Answers to the most common Medicare questions covering eligibility, enrollment, Parts A and B, Medicare Advantage, Medigap, Part D, costs, and coverage. Searchable FAQ for 2026.",
  keywords: [
    "Medicare FAQ",
    "Medicare frequently asked questions",
    "Medicare questions and answers",
    "Medicare eligibility FAQ",
    "Medicare enrollment FAQ",
    "Medicare costs 2026",
    "Medicare Brandon FL FAQ",
  ],
  openGraph: {
    title: "Medicare FAQ Center | MedicareInfoPro",
    description:
      "Searchable answers to the most common Medicare questions, organized by topic: eligibility, enrollment, plan types, costs, and coverage.",
    url: "https://medicareinfopro.com/faq",
    siteName: "MedicareInfoPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare FAQ Center",
    description:
      "Quick answers to the most common Medicare questions, searchable and organized by topic.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
