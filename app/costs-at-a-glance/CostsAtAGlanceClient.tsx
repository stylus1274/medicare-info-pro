"use client";

/**
 * Costs at a Glance - MIP Next.js Client Component
 * Design: MIP brand - navy/gold, Merriweather headings, card-based layout
 * Sections: Hero → Stats → Quick Ref → Part A/B/C/D tables → IRMAA → Savings → FAQ → CTA → Related
 * All figures reflect 2026 CMS-published rates.
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Callout from "@/components/Callout";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Phone,
  ArrowRight,
  Info,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Shield,
  Pill,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/costs-at-a-glance-hero-JopWaFr37Vbs3hSEyn8o4X.webp";

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "quick-ref", label: "Quick Reference" },
  { id: "part-a", label: "Part A (Hospital)" },
  { id: "part-b", label: "Part B (Medical)" },
  { id: "part-c", label: "Part C (Advantage)" },
  { id: "part-d", label: "Part D (Drugs)" },
  { id: "irmaa", label: "IRMAA Surcharges" },
  { id: "savings", label: "Savings Programs" },
  { id: "faq", label: "FAQ" },
];

// ─── Data ─────────────────────────────────────────────────────────────────────

const partAData = [
  { label: "Premium (if you worked 40+ quarters)", value: "$0/month", highlight: true, note: "Most people pay $0" },
  { label: "Premium (30–39 quarters worked)", value: "$285/month", highlight: false },
  { label: "Premium (fewer than 30 quarters)", value: "$518/month", highlight: false },
  { label: "Inpatient deductible (per benefit period)", value: "$1,736", highlight: false },
  { label: "Coinsurance: Days 1–60", value: "$0/day", highlight: true, note: "Fully covered after deductible" },
  { label: "Coinsurance: Days 61–90", value: "$422/day", highlight: false },
  { label: "Coinsurance: Days 91–150 (lifetime reserve)", value: "$844/day", highlight: false },
  { label: "Coinsurance: Day 151+", value: "100% of costs", highlight: false },
  { label: "Skilled Nursing Facility: Days 1–20", value: "$0/day", highlight: true },
  { label: "Skilled Nursing Facility: Days 21–100", value: "$212/day", highlight: false },
  { label: "Skilled Nursing Facility: Day 101+", value: "100% of costs", highlight: false },
];

const partBData = [
  { label: "Standard monthly premium", value: "$202.90/month", highlight: true, note: "Most enrollees pay this" },
  { label: "Annual deductible", value: "$283/year", highlight: false },
  { label: "Coinsurance after deductible", value: "20% of Medicare-approved amount", highlight: false, note: "No out-of-pocket cap without Medigap" },
  { label: "Preventive services (ACA-covered)", value: "$0", highlight: true, note: "Annual wellness visit, screenings, vaccines" },
  { label: "Outpatient mental health coinsurance", value: "20%", highlight: false },
  { label: "Clinical laboratory services", value: "$0", highlight: true },
  { label: "Durable medical equipment", value: "20% after deductible", highlight: false },
];

const partDData = [
  { label: "National base beneficiary premium", value: "$36.78/month", highlight: false, note: "Actual plan premiums vary widely" },
  { label: "Annual deductible (maximum allowed)", value: "$590/year", highlight: false, note: "Some plans have $0 deductible" },
  { label: "Out-of-pocket cap (2026)", value: "$2,000/year", highlight: true, note: "IRA provision - caps annual drug costs" },
  { label: "Monthly payment option", value: "Available via Medicare Prescription Payment Plan", highlight: false },
  { label: "Low-income subsidy (Extra Help)", value: "Reduces or eliminates costs", highlight: false, note: "See Savings Programs section" },
];

const partCData = [
  { label: "Extra monthly premium (beyond Part B)", value: "$0 on many plans", highlight: true, note: "Varies by plan and location" },
  { label: "In-network out-of-pocket maximum (2026)", value: "Up to $8,850/year", highlight: false, note: "Federal cap - many plans set lower limits" },
  { label: "Combined in/out-of-network OOP max", value: "Up to $13,300/year", highlight: false },
  { label: "Copay: Primary care visit (typical)", value: "$0–$20", highlight: false },
  { label: "Copay: Specialist visit (typical)", value: "$20–$50", highlight: false },
  { label: "Copay: Emergency room (typical)", value: "$90–$120", highlight: false },
  { label: "Dental, vision, hearing", value: "Included on most plans", highlight: true, note: "Benefits vary by plan" },
  { label: "OTC allowance", value: "$25–$150+/quarter on some plans", highlight: false },
];

// ─── IRMAA Brackets 2026 ──────────────────────────────────────────────────────

const irmaaBrackets = [
  { income_single: "≤ $109,000", income_joint: "≤ $218,000", part_b_total: "$202.90/mo", part_b_surcharge: "$0", part_d_surcharge: "$0", highlight: true },
  { income_single: "$109,001 – $136,000", income_joint: "$218,001 – $272,000", part_b_total: "$276.90/mo", part_b_surcharge: "+$74.00", part_d_surcharge: "+$13.70", highlight: false },
  { income_single: "$136,001 – $163,000", income_joint: "$272,001 – $326,000", part_b_total: "$389.90/mo", part_b_surcharge: "+$187.00", part_d_surcharge: "+$35.30", highlight: false },
  { income_single: "$163,001 – $500,000", income_joint: "$326,001 – $750,000", part_b_total: "$502.90/mo", part_b_surcharge: "+$300.00", part_d_surcharge: "+$57.00", highlight: false },
  { income_single: "> $500,000", income_joint: "> $750,000", part_b_total: "$594.90/mo", part_b_surcharge: "+$392.00", part_d_surcharge: "+$85.80", highlight: false },
];

// ─── Savings Programs ─────────────────────────────────────────────────────────

const savingsPrograms = [
  {
    name: "Medicare Savings Programs (MSP)",
    subtitle: "State-administered",
    color: "blue",
    description:
      "Four programs that help pay Medicare premiums, deductibles, and copays for people with limited income and resources. Enrollment also automatically qualifies you for Extra Help with Part D.",
    programs: [
      { name: "Qualified Medicare Beneficiary (QMB)", benefit: "Pays Part A & B premiums, deductibles, coinsurance" },
      { name: "Specified Low-Income Medicare Beneficiary (SLMB)", benefit: "Pays Part B premium only" },
      { name: "Qualifying Individual (QI)", benefit: "Pays Part B premium only (limited slots)" },
      { name: "Qualified Disabled & Working Individuals (QDWI)", benefit: "Pays Part A premium for certain disabled workers" },
    ],
    cta: "Apply through your state Medicaid office",
  },
  {
    name: "Extra Help (Low-Income Subsidy)",
    subtitle: "Federal program",
    color: "green",
    description:
      "Reduces or eliminates Part D drug costs for people with limited income. Extra Help can save beneficiaries an average of $5,900/year on prescription drug costs.",
    programs: [
      { name: "Full Extra Help", benefit: "No premium, no deductible, minimal copays" },
      { name: "Partial Extra Help", benefit: "Reduced premium and deductible based on income" },
    ],
    cta: "Apply at SSA.gov or call 1-800-772-1213",
  },
  {
    name: "PACE (Program of All-Inclusive Care)",
    subtitle: "For dual-eligible beneficiaries",
    color: "amber",
    description:
      "Provides comprehensive medical and social services for people 55+ who qualify for nursing home care but can live safely in the community. Covers all Medicare and Medicaid services.",
    programs: [
      { name: "All-inclusive care", benefit: "Medical, dental, vision, prescription drugs, social services, transportation" },
    ],
    cta: "Availability varies by state and location",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Why does my Part B premium cost more than $202.90/month?",
    a: "If your income exceeds $109,000 (single) or $218,000 (joint) based on your tax return from 2 years ago, you pay an Income-Related Monthly Adjustment Amount (IRMAA) surcharge on top of the standard $202.90 premium. Social Security will notify you if IRMAA applies. You can appeal if your income has decreased due to a life-changing event.",
  },
  {
    q: "What is a 'benefit period' for Part A?",
    a: "A benefit period begins the day you're admitted as an inpatient in a hospital or skilled nursing facility, and ends when you haven't received inpatient care for 60 consecutive days. There's no limit to the number of benefit periods you can have - but you pay the $1,736 deductible for each new benefit period.",
  },
  {
    q: "Does the $2,000 Part D out-of-pocket cap still apply in 2026?",
    a: "Yes. The Inflation Reduction Act established a $2,000 annual out-of-pocket cap for Part D drug costs starting January 1, 2025, and it continues in 2026. Once you've spent $2,000 out-of-pocket on covered drugs, your plan pays 100% for the rest of the year. You can also spread payments monthly through the Medicare Prescription Payment Plan.",
  },
  {
    q: "Does Original Medicare have an out-of-pocket maximum?",
    a: "No. Original Medicare (Parts A and B) has no annual out-of-pocket maximum. Without a Medigap supplement, your costs could be unlimited in a serious illness. This is one of the primary reasons many people add a Medigap plan - to cap their financial exposure.",
  },
  {
    q: "How is IRMAA calculated, and can I appeal it?",
    a: "IRMAA is based on your Modified Adjusted Gross Income (MAGI) from your tax return 2 years prior. In 2026, Social Security uses your 2024 tax return. If your income has decreased due to a qualifying life-changing event (retirement, divorce, death of spouse, etc.), you can request a reconsideration using Form SSA-44.",
  },
  {
    q: "What's the difference between the Part D deductible and the out-of-pocket cap?",
    a: "The deductible is what you pay before your plan starts sharing costs (up to $590 in 2026, though many plans have $0 deductibles). The out-of-pocket cap ($2,000) is the maximum you'll pay total for covered drugs in a calendar year - once you hit it, your plan covers 100% for the rest of the year.",
  },
  {
    q: "Who qualifies for Medicare Savings Programs?",
    a: "Eligibility is based on income and resources and varies by state. Generally, individuals with income below 135% of the Federal Poverty Level may qualify for full or partial assistance. Many people who qualify don't apply - contact your state Medicaid office or call 1-800-MEDICARE to check your eligibility.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CostTable({ rows }: { rows: { label: string; value: string; highlight?: boolean; note?: string }[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="divide-y divide-gray-100">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-start justify-between gap-4 px-6 py-4 ${row.highlight ? "bg-blue-50/60" : "hover:bg-gray-50"} transition-colors`}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 font-medium leading-snug">{row.label}</p>
              {row.note && <p className="text-xs text-gray-400 mt-0.5 leading-snug">{row.note}</p>}
            </div>
            <div className="text-right flex-shrink-0">
              <span
                className={`font-bold text-sm ${row.highlight ? "text-[#1a3fa8]" : "text-gray-800"}`}
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {row.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({
  tag, title, subtitle, icon: Icon, iconBg,
}: {
  tag: string; title: string; subtitle?: string; icon: React.ElementType; iconBg: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 mt-1`}>
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <div>
        <p className="text-[#f5a800] font-bold uppercase tracking-widest text-xs mb-1">{tag}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
          {title}
        </h2>
        {subtitle && <p className="text-gray-500 mt-1 text-base">{subtitle}</p>}
      </div>
    </div>
  );
}

function TOCSidebar({ activeSection }: { activeSection: string }) {
  return (
    <aside className="hidden xl:block w-72 flex-shrink-0" aria-label="Page navigation">
      <div className="sticky top-28 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-4">
            <p className="text-white font-bold text-sm" style={{ fontFamily: "'Merriweather', serif" }}>In This Guide</p>
          </div>
          <nav className="p-4 space-y-1">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-[#1a3fa8] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <Callout type="warning">
          <p className="text-amber-800 text-sm leading-relaxed">
            Part D now has a <strong>$2,000 annual out-of-pocket cap</strong>. All figures on this page reflect 2026 rates.
          </p>
        </Callout>

        <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-[#f5a800] rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
            Questions about your costs?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            A licensed MIP agent can estimate your total Medicare costs and find ways to reduce them.
          </p>
          <a
            href="tel:8136995559"
            aria-label="Call MIP at (813) 699-5559"
            className="flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            813-699-5559
          </a>
        </div>
      </div>
    </aside>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CostsAtAGlanceClient() {
  const [activeSection, setActiveSection] = useState("quick-ref");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(item.id); },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Senior reviewing Medicare cost documents"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Costs at a Glance</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            2026 Cost Reference
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl" style={{ fontFamily: "'Merriweather', serif" }}>
            Medicare Costs at a Glance
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            All 2026 premiums, deductibles, copays, IRMAA surcharges, and out-of-pocket limits - in one place.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-[#0d1f5c] text-white py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-6 justify-between items-center">
          {[
            { value: "$202.90/mo", label: "Standard Part B premium" },
            { value: "$1,736", label: "Part A inpatient deductible" },
            { value: "$2,000", label: "Part D out-of-pocket cap" },
            { value: "$0", label: "Part A premium (most people)" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-[#f5a800] font-bold text-xl" style={{ fontFamily: "'Merriweather', serif" }}>{s.value}</span>
              <span className="text-white/60 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-10 items-start">
            <article className="flex-1 min-w-0 space-y-16">

              {/* Quick Reference */}
              <div id="quick-ref">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">2026 Snapshot</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Quick Reference
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    The most commonly referenced Medicare costs for 2026. Click any section below for the full breakdown.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { part: "Part A", label: "Hospital", premium: "$0", note: "for most people", color: "bg-[#1a3fa8]", deductible: "$1,736 deductible/benefit period" },
                      { part: "Part B", label: "Medical", premium: "$202.90/mo", note: "standard premium", color: "bg-[#163490]", deductible: "$283 annual deductible" },
                      { part: "Part C", label: "Advantage", premium: "$0+", note: "many plans", color: "bg-amber-500", deductible: "$8,850 OOP max" },
                      { part: "Part D", label: "Drugs", premium: "Varies", note: "by plan", color: "bg-green-600", deductible: "$2,000 OOP cap (2026)" },
                    ].map((card) => (
                      <div key={card.part} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className={`${card.color} px-5 py-3`}>
                          <div className="flex items-center justify-between">
                            <span className="text-white font-bold text-lg" style={{ fontFamily: "'Merriweather', serif" }}>{card.part}</span>
                            <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">{card.label}</span>
                          </div>
                        </div>
                        <div className="px-5 py-4">
                          <p className="text-2xl font-bold text-gray-900 mb-0.5" style={{ fontFamily: "'Merriweather', serif" }}>{card.premium}</p>
                          <p className="text-xs text-gray-400 mb-3">{card.note}</p>
                          <p className="text-xs text-gray-500 leading-snug">{card.deductible}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Callout type="info">
                    <p className="text-blue-800 text-sm leading-relaxed">
                      <strong>Important:</strong> All figures are 2026 CMS-published rates. Medicare costs are adjusted annually. IRMAA surcharges apply to higher-income beneficiaries - see the IRMAA section below. Advantage plan costs vary significantly by plan and ZIP code.
                    </p>
                  </Callout>
                </motion.div>
              </div>

              {/* Part A */}
              <div id="part-a">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <SectionHeader
                    tag="Hospital Insurance"
                    title="Part A Costs (2026)"
                    subtitle="Covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health care."
                    icon={Shield}
                    iconBg="bg-[#1a3fa8]"
                  />
                  <CostTable rows={partAData} />
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <strong>No annual out-of-pocket cap:</strong> Part A has no limit on how much you can pay in a year if you have multiple hospitalizations. Each new benefit period triggers a new $1,736 deductible. A Medigap supplement can cover this.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Part B */}
              <div id="part-b">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <SectionHeader
                    tag="Medical Insurance"
                    title="Part B Costs (2026)"
                    subtitle="Covers doctor visits, outpatient care, preventive services, durable medical equipment, and some home health care."
                    icon={DollarSign}
                    iconBg="bg-[#163490]"
                  />
                  <CostTable rows={partBData} />
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <strong>The 20% gap:</strong> After your $283 deductible, Part B pays 80% of approved costs - you pay 20% with no cap. A single surgery or extended specialist care could cost thousands. This is why many people add a Medigap supplement.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Part C */}
              <div id="part-c">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <SectionHeader
                    tag="Medicare Advantage"
                    title="Part C Costs (2026)"
                    subtitle="Typical cost ranges for Medicare Advantage plans. Actual costs vary significantly by plan and ZIP code."
                    icon={TrendingUp}
                    iconBg="bg-amber-500"
                  />
                  <CostTable rows={partCData} />
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex gap-3 items-start">
                    <Info className="w-4 h-4 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-blue-800 text-sm leading-relaxed">
                      <strong>Plan costs vary widely by ZIP code.</strong> A plan in Tampa, FL may have very different premiums, copays, and networks than the same insurer's plan in another county. A licensed MIP agent can pull up all plans available in your area.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Part D */}
              <div id="part-d">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <SectionHeader
                    tag="Prescription Drug Coverage"
                    title="Part D Costs (2026)"
                    subtitle="Covers prescription drugs. Can be a standalone plan (with Original Medicare) or included in a Medicare Advantage plan."
                    icon={Pill}
                    iconBg="bg-green-600"
                  />
                  <CostTable rows={partDData} />
                  <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-5 py-4 flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-green-800 text-sm leading-relaxed">
                      <strong>$2,000 out-of-pocket cap:</strong> The Inflation Reduction Act established a $2,000 annual out-of-pocket cap for Part D drug costs. Once you've hit this limit, your plan pays 100% for covered drugs for the rest of the year. You can also spread payments over the year through the Medicare Prescription Payment Plan.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* IRMAA */}
              <div id="irmaa">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Higher-Income Surcharges</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    IRMAA Brackets (2026)
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    The Income-Related Monthly Adjustment Amount (IRMAA) is an additional surcharge added to your Part B and Part D premiums if your income exceeds certain thresholds. IRMAA is based on your Modified Adjusted Gross Income (MAGI) from <strong>2 years prior</strong> (2024 income affects 2026 premiums).
                  </p>

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" aria-label="IRMAA income brackets for 2026">
                        <thead>
                          <tr className="bg-[#1a3fa8] text-white">
                            <th scope="col" className="text-left px-5 py-4 font-semibold">Individual Income (2024)</th>
                            <th scope="col" className="text-left px-5 py-4 font-semibold">Joint Income (2024)</th>
                            <th scope="col" className="text-right px-5 py-4 font-semibold">Total Part B Premium</th>
                            <th scope="col" className="text-right px-5 py-4 font-semibold">Part B Surcharge</th>
                            <th scope="col" className="text-right px-5 py-4 font-semibold">Part D Surcharge</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {irmaaBrackets.map((row, i) => (
                            <tr key={i} className={row.highlight ? "bg-blue-50/60" : "hover:bg-gray-50 transition-colors"}>
                              <td className="px-5 py-4 text-gray-700 font-medium">{row.income_single}</td>
                              <td className="px-5 py-4 text-gray-700">{row.income_joint}</td>
                              <td className="px-5 py-4 text-right font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>{row.part_b_total}</td>
                              <td className={`px-5 py-4 text-right font-semibold ${row.part_b_surcharge === "$0" ? "text-green-600" : "text-red-600"}`}>{row.part_b_surcharge}</td>
                              <td className={`px-5 py-4 text-right font-semibold ${row.part_d_surcharge === "$0" ? "text-green-600" : "text-red-600"}`}>{row.part_d_surcharge}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <Callout type="warning">
                      <p className="text-amber-800 text-sm leading-relaxed">
                        <strong>2-year lookback:</strong> Your 2026 IRMAA is based on your 2024 tax return. A large one-time income event (like selling a home or taking an IRA distribution) can trigger IRMAA even if your current income is lower.
                      </p>
                    </Callout>
                    <Callout type="info">
                      <p className="text-blue-800 text-sm leading-relaxed">
                        <strong>You can appeal IRMAA</strong> if your income has decreased due to a qualifying life-changing event. File Form SSA-44 with Social Security.
                      </p>
                    </Callout>
                  </div>
                </motion.div>
              </div>

              {/* Savings Programs */}
              <div id="savings">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Financial Assistance</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Medicare Savings Programs
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Millions of Medicare beneficiaries qualify for programs that reduce or eliminate their Medicare costs - but many don't know they're eligible. These programs are administered by states and the federal government.
                  </p>

                  <div className="space-y-6">
                    {savingsPrograms.map((program) => (
                      <div
                        key={program.name}
                        className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${
                          program.color === "blue" ? "border-blue-200" : program.color === "green" ? "border-green-200" : "border-amber-200"
                        }`}
                      >
                        <div className={`px-6 py-4 ${program.color === "blue" ? "bg-blue-50" : program.color === "green" ? "bg-green-50" : "bg-amber-50"}`}>
                          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${program.color === "blue" ? "text-[#1a3fa8]" : program.color === "green" ? "text-green-700" : "text-amber-700"}`}>
                            {program.subtitle}
                          </p>
                          <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Merriweather', serif" }}>
                            {program.name}
                          </h3>
                        </div>
                        <div className="px-6 py-5">
                          <p className="text-gray-600 text-sm leading-relaxed mb-5">{program.description}</p>
                          <div className="space-y-3 mb-5">
                            {program.programs.map((p) => (
                              <div key={p.name} className="flex items-start gap-3">
                                <CheckCircle2
                                  className={`w-4 h-4 flex-shrink-0 mt-0.5 ${program.color === "blue" ? "text-[#1a3fa8]" : program.color === "green" ? "text-green-600" : "text-amber-600"}`}
                                  aria-hidden="true"
                                />
                                <div>
                                  <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                                  <p className="text-xs text-gray-500">{p.benefit}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 border-t border-gray-100 pt-4">
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{program.cta}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* FAQ */}
              <div id="faq">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Common Questions</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-2">
                    <FaqAccordion items={faqs} defaultOpen={null} />
                  </div>
                </motion.div>
              </div>

            </article>

            <TOCSidebar activeSection={activeSection} />
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#1a3fa8] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-2">Free Cost Analysis</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                Estimate your total Medicare costs.
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                A licensed MIP agent will review your income, health needs, and medications to estimate your total annual Medicare costs - and find ways to reduce them.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                aria-label="Call MIP at (813) 699-5559 for a free cost analysis"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg whitespace-nowrap"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call 813-699-5559
              </a>
              <p className="text-white/50 text-xs text-center">BBB A+ Rated · Brandon, FL · Free Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Merriweather', serif" }}>
            Continue Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/original-vs-advantage", label: "Original vs. Advantage", desc: "Compare the two main ways to get Medicare and decide which is right for you.", tag: "Plan Comparison" },
              { href: "/enrollment-timeline", label: "Enrollment Timeline", desc: "Key dates, enrollment windows, and how to avoid permanent late penalties.", tag: "Getting Started" },
              { href: "/do-i-need-a-supplement", label: "Do I Need a Supplement?", desc: "Learn when a Medigap plan makes sense and which plan is right for your situation.", tag: "Medigap Guide" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3 block">{link.tag}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1a3fa8] mb-2 transition-colors" style={{ fontFamily: "'Merriweather', serif" }}>
                  {link.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{link.desc}</p>
                <div className="flex items-center gap-1 text-[#1a3fa8] text-sm font-semibold">
                  Read more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
