"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronRight, Phone, CheckCircle, AlertCircle, Info, ArrowRight, Shield, Clock, DollarSign, Users } from "lucide-react";

// ── Medicare Parts ──────────────────────────────────────────────────────────
const PARTS = [
  {
    letter: "A",
    name: "Hospital Insurance",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    icon: "🏥",
    tagline: "Covers inpatient care",
    cost: "Usually $0 premium if you worked 10+ years",
    covers: [
      "Inpatient hospital stays",
      "Skilled nursing facility care",
      "Hospice care",
      "Some home health services",
    ],
    doesNotCover: ["Long-term custodial care", "Private-duty nursing", "Most dental and vision"],
    href: "/medicare-part-a",
  },
  {
    letter: "B",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    name: "Medical Insurance",
    icon: "👨‍⚕️",
    tagline: "Covers outpatient care",
    cost: "Standard premium: $185/month in 2025",
    covers: [
      "Doctor visits and specialist care",
      "Outpatient procedures",
      "Preventive screenings",
      "Medical equipment (wheelchairs, walkers)",
      "Mental health services",
    ],
    doesNotCover: ["Prescription drugs", "Routine dental, vision, hearing", "Cosmetic procedures"],
    href: "/medicare-part-b",
  },
  {
    letter: "C",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    name: "Medicare Advantage",
    icon: "⭐",
    tagline: "All-in-one private plans",
    cost: "Varies by plan; many have $0 premium",
    covers: [
      "Everything Parts A and B cover",
      "Often includes Part D drug coverage",
      "Frequently adds dental, vision, hearing",
      "May include fitness benefits",
    ],
    doesNotCover: ["Out-of-network care (HMO plans)", "Services outside plan area"],
    href: "/medicare-advantage",
  },
  {
    letter: "D",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
    name: "Drug Coverage",
    icon: "💊",
    tagline: "Covers prescription drugs",
    cost: "Average premium: ~$40/month in 2025",
    covers: [
      "Brand-name and generic drugs",
      "Drugs on the plan's formulary",
      "Vaccines not covered by Part B",
    ],
    doesNotCover: ["Drugs not on the formulary", "Some over-the-counter medications"],
    href: "/understanding-part-d",
  },
];

// ── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "When am I eligible for Medicare?",
    a: "Most people become eligible at age 65. You may qualify earlier if you have received Social Security Disability Insurance (SSDI) for 24 months, or if you have End-Stage Renal Disease (ESRD) or ALS (Lou Gehrig's Disease) at any age.",
  },
  {
    q: "Is Medicare free?",
    a: "Part A is usually free if you or your spouse worked and paid Medicare taxes for at least 10 years (40 quarters). Part B has a standard monthly premium of $185 in 2025. Parts C and D vary by plan. Even with premiums, Medicare is typically far less expensive than private insurance.",
  },
  {
    q: "What is the difference between Medicare and Medicaid?",
    a: "Medicare is a federal program based on age (65+) or disability, available to most Americans regardless of income. Medicaid is a joint federal-state program based on financial need, available at any age. Some people qualify for both, which is called 'dual eligibility.'",
  },
  {
    q: "When should I sign up for Medicare?",
    a: "Your Initial Enrollment Period (IEP) is a 7-month window that starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. Signing up during the first 3 months ensures coverage starts on time. Missing this window can result in permanent late penalties.",
  },
  {
    q: "Can I keep my doctor with Medicare?",
    a: "With Original Medicare (Parts A and B), you can see any doctor or hospital in the U.S. that accepts Medicare, with no referrals needed. With Medicare Advantage (Part C), you typically need to use the plan's network of providers, though PPO plans offer more flexibility.",
  },
  {
    q: "Do I need a Medicare Supplement (Medigap) plan?",
    a: "Original Medicare covers about 80% of approved costs, leaving you responsible for the remaining 20% with no out-of-pocket maximum. A Medigap plan fills those gaps, covering copays, coinsurance, and deductibles. It is especially valuable if you have frequent medical needs or want predictable costs.",
  },
  {
    q: "What happens if I miss my enrollment window?",
    a: "Missing your Initial Enrollment Period can result in a permanent 10% penalty on your Part B premium for each 12-month period you were eligible but did not enroll. Part D has a similar penalty of 1% per month. There are exceptions if you have qualifying employer coverage.",
  },
  {
    q: "Can I have Medicare and employer insurance at the same time?",
    a: "Yes. If you are still working and covered by employer insurance, you can delay Medicare without penalty. Once you retire or lose employer coverage, you have an 8-month Special Enrollment Period to sign up for Medicare without facing late penalties.",
  },
];

