"use client";

/**
 * Original Medicare vs. Medicare Advantage — MIP Next.js Client Component
 * Design: MIP brand — navy/gold, Merriweather headings, card-based layout
 * Sections: Hero → Stats → Overview cards → Detailed comparison → Pros/Cons → Decision Quiz → Who Chooses → FAQ → CTA → Related
 */

import { useState, useEffect } from "react";
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
  AlertTriangle,
  Info,
  MapPin,
  DollarSign,
  Stethoscope,
  Pill,
  Eye,
  Smile,
  Heart,
  HelpCircle,
  Star,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/original-vs-advantage-hero-F4ivFrcxPsEKvEjshicTLA.webp";

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "overview", label: "Side-by-Side Overview" },
  { id: "comparison", label: "Detailed Comparison" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "quiz", label: "Which Is Right for Me?" },
  { id: "who", label: "Who Chooses Each" },
  { id: "faq", label: "Frequently Asked Questions" },
];

// ─── Comparison Rows ──────────────────────────────────────────────────────────

const comparisonRows = [
  {
    category: "Cost Structure",
    icon: DollarSign,
    original: { text: "Predictable premiums (Part B: $185/mo in 2025), but potentially high out-of-pocket costs with no annual cap", positive: false },
    advantage: { text: "Often $0 extra premium beyond Part B, but copays and network restrictions apply. Annual out-of-pocket cap (max $8,850 in-network, 2025)", positive: true },
  },
  {
    category: "Doctor Choice",
    icon: Stethoscope,
    original: { text: "See any doctor or specialist in the U.S. who accepts Medicare — no referrals needed, no network restrictions", positive: true },
    advantage: { text: "Most plans require you to use in-network providers. HMO plans require referrals; PPO plans offer more flexibility at higher cost", positive: false },
  },
  {
    category: "Prescription Drugs",
    icon: Pill,
    original: { text: "Not included — you must add a separate Part D drug plan (monthly premium varies by plan)", positive: false },
    advantage: { text: "Most plans include built-in Part D drug coverage — no separate plan needed", positive: true },
  },
  {
    category: "Extra Benefits",
    icon: Star,
    original: { text: "Covers only Medicare-approved services. No dental, vision, hearing, or fitness benefits", positive: false },
    advantage: { text: "Many plans include dental, vision, hearing, SilverSneakers gym membership, and over-the-counter allowances", positive: true },
  },
  {
    category: "Out-of-Pocket Cap",
    icon: Heart,
    original: { text: "No annual out-of-pocket maximum — costs can be unlimited without a Medigap supplement", positive: false },
    advantage: { text: "Federal law requires an annual out-of-pocket maximum (up to $8,850 in-network in 2025)", positive: true },
  },
  {
    category: "Travel & Nationwide Coverage",
    icon: MapPin,
    original: { text: "Accepted by providers nationwide — ideal for snowbirds, frequent travelers, or those with multiple residences", positive: true },
    advantage: { text: "Coverage limited to plan's service area. Emergency care covered nationwide, but routine care may not be", positive: false },
  },
  {
    category: "Specialist Access",
    icon: Eye,
    original: { text: "See any Medicare-accepting specialist directly — no referral required", positive: true },
    advantage: { text: "HMO plans require a referral from your primary care doctor. PPO plans allow direct specialist access at higher cost", positive: false },
  },
  {
    category: "Supplement (Medigap) Eligibility",
    icon: Smile,
    original: { text: "Can add a Medigap supplement to cover deductibles, copays, and coinsurance — greatly reducing out-of-pocket exposure", positive: true },
    advantage: { text: "Cannot use a Medigap supplement while enrolled in Medicare Advantage", positive: false },
  },
];

// ─── Pros / Cons ──────────────────────────────────────────────────────────────

const originalPros = [
  "See any doctor or specialist nationwide — no network",
  "No referrals required for specialist visits",
  "Ideal for frequent travelers or snowbirds",
  "Can add Medigap to cap out-of-pocket costs",
  "Simpler, more predictable coverage structure",
  "No prior authorization requirements for most services",
];

const originalCons = [
  "No annual out-of-pocket maximum without Medigap",
  "Medigap premiums add $100–$300+/month",
  "No built-in drug coverage — must add Part D separately",
  "No dental, vision, or hearing benefits",
  "Higher total monthly cost if adding Medigap + Part D",
];

