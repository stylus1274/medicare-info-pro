"use client";

/**
 * /coverage/skilled-nursing
 * Design: Navy/gold MIP brand, two-column article + sticky sidebar
 * Coverage FAQ format: Does Medicare cover skilled nursing facility care?
 * Rules: No dashes used as punctuation, 2026 figures, Brandon-first local signals, compact quick answer banner
 */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Info,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const snfDays = [
  {
    days: "Days 1 through 20",
    medicare: "100% of covered services",
    you: "$0 (after qualifying hospital stay)",
    highlight: true,
  },
  {
    days: "Days 21 through 100",
    medicare: "All costs above the daily coinsurance",
    you: "$209.50 per day coinsurance (2026)",
    highlight: false,
  },
  {
    days: "Days 101 and beyond",
    medicare: "$0",
    you: "All costs (you pay 100%)",
    highlight: false,
  },
];

const planCoverage = [
  {
    plan: "Original Medicare (Part A)",
    statusLabel: "Covered with Conditions",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Medicare Part A covers skilled nursing facility care when you meet three conditions: (1) you have had a qualifying inpatient hospital stay of at least 3 consecutive days, not counting the discharge day; (2) you are admitted to a Medicare-certified SNF within 30 days of that hospital stay; and (3) you need skilled care such as physical therapy, occupational therapy, speech therapy, skilled nursing, or IV medications. Coverage is limited to 100 days per benefit period.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    statusLabel: "Covered with Network Rules",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Medicare Advantage plans must cover SNF care at least as generously as Original Medicare. However, you must use an in-network SNF. If you are discharged from a hospital and the recommended SNF is out of your plan's network, you may face significantly higher costs or need to find an alternative facility. Some plans offer lower daily coinsurance amounts for days 21 through 100 compared to Original Medicare.",
  },
  {
    plan: "Medigap (Medicare Supplement)",
    statusLabel: "Covers Daily Coinsurance",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medigap plans cover the $209.50 per day coinsurance for SNF days 21 through 100. For a 60-day SNF stay, this represents $8,380 in coinsurance that Medigap Plan G would cover entirely. This is one of the most valuable benefits of a Medigap plan for beneficiaries who face a serious illness or major surgery requiring extended rehabilitation.",
  },
];

const coveredServices = [
  { service: "Skilled nursing care (wound care, IV medications, injections)", covered: true },
  { service: "Physical therapy during SNF stay", covered: true },
  { service: "Occupational therapy during SNF stay", covered: true },
  { service: "Speech-language pathology during SNF stay", covered: true },
  { service: "Medical social services", covered: true },
  { service: "Medications administered during SNF stay", covered: true },
  { service: "Medical supplies and equipment used in the facility", covered: true },
  { service: "Dietary counseling", covered: true },
  { service: "Ambulance transportation to and from the SNF (if medically necessary)", covered: true },
  { service: "Custodial care only (help with bathing, dressing, eating)", covered: false },
  { service: "Long-term nursing home care without skilled need", covered: false },
  { service: "SNF stay without a qualifying 3-day hospital stay", covered: false },
  { service: "Care in a non-Medicare-certified facility", covered: false },
  { service: "Personal comfort items (TV, phone, private room upgrade)", covered: false },
];

