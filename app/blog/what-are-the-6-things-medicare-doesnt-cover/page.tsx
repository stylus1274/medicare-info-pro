import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "What Are the 6 Things Medicare Doesn't Cover?",
  "url": "https://medicareinfopro.com/blog/what-are-the-6-things-medicare-doesnt-cover",
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "image": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/what-are-the-6-things-medicare-doesnt-cover"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "What Are the 6 Things Medicare Doesn't Cover? | MedicareInfoPro",
  description:
    "Medicare has significant coverage gaps that surprise many beneficiaries. Learn the 6 most important things Medicare does not cover, how much each can cost, and what options exist to fill the gaps.",
  keywords: [
    "what does Medicare not cover",
    "Medicare coverage gaps",
    "things Medicare doesn't cover",
    "Medicare exclusions",
    "Medicare gaps Florida",
    "what Medicare excludes",
  ],
  openGraph: {
    title: "What Are the 6 Things Medicare Doesn't Cover?",
    description:
      "Medicare has significant coverage gaps that surprise many beneficiaries. Learn what is excluded and how to protect yourself.",
    url: "https://medicare-info-pro.vercel.app/blog/what-are-the-6-things-medicare-doesnt-cover",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare coverage gaps and exclusions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are the 6 Things Medicare Doesn't Cover?",
    description:
      "Medicare has significant coverage gaps. Learn what is excluded and how to protect yourself.",
  },
  alternates: {
    canonical:
      "https://medicare-info-pro.vercel.app/blog/what-are-the-6-things-medicare-doesnt-cover",
  },
};

