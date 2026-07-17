"use client";

/**
 * /cost-estimator
 * Interactive Medicare cost estimator for 2026
 * Inputs: plan type, income (IRMAA), hospital days, SNF days, doctor visits, prescriptions
 * Design: Navy/gold MIP brand
 * Rules: No dashes used as punctuation, 2026 figures, Brandon-first, Greg photo CTA
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Star, Info, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

// 2026 Medicare figures
const PART_B_PREMIUM = 202.90;
const PART_B_DEDUCTIBLE = 283;
const PART_A_DEDUCTIBLE = 1736;
const SNF_DAILY_COINSURANCE = 212; // days 21-100
const PART_D_MAX_OOP = 2000;

// IRMAA 2026 Part B surcharges (individual income)
const IRMAA_BRACKETS = [
  { label: "Under $109,000", surcharge: 0 },
  { label: "$109,001 to $136,000", surcharge: 74.0 },
  { label: "$133,001 to $167,000", surcharge: 187.0 },
  { label: "$167,001 to $200,000", surcharge: 299.70 },
  { label: "$200,001 to $500,000", surcharge: 412.10 },
  { label: "Over $500,000", surcharge: 443.90 },
];

type PlanType = "original" | "medigap" | "advantage";

export default function CostEstimatorClient() {
  const [planType, setPlanType] = useState<PlanType>("original");
  const [irmaaBracket, setIrmaaBracket] = useState(0);
  const [hospitalDays, setHospitalDays] = useState(0);
  const [snfDays, setSnfDays] = useState(0);
  const [doctorVisits, setDoctorVisits] = useState(4);
  const [avgVisitCost, setAvgVisitCost] = useState(150);
  const [hasDrugs, setHasDrugs] = useState(false);
  const [drugCost, setDrugCost] = useState(100);
  const [medigapPremium, setMedigapPremium] = useState(150);
  const [advantagePremium, setAdvantagePremium] = useState(0);
  const [advantageOopMax, setAdvantageOopMax] = useState(5000);

  const results = useMemo(() => {
    const irmaaSurcharge = IRMAA_BRACKETS[irmaaBracket].surcharge;
    const partBMonthly = PART_B_PREMIUM + irmaaSurcharge;
    const partBYearly = partBMonthly * 12;

    if (planType === "original") {
      // Part B premium
      let total = partBYearly;
      // Part B deductible
      total += PART_B_DEDUCTIBLE;
      // Hospital: Part A deductible if any days
      if (hospitalDays > 0) total += PART_A_DEDUCTIBLE;
      // Hospital coinsurance days 61-90: $422/day
      if (hospitalDays > 60) total += Math.min(hospitalDays - 60, 30) * 422;
      // SNF coinsurance days 21-100: $212/day
      const snfCoinsuranceDays = Math.max(0, Math.min(snfDays, 100) - 20);
      total += snfCoinsuranceDays * SNF_DAILY_COINSURANCE;
      // Doctor visits: 20% coinsurance
      total += doctorVisits * avgVisitCost * 0.2;
      // Part D (rough estimate)
      if (hasDrugs) total += Math.min(drugCost * 12, PART_D_MAX_OOP);

      return {
        partBPremium: partBYearly,
        partAPremium: 0,
        supplementPremium: 0,
        deductibles: PART_B_DEDUCTIBLE + (hospitalDays > 0 ? PART_A_DEDUCTIBLE : 0),
        coinsurance: doctorVisits * avgVisitCost * 0.2 + snfCoinsuranceDays * SNF_DAILY_COINSURANCE + (hospitalDays > 60 ? Math.min(hospitalDays - 60, 30) * 422 : 0),
        drugs: hasDrugs ? Math.min(drugCost * 12, PART_D_MAX_OOP) : 0,
        total,
        note: "Original Medicare has no out-of-pocket maximum. A serious illness or extended hospital stay can cost significantly more.",
      };
    }

    if (planType === "medigap") {
      const suppPremiumYearly = medigapPremium * 12;
      let total = partBYearly + suppPremiumYearly;
      // Only Part B deductible out of pocket with Plan G
      total += PART_B_DEDUCTIBLE;
      // Medigap covers Part A deductible, SNF coinsurance, Part B coinsurance
      // Part D
      if (hasDrugs) total += Math.min(drugCost * 12, PART_D_MAX_OOP);

      return {
        partBPremium: partBYearly,
        partAPremium: 0,
        supplementPremium: suppPremiumYearly,
        deductibles: PART_B_DEDUCTIBLE,
        coinsurance: 0,
        drugs: hasDrugs ? Math.min(drugCost * 12, PART_D_MAX_OOP) : 0,
        total,
        note: "With Medigap Plan G, your only out-of-pocket cost is the $283 Part B deductible. All other Medicare-covered services are paid by Medigap.",
      };
    }

    // Medicare Advantage
    const advPremiumYearly = advantagePremium * 12;
    let total = partBYearly + advPremiumYearly;
    // Rough estimate: assume 30% of services hit deductible/coinsurance, capped at OOP max
    const estimatedOop = Math.min(
      doctorVisits * avgVisitCost * 0.2 +
        (hospitalDays > 0 ? 500 : 0) +
        (snfDays > 0 ? snfDays * 50 : 0),
      advantageOopMax
    );
    total += estimatedOop;
    if (hasDrugs) total += Math.min(drugCost * 12, PART_D_MAX_OOP);

    return {
      partBPremium: partBYearly,
      partAPremium: 0,
      supplementPremium: advPremiumYearly,
      deductibles: 0,
      coinsurance: estimatedOop,
      drugs: hasDrugs ? Math.min(drugCost * 12, PART_D_MAX_OOP) : 0,
      total,
      note: `Medicare Advantage caps your out-of-pocket costs at $${advantageOopMax.toLocaleString()} per year. Actual costs depend on your specific plan and how much care you use.`,
    };
  }, [planType, irmaaBracket, hospitalDays, snfDays, doctorVisits, avgVisitCost, hasDrugs, drugCost, medigapPremium, advantagePremium, advantageOopMax]);

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d2d6b] bg-white";
  const labelClass = "block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5";

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
              <span className="text-white">Cost Estimator</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Interactive Tool
              </span>
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cost Estimator" }]} className="mb-4" />
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Medicare Cost Estimator
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Estimate your annual Medicare costs based on your plan type, income, and expected healthcare use. All figures use 2026 Medicare benchmarks.
            </p>
          </div>
        </section>

        {/* Tool */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_380px] gap-10">

              {/* Inputs */}
              <div className="space-y-8">

                {/* Plan Type */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                    Step 1: Choose Your Plan Type
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { key: "original" as PlanType, label: "Original Medicare", sub: "Parts A and B only" },
                      { key: "medigap" as PlanType, label: "Original Medicare + Medigap", sub: "Most comprehensive" },
                      { key: "advantage" as PlanType, label: "Medicare Advantage", sub: "Part C (HMO or PPO)" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setPlanType(opt.key)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          planType === opt.key
                            ? "border-[#0d2d6b] bg-[#0d2d6b] text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-[#0d2d6b]"
                        }`}
                      >
                        <p className="font-bold text-sm">{opt.label}</p>
                        <p className={`text-xs mt-0.5 ${planType === opt.key ? "text-blue-200" : "text-gray-400"}`}>{opt.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Income / IRMAA */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                    Step 2: Your Income (for Part B Premium)
                  </h2>
                  <label className={labelClass}>Annual Individual Income (2024 tax return)</label>
                  <select
                    className={inputClass}
                    value={irmaaBracket}
                    onChange={(e) => setIrmaaBracket(Number(e.target.value))}
                  >
                    {IRMAA_BRACKETS.map((b, i) => (
                      <option key={i} value={i}>
                        {b.label} {b.surcharge > 0 ? `(+$${b.surcharge}/mo IRMAA)` : "(standard premium)"}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-400 mt-2">
                    Standard Part B premium in 2026 is $202.90/month. IRMAA surcharges apply to higher incomes.
                  </p>
                </div>

                {/* Plan-specific inputs */}
                {planType === "medigap" && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                      Medigap Plan Details
                    </h2>
                    <label className={labelClass}>Estimated Monthly Medigap Premium ($)</label>
                    <input
                      type="number"
                      min={50}
                      max={500}
                      className={inputClass}
                      value={medigapPremium}
                      onChange={(e) => setMedigapPremium(Number(e.target.value))}
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Medigap Plan G premiums in the Brandon and Hillsborough County area typically range from $100 to $200/month depending on age and insurer.
                    </p>
                  </div>
                )}

                {planType === "advantage" && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                      Medicare Advantage Plan Details
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Monthly Plan Premium ($)</label>
                        <input
                          type="number"
                          min={0}
                          max={300}
                          className={inputClass}
                          value={advantagePremium}
                          onChange={(e) => setAdvantagePremium(Number(e.target.value))}
                        />
                        <p className="text-xs text-gray-400 mt-1">Many local plans have $0 premium.</p>
                      </div>
                      <div>
                        <label className={labelClass}>Annual Out-of-Pocket Maximum ($)</label>
                        <input
                          type="number"
                          min={1000}
                          max={9350}
                          step={500}
                          className={inputClass}
                          value={advantageOopMax}
                          onChange={(e) => setAdvantageOopMax(Number(e.target.value))}
                        />
                        <p className="text-xs text-gray-400 mt-1">Max allowed in 2026 is $9,350 in-network.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Healthcare Use */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                    Step 3: Expected Healthcare Use
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Doctor Visits per Year</label>
                      <input
                        type="number"
                        min={0}
                        max={52}
                        className={inputClass}
                        value={doctorVisits}
                        onChange={(e) => setDoctorVisits(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Average Cost per Visit ($)</label>
                      <input
                        type="number"
                        min={50}
                        max={500}
                        step={10}
                        className={inputClass}
                        value={avgVisitCost}
                        onChange={(e) => setAvgVisitCost(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Expected Hospital Days</label>
                      <input
                        type="number"
                        min={0}
                        max={365}
                        className={inputClass}
                        value={hospitalDays}
                        onChange={(e) => setHospitalDays(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Expected Skilled Nursing Days</label>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        className={inputClass}
                        value={snfDays}
                        onChange={(e) => setSnfDays(Number(e.target.value))}
                      />
                    </div>
                  </div>

                  {/* Prescriptions */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <input
                        type="checkbox"
                        id="hasDrugs"
                        checked={hasDrugs}
                        onChange={(e) => setHasDrugs(e.target.checked)}
                        className="w-4 h-4 accent-[#0d2d6b]"
                      />
                      <label htmlFor="hasDrugs" className="text-sm font-semibold text-gray-700">
                        I take prescription medications (include Part D costs)
                      </label>
                    </div>
                    {hasDrugs && (
                      <div>
                        <label className={labelClass}>Estimated Monthly Drug Cost ($)</label>
                        <input
                          type="number"
                          min={0}
                          max={1000}
                          step={10}
                          className={inputClass}
                          value={drugCost}
                          onChange={(e) => setDrugCost(Number(e.target.value))}
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          Part D out-of-pocket cap is $2,100 in 2026. Costs above that are covered by the plan.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="sticky top-24 space-y-5">
                  {/* Cost Breakdown */}
                  <div className="bg-[#0d2d6b] text-white rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <Calculator className="w-5 h-5 text-[#f5a800]" />
                      <h2 className="font-bold text-lg" style={{ fontFamily: "'Merriweather', serif" }}>
                        Estimated Annual Cost
                      </h2>
                    </div>
                    <div className="space-y-3 mb-5">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-200">Part B Premium</span>
                        <span className="font-semibold">${results.partBPremium.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/yr</span>
                      </div>
                      {results.supplementPremium > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-200">{planType === "medigap" ? "Medigap Premium" : "Advantage Premium"}</span>
                          <span className="font-semibold">${results.supplementPremium.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/yr</span>
                        </div>
                      )}
                      {results.deductibles > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-200">Deductibles</span>
                          <span className="font-semibold">${results.deductibles.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                      )}
                      {results.coinsurance > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-200">Coinsurance and Copays</span>
                          <span className="font-semibold">${results.coinsurance.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                      )}
                      {results.drugs > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-200">Prescription Drug Costs</span>
                          <span className="font-semibold">${results.drugs.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                      )}
                    </div>
                    <div className="border-t border-blue-500 pt-4 flex justify-between items-center">
                      <span className="font-bold text-lg">Total Estimated Annual Cost</span>
                      <span className="font-bold text-2xl text-[#f5a800]">
                        ${results.total.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <p className="text-xs text-blue-300 mt-3 leading-relaxed">{results.note}</p>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-xs leading-relaxed">
                      This is an estimate based on 2026 Medicare benchmarks. Actual costs depend on your specific plan, providers, and healthcare use. Consult a licensed Medicare advisor for personalized guidance.
                    </p>
                  </div>

                  {/* Greg CTA */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f5a800]">
                        <img src={GREG_PHOTO} alt="Greg Wohl" className="w-full h-full object-cover object-top" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Greg Wohl</p>
                        <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                        <div className="flex gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#f5a800] text-[#f5a800]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      Want a precise comparison of plans available in Brandon and Hillsborough County? Call Greg for a free consultation.
                    </p>
                    <a
                      href="tel:+18137897700"
                      className="flex items-center justify-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-3 rounded-xl transition-colors w-full text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      813-789-7700
                    </a>
                  </div>

                  {/* Related */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Related Tools</p>
                    <div className="space-y-2">
                      {[
                        { label: "Plan Comparison Tool", href: "/plan-comparison" },
                        { label: "Enrollment Calculator", href: "/enrollment-calculator" },
                        { label: "Medicare Costs at a Glance", href: "/costs-at-a-glance" },
                        { label: "Do I Need a Medigap Plan?", href: "/do-i-need-a-supplement" },
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
            </div>
          </div>
        </section>

        {/* Bottom CTA Band */}
        <section className="bg-[#0d2d6b] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Get a Precise Cost Comparison for Your Situation
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Greg Wohl can compare real plans available in Brandon and Hillsborough County and show you exactly what each plan would cost based on your health and budget.
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