// ── Costs Table ─────────────────────────────────────────────────────────────
const COSTS_2025 = [
  { part: "Part A", premium: "$0 (if 40+ work quarters)", deductible: "$1,676 per benefit period", coinsurance: "$0 days 1-60; $419/day days 61-90" },
  { part: "Part B", premium: "$185/month (standard)", deductible: "$257/year", coinsurance: "20% after deductible" },
  { part: "Part C", premium: "Varies ($0 to $100+/month)", deductible: "Varies by plan", coinsurance: "Varies by plan; has out-of-pocket max" },
  { part: "Part D", premium: "~$40/month average", deductible: "Up to $590/year", coinsurance: "Varies by drug tier" },
];

// ── Enrollment Timeline ──────────────────────────────────────────────────────
const TIMELINE = [
  { period: "Initial Enrollment Period (IEP)", window: "7 months around your 65th birthday", detail: "Starts 3 months before your birthday month, includes your birthday month, ends 3 months after. Best time to enroll." },
  { period: "Special Enrollment Period (SEP)", window: "8 months after losing employer coverage", detail: "If you delayed Medicare because of active employer coverage, you have 8 months after that coverage ends to enroll without penalty." },
  { period: "General Enrollment Period (GEP)", window: "January 1 to March 31 each year", detail: "If you missed your IEP and do not qualify for an SEP, you can enroll here. Coverage starts July 1. Late penalties may apply." },
  { period: "Annual Enrollment Period (AEP)", window: "October 15 to December 7 each year", detail: "Switch between Original Medicare and Medicare Advantage, or change your Part D plan. Changes take effect January 1." },
];

// ── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-[0.97rem] pr-4">{q}</span>
        <ChevronDown
          size={18}
          className="text-[#1a3fa8] shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-[0.95rem]">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Part Card ────────────────────────────────────────────────────────────────
