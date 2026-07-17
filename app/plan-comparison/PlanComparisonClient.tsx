"use client";

/**
 * /plan-comparison
 * Interactive side-by-side Medicare plan comparison tool
 * Plans: Original Medicare, Medicare Advantage HMO, Medicare Advantage PPO, Medigap + Original Medicare
 * Design: Navy/gold MIP brand
 * Rules: No dashes used as punctuation, 2026 figures, Brandon-first, Greg photo CTA
 */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  MinusCircle,
  Phone,
  ArrowRight,
  Star,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

type PlanKey = "original" | "hmo" | "ppo" | "medigap";

const PLANS: { key: PlanKey; label: string; subtitle: string; color: string; headerBg: string }[] = [
  { key: "original", label: "Original Medicare", subtitle: "Parts A and B only", color: "border-blue-300", headerBg: "bg-blue-700" },
  { key: "hmo", label: "Medicare Advantage HMO", subtitle: "Part C (network required)", color: "border-amber-300", headerBg: "bg-amber-600" },
  { key: "ppo", label: "Medicare Advantage PPO", subtitle: "Part C (flexible network)", color: "border-green-300", headerBg: "bg-green-700" },
  { key: "medigap", label: "Original Medicare + Medigap Plan G", subtitle: "Most comprehensive coverage", color: "border-purple-300", headerBg: "bg-purple-700" },
];

type CellValue = "yes" | "no" | "partial" | "varies";

interface Row {
  label: string;
  tooltip?: string;
  values: Record<PlanKey, { value: CellValue; note?: string }>;
}

const rows: Row[] = [
  {
    label: "Monthly Premium (2026)",
    values: {
      original: { value: "partial", note: "$202.90/mo Part B premium" },
      hmo: { value: "partial", note: "$202.90/mo Part B + plan premium (often $0-$50)" },
      ppo: { value: "partial", note: "$202.90/mo Part B + plan premium (often $30-$100)" },
      medigap: { value: "partial", note: "$202.90/mo Part B + Medigap premium ($100-$250/mo)" },
    },
  },
  {
    label: "Annual Deductible",
    values: {
      original: { value: "partial", note: "$283 Part B + $1,736 Part A per benefit period" },
      hmo: { value: "partial", note: "Varies by plan; often lower than Original Medicare" },
      ppo: { value: "partial", note: "Varies by plan; may have in-network and out-of-network deductibles" },
      medigap: { value: "partial", note: "$283 Part B deductible only (Plan G covers Part A deductible)" },
    },
  },
  {
    label: "Out-of-Pocket Maximum",
    values: {
      original: { value: "no", note: "No cap; unlimited exposure without supplement" },
      hmo: { value: "yes", note: "Capped (max $9,350 in-network in 2026)" },
      ppo: { value: "yes", note: "Capped (max $14,000 combined in/out-of-network in 2026)" },
      medigap: { value: "yes", note: "Effectively $283/year (Part B deductible only with Plan G)" },
    },
  },
  {
    label: "Doctor and Specialist Choice",
    values: {
      original: { value: "yes", note: "Any Medicare-accepting provider nationwide" },
      hmo: { value: "partial", note: "In-network providers only; referrals required for specialists" },
      ppo: { value: "partial", note: "In-network preferred; out-of-network allowed at higher cost" },
      medigap: { value: "yes", note: "Any Medicare-accepting provider nationwide" },
    },
  },
  {
    label: "Referrals Required",
    values: {
      original: { value: "no", note: "No referrals needed" },
      hmo: { value: "yes", note: "Referral from primary care physician required" },
      ppo: { value: "no", note: "No referrals required" },
      medigap: { value: "no", note: "No referrals needed" },
    },
  },
  {
    label: "Prescription Drug Coverage",
    values: {
      original: { value: "no", note: "Must add a separate Part D plan" },
      hmo: { value: "yes", note: "Most plans include drug coverage (MAPD)" },
      ppo: { value: "yes", note: "Most plans include drug coverage (MAPD)" },
      medigap: { value: "no", note: "Must add a separate Part D plan" },
    },
  },
  {
    label: "Dental Coverage",
    values: {
      original: { value: "no", note: "Not covered" },
      hmo: { value: "partial", note: "Many plans include basic dental benefits" },
      ppo: { value: "partial", note: "Many plans include basic dental benefits" },
      medigap: { value: "no", note: "Not included; must purchase separately" },
    },
  },
  {
    label: "Vision Coverage",
    values: {
      original: { value: "no", note: "Routine vision not covered" },
      hmo: { value: "partial", note: "Many plans include vision allowance" },
      ppo: { value: "partial", note: "Many plans include vision allowance" },
      medigap: { value: "no", note: "Not included; must purchase separately" },
    },
  },
  {
    label: "Hearing Aid Coverage",
    values: {
      original: { value: "no", note: "Not covered" },
      hmo: { value: "partial", note: "Some plans include hearing aid allowance" },
      ppo: { value: "partial", note: "Some plans include hearing aid allowance" },
      medigap: { value: "no", note: "Not included; must purchase separately" },
    },
  },
  {
    label: "Skilled Nursing Facility Coinsurance",
    values: {
      original: { value: "partial", note: "$212/day for days 21-100 (2026)" },
      hmo: { value: "partial", note: "Varies; may be lower than Original Medicare" },
      ppo: { value: "partial", note: "Varies; may be lower than Original Medicare" },
      medigap: { value: "yes", note: "Plan G covers all SNF coinsurance (days 21-100)" },
    },
  },
  {
    label: "Travel Coverage (Outside Service Area)",
    values: {
      original: { value: "yes", note: "Covered at any Medicare-accepting provider in the US" },
      hmo: { value: "partial", note: "Emergency care covered; routine care generally not covered outside area" },
      ppo: { value: "partial", note: "Out-of-network coverage available; higher cost outside area" },
      medigap: { value: "yes", note: "Plan G covers foreign travel emergency care (80% after $250 deductible)" },
    },
  },
  {
    label: "Predictable Annual Costs",
    values: {
      original: { value: "no", note: "No out-of-pocket cap; costs can be unpredictable" },
      hmo: { value: "yes", note: "Out-of-pocket maximum provides cost certainty" },
      ppo: { value: "yes", note: "Out-of-pocket maximum provides cost certainty" },
      medigap: { value: "yes", note: "Costs are highly predictable: premium + $283 deductible" },
    },
  },
];

