import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Can I Have Both Medicare and Medicaid? Dual Eligibility Explained",
  "url": "https://medicareinfopro.com/blog/can-i-have-both-medicare-and-medicaid",
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/can-i-have-both-medicare-and-medicaid"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Can I Have Both Medicare and Medicaid? Dual Eligibility Explained | MedicareInfoPro",
  description:
    "Yes, you can have both Medicare and Medicaid. Learn how dual eligibility works in Florida, what benefits you receive, how the programs coordinate, and how to enroll.",
  keywords: [
    "can I have both Medicare and Medicaid",
    "dual eligible Medicare Medicaid Florida",
    "Medicare Medicaid dual enrollment",
    "dual eligible special needs plan Florida",
    "Medicare Savings Programs Florida",
    "full dual eligible Florida",
  ],
  openGraph: {
    title: "Can I Have Both Medicare and Medicaid? Dual Eligibility Explained",
    description:
      "How dual eligibility works in Florida, what benefits you receive, and how Medicare and Medicaid coordinate for dual-eligible beneficiaries.",
    url: "https://medicareinfopro.com/blog/can-i-have-both-medicare-and-medicaid",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Healthcare coverage documents representing Medicare and Medicaid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I Have Both Medicare and Medicaid? Dual Eligibility Explained",
    description:
      "How dual eligibility works in Florida, what benefits you receive, and how the programs coordinate.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog/can-i-have-both-medicare-and-medicaid",
  },
};

