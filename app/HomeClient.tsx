"use client";

/**
 * Home Page - New Design (converted from TestingElements.tsx)
 * Rovix-inspired layout: split hero (dark left + photo right),
 * journey cards, mistakes strip, cost estimator, find plans,
 * latest resources, testimonials, FAQ + advisor panel, CTA banner.
 */

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, CheckCircle, UserPlus, Briefcase, BadgeCheck,
  MapPin, Clock, Quote, Phone, ChevronDown,
  BookOpen, Heart, Stethoscope, DollarSign, Pill, Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-hero-couple_181d53a9.jpg";
const IMG_ADVISOR = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-advisor-session_049ce651.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

// ── Decision Tiles data ──
const DECISION_TILES = [
  {
    icon: <UserPlus size={22} />,
    label: "I'm turning 65 and new to Medicare",
    desc: "Understand your options, deadlines, and first steps before your Initial Enrollment Period closes.",
    href: "/am-i-eligible",
    color: "#1a3fa8",
  },
  {
    icon: <Briefcase size={22} />,
    label: "I'm still working and have employer coverage",
    desc: "Find out when to enroll, whether to delay, and how to avoid costly late-enrollment penalties.",
    href: "/",
    color: "#059669",
  },
  {
    icon: <BadgeCheck size={22} />,
    label: "I want to review or change my current plan",
    desc: "Compare your options during Open Enrollment and find out if switching could save you money.",
    href: "/",
    color: "#7c3aed",
  },
  {
    icon: <DollarSign size={22} />,
    label: "I need help understanding Medicare costs",
    desc: "Break down premiums, deductibles, copays, and out-of-pocket maximums across plan types.",
    href: "/costs-at-a-glance",
    color: "#d97706",
  },
  {
    icon: <ArrowRight size={22} />,
    label: "I want to switch to Original Medicare",
    desc: "Learn the timing rules, Medigap eligibility, and what to watch out for.",
    href: "/",
    color: "#dc2626",
  },
];

// ── Mistakes data ──
const MISTAKES = [
  { title: "Waiting too long to enroll", detail: "Missing your Initial Enrollment Period can trigger a permanent late penalty - 10% per year added to your Part B premium for life.", color: "#dc2626" },
  { title: "Assuming Medicare covers everything", detail: "Original Medicare has no out-of-pocket maximum. Without a supplement or Advantage plan, a single hospital stay can cost thousands.", color: "#d97706" },
  { title: "Choosing a plan based on premium alone", detail: "A $0 premium plan can cost far more in copays and network restrictions. Total annual cost is what matters, not the monthly sticker price.", color: "#7c3aed" },
  { title: "Not reviewing your plan each year", detail: "Plan formularies, premiums, and networks change every October. A plan that was right last year may no longer be your best option.", color: "#059669" },
  { title: "Skipping Part D because you don't take prescriptions now", detail: "Delaying Part D enrollment when you don't need it yet results in a permanent penalty once you do - 1% per month for every month you waited.", color: "#1a3fa8" },
];

// ── Estimator options ──
const ESTIMATOR_OPTIONS = [
  { id: "fixed", label: "Yes, I'm on a fixed income", result: "Medicare Savings Programs may cover your Part B premium entirely. Many people qualify without knowing it.", range: "$0 – $174/mo", planType: "Medicare Savings Program + Medigap Plan G", color: "#1a3fa8" },
  { id: "rx", label: "Yes, I take regular prescriptions", result: "A Medicare Advantage plan with built-in Part D drug coverage often lowers total annual cost compared to standalone Part D.", range: "$0 – $80/mo", planType: "Medicare Advantage (MAPD)", color: "#059669" },
  { id: "travel", label: "Yes, I travel or split time between states", result: "Original Medicare with a Medigap supplement gives you nationwide provider access without network restrictions.", range: "$120 – $220/mo", planType: "Original Medicare + Medigap Plan G", color: "#7c3aed" },
  { id: "healthy", label: "Yes, I'm generally healthy", result: "A low-premium Medicare Advantage plan with a high deductible may minimize your costs if you rarely need care.", range: "$0 – $40/mo", planType: "Medicare Advantage HMO", color: "#d97706" },
];

