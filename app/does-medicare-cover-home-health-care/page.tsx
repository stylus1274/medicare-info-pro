import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Does Medicare Cover Home Health Care? What You Need to Know in 2026",
  "url": "https://medicareinfopro.com/blog/does-medicare-cover-home-health-care",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17",
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
    "@id": "https://medicareinfopro.com/blog/does-medicare-cover-home-health-care"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover home health care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part A and Part B both cover home health care services when specific eligibility criteria are met. You must be homebound, require skilled care, have a physician's order, and receive services from a Medicare-certified home health agency."
      }
    },
    {
      "@type": "Question",
      "name": "What home health services does Medicare cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare covers skilled nursing care, physical therapy, occupational therapy, speech-language pathology, medical social services, and home health aide services when they accompany skilled care. It does not cover 24-hour care, homemaker services, or personal care provided by a home health aide alone."
      }
    },
    {
      "@type": "Question",
      "name": "How long will Medicare pay for home health care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare does not set a fixed limit on how many days of home health care it will cover. Coverage continues as long as you remain homebound, require skilled care, and your physician certifies the need. However, Medicare reviews your case periodically and coverage ends if you no longer meet the criteria."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover 24-hour home care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Medicare does not cover around-the-clock home care. It covers part-time or intermittent skilled nursing and therapy services. If you need continuous care, you would need to pay out of pocket or explore other coverage options such as Medicaid or long-term care insurance."
      }
    },
    {
      "@type": "Question",
      "name": "What does homebound mean for Medicare home health coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Homebound means that leaving your home requires a considerable and taxing effort. You may still qualify as homebound if you leave occasionally for medical appointments, adult day programs, or brief outings. You do not have to be completely bedridden."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare Advantage cover home health care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Advantage plans must cover all services that Original Medicare covers, including home health care. Some Advantage plans also offer additional home-based benefits such as personal care assistance, meal delivery after hospitalization, or home safety modifications. Benefits vary by plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover custodial care at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Medicare does not cover custodial care, which includes help with bathing, dressing, eating, and other activities of daily living when that is the only type of care needed. Custodial care is covered by Medicaid for those who qualify, or can be paid for through long-term care insurance or private funds."
      }
    }
  ]
} as const;

export const metadata: Metadata = {
  title: "Does Medicare Cover Home Health Care? What You Need to Know in 2026",
  description:
    "Medicare covers skilled home health care when you meet specific criteria. Learn what services are covered, what is excluded, how long coverage lasts, and how Medicare Advantage may expand your benefits.",
  keywords: [
    "Medicare home health care coverage",
    "does Medicare cover home health care",
    "Medicare home health benefits",
    "Medicare skilled nursing at home",
    "Medicare homebound criteria",
    "Medicare home health aide",
    "Medicare Advantage home care benefits",
  ],
  openGraph: {
    title: "Does Medicare Cover Home Health Care? What You Need to Know in 2026",
    description:
      "Medicare covers skilled home health care when you meet specific criteria. Learn what services are covered, what is excluded, how long coverage lasts, and how Medicare Advantage may expand your benefits.",
    url: "https://medicareinfopro.com/blog/does-medicare-cover-home-health-care",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Home health care nurse assisting an elderly patient at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Home Health Care? What You Need to Know in 2026",
    description:
      "Medicare covers skilled home health care when you meet specific criteria. Learn what services are covered, what is excluded, how long coverage lasts, and how Medicare Advantage may expand your benefits.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog/does-medicare-cover-home-health-care",
  },
};

