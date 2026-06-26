import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Understanding Medicare Part B: Coverage, Costs and Enrollment in 2026",
  "url": "https://medicareinfopro.com/blog/understanding-medicare-part-b",
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "image": "https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/understanding-medicare-part-b"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Understanding Medicare Part B: Coverage, Costs, and Enrollment in 2026 | MedicareInfoPro",
  description:
    "Medicare Part B covers doctor visits, outpatient care, preventive services, and medical equipment. Learn what Part B covers, what it costs in 2026, how to enroll, and how to avoid the late enrollment penalty.",
  keywords: [
    "Medicare Part B 2026",
    "Medicare Part B coverage",
    "Medicare Part B premium 2026",
    "Medicare Part B enrollment",
    "Medicare Part B deductible 2026",
    "what does Medicare Part B cover",
  ],
  openGraph: {
    title: "Understanding Medicare Part B: Coverage, Costs, and Enrollment in 2026",
    description:
      "What Medicare Part B covers, what it costs in 2026, how to enroll, and how to avoid the late enrollment penalty.",
    url: "https://medicare-info-pro.vercel.app/blog/understanding-medicare-part-b",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Doctor and patient consultation representing Medicare Part B medical coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Medicare Part B: Coverage, Costs, and Enrollment in 2026",
    description:
      "What Medicare Part B covers, what it costs in 2026, and how to enroll without penalties.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/blog/understanding-medicare-part-b",
  },
};

