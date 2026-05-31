"use client";

/**
 * /coverage/cancer-treatment
 * Design: Navy/gold MIP brand, two-column article + sticky sidebar
 * Coverage FAQ format: Does Medicare cover cancer treatment?
 * Rules: No dashes used as punctuation, 2026 figures, Brandon-first local signals, compact quick answer banner
 */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Info,
  AlertTriangle,
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
    statusLabel: "Broadly Covered",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Original Medicare covers most medically necessary cancer treatments. Part A covers inpatient hospital stays for surgery, chemotherapy administered in a hospital setting, and radiation therapy requiring admission. Part B covers outpatient chemotherapy, radiation therapy, immunotherapy, targeted therapy infusions, oncologist visits, diagnostic imaging (CT, PET, MRI), and lab work. You pay 20% coinsurance after the Part B deductible for most outpatient services.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    statusLabel: "Covered + Extras",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medicare Advantage plans must cover all services that Original Medicare covers, including cancer treatment. Many plans offer lower copays for chemotherapy infusions and additional benefits such as transportation to treatment, meal delivery during treatment, and care coordination programs. However, network restrictions apply: you must use in-network oncologists and cancer centers, which can be a significant limitation for patients who want access to specialized cancer centers.",
  },
  {
    plan: "Medigap (Medicare Supplement)",
    statusLabel: "Covers Cost-Sharing",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medigap plans cover the 20% coinsurance you owe after Original Medicare pays its share. For cancer patients receiving ongoing chemotherapy or radiation, this can represent thousands of dollars per year. Plan G covers the Part B coinsurance entirely after the annual deductible, making it one of the most valuable plan types for anyone facing a serious illness. Medigap also allows you to see any Medicare-accepting oncologist nationwide without network restrictions.",
  },
  {
    plan: "Medicare Part D",
    statusLabel: "Covers Oral Cancer Drugs",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Part D covers oral cancer medications, including oral chemotherapy drugs and targeted therapy pills. Many of these drugs are specialty tier medications with significant cost-sharing. The 2026 $2,000 annual out-of-pocket cap under Part D is especially important for cancer patients on expensive oral oncology drugs. Intravenous chemotherapy administered in a clinical setting is covered under Part B, not Part D.",
  },
];

const coveredServices = [
  { service: "Outpatient chemotherapy infusions (Part B)", covered: true },
  { service: "Radiation therapy (external beam, brachytherapy)", covered: true },
  { service: "Immunotherapy and targeted therapy infusions", covered: true },
  { service: "Inpatient surgery for cancer (Part A)", covered: true },
  { service: "Oncologist office visits and consultations", covered: true },
  { service: "Diagnostic imaging: CT, PET, MRI scans", covered: true },
  { service: "Lab work and tumor marker tests", covered: true },
  { service: "Bone marrow and stem cell transplants (medically necessary)", covered: true },
  { service: "Oral chemotherapy and targeted therapy drugs (Part D)", covered: true },
  { service: "Hormone therapy injections (e.g., for prostate or breast cancer)", covered: true },
  { service: "Preventive cancer screenings (colonoscopy, mammogram, PSA)", covered: true },
  { service: "Hospice care for terminal cancer (Part A)", covered: true },
  { service: "Experimental or investigational treatments not FDA-approved", covered: false },
  { service: "Clinical trials (some costs may be covered, others not)", covered: false },
  { service: "Cosmetic procedures related to cancer (e.g., wigs after chemo)", covered: false },
  { service: "Long-term custodial care at home or in a facility", covered: false },
];