const POST = {
  slug: "what-are-the-6-things-medicare-doesnt-cover",
  title: "What Are the 6 Things Medicare Doesn't Cover?",
  excerpt:
    "Medicare covers a wide range of medical services, but it has significant gaps that surprise many beneficiaries. Understanding what Medicare does not cover, how much those gaps can cost, and what options exist to fill them is essential for anyone approaching Medicare eligibility.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "June 2026",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80",
  imageAlt: "List of exclusions representing the six things Medicare does not cover",
  sections: [
    {
      type: "intro" as const,
      content:
        "Medicare is comprehensive by the standards of most private insurance, but it was never designed to cover everything. When it was created in 1965, several categories of care were deliberately excluded, and many of those exclusions remain in place today.\n\nThe gaps in Medicare coverage are not minor inconveniences. Long-term care alone can cost $80,000 to $100,000 per year in Florida. Dental work can run into thousands of dollars. Hearing aids can cost $3,000 to $7,000 per pair. These are real financial risks that require real planning.\n\nThis guide covers the 6 most significant things Medicare does not cover, what each gap can cost, and what options exist to protect yourself.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Long-term care is the biggest gap",
          text: "Medicare does not cover custodial care in a nursing home, assisted living facility, or at home. This is the most expensive Medicare gap, with costs ranging from $50,000 to over $100,000 per year in Florida.",
        },
        {
          label: "Dental, vision, and hearing are not covered by Original Medicare",
          text: "Routine dental care, eye exams, eyeglasses, and hearing aids are excluded from Original Medicare. These are common needs for seniors and can cost thousands of dollars per year.",
        },
        {
          label: "Routine foot care is excluded",
          text: "Routine foot care such as nail trimming and callus removal is not covered. Medicare does cover foot care related to a medical condition such as diabetes, but routine maintenance is excluded.",
        },
        {
          label: "Cosmetic surgery is not covered",
          text: "Cosmetic procedures are excluded from Medicare coverage. Reconstructive surgery after an accident or mastectomy is covered, but elective cosmetic procedures are not.",
        },
        {
          label: "Most care outside the United States is not covered",
          text: "Original Medicare generally does not cover care received outside the United States. There are three narrow exceptions for emergency care in Canada or Mexico under specific geographic circumstances.",
        },
        {
          label: "Medicare Advantage and Medigap can fill many of these gaps",
          text: "Medicare Advantage plans often include dental, vision, and hearing benefits. Medigap plans cover cost-sharing gaps. Neither covers long-term custodial care, which requires separate long-term care insurance or Medicaid planning.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "1. Long-Term Custodial Care",
      content:
        "This is the most significant and most expensive gap in Medicare coverage. Medicare does not cover custodial care, which is assistance with activities of daily living such as bathing, dressing, eating, and using the bathroom.\n\n<strong>What Medicare does cover:</strong> Medicare Part A covers skilled nursing facility (SNF) care, but only under specific conditions. You must have a qualifying hospital stay of at least 3 days, and the SNF care must be for a skilled medical need (physical therapy, wound care, IV medications). Medicare covers the first 20 days at 100%, then days 21-100 with a daily coinsurance of $209.50 in 2026, and nothing after day 100.\n\n<strong>What Medicare does not cover:</strong> Once you no longer need skilled care and only need help with daily activities, Medicare coverage stops. This is custodial care, and it is entirely excluded from Medicare.\n\n<strong>The cost:</strong> In Florida, assisted living facilities average $3,500 to $5,000 per month. Memory care units average $5,000 to $7,000 per month. Nursing home private rooms average $8,000 to $10,000 per month.\n\n<strong>Options to fill this gap:</strong>\n\n<ul><li><strong>Long-term care insurance:</strong> Purchased before you need it, typically in your 50s or early 60s. Premiums are lower the younger you buy.</li><li><strong>Medicaid:</strong> Covers long-term care for beneficiaries who meet income and asset limits. Requires careful advance planning.</li><li><strong>Hybrid life/LTC policies:</strong> Life insurance policies with a long-term care rider that pays benefits if you need care.</li><li><strong>Self-funding:</strong> Using savings, home equity, or other assets to pay for care.</li></ul>",
    },
    {
      type: "section" as const,
      heading: "2. Dental Care",
      content:
        "Original Medicare does not cover routine dental care. This includes cleanings, fillings, tooth extractions, dentures, dental plates, and most other dental services.\n\n<strong>The narrow exception:</strong> Medicare Part A may cover dental services that are an integral part of a covered procedure. For example, if you need jaw reconstruction after an accident that is covered under Part A, the dental work involved may be covered. But this exception is narrow and does not apply to routine dental care.\n\n<strong>The cost:</strong> A basic dental cleaning costs $75 to $200. A crown can cost $1,000 to $1,500. A full set of dentures can cost $1,500 to $3,000. For seniors with significant dental needs, the annual cost can easily exceed $2,000 to $5,000.\n\n<strong>Options to fill this gap:</strong>\n\n<ul><li><strong>Medicare Advantage:</strong> Many MA plans include dental benefits, typically covering preventive care at 100% and basic restorative care at 50-80%. Coverage for major services (crowns, dentures) varies widely by plan.</li><li><strong>Standalone dental insurance:</strong> Available from private insurers, typically $20 to $50 per month for basic coverage.</li><li><strong>Dental discount plans:</strong> Not insurance, but membership programs that provide discounted rates at participating dentists.</li><li><strong>Community health centers:</strong> Federally qualified health centers often provide dental care on a sliding-fee scale.</li></ul>",
    },
    {
      type: "section" as const,
      heading: "3. Vision Care and Eyeglasses",
      content:
        "Original Medicare does not cover routine eye exams for eyeglasses or contact lenses, nor does it cover eyeglasses or contact lenses themselves.\n\n<strong>What Medicare does cover:</strong> Medicare Part B covers one pair of eyeglasses or contact lenses after cataract surgery with an intraocular lens implant. It also covers treatment for eye diseases such as glaucoma, macular degeneration, and diabetic retinopathy, since these are medical conditions rather than routine vision care.\n\n<strong>The cost:</strong> A routine eye exam costs $100 to $200. A pair of prescription eyeglasses can cost $200 to $600 or more. For seniors who need progressive lenses or specialized frames, the annual cost can be significant.\n\n<strong>Options to fill this gap:</strong>\n\n<ul><li><strong>Medicare Advantage:</strong> Many MA plans include vision benefits covering annual eye exams and an allowance toward eyeglasses or contacts.</li><li><strong>Standalone vision insurance:</strong> Available from private insurers, typically $10 to $20 per month.</li><li><strong>Discount retailers:</strong> Costco, Walmart, and similar retailers offer significantly lower prices on eyeglasses than traditional optical shops.</li></ul>",
    },
    {
      type: "section" as const,
      heading: "4. Hearing Aids and Hearing Exams",
      content:
        "Original Medicare does not cover routine hearing exams or hearing aids. This is a significant gap given that approximately two-thirds of adults over 70 have some degree of hearing loss.\n\n<strong>What Medicare does cover:</strong> Medicare Part B covers diagnostic hearing and balance exams when ordered by a physician to determine whether medical treatment is needed. It does not cover the hearing exam for the purpose of fitting a hearing aid.\n\n<strong>The cost:</strong> A hearing evaluation can cost $200 to $300. A pair of hearing aids can cost $3,000 to $7,000 or more. Hearing aids typically need to be replaced every 3 to 5 years.\n\n<strong>Options to fill this gap:</strong>\n\n<ul><li><strong>Medicare Advantage:</strong> Many MA plans include hearing benefits, typically covering one hearing exam per year and an allowance toward hearing aids.</li><li><strong>Over-the-counter hearing aids:</strong> Since 2022, FDA-approved OTC hearing aids are available for adults with mild to moderate hearing loss at prices ranging from $200 to $1,500 per pair.</li><li><strong>Costco Hearing Aid Center:</strong> Offers prescription hearing aids at significantly lower prices than traditional audiologists.</li></ul>\n\nFor more on Medicare Advantage benefits including hearing coverage, see our guide on <a href='/blog/value-added-benefits-through-medicare-advantage' class='text-[#1a3fa8] underline underline-offset-2'>value-added benefits through Medicare Advantage</a>.",
    },
    {
      type: "section" as const,
      heading: "5. Routine Foot Care and Cosmetic Surgery",
      content:
        "Two additional exclusions that affect many seniors are routine foot care and cosmetic surgery.\n\n<strong>Routine foot care:</strong> Medicare does not cover routine foot care such as cutting or removing corns and calluses, trimming, cutting, or clipping toenails, or hygienic or preventive maintenance. These services are excluded even if performed by a podiatrist.\n\n<strong>The exception for foot care:</strong> Medicare does cover foot care that is medically necessary. If you have diabetes, peripheral vascular disease, or another condition that makes routine foot care medically necessary, Medicare may cover it. Your doctor must document the medical necessity.\n\n<strong>Cosmetic surgery:</strong> Medicare does not cover cosmetic surgery or procedures performed to improve appearance. This includes facelifts, liposuction, hair transplants, and similar elective procedures.\n\n<strong>The exception for reconstructive surgery:</strong> Medicare covers surgery to correct deformities caused by injury, disease, or congenital abnormality. Breast reconstruction after a mastectomy is covered. Surgery to correct a functional impairment (such as eyelid surgery that impairs vision) may be covered if medical necessity is documented.",
    },
    {
      type: "section" as const,
      heading: "6. Care Outside the United States",
      content:
        "Original Medicare generally does not cover health care services received outside the United States. This is a significant concern for beneficiaries who travel internationally or who spend time in Canada or Mexico.\n\n<strong>The three narrow exceptions:</strong>\n\n<ul><li><strong>Canada border crossing:</strong> If you are in the U.S. and need emergency care, and a Canadian hospital is closer than a U.S. hospital, Medicare may cover the care.</li><li><strong>Mexico border crossing:</strong> The same rule applies for Mexico if you live closer to a Mexican hospital than a U.S. hospital.</li><li><strong>Travel through Canada:</strong> If you are traveling through Canada by the most direct route between Alaska and another U.S. state and need emergency care, Medicare may cover it.</li></ul>\n\n<strong>Outside these exceptions:</strong> If you travel to Europe, the Caribbean, Central America, or anywhere else outside the U.S., Medicare provides no coverage. You are responsible for all medical costs.\n\n<strong>Options to fill this gap:</strong>\n\n<ul><li><strong>Medigap Plans C, D, F, G, M, and N:</strong> These plans include a foreign travel emergency benefit that covers 80% of emergency care costs outside the U.S. after a $250 deductible, up to a $50,000 lifetime maximum.</li><li><strong>Travel insurance:</strong> Standalone travel insurance policies can provide comprehensive international medical coverage.</li><li><strong>Medicare Advantage:</strong> Most MA plans do not cover care outside the U.S. beyond the same narrow exceptions as Original Medicare.</li></ul>\n\nFor more on Medigap coverage options, see our guide on <a href='/blog/pros-and-cons-of-florida-medicare-supplement-plans' class='text-[#1a3fa8] underline underline-offset-2'>pros and cons of Florida Medicare supplement plans</a>.",
    },
    {
      type: "summary" as const,
      heading: "The Bottom Line on Medicare Coverage Gaps",
      content:
        "Medicare has significant gaps that require advance planning. Here is a quick reference:\n\n<ul><li><strong>Long-term custodial care</strong> is the biggest gap; consider long-term care insurance or Medicaid planning</li><li><strong>Dental, vision, and hearing</strong> are excluded from Original Medicare; Medicare Advantage plans often include these benefits</li><li><strong>Routine foot care</strong> is excluded unless medically necessary due to a documented condition</li><li><strong>Cosmetic surgery</strong> is excluded; reconstructive surgery after injury or disease is covered</li><li><strong>International care</strong> is generally not covered; Medigap Plans C, D, F, G, M, and N include a foreign travel emergency benefit</li><li><strong>Medigap and Medicare Advantage</strong> can fill many of these gaps, but neither covers long-term custodial care</li></ul>\n\nUnderstanding these gaps before you enroll allows you to choose the right combination of coverage to protect yourself. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> with a licensed specialist to review your options.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does Medicare cover dental implants?",
          answer:
            "No. Original Medicare does not cover dental implants. Some Medicare Advantage plans include dental benefits that may cover implants, but coverage varies widely by plan. Check the plan's Evidence of Coverage document for specific dental benefits.",
        },
        {
          question: "Does Medicare cover hearing aids in 2026?",
          answer:
            "Original Medicare does not cover hearing aids. Many Medicare Advantage plans include hearing benefits with an allowance toward hearing aids. Over-the-counter hearing aids approved by the FDA are also available since 2022 at lower prices than prescription devices.",
        },
        {
          question: "Does Medicare cover nursing home care?",
          answer:
            "Medicare Part A covers skilled nursing facility care for up to 100 days following a qualifying hospital stay, but only for skilled medical needs. Medicare does not cover custodial care (help with daily activities) in a nursing home, which is the most common reason people need nursing home care.",
        },
        {
          question: "Does Medicare cover eye exams?",
          answer:
            "Original Medicare covers eye exams for the diagnosis and treatment of eye diseases such as glaucoma, macular degeneration, and diabetic retinopathy. It does not cover routine eye exams for eyeglasses or contact lenses.",
        },
        {
          question: "What happens if I need medical care while traveling abroad?",
          answer:
            "Original Medicare generally does not cover care outside the United States. Medigap Plans C, D, F, G, M, and N include a foreign travel emergency benefit covering 80% of emergency care costs abroad after a $250 deductible, up to a $50,000 lifetime maximum. Travel insurance is another option for comprehensive international coverage.",
        },
        {
          question: "Does Medicare cover cosmetic surgery?",
          answer:
            "No. Medicare does not cover elective cosmetic surgery. However, it does cover reconstructive surgery to correct deformities caused by injury, disease, or congenital abnormality, and surgery to correct a functional impairment when medical necessity is documented.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "Value-Added Benefits Through Medicare Advantage in 2026",
      href: "/blog/value-added-benefits-through-medicare-advantage",
      category: "Plans" as const,
    },
    {
      title: "Pros and Cons of Florida Medicare Supplement Plans 2026",
      href: "/blog/pros-and-cons-of-florida-medicare-supplement-plans",
      category: "Plans" as const,
    },
    {
      title: "Can I Have Both Medicare and Medicaid?",
      href: "/blog/can-i-have-both-medicare-and-medicaid",
      category: "Coverage" as const,
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