const POST = {
  slug: "understanding-medicare-part-b",
  title: "Understanding Medicare Part B: Coverage, Costs, and Enrollment in 2026",
  excerpt:
    "Medicare Part B is the medical insurance component of Original Medicare. It covers doctor visits, outpatient procedures, preventive services, and durable medical equipment. Unlike Part A, Part B requires a monthly premium and has specific enrollment rules that, if missed, result in a permanent penalty. This guide explains everything you need to know about Part B in 2026.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "June 2026",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80",
  imageAlt: "Doctor and patient representing Medicare Part B outpatient medical coverage",
  sections: [
    {
      type: "intro" as const,
      content:
        "Medicare is divided into four parts: A, B, C, and D. Part B is the medical insurance component, covering the services you receive outside of a hospital stay. If Part A is your hospital insurance, Part B is your doctor insurance.\n\nMost people enroll in Part B when they turn 65, but the rules around when to enroll, how much it costs, and what it covers are more nuanced than they appear. Understanding Part B fully helps you make better decisions about your overall Medicare coverage.\n\nThis guide covers what Part B covers, what it costs in 2026, how enrollment works, and how Part B fits into the broader Medicare picture.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Part B covers outpatient medical services",
          text: "Medicare Part B covers doctor visits, outpatient procedures, preventive services, mental health services, ambulance services, and durable medical equipment. It does not cover most prescription drugs, dental, vision, or hearing.",
        },
        {
          label: "The 2026 Part B premium is $185.00 per month",
          text: "The standard 2026 Part B premium is $185.00 per month. Higher-income beneficiaries pay more through IRMAA surcharges. The Part B deductible in 2026 is $257. After the deductible, Medicare pays 80% and you pay 20% for most covered services.",
        },
        {
          label: "Preventive services are covered at 100%",
          text: "Most Medicare-covered preventive services, including the Annual Wellness Visit, cancer screenings, cardiovascular screenings, and diabetes screenings, are covered at 100% with no deductible or coinsurance when provided by a participating provider.",
        },
        {
          label: "The late enrollment penalty is permanent",
          text: "If you do not enroll in Part B when first eligible and do not have qualifying employer coverage, you pay a 10% premium surcharge for every 12-month period you were eligible but not enrolled. This penalty lasts for life.",
        },
        {
          label: "Part B is optional, but most people need it",
          text: "Part B is technically optional, but declining it means you have no coverage for doctor visits, outpatient care, or medical equipment. Most people should enroll in Part B unless they have qualifying employer coverage that makes Part B redundant.",
        },
        {
          label: "Medigap fills the 20% gap that Part B leaves",
          text: "Part B pays 80% of approved costs after the deductible. The remaining 20% has no cap under Original Medicare. A Medigap supplement plan covers some or all of this 20%, protecting you from large out-of-pocket costs.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Medicare Part B Covers",
      content:
        "Part B covers two main categories of services: medically necessary services and preventive services.\n\n<strong>Medically necessary services</strong> are services or supplies needed to diagnose or treat a medical condition and that meet accepted standards of medical practice. This includes:\n\n<ul><li>Doctor visits (primary care and specialist)</li><li>Outpatient surgery and procedures</li><li>Emergency room visits (the facility fee; Part A covers inpatient hospital stays)</li><li>Ambulance services</li><li>Durable medical equipment (wheelchairs, walkers, oxygen equipment)</li><li>Mental health services (outpatient therapy, psychiatry)</li><li>Physical, occupational, and speech therapy</li><li>Home health services (when medically necessary)</li><li>Outpatient dialysis</li><li>Clinical laboratory tests</li></ul>\n\n<strong>Preventive services</strong> are covered at 100% with no cost-sharing when provided by a participating provider. Key preventive services include:\n\n<ul><li>Annual Wellness Visit</li><li>Mammograms (annually for women 40+)</li><li>Colorectal cancer screenings</li><li>Cardiovascular disease screenings</li><li>Diabetes screenings and self-management training</li><li>Flu, pneumonia, and COVID-19 vaccines</li><li>Depression screening</li><li>Bone density measurements</li></ul>\n\n<strong>What Part B does NOT cover:</strong> Routine dental care, routine vision exams, hearing aids, most prescription drugs, long-term custodial care, and cosmetic procedures.",
    },
    {
      type: "section" as const,
      heading: "Part B Costs in 2026",
      content:
        "Understanding Part B costs helps you budget accurately and compare it against alternative coverage options.\n\n<strong>Standard premium:</strong> $185.00 per month in 2026. This is deducted automatically from your Social Security benefit if you receive Social Security. If you are not yet receiving Social Security, you are billed quarterly.\n\n<strong>IRMAA surcharges:</strong> Higher-income beneficiaries pay more. IRMAA surcharges are based on your income from 2 years ago (2024 income determines 2026 IRMAA). The surcharges range from an additional $74.00 to $443.90 per month in 2026.\n\n<strong>Annual deductible:</strong> $257 in 2026. You pay 100% of covered Part B costs until you meet this deductible each calendar year.\n\n<strong>Coinsurance:</strong> After the deductible, Medicare pays 80% of the Medicare-approved amount for most covered services. You pay the remaining 20%. There is no annual cap on your 20% coinsurance under Original Medicare alone.\n\n<strong>Excess charges:</strong> If a provider does not accept Medicare assignment (meaning they charge more than the Medicare-approved amount), they can charge up to 15% above the approved amount. This is called an excess charge. Most Florida providers accept assignment, but it is worth confirming.\n\n<div style='overflow-x:auto;margin:1rem 0'><table style='width:100%;border-collapse:collapse;font-size:0.92rem'><thead><tr style='background:#0d2260;color:white'><th style='padding:10px 12px;text-align:left'>Cost Component</th><th style='padding:10px 12px;text-align:left'>2026 Amount</th></tr></thead><tbody><tr style='background:#f8fafc'><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0'>Standard monthly premium</td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0'>$185.00</td></tr><tr><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0'>Annual deductible</td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0'>$257</td></tr><tr style='background:#f8fafc'><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0'>Coinsurance (after deductible)</td><td style='padding:9px 12px;border-bottom:1px solid #e2e8f0'>20% of approved amount</td></tr><tr><td style='padding:9px 12px'>Maximum excess charge</td><td style='padding:9px 12px'>15% above approved amount</td></tr></tbody></table></div>",
    },
    {
      type: "section" as const,
      heading: "Part B Enrollment: When and How to Sign Up",
      content:
        "Part B enrollment timing is one of the most important Medicare decisions you will make. Getting it wrong results in a permanent penalty.\n\n<strong>Initial Enrollment Period (IEP):</strong> Your IEP is a 7-month window: 3 months before the month you turn 65, the month you turn 65, and 3 months after. Enrolling in the first 3 months of your IEP ensures your coverage starts on the first day of your birthday month.\n\n<strong>If you are already receiving Social Security:</strong> You are automatically enrolled in Part A and Part B when you turn 65. You will receive your Medicare card in the mail approximately 3 months before your 65th birthday.\n\n<strong>If you have qualifying employer coverage:</strong> You can delay Part B enrollment without penalty if you are covered by an employer plan through your own or your spouse's current employment at an employer with 20 or more employees. You enroll during your Special Enrollment Period (up to 8 months after losing employer coverage).\n\n<strong>General Enrollment Period:</strong> If you miss your IEP and do not have qualifying employer coverage, you can enroll during the General Enrollment Period (January 1 to March 31 each year). Coverage starts July 1. You will also face the late enrollment penalty.\n\nFor a detailed guide to enrollment timing, see our article on <a href='/blog/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide' class='text-[#1a3fa8] underline underline-offset-2'>how to sign up for Medicare step by step</a>.",
    },
    {
      type: "section" as const,
      heading: "The Part B Late Enrollment Penalty",
      content:
        "The Part B late enrollment penalty is one of the most consequential Medicare rules to understand. It is permanent, and it compounds with each year of delay.\n\n<strong>How the penalty is calculated:</strong> For every 12-month period you were eligible for Part B but did not enroll (without qualifying employer coverage), your premium increases by 10%. This surcharge is added to your standard premium and lasts for as long as you have Part B.\n\n<strong>Example:</strong> If you delay Part B for 3 years without qualifying employer coverage, your penalty is 30%. At the 2026 standard premium of $185.00, that adds $55.50 per month permanently. Over 20 years of retirement, that is more than $13,000 in extra premiums.\n\n<strong>The penalty does not apply if you have qualifying employer coverage:</strong> If you delay Part B because you are covered by an employer plan through current employment at a 20+ employee company, no penalty applies. The penalty only applies to periods without qualifying coverage.\n\n<strong>IRMAA and the penalty stack:</strong> If you are subject to IRMAA surcharges, the late enrollment penalty is calculated on top of the standard premium, not the IRMAA-adjusted premium. However, you still pay both surcharges.\n\nFor more on managing Part B costs, see our guide on <a href='/blog/how-to-reduce-medicare-premiums-based-on-income-2026' class='text-[#1a3fa8] underline underline-offset-2'>how to reduce Medicare premiums based on income</a>.",
    },
    {
      type: "section" as const,
      heading: "How Part B Fits Into Your Overall Medicare Coverage",
      content:
        "Part B alone leaves significant gaps in coverage. Understanding how it fits with other parts of Medicare helps you build a complete coverage strategy.\n\n<strong>Part B + Part A = Original Medicare:</strong> Together, Part A (hospital) and Part B (medical) form Original Medicare. This covers the majority of your healthcare needs but leaves you responsible for the 20% coinsurance with no annual cap.\n\n<strong>Adding a Medigap supplement:</strong> A Medigap plan covers some or all of the 20% coinsurance that Part B leaves. Plan G, the most popular option in Florida, covers everything except the Part B deductible. This gives you predictable, capped costs for medical services.\n\n<strong>Adding Part D:</strong> Part B does not cover most prescription drugs. You need a standalone Part D plan or a Medicare Advantage plan with drug coverage to cover your medications.\n\n<strong>Medicare Advantage as an alternative:</strong> Medicare Advantage (Part C) replaces Original Medicare. It covers everything Part A and Part B cover, usually with lower premiums but with network restrictions and different cost-sharing structures.\n\nFor a full comparison of your coverage options, see our guide on <a href='/blog/original-medicare-vs-medicare-advantage-in-florida' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare vs. Medicare Advantage in Florida</a>. For personalized guidance, <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free consultation</a> with our licensed specialists.",
    },
    {
      type: "summary" as const,
      heading: "The Bottom Line on Medicare Part B",
      content:
        "Medicare Part B is the foundation of your outpatient medical coverage. Here is the essential guidance:\n\n<ul><li><strong>Part B covers</strong> doctor visits, outpatient care, preventive services, ambulance, and durable medical equipment</li><li><strong>The 2026 premium is $185.00/month</strong> standard; higher-income beneficiaries pay more through IRMAA</li><li><strong>The deductible is $257</strong> and coinsurance is 20% with no annual cap under Original Medicare alone</li><li><strong>Preventive services are free</strong> at 100% with no cost-sharing at participating providers</li><li><strong>Enroll during your IEP</strong> or risk a permanent 10% per year late enrollment penalty</li><li><strong>Add Medigap</strong> to cap your 20% coinsurance exposure; add Part D for drug coverage</li></ul>\n\nOur licensed independent specialists can help you understand how Part B fits into your complete coverage strategy. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to get started.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "What does Medicare Part B cover?",
          answer:
            "Medicare Part B covers medically necessary outpatient services including doctor visits, outpatient surgery, ambulance services, durable medical equipment, mental health services, and physical therapy. It also covers most preventive services at 100% with no cost-sharing.",
        },
        {
          question: "How much does Medicare Part B cost in 2026?",
          answer:
            "The standard 2026 Part B premium is $185.00 per month. The annual deductible is $257. After the deductible, Medicare pays 80% and you pay 20% of covered costs. Higher-income beneficiaries pay IRMAA surcharges on top of the standard premium.",
        },
        {
          question: "Is Medicare Part B mandatory?",
          answer:
            "Part B is technically optional, but most people should enroll. Declining Part B means you have no coverage for doctor visits, outpatient care, or medical equipment. If you have qualifying employer coverage, you can delay Part B without penalty.",
        },
        {
          question: "What is the Medicare Part B late enrollment penalty?",
          answer:
            "The penalty is 10% of the standard premium for every 12-month period you were eligible but not enrolled without qualifying employer coverage. It is permanent and lasts for as long as you have Part B.",
        },
        {
          question: "Does Part B cover prescription drugs?",
          answer:
            "Part B covers a limited set of drugs administered in a clinical setting, such as chemotherapy, injectable biologics, and drugs administered during outpatient procedures. It does not cover most retail prescription drugs. You need Part D or a Medicare Advantage plan with drug coverage for retail prescriptions.",
        },
        {
          question: "How do I enroll in Medicare Part B?",
          answer:
            "If you are already receiving Social Security, you are automatically enrolled in Part B at 65. If not, you can enroll online at ssa.gov, by calling 1-800-772-1213, or at your local Social Security office. Enroll during your 7-month Initial Enrollment Period around your 65th birthday.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "How to Sign Up for Medicare Without an Agent: Step-by-Step Guide",
      href: "/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
      category: "Enrollment" as const,
    },
    {
      title: "Original Medicare vs. Medicare Advantage in Florida 2026",
      href: "/original-medicare-vs-medicare-advantage-in-florida",
      category: "Plans" as const,
    },
    {
      title: "How Medicare Premiums Are Calculated in 2026",
      href: "/how-medicare-premiums-are-calculated",
      category: "Costs" as const,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={POST} />
    </>
  );
}
