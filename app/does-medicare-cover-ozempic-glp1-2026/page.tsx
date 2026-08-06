import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Does Medicare Cover Ozempic and GLP-1 Drugs in 2026? What Changed and What to Do Now",
  "url": "https://medicareinfopro.com/does-medicare-cover-ozempic-glp1-2026/",
  "datePublished": "2026-07-01",
  "dateModified": "2026-08-01",
  "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80",
  "author": {
    "@type": "Person",
    "name": "Greg Wohl",
    "jobTitle": "Licensed Medicare Specialist",
    "url": "https://medicareinfopro.com/greg-wohl",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "url": "https://medicareinfopro.com",
    "@id": "https://medicareinfopro.com/#organization",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://medicareinfopro.com/does-medicare-cover-ozempic-glp1-2026/",
  },
  "description":
    "Updated 2026 guide to Medicare coverage of Ozempic, Wegovy, Mounjaro, and other GLP-1 drugs. What changed with CMS rules, how Part D covers diabetes vs. weight loss indications, and how to find a plan that covers your medication.",
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare Part D cover Ozempic in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Part D plans can cover Ozempic (semaglutide) when it is prescribed for type 2 diabetes. Coverage depends on whether your specific Part D plan includes Ozempic on its formulary and at what tier. Most plans that cover it place it on Tier 3 or Tier 4, meaning your cost-share can be significant before the $2,100 out-of-pocket cap kicks in for 2026.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover Ozempic for weight loss in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare does not cover Ozempic specifically for weight loss. However, CMS issued guidance in 2024 allowing Part D plans to cover Wegovy (the weight-management version of semaglutide) for Medicare beneficiaries who have obesity and established cardiovascular disease. This does not extend to Ozempic prescribed solely for weight loss.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Medicare Part D out-of-pocket cap for expensive drugs like Ozempic in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Medicare Part D out-of-pocket cap is $2,100 in 2026. Once you reach this threshold in covered drug costs, you pay $0 for the rest of the year. This cap significantly reduces the financial risk of high-cost medications like GLP-1 drugs for Medicare beneficiaries.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover Mounjaro or Zepbound in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mounjaro (tirzepatide for diabetes) is generally covered by Part D plans that include it on their formulary. Zepbound (tirzepatide for weight management) has limited coverage similar to Wegovy: it may be covered for patients with obesity and cardiovascular disease under the 2024 CMS guidance, but coverage varies significantly by plan.",
      },
    },
    {
      "@type": "Question",
      "name": "What can I do if my Medicare plan does not cover my GLP-1 medication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You have several options: (1) Request a formulary exception through your doctor if you have tried covered alternatives; (2) Compare Part D plans during the Annual Enrollment Period (October 15 to December 7) using Medicare Plan Finder to find plans that cover your medication at a lower tier; (3) Ask your doctor about covered alternatives in the same drug class; (4) Check whether you qualify for Extra Help (Low Income Subsidy) which reduces drug costs significantly.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Ozempic and GLP-1 Drugs in 2026? What Changed",
  description:
    "Updated 2026 guide: Medicare Part D can cover Ozempic for diabetes but not weight loss alone. Learn what changed with CMS rules, the $2,100 OOP cap, and how to find a plan that covers your GLP-1 medication.",
  alternates: { canonical: "https://medicareinfopro.com/does-medicare-cover-ozempic-glp1-2026/" },
  openGraph: {
    title: "Does Medicare Cover Ozempic and GLP-1 Drugs in 2026? What Changed",
    description:
      "Updated 2026 guide: Medicare Part D can cover Ozempic for diabetes but not weight loss alone. Learn what changed with CMS rules, the $2,100 OOP cap, and how to find a plan that covers your GLP-1 medication.",
    images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80"],
  },
};