export default function HomeClient() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: "#f8f7f4", minHeight: "100vh" }}>
      <Header />

      {/* ── Hero Section ── */}
      <section style={{ width: "100%", margin: 0, padding: 0 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderRadius: 0, overflow: "hidden", minHeight: 560 }}>
          {/* Left Dark Panel */}
          <div className="px-6 sm:px-10 lg:pl-[108px] lg:pr-12 py-12" style={{
            background: "linear-gradient(160deg, #1a3fa8 0%, #0d1f5c 100%)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(245,168,0,0.08)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
                <span style={{ color: "#a0b8f0", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Medicare Guidance</span>
                <div style={{ height: 2, width: 40, background: "#f5a800", borderRadius: 2 }} />
              </div>
              <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Stop Guessing.<br />
                <span style={{ color: "#f5a800" }}>Start Understanding Your Medicare Options.</span>
              </h1>
              <p style={{ color: "#c0cef5", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 560 }}>
                Medicare decisions follow you for years. Get them right the first time with guidance built around your specific situation, not a one-size-fits-all answer.
              </p>
              <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem", marginTop: "1.5rem", flexWrap: "wrap", maxWidth: "100%" }}>
                {[
                  { label: "I'm New to Medicare", icon: <UserPlus size={16} style={{ color: "#3b82f6", flexShrink: 0 }} />, href: "/get-started" },
                  { label: "Working Past 65", icon: <Briefcase size={16} style={{ color: "#f59e0b", flexShrink: 0 }} />, href: "/get-started" },
                  { label: "Already Enrolled", icon: <BadgeCheck size={16} style={{ color: "#10b981", flexShrink: 0 }} />, href: "/get-started" },
                ].map((btn) => (
                  <Link key={btn.label} href={btn.href} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.65rem 1rem", borderRadius: 10,
                    background: "rgba(255,255,255,0.95)", border: "none",
                    color: "#1a2340", textDecoration: "none", fontWeight: 600, fontSize: "0.82rem",
                    transition: "transform 0.15s, box-shadow 0.15s",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  }}>
                    {btn.icon}
                    {btn.label}
                    <ArrowRight size={14} style={{ marginLeft: "auto", color: "#6b7280" }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Photo Panel */}
          <div className="min-h-[280px] lg:min-h-0" style={{ position: "relative", overflow: "hidden" }}>
            <img src={HERO_PHOTO} alt="Senior couple meeting with a Medicare advisor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            {/* Stats badge — hidden on mobile to avoid overlap, shown on lg+ */}
            <div className="hidden lg:block" style={{
              position: "absolute", bottom: 32, left: 32,
              background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
              borderRadius: 14, padding: "1rem 1.4rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)", minWidth: 180,
            }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1a3a1a", lineHeight: 1 }}>10,000+</div>
              <div style={{ fontSize: "0.78rem", color: "#6b7280", marginTop: "0.25rem", fontWeight: 500 }}>Clients helped statewide</div>
              <div style={{ display: "flex", gap: "0.2rem", marginTop: "0.5rem" }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={12} style={{ color: "#f5c842", fill: "#f5c842" }} />)}
              </div>
            </div>
          </div>
          {/* Stats badge for mobile — shown below hero image */}
          <div className="lg:hidden flex items-center gap-4 px-6 py-4" style={{ background: "#f8f9fb", borderTop: "1px solid #e8eaf0" }}>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={14} style={{ color: "#f5c842", fill: "#f5c842" }} />)}
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff" }}>10,000+</div>
            <div style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 500 }}>Clients helped statewide</div>
          </div>
        </div>
      </section>

      {/* ── Journey Section ── */}
      <section id="journey" className="py-10 lg:py-12" style={{ background: "white" }}>
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#1a3fa8] mb-3">Start Here</p>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Medicare Looks Different for Everyone</h2>
            <p className="text-[1.05rem] text-gray-600 max-w-2xl mx-auto">No two situations are alike. Tell us where you are right now and we'll point you toward the information and guidance that actually applies to you.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/journey-new-medicare-v2-j3d35iiZZX3bqSXQUaRxTp.webp", color: "#2563eb", badge: "New to Medicare", title: "Getting started for the first time", desc: "Learn the basics, understand your options, and get a clear action plan." },
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/journey-working-65_04a993cd.jpg", color: "#dc2626", badge: "Working Past 65", title: "Balancing employer coverage with Medicare", desc: "Know when to enroll, what to keep, and how to avoid costly penalties." },
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/journey-already-enrolled_8b3cb1ab.jpg", color: "#059669", badge: "Already Enrolled", title: "Reviewing, switching, or improving your plan", desc: "Make sure you have the best coverage for your needs and budget." },
            ].map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.badge} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-[0.8rem] font-bold text-white" style={{ background: p.color }}>{p.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-[1.2rem] text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                  <p className="text-[0.9rem] text-gray-600 mb-5 leading-relaxed">{p.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[0.9rem] font-bold transition-colors" style={{ color: p.color }}>
                    Explore This Path <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Mistakes Section ── */}
      <CommonMistakesSection />

      {/* ── Cost Estimator Section ── */}
      <CostEstimatorSection />

      {/* ── Find Plans (ZIP search) ── */}
      <FindPlansBlock />

      {/* ── Latest Resources ── */}
      <section className="py-20 lg:py-24" style={{ background: "white" }}>
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#1a3fa8" }}>Latest Updates</p>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Latest Resources</h2>
            <p className="text-[1.05rem] text-gray-600 max-w-2xl mx-auto">Guides, answers, and tools - updated regularly by licensed Medicare professionals.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/blog-scooter-hero_48088844.jpg", category: "Coverage & Claims", title: "Why Medicare Denies Mobility Scooter Claims in Florida (And How to Appeal)", desc: "The most common reasons Medicare turns down scooter requests - and a step-by-step guide to filing a successful appeal.", date: "Updated Apr 2026", href: "/blog-post" },
              { img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop", category: "Tool", title: "Medicare Enrollment Timeline Calculator", desc: "Enter your birthday and employment status to see exactly when you should enroll and what deadlines to watch.", date: "Updated Jan 2026", href: "/enrollment-calculator" },
              { img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop", category: "News", title: "2026 Medicare Advantage Changes in Florida", desc: "Key changes to Medicare Advantage plans in Florida for 2026, including new benefits and network updates.", date: "Updated Jan 2026", href: "#" },
            ].map((a, i) => (
              <motion.a key={i} href={a.href} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[0.75rem] font-bold text-white" style={{ background: "#1a3fa8" }}>{a.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-[1.05rem] font-bold text-gray-900 mb-2 group-hover:text-[#1a3fa8] transition-colors leading-snug" style={{ fontFamily: "var(--font-heading)" }}>{a.title}</h3>
                  <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-4">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.8rem] text-gray-400 flex items-center gap-1.5"><Clock size={13} /> {a.date}</span>
                    <span className="text-[0.85rem] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1" style={{ color: "#1a3fa8" }}>Read <ArrowRight size={14} /></span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="flex justify-center mt-10">
            <a href="/resources" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 font-bold text-[0.95rem] transition-all duration-200"
              style={{ borderColor: "#1a3fa8", color: "#1a3fa8", backgroundColor: "transparent" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1a3fa8"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#1a3fa8"; }}>
              View All Articles <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 lg:py-24" style={{ background: "#f8f9fb" }}>
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#1a3fa8" }}>Real Stories</p>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "I was completely overwhelmed by Medicare options when I turned 65. The guides on this site helped me understand exactly what I needed before I even spoke to an agent.", name: "Margaret T.", link: "New to Medicare", stars: 5 },
              { quote: "I kept working past 65 and had no idea how Medicare relates to my employer plan. The 'Working Past 65' section answered every question I had.", name: "Robert K.", link: "Working Past 65", stars: 5 },
              { quote: "Switching from Plan F to Plan G saved me over $100/month. The comparison guide made it so easy - I didn't even need to call anyone.", name: "Linda M.", link: "Already Enrolled", stars: 5 },
            ].map((r, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <Quote size={32} className="absolute top-6 right-6" style={{ color: "rgba(26,63,168,0.1)" }} />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: r.stars }).map((_, j) => <Star key={j} size={18} className="text-amber-400" fill="currentColor" />)}
                </div>
                <p className="text-[0.95rem] text-gray-700 leading-relaxed mb-6 italic">&ldquo;{r.quote}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-[0.9rem] font-bold text-gray-900">{r.name}</span>
                  <a href="#" className="text-[0.8rem] font-semibold hover:underline" style={{ color: "#1a3fa8" }}>{r.link} →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + Advisor Panel ── */}
      <FAQBlock />

      {/* ── CTA Banner ── */}
      <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>Need help choosing the right plan?</h2>
              <p className="text-[1rem] text-blue-200">Our licensed agents are available to answer your questions - no obligation, no pressure.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:18138699559" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[1rem] font-bold" style={{ background: "linear-gradient(135deg, #f5a800 0%, #f59e0b 100%)", color: "#ffffff" }}>
                <Phone size={18} /> Call Us Now
              </a>
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[1rem] font-bold text-white border-2 border-white/25 hover:border-white/50 transition-colors">
                Get Started Online <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Common Mistakes Section
