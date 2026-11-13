import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hub = "/medicare-advantage-open-enrollment/";
const url = "https://medicareinfopro.com" + hub + "plan-review/";
const title = "Medicare Advantage Plan Review Checklist | Medicare Information Project";
const description = "Compare two Medicare Advantage plans side by side. Check doctors, hospitals, prescriptions, pharmacies, and costs before switching.";
const worksheet = "/downloads/medicare-advantage-plan-review-worksheet.pdf";
const link = "font-semibold text-[#1a3fa8] underline underline-offset-4";
const heading = "font-serif text-2xl font-bold text-[#0d2260] sm:text-3xl";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": url + "#webpage",
  url,
  name: title,
  description,
  dateModified: "2026-11-13",
  isPartOf: { "@id": "https://medicareinfopro.com/#website" },
  publisher: { "@id": "https://medicareinfopro.com/#organization" },
};

function WorksheetLink() {
  return (
    <a href={worksheet} download className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#1a3fa8] px-5 py-3 font-semibold text-white hover:bg-[#0d2260]">
      <Download size={19} aria-hidden="true" /> Download the Plan Review Worksheet
    </a>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="bg-[#0d2260] text-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 md:py-16">
            <Link href={hub} className="font-semibold text-blue-100 underline underline-offset-4">Medicare Advantage Open Enrollment Resource Center</Link>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-5xl">How to Review Your Medicare Advantage Plan Before Switching</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">Put your current plan next to one alternative. Compare the care you use, the medications you take, and the costs you could pay over the year.</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-10 px-5 py-10 sm:px-8 md:py-14">
          <aside className="rounded-2xl border border-blue-100 bg-blue-50 p-6" aria-labelledby="worksheet">
            <h2 id="worksheet" className={heading}>Compare Two Plans Side by Side</h2>
            <p className="mb-5 mt-3">Use the free three-page worksheet as you go. Download it to fill and save a copy in a PDF reader, or print it and write in your answers.</p>
            <WorksheetLink />
          </aside>

          <section>
            <h2 className={heading}>Start With Two Plans</h2>
            <p className="mt-3">Record your ZIP code, coverage year, and each plan’s exact name, plan ID, and type. Find your current plan in its member materials and look up an alternative for the same ZIP code and year using <a className={link} href="https://www.medicare.gov/plan-compare/">Medicare Plan Finder</a>. Keep each plan’s Summary of Benefits and Evidence of Coverage handy.</p>
          </section>

          <section>
            <h2 className={heading}>Check Your Doctors and Hospitals</h2>
            <p className="mt-3">List the primary care doctors, specialists, and hospitals you rely on. Ask both the plan and the provider’s office about the exact plan and office address. For example, if your Brandon specialist sees patients at two offices, verify the address you actually visit.</p>
            <p className="mt-3">Write down the network status, who confirmed it, and the date. If the answers differ, mark the check as pending and follow up. See the <Link className={link} href="/check-medicare-doctor-hospital-networks-brandon-fl/">Brandon doctor and hospital network guide</Link> for questions to ask.</p>
          </section>

          <section>
            <h2 className={heading}>Compare Prescriptions and Pharmacies</h2>
            <p className="mt-3">Enter the same drugs, doses, quantities, and pharmacy for both plans. Check each drug’s tier and estimated cost for the same supply. Look for requirements such as prior authorization, step therapy, or quantity limits.</p>
            <p className="mt-3">Check whether your pharmacy is in the plan’s network and whether it is preferred. Record annual drug cost estimates separately for each plan. Use the <Link className={link} href="/compare-medicare-prescription-costs-brandon/">Brandon prescription cost guide</Link> for the detailed comparison.</p>
          </section>

          <section>
            <h2 className={heading}>Compare What You Might Pay</h2>
            <p className="mt-3">Start with monthly plan premiums, then compare medical and drug deductibles, copays for primary care and specialist visits, and hospital costs. Multiply a monthly plan premium by 12 for a full-year estimate and use the same number of visits and services for both plans. Note any out-of-network charges you might face.</p>
            <p className="mt-3">Record the medical out-of-pocket maximum separately from your estimated annual drug costs. The medical maximum applies to covered medical services under the plan’s rules. Premiums and Part D prescription costs are separate.</p>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className={heading}>Decide What to Do Next</h2>
            <p className="mt-3">Check for unanswered questions and confirm the details that matter most to you. You can keep your plan, compare another option, or confirm the timing for a switch. If you decide to switch, verify when your current coverage ends and the new coverage starts.</p>
            <p className="mt-3">Review the <Link className={link} href={hub}>OEP eligibility rules and deadlines</Link> and the <Link className={link} href="/switch-medicare-advantage-florida/">Florida Medicare Advantage switching guide</Link> before you submit a change.</p>
          </section>

          <WorksheetLink />
          <p className="text-sm text-gray-600">Reviewed November 13, 2026. See <a className={link} href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan">Medicare.gov guidance on choosing and joining a plan</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
