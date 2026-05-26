"use client";

/* ==========================================================================
   MedicarePartBClient -- /medicare-part-b
   Medicare Part B: Medical Insurance -- Complete Guide
   Design: MIP brand -- navy/gold, pillar-style two-column editorial layout
   No em dashes anywhere in this file.
   ========================================================================== */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  ChevronRight,
  Phone,
  ArrowRight,
  Info,
  AlertCircle,
  Clock,
  DollarSign,
  Shield,
  Stethoscope,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
        </div>
      )}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHAT_COVERED = [
  { label: "Doctor visits and outpatient care", detail: "Visits to your primary care physician, specialists, and other healthcare providers. Includes office visits, consultations, and second opinions." },
  { label: "Preventive services", detail: "Annual wellness visits, flu shots, cancer screenings (mammograms, colonoscopies, prostate exams), cardiovascular screenings, diabetes screenings, and many other preventive tests at no cost to you." },
  { label: "Outpatient surgery and procedures", detail: "Surgeries and procedures performed in an outpatient setting, including ambulatory surgical centers. You are not admitted overnight." },
  { label: "Emergency room visits", detail: "Emergency department care. Note: if you are admitted to the hospital from the ER, Part A takes over for the inpatient stay." },
  { label: "Ambulance services", detail: "Ground and air ambulance transportation when other transportation would endanger your health. Coverage applies when transport is to the nearest appropriate facility." },
  { label: "Durable medical equipment (DME)", detail: "Wheelchairs, walkers, hospital beds, oxygen equipment, blood sugar monitors, and other equipment prescribed by your doctor for home use." },
  { label: "Mental health services (outpatient)", detail: "Individual and group therapy, psychiatric evaluations, and outpatient mental health treatment. Part B covers 80% after the deductible." },
  { label: "Home health care", detail: "Part-time skilled nursing care and therapy services ordered by a physician for homebound patients. Part B covers home health when no prior hospitalization is required." },
  { label: "Diabetes supplies and education", detail: "Blood sugar testing supplies, therapeutic shoes for people with diabetes, and diabetes self-management training programs." },
  { label: "Clinical research and trials", detail: "Routine costs associated with approved clinical research studies, including some experimental treatments." },
];

const WHAT_NOT_COVERED = [
  "Routine dental care (cleanings, fillings, dentures)",
  "Routine vision exams and eyeglasses",
  "Hearing aids and routine hearing exams",
  "Cosmetic surgery",
  "Acupuncture (except for chronic low back pain)",
  "Long-term custodial care",
  "Prescription drugs taken at home (covered by Part D)",
  "Care received outside the United States (with limited exceptions)",
  "Routine foot care (with limited exceptions for diabetics)",
];

const COSTS_2025 = [
  { item: "Part B Premium", value: "$185.00/month", note: "Standard amount; higher earners pay more via IRMAA" },
  { item: "Annual Deductible", value: "$257/year", note: "You pay 100% of covered services until this is met" },
  { item: "Coinsurance After Deductible", value: "20%", note: "Medicare pays 80%; you pay 20% with no out-of-pocket cap" },
  { item: "Preventive Services", value: "$0", note: "No deductible or coinsurance for most preventive services" },
  { item: "Outpatient Mental Health", value: "20% after deductible", note: "Same as other Part B services" },
  { item: "Late Enrollment Penalty", value: "10% per 12-month period", note: "Added to your premium permanently if you delay without qualifying coverage" },
];

const IRMAA_2025 = [
  { income: "$106,000 or less (individual)", premium: "$185.00/month" },
  { income: "$106,001 to $133,000", premium: "$259.00/month" },
  { income: "$133,001 to $167,000", premium: "$370.00/month" },
  { income: "$167,001 to $200,000", premium: "$480.90/month" },
  { income: "$200,001 to $500,000", premium: "$591.90/month" },
  { income: "Above $500,000", premium: "$628.90/month" },
];

