"use client";

/**
 * /coverage/mental-health
 * Design: Navy/gold MIP brand, two-column article + sticky sidebar
 * Coverage FAQ format: Does Medicare cover mental health?
 * Rules: No em dashes, 2026 figures, Brandon-first local signals, compact quick answer banner
 */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Brain,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const planCoverage = [
  {
    plan: "Original Medicare (Parts A & B)",
    status: "partial",
    statusLabel: "Partially Covered",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Original Medicare covers a broad range of mental health services. Part A covers inpatient psychiatric hospital stays (up to 190 lifetime days in a freestanding psychiatric facility, unlimited days in a general hospital). Part B covers outpatient mental health services including therapy, counseling, psychiatric evaluations, and medication management visits: but you pay 20% coinsurance after the Part B deductible.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    status: "covered",
    statusLabel: "Covered + Extras",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medicare Advantage plans must cover everything Original Medicare covers, including mental health services. Many plans offer additional benefits such as lower copays for therapy visits, telehealth mental health sessions, and wellness programs. Network restrictions apply: you typically must use in-network providers.",
  },
  {
    plan: "Medigap (Medicare Supplement)",
    status: "covered",
    statusLabel: "Covers Cost-Sharing",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medigap plans help cover the 20% coinsurance you owe after Original Medicare pays its share for outpatient mental health services. Plan G, for example, covers the Part B coinsurance entirely after the annual deductible. Medigap does not add new mental health benefits: it reduces your out-of-pocket costs for services Medicare already covers.",
  },
  {
    plan: "Medicare Part D",
    status: "covered",
    statusLabel: "Covers Medications",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Part D covers most FDA-approved psychiatric medications including antidepressants, antipsychotics, mood stabilizers, and anti-anxiety medications. These drugs are typically in tiers 2 through 4 on the formulary. The 2026 $2,000 out-of-pocket cap is especially helpful for beneficiaries on specialty psychiatric medications.",
  },
];

const coveredServices = [
  { service: "Individual therapy (psychologist, clinical social worker, therapist)", covered: true },
  { service: "Group therapy sessions", covered: true },
  { service: "Psychiatric evaluation and diagnosis", covered: true },
  { service: "Medication management visits with a psychiatrist", covered: true },
  { service: "Inpatient psychiatric hospital care (Part A)", covered: true },
  { service: "Partial hospitalization programs (PHP)", covered: true },
  { service: "Intensive outpatient programs (IOP)", covered: true },
  { service: "Substance use disorder treatment", covered: true },
  { service: "Annual depression screening (preventive, no cost)", covered: true },
  { service: "Alcohol misuse counseling (preventive, no cost)", covered: true },
  { service: "Telehealth mental health visits", covered: true },
  { service: "Custodial care or long-term residential psychiatric care", covered: false },
  { service: "Marriage counseling or couples therapy", covered: false },
  { service: "Life coaching or non-clinical counseling", covered: false },
];

const faqs = [
  {
    q: "Does Medicare cover therapy with a psychologist?",
    a: "Yes. Medicare Part B covers outpatient therapy with a licensed psychologist, clinical social worker, clinical professional counselor, or marriage and family therapist. You pay 20% coinsurance after the Part B deductible. If you have a Medigap plan, it typically covers that 20%.",
  },
  {
    q: "Does Medicare cover telehealth mental health visits?",
    a: "Yes. Following changes made during and after the COVID-19 public health emergency, Medicare permanently expanded telehealth coverage for mental health services. You can receive therapy and psychiatric care via video visit from your home. Your provider must be enrolled in Medicare and use an approved telehealth platform.",
  },
  {
    q: "How many therapy sessions does Medicare cover per year?",
    a: "Medicare does not impose a hard annual limit on outpatient mental health visits. You can receive as many medically necessary sessions as your provider documents. However, you pay 20% coinsurance for each visit (after the deductible), so costs can add up without a Medigap plan.",
  },
  {
    q: "Does Medicare cover inpatient psychiatric care?",
    a: "Yes, with an important limitation. Part A covers inpatient psychiatric care in a general hospital with no day limit. However, care in a freestanding psychiatric hospital is limited to 190 lifetime days. Once you exhaust those 190 days, Medicare will not cover additional inpatient psychiatric hospital stays: though general hospital stays remain covered.",
  },
  {
    q: "Does Medicare cover substance use disorder treatment?",
    a: "Yes. Medicare covers opioid treatment programs (OTPs), substance use disorder counseling, and medication-assisted treatment (MAT) including methadone and buprenorphine. Coverage includes both inpatient and outpatient treatment settings.",
  },
  {
    q: "What is the Medicare mental health parity rule?",
    a: "The Mental Health Parity and Addiction Equity Act requires Medicare to cover mental health and substance use disorder services at the same level as medical and surgical services. This means your cost-sharing for mental health visits cannot be higher than for comparable medical visits. If you believe your plan is violating parity, you have the right to appeal.",
  },
];