// ─────────────────────────────────────────────────────────────────────────────
function CommonMistakesSection() {
  return (
    <section style={{ background: "#0d1f5c", padding: "5rem 0" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ display: "inline-block", color: "#f5a800", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Avoid Costly Errors</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem", lineHeight: 1.2, fontFamily: "var(--font-heading)" }}>
            5 Medicare Mistakes That<br />Cost People Every Year
          </h2>
          <p style={{ color: "#93c5fd", fontSize: "1.05rem", margin: "0 auto", maxWidth: 600 }}>Most are avoidable with the right information at the right time.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1rem", marginBottom: "1rem" }}>
          {MISTAKES.slice(0, 3).map((m, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "1.1rem 1.25rem", borderTop: `4px solid ${m.color}`, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: m.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 800 }}>{i + 1}</span>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0d1f5c", lineHeight: 1.35 }}>{m.title}</div>
              <div style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.65 }}>{m.detail}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1rem", maxWidth: 740, margin: "0 auto" }}>
          {MISTAKES.slice(3).map((m, i) => (
            <div key={i + 3} style={{ background: "#fff", borderRadius: 16, padding: "1.1rem 1.25rem", borderTop: `4px solid ${m.color}`, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: m.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 800 }}>{i + 4}</span>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0d1f5c", lineHeight: 1.35 }}>{m.title}</div>
              <div style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.65 }}>{m.detail}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="/resources" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 2rem", borderRadius: 10, background: "#f5a800", color: "#0d1f5c", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
            Learn How to Avoid These
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Cost Estimator Section
// ─────────────────────────────────────────────────────────────────────────────
function CostEstimatorSection() {
  const [selected, setSelected] = React.useState<string | null>(ESTIMATOR_OPTIONS[0].id);
  const active = ESTIMATOR_OPTIONS.find(o => o.id === selected);
  return (
    <section style={{ background: "#f8f9fb", padding: "5rem 0" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ display: "inline-block", color: "#1a3fa8", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Quick Cost Check</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0d1f5c", marginBottom: "1rem", lineHeight: 1.2, fontFamily: "var(--font-heading)" }}>What Might Medicare Cost You?</h2>
          <p style={{ color: "#6b7280", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>Select the statement that best describes your situation and see a rough cost estimate.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "2.5rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {ESTIMATOR_OPTIONS.map(opt => (
              <button key={opt.id} onClick={() => setSelected(opt.id === selected ? null : opt.id)} style={{
                display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", borderRadius: 12,
                border: `2px solid ${selected === opt.id ? opt.color : "#e5e7eb"}`,
                background: selected === opt.id ? `${opt.color}0d` : "#fff",
                cursor: "pointer", textAlign: "left", transition: "border-color 0.2s, background 0.2s",
              }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, border: `2px solid ${selected === opt.id ? opt.color : "#d1d5db"}`, background: selected === opt.id ? opt.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {selected === opt.id && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </span>
                <span style={{ fontSize: "0.925rem", fontWeight: selected === opt.id ? 700 : 500, color: selected === opt.id ? opt.color : "#374151" }}>{opt.label}</span>
              </button>
            ))}
          </div>
          <div style={{ borderRadius: 16, border: `2px solid ${active ? active.color : "#e5e7eb"}`, background: "#fff", padding: "2rem", minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "center", transition: "border-color 0.3s" }}>
            {!active ? (
              <div style={{ textAlign: "center", color: "#9ca3af" }}>
                <p style={{ fontSize: "0.95rem" }}>Select a statement on the left to see your estimate.</p>
              </div>
            ) : (
              <>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: active.color, marginBottom: "0.5rem" }}>Estimated Range</div>
                <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#0d1f5c", marginBottom: "0.25rem", fontFamily: "var(--font-heading)" }}>
                  {active.range}<span style={{ fontSize: "1rem", fontWeight: 500, color: "#6b7280" }}> / month</span>
                </div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "1.25rem" }}>Typical plan type: <strong style={{ color: "#374151" }}>{active.planType}</strong></div>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.7, marginBottom: "1.5rem" }}>{active.result}</p>
                <Link href="/get-started" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", borderRadius: 9, background: active.color, color: "#fff", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", alignSelf: "flex-start" }}>
                  Find Plans in Your Area
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Find Plans Block
// ─────────────────────────────────────────────────────────────────────────────
function FindPlansBlock() {
  const [zip, setZip] = useState("");
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#1a3fa8" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Local Plans</p>
          <h2 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Find Plans Available in Your Area</h2>
          <p className="text-[1.05rem] text-blue-200 max-w-xl mx-auto mb-10">Enter your ZIP code to see Medicare plans, costs, and coverage options specific to where you live.</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md mx-auto">
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
            <Link href={zip.length === 5 ? `/get-started?zip=${zip}` : "/get-started"} className="px-8 py-4 rounded-xl text-[1rem] font-bold transition-all duration-200 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #f5a800 0%, #f59e0b 100%)", color: "#ffffff", textDecoration: "none" }}>
              Search Plans
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ Block with Advisor Panel
// ─────────────────────────────────────────────────────────────────────────────
function FAQBlock() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "What is Medicare and who is eligible?", a: "Medicare is a federal health insurance program primarily for people 65 and older, though some younger people with disabilities or specific conditions also qualify. Most U.S. citizens and permanent residents who have worked and paid Medicare taxes for at least 10 years are eligible." },
    { q: "When should I enroll in Medicare?", a: "Your Initial Enrollment Period begins 3 months before the month you turn 65 and ends 3 months after. If you're still working with employer coverage, you may be able to delay enrollment without penalty. Contact us to understand your specific timeline." },
    { q: "What's the difference between Original Medicare and Medicare Advantage?", a: "Original Medicare (Parts A & B) is provided by the federal government and lets you see any doctor who accepts Medicare. Medicare Advantage (Part C) is offered by private insurers and often includes extra benefits like dental and vision, but typically requires using a network of providers." },
    { q: "Is your service really free?", a: "Yes, 100% free to you. We are licensed, independent insurance agents compensated by the insurance companies - not by you. Our guidance is unbiased because we represent over 100 plans from 17 organizations, so we can recommend what's truly best for your situation." },
    { q: "What states do you serve?", a: "We are licensed and serve clients in Florida, Georgia, North Carolina, Arkansas, Kansas, and Texas. Our office is located in Brandon, Florida, but we assist clients across all six states via phone and video consultations." },
  ];
  return (
    <section className="py-20 lg:py-24" style={{ background: "white" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-10">
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#1a3fa8" }}>Common Questions</p>
              <h2 className="text-3xl sm:text-4xl text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                    <span className="text-[1rem] font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown size={20} className={`shrink-0 text-gray-400 transition-transform duration-200 ${openIdx === i ? "rotate-180 text-[#1a3fa8]" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="px-6 pb-5 text-[0.95rem] text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="sticky top-32 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img src={IMG_ADVISOR} alt="Medicare advisor" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a4a] to-transparent" />
              </div>
              <div className="p-8" style={{ background: "#0a1a4a" }}>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>Need help choosing the right plan?</h3>
                <p className="text-[0.9rem] text-blue-200 leading-relaxed mb-6">Our licensed agents are available to answer your questions - no obligation, no pressure.</p>
                <a href="tel:18138699559" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.95rem] font-bold mb-3" style={{ background: "linear-gradient(135deg, #f5a800 0%, #f59e0b 100%)", color: "#ffffff" }}>
                  <Phone size={16} /> Call Us Now
                </a>
                <Link href="/get-started" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[0.95rem] font-semibold text-white border-2 border-white/20 hover:border-white/40 transition-colors">
                  Get Started Online <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
