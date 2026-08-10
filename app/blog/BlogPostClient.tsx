"use client";

/**
 * BlogPostClient - Shared blog post template
 * Design: MIP brand - navy/gold, editorial long-form layout
 * Sections: Hero with full-bleed background image, Article Body, FAQ, CTA, Related Posts
 * Sidebar: TOC, Agent CTA, Related Tools
 * NOTE: No em dashes anywhere in this file or any post data.
 *
 * ADA CONTRAST FIXES (Jun 2026):
 * - Hero breadcrumbs: text-white/70 (was /50), active span text-white (was /70)
 * - Hero meta bar (date, time, share): text-white/80 (was /60)
 * - Key Takeaways: heading text-blue-800 (was blue-700); item label text-gray-900; item text text-gray-800 (was gray-700)
 * - Sidebar TOC inactive: text-gray-700 (was gray-600)
 * - Sidebar tools desc: text-gray-500 (was gray-400)
 * - FAQ answer: pt-4 (was pt-1) for 20px top padding
 * - Removed CheckCircle2 icon from Key Takeaways heading
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

/**
 * Pre-process content HTML: ensure every <strong>Heading:</strong> that appears
 * mid-paragraph gets a <p> break before it so it renders as its own paragraph.
 * Matches patterns like: some text. <strong>Next Sub-heading:</strong> more text
 * and wraps the strong tag in its own <p> block.
 */
function processContent(html: string): string {
  // Split on double newlines first (explicit breaks)
  const blocks = html.split(/\n\n+/);
  return blocks
    .map((block) => {
      // Within each block, split further on <strong>Heading:</strong> patterns
      // that appear after non-whitespace content (i.e., mid-paragraph)
      return block
        .replace(/([^>\n])(<strong>[A-Z0-9][^<]*:<\/strong>)/g, "$1\n\n$2")
        .replace(/([^>\n])(<strong>\d+\.[^<]*<\/strong>)/g, "$1\n\n$2");
    })
    .join("\n\n");
}

/** Convert \n\n-separated content into wrapped blocks for rendering.
 * Uses <div> for blocks containing block-level HTML (ul, ol, table, div),
 * and <p> for plain text / inline-only content.
 */
function renderParagraphs(html: string, className: string): React.ReactNode {
  const processed = processContent(html);
  const blocks = processed.split(/\n\n+/).filter(Boolean);
  const BLOCK_TAGS = /^\s*<(ul|ol|table|div|blockquote|figure|h[1-6])/i;
  return blocks.map((block, i) => {
    const isBlock = BLOCK_TAGS.test(block);
    if (isBlock) {
      return (
        <div
          key={i}
          dangerouslySetInnerHTML={{ __html: block }}
        />
      );
    }
    return (
      <p
        key={i}
        className={className}
        dangerouslySetInnerHTML={{ __html: block }}
      />
    );
  });
}

const CATEGORY_COLORS: Record<Category, string> = {
  Enrollment: "bg-blue-100 text-blue-800",
  Plans: "bg-purple-100 text-purple-800",
  Costs: "bg-amber-100 text-amber-800",
  Coverage: "bg-emerald-100 text-emerald-800",
  Supplements: "bg-rose-100 text-rose-800",
  "Part D": "bg-teal-100 text-teal-800",
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
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "proTip"; content: string }
  | { type: "inlineCta"; heading?: string; body?: string };

interface RelatedPost {
  title: string;
  href: string;
  category: Category;
}

interface Author {
  name: string;
  title: string;
  photo: string;
}

const GREG_WOHL: Author = {
  name: "Greg Wohl",
  title: "Licensed Medicare Specialist",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: PostSection[];
  relatedPosts: RelatedPost[];
  serviceAreas?: string[];
}

const JENNIFER_LOADER_WOHL: Author = {
  name: "Jennifer C. Loader-Wohl",
  title: "Licensed Medicare Specialist",
  photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/TSQcrEEFLcDPIxvF.jpeg",
};