const advantagePros = [
  "Often $0 extra monthly premium (beyond Part B)",
  "Annual out-of-pocket maximum protects against catastrophic costs",
  "Usually includes Part D drug coverage",
  "May include dental, vision, hearing, fitness benefits",
  "One card, one plan — simpler administration",
  "OTC allowances and other supplemental benefits",
];

const advantageCons = [
  "Network restrictions — must use in-network providers",
  "Referrals required for specialists (HMO plans)",
  "Prior authorization may be required for some services",
  "Coverage limited to plan's service area",
  "Cannot add Medigap supplement",
  "Plan benefits can change each year at renewal",
];

// ─── Decision Quiz ────────────────────────────────────────────────────────────

type QuizQuestion = {
  id: string;
  text: string;
  hint?: string;
  options: { label: string; value: "original" | "advantage" | "neutral" }[];
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "travel",
    text: "How often do you travel or spend time in multiple states?",
    hint: "Original Medicare is accepted nationwide; Advantage plans have service area restrictions.",
    options: [
      { label: "Frequently — I travel or snowbird regularly", value: "original" },
      { label: "Occasionally — a few trips a year", value: "neutral" },
      { label: "Rarely — I stay close to home", value: "advantage" },
    ],
  },
  {
    id: "doctors",
    text: "How important is it to keep your current doctors?",
    hint: "Original Medicare is accepted by most doctors nationwide. Advantage plans have networks.",
    options: [
      { label: "Very important — I have specialists I rely on", value: "original" },
      { label: "Somewhat — I'd check if they're in-network", value: "neutral" },
      { label: "Not very — I'm open to finding new doctors", value: "advantage" },
    ],
  },
  {
    id: "cost",
    text: "What is your biggest financial concern?",
    options: [
      { label: "Avoiding large unexpected bills — I want a cap on costs", value: "advantage" },
      { label: "Keeping monthly premiums low", value: "advantage" },
      { label: "Predictable costs even if monthly premiums are higher", value: "original" },
    ],
  },
  {
    id: "extras",
    text: "How much do extra benefits like dental, vision, and hearing matter to you?",
    options: [
      { label: "Very much — I need dental and vision coverage", value: "advantage" },
      { label: "Somewhat — nice to have but not essential", value: "neutral" },
      { label: "Not much — I'll handle those separately", value: "original" },
    ],
  },
  {
    id: "health",
    text: "How would you describe your current health and expected healthcare use?",
    options: [
      { label: "Complex health needs — I see multiple specialists regularly", value: "original" },
      { label: "Moderate — routine care plus some specialist visits", value: "neutral" },
      { label: "Generally healthy — mostly preventive care", value: "advantage" },
    ],
  },
];

type QuizAnswers = Record<string, "original" | "advantage" | "neutral">;

