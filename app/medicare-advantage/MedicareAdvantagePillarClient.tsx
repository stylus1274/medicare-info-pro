"use client";

/* ==========================================================================
   MedicareAdvantagePillarClient: /medicare-advantage
   Pillar / cornerstone page: Medicare Advantage (Part C) Complete Guide
   Design: MIP brand: navy/gold, editorial two-column layout with sticky TOC
   No em dashes used anywhere in this file.
   ========================================================================== */

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  CheckCircle,
  AlertCircle,
  Info,
  BookOpen,
  FileText,
  Star,
  Clock,
  Calendar,
  User,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ---- Table of Contents ------------------------------------------------------

const TOC = [
  { id: "overview", label: "What Is Medicare Advantage?" },
  { id: "how-it-works", label: "How It Works" },
  { id: "plan-types", label: "Plan Types (HMO, PPO, SNP)" },
  { id: "pros-cons", label: "Pros and Cons" },
  { id: "costs", label: "Costs at a Glance" },
  { id: "vs-original", label: "vs. Original Medicare" },
  { id: "how-to-enroll", label: "How to Enroll" },
  { id: "faq", label: "Common Questions" },
];

// ---- Plan Types -------------------------------------------------------------

const PLAN_TYPES = [
  {
    name: "HMO",
    full: "Health Maintenance Organization",
    desc: "Must use in-network providers. Requires referrals for specialists. Lowest premiums.",
    tag: "Most Affordable",
    tagBg: "#dbeafe",
    tagColor: "#1e40af",
    accentColor: "#1e40af",
  },
  {
    name: "PPO",
    full: "Preferred Provider Organization",
    desc: "Use any doctor, in or out of network. No referrals needed. Higher premiums.",
    tag: "Most Flexible",
    tagBg: "#fef3c7",
    tagColor: "#92400e",
    accentColor: "#b45309",
  },
  {
    name: "SNP",
    full: "Special Needs Plan",
    desc: "Tailored for people with specific chronic conditions, dual eligibility, or institutional care.",
    tag: "For Specific Needs",
    tagBg: "#fce7f3",
    tagColor: "#9d174d",
    accentColor: "#be185d",
  },
  {
    name: "PFFS",
    full: "Private Fee-for-Service",
    desc: "Set payment rates for any provider who accepts the plan's terms. No network required.",
    tag: "Maximum Freedom",
    tagBg: "#ede9fe",
    tagColor: "#5b21b6",
    accentColor: "#6d28d9",
  },
];

// ---- Pros and Cons ----------------------------------------------------------

const PROS = [
  "Often $0 monthly premium",
  "Includes dental, vision, and hearing",
  "Prescription drug coverage included",
  "Out-of-pocket maximum protection",
  "Extra benefits like gym memberships",
];

const CONS = [
  "Limited to plan's provider network (HMO)",
  "Need referrals for specialists (HMO)",
  "Coverage varies by plan and county",
  "Must live in plan's service area",
  "Plans can change benefits annually",
];

// ---- Cost Comparison --------------------------------------------------------

const COST_TABLE = [
  { item: "Monthly Premium", original: "$0 to $174.70 (Part B)", advantage: "Often $0 (varies by plan)" },
  { item: "Annual Deductible", original: "$1,632 (Part A) / $240 (Part B)", advantage: "Varies, often lower" },
  { item: "Copays / Coinsurance", original: "20% after deductible", advantage: "Fixed copays (e.g., $10 to $50)" },
  { item: "Out-of-Pocket Max", original: "No limit", advantage: "$8,850 max (2026)" },
  { item: "Dental / Vision", original: "Not covered", advantage: "Often included" },
];

// ---- vs. Original Medicare --------------------------------------------------

const VS_ROWS = [
  { feature: "Provider Choice", original: "Any Medicare-accepting provider", advantage: "Network-based (HMO) or broader (PPO)" },
  { feature: "Referrals Needed", original: "No", advantage: "Yes for HMO, No for PPO" },
  { feature: "Drug Coverage", original: "Requires separate Part D plan", advantage: "Usually included" },
  { feature: "Extra Benefits", original: "None", advantage: "Dental, vision, hearing, gym" },
  { feature: "Out-of-Pocket Cap", original: "None", advantage: "Yes, capped annually" },
];

