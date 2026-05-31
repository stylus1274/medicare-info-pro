"use client";

/**
 * /coverage/prescription-drugs
 * Design: Navy/gold MIP brand, two-column article + sticky sidebar
 * Coverage FAQ format: Does Medicare cover prescription drugs?
 * Rules: No em dashes, 2026 figures, Brandon-first local signals, Greg's photo object-top
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
  Pill,
  DollarSign,
  FileText,
  Info,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GREG_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const planCoverage = [
  {
    plan: "Original Medicare (Parts A & B)",
    status: "partial",
    statusLabel: "Limited",
    color: "bg-amber-100 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Original Medicare does not cover most outpatient prescription drugs. Part A covers drugs administered during a hospital stay (IV medications, anesthesia). Part B covers a narrow set of drugs given in a clinical setting, such as chemotherapy infusions, dialysis drugs, and certain injectable medications administered by a provider.",
  },
  {
    plan: "Medicare Part D",
    status: "covered",
    statusLabel: "Covered",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Part D is the dedicated prescription drug benefit. It is available as a standalone Prescription Drug Plan (PDP) added to Original Medicare, or bundled into a Medicare Advantage plan. Part D covers most FDA-approved prescription drugs organized into tiers, each with different cost-sharing. You must enroll in a Part D plan or face a permanent late enrollment penalty.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    status: "covered",
    statusLabel: "Usually Included",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Most Medicare Advantage plans include Part D drug coverage (called MAPD plans). If your Advantage plan includes drug coverage, you do not need a separate Part D plan. A small number of Advantage plans do not include drug coverage: in that case you can enroll in a standalone PDP.",
  },
  {
    plan: "Medigap (Medicare Supplement)",
    status: "not",
    statusLabel: "Not Covered",
    color: "bg-red-50 border-red-300",
    badgeColor: "bg-red-600",
    details:
      "Medigap plans do not cover prescription drugs. If you have Original Medicare plus a Medigap plan, you need to enroll in a separate standalone Part D plan to get drug coverage. Medigap plans sold after January 1, 2006 are prohibited from including drug coverage.",
  },
];

const tiers = [
  { tier: "Tier 1", type: "Preferred Generic", cost: "$0 to $5 copay", examples: "Metformin, lisinopril, atorvastatin (generic)" },
  { tier: "Tier 2", type: "Generic", cost: "$5 to $15 copay", examples: "Most common generic drugs" },
  { tier: "Tier 3", type: "Preferred Brand", cost: "$35 to $47 copay", examples: "Brand-name drugs with generic alternatives" },
  { tier: "Tier 4", type: "Non-Preferred Brand", cost: "$60 to $100 copay", examples: "Brand-name drugs without generic alternatives" },
  { tier: "Tier 5", type: "Specialty", cost: "25% to 33% coinsurance", examples: "Biologics, cancer drugs, MS medications" },
];

const faqs = [
  {
    q: "Do I have to enroll in Part D?",
    a: "Part D is technically optional, but if you go 63 or more consecutive days without creditable drug coverage after becoming eligible, you will face a permanent late enrollment penalty when you do enroll. The penalty is 1% of the national base beneficiary premium for each month you went without coverage, added to your monthly Part D premium for as long as you have it.",
  },
  {
    q: "What is the Part D deductible in 2026?",
    a: "The maximum Part D deductible in 2026 is $590. Not all plans charge the full deductible: some plans waive it for lower-tier drugs. Check the specific plan's Evidence of Coverage for exact deductible amounts.",
  },
  {
    q: "What is the Part D out-of-pocket cap in 2026?",
    a: "Starting in 2026, the Medicare Part D out-of-pocket cap is $2,000 per year. Once you reach this amount in true out-of-pocket costs, you pay $0 for covered drugs for the rest of the year. This is a major improvement from prior years and eliminates the coverage gap (donut hole) that previously existed.",
  },
  {
    q: "Can I change my Part D plan?",
    a: "Yes. You can change your Part D plan during the Annual Enrollment Period (AEP), which runs October 15 through December 7 each year. Changes take effect January 1. If you have a Medicare Advantage plan with drug coverage, you can also make one change during the Medicare Advantage Open Enrollment Period (January 1 through March 31).",
  },
  {
    q: "What if my drug is not on my plan's formulary?",
    a: "You can request a formulary exception from your plan, asking them to cover the drug at a lower cost-sharing tier. Your doctor must provide a statement explaining why the formulary drug is not appropriate for your condition. You can also appeal a coverage denial. An independent agent can help you find a plan whose formulary includes your specific medications.",
  },
  {
    q: "Does Medicare cover insulin?",
    a: "Yes. Under the Inflation Reduction Act, Medicare Part D plans are required to cap insulin cost-sharing at $35 per month per covered insulin product. This applies to all Part D plans and Medicare Advantage plans with drug coverage.",
  },
];

const tocItems = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "plan-coverage", label: "Coverage by Plan Type" },
  { id: "part-d-explained", label: "How Part D Works" },
  { id: "tiers", label: "Drug Tiers and Costs" },
  { id: "2026-changes", label: "2026 Changes" },
  { id: "local", label: "Brandon and Tampa Area" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function PrescriptionDrugsClient() {
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
            <span className="text-white">Prescription Drugs</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Prescription Coverage
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Does Medicare Cover Prescription Drugs?
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Original Medicare covers very few outpatient drugs. Part D fills that gap: but enrollment timing and plan selection matter significantly for your costs.
          </p>

          {/* Quick Answer Banner */}
          <div
            id="quick-answer"
            className="flex items-start gap-3 px-5 py-4 rounded-xl border max-w-2xl"
            style={{ background: "#fff0f0", borderColor: "#fca5a5" }}
          >
            <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1 text-red-600">
                Quick Answer: Not Covered
              </p>
              <p className="text-sm font-semibold leading-snug text-red-700">
                Original Medicare does NOT cover most outpatient prescription drugs. You need Part D or a Medicare Advantage plan with drug coverage.
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
                  How prescription drug coverage works under each type of Medicare plan.
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

              {/* How Part D Works */}
              <div id="part-d-explained" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  How Medicare Part D Works
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  Part D is the Medicare prescription drug benefit, available since 2006.
                </p>
                <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Medicare Part D is a voluntary prescription drug benefit offered through private insurance companies that contract with Medicare. Plans vary by premium, deductible, formulary (list of covered drugs), and pharmacy network. Every Part D plan must cover at least two drugs in each drug category, but the specific drugs and cost-sharing tiers differ between plans.
                  </p>
                  <p>
                    Part D plans use a formulary: a tiered list of covered drugs. Each tier has a different cost-sharing amount. Generic drugs are typically in lower tiers with lower copays, while specialty drugs are in higher tiers with higher coinsurance. Before enrolling, you should verify that your specific medications are on the plan's formulary and check which tier they fall in.
                  </p>
                  <p>
                    The Part D late enrollment penalty applies if you go 63 or more consecutive days without creditable drug coverage after your Initial Enrollment Period ends. The penalty is 1% of the national base beneficiary premium for each month without coverage, added permanently to your monthly Part D premium. At 2026 rates, even a 12-month gap adds roughly $3.70 per month: permanently.
                  </p>
                </div>

                {/* Late penalty callout */}
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-amber-900 mb-1">The Late Enrollment Penalty Is Permanent</p>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Unlike a one-time fee, the Part D penalty is added to your monthly premium for as long as you have Part D coverage. Enrolling on time: or maintaining creditable coverage through an employer plan: is the only way to avoid it. See the full{" "}
                      <Link href="/enrollment-timeline#penalty-partd" className="underline font-medium hover:text-amber-900">
                        Part D penalty explanation
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Drug Tiers */}
              <div id="tiers" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Drug Tiers and Typical Costs
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  Most Part D plans use a five-tier formulary structure. Costs vary by plan.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0d2d6b] text-white">
                        <th className="text-left px-4 py-3 font-semibold">Tier</th>
                        <th className="text-left px-4 py-3 font-semibold">Drug Type</th>
                        <th className="text-left px-4 py-3 font-semibold">Typical Cost</th>
                        <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tiers.map((row, i) => (
                        <tr key={row.tier} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-bold text-[#0d2d6b]">{row.tier}</td>
                          <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                          <td className="px-4 py-3 text-gray-700">{row.cost}</td>
                          <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{row.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-2">Costs are typical ranges. Actual amounts depend on your specific plan. Always verify your drug's tier before enrolling.</p>
              </div>

              {/* 2026 Changes */}
              <div id="2026-changes" className="mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Key 2026 Part D Changes
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  The Inflation Reduction Act made significant changes to Part D that took full effect in 2026.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: DollarSign,
                      title: "$2,000 Out-of-Pocket Cap",
                      desc: "Starting in 2026, your annual out-of-pocket costs for Part D are capped at $2,000. Once you reach this limit, you pay $0 for covered drugs for the rest of the year. This eliminates the catastrophic coverage phase.",
                      color: "bg-green-50 border-green-200",
                      iconColor: "text-green-600",
                    },
                    {
                      icon: Pill,
                      title: "$35 Insulin Cap",
                      desc: "All Part D plans must cap insulin cost-sharing at $35 per month per covered insulin product. This applies regardless of which coverage phase you are in.",
                      color: "bg-blue-50 border-blue-200",
                      iconColor: "text-blue-600",
                    },
                    {
                      icon: FileText,
                      title: "Medicare Prescription Payment Plan",
                      desc: "Beneficiaries can now opt into a payment plan that spreads their out-of-pocket drug costs evenly across the year rather than paying large amounts at the start of the year when deductibles apply.",
                      color: "bg-purple-50 border-purple-200",
                      iconColor: "text-purple-600",
                    },
                    {
                      icon: Info,
                      title: "$590 Maximum Deductible",
                      desc: "The maximum Part D deductible in 2026 is $590. Not all plans charge the maximum: some plans waive the deductible for lower-tier drugs. Compare plans carefully during AEP.",
                      color: "bg-amber-50 border-amber-200",
                      iconColor: "text-amber-600",
                    },
                  ].map((item) => (
                    <div key={item.title} className={`border rounded-2xl p-5 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} aria-hidden="true" />
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cross-link callout */}
              <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
                <p className="font-bold text-amber-900 mb-2">Other Benefits Often Missing from Original Medicare</p>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Prescription drugs are not the only gap in Original Medicare. Dental and hearing coverage are also excluded from Parts A and B.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/coverage/dental" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                    <ArrowRight className="w-4 h-4" /> Does Medicare Cover Dental?
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
                  Part D Plans in Brandon and the Tampa Bay Area
                </h2>
                <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                  Local guidance for residents of Hillsborough County and surrounding areas.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#0d2d6b] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="font-bold text-[#0d2d6b]">Serving Brandon, Tampa, Riverview, Valrico, and Hillsborough County</p>
                  </div>
                  <div className="prose prose-sm prose-gray max-w-none text-gray-700 space-y-3">
                    <p>
                      Hillsborough County residents have access to a wide range of Part D standalone plans and Medicare Advantage plans with drug coverage. The number of available plans varies by ZIP code: residents in Brandon, Riverview, and Valrico typically have 20 or more Part D plan options during the Annual Enrollment Period.
                    </p>
                    <p>
                      Formularies change every year. A drug that was covered at a low tier in 2025 may have moved to a higher tier or been removed from the formulary entirely in 2026. This is why reviewing your plan annually during AEP (October 15 through December 7) is critical, even if you are happy with your current plan.
                    </p>
                    <p>
                      Greg Wohl and the MIP team help Brandon and Tampa Bay area residents compare Part D plans side by side, verify that their specific medications are covered, and identify the plan with the lowest total annual drug cost: not just the lowest premium. Call (813) 742-8888 for a no-cost plan comparison.
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
                  Common questions about Medicare prescription drug coverage.
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
                  Not Sure Which Part D Plan Is Right for You?
                </h3>
                <p className="text-blue-200 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
                  The right plan depends on your specific medications, your pharmacy, and your budget. Greg Wohl compares every available plan in your ZIP code at no cost to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+18137428888"
                    className="inline-flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-6 py-3 rounded-xl transition-colors"
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
                      { label: "Understanding Part D", href: "/understanding-part-d" },
                      { label: "Does Medicare Cover Dental?", href: "/coverage/dental" },
                      { label: "Does Medicare Cover Hearing Aids?", href: "/coverage/hearing-aids" },
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
            Get a Free Part D Plan Comparison
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Greg Wohl compares every Part D plan available in your ZIP code and shows you the total annual cost: premium plus your actual drug costs: so you can make an informed decision.
          </p>
          <a
            href="tel:+18137428888"
            className="inline-flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
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
