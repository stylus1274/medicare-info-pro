"use client";

/**
 * Understanding Part D — MIP Design System
 * Design: Warm Guide — Merriweather headlines, Source Sans 3 body
 * Primary: #1a3fa8 (royal blue), Accent: #f5a800 (gold)
 * Layout: Full-bleed hero (centered) -> stats bar -> what-is-Part-D -> formulary tiers
 *         -> $2,000 cap explainer -> how-to-choose guide -> Extra Help/LIS
 *         -> late penalty warning -> FAQ -> CTA
 * Note: No em dashes. Callout type only: "warning" | "info" | "success"
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Callout from "@/components/Callout";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  Info,
  Pill,
  DollarSign,
  CheckCircle2,
  Star,
  Clock,
  Search,
  FileText,
  Shield,
  TrendingDown,
  Check,
} from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/part-d-hero-JKNbAqW3EVLuYqrytoLudi.webp";

const formularyTiers = [
  {
    tier: "Tier 1",
    name: "Preferred Generics",
    color: "bg-green-500",
    textColor: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    typicalCopay: "$0-$5",
    description:
      "The lowest-cost drugs. Generic versions of common medications. Most plans offer these at very low or $0 copays.",
    examples: ["Lisinopril", "Metformin", "Atorvastatin", "Amlodipine", "Omeprazole"],
  },
  {
    tier: "Tier 2",
    name: "Non-Preferred Generics",
    color: "bg-teal-500",
    textColor: "text-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    typicalCopay: "$5-$15",
    description:
      "Generic drugs that are not on the preferred list. Slightly higher copay than Tier 1 but still very affordable.",
    examples: ["Gabapentin", "Hydrochlorothiazide", "Sertraline", "Losartan"],
  },
  {
    tier: "Tier 3",
    name: "Preferred Brand-Name",
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    typicalCopay: "$35-$50",
    description:
      "Brand-name drugs the plan has negotiated preferred pricing for. Significantly more expensive than generics.",
    examples: ["Januvia", "Eliquis (some plans)", "Jardiance (some plans)"],
  },
  {
    tier: "Tier 4",
    name: "Non-Preferred Brand-Name",
    color: "bg-amber-500",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    typicalCopay: "$80-$100",
    description:
      "Brand-name drugs without preferred pricing. You may be able to request a formulary exception if a lower-tier alternative is not appropriate for you.",
    examples: ["Newer brand-name drugs", "Drugs without generic alternatives"],
  },
  {
    tier: "Tier 5",
    name: "Specialty Drugs",
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    typicalCopay: "25-33% coinsurance",
    description:
      "High-cost specialty medications for complex conditions. These are often biologics or drugs for cancer, MS, rheumatoid arthritis, etc.",
    examples: ["Humira", "Keytruda", "Ozempic (some plans)", "Biologics"],
    note: "The $2,100 out-of-pocket cap (2026) is especially impactful for people on specialty drugs.",
  },
  {
    tier: "Tier 6",
    name: "Select Care Drugs (some plans)",
    color: "bg-purple-500",
    textColor: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    typicalCopay: "$0",
    description:
      "Some plans add a Tier 6 for insulin and certain preventive drugs at $0 copay. Not all plans have this tier.",
    examples: ["Insulin (all types)", "Certain vaccines", "Preventive medications"],
  },
];

const faqs = [
  {
    q: "Do I need Part D if I don't take any prescription drugs?",
    a: "You should still enroll in the lowest-cost Part D plan available to you. If you go without creditable drug coverage for 63 or more consecutive days after your Initial Enrollment Period ends, you'll face a permanent late enrollment penalty: 1% of the national base beneficiary premium for every month you were without coverage. Even a $0-premium plan protects you from this penalty.",
  },
  {
    q: "What is a formulary, and how do I check if my drugs are covered?",
    a: "A formulary is a plan's list of covered drugs, organized by tiers. Each Part D plan has its own formulary, which can change each year. Before enrolling, use Medicare.gov's Plan Finder or call the plan directly to verify your specific medications are covered and at what tier. You can also ask your pharmacist to check.",
  },
  {
    q: "What happens if my drug isn't on the formulary?",
    a: "You have several options: (1) Ask your doctor about a therapeutically equivalent drug that is on the formulary. (2) File a formulary exception request. If your doctor documents that the non-covered drug is medically necessary, the plan may cover it. (3) Switch to a plan that covers your drug during the next Annual Enrollment Period.",
  },
  {
    q: "What is the $2,100 out-of-pocket cap and how does it work?",
    a: "Starting January 1, 2026, Part D has a $2,100 annual out-of-pocket cap on covered drugs. Once you've paid $2,100 in covered drug costs in a calendar year, your plan pays 100% for the rest of the year. This is a major change from prior years when there was no effective cap.",
  },
  {
    q: "What is the Medicare Prescription Payment Plan (M3P)?",
    a: "The M3P lets you spread your out-of-pocket drug costs across monthly installments throughout the year rather than paying large amounts at once. This is especially helpful for people who take expensive specialty drugs early in the year. You must opt in by contacting your Part D plan.",
  },
  {
    q: "Can I change my Part D plan if I'm unhappy with it?",
    a: "Yes, during the Annual Enrollment Period (October 15 through December 7 each year), you can switch to any Part D plan available in your area. Changes take effect January 1. Outside of AEP, you can only change plans if you qualify for a Special Enrollment Period.",
  },
  {
    q: "Does Medicare Advantage include drug coverage?",
    a: "Most Medicare Advantage plans (Medicare Advantage Prescription Drug plans, or MAPDs) include Part D drug coverage. If you enroll in a Medicare Advantage plan that includes drug coverage, you cannot also enroll in a standalone Part D plan.",
  },
  {
    q: "What is Extra Help (Low Income Subsidy)?",
    a: "Extra Help is a federal program that helps people with limited income and resources pay for Part D costs: premiums, deductibles, and copays. In 2026, Extra Help can save you up to $5,300 per year. Eligibility is based on income (up to 150% of the federal poverty level) and resources. Apply through Social Security at SSA.gov.",
  },
];

const howToChooseSteps = [
  {
    step: "1",
    icon: FileText,
    title: "Make a complete list of your medications",
    desc: "Include the exact drug name (generic or brand), dosage, and how often you take it. Don't forget insulin, inhalers, eye drops, and any specialty medications.",
    tip: "Ask your pharmacy to print a complete medication list. They can pull your full fill history.",
  },
  {
    step: "2",
    icon: Search,
    title: "Use Medicare.gov's Plan Finder to compare plans",
    desc: "Enter your ZIP code and medication list at Medicare.gov/plan-compare. The tool will show every plan available in your area, sorted by estimated annual drug cost including premiums, deductibles, and copays for your specific drugs.",
    tip: "Sort by 'Drug + Premium Cost' to see your true annual cost, not just the monthly premium.",
  },
  {
    step: "3",
    icon: Pill,
    title: "Verify your pharmacy is in-network",
    desc: "Part D plans have preferred pharmacy networks. Using a preferred pharmacy can significantly reduce your copays, sometimes by 50% or more. Check that your current pharmacy is in the plan's preferred network, or find a preferred pharmacy near you.",
  },
  {
    step: "4",
    icon: DollarSign,
    title: "Compare total annual cost, not just the premium",
    desc: "A $0-premium plan may cost you more overall if your drugs are on higher tiers. Always compare the estimated total annual cost (premium + deductible + copays for your specific drugs) rather than just the monthly premium.",
    tip: "A plan with a $35/month premium but low copays on your drugs may cost less than a $0-premium plan with high tier copays.",
  },
  {
    step: "5",
    icon: Clock,
    title: "Review your plan every year during AEP",
    desc: "Plans change their formularies, premiums, and pharmacy networks every year. Your plan will send you an Annual Notice of Change (ANOC) in September. Review it carefully and compare alternatives during the Annual Enrollment Period (Oct 15 through Dec 7).",
    tip: "Even if you're happy with your plan, it's worth spending 15 minutes on Medicare.gov's Plan Finder each fall.",
  },
];

function Sidebar() {
  const sections = [
    { id: "what-is-part-d", label: "What Is Part D?" },
    { id: "formulary-tiers", label: "Formulary Tiers" },
    { id: "2000-cap", label: "The $2,100 Cap (2026)" },
    { id: "how-to-choose", label: "How to Choose a Plan" },
    { id: "extra-help", label: "Extra Help / LIS" },
    { id: "late-penalty", label: "Late Enrollment Penalty" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <aside className="hidden xl:block w-72 flex-shrink-0">
      <div className="sticky top-28 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-3">
            <p className="text-white font-bold text-sm" style={{ fontFamily: "'Merriweather', serif" }}>
              On This Page
            </p>
          </div>
          <nav className="p-4 space-y-1" aria-label="Page sections">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#1a3fa8] hover:bg-blue-50 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <Callout type="success" title="2026 Update">
          <p className="text-green-800 text-sm leading-relaxed">
            The <strong>$2,100 out-of-pocket cap</strong> on Part D drugs is now in effect. People on specialty drugs benefit most.
          </p>
        </Callout>

        <Callout type="warning" title="Penalty Warning">
          <p className="text-amber-800 text-sm leading-relaxed">
            Skipping Part D, even if you take no drugs, can result in a <strong>permanent monthly penalty</strong> added to your premium for life.
          </p>
        </Callout>

        <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-[#f5a800] rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
            Find the Right Part D Plan
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            We compare every Part D plan in your ZIP code against your specific drug list to find the lowest total annual cost.
          </p>
          <a
            href="tel:8136995559"
            aria-label="Call MIP at 813-699-5559"
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

export default function UnderstandingPartDClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section
        className="relative h-[420px] md:h-[500px] flex items-center overflow-hidden"
        aria-label="Understanding Medicare Part D hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Older adult reviewing prescription medications"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f5c]/90 via-[#0d1f5c]/70 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/medicare-101" className="hover:text-white transition-colors">New to Medicare</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Understanding Part D</span>
          </nav>
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Drug Coverage Guide
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Understanding Medicare Part D: Prescription Drug Coverage
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            How Part D works, what formulary tiers mean for your costs, the new $2,100 out-of-pocket cap, and how to choose the right plan for your medications.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#0d1f5c] text-white py-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "$2,100", label: "Annual out-of-pocket cap on covered drugs in 2026" },
              { value: "~$36", label: "Average Part D base premium per month in 2026" },
              { value: "1% / mo", label: "Permanent late enrollment penalty per month without coverage" },
              { value: "$5,300", label: "Maximum annual savings from Extra Help (LIS) in 2026" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[#f5a800] text-2xl font-bold" style={{ fontFamily: "'Merriweather', serif" }}>
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-10 items-start">
            <article className="flex-1 min-w-0 space-y-16">

              {/* What Is Part D */}
              <div id="what-is-part-d">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">The Basics</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    What Is Medicare Part D?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Medicare Part D is the prescription drug benefit added to Medicare in 2006. It is provided through private insurance companies approved by Medicare. Part D covers most FDA-approved prescription drugs, though each plan has its own list of covered drugs (called a <strong>formulary</strong>) organized into cost tiers.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You can get Part D coverage two ways: as a <strong>standalone Part D plan</strong> (PDP) paired with Original Medicare, or as part of a <strong>Medicare Advantage Prescription Drug plan</strong> (MAPD) that bundles Parts A, B, and D together.
                  </p>

                  <div className="grid md:grid-cols-2 gap-5 mb-6">
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                        <Pill className="w-5 h-5 text-[#1a3fa8]" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                        Standalone Part D (PDP)
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Pairs with Original Medicare (Parts A + B). You choose a separate drug plan from a private insurer. Works alongside a Medigap supplement plan.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                        <Shield className="w-5 h-5 text-amber-700" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                        Medicare Advantage + Drug (MAPD)
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Most Medicare Advantage plans include Part D drug coverage. If your MA plan includes drugs, you cannot also enroll in a standalone Part D plan.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                      What Part D Covers
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                      {[
                        "FDA-approved prescription drugs",
                        "Biologics and biosimilars",
                        "Insulin and diabetes supplies (some plans)",
                        "Vaccines not covered under Part B",
                        "Oral cancer drugs (if injectable equivalent is covered)",
                        "Smoking cessation medications",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Not covered by Part D</p>
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                        {[
                          "Over-the-counter drugs",
                          "Drugs for weight loss or gain",
                          "Drugs for cosmetic purposes",
                          "Most vitamins and supplements",
                        ].map((item) => (
                          <p key={item} className="text-sm text-gray-400">• {item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Formulary Tiers */}
              <div id="formulary-tiers">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">How Drug Costs Work</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                    Formulary Tiers Explained
                  </h2>
                  <p className="text-gray-500 mb-6 text-sm">
                    Every Part D plan organizes its covered drugs into tiers. The tier determines how much you pay. Lower tiers = lower cost.
                  </p>

                  <div className="space-y-3">
                    {formularyTiers.map((tier, i) => (
                      <motion.div
                        key={tier.tier}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className={`bg-white rounded-2xl border-2 ${tier.borderColor} p-5 shadow-sm`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 ${tier.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}
                            style={{ fontFamily: "'Merriweather', serif" }}
                            aria-hidden="true"
                          >
                            {i + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className="font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                                {tier.name}
                              </h3>
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tier.bgColor} ${tier.textColor}`}>
                                Typical copay: {tier.typicalCopay}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-2">{tier.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {tier.examples.map((ex) => (
                                <span key={ex} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                  {ex}
                                </span>
                              ))}
                            </div>
                            {tier.note && (
                              <div className="mt-2 flex items-start gap-1.5 text-xs text-amber-700">
                                <Star className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {tier.note}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-[#1a3fa8] text-sm mb-1">Formulary Exception Process</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        If your drug is on a high tier or not covered, ask your doctor to file a <strong>formulary exception</strong>. If your doctor documents that a lower-tier alternative is not medically appropriate for you, the plan may cover your drug at a lower tier or at all. You have the right to appeal any denial.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* $2,000 Cap */}
              <div id="2000-cap">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <div className="bg-gradient-to-br from-[#1a3fa8] to-[#0d2870] rounded-2xl p-8 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-[#f5a800] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                          In Effect 2026
                        </div>
                        <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Inflation Reduction Act
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                        The $2,100 Out-of-Pocket Cap
                      </h2>
                      <p className="text-white/85 leading-relaxed mb-6 max-w-2xl">
                        Starting January 1, 2026, there is a <strong>$2,100 annual cap</strong> on what you pay out-of-pocket for covered Part D drugs. Once you've paid $2,100 in a calendar year, your plan covers 100% of your covered drug costs for the rest of the year.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {[
                          { icon: TrendingDown, label: "Old system", desc: "No effective cap. Catastrophic costs were possible for high-cost drug users." },
                          { icon: DollarSign, label: "New cap", desc: "$2,100 maximum out-of-pocket per year on covered drugs." },
                          { icon: CheckCircle2, label: "After the cap", desc: "Plan pays 100% of covered drug costs for the rest of the calendar year." },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.label} className="bg-white/10 rounded-xl p-4">
                              <Icon className="w-5 h-5 text-[#f5a800] mb-2" aria-hidden="true" />
                              <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                              <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="bg-white/10 rounded-xl p-5">
                        <p className="font-bold text-[#f5a800] text-sm mb-2">
                          Medicare Prescription Payment Plan (M3P)
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                          The M3P lets you spread your out-of-pocket drug costs across monthly installments throughout the year. Instead of paying a large amount when you fill an expensive prescription in January, you pay smaller equal amounts each month. <strong>You must opt in</strong> by contacting your Part D plan to enroll.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* How to Choose */}
              <div id="how-to-choose">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Step-by-Step</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    How to Choose the Right Part D Plan
                  </h2>
                  <div className="space-y-4">
                    {howToChooseSteps.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.step} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-5">
                          <div
                            className="w-12 h-12 bg-[#1a3fa8] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
                            style={{ fontFamily: "'Merriweather', serif" }}
                            aria-hidden="true"
                          >
                            {step.step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="w-4 h-4 text-[#1a3fa8]" aria-hidden="true" />
                              <h3 className="font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-2">{step.desc}</p>
                            {step.tip && (
                              <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                                <Star className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <p className="text-amber-800 text-xs leading-relaxed">{step.tip}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Extra Help / LIS */}
              <div id="extra-help">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Financial Assistance</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    Extra Help (Low Income Subsidy)
                  </h2>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-green-600 px-6 py-4">
                      <p className="text-white font-bold text-lg" style={{ fontFamily: "'Merriweather', serif" }}>
                        Extra Help can save you up to $5,300/year on Part D costs
                      </p>
                      <p className="text-white/80 text-sm mt-1">A federal program for people with limited income and resources</p>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What Extra Help Covers</p>
                          <ul className="space-y-2">
                            {[
                              "Most or all of your Part D monthly premium",
                              "Part D annual deductible (up to $590 in 2026)",
                              "Reduced copays as low as $1.10-$11.20 per drug",
                              "No coverage gap or catastrophic phase costs",
                              "Automatic enrollment in a benchmark plan if needed",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">2026 Eligibility (Approximate)</p>
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-xl p-4">
                              <p className="font-bold text-gray-900 text-sm mb-1">Income Limit</p>
                              <p className="text-gray-600 text-sm">
                                Up to approximately $22,590/year (single) or $30,660/year (married), which is 150% of the federal poverty level.
                              </p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                              <p className="font-bold text-gray-900 text-sm mb-1">Resource Limit</p>
                              <p className="text-gray-600 text-sm">
                                Up to approximately $17,220 (single) or $34,360 (married) in countable assets. Your home, car, and personal belongings don't count.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Callout type="info" title="How to Apply">
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Apply online at <strong>SSA.gov</strong>, call Social Security at 1-800-772-1213, or visit your local Social Security office. If you qualify for Medicaid or a Medicare Savings Program, you are automatically eligible for Extra Help.
                        </p>
                      </Callout>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Late Penalty */}
              <div id="late-penalty">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <Callout type="warning" title="Permanent Penalty Warning">
                    <h2 className="text-xl font-bold text-amber-900 mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                      The Part D Late Enrollment Penalty
                    </h2>
                    <p className="text-amber-800 leading-relaxed mb-4">
                      If you go without creditable prescription drug coverage for <strong>63 or more consecutive days</strong> after your Initial Enrollment Period ends, you'll pay a permanent late enrollment penalty for as long as you have Part D coverage.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {[
                        { label: "Penalty amount", value: "1% of the national base beneficiary premium per month without coverage" },
                        { label: "2026 base premium", value: "Approximately $36/month, so the penalty is about $0.36 per month late" },
                        { label: "Duration", value: "Permanent. Added to your premium for life, even if you eventually enroll." },
                      ].map((item) => (
                        <div key={item.label} className="bg-white/70 rounded-xl px-4 py-3">
                          <p className="text-xs font-bold text-amber-700 mb-1">{item.label}</p>
                          <p className="text-sm text-amber-900 leading-snug">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/70 rounded-xl px-5 py-4">
                      <p className="font-bold text-amber-800 text-sm mb-1">Example: 24 months without coverage</p>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        24 months x 1% x $36 = <strong>approximately $8.64/month added to your premium permanently</strong>. Over 10 years, that is over $1,000 in extra costs for a penalty that could have been avoided by enrolling in a $0-premium plan.
                      </p>
                    </div>
                  </Callout>
                </motion.div>
              </div>

              {/* FAQ */}
              <div id="faq">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3">Common Questions</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                    Part D FAQ
                  </h2>
                  <FaqAccordion items={faqs} defaultOpen={null} />
                </motion.div>
              </div>

            </article>

            <Sidebar />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#1a3fa8] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#f5a800] font-bold uppercase tracking-widest text-sm mb-2">Free Drug Plan Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
                Find the lowest-cost plan for your medications.
              </h2>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                Tell us your medications and ZIP code. We'll compare every Part D plan available to you and find the one with the lowest total annual cost: premiums, deductibles, and copays combined.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                aria-label="Call MIP at 813-699-5559 for a free drug plan comparison"
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

      {/* Related Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Merriweather', serif" }}>
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/costs-at-a-glance",
                label: "Costs at a Glance",
                desc: "All 2026 premiums, deductibles, and out-of-pocket limits, including Part D cost details.",
                tag: "Cost Reference",
              },
              {
                href: "/do-i-need-a-supplement",
                label: "Do I Need a Supplement?",
                desc: "If you choose Original Medicare, a Medigap plan covers what Part B doesn't, but not drugs.",
                tag: "Key Decision",
              },
              {
                href: "/original-vs-advantage",
                label: "Original vs. Advantage",
                desc: "Most Medicare Advantage plans include drug coverage. Compare your options before choosing.",
                tag: "Plan Comparison",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a3fa8] mb-3 block">{link.tag}</span>
                <h3
                  className="text-lg font-bold text-gray-900 group-hover:text-[#1a3fa8] mb-2 transition-colors"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
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
