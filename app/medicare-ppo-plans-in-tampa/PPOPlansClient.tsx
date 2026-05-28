"use client";

/* ==========================================================================
   PPOPlansClient: /medicare-ppo-plans-in-tampa
   Medicare PPO Plans in Tampa, FL: Comprehensive Guide
   Design: MIP brand: navy/gold, pillar-style two-column editorial layout
   No em dashes anywhere in this file.
   All cost figures are 2026.
   Brandon listed first in local signals.
   ========================================================================== */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  ChevronRight,
  Phone,
  ArrowRight,
  Info,
  AlertCircle,
  MapPin,
  Shield,
  DollarSign,
  Globe,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

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
          <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
        </div>
      )}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROS = [
  { title: "No referrals required", desc: "See any specialist directly without needing approval from a primary care doctor first." },
  { title: "Out-of-network access", desc: "You can see doctors outside the plan network, though at a higher cost share." },
  { title: "Great for frequent travelers", desc: "PPO plans are ideal if you split time between Florida and another state, or travel regularly." },
  { title: "Broad provider choice", desc: "Access a wide network of doctors, hospitals, and specialists in the Tampa Bay area and beyond." },
  { title: "Extra benefits included", desc: "Most 2026 PPO plans in Tampa include dental, vision, hearing, and fitness benefits." },
];

const CONS = [
  { title: "Higher premiums than HMO", desc: "The flexibility of a PPO typically comes with a higher monthly premium than comparable HMO plans." },
  { title: "Out-of-network costs add up", desc: "Using out-of-network providers is allowed but can result in significantly higher cost sharing." },
  { title: "More complex cost structure", desc: "In-network vs. out-of-network deductibles and coinsurance rates can be confusing to navigate." },
  { title: "Not always $0 premium", desc: "Unlike many HMO plans, PPO plans in Tampa may carry a monthly premium even after Part B." },
  { title: "Formulary still applies", desc: "Prescription drug coverage follows a plan formulary: your specific medications may cost more on some plans." },
];

const COMPARISON_ROWS = [
  { feature: "Referrals required", ppo: "No", hmo: "Yes (usually)" },
  { feature: "Out-of-network care", ppo: "Yes (higher cost)", hmo: "No (emergencies only)" },
  { feature: "Primary care doctor required", ppo: "No", hmo: "Yes" },
  { feature: "Typical monthly premium", ppo: "$0 to $80+", hmo: "$0 (most plans)" },
  { feature: "Best for travelers", ppo: "Yes", hmo: "Limited" },
  { feature: "Network size", ppo: "Large", hmo: "Moderate" },
];

const FAQ_ITEMS = [
  {
    q: "What is the difference between a Medicare PPO and an HMO?",
    a: "The main difference is flexibility. A PPO allows you to see any doctor or specialist without a referral and gives you the option to use out-of-network providers. An HMO requires you to stay within a network and usually requires referrals to see specialists. PPOs typically cost more in premiums but offer more freedom of choice.",
  },
  {
    q: "Can I see a specialist without a referral on a Medicare PPO plan?",
    a: "Yes. One of the defining features of a Medicare PPO plan is that you do not need a referral to see a specialist. You can make an appointment directly with any specialist in the plan network, or even out of network, though out-of-network visits will cost more.",
  },
  {
    q: "Are Medicare PPO plans available in Brandon and Tampa in 2026?",
    a: "Yes. Multiple carriers offer Medicare Advantage PPO plans in Hillsborough County for 2026, including options with $0 premiums and built-in drug coverage. Plan availability and benefits vary by ZIP code. A licensed agent can show you all plans available at your specific address.",
  },
  {
    q: "Do Medicare PPO plans cover care when I travel?",
    a: "Yes. Because PPO plans allow out-of-network care, you can receive covered services from any Medicare-approved provider anywhere in the United States, not just within your local network. This makes PPO plans a strong choice for retirees who travel or spend part of the year in another state.",
  },
  {
    q: "What does a Medicare PPO plan cost in 2026?",
    a: "Costs vary by plan. Some PPO plans in the Tampa Bay area have $0 monthly premiums, while others charge $30 to $80 or more per month. All plans still require you to pay your Medicare Part B premium ($185/month in 2026). You will also have copays, coinsurance, and a maximum out-of-pocket limit that caps your annual exposure.",
  },
  {
    q: "How do I enroll in a Medicare PPO plan in Tampa?",
    a: "You can enroll during your Initial Enrollment Period (the 7-month window around your 65th birthday), during the Annual Election Period (October 15 to December 7 each year), or during a Special Enrollment Period if you qualify. A licensed Medicare advisor can help you compare all available PPO plans in your ZIP code and enroll at no cost to you.",
  },
];

