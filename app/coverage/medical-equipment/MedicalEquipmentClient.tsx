"use client";

/**
 * /coverage/medical-equipment
 * Design: Navy/gold MIP brand, two-column article + sticky sidebar
 * Coverage FAQ format: Does Medicare cover medical equipment (DME)?
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
import Breadcrumb from "@/components/Breadcrumb";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const planCoverage = [
  {
    plan: "Original Medicare (Part B)",
    statusLabel: "Covered with Requirements",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Medicare Part B covers durable medical equipment (DME) that is medically necessary, prescribed by a physician, and ordered from a Medicare-enrolled supplier. DME is defined as equipment that can withstand repeated use, is primarily used for a medical purpose, is not useful to someone who is not sick or injured, and is appropriate for use in the home. You pay 20% coinsurance after the Part B deductible. For some high-cost items, Medicare may rent rather than purchase the equipment.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    statusLabel: "Covered + Possible Extras",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medicare Advantage plans must cover all DME that Original Medicare covers. Some plans offer additional benefits such as coverage for non-Medicare-approved items or lower cost-sharing for common equipment. Network restrictions apply: you must use in-network DME suppliers. Using an out-of-network supplier can result in significantly higher costs or full denial of coverage.",
  },
  {
    plan: "Medigap (Medicare Supplement)",
    statusLabel: "Covers Cost-Sharing",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medigap plans cover the 20% Part B coinsurance you owe for covered DME. For expensive equipment such as power wheelchairs or home oxygen systems, this can represent hundreds or thousands of dollars per year. Plan G covers the coinsurance entirely after the annual Part B deductible of $283 in 2026.",
  },
];

const dmeItems = [
  { item: "Walkers and rollators", covered: true },
  { item: "Manual wheelchairs", covered: true },
  { item: "Power wheelchairs and scooters (with documentation)", covered: true },
  { item: "Hospital beds for home use", covered: true },
  { item: "CPAP and BiPAP machines for sleep apnea", covered: true },
  { item: "Home oxygen equipment and supplies", covered: true },
  { item: "Blood glucose monitors and test strips (diabetics)", covered: true },
  { item: "Nebulizers and compressors for respiratory conditions", covered: true },
  { item: "Crutches and canes", covered: true },
  { item: "Traction equipment", covered: true },
  { item: "Infusion pumps (for home infusion therapy)", covered: true },
  { item: "Prosthetic limbs and orthotic braces", covered: true },
  { item: "Hearing aids", covered: false },
  { item: "Eyeglasses (except after cataract surgery)", covered: false },
  { item: "Comfort or convenience items (e.g., raised toilet seats without medical necessity)", covered: false },
  { item: "Equipment used primarily for safety or personal comfort", covered: false },
];

const faqs = [
  {
    q: "What qualifies as durable medical equipment under Medicare?",
    a: "To qualify as DME, an item must: (1) withstand repeated use, (2) be primarily and customarily used for a medical purpose, (3) not be useful to a person who is not sick or injured, and (4) be appropriate for use in the home. Common examples include wheelchairs, walkers, hospital beds, CPAP machines, and home oxygen equipment. Items that are primarily for comfort or convenience do not qualify.",
  },
  {
    q: "Does Medicare cover power wheelchairs and scooters?",
    a: "Yes, but with strict documentation requirements. Your physician must conduct a face-to-face examination, document that you have a mobility limitation that significantly impairs your ability to perform activities of daily living, and certify that a power wheelchair or scooter is medically necessary. You must also obtain the equipment from a Medicare-enrolled supplier. Medicare covers 80% of the approved amount after the Part B deductible.",
  },
  {
    q: "Does Medicare cover CPAP machines for sleep apnea?",
    a: "Yes. Medicare Part B covers CPAP machines and supplies when you have a diagnosis of obstructive sleep apnea confirmed by a sleep study. Medicare typically rents the CPAP machine for 13 months, after which ownership transfers to you. You pay 20% coinsurance during the rental period. Replacement supplies such as masks, tubing, and filters are also covered.",
  },
  {
    q: "Does Medicare cover home oxygen?",
    a: "Yes. Medicare Part B covers home oxygen equipment, including concentrators, portable units, and liquid oxygen systems, when your physician documents that your blood oxygen level is below a certain threshold. Medicare rents the equipment for 36 months, after which the supplier must continue providing equipment and supplies for an additional 24 months at no charge to you.",
  },
  {
    q: "Does Medicare cover prosthetics and orthotics?",
    a: "Yes. Medicare Part B covers prosthetic limbs and orthotic braces when they are prescribed by a physician and obtained from a Medicare-enrolled supplier. Coverage includes the initial device and replacement when medically necessary due to wear, loss, or a change in your condition. You pay 20% coinsurance after the Part B deductible.",
  },
  {
    q: "What is a Medicare-enrolled DME supplier and why does it matter?",
    a: "A Medicare-enrolled DME supplier is a company that has been approved by Medicare to bill for covered equipment. If you obtain equipment from a supplier that is not enrolled in Medicare, Medicare will not pay for it regardless of whether the item itself is covered. Always confirm that your DME supplier is Medicare-enrolled before ordering equipment.",
  },
  {
    q: "Does Medicare cover blood glucose monitors and test strips?",
    a: "Yes. Medicare Part B covers blood glucose monitors, lancets, and test strips for beneficiaries with diabetes. The number of test strips covered depends on whether you use insulin. Insulin-dependent beneficiaries receive more generous coverage. Continuous glucose monitors (CGMs) are also covered for beneficiaries who meet certain criteria.",
  },
];

const tocItems = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "plan-coverage", label: "Coverage by Plan Type" },
  { id: "dme-list", label: "What Is and Is Not Covered" },
  { id: "costs", label: "Your Costs in 2026" },
  { id: "local", label: "Brandon and Tampa Area" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function MedicalEquipmentClient() {
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
              <span className="text-white">Medical Equipment</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Medical Equipment Coverage
              </span>
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Coverage", href: "/coverage-qa" }, { label: "Medical Equipment" }]} className="mb-4" />
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Does Medicare Cover Medical Equipment?
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Medicare Part B covers durable medical equipment (DME) when it is medically necessary, prescribed by a physician, and obtained from a Medicare-enrolled supplier.
            </p>

            {/* Quick Answer Banner */}
            <div
              id="quick-answer"
              className="flex items-start gap-3 px-5 py-4 rounded-xl border max-w-2xl"
              style={{ background: "#fffbeb", borderColor: "#fcd34d" }}
            >
              <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1 text-amber-700">
                  Quick Answer: Yes, with Requirements
                </p>
                <p className="text-sm font-semibold leading-snug text-amber-800">
                  Medicare covers wheelchairs, walkers, CPAP machines, home oxygen, hospital beds, and other DME when medically necessary. You pay 20% coinsurance. The equipment must come from a Medicare-enrolled supplier.
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
                    How DME coverage works under each Medicare plan type.
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

                {/* DME List */}
                <div id="dme-list" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    What Is and Is Not Covered
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Common durable medical equipment items and their Medicare coverage status.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {dmeItems.map((item) => (
                      <div
                        key={item.item}
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
                          {item.item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-blue-800 text-sm leading-relaxed">
                      <strong>Hearing aids are not covered by Original Medicare.</strong> This is one of the most common coverage gaps. Some Medicare Advantage plans include a hearing aid benefit. See our{" "}
                      <Link href="/coverage/hearing-aids" className="underline font-medium hover:text-blue-900">
                        hearing aids coverage page
                      </Link>{" "}
                      for details.
                    </p>
                  </div>
                </div>

                {/* Costs in 2026 */}
                <div id="costs" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Your Costs for Medical Equipment in 2026
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    What you can expect to pay under Original Medicare for DME.
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#0d2d6b] text-white">
                          <th className="text-left px-4 py-3 font-semibold">Equipment</th>
                          <th className="text-left px-4 py-3 font-semibold">How Medicare Pays</th>
                          <th className="text-left px-4 py-3 font-semibold">What You Pay</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { item: "Walker or rollator", how: "80% of approved amount", you: "20% coinsurance + $283 deductible" },
                          { item: "Manual wheelchair", how: "80% of approved amount", you: "20% coinsurance" },
                          { item: "Power wheelchair", how: "80% of approved amount (after documentation)", you: "20% coinsurance" },
                          { item: "CPAP machine", how: "Rents for 13 months, then you own it", you: "20% coinsurance during rental" },
                          { item: "Home oxygen equipment", how: "Rents for 36 months, then free for 24 more", you: "20% coinsurance during rental" },
                          { item: "Hospital bed (home use)", how: "80% of approved amount or rental", you: "20% coinsurance" },
                          { item: "Blood glucose monitor", how: "80% of approved amount", you: "20% coinsurance" },
                          { item: "Prosthetic limb", how: "80% of approved amount", you: "20% coinsurance" },
                        ].map((row, i) => (
                          <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                            <td className="px-4 py-3 text-gray-700">{row.how}</td>
                            <td className="px-4 py-3 text-gray-700">{row.you}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-start gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-amber-900 mb-1">Always Use a Medicare-Enrolled Supplier</p>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        If you purchase or rent DME from a supplier that is not enrolled in Medicare, Medicare will not pay any portion of the cost. Before ordering any equipment, confirm that your supplier is Medicare-enrolled by calling 1-800-MEDICARE or checking Medicare.gov.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Medigap Covers the 20% Coinsurance on DME</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        A Medigap Plan G covers your 20% coinsurance for all covered DME after the annual Part B deductible. For a power wheelchair costing $3,000, your 20% share would be $600. Medigap covers that entirely.{" "}
                        <Link href="/do-i-need-a-supplement" className="underline font-medium hover:text-blue-900">
                          Learn more about Medigap plans.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Section */}
                <div id="local" className="mb-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Medical Equipment Coverage in Brandon and the Tampa Bay Area
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    Local guidance for Hillsborough County Medicare beneficiaries.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-5">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#0d2d6b] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="font-bold text-[#0d2d6b]">Serving Brandon, Tampa, Riverview, Valrico, and Hillsborough County</p>
                    </div>
                    <div className="prose prose-sm prose-gray max-w-none text-gray-700 space-y-3">
                      <p>
                        Brandon and the greater Tampa Bay area have several Medicare-enrolled DME suppliers serving Hillsborough County. When your physician prescribes equipment after a hospital stay or procedure at HCA Florida Brandon Hospital, AdventHealth Brandon, or another local facility, the discharge team will typically recommend a supplier. It is always your right to choose your own Medicare-enrolled supplier, and prices and service quality can vary.
                      </p>
                      <p>
                        For beneficiaries with Medicare Advantage plans, it is especially important to confirm that your DME supplier is in-network before ordering equipment. Out-of-network DME can result in significantly higher costs or denial of coverage. Residents of Riverview, Valrico, and other Hillsborough County communities should verify supplier network status with their plan before discharge from a hospital or skilled nursing facility.
                      </p>
                      <p>
                        Greg Wohl helps Brandon and Tampa Bay area residents understand their DME benefits and choose the Medicare plan that best fits their needs. Call 813-789-7700 for a no-cost consultation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cross-link callout */}
                <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
                  <p className="font-bold text-amber-900 mb-2">Related Coverage Questions</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Link href="/coverage/physical-therapy" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Physical Therapy?
                    </Link>
                    <Link href="/coverage/skilled-nursing" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Skilled Nursing?
                    </Link>
                    <Link href="/coverage/hearing-aids" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Hearing Aids?
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
                    Common questions about Medicare DME coverage.
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
                    Questions About Your DME Coverage?
                  </h3>
                  <p className="text-blue-200 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
                    Whether you need a wheelchair, CPAP, or home oxygen, the right Medicare plan can significantly reduce your equipment costs. Greg Wohl can help you compare your options.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:+18137897700"
                      className="inline-flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      813-789-7700
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
                      href="tel:+18137897700"
                      className="flex items-center justify-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-3 rounded-xl transition-colors w-full mb-3 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      813-789-7700
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
                        { label: "Does Medicare Cover Physical Therapy?", href: "/coverage/physical-therapy" },
                        { label: "Does Medicare Cover Skilled Nursing?", href: "/coverage/skilled-nursing" },
                        { label: "Does Medicare Cover Hearing Aids?", href: "/coverage/hearing-aids" },
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
              Get Help Understanding Your DME Benefits
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              From wheelchairs to CPAP machines, the right Medicare plan reduces your equipment costs significantly. Greg Wohl helps Brandon and Tampa Bay area residents find the best coverage for their needs.
            </p>
            <a
              href="tel:+18137897700"
              className="inline-flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 813-789-7700
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
