"use client";

/* ==========================================================================
   DentalCoverageClient — /coverage/dental
   Does Medicare Cover Dental Care?
   Design: MIP brand — navy/gold, editorial two-column layout
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
    status: "partial",
    detail:
      "Very limited. Only covers dental care that is medically necessary as part of a covered procedure — e.g., jaw reconstruction after an accident, or tooth extraction before radiation therapy for jaw cancer. Routine cleanings, fillings, extractions, and dentures are not covered.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    status: "covered",
    detail:
      "Most Medicare Advantage plans include some dental benefits as an extra benefit. Basic plans cover preventive care (exams, cleanings, X-rays). More comprehensive plans may cover fillings, extractions, root canals, and dentures. Annual benefit limits typically range from $1,000–$2,500.",
  },
  {
    plan: "Medicare Supplement (Medigap)",
    status: "not",
    detail:
      "Medigap plans do not add dental coverage. They only cover gaps in Original Medicare costs — and since Original Medicare does not cover dental, Medigap does not either. You would need a separate standalone dental plan.",
  },
  {
    plan: "Standalone Dental Plan",
    status: "covered",
    detail:
      "You can purchase a standalone dental insurance plan to complement Original Medicare. Premiums typically range from $20–$50/month. These are separate from Medicare and available through private insurers.",
  },
];

const SECTIONS: { heading: string; content: string }[] = [
  {
    heading: "What Original Medicare Covers",
    content:
      "Original Medicare Part A may cover dental services that are an integral part of a covered inpatient procedure. Examples include jaw reconstruction following an accidental injury, or tooth extraction required before radiation treatment for jaw cancer. Part B may cover dental services needed to treat a medical condition — for instance, oral examinations before kidney transplants or heart valve replacements. Outside of these narrow exceptions, routine dental care is explicitly excluded from Medicare coverage.",
  },
  {
    heading: "What Medicare Advantage Covers",
    content:
      "The majority of Medicare Advantage plans offer dental benefits as an extra benefit beyond Original Medicare. Coverage varies significantly by plan and insurer. Preventive dental benefits (exams, cleanings, X-rays) are the most common. Comprehensive dental benefits — covering basic restorative care like fillings and extractions — are included in many plans. Major dental services (crowns, bridges, dentures, implants) are available in some plans but often with higher cost-sharing and annual limits. Always verify your specific plan's dental benefits and network dentists before enrolling.",
  },
  {
    heading: "Your Options for Dental Coverage",
    content:
      "If you have Original Medicare and want dental coverage, you have three main options: (1) Switch to a Medicare Advantage plan that includes dental benefits during your next enrollment period. (2) Purchase a standalone dental insurance plan — available year-round from private insurers, typically $20–$50/month. (3) Use a dental discount plan, which is not insurance but provides reduced rates at participating dentists for an annual membership fee.",
  },
];

const TIPS: string[] = [
  "Compare Medicare Advantage plans during Annual Enrollment (Oct 15 – Dec 7) to find one with strong dental benefits in your area.",
  "Standalone dental plans are available year-round — you do not need to wait for an enrollment period.",
  "Ask your dentist if they accept Medicare Advantage dental benefits before switching plans.",
  "Some community health centers offer sliding-scale dental care regardless of insurance status.",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Does Medicare cover dentures?",
    a: "Original Medicare does not cover dentures. Some Medicare Advantage plans include denture coverage, but limits and cost-sharing vary widely. Check your specific plan's benefits.",
  },
  {
    q: "Does Medicare cover emergency dental care?",
    a: "Original Medicare may cover emergency dental care if it's medically necessary and related to a covered condition. For example, if you need a tooth extracted before a covered surgery. Routine emergency dental visits are not covered.",
  },
  {
    q: "Can I add dental coverage to my existing Medicare?",
    a: "You cannot add dental coverage to Original Medicare. Your options are to switch to a Medicare Advantage plan with dental benefits (during an enrollment period) or purchase a standalone dental plan.",
  },
  {
    q: "Does Medicare cover dental implants?",
    a: "Original Medicare does not cover dental implants. Some Medicare Advantage plans cover implants, but this is less common and often subject to annual limits. Check your plan's Evidence of Coverage document.",
  },
];

const RELATED_LINKS = [
  { label: "Original vs. Medicare Advantage", href: "/original-vs-advantage", desc: "Compare the two main Medicare paths" },
  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "Learn about Medigap coverage gaps" },
  { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2025 premiums and deductibles" },
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

export default function DentalCoverageClient() {
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
            <span className="text-white/70">Dental & Vision</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Dental & Vision
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Does Medicare Cover Dental Care?
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              Original Medicare covers almost no routine dental care. Here's what is and isn't covered — and your options for filling the gap.
            </p>

            {/* Quick Answer Banner */}
            <div
              className="flex items-start gap-3 px-5 py-4 rounded-xl border"
              style={{ background: qs.bg, borderColor: qs.border }}
            >
              <qs.Icon className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: qs.color }}>
                  Quick Answer — {qs.label}
                </p>
                <p className="text-sm font-semibold leading-snug" style={{ color: qs.color }}>
                  Original Medicare does NOT cover routine dental care. Medicare Advantage plans often include dental benefits.
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
                <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                  {section.heading}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
              </section>
            ))}

            {/* Tips */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={18} className="text-[#1a3fa8]" />
                <h2 className="text-base font-bold text-[#1a3fa8]" style={{ fontFamily: "'Merriweather', serif" }}>
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
              <h2 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQ.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>

            {/* Mobile CTA */}
            <section className="lg:hidden rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                Still Have Questions?
              </h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                A licensed MIP agent can explain your coverage options and help you find a plan that fills the gaps.
              </p>
              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#f5a800] text-[#1a1a1a] font-bold text-sm hover:bg-amber-400 transition-colors w-full"
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
              <div className="rounded-2xl p-5 text-white" style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Still Have Questions?
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  A licensed MIP agent can explain your coverage options and help you find a plan that fills the gaps.
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
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Related Pages</h3>
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
                <h3 className="text-sm font-bold text-gray-900 mb-2">Browse More Coverage Topics</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  See what Medicare covers across dental, vision, mental health, home care, and more.
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
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-xs mb-2">Free Plan Comparison</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                Want dental coverage with your Medicare plan?
              </h2>
              <p className="text-white/80 text-base max-w-xl leading-relaxed">
                We compare Medicare Advantage plans in your ZIP code side-by-side — including dental, vision, and hearing benefits — at no cost to you.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-amber-400 text-[#1a1a1a] font-bold px-8 py-4 rounded-xl transition-colors text-base whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                Call 813-699-5559
              </a>
              <p className="text-white/50 text-xs text-center">BBB A+ Rated · Brandon, FL · Free Service</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
