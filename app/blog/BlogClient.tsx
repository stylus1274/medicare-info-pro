"use client";

/**
 * Blog Listing , MIP Next.js Client Component
 * Design: MIP brand , navy/gold, editorial magazine-style layout
 * Sections: Page Header + Search → Sticky Category Filter → Featured Post → Article Grid + Sidebar
 * All year references updated to 2026.
 */

import { useState, ReactNode } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ChevronRight,
  Tag,
  Search,
  ArrowRight,
  Briefcase,
  Shield,
  DollarSign,
  FileText,
  BookOpen,
  Phone,
  TrendingUp,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/working-past-65-hero-KNQjDiJCrME7N7PvAtH8Bp.webp";

type Category = "All" | "Enrollment" | "Plans" | "Costs" | "Coverage" | "Supplements" | "Part D";

const CATEGORIES: Category[] = ["All", "Enrollment", "Plans", "Costs", "Coverage", "Supplements", "Part D"];

const CATEGORY_ICONS: Record<Category, ReactNode> = {
  All: <BookOpen size={14} aria-hidden="true" />,
  Enrollment: <Briefcase size={14} aria-hidden="true" />,
  Plans: <Shield size={14} aria-hidden="true" />,
  Costs: <DollarSign size={14} aria-hidden="true" />,
  Coverage: <FileText size={14} aria-hidden="true" />,
  Supplements: <Star size={14} aria-hidden="true" />,
  "Part D": <Tag size={14} aria-hidden="true" />,
};

const CATEGORY_COLORS: Record<Exclude<Category, "All">, string> = {
  Enrollment: "bg-blue-100 text-blue-700",
  Plans: "bg-purple-100 text-purple-700",
  Costs: "bg-amber-100 text-amber-700",
  Coverage: "bg-emerald-100 text-emerald-700",
  Supplements: "bg-rose-100 text-rose-700",
  "Part D": "bg-teal-100 text-teal-700",
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  live?: boolean;
}