const POST = {
  slug: "does-medicare-cover-home-health-care",
  title: "Does Medicare Cover Home Health Care? What You Need to Know in 2026",
  excerpt:
    "Medicare covers skilled home health care, but only when specific eligibility criteria are met. Understanding what qualifies, what is excluded, and how long coverage lasts can help you plan ahead and avoid unexpected costs.",
  date: "June 17, 2026",
  readTime: "9 min read",
  category: "Coverage" as const,
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  imageAlt: "Home health care nurse assisting an elderly patient at home",
  author: GREG_WOHL,
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Coverage is available",
          text: "Medicare Part A and Part B cover home health care services, but only when you meet all four eligibility criteria: homebound status, a need for skilled care, a physician's order, and a Medicare-certified agency.",
        },
        {
          label: "Skilled care is required",
          text: "Medicare covers skilled nursing, physical therapy, occupational therapy, and speech therapy at home. It does not cover custodial care or personal care provided alone without accompanying skilled services.",
        },
        {
          label: "No fixed time limit",
          text: "Medicare does not cap home health coverage at a set number of days. Coverage continues as long as you remain homebound and require skilled care, subject to periodic review.",
        },
        {
          label: "No cost-sharing for most services",
          text: "Approved home health services under Original Medicare are covered at 100% with no copay. You pay 20% of the Medicare-approved amount for durable medical equipment ordered as part of your home health plan.",
        },
        {
          label: "Advantage plans may offer more",
          text: "Some Medicare Advantage plans cover additional home-based services beyond what Original Medicare provides, including personal care assistance, meal delivery, and home safety modifications.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Is Medicare Home Health Care?",
      content:
        "Home health care under <a href='/what-is-medicare' class='text-[#1a3fa8] underline underline-offset-2'>Medicare</a> refers to a specific set of skilled medical services delivered in your home by a Medicare-certified home health agency. This is different from general home care or personal assistance services.\n\nThe program is designed for people who are recovering from an illness, injury, or surgery, or who have a chronic condition that requires ongoing skilled medical attention. The goal is to allow patients to receive necessary medical care in the comfort of their own home rather than in a hospital or skilled nursing facility.\n\nBoth <a href='/medicare-part-a' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part A</a> and <a href='/medicare-part-b' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part B</a> cover home health services. Which part pays depends on whether you recently had a qualifying hospital or skilled nursing facility stay, but the covered services and eligibility criteria are the same either way.",
    },
    {
      type: "section" as const,
      heading: "The Four Eligibility Requirements",
      content:
        "To qualify for Medicare home health coverage, you must meet all four of the following criteria:\n\n<strong>1. You must be homebound.</strong> Homebound means that leaving your home requires a considerable and taxing effort due to illness, injury, or disability. You may still qualify if you leave occasionally for medical appointments, adult day programs, religious services, or brief outings. The key is that leaving home is difficult and requires significant effort.\n\n<strong>2. You must need skilled care.</strong> You must require at least one of the following: skilled nursing care on an intermittent basis, physical therapy, speech-language pathology services, or continued occupational therapy. A need for custodial care alone does not qualify.\n\n<strong>3. A physician must certify the need.</strong> A doctor or certain other health care providers must examine you, certify that you are homebound and require skilled care, and create or approve a plan of care. The certifying provider must have a face-to-face encounter with you before or shortly after home health care begins.\n\n<strong>4. The agency must be Medicare-certified.</strong> Services must be provided by a home health agency that has been approved by Medicare. Not all home health agencies accept Medicare, so it is important to confirm certification before services begin.",
    },
    {
      type: "section" as const,
      heading: "What Medicare Covers and What It Does Not",
      content:
        "Understanding the distinction between covered and non-covered services is essential for planning. Medicare is specific about what qualifies as skilled care and what falls into the category of custodial or personal care.\n\n<table>\n<thead><tr><th>Service</th><th>Covered by Medicare?</th><th>Notes</th></tr></thead>\n<tbody>\n<tr><td>Skilled nursing care (part-time or intermittent)</td><td>Yes</td><td>Wound care, injections, monitoring of complex conditions</td></tr>\n<tr><td>Physical therapy</td><td>Yes</td><td>Improving strength, balance, and mobility after illness or injury</td></tr>\n<tr><td>Occupational therapy</td><td>Yes</td><td>Relearning daily tasks; can continue even after skilled nursing ends</td></tr>\n<tr><td>Speech-language pathology</td><td>Yes</td><td>Treating speech, language, and swallowing disorders</td></tr>\n<tr><td>Medical social services</td><td>Yes</td><td>Counseling, connecting patients to community resources</td></tr>\n<tr><td>Home health aide services</td><td>Yes (limited)</td><td>Only when accompanying skilled care; personal care tasks only</td></tr>\n<tr><td>Durable medical equipment</td><td>Yes (80%)</td><td>Wheelchairs, walkers, hospital beds; you pay 20%</td></tr>\n<tr><td>24-hour home care</td><td>No</td><td>Medicare covers only part-time or intermittent care</td></tr>\n<tr><td>Homemaker services</td><td>No</td><td>Cooking, cleaning, shopping not covered</td></tr>\n<tr><td>Personal care only (bathing, dressing)</td><td>No</td><td>Covered only when accompanying skilled care</td></tr>\n<tr><td>Custodial care</td><td>No</td><td>Long-term help with activities of daily living not covered</td></tr>\n<tr><td>Meal delivery</td><td>No (Original Medicare)</td><td>Some Medicare Advantage plans include this benefit</td></tr>\n</tbody>\n</table>",
    },
    {
      type: "proTip" as const,
      content:
        "If you need both skilled care and personal care assistance, Medicare will cover the personal care provided by a home health aide as part of your plan of care. The key is that skilled care must be the primary reason for the home health visit. Once skilled care ends, Medicare will no longer cover the home health aide, even if you still need help with bathing or dressing. Plan ahead by identifying other resources before your skilled care period ends. A <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare specialist</a> can help you understand what your specific plan covers.",
    },
    {
      type: "section" as const,
      heading: "How Long Will Medicare Pay for Home Health Care?",
      content:
        "Unlike skilled nursing facility coverage, Medicare does not impose a hard day limit on home health care. Coverage continues as long as you remain homebound, require skilled care, and your physician continues to certify the need.\n\nMedicare reviews home health claims periodically. If a reviewer determines that you no longer meet the criteria, coverage can end. You have the right to appeal any coverage termination decision.\n\nHome health care is delivered in 60-day episodes. At the end of each episode, your home health agency and physician review your progress and determine whether to continue. There is no limit on how many episodes you can receive, provided you continue to qualify.\n\nIf your condition improves to the point where you no longer need skilled care, Medicare coverage ends. If your condition later worsens and you again need skilled care, you can re-qualify for home health coverage.",
    },
    {
      type: "section" as const,
      heading: "What Does Medicare Home Health Care Cost?",
      content:
        "For most covered home health services under Original Medicare, your out-of-pocket cost is zero. Medicare pays 100% of the approved amount for skilled nursing, therapy, and home health aide services when all eligibility criteria are met.\n\nThe one exception is durable medical equipment (DME) ordered as part of your home health plan of care. For DME, Medicare pays 80% of the approved amount and you pay the remaining 20% after your <a href='/medicare-part-b' class='text-[#1a3fa8] underline underline-offset-2'>Part B deductible</a> is met. In 2026, the Part B deductible is $257.\n\nIf you have a <a href='/medicare-supplement-plans' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Supplement (Medigap) plan</a>, it may cover the 20% DME cost-sharing depending on which plan you have. <a href='/medicare-supplement-plan-g' class='text-[#1a3fa8] underline underline-offset-2'>Plan G</a>, for example, covers the Part B coinsurance after you meet the deductible.",
    },
    {
      type: "section" as const,
      heading: "Medicare Advantage and Home Health Care",
      content:
        "If you are enrolled in a <a href='/medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage</a> plan, your plan must cover all the same home health services that Original Medicare covers. However, the cost-sharing and network rules may differ.\n\nMany Medicare Advantage plans also offer supplemental home-based benefits that go beyond Original Medicare, including:\n\n<ul><li>Personal care assistance (help with bathing, dressing, and grooming)</li><li>Meal delivery after a hospitalization or for chronically ill enrollees</li><li>Home safety modifications such as grab bars or ramps</li><li>Transportation to medical appointments</li><li>Remote patient monitoring</li></ul>\n\nThese supplemental benefits vary significantly by plan and by county. If home-based care is important to you, comparing Advantage plans based on their supplemental benefits is worth the effort. Our <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare agents</a> can pull up the specific benefits available in your zip code.",
    },
    {
      type: "section" as const,
      heading: "What About Custodial Care and Long-Term Home Care?",
      content:
        "The most common source of confusion around Medicare home health coverage is the distinction between skilled care and custodial care.\n\n<strong>Skilled care</strong> requires the expertise of a licensed medical professional, such as a nurse or therapist. Examples include wound care, IV therapy, post-surgical rehabilitation, and monitoring of complex medication regimens.\n\n<strong>Custodial care</strong> refers to assistance with activities of daily living such as bathing, dressing, eating, and using the toilet. This type of care does not require a licensed professional and is not covered by Medicare.\n\nIf you or a family member needs long-term help with activities of daily living at home, the options are:\n\n<ul><li><strong>Medicaid:</strong> For those who qualify based on income and assets, Medicaid covers custodial home care through Home and Community Based Services (HCBS) waiver programs. Florida's program is called the Statewide Medicaid Managed Care Long-Term Care program.</li><li><strong>Long-term care insurance:</strong> Policies purchased before a health event can cover custodial care at home or in a facility.</li><li><strong>Private pay:</strong> Hiring a home health aide or personal care attendant directly.</li><li><strong>Veterans benefits:</strong> The VA offers home-based primary care and other programs for eligible veterans.</li></ul>",
    },
    {
      type: "summary" as const,
      heading: "Home Health Care Coverage: Quick Reference",
      content:
        "<ul><li><strong>Covered:</strong> Skilled nursing, physical therapy, occupational therapy, speech therapy, medical social services, home health aide (with skilled care), and DME (at 80%)</li><li><strong>Not covered:</strong> 24-hour care, custodial care alone, homemaker services, meal delivery (Original Medicare)</li><li><strong>Eligibility:</strong> Must be homebound, need skilled care, have a physician's order, and use a Medicare-certified agency</li><li><strong>Duration:</strong> No fixed limit; continues as long as you qualify; reviewed in 60-day episodes</li><li><strong>Cost:</strong> $0 for covered services; 20% coinsurance for DME after the Part B deductible</li><li><strong>Advantage plans:</strong> May offer additional home-based benefits beyond Original Medicare</li></ul>\n\nIf you are trying to understand whether a specific service qualifies for Medicare home health coverage, or if you want to compare Medicare Advantage plans with strong home care benefits in the Tampa Bay area, <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free consultation</a> with one of our licensed Medicare specialists.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does Medicare cover home health care?",
          answer:
            "Yes. Medicare Part A and Part B both cover home health care services when specific eligibility criteria are met. You must be homebound, require skilled care, have a physician's order, and receive services from a Medicare-certified home health agency.",
        },
        {
          question: "What home health services does Medicare cover?",
          answer:
            "Medicare covers skilled nursing care, physical therapy, occupational therapy, speech-language pathology, medical social services, and home health aide services when they accompany skilled care. It does not cover 24-hour care, homemaker services, or personal care provided by a home health aide alone.",
        },
        {
          question: "How long will Medicare pay for home health care?",
          answer:
            "Medicare does not set a fixed limit on how many days of home health care it will cover. Coverage continues as long as you remain homebound, require skilled care, and your physician certifies the need. However, Medicare reviews your case periodically and coverage ends if you no longer meet the criteria.",
        },
        {
          question: "Does Medicare cover 24-hour home care?",
          answer:
            "No. Medicare does not cover around-the-clock home care. It covers part-time or intermittent skilled nursing and therapy services. If you need continuous care, you would need to pay out of pocket or explore other coverage options such as Medicaid or long-term care insurance.",
        },
        {
          question: "What does homebound mean for Medicare home health coverage?",
          answer:
            "Homebound means that leaving your home requires a considerable and taxing effort. You may still qualify as homebound if you leave occasionally for medical appointments, adult day programs, or brief outings. You do not have to be completely bedridden.",
        },
        {
          question: "Does Medicare Advantage cover home health care?",
          answer:
            "Yes. Medicare Advantage plans must cover all services that Original Medicare covers, including home health care. Some Advantage plans also offer additional home-based benefits such as personal care assistance, meal delivery after hospitalization, or home safety modifications. Benefits vary by plan.",
        },
        {
          question: "Does Medicare cover custodial care at home?",
          answer:
            "No. Medicare does not cover custodial care, which includes help with bathing, dressing, eating, and other activities of daily living when that is the only type of care needed. Custodial care is covered by Medicaid for those who qualify, or can be paid for through long-term care insurance or private funds.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
      href: "/does-medicare-cover-cataract-surgery",
      category: "Coverage" as const,
    },
    {
      title: "Does Medicare Cover Ambulance Rides in 2026?",
      href: "/does-medicare-cover-ambulance-rides",
      category: "Coverage" as const,
    },
    {
      title: "Medicare Advantage Changes 2026: What Florida Enrollees Need to Know",
      href: "/medicare-advantage-changes-2026-florida",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPostClient post={POST} />
    </>
  );
}
