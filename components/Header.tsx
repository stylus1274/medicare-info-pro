"use client";

/**
 * Header — Next.js version
 * Converted from React/Wouter to Next.js (next/link, next/navigation)
 */

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Search, Phone, ArrowRight, Shield, Star, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchContent, SearchResult } from "@/lib/searchIndex";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/logo-white_bb567c3d.png";

interface NavLink { label: string; href: string; desc?: string; }
interface NavColumn { heading: string; links: NavLink[]; }
interface NavItem {
  label: string; href: string;
  megaMenu?: { featured: { title: string; desc: string; cta: string; href: string }; columns: NavColumn[]; };
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "New to Medicare", href: "/",
    megaMenu: {
      featured: { title: "Start Your Medicare Journey", desc: "Not sure where to begin? We walk you through everything step by step — no jargon, no pressure.", cta: "Take the Quiz", href: "/medicare-quiz" },
      columns: [
        { heading: "Getting Started", links: [
          { label: "Medicare 101 Overview", href: "/medicare-101", desc: "The basics explained simply" },
          { label: "Am I Eligible?", href: "/am-i-eligible", desc: "Check your eligibility" },
          { label: "Enrollment Timeline", href: "/enrollment-timeline", desc: "Key dates & deadlines" },
          { label: "First Steps Checklist", href: "/first-steps-checklist", desc: "Your action plan" },
        ]},
        { heading: "Key Decisions", links: [
          { label: "Original vs. Advantage", href: "/original-vs-advantage", desc: "Side-by-side comparison" },
          { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "Gap coverage explained" },
          { label: "Understanding Part D", href: "/understanding-part-d", desc: "Drug coverage basics" },
          { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "Premiums & deductibles" },
        ]},
      ],
    },
  },
  {
    label: "Medicare Plans", href: "/medicare-advantage",
    megaMenu: {
      featured: { title: "Find the Right Plan", desc: "Compare every Medicare plan type side by side with unbiased guidance from licensed agents.", cta: "Compare All Plans", href: "/medicare-advantage" },
      columns: [
        { heading: "Original Medicare", links: [
          { label: "Part A — Hospital", href: "/medicare-part-a", desc: "Inpatient coverage" },
          { label: "Part B — Medical", href: "/medicare-part-b", desc: "Doctor visits & outpatient" },
          { label: "Medigap Supplements", href: "/do-i-need-a-supplement", desc: "Fill the gaps" },
          { label: "Part D Drug Plans", href: "/understanding-part-d", desc: "Prescription coverage" },
        ]},
        { heading: "Medicare Advantage", links: [
          { label: "HMO Plans", href: "/hmos", desc: "Network-based coverage" },
          { label: "PPO Plans", href: "/medicare-ppo-plans-in-tampa", desc: "More provider flexibility" },
          { label: "SNP Plans", href: "/medicare-snp-plans", desc: "Special needs plans" },
          { label: "Compare Plan Types", href: "/original-vs-advantage", desc: "See all options" },
        ]},
      ],
    },
  },
  {
    label: "Enrollment", href: "/enrollment-timeline",
    megaMenu: {
      featured: { title: "Don't Miss Your Window", desc: "Missed deadlines can mean permanent penalties. Let us help you stay on track.", cta: "Check My Dates", href: "/enrollment-timeline" },
      columns: [
        { heading: "Enrollment Periods", links: [
          { label: "Turning 65", href: "/enrollment-timeline#iep", desc: "Initial enrollment window" },
          { label: "Annual Enrollment", href: "/enrollment-timeline#aep", desc: "Oct 15 – Dec 7 each year" },
          { label: "Special Enrollment", href: "/enrollment-timeline#sep", desc: "Qualifying life events" },
          { label: "Open Enrollment", href: "/enrollment-timeline#oepa", desc: "Jan 1 – Mar 31 each year" },
        ]},
        { heading: "Avoid Penalties", links: [
          { label: "Part B Late Penalty", href: "/enrollment-timeline#penalty-partb", desc: "10% per year late" },
          { label: "Part D Late Penalty", href: "/enrollment-timeline#penalty-partd", desc: "1% per month late" },
          { label: "Working Past 65", href: "/blog/working-past-65", desc: "Employer coverage rules" },
          { label: "Enrollment Calculator", href: "/enrollment-calculator", desc: "Find your window" },
        ]},
      ],
    },
  },
  {
    label: "Coverage", href: "/coverage-qa",
    megaMenu: {
      featured: { title: "Coverage Search Center", desc: "Search our database of 100+ coverage questions, organized by category.", cta: "Search Coverage", href: "/coverage-qa" },
      columns: [
        { heading: "Common Questions", links: [
          { label: "Dental Coverage", href: "/coverage/dental", desc: "What's covered?" },
          { label: "Vision Coverage", href: "/coverage/vision", desc: "Exams & eyeglasses" },
          { label: "Hearing Aids", href: "/coverage/hearing-aids", desc: "Coverage & alternatives" },
          { label: "Prescription Drugs", href: "/coverage/prescription-drugs", desc: "Formulary & tiers" },
          { label: "Mental Health", href: "/coverage/mental-health", desc: "Therapy & counseling" },
        ]},
        { heading: "Specialized Care", links: [
          { label: "Cancer Treatment", href: "/coverage/cancer-treatment", desc: "Chemo, radiation & more" },
          { label: "Physical Therapy", href: "/coverage/physical-therapy", desc: "Rehab & recovery" },
          { label: "Medical Equipment", href: "/coverage/medical-equipment", desc: "DME coverage rules" },
          { label: "Skilled Nursing", href: "/coverage/skilled-nursing", desc: "Post-hospital care" },
        ]},
      ],
    },
  },
  {
    label: "Resources", href: "/resources",
    megaMenu: {
      featured: { title: "Medicare Resource Library", desc: "Expert-written guides, videos, and tools — all reviewed by licensed professionals.", cta: "Browse Library", href: "/blog" },
      columns: [
        { heading: "Learn", links: [
          { label: "Blog & Articles", href: "/blog", desc: "Latest Medicare news" },
          { label: "In-Depth Guides", href: "/guides", desc: "Comprehensive resources" },
          { label: "FAQ Center", href: "/faq", desc: "Quick answers" },
          { label: "About Us", href: "/about-us", desc: "Meet our team" },
        ]},
        { heading: "Tools", links: [
          { label: "Plan Comparison Tool", href: "/plan-comparison", desc: "Side-by-side compare" },
          { label: "Cost Estimator", href: "/cost-estimator", desc: "Estimate your costs" },
          { label: "Enrollment Calculator", href: "/enrollment-calculator", desc: "Find your window" },
          { label: "Coverage Search", href: "/coverage-qa", desc: "Does Medicare cover it?" },
        ]},
      ],
    },
  },
  { label: "Contact", href: "/contact-us" },
];

