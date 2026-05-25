"use client";

/**
 * BlogPostClient — Shared blog post template
 * Design: MIP brand — navy/gold, editorial long-form layout
 * Sections: Hero → Article Body → FAQ → CTA → Related Posts
 * Sidebar: TOC, Agent CTA, Related Tools
 */

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Calendar,
  Clock,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Share2,
  BookOpen,
  Star,
  Shield,
  DollarSign,
  FileText,
  Briefcase,
  Tag,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "Enrollment" | "Plans" | "Costs" | "Coverage" | "Supplements" | "Part D";

const CATEGORY_COLORS: Record<Category, string> = {
  Enrollment: "bg-blue-100 text-blue-700",
  Plans: "bg-purple-100 text-purple-700",
  Costs: "bg-amber-100 text-amber-700",
  Coverage: "bg-emerald-100 text-emerald-700",
  Supplements: "bg-rose-100 text-rose-700",
  "Part D": "bg-teal-100 text-teal-700",
};

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  Enrollment: <Briefcase size={12} aria-hidden="true" />,
  Plans: <Shield size={12} aria-hidden="true" />,
  Costs: <DollarSign size={12} aria-hidden="true" />,
  Coverage: <FileText size={12} aria-hidden="true" />,
  Supplements: <Star size={12} aria-hidden="true" />,
  "Part D": <Tag size={12} aria-hidden="true" />,
};

interface KeyTakeaway {
  label: string;
  text: string;
}

interface Subsection {
  heading: string;
  content: string;
}

type PostSection =
  | { type: "intro"; content: string }
  | { type: "keyTakeaways"; items: KeyTakeaway[] }
  | { type: "section"; heading: string; content: string; subsections?: Subsection[] }
  | { type: "summary"; heading: string; content: string }
  | { type: "faq"; items: { question: string; answer: string }[] };

interface RelatedPost {
  title: string;
  href: string;
  category: Category;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: PostSection[];
  relatedPosts: RelatedPost[];
}