const faqs = [
  {
    q: "What is the 3-day hospital stay rule for skilled nursing?",
    a: "To qualify for Medicare SNF coverage, you must have been admitted as an inpatient to a hospital for at least 3 consecutive days, not counting the day of discharge. Observation status does not count. This is a critical distinction: if your hospital stay is classified as observation rather than inpatient admission, even if you stayed overnight for several days, you will not qualify for Medicare SNF coverage. Always ask your hospital whether you are admitted as an inpatient.",
  },
  {
    q: "What counts as skilled care in a nursing facility?",
    a: "Skilled care means services that can only be safely and effectively performed by or under the supervision of licensed professionals. Examples include physical therapy after a hip replacement, skilled nursing for wound care or IV antibiotics, occupational therapy to regain daily living skills after a stroke, and speech therapy after a neurological event. Custodial care, such as help with bathing, dressing, and eating, does not qualify as skilled care under Medicare.",
  },
  {
    q: "How long does Medicare cover skilled nursing facility care?",
    a: "Medicare covers up to 100 days of SNF care per benefit period. Days 1 through 20 are covered at 100% with no coinsurance. Days 21 through 100 require a daily coinsurance of $209.50 in 2026. After day 100, Medicare pays nothing. A new benefit period begins after you have been out of a hospital or SNF for 60 consecutive days.",
  },
  {
    q: "What is the difference between a skilled nursing facility and a nursing home?",
    a: "A skilled nursing facility provides short-term, medically necessary skilled care, typically for rehabilitation after a hospital stay. A nursing home, or long-term care facility, provides ongoing custodial care for people who can no longer live independently. Medicare covers SNF care but does not cover long-term nursing home custodial care. Long-term care insurance or Medicaid may cover nursing home costs.",
  },
  {
    q: "Can Medicare stop covering my SNF stay early?",
    a: "Yes. Medicare can stop covering your SNF stay if your condition no longer requires skilled care, even if you have not reached day 100. The SNF must give you a written notice before stopping Medicare coverage. You have the right to appeal this decision. If you request an appeal before coverage ends, Medicare must continue paying while the appeal is reviewed.",
  },
  {
    q: "Does Medicare cover SNF care for someone with Alzheimer's or dementia?",
    a: "Medicare may cover a SNF stay for a person with Alzheimer's or dementia if they have a qualifying hospital stay and need skilled care. However, Medicare does not cover long-term memory care or custodial care in a memory care unit. Long-term care insurance or Medicaid is typically needed for ongoing memory care facility costs.",
  },
  {
    q: "What happens after Medicare stops covering my SNF stay?",
    a: "After day 100, or when Medicare determines skilled care is no longer needed, you are responsible for all SNF costs. If you cannot return home and need continued care, you may need to pay privately, use long-term care insurance, or apply for Medicaid if you meet income and asset requirements. A licensed Medicare advisor can help you understand your options before a SNF stay occurs.",
  },
];

