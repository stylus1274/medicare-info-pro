"use client";

/**
 * Resources Hub — MedicareInfoPro Next.js
 * Design: Warm Guide system — Merriweather headlines, Source Sans 3 body
 * No em dashes. All year refs: 2026.
 */

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Shield,
  DollarSign,
  Calendar,
  Heart,
  FileText,
  ArrowRight,
  Phone,
  ChevronRight,
  Clock,
  User,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const ARTICLES = [
  {
    id: 1,
    title: "Common Reasons Medicare Denies Mobility Scooter Claims in Florida (and How to Appeal)",
    slug: "https://medicareinfopro.com/why-medicare-denies-mobility-scooter-coverage/",
    isInternal: false,
    excerpt:
      "Medicare often denies mobility scooter claims in Florida because medical necessity is not clearly documented, paperwork is incomplete, or the request does not meet Medicare's strict in-home use requirement. Learn the exact steps to appeal.",
    category: "Coverage",
    type: "Guide",
    date: "March 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "How Florida Seniors Can Maximize Medicare Benefits After 65",
    slug: "https://medicareinfopro.com/maximize-medicare-benefits-florida-seniors/",
    isInternal: false,
    excerpt:
      "Florida seniors can maximize Medicare benefits by understanding their options, choosing the right plan based on health needs and budget, and avoiding gaps in coverage. Focus on preventive care, compare plans annually, and review financial assistance programs.",
    category: "Guide",
    type: "Guide",
    date: "March 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1080&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Does Medicare Cover Mobility Scooters In 2026?",
    slug: "https://medicareinfopro.com/medicare-coverage-for-scooters/",
    isInternal: false,
    excerpt:
      "Yes, Medicare Part B may cover a mobility scooter if your doctor documents it as medically necessary. You must meet specific eligibility requirements, use a Medicare-approved supplier, and be prepared to pay 20% of the Medicare-approved cost after your deductible.",
    category: "Coverage",
    type: "FAQ",
    date: "March 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Best Medicare Advantage Plan in Florida for 2026: Compare Top Plans",
    slug: "https://medicareinfopro.com/best-medicare-advantage-plans-florida/",
    isInternal: false,
    excerpt:
      "With over 4 million Floridians enrolled in Medicare, choosing the right Medicare Advantage plan can feel overwhelming. This guide compares the top-rated plans available in Florida for 2026, by cost, network, and coverage.",
    category: "Medicare Advantage",
    type: "Guide",
    date: "August 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1080&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "How to Lower Your Medicare Premiums Based on Income in 2026",
    slug: "https://medicareinfopro.com/how-to-reduce-medicare-premiums-based-on-income-2026/",
    isInternal: false,
    excerpt:
      "You can lower your Medicare premiums based on income by applying for Medicare Savings Programs, appealing IRMAA if your income has changed, or qualifying for Extra Help. These programs help reduce costs for eligible individuals significantly.",
    category: "Costs & Savings",
    type: "Guide",
    date: "February 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1080&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "How Medicare Premiums Are Calculated: A Simple Guide for 2026",
    slug: "https://medicareinfopro.com/how-medicare-premiums-are-calculated/",
    isInternal: false,
    excerpt:
      "Understanding how your Medicare premiums are determined can save you from unexpected costs. Premiums are based on your income from two years prior and can change annually.",
    category: "Costs & Savings",
    type: "Guide",
    date: "February 2026",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/blog-premiums-calc-SYSeYQKG9VsL3eNdaRwh9U.webp",
    featured: false,
  },
];

const TOPICS = [
  { label: "Plans Compared", icon: BookOpen, color: "bg-blue-50 text-blue-700", count: "15 guides", filter: "Guides" },
  { label: "Coverage & Benefits", icon: Shield, color: "bg-green-50 text-green-700", count: "32 answers", filter: "Coverage" },
  { label: "Enrollment & Eligibility", icon: Calendar, color: "bg-red-50 text-red-700", count: "12 guides", filter: "Guides" },
  { label: "Costs & Savings", icon: DollarSign, color: "bg-yellow-50 text-yellow-700", count: "18 articles", filter: "Costs & Savings" },
  { label: "Medigap / Supplement", icon: Heart, color: "bg-purple-50 text-purple-700", count: "14 guides", filter: "Guides" },
  { label: "Medicare Advantage", icon: FileText, color: "bg-sky-50 text-sky-700", count: "20 articles", filter: "Medicare Advantage" },
];

