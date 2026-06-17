import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
  "url": "https://medicareinfopro.com/blog/does-medicare-cover-cataract-surgery",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17",
  "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/does-medicare-cover-cataract-surgery"
  }
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers medically necessary cataract surgery, including the cost of one standard intraocular lens (IOL). You pay 20% of the Medicare-approved amount after your Part B deductible ($257 in 2026)."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover premium lens implants like multifocal or toric lenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare covers the cost of a standard monofocal IOL. If you choose a premium lens — such as a multifocal, extended depth-of-focus (EDOF), or toric lens — you pay the difference between the premium lens cost and what Medicare would have paid for the standard lens. This upgrade cost is typically $1,000 to $3,000 per eye."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover eyeglasses after cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the few times Medicare Part B covers eyeglasses or contact lenses. After cataract surgery that includes implanting an intraocular lens, Medicare covers one pair of eyeglasses or contact lenses from a supplier enrolled in Medicare."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare Advantage cover cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Advantage plans must cover everything Original Medicare covers, including cataract surgery. Your cost-sharing (copays, coinsurance, deductibles) will depend on your specific plan. Many Medicare Advantage plans also include additional vision benefits that Original Medicare does not offer."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover laser cataract surgery (FLACS)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare covers the medically necessary portion of cataract surgery regardless of technique. However, the additional cost of femtosecond laser-assisted cataract surgery (FLACS) over traditional phacoemulsification is considered elective and is not covered. You pay the upgrade cost out of pocket."
      }
    },
    {
      "@type": "Question",
      "name": "How much will I pay out of pocket for cataract surgery with Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With Original Medicare, you pay your Part B deductible ($257 in 2026) plus 20% coinsurance of the Medicare-approved amount. The total out-of-pocket cost is typically $300 to $600 per eye for standard surgery. A Medicare Supplement (Medigap) plan can cover most or all of that 20% coinsurance."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover cataract surgery in both eyes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers cataract surgery in both eyes when each procedure is medically necessary. The surgeries are typically performed several weeks apart. You pay cost-sharing for each procedure separately."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
  description:
    "Medicare Part B covers cataract surgery when medically necessary. Learn what Medicare pays, what you owe, whether premium lenses are covered, and how to reduce your out-of-pocket costs in 2026.",
  keywords: [
    "does Medicare cover cataract surgery",
    "Medicare cataract surgery coverage",
    "Medicare Part B cataract",
    "Medicare cataract lens implant",
    "Medicare premium IOL coverage",
    "cataract surgery cost with Medicare",
    "Medicare eyeglasses after cataract surgery",
    "Medicare Advantage cataract surgery",
  ],
  openGraph: {
    title: "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
    description:
      "Medicare Part B covers medically necessary cataract surgery. Learn what Medicare pays, what you owe, and how to minimize out-of-pocket costs.",
    url: "https://medicareinfopro.com/blog/does-medicare-cover-cataract-surgery",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Eye doctor examining patient before cataract surgery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
    description:
      "Medicare Part B covers medically necessary cataract surgery. Learn what Medicare pays, what you owe, and how to minimize out-of-pocket costs.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog/does-medicare-cover-cataract-surgery",
  },
};

