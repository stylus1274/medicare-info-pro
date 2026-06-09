"use client";

/**
 * First Steps Checklist - MIP Next.js Client Component
 * Design: MIP brand - navy/gold, Merriweather headings
 * Feature: Persistent checkbox state via localStorage, progress ring, print view
 * Sections: Hero → Progress Bar → Intro → 6 Phase Cards → Completion → CTA → Related
 * Note: Callout has no `title` prop - headings are inlined inside children.
 * All year references updated to 2026.
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Callout from "@/components/Callout";
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  Phone,
  ArrowRight,
  Info,
  AlertTriangle,
  Printer,
  RotateCcw,
  Clock,
  CalendarDays,
  FileText,
  Stethoscope,
  Pill,
  Shield,
  Star,
  ChevronRight,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/first-steps-checklist-hero-PGVcHBnzYV2VUbed3eCtQz.webp";

const STORAGE_KEY = "mip-first-steps-checklist";

// ─── Types ────────────────────────────────────────────────────────────────────

type ChecklistItem = {
  id: string;
  text: string;
  detail?: string;
  link?: { label: string; href: string };
  warning?: string;
};

type Phase = {
  id: string;
  phase: string;
  title: string;
  timing: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  items: ChecklistItem[];
};

// ─── Checklist Data ───────────────────────────────────────────────────────────

const phases: Phase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Understand Your Options",
    timing: "6–12 months before turning 65",
    icon: FileText,
    color: "text-[#1a3fa8]",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      {
        id: "p1-1",
        text: "Learn the difference between Original Medicare and Medicare Advantage",
        detail: "This is the most important decision you'll make. Original Medicare gives you nationwide freedom; Advantage plans offer extra benefits with network restrictions.",
        link: { label: "Read the comparison guide", href: "/original-vs-advantage" },
      },
      {
        id: "p1-2",
        text: "Understand what Parts A, B, C, and D cover",
        detail: "Part A = hospital, Part B = medical, Part C = Advantage plans, Part D = prescription drugs. You need to know what each covers before choosing.",
        link: { label: "Medicare 101 overview", href: "/medicare-101" },
      },
      {
        id: "p1-3",
        text: "Review the 2026 Medicare costs: premiums, deductibles, and out-of-pocket limits",
        detail: "Part B costs $202.90/month in 2026. Part A is free for most people. Part D now has a $2,000 annual out-of-pocket cap.",
        link: { label: "Costs at a Glance", href: "/costs-at-a-glance" },
      },
      {
        id: "p1-4",
        text: "Check whether you qualify for any Medicare Savings Programs or Extra Help",
        detail: "If your income is limited, you may qualify for programs that pay your premiums, deductibles, and copays - or reduce your drug costs significantly.",
        link: { label: "See savings programs", href: "/costs-at-a-glance#savings" },
      },
      {
        id: "p1-5",
        text: "Find out if your income triggers IRMAA surcharges on Part B or Part D",
        detail: "If your 2024 income exceeded $109,000 (single) or $218,000 (joint), you'll pay more than the standard Part B premium in 2026.",
        link: { label: "IRMAA brackets", href: "/costs-at-a-glance#irmaa" },
      },
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Confirm Your Eligibility",
    timing: "4–6 months before turning 65",
    icon: Shield,
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    items: [
      {
        id: "p2-1",
        text: "Confirm your Medicare eligibility date (usually the 1st of the month you turn 65)",
        detail: "If your birthday is on the 1st of the month, your eligibility starts the 1st of the prior month.",
        link: { label: "Check eligibility", href: "/am-i-eligible" },
      },
      {
        id: "p2-2",
        text: "Determine your Initial Enrollment Period (IEP) - the 7-month window around your 65th birthday",
        detail: "Your IEP starts 3 months before your birthday month, includes your birthday month, and ends 3 months after. Enrolling in the first 3 months means coverage starts on time.",
        link: { label: "Enrollment Timeline", href: "/enrollment-timeline" },
        warning: "Missing your IEP can result in permanent late enrollment penalties.",
      },
      {
        id: "p2-3",
        text: "If still working, check whether your employer coverage qualifies as 'creditable coverage'",
        detail: "If you have employer coverage from a company with 20+ employees, you can delay Medicare without penalty. Confirm this in writing from your HR department.",
        warning: "COBRA and retiree coverage do NOT qualify as creditable coverage for delaying Medicare.",
      },
      {
        id: "p2-4",
        text: "If you're already receiving Social Security, confirm whether you'll be auto-enrolled in Medicare",
        detail: "If you're already collecting Social Security benefits before age 65, you'll typically be automatically enrolled in Parts A and B. Watch for your red, white, and blue Medicare card in the mail.",
      },
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Choose Your Coverage",
    timing: "3–4 months before coverage start date",
    icon: Star,
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    items: [
      {
        id: "p3-1",
        text: "Decide between Original Medicare and Medicare Advantage",
        detail: "This is the fork in the road. Original Medicare + Medigap + Part D gives you maximum flexibility. Medicare Advantage gives you lower premiums and extra benefits with network restrictions.",
        link: { label: "Compare your options", href: "/original-vs-advantage" },
      },
      {
        id: "p3-2",
        text: "If choosing Original Medicare: compare Medigap supplement plans in your area",
        detail: "Medigap plans are standardized (Plan G and Plan N are most popular in 2026). Premiums vary by insurer and location. During your Medigap Open Enrollment Period, you cannot be denied or charged more based on health.",
        warning: "Your Medigap Open Enrollment Period is the 6 months starting when you're 65+ and enrolled in Part B. After this window, you may face medical underwriting.",
      },
      {
        id: "p3-3",
        text: "If choosing Original Medicare: enroll in a Part D drug plan",
        detail: "Even if you take no medications, enroll in the lowest-cost Part D plan available to avoid the late enrollment penalty (1% per month for every month without creditable coverage).",
        warning: "Skipping Part D now can result in a permanent monthly penalty added to your premium.",
      },
      {
        id: "p3-4",
        text: "If choosing Medicare Advantage: compare plans available in your ZIP code",
        detail: "Check that your doctors are in-network, your medications are on the formulary, and review the out-of-pocket maximum. Plans vary significantly even within the same county.",
      },
      {
        id: "p3-5",
        text: "Make a list of your current doctors and verify they accept your chosen plan",
        detail: "For Original Medicare: most doctors who accept Medicare are covered. For Advantage: check the plan's provider directory or call your doctor's office directly.",
      },
      {
        id: "p3-6",
        text: "Make a list of your current medications and check formulary coverage",
        detail: "For Part D and Advantage plans, verify each medication is on the formulary and at what tier (tier determines your copay). Ask about exceptions if a drug isn't covered.",
      },
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Enroll",
    timing: "During your Initial Enrollment Period",
    icon: CalendarDays,
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    items: [
      {
        id: "p4-1",
        text: "Enroll in Part A and Part B through Social Security",
        detail: "Apply online at SSA.gov, by phone at 1-800-772-1213, or in person at your local Social Security office. Apply up to 3 months before you want coverage to start.",
      },
      {
        id: "p4-2",
        text: "If choosing a Medigap plan: apply with the private insurer directly",
        detail: "Contact the insurer directly or work with a licensed agent. During your Medigap Open Enrollment Period, you cannot be denied based on health history.",
      },
      {
        id: "p4-3",
        text: "If choosing a Part D plan: enroll through Medicare.gov or the plan's website",
        detail: "You can also call the plan directly or work with a licensed agent. Have your Medicare number and Part B effective date ready.",
      },
      {
        id: "p4-4",
        text: "If choosing Medicare Advantage: enroll through Medicare.gov or the plan's website",
        detail: "Enrolling in a Medicare Advantage plan automatically enrolls you in Part A and Part B if you haven't already. Most Advantage plans also include Part D.",
      },
      {
        id: "p4-5",
        text: "Confirm your enrollment and note your coverage start date",
        detail: "You should receive a confirmation letter and your Medicare card within a few weeks. Keep your Medicare number secure - treat it like a Social Security number.",
      },
    ],
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Set Up & Organize",
    timing: "After enrollment - before coverage starts",
    icon: Stethoscope,
    color: "text-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    items: [
      {
        id: "p5-1",
        text: "Notify your doctors of your new Medicare coverage and provide your Medicare number",
        detail: "Call each doctor's office to confirm they accept your plan and update your insurance information on file.",
      },
      {
        id: "p5-2",
        text: "Transfer your prescriptions to a pharmacy in your Part D plan's preferred network",
        detail: "Using a preferred pharmacy can significantly reduce your drug copays. Check your plan's pharmacy directory.",
      },
      {
        id: "p5-3",
        text: "Create a Medicare.gov account to track your claims and coverage",
        detail: "Create an account at Medicare.gov to view your claims, check your coverage, and access your Medicare Summary Notice (MSN).",
      },
      {
        id: "p5-4",
        text: "Schedule your free Medicare 'Welcome to Medicare' preventive visit",
        detail: "Within the first 12 months of Part B enrollment, you're entitled to a one-time 'Welcome to Medicare' visit at no cost. After that, you get a free Annual Wellness Visit each year.",
      },
      {
        id: "p5-5",
        text: "Cancel any coverage you're replacing (employer plan, marketplace plan, etc.)",
        detail: "Coordinate the end date carefully to avoid a gap in coverage. Don't cancel existing coverage until your Medicare coverage is confirmed and active.",
        warning: "Do not cancel existing coverage until you have written confirmation that your Medicare coverage is active.",
      },
      {
        id: "p5-6",
        text: "Mark your calendar for the Annual Enrollment Period (Oct 15 – Dec 7) each year",
        detail: "Each fall, you can review and change your Medicare Advantage or Part D plan. Even if you're happy with your plan, it's worth reviewing - benefits and formularies change each year.",
      },
    ],
  },
  {
    id: "phase-6",
    phase: "Phase 6",
    title: "Ongoing: Stay Informed",
    timing: "Every year",
    icon: Pill,
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    items: [
      {
        id: "p6-1",
        text: "Review your Annual Notice of Change (ANOC) letter each September",
        detail: "Your plan must send you an ANOC by September 30 each year, detailing any changes to your coverage, costs, or formulary for the coming year.",
      },
      {
        id: "p6-2",
        text: "During AEP (Oct 15 – Dec 7): compare your current plan to alternatives",
        detail: "Use Medicare.gov's Plan Finder or call a licensed agent to compare. Even small changes in premiums or formularies can add up to hundreds of dollars per year.",
      },
      {
        id: "p6-3",
        text: "Check for new Medicare Savings Program eligibility each year",
        detail: "Income and asset thresholds change annually. Even if you didn't qualify before, you may qualify now - especially if your income has decreased.",
      },
      {
        id: "p6-4",
        text: "Review your Medicare Summary Notice (MSN) each quarter for billing errors",
        detail: "Your MSN lists all services billed to Medicare. Review it carefully for errors or services you didn't receive. Report discrepancies to 1-800-MEDICARE.",
      },
    ],
  },
];

// ─── Progress Ring ────────────────────────────────────────────────────────────

function ProgressRing({ percent, size = 80 }: { percent: number; size?: number }) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={8} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={percent === 100 ? "#16a34a" : "#1a3fa8"}
        strokeWidth={8}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
}

// ─── Checklist Row ────────────────────────────────────────────────────────────

function ChecklistRow({
  item,
  checked,
  onToggle,
  index,
}: {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl transition-all duration-150"
      style={
        checked
          ? { background: "rgba(16,185,129,0.07)" }
          : { background: "rgba(0,0,0,0)", border: "1px solid rgba(0,0,0,0.07)" }
      }
    >
      <div className="flex items-start gap-4 px-5 py-4">
        <button
          onClick={onToggle}
          className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3fa8] rounded-xl"
          aria-label={checked ? `Mark "${item.text}" incomplete` : `Mark "${item.text}" complete`}
          aria-pressed={checked}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={checked ? { background: "linear-gradient(135deg,#10b981,#059669)" } : { background: "#f3f4f6" }}
          >
            {checked ? (
              <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400 hover:text-[#1a3fa8] transition-colors" aria-hidden="true" />
            )}
          </div>
        </button>
        <div className="flex-1 min-w-0">
          <p
            className={`text-[0.95rem] font-bold leading-snug tracking-tight ${
              checked ? "line-through decoration-green-400 text-green-900" : "text-[#0d1f5c]"
            }`}
          >
            <span className="text-gray-400 mr-1.5">{index}.</span>
            {item.text}
          </p>
          {(item.detail || item.warning || item.link) && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-[#1a3fa8] mt-1 hover:underline"
              aria-expanded={expanded}
            >
              <ChevronRight
                className={`w-3 h-3 transition-transform duration-150 ${expanded ? "rotate-90" : ""}`}
                aria-hidden="true"
              />
              {expanded ? "Less detail" : "More detail"}
            </button>
          )}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-2">
                  {item.detail && (
                    <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                  )}
                  {item.warning && (
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-amber-800 leading-relaxed">{item.warning}</p>
                    </div>
                  )}
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-1 text-xs text-[#1a3fa8] font-semibold hover:underline"
                    >
                      {item.link.label} <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Phase Card ───────────────────────────────────────────────────────────────

function PhaseCard({
  phase,
  checked,
  onToggle,
  defaultOpen,
}: {
  phase: Phase;
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const total = phase.items.length;
  const done = phase.items.filter((i) => checked[i.id]).length;
  const allDone = done === total;
  const Icon = phase.icon;

  return (
    <div
      className={`bg-white rounded-2xl border-2 shadow-sm overflow-hidden transition-all duration-200 ${
        allDone ? "border-green-300" : phase.borderColor
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
        aria-expanded={open}
      >
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${allDone ? "bg-green-100" : phase.bgColor}`}>
          {allDone ? (
            <CheckCircle2 className="w-6 h-6 text-green-600" aria-hidden="true" />
          ) : (
            <Icon className={`w-6 h-6 ${phase.color}`} aria-hidden="true" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`text-xs font-bold uppercase tracking-widest ${allDone ? "text-green-600" : phase.color}`}>
              {phase.phase}
            </span>
            {allDone && (
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                Complete
              </span>
            )}
          </div>
          <h3 className="font-bold text-gray-900 text-lg leading-snug" style={{ fontFamily: "'Merriweather', serif" }}>
            {phase.title}
          </h3>
          <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {phase.timing}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-sm font-bold text-gray-700">{done}/{total}</p>
            <p className="text-xs text-gray-400">done</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </div>
      </button>

      {/* Progress bar */}
      <div className="px-6 pb-0">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={total}>
          <div
            className={`h-full rounded-full transition-all duration-500 ${allDone ? "bg-green-500" : "bg-[#1a3fa8]"}`}
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {phase.items.map((item, idx) => (
                <ChecklistRow
                  key={item.id}
                  item={item}
                  checked={!!checked[item.id]}
                  onToggle={() => onToggle(item.id)}
                  index={idx + 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  totalDone,
  totalItems,
  onReset,
  onPrint,
}: {
  totalDone: number;
  totalItems: number;
  onReset: () => void;
  onPrint: () => void;
}) {
  const percent = Math.round((totalDone / totalItems) * 100);

  return (
    <aside className="hidden xl:block w-72 flex-shrink-0" aria-label="Checklist progress">
      <div className="sticky top-28 space-y-6">
        {/* Progress card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Your Progress</p>
          <div className="flex items-center gap-5">
            <div className="relative">
              <ProgressRing percent={percent} size={80} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                  {percent}%
                </span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                {totalDone}
                <span className="text-gray-400 text-base font-normal">/{totalItems}</span>
              </p>
              <p className="text-sm text-gray-500">steps completed</p>
              {percent === 100 && (
                <p className="text-xs text-green-600 font-bold mt-1">All done!</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={onPrint}
              className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold py-2 rounded-lg transition-colors"
              aria-label="Print checklist"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              Print
            </button>
            <button
              onClick={onReset}
              className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold py-2 rounded-lg transition-colors"
              aria-label="Reset all checklist items"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset
            </button>
          </div>
        </div>

        {/* Phase nav */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-3">
            <p className="text-white font-bold text-sm" style={{ fontFamily: "'Merriweather', serif" }}>Phases</p>
          </div>
          <nav className="p-4 space-y-2" aria-label="Checklist phases">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <a
                  key={phase.id}
                  href={`#${phase.id}`}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${phase.bgColor}`}>
                    <Icon className={`w-3.5 h-3.5 ${phase.color}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-700 truncate">{phase.title}</p>
                    <p className="text-xs text-gray-400">{phase.timing}</p>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Agent CTA */}
        <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-[#f5a800] rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
            Need help with any step?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            A licensed MIP agent can walk you through every step on this checklist - at no cost to you.
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

        {/* Pro tip */}
        <Callout type="info">
          <p className="text-blue-800 text-sm leading-relaxed">
            <strong>Pro Tip:</strong> Your progress is saved automatically in your browser. You can return to this page anytime and pick up where you left off.
          </p>
        </Callout>
      </div>
    </aside>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FirstStepsChecklistClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const reset = () => {
    setChecked({});
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const handlePrint = () => window.print();

  const allItems = phases.flatMap((p) => p.items);
  const totalItems = allItems.length;
  const totalDone = allItems.filter((i) => checked[i.id]).length;
  const percent = Math.round((totalDone / totalItems) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Senior reviewing Medicare enrollment checklist"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">First Steps Checklist</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Action Plan
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl" style={{ fontFamily: "'Merriweather', serif" }}>
            Your Medicare First Steps Checklist
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            A step-by-step action plan for new Medicare enrollees - from understanding your options to enrolling and staying organized. Check off each step as you go.
          </p>
        </div>
      </section>

      {/* ── Progress Bar ── */}
      <div className="bg-[#0d1f5c] text-white py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#f5a800] font-bold text-xl" style={{ fontFamily: "'Merriweather', serif" }}>
                {totalDone}/{totalItems}
              </span>
              <span className="text-white/60 text-sm">steps completed</span>
            </div>
            <div
              className="w-48 h-2 bg-white/20 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${percent}% of checklist complete`}
            >
              <div
                className="h-full bg-[#f5a800] rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-white/60 text-sm">{percent}%</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 border border-white/30 text-white/80 hover:bg-white/10 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              aria-label="Print checklist"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              Print Checklist
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 border border-white/30 text-white/80 hover:bg-white/10 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              aria-label="Reset all checklist items"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="bg-gray-50 border-b border-gray-100 py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-3 items-start bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4 max-w-3xl">
            <Info className="w-5 h-5 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-blue-800 text-sm leading-relaxed">
              <strong>Your progress is saved automatically.</strong> Check off each step as you complete it - your progress is stored in your browser and will be here when you return. Click "More detail" on any item for additional guidance, warnings, and links to related pages.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-10 items-start">
            <article className="flex-1 min-w-0 space-y-6">
              {phases.map((phase, i) => (
                <div key={phase.id} id={phase.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <PhaseCard
                      phase={phase}
                      checked={checked}
                      onToggle={toggle}
                      defaultOpen={i === 0}
                    />
                  </motion.div>
                </div>
              ))}

              {/* Completion message */}
              <AnimatePresence>
                {percent === 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                      Checklist Complete!
                    </h3>
                    <p className="text-green-700 leading-relaxed max-w-md mx-auto mb-6">
                      You've completed all {totalItems} steps. You're well on your way to making the most of your Medicare coverage. Remember to review your plan each fall during the Annual Enrollment Period.
                    </p>
                    <a
                      href="tel:8136995559"
                      aria-label="Call MIP at (813) 699-5559 for a final review"
                      className="inline-flex items-center gap-2 bg-[#1a3fa8] hover:bg-[#163490] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Talk to an Agent for Final Review
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>

            <Sidebar
              totalDone={totalDone}
              totalItems={totalItems}
              onReset={reset}
              onPrint={handlePrint}
            />
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#1a3fa8] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-2">Free Enrollment Help</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                Don't navigate this alone.
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                A licensed MIP agent can walk you through every step on this checklist, compare your options, and help you enroll - completely free of charge.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                aria-label="Call MIP at (813) 699-5559 for free enrollment help"
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
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/enrollment-timeline", label: "Enrollment Timeline", desc: "Key dates, enrollment windows, and how to avoid permanent late penalties.", tag: "Getting Started" },
              { href: "/original-vs-advantage", label: "Original vs. Advantage", desc: "Compare the two main ways to get Medicare and decide which is right for you.", tag: "Plan Comparison" },
              { href: "/costs-at-a-glance", label: "Costs at a Glance", desc: "All 2026 premiums, deductibles, IRMAA brackets, and out-of-pocket limits.", tag: "Cost Reference" },
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