function DecisionQuiz() {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<"original" | "advantage" | "toss-up" | null>(null);
  const [currentQ, setCurrentQ] = useState(0);

  const handleAnswer = (qId: string, value: "original" | "advantage" | "neutral") => {
    const newAnswers = { ...answers, [qId]: value };
    setAnswers(newAnswers);
    if (currentQ < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQ((q) => q + 1), 300);
    } else {
      const counts = { original: 0, advantage: 0, neutral: 0 };
      Object.values(newAnswers).forEach((v) => counts[v]++);
      if (counts.original > counts.advantage) setResult("original");
      else if (counts.advantage > counts.original) setResult("advantage");
      else setResult("toss-up");
    }
  };

  const reset = () => {
    setAnswers({});
    setResult(null);
    setCurrentQ(0);
  };

  const progress = (currentQ / quizQuestions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-[#1a3fa8] px-8 py-5">
        <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">5-Question Quiz</p>
        <h3 className="text-white text-xl font-bold" style={{ fontFamily: "'Merriweather', serif" }}>
          Which Plan Is Right for Me?
        </h3>
      </div>

      <div className="px-8 py-8">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {result === "original" && (
                <div>
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <Stethoscope className="w-7 h-7 text-[#1a3fa8]" aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                    Original Medicare may be a better fit.
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Based on your answers, you value flexibility, nationwide access, and the ability to see specialists without restrictions. Original Medicare — paired with a Medigap supplement and Part D drug plan — gives you the most freedom and predictable coverage.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A licensed MIP agent can help you compare Medigap plans in your area and find the best combination for your needs.
                  </p>
                </div>
              )}
              {result === "advantage" && (
                <div>
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                    <Star className="w-7 h-7 text-amber-600" aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                    Medicare Advantage may be a better fit.
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Based on your answers, you prioritize lower monthly costs, extra benefits like dental and vision, and an out-of-pocket cap. Medicare Advantage plans in your area may offer all of these — often with a $0 extra premium.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A licensed MIP agent can compare the Advantage plans available in your ZIP code and help you find the best fit.
                  </p>
                </div>
              )}
              {result === "toss-up" && (
                <div>
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <HelpCircle className="w-7 h-7 text-green-600" aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                    It's a close call — talk to an agent.
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your answers suggest both paths have merit for your situation. The right choice depends on the specific plans available in your area, your current doctors, and your medications. A licensed MIP agent can walk you through both options side by side.
                  </p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8136995559"
                  className="flex items-center justify-center gap-2 bg-[#1a3fa8] hover:bg-[#163490] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                  aria-label="Call MIP at 813-699-5559 for free plan guidance"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Talk to an Agent Free
                </a>
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
            >
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Question {currentQ + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a3fa8] rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-800 mb-3 leading-snug" style={{ fontFamily: "'Merriweather', serif" }}>
                {quizQuestions[currentQ].text}
              </p>

              {quizQuestions[currentQ].hint && (
                <div className="flex gap-2 items-start bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-5">
                  <Info className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-blue-800">{quizQuestions[currentQ].hint}</p>
                </div>
              )}

              <div className="space-y-3" role="group" aria-label={`Question ${currentQ + 1} options`}>
                {quizQuestions[currentQ].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleAnswer(quizQuestions[currentQ].id, opt.value)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-gray-200 hover:border-[#1a3fa8] hover:bg-blue-50 transition-all duration-150 text-gray-700 font-medium text-sm leading-snug"
                  >
                    {opt.label}
                  </button>
                ))}
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
    q: "Can I switch from Medicare Advantage back to Original Medicare?",
    a: "Yes. During the Annual Enrollment Period (October 15 – December 7), you can switch from Medicare Advantage back to Original Medicare. You can also make one change during the Medicare Advantage Open Enrollment Period (January 1 – March 31). However, if you switch back to Original Medicare after your initial enrollment period, you may face medical underwriting for a Medigap supplement — meaning you could be denied or charged more based on your health history.",
  },
  {
    q: "Is Medicare Advantage really free?",
    a: "Many Medicare Advantage plans have a $0 extra monthly premium — but you still pay your Part B premium ($185/mo in 2025). 'Free' refers to the plan's additional premium, not your total Medicare costs. You'll still have copays, coinsurance, and deductibles when you use services. The out-of-pocket maximum protects you from catastrophic costs.",
  },
  {
    q: "What is a Medigap supplement and do I need one with Original Medicare?",
    a: "A Medigap (Medicare Supplement) policy is private insurance that pays some or all of the costs that Original Medicare doesn't cover — like deductibles, copays, and coinsurance. Without Medigap, Original Medicare has no annual out-of-pocket cap, meaning a serious illness could cost you thousands. Most people who choose Original Medicare also add a Medigap plan for financial protection.",
  },
  {
    q: "Does Medicare Advantage cover care outside my area?",
    a: "Medicare Advantage plans cover emergency and urgent care nationwide. However, routine care — like seeing your regular doctor or a specialist — is typically only covered within the plan's service area and network. If you travel frequently or spend time in multiple states, Original Medicare's nationwide coverage is usually a better fit.",
  },
  {
    q: "Which plan is better if I have complex health needs?",
    a: "For people with complex health needs who see multiple specialists, Original Medicare often provides more flexibility — you can see any Medicare-accepting specialist without a referral or prior authorization. Medicare Advantage plans may require referrals and prior authorizations, which can create delays. That said, the out-of-pocket cap in Advantage plans can be valuable for people with high healthcare use.",
  },
  {
    q: "Can I have both Original Medicare and Medicare Advantage?",
    a: "No. You must choose one or the other. If you enroll in a Medicare Advantage plan, your Medicare benefits are delivered through that plan rather than directly through Original Medicare. You cannot use a Medigap supplement while enrolled in Medicare Advantage.",
  },
  {
    q: "How do I know which Advantage plans are available in my area?",
    a: "Medicare Advantage plans vary significantly by ZIP code. The plans available in Brandon, FL may be very different from those available in another county. A licensed MIP agent can pull up all the plans available in your specific area, compare benefits and networks, and help you find the best fit — at no cost to you.",
  },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function TOCSidebar({ activeSection }: { activeSection: string }) {
  return (
    <aside className="hidden xl:block w-72 flex-shrink-0" aria-label="Page navigation">
      <div className="sticky top-28 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-4">
            <p className="text-white font-bold text-sm" style={{ fontFamily: "'Merriweather', serif" }}>
              In This Guide
            </p>
          </div>
          <nav className="p-4 space-y-1" aria-label="Table of contents">
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

        <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-[#f5a800] rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
            Still not sure?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            A licensed MIP agent will compare the plans available in your ZIP code and help you decide — at no cost.
          </p>
          <a
            href="tel:8136995559"
            className="flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-[#1a1a1a] font-bold px-4 py-3 rounded-xl transition-colors text-sm"
            aria-label="Call MIP at 813-699-5559 for free plan comparison"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            813-699-5559
          </a>
        </div>

        <Callout type="info">
          <p className="text-blue-800 text-sm leading-relaxed">
            In 2024, <strong>54%</strong> of Medicare beneficiaries were enrolled in Medicare Advantage — up from 42% in 2021.
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

export default function OriginalVsAdvantageClient() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeTab, setActiveTab] = useState<"original" | "advantage">("original");

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
          aria-label="Older couple reviewing Medicare plan options together"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 container pb-0">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span>/</span>
            <span className="text-white" aria-current="page">Original vs. Advantage</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-[#1a1a1a] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Plan Comparison
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Original Medicare vs. Medicare Advantage
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            The most important decision you'll make when enrolling in Medicare. Here's an honest, plain-English comparison to help you choose.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-[#0d1f5c] text-white py-4">
        <div className="container flex flex-wrap gap-6 justify-between items-center">
          {[
            { value: "54%", label: "Choose Medicare Advantage (2024)" },
            { value: "$0", label: "Extra premium on many Advantage plans" },
            { value: "Any doctor", label: "Original Medicare nationwide access" },
            { value: "$8,850", label: "Advantage out-of-pocket max (2025)" },
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
        <div className="container">
          <div className="flex gap-10 items-start">
            <article className="flex-1 min-w-0 space-y-16">

              {/* Overview */}
              <div id="overview">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">The Big Picture</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Two Ways to Get Medicare
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    When you become eligible for Medicare, you have a fundamental choice: receive your benefits through <strong>Original Medicare</strong> (the traditional government program) or through a <strong>Medicare Advantage</strong> plan (a private insurance alternative that delivers Medicare benefits).
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Both options cover the same core Medicare benefits — hospital care (Part A) and medical care (Part B). The difference is in how those benefits are delivered, what extra coverage is included, which doctors you can see, and how your costs are structured.
                  </p>

                  {/* Two-column overview cards */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original Medicare */}
                    <div className="bg-white rounded-2xl border-2 border-[#1a3fa8] p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#1a3fa8] rounded-xl flex items-center justify-center">
                          <Stethoscope className="w-5 h-5 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8]">Option A</p>
                          <h3 className="font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>Original Medicare</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        The traditional federal program. Parts A and B cover hospital and medical care. You add a separate Part D drug plan and optionally a Medigap supplement. See any Medicare-accepting provider nationwide.
                      </p>
                      <div className="space-y-2">
                        {["Freedom to see any doctor", "Nationwide coverage", "Add Medigap for cost protection", "Separate Part D drug plan needed"].map((item, i) => (
                          <div key={item} className="flex items-center gap-2 text-sm">
                            {i < 3
                              ? <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                              : <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />}
                            <span className={i < 3 ? "text-gray-700" : "text-gray-500"}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Medicare Advantage */}
                    <div className="bg-white rounded-2xl border-2 border-amber-400 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Option B</p>
                          <h3 className="font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>Medicare Advantage</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Private insurance plans approved by Medicare. Often includes drug coverage, dental, vision, and hearing. Lower monthly premiums but network restrictions and prior authorization requirements.
                      </p>
                      <div className="space-y-2">
                        {["Often $0 extra monthly premium", "Includes drug coverage (usually)", "Dental, vision, hearing extras", "Network and referral restrictions"].map((item, i) => (
                          <div key={item} className="flex items-center gap-2 text-sm">
                            {i < 3
                              ? <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                              : <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />}
                            <span className={i < 3 ? "text-gray-700" : "text-gray-500"}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Detailed Comparison */}
              <div id="comparison">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Feature by Feature</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Detailed Comparison
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Here's how Original Medicare and Medicare Advantage compare across the factors that matter most to new enrollees.
                  </p>

                  <div className="space-y-4">
                    {comparisonRows.map((row, i) => (
                      <motion.div
                        key={row.category}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                      >
                        <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 flex items-center gap-2">
                          <row.icon className="w-4 h-4 text-[#1a3fa8]" aria-hidden="true" />
                          <span className="font-bold text-gray-700 text-sm uppercase tracking-wide">{row.category}</span>
                        </div>
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                          <div className="px-6 py-5">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-5 h-5 bg-[#1a3fa8] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-[9px] font-bold">OM</span>
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wide text-[#1a3fa8]">Original Medicare</span>
                              {row.original.positive
                                ? <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" aria-label="Advantage" />
                                : <XCircle className="w-4 h-4 text-red-400 ml-auto" aria-label="Disadvantage" />}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{row.original.text}</p>
                          </div>
                          <div className="px-6 py-5">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-[9px] font-bold">MA</span>
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wide text-amber-600">Medicare Advantage</span>
                              {row.advantage.positive
                                ? <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" aria-label="Advantage" />
                                : <XCircle className="w-4 h-4 text-red-400 ml-auto" aria-label="Disadvantage" />}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{row.advantage.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Pros & Cons */}
              <div id="pros-cons">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Honest Assessment</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Pros &amp; Cons
                  </h2>

                  {/* Tab switcher */}
                  <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-xl w-fit" role="tablist" aria-label="Plan pros and cons tabs">
                    {(["original", "advantage"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        role="tab"
                        aria-selected={activeTab === tab}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                          activeTab === tab
                            ? "bg-white text-[#1a3fa8] shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {tab === "original" ? "Original Medicare" : "Medicare Advantage"}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      role="tabpanel"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <Callout type="success">
                          <h4 className="font-bold text-green-800 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                            Advantages
                          </h4>
                          <ul className="space-y-3">
                            {(activeTab === "original" ? originalPros : advantagePros).map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-green-800">
                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Callout>
                        <Callout type="error">
                          <h4 className="font-bold text-red-800 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                            Drawbacks
                          </h4>
                          <ul className="space-y-3">
                            {(activeTab === "original" ? originalCons : advantageCons).map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-red-800">
                                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Callout>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Decision Quiz */}
              <div id="quiz">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Personalized Guidance</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Which Plan Is Right for You?
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Answer 5 quick questions about your health, lifestyle, and priorities to get a personalized recommendation.
                  </p>
                  <DecisionQuiz />
                </motion.div>
              </div>

              {/* Who Chooses Each */}
              <div id="who">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-3">Common Profiles</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                    Who Typically Chooses Each Option
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl border-2 border-[#1a3fa8] p-6">
                      <h3 className="font-bold text-[#1a3fa8] text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                        Original Medicare tends to be a better fit if you…
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Travel frequently or split time between states",
                          "Have established relationships with specialists you want to keep",
                          "Have complex or chronic health conditions requiring frequent specialist visits",
                          "Value predictability and want to avoid network or referral issues",
                          "Are willing to pay higher monthly premiums for a Medigap supplement",
                          "Live in a rural area with limited Advantage plan options",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-2xl border-2 border-amber-400 p-6">
                      <h3 className="font-bold text-amber-700 text-lg mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                        Medicare Advantage tends to be a better fit if you…
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Want to minimize monthly out-of-pocket costs",
                          "Need dental, vision, or hearing coverage",
                          "Are generally healthy and use mostly preventive care",
                          "Live in an area with strong Advantage plan networks",
                          "Want the simplicity of one plan covering everything",
                          "Value the annual out-of-pocket cap for financial protection",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-2">Free Plan Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                Get a personalized recommendation.
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                A licensed MIP agent will compare the plans available in your ZIP code, check your doctors are in-network, and help you choose the right option — at no cost to you.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                className="flex items-center gap-3 bg-[#f5a800] hover:bg-[#e09700] text-[#1a1a1a] font-bold px-8 py-4 rounded-xl transition-colors text-lg whitespace-nowrap"
                aria-label="Call MIP at 813-699-5559 for a free personalized Medicare plan comparison"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Merriweather', serif" }}>
            Continue Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/enrollment-timeline", label: "Enrollment Timeline", desc: "Key dates, enrollment windows, and how to avoid permanent late penalties.", tag: "Getting Started" },
              { href: "/am-i-eligible", label: "Am I Eligible?", desc: "Find out if you qualify for Medicare and which eligibility path applies to you.", tag: "Eligibility" },
              { href: "/medicare-101", label: "Medicare 101 Overview", desc: "A complete beginner's guide to Parts A, B, C, and D — everything in one place.", tag: "Beginner Guide" },
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
