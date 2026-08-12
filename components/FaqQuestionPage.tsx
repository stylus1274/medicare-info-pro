import Link from "next/link";
import { ArrowRight, ChevronRight, FileText, Phone, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface FaqSection {
  heading: string;
  content: string;
}

export interface RelatedFaq {
  question: string;
  href: string;
}

export interface OfficialSource {
  label: string;
  href: string;
}

export interface FaqQuestionData {
  question: string;
  shortAnswer: string;
  category: string;
  updated: string;
  sections: FaqSection[];
  relatedFaqs: RelatedFaq[];
  officialSources: OfficialSource[];
}

interface Props {
  faq: FaqQuestionData;
}

/**
 * Design: MIP FAQ library. Direct answer first, restrained navy and gold,
 * compact supporting sections, question-first language, and clear exits.
 */
export default function FaqQuestionPage({ faq }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.shortAnswer,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-[#f7f9fc] text-[#102149]">
        <section className="bg-[#0d2d6b] text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-blue-100" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <ChevronRight size={15} aria-hidden="true" />
              <Link href="/faq" className="transition-colors hover:text-white">Medicare FAQ</Link>
              <ChevronRight size={15} aria-hidden="true" />
              <span className="text-white">{faq.category}</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f4cf57]">
              <FileText size={13} aria-hidden="true" />
              Medicare FAQ
            </span>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {faq.question}
            </h1>
            <p className="mt-5 text-sm text-blue-100">Updated {faq.updated}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="min-w-0">
              <div className="rounded-2xl border border-[#d9e1ef] border-l-4 border-l-[#d4af37] bg-white p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.13em] text-[#1a3fa8]">
                  <ShieldCheck size={18} aria-hidden="true" />
                  Short answer
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-700">{faq.shortAnswer}</p>
              </div>

              <div className="mt-9 space-y-9">
                {faq.sections.map((section) => (
                  <section key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                    <h2 className="text-2xl font-extrabold leading-tight text-[#102149]">{section.heading}</h2>
                    <div
                      className="faq-detail-content mt-4 space-y-4 text-[1.04rem] leading-8 text-slate-700"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </section>
                ))}
              </div>

              <section className="mt-9 rounded-2xl bg-[#102b63] p-7 text-white md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4cf57]">Need help with your situation?</p>
                <h2 className="mt-3 text-2xl font-extrabold">Talk through your Medicare options with a licensed specialist.</h2>
                <p className="mt-3 max-w-2xl leading-7 text-blue-100">A short conversation can help you understand the enrollment dates, coverage choices, and plan rules that apply to you. There is no cost for the review.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/free-consultation" className="inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-5 py-3 font-bold text-[#102149] transition-colors hover:bg-[#f4cf57]">
                    Schedule a Free Consultation <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                  <a href="tel:8136995559" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    <Phone size={17} aria-hidden="true" /> Call 813-699-5559
                  </a>
                </div>
              </section>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-extrabold text-[#102149]">Related Medicare FAQs</h2>
                <ul className="mt-4 space-y-4">
                  {faq.relatedFaqs.map((related) => (
                    <li key={related.href}>
                      <Link href={related.href} className="group inline-flex gap-2 text-sm font-semibold leading-6 text-[#1a3fa8] hover:text-[#102149]">
                        <ChevronRight className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5" size={15} aria-hidden="true" />
                        {related.question}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/faq" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1a3fa8] hover:text-[#102149]">
                  Browse all FAQs <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </section>

              <section className="rounded-2xl border border-[#d9e1ef] bg-[#edf4ff] p-6">
                <h2 className="text-lg font-extrabold text-[#102149]">Official sources</h2>
                <ul className="mt-4 space-y-3">
                  {faq.officialSources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-[#1a3fa8] underline decoration-[#a9c0ee] underline-offset-4 hover:text-[#102149]">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