const faqs = [
  {
    q: "Does Medicare cover chemotherapy?",
    a: "Yes. Medicare Part B covers outpatient chemotherapy infusions administered in a doctor's office, outpatient hospital, or infusion center. You pay 20% coinsurance after the Part B deductible. Part A covers chemotherapy administered during an inpatient hospital stay. Oral chemotherapy drugs are covered under Part D.",
  },
  {
    q: "Does Medicare cover radiation therapy?",
    a: "Yes. Medicare Part B covers radiation therapy including external beam radiation and brachytherapy when administered on an outpatient basis. You pay 20% coinsurance after the Part B deductible. If radiation requires an inpatient hospital stay, Part A applies.",
  },
  {
    q: "Does Medicare cover immunotherapy and targeted therapy?",
    a: "Yes. Medicare Part B covers immunotherapy drugs (such as checkpoint inhibitors) and targeted therapy agents when administered by infusion in an outpatient setting. These are among the most expensive cancer treatments, so the 20% coinsurance can be substantial without a Medigap plan.",
  },
  {
    q: "Does Medicare cover cancer surgery?",
    a: "Yes. Cancer surgery is covered under Part A when performed during an inpatient hospital stay. You pay the Part A deductible ($1,676 per benefit period in 2026) and coinsurance for extended stays. Outpatient surgical procedures are covered under Part B with 20% coinsurance.",
  },
  {
    q: "Can I go to any cancer center with Medicare?",
    a: "With Original Medicare, you can see any oncologist or cancer center that accepts Medicare, including major cancer centers such as Moffitt Cancer Center in Tampa. With Medicare Advantage, you are generally limited to in-network providers. This is one of the most important reasons cancer patients often choose Original Medicare with a Medigap plan over Medicare Advantage.",
  },
  {
    q: "Does Medicare cover clinical trials for cancer?",
    a: "Medicare covers the routine costs of care during a qualifying clinical trial, such as doctor visits, lab tests, and standard treatments. However, Medicare does not cover the investigational drug or device itself, or any services provided solely for the purpose of the trial. Coverage details vary by trial, so it is important to confirm with your oncologist and Medicare before enrolling.",
  },
  {
    q: "How much will I pay out of pocket for cancer treatment with Medicare?",
    a: "Without supplemental coverage, your costs can be significant. The 20% Part B coinsurance on a $10,000 monthly chemotherapy regimen would be $2,000 per month. A Medigap Plan G covers that coinsurance entirely after the $257 annual Part B deductible, making it one of the most financially protective options for cancer patients.",
  },
];

