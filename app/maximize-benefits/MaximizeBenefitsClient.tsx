"use client";

/* ==========================================================================
   MaximizeBenefitsClient — Next.js App Router
   Blog-style guide: "How Florida Seniors Can Maximize Medicare Benefits After 65"
   Design: navy/gold MIP brand, Merriweather headlines, sticky sidebar TOC
   ========================================================================== */

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Clock,
  ChevronRight,
  CheckCircle,
  User,
  BookOpen,
  Shield,
  Star,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Callout from "@/components/Callout";
import FaqAccordion from "@/components/FaqAccordion";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/blog-maximize-benefits-hero_f1969887.jpg";

const TOC_ITEMS = [
  { id: "basics", label: "Understanding Medicare Basics" },
  { id: "parts-a-b", label: "Parts A and B: The Foundation" },
  { id: "advantage-vs-original", label: "Medicare Advantage vs. Original Medicare" },
  { id: "part-d", label: "Prescription Drug Plans (Part D)" },
  { id: "avoid-mistakes", label: "Avoiding Common Mistakes" },
  { id: "enrollment-periods", label: "Key Enrollment Periods" },
  { id: "coverage-gaps", label: "Protecting Against Coverage Gaps" },
  { id: "savings", label: "Maximizing Savings" },
  { id: "savings-programs", label: "Medicare Savings Programs" },
  { id: "preventive", label: "Using Preventive Services" },
  { id: "trusted-guidance", label: "Finding Trusted Guidance" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const COMPARISON_TABLE = [
  {
    feature: "Provider Choice",
    original: "Any doctor or hospital that accepts Medicare",
    advantage: "Usually limited to the plan's network of providers",
  },
  {
    feature: "Referrals Needed",
    original: "No referrals required for specialists",
    advantage: "Often required for HMO plans; PPO plans typically do not require referrals",
  },
  {
    feature: "Prescription Drug Coverage",
    original: "Requires a separate Part D plan",
    advantage: "Usually included",
  },
  {
    feature: "Extra Benefits (Dental, Vision, Hearing)",
    original: "Not included (may add separate plans)",
    advantage: "Often included",
  },
  {
    feature: "Out-of-Pocket Limit",
    original: "No annual limit",
    advantage: "Annual out-of-pocket maximum",
  },
  {
    feature: "Monthly Premiums",
    original: "Part B premium (plus any Medigap/Part D premiums)",
    advantage: "Part B premium (plus any plan premium, which may be $0)",
  },
];

const ENROLLMENT_PERIODS = [
  {
    name: "Initial Enrollment Period (IEP)",
    icon: Calendar,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    description:
      "Begins three months before your 65th birthday, includes your birthday month, and ends three months after. This seven-month window is your first chance to sign up for Medicare without penalties.",
  },
  {
    name: "Annual Enrollment Period (AEP)",
    icon: Star,
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    description:
      "Runs from October 15 to December 7 each year. During this time, you can switch from Original Medicare to Medicare Advantage, change Medicare Advantage plans, or modify your prescription drug coverage. Changes take effect January 1 of the following year.",
  },
  {
    name: "Special Enrollment Periods (SEP)",
    icon: Shield,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    description:
      "Allow you to make changes outside the normal enrollment windows if you qualify due to certain life events, such as losing employer coverage, moving to a new area, or qualifying for financial assistance programs. Dates vary based on your situation.",
  },
];

const SAVINGS_PROGRAMS = [
  {
    name: "Qualified Medicare Beneficiary (QMB)",
    covers:
      "Pays your Medicare Part A and Part B premiums, deductibles, and coinsurance.",
    icon: DollarSign,
  },
  {
    name: "Specified Low-Income Medicare Beneficiary (SLMB)",
    covers:
      "Helps pay Part B premiums for people with slightly higher incomes.",
    icon: DollarSign,
  },
  {
    name: "Extra Help Program",
    covers:
      "Helps pay for prescription drug costs. As of 2026, it also eliminates the Part D deductible for qualifying individuals.",
    icon: DollarSign,
  },
];

const PREVENTIVE_SERVICES = [
  "Annual Wellness Visit",
  "Cancer Screenings (mammograms, colonoscopies)",
  "Cardiovascular Disease Screenings",
  "Diabetes Screenings",
  "Flu and Pneumonia Vaccinations",
  "Depression Screenings",
  "Bone Density Tests",
  "HIV Screenings",
];

const FAQS = [
  {
    q: "What happens if I miss my Medicare enrollment deadline?",
    a: "If you miss your Initial Enrollment Period and do not have qualifying employer coverage, you may face late enrollment penalties for Part B and Part D that can last as long as you have Medicare coverage. The Part B penalty is 10% of the standard premium for each 12-month period you could have had Part B but did not sign up. However, Special Enrollment Periods may allow you to sign up without penalties in certain situations, such as when you lose employer health coverage or move to a new area.",
  },
  {
    q: "How do I know if Medicare Advantage is better for me than Original Medicare?",
    a: "The choice between Medicare Advantage and Original Medicare depends on your individual health needs, budget, and preferences. Medicare Advantage plans often include extra benefits like dental, vision, and prescription drug coverage, plus they may have lower monthly premiums. Consider factors like whether your doctors participate in the plan's network, what your total annual costs would be including premiums and out-of-pocket expenses, and whether you want the convenience of having everything in one plan.",
  },
  {
    q: "Is financial assistance available to help cover Medicare costs?",
    a: "Yes, several programs can help reduce Medicare costs for people with limited income and resources. Medicare Savings Programs help pay premiums, deductibles, and coinsurance. The Extra Help program assists with prescription drug costs. Medicaid may also help cover Medicare expenses for dual-eligible individuals. Eligibility for these programs depends on your income and resources, but the limits are often higher than people expect.",
  },
  {
    q: "How can I avoid making costly Medicare mistakes?",
    a: "The best way to avoid Medicare mistakes is to educate yourself about your options and get help from trusted sources. Understand your enrollment periods and do not wait until the last minute to make decisions. Review your coverage annually during the Annual Enrollment Period, even if you are happy with your current plan. Plans change, and your health needs may change too. Seek guidance from unbiased sources like Medicare enrollment assistance programs or licensed agents who represent multiple insurance companies.",
  },
  {
    q: "Can I change my Medicare plan if I am not satisfied with my current coverage?",
    a: "Yes, you can make changes to your Medicare coverage during certain enrollment periods. The Annual Enrollment Period from October 15 to December 7 allows you to switch between Original Medicare and Medicare Advantage, change Medicare Advantage plans, or modify your prescription drug coverage. You may also qualify for Special Enrollment Periods if you experience certain life changes like moving, losing other health coverage, or qualifying for financial assistance.",
  },
  {
    q: "What should I do if I am overwhelmed by all the Medicare options?",
    a: "Feeling overwhelmed by Medicare choices is completely normal. Start by learning the basics about Medicare parts and how they work together. Then, focus on your specific needs and budget rather than trying to understand every possible option. Take advantage of free counseling services like Florida SHINE, which provide unbiased guidance without sales pressure. Working with a local Medicare agent who takes time to understand your situation can also help simplify the process.",
  },
];

const RELATED_POSTS = [
  {
    category: "Medigap",
    title: "Why Choose Medigap Plan G in 2026",
    excerpt:
      "Plan G is the most popular Medigap policy for new Medicare enrollees. Learn what it covers, what it costs, and whether it is right for you.",
    date: "April 1, 2026",
    readTime: "9 min read",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    href: "/blog/why-choose-medigap-plan-g",
  },
  {
    category: "Medicare Advantage",
    title: "Original Medicare vs. Medicare Advantage",
    excerpt:
      "A side-by-side comparison of Original Medicare and Medicare Advantage to help you choose the right path for your health and budget.",
    date: "March 15, 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    href: "/original-vs-advantage",
  },
  {
    category: "Costs and Savings",
    title: "Medicare Costs at a Glance for 2026",
    excerpt:
      "All the key Medicare premiums, deductibles, and out-of-pocket limits for 2026 in one easy reference guide.",
    date: "February 10, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    href: "/costs-at-a-glance",
  },
];

function TOCSidebar({ activeSection }: { activeSection: string }) {
  return (
    <aside className="hidden xl:block w-72 shrink-0">
      <div className="sticky top-28 space-y-4">
        {/* TOC card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-[#1a3fa8] px-5 py-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> In This Article
            </h3>
          </div>
          <nav className="p-3">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 mb-0.5 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-[#1a3fa8] font-semibold border-l-2 border-[#1a3fa8] pl-4"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3fa8]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA card */}
        <div className="bg-[#1a3fa8] rounded-xl p-4 text-center">
          <p className="text-white text-xs font-medium mb-2">
            Have questions about your plan?
          </p>
          <a
            href="tel:8136995559"
            className="flex items-center justify-center gap-1.5 bg-[#f5a800] text-white font-bold text-sm px-4 py-2.5 rounded-lg hover:bg-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> 813-699-5559
          </a>
          <p className="text-blue-200 text-xs mt-2">Free, no-obligation consultation</p>
        </div>

        {/* Penalty warning card */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 font-semibold text-xs mb-1">
                Late Enrollment Penalties
              </p>
              <p className="text-amber-700 text-xs leading-relaxed">
                Missing key deadlines can result in permanent premium increases.
                Enroll on time to avoid lifelong penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function MaximizeBenefitsClient() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        className="relative h-[480px] md:h-[560px] overflow-hidden"
        aria-label="Article hero"
      >
        <img
          src={HERO_IMAGE}
          alt="Florida senior couple reviewing Medicare documents at a kitchen table"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2260]/90 via-[#0d2260]/70 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-1.5 text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Maximize Benefits</span>
            </nav>

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="bg-[#f5a800] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Guide
              </span>
              <span className="text-blue-200 text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> April 1, 2026
              </span>
              <span className="text-blue-200 text-sm flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> 10 min read
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              How Florida Seniors Can Maximize Medicare Benefits After 65
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Clear, unbiased guidance on choosing the right plan, avoiding costly mistakes, and getting the most value from your Medicare coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Answer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#1a3fa8] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#1a3fa8] text-sm uppercase tracking-wide mr-2">
                Quick Answer:
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">
                Florida seniors can maximize Medicare benefits by understanding their options, choosing the right plan based on health needs and budget, and avoiding gaps in coverage. Focus on preventive care, compare plans annually, and review financial assistance programs to save on costs.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">
          {/* Article Body */}
          <article className="flex-1 min-w-0 prose prose-lg max-w-none">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                If you are turning 65 soon or recently became eligible for Medicare, you are probably feeling overwhelmed by all the options, rules, and confusing insurance jargon. You are not alone. Many Florida seniors find themselves stressed about choosing the wrong plan and facing unexpected medical costs in retirement.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                You will find clear explanations here to help you understand your Medicare options, avoid costly mistakes, and get the most value from your benefits without the headache of complicated paperwork and confusing resources.
              </p>
            </motion.div>

            {/* Section: Basics */}
            <section id="basics">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Understanding Medicare Basics: What Florida Seniors Need to Know
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before you can make smart decisions about your coverage, it is important to understand what Medicare actually includes. Think of Medicare as having different parts that work together to cover your healthcare needs, each with its own purpose and costs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The good news is that once you understand these basics, choosing the right combination becomes much clearer. Let us break down each part in simple terms so you can feel confident about your decisions.
              </p>
            </section>

            {/* Section: Parts A & B */}
            <section id="parts-a-b">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Medicare Part A and Part B: The Foundation of Your Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <Callout type="info">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#1a3fa8] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      A
                    </div>
                    <span className="font-bold text-gray-900">Medicare Part A</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Covers hospital stays, skilled nursing facility care, hospice care, and some home health services.
                  </p>
                  <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                    Most people pay $0 premium
                  </div>
                </Callout>
                <Callout type="warning">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#f5a800] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      B
                    </div>
                    <span className="font-bold text-gray-900">Medicare Part B</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Covers doctor visits, outpatient care, medical equipment, and preventive screenings like mammograms and colonoscopies.
                  </p>
                  <div className="flex items-center gap-2 text-amber-700 text-sm font-medium">
                    Monthly premium required
                  </div>
                </Callout>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Together, Parts A and B make up what is called <strong>Original Medicare</strong>. While this provides essential coverage, it does not cover everything, which is why many Florida seniors choose additional coverage options.
              </p>
            </section>

            {/* Section: Advantage vs Original */}
            <section id="advantage-vs-original">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Medicare Advantage (Part C) vs. Original Medicare: What Is Right for You?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare Advantage plans are offered by private insurance companies approved by Medicare. These plans include everything that Original Medicare covers, plus they often add benefits like vision, dental, hearing aids, and prescription drug coverage all in one plan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many Florida seniors appreciate that the best Medicare Advantage plans often include extra perks like gym memberships, transportation to medical appointments, and even meal delivery after hospital stays. These plans typically have provider networks, so you will need to make sure your doctors participate.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1a3fa8]">
                      <th className="text-left text-white font-semibold px-5 py-4 w-1/3">
                        Feature
                      </th>
                      <th className="text-left text-white font-semibold px-5 py-4">
                        Original Medicare (A and B)
                      </th>
                      <th className="text-left text-white font-semibold px-5 py-4">
                        Medicare Advantage (Part C)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_TABLE.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-4 font-semibold text-gray-800 border-r border-gray-100">
                          {row.feature}
                        </td>
                        <td className="px-5 py-4 text-gray-700 border-r border-gray-100">
                          {row.original}
                        </td>
                        <td className="px-5 py-4 text-gray-700">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                The right choice depends on your health needs, your preferred doctors, and your budget. Our{" "}
                <Link href="/original-vs-advantage" className="text-[#1a3fa8] underline hover:text-blue-800">
                  Original vs. Advantage comparison guide
                </Link>{" "}
                walks through this decision in more detail.
              </p>
            </section>

            {/* Section: Part D */}
            <section id="part-d">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Prescription Drug Plans (Part D): Why These Matter
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you take prescription medications regularly, Part D coverage is crucial for managing your costs. Even if you do not take many medications now, enrolling in a Part D plan when you first become eligible helps you avoid late enrollment penalties later.
              </p>
              <Callout type="success">
                <p className="font-semibold text-green-800 mb-1">
                  2026 Inflation Reduction Act Update
                </p>
                <p className="text-green-700 text-sm leading-relaxed">
                  Starting in 2025, the Inflation Reduction Act capped out-of-pocket Part D drug costs at{" "}
                  <strong>$2,100 per year</strong>. Once you reach that cap, your covered drugs cost you nothing for the rest of the year. This is a significant change that limits how much you will spend on covered medications regardless of how expensive your prescriptions are.
                </p>
              </Callout>
              <p className="text-gray-700 leading-relaxed mt-6 mb-8">
                Florida seniors should still compare Part D plans annually because formularies (the list of covered drugs) and costs can change. A plan that worked well for you this year might not be the best choice next year if your medications change or the plan's coverage changes. See our full{" "}
                <Link href="/understanding-part-d" className="text-[#1a3fa8] underline hover:text-blue-800">
                  Understanding Part D guide
                </Link>{" "}
                for a deeper dive.
              </p>
            </section>

            {/* Section: Avoid Mistakes */}
            <section id="avoid-mistakes">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                How to Avoid Common Medicare Mistakes After Turning 65
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many Florida seniors worry about making costly mistakes when choosing Medicare coverage, and rightfully so. The decisions you make during your initial enrollment can affect your costs and coverage for years to come. Understanding the key deadlines and potential pitfalls helps you avoid these common problems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The most expensive mistakes usually involve missing enrollment deadlines or not understanding what your coverage includes.
              </p>
            </section>

            {/* Section: Enrollment Periods */}
            <section id="enrollment-periods">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Enrollment Periods: Key Dates Florida Seniors Need to Remember
              </h2>
              <div className="space-y-4 mb-8">
                {ENROLLMENT_PERIODS.map((ep) => (
                  <div
                    key={ep.name}
                    className={`border rounded-xl p-5 ${ep.color}`}
                  >
                    <div className="flex items-start gap-3">
                      <ep.icon className={`w-5 h-5 shrink-0 mt-0.5 ${ep.iconColor}`} />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{ep.name}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {ep.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Callout type="warning">
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Important:</strong> Missing these deadlines can result in coverage gaps and{" "}
                  <strong>permanent penalties</strong> that increase your premiums for as long as you have Medicare coverage. See the full{" "}
                  <Link href="/enrollment-timeline" className="text-amber-900 underline hover:text-amber-700">
                    Enrollment Timeline
                  </Link>{" "}
                  for exact dates.
                </p>
              </Callout>
            </section>

            {/* Section: Coverage Gaps */}
            <section id="coverage-gaps">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Coverage Gaps: How to Protect Yourself from Unexpected Costs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Original Medicare does not cover everything, leaving you responsible for deductibles, coinsurance, and services that are not covered at all. For example, Medicare typically does not cover dental care, vision care, hearing aids, or long-term care services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Medicare Supplement Insurance (Medigap)</strong> policies help fill these gaps by covering some or all of your out-of-pocket costs for Medicare-covered services. These policies are standardized, so a Plan G from one company offers the same benefits as Plan G from another company, though prices may differ.
              </p>
              <Callout type="warning">
                <p className="font-semibold text-amber-800 mb-1">
                  Florida Medigap Open Enrollment Window
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  In Florida, you have a <strong>six-month Medigap Open Enrollment Period</strong> that begins when you are 65 and enrolled in Medicare Part B. During this time, you can buy any Medigap policy without answering health questions or being denied coverage due to pre-existing conditions.{" "}
                  <strong>This window cannot be extended or repeated</strong>, making it one of the most important deadlines you will face.
                </p>
              </Callout>
              <p className="text-gray-700 leading-relaxed mt-6 mb-8">
                Learn more in our guide:{" "}
                <Link href="/do-i-need-a-supplement" className="text-[#1a3fa8] underline hover:text-blue-800">
                  Do I Need a Medicare Supplement?
                </Link>
              </p>
            </section>

            {/* Section: Savings */}
            <section id="savings">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Maximizing Savings: Tips for Florida Seniors on a Budget
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Healthcare costs can strain any retirement budget, but there are several strategies Florida seniors can use to reduce their Medicare-related expenses. From taking advantage of free preventive services to finding financial assistance programs, smart planning can save you hundreds or even thousands of dollars each year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The key is understanding what resources are available and how to use them effectively. Many seniors do not realize how many cost-saving opportunities exist within the Medicare system.
              </p>
            </section>

            {/* Section: Savings Programs */}
            <section id="savings-programs">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Medicare Savings Programs: What Are They and Who Qualifies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Medicare Savings Programs (MSPs) help pay Medicare premiums, deductibles, and coinsurance for people with limited income and resources. These state programs can significantly reduce your Medicare costs if you qualify.
              </p>
              <div className="space-y-4 mb-6">
                {SAVINGS_PROGRAMS.map((prog) => (
                  <div
                    key={prog.name}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5"
                  >
                    <div className="w-10 h-10 bg-[#1a3fa8] rounded-full flex items-center justify-center shrink-0">
                      <prog.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{prog.name}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {prog.covers}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                In Florida, you can apply for these programs through your local Medicaid office. Even if you do not think you qualify, it is worth checking because the income limits are higher than many people expect, and the savings can be substantial. Income and resource limits are updated annually, so visit{" "}
                <a
                  href="https://www.medicare.gov"
                  className="text-[#1a3fa8] underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medicare.gov
                </a>{" "}
                or contact your local Medicaid office for the most current figures before applying.
              </p>
            </section>

            {/* Section: Preventive */}
            <section id="preventive">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Using Preventive Services to Stay Healthy and Save Money
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare covers many preventive services at no cost to you when provided by healthcare providers who accept Medicare. These include annual wellness visits, screenings for cancer and other conditions, vaccinations, and counseling services.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {PREVENTIVE_SERVICES.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your <strong>annual wellness visit</strong> is particularly valuable because it gives you and your doctor a chance to review your health, update your medical history, and create a personalized prevention plan. This visit also helps ensure you are getting all the preventive services you need.
              </p>
              <h3 className="font-serif text-xl font-bold text-gray-900 mt-8 mb-4">
                Reviewing and Comparing Plans Annually
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your health needs and Medicare plan options change over time, which is why it is important to review your coverage each year during the Annual Enrollment Period. Plans can change their costs, coverage, and provider networks from year to year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                When comparing plans, look at the total cost of coverage, not just the monthly premium. Consider deductibles, copayments, coinsurance, and whether your doctors and hospitals are in the plan's network. If you take prescription drugs, check that they are covered and what you will pay for them.
              </p>
            </section>

            {/* Section: Trusted Guidance */}
            <section id="trusted-guidance">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
                Where Florida Seniors Can Find Trusted Medicare Guidance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With so much conflicting information about Medicare, it is natural to feel uncertain about who to trust for guidance. You want clear, unbiased advice without high-pressure sales tactics or hidden agendas. Fortunately, Florida offers several resources designed specifically to help seniors make informed Medicare decisions.
              </p>
              <Callout type="info">
                <h3 className="font-bold text-gray-900 mb-3">Florida SHINE Program</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  The Florida SHINE program (Serving Health Insurance Needs of Elders) provides{" "}
                  <strong>free, unbiased Medicare counseling</strong> to Florida residents. SHINE counselors are trained volunteers who can help you understand your options, compare plans, and resolve Medicare-related problems. They do not sell insurance, so you can trust that their advice is focused on helping you find the best coverage for your situation.
                </p>
                <p className="text-gray-700 text-sm">
                  Call <strong>1-800-963-5337</strong> or visit their website to find local counseling sites.
                </p>
              </Callout>
              <h3 className="font-serif text-xl font-bold text-gray-900 mt-8 mb-4">
                How to Choose a Medicare Advisor You Can Trust
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you decide to work with a Medicare insurance agent or broker, look for someone who is licensed in Florida and represents multiple insurance companies rather than just one. This ensures they can offer you a range of options rather than steering you toward a single plan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ask potential advisors about their experience, credentials, and how they are compensated. Reputable agents will be transparent about how they earn commissions and will not pressure you to make immediate decisions.
              </p>
              <Callout type="warning">
                <p className="font-semibold text-amber-800 mb-1">Watch Out For</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Be cautious of unsolicited phone calls, door-to-door sales, or high-pressure tactics. Legitimate Medicare advisors will give you time to review your options and will not ask for personal information like Social Security numbers or bank account details over the phone.
                </p>
              </Callout>
            </section>

            {/* CTA Box */}
            <div className="bg-[#1a3fa8] rounded-2xl p-8 text-center mt-10 mb-12">
              <User className="w-10 h-10 text-[#f5a800] mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Need Medicare Advice? We Can Help!
              </h3>
              <p className="text-blue-200 mb-5 leading-relaxed">
                Get expert, unbiased support from a licensed Florida Medicare agent at no cost to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:8136995559"
                  className="flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5" /> Call 813-699-5559
                </a>
                <a
                  href="https://medicareinfopro.com/contact/"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                >
                  Get My Free Consultation
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <section id="faq">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 mb-12">
                <FaqAccordion items={FAQS} defaultOpen={null} />
              </div>
            </section>

            {/* Author Bio */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-[#1a3fa8] flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                    Written by
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Medicare Information Project
                  </h3>
                  <p className="text-[#1a3fa8] text-sm font-medium mb-2">
                    Licensed Independent Medicare Agents: Brandon, FL
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Medicare Information Project team consists of licensed, independent Medicare agents serving Florida, Georgia, North Carolina, Arkansas, Kansas, and Texas. We represent 17 organizations offering 149 products in our service area. Our mission is to provide clear, unbiased Medicare guidance at no cost to beneficiaries.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Phone className="w-3.5 h-3.5 text-[#1a3fa8]" /> 813-699-5559
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="w-3.5 h-3.5 text-amber-500" /> BBB A+ Rated
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {RELATED_POSTS.map((post, i) => (
                  <Link
                    key={i}
                    href={post.href}
                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-bold text-[#1a3fa8] uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-900 text-sm mt-1 mb-2 leading-snug group-hover:text-[#1a3fa8] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Compliance Disclaimer */}
            <div className="mt-12 p-5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 leading-relaxed">
              <p className="font-semibold text-gray-700 mb-1">Compliance Disclosure</p>
              We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity. Medicare Information Project | 915 Oakfield Dr, Suite A, Brandon, FL 33511 | 813-699-5559.
            </div>
          </article>

          {/* Sidebar TOC */}
          <TOCSidebar activeSection={activeSection} />
        </div>
      </div>

      {/* Bottom CTA Band */}
      <section className="bg-[#0d2260] py-14" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">
            Ready to Maximize Your Medicare Benefits?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Our licensed Florida agents are available to answer your questions. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8136995559"
              className="flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call 813-699-5559
            </a>
            <a
              href="https://medicareinfopro.com/contact/"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/30"
            >
              Get Started Online <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-5">
            915 Oakfield Dr, Suite A · Brandon, FL 33511 · Toll-Free: 888-886-5840
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
