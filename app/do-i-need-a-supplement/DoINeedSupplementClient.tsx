"use client";

/**
 * Do I Need a Supplement? - MIP Next.js Client Component
 * Design: MIP brand - navy/gold, Merriweather headings, card-based layout
 * Sections: Hero → Stats → What Is Medigap → Plan Comparison Table → Popular Plans → Decision Quiz → OEP Warning → FAQ → CTA → Related
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Callout from "@/components/Callout";
import {
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  Info,
  Shield,
  DollarSign,
  Globe,
  ChevronRight,
  Check,
  X,
  Minus,
  AlertTriangle,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/medigap-supplement-hero-JgrPY7ed2EbbhJXpTKArCd.webp";

// ─── Plan Comparison Data ─────────────────────────────────────────────────────

type CoverageLevel = "full" | "partial" | "none";

type PlanRow = {
  benefit: string;
  tooltip?: string;
  A: CoverageLevel;
  B: CoverageLevel;
  D: CoverageLevel;
  G: CoverageLevel;
  K: CoverageLevel;
  L: CoverageLevel;
  M: CoverageLevel;
  N: CoverageLevel;
};

const planRows: PlanRow[] = [
  { benefit: "Part A coinsurance & hospital costs (up to 365 days after Medicare benefits)", A: "full", B: "full", D: "full", G: "full", K: "full", L: "full", M: "full", N: "full" },
  { benefit: "Part B coinsurance or copayment", tooltip: "20% of Medicare-approved costs for outpatient services", A: "full", B: "full", D: "full", G: "full", K: "partial", L: "partial", M: "full", N: "partial" },
  { benefit: "Blood (first 3 pints)", A: "full", B: "full", D: "full", G: "full", K: "partial", L: "partial", M: "full", N: "full" },
  { benefit: "Part A hospice care coinsurance or copayment", A: "full", B: "full", D: "full", G: "full", K: "partial", L: "partial", M: "full", N: "full" },
  { benefit: "Skilled nursing facility care coinsurance", tooltip: "Days 21–100 of a SNF stay", A: "none", B: "none", D: "full", G: "full", K: "partial", L: "partial", M: "full", N: "full" },
  { benefit: "Part A deductible", tooltip: "$1,736 per benefit period in 2026", A: "none", B: "full", D: "full", G: "full", K: "partial", L: "partial", M: "partial", N: "full" },
  { benefit: "Part B deductible", tooltip: "$283 per year in 2026", A: "none", B: "none", D: "none", G: "none", K: "none", L: "none", M: "none", N: "none" },
  { benefit: "Part B excess charges", tooltip: "Charges above Medicare-approved amount from non-participating providers", A: "none", B: "none", D: "none", G: "full", K: "none", L: "none", M: "none", N: "none" },
  { benefit: "Foreign travel emergency (up to plan limits)", A: "none", B: "none", D: "full", G: "full", K: "none", L: "none", M: "full", N: "full" },
];

const planDescriptions: Record<string, { tagline: string; best: string; note?: string; popular?: boolean }> = {
  A: { tagline: "Basic coverage only", best: "Lowest premium, bare minimum protection" },
  B: { tagline: "Adds Part A deductible", best: "Slightly more than Plan A" },
  D: { tagline: "Comprehensive minus Part B deductible & excess", best: "Good all-around value with foreign travel" },
  G: { tagline: "Most comprehensive (for new enrollees)", best: "Best coverage available since 2020", popular: true, note: "Most popular plan in 2026" },
  "HDHP-G": { tagline: "Same as Plan G after $2,870 deductible", best: "Lowest premium, catastrophic protection", popular: true, note: "Growing in popularity for healthy enrollees" },
  K: { tagline: "50% cost-sharing on most benefits", best: "Lower premium, higher out-of-pocket risk" },
  L: { tagline: "75% cost-sharing on most benefits", best: "Middle ground between K and standard plans" },
  M: { tagline: "Covers 50% of Part A deductible", best: "Moderate coverage with lower premium" },
  N: { tagline: "Copays for some office/ER visits", best: "Lower premium than G, small copays apply", popular: true, note: "Best value for healthy enrollees" },
};

// ─── Coverage Icon ────────────────────────────────────────────────────────────

function CoverageIcon({ level }: { level: CoverageLevel }) {
  if (level === "full") return <Check className="w-4 h-4 text-green-600 mx-auto" aria-label="Covered" />;
  if (level === "partial") return <span className="text-amber-600 font-bold text-xs mx-auto block text-center" aria-label="Partial coverage">50%</span>;
  return <X className="w-4 h-4 text-gray-300 mx-auto" aria-label="Not covered" />;
}

// ─── Decision Quiz ────────────────────────────────────────────────────────────

type QuizQuestion = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "How would you describe your overall health?",
    options: [
      { label: "Excellent - I rarely see doctors", value: "healthy" },
      { label: "Good - a few visits per year", value: "moderate" },
      { label: "Fair - I have ongoing conditions", value: "complex" },
      { label: "Poor - frequent medical care needed", value: "high" },
    ],
  },
  {
    id: "q2",
    question: "How important is predictable, fixed healthcare costs to you?",
    options: [
      { label: "Very important - I want to know exactly what I'll pay", value: "predictable" },
      { label: "Somewhat - I can handle occasional surprises", value: "moderate" },
      { label: "Not very - I prefer lower premiums and pay as I go", value: "flexible" },
    ],
  },
  {
    id: "q3",
    question: "Do you travel internationally or spend time in multiple states?",
    options: [
      { label: "Yes, I travel internationally often", value: "international" },
      { label: "Yes, I travel within the US frequently", value: "domestic" },
      { label: "No, I stay mostly in one area", value: "local" },
    ],
  },
  {
    id: "q4",
    question: "Are you comfortable with small copays ($20–$50) at doctor visits to get a lower monthly premium?",
    options: [
      { label: "Yes - I'd rather save on the monthly premium", value: "copays_ok" },
      { label: "No - I want $0 copays at the doctor", value: "no_copays" },
    ],
  },
];

type QuizResult = {
  plan: string;
  headline: string;
  reason: string;
  alt?: string;
};

function getQuizResult(answers: Record<string, string>): QuizResult {
  const { q1, q2, q3, q4 } = answers;
  if (q1 === "high" || q1 === "complex") {
    return {
      plan: "Plan G",
      headline: "Plan G is likely your best fit.",
      reason: "With frequent medical care, the predictability and comprehensive coverage of Plan G - which covers everything except the Part B deductible ($283/year) - will protect you from large, unexpected bills.",
      alt: "Plan N is worth comparing if you're comfortable with small copays.",
    };
  }
  if (q1 === "healthy" && q4 === "copays_ok") {
    return {
      plan: "Plan N",
      headline: "Plan N or HDHP Plan G offer the best value for your situation.",
      reason: "Since you're healthy and comfortable with some out-of-pocket exposure, Plan N gives you solid coverage with small copays at a lower premium. HDHP Plan G is also worth comparing — it has the lowest monthly premium of any Plan G option and provides full Plan G coverage once the $2,870 annual deductible is met.",
      alt: "If your health changes, you can't switch plans without medical underwriting outside your open enrollment window.",
    };
  }
  if (q2 === "predictable" && q4 === "no_copays") {
    return {
      plan: "Plan G",
      headline: "Plan G is the right choice for peace of mind.",
      reason: "You want predictable costs and no copays at the doctor. Plan G delivers exactly that - after the $283 Part B deductible, Medicare and your supplement cover the rest.",
    };
  }
  if (q3 === "international") {
    return {
      plan: "Plan G",
      headline: "Plan G (or Plan D) is ideal for international travelers.",
      reason: "Both Plan G and Plan D include foreign travel emergency coverage (80% after a $250 deductible, up to $50,000 lifetime). Plan G offers more comprehensive domestic coverage as well.",
      alt: "Plan D is a lower-premium alternative that also includes foreign travel coverage.",
    };
  }
  return {
    plan: "Plan G",
    headline: "Plan G is the most popular choice for new enrollees.",
      reason: "For most people new to Medicare, Plan G offers the best balance of comprehensive coverage and reasonable premium. It covers everything except the $283 Part B annual deductible.",
    alt: "Plan N is worth comparing if you're in good health and want a lower monthly premium.",
  };
}

function DecisionQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (qId: string, value: string) => {
    const next = { ...answers, [qId]: value };
    setAnswers(next);
    if (currentQ < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => setResult(getQuizResult(next)), 300);
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentQ(0);
    setResult(null);
  };

  const progress = result ? 100 : Math.round((currentQ / quizQuestions.length) * 100);

  return (
    <div className="bg-white rounded-2xl border-2 border-[#1a3fa8]/20 shadow-sm overflow-hidden">
      <div className="bg-[#1a3fa8] px-8 py-6">
        <p className="text-[#f5a800] text-xs font-bold uppercase tracking-widest mb-1">4-Question Quiz</p>
        <h3 className="text-white text-2xl font-bold" style={{ fontFamily: "'Merriweather', serif" }}>
          Which Medigap Plan Is Right for You?
        </h3>
        <p className="text-white/70 text-sm mt-1">Answer 4 quick questions for a personalized recommendation.</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#f5a800] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <span className="text-white/60 text-xs">{result ? "Done" : `${currentQ + 1} of ${quizQuestions.length}`}</span>
        </div>
      </div>

      <div className="px-8 py-8">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                {quizQuestions[currentQ].question}
              </p>
              <div className="space-y-3" role="group" aria-label={`Question ${currentQ + 1} options`}>
                {quizQuestions[currentQ].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(quizQuestions[currentQ].id, opt.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-medium text-gray-700 hover:border-[#1a3fa8] hover:bg-blue-50 hover:text-[#1a3fa8] ${
                      answers[quizQuestions[currentQ].id] === opt.value
                        ? "border-[#1a3fa8] bg-blue-50 text-[#1a3fa8]"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-1">Your Recommendation</p>
                  <h4 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                    {result.headline}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{result.reason}</p>
              {result.alt && (
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-amber-800 text-sm leading-relaxed">{result.alt}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:8136995559"
                  className="flex items-center gap-2 bg-[#1a3fa8] hover:bg-[#163490] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                  aria-label={`Call MIP at 813-699-5559 for a free quote for ${result.plan}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Get a Free Quote for {result.plan}
                </a>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is a Medicare Supplement (Medigap) plan?",
    a: "A Medigap plan is private health insurance that works alongside Original Medicare to cover costs Medicare doesn't pay - like deductibles, coinsurance, and copays. It does NOT work with Medicare Advantage plans.",
  },
  {
    q: "When is the best time to buy a Medigap plan?",
    a: "The best time is during your Medigap Open Enrollment Period - the 6-month window that starts the month you're both 65 or older AND enrolled in Part B. During this window, insurers cannot deny you coverage or charge you more based on health history. After this window, you may face medical underwriting.",
  },
  {
    q: "Can I be denied a Medigap plan if I have health conditions?",
    a: "During your Medigap Open Enrollment Period, no - insurers must sell you any plan they offer at standard rates regardless of your health. Outside of this window, most states allow insurers to use medical underwriting, which can result in higher premiums or denial.",
  },
  {
    q: "Why can't I buy Plan F or Plan C anymore?",
    a: "Plans F and C covered the Part B deductible, which Congress eliminated for new Medicare enrollees starting January 1, 2020. If you were already enrolled in Medicare before 2020, you may still be able to purchase Plan F.",
  },
  {
    q: "What's the difference between Plan G and Plan N?",
    a: "Both are comprehensive plans. Plan G covers everything except the Part B deductible ($283/year). Plan N also skips the Part B deductible but adds small copays - up to $20 for office visits and $50 for emergency room visits. Plan N typically costs $30–$60/month less than Plan G.",
  },
  {
    q: "Does Medigap cover prescription drugs?",
    a: "No. Medigap plans do not include prescription drug coverage. If you have Original Medicare plus a Medigap plan, you'll need to enroll in a separate Part D drug plan.",
  },
  {
    q: "Can I use a Medigap plan anywhere in the US?",
    a: "Yes. Medigap plans work with any doctor or hospital that accepts Medicare - nationwide. This is one of the key advantages over Medicare Advantage, which typically restricts you to a local network.",
  },
  {
    q: "How much does a Medigap plan cost?",
    a: "Premiums vary significantly by plan type, age, gender, location, and insurer. In 2026, Plan G premiums typically range from $100–$200/month for a 65-year-old, while Plan N runs $70–$150/month. Premiums generally increase with age.",
  },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  const sections = [
    { id: "what-is-medigap", label: "What Is Medigap?" },
    { id: "plan-comparison", label: "Plan Comparison Table" },
    { id: "popular-plans", label: "Most Popular Plans" },
    { id: "decision-quiz", label: "Which Plan Is Right for Me?" },
    { id: "open-enrollment", label: "Medigap Open Enrollment" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <aside className="hidden xl:block w-72 flex-shrink-0" aria-label="Page navigation">
      <div className="sticky top-28 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-3">
            <p className="text-white font-bold text-sm" style={{ fontFamily: "'Merriweather', serif" }}>On This Page</p>
          </div>
          <nav className="p-4 space-y-1" aria-label="Table of contents">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#1a3fa8] hover:bg-blue-50 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-300" aria-hidden="true" />
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        {/* OEP Warning */}
        <Callout type="warning">
          <p className="font-bold text-amber-800 mb-2">Time-Sensitive Window</p>
          <p className="text-amber-800 text-sm leading-relaxed">
            Your <strong>Medigap Open Enrollment Period</strong> lasts only 6 months. After it closes, insurers can charge you more or deny coverage based on health.
          </p>
        </Callout>

        {/* Agent CTA */}
        <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-[#f5a800] rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
            Compare Medigap Quotes
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            We shop all major carriers to find you the lowest premium for the plan you choose. Free service, no obligation.
          </p>
          <a
            href="tel:8136995559"
            className="flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm"
            aria-label="Call MIP at 813-699-5559 to compare Medigap quotes"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            813-699-5559
          </a>
        </div>
      </div>
    </aside>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function DoINeedSupplementClient() {
  const [showAllPlans, setShowAllPlans] = useState(false);
  const visiblePlans = showAllPlans
    ? (["A", "B", "D", "G", "K", "L", "M", "N"] as const)
    : (["G", "N", "D"] as const);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Senior reviewing Medicare supplement plan documents"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 container pb-0">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span>/</span>
            <span className="text-white" aria-current="page">Do I Need a Supplement?</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Medigap Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl" style={{ fontFamily: "'Merriweather', serif" }}>
            Do I Need a Medicare Supplement Plan?
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            Original Medicare leaves significant gaps. A Medigap supplement plan fills them - but not everyone needs one. Here's how to decide.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-[#0d1f5c] text-white py-5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20%", label: "Part B coinsurance Original Medicare leaves unpaid" },
              { value: "$1,736", label: "Part A deductible per benefit period in 2026" },
              { value: "Plan G", label: "Most popular Medigap plan for new enrollees" },
              { value: "6 months", label: "Medigap Open Enrollment Period - use it or lose it" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[#f5a800] text-2xl font-bold" style={{ fontFamily: "'Merriweather', serif" }}>{stat.value}</p>
                <p className="text-white/60 text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex gap-10 items-start">
            <article className="flex-1 min-w-0 space-y-16">

              {/* What Is Medigap */}
              <div id="what-is-medigap">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">The Basics</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    What Is a Medicare Supplement Plan?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Original Medicare (Parts A and B) covers most major medical services, but it doesn't cover everything. You're responsible for deductibles, coinsurance (typically 20% of every bill), and copays - with <strong>no annual out-of-pocket maximum</strong>. A single serious illness could cost you tens of thousands of dollars.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    A <strong>Medicare Supplement plan</strong> (also called Medigap) is private insurance that pays some or all of the costs that Original Medicare doesn't cover. Plans are standardized by the federal government - Plan G from one insurer covers exactly the same benefits as Plan G from another. The only difference is the monthly premium.
                  </p>

                  <div className="grid md:grid-cols-3 gap-5 mb-8">
                    {[
                      { icon: Shield, color: "text-[#1a3fa8]", bg: "bg-blue-50", title: "Fills the Gaps", desc: "Covers deductibles, coinsurance, and copays that Original Medicare leaves unpaid." },
                      { icon: Globe, color: "text-green-700", bg: "bg-green-50", title: "Nationwide Coverage", desc: "Works with any doctor or hospital that accepts Medicare - no network restrictions." },
                      { icon: DollarSign, color: "text-amber-700", bg: "bg-amber-50", title: "Predictable Costs", desc: "Know your maximum out-of-pocket exposure before you need care." },
                    ].map((card) => {
                      const Icon = card.icon;
                      return (
                        <div key={card.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.bg}`}>
                            <Icon className={`w-5 h-5 ${card.color}`} aria-hidden="true" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "'Merriweather', serif" }}>{card.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Who needs it */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <Callout type="success">
                      <h3 className="font-bold text-green-800 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                        You likely need Medigap if…
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "You have ongoing health conditions requiring frequent care",
                          "You want predictable, capped out-of-pocket costs",
                          "You travel frequently or split time between states",
                          "You want to see any Medicare-accepting doctor without referrals",
                          "You're risk-averse and value financial certainty",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-green-800">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Callout>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-5 h-5 text-gray-500" aria-hidden="true" />
                        <h3 className="font-bold text-gray-700" style={{ fontFamily: "'Merriweather', serif" }}>You may not need Medigap if…</h3>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "You're choosing Medicare Advantage (Medigap doesn't work with MA)",
                          "You qualify for Medicaid, which covers most cost-sharing",
                          "You're in excellent health and comfortable with some financial risk",
                          "You strongly prefer lower monthly premiums over predictability",
                          "You have retiree coverage from an employer that fills the gaps",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <Minus className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Plan Comparison Table */}
              <div id="plan-comparison">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Standardized Benefits</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                    Medigap Plan Comparison
                  </h2>
                  <p className="text-gray-500 mb-6 text-sm">All plans available to new Medicare enrollees in 2026. Plans C and F are no longer available to those new to Medicare after Jan 1, 2020.</p>

                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" aria-label="Medigap plan comparison table">
                        <thead>
                          <tr className="bg-[#0d1f5c] text-white">
                            <th className="text-left px-5 py-4 font-semibold w-64" scope="col">Benefit</th>
                            {visiblePlans.map((plan) => (
                              <th key={plan} className="px-4 py-4 text-center font-bold min-w-[80px]" scope="col">
                                <div>
                                  Plan {plan}
                                  {planDescriptions[plan]?.popular && (
                                    <span className="block text-[#f5a800] text-xs font-bold">★ Popular</span>
                                  )}
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {planRows.map((row, i) => (
                            <tr key={row.benefit} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                              <td className="px-5 py-3 text-gray-700 font-medium leading-snug">
                                <div className="flex items-start gap-1.5">
                                  {row.benefit}
                                  {row.tooltip && (
                                    <span className="group relative cursor-help">
                                      <Info className="w-3.5 h-3.5 text-gray-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                      <span className="absolute left-5 top-0 z-10 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-3 py-2 w-56 leading-relaxed shadow-xl">
                                        {row.tooltip}
                                      </span>
                                    </span>
                                  )}
                                </div>
                              </td>
                              {visiblePlans.map((plan) => (
                                <td key={plan} className="px-4 py-3 text-center">
                                  <CoverageIcon level={row[plan]} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" aria-hidden="true" /> Covered</span>
                        <span className="flex items-center gap-1"><span className="text-amber-600 font-bold">50%</span> Partial</span>
                        <span className="flex items-center gap-1"><X className="w-3.5 h-3.5 text-gray-300" aria-hidden="true" /> Not covered</span>
                      </div>
                      <button
                        onClick={() => setShowAllPlans(!showAllPlans)}
                        className="text-xs text-[#1a3fa8] font-semibold hover:underline flex items-center gap-1"
                        aria-expanded={showAllPlans}
                      >
                        {showAllPlans ? "Show popular plans only" : "Show all 8 plans"}
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAllPlans ? "rotate-90" : ""}`} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Popular Plans Deep-Dive */}
              <div id="popular-plans">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Most Popular in 2026</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    Plan G vs. HDHP Plan G vs. Plan N vs. Plan D
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                      {
                        plan: "Plan G",
                        badge: "Most Popular",
                        badgeColor: "bg-[#1a3fa8] text-white",
                        borderColor: "border-[#1a3fa8]",
                        premium: "$100–$200/mo",
                        headline: "Best overall coverage",
                        pros: [
                          "Covers everything except Part B deductible ($283/yr)",
                          "No copays at the doctor or specialist",
                          "Includes foreign travel emergency coverage",
                          "Covers Part B excess charges",
                        ],
                        cons: [
                          "Higher monthly premium than Plan N",
                          "Part B deductible ($283) still applies",
                        ],
                        bestFor: "Anyone who wants comprehensive, predictable coverage with no surprises.",
                      },
                      {
                        plan: "HDHP Plan G",
                        badge: "Growing in Popularity",
                        badgeColor: "bg-[#0e7490] text-white",
                        borderColor: "border-[#0e7490]",
                        premium: "$40–$100/mo",
                        headline: "Lowest premium, catastrophic protection",
                        pros: [
                          "Significantly lower monthly premium than standard Plan G",
                          "Same comprehensive coverage as Plan G once deductible is met",
                          "Includes foreign travel emergency coverage",
                          "Covers Part B excess charges (after deductible)",
                        ],
                        cons: [
                          "$2,870 annual deductible must be met first (2026)",
                          "Does NOT cover Part B deductible ($283)",
                          "Higher out-of-pocket risk if you need frequent care",
                        ],
                        bestFor: "Healthy beneficiaries who want catastrophic protection at the lowest possible monthly premium.",
                      },
                      {
                        plan: "Plan N",
                        badge: "Best Value",
                        badgeColor: "bg-[#f5a800] text-white",
                        borderColor: "border-[#f5a800]",
                        premium: "$70–$150/mo",
                        headline: "Lower premium, small copays",
                        pros: [
                          "Meaningfully lower premium than Plan G",
                          "Covers Part A deductible and coinsurance",
                          "Includes foreign travel emergency coverage",
                          "Good for healthy, infrequent medical users",
                        ],
                        cons: [
                          "Up to $20 copay for office visits",
                          "Up to $50 copay for ER visits (waived if admitted)",
                          "Does NOT cover Part B excess charges",
                        ],
                        bestFor: "Healthy enrollees who want solid coverage at a lower monthly cost.",
                      },
                      {
                        plan: "Plan D",
                        badge: "Underrated Pick",
                        badgeColor: "bg-green-600 text-white",
                        borderColor: "border-green-400",
                        premium: "$80–$160/mo",
                        headline: "Comprehensive minus excess charges",
                        pros: [
                          "Covers Part A deductible and SNF coinsurance",
                          "Includes foreign travel emergency coverage",
                          "No copays for office visits",
                          "Often lower premium than Plan G",
                        ],
                        cons: [
                          "Does NOT cover Part B excess charges",
                          "Does NOT cover Part B deductible",
                          "Less widely marketed than G or N",
                        ],
                        bestFor: "Enrollees who want Plan G-level coverage but are willing to skip excess charge protection for a lower premium.",
                      },
                    ].map((p) => (
                      <div key={p.plan} className={`bg-white rounded-2xl border-2 ${p.borderColor} shadow-sm overflow-hidden flex flex-col`}>
                        <div className="px-6 pt-6 pb-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>{p.plan}</h3>
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                          </div>
                          <p className="text-gray-500 text-sm mb-1">{p.headline}</p>
                          <p className="text-[#1a3fa8] font-bold text-lg" style={{ fontFamily: "'Merriweather', serif" }}>{p.premium}</p>
                          <p className="text-gray-400 text-xs">Typical premium for a 65-year-old, 2026</p>
                        </div>
                        <div className="px-6 pb-6 flex-1">
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Pros</p>
                          <ul className="space-y-1.5 mb-4">
                            {p.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cons</p>
                          <ul className="space-y-1.5 mb-4">
                            {p.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-sm text-gray-500">
                                <X className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {con}
                              </li>
                            ))}
                          </ul>
                          <div className="bg-gray-50 rounded-xl px-4 py-3">
                            <p className="text-xs font-bold text-gray-500 mb-1">Best for</p>
                            <p className="text-sm text-gray-700 leading-snug">{p.bestFor}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Decision Quiz */}
              <div id="decision-quiz">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Personalized Guidance</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    Which Medigap Plan Is Right for You?
                  </h2>
                  <DecisionQuiz />
                </motion.div>
              </div>

              {/* Medigap Open Enrollment Warning */}
              <div id="open-enrollment">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <Callout type="warning">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-amber-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-amber-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                          Your Medigap Open Enrollment Period Is a One-Time Window
                        </h2>
                        <p className="text-amber-800 leading-relaxed mb-4">
                          Your <strong>Medigap Open Enrollment Period (OEP)</strong> is the 6-month window that begins the first day of the month you are both age 65 or older <em>and</em> enrolled in Medicare Part B. During this window, insurers are legally required to sell you any Medigap plan they offer at standard rates - regardless of your health history.
                        </p>
                        <p className="text-amber-800 leading-relaxed mb-6">
                          Once this window closes, most states allow insurers to use <strong>medical underwriting</strong> - meaning they can charge you higher premiums, exclude pre-existing conditions, or deny your application entirely. This window does not repeat.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            { label: "When it starts", value: "1st day of the month you turn 65 AND are enrolled in Part B" },
                            { label: "How long it lasts", value: "6 months - it does not renew or repeat" },
                            { label: "What you're guaranteed", value: "Any plan, standard rates, no medical questions" },
                          ].map((item) => (
                            <div key={item.label} className="bg-white/70 rounded-xl px-4 py-3">
                              <p className="text-xs font-bold text-amber-700 mb-1">{item.label}</p>
                              <p className="text-sm text-amber-900 leading-snug">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Callout>
                </motion.div>
              </div>

              {/* FAQ */}
              <div id="faq">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Common Questions</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    Medigap FAQ
                  </h2>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-2">
                    <FaqAccordion items={faqs} defaultOpen={null} />
                  </div>
                </motion.div>
              </div>

            </article>

            <Sidebar />
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#1a3fa8] py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-2">Free Quote Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                Ready to compare Medigap plans?
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                We shop all major carriers - Mutual of Omaha, Aetna, Cigna, UnitedHealthcare, and more - to find you the best rate for the plan you choose. Free, no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg whitespace-nowrap"
                aria-label="Call MIP at 813-699-5559 to compare Medigap plans for free"
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
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Merriweather', serif" }}>Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/original-vs-advantage", label: "Original vs. Advantage", desc: "Decide between Original Medicare and Medicare Advantage before choosing a supplement.", tag: "Key Decision" },
              { href: "/costs-at-a-glance", label: "Costs at a Glance", desc: "See all 2026 premiums, deductibles, and out-of-pocket limits for every part of Medicare.", tag: "Cost Reference" },
              { href: "/enrollment-timeline", label: "Enrollment Timeline", desc: "Understand your enrollment windows and how they relate to your Medigap OEP.", tag: "Getting Started" },
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