const tocItems = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "plan-coverage", label: "Coverage by Plan Type" },
  { id: "covered-services", label: "What Is and Is Not Covered" },
  { id: "costs", label: "Your Costs in 2026" },
  { id: "moffitt", label: "Moffitt and Local Cancer Care" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function CancerTreatmentClient() {
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
              <span className="text-white">Cancer Treatment</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Cancer Treatment Coverage
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Does Medicare Cover Cancer Treatment?
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Medicare covers most cancer treatments, but out-of-pocket costs can be substantial without the right supplemental plan.
            </p>

            {/* Quick Answer Banner */}
            <div
              id="quick-answer"
              className="flex items-start gap-3 px-5 py-4 rounded-xl border max-w-2xl"
              style={{ background: "#f0fdf4", borderColor: "#86efac" }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1 text-green-700">
                  Quick Answer: Yes, Broadly Covered
                </p>
                <p className="text-sm font-semibold leading-snug text-green-800">
                  Medicare covers chemotherapy, radiation, surgery, immunotherapy, and most other cancer treatments. You pay 20% coinsurance for outpatient services. A Medigap plan can eliminate that cost-sharing.
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
                    How cancer treatment coverage works under each Medicare plan type.
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
                    A complete list of cancer-related services under Original Medicare.
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
                    Your Costs for Cancer Treatment in 2026
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    What you can expect to pay under Original Medicare for cancer care.
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
                          { service: "Outpatient chemotherapy infusion", medicare: "80% after deductible", you: "20% coinsurance + $257 deductible" },
                          { service: "Radiation therapy (outpatient)", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "Immunotherapy / targeted therapy infusion", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "Oncologist office visit", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "CT, PET, or MRI scan", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "Cancer surgery (inpatient)", medicare: "Per Part A benefit period", you: "$1,676 deductible per benefit period" },
                          { service: "Oral chemotherapy drug (Part D)", medicare: "Varies by formulary tier", you: "Up to $2,000 annual OOP cap (2026)" },
                          { service: "Preventive cancer screening (colonoscopy, mammogram)", medicare: "100%", you: "$0 (preventive)" },
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

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-amber-900 mb-1">The 20% Coinsurance Adds Up Quickly</p>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        A single month of immunotherapy can cost $15,000 or more. Your 20% share would be $3,000 for that month alone. Over a full course of treatment, costs without supplemental coverage can reach tens of thousands of dollars.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Medigap Plan G: The Most Protective Option for Cancer Patients</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Medigap Plan G covers the 20% Part B coinsurance entirely after the $257 annual deductible. For someone undergoing active cancer treatment, this can save $10,000 or more per year compared to Original Medicare alone.{" "}
                        <Link href="/do-i-need-a-supplement" className="underline font-medium hover:text-blue-900">
                          Learn more about Medigap plans.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Moffitt / Local Section */}
                <div id="moffitt" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Cancer Care in Brandon, Tampa, and the Moffitt Region
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Local guidance for Hillsborough County cancer patients on Medicare.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#0d2d6b] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="font-bold text-[#0d2d6b]">Serving Brandon, Tampa, Riverview, Valrico, and Hillsborough County</p>
                    </div>
                    <div className="prose prose-sm prose-gray max-w-none text-gray-700 space-y-3">
                      <p>
                        Brandon and Tampa Bay area Medicare beneficiaries have access to world-class cancer care. Moffitt Cancer Center in Tampa is a nationally designated NCI Comprehensive Cancer Center and accepts Original Medicare. If you have Original Medicare with a Medigap plan, you can receive care at Moffitt without any network restriction. If you have a Medicare Advantage plan, you should verify that Moffitt is in your plan's network before beginning treatment.
                      </p>
                      <p>
                        Other major cancer care providers in the region include AdventHealth Cancer Institute, HCA Florida Brandon Hospital, and BayCare Health System, all of which accept Original Medicare. Residents of Riverview, Valrico, and other Hillsborough County communities have multiple options for infusion centers and radiation facilities close to home.
                      </p>
                      <p>
                        Choosing the right Medicare plan before a cancer diagnosis is one of the most important financial decisions a beneficiary can make. Greg Wohl helps Brandon and Tampa Bay area residents understand their options and select coverage that protects them if a serious illness arises. Call (813) 742-8888 for a no-cost consultation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cross-link callout */}
                <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
                  <p className="font-bold text-amber-900 mb-2">Related Coverage Questions</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Link href="/coverage/mental-health" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Mental Health?
                    </Link>
                    <Link href="/coverage/prescription-drugs" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Prescription Drugs?
                    </Link>
                    <Link href="/do-i-need-a-supplement" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Do I Need a Medigap Plan?
                    </Link>
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
                    Common questions about Medicare cancer treatment coverage.
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
                    Protect Yourself Before a Diagnosis
                  </h3>
                  <p className="text-blue-200 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
                    The best time to choose the right Medicare plan is before you need it. Greg Wohl helps Brandon and Tampa Bay area residents find coverage that protects them financially if a serious illness arises.
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
                      href="/do-i-need-a-supplement"
                      className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                    >
                      Compare Medigap Plans
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
                      href="/do-i-need-a-supplement"
                      className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2.5 rounded-xl transition-colors w-full text-sm"
                    >
                      Compare Medigap Plans
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
                        { label: "Does Medicare Cover Mental Health?", href: "/coverage/mental-health" },
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
              Get Help Choosing the Right Cancer Coverage
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Original Medicare with a Medigap plan gives you access to Moffitt and any Medicare-accepting oncologist, with no network restrictions. Greg Wohl can help you compare your options.
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