const ARTICLES: Article[] = [
  {
    slug: "/blog/working-past-65",
    title: "Working Past 65: When to Enroll in Medicare",
    excerpt:
      "If you're still working at 65 with employer coverage, you may not need to enroll in Medicare right away , but the rules are nuanced and the penalties for getting it wrong are permanent. Here's everything you need to know.",
    category: "Enrollment",
    author: "Sarah Mitchell",
    date: "April 2026",
    readTime: "12 min read",
    image: HERO_IMG,
    featured: true,
    live: true,
  },
  {
    slug: "/blog/plan-g-complete-guide",
    title: "Medicare Supplement Plan G: The Complete 2026 Guide",
    excerpt:
      "Plan G has become the most popular Medigap plan in America , and for good reason. We break down exactly what it covers, what it costs, and who it's best for.",
    category: "Supplements",
    author: "David Chen",
    date: "March 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/does-medicare-cover-life-alert",
    title: "Does Medicare Cover Life Alert?",
    excerpt:
      "Original Medicare doesn't cover personal emergency response systems like Life Alert , but some Medicare Advantage plans do. Here's what to look for when comparing plans.",
    category: "Coverage",
    author: "Sarah Mitchell",
    date: "March 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/2026-medicare-advantage-changes",
    title: "2026 Medicare Advantage Changes: What Enrollees Need to Know",
    excerpt:
      "CMS has finalized significant changes to Medicare Advantage for 2026, including new Star Ratings adjustments, prior authorization reforms, and benefit changes. Here's what's changing and how it affects you.",
    category: "Plans",
    author: "Michael Torres",
    date: "February 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/irmaa-explained",
    title: "IRMAA Explained: How Your Income Affects Your Medicare Premiums",
    excerpt:
      "If your income exceeds certain thresholds, you'll pay more for Medicare Part B and Part D. We explain how IRMAA works, the 2026 brackets, and how to appeal a surcharge you believe is incorrect.",
    category: "Costs",
    author: "David Chen",
    date: "January 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/part-d-2000-cap",
    title: "The $2,000 Part D Out-of-Pocket Cap: What It Means for You",
    excerpt:
      "Medicare Part D now has a $2,000 annual out-of-pocket cap , the most significant drug coverage change in decades. Here's how it works and who benefits most.",
    category: "Part D",
    author: "Sarah Mitchell",
    date: "January 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/medigap-open-enrollment",
    title: "Medigap Open Enrollment: Your One Chance for Guaranteed Coverage",
    excerpt:
      "Your 6-month Medigap Open Enrollment Period begins when you turn 65 and enroll in Part B. Miss it, and insurers can deny you coverage or charge higher premiums based on your health history.",
    category: "Supplements",
    author: "Michael Torres",
    date: "December 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/annual-enrollment-period-guide",
    title: "Annual Enrollment Period Guide: How to Review and Switch Plans",
    excerpt:
      "Every year from October 15 to December 7, Medicare beneficiaries can switch plans. Here's how to review your current coverage, compare alternatives, and make the best choice.",
    category: "Enrollment",
    author: "Sarah Mitchell",
    date: "October 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    live: false,
  },
  {
    slug: "/blog/why-is-medicare-coverage-so-important",
    title: "Why Is Medicare Coverage So Important?",
    excerpt:
      "Medicare serves as a lifeline for millions of Americans aged 65 and older, providing vital healthcare services, financial protection, and preventive care. Here's why coverage matters.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "May 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    live: true,
  },
  {
    slug: "/blog/medicare-ambulance-coverage-2025",
    title: "Does Medicare Cover Ambulance Rides in 2026?",
    excerpt:
      "Ambulance rides can cost thousands of dollars. Medicare Part B covers them when medically necessary, but strict rules determine when coverage applies, what you owe, and how to avoid surprise bills.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/why-is-health-insurance-so-expensive-in-florida",
    title: "Why Is Health Insurance So Expensive in Florida?",
    excerpt:
      "Florida residents consistently pay more for health insurance than most other Americans. An older population, a large uninsured pool, high hospital prices, and a fragmented insurance market all push premiums higher. Here is what is driving the cost and what you can actually do about it.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/best-medicare-advantage-plans-florida",
    title: "Best Medicare Advantage Plans in Florida 2026",
    excerpt:
      "Florida has one of the most competitive Medicare Advantage markets in the country. Knowing which plans consistently deliver strong value requires looking beyond the premium and understanding what each plan actually covers in your specific area.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
    title: "How to Sign Up for Medicare Without an Agent: Step-by-Step Guide",
    excerpt:
      "Signing up for Medicare is something you can absolutely do on your own. This step-by-step guide walks through every step, from checking your eligibility to confirming your coverage is active.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/medicare-qualifications-florida",
    title: "Medicare Qualifications in Florida: Who Is Eligible?",
    excerpt:
      "Most people think of Medicare as a program that starts at 65, but the eligibility rules are more nuanced than that. Age, work history, disability status, and specific medical conditions all affect when and how you qualify.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/how-much-does-health-insurance-cost-per-month-in-florida",
    title: "How Much Does Health Insurance Cost Per Month in Florida?",
    excerpt:
      "Florida health insurance premiums are among the highest in the country. What you pay depends on your age, the type of coverage, and whether you qualify for subsidies. Here is a clear breakdown of 2026 costs across every major coverage type.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/what-are-the-best-medicare-plans-for-seniors",
    title: "What Are the Best Medicare Plans for Seniors?",
    excerpt:
      "There is no single best Medicare plan. The right choice depends on your health, your doctors, your medications, and how much financial risk you are comfortable carrying. This guide walks through every major option so you can make a confident, informed decision.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/is-reinstating-a-part-d-plan-possible",
    title: "Is Reinstating a Part D Plan Possible?",
    excerpt:
      "Dropping a Medicare Part D plan or missing your initial enrollment window can have lasting financial consequences. Whether you can reinstate coverage depends on your specific situation and which enrollment period applies. Here is what you need to know.",
    category: "Part D",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/how-to-reduce-medicare-premiums-based-on-income-2026",
    title: "How to Reduce Medicare Premiums Based on Income 2026",
    excerpt:
      "If your income is above certain thresholds, you pay more for Medicare Parts B and D through a surcharge called IRMAA. Understanding how IRMAA is calculated, when you can appeal it, and how to plan your income to minimize it can save you hundreds or even thousands of dollars per year.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/medicare-advantage-changes-2026-florida",
    title: "Medicare Advantage Changes 2026: What Florida Enrollees Need to Know",
    excerpt:
      "Medicare Advantage plans change every year, but 2026 brings more significant shifts than most. Florida enrollees who do not review their plan during the Annual Enrollment Period risk facing higher costs, reduced benefits, or coverage gaps.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/medicare-set-aside-explained",
    title: "Medicare Set-Aside Explained: What It Is and When You Need One",
    excerpt:
      "If you are settling a personal injury or workers compensation claim and you are a Medicare beneficiary, you may need a Medicare Set-Aside arrangement. Getting this wrong can result in Medicare refusing to pay your future medical bills.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    live: true,
  },
  {
    slug: "/blog/medicare-vs-medicaid",
    title: "Medicare vs. Medicaid: Understanding the Difference",
    excerpt:
      "Medicare and Medicaid are two separate government programs that are often confused. We explain who qualifies for each, what they cover, and how they can work together for dual-eligible beneficiaries.",
    category: "Coverage",
    author: "David Chen",
    date: "September 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    live: false,
  },
];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  const filtered = rest.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Page Header ── */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.8rem] text-white/50 mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span className="text-white/70" aria-current="page">Blog</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1
                className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-tight mb-3"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Medicare Insights
              </h1>
              <p className="text-[1rem] text-white/70 max-w-xl leading-relaxed">
                Guides, explainers, and tools written by licensed Medicare specialists , updated regularly to reflect the latest rules and rates.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-72 flex-shrink-0">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog articles"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-[0.9rem] focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Filter Bar ── */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div
            className="flex items-center gap-1 overflow-x-auto py-3"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.82rem] font-semibold whitespace-nowrap transition-all duration-150 flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-[#1a3fa8] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {CATEGORY_ICONS[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* ── Articles ── */}
          <main>
            {/* Featured Post only when no filter/search active */}
            {activeCategory === "All" && searchQuery === "" && featured && (
              <div className="mb-12">
                <p className="text-[0.75rem] font-bold uppercase tracking-widest text-[#1a3fa8] mb-4 flex items-center gap-2">
                  <TrendingUp size={13} aria-hidden="true" /> Featured Article
                </p>
                <Link
                  href={featured.live ? featured.slug : "#"}
                  onClick={!featured.live ? (e) => e.preventDefault() : undefined}
                  className="group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                  aria-label={`Read featured article: ${featured.title}`}
                >
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.65) 100%)" }}
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-wider mb-3 ${CATEGORY_COLORS[featured.category]}`}
                      >
                        {CATEGORY_ICONS[featured.category]} {featured.category}
                      </span>
                      <h2
                        className="text-[1.5rem] sm:text-[1.8rem] font-bold text-white leading-tight mb-2"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {featured.title}
                      </h2>
                      <div className="flex items-center gap-4 text-[0.8rem] text-white/70">
                        <span>{featured.author}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} aria-hidden="true" /> {featured.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} aria-hidden="true" /> {featured.readTime}
                        </span>
                      </div>
                    </div>
                    {featured.live && (
                      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[0.7rem] font-bold uppercase tracking-wider">
                        Live
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-[0.925rem] text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-[0.875rem] font-bold text-[#1a3fa8] group-hover:gap-2.5 transition-all">
                      Read the full guide <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Article Grid */}
            <div>
              {activeCategory !== "All" || searchQuery !== "" ? (
                <p className="text-[0.85rem] text-gray-500 mb-6" aria-live="polite">
                  {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
                  {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
                  {searchQuery ? ` matching "${searchQuery}"` : ""}
                </p>
              ) : (
                <p className="text-[0.75rem] font-bold uppercase tracking-widest text-gray-400 mb-6">All Articles</p>
              )}

              {filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <BookOpen size={40} className="mx-auto mb-4 opacity-30" aria-hidden="true" />
                  <p className="text-[1rem] font-semibold text-gray-500">No articles found</p>
                  <p className="text-[0.875rem] mt-1">Try a different category or search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((article) => (
                    <Link
                      key={article.slug}
                      href={article.live ? article.slug : "#"}
                      onClick={!article.live ? (e) => e.preventDefault() : undefined}
                      aria-label={article.live ? `Read: ${article.title}` : `${article.title}  (coming soon)`}
                      className={`group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white ${
                        !article.live ? "cursor-default opacity-80" : ""
                      }`}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider ${CATEGORY_COLORS[article.category]}`}
                          >
                            {article.category}
                          </span>
                          {article.live && (
                            <span className="px-2 py-1 rounded-full bg-emerald-500 text-white text-[0.65rem] font-bold uppercase tracking-wider">
                              Live
                            </span>
                          )}
                          {!article.live && (
                            <span className="px-2 py-1 rounded-full bg-gray-800/70 text-white text-[0.65rem] font-bold uppercase tracking-wider">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3
                          className="text-[1rem] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#1a3fa8] transition-colors"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-[0.825rem] text-gray-500 leading-relaxed mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-[0.75rem] font-semibold text-[#1a3fa8]">{article.author}</span>
                            <div className="flex items-center gap-3 text-[0.75rem] text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar size={11} aria-hidden="true" /> {article.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} aria-hidden="true" /> {article.readTime}
                              </span>
                            </div>
                          </div>
                          {article.live && (
                            <span className="text-[0.8rem] font-bold text-[#1a3fa8] flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read <ArrowRight size={12} aria-hidden="true" />
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block" aria-label="Blog sidebar">
            <div className="sticky top-20 space-y-6">

              {/* Agent CTA */}
              <div
                className="rounded-2xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
              >
                <h3 className="text-[1rem] font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Have Questions?
                </h3>
                <p className="text-[0.85rem] text-white/80 mb-4 leading-relaxed">
                  Our licensed Medicare specialists are available to answer your questions , at no cost to you.
                </p>
                <a
                  href="tel:8136995559"
                  aria-label="Call MIP at (813) 699-5559"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#1a3fa8] font-bold text-[0.875rem] hover:bg-white/90 transition-colors w-full justify-center mb-2"
                >
                  <Phone size={15} aria-hidden="true" />
                  813-699-5559
                </a>
                <Link
                  href="/enrollment-calculator"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 text-white font-semibold text-[0.875rem] hover:bg-white/10 transition-colors w-full justify-center"
                >
                  Enrollment Calculator <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              {/* Popular Tools */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-400 mb-4">Popular Tools</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Enrollment Timeline Calculator", href: "/enrollment-calculator", desc: "Find your personal enrollment dates" },
                    { label: "First Steps Checklist", href: "/first-steps-checklist", desc: "Your 30-step action plan" },
                    { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2026 premiums & deductibles" },
                    { label: "Am I Eligible?", href: "/am-i-eligible", desc: "Check your Medicare eligibility" },
                  ].map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="group flex items-start gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <ArrowRight
                          size={14}
                          className="text-[#1a3fa8] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[0.875rem] font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors">
                            {tool.label}
                          </p>
                          <p className="text-[0.775rem] text-gray-400">{tool.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Browse by Category */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Browse by Category
                </h3>
                <ul className="space-y-1">
                  {CATEGORIES.filter((c) => c !== "All").map((cat) => {
                    const count = ARTICLES.filter((a) => a.category === cat).length;
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => setActiveCategory(cat)}
                          aria-pressed={activeCategory === cat}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[0.875rem] transition-colors ${
                            activeCategory === cat
                              ? "bg-[#1a3fa8]/8 text-[#1a3fa8] font-semibold"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {CATEGORY_ICONS[cat]} {cat}
                          </span>
                          <span className="text-[0.75rem] text-gray-400 font-normal">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <h3
                  className="text-[0.95rem] font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Medicare Updates
                </h3>
                <p className="text-[0.8rem] text-gray-600 mb-4 leading-relaxed">
                  Get notified when we publish new guides and when Medicare rates change.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address for Medicare updates newsletter"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[0.875rem] focus:outline-none focus:border-[#1a3fa8] mb-2 bg-white"
                />
                <button
                  className="w-full py-2.5 rounded-xl bg-[#1a3fa8] text-white font-bold text-[0.875rem] hover:bg-[#0d1f5c] transition-colors"
                  aria-label="Subscribe to Medicare updates newsletter"
                >
                  Subscribe
                </button>
                <p className="text-[0.72rem] text-gray-400 mt-2 text-center">No spam. Unsubscribe anytime.</p>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
