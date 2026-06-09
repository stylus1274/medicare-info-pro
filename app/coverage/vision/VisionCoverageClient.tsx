"use client";

/* ==========================================================================
   VisionCoverageClient: /coverage/vision
   Does Medicare Cover Vision and Eye Exams?
   Design: MIP brand: navy/gold, editorial two-column layout
   No em dashes used anywhere in this file.
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

// ---- Types ------------------------------------------------------------------

type CoverageStatus = "covered" | "partial" | "not";

const STATUS_CONFIG: Record<
  CoverageStatus,
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    Icon: React.FC<{ className?: string }>;
  }
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

// ---- Data -------------------------------------------------------------------

const PLAN_ROWS: { plan: string; status: CoverageStatus; detail: string }[] = [
  {
    plan: "Original Medicare (Parts A and B)",
    status: "partial",
    detail:
      "Covers medically necessary eye care only. Part B covers annual eye exams for diabetic retinopathy (for people with diabetes), glaucoma tests for high-risk individuals, and cataract surgery including one pair of corrective lenses after surgery. Routine eye exams and glasses are not covered.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    status: "covered",
    detail:
      "Most Medicare Advantage plans include routine vision benefits as an extra benefit. Typically covers one routine eye exam per year and an allowance toward glasses or contact lenses, usually $100 to $300 per year. Some plans offer additional discounts through vision networks like EyeMed or VSP.",
  },
  {
    plan: "Medicare Supplement (Medigap)",
    status: "not",
    detail:
      "Medigap plans do not add routine vision coverage. They cover cost-sharing gaps in Original Medicare, so they would cover your 20% coinsurance for medically necessary eye procedures, but not routine exams or glasses.",
  },
  {
    plan: "Standalone Vision Plan",
    status: "covered",
    detail:
      "Standalone vision insurance plans are available from private insurers, typically $10 to $25 per month. These cover routine exams and provide allowances for frames and lenses. Vision discount programs (not insurance) are also available for reduced rates at participating providers.",
  },
];

const SECTIONS: { heading: string; content: string }[] = [
  {
    heading: "What Original Medicare Covers",
    content:
      "Original Medicare Part B covers eye care in specific medical circumstances. Annual dilated eye exams for diabetic retinopathy are covered for people with diabetes. Glaucoma tests once every 12 months are covered for people at high risk, including those with diabetes, a family history of glaucoma, African Americans age 50 and older, or Hispanic Americans age 65 and older. Cataract surgery is covered, including one pair of eyeglasses or contact lenses after each cataract surgery. Macular degeneration treatment, including injections, is covered when medically necessary. All other routine eye care, including standard eye exams, glasses, and contacts, is not covered by Original Medicare.",
  },
  {
    heading: "What Medicare Advantage Covers",
    content:
      "Most Medicare Advantage plans offer routine vision benefits beyond Original Medicare. A typical vision benefit includes one routine comprehensive eye exam per year and an annual allowance toward eyeglasses frames and lenses or contact lenses, usually $100 to $300. Many plans partner with vision networks such as EyeMed, VSP, or Davis Vision, giving you access to a wide network of optometrists and optical retailers. Coverage details vary significantly by plan. Always check the Evidence of Coverage document for your specific plan.",
  },
  {
    heading: "Low Vision Aids and Services",
    content:
      "If you have significant vision impairment, Original Medicare Part B may cover low vision aids and services when prescribed by a doctor as medically necessary. This can include certain optical aids used to treat vision loss from conditions like macular degeneration. However, standard eyeglasses and contact lenses for refractive errors such as nearsightedness, farsightedness, and astigmatism are not covered.",
  },
];

const TIPS: string[] = [
  "If you have diabetes, make sure you are getting your annual diabetic retinopathy exam. It is covered by Part B.",
  "If you are at high risk for glaucoma, your annual glaucoma test is covered. Ask your doctor.",
  "Compare Medicare Advantage plans during Annual Enrollment to find one with strong vision benefits in your area.",
  "Retail chains like Costco, Walmart, and Sam's Club offer significantly lower prices on glasses even without vision insurance.",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Does Medicare cover LASIK surgery?",
    a: "No. LASIK and other refractive surgeries are considered elective and are not covered by Original Medicare or Medicare Advantage.",
  },
  {
    q: "Does Medicare cover cataract surgery?",
    a: "Yes. Original Medicare Part B covers cataract surgery, including standard intraocular lens implants and one pair of corrective lenses (glasses or contacts) after each surgery. Premium lens upgrades such as multifocal lenses may have an additional out-of-pocket cost.",
  },
  {
    q: "Does Medicare cover contact lenses?",
    a: "Only in one specific case: after cataract surgery, Medicare covers one pair of contact lenses as an alternative to eyeglasses. Routine contact lens prescriptions and supplies are not covered.",
  },
  {
    q: "How do I get vision coverage with Original Medicare?",
    a: "Your options are to switch to a Medicare Advantage plan with vision benefits during an enrollment period, or purchase a standalone vision insurance plan, which is available year-round and typically costs $10 to $25 per month.",
  },
];

const RELATED_LINKS = [
  {
    label: "Does Medicare Cover Dental?",
    href: "/coverage/dental",
    desc: "Routine dental is also excluded from Original Medicare",
  },
  {
    label: "Original vs. Medicare Advantage",
    href: "/original-vs-advantage",
    desc: "Compare the two main Medicare paths",
  },
  {
    label: "Costs at a Glance",
    href: "/costs-at-a-glance",
    desc: "2025 premiums and deductibles",
  },
  {
    label: "Coverage Q&A Hub",
    href: "/coverage-qa",
    desc: "Browse all coverage questions",
  },
];

// ---- FAQ Accordion ----------------------------------------------------------

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
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
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

// ---- Page -------------------------------------------------------------------

export default function VisionCoverageClient() {
  const qs = STATUS_CONFIG["not"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs text-white/50 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/coverage-qa" className="hover:text-white/80 transition-colors">
              Coverage Q&A
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Dental and Vision</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Dental and Vision
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Does Medicare Cover Vision and Eye Exams?
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              Original Medicare covers very little routine vision care. Here is exactly what is
              covered, what is not, and how to fill the gap.
            </p>

            {/* Quick Answer Banner */}
            <div
              className="flex items-start gap-3 px-5 py-4 rounded-xl border"
              style={{ background: qs.bg, borderColor: qs.border }}
            >
              <qs.Icon className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: qs.color }}
                >
                  Quick Answer: {qs.label}
                </p>
                <p className="text-sm font-semibold leading-snug" style={{ color: qs.color }}>
                  Original Medicare does NOT cover routine eye exams or glasses. It does cover
                  medically necessary eye care and cataract surgery.
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
              <h2
                className="text-xl font-bold text-gray-900 mb-5"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Coverage by Plan Type
              </h2>
              <div className="space-y-4">
                {PLAN_ROWS.map((row) => {
                  const cfg = STATUS_CONFIG[row.status];
                  return (
                    <div
                      key={row.plan}
                      className="rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
                        <span className="text-sm font-bold text-gray-800">{row.plan}</span>
                        <span
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                          style={{ background: cfg.bg, color: cfg.color }}
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

            {/* Detail Sections */}
            {SECTIONS.map((section) => (
              <section key={section.heading}>
                <h2
                  className="text-lg font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {section.heading}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
              </section>
            ))}

            {/* Related Coverage Callout */}
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2
                className="text-base font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Also Missing from Original Medicare: Dental Coverage
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Like vision, routine dental care is excluded from Original Medicare. Medicare
                Advantage plans often bundle dental, vision, and hearing benefits together. If
                you are considering switching to Medicare Advantage for vision coverage, it is
                worth comparing dental benefits at the same time.
              </p>
              <Link
                href="/coverage/dental"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1a3fa8] hover:gap-3 transition-all"
              >
                Does Medicare Cover Dental? <ArrowRight size={14} />
              </Link>
            </section>

            {/* Tips */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={18} className="text-[#1a3fa8]" />
                <h2
                  className="text-base font-bold text-[#1a3fa8]"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Practical Tips
                </h2>
              </div>
              <ul className="space-y-3">
                {TIPS.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1a3fa8] flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2
                className="text-lg font-bold text-gray-900 mb-5"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQ.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>

            {/* Mobile CTA */}
            <section
              className="lg:hidden rounded-2xl p-6 text-white"
              style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
            >
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Still Have Questions?
              </h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                A licensed MIP agent can explain your coverage options and help you find a plan
                that includes vision benefits.
              </p>
              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#f5a800] text-white font-bold text-sm hover:bg-amber-400 transition-colors w-full"
              >
                <Phone size={15} />
                Call 813-699-5559
              </a>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">

              {/* Agent CTA */}
              <div
                className="rounded-2xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Still Have Questions?
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  A licensed MIP agent can explain your coverage options and help you find a plan
                  that includes vision benefits.
                </p>
                <a
                  href="tel:8136995559"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#1a3fa8] font-bold text-sm hover:bg-white/90 transition-colors w-full justify-center mb-2"
                >
                  <Phone size={15} />
                  813-699-5559
                </a>
                <Link
                  href="/medicare-quiz"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors w-full justify-center"
                >
                  Take the Quiz <ArrowRight size={13} />
                </Link>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Related Pages
                </h3>
                <ul className="space-y-3">
                  {RELATED_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-start gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <ArrowRight
                          size={14}
                          className="text-[#1a3fa8] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors">
                            {link.label}
                          </p>
                          <p className="text-xs text-gray-400">{link.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverage Hub */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  Browse More Coverage Topics
                </h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  See what Medicare covers across dental, vision, mental health, home care, and
                  more.
                </p>
                <Link
                  href="/coverage-qa"
                  className="flex items-center gap-2 text-sm font-bold text-[#1a3fa8] hover:gap-3 transition-all"
                >
                  Coverage Q&A Hub <ArrowRight size={13} />
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* CTA Band */}
      <section className="bg-[#1a3fa8] py-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-xs mb-2">
                Free Plan Comparison
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Want vision coverage with your Medicare plan?
              </h2>
              <p className="text-white/80 text-base max-w-xl leading-relaxed">
                We compare Medicare Advantage plans in your ZIP code side by side, including
                dental, vision, and hearing benefits, at no cost to you.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                Call 813-699-5559
              </a>
              <p className="text-white/50 text-xs text-center">
                BBB A+ Rated · Brandon, FL · Free Service
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
