"use client";

/* ==========================================================================
   MedicarePartAClient -- /medicare-part-a
   Medicare Part A: Hospital Insurance -- Complete Guide
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
  Hospital,
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
  { label: "Inpatient hospital stays", detail: "Semi-private room, meals, general nursing, and hospital services during a medically necessary admission." },
  { label: "Skilled nursing facility (SNF) care", detail: "Up to 100 days per benefit period following a qualifying 3-day inpatient hospital stay. Days 1-20 are fully covered; days 21-100 require a daily copay." },
  { label: "Home health care", detail: "Part-time or intermittent skilled nursing care, physical therapy, speech-language pathology, and occupational therapy ordered by a physician." },
  { label: "Hospice care", detail: "Comfort care for people with a terminal illness who choose to stop curative treatment. Covers pain relief, symptom management, and support services." },
  { label: "Inpatient mental health care", detail: "Psychiatric care received in a hospital setting, subject to the same cost-sharing rules as other inpatient stays." },
  { label: "Blood (inpatient)", detail: "Part A covers blood received during an inpatient stay after the first 3 pints." },
];

const WHAT_NOT_COVERED = [
  "Long-term custodial care (help with daily activities like bathing or dressing)",
  "Private-duty nursing",
  "Private hospital room (unless medically necessary)",
  "Personal comfort items (TV, phone, toiletries)",
  "Outpatient services (covered by Part B)",
  "Prescription drugs taken at home (covered by Part D)",
  "Dental, vision, and hearing care",
  "Custodial care in a nursing home",
];

const COSTS_2025 = [
  { item: "Part A Premium", value: "$0 for most people (40+ quarters worked)", note: "$278/mo for 30-39 quarters; $505/mo for fewer than 30 quarters" },
  { item: "Inpatient Deductible", value: "$1,676 per benefit period", note: "Applies once per benefit period, not once per year" },
  { item: "Hospital Coinsurance (Days 1-60)", value: "$0", note: "Fully covered after deductible" },
  { item: "Hospital Coinsurance (Days 61-90)", value: "$419/day", note: "Per day coinsurance" },
  { item: "Lifetime Reserve Days (Days 91+)", value: "$838/day", note: "60 lifetime reserve days total" },
  { item: "SNF Coinsurance (Days 21-100)", value: "$209.50/day", note: "Days 1-20 are $0; no coverage after day 100" },
];

const FAQ_ITEMS = [
  {
    q: "Is Medicare Part A free?",
    a: "Most people pay no premium for Part A because they or their spouse worked and paid Medicare taxes for at least 40 quarters (10 years). If you have fewer than 40 quarters, you will pay a monthly premium. In 2025, the premium is $278/month for 30-39 quarters and $505/month for fewer than 30 quarters.",
  },
  {
    q: "When does Medicare Part A coverage begin?",
    a: "If you enroll during your Initial Enrollment Period (the 7-month window around your 65th birthday), coverage begins on the first day of your birthday month if you enroll in the first 3 months of your IEP. If you enroll in your birthday month or after, coverage is delayed by 1-3 months.",
  },
  {
    q: "What is a Medicare benefit period?",
    a: "A benefit period begins the day you are admitted as an inpatient to a hospital or SNF and ends when you have not received inpatient care for 60 consecutive days. There is no limit to the number of benefit periods you can have. Each new benefit period requires a new deductible.",
  },
  {
    q: "Does Part A cover skilled nursing facility stays?",
    a: "Yes, but with conditions. You must have a qualifying inpatient hospital stay of at least 3 days (not counting the discharge day). Part A covers the full cost for days 1-20 in the SNF. Days 21-100 require a daily coinsurance of $209.50 in 2025. After day 100, Medicare pays nothing.",
  },
  {
    q: "What is the difference between inpatient and observation status?",
    a: "Observation status means you are an outpatient even if you are staying overnight in the hospital. This matters because you need a 3-day inpatient stay (not observation) to qualify for SNF coverage. Always ask your doctor or hospital whether you are admitted as an inpatient or placed under observation.",
  },
  {
    q: "Can I have Part A without Part B?",
    a: "Yes. You can enroll in Part A alone without enrolling in Part B. However, most people enroll in both. If you have employer coverage and want to delay Part B, you can enroll in Part A only and add Part B later using a Special Enrollment Period.",
  },
];

const RELATED_LINKS = [
  { label: "Medicare Part B: Medical Insurance", href: "/medicare-part-b", desc: "Doctor visits, outpatient care, and preventive services" },
  { label: "Medicare 101 Overview", href: "/medicare-101", desc: "The complete beginner's guide to all parts of Medicare" },
  { label: "Enrollment Timeline", href: "/enrollment-timeline", desc: "Key dates and deadlines for enrolling in Medicare" },
  { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2025 and 2026 premiums, deductibles, and coinsurance" },
  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "How Medigap fills Part A cost gaps" },
];

const TOC = [
  { id: "what-is", label: "What Is Part A?" },
  { id: "what-covered", label: "What Part A Covers" },
  { id: "what-not-covered", label: "What Is Not Covered" },
  { id: "costs", label: "2025 Costs" },
  { id: "eligibility", label: "Eligibility and Enrollment" },
  { id: "part-a-vs-advantage", label: "Part A with Medicare Advantage" },
  { id: "faq", label: "Frequently Asked Questions" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MedicarePartAClient() {
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
            <span className="text-white/70">Part A</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Original Medicare
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Medicare Part A: Hospital Insurance
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              Part A is the hospital insurance component of Original Medicare. It covers inpatient hospital stays, skilled nursing facility care, hospice, and home health services. Most people pay no premium for Part A.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { icon: <DollarSign size={16} />, stat: "$0", label: "Premium for most" },
                { icon: <Hospital size={16} />, stat: "$1,676", label: "2025 deductible" },
                { icon: <Shield size={16} />, stat: "100 days", label: "Max SNF coverage" },
                { icon: <Clock size={16} />, stat: "7 months", label: "Initial enrollment window" },
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

            {/* What Is Part A */}
            <section id="what-is">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                What Is Medicare Part A?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Medicare Part A is the hospital insurance portion of Original Medicare. It is one of the two parts of Original Medicare, alongside <Link href="/medicare-part-b" className="text-blue-700 underline hover:text-blue-900">Medicare Part B</Link>, which covers outpatient and medical services. Together, Parts A and B make up what is commonly called "Original Medicare" or "Traditional Medicare."
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Part A is administered by the federal government through the Centers for Medicare and Medicaid Services (CMS). It is funded primarily through payroll taxes paid by workers and employers throughout a person's working life. This is why most people who have worked at least 10 years qualify for premium-free Part A when they turn 65.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Part A does not cover everything related to hospital care. It specifically covers inpatient services, meaning services you receive after a formal hospital admission. Outpatient services, including emergency room visits that do not result in an inpatient admission, are covered under Part B.
              </p>
            </section>

            {/* What Is Covered */}
            <section id="what-covered">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                What Medicare Part A Covers
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
                What Part A Does Not Cover
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
                  Long-term custodial care is one of the most significant gaps in Medicare coverage. If you need help with daily activities such as bathing, dressing, or eating on a long-term basis, Medicare will not pay for it. This is a key reason many people consider long-term care insurance or Medicaid planning. See our <Link href="/coverage/long-term-care" className="underline font-semibold hover:text-amber-900">Does Medicare Cover Long-Term Care?</Link> page for a full breakdown.
                </p>
              </div>
            </section>

            {/* Costs */}
            <section id="costs">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Medicare Part A Costs in 2025
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
                Source: Centers for Medicare and Medicaid Services, 2025. For the full cost reference including Part B, see our <Link href="/costs-at-a-glance" className="text-blue-700 underline hover:text-blue-900">Medicare Costs at a Glance</Link> page.
              </p>
            </section>

            {/* Eligibility and Enrollment */}
            <section id="eligibility">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Eligibility and Enrollment
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                You are eligible for Medicare Part A at age 65 if you are a U.S. citizen or permanent legal resident who has lived in the United States for at least 5 consecutive years. You may also qualify under age 65 if you have received Social Security Disability Insurance (SSDI) for 24 months, or if you have End-Stage Renal Disease (ESRD) or ALS (Lou Gehrig's disease).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Your <strong>Initial Enrollment Period (IEP)</strong> is a 7-month window: 3 months before your 65th birthday month, your birthday month itself, and 3 months after. Enrolling in the first 3 months of your IEP ensures coverage begins on the first day of your birthday month.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                If you are already receiving Social Security benefits when you turn 65, you are enrolled in Part A automatically. If not, you must actively sign up through the Social Security Administration online, by phone, or in person.
              </p>
              <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
                <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 leading-relaxed">
                  Unlike Part B, there is no late enrollment penalty for Part A if you qualify for premium-free coverage. However, if you must pay a premium for Part A and delay enrollment without a qualifying reason, a 10% penalty applies for twice the number of years you delayed. For a full enrollment timeline, see our <Link href="/enrollment-timeline" className="underline font-semibold hover:text-blue-900">Medicare Enrollment Timeline</Link>.
                </p>
              </div>
            </section>

            {/* Part A with Medicare Advantage */}
            <section id="part-a-vs-advantage">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Part A with Medicare Advantage
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                If you enroll in a Medicare Advantage plan (Part C), you still have Part A. Medicare Advantage plans are required to cover everything Original Medicare covers, including all Part A hospital benefits. The difference is that your care is managed through the Advantage plan's network and rules rather than directly through Medicare.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Medicare Advantage plans may have different cost-sharing structures for inpatient hospital stays, such as a per-day copay instead of the Part A deductible. Some plans have lower out-of-pocket costs for short hospital stays; others may cost more for extended stays. Always review your plan's Summary of Benefits before enrolling.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                For a side-by-side comparison of how Original Medicare and Medicare Advantage handle hospital coverage and other benefits, see our <Link href="/original-vs-advantage" className="text-blue-700 underline hover:text-blue-900">Original Medicare vs. Medicare Advantage</Link> guide.
              </p>
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
                <p className="text-lg font-bold mb-1">Have Questions About Your Part A Coverage?</p>
                <p className="text-sm text-white/70">A licensed Medicare specialist can review your specific situation at no cost to you.</p>
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
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png" alt="Greg Wohl, Licensed Medicare Advisor" className="w-10 h-10 rounded-full object-cover object-top" />
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
            A local Medicare specialist can help you understand your Part A benefits and find the right plan for your situation.
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
