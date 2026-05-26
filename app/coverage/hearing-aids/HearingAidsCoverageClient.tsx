"use client";

/* ==========================================================================
   HearingAidsCoverageClient -- /coverage/hearing-aids
   Does Medicare Cover Hearing Aids?
   Design: MIP brand -- navy/gold, editorial two-column layout
   No em dashes anywhere in this file.
   ========================================================================== */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Phone,
  ArrowRight,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

type CoverageStatus = "covered" | "partial" | "not";

const STATUS_CONFIG: Record<
  CoverageStatus,
  { label: string; color: string; bg: string; border: string; Icon: React.FC<{ className?: string }> }
> = {
  covered: {
    label: "Covered",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    Icon: ({ className }) => <CheckCircle size={16} className={className ?? "text-green-600"} />,
  },
  partial: {
    label: "Partial / Limited",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fcd34d",
    Icon: ({ className }) => <AlertCircle size={16} className={className ?? "text-amber-600"} />,
  },
  not: {
    label: "Not Covered",
    color: "#991b1b",
    bg: "#fee2e2",
    border: "#fca5a5",
    Icon: ({ className }) => <XCircle size={16} className={className ?? "text-red-600"} />,
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLAN_ROWS: { plan: string; status: CoverageStatus; detail: string }[] = [
  {
    plan: "Original Medicare (Parts A & B)",
    status: "not",
    detail:
      "Original Medicare does not cover hearing aids or routine hearing exams used to fit hearing aids. Part B covers diagnostic hearing and balance exams only when ordered by a physician to determine a medical diagnosis, not for the purpose of fitting a hearing aid.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    status: "partial",
    detail:
      "Many Medicare Advantage plans include hearing benefits as an extra benefit beyond Original Medicare. Coverage varies widely by plan. Some plans cover hearing exams and a fixed dollar allowance toward hearing aids (typically $500 to $2,500 per ear per year). Others offer discounts through hearing care networks. Always verify your specific plan's hearing benefits and network providers.",
  },
  {
    plan: "Medicare Supplement (Medigap)",
    status: "not",
    detail:
      "Medigap plans do not add hearing aid coverage. They only fill gaps in Original Medicare costs. Since Original Medicare excludes hearing aids, Medigap provides no benefit here. You would need a Medicare Advantage plan or a standalone hearing benefit to get coverage.",
  },
  {
    plan: "Standalone Hearing Benefit Plans",
    status: "covered",
    detail:
      "Standalone hearing benefit plans are available from private insurers and hearing care networks such as TruHearing, HearUSA, and Amplifon. These are not insurance but provide discounted hearing exams and hearing aids at participating providers. Annual membership fees typically range from $0 to $80.",
  },
];

const SECTIONS: { heading: string; content: string }[] = [
  {
    heading: "What Original Medicare Covers",
    content:
      "Original Medicare Part B covers diagnostic hearing and balance exams when a physician orders them to diagnose a medical condition. The key distinction is purpose: if the exam is ordered to determine whether you have a medical condition affecting your hearing, Part B may cover it. If the exam is ordered to fit you for a hearing aid, it is not covered. Hearing aids themselves, and the exams specifically to fit them, are explicitly excluded from Original Medicare coverage under Section 1862(a)(7) of the Social Security Act.",
  },
  {
    heading: "What Medicare Advantage Covers",
    content:
      "Medicare Advantage plans are required to cover everything Original Medicare covers, but they are also permitted to offer additional benefits. Hearing coverage is one of the most common extra benefits offered. The scope of hearing coverage varies significantly between plans and insurers. Basic hearing benefits typically include one hearing exam per year and a fixed allowance toward hearing aids, often $500 to $1,000 per ear. More comprehensive plans may offer higher allowances, coverage for both ears, and access to premium hearing aid models. Some plans partner with hearing care networks to provide discounts rather than direct coverage. Review your plan's Evidence of Coverage document for exact benefit details.",
  },
  {
    heading: "Your Options for Hearing Coverage",
    content:
      "If you have Original Medicare and need hearing aids, you have several options. First, review Medicare Advantage plans during the Annual Enrollment Period (October 15 through December 7) to find one with strong hearing benefits in your area. Second, look into hearing care discount networks such as TruHearing, HearUSA, or Amplifon, which offer reduced prices on hearing exams and devices without requiring insurance. Third, check whether your state Medicaid program covers hearing aids if you qualify for both Medicare and Medicaid. Fourth, the Department of Veterans Affairs covers hearing aids for eligible veterans at no cost. For a full comparison of your Medicare plan options, see our <a href=\"/original-vs-advantage\" class=\"text-blue-700 underline hover:text-blue-900\">Original Medicare vs. Medicare Advantage guide</a>.",
  },
  {
    heading: "How Much Do Hearing Aids Cost Without Coverage?",
    content:
      "Hearing aids are among the most expensive out-of-pocket medical costs for seniors. Traditional prescription hearing aids from an audiologist typically cost $1,000 to $7,000 per pair. Over-the-counter (OTC) hearing aids, available since 2022 for adults with mild to moderate hearing loss, cost $200 to $1,500 per pair and do not require a prescription or fitting appointment. OTC hearing aids are sold at pharmacies, electronics stores, and online retailers. They are a meaningful option for people with mild hearing loss who do not qualify for or cannot afford prescription devices.",
  },
];

const TIPS: string[] = [
  "Compare Medicare Advantage plans during Annual Enrollment (Oct 15 to Dec 7) to find one with a strong hearing allowance in your ZIP code.",
  "Ask any plan you are considering whether hearing aids are covered under the plan benefit or only through a discount network, as these are very different.",
  "OTC hearing aids are now available without a prescription for mild to moderate hearing loss and cost significantly less than prescription devices.",
  "Veterans who served in the military may qualify for free hearing aids through the VA, regardless of their Medicare plan.",
  "If you have both Medicare and Medicaid (dual eligible), your state Medicaid program may cover hearing aids at little or no cost.",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Does Medicare cover hearing tests?",
    a: "Original Medicare Part B covers diagnostic hearing exams when a physician orders them to diagnose a medical condition. It does not cover hearing tests ordered specifically to fit a hearing aid. Many Medicare Advantage plans cover one routine hearing exam per year.",
  },
  {
    q: "Does Medicare Advantage cover hearing aids?",
    a: "Many Medicare Advantage plans include hearing aid benefits, but coverage varies by plan. Some plans offer a fixed dollar allowance per ear per year, while others provide discounts through hearing care networks. Always check your specific plan's Evidence of Coverage document for exact benefit details.",
  },
  {
    q: "What are OTC hearing aids and does Medicare cover them?",
    a: "Over-the-counter hearing aids became available in 2022 for adults with mild to moderate hearing loss. They do not require a prescription or audiologist fitting. Original Medicare does not cover OTC hearing aids. Some Medicare Advantage plans may include an OTC benefit allowance that can be applied toward them.",
  },
  {
    q: "Can I get hearing aids through the VA?",
    a: "Yes. The Department of Veterans Affairs covers hearing aids for eligible veterans at no cost. This benefit is available regardless of your Medicare plan. Contact your local VA medical center or call 1-800-827-1000 to determine eligibility.",
  },
  {
    q: "When can I switch to a Medicare Advantage plan with hearing coverage?",
    a: "The Annual Enrollment Period runs from October 15 through December 7 each year. Coverage begins January 1 of the following year. If you have a qualifying life event, you may also be eligible for a Special Enrollment Period outside of this window.",
  },
];

const RELATED_LINKS = [
  { label: "Does Medicare Cover Dental?", href: "/coverage/dental", desc: "Routine dental care is also excluded from Original Medicare" },
  { label: "Does Medicare Cover Vision?", href: "/coverage/vision", desc: "Routine eye exams and glasses are also not covered" },
  { label: "Original vs. Medicare Advantage", href: "/original-vs-advantage", desc: "Compare the two main Medicare paths" },
  { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2025 and 2026 premiums and deductibles" },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-gray-900 pr-4">{q}</span>
        <ChevronRight
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HearingAidsCoverageClient() {
  const qs = STATUS_CONFIG["not"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/coverage-qa" className="hover:text-white/80 transition-colors">Coverage Q&A</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Hearing</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Hearing
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Does Medicare Cover Hearing Aids?
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              Original Medicare does not cover hearing aids or routine hearing exams. Here is what is covered, what is not, and how to get hearing benefits through Medicare Advantage.
            </p>

            {/* Quick Answer Banner */}
            <div
              className="flex items-start gap-3 px-5 py-4 rounded-xl border"
              style={{ background: qs.bg, borderColor: qs.border }}
            >
              <qs.Icon className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: qs.color }}>
                  Quick Answer: {qs.label}
                </p>
                <p className="text-sm font-semibold leading-snug" style={{ color: qs.color }}>
                  Original Medicare does NOT cover hearing aids or routine hearing exams. Many Medicare Advantage plans include hearing benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Article */}
          <article className="space-y-10 min-w-0">

            {/* Plan-by-Plan Breakdown */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Coverage by Plan Type
              </h2>
              <div className="space-y-4">
                {PLAN_ROWS.map((row) => {
                  const cfg = STATUS_CONFIG[row.status];
                  return (
                    <div key={row.plan} className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
                        <span className="text-sm font-bold text-gray-800">{row.plan}</span>
                        <span
                          className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
                        >
                          <cfg.Icon />
                          {cfg.label}
                        </span>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{row.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Editorial Sections */}
            {SECTIONS.map((sec) => (
              <section key={sec.heading}>
                <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                  {sec.heading}
                </h2>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sec.content }}
                />
              </section>
            ))}

            {/* Cross-link: dental companion */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 flex items-start gap-3">
              <Info size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-900 mb-1">Also Missing from Original Medicare: Dental and Vision</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Like hearing aids, routine dental care and vision exams are also excluded from Original Medicare. Medicare Advantage plans often bundle all three benefits together.{" "}
                  <Link href="/coverage/dental" className="underline font-semibold hover:text-amber-900">Does Medicare Cover Dental?</Link>
                  {" "}and{" "}
                  <Link href="/coverage/vision" className="underline font-semibold hover:text-amber-900">Does Medicare Cover Vision?</Link>
                </p>
              </div>
            </div>

            {/* Practical Tips */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Practical Tips
              </h2>
              <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-5 space-y-3">
                {TIPS.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[0.65rem] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-blue-900 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQ.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>

            {/* Inline CTA */}
            <div className="rounded-2xl bg-[#0d1f5c] text-white px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">Not sure which plan covers hearing aids in your area?</p>
                <p className="text-sm text-white/70">A licensed Medicare specialist can compare plans available in your ZIP code at no cost to you.</p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a
                  href="tel:+18137428888"
                  className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  <Phone size={15} />
                  (813) 742-8888
                </a>
                <Link
                  href="/medicare-quiz"
                  className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  Take the Quiz
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 self-start">

            {/* Agent CTA */}
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#0d1f5c] px-5 py-4">
                <p className="text-white font-bold text-sm">Speak With a Medicare Specialist</p>
                <p className="text-white/60 text-xs mt-0.5">Free consultation, no obligation</p>
              </div>
              <div className="px-5 py-5 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl-author_kbxfzwfm.jpg" alt="Greg Wohl, Licensed Medicare Advisor" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Greg Wohl</p>
                    <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                  </div>
                </div>
                <a
                  href="tel:+18137428888"
                  className="flex items-center justify-center gap-2 w-full bg-[#0d1f5c] hover:bg-[#162a7a] text-white font-bold text-sm py-3 rounded-xl transition-colors"
                >
                  <Phone size={14} />
                  (813) 742-8888
                </a>
                <Link
                  href="/medicare-quiz"
                  className="flex items-center justify-center gap-2 w-full border border-[#0d1f5c]/20 hover:bg-[#0d1f5c]/5 text-[#0d1f5c] font-semibold text-sm py-3 rounded-xl transition-colors"
                >
                  Take the Medicare Quiz
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Related Pages */}
            <div className="rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Related Pages</p>
              <div className="space-y-3">
                {RELATED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-start gap-2 group"
                  >
                    <ArrowRight size={13} className="text-[#c9a84c] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0d1f5c] transition-colors">{link.label}</p>
                      <p className="text-xs text-gray-400 leading-snug">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Browse More */}
            <Link
              href="/coverage-qa"
              className="flex items-center justify-center gap-2 w-full border border-gray-200 hover:border-[#0d1f5c] text-gray-600 hover:text-[#0d1f5c] font-semibold text-sm py-3 rounded-xl transition-colors"
            >
              Browse All Coverage Topics
              <ArrowRight size={13} />
            </Link>

          </aside>
        </div>
      </div>

      {/* Bottom CTA Band */}
      <div className="bg-[#0d1f5c] text-white py-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Ready to Find a Plan That Covers Hearing?
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Many Medicare Advantage plans in the Tampa Bay area include hearing benefits. A local specialist can compare your options at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18137428888"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              <Phone size={16} />
              Call (813) 742-8888
            </a>
            <Link
              href="/medicare-quiz"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Take the Medicare Quiz
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
