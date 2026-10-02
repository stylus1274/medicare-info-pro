import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { searchContent } from "@/lib/searchIndex";
import styles from "@/app/homepage-preview-v3/preview.module.css";

export const metadata: Metadata = {
  title: "Search Medicare Guides and Local Services",
  description: "Search Medicare Information Project for Medicare guides, enrollment tools, coverage answers, and Brandon services.",
  alternates: { canonical: "/search/" },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default async function SearchPage({ searchParams }: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = (typeof params.q === "string" ? params.q : "").trim().slice(0, 120);
  const results = searchContent(query);

  return <div className={styles.page}>
    <Header />
    <main>
      <section className="bg-[#0d2260] py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h1 className="text-white">Search Medicare Guides and Services</h1>
          <form action="/search/" method="get" className="mt-6">
            <label htmlFor="site-search" className="block text-blue-100 mb-2">What would you like help with?</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input id="site-search" name="q" type="search" defaultValue={query} maxLength={120} placeholder="Try Brandon, enrollment, or Part D" className="min-w-0 flex-1 rounded-lg bg-white text-gray-900 px-4 py-3 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white" />
              <button type="submit" className="bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400">Search</button>
            </div>
          </form>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-12" aria-label="Search results">
        {query ? <>
          <h2>Results for &ldquo;{query}&rdquo;</h2>
          <p className="text-gray-600 mb-7" aria-live="polite">{results.length} {results.length === 1 ? "result" : "results"} found.</p>
          {results.length ? <ul className="space-y-5">{results.map(result => <li key={result.url} className="border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">{result.category}</p>
            <h3><Link href={result.url} className="text-[#1a3fa8] hover:underline">{result.title}</Link></h3>
            <p className="text-gray-700">{result.description}</p>
          </li>)}</ul> : <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="mb-4">Try a broader topic such as enrollment, prescriptions, or Medicare Advantage.</p>
            <Link href="/resources/" className="text-[#1a3fa8] font-semibold underline">Browse Our Resources</Link>
            <p className="mt-4">Need personal help? <Link href="/contact/" className="text-[#1a3fa8] font-semibold underline">Contact Our Brandon Team</Link>.</p>
          </div>}
        </> : <>
          <h2>Find Your Next Step</h2>
          <p className="text-gray-700 mb-5">Enter a topic above, or start with our Medicare guides and local services.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/medicare-brandon-fl/" className="text-[#1a3fa8] font-semibold underline">Medicare in Brandon</Link>
            <Link href="/resources/" className="text-[#1a3fa8] font-semibold underline">Medicare Resources</Link>
            <Link href="/enrollment-calculator/" className="text-[#1a3fa8] font-semibold underline">Enrollment Calculator</Link>
          </div>
        </>}
      </section>
    </main>
    <Footer />
  </div>;
}