const tocItems = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "plan-coverage", label: "Coverage by Plan Type" },
  { id: "covered-services", label: "What Is and Is Not Covered" },
  { id: "costs", label: "Your Costs in 2026" },
  { id: "local", label: "Brandon and Tampa Area" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function MentalHealthClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0d2d6b] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-blue-200 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/coverage-qa" className="hover:text-white transition-colors">Coverage Q&A</Link>
            <span>/</span>
            <span className="text-white">Mental Health</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Mental Health Coverage
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Does Medicare Cover Mental Health?
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Medicare covers a wide range of mental health services: but cost-sharing can be significant without the right supplemental coverage.
          </p>

          {/* Quick Answer Banner: compact inline style */}
          <div
            id="quick-answer"
            className="flex items-start gap-3 px-5 py-4 rounded-xl border max-w-2xl"
            style={{ background: "#fffbeb", borderColor: "#fcd34d" }}
          >
            <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1 text-amber-700">
                Quick Answer: Partially Covered
              </p>
              <p className="text-sm font-semibold leading-snug text-amber-800">
                Medicare covers most outpatient and inpatient mental health services. You pay 20% coinsurance after the Part B deductible. A Medigap plan can eliminate that cost-sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Article */}
            <article className="min-w-0">

              {/* Coverage by Plan Type */}
              <div id="plan-coverage" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Coverage by Plan Type
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  How mental health coverage works under each Medicare plan type.
                </p>
                <div className="space-y-4">
                  {planCoverage.map((item) => (
                    <motion.div
                      key={item.plan}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`border rounded-2xl p-5 ${item.color}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'Merriweather', serif" }}>
                          {item.plan}
                        </h3>
                        <span className={`${item.badgeColor} text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap`}>
                          {item.statusLabel}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Covered Services */}
              <div id="covered-services" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  What Is and Is Not Covered
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  A complete list of mental health services under Original Medicare.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {coveredServices.map((item) => (
                    <div
                      key={item.service}
                      className={`flex items-start gap-3 p-4 rounded-xl border ${
                        item.covered
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      {item.covered ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <p className={`text-sm leading-snug ${item.covered ? "text-gray-700" : "text-gray-600"}`}>
                        {item.service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Costs in 2026 */}
              <div id="costs" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Your Costs for Mental Health in 2026
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  What you can expect to pay under Original Medicare for mental health services.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0d2d6b] text-white">
                        <th className="text-left px-4 py-3 font-semibold">Service</th>
                        <th className="text-left px-4 py-3 font-semibold">What Medicare Pays</th>
                        <th className="text-left px-4 py-3 font-semibold">What You Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { service: "Outpatient therapy visit", medicare: "80% after deductible", you: "20% coinsurance + $257 deductible" },
                        { service: "Psychiatric evaluation", medicare: "80% after deductible", you: "20% coinsurance" },
                        { service: "Medication management visit", medicare: "80% after deductible", you: "20% coinsurance" },
                        { service: "Annual depression screening", medicare: "100%", you: "$0 (preventive)" },
                        { service: "Alcohol misuse counseling", medicare: "100%", you: "$0 (preventive)" },
                        { service: "Inpatient psychiatric (general hospital)", medicare: "Per Part A benefit period", you: "$1,676 deductible per benefit period" },
                        { service: "Partial hospitalization program", medicare: "80% after deductible", you: "20% coinsurance per day" },
                      ].map((row, i) => (
                        <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-medium text-gray-800">{row.service}</td>
                          <td className="px-4 py-3 text-gray-700">{row.medicare}</td>
                          <td className="px-4 py-3 text-gray-700">{row.you}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-blue-900 mb-1">Medigap Eliminates the 20% Coinsurance</p>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      If you have Original Medicare plus a Medigap Plan G, your 20% coinsurance for outpatient mental health visits is covered entirely after the annual Part B deductible ($257 in 2026). For someone attending weekly therapy, this can save over $1,000 per year.{" "}
                      <Link href="/do-i-need-a-supplement" className="underline font-medium hover:text-blue-900">
                        Learn more about Medigap plans.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Cross-link callout */}
              <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
                <p className="font-bold text-amber-900 mb-2">Other Coverage Gaps to Know About</p>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Mental health is one of the few areas where Original Medicare provides meaningful coverage. Dental, vision, and hearing are not covered at all.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/coverage/dental" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                    <ArrowRight className="w-4 h-4" /> Does Medicare Cover Dental?
                  </Link>
                  <Link href="/coverage/vision" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                    <ArrowRight className="w-4 h-4" /> Does Medicare Cover Vision?
                  </Link>
                  <Link href="/coverage/hearing-aids" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                    <ArrowRight className="w-4 h-4" /> Does Medicare Cover Hearing Aids?
                  </Link>
                </div>
              </div>

              {/* Local Section */}
              <div id="local" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Mental Health Coverage in Brandon and the Tampa Bay Area
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  Local guidance for Hillsborough County and surrounding communities.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#0d2d6b] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="font-bold text-[#0d2d6b]">Serving Brandon, Tampa, Riverview, Valrico, and Hillsborough County</p>
                  </div>
                  <div className="prose prose-sm prose-gray max-w-none text-gray-700 space-y-3">
                    <p>
                      Brandon and the greater Tampa Bay area have a growing network of Medicare-accepting mental health providers, including therapists, psychologists, and psychiatrists affiliated with BayCare Health System, AdventHealth, and HCA Florida Brandon Hospital. Telehealth has significantly expanded access for residents in Riverview, Valrico, and other Hillsborough County communities who may have limited local provider options.
                    </p>
                    <p>
                      If you are choosing between Original Medicare with a Medigap plan versus a Medicare Advantage plan for mental health coverage, the key question is whether your current therapist or psychiatrist accepts the plan. Many mental health providers in the Brandon and Tampa area accept Original Medicare but may not be in every Advantage plan's network.
                    </p>
                    <p>
                      Greg Wohl and the MIP team help Brandon and Tampa Bay area residents compare plans with their specific providers in mind. Call (813) 742-8888 for a no-cost consultation.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  Common questions about Medicare mental health coverage.
                </p>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={openFaq === i}
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        {openFaq === i
                          ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        }
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline CTA */}
              <div className="bg-[#0d2d6b] rounded-2xl px-6 py-8 text-white text-center">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Questions About Your Mental Health Coverage?
                </h3>
                <p className="text-blue-200 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
                  Whether you are choosing between Original Medicare and Medicare Advantage, or trying to reduce your therapy costs with a Medigap plan, Greg Wohl can help you find the right fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+18137428888"
                    className="inline-flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-[#0d2d6b] font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (813) 742-8888
                  </a>
                  <Link
                    href="/medicare-quiz"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Take the Medicare Quiz
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* TOC */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">On This Page</p>
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-[#0d2d6b] hover:font-medium transition-colors py-1"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Agent CTA */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f5a800]">
                      <img src={GREG_PHOTO} alt="Greg Wohl" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Greg Wohl</p>
                      <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#f5a800] text-[#f5a800]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="tel:+18137428888"
                    className="flex items-center justify-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-3 rounded-xl transition-colors w-full mb-3 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    (813) 742-8888
                  </a>
                  <Link
                    href="/medicare-quiz"
                    className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2.5 rounded-xl transition-colors w-full text-sm"
                  >
                    Take the Medicare Quiz
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Related Pages */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Related Pages</p>
                  <div className="space-y-2">
                    {[
                      { label: "Do I Need a Medigap Plan?", href: "/do-i-need-a-supplement" },
                      { label: "Does Medicare Cover Prescription Drugs?", href: "/coverage/prescription-drugs" },
                      { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
                      { label: "Medicare Costs at a Glance", href: "/costs-at-a-glance" },
                      { label: "Coverage Q&A Hub", href: "/coverage-qa" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d2d6b] hover:font-medium transition-colors py-1 border-b border-gray-50 last:border-0"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#f5a800] flex-shrink-0" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="bg-[#0d2d6b] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Get Help Understanding Your Mental Health Benefits
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            The right plan depends on your providers, your medications, and your budget. Greg Wohl helps Brandon and Tampa Bay area residents find the plan that covers their needs at the lowest cost.
          </p>
          <a
            href="tel:+18137428888"
            className="inline-flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-[#0d2d6b] font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (813) 742-8888
          </a>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}
