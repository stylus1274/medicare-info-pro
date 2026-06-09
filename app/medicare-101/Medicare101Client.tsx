"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone, ChevronRight, ChevronDown, ChevronUp,
  CheckCircle, XCircle, AlertTriangle, BookOpen,
  Shield, Star, Clock, Calendar, Users, DollarSign,
  FileText, ArrowRight, Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Callout from "@/components/Callout";
import FaqAccordion from "@/components/FaqAccordion";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/pillar-medicare101-hero-f5outgxBhHJbUVbUzgH5fL.webp";

const TOC_ITEMS = [
  { id: "what-is-medicare", label: "What Is Medicare?" },
  { id: "who-qualifies", label: "Who Qualifies?" },
  { id: "the-parts", label: "The 4 Parts of Medicare" },
  { id: "original-vs-advantage", label: "Original Medicare vs. Advantage" },
  { id: "enrollment-periods", label: "Enrollment Periods" },
  { id: "costs", label: "What Does Medicare Cost?" },
  { id: "medigap", label: "Medicare Supplement (Medigap)" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" },
  { id: "next-steps", label: "Your Next Steps" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const PLAN_PARTS = [
  {
    part: "Part A",
    name: "Hospital Insurance",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-[#1a3fa8]",
    icon: "🏥",
    covers: [
      "Inpatient hospital stays",
      "Skilled nursing facility care",
      "Hospice care",
      "Some home health care",
    ],
    cost: "Free for most people (if you or your spouse paid Medicare taxes for 10+ years)",
    note: "Most people pay $0 premium for Part A.",
  },
  {
    part: "Part B",
    name: "Medical Insurance",
    color: "bg-amber-50 border-amber-200",
    headerColor: "bg-[#f5a800]",
    icon: "🩺",
    covers: [
      "Doctor visits & outpatient care",
      "Preventive services",
      "Durable medical equipment",
      "Mental health services",
    ],
    cost: "Standard premium: $202.90/month in 2026 (income-based adjustments may apply)",
    note: "You pay 20% of most services after your deductible.",
  },
  {
    part: "Part C",
    name: "Medicare Advantage",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-700",
    icon: "⭐",
    covers: [
      "All Part A & B benefits",
      "Often includes dental, vision, hearing",
      "Many plans include Part D",
      "Extra benefits vary by plan",
    ],
    cost: "Many plans have $0 premium; you still pay your Part B premium",
    note: "Offered by private insurers - network restrictions apply.",
  },
  {
    part: "Part D",
    name: "Prescription Drug Coverage",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-700",
    icon: "💊",
    covers: [
      "Prescription medications",
      "Retail & mail-order pharmacy",
      "Specialty drugs (with prior auth)",
      "Vaccines in some plans",
    ],
    cost: "Average premium ~$38.99/month in 2026; varies by plan and drugs needed",
    note: "Penalty applies if you delay enrollment without creditable coverage.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Who provides it?", original: "Federal government", advantage: "Private insurance company" },
  { feature: "Network restrictions?", original: "See any doctor who accepts Medicare", advantage: "Usually limited to plan network (HMO/PPO)" },
  { feature: "Referrals needed?", original: "No referrals required", advantage: "HMO plans usually require referrals" },
  { feature: "Out-of-pocket maximum?", original: "No cap - unlimited exposure", advantage: "Annual cap ($9,250 in-network / $13,900 in+out combined)" },
  { feature: "Dental/Vision/Hearing?", original: "Not covered", advantage: "Often included" },
  { feature: "Prescription drugs?", original: "Need separate Part D plan", advantage: "Usually bundled in" },
  { feature: "Travel coverage?", original: "Nationwide - any Medicare provider", advantage: "Limited outside plan area" },
  { feature: "Monthly cost?", original: "Part B premium + Medigap premium", advantage: "Often $0 premium + Part B premium" },
  { feature: "Best for?", original: "Those who want maximum flexibility", advantage: "Those who want extra benefits & cost predictability" },
];

const ENROLLMENT_PERIODS = [
  {
    name: "Initial Enrollment Period (IEP)",
    icon: <Calendar className="w-6 h-6" aria-hidden="true" />,
    color: "border-[#1a3fa8] bg-blue-50",
    iconBg: "bg-[#1a3fa8]",
    when: "7-month window: 3 months before your 65th birthday month, your birthday month, and 3 months after",
    key: "This is your first and most important enrollment window. Missing it can result in permanent late penalties.",
    penalty: "10% per year late penalty on Part B; 1% per month on Part D",
  },
  {
    name: "Special Enrollment Period (SEP)",
    icon: <Shield className="w-6 h-6" aria-hidden="true" />,
    color: "border-green-600 bg-green-50",
    iconBg: "bg-green-600",
    when: "8-month window after losing employer coverage (you or your spouse must have been actively working)",
    key: "If you're still working past 65 with employer coverage, you can delay Medicare without penalty - but only if the employer has 20+ employees.",
    penalty: "No penalty if you enroll during SEP",
  },
  {
    name: "Annual Enrollment Period (AEP)",
    icon: <Clock className="w-6 h-6" aria-hidden="true" />,
    color: "border-[#f5a800] bg-amber-50",
    iconBg: "bg-[#f5a800]",
    when: "October 15 – December 7 every year; changes take effect January 1",
    key: "Use AEP to switch Medicare Advantage plans, switch from Original Medicare to Advantage (or back), or change your Part D drug plan.",
    penalty: "No penalty - this is your annual review window",
  },
  {
    name: "General Enrollment Period (GEP)",
    icon: <AlertTriangle className="w-6 h-6" aria-hidden="true" />,
    color: "border-red-500 bg-red-50",
    iconBg: "bg-red-500",
    when: "January 1 – March 31 each year; coverage starts July 1",
    key: "This is the fallback window if you missed your IEP and don't qualify for a SEP. You will likely owe late enrollment penalties.",
    penalty: "Permanent late penalties apply",
  },
];

const COSTS_2026 = [
  { item: "Part A Premium", cost: "$0 (most people)", note: "Free if 40+ quarters of Medicare taxes paid" },
  { item: "Part A Deductible", cost: "$1,736 per benefit period", note: "Applies each time you're admitted to hospital" },
  { item: "Part B Premium", cost: "$202.90/month", note: "Higher for incomes over $109,000 (IRMAA)" },
  { item: "Part B Deductible", cost: "$283/year", note: "Then you pay 20% of most services" },
  { item: "Part D Premium", cost: "~$38.99/month avg.", note: "Varies by plan; income adjustments apply" },
  { item: "Medicare Advantage", cost: "$0 avg. premium", note: "You still pay Part B premium; copays apply" },
  { item: "Medigap (Plan G)", cost: "$100–$250/month", note: "Covers most out-of-pocket costs after Part B deductible" },
];

const MISTAKES = [
  {
    title: "Missing your Initial Enrollment Period",
    desc: "If you don't enroll when you first become eligible and don't have qualifying employer coverage, you'll pay a permanent late penalty - 10% added to your Part B premium for every 12-month period you were eligible but didn't enroll.",
  },
  {
    title: "Assuming Medicare covers everything",
    desc: "Original Medicare does not cover dental, vision, hearing, or long-term care. It also has no out-of-pocket maximum, meaning a serious illness could cost you tens of thousands of dollars without supplemental coverage.",
  },
  {
    title: "Not comparing Part D plans annually",
    desc: "Drug plan formularies (the list of covered drugs) change every year. A plan that covered your medications cheaply this year may not next year. Always review your plan during the Annual Enrollment Period.",
  },
  {
    title: "Choosing a plan based on premium alone",
    desc: "A $0 premium Medicare Advantage plan may have high copays, narrow networks, and prior authorization requirements that cost you far more than a plan with a modest premium. Always look at total out-of-pocket costs.",
  },
  {
    title: "Not checking if your doctors are in-network",
    desc: "Medicare Advantage plans use provider networks. Before enrolling, verify that your primary care doctor, specialists, and preferred hospital are all in the plan's network - or you may face much higher costs or no coverage at all.",
  },
  {
    title: "Waiting too long to apply for Medigap",
    desc: "During your 6-month Medigap Open Enrollment Period (starts when you're 65 and enrolled in Part B), insurers cannot deny you or charge more based on health conditions. After that window closes, you may be medically underwritten and denied.",
  },
];

const FAQS = [
  {
    q: "Do I have to enroll in Medicare at 65?",
    a: "Not necessarily. If you or your spouse is still actively working and covered by an employer group health plan from an employer with 20 or more employees, you can delay Medicare without penalty. However, if your employer has fewer than 20 employees, Medicare becomes primary and you should enroll at 65 to avoid gaps in coverage.",
  },
  {
    q: "What's the difference between Medicare Advantage and Medigap?",
    a: "Medicare Advantage (Part C) replaces Original Medicare - you get your benefits through a private insurer's network. Medigap (Medicare Supplement) works alongside Original Medicare to pay your share of costs like deductibles and coinsurance. You cannot have both Medicare Advantage and Medigap at the same time.",
  },
  {
    q: "Does Medicare cover dental, vision, and hearing?",
    a: "Original Medicare (Parts A and B) does not cover routine dental, vision, or hearing care. However, many Medicare Advantage plans include these benefits. If you want dental/vision/hearing coverage with Original Medicare, you would need to purchase a standalone dental or vision plan separately.",
  },
  {
    q: "How do I sign up for Medicare?",
    a: "You can enroll online at SSA.gov, by calling Social Security at 1-800-772-1213, or by visiting your local Social Security office. If you're already receiving Social Security benefits when you turn 65, you'll be automatically enrolled in Parts A and B. If not, you need to actively sign up.",
  },
  {
    q: "What is IRMAA?",
    a: "IRMAA stands for Income-Related Monthly Adjustment Amount. If your income reported on your tax return from two years ago exceeds certain thresholds ($109,000 for individuals, $218,000 for couples in 2026), you'll pay a higher Part B and/or Part D premium. The surcharge is applied on a sliding scale based on income.",
  },
  {
    q: "Can I switch from Medicare Advantage back to Original Medicare?",
    a: "Yes. You can switch back to Original Medicare during the Annual Enrollment Period (Oct 15 – Dec 7) or the Medicare Advantage Open Enrollment Period (Jan 1 – Mar 31). Keep in mind that if you switch back to Original Medicare, you may not be able to get a Medigap plan if you're past your guaranteed-issue window.",
  },
  {
    q: "Is Medicare free?",
    a: "Part A is free for most people who paid Medicare taxes for at least 10 years (40 quarters). Part B has a standard monthly premium of $202.90 in 2026. Part D and Medicare Advantage plans have their own premiums. There are also deductibles and cost-sharing for most services. Some low-income individuals may qualify for programs that help pay these costs.",
  },
];

const STATS = [
  { value: "67M+", label: "Americans on Medicare", icon: <Users className="w-5 h-5" aria-hidden="true" /> },
  { value: "65", label: "Age of eligibility", icon: <Calendar className="w-5 h-5" aria-hidden="true" /> },
  { value: "$202.90", label: "Avg. Part B premium/mo", icon: <DollarSign className="w-5 h-5" aria-hidden="true" /> },
  { value: "7 months", label: "Initial enrollment window", icon: <Clock className="w-5 h-5" aria-hidden="true" /> },
];

const MEDIGAP_PLANS = [
  { plan: "Plan G", desc: "Most comprehensive. Covers all gaps except the Part B deductible ($283/year). Best for predictable costs.", badge: "Most Popular" },
  { plan: "Plan N", desc: "Lower premium than Plan G. You pay up to $20 copay for office visits and $50 for ER visits.", badge: "Best Value" },
  { plan: "Plan A", desc: "Basic coverage. Covers Part A coinsurance and hospital costs. Lower premium but less protection.", badge: "Entry Level" },
];

const NEXT_STEPS = [
  { step: "1", title: "Determine your eligibility date", desc: "If you're turning 65, your Initial Enrollment Period starts 3 months before your birthday month. Mark it on your calendar." },
  { step: "2", title: "Decide: Original Medicare or Medicare Advantage?", desc: "Consider your doctors, medications, travel habits, and budget. There's no universal right answer - it depends on your situation." },
  { step: "3", title: "Compare Part D or Advantage plans in your zip code", desc: "Plans vary significantly by area. Use Medicare's Plan Finder tool at Medicare.gov or work with a licensed independent agent." },
  { step: "4", title: "If choosing Original Medicare, apply for Medigap during your open enrollment window", desc: "This is your guaranteed-issue window. Don't wait - it closes 6 months after you enroll in Part B." },
  { step: "5", title: "Enroll through Social Security", desc: "Apply online at SSA.gov, call 1-800-772-1213, or visit your local Social Security office. Apply 3 months before your coverage start date." },
  { step: "6", title: "Review your plan every year during AEP (Oct 15 – Dec 7)", desc: "Plans change annually. Your current plan may no longer be the best fit next year." },
];

const RELATED_POSTS = [
  {
    category: "Coverage",
    title: "Why Medicare Denies Mobility Scooter Claims in Florida (And How to Appeal)",
    excerpt: "Learn the most common reasons Medicare denies DME claims and the five-level appeal process that can reverse a denial.",
    readTime: "12 min read",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    imgAlt: "Medical professional reviewing Medicare claim documents",
    href: "/blog-post",
    internal: true,
  },
  {
    category: "Guide",
    title: "How Florida Seniors Can Maximize Medicare Benefits After 65",
    excerpt: "A practical guide to getting the most out of your Medicare coverage - from preventive services to financial assistance programs.",
    readTime: "10 min read",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    imgAlt: "Senior couple reviewing Medicare benefits paperwork",
    href: "/maximize-medicare-benefits",
    internal: true,
  },
  {
    category: "Medicare Advantage",
    title: "Best Medicare Advantage Plans in Florida for 2026",
    excerpt: "Compare top-rated Medicare Advantage plans available in Florida, including HMO vs. PPO options and what to look for.",
    readTime: "11 min read",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    imgAlt: "Florida senior comparing Medicare Advantage plan options",
    href: "https://medicareinfopro.com/best-medicare-advantage-plan-florida/",
    internal: false,
  },
];

const TRUST_ITEMS = [
  { icon: <Shield className="w-4 h-4 text-[#1a3fa8]" aria-hidden="true" />, text: "Licensed Independent Agents" },
  { icon: <Star className="w-4 h-4 text-[#f5a800]" aria-hidden="true" />, text: "BBB A+ Rated" },
  { icon: <Users className="w-4 h-4 text-green-600" aria-hidden="true" />, text: "60,000+ Clients Helped" },
  { icon: <CheckCircle className="w-4 h-4 text-green-600" aria-hidden="true" />, text: "100% Free Service" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Medicare101Client() {
  const [activeSection, setActiveSection] = useState("what-is-medicare");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(TOC_ITEMS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(TOC_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* ── HERO ── */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Senior couple reviewing Medicare options with a licensed agent"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2060]/90 via-[#0d2060]/70 to-transparent" />
        <div className="relative z-10 container pb-12 md:pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#f5a800] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Beginner&apos;s Guide
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" /> 20 min read
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-4">
              Medicare 101: The Complete Beginner&apos;s Guide
            </h1>
            <p className="text-white/85 text-lg max-w-xl leading-relaxed">
              Everything you need to understand Medicare - Parts A, B, C &amp; D, enrollment windows, costs, and how to
              choose the right coverage for your situation.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-8 h-8 rounded-full bg-[#f5a800] flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-[#0d2060]" aria-hidden="true" />
                </div>
                <span>Reviewed by a Licensed Medicare Agent</span>
              </div>
              <span className="text-white/40">|</span>
              <span className="text-white/70 text-sm">Updated April 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AT A GLANCE STATS ── */}
      <section className="bg-[#1a3fa8] py-6" aria-label="Medicare at a glance statistics">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[#f5a800] flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-xl leading-none">{s.value}</div>
                  <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="py-12">
        <div className="container flex gap-10 items-start">

          {/* ── LEFT: ARTICLE CONTENT ── */}
          <article className="flex-1 min-w-0">

            {/* Quick Answer Box */}
            <div className="bg-blue-50 border-l-4 border-[#1a3fa8] rounded-r-xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-[#1a3fa8] mb-1">Quick Summary</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Medicare is the federal health insurance program for people 65 and older (and some younger people
                    with disabilities). It has four parts: Part A (hospital), Part B (medical), Part C (Medicare
                    Advantage), and Part D (prescription drugs). Most people enroll during a 7-month window around their
                    65th birthday. Missing this window can result in permanent late penalties.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 1: What Is Medicare */}
            <motion.section
              id="what-is-medicare"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-4">What Is Medicare?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare is the federal health insurance program administered by the Centers for Medicare &amp; Medicaid
                Services (CMS). It was signed into law in 1965 and today covers more than 67 million Americans -
                primarily people 65 and older, as well as certain younger individuals with qualifying disabilities or
                conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike employer-sponsored health insurance, Medicare is not a single plan. It is a framework of
                different &quot;parts,&quot; each covering a different category of health care. Understanding how these
                parts work together - and how to choose the right combination for your situation - is the foundation of
                making smart Medicare decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Medicare is funded through payroll taxes (the Medicare tax you&apos;ve paid throughout your working
                life), monthly premiums paid by enrollees, and general federal revenue. Most people who have worked and
                paid Medicare taxes for at least 10 years receive Part A at no cost.
              </p>
            </motion.section>

            {/* SECTION 2: Who Qualifies */}
            <motion.section
              id="who-qualifies"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-4">
                Who Qualifies for Medicare?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You are eligible for Medicare if you meet one of the following criteria:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Age 65+",
                    desc: "You are 65 or older and a U.S. citizen or permanent legal resident who has lived in the U.S. for at least 5 continuous years.",
                  },
                  {
                    title: "Disability",
                    desc: "You have been receiving Social Security Disability Insurance (SSDI) benefits for 24 months.",
                  },
                  {
                    title: "ALS (Lou Gehrig's Disease)",
                    desc: "You have ALS - Medicare begins the same month your SSDI benefits start, with no 24-month waiting period.",
                  },
                  {
                    title: "End-Stage Renal Disease (ESRD)",
                    desc: "You have permanent kidney failure requiring dialysis or a kidney transplant, regardless of age.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-[#1a3fa8] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0d2060] text-sm mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Callout type="warning">
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Working past 65?</strong> If you have active employer coverage from a company with 20+
                  employees, you can delay Medicare without penalty. However, you must enroll within 8 months of losing
                  that coverage or you&apos;ll face permanent late enrollment penalties.
                </p>
              </Callout>
            </motion.section>

            {/* SECTION 3: The 4 Parts */}
            <motion.section
              id="the-parts"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-2">
                The 4 Parts of Medicare
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Medicare is divided into four parts. Most people need at least Parts A and B - and then choose between
                adding Part D (drug coverage) or enrolling in a Medicare Advantage plan (Part C) that bundles everything
                together.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {PLAN_PARTS.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-xl border-2 overflow-hidden ${p.color}`}
                  >
                    <div className={`${p.headerColor} px-5 py-3 flex items-center gap-3`}>
                      <span className="text-2xl" role="img" aria-label={p.name}>{p.icon}</span>
                      <div>
                        <span className="text-white font-bold text-lg">{p.part}</span>
                        <span className="text-white/80 text-sm ml-2">- {p.name}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What It Covers</p>
                      <ul className="space-y-1.5 mb-4">
                        {p.covers.map((c, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {c}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-white/70 rounded-lg p-3 border border-white">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Cost</p>
                        <p className="text-sm text-gray-700">{p.cost}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3 italic">{p.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 4: Original Medicare vs. Advantage */}
            <motion.section
              id="original-vs-advantage"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-2">
                Original Medicare vs. Medicare Advantage
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This is the most important decision most Medicare enrollees face. Both options cover the same core
                services, but they work very differently. Here is a direct comparison:
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <caption className="sr-only">Comparison of Original Medicare vs. Medicare Advantage</caption>
                  <thead>
                    <tr>
                      <th className="bg-gray-50 text-left px-5 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wider border-b border-gray-200 w-1/3">
                        Feature
                      </th>
                      <th className="bg-[#1a3fa8] text-left px-5 py-3 text-white font-semibold border-b border-blue-700">
                        Original Medicare (Parts A + B)
                      </th>
                      <th className="bg-[#0d2060] text-left px-5 py-3 text-white font-semibold border-b border-blue-900">
                        Medicare Advantage (Part C)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3 font-medium text-gray-700 border-b border-gray-100">{row.feature}</td>
                        <td className="px-5 py-3 text-gray-700 border-b border-gray-100">{row.original}</td>
                        <td className="px-5 py-3 text-gray-700 border-b border-gray-100">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                Neither option is universally &quot;better&quot; - the right choice depends on your health, budget,
                preferred doctors, and how much you travel. A licensed Medicare agent can help you compare plans
                available in your specific zip code.
              </p>
            </motion.section>

            {/* SECTION 5: Enrollment Periods */}
            <motion.section
              id="enrollment-periods"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-2">
                Medicare Enrollment Periods
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When you can enroll in Medicare - and when you can make changes - is governed by specific enrollment
                periods. Missing the right window can result in permanent penalties or coverage gaps.
              </p>
              <div className="space-y-5">
                {ENROLLMENT_PERIODS.map((ep, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-xl border-2 p-5 ${ep.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full ${ep.iconBg} flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {ep.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#0d2060] text-base mb-1">{ep.name}</h3>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>When:</strong> {ep.when}
                        </p>
                        <p className="text-gray-700 text-sm mb-2">{ep.key}</p>
                        <div className="bg-white/60 rounded-lg px-3 py-2 inline-block">
                          <p className="text-xs font-semibold text-gray-500">
                            Penalty: <span className="text-gray-700 font-normal">{ep.penalty}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 6: Costs */}
            <motion.section
              id="costs"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-2">
                What Does Medicare Cost in 2026?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Medicare costs vary significantly depending on which parts and plans you choose. Here are the key 2026
                figures:
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <caption className="sr-only">Medicare 2026 cost breakdown by coverage type</caption>
                  <thead>
                    <tr className="bg-[#1a3fa8]">
                      <th className="text-left px-5 py-3 text-white font-semibold">Coverage</th>
                      <th className="text-left px-5 py-3 text-white font-semibold">2026 Cost</th>
                      <th className="text-left px-5 py-3 text-white font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COSTS_2026.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3 font-medium text-[#0d2060] border-b border-gray-100">{row.item}</td>
                        <td className="px-5 py-3 text-gray-800 font-semibold border-b border-gray-100">{row.cost}</td>
                        <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* SECTION 7: Medigap */}
            <motion.section
              id="medigap"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-4">
                Medicare Supplement Insurance (Medigap)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Original Medicare pays about 80% of most covered services. The remaining 20% - plus deductibles - is
                your responsibility, with no annual cap. For someone with a serious illness, this exposure can be
                substantial.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medigap (also called Medicare Supplement) is private insurance that fills in these gaps. There are 10
                standardized Medigap plans (labeled A through N) sold by private insurers. The most popular plans are
                Plan G (covers almost everything except the Part B deductible) and Plan N (lower premium with some
                copays).
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {MEDIGAP_PLANS.map((p, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#0d2060] text-lg">{p.plan}</span>
                      <span className="text-xs bg-[#1a3fa8] text-white px-2 py-0.5 rounded-full">{p.badge}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <Callout type="warning">
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Important:</strong> You have a guaranteed right to buy any Medigap plan during your 6-month
                  open enrollment window (starting when you&apos;re 65 and enrolled in Part B). After that window,
                  insurers can deny you or charge more based on health conditions in most states.
                </p>
              </Callout>
            </motion.section>

            {/* SECTION 8: Common Mistakes */}
            <motion.section
              id="common-mistakes"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-2">
                6 Common Medicare Mistakes to Avoid
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These are the mistakes we see most often - and the ones that are most costly to fix.
              </p>
              <div className="space-y-4">
                {MISTAKES.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0d2060] mb-1">{m.title}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 9: Next Steps */}
            <motion.section
              id="next-steps"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-4">Your Next Steps</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding Medicare is the first step. Here&apos;s a simple action plan based on where you are in
                the process:
              </p>
              <div className="space-y-3">
                {NEXT_STEPS.map((s, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#1a3fa8] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0d2060] mb-1">{s.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 10: FAQ */}
            <motion.section
              id="faq"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 scroll-mt-28"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d2060] mb-6">
                Frequently Asked Questions
              </h2>
              <FaqAccordion items={FAQS} defaultOpen={null} />
            </motion.section>

            {/* Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-xs text-gray-500 leading-relaxed">
              <p className="font-semibold text-gray-600 mb-1">Disclaimer</p>
              <p>
                This guide is for educational purposes only and does not constitute legal, financial, or medical advice.
                Medicare rules, premiums, and plan availability change annually. Always verify current information at
                Medicare.gov or consult with a licensed Medicare insurance agent before making enrollment decisions.
                Medicare Information Project is a licensed independent insurance agency - we represent multiple carriers
                and do not charge fees for our services.
              </p>
            </div>
          </article>

          {/* ── RIGHT: STICKY SIDEBAR ── */}
          <aside className="hidden lg:block w-72 flex-shrink-0" aria-label="Table of contents and contact">
            <div className="sticky top-28 space-y-6">

              {/* Table of Contents */}
              <nav className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden" aria-label="Page sections">
                <div className="bg-[#1a3fa8] px-4 py-3">
                  <p className="text-white font-bold text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4" aria-hidden="true" /> Table of Contents
                  </p>
                </div>
                <div className="p-3">
                  {TOC_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                        activeSection === item.id
                          ? "bg-blue-50 text-[#1a3fa8] font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3fa8]"
                      }`}
                    >
                      {activeSection === item.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a3fa8] flex-shrink-0" />
                      )}
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* CTA Card */}
              <div className="bg-[#0d2060] rounded-xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-[#f5a800]" aria-hidden="true" />
                  <span className="text-xs text-white/70 font-medium">FREE CONSULTATION</span>
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 leading-snug">
                  Still have questions about Medicare?
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Our licensed agents in Florida can walk you through your options - at no cost to you.
                </p>
                <a
                  href="tel:8136995559"
                  className="flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09800] text-white font-bold py-3 px-4 rounded-lg transition-colors w-full text-sm mb-3"
                  aria-label="Call Medicare Information Project at 813-699-5559"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  813-699-5559
                </a>
                <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors w-full text-sm">
                  Request a Callback <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <p className="text-white/50 text-xs text-center mt-3">
                  No obligation. No pressure. Licensed in FL, GA, NC, SC, VA, OH, MI, AL, AR, KS, MD, TN &amp; TX.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Why Trust MIP?</p>
                <div className="space-y-2.5">
                  {TRUST_ITEMS.map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                      {t.icon}
                      {t.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED GUIDES ── */}
      <section className="bg-gray-50 border-t border-gray-200 py-14" aria-label="Related Medicare guides">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#0d2060]">Related Guides</h2>
            <Link
              href="/resources"
              className="text-[#1a3fa8] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Resources <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-[#1a3fa8] uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-serif font-bold text-[#0d2060] mt-1 mb-2 leading-snug text-base line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    {post.internal ? (
                      <Link
                        href={post.href}
                        className="text-[#1a3fa8] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read <ChevronRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    ) : (
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a3fa8] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read <ChevronRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="bg-[#1a3fa8] py-14" aria-label="Get started with Medicare">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to choose the right Medicare plan?
              </h2>
              <p className="text-white/75 text-lg">
                Our licensed agents are available to answer your questions - no obligation, no pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 bg-[#f5a800] hover:bg-[#e09800] text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-base"
                aria-label="Call 813-699-5559 to speak with a licensed Medicare agent"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call 813-699-5559
              </a>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-base border border-white/20">
                Get Started Online <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