const post = {
  slug: "does-medicare-cover-ozempic-glp1-2026",
  title: "Does Medicare Cover Ozempic and GLP-1 Drugs in 2026? What Changed and What to Do Now",
  excerpt:
    "Medicare Part D can cover Ozempic for type 2 diabetes, but the rules for weight loss indications changed in 2024 and again in 2026. Here is exactly what is covered, what is not, and how to find a plan that works for your medication.",
  category: "Part D" as const,
  author: GREG_WOHL,
  date: "August 1, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80",
  imageAlt: "Ozempic and GLP-1 medication with Medicare card",
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Diabetes indication: generally covered",
          text: "Part D plans can cover Ozempic when prescribed for type 2 diabetes, subject to formulary placement and prior authorization.",
        },
        {
          label: "Weight loss alone: not covered by Ozempic",
          text: "Ozempic prescribed solely for weight loss is not covered. Wegovy may be covered for patients with obesity and cardiovascular disease under 2024 CMS guidance.",
        },
        {
          label: "2026 OOP cap: $2,100",
          text: "The Part D out-of-pocket cap dropped to $2,100 in 2026, significantly reducing the financial risk of high-cost GLP-1 medications.",
        },
        {
          label: "Plan comparison is critical",
          text: "Coverage and tier placement vary widely by plan. Comparing plans during the Annual Enrollment Period (October 15 to December 7) can save hundreds of dollars per year.",
        },
      ],
    },
    {
      type: "intro" as const,
      content:
        "Ozempic (semaglutide) has become one of the most prescribed drugs in the United States, and Medicare beneficiaries are asking about coverage more than ever. The answer is not a simple yes or no. It depends on why the drug is prescribed, which Part D plan you have, and whether your plan includes the drug on its formulary. This guide covers the 2026 rules in plain language, including what changed with CMS guidance on weight management drugs and how the new $2,100 out-of-pocket cap affects your costs.",
    },
    {
      type: "section" as const,
      heading: "How Medicare Part D Covers Ozempic for Diabetes",
      content:
        "Ozempic is FDA-approved primarily for the management of type 2 diabetes. Medicare Part D plans are permitted to cover it for this indication, and many do. However, coverage is not guaranteed: each Part D plan maintains its own formulary (list of covered drugs), and Ozempic may be on Tier 3, Tier 4, or not covered at all depending on the plan.\n\nWhen a plan does cover Ozempic for diabetes, prior authorization is almost always required. Your doctor must document that you have a type 2 diabetes diagnosis and typically that other first-line medications have been tried. The prior authorization process can take several days to a few weeks.\n\nIf your plan covers Ozempic but places it on a high tier, your cost-share before reaching the deductible can be substantial. In 2026, the Part D deductible is $590. After the deductible, you pay your plan's cost-sharing until you reach the $2,100 out-of-pocket cap, after which your drug costs are $0 for the rest of the year.",
    },
    {
      type: "section" as const,
      heading: "Ozempic for Weight Loss: What Medicare Does and Does Not Cover",
      content:
        "Medicare has historically excluded weight loss drugs from Part D coverage under a statutory exclusion. Ozempic prescribed solely for weight management falls under this exclusion and is not covered.\n\nThe landscape changed in 2024 when CMS issued guidance allowing Part D plans to cover Wegovy (the higher-dose semaglutide formulation approved for chronic weight management) for Medicare beneficiaries who have both obesity and established cardiovascular disease. This was a significant policy shift, but it applies to Wegovy specifically, not to Ozempic prescribed off-label for weight loss.\n\nFor 2026, the rule remains: Ozempic for weight loss alone is not covered. Wegovy for cardiovascular risk reduction in patients with obesity may be covered depending on your plan. Check your plan's formulary or call our office at 813-699-5559 for a free plan review.",
      subsections: [
        {
          heading: "GLP-1 Drug Coverage Summary for 2026",
          content:
            "<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Drug</th><th class='p-3 text-left'>Brand</th><th class='p-3 text-left'>Indication</th><th class='p-3 text-left'>Medicare Part D Coverage</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Semaglutide injection</td><td class='p-3'>Ozempic</td><td class='p-3'>Type 2 diabetes</td><td class='p-3'>Generally covered if on formulary</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Semaglutide injection</td><td class='p-3'>Wegovy</td><td class='p-3'>Weight management</td><td class='p-3'>May be covered for obesity with CVD</td></tr><tr class='bg-white border-b'><td class='p-3'>Semaglutide oral</td><td class='p-3'>Rybelsus</td><td class='p-3'>Type 2 diabetes</td><td class='p-3'>Generally covered if on formulary</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Tirzepatide injection</td><td class='p-3'>Mounjaro</td><td class='p-3'>Type 2 diabetes</td><td class='p-3'>Generally covered if on formulary</td></tr><tr class='bg-white'><td class='p-3'>Tirzepatide injection</td><td class='p-3'>Zepbound</td><td class='p-3'>Weight management</td><td class='p-3'>Limited; may qualify under CVD guidance</td></tr></tbody></table>",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "The 2026 Part D Out-of-Pocket Cap and What It Means for GLP-1 Users",
      content:
        "One of the most significant changes for Medicare beneficiaries in 2026 is the $2,100 out-of-pocket cap on Part D drug costs. This is a reduction from the $2,000 cap that took effect in 2025 as part of the Inflation Reduction Act.\n\nFor beneficiaries taking high-cost GLP-1 medications, this cap provides meaningful financial protection. Once your total out-of-pocket drug spending reaches $2,100 in a calendar year, you pay $0 for covered drugs for the rest of the year. This applies to all covered Part D drugs, including Ozempic when covered for diabetes.\n\nThe cap does not help if your drug is not covered by your plan at all. This is why plan selection matters enormously for GLP-1 users. A plan that covers Ozempic on Tier 3 versus Tier 4 can mean a difference of hundreds of dollars before you reach the cap. Our agents compare every plan's formulary and cost-sharing structure for your specific medications at no cost. See the official <a href='https://www.medicare.gov/drug-coverage-part-d' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Medicare.gov Part D coverage page</a> for the latest official guidance.",
    },
    {
      type: "section" as const,
      heading: "What to Do If Your Plan Does Not Cover Your GLP-1 Medication",
      content:
        "If your current Part D plan does not cover Ozempic, Wegovy, or another GLP-1 drug you need, you have several options.\n\nFirst, ask your doctor to submit a formulary exception request. If you have tried covered alternatives and they were not effective or caused side effects, your doctor can document this and request that your plan cover the drug as an exception. This process takes time but is worth pursuing.\n\nSecond, compare plans during the Annual Enrollment Period (October 15 to December 7). Use <a href='https://www.medicare.gov/plan-compare' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Medicare Plan Finder</a> to search for Part D plans that include your specific medication on their formulary. Filter by your drugs to see total estimated annual costs including premiums and cost-sharing. Our agents can run this comparison for you at no cost.\n\nThird, check whether you qualify for Extra Help (also called the Low Income Subsidy). If your income and assets fall below certain thresholds, Extra Help significantly reduces your Part D premiums, deductibles, and cost-sharing for all covered drugs. See our guide to <a href='/blog/how-to-reduce-medicare-premiums-based-on-income-2026' class='text-[#1a3fa8] underline underline-offset-2'>reducing Medicare costs based on income</a> for eligibility details.",
    },
    {
      type: "inlineCta" as const,
      heading: "Not sure if your plan covers your medications?",
      body: "Our licensed agents compare every Part D plan available in your ZIP code against your specific drug list at no cost. Call 813-699-5559 or schedule a free consultation online.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does Medicare Part D cover Ozempic in 2026?",
          answer:
            "Medicare Part D plans can cover Ozempic when prescribed for type 2 diabetes. Coverage depends on whether your specific plan includes it on its formulary and at what tier. Most plans that cover it place it on Tier 3 or Tier 4. The 2026 Part D out-of-pocket cap of $2,100 limits your maximum annual exposure.",
        },
        {
          question: "Does Medicare cover Ozempic for weight loss in 2026?",
          answer:
            "No. Ozempic prescribed solely for weight loss is not covered by Medicare Part D. Wegovy (the weight management formulation of semaglutide) may be covered for patients with obesity and established cardiovascular disease under 2024 CMS guidance, but this does not extend to Ozempic.",
        },
        {
          question: "What is the Medicare Part D out-of-pocket cap for 2026?",
          answer:
            "The Part D out-of-pocket cap is $2,100 in 2026. Once you reach this threshold in covered drug costs, you pay $0 for the rest of the year. This cap applies to all covered Part D drugs including GLP-1 medications covered for diabetes.",
        },
        {
          question: "Does Medicare cover Mounjaro or Zepbound in 2026?",
          answer:
            "Mounjaro (tirzepatide for diabetes) is generally covered by Part D plans that include it on their formulary. Zepbound (tirzepatide for weight management) has limited coverage and may qualify under the cardiovascular risk reduction guidance for patients with obesity and CVD.",
        },
        {
          question: "What can I do if my Medicare plan does not cover my GLP-1 medication?",
          answer:
            "Request a formulary exception through your doctor, compare Part D plans during the Annual Enrollment Period (October 15 to December 7) using Medicare Plan Finder, ask your doctor about covered alternatives, or check whether you qualify for Extra Help. Our agents can run a free plan comparison for your specific medications.",
        },
      ],
    },
    {
      type: "summary" as const,
      heading: "Bottom Line",
      content:
        "Medicare Part D can cover Ozempic for type 2 diabetes, but coverage is not automatic and depends on your specific plan's formulary. Ozempic for weight loss alone is not covered. Wegovy may be covered for patients with obesity and cardiovascular disease. The 2026 Part D out-of-pocket cap of $2,100 limits your maximum annual drug costs. If your current plan does not cover your GLP-1 medication, the Annual Enrollment Period (October 15 to December 7) is your best opportunity to switch to a plan that does. Our licensed agents compare every plan's formulary against your specific medications at no cost.",
    },
  ],
  relatedPosts: [
    {
      title: "Does Medicare Cover Ozempic? Coverage, Costs, and Alternatives",
      href: "/does-medicare-cover-ozempic/",
      category: "Part D" as const,
    },
    {
      title: "Does Medicare Cover Wegovy?",
      href: "/does-medicare-cover-wegovy/",
      category: "Part D" as const,
    },
    {
      title: "How to Reduce Medicare Premiums Based on Income 2026",
      href: "/blog/how-to-reduce-medicare-premiums-based-on-income-2026/",
      category: "Costs" as const,
    },
    {
      title: "Free Medicare Enrollment Help in Brandon, FL",
      href: "/free-medicare-enrollment-help-brandon-fl/",
      category: "Enrollment" as const,
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
      <BlogPostClient post={post} />
    </>
  );
}
