"use client";

/* ==========================================================================
   ContactClient — Next.js App Router
   Contact Medicare Information Project — phone, email, office, contact form
   Design: navy/gold MIP brand, two-column layout with form + contact info
   ========================================================================== */

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
  ChevronRight,
  Send,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── HubSpot ─────────────────────────────────────────────────────────────────

const HS_PORTAL_ID = "246426534";
const HS_FORM_ID = "1afd1c7a-145b-426b-a40d-f2df27790c75";

async function submitToHubSpot(data: FormState): Promise<void> {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`;
  const payload = {
    fields: [
      { name: "firstname", value: data.name.split(" ")[0] || data.name },
      { name: "lastname", value: data.name.split(" ").slice(1).join(" ") || "" },
      { name: "phone", value: data.phone },
      { name: "email", value: data.email },
      { name: "zip", value: data.zip },
      { name: "message", value: `Inquiry type: ${data.inquiry}\n\n${data.message}` },
    ].filter((f) => f.value.trim() !== ""),
    context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: "Contact Us" },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HubSpot error ${res.status}: ${text}`);
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call Us (Local)",
    value: "813-699-5559",
    href: "tel:8136995559",
    note: "Mon – Fri, 9 AM – 5 PM ET",
  },
  {
    icon: Phone,
    label: "Toll-Free",
    value: "888-886-5840",
    href: "tel:8888865840",
    note: "Mon – Fri, 9 AM – 5 PM ET",
  },
  {
    icon: Mail,
    label: "Email",
    value: "greg@medicareinfopro.com",
    href: "mailto:greg@medicareinfopro.com",
    note: "We respond within 1 business day",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "915 Oakfield Dr, Suite A, Brandon, FL 33511",
    href: "https://maps.google.com/?q=915+Oakfield+Dr+Suite+A+Brandon+FL+33511",
    note: "By appointment only",
  },
];

const INQUIRY_TYPES = [
  "I am new to Medicare and need guidance",
  "I want to compare Medicare Advantage plans",
  "I want to compare Medigap / supplement plans",
  "I want to review my current coverage",
  "I have a question about Part D drug coverage",
  "I have a billing or claims question",
  "Other",
];

// ─── Form ─────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  phone: string;
  email: string;
  zip: string;
  inquiry: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  zip: "",
  inquiry: "",
  message: "",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please provide your name and phone number so we can reach you.");
      return;
    }

    setSubmitting(true);

    try {
      await submitToHubSpot(form);
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("HubSpot submission error:", err);
      setError("Something went wrong submitting your request. Please call us directly at 813-699-5559.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d2260] py-14" aria-label="Contact page header">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Free Consultation
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Get in Touch
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-xl mx-auto">
            Have a Medicare question? Ready to compare plans? We are here to help: at no cost to you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10">

          {/* Left: Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Request a Free Consultation
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Fill out the form below and a licensed Medicare specialist will contact you: usually within one business day. No obligation, no pressure.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Request Received!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Thank you for reaching out. A licensed Medicare specialist will contact you within one business day. If you need immediate assistance, please call us directly.
                </p>
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0d2870] transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call 813-699-5559
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(813) 555-0100"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email + ZIP */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      value={form.zip}
                      onChange={handleChange}
                      placeholder="33511"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiry"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    What can we help you with?
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all bg-white"
                  >
                    <option value="">Select an option...</option>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Additional details (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your situation, any specific questions, or the best time to reach you..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#1a3fa8]/30 focus:border-[#1a3fa8] transition-all resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-start gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 w-full bg-[#1a3fa8] hover:bg-[#0d2870] disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition-colors"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Request Free Consultation
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  By submitting this form you agree to be contacted by a licensed Medicare agent. We will never sell your information.
                </p>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <aside className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white">
              <h3 className="font-serif font-bold text-lg mb-4">Prefer to Call?</h3>
              <div className="space-y-4">
                <a
                  href="tel:8136995559"
                  className="flex items-center gap-3 bg-[#f5a800] text-white font-bold px-5 py-3 rounded-xl hover:bg-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-sm">Local</div>
                    <div className="text-base">813-699-5559</div>
                  </div>
                </a>
                <a
                  href="tel:8888865840"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl transition-colors border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-sm text-blue-200">Toll-Free</div>
                    <div className="text-base">888-886-5840</div>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-2 mt-4 text-blue-200 text-xs">
                <Clock className="w-3.5 h-3.5" />
                Mon – Fri, 9 AM – 5 PM ET
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              {CONTACT_METHODS.map((method) => (
                <div key={method.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <method.icon className="w-4 h-4 text-[#1a3fa8]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                      {method.label}
                    </p>
                    <a
                      href={method.href}
                      className="text-sm font-semibold text-gray-900 hover:text-[#1a3fa8] transition-colors"
                      target={method.href.startsWith("https://maps") ? "_blank" : undefined}
                      rel={method.href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                    >
                      {method.value}
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">{method.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-gray-900 mb-3 text-sm">
                Helpful Before You Call
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Take the Medicare Quiz", href: "/medicare-quiz" },
                  { label: "Compare Original vs. Advantage", href: "/original-vs-advantage" },
                  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
                  { label: "Enrollment Timeline", href: "/enrollment-timeline" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#1a3fa8] transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1a3fa8] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Compliance */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 leading-relaxed">
          <p className="font-semibold text-gray-700 mb-1">Compliance Disclosure</p>
          We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity. Medicare Information Project | 915 Oakfield Dr, Suite A, Brandon, FL 33511 | 813-699-5559.
        </div>
      </div>

      <Footer />
    </div>
  );
}
