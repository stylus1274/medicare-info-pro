"use client";

/**
 * /coverage/physical-therapy
 * Design: Navy/gold MIP brand, two-column article + sticky sidebar
 * Coverage FAQ format: Does Medicare cover physical therapy?
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
    plan: "Original Medicare (Part B)",
    statusLabel: "Covered with Limits",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-500",
    details:
      "Medicare Part B covers medically necessary physical therapy, occupational therapy, and speech-language pathology services when ordered by a physician and provided by a Medicare-enrolled therapist. There is no longer a hard annual dollar cap on therapy services. However, you must show continued medical necessity for treatment to continue. You pay 20% coinsurance after the Part B deductible for each visit.",
  },
  {
    plan: "Medicare Part A (Inpatient / Skilled Nursing)",
    statusLabel: "Covered During Qualifying Stays",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "If you are admitted to a hospital or a Medicare-certified skilled nursing facility (SNF), physical therapy provided as part of your care is covered under Part A. To qualify for SNF coverage, you must have had a qualifying inpatient hospital stay of at least 3 days. Part A covers the full cost of therapy during days 1 through 20 of a SNF stay (after the Part A deductible). Days 21 through 100 require a daily coinsurance of $209.50 in 2026.",
  },
  {
    plan: "Medicare Advantage (Part C)",
    statusLabel: "Covered + Possible Extras",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medicare Advantage plans must cover physical therapy at least as generously as Original Medicare. Many plans offer lower copays per visit or additional therapy visits beyond what Original Medicare requires. Network restrictions apply: you must use in-network physical therapists. Some plans also cover fitness benefits or gym memberships that can complement physical therapy.",
  },
  {
    plan: "Medigap (Medicare Supplement)",
    statusLabel: "Covers Cost-Sharing",
    color: "bg-green-50 border-green-300",
    badgeColor: "bg-green-600",
    details:
      "Medigap plans cover the 20% Part B coinsurance you owe for outpatient physical therapy visits. For someone attending two or three sessions per week during a recovery period, this can add up to hundreds of dollars per month. Plan G covers the coinsurance entirely after the annual Part B deductible of $257 in 2026.",
  },
];

const coveredServices = [
  { service: "Outpatient physical therapy (PT) visits", covered: true },
  { service: "Occupational therapy (OT) visits", covered: true },
  { service: "Speech-language pathology (SLP) services", covered: true },
  { service: "Physical therapy in a skilled nursing facility (Part A)", covered: true },
  { service: "Physical therapy during inpatient hospital stay (Part A)", covered: true },
  { service: "Home health physical therapy (if homebound)", covered: true },
  { service: "Aquatic therapy (if provided by a Medicare-enrolled therapist)", covered: true },
  { service: "Functional assessments and therapy evaluations", covered: true },
  { service: "Maintenance therapy (to prevent decline)", covered: true },
  { service: "Gym memberships or fitness classes", covered: false },
  { service: "Massage therapy (not medically supervised PT)", covered: false },
  { service: "Chiropractic care beyond spinal manipulation", covered: false },
  { service: "Long-term custodial care or personal care assistance", covered: false },
];

const faqs = [
  {
    q: "Is there a limit on how many physical therapy visits Medicare covers?",
    a: "No. The hard annual dollar cap on outpatient therapy was permanently eliminated by the Bipartisan Budget Act of 2018. Medicare now covers as many medically necessary physical therapy visits as your physician documents. However, if your total therapy charges exceed a threshold amount (known as the KX modifier threshold), your therapist must add a KX modifier to claims certifying that continued therapy is medically necessary.",
  },
  {
    q: "Does Medicare cover physical therapy at home?",
    a: "Yes, if you qualify as homebound. Medicare Part A covers home health physical therapy for beneficiaries who are confined to their home due to illness or injury and who have a physician's order for skilled care. Home health PT is covered with no coinsurance under Part A. If you are not homebound, outpatient PT is covered under Part B with 20% coinsurance.",
  },
  {
    q: "Does Medicare cover physical therapy after a hip or knee replacement?",
    a: "Yes. Physical therapy following joint replacement surgery is one of the most common uses of Medicare PT benefits. If you have an inpatient hospital stay of at least 3 days before your surgery, you may also qualify for a skilled nursing facility stay with Part A coverage for therapy during your recovery. Outpatient PT after discharge is covered under Part B.",
  },
  {
    q: "Does Medicare cover occupational therapy?",
    a: "Yes. Occupational therapy is covered under the same rules as physical therapy. Part B covers outpatient OT when it is medically necessary and ordered by a physician. Part A covers OT provided during a qualifying inpatient or skilled nursing facility stay.",
  },
  {
    q: "What is the KX modifier and why does it matter?",
    a: "The KX modifier is a billing code your therapist adds to claims when your total therapy charges for the year exceed the threshold amount (approximately $2,330 in 2026 for PT and SLP combined, and separately for OT). Adding the KX modifier certifies that continued therapy is medically necessary. Without it, Medicare may deny claims above the threshold. Your therapist handles this automatically, but it is good to be aware of it.",
  },
  {
    q: "Does Medicare cover maintenance physical therapy?",
    a: "Yes. Following the Jimmo v. Sebelius settlement, Medicare must cover maintenance therapy when a skilled therapist is needed to maintain your condition or prevent decline, even if you are not expected to improve. This is particularly important for beneficiaries with chronic conditions such as Parkinson's disease, multiple sclerosis, or severe arthritis.",
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

export default function PhysicalTherapyClient() {
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
              <span className="text-white">Physical Therapy</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Physical Therapy Coverage
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Does Medicare Cover Physical Therapy?
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Medicare covers medically necessary physical therapy with no hard annual visit limit, but you pay 20% coinsurance for each outpatient session.
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
                  Quick Answer: Yes, with Cost-Sharing
                </p>
                <p className="text-sm font-semibold leading-snug text-amber-800">
                  Medicare Part B covers outpatient physical therapy with no annual visit cap. You pay 20% coinsurance per visit after the Part B deductible. A Medigap plan covers that coinsurance.
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
                    How physical therapy coverage works under each Medicare plan type.
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
                    A complete list of therapy-related services under Original Medicare.
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
                    Your Costs for Physical Therapy in 2026
                  </h2>
                  <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
                    What you can expect to pay under Original Medicare for PT services.
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
                          { service: "Outpatient PT visit (per session)", medicare: "80% after deductible", you: "20% coinsurance + $257 deductible" },
                          { service: "Outpatient OT visit (per session)", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "Speech-language pathology visit", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "PT evaluation / initial assessment", medicare: "80% after deductible", you: "20% coinsurance" },
                          { service: "SNF physical therapy (days 1-20)", medicare: "100% after Part A deductible", you: "$0 (after $1,676 Part A deductible)" },
                          { service: "SNF physical therapy (days 21-100)", medicare: "All costs above daily coinsurance", you: "$209.50/day coinsurance (2026)" },
                          { service: "Home health PT (if homebound)", medicare: "100%", you: "$0" },
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
                      <p className="font-bold text-blue-900 mb-1">How Much Can Medigap Save You?</p>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        If you attend physical therapy three times per week at an average cost of $150 per session, your 20% share is $30 per visit, or about $360 per month. A Medigap Plan G covers that coinsurance entirely after the $257 annual deductible, saving you over $4,000 per year for ongoing therapy.{" "}
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
                    Physical Therapy Coverage in Brandon and the Tampa Bay Area
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
                        Brandon and the greater Tampa Bay area have a large network of Medicare-accepting physical therapy providers, including outpatient clinics affiliated with BayCare Health System, AdventHealth, and HCA Florida Brandon Hospital. Residents of Riverview, Valrico, and other Hillsborough County communities generally have multiple in-network options close to home.
                      </p>
                      <p>
                        If you have Original Medicare, you can use any Medicare-enrolled physical therapist in the area without network restrictions. If you have a Medicare Advantage plan, you should verify that your preferred PT clinic is in-network before beginning treatment, as out-of-network costs can be significantly higher.
                      </p>
                      <p>
                        For beneficiaries recovering from joint replacement surgery, stroke, or other major procedures at Brandon Regional Hospital or St. Joseph's Hospital, transitioning to an outpatient PT clinic or a skilled nursing facility for continued therapy is a common next step. Greg Wohl helps Brandon and Tampa Bay area residents understand how their Medicare coverage applies at each stage of recovery. Call (813) 742-8888 for a no-cost consultation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cross-link callout */}
                <div className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
                  <p className="font-bold text-amber-900 mb-2">Related Coverage Questions</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Link href="/coverage/skilled-nursing" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Skilled Nursing?
                    </Link>
                    <Link href="/coverage/medical-equipment" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:text-amber-900">
                      <ArrowRight className="w-4 h-4" /> Does Medicare Cover Medical Equipment?
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
                    Common questions about Medicare physical therapy coverage.
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
                    Questions About Your Physical Therapy Coverage?
                  </h3>
                  <p className="text-blue-200 mb-6 text-sm leading-relaxed max-w-lg mx-auto">
                    Whether you are recovering from surgery or managing a chronic condition, the right Medicare plan can significantly reduce your therapy costs. Greg Wohl can help you compare your options.
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
                        { label: "Do I Need a Medigap Plan?", href: "/do-i-need-a-supplement" },
                        { label: "Does Medicare Cover Skilled Nursing?", href: "/coverage/skilled-nursing" },
                        { label: "Does Medicare Cover Medical Equipment?", href: "/coverage/medical-equipment" },
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
              Get Help Understanding Your Physical Therapy Benefits
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              The right plan can eliminate your therapy copays and give you access to the best PT providers in Brandon and Tampa Bay. Greg Wohl can help you find it.
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
