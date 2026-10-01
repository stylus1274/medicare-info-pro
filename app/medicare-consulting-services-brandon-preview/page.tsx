import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PreviewFooter from "@/app/homepage-preview-v3/PreviewFooter";
import { CheckCircle, Phone, MapPin, CalendarDays, ClipboardList, ShieldCheck, ArrowRight } from "lucide-react";

const PREVIEW_PATH = "/medicare-consulting-services-brandon-preview/";
const callbackHref = `/local-consultation/?${new URLSearchParams({ city: "Brandon", service: "Medicare Consulting and Annual Plan Review", source: PREVIEW_PATH }).toString()}`;
const phoneHref = "tel:+18136995559";

export const metadata: Metadata = {
  title: "Medicare Consulting & Annual Plan Reviews in Brandon, FL",
  description: "Get Medicare consulting and annual plan reviews in Brandon, FL. Check doctors, prescriptions, and costs with a licensed agent. Request a free review.",
  alternates: { canonical: PREVIEW_PATH },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: {
    title: "Medicare Consulting & Annual Plan Reviews in Brandon, FL",
    description: "Local help reviewing your Medicare coverage, prescriptions, providers, and costs.",
    url: PREVIEW_PATH,
  },
};

const reviewSteps = [
  { title: "Start With Your Current Coverage", text: "We review the plan you have, what is working, and any concerns about bills, access to care, or benefits. Your current coverage is the starting point for the comparison." },
  { title: "Review Next Year's Changes", text: "We walk through your Annual Notice of Change and plan materials to identify changes in premiums, deductibles, copays, and benefits that could affect you." },
  { title: "Check Your Doctors and Hospitals", text: "For Medicare Advantage, we check your providers against the exact plan and coverage year. Bring each doctor's name and office location. We also review referrals and out-of-network costs where applicable." },
  { title: "Compare Your Prescription Costs", text: "Using your medication names, doses, and preferred pharmacies, we review covered drugs, pharmacy pricing, and restrictions such as prior authorization or quantity limits." },
  { title: "Look Beyond the Monthly Premium", text: "We compare premiums with the deductibles, medical copays, and prescription expenses relevant to your expected care. A lower premium does not always mean a lower overall cost." },
  { title: "Explain Your Options and Next Steps", text: "We explain the tradeoffs among the plans we represent and review your enrollment window. You can keep your current coverage if it still fits, or ask for enrollment help if you choose an eligible change." },
];

const checklist = [
  "Your current insurance cards and the name of your Medicare plan",
  "Your Annual Notice of Change and any renewal or non-renewal notices",
  "Medication names, doses, frequency, and preferred pharmacies",
  "Doctor and specialist names, office locations, and preferred hospitals",
  "Questions about recent bills, coverage problems, or upcoming care",
  "Any employer, retiree, Medicaid, or other insurance information",
];

const faqs = [
  { q: "What Is Included in an Annual Medicare Plan Review?", a: "We review your existing coverage, upcoming plan changes, doctors, medications, preferred pharmacies, and expected costs. We compare relevant plans we represent and explain the enrollment rules that apply to your situation." },
  { q: "Do I Need a Review if I Am Happy With My Plan?", a: "A review can still be useful because costs, prescription coverage, and provider networks can change. If your current coverage continues to meet your needs, keeping it may be the right choice. Reviewing a plan does not require switching." },
  { q: "How Much Does a Medicare Consultation Cost?", a: "Medicare Information Project does not charge a consultation fee. Our agents are compensated by insurance carriers when an eligible enrollment is completed. Your plan premiums and other coverage costs still apply." },
  { q: "Can You Check if My Brandon Doctor Is in a Plan's Network?", a: "Yes. Bring the provider's name and exact office location so we can check the specific Medicare Advantage plan and coverage year. Network participation should be confirmed with the plan and provider before enrollment; a hospital's name alone does not establish coverage." },
  { q: "Does Fall Enrollment Guarantee I Can Get a Medicare Supplement?", a: "No. The fall Medicare enrollment period does not create an automatic right to buy Medigap without medical underwriting. We can review your Medigap enrollment period, any guaranteed issue protections, and the rules that apply before you change coverage." },
  { q: "Can a Family Member Join My Medicare Consultation?", a: "You can bring a family member or trusted person to help organize questions and compare information. The person receiving Medicare remains involved in the coverage decision. Let us know who will be joining when you request your appointment." },
];

const resources = [
  { label: "Medicare in Brandon", href: "/medicare-brandon-fl/", text: "Local coverage options and help for your next Medicare decision." },
  { label: "Annual Enrollment Guide", href: "/annual-enrollment-period-guide/", text: "Learn what you can change during the fall enrollment period." },
  { label: "Understanding Your Plan Change Notice", href: "/how-to-read-medicare-annual-notice-of-change/", text: "Know which changes to flag before your review." },
  { label: "Prescription Drug Coverage", href: "/coverage/prescription-drugs/", text: "Understand Part D coverage before comparing your medication costs." },
];

const headingClass = "font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 [text-wrap:balance]";
const linkClass = "text-[#1a3fa8] font-semibold underline underline-offset-4 hover:text-[#0d2260]";

