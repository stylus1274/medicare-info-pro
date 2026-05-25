"use client";

/* ==========================================================================
   MedicareQuizClient — Next.js App Router
   "Which Medicare path is right for me?" — 6-question scored quiz
   Design: navy/gold MIP brand, centered card, animated step transitions
   ========================================================================== */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  CheckCircle2,
  RotateCcw,
  ChevronRight,
  Star,
  Shield,
  Pill,
  DollarSign,
  Users,
  Heart,
  Briefcase,
  Globe,
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Option {
  id: string;
  label: string;
  sublabel?: string;
  icon?: React.ComponentType<{ className?: string }>;
  points: Record<string, number>;
}

interface Question {
  id: string;
  question: string;
  subtext?: string;
  options: Option[];
}

interface Result {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  badgeColor: string;
  keyPoints: string[];
  nextSteps: { label: string; href: string }[];
}

// ─── Quiz Data ────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: "age",
    question: "Which best describes your current situation?",
    subtext: "This helps us understand where you are in the Medicare journey.",
    options: [
      {
        id: "turning65",
        label: "I am turning 65 soon",
        sublabel: "Within the next 6 months",
        icon: Star,
        points: { original: 1, advantage: 1, medigap: 1, partd: 1 },
      },
      {
        id: "working",
        label: "I am 65+ and still working",
        sublabel: "With employer or union coverage",
        icon: Briefcase,
        points: { original: 2, partd: 1 },
      },
      {
        id: "enrolled",
        label: "I am already enrolled in Medicare",
        sublabel: "Looking to review or change my coverage",
        icon: CheckCircle2,
        points: { medigap: 2, advantage: 1, partd: 1 },
      },
      {
        id: "disability",
        label: "I am under 65 with a disability",
        sublabel: "Enrolled or qualifying for Medicare early",
        icon: Heart,
        points: { original: 2, medigap: 1 },
      },
    ],
  },
  {
    id: "doctors",
    question: "How important is keeping your current doctors?",
    subtext:
      "Medicare Advantage plans use networks. Original Medicare lets you see any doctor who accepts Medicare.",
    options: [
      {
        id: "critical",
        label: "Very important",
        sublabel: "I have specialists I cannot switch from",
        icon: Heart,
        points: { original: 3, medigap: 2 },
      },
      {
        id: "somewhat",
        label: "Somewhat important",
        sublabel: "I would prefer to keep them but could switch",
        icon: Users,
        points: { original: 1, advantage: 1 },
      },
      {
        id: "flexible",
        label: "Flexible",
        sublabel: "I am open to a new network of doctors",
        icon: CheckCircle2,
        points: { advantage: 3 },
      },
      {
        id: "new",
        label: "I do not have established doctors",
        sublabel: "I am starting fresh",
        icon: Star,
        points: { advantage: 2, original: 1 },
      },
    ],
  },
  {
    id: "travel",
    question: "Do you travel frequently or spend time in multiple states?",
    subtext:
      "Original Medicare works nationwide. Most Advantage plans are local networks.",
    options: [
      {
        id: "frequent",
        label: "Yes, frequently",
        sublabel: "Multiple states or internationally",
        icon: Globe,
        points: { original: 3, medigap: 2 },
      },
      {
        id: "occasional",
        label: "Occasionally",
        sublabel: "A few trips per year",
        icon: Globe,
        points: { original: 1, advantage: 1 },
      },
      {
        id: "rarely",
        label: "Rarely or never",
        sublabel: "I mostly stay in one area",
        icon: CheckCircle2,
        points: { advantage: 2, original: 1 },
      },
    ],
  },
  {
    id: "budget",
    question: "What is your priority when it comes to costs?",
    subtext:
      "There is a tradeoff between predictable monthly premiums and lower out-of-pocket costs when you need care.",
    options: [
      {
        id: "low_premium",
        label: "Lowest possible monthly premium",
        sublabel: "I will pay more when I use care",
        icon: DollarSign,
        points: { advantage: 3 },
      },
      {
        id: "predictable",
        label: "Predictable, capped costs",
        sublabel: "I want to know my maximum exposure",
        icon: Shield,
        points: { medigap: 3, advantage: 1 },
      },
      {
        id: "balance",
        label: "Balance of premium and coverage",
        sublabel: "Reasonable premium with decent coverage",
        icon: Star,
        points: { advantage: 2, medigap: 1, original: 1 },
      },
      {
        id: "extra_benefits",
        label: "Extra benefits matter most",
        sublabel: "Dental, vision, hearing, fitness",
        icon: Heart,
        points: { advantage: 4 },
      },
    ],
  },
  {
    id: "health",
    question: "How would you describe your current health?",
    subtext: "This helps us understand how often you are likely to use your coverage.",
    options: [
      {
        id: "excellent",
        label: "Excellent -- rarely see a doctor",
        sublabel: "Mostly preventive care",
        icon: Star,
        points: { advantage: 2, original: 1 },
      },
      {
        id: "good",
        label: "Good -- occasional visits",
        sublabel: "A few specialist visits per year",
        icon: CheckCircle2,
        points: { advantage: 1, original: 1, medigap: 1 },
      },
      {
        id: "managing",
        label: "Managing chronic conditions",
        sublabel: "Regular specialist care and medications",
        icon: Heart,
        points: { medigap: 3, original: 2 },
      },
      {
        id: "complex",
        label: "Complex health needs",
        sublabel: "Multiple conditions, frequent hospitalizations",
        icon: AlertTriangle,
        points: { medigap: 4, original: 2 },
      },
    ],
  },
  {
    id: "drugs",
    question: "Do you take regular prescription medications?",
    subtext:
      "Part D drug coverage is critical. Even if you take no drugs now, skipping it causes a permanent penalty.",
    options: [
      {
        id: "many",
        label: "Yes -- several medications",
        sublabel: "Including specialty or brand-name drugs",
        icon: Pill,
        points: { partd: 4, medigap: 1 },
      },
      {
        id: "few",
        label: "Yes -- a few generics",
        sublabel: "Low-cost medications",
        icon: Pill,
        points: { partd: 2 },
      },
      {
        id: "none",
        label: "No medications currently",
        sublabel: "But I want to avoid the late penalty",
        icon: CheckCircle2,
        points: { partd: 2 },
      },
    ],
  },
];