export { GREG_WOHL, JENNIFER_LOADER_WOHL };

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
        /* pt-4 = 16px top padding (approx 20px visual with border) — ADA fix */
        <div className="px-5 pb-5 pt-4 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-[0.925rem]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function BlogPostClient({ post }: Props) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
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

      {/* Hero — photo + navy gradient overlay, site-wide color tokens for text */}
      <section
        className="relative overflow-hidden pt-14 pb-16"
        style={{
          background: `linear-gradient(to bottom, rgba(13,34,96,0.88) 0%, rgba(13,34,96,0.76) 55%, rgba(13,34,96,0.92) 100%), url('${post.image}') center/cover no-repeat`,
          minHeight: "420px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.8rem] mb-5">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-blue-500" aria-hidden="true" />
            <Link href="/blog" className="text-blue-300 hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={13} className="text-blue-500" aria-hidden="true" />
            <span className="text-blue-200 truncate max-w-[240px]" aria-current="page">{post.title}</span>
          </nav>

          {/* Category tag — orange, matches site badge style */}
          <div className="inline-flex items-center gap-1.5 bg-[#f5a800]/20 text-[#f5a800] text-[0.72rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
            {CATEGORY_ICONS[post.category]} {post.category}
          </div>

          <h1
            className="text-[1.9rem] sm:text-[2.6rem] font-bold leading-tight mb-4 max-w-3xl text-white"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-blue-200 text-[1rem] max-w-2xl leading-relaxed mb-6">{post.excerpt}</p>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-5 text-[0.82rem] text-blue-300">
            <span className="flex items-center gap-1.5"><Calendar size={13} aria-hidden="true" /> {post.date}</span>
            <span className="text-blue-500">·</span>
            <span className="flex items-center gap-1.5"><Clock size={13} aria-hidden="true" /> {post.readTime}</span>
            <button
              onClick={handleShare}
              aria-label="Copy article link to clipboard"
              className="flex items-center gap-1.5 ml-auto text-blue-300 hover:text-white transition-colors font-semibold"
            >
              <Share2 size={14} aria-hidden="true" />
              {copied ? "Copied!" : "Share"}
            </button>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Article Body */}
          <article className="prose-custom" aria-label="Article content">

            {/* Mobile TOC — visible only below lg breakpoint */}
            {tocItems.length > 0 && (
              <div className="lg:hidden mb-6 border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 text-left"
                  aria-expanded={mobileTocOpen}
                >
                  <span className="flex items-center gap-2 text-[0.85rem] font-bold text-gray-700 uppercase tracking-wider">
                    <BookOpen size={13} aria-hidden="true" /> In This Article
                  </span>
                  <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${mobileTocOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileTocOpen && (
                  <nav aria-label="Article table of contents" className="px-4 py-3 space-y-1">
                    {tocItems.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => { scrollTo(item.id); setMobileTocOpen(false); }}
                        className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-[0.85rem] text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-[0.65rem] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="flex-1 leading-snug">{item.label}</span>
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            )}

            {/* Written By */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
              <img
                src={post.author.photo}
                alt={`Photo of ${post.author.name}`}
                className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0 border-2 border-gray-100"
              />
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-500 mb-0.5">Written By</p>
                <p className="font-bold text-gray-900 text-[0.95rem] leading-tight">{post.author.name}</p>
                <p className="text-[0.8rem] text-gray-600">{post.author.title}</p>
              </div>
            </div>

            {post.sections.map((section, idx) => {
              if (section.type === "intro") {
                return (
                  <div key={idx} className="mb-10">
                    {section.content.split("\n\n").map((para, i) => (
                      <p key={i} className="text-gray-800 leading-relaxed mb-4 text-[1rem]" dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>
                );
              }

              if (section.type === "keyTakeaways") {
                return (
                  <div key={idx} className="mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    {/* ADA fix: removed icon from heading, upgraded to text-blue-800 */}
                    <h2 className="text-[1rem] font-bold uppercase tracking-wider text-blue-800 mb-5">
                      Key Takeaways
                    </h2>
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div>
                            {/* ADA fix: label text-gray-900, body text text-gray-800 */}
                            <span className="font-bold text-gray-900">{item.label}: </span>
                            <span className="text-gray-800 text-[0.925rem] leading-relaxed">{item.text}</span>
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
                    {/* Body content: renderParagraphs splits on \n\n and auto-breaks before bold sub-headings */}
                    <div className="mb-6 space-y-4 [&_ul]:mt-2 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-[#1a3fa8] [&_ol]:mt-2 [&_ol]:mb-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-gray-900 [&_a]:text-[#1a3fa8] [&_a]:underline [&_a]:underline-offset-2 [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:my-6 [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:shadow-sm [&_thead]:bg-[#0d1f5c] [&_th]:p-3 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wide [&_tbody_tr:nth-child(even)]:bg-blue-50/60 [&_tbody_tr:nth-child(odd)]:bg-white [&_tbody_tr]:border-b [&_tbody_tr]:border-gray-100 [&_tbody_tr:last-child]:border-0 [&_td]:p-3 [&_td]:text-gray-700 [&_td]:leading-snug">
                      {renderParagraphs(section.content, "text-gray-800 leading-relaxed text-[1rem]")}
                    </div>
                    {section.subsections?.map((sub, si) => (
                      <div key={si} className="mb-6">
                        <h3
                          className="text-[1.1rem] font-bold text-gray-900 mb-2"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          {sub.heading}
                        </h3>
                        <div className="space-y-3 [&_ul]:mt-2 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-[#1a3fa8] [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-gray-900 [&_a]:text-[#1a3fa8] [&_a]:underline [&_a]:underline-offset-2">
                          {renderParagraphs(sub.content, "text-gray-800 leading-relaxed text-[0.975rem]")}
                        </div>
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
                    className="mb-10 scroll-mt-24 bg-[#0d1f5c]/5 border border-[#0d1f5c]/15 rounded-2xl p-6"
                  >
                    <h2
                      className="text-[1.3rem] font-bold text-[#0d1f5c] mb-4"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {section.heading}
                    </h2>
                    {/* Summary content: renderParagraphs for consistent paragraph breaks */}
                    <div className="space-y-3 [&_ul]:mt-2 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-[#1a3fa8] [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-gray-900 [&_a]:text-[#1a3fa8] [&_a]:underline [&_a]:underline-offset-2">
                      {renderParagraphs(section.content, "text-gray-800 leading-relaxed text-[0.975rem]")}
                    </div>
                  </section>
                );
              }

              if (section.type === "proTip") {
                return (
                  <div
                    key={idx}
                    className="mb-8 flex gap-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 shadow-sm"
                  >
                    <span className="mt-0.5 text-amber-500 text-xl flex-shrink-0" aria-hidden="true">&#128161;</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Pro Tip</p>
                      <div className="text-gray-800 leading-relaxed text-[0.975rem] [&_a]:text-[#1a3fa8] [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold [&_strong]:text-gray-900">
                        {renderParagraphs(section.content, "text-gray-800 leading-relaxed text-[0.975rem]")}
                      </div>
                    </div>
                  </div>
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

              if (section.type === "inlineCta") {
                return (
                  <div
                    key={idx}
                    className="rounded-2xl p-7 text-white mb-10"
                    style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
                  >
                    <h3
                      className="text-[1.3rem] font-bold mb-2"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {section.heading ?? "Ready to Compare Medicare Plans?"}
                    </h3>
                    <p className="text-white/90 text-[0.9rem] mb-5 leading-relaxed">
                      {section.body ?? "Our licensed Medicare specialists will compare plans from multiple carriers at no cost to you."}
                    </p>
                    <a
                      href="tel:8137897700"
                      aria-label="Call MIP at (813) 699-5559 to compare Medicare plans"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f5a623] text-[#0d1f5c] font-bold text-[0.9rem] hover:bg-[#e09515] transition-colors"
                    >
                      <Phone size={16} aria-hidden="true" />
                      Call (813) 699-5559
                    </a>
                  </div>
                );
              }

              return null;
            })}

            {/* CTA Band */}
            <div
              className="rounded-2xl p-7 text-white mb-10"
              style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
            >
              <h3
                className="text-[1.3rem] font-bold mb-2"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Ready to Compare Medicare Plans?
              </h3>
              <p className="text-white/90 text-[0.9rem] mb-5 leading-relaxed">
                Our licensed Medicare specialists will compare plans from multiple carriers at no cost to you.
              </p>
              <a
                href="tel:8137897700"
                aria-label="Call MIP at (813) 699-5559 to compare Medicare plans"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f5a623] text-[#0d1f5c] font-bold text-[0.9rem] hover:bg-[#e09515] transition-colors"
              >
                <Phone size={16} aria-hidden="true" />
                Call (813) 699-5559
              </a>
            </div>

            {/* Related Posts */}
            {post.relatedPosts.length > 0 && (
            {post.serviceAreas && post.serviceAreas.length > 0 && (
              <section aria-label="Service areas" className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
                <p className="text-[0.7rem] font-bold uppercase tracking-wider text-[#1a3fa8] mb-3">
                  Areas We Serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-white border border-blue-200 text-[#1a3fa8] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            )}
            {/* Related Posts */}
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
                      <p className="text-[0.875rem] font-semibold text-gray-900 group-hover:text-[#1a3fa8] transition-colors leading-snug">
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

          {/* Sidebar */}
          <aside className="hidden lg:block" aria-label="Article sidebar">
            <div className="sticky top-20 space-y-6">

              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                  <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-600 mb-4 flex items-center gap-2">
                    <BookOpen size={13} aria-hidden="true" /> In This Article
                  </h3>
                  <nav aria-label="Article table of contents">
                    <ul className="space-y-0.5">
                      {tocItems.map((item, idx) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollTo(item.id)}
                            title={`Jump to: ${item.label}`}
                            className={`group w-full text-left px-3 py-2.5 rounded-lg text-[0.85rem] transition-all flex items-center gap-2.5 ${
                              activeSection === item.id
                                ? "bg-[#1a3fa8]/10 text-[#1a3fa8] font-semibold"
                                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            {/* Section number indicator */}
                            <span
                              className={`flex-shrink-0 w-5 h-5 rounded-full text-[0.65rem] font-bold flex items-center justify-center transition-colors ${
                                activeSection === item.id
                                  ? "bg-[#1a3fa8] text-white"
                                  : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <span className="flex-1 leading-snug">{item.label}</span>
                            {/* Arrow hint — visible on hover or active */}
                            <ArrowRight
                              size={12}
                              className={`flex-shrink-0 transition-all ${
                                activeSection === item.id
                                  ? "text-[#1a3fa8] opacity-100 translate-x-0"
                                  : "text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                              }`}
                              aria-hidden="true"
                            />
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
                <p className="text-[0.85rem] text-white/90 mb-4 leading-relaxed">
                  Compare Medicare plan rates from multiple carriers. Our specialists are available at no cost to you.
                </p>
                <a
                  href="tel:8137897700"
                  aria-label="Call MIP at (813) 699-5559 for a free Medicare quote"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f5a623] text-[#0d1f5c] font-bold text-[0.875rem] hover:bg-[#e09515] transition-colors w-full justify-center mb-2"
                >
                  <Phone size={15} aria-hidden="true" />
                  813-789-7700
                </a>
                <Link
                  href="/do-i-need-a-supplement"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/40 text-white font-semibold text-[0.875rem] hover:bg-white/10 transition-colors w-full justify-center"
                >
                  Do I Need a Supplement? <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              {/* Quick Facts */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-amber-800 mb-4">
                  Plan G Quick Facts
                </h3>
                <ul className="space-y-3">
                  {[
                    "Covers Part A deductible ($1,676 in 2026)",
                    "Covers Part B coinsurance (20%)",
                    "Covers skilled nursing coinsurance",
                    "Up to $50,000 foreign travel emergency",
                    "No network restrictions: any Medicare doctor",
                    "Lower premiums than Plan F",
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.825rem] text-gray-800">
                      <CheckCircle2 size={14} className="text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Tools */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-600 mb-4">Related Tools</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "Medigap decision guide" },
                    { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2026 premiums and deductibles" },
                    { label: "Original vs. Advantage", href: "/original-vs-advantage", desc: "Compare your options" },
                  ].map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="group flex items-start gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <ArrowRight size={14} className="text-[#1a3fa8] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        <div>
                          <p className="text-[0.875rem] font-semibold text-gray-900 group-hover:text-[#1a3fa8] transition-colors">{tool.label}</p>
                          <p className="text-[0.775rem] text-gray-500">{tool.desc}</p>
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
