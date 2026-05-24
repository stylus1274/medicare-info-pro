"use client";

/**
 * Am I Eligible for Medicare? — MIP Next.js Client Component
 * Design: Warm Guide — Merriweather headlines, Inter body
 * Primary: #1a3fa8 (royal blue), Accent: #f5a800 (gold)
 * Layout: Full-bleed hero → interactive eligibility checker → criteria cards → special scenarios → FAQ → CTA
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Phone,
  ArrowRight,
  Clock,
  Users,
  Heart,
  Briefcase,
  Globe,
  Shield,
  HelpCircle,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/eligible-hero-9oVMsdHrhZ3KWXrFjRcN3L.webp";

// ─── Eligibility Checker ────────────────────────────────────────────────────

type CheckerStep = {
  id: string;
  question: string;
  yes: string | null;
  no: string | null;
  hint?: string;
};

const checkerSteps: CheckerStep[] = [
  {
    id: "age",
    question: "Are you 65 years of age or older?",
    yes: "ELIGIBLE_AGE",
    no: "under65",
    hint: "Medicare eligibility begins the first day of the month you turn 65.",
  },
  {
    id: "under65",
    question:
      "Have you received Social Security Disability Insurance (SSDI) for at least 24 months?",
    yes: "ELIGIBLE_DISABILITY",
    no: "esrd",
    hint:
      "Most people under 65 qualify after 24 months of SSDI payments. The waiting period is waived for ALS.",
  },
  {
    id: "esrd",
    question:
      "Do you have End-Stage Renal Disease (ESRD) or ALS (Lou Gehrig's Disease)?",
    yes: "ELIGIBLE_ESRD",
    no: "INELIGIBLE",
    hint:
      "ESRD and ALS are the two conditions that allow Medicare enrollment before age 65 without the SSDI waiting period.",
  },
];

type CheckerResult = {
  type: "eligible" | "ineligible" | "maybe";
  title: string;
  message: string;
  nextStep: string;
};

const checkerResults: Record<string, CheckerResult> = {
  ELIGIBLE_AGE: {
    type: "eligible",
    title: "You are likely eligible for Medicare.",
    message:
      "Because you are 65 or older, you qualify for Medicare. Your enrollment window depends on whether you have employer coverage. A licensed MIP agent can confirm your exact enrollment dates and help you choose the right plan at no cost.",
    nextStep: "Talk to a Licensed Agent",
  },
  ELIGIBLE_DISABILITY: {
    type: "eligible",
    title: "You are likely eligible for Medicare due to disability.",
    message:
      "After 24 months of SSDI payments, you are automatically enrolled in Medicare Parts A and B. If you have ALS, enrollment begins immediately. Contact MIP to review your plan options.",
    nextStep: "Review Your Plan Options",
  },
  ELIGIBLE_ESRD: {
    type: "eligible",
    title: "You may be eligible for Medicare due to ESRD or ALS.",
    message:
      "People with End-Stage Renal Disease or ALS can qualify for Medicare before age 65. Enrollment rules vary — an MIP agent can walk you through the specific requirements and timing.",
    nextStep: "Speak with an Agent",
  },
  INELIGIBLE: {
    type: "ineligible",
    title: "You may not yet qualify for Medicare.",
    message:
      "Based on your answers, you may not currently meet the standard eligibility criteria. However, there may be other options available — including Medicaid, marketplace plans, or employer coverage. An MIP agent can help you find the best coverage for your situation.",
    nextStep: "Explore Other Options",
  },
};

function EligibilityChecker() {
  const [currentStep, setCurrentStep] = useState<string>("age");
  const [result, setResult] = useState<CheckerResult | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const step = checkerSteps.find((s) => s.id === currentStep);

  const handleAnswer = (answer: "yes" | "no") => {
    if (!step) return;
    const next = answer === "yes" ? step.yes : step.no;
    if (!next) return;

    setHistory((h) => [...h, currentStep]);

    if (next in checkerResults) {
      setResult(checkerResults[next]);
    } else {
      setCurrentStep(next);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrentStep(prev);
    setResult(null);
  };

  const handleReset = () => {
    setCurrentStep("age");
    setResult(null);
    setHistory([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header bar */}
      <div className="bg-[#1a3fa8] px-8 py-5">
        <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">
          Quick Eligibility Check
        </p>
        <h3
          className="text-white text-2xl font-bold"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Am I Eligible for Medicare?
        </h3>
      </div>

      <div className="px-8 py-8">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Progress dots */}
              <div className="flex gap-2 mb-6">
                {checkerSteps.map((s) => (
                  <div
                    key={s.id}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      s.id === currentStep
                        ? "w-8 bg-[#1a3fa8]"
                        : history.includes(s.id)
                        ? "w-4 bg-[#f5a800]"
                        : "w-4 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <p
                className="text-xl font-semibold text-gray-800 mb-3 leading-snug"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {step?.question}
              </p>

              {step?.hint && (
                <div className="flex gap-2 items-start bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-6">
                  <HelpCircle className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">{step.hint}</p>
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handleAnswer("yes")}
                  className="flex-1 bg-[#1a3fa8] hover:bg-[#163490] text-white font-semibold py-3.5 rounded-xl transition-colors text-lg"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl transition-colors text-lg"
                >
                  No
                </button>
              </div>

              {history.length > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  ← Back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`flex items-start gap-4 p-5 rounded-xl mb-5 ${
                  result.type === "eligible"
                    ? "bg-green-50 border border-green-200"
                    : result.type === "ineligible"
                    ? "bg-red-50 border border-red-200"
                    : "bg-yellow-50 border border-yellow-200"
                }`}
              >
                {result.type === "eligible" ? (
                  <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
                ) : result.type === "ineligible" ? (
                  <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-7 h-7 text-yellow-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p
                    className="font-bold text-gray-900 text-lg mb-1"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {result.title}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {result.message}
                  </p>
                </div>
              </div>

              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 w-full bg-[#f5a800] hover:bg-[#e09800] text-[#1a1a1a] font-bold py-4 rounded-xl transition-colors text-lg mb-3"
              >
                <Phone className="w-5 h-5" />
                Call (813) 699-5559 — Free Consultation
              </a>

              <button
                onClick={handleReset}
                className="w-full text-sm text-gray-500 hover:text-gray-700 underline py-2"
              >
                Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 px-8 py-4">
        <p className="text-xs text-gray-500 text-center">
          This tool provides general guidance only. For a definitive eligibility
          determination, speak with a licensed Medicare agent.
        </p>
      </div>
    </div>
  );
}

// ─── Eligibility Criteria Cards ─────────────────────────────────────────────

const criteriaCards = [
  {
    icon: Clock,
    color: "bg-blue-50 text-blue-700",
    title: "Age 65 or Older",
    description:
      "The most common path to Medicare. You become eligible the first day of the month you turn 65, regardless of whether you are retired or still working.",
    details: [
      "U.S. citizen or permanent legal resident for 5+ years",
      "Automatic enrollment if receiving Social Security",
      "Must actively enroll if not yet on Social Security",
    ],
  },
  {
    icon: Shield,
    color: "bg-purple-50 text-purple-700",
    title: "Disability (Under 65)",
    description:
      "If you have received Social Security Disability Insurance (SSDI) for 24 consecutive months, you are automatically enrolled in Medicare Parts A and B.",
    details: [
      "24-month SSDI waiting period applies",
      "ALS (Lou Gehrig's Disease) — no waiting period",
      "Enrollment begins on the 25th month of SSDI",
    ],
  },
  {
    icon: Heart,
    color: "bg-red-50 text-red-700",
    title: "End-Stage Renal Disease",
    description:
      "People of any age with permanent kidney failure requiring dialysis or a kidney transplant may qualify for Medicare, regardless of age or work history.",
    details: [
      "Dialysis patients: Medicare starts after 3-month waiting period",
      "Kidney transplant recipients: immediate eligibility",
      "Must apply — not automatic enrollment",
    ],
  },
  {
    icon: Briefcase,
    color: "bg-green-50 text-green-700",
    title: "Work History Requirements",
    description:
      "To receive premium-free Part A, you or your spouse must have worked and paid Medicare taxes for at least 10 years (40 quarters).",
    details: [
      "40 quarters = premium-free Part A",
      "30–39 quarters = reduced Part A premium (~$284/mo in 2025)",
      "Under 30 quarters = full Part A premium (~$518/mo in 2025)",
    ],
  },
  {
    icon: Users,
    color: "bg-orange-50 text-orange-700",
    title: "Spouse's Work Record",
    description:
      "Even if you have not worked enough quarters yourself, you may qualify for premium-free Part A based on your spouse's work history.",
    details: [
      "Spouse must have 40+ quarters of Medicare taxes",
      "Applies to current, divorced, or widowed spouses",
      "Divorced spouses must have been married 10+ years",
    ],
  },
  {
    icon: Globe,
    color: "bg-teal-50 text-teal-700",
    title: "Citizenship & Residency",
    description:
      "You must be a U.S. citizen or a lawfully admitted permanent resident who has lived in the United States for at least 5 continuous years.",
    details: [
      "U.S. citizens qualify automatically at 65",
      "Green card holders: 5-year residency requirement",
      "Medicare does not cover care outside the U.S.",
    ],
  },
];

// ─── Special Enrollment Scenarios ───────────────────────────────────────────

const scenarios = [
  {
    title: "Still Working at 65",
    description:
      "If you or your spouse has employer coverage from a company with 20+ employees, you can delay Part B without penalty. You'll have an 8-month Special Enrollment Period after employment ends.",
    tag: "Common",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Retiring Before 65",
    description:
      "If you retire before 65, you'll need to find coverage to bridge the gap — COBRA, a marketplace plan, or a spouse's employer plan. Medicare won't start until you turn 65.",
    tag: "Important",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "COBRA Coverage",
    description:
      "COBRA is not considered creditable employer coverage for Medicare purposes. If you have COBRA and delay Medicare enrollment, you may face late enrollment penalties.",
    tag: "Warning",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    title: "Veterans Benefits",
    description:
      "VA benefits do not count as creditable coverage for Medicare. You can have both VA and Medicare — they work independently. Having Medicare can give you access to non-VA providers.",
    tag: "Veterans",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    title: "Living Abroad",
    description:
      "If you live outside the U.S., you can still enroll in Medicare at 65 to avoid late penalties. However, Medicare generally does not cover care received outside the U.S.",
    tag: "International",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Railroad Retirement",
    description:
      "If you receive Railroad Retirement benefits, you are automatically enrolled in Medicare at 65 through the Railroad Retirement Board, not Social Security.",
    tag: "Special Case",
    tagColor: "bg-gray-100 text-gray-700",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "When exactly does my Medicare coverage begin?",
    a: "For most people turning 65, Medicare begins on the first day of your birthday month. If your birthday is on the 1st of the month, coverage starts the first day of the prior month. If you enroll after your Initial Enrollment Period, coverage may be delayed.",
  },
  {
    q: "Do I have to sign up for Medicare when I turn 65?",
    a: "Not necessarily. If you have creditable employer coverage from a current employer (yours or your spouse's) with 20+ employees, you can delay enrollment without penalty. However, if you are not working or have retiree/COBRA coverage, you should enroll during your Initial Enrollment Period to avoid late penalties.",
  },
  {
    q: "What is the Initial Enrollment Period (IEP)?",
    a: "Your IEP is a 7-month window — 3 months before your 65th birthday month, your birthday month itself, and 3 months after. Enrolling in the first 3 months ensures your coverage starts on time. Enrolling in months 4–7 may delay your start date.",
  },
  {
    q: "Can I get Medicare if I never worked?",
    a: "You may still qualify for Medicare based on your spouse's work record (current, divorced, or widowed) if they have 40+ quarters of Medicare taxes. If neither you nor your spouse has enough work history, you can still buy into Medicare by paying the full premium.",
  },
  {
    q: "What happens if I miss my enrollment window?",
    a: "If you miss your Initial Enrollment Period without a qualifying reason, you may face a late enrollment penalty. For Part B, the penalty is 10% for each 12-month period you were eligible but didn't enroll — and it's permanent. Contact an MIP agent immediately if you think you may have missed your window.",
  },
  {
    q: "I'm on my spouse's employer plan. Do I need Medicare?",
    a: "If your spouse's employer has 20+ employees, their plan is primary and you can delay Medicare without penalty. Once that employer coverage ends, you have an 8-month Special Enrollment Period to sign up for Medicare without penalty.",
  },
];

// ─── Animation variant ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default function AmIEligibleClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Senior couple reviewing Medicare eligibility documents together"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 container pb-12 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span>/</span>
            <span className="text-white" aria-current="page">Am I Eligible?</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Getting Started
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Am I Eligible for Medicare?
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            Find out if you qualify — and when your coverage can begin. We'll
            walk you through every eligibility path, clearly and without jargon.
          </p>
        </div>
      </section>

      {/* ── Checker + Intro ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                Quick Answer
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Most people qualify at 65. Some qualify earlier.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Medicare is the federal health insurance program primarily for
                Americans 65 and older. You may also qualify under 65 if you
                have a qualifying disability, End-Stage Renal Disease, or ALS.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Use the eligibility checker on the right to get a quick answer,
                then read on for the full details — including special situations
                like still working at 65, COBRA coverage, and spouse
                eligibility.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "65", label: "Standard eligibility age" },
                  { value: "24 mo", label: "SSDI waiting period" },
                  { value: "7-mo", label: "Initial enrollment window" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm"
                  >
                    <p
                      className="text-2xl font-bold text-[#1a3fa8]"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: checker */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <EligibilityChecker />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Criteria Cards ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
              Eligibility Criteria
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              The 6 Paths to Medicare Eligibility
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              There is more than one way to qualify. Here are all the criteria
              explained clearly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteriaCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}
                >
                  <card.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <ul className="space-y-1.5">
                  {card.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Scenarios ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
              Special Situations
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Common Scenarios That Affect Eligibility
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Your situation may be more nuanced than a simple yes or no. Here
              are the most common scenarios we see.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${s.tagColor}`}
                >
                  {s.tag}
                </span>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
                FAQ
              </p>
              <h2
                className="text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Still have questions? Our licensed agents are available to
                answer any Medicare eligibility question — free of charge, no
                obligation.
              </p>
              <a
                href="tel:8136995559"
                className="flex items-center gap-3 bg-[#1a3fa8] hover:bg-[#163490] text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                aria-label="Call MIP at (813) 699-5559 for a free Medicare consultation"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <div>
                  <p className="text-xs text-white/70 uppercase tracking-wide">
                    Call Us Free
                  </p>
                  <p className="text-lg font-bold">(813) 699-5559</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <FaqAccordion items={faqs} defaultOpen={null} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#1a3fa8] py-16">
        <div className="container text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">
              Free, No-Obligation Help
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Not sure if you qualify? Let's find out together.
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Our licensed agents in Brandon, FL have helped thousands of
              Florida seniors navigate Medicare eligibility. There is no cost
              and no pressure — just clear answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09800] text-[#1a1a1a] font-bold px-8 py-4 rounded-xl transition-colors text-lg"
                aria-label="Call MIP at (813) 699-5559"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (813) 699-5559
              </a>
              <Link
                href="/medicare-101"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-white/20"
              >
                Read Medicare 101
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Medicare Information Project · 1017 Lithia Pinecrest Rd, Brandon,
              FL 33511
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