const SUGGESTION_CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Guide: { bg: "#e8edf8", text: "#1a3fa8" },
  "Coverage Q&A": { bg: "#fef3e2", text: "#b45309" },
  Tool: { bg: "#e6f4ea", text: "#166534" },
  Blog: { bg: "#f3e8ff", text: "#6b21a8" },
  Resources: { bg: "#fce7f3", text: "#9d174d" },
};

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} style={{ background: "#d1fae5", color: "inherit", borderRadius: 3, padding: "0 1px" }}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<SearchResult[]>([]);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSearchOpen(false); setSearchVal(""); setSearchSuggestions([]); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSearchSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (searchVal.trim().length >= 2) {
      setSearchSuggestions(searchContent(searchVal).slice(0, 5));
    } else {
      setSearchSuggestions([]);
    }
  }, [searchVal]);

  const handleSearchSubmit = () => {
    if (searchVal.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchOpen(false); setSearchVal(""); setSearchSuggestions([]);
    }
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const activeNavItem = activeMenu ? NAV_ITEMS.find(i => i.label === activeMenu) ?? null : null;

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div style={{ background: "#0d1f5c", color: "#c8d6f5", fontSize: "0.8rem", padding: "0.5rem 0" }}>
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: "1.5rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Shield size={12} style={{ color: "#7b9de0" }} /> Licensed Independent Agents
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Star size={12} style={{ color: "#f5a800", fill: "#f5a800" }} /> BBB A+ Rated
            </span>
            <span className="hidden md:inline">Serving FL, GA, NC, SC, VA, OH, MI, AL, AR, KS, MD, TN &amp; TX</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="tel:8136995559" style={{ color: "#c8d6f5", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", letterSpacing: "0.01em" }}>
              <Phone size={13} /> 813-699-5559
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <header style={{ background: "#fff", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #e8eaf0", overflow: "visible", isolation: "isolate" }}>
        <div style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", height: 88 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
            <div className="ml-5 sm:ml-10 lg:ml-[100px]" style={{
              background: "#1a3fa8", borderRadius: 10, padding: "0.5rem 1rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid #2a52c4", marginRight: "1.5rem",
            }}>
              <img src={LOGO_URL} alt="Medicare Information Project" style={{ height: 52, width: "auto" }} />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ alignItems: "center", flex: 1, padding: "0 0.5rem", justifyContent: "center" }}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.25rem",
                    padding: "0 0.75rem", height: "100%",
                    color: activeMenu === item.label ? "#1a3fa8" : "#1a2340",
                    textDecoration: "none", fontSize: "0.9rem", fontWeight: 700,
                    whiteSpace: "nowrap", transition: "color 0.15s",
                    borderBottom: activeMenu === item.label ? "3px solid #f5a800" : "3px solid transparent",
                  }}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      size={13}
                      style={{
                        color: activeMenu === item.label ? "#1a3fa8" : "#9ca3af",
                        transform: activeMenu === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mega Menu */}
          {activeNavItem?.megaMenu && (
            <div
              style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                width: "min(1060px, calc(100vw - 2rem))", background: "white", borderRadius: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)", border: "1px solid #e8eaf0",
                overflow: "hidden", zIndex: 200, marginTop: 8,
              }}
              onMouseEnter={() => handleMouseEnter(activeNavItem.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr" }}>
                <div style={{ padding: "1.25rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  {activeNavItem.megaMenu!.columns.map((col) => (
                    <div key={col.heading}>
                      <p style={{
                        fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.12em", color: "#1a3fa8",
                        borderBottom: "2px solid #f5a800", paddingBottom: "0.35rem", marginBottom: "0.5rem",
                      }}>
                        {col.heading}
                      </p>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              style={{ textDecoration: "none", display: "block", padding: "0.3rem 0.5rem", borderRadius: 6 }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eff4ff"; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                            >
                              <span style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1a2340" }}>
                                {link.label}
                              </span>
                              {link.desc && (
                                <span style={{ display: "block", fontSize: "0.75rem", color: "#6b7280", marginTop: 1 }}>
                                  {link.desc}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div style={{
                  background: "linear-gradient(135deg, #1a3fa8 0%, #0d1f5c 100%)",
                  padding: "1.25rem 1.5rem",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div>
                    <p style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>
                      {activeNavItem.megaMenu!.featured.title}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "#a8c0e8", lineHeight: 1.5, marginTop: "0.5rem" }}>
                      {activeNavItem.megaMenu!.featured.desc}
                    </p>
                  </div>
                  <Link
                    href={activeNavItem.megaMenu!.featured.href}
                    style={{
                      marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      color: "#f5a800", fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                    }}
                  >
                    {activeNavItem.megaMenu!.featured.cta} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div style={{ height: 4, background: "linear-gradient(90deg, #f5a800, #e09900, #f5a800)" }} />
            </div>
          )}

          {/* Right: Search + CTA + Hamburger */}
          <div className="pr-5 sm:pr-8" style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingLeft: "1.5rem", flexShrink: 0 }}>
            <div ref={searchContainerRef} style={{ display: "flex", alignItems: "center", position: "relative" }}>
              {searchOpen ? (
                <>
                  <div style={{
                    display: "flex", alignItems: "center", background: "#f3f4f6",
                    border: "1.5px solid #c7d2f0", borderRadius: 999,
                    padding: "0.35rem 0.5rem 0.35rem 1rem", gap: "0.4rem", width: 260,
                    position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
                    zIndex: 200,
                  }}>
                    <Search size={15} style={{ color: "#9ca3af", flexShrink: 0 }} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") handleSearchSubmit(); }}
                      placeholder="Search guides, topics…"
                      style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "0.875rem", color: "#111827" }}
                    />
                    <button
                      onClick={() => { setSearchOpen(false); setSearchVal(""); setSearchSuggestions([]); }}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex", alignItems: "center", padding: "0.1rem" }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  {searchSuggestions.length > 0 && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 8px)", right: 0,
                      width: "min(420px, calc(100vw - 2rem))",
                      background: "#fff", borderRadius: 14,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.14)", border: "1px solid #e5e7eb",
                      overflow: "hidden", zIndex: 9999,
                    }}>
                      {searchSuggestions.map((s, i) => {
                        const colors = SUGGESTION_CATEGORY_COLORS[s.category] || { bg: "#f3f4f6", text: "#374151" };
                        return (
                          <a
                            key={i}
                            href={s.url}
                            onClick={() => { setSearchOpen(false); setSearchVal(""); setSearchSuggestions([]); }}
                            style={{
                              display: "flex", alignItems: "flex-start", justifyContent: "space-between",
                              gap: "0.75rem", padding: "0.85rem 1.1rem", textDecoration: "none",
                              borderBottom: i < searchSuggestions.length - 1 ? "1px solid #f3f4f6" : "none",
                              background: "#fff",
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f8faff"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
                          >
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0d1f5c", marginBottom: "0.2rem" }}>
                                {highlightMatch(s.title, searchVal)}
                              </div>
                              <div style={{ fontSize: "0.78rem", color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {s.description}
                              </div>
                            </div>
                            <span style={{
                              flexShrink: 0, fontSize: "0.65rem", fontWeight: 700,
                              letterSpacing: "0.08em", textTransform: "uppercase",
                              padding: "0.25rem 0.55rem", borderRadius: 6,
                              background: colors.bg, color: colors.text, whiteSpace: "nowrap",
                            }}>
                              {s.category}
                            </span>
                          </a>
                        );
                      })}
                      <button
                        onClick={handleSearchSubmit}
                        style={{
                          width: "100%", padding: "0.75rem 1.1rem",
                          background: "#f8f9fb",
                          border: "none", borderTop: "1px solid #e5e7eb", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          fontSize: "0.8rem", fontWeight: 600, color: "#1a3fa8",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#eef2ff"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f8f9fb"; }}
                      >
                        <span>View all results for &ldquo;{searchVal}&rdquo;</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", padding: "0.35rem", display: "flex", alignItems: "center" }}
                  aria-label="Open search"
                >
                  <Search size={20} />
                </button>
              )}
            </div>

            <Link
              href="/free-consultation"
              className="hidden lg:inline-flex"
              style={{
                background: "#f5a800", color: "#0d1f5c",
                padding: "0.55rem 1.25rem", borderRadius: 999, textDecoration: "none",
                fontSize: "0.875rem", fontWeight: 700, alignItems: "center", gap: "0.4rem",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 10px rgba(245,168,0,0.4)",
              }}
            >
              Free Consultation <ArrowRight size={14} />
            </Link>
            <button
              className="lg:hidden p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full border-b bg-white shadow-xl overflow-hidden"
            style={{ position: "sticky", top: 88, zIndex: 99 }}
          >
            <div className="p-5 space-y-1 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <button
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left font-semibold transition-all ${
                      mobileExpanded === item.label ? "bg-blue-50 text-[#1a3fa8]" : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={{ fontSize: "1rem" }}
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform text-gray-400 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && item.megaMenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 pb-3 space-y-4 overflow-hidden"
                      >
                        {item.megaMenu.columns.map((col) => (
                          <div key={col.heading}>
                            <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#1a3fa8] px-3 py-1.5 border-b border-blue-100">
                              {col.heading}
                            </p>
                            {col.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                style={{ fontSize: "0.95rem" }}
                              >
                                {link.label}
                                {link.desc && (
                                  <span className="block text-gray-400 mt-0.5" style={{ fontSize: "0.8rem" }}>{link.desc}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:18138699559"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-[#0d1f5c]"
                  style={{ fontSize: "1rem" }}
                >
                  <Phone size={16} /> Call 813-699-5559
                </a>
                <a
                  href="tel:18888865840"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold border-2 border-[#1a3fa8] text-[#1a3fa8]"
                  style={{ fontSize: "0.95rem" }}
                >
                  <Phone size={14} /> Toll-Free: 888-886-5840
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
