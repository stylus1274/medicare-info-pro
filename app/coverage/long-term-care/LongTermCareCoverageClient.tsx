"use client";
/* ==========================================================================
   LongTermCareCoverageClient: /coverage/long-term-care
   Does Medicare Cover Long-Term Care? Nursing Homes, Assisted Living & More
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
  Home,
  Building2,
  Heart,
  Clock,
  DollarSign,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Coverage rows ────────────────────────────────────────────────────────────
type Status = "covered" | "partial" | "not";

const STATUS_CFG: Record<Status, { label: string; color: string; bg: string; border: string }> = {
  covered: { label: "Medicare Covers", color: "#166534", bg: "#dcfce7", border: "#86efac" },
  partial: { label: "Limited Coverage", color: "#92400e", bg: "#fef3c7", border: "#fcd34d" },
  not: { label: "Not Covered", color: "#991b1b", bg: "#fee2e2", border: "#fca5a5" },
};

const COVERAGE_ROWS: { service: string; status: Status; detail: string }[] = [
  {
    service: "Skilled Nursing Facility (Days 1-20)",
    status: "covered",
    detail: "Medicare pays 100% after a qualifying 3-day hospital inpatient stay. Must require skilled nursing or therapy services.",
  },
  {
    service: "Skilled Nursing Facility (Days 21-100)",
    status: "partial",
    detail: "You pay $209.50/day coinsurance in 2026. Medicare pays the remainder. Coverage ends at day 100.",
  },
  {
    service: "Skilled Nursing Facility (Day 101+)",
    status: "not",
    detail: "Medicare pays nothing after day 100. You are responsible for the full daily cost, which averages $300-$400/day.",
  },
  {
    service: "Skilled Home Health Care",
    status: "covered",
    detail: "Covered if you are homebound and need skilled nursing, physical therapy, occupational therapy, or speech therapy. No prior hospital stay required.",
  },
  {
    service: "Custodial Home Care (Help with Daily Activities)",
    status: "not",
    detail: "Medicare does not cover non-skilled help with bathing, dressing, eating, or other daily activities, even if provided at home.",
  },
  {
    service: "Assisted Living Facility",
    status: "not",
    detail: "Medicare does not cover assisted living costs. This is considered custodial care and is explicitly excluded from Medicare coverage.",
  },
  {
    service: "Memory Care / Dementia Care",
    status: "not",
    detail: "Medicare does not cover room and board in memory care facilities. Medicare may cover some medically necessary services (physician visits, medications) within a facility.",
  },
  {
    service: "Adult Day Services",
    status: "not",
    detail: "Medicare does not cover adult day services programs. Some Medicare Advantage plans may offer limited adult day benefits as an extra benefit.",
  },
  {
    service: "Hospice Care",
    status: "covered",
    detail: "Medicare covers hospice care for terminal illness with a life expectancy of 6 months or less. Includes nursing, medications, counseling, and respite care.",
  },
  {
    service: "Home Health Aide (Skilled Care Context)",
    status: "partial",
    detail: "Medicare covers part-time home health aide services only when you are also receiving skilled nursing or therapy services. Standalone home health aide services are not covered.",
  },
];

const SNF_COSTS = [
  { days: "Days 1-20", medicare: "100%", you: "$0", note: "Requires qualifying 3-day hospital stay" },
  { days: "Days 21-100", medicare: "All but $209.50/day", you: "$209.50/day", note: "2026 coinsurance amount" },
  { days: "Day 101+", medicare: "$0", you: "100% of cost", note: "Average $300-$400/day" },
];

const PAYMENT_OPTIONS = [
  {
    Icon: DollarSign,
    title: "Personal Savings",
    desc: "Out-of-pocket spending from retirement savings, home equity, or other assets. The most common payment method.",
    color: "#1a3fa8",
  },
  {
    Icon: FileText,
    title: "Long-Term Care Insurance",
    desc: "Standalone policies that pay a daily or monthly benefit for qualifying care. Best purchased before age 60.",
    color: "#0d7c3e",
  },
  {
    Icon: Heart,
    title: "Hybrid Life/LTC Policies",
    desc: "Life insurance or annuity products with long-term care riders. Unused benefits pass to heirs.",
    color: "#7c3aed",
  },
  {
    Icon: Building2,
    title: "Medicaid",
    desc: "Covers long-term care for those who meet income and asset limits. Florida has specific eligibility rules.",
    color: "#dc2626",
  },
  {
    Icon: Home,
    title: "Veterans Benefits",
    desc: "VA Aid and Attendance and other programs may help eligible veterans and surviving spouses.",
    color: "#b45309",
  },
  {
    Icon: Clock,
    title: "Medicare Savings Programs",
    desc: "Help with Medicare premiums and cost-sharing for those with limited income — not long-term care, but reduces other costs.",
    color: "#0891b2",
  },
];

const FAQ_ITEMS = [
  {
    q: "Does Medicare cover nursing home care?",
    a: "Medicare covers short-term skilled nursing facility (SNF) care only after a qualifying 3-day hospital stay. Medicare pays 100% for days 1-20, then you pay a daily coinsurance ($209.50/day in 2026) for days 21-100. After day 100, Medicare pays nothing. Medicare does not cover custodial nursing home care (help with daily activities like bathing and dressing).",
  },
  {
    q: "Does Medicare cover assisted living?",
    a: "No. Medicare does not cover assisted living facility costs. Assisted living is considered custodial care, which Medicare explicitly excludes. You would need to pay out of pocket, use long-term care insurance, or qualify for Medicaid to cover assisted living costs.",
  },
  {
    q: "Does Medicare cover home health care?",
    a: "Medicare covers medically necessary skilled home health care if you are homebound and your doctor certifies a need for skilled nursing or therapy services. Covered services include skilled nursing visits, physical therapy, occupational therapy, and speech therapy. Medicare does not cover 24-hour home care, meal delivery, or homemaker services.",
  },
  {
    q: "What is the difference between skilled care and custodial care?",
    a: "Skilled care requires the services of a licensed professional such as a nurse, physical therapist, or occupational therapist and is medically necessary for treatment or recovery. Custodial care involves assistance with daily activities such as bathing, dressing, eating, and using the bathroom. Medicare covers skilled care but not custodial care.",
  },
  {
    q: "How do people pay for long-term care if Medicare does not cover it?",
    a: "The main options are: personal savings and assets, long-term care insurance, hybrid life insurance/annuity products with long-term care riders, Medicaid (for those who meet income and asset limits), and Veterans benefits. A financial planner or Medicare specialist can help you evaluate your options.",
  },
  {
    q: "Does Medicare Advantage cover more long-term care than Original Medicare?",
    a: "Medicare Advantage plans must cover everything Original Medicare covers, including the same skilled nursing facility benefit. Some Medicare Advantage plans offer additional home health or personal care benefits beyond Original Medicare, but comprehensive custodial long-term care coverage is not a standard Medicare Advantage benefit.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function LongTermCareCoverageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        className="relative py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #0d2260 0%, #1a3fa8 60%, #1e50c8 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/coverage" className="hover:text-white transition-colors">Coverage</Link>
            <ChevronRight size={14} />
            <span className="text-white">Long-Term Care</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
            Medicare Coverage
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Does Medicare Cover Long-Term Care?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed mb-8">
            Medicare covers short-term skilled nursing care but does not pay for custodial long-term care — the kind most people need in a nursing home or assisted living facility. Here is exactly what Medicare covers, what it does not, and how to plan ahead.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:8136995559"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973e] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <Phone size={16} />
              Speak with a Specialist: (813) 699-5559
            </a>
            <Link
              href="/medicare-supplement"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Explore Medigap Plans
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Alert banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-amber-600 mt-0.5 shrink-0" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> Medicare does not cover custodial long-term care — the daily assistance most people need in a nursing home, assisted living, or memory care facility. Planning ahead is essential. The average annual cost of a private nursing home room in Florida is over $100,000.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">

            {/* Skilled vs custodial */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-3">Skilled Care vs. Custodial Care: The Critical Distinction</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Medicare's long-term care coverage hinges on one key distinction: <strong>skilled care</strong> versus <strong>custodial care</strong>. Understanding this difference is essential to knowing what Medicare will and will not pay for.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle size={18} className="text-green-600" />
                    <h3 className="font-bold text-green-800 text-sm">Skilled Care — Medicare Covers</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-green-900">
                    {[
                      "Skilled nursing services (wound care, IV therapy, injections)",
                      "Physical therapy for recovery",
                      "Occupational therapy",
                      "Speech-language pathology",
                      "Medical social services",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle size={18} className="text-red-600" />
                    <h3 className="font-bold text-red-800 text-sm">Custodial Care — Medicare Does NOT Cover</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-red-900">
                    {[
                      "Help with bathing and personal hygiene",
                      "Assistance with dressing",
                      "Help with eating or meal preparation",
                      "Supervision for dementia or cognitive decline",
                      "Assistance with mobility and transfers",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Coverage table */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-3">What Medicare Covers (and Does Not Cover)</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The table below summarizes Medicare's coverage for common long-term care services.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d2260] text-white">
                      <th className="text-left px-5 py-3 font-semibold">Service</th>
                      <th className="text-left px-5 py-3 font-semibold">Coverage</th>
                      <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COVERAGE_ROWS.map((row, i) => {
                      const cfg = STATUS_CFG[row.status];
                      const Icon = row.status === "covered" ? CheckCircle : row.status === "partial" ? AlertCircle : XCircle;
                      return (
                        <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-5 py-4 font-medium text-[#0d2260] text-sm">{row.service}</td>
                          <td className="px-5 py-4">
                            <span
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                              style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
                            >
                              <Icon size={13} />
                              {cfg.label}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed hidden md:table-cell">
                            {row.detail}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SNF cost breakdown */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-3">Skilled Nursing Facility Costs in 2026</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                When Medicare does cover skilled nursing facility care, cost-sharing is structured by the number of days you have been in the facility during a benefit period. A new benefit period begins after you have been out of a hospital or SNF for 60 consecutive days.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d2260] text-white">
                      <th className="text-left px-5 py-3 font-semibold">Days in SNF</th>
                      <th className="text-left px-5 py-3 font-semibold">Medicare Pays</th>
                      <th className="text-left px-5 py-3 font-semibold">You Pay</th>
                      <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SNF_COSTS.map((row, i) => (
                      <tr key={row.days} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-4 font-semibold text-[#0d2260]">{row.days}</td>
                        <td className="px-5 py-4 text-green-700 font-medium">{row.medicare}</td>
                        <td className="px-5 py-4 text-red-700 font-medium">{row.you}</td>
                        <td className="px-5 py-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                <strong>Important:</strong> To qualify for Medicare SNF coverage, you must have had a qualifying inpatient hospital stay of at least 3 consecutive days (not counting the discharge day) within 30 days before entering the SNF.
              </div>
            </section>

            {/* How to pay */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-3">How People Pay for Long-Term Care</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Since Medicare does not cover custodial long-term care, most people rely on a combination of personal resources and planning strategies. The earlier you plan, the more options you have.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PAYMENT_OPTIONS.map(({ Icon, title, desc, color }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                    style={{ borderLeft: `4px solid ${color}` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} style={{ color }} />
                      <h3 className="font-bold text-[#0d2260] text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Florida Medicaid */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-3">Florida Medicaid and Long-Term Care</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For those who qualify, Florida Medicaid is the primary payer for long-term custodial care. Florida's Statewide Medicaid Managed Care (SMMC) Long-Term Care program covers nursing facility care, assisted living, and home and community-based services for eligible individuals.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Income Limit (2026)", val: "$2,901/month for nursing home Medicaid" },
                  { label: "Asset Limit", val: "$2,000 in countable assets (some assets are exempt, including your primary home)" },
                  { label: "How to Apply", val: "Through the Florida Department of Children and Families (DCF) or a Medicaid planning attorney" },
                  { label: "Spend-Down", val: "Excess assets may need to be 'spent down' to qualify. Medicaid planning strategies can help protect assets legally." },
                  { label: "Dual Eligibility", val: "If you qualify for both Medicare and Medicaid, Medicare pays first for covered services; Medicaid covers the gaps including custodial care." },
                ].map(({ label, val }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <span className="font-bold text-[#1a3fa8] text-sm min-w-[130px] shrink-0">{label}</span>
                    <span className="text-gray-700 text-sm">{val}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-gradient-to-br from-[#0d2260] to-[#1a3fa8] p-8 text-white">
              <h2 className="text-xl font-bold mb-2">Plan Ahead for Long-Term Care Costs</h2>
              <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                Long-term care planning is one of the most important financial decisions you can make before or during Medicare. Our licensed specialists can explain your Medicare coverage, help you understand your gaps, and connect you with resources for long-term care planning.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973e] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  <Phone size={16} />
                  (813) 699-5559
                </a>
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  Schedule a Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-[#0d2260] text-sm hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{item.q}</span>
                      <ChevronRight
                        size={18}
                        className={`shrink-0 ml-3 transition-transform ${openFaq === i ? "rotate-90" : ""}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="font-bold text-[#0d2260] text-sm mb-4 uppercase tracking-wider">Key Facts</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Medicare does NOT cover custodial long-term care",
                  "Skilled nursing: up to 100 days per benefit period",
                  "Days 1-20: $0 cost to you (after qualifying hospital stay)",
                  "Days 21-100: $209.50/day coinsurance in 2026",
                  "Average FL nursing home cost: $100,000+/year",
                  "Medicaid covers LTC for those who qualify",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <CheckCircle size={14} className="text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-[#0d2260] text-sm mb-4 uppercase tracking-wider">Medicare Plan Types</h3>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Advantage (Part C)", href: "/medicare-advantage" },
                  { label: "Medicare Supplement (Medigap)", href: "/medicare-supplement" },
                  { label: "Medicare Part D (Drug Coverage)", href: "/medicare-part-d" },
                  { label: "Original vs. Advantage", href: "/original-vs-advantage" },
                  { label: "Medicare Part A", href: "/medicare-part-a" },
                  { label: "Medicare Part B", href: "/medicare-part-b" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="flex items-center gap-2 text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors py-1">
                      <ChevronRight size={14} className="shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-[#0d2260] text-sm mb-4 uppercase tracking-wider">Coverage Topics</h3>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Advantage Extra Benefits", href: "/coverage/medicare-advantage" },
                  { label: "Dental Coverage", href: "/coverage/dental" },
                  { label: "Vision Coverage", href: "/coverage/vision" },
                  { label: "Hearing Aid Coverage", href: "/coverage/hearing-aids" },
                  { label: "Mental Health Coverage", href: "/coverage/mental-health" },
                  { label: "Prescription Drugs", href: "/coverage/prescription-drugs" },
                  { label: "Skilled Nursing", href: "/coverage/skilled-nursing" },
                  { label: "Physical Therapy", href: "/coverage/physical-therapy" },
                  { label: "Cancer Treatment", href: "/coverage/cancer-treatment" },
                  { label: "Medical Equipment", href: "/coverage/medical-equipment" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="flex items-center gap-2 text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors py-1">
                      <ChevronRight size={14} className="shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#0d2260] p-5 text-white">
              <h3 className="font-bold text-sm mb-2">Free Medicare Review</h3>
              <p className="text-blue-200 text-xs mb-4 leading-relaxed">
                Understand your Medicare coverage gaps and long-term care options with a free consultation.
              </p>
              <a
                href="tel:8136995559"
                className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973e] text-white font-bold px-4 py-2.5 rounded-xl transition-colors text-sm w-full justify-center"
              >
                <Phone size={15} />
                (813) 699-5559
              </a>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