interface Props {
  post: BlogPost;
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-[0.95rem] leading-snug">{question}</span>
        {open ? (
          <ChevronUp size={18} className="text-[#1a3fa8] flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed text-[0.925rem]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function BlogPostClient({ post }: Props) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Build TOC from sections
  const tocItems = post.sections
    .filter((s): s is Extract<PostSection, { type: "section" | "summary" }> =>
      s.type === "section" || s.type === "summary"
    )
    .map((s) => ({ id: s.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""), label: s.heading }));

  // Intersection observer for active TOC item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Hero ── */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.8rem] text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span className="text-white/70 truncate max-w-[200px]" aria-current="page">{post.title}</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-wider ${CATEGORY_COLORS[post.category]}`}>
              {CATEGORY_ICONS[post.category]} {post.category}
            </span>
          </div>

          <h1
            className="text-[1.9rem] sm:text-[2.6rem] font-bold leading-tight mb-4 max-w-3xl"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {post.title}
          </h1>
          <p className="text-[1rem] text-white/70 max-w-2xl leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 text-[0.82rem] text-white/60">
            <span className="font-semibold text-white/80">{post.author}</span>
            <span className="text-white/40">·</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} aria-hidden="true" /> {post.date}</span>
            <span className="text-white/40">·</span>
            <span className="flex items-center gap-1.5"><Clock size={13} aria-hidden="true" /> {post.readTime}</span>
            <button
              onClick={handleShare}
              aria-label="Copy article link to clipboard"
              className="flex items-center gap-1.5 ml-auto text-white/60 hover:text-white transition-colors"
            >
              <Share2 size={14} aria-hidden="true" />
              {copied ? "Copied!" : "Share"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      <div className="w-full bg-gray-100">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-b-2xl">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Content Layout ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* ── Article Body ── */}
          <article className="prose-custom" aria-label="Article content">

            {post.sections.map((section, idx) => {
              if (section.type === "intro") {
                return (
                  <div key={idx} className="mb-10">
                    {section.content.split("\n\n").map((para, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed mb-4 text-[1rem]">{para}</p>
                    ))}
                  </div>
                );
              }

              if (section.type === "keyTakeaways") {
                return (
                  <div key={idx} className="mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h2 className="text-[1rem] font-bold uppercase tracking-wider text-blue-700 mb-5 flex items-center gap-2">
                      <CheckCircle2 size={16} aria-hidden="true" /> Key Takeaways
                    </h2>
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div>
                            <span className="font-bold text-gray-900">{item.label}: </span>
                            <span className="text-gray-700 text-[0.925rem] leading-relaxed">{item.text}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              if (section.type === "section") {
                const id = section.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                return (
                  <section
                    key={idx}
                    id={id}
                    ref={(el) => { sectionRefs.current[id] = el; }}
                    className="mb-10 scroll-mt-24"
                  >
                    <h2
                      className="text-[1.5rem] sm:text-[1.7rem] font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-[1rem]">{section.content}</p>
                    {section.subsections?.map((sub, si) => (
                      <div key={si} className="mb-6">
                        <h3
                          className="text-[1.1rem] font-bold text-gray-800 mb-2"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          {sub.heading}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-[0.975rem]">{sub.content}</p>
                      </div>
                    ))}
                  </section>
                );
              }

              if (section.type === "summary") {
                const id = section.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                return (
                  <section
                    key={idx}
                    id={id}
                    ref={(el) => { sectionRefs.current[id] = el; }}
                    className="mb-10 scroll-mt-24 bg-[#0d1f5c]/5 border border-[#0d1f5c]/10 rounded-2xl p-6"
                  >
                    <h2
                      className="text-[1.3rem] font-bold text-[#0d1f5c] mb-3"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-[0.975rem]">{section.content}</p>
                  </section>
                );
              }

              if (section.type === "faq") {
                return (
                  <section key={idx} className="mb-10" aria-label="Frequently asked questions">
                    <h2
                      className="text-[1.5rem] font-bold text-gray-900 mb-6"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                      {section.items.map((item, i) => (
                        <FaqItem key={i} question={item.question} answer={item.answer} />
                      ))}
                    </div>
                  </section>
                );
              }

              return null;
            })}

            {/* ── CTA Band ── */}
            <div
              className="rounded-2xl p-7 text-white mb-10"
              style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
            >
              <h3
                className="text-[1.3rem] font-bold mb-2"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Ready to Compare Medigap Plans?
              </h3>
              <p className="text-white/80 text-[0.9rem] mb-5 leading-relaxed">
                Our licensed Medicare specialists will compare Plan G quotes from multiple carriers — at no cost to you.
              </p>
              <a
                href="tel:8136995559"
                aria-label="Call MIP at (813) 699-5559 to compare Medigap plans"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f5a623] text-[#0d1f5c] font-bold text-[0.9rem] hover:bg-[#e09515] transition-colors"
              >
                <Phone size={16} aria-hidden="true" />
                Call (813) 699-5559
              </a>
            </div>

            {/* ── Related Posts ── */}
            {post.relatedPosts.length > 0 && (
              <section aria-label="Related articles">
                <h2
                  className="text-[1.2rem] font-bold text-gray-900 mb-5"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {post.relatedPosts.map((rel) => (
                    <Link
                      key={rel.href}
                      href={rel.href}
                      className="group block p-4 rounded-xl border border-gray-200 hover:border-[#1a3fa8]/30 hover:bg-blue-50/30 transition-all"
                    >
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider mb-2 ${CATEGORY_COLORS[rel.category]}`}>
                        {rel.category}
                      </span>
                      <p className="text-[0.875rem] font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors leading-snug">
                        {rel.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[0.8rem] text-[#1a3fa8] font-semibold mt-2 group-hover:gap-1.5 transition-all">
                        Read <ArrowRight size={12} aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block" aria-label="Article sidebar">
            <div className="sticky top-20 space-y-6">

              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                  <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                    <BookOpen size={13} aria-hidden="true" /> In This Article
                  </h3>
                  <nav aria-label="Article table of contents">
                    <ul className="space-y-1">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollTo(item.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-[0.85rem] transition-colors ${
                              activeSection === item.id
                                ? "bg-[#1a3fa8]/8 text-[#1a3fa8] font-semibold"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Agent CTA */}
              <div
                className="rounded-2xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
              >
                <h3 className="text-[1rem] font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Get a Free Quote
                </h3>
                <p className="text-[0.85rem] text-white/80 mb-4 leading-relaxed">
                  Compare Plan G rates from multiple carriers. Our specialists are available at no cost to you.
                </p>
                <a
                  href="tel:8136995559"
                  aria-label="Call MIP at (813) 699-5559 for a free Medigap quote"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f5a623] text-[#0d1f5c] font-bold text-[0.875rem] hover:bg-[#e09515] transition-colors w-full justify-center mb-2"
                >
                  <Phone size={15} aria-hidden="true" />
                  813-699-5559
                </a>
                <Link
                  href="/do-i-need-a-supplement"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 text-white font-semibold text-[0.875rem] hover:bg-white/10 transition-colors w-full justify-center"
                >
                  Do I Need a Supplement? <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              {/* Quick Facts */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-amber-700 mb-4">
                  Plan G Quick Facts
                </h3>
                <ul className="space-y-3">
                  {[
                    "Covers Part A deductible ($1,676 in 2026)",
                    "Covers Part B coinsurance (20%)",
                    "Covers skilled nursing coinsurance",
                    "Up to $50,000 foreign travel emergency",
                    "No network restrictions — any Medicare doctor",
                    "Lower premiums than Plan F",
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.825rem] text-gray-700">
                      <CheckCircle2 size={14} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Tools */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-400 mb-4">Related Tools</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "Medigap decision guide" },
                    { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2026 premiums & deductibles" },
                    { label: "Original vs. Advantage", href: "/original-vs-advantage", desc: "Compare your options" },
                  ].map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="group flex items-start gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <ArrowRight size={14} className="text-[#1a3fa8] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        <div>
                          <p className="text-[0.875rem] font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors">{tool.label}</p>
                          <p className="text-[0.775rem] text-gray-400">{tool.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