const POST = {
  slug: "can-i-have-both-medicare-and-medicaid",
  title: "Can I Have Both Medicare and Medicaid? Dual Eligibility Explained for Florida Residents",
  excerpt:
    "Yes, you can have both Medicare and Medicaid at the same time. Beneficiaries who qualify for both programs are called dual-eligible, and they receive some of the most comprehensive coverage available in the U.S. healthcare system. This guide explains how dual eligibility works in Florida, what benefits you receive, and how to enroll.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "June 2026",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  imageAlt: "Healthcare documents representing dual eligibility for Medicare and Medicaid",
  sections: [
    {
      type: "intro" as const,
      content:
        "Medicare and Medicaid are two separate government programs, but they are not mutually exclusive. Beneficiaries who qualify for both are called dual-eligible, and in Florida, approximately 700,000 people fall into this category.\n\nDual-eligible beneficiaries receive benefits from both programs simultaneously. Medicare pays first for most healthcare services, and Medicaid pays second, covering costs that Medicare does not. The result is coverage that is far more comprehensive than either program provides on its own.\n\nThis guide explains who qualifies for dual eligibility in Florida, what benefits are available, and how the two programs coordinate.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Dual eligibility is possible and common",
          text: "Approximately 700,000 Florida residents are enrolled in both Medicare and Medicaid simultaneously. Dual eligibility is not a special exception; it is a defined category with specific rules and benefits.",
        },
        {
          label: "Medicare pays first, Medicaid pays second",
          text: "For services covered by both programs, Medicare pays first as the primary payer. Medicaid then pays some or all of the remaining cost-sharing, including deductibles, copays, and coinsurance. For full dual-eligible beneficiaries, out-of-pocket costs are often zero.",
        },
        {
          label: "Full dual-eligible vs. partial dual-eligible",
          text: "Full dual-eligible beneficiaries qualify for both full Medicaid and Medicare. Partial dual-eligible beneficiaries qualify for Medicare Savings Programs, which pay some or all of their Medicare premiums and cost-sharing but do not provide full Medicaid benefits.",
        },
        {
          label: "Dual-Eligible Special Needs Plans (D-SNPs) are designed for this population",
          text: "D-SNPs are Medicare Advantage plans specifically designed for dual-eligible beneficiaries. They coordinate benefits between Medicare and Medicaid, often include extra benefits, and typically have very low or zero premiums.",
        },
        {
          label: "Extra Help is automatic for full dual-eligible beneficiaries",
          text: "Full dual-eligible beneficiaries automatically qualify for Extra Help (the Low Income Subsidy), which reduces or eliminates Part D prescription drug costs. You do not need to apply separately.",
        },
        {
          label: "Medicaid covers services Medicare does not",
          text: "Medicaid covers long-term care services, including nursing home care and home and community-based services, that Medicare does not cover. For dual-eligible beneficiaries who need long-term care, Medicaid coverage is especially valuable.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Who Qualifies for Dual Eligibility in Florida?",
      content:
        "To be dual-eligible, you must qualify for both Medicare and Medicaid independently.\n\n<strong>Medicare eligibility:</strong> You must be 65 or older, or under 65 with a qualifying disability (SSDI for 24 months, ESRD, or ALS). For more on Medicare eligibility, see our guide on <a href='/blog/medicare-qualifications-florida' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Qualifications in Florida</a>.\n\n<strong>Medicaid eligibility:</strong> In Florida, Medicaid eligibility for adults 65 and older is based on income and assets. The income limit for full Medicaid is approximately 88% of the federal poverty level, which is approximately $1,073 per month for a single person in 2026. Asset limits also apply.\n\n<strong>Medicare Savings Programs (partial dual eligibility):</strong> If your income is above the full Medicaid limit but below certain thresholds, you may qualify for a Medicare Savings Program. These programs pay some or all of your Medicare premiums and cost-sharing without providing full Medicaid benefits.\n\nThe income thresholds for Medicare Savings Programs in 2026 are approximately:\n\n<ul><li><strong>QMB (Qualified Medicare Beneficiary):</strong> up to $1,255/month (single) - pays Part A and B premiums, deductibles, and copays</li><li><strong>SLMB (Specified Low-Income Medicare Beneficiary):</strong> up to $1,502/month (single) - pays Part B premium only</li><li><strong>QI (Qualifying Individual):</strong> up to $1,660/month (single) - pays Part B premium only</li></ul>",
    },
    {
      type: "section" as const,
      heading: "How Medicare and Medicaid Coordinate Benefits",
      content:
        "When you are dual-eligible, the two programs work together to provide comprehensive coverage. The coordination rules are straightforward.\n\n<strong>Medicare pays first:</strong> For services covered by Medicare (hospital stays, doctor visits, outpatient care, prescription drugs), Medicare pays first as the primary payer. Medicare pays 80% of approved costs after the deductible.\n\n<strong>Medicaid pays second:</strong> After Medicare pays, Medicaid pays some or all of the remaining cost-sharing. For full dual-eligible beneficiaries, Medicaid typically covers the 20% coinsurance that Medicare does not pay, the Part A and Part B deductibles, and Part B premiums.\n\n<strong>The result:</strong> Full dual-eligible beneficiaries often have zero out-of-pocket costs for Medicare-covered services. Their Part B premium is paid by Medicaid, their deductibles are covered, and their coinsurance is covered.\n\n<strong>Services covered only by Medicaid:</strong> Medicaid covers services that Medicare does not, including long-term care in nursing facilities, home and community-based services, personal care assistance, and transportation to medical appointments. For these services, Medicaid is the only payer.\n\n<strong>Services covered only by Medicare:</strong> Medicare covers services that Medicaid does not, including most acute hospital care, physician services, and prescription drugs (through Part D). For these services, Medicare is the only payer.",
    },
    {
      type: "section" as const,
      heading: "Dual-Eligible Special Needs Plans (D-SNPs) in Florida",
      content:
        "Dual-Eligible Special Needs Plans (D-SNPs) are Medicare Advantage plans specifically designed for dual-eligible beneficiaries. They are available in most Florida counties and offer several advantages over Original Medicare for this population.\n\n<strong>Coordinated care:</strong> D-SNPs coordinate benefits between Medicare and Medicaid, reducing the administrative burden on beneficiaries. Many D-SNPs have care coordinators who help manage complex health needs.\n\n<strong>Extra benefits:</strong> D-SNPs typically include extra benefits such as dental, vision, hearing, transportation, and over-the-counter allowances. These benefits are in addition to the Medicaid benefits you already receive.\n\n<strong>Low or zero premiums:</strong> Because dual-eligible beneficiaries receive Extra Help automatically, Part D premiums are reduced or eliminated. Many D-SNPs also have zero or very low Part C premiums.\n\n<strong>Integrated care models:</strong> Florida has implemented Integrated Care for Dual Eligibles (ICDE) programs in some counties that fully integrate Medicare and Medicaid benefits under a single plan. These programs provide the most seamless coverage for dual-eligible beneficiaries.\n\n<strong>How to find D-SNPs in Florida:</strong> Use the Medicare Plan Finder at medicare.gov and filter for Special Needs Plans. Select your county and indicate that you are dual-eligible to see available D-SNPs.\n\nFor more on Medicare Advantage plan options, see our guide on <a href='/blog/best-medicare-advantage-plans-florida' class='text-[#1a3fa8] underline underline-offset-2'>Best Medicare Advantage Plans in Florida 2026</a>.",
    },
    {
      type: "section" as const,
      heading: "Long-Term Care: Where Medicaid Is Essential",
      content:
        "One of the most important benefits of Medicaid for dual-eligible beneficiaries is long-term care coverage. Medicare covers very limited long-term care, while Medicaid covers it comprehensively.\n\n<strong>What Medicare covers:</strong> Medicare covers up to 100 days of skilled nursing facility care per benefit period, but only after a qualifying 3-day hospital stay. Coverage is 100% for days 1 to 20, and $204.00 per day for days 21 to 100 in 2026. After day 100, Medicare pays nothing.\n\n<strong>What Medicaid covers:</strong> Medicaid covers long-term nursing facility care indefinitely for beneficiaries who meet the medical and financial eligibility criteria. Medicaid also covers home and community-based services (HCBS) that allow beneficiaries to receive care at home rather than in a nursing facility.\n\n<strong>Florida's HCBS waiver programs:</strong> Florida offers several Medicaid waiver programs that provide home-based care alternatives to nursing facility placement. These include the Statewide Medicaid Managed Care Long-Term Care program and the iBudget waiver for individuals with developmental disabilities.\n\n<strong>Asset protection strategies:</strong> Medicaid has asset limits that must be met for eligibility. However, certain assets are exempt, including your primary home (up to a certain equity limit), one vehicle, and personal belongings. Medicaid planning with an elder law attorney can help protect assets while maintaining eligibility.",
    },
    {
      type: "section" as const,
      heading: "How to Apply for Dual Eligibility in Florida",
      content:
        "Applying for dual eligibility involves separate applications for Medicare and Medicaid.\n\n<strong>Medicare enrollment:</strong> If you are not already enrolled in Medicare, apply through the Social Security Administration at ssa.gov or by calling 1-800-772-1213. You can also apply at your local Social Security office.\n\n<strong>Medicaid enrollment:</strong> Apply for Medicaid in Florida through the Florida Department of Children and Families at myflorida.com/accessflorida or by calling 1-866-762-2237. You can also apply in person at your local DCF office.\n\n<strong>Medicare Savings Programs:</strong> Apply through the Florida Department of Children and Families using the same application process as Medicaid. If you are already enrolled in Medicaid, you are automatically screened for Medicare Savings Programs.\n\n<strong>SHINE counselors:</strong> Florida's SHINE (Serving Health Insurance Needs of Elders) program provides free, unbiased Medicare counseling. SHINE counselors can help you understand your dual eligibility options and assist with enrollment. Call 1-800-963-5337 to find a local counselor.\n\nFor personalized guidance on dual eligibility and plan options, <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free consultation</a> with our licensed specialists.",
    },
    {
      type: "summary" as const,
      heading: "The Bottom Line on Dual Eligibility in Florida",
      content:
        "Yes, you can have both Medicare and Medicaid, and if you qualify for both, you should absolutely enroll in both. Here is the key guidance:\n\n<ul><li><strong>Full dual eligibility</strong> provides comprehensive coverage with little or no out-of-pocket costs for Medicare-covered services</li><li><strong>Medicare pays first</strong> for most services; Medicaid pays the remaining cost-sharing</li><li><strong>D-SNPs</strong> are Medicare Advantage plans designed specifically for dual-eligible beneficiaries and offer coordinated care and extra benefits</li><li><strong>Extra Help is automatic</strong> for full dual-eligible beneficiaries, eliminating most Part D drug costs</li><li><strong>Medicaid covers long-term care</strong> that Medicare does not, which is one of its most valuable features</li><li><strong>Apply through DCF</strong> for Medicaid and Medicare Savings Programs; SHINE counselors can help at no cost</li></ul>\n\nOur licensed independent specialists can help you understand your dual eligibility options and find the right plan. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to get started.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Can I really have both Medicare and Medicaid at the same time?",
          answer:
            "Yes. Beneficiaries who qualify for both programs are called dual-eligible. In Florida, approximately 700,000 people are enrolled in both Medicare and Medicaid simultaneously. The two programs coordinate to provide comprehensive coverage.",
        },
        {
          question: "What is the income limit for dual eligibility in Florida?",
          answer:
            "For full Medicaid eligibility in Florida, the income limit is approximately $1,073 per month for a single person in 2026. For Medicare Savings Programs (partial dual eligibility), income limits range from $1,255 to $1,660 per month depending on the program.",
        },
        {
          question: "Do I need to apply for both Medicare and Medicaid separately?",
          answer:
            "Yes. Medicare and Medicaid are separate programs with separate applications. Apply for Medicare through the Social Security Administration and for Medicaid through the Florida Department of Children and Families.",
        },
        {
          question: "What is a Dual-Eligible Special Needs Plan (D-SNP)?",
          answer:
            "A D-SNP is a Medicare Advantage plan specifically designed for dual-eligible beneficiaries. D-SNPs coordinate benefits between Medicare and Medicaid, typically have very low premiums, and often include extra benefits such as dental, vision, and transportation.",
        },
        {
          question: "Does dual eligibility automatically qualify me for Extra Help?",
          answer:
            "Yes. Full dual-eligible beneficiaries automatically qualify for Extra Help (the Low Income Subsidy), which reduces or eliminates Part D prescription drug costs. You do not need to apply separately.",
        },
        {
          question: "Does Medicaid cover nursing home care for dual-eligible beneficiaries?",
          answer:
            "Yes. Medicaid covers long-term nursing facility care indefinitely for beneficiaries who meet the medical and financial eligibility criteria. This is one of the most important benefits of Medicaid, as Medicare only covers up to 100 days of skilled nursing facility care per benefit period.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "Medicare Qualifications in Florida: Who Is Eligible?",
      href: "/medicare-qualifications-florida",
      category: "Enrollment" as const,
    },
    {
      title: "How to Reduce Medicare Premiums Based on Income 2026",
      href: "/how-to-reduce-medicare-premiums-based-on-income-2026",
      category: "Costs" as const,
    },
    {
      title: "Best Medicare Advantage Plans in Florida 2026",
      href: "/best-medicare-advantage-plans-florida",
      category: "Plans" as const,
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