const ICON: Record<CellValue, React.ReactNode> = {
  yes: <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />,
  no: <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />,
  partial: <MinusCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />,
  varies: <MinusCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />,
};

export default function PlanComparisonClient() {
  const [selected, setSelected] = useState<PlanKey[]>(["original", "medigap"]);

  const togglePlan = (key: PlanKey) => {
    setSelected((prev) =>
      prev.includes(key)
        ? prev.length > 1 ? prev.filter((k) => k !== key) : prev
        : prev.length < 4 ? [...prev, key] : prev
    );
  };

  const activePlans = PLANS.filter((p) => selected.includes(p.key));

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
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-white">Plan Comparison Tool</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Interactive Tool
              </span>
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Plan Types" }]} className="mb-4" />
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Medicare Plan Comparison Tool
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Compare Original Medicare, Medicare Advantage HMO, Medicare Advantage PPO, and Medigap side by side. Select the plans you want to compare below.
            </p>
          </div>
        </section>

        {/* Tool */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">

            {/* Plan Selector */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Plans to Compare (choose 2 to 4)</p>
              <div className="flex flex-wrap gap-3">
                {PLANS.map((plan) => (
                  <button
                    key={plan.key}
                    onClick={() => togglePlan(plan.key)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                      selected.includes(plan.key)
                        ? "border-[#0d2d6b] bg-[#0d2d6b] text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-[#0d2d6b]"
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> Yes / Included</span>
              <span className="flex items-center gap-1.5"><MinusCircle className="w-4 h-4 text-amber-500" /> Partial / Varies</span>
              <span className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-500" /> No / Not Included</span>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left px-5 py-4 bg-gray-50 text-gray-500 font-semibold text-xs uppercase tracking-wider w-48 border-b border-gray-200">
                      Feature
                    </th>
                    {activePlans.map((plan) => (
                      <th key={plan.key} className={`px-4 py-4 border-b border-gray-200 ${plan.headerBg} text-white text-left`}>
                        <p className="font-bold text-sm">{plan.label}</p>
                        <p className="text-xs font-normal opacity-80 mt-0.5">{plan.subtitle}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-gray-800 text-xs border-r border-gray-100 align-top">
                        {row.label}
                      </td>
                      {activePlans.map((plan) => {
                        const cell = row.values[plan.key];
                        return (
                          <td key={plan.key} className="px-4 py-4 align-top">
                            <div className="flex items-start gap-2">
                              {ICON[cell.value]}
                              {cell.note && (
                                <span className="text-xs text-gray-600 leading-snug">{cell.note}</span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Info callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-start gap-3 mb-10">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-blue-900 mb-1">This Tool Provides General Comparisons</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Actual plan benefits, premiums, and networks vary by insurer and location. The figures above reflect 2026 Original Medicare benchmarks. Medicare Advantage plan details depend on the specific plan you choose. A licensed Medicare advisor can help you compare actual plans available in your area.
                </p>
              </div>
            </div>

            {/* Bottom CTA grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Greg CTA */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f5a800]">
                  <img src={GREG_PHOTO} alt="Greg Wohl" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">Greg Wohl</p>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#f5a800] text-[#f5a800]" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Licensed Medicare advisor serving Brandon, Riverview, Valrico, and Hillsborough County. Free consultations available.
                  </p>
                  <a
                    href="tel:+18137897700"
                    className="inline-flex items-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    813-789-7700
                  </a>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-gray-900 text-sm mb-3">Related Tools and Guides</p>
                <div className="space-y-2">
                  {[
                    { label: "Cost Estimator: Estimate Your Annual Medicare Costs", href: "/cost-estimator" },
                    { label: "Original Medicare vs. Medicare Advantage Guide", href: "/original-vs-advantage" },
                    { label: "Do I Need a Medigap Plan?", href: "/do-i-need-a-supplement" },
                    { label: "Enrollment Calculator: Find Your Enrollment Window", href: "/enrollment-calculator" },
                    { label: "Medicare Costs at a Glance (2026)", href: "/costs-at-a-glance" },
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
          </div>
        </section>

        {/* Bottom CTA Band */}
        <section className="bg-[#0d2d6b] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Ready to Choose the Right Plan?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Greg Wohl helps Brandon and Hillsborough County residents compare real plans available in their area. Call for a free, no-pressure consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+18137897700"
                className="inline-flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 813-789-7700
              </a>
              <Link
                href="/medicare-quiz"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Take the Medicare Quiz
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