const RESULTS: Record<string, Result> = {
  original: {
    id: "original",
    title: "Original Medicare + Medigap",
    subtitle: "Maximum flexibility and predictable costs",
    description:
      "Based on your answers, Original Medicare paired with a Medigap supplement plan appears to be the strongest fit. You value keeping your doctors, travel or spend time in multiple states, and want predictable out-of-pocket costs. A Medigap Plan G or Plan N will cover most of what Original Medicare does not, leaving you with very low surprise bills.",
    icon: Shield,
    color: "text-[#1a3fa8]",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-[#1a3fa8]",
    keyPoints: [
      "See any doctor or hospital that accepts Medicare -- no network restrictions",
      "Works in all 50 states and U.S. territories",
      "Medigap covers most or all of your Part B coinsurance and deductibles",
      "You will need a separate Part D plan for prescription drugs",
      "Higher monthly premium than Advantage, but very low out-of-pocket costs",
    ],
    nextSteps: [
      { label: "Original vs. Advantage Comparison", href: "/original-vs-advantage" },
      { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
      { label: "Understanding Part D", href: "/understanding-part-d" },
    ],
  },
  advantage: {
    id: "advantage",
    title: "Medicare Advantage (Part C)",
    subtitle: "All-in-one coverage with extra benefits",
    description:
      "Based on your answers, a Medicare Advantage plan looks like a strong fit. You are flexible about your doctor network, prioritize low monthly premiums or extra benefits like dental and vision, and mostly stay in one area. Most Advantage plans bundle drug coverage (Part D) and often include extras Original Medicare does not cover.",
    icon: Star,
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-600",
    keyPoints: [
      "Often $0 or very low monthly premium",
      "Bundles hospital, medical, and usually drug coverage in one plan",
      "May include dental, vision, hearing, and fitness benefits",
      "Uses a network of doctors and hospitals -- check your doctors are in-network",
      "Annual out-of-pocket cap protects against catastrophic costs",
    ],
    nextSteps: [
      { label: "Original vs. Advantage Comparison", href: "/original-vs-advantage" },
      { label: "Costs at a Glance", href: "/costs-at-a-glance" },
      { label: "Enrollment Timeline", href: "/enrollment-timeline" },
    ],
  },
  medigap: {
    id: "medigap",
    title: "Original Medicare + Medigap Plan G",
    subtitle: "Best-in-class coverage for complex health needs",
    description:
      "Based on your answers -- particularly your health needs and desire for predictable costs -- Original Medicare with a comprehensive Medigap plan (Plan G is the most popular) appears to be the best fit. Plan G covers nearly everything Original Medicare does not, leaving you with only the Part B deductible ($257 in 2026) as your annual out-of-pocket exposure.",
    icon: Heart,
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    badgeColor: "bg-rose-600",
    keyPoints: [
      "Plan G covers Part A deductible, coinsurance, and skilled nursing facility costs",
      "Covers Part B coinsurance -- you pay only the $257 annual Part B deductible in 2026",
      "No network restrictions -- see any Medicare-accepting provider nationwide",
      "Ideal for people with complex or chronic health conditions",
      "Add a standalone Part D plan for prescription drug coverage",
    ],
    nextSteps: [
      { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
      { label: "Understanding Part D", href: "/understanding-part-d" },
      { label: "Costs at a Glance", href: "/costs-at-a-glance" },
    ],
  },
  partd: {
    id: "partd",
    title: "Do Not Forget Part D Drug Coverage",
    subtitle: "Enroll even if you take no medications",
    description:
      "Your answers suggest your primary concern is prescription drug coverage. Whether you choose Original Medicare or Medicare Advantage, make sure you have creditable Part D drug coverage. If you choose Original Medicare, add a standalone Part D plan. If you choose Advantage, most plans include drug coverage. Skipping Part D -- even if you take no drugs -- results in a permanent monthly penalty.",
    icon: Pill,
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    badgeColor: "bg-green-600",
    keyPoints: [
      "2026: $2,000 annual out-of-pocket cap on covered Part D drugs",
      "Compare plans by total annual cost, not just the monthly premium",
      "Use Medicare.gov's Plan Finder to compare every plan in your ZIP code",
      "Enroll during your Initial Enrollment Period to avoid the late penalty",
      "You can switch plans every year during the Annual Enrollment Period (Oct 15 - Dec 7)",
    ],
    nextSteps: [
      { label: "Understanding Part D", href: "/understanding-part-d" },
      { label: "Costs at a Glance", href: "/costs-at-a-glance" },
      { label: "Enrollment Timeline", href: "/enrollment-timeline" },
    ],
  },
};

// ─── Scoring ──────────────────────────────────────────────────────────────────

function getResult(answers: Record<string, string>): string {
  const scores: Record<string, number> = {
    original: 0,
    advantage: 0,
    medigap: 0,
    partd: 0,
  };

  QUESTIONS.forEach((q) => {
    const answerId = answers[q.id];
    if (!answerId) return;
    const option = q.options.find((o) => o.id === answerId);
    if (!option) return;
    Object.entries(option.points).forEach(([key, pts]) => {
      scores[key] = (scores[key] || 0) + pts;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];

  if (scores.medigap >= scores.original && scores.medigap > scores.advantage)
    return "medigap";
  if (top === "original" && scores.medigap >= scores.original - 1) return "medigap";
  return top;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Question {current} of {total}
        </span>
        <span className="text-xs font-bold text-[#1a3fa8]">{pct}% complete</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#1a3fa8] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  selectedId,
  onSelect,
}: {
  question: Question;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
        {question.question}
      </h2>
      {question.subtext && (
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">{question.subtext}</p>
      )}
      <div className="grid gap-3">
        {question.options.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedId === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[#1a3fa8] bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-[#1a3fa8]/40 hover:bg-gray-50"
              }`}
              aria-pressed={isSelected}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isSelected ? "bg-[#1a3fa8]" : "bg-gray-100"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isSelected ? "text-white" : "text-gray-400"
                    }`}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-bold transition-colors ${
                    isSelected ? "text-[#1a3fa8]" : "text-gray-900"
                  }`}
                >
                  {option.label}
                </p>
                {option.sublabel && (
                  <p className="text-gray-500 text-sm mt-0.5">{option.sublabel}</p>
                )}
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                  isSelected ? "border-[#1a3fa8] bg-[#1a3fa8]" : "border-gray-300"
                }`}
              >
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function ResultCard({
  resultId,
  onRetake,
}: {
  resultId: string;
  onRetake: () => void;
}) {
  const result = RESULTS[resultId] || RESULTS.original;
  const Icon = result.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
    >
      {/* Result header */}
      <div
        className={`rounded-2xl border-2 ${result.borderColor} ${result.bgColor} p-8 mb-6`}
      >
        <div className="flex items-start gap-5">
          <div
            className={`w-14 h-14 ${result.badgeColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
              Your Best Fit
            </p>
            <h2
              className={`font-serif text-2xl md:text-3xl font-bold mb-1 leading-tight ${result.color}`}
            >
              {result.title}
            </h2>
            <p className="text-gray-600 font-semibold">{result.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-5 text-sm">{result.description}</p>
      </div>

      {/* Key points */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h3 className="font-serif font-bold text-gray-900 mb-4">Key things to know</h3>
        <ul className="space-y-3">
          {result.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Next steps */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h3 className="font-serif font-bold text-gray-900 mb-4">Recommended next steps</h3>
        <div className="space-y-2">
          {result.nextSteps.map((step) => (
            <Link
              key={step.href}
              href={step.href}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group"
            >
              <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors">
                {step.label}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a3fa8] transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Agent CTA */}
      <div className="bg-[#1a3fa8] rounded-2xl p-7 text-white mb-6">
        <p className="text-[#f5a800] font-bold uppercase tracking-widest text-xs mb-2">
          Free Personalized Guidance
        </p>
        <h3 className="font-serif text-xl font-bold mb-2 leading-snug">
          Talk to a licensed Medicare agent. No cost, no pressure.
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-5">
          Our agents are independent -- we represent all major carriers and will help you compare every option available in your area, not just one company's plans.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:8136995559"
            className="flex items-center justify-center gap-2 bg-[#f5a800] text-[#1a3fa8] font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call 813-699-5559
          </a>
          <a
            href="tel:8888865840"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
            Toll-Free: 888-886-5840
          </a>
        </div>
      </div>

      {/* Retake */}
      <button
        onClick={onRetake}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm transition-colors mx-auto"
      >
        <RotateCcw className="w-4 h-4" />
        Retake the quiz
      </button>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MedicareQuizClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [resultId, setResultId] = useState<string | null>(null);

  const question = QUESTIONS[currentStep];
  const selectedId = answers[question?.id] ?? null;
  const isLast = currentStep === QUESTIONS.length - 1;

  function handleSelect(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function handleNext() {
    if (!selectedId) return;
    if (isLast) {
      const result = getResult({ ...answers, [question.id]: selectedId });
      setResultId(result);
      setShowResult(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }

  function handleRetake() {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
    setResultId(null);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-[#0d1f5c] py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#f5a800] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Free · 2 Minutes · No Sign-Up
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Which Medicare Path Is Right for You?
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Answer {QUESTIONS.length} quick questions and get a personalized recommendation -- Original Medicare, Medicare Advantage, or Medigap -- based on your situation.
          </p>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            {/* Progress strip */}
            {!showResult && (
              <div className="px-8 pt-8 pb-0">
                <ProgressBar current={currentStep + 1} total={QUESTIONS.length} />
              </div>
            )}

            <div className="p-8">
              <AnimatePresence mode="wait">
                {showResult && resultId ? (
                  <ResultCard key="result" resultId={resultId} onRetake={handleRetake} />
                ) : (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    selectedId={selectedId}
                    onSelect={handleSelect}
                  />
                )}
              </AnimatePresence>

              {/* Navigation */}
              {!showResult && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-semibold text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedId}
                    className="flex items-center gap-2 bg-[#1a3fa8] hover:bg-[#0d2870] disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-bold px-7 py-3 rounded-xl transition-colors"
                  >
                    {isLast ? "See My Results" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed max-w-lg mx-auto">
            This quiz provides general guidance only and is not a substitute for personalized advice from a licensed Medicare agent. Results are based on your answers and may not reflect all available options in your area.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