const RELATED_LINKS = [
  { label: "Medicare HMO Plans", href: "/plan-types/hmo", desc: "Network-based coverage with lower premiums" },
  { label: "Medicare Advantage Overview", href: "/medicare-advantage", desc: "Complete guide to all Medicare Advantage plan types" },
  { label: "Original vs. Medicare Advantage", href: "/original-vs-advantage", desc: "Side-by-side comparison to help you decide" },
  { label: "Medicare Costs at a Glance", href: "/costs-at-a-glance", desc: "2026 premiums, deductibles, and coinsurance" },
  { label: "Take the Medicare Quiz", href: "/medicare-quiz", desc: "Find out which plan type fits your situation" },
];

const TOC = [
  { id: "what-is", label: "What Is a Medicare PPO?" },
  { id: "how-it-works", label: "How PPO Plans Work" },
  { id: "pros-cons", label: "Pros and Cons" },
  { id: "ppo-vs-hmo", label: "PPO vs. HMO" },
  { id: "costs", label: "2026 Costs" },
  { id: "right-for-you", label: "Is a PPO Right for You?" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "tampa", label: "PPO Plans in Brandon and Tampa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PPOPlansClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d1f5c] text-white pt-12 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/medicare-advantage" className="hover:text-white transition-colors">Medicare Advantage</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">PPO Plans</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Shield size={12} />
            Medicare Advantage Plan Type
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
            Medicare PPO Plans in Tampa, FL
          </h1>
          <p className="text-white/80 text-base max-w-2xl mb-6">
            Preferred Provider Organization plans give you the freedom to see any doctor or specialist without a referral: and even use out-of-network providers. Here is everything you need to know about Medicare PPO plans available in Brandon, Tampa, and Hillsborough County in 2026.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>Updated for 2026</span>
            <span>|</span>
            <span>Reviewed by Greg Wohl, Licensed Medicare Advisor</span>
            <span>|</span>
            <span>8 min read</span>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { icon: <DollarSign size={16} />, stat: "$0+", label: "Monthly premium range" },
              { icon: <Globe size={16} />, stat: "No referrals", label: "See any specialist directly" },
              { icon: <Shield size={16} />, stat: "Out-of-network", label: "Care allowed (higher cost)" },
              { icon: <Users size={16} />, stat: "MOOP cap", label: "Annual out-of-pocket limit" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <div className="flex justify-center mb-1 text-[#c9a84c]">{item.icon}</div>
                <p className="text-lg font-black text-white">{item.stat}</p>
                <p className="text-xs text-white/60 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-12 w-full flex flex-col lg:flex-row gap-10">

        {/* Article */}
        <article className="flex-1 min-w-0 space-y-10">

          {/* What Is a Medicare PPO */}
          <section id="what-is">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              What Is a Medicare PPO Plan?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A Medicare PPO plan is a type of Medicare Advantage (Part C) plan offered by private insurance companies approved by Medicare. PPO stands for Preferred Provider Organization. Like all Medicare Advantage plans, a PPO replaces your Original Medicare (Parts A and B) and usually includes prescription drug coverage (Part D) as well.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              What sets a PPO apart from other plan types is flexibility. You are not required to choose a primary care doctor, you do not need referrals to see specialists, and you can receive care from providers outside the plan network: though staying in-network will cost you less.
            </p>
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 flex items-start gap-3">
              <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 leading-relaxed">
                Medicare PPO plans must cover everything Original Medicare covers, plus they often include extra benefits like dental, vision, hearing, and fitness programs. In 2026, most PPO plans in Hillsborough County include drug coverage with no separate Part D premium.
              </p>
            </div>
          </section>

          {/* How PPO Plans Work */}
          <section id="how-it-works">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              How Medicare PPO Plans Work
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: "1", title: "Choose any doctor", desc: "No primary care doctor requirement. See any Medicare-approved provider in or out of network." },
                { step: "2", title: "See specialists directly", desc: "No referral needed. Make an appointment with any specialist without going through a gatekeeper." },
                { step: "3", title: "Pay based on network status", desc: "In-network visits cost less. Out-of-network visits are covered but at a higher cost share." },
              ].map((s) => (
                <div key={s.step} className="rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="w-8 h-8 rounded-full bg-[#0d1f5c] text-white text-sm font-black flex items-center justify-center mb-3">{s.step}</div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-green-100 bg-green-50 px-5 py-4 flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-800 leading-relaxed">
                Emergency care is always covered at in-network rates, regardless of where you are in the United States. This is especially important for Tampa Bay residents who travel or spend time in other states.
              </p>
            </div>
          </section>

          {/* Pros and Cons */}
          <section id="pros-cons">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              Pros and Cons of Medicare PPO Plans
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-green-100 bg-green-50 p-5">
                <p className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle size={15} /> Advantages
                </p>
                <ul className="space-y-3">
                  {PROS.map((p) => (
                    <li key={p.title}>
                      <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle size={15} /> Disadvantages
                </p>
                <ul className="space-y-3">
                  {CONS.map((c) => (
                    <li key={c.title}>
                      <p className="text-sm font-semibold text-gray-900">{c.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PPO vs HMO */}
          <section id="ppo-vs-hmo">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              PPO vs. HMO: Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d1f5c] text-white">
                    <th className="text-left px-5 py-3 font-bold">Feature</th>
                    <th className="text-left px-5 py-3 font-bold text-[#c9a84c]">PPO Plan</th>
                    <th className="text-left px-5 py-3 font-bold">HMO Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-semibold text-gray-800">{row.feature}</td>
                      <td className="px-5 py-3 text-green-700 font-medium">{row.ppo}</td>
                      <td className="px-5 py-3 text-gray-600">{row.hmo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 flex items-start gap-3">
              <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                Neither plan type is universally better. The right choice depends on your doctors, your health needs, and how much you value flexibility vs. lower premiums. A licensed advisor can compare both options side by side for your specific situation.
              </p>
            </div>
          </section>

          {/* 2026 Costs */}
          <section id="costs">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              Medicare PPO Plan Costs in 2026
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              PPO plan costs vary by carrier and plan. The figures below represent typical ranges for Medicare PPO plans available in Hillsborough County in 2026. All enrollees must continue paying their Medicare Part B premium ($185/month in 2026) in addition to any plan premium.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d1f5c] text-white">
                    <th className="text-left px-5 py-3 font-bold">Cost Item</th>
                    <th className="text-left px-5 py-3 font-bold">In-Network</th>
                    <th className="text-left px-5 py-3 font-bold hidden sm:table-cell">Out-of-Network</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Monthly Plan Premium", inNet: "$0 to $80+ (plan varies)", outNet: "Same premium applies" },
                    { item: "Part B Premium (required)", inNet: "$185/month (2026)", outNet: "$185/month (2026)" },
                    { item: "Annual Deductible", inNet: "$0 to $500 (plan varies)", outNet: "Separate higher deductible" },
                    { item: "Primary Care Visit", inNet: "$0 to $20 copay", outNet: "20% to 40% coinsurance" },
                    { item: "Specialist Visit", inNet: "$20 to $50 copay", outNet: "Higher coinsurance" },
                    { item: "Max Out-of-Pocket (MOOP)", inNet: "Up to $9,350 (2026 limit)", outNet: "Separate higher MOOP" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-semibold text-gray-800">{row.item}</td>
                      <td className="px-5 py-3 text-gray-700">{row.inNet}</td>
                      <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{row.outNet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Source: Centers for Medicare and Medicaid Services, 2026. Actual plan costs vary by carrier. For a full cost comparison, see our <Link href="/costs-at-a-glance" className="text-blue-700 underline hover:text-blue-900">Medicare Costs at a Glance</Link> page.
            </p>
          </section>

          {/* Is a PPO Right for You */}
          <section id="right-for-you">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              Is a Medicare PPO Plan Right for You?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              A Medicare PPO plan is a strong fit if any of the following apply to your situation:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { good: true, text: "You want to see specialists without getting a referral first" },
                { good: true, text: "You travel frequently or spend time in multiple states" },
                { good: true, text: "You have established relationships with specific doctors you want to keep" },
                { good: true, text: "You want the option to see out-of-network providers if needed" },
                { good: true, text: "You prefer not to be restricted to a single network" },
                { good: false, text: "You want the lowest possible monthly premium (HMO may be better)" },
                { good: false, text: "You are comfortable with a primary care gatekeeper model" },
                { good: false, text: "All your preferred doctors are already in a strong HMO network" },
              ].map((item) => (
                <div key={item.text} className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${item.good ? "border-green-100 bg-green-50" : "border-red-100 bg-red-50"}`}>
                  {item.good
                    ? <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                    : <XCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />}
                  <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 flex items-start gap-3">
              <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Not sure which plan type fits you best?</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Take our free <Link href="/medicare-quiz" className="text-[#0d1f5c] font-semibold underline hover:no-underline">Medicare Quiz</Link> to get a personalized recommendation, or compare PPO and HMO plans side by side on our <Link href="/original-vs-advantage" className="text-[#0d1f5c] font-semibold underline hover:no-underline">Original vs. Advantage</Link> page.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* Local Section: Brandon and Tampa */}
          <section id="tampa">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Medicare PPO Plans in Brandon and Tampa, FL
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Brandon and Tampa residents have access to a competitive Medicare Advantage PPO market in 2026. Hillsborough County is one of the most active Medicare plan markets in Florida, with multiple carriers offering PPO options that include $0 premiums, built-in drug coverage, and extra benefits like dental, vision, and hearing.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              PPO plans are especially popular among Brandon and Tampa residents who want to keep seeing their current doctors at Tampa General Hospital, AdventHealth Tampa, St. Joseph's Hospital, or HCA Florida Brandon Hospital without being locked into a narrow HMO network. Because PPO plans allow out-of-network access, they also work well for retirees who travel to visit family or spend part of the year in another state.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Plan availability and benefits vary by ZIP code. The best PPO plan for a Brandon resident may differ from the best option for someone in South Tampa or Riverview. A licensed local advisor can pull every plan available at your specific address and compare them side by side at no cost to you.
            </p>
            <div className="rounded-xl border border-[#c9a84c]/30 bg-[#fdf8ee] px-5 py-4 flex items-start gap-3">
              <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Serving Brandon, Tampa, and Hillsborough County</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Greg Wohl and the Medicare Information Pro team serve beneficiaries throughout Brandon, Tampa, Riverview, Valrico, Apollo Beach, Sun City Center, Plant City, and surrounding Hillsborough County communities. Consultations are free and available by phone or in person.
                </p>
                <a href="tel:+18137428888" className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-[#0d1f5c] hover:underline">
                  <Phone size={13} />
                  Call (813) 742-8888
                </a>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <div className="rounded-2xl bg-[#0d1f5c] text-white px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-lg font-bold mb-1">Ready to Compare PPO Plans in Your Area?</p>
              <p className="text-sm text-white/70">A licensed Medicare specialist can show you every PPO plan available at your address: at no cost to you.</p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <a
                href="tel:+18137428888"
                className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <Phone size={15} />
                (813) 742-8888
              </a>
              <Link
                href="/medicare-quiz"
                className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Take the Medicare Quiz
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6 lg:sticky lg:top-6 lg:self-start">

          {/* TOC */}
          <div className="rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">On This Page</p>
            <nav className="space-y-1">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 hover:text-[#0d1f5c] hover:font-semibold py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Agent CTA */}
          <div className="rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#c9a84c]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png"
                  alt="Greg Wohl"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Greg Wohl</p>
                <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#c9a84c] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="tel:+18137428888"
              className="flex items-center justify-center gap-2 w-full bg-[#0d1f5c] hover:bg-[#162a7a] text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors mb-2"
            >
              <Phone size={14} />
              (813) 742-8888
            </a>
            <Link
              href="/medicare-quiz"
              className="flex items-center justify-center gap-2 w-full border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm px-4 py-3 rounded-xl transition-colors"
            >
              Take the Medicare Quiz
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Related Links */}
          <div className="rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Related Pages</p>
            <div className="space-y-3">
              {RELATED_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block group">
                  <p className="text-sm font-semibold text-[#0d1f5c] group-hover:underline">{link.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </aside>
      </div>

      {/* Bottom CTA Band */}
      <section className="bg-[#0d1f5c] text-white py-14 px-4 mt-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-black mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Get a Free PPO Plan Comparison
          </p>
          <p className="text-white/70 text-sm mb-6 max-w-xl mx-auto">
            See every Medicare PPO plan available in Brandon, Tampa, and Hillsborough County for 2026. No cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18137428888"
              className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              <Phone size={16} />
              Call (813) 742-8888
            </a>
            <Link
              href="/medicare-quiz"
              className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl transition-colors"
            >
              Take the Medicare Quiz
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