const tocItems = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "how-it-works", label: "How SNF Coverage Works" },
  { id: "plan-coverage", label: "Coverage by Plan Type" },
  { id: "covered-services", label: "What Is and Is Not Covered" },
  { id: "costs", label: "Your Costs in 2026" },
  { id: "local", label: "Brandon and Tampa Area" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function SkilledNursingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <Link href="/coverage-qa" className="hover:text-white transition-colors">Coverage Q&A</Link>
              <span>/</span>
              <span className="text-white">Skilled Nursing</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Skilled Nursing Coverage
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Does Medicare Cover Skilled Nursing Facility Care?
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Medicare covers up to 100 days of skilled nursing facility care per benefit period, but only if you meet specific qualifying conditions.
            </p>

            {/* Quick Answer Banner */}
            <div
              id="quick-answer"
              className="flex items-start gap-3 px-5 py-4 rounded-xl border max-w-2xl"
              style={{ background: "#fffbeb", borderColor: "#fcd34d" }}
            >
              <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1 text-amber-700">
                  Quick Answer: Yes, with Conditions
                </p>
                <p className="text-sm font-semibold leading-snug text-amber-800">
                  Medicare covers SNF care for up to 100 days per benefit period. You must have a qualifying 3-day inpatient hospital stay first. Days 1 to 20 are free. Days 21 to 100 cost $209.50 per day in 2026. A Medigap plan covers that daily coinsurance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10">
              {/* Article */}
              <article className="min-w-0">

                {/* How It Works */}
                <div id="how-it-works" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    How Medicare SNF Coverage Works
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    The three conditions you must meet and the day-by-day cost breakdown.
                  </p>

                  {/* Three Conditions */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {[
                      { num: "1", title: "Qualifying Hospital Stay", desc: "You must have been admitted as an inpatient to a hospital for at least 3 consecutive days, not counting the discharge day. Observation status does not count." },
                      { num: "2", title: "Admitted Within 30 Days", desc: "You must be admitted to a Medicare-certified SNF within 30 days of your qualifying hospital discharge." },
                      { num: "3", title: "Skilled Care Required", desc: "You must need skilled care such as physical therapy, occupational therapy, speech therapy, skilled nursing, or IV medications." },
                    ].map((cond) => (
                      <motion.div
                        key={cond.num}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-[#0d2d6b] text-white rounded-2xl p-5"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#f5a800] text-[#0d2d6b] font-bold text-sm flex items-center justify-center mb-3">
                          {cond.num}
                        </div>
                        <h3 className="font-bold mb-2 text-sm" style={{ fontFamily: "'Merriweather', serif" }}>{cond.title}</h3>
                        <p className="text-blue-200 text-xs leading-relaxed">{cond.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Day-by-Day Table */}
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#0d2d6b] text-white">
                          <th className="text-left px-4 py-3 font-semibold">Days in SNF</th>
                          <th className="text-left px-4 py-3 font-semibold">Medicare Pays</th>
                          <th className="text-left px-4 py-3 font-semibold">You Pay</th>
                        </tr>
                      </thead>
                      <tbody>
                        {snfDays.map((row, i) => (
                          <tr key={row.days} className={row.highlight ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-3 font-semibold text-gray-800">{row.days}</td>
                            <td className="px-4 py-3 text-gray-700">{row.medicare}</td>
                            <td className={`px-4 py-3 font-medium ${row.highlight ? "text-green-700" : i === 2 ? "text-red-600" : "text-gray-700"}`}>{row.you}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-amber-900 mb-1">Observation Status: A Critical Trap</p>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        If your hospital classifies your stay as "observation status" rather than an inpatient admission, those days do not count toward the 3-day qualifying stay, even if you slept in a hospital bed for several nights. Always ask your hospital team whether you are formally admitted as an inpatient. If you are placed under observation, you can request to be admitted or ask for a written notice of your status.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coverage by Plan Type */}
                <div id="plan-coverage" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Coverage by Plan Type
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    How SNF coverage works under each Medicare plan type.
                  </p>
                  <div className="space-y-4">
                    {planCoverage.map((item) => (
                      <motion.div
                        key={item.plan}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`border rounded-2xl p-5 ${item.color}`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Merriweather', serif" }}>
                            {item.plan}
                          </h3>
                          <span className={`${item.badgeColor} text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap`}>
                            {item.statusLabel}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Covered Services */}
                <div id="covered-services" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    What Is and Is Not Covered
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Services covered during a qualifying Medicare SNF stay.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {coveredServices.map((item) => (
                      <div
                        key={item.service}
                        className={`flex items-start gap-3 p-4 rounded-xl border ${
                          item.covered
                            ? "bg-green-50 border-green-200"
                            : "bg-red-50 border-red-200"
                        }`}
                      >
                        {item.covered ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={`text-sm leading-snug ${item.covered ? "text-gray-700" : "text-gray-600"}`}>
                          {item.service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Costs in 2026 */}
                <div id="costs" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    What a SNF Stay Costs in 2026
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Real cost examples for common SNF stay lengths.
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#0d2d6b] text-white">
                          <th className="text-left px-4 py-3 font-semibold">Stay Length</th>
                          <th className="text-left px-4 py-3 font-semibold">Without Medigap</th>
                          <th className="text-left px-4 py-3 font-semibold">With Medigap Plan G</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { stay: "20 days", without: "$0 (days 1-20 free)", with: "$0" },
                          { stay: "30 days", without: "$209.50 x 10 = $2,095", with: "$0 (Medigap covers days 21-30)" },
                          { stay: "60 days", without: "$209.50 x 40 = $8,380", with: "$0 (Medigap covers days 21-60)" },
                          { stay: "100 days", without: "$209.50 x 80 = $16,760", with: "$0 (Medigap covers days 21-100)" },
                          { stay: "101+ days", without: "Full daily facility cost (often $300-$500+/day)", with: "Full daily facility cost (Medicare stops at day 100)" },
                        ].map((row, i) => (
                          <tr key={row.stay} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-3 font-semibold text-gray-800">{row.stay}</td>
                            <td className="px-4 py-3 text-gray-700">{row.without}</td>
                            <td className="px-4 py-3 text-green-700 font-medium">{row.with}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Medigap Plan G Covers All SNF Coinsurance (Days 21-100)</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        A 60-day SNF stay following hip replacement surgery would cost you $8,380 in daily coinsurance without supplemental coverage. With Medigap Plan G, that cost is $0. This is one of the most financially significant benefits of a Medigap plan.{" "}
                        <Link href="/do-i-need-a-supplement" className="underline font-medium hover:text-blue-900">
                          Learn more about Medigap plans.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Section */}
                <div id="local" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Skilled Nursing Coverage in Brandon and the Tampa Bay Area
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Local guidance for Hillsborough County Medicare beneficiaries.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#0d2d6b] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="font-bold text-[#0d2d6b]">Serving Brandon, Tampa, Riverview, Valrico, and Hillsborough County</p>
                    </div>
                    <div className="prose prose-sm prose-gray max-w-none text-gray-700 space-y-3">
                      <p>
                        Brandon and the greater Tampa Bay area have numerous Medicare-certified skilled nursing facilities serving Hillsborough County. Following a hospital stay at HCA Florida Brandon Hospital, AdventHealth Brandon, or St. Joseph's Hospital, patients are often discharged to a local SNF for rehabilitation before returning home. Common SNF destinations in the area include facilities in Brandon, Riverview, Valrico, and the broader Tampa Bay region.
                      </p>
                      <p>
                        If you have a Medicare Advantage plan, your plan's discharge coordinator will typically recommend in-network SNFs. It is important to confirm that the recommended facility is in your plan's network before transfer. If you have Original Medicare with a Medigap plan, you have the flexibility to choose any Medicare-certified SNF in the area without network restrictions.
                      </p>
                      <p>
                        One of the most common and costly mistakes in the Brandon and Tampa Bay area is assuming that a hospital stay qualifies for SNF coverage without confirming inpatient admission status. Greg Wohl helps local residents understand their Medicare benefits before a health event occurs, so they are prepared when they need care most. Call (813) 742-8888 for a no-cost consultation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cross-link callout */}
                <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
                  <p className="font-bold text-amber-900 mb-2">Related Coverage Questions</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Link href="/coverage/physical-therapy" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Physical Therapy?
                    </Link>
                    <Link href="/coverage/medical-equipment" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Medical Equipment?
                    </Link>
                    <Link href="/do-i-need-a-supplement" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Do I Need a Medigap Plan?
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <div id="faq" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Common questions about Medicare skilled nursing facility coverage.
                  </p>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                          aria-expanded={openFaq === i}
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                          {openFaq === i
                            ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          }
                        </button>
                        {openFaq === i && (
                          <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inline CTA */}
                <div className="bg-[#0d2d6b] rounded-2xl px-6 py-8 text-white text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                    Understand Your SNF Benefits Before You Need Them
                  </h3>
                  <p className="text-blue-200 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
                    A skilled nursing facility stay can cost thousands of dollars without the right coverage. Greg Wohl helps Brandon and Tampa Bay area residents choose a plan that protects them when it matters most.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:+18137428888"
                      className="inline-flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-[#0d2d6b] font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      (813) 742-8888
                    </a>
                    <Link
                      href="/do-i-need-a-supplement"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                    >
                      Compare Medigap Plans
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sticky Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* TOC */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">On This Page</p>
                    <nav className="space-y-1">
                      {tocItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-[#0d2d6b] hover:font-medium transition-colors py-1"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>

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
                    <a
                      href="tel:+18137428888"
                      className="flex items-center justify-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-3 rounded-xl transition-colors w-full mb-3 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      (813) 742-8888
                    </a>
                    <Link
                      href="/do-i-need-a-supplement"
                      className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2.5 rounded-xl transition-colors w-full text-sm"
                    >
                      Compare Medigap Plans
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Related Pages */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Related Pages</p>
                    <div className="space-y-2">
                      {[
                        { label: "Do I Need a Medigap Plan?", href: "/do-i-need-a-supplement" },
                        { label: "Does Medicare Cover Physical Therapy?", href: "/coverage/physical-therapy" },
                        { label: "Does Medicare Cover Medical Equipment?", href: "/coverage/medical-equipment" },
                        { label: "Medicare Part A Overview", href: "/medicare-part-a" },
                        { label: "Coverage Q&A Hub", href: "/coverage-qa" },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d2d6b] hover:font-medium transition-colors py-1 border-b border-gray-50 last:border-0"
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

        {/* Bottom CTA Band */}
        <section className="bg-[#0d2d6b] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Get Help Understanding Your Skilled Nursing Benefits
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              A SNF stay can cost $16,760 or more without the right coverage. Greg Wohl helps Brandon and Tampa Bay area residents choose a Medigap or Advantage plan that protects them.
            </p>
            <a
              href="tel:+18137428888"
              className="inline-flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-[#0d2d6b] font-bold px-8 py-4 rounded-xl text-lg transition-colors"
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
