import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, ClipboardList, Download, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const path = "/medicare-advantage-open-enrollment/";
const url = "https://medicareinfopro.com" + path;
const title = "Medicare Advantage Open Enrollment 2027 | Medicare Information Project";
const description = "See who can change Medicare Advantage plans from January 1 to March 31, what to check before switching, and when new coverage starts.";
const pdf = "/downloads/2027-medicare-advantage-open-enrollment-quick-reference.pdf";
const enrollmentRules = "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan";
const medigapRules = "https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when";
const originalMedicareGuide = "/can-i-drop-my-medicare-advantage-plan-and-go-back-to-original-medicare/";
const textLink = "font-semibold text-[#1a3fa8] underline underline-offset-4";
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

const choices = [
  { title: "Review My Current Plan", text: "Check whether your plan still works for your doctors, prescriptions, and budget.", href: "/medicare-advantage-open-enrollment/plan-review/", icon: ClipboardList },
  { title: "Switch Medicare Advantage Plans", text: "Compare available plans and confirm the new coverage start date before switching.", href: "/switch-medicare-advantage-florida/", icon: CalendarDays },
  { title: "Return to Original Medicare", text: "Check Part D, providers, and Medigap eligibility before leaving your plan.", href: "#return-to-original-medicare", icon: ShieldCheck },
];

const checks = [
  { label: "Doctors and hospitals", detail: "Confirm the exact plan name and each provider’s office location with the plan and the provider." },
  { label: "Prescriptions", detail: "Look up each medication, dosage, and quantity. Check tiers and any coverage requirements." },
  { label: "Pharmacy", detail: "Check whether your pharmacy is in network and whether the plan treats it as preferred." },
  { label: "Total costs", detail: "Compare premiums, deductibles, copays, and the medical out-of-pocket maximum." },
  { label: "Effective date", detail: "Confirm when current coverage ends and when any new coverage begins. Save the confirmation." },
];

function DownloadLink() {
  return <a href={pdf} download className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#1a3fa8] px-5 py-3 font-semibold text-white hover:bg-[#0d2260]"><Download size={19} aria-hidden="true" /> Download the Quick Reference PDF</a>;
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="bg-[#0d2260] text-white">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-300">January 1 through March 31, 2027</p>
            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-5xl">Medicare Advantage Open Enrollment Resource Center</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">Already in a Medicare Advantage plan? Check your options and review your coverage before deciding whether to make a change.</p>
            <a href="#oep-at-a-glance" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-[#0d2260] hover:bg-blue-50">See Who Can Make a Change <ArrowRight size={18} aria-hidden="true" /></a>
            <a href={pdf} download className="mt-4 block w-fit font-semibold text-white underline underline-offset-4">Download the one-page Quick Reference</a>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-12 px-5 py-10 sm:px-8 md:space-y-16 md:py-14">
          <section id="oep-at-a-glance" className="scroll-mt-28 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
            <h2 className={heading}>2027 Medicare Advantage Open Enrollment at a Glance</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-3">
              <div><dt className="font-bold text-[#0d2260]">Who can use it</dt><dd className="mt-1">People already enrolled in Medicare Advantage.</dd></div>
              <div><dt className="font-bold text-[#0d2260]">What you can change</dt><dd className="mt-1">Make one change. Switch Advantage plans or return to Original Medicare, with the option to join a separate Part D plan.</dd></div>
              <div><dt className="font-bold text-[#0d2260]">When coverage starts</dt><dd className="mt-1">Generally the first day of the month after the plan receives your request.</dd></div>
            </dl>
            <p className="mt-5">If you joined Medicare Advantage during your Initial Enrollment Period, you may also have a change window during your first three months with Parts A and B. <a className={textLink} href={enrollmentRules}>Check Medicare’s enrollment rules</a> or read our <Link className={textLink} href="/faqs/medicare-advantage-open-enrollment/">OEP FAQ</Link>.</p>
          </section>

          <section>
            <h2 className={heading}>Choose Your Next Step</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {choices.map(({ title, text, href, icon: Icon }) => (
                <Link key={title} href={href} className="rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:bg-blue-50">
                  <Icon size={25} className="mb-3 text-[#1a3fa8]" aria-hidden="true" />
                  <h3 className="font-bold text-[#0d2260]">{title}</h3>
                  <p className="mt-2 text-gray-700">{text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="review-your-plan" className="scroll-mt-28">
            <h2 className={heading}>What to Check Before You Change Plans</h2>
            <ul className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200">
              {checks.map(({ label, detail }) => <li key={label} className="px-5 py-4"><strong>{label}.</strong> {detail}</li>)}
            </ul>
            <a href="/downloads/medicare-advantage-plan-review-worksheet.pdf" download className={textLink + " mt-5 inline-block"}>Download the Fillable Plan Review Worksheet</a>
            <p className="mt-5 text-gray-700">For example, if you see a specialist in Brandon, confirm that the specialist participates at the office you visit. Start with the <Link className={textLink} href="/check-medicare-doctor-hospital-networks-brandon-fl/">Brandon doctor and hospital network checklist</Link> and the <Link className={textLink} href="/compare-medicare-prescription-costs-brandon/">Brandon prescription cost comparison</Link>.</p>
          </section>

          <section id="return-to-original-medicare" className="scroll-mt-28 rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className={heading}>What to Confirm Before Returning to Original Medicare</h2>
            <p className="mt-4">Check that your providers accept Original Medicare. If you need drug coverage, compare stand-alone Part D plans and confirm the start date. If you want Medigap, verify your eligibility and any applicable buying protections before leaving your current plan.</p>
            <p className="mt-3">Medigap buying protections depend on your circumstances. Review <a className={textLink} href={medigapRules}>Medicare’s Medigap rules</a>, our <Link className={textLink} href="/faqs/medigap-guaranteed-issue-rights-florida/">Florida guaranteed issue FAQ</Link>, and the <Link className={textLink} href={originalMedicareGuide}>steps for returning to Original Medicare</Link>.</p>
          </section>

          <section>
            <h2 className={heading}>How OEP Differs From Fall Annual Enrollment</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5"><dt className="font-bold text-[#0d2260]">Medicare Advantage OEP</dt><dd className="mt-2"><strong>January 1 to March 31.</strong> Current Medicare Advantage members can make one eligible change. It generally starts the following month.</dd></div>
              <div className="rounded-xl border border-gray-200 p-5"><dt className="font-bold text-[#0d2260]">Fall Annual Enrollment</dt><dd className="mt-2"><strong>October 15 to December 7.</strong> People with Medicare can make a wider range of Advantage and drug plan changes for January 1. See the <Link className={textLink} href="/annual-enrollment-period-guide/">fall enrollment guide</Link>.</dd></div>
            </dl>
            <p className="mt-4">Already on Original Medicare? The annual Medicare Advantage OEP is for Advantage members. Check the <Link className={textLink} href="/enrollment-timeline/">Medicare enrollment timeline</Link> for other windows.</p>
          </section>

          <section id="download" className="scroll-mt-28 rounded-2xl bg-blue-50 p-6 md:p-8">
            <h2 className={heading}>Download the 2027 OEP Quick Reference</h2>
            <p className="mb-5 mt-3">Print the eligibility summary and five-point checklist, or keep the PDF handy while comparing plans.</p>
            <DownloadLink />
          </section>
          <p className="text-sm text-gray-600">Reviewed November 13, 2026. For help confirming your options, visit <a className={textLink} href="https://www.medicare.gov/plan-compare/">Medicare Plan Finder</a> or call <a className={textLink} href="tel:18006334227">1-800-MEDICARE</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