const POST = {
  slug: "does-medicare-cover-cataract-surgery",
  title: "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
  excerpt:
    "Medicare Part B covers medically necessary cataract surgery, including a standard lens implant. Learn what Medicare pays, what you owe, and how to reduce your costs.",
  date: "June 17, 2026",
  readTime: "7 min read",
  category: "Coverage" as const,
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
  imageAlt: "Eye doctor examining patient before cataract surgery",
  author: GREG_WOHL,
  sections: [
    {
      type: "summary" as const,
      heading: "Medicare and Cataract Surgery: Key Takeaways",
      content:
        "Here is a quick summary of what you need to know:\n\n<ul><li><strong>Medicare Part B covers medically necessary cataract surgery</strong> including one standard IOL and pre/post-operative care</li><li><strong>You pay 20% coinsurance</strong> after your $257 Part B deductible, typically $300 to $600 per eye</li><li><strong>Premium lenses and laser upgrades are not covered</strong>; you pay the difference between the premium option and the standard Medicare-covered lens</li><li><strong>Medicare covers one pair of eyeglasses or contacts</strong> after cataract surgery with an IOL implant, one of the few vision benefits <a href='/coverage/vision' class='text-[#1a3fa8] underline underline-offset-2'>Medicare offers for vision</a></li><li><strong>A <a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medigap plan</a> (Plan G or N)</strong> can eliminate most or all of your out-of-pocket coinsurance for standard surgery</li><li><strong><a href='/medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage plans</a></strong> must cover cataract surgery and may offer additional vision benefits; confirm your providers are in-network</li></ul>\n\nIf you are approaching cataract surgery and want to understand how your current Medicare coverage will handle the costs, our licensed specialists can review your plan and identify any gaps. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> -- there is no cost and no obligation.",
    },
    {
      type: "section" as const,
      heading: "The Short Answer: Yes, Medicare Covers Cataract Surgery",
      content:
        "Cataracts are the leading cause of vision loss in adults over 65, and cataract surgery is one of the most common procedures performed on <a href='/what-is-medicare' class='text-[#1a3fa8] underline underline-offset-2'>Medicare</a> beneficiaries each year. The good news is that <strong>Medicare Part B covers cataract surgery when it is medically necessary</strong>, meaning your vision has deteriorated to the point where it significantly affects your daily life.\n\nCoverage includes the surgical procedure itself, one standard intraocular lens (IOL) implant, pre-operative and post-operative care, and one pair of eyeglasses or contact lenses after surgery. This last benefit is notable because <a href='/medicare-part-b' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part B</a> generally does not cover routine vision care.",
    },
    {
      type: "section" as const,
      heading: "What Medicare Covers for Cataract Surgery (2026)",
      content: `<table>
<thead><tr><th>Service</th><th>Covered by Medicare?</th><th>Your Cost</th></tr></thead>
<tbody>
<tr><td>Cataract surgery (standard technique)</td><td>Yes - Part B</td><td>20% after $257 deductible</td></tr>
<tr><td>Standard monofocal IOL lens implant</td><td>Yes - Part B</td><td>Included in 20% coinsurance</td></tr>
<tr><td>Pre-operative eye exam</td><td>Yes - Part B</td><td>20% coinsurance</td></tr>
<tr><td>Post-operative follow-up visits</td><td>Yes - Part B</td><td>20% coinsurance</td></tr>
<tr><td>One pair of eyeglasses or contacts after surgery</td><td>Yes - Part B</td><td>20% coinsurance</td></tr>
<tr><td>Premium IOL (multifocal, toric, EDOF)</td><td>Partial - upgrade cost not covered</td><td>Difference between premium and standard lens ($1,000-$3,000/eye)</td></tr>
<tr><td>Laser-assisted surgery (FLACS) upgrade</td><td>Partial - upgrade cost not covered</td><td>Additional laser fee ($500-$1,500/eye)</td></tr>
<tr><td>Routine eye exams (unrelated to cataracts)</td><td>No</td><td>Full cost</td></tr>
</tbody>
</table>`,
    },
    {
      type: "section" as const,
      heading: "How Much Will You Pay Out of Pocket?",
      content:
        "With <strong>Original Medicare only</strong>, your typical costs for cataract surgery are:\n\n<ul><li><strong>Part B deductible:</strong> $257 in 2026 (applies once per year, not per procedure)</li><li><strong>20% coinsurance:</strong> Medicare pays 80% of the approved amount; you pay 20%</li><li><strong>Estimated out-of-pocket per eye:</strong> $300 to $600 for standard surgery</li></ul>\n\nIf you have a <strong><a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Supplement (Medigap) plan</a></strong>, it can cover most or all of that 20% coinsurance, reducing your cost to near zero for standard cataract surgery. Plan G and Plan N are the most popular Medigap options for this reason.\n\nIf you are enrolled in a <strong><a href='/medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage plan</a></strong>, your costs depend on your plan's specific copays and coinsurance. Many Advantage plans have lower out-of-pocket costs for surgery than Original Medicare, but you must use in-network providers.",
    },
    {
      type: "section" as const,
      heading: "Standard vs. Premium Lens Implants: What Medicare Pays",
      content:
        "Every cataract surgery involves implanting an intraocular lens (IOL) to replace the clouded natural lens. Medicare covers the cost of a <strong>standard monofocal IOL</strong>, which corrects vision at one distance (usually distance vision). Most patients still need reading glasses after surgery.\n\nIf you want a <strong>premium lens</strong> such as a multifocal IOL (corrects near and far), a toric IOL (corrects astigmatism), or an extended depth-of-focus (EDOF) lens, Medicare pays what it would have paid for the standard lens, and you pay the difference. Premium lens upgrades typically cost <strong>$1,000 to $3,000 per eye</strong> out of pocket.\n\nThe upgrade cost is not covered by <a href='/do-i-need-a-medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medigap plans</a> either, since it is considered elective. It is a personal decision based on your lifestyle and how much you want to reduce your dependence on glasses after surgery.",
    },
    {
      type: "section" as const,
      heading: "Does Medicare Cover Laser Cataract Surgery?",
      content:
        "Traditional cataract surgery uses a technique called phacoemulsification, where the surgeon makes a small incision and uses ultrasound to break up the clouded lens. Femtosecond laser-assisted cataract surgery (FLACS) uses a laser to perform some of those steps with greater precision.\n\n<strong>Medicare covers the medically necessary portion of cataract surgery regardless of technique.</strong> However, the additional cost of the laser upgrade over traditional surgery is considered elective and is not covered. Surgeons typically charge an additional $500 to $1,500 per eye for the laser upgrade.\n\nWhether FLACS is worth the extra cost is a conversation to have with your ophthalmologist. For most straightforward cataract cases, outcomes are comparable between the two techniques. If you are unsure whether your plan covers specific surgical approaches, our <a href='/find-an-agent' class='text-[#1a3fa8] underline underline-offset-2'>licensed Medicare agents</a> can help you review your benefits.",
    },
    {
      type: "section" as const,
      heading: "Eyeglasses After Cataract Surgery: A Rare Medicare Vision Benefit",
      content:
        "One of Medicare's most overlooked benefits is that <strong>Part B covers one pair of eyeglasses or contact lenses after cataract surgery that includes an IOL implant</strong>. This is one of the only times Medicare covers eyewear; routine glasses and contact lenses are otherwise excluded. Learn more about what <a href='/coverage/vision' class='text-[#1a3fa8] underline underline-offset-2'>Medicare covers for vision</a>.\n\nTo use this benefit:\n\n<ul><li>Your surgeon must have implanted an intraocular lens during the procedure</li><li>You must purchase the glasses or contacts from a supplier enrolled in Medicare</li><li>Medicare pays 80% of the approved amount; you pay 20%</li><li>The benefit applies once per eye that has had surgery</li></ul>\n\nNote that Medicare sets an approved amount for basic frames and lenses. If you choose more expensive frames or lens upgrades (anti-reflective coating, progressive lenses, etc.), you pay the difference.",
    },
    {
      type: "section" as const,
      heading: "Medicare Advantage and Cataract Surgery",
      content:
        "If you are enrolled in a <a href='/medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage (Part C) plan</a>, your plan must cover everything Original Medicare covers, including cataract surgery. Your specific cost-sharing (copays, coinsurance, out-of-pocket maximum) depends on your plan.\n\nMany Medicare Advantage plans also include <strong>additional vision benefits</strong> that Original Medicare does not offer, such as annual eye exams, an allowance for frames or contacts, and discounts on LASIK or premium lenses. These extra benefits vary widely by plan and carrier.\n\nOne important consideration: Medicare Advantage plans require you to use <strong>in-network providers</strong>. Before scheduling surgery, confirm that your ophthalmologist and the surgical facility are both in your plan's network to avoid unexpected out-of-network charges.",
    },
    {
      type: "section" as const,
      heading: "How to Minimize Your Out-of-Pocket Costs",
      content:
        "Here are the most effective ways to reduce what you pay for cataract surgery:\n\n<ul><li><strong>Get a <a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medigap plan</a> before surgery:</strong> Plan G covers 100% of your Part B coinsurance after the annual deductible, making standard cataract surgery essentially free. Plan N covers coinsurance with a small copay per visit.</li><li><strong>Confirm your surgeon accepts Medicare assignment:</strong> Surgeons who accept Medicare assignment agree to charge no more than the Medicare-approved amount. If your surgeon does not accept assignment, they can charge up to 15% more (the \"limiting charge\"), which you pay out of pocket.</li><li><strong>Use your Medicare Advantage vision benefits:</strong> If your Advantage plan includes a vision allowance, apply it toward your post-surgery eyeglasses.</li><li><strong>Ask about the standard lens first:</strong> For many patients, a standard monofocal lens with reading glasses afterward is a perfectly good outcome and it costs significantly less than a premium lens upgrade.</li><li><strong>Check for Extra Help or Medicare Savings Programs:</strong> If you have limited income, these programs can reduce your Medicare cost-sharing significantly. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Speak with a licensed agent</a> to find out if you qualify.</li></ul>",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does Medicare cover cataract surgery?",
          answer:
            "Yes. Medicare Part B covers medically necessary cataract surgery, including the cost of one standard intraocular lens (IOL). You pay 20% of the Medicare-approved amount after your Part B deductible ($257 in 2026).",
        },
        {
          question: "Does Medicare cover premium lens implants like multifocal or toric lenses?",
          answer:
            "Medicare covers the cost of a standard monofocal IOL. If you choose a premium lens — such as a multifocal, extended depth-of-focus (EDOF), or toric lens — you pay the difference between the premium lens cost and what Medicare would have paid for the standard lens. This upgrade cost is typically $1,000 to $3,000 per eye.",
        },
        {
          question: "Does Medicare cover eyeglasses after cataract surgery?",
          answer:
            "Yes — this is one of the few times Medicare Part B covers eyeglasses or contact lenses. After cataract surgery that includes implanting an intraocular lens, Medicare covers one pair of eyeglasses or contact lenses from a supplier enrolled in Medicare.",
        },
        {
          question: "Does Medicare Advantage cover cataract surgery?",
          answer:
            "Yes. Medicare Advantage plans must cover everything Original Medicare covers, including cataract surgery. Your cost-sharing (copays, coinsurance, deductibles) will depend on your specific plan. Many Medicare Advantage plans also include additional vision benefits that Original Medicare does not offer.",
        },
        {
          question: "Does Medicare cover laser cataract surgery (FLACS)?",
          answer:
            "Medicare covers the medically necessary portion of cataract surgery regardless of technique. However, the additional cost of femtosecond laser-assisted cataract surgery (FLACS) over traditional phacoemulsification is considered elective and is not covered. You pay the upgrade cost out of pocket.",
        },
        {
          question: "How much will I pay out of pocket for cataract surgery with Medicare?",
          answer:
            "With Original Medicare, you pay your Part B deductible ($257 in 2026) plus 20% coinsurance of the Medicare-approved amount. The total out-of-pocket cost is typically $300 to $600 per eye for standard surgery. A Medicare Supplement (Medigap) plan can cover most or all of that 20% coinsurance.",
        },
        {
          question: "Does Medicare cover cataract surgery in both eyes?",
          answer:
            "Yes. Medicare Part B covers cataract surgery in both eyes when each procedure is medically necessary. The surgeries are typically performed several weeks apart. You pay cost-sharing for each procedure separately.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "Does Medicare Cover Vision? What's Included and What's Not",
      href: "/coverage/vision",
      category: "Coverage" as const,
    },
    {
      title: "Medicare Supplement Plans in Florida 2026",
      href: "/blog/medicare-supplement-plans-florida-2026",
      category: "Plans" as const,
    },
    {
      title: "Medicare Advantage Changes 2026: What Florida Enrollees Need to Know",
      href: "/blog/medicare-advantage-changes-2026-florida",
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