// ---- Enrollment Periods -----------------------------------------------------

const ENROLLMENT_PERIODS = [
  {
    name: "Initial Enrollment Period",
    window: "7-month window around your 65th birthday",
    desc: "Your first opportunity to enroll in Medicare and choose a Medicare Advantage plan.",
    color: "#1e40af",
    bg: "#dbeafe",
  },
  {
    name: "Annual Enrollment Period",
    window: "October 15 to December 7 each year",
    desc: "Switch between Original Medicare and Medicare Advantage, or change your Medicare Advantage plan.",
    color: "#166534",
    bg: "#dcfce7",
  },
  {
    name: "Medicare Advantage Open Enrollment",
    window: "January 1 to March 31 each year",
    desc: "Switch Medicare Advantage plans or return to Original Medicare if you are already enrolled in Medicare Advantage.",
    color: "#92400e",
    bg: "#fef3c7",
  },
  {
    name: "Special Enrollment Period",
    window: "Triggered by qualifying life events",
    desc: "Moving, losing employer coverage, or qualifying for Medicaid may allow you to change plans outside normal windows.",
    color: "#5b21b6",
    bg: "#ede9fe",
  },
];

// ---- FAQ --------------------------------------------------------------------

const FAQ_ITEMS = [
  {
    q: "Can I switch back to Original Medicare?",
    a: "Yes. You can switch back to Original Medicare during the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). Keep in mind that if you switch back, you may need to purchase a separate Part D drug plan and you may face underwriting requirements for Medigap coverage.",
  },
  {
    q: "Do I still pay Part B premiums with Medicare Advantage?",
    a: "Yes. You must continue paying your Part B premium even when enrolled in a Medicare Advantage plan. Some plans offer a Part B premium reduction as an extra benefit, which can lower your effective monthly cost.",
  },
  {
    q: "What happens if I travel outside my plan's service area?",
    a: "Most Medicare Advantage plans cover emergency and urgent care anywhere in the U.S. However, routine care is generally limited to your plan's service area. If you travel frequently or split time between states, a PPO plan or a plan with national network access may be a better fit.",
  },
  {
    q: "Does Medicare Advantage cover pre-existing conditions?",
    a: "Yes. Medicare Advantage plans cannot deny coverage or charge higher premiums based on pre-existing conditions. All plans must cover the same benefits as Original Medicare.",
  },
  {
    q: "How do I find Medicare Advantage plans in my area?",
    a: "Plan availability varies by ZIP code. You can compare plans on Medicare.gov or speak with a licensed independent agent who can show you all available options in your area at no cost.",
  },
];

// ---- Related Guides ---------------------------------------------------------

const RELATED_GUIDES = [
  { label: "Do I Need a Supplement?", icon: <BookOpen size={13} />, href: "/do-i-need-a-supplement" },
  { label: "Understanding Part D", icon: <FileText size={13} />, href: "/understanding-part-d" },
  { label: "Enrollment Timeline", icon: <Calendar size={13} />, href: "/enrollment-timeline" },
  { label: "Costs at a Glance", icon: <FileText size={13} />, href: "/costs-at-a-glance" },
];

// ---- FAQ Accordion ----------------------------------------------------------

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

// ---- Page -------------------------------------------------------------------

