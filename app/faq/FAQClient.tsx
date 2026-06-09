"use client";

/**
 * /faq
 * FAQ Center: categorized accordion Q&A with live search filter
 * Design: Navy/gold MIP brand
 * Rules: No dashes used as punctuation, 2026 figures, Brandon-first, Greg photo CTA
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  ArrowRight,
  Star,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

interface FAQ {
  q: string;
  a: string;
  link?: { label: string; href: string };
}

interface Category {
  heading: string;
  faqs: FAQ[];
}

const categories: Category[] = [
  {
    heading: "Eligibility and Enrollment",
    faqs: [
      {
        q: "When am I eligible for Medicare?",
        a: "Most people become eligible for Medicare at age 65. You may also qualify before 65 if you have received Social Security Disability Insurance (SSDI) for 24 months, or if you have end-stage renal disease (ESRD) or ALS (Lou Gehrig's disease).",
        link: { label: "Am I Eligible for Medicare?", href: "/am-i-eligible" },
      },
      {
        q: "When should I enroll in Medicare?",
        a: "Your Initial Enrollment Period (IEP) is a 7-month window: 3 months before the month you turn 65, the month you turn 65, and 3 months after. Enrolling during the first 3 months of your IEP ensures your coverage starts on the first day of your birthday month. Enrolling late can result in permanent premium penalties.",
        link: { label: "Enrollment Timeline", href: "/enrollment-timeline" },
      },
      {
        q: "Do I have to enroll in Medicare at 65 if I am still working?",
        a: "Not necessarily. If you or your spouse has employer-sponsored health coverage through a current employer with 20 or more employees, you can delay Medicare enrollment without penalty. However, you must enroll within 8 months of losing that coverage. If your employer has fewer than 20 employees, Medicare becomes your primary insurance at 65 and you should enroll.",
        link: { label: "Working Past 65 Guide", href: "/blog/working-past-65" },
      },
      {
        q: "How do I enroll in Medicare if I am not collecting Social Security?",
        a: "If you are not yet receiving Social Security benefits, Medicare will not automatically enroll you. You must sign up yourself through Social Security online at ssa.gov, by calling 1-800-772-1213, or by visiting your local Social Security office.",
        link: { label: "Medicare Without Social Security", href: "/blog/medicare-without-social-security" },
      },
      {
        q: "What is the Annual Enrollment Period?",
        a: "The Annual Enrollment Period (AEP) runs from October 15 through December 7 each year. During this period, you can switch between Original Medicare and Medicare Advantage, change Medicare Advantage plans, or change your Part D drug plan. Changes take effect January 1 of the following year.",
        link: { label: "Enrollment Timeline", href: "/enrollment-timeline" },
      },
      {
        q: "What is a Special Enrollment Period?",
        a: "A Special Enrollment Period (SEP) allows you to enroll in or change Medicare coverage outside of standard enrollment windows due to a qualifying life event, such as losing employer coverage, moving out of a plan's service area, or gaining eligibility for Medicaid.",
      },
    ],
  },
  {
    heading: "Medicare Parts A and B",
    faqs: [
      {
        q: "What does Medicare Part A cover?",
        a: "Medicare Part A covers inpatient hospital care, skilled nursing facility care (after a qualifying hospital stay), hospice care, and home health services. Most people pay no premium for Part A if they or their spouse paid Medicare taxes for at least 10 years.",
        link: { label: "Medicare Part A Guide", href: "/medicare-part-a" },
      },
      {
        q: "What does Medicare Part B cover?",
        a: "Medicare Part B covers outpatient medical services including doctor visits, preventive care, lab tests, durable medical equipment, mental health services, and physical therapy. The standard Part B premium in 2026 is $202.90 per month.",
        link: { label: "Medicare Part B Guide", href: "/medicare-part-b" },
      },
      {
        q: "What is the Medicare Part B deductible in 2026?",
        a: "The Medicare Part B deductible in 2026 is $283. After you meet this deductible, Medicare pays 80% of covered services and you pay the remaining 20% coinsurance.",
      },
      {
        q: "What is the Medicare Part A deductible in 2026?",
        a: "The Medicare Part A inpatient hospital deductible in 2026 is $1,736 per benefit period. This covers your first 60 days of inpatient hospital care. Days 61 through 90 require a daily coinsurance of $422, and days 91 through 150 (lifetime reserve days) require $844 per day.",
      },
      {
        q: "What is IRMAA?",
        a: "IRMAA stands for Income-Related Monthly Adjustment Amount. If your income exceeds certain thresholds, you pay a higher Part B and Part D premium. IRMAA is based on your income from 2 years prior. In 2026, the surcharge begins for individuals with income above $109,000 and couples above $218,000.",
      },
    ],
  },
  {
    heading: "Medicare Advantage (Part C)",
    faqs: [
      {
        q: "What is Medicare Advantage?",
        a: "Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies approved by Medicare. Plans must cover everything Original Medicare covers, but most also include prescription drug coverage, dental, vision, and hearing benefits. You pay a monthly premium to the plan in addition to your Part B premium.",
        link: { label: "Original Medicare vs. Medicare Advantage", href: "/original-vs-advantage" },
      },
      {
        q: "What is the difference between an HMO and a PPO Medicare Advantage plan?",
        a: "HMO plans require you to use in-network providers and typically require referrals to see specialists. PPO plans allow you to see out-of-network providers at a higher cost and generally do not require referrals. HMOs tend to have lower premiums; PPOs offer more flexibility.",
        link: { label: "Medicare HMO Plans", href: "/hmos" },
      },
      {
        q: "Can I switch from Medicare Advantage back to Original Medicare?",
        a: "Yes. You can switch during the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). Be aware that if you switch back to Original Medicare after your initial enrollment, you may not be able to get a Medigap plan without medical underwriting in most states.",
      },
      {
        q: "What is a Medicare Special Needs Plan (SNP)?",
        a: "SNPs are a type of Medicare Advantage plan designed for people with specific chronic conditions (C-SNP), those who are dual-eligible for Medicare and Medicaid (D-SNP), or those living in certain institutions (I-SNP). They offer benefits tailored to the specific needs of their target population.",
        link: { label: "Medicare SNP Plans", href: "/medicare-snp-plans" },
      },
    ],
  },
  {
    heading: "Medigap (Medicare Supplement)",
    faqs: [
      {
        q: "What is a Medigap plan?",
        a: "A Medigap plan (also called Medicare Supplement Insurance) is a private insurance policy that helps pay the cost-sharing gaps in Original Medicare, such as deductibles, coinsurance, and copayments. Medigap plans are standardized by letter (A, B, C, D, F, G, K, L, M, N) and sold by private insurers.",
        link: { label: "Do I Need a Medigap Plan?", href: "/do-i-need-a-supplement" },
      },
      {
        q: "What is the best Medigap plan?",
        a: "Plan G is the most comprehensive Medigap plan available to new Medicare enrollees (Plan F is no longer available to those who became eligible after January 1, 2020). Plan G covers the Part A deductible, Part A coinsurance, Part B coinsurance, skilled nursing facility coinsurance, and foreign travel emergency care. You pay only the Part B deductible of $283 per year out of pocket.",
        link: { label: "Why Choose Medigap Plan G?", href: "/blog/why-choose-medigap-plan-g" },
      },
      {
        q: "When is the best time to buy a Medigap plan?",
        a: "The best time to buy a Medigap plan is during your 6-month Medigap Open Enrollment Period, which begins the month you are both 65 or older and enrolled in Part B. During this window, insurers cannot deny you coverage or charge you more due to pre-existing conditions. After this window, you may face medical underwriting.",
      },
      {
        q: "Can I have both Medicare Advantage and a Medigap plan?",
        a: "No. It is illegal for an insurer to sell you a Medigap policy if you are enrolled in a Medicare Advantage plan. Medigap plans only work with Original Medicare (Parts A and B).",
      },
    ],
  },
  {
    heading: "Prescription Drug Coverage (Part D)",
    faqs: [
      {
        q: "What is Medicare Part D?",
        a: "Medicare Part D provides prescription drug coverage. It is offered through private insurance companies approved by Medicare. You can get Part D as a standalone plan (if you have Original Medicare) or as part of a Medicare Advantage plan that includes drug coverage (MAPD).",
        link: { label: "Understanding Part D", href: "/understanding-part-d" },
      },
      {
        q: "What is the Medicare Part D deductible in 2026?",
        a: "The maximum Part D deductible in 2026 is $590. Not all plans charge the full deductible, and some plans waive it for certain drug tiers.",
      },
      {
        q: "What is the Medicare Part D out-of-pocket cap in 2026?",
        a: "Starting in 2025 and continuing in 2026, there is a $2,000 annual out-of-pocket cap on Part D drug costs. Once you reach this cap, you pay $0 for covered drugs for the rest of the year. This is a significant improvement from prior years.",
      },
      {
        q: "What is a formulary?",
        a: "A formulary is the list of prescription drugs covered by a Part D or Medicare Advantage plan. Drugs are organized into tiers, with lower tiers generally having lower copays. Always check that your medications are on a plan's formulary before enrolling.",
      },
      {
        q: "What is the Part D late enrollment penalty?",
        a: "If you go 63 or more consecutive days without creditable prescription drug coverage after your Initial Enrollment Period ends, you may owe a late enrollment penalty. The penalty is 1% of the national base beneficiary premium for each month you went without coverage, added permanently to your monthly Part D premium.",
      },
    ],
  },
  {
    heading: "Costs and Savings",
    faqs: [
      {
        q: "What are the Medicare costs in 2026?",
        a: "Key 2026 Medicare figures: Part B premium $202.90/month, Part B deductible $283/year, Part A deductible $1,736/benefit period, Part D out-of-pocket cap $2,000/year, SNF coinsurance (days 21-100) $212/day.",
        link: { label: "Medicare Costs at a Glance", href: "/costs-at-a-glance" },
      },
      {
        q: "What is the Medicare Savings Program?",
        a: "Medicare Savings Programs are state-administered programs that help people with limited income and resources pay Medicare premiums, deductibles, and coinsurance. There are four levels: Qualified Medicare Beneficiary (QMB), Specified Low-Income Medicare Beneficiary (SLMB), Qualifying Individual (QI), and Qualified Disabled and Working Individuals (QDWI).",
      },
      {
        q: "What is Extra Help for Part D?",
        a: "Extra Help (also called the Low Income Subsidy or LIS) is a federal program that helps people with limited income pay Part D premiums, deductibles, and copayments. If you qualify, you may pay little or nothing for your prescription drugs.",
      },
      {
        q: "How can I reduce my Medicare costs?",
        a: "Strategies to reduce Medicare costs include: enrolling during your Initial Enrollment Period to avoid late penalties, choosing a Medigap plan to cap your out-of-pocket exposure, comparing Part D plans annually during AEP, using generic drugs when available, and applying for Medicare Savings Programs or Extra Help if you have limited income.",
        link: { label: "How to Maximize Your Medicare Benefits", href: "/maximize-benefits" },
      },
    ],
  },
  {
    heading: "Coverage Questions",
    faqs: [
      {
        q: "Does Medicare cover dental care?",
        a: "Original Medicare does not cover routine dental care such as cleanings, fillings, or dentures. However, many Medicare Advantage plans include dental benefits. Some standalone dental plans are also available to Medicare beneficiaries.",
        link: { label: "Does Medicare Cover Dental?", href: "/coverage/dental" },
      },
      {
        q: "Does Medicare cover vision care?",
        a: "Original Medicare does not cover routine eye exams or eyeglasses, except after cataract surgery. Medicare Advantage plans often include vision benefits. Medicare does cover treatment for eye diseases such as glaucoma and macular degeneration.",
        link: { label: "Does Medicare Cover Vision?", href: "/coverage/vision" },
      },
      {
        q: "Does Medicare cover hearing aids?",
        a: "Original Medicare does not cover hearing aids or routine hearing exams. Some Medicare Advantage plans include hearing aid benefits with an annual allowance. Costs for hearing aids can range from $1,000 to $6,000 or more per pair.",
        link: { label: "Does Medicare Cover Hearing Aids?", href: "/coverage/hearing-aids" },
      },
      {
        q: "Does Medicare cover physical therapy?",
        a: "Yes. Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology with no annual visit cap. You pay 20% coinsurance after the Part B deductible.",
        link: { label: "Does Medicare Cover Physical Therapy?", href: "/coverage/physical-therapy" },
      },
      {
        q: "Does Medicare cover skilled nursing facility care?",
        a: "Yes, with conditions. Medicare Part A covers up to 100 days of SNF care per benefit period after a qualifying 3-day inpatient hospital stay. Days 1 through 20 are fully covered. Days 21 through 100 require a daily coinsurance of $212 in 2026.",
        link: { label: "Does Medicare Cover Skilled Nursing?", href: "/coverage/skilled-nursing" },
      },
    ],
  },
];

export default function FAQClient() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [query]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#0d2d6b] text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-6 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">FAQ Center</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Quick Answers
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Medicare FAQ Center
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Answers to the most common Medicare questions, organized by topic. Use the search box to find a specific question quickly.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5a800]"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10">
              {/* Main */}
              <div className="space-y-12">
                {filtered.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    <p className="text-lg font-semibold mb-2">No results found</p>
                    <p className="text-sm">Try a different search term or browse the categories below.</p>
                  </div>
                ) : (
                  filtered.map((cat) => (
                    <div key={cat.heading}>
                      <h2
                        className="text-xl font-bold text-[#0d2d6b] mb-4 border-b border-gray-100 pb-3"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {cat.heading}
                      </h2>
                      <div className="space-y-2">
                        {cat.faqs.map((faq) => {
                          const key = `${cat.heading}::${faq.q}`;
                          const isOpen = openItem === key;
                          return (
                            <div key={faq.q} className="border border-gray-200 rounded-2xl overflow-hidden">
                              <button
                                onClick={() => setOpenItem(isOpen ? null : key)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={isOpen}
                              >
                                <span className="font-semibold text-gray-900 pr-4 text-sm leading-snug">{faq.q}</span>
                                {isOpen
                                  ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                }
                              </button>
                              {isOpen && (
                                <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{faq.a}</p>
                                  {faq.link && (
                                    <Link
                                      href={faq.link.href}
                                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0d2d6b] underline hover:text-[#0a2558]"
                                    >
                                      <ArrowRight className="w-3.5 h-3.5" />
                                      {faq.link.label}
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* Agent CTA */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f5a800]">
                        <img src={GREG_PHOTO} alt="Greg Wohl" className="w-full h-full object-cover object-top" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Greg Wohl</p>
                        <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#f5a800] text-[#f5a800]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Can't find your answer? Greg Wohl is a licensed Medicare advisor serving Brandon and Hillsborough County. Call for a free consultation.
                    </p>
                    <a
                      href="tel:+18137428888"
                      className="flex items-center justify-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-3 rounded-xl transition-colors w-full mb-3 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      (813) 742-8888
                    </a>
                    <Link
                      href="/medicare-quiz"
                      className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2.5 rounded-xl transition-colors w-full text-sm"
                    >
                      Take the Medicare Quiz
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Related Resources */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Related Resources</p>
                    <div className="space-y-2">
                      {[
                        { label: "In-Depth Guides", href: "/guides" },
                        { label: "Coverage Q&A Hub", href: "/coverage-qa" },
                        { label: "Medicare Costs at a Glance", href: "/costs-at-a-glance" },
                        { label: "Plan Comparison Tool", href: "/plan-comparison" },
                        { label: "Enrollment Calculator", href: "/enrollment-calculator" },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d2d6b] hover:font-medium transition-colors py-1 border-b border-gray-100 last:border-0"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#f5a800] flex-shrink-0" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0d2d6b] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Still Have Questions? Talk to a Local Expert.
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Greg Wohl is a licensed Medicare advisor serving Brandon, Riverview, Valrico, and Hillsborough County. Call for a free, no-pressure consultation.
            </p>
            <a
              href="tel:+18137428888"
              className="inline-flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (813) 742-8888
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