const FILTERS = ["All", "Guides", "FAQs", "Coverage", "Costs & Savings", "Medicare Advantage"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

export default function ResourcesClient() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchesSearch =
        query === "" ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Guides" && a.type === "Guide") ||
        (activeFilter === "FAQs" && a.type === "FAQ") ||
        (activeFilter === "Coverage" && a.category === "Coverage") ||
        (activeFilter === "Costs & Savings" && a.category === "Costs & Savings") ||
        (activeFilter === "Medicare Advantage" && a.category === "Medicare Advantage");

      return matchesSearch && matchesFilter;
    });
  }, [query, activeFilter]);

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== (featured?.id ?? -1));

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Search Band */}
      <section className="bg-[#1a2e6e] pt-10 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#f5a800] font-semibold text-sm tracking-widest uppercase mb-3">
            Resource Library
          </p>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} className="mb-4" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Search 200+ Medicare Guides &amp; Answers
          </h1>
          <p className="text-blue-200 text-base mb-7">
            Guides, FAQs, tools, and news written and reviewed by licensed Medicare professionals
          </p>

          <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
            <Search className="ml-4 text-gray-400 shrink-0" size={20} aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='e.g. "Does Medicare cover dental?" or "Part D cost"'
              className="flex-1 px-4 py-4 text-base text-gray-800 outline-none bg-transparent placeholder:text-gray-400"
              aria-label="Search Medicare guides and articles"
            />
            <button
              className="bg-[#f5a800] hover:bg-[#e09700] text-white font-bold px-6 py-4 transition-colors text-base"
              aria-label="Search"
            >
              Find Answers
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="text-blue-300 text-sm">Popular:</span>
            {["Mobility Scooters", "Part D 2026", "Medicare Advantage", "Enrollment Dates", "Medigap Plan G"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="text-sm text-white border border-blue-400 hover:border-[#f5a800] hover:text-[#f5a800] rounded-full px-3 py-1 transition-colors"
                aria-label={`Search for ${tag}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl font-bold text-[#1a2e6e]">Browse by Topic</h2>
            <button
              onClick={() => setActiveFilter("All")}
              className="text-[#1a2e6e] text-sm font-semibold hover:text-[#f5a800] flex items-center gap-1 transition-colors"
            >
              View all topics <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TOPICS.map((topic, i) => (
              <motion.button
                key={topic.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onClick={() => setActiveFilter(topic.filter)}
                className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 border border-gray-200 hover:border-[#1a2e6e] hover:shadow-md transition-all group"
                aria-label={`Browse ${topic.label}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${topic.color}`}>
                  <topic.icon size={20} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1a2e6e] leading-tight text-center">{topic.label}</span>
                <span className="text-xs text-gray-500">{topic.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar + Article Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by type">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  role="tab"
                  aria-selected={activeFilter === f}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    activeFilter === f
                      ? "bg-[#1a2e6e] text-white border-[#1a2e6e]"
                      : "bg-white text-gray-600 border-gray-300 hover:border-[#1a2e6e] hover:text-[#1a2e6e]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 shrink-0" aria-live="polite">
              Showing <span className="font-semibold text-gray-800">{filtered.length}</span> results
              {query && <span> for &ldquo;<span className="italic">{query}</span>&rdquo;</span>}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 text-gray-500"
                role="alert"
              >
                <Search size={40} className="mx-auto mb-4 text-gray-300" aria-hidden="true" />
                <p className="text-lg font-semibold text-gray-700">No results found</p>
                <p className="text-sm mt-1">Try a different search term or clear the filter.</p>
                <button
                  onClick={() => { setQuery(""); setActiveFilter("All"); }}
                  className="mt-4 text-[#1a2e6e] font-semibold underline text-sm"
                >
                  Clear search
                </button>
              </motion.div>
            ) : (
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {featured && (
                  <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
                    <ArticleCard article={featured} featured />
                  </motion.div>
                )}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((article, i) => (
                      <motion.div key={article.id} custom={i + 1} initial="hidden" animate="visible" variants={fadeUp}>
                        <ArticleCard article={article} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {filtered.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-sm text-gray-500 mb-4">Showing {filtered.length} of 180+ articles</p>
              <a
                href="https://medicareinfopro.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#1a2e6e] text-[#1a2e6e] font-bold px-8 py-3 rounded-lg hover:bg-[#1a2e6e] hover:text-white transition-all"
                aria-label="View all articles on MedicareInfoPro.com (opens in new tab)"
              >
                View All Articles on MedicareInfoPro.com <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Internal Tools Section */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-xl font-bold text-[#1a2e6e] mb-2">Free Medicare Tools</h2>
          <p className="text-gray-600 text-sm mb-6">Use these interactive tools to get personalized answers in minutes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Enrollment Calculator", desc: "Find your exact enrollment window and coverage start date.", href: "/enrollment-calculator", icon: Calendar, color: "bg-blue-600" },
              { label: "Am I Eligible?", desc: "Check your eligibility for Medicare in under 2 minutes.", href: "/am-i-eligible", icon: Shield, color: "bg-green-600" },
              { label: "Original vs. Advantage", desc: "Compare the two main Medicare paths side by side.", href: "/original-vs-advantage", icon: BookOpen, color: "bg-purple-600" },
              { label: "Costs at a Glance", desc: "See all 2026 Medicare premiums and deductibles in one place.", href: "/costs-at-a-glance", icon: DollarSign, color: "bg-amber-600" },
            ].map((tool) => (
              <Link
                key={tool.label}
                href={tool.href}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-[#1a2e6e] transition-all group flex flex-col gap-3"
                aria-label={tool.label}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tool.color}`}>
                  <tool.icon size={20} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-[#1a2e6e] text-sm group-hover:text-[#f5a800] transition-colors">{tool.label}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{tool.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-[#1a2e6e] text-xs font-semibold mt-auto group-hover:text-[#f5a800] transition-colors">
                  Open Tool <ArrowRight size={12} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#f5a800] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a2e6e] mb-3">
            Still have questions? Talk to a licensed agent.
          </h2>
          <p className="text-[#1a2e6e]/80 text-base mb-8 max-w-xl mx-auto">
            Our Florida-based Medicare specialists are available at no cost to you. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8136995559"
              className="inline-flex items-center justify-center gap-2 bg-[#1a2e6e] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#152558] transition-colors text-base"
              aria-label="Call MIP at (813) 699-5559"
            >
              <Phone size={18} aria-hidden="true" /> Call (813) 699-5559
            </a>
            <Link
              href="/enrollment-calculator"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a2e6e] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-base border-2 border-[#1a2e6e]"
            >
              Use the Enrollment Calculator <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Article Card Component
function ArticleCard({ article, featured = false }: { article: typeof ARTICLES[0]; featured?: boolean }) {
  const categoryColors: Record<string, string> = {
    Coverage: "bg-green-100 text-green-800",
    Guide: "bg-blue-100 text-blue-800",
    "Costs & Savings": "bg-yellow-100 text-yellow-800",
    "Medicare Advantage": "bg-sky-100 text-sky-800",
    FAQ: "bg-purple-100 text-purple-800",
  };
  const badgeClass = categoryColors[article.category] || "bg-gray-100 text-gray-700";

  const CardWrapper = ({ children }: { children: React.ReactNode }) =>
    article.isInternal ? (
      <Link href={article.slug} className="block group h-full">
        {children}
      </Link>
    ) : (
      <a href={article.slug} target="_blank" rel="noopener noreferrer" className="block group h-full" aria-label={`Read: ${article.title} (opens in new tab)`}>
        {children}
      </a>
    );

  if (featured) {
    return (
      <CardWrapper>
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col md:flex-row">
          <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-4 left-4 bg-[#f5a800] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Featured
            </span>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${badgeClass}`}>
                {article.category}
              </span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{article.type}</span>
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1a2e6e] leading-snug mb-3 group-hover:text-[#f5a800] transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" />{article.readTime}</span>
              <span>{article.date}</span>
            </div>
            <div className="mt-5 flex items-center gap-1 text-[#1a2e6e] font-bold text-sm group-hover:text-[#f5a800] transition-colors">
              Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper>
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${badgeClass}`}>
            {article.category}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-serif text-base font-bold text-[#1a2e6e] leading-snug mb-2 group-hover:text-[#f5a800] transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
            <span className="flex items-center gap-1"><Clock size={11} aria-hidden="true" />{article.readTime}</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
