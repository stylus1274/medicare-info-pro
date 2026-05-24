"use client";

/* ==========================================================================
   Homepage — MIP Next.js v1
   Converted from React/Wouter to Next.js App Router
   ========================================================================== */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Phone, ArrowRight, Shield, Star, DollarSign, CheckCircle2,
  BookOpen, Heart, Stethoscope, Pill, Eye,
  MapPin, Search, Quote, Clock,
} from "lucide-react";

/* ── CDN Image URLs ── */
const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-hero-couple_181d53a9.jpg",
  journeyNew: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/journey-new-medicare-v2-j3d35iiZZX3bqSXQUaRxTp.webp",
  journeyWorking: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/journey-working-65_04a993cd.jpg",
  journeyEnrolled: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/journey-already-enrolled_8b3cb1ab.jpg",
  advisor: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-advisor-session_049ce651.jpg",
};

/* ── Fade-up animation helper ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

/* ========================================================================== */
/*  HERO SECTION                                                               */
/* ========================================================================== */
function HeroSection() {
  return (
    <section className="relative min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Senior couple reviewing Medicare options"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,26,74,0.92) 0%, rgba(10,26,74,0.82) 50%, rgba(10,26,74,0.55) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 py-20 lg:py-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <CheckCircle2 size={16} className="text-amber-400" />
            <span className="text-[0.85rem] font-semibold text-white/90">
              Trusted by 60,000+ clients nationwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-6"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Stop Guessing.{" "}
            <span className="text-amber-400">Start Understanding Your Medicare Options.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.15rem] sm:text-[1.25rem] text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Whether you&apos;re approaching 65, still working, or already enrolled, we&apos;ll help you understand your options with clear, unbiased guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <a
              href="#journey"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-[0.95rem] font-bold text-white transition-all duration-200 hover:translate-x-1"
              style={{ background: "#2563eb" }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              I&apos;m New to Medicare
              <ArrowRight size={16} className="ml-auto" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-[0.95rem] font-bold text-white transition-all duration-200 hover:translate-x-1"
              style={{ background: "#dc2626" }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Working Past 65
              <ArrowRight size={16} className="ml-auto" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-[0.95rem] font-bold text-white transition-all duration-200 hover:translate-x-1"
              style={{ background: "#059669" }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Already Enrolled
              <ArrowRight size={16} className="ml-auto" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  TRUST BAR                                                                  */
/* ========================================================================== */
function TrustBar() {
  const stats = [
    { icon: <Star size={22} className="text-amber-500" fill="currentColor" />, label: "BBB A+ Rated", sub: "Since 2019" },
    { icon: <Shield size={22} className="text-[#1a3fa8]" />, label: "Licensed in All 50 States", sub: "Full national coverage" },
    { icon: <CheckCircle2 size={22} className="text-emerald-600" />, label: "60,000+ Clients Helped", sub: "Medicare enrollments" },
    { icon: <Star size={22} className="text-amber-500" />, label: "Independently Reviewed", sub: "By Medicare professionals" },
    { icon: <BookOpen size={22} className="text-[#1a3fa8]" />, label: "600+ Pages of Content", sub: "Comprehensive guidance" },
  ];

  return (
    <section className="border-b" style={{ background: "#f8f9fb" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-5">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <div className="shrink-0">{s.icon}</div>
              <div>
                <p className="text-[0.85rem] font-bold text-gray-900 leading-tight">{s.label}</p>
                <p className="text-[0.75rem] text-gray-500">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  JOURNEY SECTION                                                            */
/* ========================================================================== */
function JourneySection() {
  const paths = [
    {
      img: IMG.journeyNew,
      color: "#2563eb",
      badge: "New to Medicare",
      title: "Getting started for the first time",
      desc: "Learn the basics, understand your options, and get a clear action plan.",
    },
    {
      img: IMG.journeyWorking,
      color: "#dc2626",
      badge: "Working Past 65",
      title: "Balancing employer coverage with Medicare",
      desc: "Know when to enroll, what to keep, and how to avoid costly penalties.",
    },
    {
      img: IMG.journeyEnrolled,
      color: "#059669",
      badge: "Already Enrolled",
      title: "Reviewing, switching, or improving your plan",
      desc: "Make sure you have the best coverage for your needs and budget.",
    },
  ];

  return (
    <section id="journey" className="py-20 lg:py-24" style={{ background: "white" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1a3fa8] mb-3">
            Personalized Guidance
          </p>
          <h2
            className="text-3xl sm:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Where Are You on Your Medicare Journey?
          </h2>
          <p className="text-[1.05rem] text-gray-600 max-w-2xl mx-auto">
            Everyone&apos;s situation is different. Choose the path that matches yours and we&apos;ll guide you through exactly what you need to know.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.badge}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-[0.8rem] font-bold text-white"
                  style={{ background: p.color }}
                >
                  {p.badge}
                </span>
              </div>
              <div className="p-6">
                <h3
                  className="text-[1.2rem] text-gray-900 mb-2"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[0.9rem] text-gray-600 mb-5 leading-relaxed">{p.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.9rem] font-bold transition-colors"
                  style={{ color: p.color }}
                >
                  Explore This Path <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  EXPLORE BY TOPIC                                                           */
/* ========================================================================== */
function TopicSection() {
  const topics = [
    { icon: <BookOpen size={28} />, color: "#1a3fa8", title: "Medicare Plans Compared", desc: "Original Medicare, Advantage, Supplement, and Part D: side-by-side comparisons.", count: "15 articles" },
    { icon: <Heart size={28} />, color: "#dc2626", title: "Coverage & Benefits", desc: "What Medicare covers, what it doesn't, and how to fill the gaps.", count: "32 answers" },
    { icon: <Stethoscope size={28} />, color: "#059669", title: "Enrollment & Eligibility", desc: "When to enroll, how to enroll, and what happens if you're late.", count: "12 guides" },
    { icon: <DollarSign size={28} />, color: "#d97706", title: "Costs & Savings", desc: "Premiums, deductibles, out-of-pocket costs, and ways to save.", count: "18 articles" },
    { icon: <Pill size={28} />, color: "#7c3aed", title: "Medigap / Supplement", desc: "Plan F vs G vs N, how they work, and which is right for you.", count: "14 guides" },
    { icon: <Eye size={28} />, color: "#0891b2", title: "Medicare Advantage", desc: "HMO vs PPO, extra benefits, and 2026 plan changes.", count: "20 articles" },
  ];

  return (
    <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1a3fa8] mb-3">
            Comprehensive Guides
          </p>
          <h2
            className="text-3xl sm:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Explore by Topic
          </h2>
          <p className="text-[1.05rem] text-gray-600 max-w-2xl mx-auto">
            Six comprehensive guides covering everything you need to know about Medicare. Each one is a complete resource, not a sales pitch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t, i) => (
            <motion.a
              key={i}
              href="#"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: t.color }}
              >
                {t.icon}
              </div>
              <h3 className="text-[1.1rem] font-bold text-gray-900 mb-2 group-hover:text-[#1a3fa8] transition-colors">
                {t.title}
              </h3>
              <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-4">{t.desc}</p>
              <span className="text-[0.8rem] font-semibold text-gray-400">{t.count}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  FIND PLANS — ZIP code search                                               */
/* ========================================================================== */
function FindPlansSection() {
  const [zip, setZip] = useState("");

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#1a3fa8" }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
            Local Plans
          </p>
          <h2
            className="text-3xl sm:text-4xl text-white mb-4"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Find Plans Available in Your Area
          </h2>
          <p className="text-[1.05rem] text-blue-200 max-w-xl mx-auto mb-10">
            Enter your ZIP code to see Medicare plans, costs, and coverage options specific to where you live.
          </p>

          <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                placeholder="Enter your ZIP code"
                className="w-full pl-11 pr-4 py-4 rounded-xl text-[1rem] bg-white text-gray-900 placeholder:text-gray-400 outline-none border-2 border-transparent focus:border-amber-400 transition-colors"
              />
            </div>
            <button
              className="px-8 py-4 rounded-xl text-[1rem] font-bold text-[#0d1f5c] transition-all duration-200 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #f5a800 0%, #f59e0b 100%)" }}
            >
              <Search size={18} className="inline mr-2" />
              Find Plans
            </button>
          </div>

          <p className="text-[0.8rem] text-blue-300 mt-4">
            No obligation. No spam. Just plans available in your area.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  LATEST RESOURCES                                                           */
/* ========================================================================== */
function ResourcesSection() {
  const articles = [
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/blog-scooter-hero_48088844.jpg",
      category: "Coverage & Claims",
      title: "Why Medicare Denies Mobility Scooter Claims in Florida (And How to Appeal)",
      desc: "The most common reasons Medicare turns down scooter requests, plus a step-by-step guide to filing a successful appeal.",
      date: "Updated Apr 2026",
      href: "/blog-post",
    },
    {
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
      category: "Tool",
      title: "Medicare Enrollment Timeline Calculator",
      desc: "Enter your birthday and employment status to see exactly when you should enroll and what deadlines to watch.",
      date: "Updated Jan 2026",
      href: "/enrollment-calculator",
    },
    {
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
      category: "News",
      title: "2026 Medicare Advantage Changes in Florida",
      desc: "Key changes to Medicare Advantage plans in Florida for 2026, including new benefits and network updates.",
      date: "Updated Jan 2026",
      href: "#",
    },
  ];

  return (
    <section className="py-20 lg:py-24" style={{ background: "white" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1a3fa8] mb-3">
            Latest Updates
          </p>
          <h2
            className="text-3xl sm:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Latest Resources
          </h2>
          <p className="text-[1.05rem] text-gray-600 max-w-2xl mx-auto">
            Guides, answers, and tools updated regularly by licensed Medicare professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.a
              key={i}
              href={a.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[0.75rem] font-bold text-white bg-[#1a3fa8]">
                  {a.category}
                </span>
              </div>
              <div className="p-6">
                <h3
                  className="text-[1.05rem] font-bold text-gray-900 mb-2 group-hover:text-[#1a3fa8] transition-colors leading-snug"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  {a.title}
                </h3>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-4">{a.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.8rem] text-gray-400 flex items-center gap-1.5">
                    <Clock size={13} /> {a.date}
                  </span>
                  <span className="text-[0.85rem] font-bold text-[#1a3fa8] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="flex justify-center mt-10"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 font-bold text-[0.95rem] transition-all duration-200 hover:bg-[#1a3fa8] hover:text-white hover:border-[#1a3fa8]"
            style={{ borderColor: "#1a3fa8", color: "#1a3fa8" }}
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  TESTIMONIALS                                                               */
/* ========================================================================== */
function TestimonialsSection() {
  const reviews = [
    {
      quote: "I was completely overwhelmed by Medicare options when I turned 65. The guides on this site helped me understand exactly what I needed before I even spoke to an agent.",
      name: "Margaret T.",
      link: "New to Medicare",
      stars: 5,
    },
    {
      quote: "I kept working past 65 and had no idea how Medicare relates to my employer plan. The 'Working Past 65' section answered every question I had.",
      name: "Robert K.",
      link: "Working Past 65",
      stars: 5,
    },
    {
      quote: "Switching from Plan F to Plan G saved me over $100/month. The comparison guide made it so easy I didn't even need to call anyone.",
      name: "Linda M.",
      link: "Already Enrolled",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1a3fa8] mb-3">
            Real Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
            >
              <Quote size={32} className="text-[#1a3fa8]/10 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={18} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-[0.95rem] text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-[0.9rem] font-bold text-gray-900">{r.name}</span>
                <a href="#" className="text-[0.8rem] font-semibold text-[#1a3fa8] hover:underline">
                  {r.link} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  FAQ SECTION                                                                */
/* ========================================================================== */
function FAQSection() {
  const faqs = [
    { q: "What is Medicare and who is eligible?", a: "Medicare is a federal health insurance program primarily for people 65 and older, though some younger people with disabilities or specific conditions also qualify. Most U.S. citizens and permanent residents who have worked and paid Medicare taxes for at least 10 years are eligible." },
    { q: "When should I enroll in Medicare?", a: "Your Initial Enrollment Period begins 3 months before the month you turn 65 and ends 3 months after. If you're still working with employer coverage, you may be able to delay enrollment without penalty. Contact us to understand your specific timeline." },
    { q: "What's the difference between Original Medicare and Medicare Advantage?", a: "Original Medicare (Parts A & B) is provided by the federal government and lets you see any doctor who accepts Medicare. Medicare Advantage (Part C) is offered by private insurers and often includes extra benefits like dental and vision, but typically requires using a network of providers." },
    { q: "Is your service really free?", a: "Yes, 100% free to you. We are licensed, independent insurance agents compensated by the insurance companies, not by you. Our guidance is unbiased because we represent over 100 plans from 17 organizations, so we can recommend what's truly best for your situation." },
    { q: "What states do you serve?", a: "We are licensed and serve clients in Florida, Georgia, North Carolina, Arkansas, Kansas, and Texas. Our office is located in Brandon, Florida, but we assist clients across all six states via phone and video consultations." },
  ];

  return (
    <section className="py-20 lg:py-24" style={{ background: "white" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="mb-10"
            >
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1a3fa8] mb-3">
                Common Questions
              </p>
              <h2
                className="text-3xl sm:text-4xl text-gray-900"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Frequently Asked Questions
              </h2>
            </motion.div>
            <FaqAccordion items={faqs} defaultOpen={0} />
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="sticky top-32 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={IMG.advisor} alt="Medicare advisor" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a4a] to-transparent" />
              </div>
              <div className="p-8" style={{ background: "#0a1a4a" }}>
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  Need help choosing the right plan?
                </h3>
                <p className="text-[0.9rem] text-blue-200 leading-relaxed mb-6">
                  Our licensed agents are available to answer your questions. No obligation, no pressure.
                </p>
                <a
                  href="tel:18138699559"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.95rem] font-bold text-[#0d1f5c] mb-3"
                  style={{ background: "linear-gradient(135deg, #f5a800 0%, #f59e0b 100%)" }}
                >
                  <Phone size={16} /> Call Us Now
                </a>
                <a
                  href="#"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.95rem] font-semibold text-white border-2 border-white/20 hover:border-white/40 transition-colors"
                >
                  Get Started Online <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  CTA BANNER                                                                 */
/* ========================================================================== */
function CTABanner() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl sm:text-3xl text-white mb-2"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Need help choosing the right plan?
            </h2>
            <p className="text-[1rem] text-blue-200">
              Our licensed agents are available to answer your questions. No obligation, no pressure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:18138699559"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[1rem] font-bold text-[#0d1f5c]"
              style={{ background: "linear-gradient(135deg, #f5a800 0%, #f59e0b 100%)" }}
            >
              <Phone size={18} /> Call Us Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[1rem] font-bold text-white border-2 border-white/25 hover:border-white/50 transition-colors"
            >
              Get Started Online <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  PAGE ASSEMBLY                                                              */
/* ========================================================================== */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <JourneySection />
        <TopicSection />
        <FindPlansSection />
        <ResourcesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
