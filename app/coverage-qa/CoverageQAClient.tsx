"use client";

/* ==========================================================================
   CoverageQAClient — Next.js App Router
   Medicare Coverage Center: searchable hub of "Does Medicare cover X?" cards
   Design: navy/gold MIP brand, card grid with coverage status badges
   ========================================================================== */

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertCircle,
  Phone,
  Filter,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Dental and Vision", value: "dental" },
  { label: "Prescriptions", value: "rx" },
  { label: "Mental Health", value: "mental" },
  { label: "Home Care", value: "home" },
  { label: "Equipment", value: "equipment" },
  { label: "Specialized Care", value: "specialized" },
];

type CoverageStatus = "covered" | "partial" | "not";

interface CoverageItem {
  q: string;
  status: CoverageStatus;
  badge: string;
  category: string;
  detail: string;
}

const COVERAGE_ITEMS: CoverageItem[] = [
  {
    q: "Dental Care",
    status: "partial",
    badge: "Partial Coverage",
    category: "dental",
    detail:
      "Original Medicare covers dental only when medically necessary as part of a covered procedure. Medicare Advantage plans often include routine dental benefits.",
  },
  {
    q: "Vision and Eye Exams",
    status: "partial",
    badge: "Partial Coverage",
    category: "dental",
    detail:
      "Medicare Part B covers annual glaucoma screenings and diabetic retinopathy exams. Routine eye exams and eyeglasses are generally not covered unless you have certain conditions.",
  },
  {
    q: "Hearing Aids",
    status: "not",
    badge: "Not Covered",
    category: "dental",
    detail:
      "Original Medicare does not cover hearing aids or routine hearing exams. Some Medicare Advantage plans include hearing benefits.",
  },
  {
    q: "Prescription Drugs",
    status: "partial",
    badge: "With Part D",
    category: "rx",
    detail:
      "Original Medicare does not cover most outpatient prescription drugs. You need a standalone Part D plan or a Medicare Advantage plan that includes drug coverage.",
  },
  {
    q: "Mental Health Therapy",
    status: "covered",
    badge: "Covered",
    category: "mental",
    detail:
      "Medicare Part B covers outpatient mental health services including therapy sessions, psychiatric evaluations, and depression screenings. You pay 20% of the Medicare-approved amount after the Part B deductible.",
  },
  {
    q: "Home Health Care",
    status: "covered",
    badge: "Covered",
    category: "home",
    detail:
      "Medicare covers medically necessary home health services if you are homebound and your doctor orders the care. This includes skilled nursing, physical therapy, and occupational therapy.",
  },
  {
    q: "Wheelchairs and Walkers",
    status: "covered",
    badge: "Covered (DME)",
    category: "equipment",
    detail:
      "Medicare Part B covers durable medical equipment (DME) including wheelchairs, walkers, and hospital beds when medically necessary and ordered by a doctor.",
  },
  {
    q: "Physical Therapy",
    status: "covered",
    badge: "Covered",
    category: "specialized",
    detail:
      "Medicare Part B covers outpatient physical therapy when medically necessary. You pay 20% of the Medicare-approved amount after the Part B deductible.",
  },
  {
    q: "Chiropractic Care",
    status: "partial",
    badge: "Limited Coverage",
    category: "specialized",
    detail:
      "Medicare Part B covers manual manipulation of the spine to correct subluxation. It does not cover other chiropractic services such as X-rays or massage therapy.",
  },
  {
    q: "Acupuncture",
    status: "partial",
    badge: "Limited Coverage",
    category: "specialized",
    detail:
      "Medicare covers up to 12 acupuncture visits per year for chronic low back pain, with up to 8 additional visits if you show improvement.",
  },
  {
    q: "Cosmetic Surgery",
    status: "not",
    badge: "Not Covered",
    category: "specialized",
    detail:
      "Medicare does not cover cosmetic surgery unless it is medically necessary to repair an injury or improve the function of a malformed body part.",
  },
  {
    q: "Long-Term Care",
    status: "not",
    badge: "Not Covered",
    category: "home",
    detail:
      "Medicare does not cover custodial long-term care such as nursing home care for daily living activities. Medicare only covers skilled nursing facility care for a limited time after a qualifying hospital stay.",
  },
  {
    q: "Ambulance Services",
    status: "covered",
    badge: "Covered",
    category: "specialized",
    detail:
      "Medicare Part B covers medically necessary ambulance transportation to the nearest appropriate medical facility. You pay 20% of the Medicare-approved amount after the Part B deductible.",
  },
  {
    q: "Diabetes Supplies",
    status: "covered",
    badge: "Covered",
    category: "equipment",
    detail:
      "Medicare Part B covers blood glucose monitors, test strips, lancets, and other diabetes supplies as durable medical equipment. Insulin may be covered under Part D or Part B depending on how it is administered.",
  },
  {
    q: "Flu and Pneumonia Vaccines",
    status: "covered",
    badge: "Covered",
    category: "specialized",
    detail:
      "Medicare Part B covers flu shots, pneumococcal vaccines, and COVID-19 vaccines at no cost to you when given by a Medicare-enrolled provider.",
  },
  {
    q: "Cancer Screenings",
    status: "covered",
    badge: "Covered",
    category: "specialized",
    detail:
      "Medicare covers many cancer screenings at no cost, including mammograms, colonoscopies, Pap tests, PSA tests, and lung cancer screenings for eligible beneficiaries.",
  },
];