const FAQ_ITEMS = [
  {
    q: "Can I delay Part B if I have employer coverage?",
    a: "Yes. If you or your spouse is actively working and covered by a group health plan from an employer with 20 or more employees, you can delay Part B without penalty. You will have a Special Enrollment Period to sign up within 8 months of losing that coverage or stopping work, whichever comes first. See our <a href='/enrollment-timeline' class='text-blue-700 underline'>Medicare Enrollment Timeline</a> for full details.",
  },
  {
    q: "What is the Part B late enrollment penalty?",
    a: "If you do not enroll in Part B when first eligible and you do not have qualifying coverage that allows you to delay, you will pay a 10% penalty for each full 12-month period you were eligible but did not enroll. This penalty is added to your monthly premium permanently for as long as you have Part B.",
  },
  {
    q: "What is IRMAA?",
    a: "IRMAA stands for Income-Related Monthly Adjustment Amount. If your modified adjusted gross income from 2 years ago exceeds certain thresholds, you pay a higher Part B premium. For 2025, the standard premium is $185/month, but higher earners can pay up to $628.90/month. Social Security will notify you if IRMAA applies to you.",
  },
  {
    q: "Does Part B cover prescription drugs?",
    a: "Part B covers a limited set of drugs that are administered in a clinical setting, such as chemotherapy drugs given by infusion, certain injectable medications, and drugs used with durable medical equipment like nebulizers. It does not cover most prescription drugs you take at home. Those are covered by <a href='/understanding-part-d' class='text-blue-700 underline'>Medicare Part D</a>.",
  },
  {
    q: "What is the difference between Part A and Part B?",
    a: "Part A is hospital insurance, covering inpatient stays, skilled nursing facility care, hospice, and some home health services. Part B is medical insurance, covering doctor visits, outpatient care, preventive services, and durable medical equipment. Together they make up Original Medicare. See our <a href='/medicare-part-a' class='text-blue-700 underline'>Medicare Part A</a> page for a full breakdown.",
  },
  {
    q: "Are preventive services really free under Part B?",
    a: "Most preventive services are covered at 100% with no deductible or coinsurance when you see a provider who accepts Medicare assignment. However, if a preventive visit turns into a diagnostic visit because your doctor finds something to investigate, you may owe the Part B deductible and coinsurance for the diagnostic portion. Always ask your provider whether the visit is being billed as preventive or diagnostic.",
  },
];

const RELATED_LINKS = [
  { label: "Medicare Part A: Hospital Insurance", href: "/medicare-part-a", desc: "Inpatient hospital stays, skilled nursing, and hospice" },
  { label: "Medicare 101 Overview", href: "/medicare-101", desc: "The complete beginner's guide to all parts of Medicare" },
  { label: "Understanding Part D", href: "/understanding-part-d", desc: "Prescription drug coverage explained" },
  { label: "Enrollment Timeline", href: "/enrollment-timeline", desc: "Key dates and deadlines for enrolling in Medicare" },
  { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2025 and 2026 premiums, deductibles, and coinsurance" },
  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "How Medigap covers the 20% Part B coinsurance" },
];

