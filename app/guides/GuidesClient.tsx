"use client";

/**
 * /guides
 * In-Depth Guides hub: organized by category, links to all existing guide pages and blog posts
 * Design: Navy/gold MIP brand, card grid layout
 * Rules: No dashes used as punctuation, Brandon-first, Greg photo CTA
 */

import Link from "next/link";
import { ArrowRight, BookOpen, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GREG_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_0f68a894.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

const categories = [
  {
    heading: "Getting Started with Medicare",
    color: "border-blue-200",
    headingColor: "text-[#0d2d6b]",
    guides: [
      {
        title: "Medicare 101: The Complete Beginner's Guide",
        desc: "Everything you need to know about Parts A, B, C, and D before you enroll.",
        href: "/medicare-101",
        badge: "Foundation",
        badgeColor: "bg-blue-100 text-blue-800",
      },
      {
        title: "First Steps Checklist for New Medicare Enrollees",
        desc: "A step-by-step checklist to make sure you do not miss any enrollment deadlines.",
        href: "/first-steps-checklist",
        badge: "Checklist",
        badgeColor: "bg-green-100 text-green-800",
      },
      {
        title: "Am I Eligible for Medicare?",
        desc: "Understand age, disability, and ESRD eligibility rules before you apply.",
        href: "/am-i-eligible",
        badge: "Eligibility",
        badgeColor: "bg-amber-100 text-amber-800",
      },
      {
        title: "Working Past 65: How Medicare Works When You Are Still Employed",
        desc: "If you or your spouse still has employer coverage, read this before enrolling.",
        href: "/blog/working-past-65",
        badge: "Employment",
        badgeColor: "bg-purple-100 text-purple-800",
      },
    ],
  },
  {
    heading: "Choosing the Right Plan",
    color: "border-amber-200",
    headingColor: "text-[#0d2d6b]",
    guides: [
      {
        title: "Original Medicare vs. Medicare Advantage: Which Is Right for You?",
        desc: "A side-by-side comparison of the two main Medicare paths, with pros and cons of each.",
        href: "/original-vs-advantage",
        badge: "Comparison",
        badgeColor: "bg-blue-100 text-blue-800",
      },
      {
        title: "Do I Need a Medicare Supplement (Medigap) Plan?",
        desc: "Learn when a Medigap plan makes financial sense and which plan letter to choose.",
        href: "/do-i-need-a-supplement",
        badge: "Medigap",
        badgeColor: "bg-green-100 text-green-800",
      },
      {
        title: "Why Choose Medigap Plan G?",
        desc: "Plan G is the most popular Medigap plan for new enrollees. Here is why.",
        href: "/blog/why-choose-medigap-plan-g",
        badge: "Medigap",
        badgeColor: "bg-green-100 text-green-800",
      },
      {
        title: "Understanding Medicare HMO Plans",
        desc: "How HMO plans work, what networks mean for your care, and when an HMO makes sense.",
        href: "/hmos",
        badge: "Advantage",
        badgeColor: "bg-amber-100 text-amber-800",
      },
      {
        title: "Medicare PPO Plans in the Brandon Area",
        desc: "How PPO plans differ from HMOs and what to look for in a local PPO network.",
        href: "/medicare-ppo-plans-in-tampa",
        badge: "Advantage",
        badgeColor: "bg-amber-100 text-amber-800",
      },
      {
        title: "Medicare Special Needs Plans (SNPs)",
        desc: "SNPs are designed for people with specific chronic conditions or dual Medicare/Medicaid eligibility.",
        href: "/medicare-snp-plans",
        badge: "Advantage",
        badgeColor: "bg-amber-100 text-amber-800",
      },
    ],
  },
  {
    heading: "Understanding Costs and Coverage",
    color: "border-green-200",
    headingColor: "text-[#0d2d6b]",
    guides: [
      {
        title: "Medicare Costs at a Glance: 2026 Premiums, Deductibles, and Coinsurance",
        desc: "A complete reference for all 2026 Medicare cost figures in one place.",
        href: "/costs-at-a-glance",
        badge: "Costs",
        badgeColor: "bg-red-100 text-red-800",
      },
      {
        title: "Understanding Medicare Part D Drug Coverage",
        desc: "How formularies, tiers, and the coverage gap work for prescription drug plans.",
        href: "/understanding-part-d",
        badge: "Part D",
        badgeColor: "bg-purple-100 text-purple-800",
      },
      {
        title: "How to Maximize Your Medicare Benefits",
        desc: "Strategies to get the most out of your Medicare coverage, from preventive care to appeals.",
        href: "/maximize-benefits",
        badge: "Strategy",
        badgeColor: "bg-blue-100 text-blue-800",
      },
      {
        title: "Why Medicare Coverage Matters More Than You Think",
        desc: "The real financial risk of gaps in Medicare coverage and how to protect yourself.",
        href: "/blog/why-is-medicare-coverage-so-important",
        badge: "Planning",
        badgeColor: "bg-green-100 text-green-800",
      },
    ],
  },
  {
    heading: "Enrollment Timing and Deadlines",
    color: "border-purple-200",
    headingColor: "text-[#0d2d6b]",
    guides: [
      {
        title: "Medicare Enrollment Timeline: Key Dates and Deadlines",
        desc: "Initial Enrollment Period, Annual Enrollment Period, Special Enrollment Period, and Open Enrollment explained.",
        href: "/enrollment-timeline",
        badge: "Enrollment",
        badgeColor: "bg-blue-100 text-blue-800",
      },
      {
        title: "Medicare Without Social Security: How to Enroll on Your Own",
        desc: "If you are not yet collecting Social Security, you must enroll in Medicare separately. Here is how.",
        href: "/blog/medicare-without-social-security",
        badge: "Enrollment",
        badgeColor: "bg-blue-100 text-blue-800",
      },
    ],
  },
  {
    heading: "Medicare Parts A and B Deep Dives",
    color: "border-red-200",
    headingColor: "text-[#0d2d6b]",
    guides: [
      {
        title: "Medicare Part A: Hospital Coverage Explained",
        desc: "Inpatient hospital, skilled nursing facility, hospice, and home health coverage under Part A.",
        href: "/medicare-part-a",
        badge: "Part A",
        badgeColor: "bg-red-100 text-red-800",
      },
      {
        title: "Medicare Part B: Medical Coverage Explained",
        desc: "Outpatient care, preventive services, durable medical equipment, and the Part B premium.",
        href: "/medicare-part-b",
        badge: "Part B",
        badgeColor: "bg-red-100 text-red-800",
      },
    ],
  },
];

export default function GuidesClient() {
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
              <span className="text-white">In-Depth Guides</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-700 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Medicare Resource Library
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              In-Depth Medicare Guides
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Comprehensive, expert-written guides covering every aspect of Medicare, organized by topic so you can find exactly what you need.
            </p>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10">
              {/* Main Content */}
              <div className="space-y-14">
                {categories.map((cat, catIdx) => (
                  <div key={cat.heading}>
                    <div className={`border-l-4 ${cat.color} pl-4 mb-6`}>
                      <h2
                        className={`text-xl md:text-2xl font-bold ${cat.headingColor}`}
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {cat.heading}
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {cat.guides.map((guide, i) => (
                        <motion.div
                          key={guide.href}
                          custom={i}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <Link
                            href={guide.href}
                            className="group flex flex-col h-full bg-white border border-gray-200 hover:border-[#0d2d6b] hover:shadow-md rounded-2xl p-5 transition-all duration-200"
                          >
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <BookOpen className="w-5 h-5 text-[#f5a800] flex-shrink-0 mt-0.5" />
                              <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${guide.badgeColor}`}>
                                {guide.badge}
                              </span>
                            </div>
                            <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-[#0d2d6b] transition-colors">
                              {guide.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed flex-1">{guide.desc}</p>
                            <div className="flex items-center gap-1 mt-3 text-[#0d2d6b] text-xs font-semibold">
                              Read Guide <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
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
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Have questions after reading? Greg Wohl is a licensed Medicare advisor serving Brandon and the greater Hillsborough County area.
                    </p>
                    <a
                      href="tel:+18136995559"
                      className="flex items-center justify-center gap-2 bg-[#0d2d6b] hover:bg-[#0a2558] text-white font-bold px-4 py-3 rounded-xl transition-colors w-full mb-3 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      813-699-5559
                    </a>
                    <Link
                      href="/medicare-quiz"
                      className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2.5 rounded-xl transition-colors w-full text-sm"
                    >
                      Take the Medicare Quiz
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Also Explore</p>
                    <div className="space-y-2">
                      {[
                        { label: "Coverage Q&A Hub", href: "/coverage-qa" },
                        { label: "Blog and Articles", href: "/blog" },
                        { label: "FAQ Center", href: "/faq" },
                        { label: "Plan Comparison Tool", href: "/plan-comparison" },
                        { label: "Cost Estimator", href: "/cost-estimator" },
                        { label: "Enrollment Calculator", href: "/enrollment-calculator" },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d2d6b] hover:font-medium transition-colors py-1 border-b border-gray-100 last:border-0"
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

        {/* Bottom CTA */}
        <section className="bg-[#0d2d6b] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Still Have Questions? Talk to a Local Expert.
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Greg Wohl is a licensed Medicare advisor serving Brandon, Riverview, Valrico, and Hillsborough County. Call for a free, no-pressure consultation.
            </p>
            <a
              href="tel:+18136995559"
              className="inline-flex items-center gap-2 bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 813-699-5559
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