const STATUS_CONFIG: Record<
  CoverageStatus,
  { color: string; bg: string; border: string; icon: React.ReactNode; label: string }
> = {
  covered: {
    color: "text-green-800",
    bg: "bg-green-50",
    border: "border-green-200",
    icon: <CheckCircle className="w-3.5 h-3.5" />,
    label: "Covered",
  },
  partial: {
    color: "text-amber-800",
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: <AlertCircle className="w-3.5 h-3.5" />,
    label: "Partial / Conditional",
  },
  not: {
    color: "text-red-800",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: <XCircle className="w-3.5 h-3.5" />,
    label: "Not Covered",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status, badge }: { status: CoverageStatus; badge: string }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color}`}
    >
      {cfg.icon}
      {badge}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoverageQAClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = COVERAGE_ITEMS.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = item.q.toLowerCase().includes(searchVal.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d2260] py-14" aria-label="Page header">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Coverage Center
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Does Medicare Cover That?
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Search or browse our coverage guide to find out exactly what Medicare pays for: and what it does not.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">

        {/* Search Bar */}
        <div className="relative mb-6 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search: 'hearing aids', 'physical therapy', 'insulin'..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all"
            aria-label="Search coverage topics"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          <Filter className="w-4 h-4 text-gray-400 self-center" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat.value
                  ? "bg-[#1a3fa8] text-white border-[#1a3fa8]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#1a3fa8]/40 hover:text-[#1a3fa8]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Coverage Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="font-semibold">No results found</p>
            <p className="text-sm mt-1">Try a different search term or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filtered.map((item) => {
              const isOpen = expanded === item.q;
              return (
                <div
                  key={item.q}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.q)}
                    className="w-full flex items-center justify-between p-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="font-semibold text-sm text-gray-900 mb-1.5">
                        Does Medicare cover {item.q}?
                      </p>
                      <StatusBadge status={item.status} badge={item.badge} />
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-gray-400 shrink-0 ml-3 transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        {item.detail}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap gap-4 p-4 rounded-xl border border-gray-200 bg-white mb-10">
          <span className="text-xs font-semibold text-gray-500 self-center">
            Coverage Key:
          </span>
          {(Object.entries(STATUS_CONFIG) as [CoverageStatus, typeof STATUS_CONFIG[CoverageStatus]][]).map(
            ([, cfg]) => (
              <span
                key={cfg.label}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}
              >
                {cfg.icon} {cfg.label}
              </span>
            )
          )}
        </div>

        {/* Info Callout */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="font-serif text-lg font-bold text-[#1a3fa8] mb-2">
              Original Medicare vs. Medicare Advantage
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Coverage varies significantly between Original Medicare and Medicare Advantage plans. Advantage plans often include extra benefits like dental, vision, and hearing that Original Medicare does not cover.
            </p>
            <Link
              href="/original-vs-advantage"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a3fa8] hover:text-blue-800 transition-colors"
            >
              Compare your options <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="font-serif text-lg font-bold text-amber-800 mb-2">
              Filling the Gaps with Medigap
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Original Medicare leaves you responsible for deductibles and coinsurance. A Medigap supplement plan can cover most of those out-of-pocket costs, giving you more predictable expenses.
            </p>
            <Link
              href="/do-i-need-a-supplement"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900 transition-colors"
            >
              Do I need a supplement? <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA Band */}
        <div className="bg-[#1a3fa8] rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-2">
            Not Sure What Your Plan Covers?
          </h2>
          <p className="text-blue-200 mb-6 leading-relaxed">
            A licensed Medicare specialist can review your specific plan and answer your coverage questions at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:8136995559"
              className="flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call 813-699-5559
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