export default function MedicareAdvantagePillarClient() {
  const [activeSection, setActiveSection] = useState("overview");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            <span className="text-white/70">Medicare Plans</span>
            <ChevronRight size={12} />
            <span className="text-white/70">Medicare Advantage</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Complete Guide
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Medicare Advantage (Part C): The Complete Guide
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              Medicare Advantage plans are an alternative way to get your Medicare coverage through
              private insurers. Learn how they work, what they cost, and whether one is right for you.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
              <span className="flex items-center gap-1.5"><Calendar size={12} /> Updated: March 2026</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><User size={12} /> Reviewed by Greg Wohl, Licensed Medicare Specialist</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> 12 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* At a Glance Stats Bar */}
      <div className="bg-[#f5a800]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Plans Available", value: "3,800+" },
              { label: "Avg. Monthly Premium", value: "$18" },
              { label: "Beneficiaries Enrolled", value: "33M+" },
              { label: "Out-of-Pocket Max (2026)", value: "$8,850" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-bold text-[#0d1f5c] mb-0.5"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-[#0d1f5c]/70 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

          {/* Article */}
          <article className="space-y-14 min-w-0">

            {/* Overview */}
            <section id="overview">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                What Is Medicare Advantage?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Medicare Advantage, also known as Medicare Part C, is an alternative to Original Medicare
                offered by private insurance companies approved by Medicare. These plans must cover
                everything Original Medicare covers, but they often include additional benefits such as
                dental, vision, hearing, and prescription drug coverage.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When you enroll in a Medicare Advantage plan, you still have Medicare, but you get your
                Part A (hospital) and Part B (medical) coverage through the private plan instead of
                directly from the federal government. You continue to pay your Part B premium, and
                depending on the plan, you may pay an additional plan premium.
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                <div className="flex items-start gap-3">
                  <Info size={16} className="text-[#1a3fa8] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    As of 2024, more than 33 million Medicare beneficiaries, roughly half of all Medicare
                    enrollees, are in a Medicare Advantage plan. Enrollment has grown steadily for over a decade.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                How It Works
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Medicare pays a fixed monthly amount to the private insurer to provide your coverage.
                The insurer then manages your benefits, sets your cost-sharing structure (copays,
                deductibles, coinsurance), and determines which providers are in-network.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "You Enroll", desc: "Choose a Medicare Advantage plan available in your ZIP code during an enrollment period." },
                  { step: "2", title: "Medicare Pays the Insurer", desc: "The federal government pays a fixed monthly amount to the private insurer on your behalf." },
                  { step: "3", title: "You Use Your Plan", desc: "Use in-network providers, pay plan copays, and access all benefits including any extras like dental." },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-gray-100 shadow-sm p-5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-3"
                      style={{ background: "#0d1f5c" }}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Plan Types */}
            <section id="plan-types">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Medicare Advantage Plan Types
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Not all Medicare Advantage plans work the same way. The four main types differ in how
                you access providers and how much flexibility you have.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PLAN_TYPES.map((plan) => (
                  <div
                    key={plan.name}
                    className="p-5 rounded-xl border border-gray-100 shadow-sm bg-white"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span
                          className="text-xl font-bold"
                          style={{ fontFamily: "'Merriweather', serif", color: plan.accentColor }}
                        >
                          {plan.name}
                        </span>
                        <p className="text-xs text-gray-400">{plan.full}</p>
                      </div>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                        style={{ background: plan.tagBg, color: plan.tagColor }}
                      >
                        {plan.tag}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{plan.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pros and Cons */}
            <section id="pros-cons">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Pros and Cons
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl border border-green-200 bg-green-50">
                  <p className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-green-600" /> Advantages
                  </p>
                  <ul className="space-y-2">
                    {PROS.map((p) => (
                      <li key={p} className="text-sm flex items-start gap-2 text-green-900">
                        <CheckCircle size={13} className="mt-0.5 shrink-0 text-green-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-xl border border-orange-200 bg-orange-50">
                  <p className="font-bold text-orange-800 mb-3 flex items-center gap-2 text-sm">
                    <AlertCircle size={16} className="text-orange-500" /> Considerations
                  </p>
                  <ul className="space-y-2">
                    {CONS.map((c) => (
                      <li key={c} className="text-sm flex items-start gap-2 text-orange-900">
                        <AlertCircle size={13} className="mt-0.5 shrink-0 text-orange-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Costs */}
            <section id="costs">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Costs at a Glance
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Cost structures differ significantly between Original Medicare and Medicare Advantage.
                The table below shows typical 2025 to 2026 figures.
              </p>
              <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1f5c]">
                      <th className="text-left px-4 py-3 font-semibold text-white">Cost Item</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Original Medicare</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#f5a800]">Medicare Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COST_TABLE.map((row, i) => (
                      <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-gray-800">{row.item}</td>
                        <td className="px-4 py-3 text-gray-600">{row.original}</td>
                        <td className="px-4 py-3 font-semibold text-[#1a3fa8]">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Figures are approximate. Actual costs vary by plan, county, and income level.
              </p>
            </section>

            {/* vs. Original Medicare */}
            <section id="vs-original">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Medicare Advantage vs. Original Medicare
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                The right choice depends on your health needs, preferred doctors, and budget. Here is
                a side-by-side comparison of the key differences.
              </p>
              <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-bold text-gray-700">Feature</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-700">Original Medicare</th>
                      <th className="text-left px-4 py-3 font-bold text-[#1a3fa8]">Medicare Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VS_ROWS.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-gray-800">{row.feature}</td>
                        <td className="px-4 py-3 text-gray-600">{row.original}</td>
                        <td className="px-4 py-3 text-[#1a3fa8] font-medium">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Link
                  href="/original-vs-advantage"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1a3fa8] hover:gap-3 transition-all"
                >
                  Read the Full Comparison Guide <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* How to Enroll */}
            <section id="how-to-enroll">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                How to Enroll
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                You can only enroll in or change Medicare Advantage plans during specific enrollment
                windows. Missing your window can mean waiting up to a year.
              </p>
              <div className="space-y-4">
                {ENROLLMENT_PERIODS.map((period) => (
                  <div
                    key={period.name}
                    className="rounded-xl border p-5"
                    style={{ borderColor: period.color + "40", background: period.bg }}
                  >
                    <div className="flex items-start gap-3">
                      <Calendar size={16} className="flex-shrink-0 mt-0.5" style={{ color: period.color }} />
                      <div>
                        <p className="text-sm font-bold mb-0.5" style={{ color: period.color }}>
                          {period.name}
                        </p>
                        <p className="text-xs font-semibold mb-1" style={{ color: period.color + "cc" }}>
                          {period.window}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">{period.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href="/enrollment-timeline"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1a3fa8] hover:gap-3 transition-all"
                >
                  View the Full Enrollment Timeline <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2
                className="text-2xl font-bold text-gray-900 mb-5"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Common Questions
              </h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>

            {/* Inline CTA */}
            <section
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
              style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
            >
              <div>
                <p
                  className="font-bold text-lg text-white mb-1"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Ready to Find Your Plan?
                </p>
                <p className="text-sm text-white/75">
                  Talk to a licensed specialist, free and with no obligation.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/medicare-quiz"
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-white text-[#1a3fa8] hover:bg-white/90 transition-colors"
                >
                  Take the Quiz
                </Link>
                <a
                  href="tel:8137897700"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition-colors"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  On This Page
                </p>
                <ul className="space-y-0.5">
                  {TOC.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className="w-full text-left text-sm px-3 py-2 rounded-lg transition-colors"
                        style={{
                          color: activeSection === item.id ? "#1a3fa8" : "#6b7280",
                          background: activeSection === item.id ? "#eff6ff" : "transparent",
                          fontWeight: activeSection === item.id ? 700 : 400,
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agent CTA */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&q=80"
                    alt="Greg Wohl, Licensed Medicare Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-sm text-white mb-1">Talk to a Specialist</p>
                <p className="text-xs text-white/70 mb-3 leading-relaxed">
                  Free, no-obligation consultation with a licensed Medicare agent.
                </p>
                <div className="flex items-center justify-center gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} fill="#f5a800" className="text-[#f5a800]" />
                  ))}
                  <span className="text-xs text-white/60 ml-1">4.9 / 5</span>
                </div>
                <a
                  href="tel:8137897700"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-[#f5a800] text-white hover:bg-amber-400 transition-colors mb-2"
                >
                  <Phone size={14} /> 813-789-7700
                </a>
                <Link
                  href="/medicare-quiz"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Take the Quiz <ArrowRight size={13} />
                </Link>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Related Guides
                </p>
                <ul className="space-y-3">
                  {RELATED_GUIDES.map((guide) => (
                    <li key={guide.label}>
                      <Link
                        href={guide.href}
                        className="group flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a3fa8] transition-colors"
                      >
                        <span className="text-gray-400 group-hover:text-[#1a3fa8] transition-colors">
                          {guide.icon}
                        </span>
                        {guide.label}
                      </Link>
                    </li>
                  ))}
                </ul>
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
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-xs mb-2">
                Free Plan Comparison
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Compare Medicare Advantage Plans in Your Area
              </h2>
              <p className="text-white/80 text-base max-w-xl leading-relaxed">
                We compare every plan available in your ZIP code, including premiums, dental, vision,
                drug coverage, and out-of-pocket limits, at no cost to you.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8137897700"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                Call 813-789-7700
              </a>
              <p className="text-white/50 text-xs text-center">
                BBB A+ Rated · Brandon, FL · Free Service
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