function ReviewButtons({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${centered ? "justify-center" : ""}`}>
      <Link href={callbackHref} className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        Request a Free Plan Review
      </Link>
      <a href={phoneHref} className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
        <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />813-699-5559
      </a>
    </div>
  );
}

export default function ConsultingPreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-between items-center gap-2 text-sm">
          <p className="text-gray-600">Consulting Page Preview</p>
          <Link href="/medicare-consulting-services-brandon/" className={linkClass}>Compare With the Current Page</Link>
        </div>
      </div>

      <main>
        <section className="bg-[#0d2260] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <nav className="flex flex-wrap items-center gap-2 text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span>
                <Link href="/medicare-brandon-fl/" className="hover:text-white">Medicare in Brandon</Link>
              </nav>
              <p className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Brandon, FL</p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight [text-wrap:balance]">Medicare Consulting Services in Brandon, FL</h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">Already have Medicare? Let&apos;s review how your plan fits your doctors, prescriptions, and budget. Our licensed agents help you understand what is changing and decide if your coverage still works for you.</p>
              <ReviewButtons />
              <p className="text-blue-200 text-sm mt-4">No consultation fee. No obligation to change plans.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
              <ClipboardList className="w-9 h-9 text-[#f5a800] mb-4" aria-hidden="true" />
              <h2 className="font-serif text-2xl font-bold text-white mb-5 [text-wrap:balance]">What We Review Together</h2>
              <ul className="space-y-4">
                {["Changes to your existing Medicare plan", "Your doctors, specialists, and hospitals", "Your prescriptions and preferred pharmacies", "Premiums, deductibles, and expected costs", "Your enrollment options and deadlines"].map(item => (
                  <li key={item} className="flex items-start gap-3 text-blue-100"><CheckCircle className="w-5 h-5 text-[#f5a800] mt-0.5 shrink-0" aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-b border-amber-200 py-3">
          <p className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-amber-800 text-xs text-center leading-relaxed">Medicare Information Project is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Plan availability, benefits, and provider networks vary by carrier, location, and year.</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-12 text-gray-700 leading-relaxed">
              <section>
                <p className="text-[#1a3fa8] text-sm font-bold uppercase tracking-wider mb-3">Local Help With Your Existing Coverage</p>
                <h2 className={headingClass}>Annual Medicare Plan Reviews in Brandon</h2>
                <p className="mb-4">A plan that worked last year may have different costs or coverage next year. Medicare Information Project helps Brandon residents review those changes against the care they actually use.</p>
                <p className="mb-6">Bring your current plan information and your questions. We can help identify what deserves a closer look, compare the plans we represent, and explain the tradeoffs. The goal is a clear decision about your coverage, including keeping your current plan when it still fits.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["A premium or copay has increased", "You have a new prescription", "Your doctor or pharmacy has changed", "You received a plan change notice"].map(item => <div key={item} className="flex items-start gap-2 p-4 bg-gray-50 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-[#1a3fa8] mt-0.5 shrink-0" aria-hidden="true" /><span>{item}</span></div>)}
                </div>
              </section>

              <section id="review-process" className="scroll-mt-28">
                <h2 className={headingClass}>What Happens During Your Medicare Review?</h2>
                <p className="mb-6">We connect the plan details to your providers, medications, and priorities so you can understand what each option would mean for you.</p>
                <ol className="space-y-6">
                  {reviewSteps.map((step, index) => <li key={step.title} className="flex gap-4"><span className="bg-[#1a3fa8] text-white rounded-full w-9 h-9 flex items-center justify-center font-bold shrink-0" aria-hidden="true">{index + 1}</span><div><h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3><p>{step.text}</p></div></li>)}
                </ol>
                <p className="mt-6 text-sm">Provider directories can change. Confirm participation with both the plan and the provider before enrolling. Original Medicare and Medicare Advantage use different provider access rules.</p>
              </section>

              <section id="bring" className="bg-blue-50 rounded-2xl p-6 border border-blue-100 scroll-mt-28">
                <h2 className={headingClass}>What Should You Bring to Your Appointment?</h2>
                <p className="mb-5">These details help us compare coverage that is relevant to you. If you are missing something, call and we can explain what to gather.</p>
                <ul className="space-y-3">{checklist.map(item => <li key={item} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#1a3fa8] mt-0.5 shrink-0" aria-hidden="true" /><span>{item}</span></li>)}</ul>
                <p className="mt-5 font-medium text-gray-900">A family member or trusted person can join you to help organize questions.</p>
              </section>

              <section>
                <h2 className={headingClass}>When Should You Schedule a Plan Review?</h2>
                <p className="mb-4">Fall is a useful time to review Medicare Advantage and Part D coverage after your plan sends its Annual Notice of Change. Medicare&apos;s Annual Enrollment Period runs from <strong className="text-gray-900">October 15 through December 7</strong>, with changes taking effect January 1.</p>
                <p className="mb-4">You can ask questions at other times, too. Your ability to change plans depends on the enrollment period or special circumstances that apply to you. A consultation does not automatically make you eligible to switch.</p>
                <p className="mb-5">Medigap follows different enrollment rules. Fall enrollment does not guarantee acceptance into a Medicare Supplement policy without medical underwriting.</p>
                <Link href="/annual-enrollment-period-guide/" className={linkClass}>Review Your Annual Enrollment Options</Link>
                <p className="text-sm mt-4">Official information: <a className={linkClass} href="https://www.medicare.gov/health-drug-plans/open-enrollment" target="_blank" rel="noopener noreferrer">Medicare Open Enrollment</a> and <a className={linkClass} href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when" target="_blank" rel="noopener noreferrer">Medigap Enrollment Rules</a>.</p>
              </section>

              <section>
                <h2 className={headingClass}>Need Help With Another Medicare Decision?</h2>
                <p className="mb-5">Annual reviews are one part of our consulting service. We also help people starting Medicare, leaving employer coverage, and comparing coverage options.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Turning 65 in Brandon", href: "/turning-65-brandon-fl/", text: "Plan your first Medicare enrollment and coverage decisions." },
                    { title: "Leaving Employer Coverage", href: "/medicare-and-employer-insurance-after-65-brandon-fl/", text: "Understand how retirement and employer insurance affect your next steps." },
                    { title: "Comparing Medicare Plans", href: "/comparing-medicare-plans-brandon/", text: "Explore the differences among your coverage options." },
                    { title: "Medicare Supplement Coverage", href: "/medicare-supplement-insurance-plans-brandon/", text: "Learn how Medigap works alongside Original Medicare." },
                  ].map(item => <Link key={item.href} href={item.href} className="rounded-xl border border-gray-200 p-5 hover:bg-blue-50 hover:border-blue-300 transition-colors"><h3 className="text-[#1a3fa8] font-bold mb-2">{item.title}</h3><p className="text-sm">{item.text}</p></Link>)}
                </div>
              </section>

              <section>
                <h2 className={headingClass}>Medicare Plan Review Questions</h2>
                <div className="space-y-3">{faqs.map(faq => <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden"><summary className="cursor-pointer p-5 font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a3fa8]">{faq.q}</summary><p className="px-5 pb-5 text-gray-700">{faq.a}</p></details>)}</div>
              </section>
            </div>

            <aside aria-label="Appointment and Medicare resources" className="space-y-6">
              <section className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
                <ShieldCheck className="w-9 h-9 text-[#f5a800] mb-4" aria-hidden="true" />
                <h2 className="font-serif text-2xl font-bold mb-3 [text-wrap:balance]">Talk With Our Brandon Medicare Team</h2>
                <p className="text-blue-100 leading-relaxed mb-5">Get help from a licensed, independent insurance agent. Ask about your current coverage and the options we represent.</p>
                <Link href={callbackHref} className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3">Request a Free Plan Review</Link>
                <a href={phoneHref} className="flex items-center justify-center gap-2 border border-blue-300 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-800"><Phone className="w-4 h-4" aria-hidden="true" />813-699-5559</a>
                <Link href="/our-team/" className="inline-flex items-center gap-2 text-white underline underline-offset-4 mt-5 text-sm">Meet Our Licensed Agents<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                <p className="text-blue-100 text-sm mt-5 leading-relaxed">No consultation fee. Agents are compensated by insurance carriers. Plan premiums and other coverage costs still apply.</p>
              </section>

              <section className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="font-bold text-gray-900 text-lg mb-4">Visit Our Brandon Office</h2>
                <div className="flex items-start gap-3 mb-4 text-gray-700"><MapPin className="w-5 h-5 text-[#1a3fa8] mt-0.5 shrink-0" aria-hidden="true" /><address className="not-italic leading-relaxed">915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address></div>
                <p className="flex items-start gap-3 text-gray-700 mb-4"><CalendarDays className="w-5 h-5 text-[#1a3fa8] mt-0.5 shrink-0" aria-hidden="true" /><span>Call to arrange your appointment before visiting.</span></p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Serving Brandon and nearby communities, including Valrico, Riverview, and Seffner. Ask about a phone or in-person consultation.</p>
                <Link href="/contact/" className={linkClass}>Office and Contact Details</Link>
              </section>

              <nav aria-label="Plan review preparation" className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="font-bold text-gray-900 text-lg mb-4">Prepare for Your Review</h2>
                <ul className="space-y-5">{resources.map(item => <li key={item.href}><Link href={item.href} className="text-[#1a3fa8] font-semibold hover:underline">{item.label}</Link><p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.text}</p></li>)}</ul>
              </nav>
            </aside>
          </div>
        </div>

        <section className="bg-[#0d2260] py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 [text-wrap:balance]">Does Your Medicare Plan Still Fit Your Needs?</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">Bring your plan, medication list, and questions. Our Brandon team will help you understand your coverage and your next steps.</p>
            <ReviewButtons centered />
            <p className="text-blue-200 text-sm mt-4">Request a callback to arrange your review. No obligation to enroll.</p>
          </div>
        </section>
      </main>
      <PreviewFooter />
    </div>
  );
}
