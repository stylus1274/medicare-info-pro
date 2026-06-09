"use client";

/**
 * Medicare Enrollment Timeline - MIP Next.js Client Component
 * Design: Warm Guide - Merriweather headlines, Inter body
 * Primary: #1a3fa8 (royal blue), Accent: #f5a800 (gold)
 * Layout: Full-bleed hero → stats bar → IEP visual timeline → enrollment period cards
 *         → penalty section → key dates table → FAQ → CTA → related pages
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Callout from "@/components/Callout";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Phone,
  ArrowRight,
  Clock,
  Info,
  Shield,
  Zap,
  RefreshCw,
  Star,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/enrollment-timeline-hero-fUV4Z6QqzsEB6MK58CcaeN.webp";

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "iep", label: "Initial Enrollment Period" },
  { id: "periods", label: "All Enrollment Periods" },
  { id: "penalties", label: "Late Enrollment Penalties" },
  { id: "key-dates", label: "Key Dates Reference" },
  { id: "faq", label: "Frequently Asked Questions" },
];

// ─── Enrollment Periods ───────────────────────────────────────────────────────

const enrollmentPeriods = [
  {
    id: "iep",
    icon: Star,
    color: "bg-blue-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    tag: "Most Important",
    tagBg: "bg-blue-100 text-blue-700",
    title: "Initial Enrollment Period (IEP)",
    subtitle: "Your first - and most important - window",
    duration: "7 months",
    when: "3 months before your 65th birthday month through 3 months after",
    description:
      "The IEP is the 7-month window centered around your 65th birthday. It is the most important enrollment period because missing it without a valid reason results in permanent late penalties. Most people are automatically enrolled if they already receive Social Security benefits.",
    details: [
      "Months 1–3 (before birthday month): Coverage starts the 1st of your birthday month",
      "Month 4 (birthday month): Coverage starts the 1st of the following month",
      "Months 5–7 (after birthday month): Coverage delayed 2–3 months",
      "Automatic enrollment if receiving Social Security at 65",
      "Must actively enroll if not yet receiving Social Security",
    ],
    warning:
      "Enrolling in months 5–7 delays your coverage start date. Enroll in months 1–3 for the earliest possible start.",
  },
  {
    id: "gep",
    icon: RefreshCw,
    color: "bg-slate-600",
    lightBg: "bg-slate-50",
    borderColor: "border-slate-200",
    textColor: "text-slate-700",
    tag: "Annual",
    tagBg: "bg-slate-100 text-slate-700",
    title: "General Enrollment Period (GEP)",
    subtitle: "If you missed your IEP",
    duration: "3 months",
    when: "January 1 – March 31 each year",
    description:
      "If you missed your Initial Enrollment Period and don't qualify for a Special Enrollment Period, the GEP is your chance to sign up. However, you will likely face a late enrollment penalty, and coverage won't begin until July 1 of that year.",
    details: [
      "Open every year: January 1 – March 31",
      "Coverage begins July 1 of the enrollment year",
      "Late enrollment penalties apply if you missed your IEP",
      "Does not apply if you have a qualifying SEP reason",
      "Part B premium penalty is permanent",
    ],
    warning:
      "Coverage doesn't start until July 1 - a gap of up to 6 months after you enroll.",
  },
  {
    id: "aep",
    icon: Calendar,
    color: "bg-amber-600",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    tag: "Annual",
    tagBg: "bg-amber-100 text-amber-700",
    title: "Annual Enrollment Period (AEP)",
    subtitle: "Switch or change your plan each fall",
    duration: "7 weeks",
    when: "October 15 – December 7 each year",
    description:
      "The AEP - also called Open Enrollment - is when anyone with Medicare can make changes to their coverage for the following year. You can switch between Original Medicare and Medicare Advantage, change your Part D drug plan, or switch between Advantage plans.",
    details: [
      "Open every year: October 15 – December 7",
      "Changes take effect January 1 of the following year",
      "Switch from Original Medicare to Medicare Advantage (or back)",
      "Change your Part D prescription drug plan",
      "Switch between Medicare Advantage plans",
    ],
    warning: null,
  },
  {
    id: "sep",
    icon: Zap,
    color: "bg-green-600",
    lightBg: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    tag: "Triggered by Life Events",
    tagBg: "bg-green-100 text-green-700",
    title: "Special Enrollment Period (SEP)",
    subtitle: "Life changes that open a new window",
    duration: "Varies (usually 8 months)",
    when: "Triggered by qualifying life events",
    description:
      "A Special Enrollment Period is triggered when you experience certain qualifying life events - most commonly losing employer health coverage. An SEP allows you to enroll in Medicare outside of standard enrollment windows without incurring a late penalty.",
    details: [
      "Losing employer or union health coverage",
      "Retiring and losing group health insurance",
      "Moving to a new service area",
      "Gaining or losing Medicaid eligibility",
      "Leaving a Medicare Advantage plan that leaves your area",
      "Part B SEP: 8 months from when employer coverage ends",
    ],
    warning: null,
  },
  {
    id: "oepa",
    icon: Shield,
    color: "bg-purple-600",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    tag: "Medicare Advantage Only",
    tagBg: "bg-purple-100 text-purple-700",
    title: "Medicare Advantage Open Enrollment (OEP)",
    subtitle: "One change after January 1",
    duration: "3 months",
    when: "January 1 – March 31 each year",
    description:
      "If you are already enrolled in a Medicare Advantage plan, the OEP gives you one opportunity to switch to a different Advantage plan or return to Original Medicare. Unlike the AEP, the OEP is only available to those already in a Medicare Advantage plan.",
    details: [
      "Only available to current Medicare Advantage enrollees",
      "One plan change allowed during this period",
      "Switch to a different Medicare Advantage plan",
      "Drop Medicare Advantage and return to Original Medicare",
      "Changes take effect the first of the following month",
    ],
    warning: null,
  },
];

// ─── Penalties ────────────────────────────────────────────────────────────────

const penalties = [
  {
    part: "Part A",
    color: "bg-blue-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    penalty: "10% premium increase",
    duration: "Twice the number of years you delayed",
    who: "Only applies if you don't qualify for premium-free Part A",
    example: "If you delayed 2 years, you pay the 10% penalty for 4 years",
    note: "Most people (those with 40+ work quarters) get Part A premium-free, so this penalty rarely applies.",
  },
  {
    part: "Part B",
    color: "bg-red-600",
    lightBg: "bg-red-50",
    borderColor: "border-red-200",
    penalty: "10% per year delayed",
    duration: "Permanent - for as long as you have Part B",
    who: "Anyone who delays enrollment without creditable employer coverage",
    example: "2 years late = 20% higher monthly premium forever",
    note: "This is the most impactful penalty. The standard 2026 Part B premium is $202.90/month - a 2-year delay adds approximately $40.58/month permanently.",
  },
  {
    part: "Part D",
    color: "bg-amber-600",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
    penalty: "1% per month without creditable coverage",
    duration: "Permanent - added to your monthly Part D premium",
    who: "Anyone who goes 63+ consecutive days without creditable drug coverage",
    example: "14 months without coverage = 14% higher Part D premium forever",
    note: "Creditable coverage includes most employer drug plans, VA benefits, and TRICARE. Keep documentation proving your coverage was creditable.",
  },
];

// ─── Key Dates Table ──────────────────────────────────────────────────────────

const keyDates = [
  {
    period: "Initial Enrollment Period (IEP)",
    window: "7 months centered on 65th birthday",
    coverageStart: "Varies - earliest is 1st of birthday month",
    penalty: "Yes, if missed without SEP",
  },
  {
    period: "General Enrollment Period (GEP)",
    window: "Jan 1 – Mar 31",
    coverageStart: "July 1",
    penalty: "Yes (Part B & D)",
  },
  {
    period: "Annual Enrollment Period (AEP)",
    window: "Oct 15 – Dec 7",
    coverageStart: "January 1 of following year",
    penalty: "No",
  },
  {
    period: "Medicare Advantage OEP",
    window: "Jan 1 – Mar 31",
    coverageStart: "First of following month",
    penalty: "No",
  },
  {
    period: "Special Enrollment Period (SEP)",
    window: "Triggered by qualifying event",
    coverageStart: "Varies by event type",
    penalty: "No (if used correctly)",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is the most important Medicare enrollment deadline?",
    a: "Your Initial Enrollment Period (IEP) is the most critical. It's a 7-month window centered on your 65th birthday. Missing it without a qualifying reason results in permanent late enrollment penalties - 10% per year for Part B and 1% per month for Part D. These penalties last for as long as you have Medicare.",
  },
  {
    q: "When exactly does my IEP begin and end?",
    a: "Your IEP begins 3 months before the month you turn 65 and ends 3 months after your birthday month - a total of 7 months. For example, if you turn 65 in June, your IEP runs from March 1 through September 30. Enrolling in the first 3 months (March–May in this example) gives you the earliest possible coverage start date.",
  },
  {
    q: "Can I delay Medicare if I'm still working and have employer coverage?",
    a: "Yes. If you or your spouse has active employer coverage from a company with 20 or more employees, you can delay Medicare enrollment without penalty. Once that employment ends, you have an 8-month Special Enrollment Period to sign up for Part B without a late penalty. Important: COBRA and retiree coverage do not count as creditable employer coverage for this purpose.",
  },
  {
    q: "What is the difference between the AEP and the OEP?",
    a: "The Annual Enrollment Period (AEP) runs October 15 – December 7 and is open to all Medicare beneficiaries. You can switch between Original Medicare and Medicare Advantage, or change your Part D plan. The Medicare Advantage Open Enrollment Period (OEP) runs January 1 – March 31 and is only available to people already enrolled in a Medicare Advantage plan - it allows one plan change.",
  },
  {
    q: "What qualifies as a Special Enrollment Period trigger?",
    a: "The most common SEP trigger is losing employer or union health coverage (including when you or your covered spouse retires). Other triggers include moving out of your plan's service area, losing Medicaid eligibility, and your Medicare Advantage plan leaving your area. Each trigger has its own SEP window - typically 8 months for losing employer coverage.",
  },
  {
    q: "Is the Part B late enrollment penalty really permanent?",
    a: "Yes. The Part B late enrollment penalty is 10% for each full 12-month period you were eligible but didn't enroll. It is added to your monthly Part B premium for as long as you have Part B - there is no expiration. At the 2026 standard premium of $202.90/month, even a 2-year delay adds approximately $40.58/month permanently.",
  },
  {
    q: "What if I missed my enrollment window - what do I do now?",
    a: "Contact an MIP licensed agent immediately. Depending on your situation, you may qualify for a Special Enrollment Period, or you may need to wait for the General Enrollment Period (January 1 – March 31). An agent can review your specific circumstances and help you minimize any penalties. The sooner you act, the better.",
  },
];

// ─── IEP Visual Timeline ──────────────────────────────────────────────────────

const iepMonths = [
  { label: "Month 1", desc: "3 mo. before birthday", phase: "before", tip: "Best time to enroll - coverage starts on your birthday month" },
  { label: "Month 2", desc: "2 mo. before birthday", phase: "before", tip: "Still ideal - coverage starts on your birthday month" },
  { label: "Month 3", desc: "1 mo. before birthday", phase: "before", tip: "Last chance for on-time coverage start" },
  { label: "Month 4", desc: "Birthday month", phase: "birthday", tip: "Coverage starts the 1st of the following month" },
  { label: "Month 5", desc: "1 mo. after birthday", phase: "after", tip: "Coverage delayed 2 months from enrollment" },
  { label: "Month 6", desc: "2 mo. after birthday", phase: "after", tip: "Coverage delayed 2–3 months from enrollment" },
  { label: "Month 7", desc: "3 mo. after birthday", phase: "after", tip: "Last month of IEP - coverage delayed 3 months" },
];

function IEPTimeline() {
  const [activeMonth, setActiveMonth] = useState<number | null>(null);

  const phaseColors: Record<string, string> = {
    before: "bg-green-500",
    birthday: "bg-[#1a3fa8]",
    after: "bg-amber-400",
  };
  const phaseBorders: Record<string, string> = {
    before: "border-green-500",
    birthday: "border-[#1a3fa8]",
    after: "border-amber-400",
  };
  const phaseLabels: Record<string, string> = {
    before: "Enroll Now",
    birthday: "Birthday Month",
    after: "Delayed Coverage",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-[#1a3fa8] px-8 py-5">
        <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
          7-Month Window
        </p>
        <h3
          className="text-white text-xl font-bold"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Your Initial Enrollment Period
        </h3>
        <p className="text-white/80 text-sm mt-1">
          Hover or tap each month to see coverage start details
        </p>
      </div>

      <div className="px-6 py-8">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          {[
            { color: "bg-green-500", label: "Ideal - on-time coverage" },
            { color: "bg-[#1a3fa8]", label: "Birthday month" },
            { color: "bg-amber-400", label: "Delayed coverage start" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${l.color}`} aria-hidden="true" />
              <span className="text-gray-600">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="relative">
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200 z-0" aria-hidden="true" />
          <div className="relative z-10 grid grid-cols-7 gap-1">
            {iepMonths.map((month, i) => (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setActiveMonth(i)}
                onMouseLeave={() => setActiveMonth(null)}
                onClick={() => setActiveMonth(activeMonth === i ? null : i)}
                role="button"
                aria-label={`${month.label}: ${month.desc}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setActiveMonth(activeMonth === i ? null : i);
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 transition-all duration-200 ${
                    phaseColors[month.phase]
                  } ${
                    activeMonth === i
                      ? `${phaseBorders[month.phase]} scale-110 shadow-lg`
                      : "border-white shadow-sm"
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2 text-center leading-tight">
                  {month.label}
                </p>
                <p className="text-[10px] text-gray-400 text-center leading-tight mt-0.5">
                  {month.desc}
                </p>
                <span
                  className={`mt-2 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${
                    month.phase === "before"
                      ? "bg-green-100 text-green-700"
                      : month.phase === "birthday"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {phaseLabels[month.phase]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {activeMonth !== null && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              className="mt-6 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 flex items-start gap-3"
              role="status"
            >
              <Info className="w-5 h-5 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {iepMonths[activeMonth].label} -{" "}
                  {iepMonths[activeMonth].desc}
                </p>
                <p className="text-gray-600 text-sm mt-0.5">
                  {iepMonths[activeMonth].tip}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key takeaway */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl px-5 py-4 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-green-800 text-sm leading-relaxed">
            <strong>Best advice:</strong> Enroll in months 1–3 (before your
            birthday month) to ensure your Medicare coverage starts on time with
            no gaps.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function TOCSidebar({ activeSection }: { activeSection: string }) {
  return (
    <aside className="hidden xl:block w-72 flex-shrink-0" aria-label="Page navigation">
      <div className="sticky top-28 space-y-6">
        {/* TOC */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-4">
            <p
              className="text-white font-bold text-sm"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              In This Guide
            </p>
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
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Agent CTA */}
        <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-[#f5a800] rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3
            className="font-bold text-lg mb-2"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Not sure when to enroll?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            A licensed MIP agent will review your situation and tell you exactly
            when and how to enroll - at no cost to you.
          </p>
          <a
            href="tel:8136995559"
            className="flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm"
            aria-label="Call MIP at 813-699-5559"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            813-699-5559
          </a>
        </div>

        {/* Quick fact callout */}
        <Callout type="warning">
          <p className="font-bold text-amber-800 mb-1">Penalty Reminder</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            The Part B late penalty is <strong>permanent</strong>. A 2-year
            delay adds ~$40.58/month to your premium for life.
          </p>
        </Callout>
      </div>
    </aside>
  );
}

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default function EnrollmentTimelineClient() {
  const [activeSection, setActiveSection] = useState("iep");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(item.id);
        },
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
          aria-label="Calendar and clock representing Medicare enrollment deadlines"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 container py-12 w-full">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span>/</span>
            <span className="text-white" aria-current="page">Enrollment Timeline</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Getting Started
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Medicare Enrollment Timeline: When to Sign Up
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            Missing a Medicare enrollment window can mean permanent penalties
            and coverage gaps. Here's every deadline you need to know -
            explained clearly.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-[#0d1f5c] text-white py-4">
        <div className="container flex flex-wrap gap-6 justify-between items-center">
          {[
            { value: "7 months", label: "Initial Enrollment Window" },
            { value: "10% / year", label: "Part B Late Penalty" },
            { value: "1% / month", label: "Part D Late Penalty" },
            { value: "Permanent", label: "Duration of Penalties" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span
                className="text-[#f5a800] font-bold text-xl"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {s.value}
              </span>
              <span className="text-white/60 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex gap-10 items-start">
            {/* Article */}
            <article className="flex-1 min-w-0 space-y-16">

              {/* IEP Section */}
              <div id="iep">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                    Step 1 - Your First Window
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    The Initial Enrollment Period (IEP)
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    The Initial Enrollment Period is the 7-month window centered
                    on your 65th birthday. It is the most important enrollment
                    deadline in Medicare - missing it without a qualifying reason
                    results in permanent late enrollment penalties that last for
                    as long as you have Medicare.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    <strong>When you enroll within your IEP matters.</strong>{" "}
                    Enrolling in the first three months (before your birthday
                    month) ensures your coverage starts on the first day of your
                    birthday month. Enrolling later delays your coverage start
                    date by one to three months.
                  </p>
                  <IEPTimeline />
                </motion.div>
              </div>

              {/* All Enrollment Periods */}
              <div id="periods">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                    All Enrollment Windows
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Every Medicare Enrollment Period Explained
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Beyond the IEP, there are four other enrollment windows that
                    allow you to sign up for or change your Medicare coverage.
                    Each has different eligibility rules, timing, and
                    consequences.
                  </p>

                  <div className="space-y-6">
                    {enrollmentPeriods.map((period, i) => (
                      <motion.div
                        key={period.id}
                        id={period.id}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className={`bg-white rounded-2xl border ${period.borderColor} shadow-sm overflow-hidden`}
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 ${period.color} rounded-xl flex items-center justify-center`}
                              >
                                <period.icon className="w-5 h-5 text-white" aria-hidden="true" />
                              </div>
                              <span
                                className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${period.tagBg}`}
                              >
                                {period.tag}
                              </span>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-400 uppercase tracking-wide">
                                Duration
                              </p>
                              <p className={`font-bold text-sm ${period.textColor}`}>
                                {period.duration}
                              </p>
                            </div>
                          </div>

                          <h3
                            className="text-xl font-bold text-gray-900 mb-1"
                            style={{ fontFamily: "'Merriweather', serif" }}
                          >
                            {period.title}
                          </h3>
                          <p className="text-gray-500 text-sm mb-3">
                            {period.subtitle}
                          </p>

                          <div
                            className={`inline-flex items-center gap-2 ${period.lightBg} ${period.textColor} rounded-lg px-3 py-1.5 text-sm font-medium mb-4`}
                          >
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            {period.when}
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-4">
                            {period.description}
                          </p>

                          <ul className="space-y-2">
                            {period.details.map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {d}
                              </li>
                            ))}
                          </ul>

                          {period.warning && (
                            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <p className="text-amber-800 text-sm leading-relaxed">
                                {period.warning}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Penalties */}
              <div id="penalties">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                    What Happens If You Miss Your Window
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Late Enrollment Penalties
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Medicare late enrollment penalties are not one-time fees -
                    they are permanent increases to your monthly premium. The
                    longer you delay, the higher your penalty, and it lasts for
                    as long as you have Medicare. This is why timing your
                    enrollment correctly is so critical.
                  </p>

                  <div className="grid md:grid-cols-3 gap-5 mb-8">
                    {penalties.map((p) => (
                      <div
                        key={p.part}
                        id={`penalty-${p.part.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                        className={`${p.lightBg} border ${p.borderColor} rounded-2xl p-5`}
                      >
                        <div
                          className={`inline-block ${p.color} text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4`}
                        >
                          {p.part} Penalty
                        </div>
                        <p
                          className="text-2xl font-bold text-gray-900 mb-1"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          {p.penalty}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          {p.duration}
                        </p>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p>
                            <strong>Who it affects:</strong> {p.who}
                          </p>
                          <p>
                            <strong>Example:</strong> {p.example}
                          </p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs text-gray-500 italic">{p.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Big warning callout */}
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl px-6 py-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4
                          className="font-bold text-red-800 text-lg mb-2"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          Penalties Are Permanent
                        </h4>
                        <p className="text-red-700 leading-relaxed">
                          Unlike many financial penalties, Medicare late
                          enrollment penalties do not go away after a set number
                          of years. They are added to your monthly premium for
                          as long as you have Medicare coverage. A 2-year Part B
                          delay at the 2026 standard premium of $202.90/month
                          means paying an extra ~$40.58/month - that's over $487
                          per year, every year, for the rest of your life.
                        </p>
                        <p className="text-red-700 leading-relaxed mt-3">
                          If you think you may have missed your enrollment
                          window, contact an MIP agent immediately. There may be
                          options available depending on your specific situation.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Key Dates Table */}
              <div id="key-dates">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                    Quick Reference
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Key Dates at a Glance
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Use this table as a quick reference for all Medicare
                    enrollment windows, when they open and close, when coverage
                    begins, and whether a late penalty applies.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#1a3fa8] text-white">
                          <th className="text-left px-5 py-4 font-semibold">
                            Enrollment Period
                          </th>
                          <th className="text-left px-5 py-4 font-semibold">
                            Window
                          </th>
                          <th className="text-left px-5 py-4 font-semibold">
                            Coverage Starts
                          </th>
                          <th className="text-left px-5 py-4 font-semibold">
                            Late Penalty?
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {keyDates.map((row, i) => (
                          <tr
                            key={row.period}
                            className={`border-t border-gray-100 ${
                              i % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="px-5 py-4 font-semibold text-gray-800">
                              {row.period}
                            </td>
                            <td className="px-5 py-4 text-gray-600">
                              {row.window}
                            </td>
                            <td className="px-5 py-4 text-gray-600">
                              {row.coverageStart}
                            </td>
                            <td className="px-5 py-4">
                              <span
                                className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full ${
                                  row.penalty === "No" ||
                                  row.penalty.startsWith("No (")
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {row.penalty}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>

              {/* FAQ */}
              <div id="faq">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                    Common Questions
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-2">
                    <FaqAccordion items={faqs} defaultOpen={null} />
                  </div>
                </motion.div>
              </div>
            </article>

            {/* Sidebar */}
            <TOCSidebar activeSection={activeSection} />
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#1a3fa8] py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-2">
                Free Enrollment Help
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Don't risk a permanent penalty.
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                A licensed MIP agent will review your specific situation,
                confirm your enrollment window, and help you choose the right
                plan - at absolutely no cost to you.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg whitespace-nowrap"
                aria-label="Call MIP at 813-699-5559 for free enrollment help"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call 813-699-5559
              </a>
              <p className="text-white/50 text-xs text-center">
                BBB A+ Rated · Brandon, FL · Free Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2
            className="text-2xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Continue Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/am-i-eligible",
                label: "Am I Eligible?",
                desc: "Find out if you qualify for Medicare and which eligibility path applies to you.",
                tag: "Eligibility",
              },
              {
                href: "/medicare-101",
                label: "Medicare 101 Overview",
                desc: "A complete beginner's guide to Parts A, B, C, and D - everything in one place.",
                tag: "Beginner Guide",
              },
              {
                href: "/resources",
                label: "Medicare Resources",
                desc: "Browse all our guides, articles, and tools to help you navigate Medicare.",
                tag: "Resources",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3 block">
                  {link.tag}
                </span>
                <h3
                  className="text-lg font-bold text-gray-900 group-hover:text-[#1a3fa8] mb-2 transition-colors"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {link.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {link.desc}
                </p>
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
