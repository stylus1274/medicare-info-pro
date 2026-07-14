"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, Shield, Phone, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

const FAQS = [
  {
    q: "What is a Medicare Scope of Appointment?",
    a: "A Scope of Appointment (SOA) is a federally required form that a Medicare insurance agent must obtain from you before meeting to discuss Medicare Advantage (Part C) or Medicare Part D prescription drug plans. The form documents which types of plans you agree to discuss during the appointment. It protects you from being pitched plan types you did not ask about.",
  },
  {
    q: "Is the Scope of Appointment required by law?",
    a: "Yes. The Centers for Medicare and Medicaid Services (CMS) requires agents to obtain a signed Scope of Appointment before any sales appointment involving Medicare Advantage or Part D plans. This requirement applies to in-person meetings, phone calls, and virtual appointments. Agents who skip this step are violating CMS marketing regulations.",
  },
  {
    q: "What does the 48-hour rule mean for the Scope of Appointment?",
    a: "CMS requires that the Scope of Appointment be obtained at least 48 hours before a scheduled appointment. This gives you time to review what you agreed to discuss before the agent arrives. There are two exceptions: walk-in appointments that you initiate without scheduling in advance, and appointments you request with less than 48 hours notice. In those cases the SOA can be completed at the start of the meeting.",
  },
  {
    q: "Can an agent discuss plans not listed on my Scope of Appointment?",
    a: "No. An agent is strictly limited to discussing only the plan types you listed on the SOA. For example, if you checked Medicare Advantage but not Part D drug plans, the agent cannot bring up standalone drug plans during that appointment. If you want to discuss additional plan types, a new or amended SOA must be completed first.",
  },
  {
    q: "Does the Scope of Appointment apply to Medicare Supplement (Medigap) plans?",
    a: "No. The SOA requirement applies only to Medicare Advantage (Part C) and Medicare Part D prescription drug plans. Agents discussing only Medicare Supplement (Medigap) plans are not required to obtain a Scope of Appointment, though many agents use a similar form as a best practice.",
  },
  {
    q: "How long is a Scope of Appointment valid?",
    a: "A Scope of Appointment is valid for the scope of the specific appointment it covers. If you meet with an agent multiple times, a new SOA is typically required for each appointment. Some agents use a standing SOA for ongoing clients, but CMS guidance recommends obtaining a fresh SOA for each distinct sales interaction.",
  },
  {
    q: "Can I sign a Scope of Appointment electronically?",
    a: "Yes. CMS allows electronic signatures on the Scope of Appointment form. Many agents use digital tools to send and collect the SOA before the appointment. The electronic version carries the same legal weight as a paper signature.",
  },
  {
    q: "What should I do if an agent skips the Scope of Appointment?",
    a: "If an agent discusses Medicare Advantage or Part D plans without obtaining your Scope of Appointment first, you can report the violation to 1-800-MEDICARE (1-800-633-4227) or to your State Health Insurance Assistance Program. In Florida, this is SHINE (Serving Health Insurance Needs of Elders). You can also report violations directly to the insurance carrier the agent represents.",
  },
  {
    q: "Does the Scope of Appointment protect me from unwanted sales pressure?",
    a: "Yes, that is its primary purpose. By documenting exactly what you agreed to discuss before the appointment begins, the SOA limits what an agent can legally present to you. Combined with other CMS rules, such as the prohibition on unsolicited door-to-door visits and the ban on gifts or inducements, the SOA is part of a broader framework designed to protect Medicare beneficiaries from aggressive or misleading sales tactics.",
  },
  {
    q: "What other CMS marketing rules should I know about?",
    a: "Beyond the Scope of Appointment, CMS prohibits agents from making unsolicited door-to-door visits or cold calls to Medicare beneficiaries. Agents cannot offer gifts, cash, or other inducements worth more than $15 to influence your plan selection. They must disclose their compensation structure if you ask. Appointments cannot be held in healthcare settings such as doctor offices or pharmacies unless the facility has a formal agreement with the plan.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-[0.97rem] pr-4">{q}</span>
        <ChevronDown
          size={18}
          className="text-[#1a3fa8] shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-[0.95rem]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function MedicareScopeOfAppointmentPage() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Shield size={12} /> Medicare Consumer Protection
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Medicare Scope of Appointment: FAQ Guide
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-3xl">
              The Scope of Appointment is a federally required form that protects Medicare beneficiaries from unwanted sales pitches. Here is everything you need to know about what it is, when it applies, and what to do if an agent skips it.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-10 bg-[#f0f4ff] border-b border-[#dde3f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-bold text-[#1a3fa8] text-xs uppercase tracking-widest mb-4">Key Takeaways</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Required by CMS before any Medicare Advantage or Part D sales appointment",
                "Must be obtained at least 48 hours before a scheduled meeting",
                "Agents can only discuss plan types listed on the form",
                "Does not apply to Medicare Supplement (Medigap) discussions",
                "Electronic signatures are accepted",
                "Violations can be reported to 1-800-MEDICARE or SHINE in Florida",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#b8c8f0]">
                  <CheckCircle size={15} className="text-[#1a3fa8] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Article */}
              <div className="lg:col-span-2 space-y-10">

                {/* What is it */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    What Is the Medicare Scope of Appointment?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Scope of Appointment (SOA) is a CMS-mandated form that a licensed Medicare insurance agent must obtain from you before meeting to discuss Medicare Advantage or Medicare Part D prescription drug plans. The form documents which plan types you have agreed to discuss, creating a written record that limits what the agent can legally present during your appointment.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The requirement exists because Medicare beneficiaries were historically subjected to high-pressure sales tactics where agents would show up to discuss one type of plan and then pivot to selling something else entirely. The SOA closes that loophole by requiring documented consent before the conversation begins.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The SOA is part of a broader set of CMS marketing regulations that govern how Medicare plans can be sold. Understanding these rules helps you recognize when an agent is operating within the rules and when to be cautious. For a broader overview of how agents and brokers are regulated, see our guide on{" "}
                    <Link href="/medicare-broker-vs-agent/" className="text-[#1a3fa8] underline hover:text-[#0d2260]">
                      Medicare brokers vs. agents
                    </Link>
                    .
                  </p>
                </div>

                {/* When it applies */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    When Does the Scope of Appointment Apply?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The SOA requirement applies any time an agent intends to discuss Medicare Advantage (Part C) or Medicare Part D prescription drug plans with a beneficiary. This includes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "In-person appointments at your home or another location",
                      "Phone appointments and virtual video meetings",
                      "Appointments at community events or educational seminars (individual follow-up meetings, not the event itself)",
                      "Any meeting where a specific plan will be presented or enrollment discussed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700 text-[0.95rem]">
                        <CheckCircle size={14} className="text-[#1a3fa8] shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    The SOA does not apply to general educational events where no specific plan is presented and no enrollment takes place. It also does not apply to discussions about Medicare Supplement (Medigap) plans, which are regulated separately.
                  </p>
                </div>

                {/* Pro Tip */}
                <div className="bg-[#fff8e6] border border-[#f5a800]/40 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield size={16} className="text-[#f5a800]" />
                    <span className="font-bold text-[#b87800] text-sm uppercase tracking-wider">Pro Tip</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    Before any appointment with a Medicare agent, ask them to send you the Scope of Appointment form in advance. A legitimate, CMS-compliant agent will have no hesitation doing this. If an agent resists, dismisses the form, or shows up without one, that is a red flag. You are not obligated to proceed with any appointment where the SOA was not properly completed.
                  </p>
                </div>

                {/* What to watch out for */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    Red Flags to Watch For
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While most licensed Medicare agents follow CMS rules carefully, there are bad actors in the industry. Here are warning signs that an agent may not be operating within the rules:
                  </p>
                  <div className="space-y-3">
                    {[
                      { flag: "No Scope of Appointment", detail: "Any agent who begins discussing Medicare Advantage or Part D plans without first obtaining your SOA is violating CMS regulations." },
                      { flag: "Unsolicited door-to-door visits", detail: "Agents cannot show up at your door uninvited to sell Medicare plans. If someone does this, do not let them in and report it." },
                      { flag: "Gifts or inducements over $15", detail: "Offering cash, gift cards, or valuable items to influence your plan choice is prohibited. Nominal gifts under $15 are allowed in limited circumstances." },
                      { flag: "Appointments at healthcare settings", detail: "Agents generally cannot hold sales appointments in doctor offices, pharmacies, or other healthcare settings unless a formal arrangement exists." },
                      { flag: "Pressure to enroll on the spot", detail: "You are never required to enroll during an appointment. A reputable agent will give you time to review materials and make an informed decision." },
                    ].map((item) => (
                      <div key={item.flag} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                        <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm mb-0.5">{item.flag}</div>
                          <div className="text-gray-700 text-sm leading-relaxed">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How to report */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    How to Report a Scope of Appointment Violation
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you believe a Medicare agent has violated the Scope of Appointment requirement or any other CMS marketing rule, you have several options:
                  </p>
                  <ol className="space-y-3 list-none">
                    {[
                      { n: "1", title: "Call 1-800-MEDICARE", detail: "1-800-633-4227. Available 24/7. Report the agent's name, the insurance carrier they represent, and a description of what happened." },
                      { n: "2", title: "Contact SHINE in Florida", detail: "SHINE (Serving Health Insurance Needs of Elders) is Florida's free Medicare counseling program. Call 1-800-963-5337 to speak with a counselor." },
                      { n: "3", title: "File a complaint with the carrier", detail: "Contact the insurance company the agent represents directly. Carriers are responsible for their agents' conduct and are required to investigate complaints." },
                      { n: "4", title: "Contact the Florida Department of Insurance", detail: "File a complaint at myfloridacfo.com/division/consumers if the agent is licensed in Florida." },
                    ].map((step) => (
                      <li key={step.n} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="w-7 h-7 rounded-full bg-[#1a3fa8] text-white text-xs font-bold flex items-center justify-center shrink-0">{step.n}</div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm mb-0.5">{step.title}</div>
                          <div className="text-gray-700 text-sm leading-relaxed">{step.detail}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">

                {/* CTA card */}
                <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
                  <div className="font-bold text-lg mb-2">Work With a Compliant Agent</div>
                  <p className="text-blue-200 text-sm leading-relaxed mb-5">
                    Our licensed agents follow all CMS marketing regulations, including the Scope of Appointment requirement. Free consultations, no pressure.
                  </p>
                  <Link
                    href="/free-consultation/"
                    className="block w-full text-center bg-[#f5a800] text-white font-bold py-3 rounded-xl hover:bg-[#e09600] transition-colors mb-3"
                  >
                    Get a Free Consultation
                  </Link>
                  <a
                    href="tel:8136995559"
                    className="block w-full text-center bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-sm"
                  >
                    <Phone size={13} className="inline mr-1.5" />813-699-5559
                  </a>
                </div>

                {/* Related links */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="font-bold text-gray-900 text-sm mb-3">Related Resources</div>
                  <div className="space-y-2">
                    <Link href="/medicare-broker-vs-agent/" className="block text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors">Medicare Broker vs. Agent: What Is the Difference?</Link>
                    <Link href="/use-medicare-insurance-agent-in-florida/" className="block text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors">Why Use a Medicare Agent in Florida?</Link>
                    <Link href="/medicare-advantage/" className="block text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors">Medicare Advantage Plans Explained</Link>
                    <Link href="/medicare-supplement/" className="block text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors">Medicare Supplement (Medigap) Guide</Link>
                    <Link href="/enrollment-timeline/" className="block text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors">Medicare Enrollment Timeline</Link>
                    <Link href="/what-is-the-special-enrollment-period/" className="block text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors">Special Enrollment Period Guide</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 bg-[#0d2260]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Have Questions About Working With a Medicare Agent?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Our licensed agents are fully CMS-compliant and always follow the Scope of Appointment process. Free consultations, no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-started/"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09600] transition-colors text-lg"
              >
                Get Started Free <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg"
              >
                <Phone size={18} /> 813-699-5559
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />

      <Footer />
    </>
  );
}