const TOC = [
  { id: "what-is", label: "What Is Part B?" },
  { id: "what-covered", label: "What Part B Covers" },
  { id: "what-not-covered", label: "What Is Not Covered" },
  { id: "costs", label: "2025 Costs" },
  { id: "irmaa", label: "IRMAA: Higher-Income Premiums" },
  { id: "eligibility", label: "Eligibility and Enrollment" },
  { id: "part-b-gap", label: "The 20% Gap Problem" },
  { id: "faq", label: "Frequently Asked Questions" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MedicarePartBClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/medicare-101" className="hover:text-white/80 transition-colors">Medicare 101</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Part B</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Original Medicare
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Medicare Part B: Medical Insurance
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              Part B is the medical insurance component of Original Medicare. It covers doctor visits, outpatient care, preventive services, and durable medical equipment. Most people pay a monthly premium for Part B, and there is no cap on your out-of-pocket costs.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { icon: <DollarSign size={16} />, stat: "$185/mo", label: "2025 standard premium" },
                { icon: <Shield size={16} />, stat: "$257", label: "2025 annual deductible" },
                { icon: <Stethoscope size={16} />, stat: "20%", label: "Your coinsurance share" },
                { icon: <Clock size={16} />, stat: "8 months", label: "SEP window after employer coverage" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                  <div className="flex justify-center mb-1 text-[#c9a84c]">{item.icon}</div>
                  <p className="text-lg font-bold text-white">{item.stat}</p>
                  <p className="text-[0.7rem] text-white/60 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Article */}
          <article className="space-y-12 min-w-0">

            {/* What Is Part B */}
            <section id="what-is">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                What Is Medicare Part B?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Medicare Part B is the medical insurance portion of Original Medicare. It works alongside <Link href="/medicare-part-a" className="text-blue-700 underline hover:text-blue-900">Medicare Part A</Link> to form the foundation of your Medicare coverage. While Part A handles inpatient hospital care, Part B covers the outpatient and medical services you use on a day-to-day basis.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Unlike Part A, which is free for most people, Part B requires a monthly premium. In 2025, the standard premium is $185.00 per month. This amount is typically deducted directly from your Social Security benefit if you are receiving it. If you are not yet receiving Social Security, you will receive a bill from Medicare.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                One of the most important things to understand about Part B is that it has no out-of-pocket maximum. After you meet the annual deductible, you pay 20% of the Medicare-approved amount for most covered services, with no cap. This is why many people choose to add a <Link href="/do-i-need-a-supplement" className="text-blue-700 underline hover:text-blue-900">Medigap supplement</Link> or enroll in a Medicare Advantage plan to limit their exposure.
              </p>
            </section>

            {/* What Is Covered */}
            <section id="what-covered">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                What Medicare Part B Covers
              </h2>
              <div className="space-y-3">
                {WHAT_COVERED.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-xl border border-gray-100 shadow-sm px-5 py-4">
                    <CheckCircle size={17} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800 mb-0.5">{item.label}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What Is Not Covered */}
            <section id="what-not-covered">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                What Part B Does Not Cover
              </h2>
              <div className="rounded-xl bg-red-50 border border-red-100 px-5 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {WHAT_NOT_COVERED.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-900 leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
                <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  Dental, vision, and hearing are the three most common gaps people discover after enrolling in Original Medicare. Many Medicare Advantage plans include these benefits. See our coverage pages for{" "}
                  <Link href="/coverage/dental" className="underline font-semibold">dental</Link>,{" "}
                  <Link href="/coverage/vision" className="underline font-semibold">vision</Link>, and{" "}
                  <Link href="/coverage/hearing-aids" className="underline font-semibold">hearing aids</Link> for full details.
                </p>
              </div>
            </section>

            {/* Costs */}
            <section id="costs">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Medicare Part B Costs in 2025
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1f5c] text-white">
                      <th className="text-left px-5 py-3 font-bold">Cost Item</th>
                      <th className="text-left px-5 py-3 font-bold">Amount</th>
                      <th className="text-left px-5 py-3 font-bold hidden sm:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COSTS_2025.map((row, i) => (
                      <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3 font-semibold text-gray-800">{row.item}</td>
                        <td className="px-5 py-3 text-gray-700">{row.value}</td>
                        <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Source: Centers for Medicare and Medicaid Services, 2025. For the full cost reference including Part A, see our <Link href="/costs-at-a-glance" className="text-blue-700 underline hover:text-blue-900">Medicare Costs at a Glance</Link> page.
              </p>
            </section>

            {/* IRMAA */}
            <section id="irmaa">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                IRMAA: Higher-Income Premiums
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                If your income exceeds certain thresholds, you will pay more than the standard $185/month premium. This additional amount is called the Income-Related Monthly Adjustment Amount, or IRMAA. Social Security uses your tax return from 2 years ago to determine whether IRMAA applies to you.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1f5c] text-white">
                      <th className="text-left px-5 py-3 font-bold">2025 Individual Income</th>
                      <th className="text-left px-5 py-3 font-bold">Monthly Part B Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {IRMAA_2025.map((row, i) => (
                      <tr key={row.income} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3 text-gray-700">{row.income}</td>
                        <td className="px-5 py-3 font-semibold text-gray-800">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
                <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 leading-relaxed">
                  If your income has dropped significantly since the tax year Medicare is using (for example, due to retirement, divorce, or loss of a spouse), you can appeal your IRMAA determination by filing Form SSA-44 with the Social Security Administration.
                </p>
              </div>
            </section>

            {/* Eligibility and Enrollment */}
            <section id="eligibility">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Eligibility and Enrollment
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                You are eligible for Part B at age 65 if you are eligible for Part A. Unlike Part A, Part B is optional, but most people should enroll when first eligible to avoid the late enrollment penalty.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Your <strong>Initial Enrollment Period (IEP)</strong> is the same 7-month window as Part A: 3 months before your 65th birthday month, your birthday month, and 3 months after. If you miss this window without qualifying coverage, you must wait for the <strong>General Enrollment Period</strong> (January 1 through March 31 each year), with coverage starting July 1.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                If you have active employer coverage through a current employer (yours or your spouse's) with 20 or more employees, you can delay Part B without penalty. You will have a <strong>Special Enrollment Period</strong> of 8 months after that coverage ends to enroll in Part B.
              </p>
              <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
                <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-900 leading-relaxed">
                  COBRA and retiree health coverage do not qualify as active employer coverage for the purpose of delaying Part B. If you rely on COBRA after leaving a job, you should enroll in Part B during your IEP or SEP to avoid the permanent penalty. See our <Link href="/enrollment-timeline" className="underline font-semibold hover:text-red-900">Enrollment Timeline</Link> for the full breakdown.
                </p>
              </div>
            </section>

            {/* The 20% Gap Problem */}
            <section id="part-b-gap">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                The 20% Gap Problem
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Part B pays 80% of the Medicare-approved amount for most covered services after you meet the annual deductible. You are responsible for the remaining 20%, and there is no out-of-pocket maximum. For most routine care, this is manageable. But for major outpatient procedures, cancer treatment, or ongoing specialist care, 20% can add up to thousands of dollars.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                There are two main ways to address this gap:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 shadow-sm px-5 py-5">
                  <p className="text-sm font-bold text-gray-900 mb-2">Medigap Supplement Plans</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Medigap plans (also called Medicare Supplement Insurance) pay after Original Medicare pays, covering some or all of your Part B coinsurance depending on the plan. Plan G is the most comprehensive option available to new enrollees. See our <Link href="/do-i-need-a-supplement" className="text-blue-700 underline">Do I Need a Supplement?</Link> guide.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 shadow-sm px-5 py-5">
                  <p className="text-sm font-bold text-gray-900 mb-2">Medicare Advantage Plans</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Medicare Advantage plans replace Original Medicare and typically have fixed copays instead of 20% coinsurance, plus an annual out-of-pocket maximum. They often include extra benefits like dental, vision, and hearing. See our <Link href="/original-vs-advantage" className="text-blue-700 underline">Original vs. Advantage</Link> comparison.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>

            {/* Inline CTA */}
            <div className="rounded-2xl bg-[#0d1f5c] text-white px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">Concerned About the 20% Coinsurance?</p>
                <p className="text-sm text-white/70">A licensed Medicare specialist can show you your options for capping your out-of-pocket costs at no charge to you.</p>
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
                  Take the Medicare Quiz
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 self-start">

            {/* Table of Contents */}
            <div className="rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">On This Page</p>
              <nav className="space-y-2">
                {TOC.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1f5c] transition-colors group"
                  >
                    <ChevronRight size={12} className="text-[#c9a84c] group-hover:translate-x-0.5 transition-transform" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Agent CTA */}
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#0d1f5c] px-5 py-4">
                <p className="text-white font-bold text-sm">Speak With a Medicare Specialist</p>
                <p className="text-white/60 text-xs mt-0.5">Free consultation, no obligation</p>
              </div>
              <div className="px-5 py-5 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png"
                    alt="Greg Wohl, Licensed Medicare Advisor"
                    className="w-10 h-10 rounded-full object-cover object-top"
                  />
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
                  <Link key={link.href} href={link.href} className="flex items-start gap-2 group">
                    <ArrowRight size={13} className="text-[#c9a84c] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0d1f5c] transition-colors">{link.label}</p>
                      <p className="text-xs text-gray-400 leading-snug">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Bottom CTA Band */}
      <div className="bg-[#0d1f5c] text-white py-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Ready to Review Your Medicare Options?
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            A local Medicare specialist can help you understand your Part B benefits and find the right plan to protect you from unlimited 20% coinsurance.
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
