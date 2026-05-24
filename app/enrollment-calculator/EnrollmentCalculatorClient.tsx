"use client";

/**
 * Medicare Enrollment Calculator — MIP Next.js Client Component
 * Design: MIP brand — navy/gold, Merriweather headings, clean card-based layout
 * Interactive tool: enter birthday + employment status → personalized enrollment timeline
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  User,
  Shield,
  ArrowRight,
  Phone,
  Info,
  CalendarDays,
  Briefcase,
  Heart,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type EmploymentStatus =
  | "not-working"
  | "employer-coverage"
  | "spouse-coverage"
  | "no-employer-coverage";

interface TimelineEvent {
  id: string;
  dateLabel: string;
  title: string;
  description: string;
  type: "good" | "birthday" | "medigap" | "warning" | "aep" | "sep" | "info";
}

interface CalculatorResult {
  birthday65: Date;
  iepStart: Date;
  iepEnd: Date;
  bestEnrollStart: Date;
  bestEnrollEnd: Date;
  coverageStart: Date;
  medigapOepStart: Date;
  medigapOepEnd: Date;
  nextAep: { start: Date; end: Date };
  events: TimelineEvent[];
  recommendations: string[];
  canDelay: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const SHORT_MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function formatUpperDateRange(start: Date, _end: Date): string {
  return `${SHORT_MONTHS[start.getMonth()]} ${start.getFullYear()}`;
}

function getNextAep(from: Date): { start: Date; end: Date } {
  const year = from.getFullYear();
  const aepStart = new Date(year, 9, 1);
  const aepEnd = new Date(year, 11, 1);
  if (from > aepEnd) {
    return { start: new Date(year + 1, 9, 1), end: new Date(year + 1, 11, 1) };
  }
  return { start: aepStart, end: aepEnd };
}

function calculate(
  birthMonth: number,
  birthYear: number,
  status: EmploymentStatus
): CalculatorResult {
  const birthday65 = new Date(birthYear + 65, birthMonth, 1);
  const iepStart = addMonths(birthday65, -3);
  const iepEnd = addMonths(birthday65, 3);
  const bestEnrollStart = addMonths(birthday65, -3);
  const bestEnrollEnd = addMonths(birthday65, -1);
  const coverageStart = birthday65;
  const medigapOepStart = birthday65;
  const medigapOepEnd = addMonths(birthday65, 6);
  const nextAep = getNextAep(iepEnd);
  const canDelay = status === "employer-coverage" || status === "spouse-coverage";

  let events: TimelineEvent[] = [];
  let recommendations: string[] = [];

  if (!canDelay) {
    events = [
      {
        id: "iep-start",
        dateLabel: formatUpperDateRange(iepStart, iepStart),
        title: "IEP Begins",
        description: `Your Initial Enrollment Period opens. You can sign up for Medicare Part A and Part B starting ${formatMonthYear(iepStart)}.`,
        type: "good",
      },
      {
        id: "best-enroll",
        dateLabel: `${SHORT_MONTHS[bestEnrollStart.getMonth()]} ${bestEnrollStart.getFullYear()} – ${SHORT_MONTHS[bestEnrollEnd.getMonth()]} ${bestEnrollEnd.getFullYear()}`,
        title: "Best Time to Enroll",
        description: `Enrolling during the 3 months before your birthday month (${formatMonthYear(bestEnrollStart)} – ${formatMonthYear(bestEnrollEnd)}) gives you the earliest possible coverage start date of ${formatMonthYear(coverageStart)}.`,
        type: "good",
      },
      {
        id: "birthday",
        dateLabel: formatUpperDateRange(birthday65, birthday65),
        title: "You Turn 65",
        description: `Happy birthday! If you haven't enrolled yet, you can still enroll during your birthday month or the 3 months after. Note: coverage start will be delayed if you enroll after your birthday month.`,
        type: "birthday",
      },
      {
        id: "medigap-oep",
        dateLabel: `${SHORT_MONTHS[medigapOepStart.getMonth()]} ${medigapOepStart.getFullYear()} – ${SHORT_MONTHS[medigapOepEnd.getMonth()]} ${medigapOepEnd.getFullYear()}`,
        title: "Medigap Open Enrollment",
        description: `Your 6-month Medigap Open Enrollment Period runs from ${formatMonthYear(medigapOepStart)} through ${formatMonthYear(medigapOepEnd)}. During this window, insurers must sell you any Medigap plan at the best available rate — no medical underwriting. This is the best time to buy a supplement plan.`,
        type: "medigap",
      },
      {
        id: "iep-end",
        dateLabel: formatUpperDateRange(iepEnd, iepEnd),
        title: "IEP Closes",
        description: `Your Initial Enrollment Period ends. If you miss this deadline without qualifying for a Special Enrollment Period, you may face a permanent late enrollment penalty and will need to wait for the General Enrollment Period (Jan 1 – Mar 31) with coverage starting July 1.`,
        type: "warning",
      },
      {
        id: "aep",
        dateLabel: `${SHORT_MONTHS[nextAep.start.getMonth()]} ${nextAep.start.getFullYear()} – ${SHORT_MONTHS[nextAep.end.getMonth()]} ${nextAep.end.getFullYear()}`,
        title: "Annual Election Period",
        description: `The Annual Election Period (Oct 15 – Dec 7) lets you switch, join, or drop Medicare Advantage or Part D plans. Changes take effect January 1 of the following year.`,
        type: "aep",
      },
    ];

    recommendations = [
      `Sign up for Medicare during your Initial Enrollment Period (${formatMonthYear(iepStart)} – ${formatMonthYear(iepEnd)}) to get the earliest possible coverage and avoid penalties.`,
      `For the earliest coverage start date of ${formatMonthYear(coverageStart)}, enroll during the 3 months before your birth month (${formatMonthYear(bestEnrollStart)} – ${formatMonthYear(bestEnrollEnd)}).`,
      `Consider enrolling in a Medigap (Medicare Supplement) plan during your 6-month Medigap Open Enrollment Period (${formatMonthYear(medigapOepStart)} – ${formatMonthYear(medigapOepEnd)}) for guaranteed-issue coverage.`,
      `If you need prescription drug coverage, also enroll in a Part D plan during your IEP to avoid the Part D late enrollment penalty.`,
      `The standard Part B premium for 2025 is $185.00/month. Higher earners may pay more due to the IRMAA income-related surcharge.`,
    ];
  } else {
    const sepLabel =
      status === "employer-coverage"
        ? "your employer coverage ends"
        : "your spouse's employer coverage ends";

    events = [
      {
        id: "iep-start",
        dateLabel: formatUpperDateRange(iepStart, iepStart),
        title: "IEP Begins (Optional)",
        description: `Your Initial Enrollment Period opens. Because you have qualifying employer coverage, you may choose to delay Part B enrollment without penalty. Part A (hospital) is usually free — consider enrolling in Part A now.`,
        type: "info",
      },
      {
        id: "birthday",
        dateLabel: formatUpperDateRange(birthday65, birthday65),
        title: "You Turn 65",
        description: `You turn 65 this month. You can delay Part B enrollment as long as you remain covered by qualifying employer coverage (20+ employees). Keep your insurance card and enrollment records — you'll need them to prove creditable coverage later.`,
        type: "birthday",
      },
      {
        id: "iep-end",
        dateLabel: formatUpperDateRange(iepEnd, iepEnd),
        title: "IEP Closes",
        description: `Your Initial Enrollment Period closes, but because you have qualifying employer coverage, you can continue to delay Part B without penalty. Your Special Enrollment Period (SEP) will begin when your employer coverage ends.`,
        type: "info",
      },
      {
        id: "sep",
        dateLabel: "WHEN COVERAGE ENDS",
        title: "Special Enrollment Period Begins",
        description: `When ${sepLabel}, your 8-month Special Enrollment Period (SEP) begins. You have 8 months to enroll in Medicare Part B without penalty. Do not wait for COBRA — COBRA does not count as creditable employer coverage for SEP purposes.`,
        type: "sep",
      },
      {
        id: "sep-end",
        dateLabel: "8 MONTHS AFTER COVERAGE ENDS",
        title: "SEP Closes — Enroll Before This Date",
        description: `Your Special Enrollment Period ends 8 months after your employer coverage ends (not 8 months after COBRA starts). Enrolling after this deadline will result in a permanent Part B late enrollment penalty of 10% per 12-month period you were eligible but not enrolled.`,
        type: "warning",
      },
      {
        id: "medigap-oep",
        dateLabel: "WHEN YOU ENROLL IN PART B",
        title: "Medigap Open Enrollment (63 Days)",
        description: `When you enroll in Part B via your SEP, you have a 63-day Medigap Special Enrollment Period. During this window, insurers must sell you any Medigap plan at the best available rate — no medical underwriting. This is your best opportunity to secure supplement coverage.`,
        type: "medigap",
      },
      {
        id: "aep",
        dateLabel: `${SHORT_MONTHS[nextAep.start.getMonth()]} ${nextAep.start.getFullYear()} – ${SHORT_MONTHS[nextAep.end.getMonth()]} ${nextAep.end.getFullYear()}`,
        title: "Annual Election Period",
        description: `The Annual Election Period (Oct 15 – Dec 7) lets you switch, join, or drop Medicare Advantage or Part D plans. Changes take effect January 1 of the following year.`,
        type: "aep",
      },
    ];

    recommendations = [
      `Consider enrolling in Medicare Part A now — it's usually premium-free and won't affect your employer coverage. However, if you have an HSA, enrolling in Part A will stop your ability to contribute to it.`,
      `When your employer coverage ends, your 8-month Special Enrollment Period begins immediately. Do not wait — enroll in Part B as soon as possible after your coverage ends.`,
      `Do NOT rely on COBRA to extend your SEP. COBRA does not count as creditable employer coverage for Medicare SEP purposes. Your 8-month SEP clock starts when your active employment coverage ends.`,
      `When you enroll in Part B via your SEP, you'll have a 63-day window to enroll in a Medigap plan with guaranteed issue rights — no health questions asked.`,
    ];
  }

  return {
    birthday65,
    iepStart,
    iepEnd,
    bestEnrollStart,
    bestEnrollEnd,
    coverageStart,
    medigapOepStart,
    medigapOepEnd,
    nextAep,
    events,
    recommendations,
    canDelay,
  };
}

// ─── Event Icon ───────────────────────────────────────────────────────────────

function EventIcon({ type }: { type: TimelineEvent["type"] }) {
  const base = "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0";
  switch (type) {
    case "good":
      return <div className={`${base} bg-emerald-100`}><CheckCircle size={18} className="text-emerald-600" aria-hidden="true" /></div>;
    case "birthday":
      return <div className={`${base} bg-slate-100`}><User size={18} className="text-slate-500" aria-hidden="true" /></div>;
    case "medigap":
      return <div className={`${base} bg-amber-100`}><Shield size={18} className="text-amber-600" aria-hidden="true" /></div>;
    case "warning":
      return <div className={`${base} bg-red-100`}><AlertTriangle size={18} className="text-red-500" aria-hidden="true" /></div>;
    case "aep":
      return <div className={`${base} bg-purple-100`}><CalendarDays size={18} className="text-purple-600" aria-hidden="true" /></div>;
    case "sep":
      return <div className={`${base} bg-blue-100`}><Briefcase size={18} className="text-blue-600" aria-hidden="true" /></div>;
    case "info":
      return <div className={`${base} bg-blue-50`}><Info size={18} className="text-blue-500" aria-hidden="true" /></div>;
    default:
      return <div className={`${base} bg-gray-100`}><Clock size={18} className="text-gray-500" aria-hidden="true" /></div>;
  }
}

function eventBorderColor(type: TimelineEvent["type"]): string {
  switch (type) {
    case "good": return "border-l-emerald-400";
    case "birthday": return "border-l-slate-300";
    case "medigap": return "border-l-amber-400";
    case "warning": return "border-l-red-400";
    case "aep": return "border-l-purple-400";
    case "sep": return "border-l-blue-400";
    case "info": return "border-l-blue-300";
    default: return "border-l-gray-300";
  }
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "How accurate is this calculator?",
    a: "This calculator uses standard Medicare enrollment rules to generate your dates. It is highly accurate for most people turning 65. However, dates may vary if you qualify for Medicare due to disability, ESRD, or ALS, or if you have other special circumstances. Always verify your specific dates with Medicare (1-800-MEDICARE) or the Social Security Administration.",
  },
  {
    q: "What if I'm eligible for Medicare due to disability?",
    a: "If you receive Social Security Disability Insurance (SSDI) for 24 months, you automatically become eligible for Medicare regardless of age. Your enrollment dates are different from the standard age-65 rules. Contact Social Security at 1-800-772-1213 for your specific enrollment dates.",
  },
  {
    q: "Do I need to sign up for both Part A and Part B?",
    a: "Most people should enroll in both Part A and Part B during their Initial Enrollment Period. Part A (hospital insurance) is usually premium-free if you or your spouse worked and paid Medicare taxes for at least 10 years. Part B (medical insurance) has a monthly premium ($185.00/month in 2025 for most people). If you have qualifying employer coverage, you may delay Part B without penalty.",
  },
  {
    q: "What happens if I miss my enrollment window?",
    a: "If you miss your IEP without a qualifying Special Enrollment Period, you'll face two consequences: (1) A permanent Part B late enrollment penalty of 10% added to your premium for every 12-month period you were eligible but didn't enroll — this penalty lasts for life. (2) You'll need to wait for the General Enrollment Period (January 1 – March 31) with coverage starting July 1. The Part D late penalty is 1% of the national base beneficiary premium per month you were without creditable drug coverage.",
  },
  {
    q: "What is the difference between IEP and SEP?",
    a: "The Initial Enrollment Period (IEP) is your first opportunity to enroll in Medicare — a 7-month window around your 65th birthday. A Special Enrollment Period (SEP) is a limited window to enroll outside the IEP due to a qualifying life event, such as losing employer-sponsored health coverage. The most common SEP is the 8-month window after your employer or union coverage ends.",
  },
  {
    q: "Is this tool free to use?",
    a: "Yes, this calculator is completely free. MedicareInfoPro provides this tool as an educational resource. Our licensed Medicare agents are also available at no cost to help you understand your options and choose the right plan.",
  },
];

// ─── Page Component ──────────────────────────────────────────────────────────

export default function EnrollmentCalculatorClient() {
  const [birthMonth, setBirthMonth] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");
  const [status, setStatus] = useState<EmploymentStatus>("not-working");
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ month?: string; year?: string }>({});
  const resultRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1955 }, (_, i) => currentYear - i - 1).reverse();

  function validate(): boolean {
    const errs: { month?: string; year?: string } = {};
    if (!birthMonth) errs.month = "Please select your birth month.";
    if (!birthYear) errs.year = "Please select your birth year.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleCalculate() {
    if (!validate()) return;
    const res = calculate(parseInt(birthMonth), parseInt(birthYear), status);
    setResult(res);
    setExpandedEvent(null);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handleReset() {
    setBirthMonth("");
    setBirthYear("");
    setStatus("not-working");
    setResult(null);
    setExpandedEvent(null);
    setErrors({});
  }

  const statusOptions: {
    value: EmploymentStatus;
    label: string;
    desc: string;
    icon: React.ReactNode;
  }[] = [
    {
      value: "not-working",
      label: "Not currently working",
      desc: "Retired, self-employed, or no employer health coverage",
      icon: <User size={18} aria-hidden="true" />,
    },
    {
      value: "employer-coverage",
      label: "Working with employer coverage",
      desc: "Employed with health insurance from employer (20+ employees)",
      icon: <Briefcase size={18} aria-hidden="true" />,
    },
    {
      value: "spouse-coverage",
      label: "Covered through spouse's employer",
      desc: "Health insurance through spouse's job (20+ employees)",
      icon: <Heart size={18} aria-hidden="true" />,
    },
    {
      value: "no-employer-coverage",
      label: "Working without employer coverage",
      desc: "Employed but no employer-sponsored health insurance",
      icon: <AlertTriangle size={18} aria-hidden="true" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f8f9fb" }}>
      <Header />

      {/* ── Hero ── */}
      <section
        className="py-14 lg:py-20"
        style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/enrollment-timeline" className="hover:text-white transition-colors">Enrollment</Link>
            <span>/</span>
            <span className="text-white" aria-current="page">Enrollment Calculator</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/20">
              <CalendarDays size={13} aria-hidden="true" /> Interactive Tool
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Medicare Enrollment Timeline Calculator
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Enter your birthday and employment status to see exactly when you
            should enroll in Medicare and what deadlines to watch. Get a
            personalized timeline with all your key dates.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Calculator Form ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full bg-[#1a3fa8]/10 flex items-center justify-center">
                  <Calendar size={18} className="text-[#1a3fa8]" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    className="text-lg font-bold text-gray-900"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Tell Us About Yourself
                  </h2>
                  <p className="text-sm text-gray-500">
                    We'll calculate your personalized Medicare timeline
                  </p>
                </div>
              </div>

              {/* Step 1: Birth date */}
              <div className="mb-7">
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  Step 1: When were you born?
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  We only need your birth month and year to calculate your
                  Medicare enrollment dates.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <select
                      value={birthMonth}
                      onChange={(e) => {
                        setBirthMonth(e.target.value);
                        setErrors((p) => ({ ...p, month: undefined }));
                      }}
                      aria-label="Birth month"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 transition-colors ${
                        errors.month ? "border-red-400" : "border-gray-200"
                      }`}
                    >
                      <option value="">Select month...</option>
                      {MONTHS.map((m, i) => (
                        <option key={m} value={i}>{m}</option>
                      ))}
                    </select>
                    {errors.month && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.month}</p>
                    )}
                  </div>
                  <div>
                    <select
                      value={birthYear}
                      onChange={(e) => {
                        setBirthYear(e.target.value);
                        setErrors((p) => ({ ...p, year: undefined }));
                      }}
                      aria-label="Birth year"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 transition-colors ${
                        errors.year ? "border-red-400" : "border-gray-200"
                      }`}
                    >
                      <option value="">Select year...</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                    {errors.year && (
                      <p className="text-red-500 text-xs mt-1" role="alert">{errors.year}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 2: Employment status */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  Step 2: What is your current employment status?
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  This determines whether you can delay Medicare enrollment
                  without a penalty.
                </p>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  role="radiogroup"
                  aria-label="Employment status"
                >
                  {statusOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setStatus(opt.value)}
                      role="radio"
                      aria-checked={status === opt.value}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        status === opt.value
                          ? "border-[#1a3fa8] bg-[#1a3fa8]/5"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex-shrink-0 ${
                          status === opt.value ? "text-[#1a3fa8]" : "text-gray-400"
                        }`}
                      >
                        {opt.icon}
                      </div>
                      <div>
                        <p
                          className={`text-sm font-semibold leading-snug ${
                            status === opt.value ? "text-[#1a3fa8]" : "text-gray-800"
                          }`}
                        >
                          {opt.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {opt.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleCalculate}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #1a3fa8 0%, #2a5fd8 100%)" }}
                >
                  <Calendar size={17} aria-hidden="true" />
                  Calculate My Timeline
                </button>
                {result && (
                  <button
                    onClick={handleReset}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Start Over
                  </button>
                )}
              </div>
            </div>

            {/* ── Results ── */}
            <AnimatePresence>
              {result && (
                <motion.div
                  ref={resultRef}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8"
                  aria-live="polite"
                >
                  {/* Summary Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                        You Turn 65
                      </p>
                      <p
                        className="text-lg font-bold text-gray-900"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {formatMonthYear(result.birthday65)}
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Enrollment Window
                      </p>
                      <p
                        className="text-sm font-bold text-[#1a3fa8]"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {result.canDelay
                          ? "SEP After Coverage Ends"
                          : `${SHORT_MONTHS[result.iepStart.getMonth()]} ${result.iepStart.getFullYear()} – ${SHORT_MONTHS[result.iepEnd.getMonth()]} ${result.iepEnd.getFullYear()}`}
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Coverage Starts
                      </p>
                      <p
                        className="text-lg font-bold text-emerald-600"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {result.canDelay
                          ? "When You Enroll"
                          : formatMonthYear(result.coverageStart)}
                      </p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-8">
                    <h3
                      className="text-lg font-bold text-gray-900 mb-1"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Your Personal Medicare Timeline
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Click each event to see details and recommendations.
                    </p>

                    <div className="space-y-3">
                      {result.events.map((event, i) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                        >
                          <button
                            onClick={() =>
                              setExpandedEvent(
                                expandedEvent === event.id ? null : event.id
                              )
                            }
                            aria-expanded={expandedEvent === event.id}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl border-l-4 border border-gray-100 text-left transition-all duration-200 hover:shadow-sm ${eventBorderColor(event.type)} ${
                              event.type === "warning" ? "bg-red-50/50" : "bg-white"
                            } ${expandedEvent === event.id ? "shadow-sm" : ""}`}
                          >
                            <EventIcon type={event.type} />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                                {event.dateLabel}
                              </p>
                              <p className="text-sm font-semibold text-gray-900">
                                {event.title}
                              </p>
                            </div>
                            {expandedEvent === event.id ? (
                              <ChevronUp size={17} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                            ) : (
                              <ChevronDown size={17} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                            )}
                          </button>
                          <AnimatePresence>
                            {expandedEvent === event.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 py-4 bg-gray-50 rounded-b-xl border border-t-0 border-gray-100 text-sm text-gray-700 leading-relaxed">
                                  {event.description}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-8">
                    <h3
                      className="text-lg font-bold text-gray-900 mb-5"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Personalized Recommendations
                    </h3>
                    <ul className="space-y-3">
                      {result.recommendations.map((rec, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                        >
                          <CheckCircle size={17} className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {rec}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Inline CTA */}
                  <div
                    className="rounded-2xl p-7 text-white"
                    style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Need Help With Your Enrollment?
                    </h3>
                    <p className="text-white/80 text-sm mb-5">
                      Our licensed Medicare agents can walk you through your
                      specific situation and help you choose the right plan — at
                      no cost to you.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:8136995559"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1a3fa8] font-bold text-sm hover:bg-white/90 transition-colors"
                        aria-label="Call MIP at 813-699-5559 for free enrollment help"
                      >
                        <Phone size={16} aria-hidden="true" />
                        Call 813-699-5559
                      </a>
                      <Link
                        href="/am-i-eligible"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors"
                      >
                        Check Eligibility <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>Important Disclaimer:</strong> This calculator
                      provides general estimates based on standard Medicare
                      enrollment rules. Your actual dates may vary based on
                      individual circumstances, disability status, or other
                      factors. Always verify your specific enrollment dates with
                      Medicare (1-800-MEDICARE) or Social Security. This tool is
                      for educational purposes and does not constitute official
                      Medicare guidance.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6" aria-label="Calculator tips and resources">
            {/* Quick Tips */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3
                className="text-base font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Quick Tips
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: <Star size={15} className="text-amber-500" aria-hidden="true" />, text: "Enroll 3 months before your 65th birthday for the earliest coverage start date." },
                  { icon: <AlertTriangle size={15} className="text-red-500" aria-hidden="true" />, text: "Missing your IEP can result in a permanent Part B penalty — 10% per year of delay." },
                  { icon: <Shield size={15} className="text-emerald-500" aria-hidden="true" />, text: "Your 6-month Medigap Open Enrollment is your best window for guaranteed-issue supplement coverage." },
                  { icon: <Briefcase size={15} className="text-blue-500" aria-hidden="true" />, text: "If you have employer coverage (20+ employees), you can delay Part B without penalty." },
                  { icon: <CalendarDays size={15} className="text-purple-500" aria-hidden="true" />, text: "The Annual Election Period (Oct 15 – Dec 7) is your yearly chance to change Advantage or Part D plans." },
                ].map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="flex-shrink-0 mt-0.5">{tip.icon}</span>
                    {tip.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Resources */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3
                className="text-base font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Related Resources
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Enrollment Timeline Guide", href: "/enrollment-timeline" },
                  { label: "Am I Eligible?", href: "/am-i-eligible" },
                  { label: "Original vs. Advantage", href: "/original-vs-advantage" },
                  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
                  { label: "Costs at a Glance", href: "/costs-at-a-glance" },
                  { label: "Take the Medicare Quiz", href: "/quiz" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[#1a3fa8] hover:text-[#0d1f5c] font-medium transition-colors py-1"
                    >
                      <ArrowRight size={13} className="flex-shrink-0" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agent CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: "linear-gradient(135deg, #c8960c 0%, #e8b020 100%)" }}
            >
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Free Expert Guidance
              </h3>
              <p className="text-sm text-white/90 mb-4 leading-relaxed">
                Speak with a licensed Medicare agent — no cost, no pressure.
              </p>
              <a
                href="tel:8136995559"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#c8960c] font-bold text-sm hover:bg-white/90 transition-colors w-full justify-center"
                aria-label="Call MIP at 813-699-5559 for free Medicare guidance"
              >
                <Phone size={15} aria-hidden="true" />
                813-699-5559
              </a>
            </div>
          </aside>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {item.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={17} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown size={17} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