function PartCard({ part }: { part: typeof PARTS[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="rounded-2xl border overflow-hidden flex flex-col"
      style={{ borderColor: part.border, background: "#fff" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4" style={{ background: part.bg }}>
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl font-serif shrink-0"
            style={{ background: part.color }}
          >
            {part.letter}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: part.color }}>
              Medicare Part {part.letter}
            </div>
            <div className="font-bold text-gray-900 text-lg leading-tight">{part.name}</div>
          </div>
        </div>
        <p className="text-sm text-gray-600 font-medium">{part.tagline}</p>
      </div>

      {/* Cost badge */}
      <div className="px-6 py-3 border-b" style={{ borderColor: part.border, background: part.bg + "80" }}>
        <div className="flex items-center gap-2 text-sm">
          <DollarSign size={14} style={{ color: part.color }} />
          <span className="text-gray-700">{part.cost}</span>
        </div>
      </div>

      {/* Covers */}
      <div className="px-6 py-4 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">What It Covers</p>
        <ul className="space-y-1.5">
          {part.covers.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: part.color }} />
              {item}
            </li>
          ))}
        </ul>

        {/* Does not cover (expandable) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
          style={{ color: part.color }}
        >
          <ChevronDown size={13} style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
          {expanded ? "Hide" : "What it does not cover"}
        </button>
        {expanded && (
          <ul className="mt-2 space-y-1.5">
            {part.doesNotCover.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                <AlertCircle size={13} className="shrink-0 mt-0.5 text-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA */}
      <div className="px-6 pb-5">
        <Link
          href={part.href}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-colors"
          style={{ background: part.bg, color: part.color, border: `1.5px solid ${part.border}` }}
        >
          Learn About Part {part.letter} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function WhatIsMedicareClient() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">Home</Link>
              <ChevronRight size={13} className="text-blue-500" />
              <span className="text-blue-200 text-sm">What Is Medicare</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Info size={12} /> Medicare 101
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              What Is Medicare?
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Medicare is the federal health insurance program for Americans 65 and older, and for certain younger people with disabilities. It is one of the most important financial decisions you will make, and understanding it does not have to be complicated.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors"
              >
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Get a Free Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Quick Stats ── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center gap-1.5 py-4">
                <Users size={20} className="text-[#1a3fa8]" />
                <div className="text-2xl font-black text-[#0d1f5c] font-serif">67M+</div>
                <div className="text-sm text-gray-500">Americans enrolled</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 py-4">
                <Shield size={20} className="text-[#1a3fa8]" />
                <div className="text-2xl font-black text-[#0d1f5c] font-serif">1965</div>
                <div className="text-sm text-gray-500">Year Medicare began</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 py-4">
                <DollarSign size={20} className="text-[#1a3fa8]" />
                <div className="text-2xl font-black text-[#0d1f5c] font-serif">$0</div>
                <div className="text-sm text-gray-500">Cost to use our service</div>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 py-4">
                <Clock size={20} className="text-[#1a3fa8]" />
                <div className="text-2xl font-black text-[#0d1f5c] font-serif">4 Parts</div>
                <div className="text-sm text-gray-500">A, B, C, and D</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Is Medicare Overview ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  The Basics of Medicare
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare is a federal health insurance program administered by the Centers for Medicare and Medicaid Services (CMS). It was signed into law in 1965 and today covers more than 67 million Americans.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unlike employer-sponsored insurance, Medicare is not tied to your job. It is earned through your work history and funded through payroll taxes you paid throughout your career. Most people who worked at least 10 years (40 quarters) receive Part A at no premium cost.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Medicare is divided into four parts: A, B, C, and D. Each covers a different category of care. Understanding how they work together is the key to building a coverage plan that fits your health needs and budget.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <Shield size={18} className="text-[#1a3fa8]" />, title: "Federal Program", desc: "Administered by CMS, available in all 50 states with consistent baseline benefits." },
                  { icon: <Users size={18} className="text-[#1a3fa8]" />, title: "Earned Benefit", desc: "Based on your work history and Medicare tax contributions, not your income or assets." },
                  { icon: <CheckCircle size={18} className="text-[#1a3fa8]" />, title: "Free to Use an Agent", desc: "Licensed Medicare agents like ours are compensated by carriers. Our guidance costs you nothing." },
                  { icon: <Clock size={18} className="text-[#1a3fa8]" />, title: "Enrollment Windows Matter", desc: "Missing your enrollment window can result in permanent premium penalties. Timing is critical." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-200">
                    <div className="shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Medicare vs Medicaid Callout ── */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Medicare vs. Medicaid: What Is the Difference?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#e8edf8] border border-[#b8c8f0] rounded-xl p-5">
                  <div className="font-bold text-[#1a3fa8] text-lg mb-2">Medicare</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-[#1a3fa8] shrink-0 mt-0.5" />Federal program only</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-[#1a3fa8] shrink-0 mt-0.5" />Based on age (65+) or disability</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-[#1a3fa8] shrink-0 mt-0.5" />Available regardless of income</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-[#1a3fa8] shrink-0 mt-0.5" />Earned through payroll taxes</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-[#1a3fa8] shrink-0 mt-0.5" />Consistent benefits nationwide</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="font-bold text-gray-700 text-lg mb-2">Medicaid</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-gray-400 shrink-0 mt-0.5" />Federal and state program</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-gray-400 shrink-0 mt-0.5" />Based on financial need</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-gray-400 shrink-0 mt-0.5" />Available at any age</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-gray-400 shrink-0 mt-0.5" />Income and asset limits apply</li>
                    <li className="flex items-start gap-2"><CheckCircle size={13} className="text-gray-400 shrink-0 mt-0.5" />Benefits vary by state</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Some people qualify for both Medicare and Medicaid at the same time. This is called dual eligibility, and it can significantly reduce your out-of-pocket healthcare costs. If you think you may qualify, our agents can help you understand your options.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Four Parts ── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                The Four Parts of Medicare
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Medicare is not a single plan. It is a system of four distinct parts, each covering a different type of care. Most beneficiaries use a combination of two or more.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PARTS.map((part) => (
                <PartCard key={part.letter} part={part} />
              ))}
            </div>
            {/* Medigap callout */}
            <div className="mt-8 bg-[#e8edf8] border border-[#b8c8f0] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#1a3fa8] rounded-xl flex items-center justify-center text-white font-black text-sm font-serif">G</div>
              <div className="flex-1">
                <div className="font-bold text-[#0d1f5c] mb-1">What About Medigap (Medicare Supplement)?</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Original Medicare (Parts A and B) covers about 80% of approved costs, leaving you responsible for the other 20% with no annual cap. A Medigap policy fills those gaps, covering copays, coinsurance, and deductibles. Plan G is the most popular option for new enrollees.
                </p>
              </div>
              <Link
                href="/do-i-need-a-supplement"
                className="shrink-0 inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-[#1535a0] transition-colors whitespace-nowrap"
              >
                Learn About Medigap <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Eligibility ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Who Is Eligible for Medicare?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Medicare eligibility is based on age, disability status, or certain medical conditions. You do not need to be retired to enroll, and your income does not affect your eligibility for basic coverage.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Age 65 or Older", desc: "U.S. citizens and permanent residents who have lived in the U.S. for at least 5 continuous years.", highlight: true },
                    { label: "Under 65 with a Disability", desc: "People who have received Social Security Disability Insurance (SSDI) for 24 consecutive months automatically qualify." },
                    { label: "End-Stage Renal Disease (ESRD)", desc: "Individuals with permanent kidney failure requiring dialysis or a kidney transplant qualify at any age." },
                    { label: "ALS (Lou Gehrig's Disease)", desc: "People diagnosed with ALS qualify for Medicare immediately upon receiving SSDI, with no 24-month waiting period." },
                  ].map(({ label, desc, highlight }) => (
                    <div key={label} className={`rounded-xl p-4 border ${highlight ? "bg-[#e8edf8] border-[#b8c8f0]" : "bg-white border-gray-200"}`}>
                      <div className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[#1a3fa8] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm mb-0.5">{label}</div>
                          <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Part A Premium Eligibility</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Whether you pay a premium for Part A depends on your work history:
                </p>
                <div className="space-y-3">
                  {[
                    { quarters: "40+ quarters (10 years)", premium: "$0/month", color: "#0d6e4f", bg: "#e6f4ee" },
                    { quarters: "30-39 quarters", premium: "$285/month (2025)", color: "#b45309", bg: "#fef3e2" },
                    { quarters: "Under 30 quarters", premium: "$518/month (2025)", color: "#991b1b", bg: "#fee2e2" },
                  ].map(({ quarters, premium, color, bg }) => (
                    <div key={quarters} className="flex items-center justify-between rounded-xl px-4 py-3 border" style={{ background: bg, borderColor: color + "40" }}>
                      <span className="text-sm font-medium text-gray-700">{quarters}</span>
                      <span className="text-sm font-bold" style={{ color }}>{premium}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Info size={16} className="text-[#1a3fa8] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Not sure if you qualify? We can check your eligibility in minutes. Call us at <a href="tel:8136995559" className="text-[#1a3fa8] font-semibold hover:underline">813-699-5559</a> or <Link href="/free-consultation" className="text-[#1a3fa8] font-semibold hover:underline">request a free consultation</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Enrollment Timeline ── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                When to Enroll in Medicare
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Timing your Medicare enrollment correctly is one of the most important decisions you will make. Missing a window can mean permanent penalties or gaps in coverage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {TIMELINE.map((item, i) => (
                <div key={item.period} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#1a3fa8] text-white font-black text-sm flex items-center justify-center shrink-0 font-serif">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{item.period}</div>
                      <div className="text-xs font-semibold text-[#1a3fa8] bg-[#e8edf8] px-2 py-0.5 rounded-full inline-block mb-2">{item.window}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-amber-900 mb-1">Penalties Are Permanent</div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The Part B late enrollment penalty adds 10% to your premium for every 12-month period you were eligible but did not enroll. This penalty lasts for as long as you have Medicare. The Part D penalty is 1% per month. These are avoidable with proper planning.
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/enrollment-timeline" className="inline-flex items-center gap-2 text-[#1a3fa8] font-semibold hover:underline text-sm">
                View the Full Enrollment Timeline <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2025 Costs Table ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                2025 Medicare Costs at a Glance
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-sm">
                These are the standard federal costs. Your actual costs may differ based on income, the plan you choose, and your healthcare usage.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d2260] text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Part</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Monthly Premium</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Annual Deductible</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Cost Sharing</th>
                  </tr>
                </thead>
                <tbody>
                  {COSTS_2025.map((row, i) => (
                    <tr key={row.part} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3.5 font-bold text-[#1a3fa8]">{row.part}</td>
                      <td className="px-5 py-3.5 text-gray-700">{row.premium}</td>
                      <td className="px-5 py-3.5 text-gray-700">{row.deductible}</td>
                      <td className="px-5 py-3.5 text-gray-700">{row.coinsurance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">Source: CMS.gov. Figures are for 2025. IRMAA surcharges may apply to higher-income beneficiaries.</p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Answers to the questions we hear most often from people new to Medicare.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              Free, No-Obligation Consultation
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Talk with a Licensed Medicare Agent?
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Medicare Information Project serves beneficiaries across Florida, Georgia, North Carolina, Arkansas, Kansas, and Texas. Our agents are independent, which means we represent all major carriers and recommend the plan that is right for you, not the one that pays the highest commission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base"
              >
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base"
              >
                Request a Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">
              We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
