"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Download,
  Shield,
  Clock,
  FileText,
  Calendar,
  ChevronRight,
  Phone,
  Star,
  Lock,
  AlertCircle,
} from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────────
const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/logo-white_bb567c3d.png";
const PHONE_DISPLAY = "813-699-5559";
const PHONE_HREF = "tel:8136995559";

// ── Types ──────────────────────────────────────────────────────────────────────
interface KitFormData {
  firstName: string;
  lastName: string;
  dobMonth: string;
  dobDay: string;
  dobYear: string;
  email: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function buildDays(month: string, year: string): number[] {
  const m = parseInt(month, 10);
  const y = parseInt(year, 10) || 2000;
  if (!m) return Array.from({ length: 31 }, (_, i) => i + 1);
  const daysInMonth = new Date(y, m, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidDOB(month: string, day: string, year: string): boolean {
  const m = parseInt(month, 10);
  const d = parseInt(day, 10);
  const y = parseInt(year, 10);
  if (!m || !d || !y) return false;
  if (y < 1920 || y > new Date().getFullYear() - 18) return false;
  const date = new Date(y, m - 1, d);
  return date.getMonth() === m - 1 && date.getDate() === d;
}

// ── Kit Benefits ──────────────────────────────────────────────────────────────
const KIT_BENEFITS = [
  {
    icon: Calendar,
    title: "Your Personal Enrollment Timeline",
    desc: "Exact dates calculated from your birthday: when your Initial Enrollment Period opens, your Medigap window, and every key deadline.",
  },
  {
    icon: FileText,
    title: "Coverage Comparison Worksheet",
    desc: "Side-by-side breakdown of Original Medicare vs. Medicare Advantage so you can see which path fits your doctors and budget.",
  },
  {
    icon: CheckCircle,
    title: "Medicare Snapshot Checklist",
    desc: "A quick self-assessment to identify situations that change when and how you should enroll, including employer coverage and HSA rules.",
  },
  {
    icon: Shield,
    title: "Doctor and Drug Inventory Pages",
    desc: "Fillable worksheets to list your current providers and prescriptions before you compare plans, so nothing gets overlooked.",
  },
  {
    icon: Star,
    title: "Cost Estimator and Action Plan",
    desc: "Understand your likely out-of-pocket costs and walk away with a clear, prioritized action plan tailored to your situation.",
  },
];

// ── Trust Signals ─────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: Lock, text: "Your information is never sold or shared with third parties." },
  { icon: Shield, text: "Licensed Medicare agents available to answer your questions." },
  { icon: Download, text: "PDF downloads instantly to your device, no account required." },
];

// ── Month Options ─────────────────────────────────────────────────────────────
const MONTHS = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

// ── Year Range ────────────────────────────────────────────────────────────────
function getYearRange(): number[] {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let y = currentYear - 18; y >= 1930; y--) {
    years.push(y);
  }
  return years;
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function FreeMedicareKitClient() {
  const [form, setForm] = useState<KitFormData>({
    firstName: "",
    lastName: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof KitFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const days = buildDays(form.dobMonth, form.dobYear);
  const years = getYearRange();

  function update(field: keyof KitFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Reset day if month/year changes and current day is now invalid
    if ((field === "dobMonth" || field === "dobYear") && form.dobDay) {
      const newDays = buildDays(
        field === "dobMonth" ? value : form.dobMonth,
        field === "dobYear" ? value : form.dobYear
      );
      if (parseInt(form.dobDay, 10) > newDays.length) {
        setForm((prev) => ({ ...prev, [field]: value, dobDay: "" }));
      }
    }
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof KitFormData, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.dobMonth) newErrors.dobMonth = "Please select a month.";
    if (!form.dobDay) newErrors.dobDay = "Please select a day.";
    if (!form.dobYear) newErrors.dobYear = "Please select a year.";
    if (form.dobMonth && form.dobDay && form.dobYear && !isValidDOB(form.dobMonth, form.dobDay, form.dobYear)) {
      newErrors.dobYear = "Please enter a valid date of birth.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/generate-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          dob: `${form.dobYear}-${form.dobMonth.padStart(2, "0")}-${form.dobDay.padStart(2, "0")}`,
          email: form.email.trim(),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to generate kit.");
      }

      // Trigger PDF download
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Medicare-Decision-Kit-${form.firstName}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "We were unable to generate your kit right now. Please call us at " +
          PHONE_DISPLAY +
          " and we will send it to you directly."
      );
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#f8f9fc" }}>
      {/* ── Top Bar ── */}
      <div style={{ background: "#0a163c" }} className="py-2 px-4 text-center text-sm text-white/80">
        Free resource for anyone turning 65 or new to Medicare. No obligation, no sales calls.
      </div>

      {/* ── Header ── */}
      <header style={{ background: "#0a163c" }} className="py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/">
            <img src={LOGO_URL} alt="Medicare Information Pro" className="h-10 w-auto object-contain" />
          </Link>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-white font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" style={{ color: "#f5c842" }} />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a163c 0%, #1a3fa8 60%, #0a163c 100%)",
        }}
        className="py-16 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Get Your <span style={{ textDecoration: "underline" }}>Free</span> Personalized
            <br />
            <span style={{ color: "#f5c842" }}>Medicare Decision Kit</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            A 14-page workbook built around your birthday. Enter your date of birth and we will calculate
            your exact enrollment deadlines, key dates, and a personalized action plan, delivered as a PDF
            you can print or save.
          </p>

        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-14 px-6">
        <div className="max-w-2xl mx-auto">

          {/* ── Form ── */}
          <div ref={formRef}>
            {status === "success" ? (
              <SuccessCard firstName={form.firstName} />
            ) : (
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{ background: "#fff", border: "1px solid rgba(10,22,60,0.08)" }}
              >
                <h2 className="text-xl font-bold mb-1" style={{ color: "#0a163c" }}>
                  Download Your Free Kit
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Takes about 30 seconds. Your PDF will download instantly.
                </p>

                {status === "error" && (
                  <div
                    className="flex items-start gap-3 rounded-xl p-4 mb-5 text-sm"
                    style={{ background: "#fff5f5", border: "1px solid #fecaca", color: "#b91c1c" }}
                  >
                    <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        placeholder="Jane"
                        className={`w-full rounded-lg px-4 py-3 text-sm border outline-none transition-colors ${
                          errors.firstName
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        placeholder="Smith"
                        className={`w-full rounded-lg px-4 py-3 text-sm border outline-none transition-colors ${
                          errors.lastName
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-gray-400 mb-2">
                      Used to calculate your personalized Medicare enrollment dates.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {/* Month */}
                      <div>
                        <select
                          value={form.dobMonth}
                          onChange={(e) => update("dobMonth", e.target.value)}
                          className={`w-full rounded-lg px-3 py-3 text-sm border outline-none transition-colors appearance-none ${
                            errors.dobMonth
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white"
                          }`}
                        >
                          <option value="">Month</option>
                          {MONTHS.map((m) => (
                            <option key={m.value} value={m.value}>
                              {m.label}
                            </option>
                          ))}
                        </select>
                        {errors.dobMonth && (
                          <p className="text-xs text-red-500 mt-1">{errors.dobMonth}</p>
                        )}
                      </div>
                      {/* Day */}
                      <div>
                        <select
                          value={form.dobDay}
                          onChange={(e) => update("dobDay", e.target.value)}
                          className={`w-full rounded-lg px-3 py-3 text-sm border outline-none transition-colors appearance-none ${
                            errors.dobDay
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white"
                          }`}
                        >
                          <option value="">Day</option>
                          {days.map((d) => (
                            <option key={d} value={String(d)}>
                              {d}
                            </option>
                          ))}
                        </select>
                        {errors.dobDay && (
                          <p className="text-xs text-red-500 mt-1">{errors.dobDay}</p>
                        )}
                      </div>
                      {/* Year */}
                      <div>
                        <select
                          value={form.dobYear}
                          onChange={(e) => update("dobYear", e.target.value)}
                          className={`w-full rounded-lg px-3 py-3 text-sm border outline-none transition-colors appearance-none ${
                            errors.dobYear
                              ? "border-red-400 bg-red-50"
                              : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white"
                          }`}
                        >
                          <option value="">Year</option>
                          {years.map((y) => (
                            <option key={y} value={String(y)}>
                              {y}
                            </option>
                          ))}
                        </select>
                        {errors.dobYear && (
                          <p className="text-xs text-red-500 mt-1">{errors.dobYear}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="jane@example.com"
                      className={`w-full rounded-lg px-4 py-3 text-sm border outline-none transition-colors ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 rounded-xl py-4 text-base font-bold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: status === "loading" ? "#1a3fa8" : "#f5c842",
                      color: status === "loading" ? "#fff" : "#0a163c",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Generating your kit...
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download My Free Kit
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400 leading-relaxed">
                    By downloading, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-gray-600">
                      Privacy Policy
                    </Link>
                    . We will never sell your information. A licensed agent may follow up to answer questions.
                  </p>
                </form>
              </div>
            )}

            {/* Agent Contact Card */}
            <div
              className="mt-5 rounded-xl p-5 flex items-start gap-4"
              style={{ background: "#fff", border: "1px solid rgba(10,22,60,0.08)" }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(26,63,168,0.1)" }}
              >
                <Phone className="h-5 w-5" style={{ color: "#1a3fa8" }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Prefer to talk to someone?</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Our licensed Medicare agents are available Monday through Friday.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-1 mt-2 text-sm font-bold hover:underline"
                  style={{ color: "#1a3fa8" }}
                >
                  <Phone className="h-3.5 w-3.5" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Strip ── */}
      <section className="py-12 px-6" style={{ background: "#fff", borderTop: "1px solid #e8ecf4" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8" style={{ color: "#0a163c" }}>
            Common questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Who is this kit for?",
                a: "Anyone turning 65 within the next 12 months, or anyone who is already on Medicare and wants to understand their options better. It is also a great resource if you are helping a parent or spouse navigate Medicare for the first time.",
              },
              {
                q: "How is the PDF personalized?",
                a: "We use your date of birth to calculate your Initial Enrollment Period, your Medigap Open Enrollment window, and other key deadlines. Your name and these dates are printed directly into the kit so you have a document that reflects your specific situation.",
              },
              {
                q: "Is there any cost or obligation?",
                a: "The kit is completely free. There is no purchase required and no obligation to speak with an agent. If you do have questions after reviewing the kit, our licensed agents are available to help at no charge.",
              },
              {
                q: "Will I receive sales calls?",
                a: "A licensed agent may reach out once to ask if you have questions about the kit. We do not sell your information to third parties, and you can opt out of any future contact at any time.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ background: "#f8f9fc", border: "1px solid #e8ecf4" }}
              >
                <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Strip ── */}
      <footer style={{ background: "#0a163c" }} className="py-8 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <img src={LOGO_URL} alt="Medicare Information Pro" className="h-8 w-auto object-contain mx-auto mb-4" />
          <p className="text-white/50 text-xs leading-relaxed max-w-2xl mx-auto">
            Medicare Information Pro is a licensed insurance agency. We are not affiliated with or endorsed by Medicare or any government agency.
            Medicare has neither reviewed nor endorsed this information.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-white/40">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/contact-us" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Success Card ──────────────────────────────────────────────────────────────
function SuccessCard({ firstName }: { firstName: string }) {
  return (
    <div
      className="rounded-2xl p-8 text-center shadow-xl"
      style={{ background: "#fff", border: "1px solid rgba(10,22,60,0.08)" }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ background: "rgba(34,197,94,0.1)" }}
      >
        <CheckCircle className="h-8 w-8 text-green-500" />
      </div>
      <h2 className="text-xl font-bold mb-2" style={{ color: "#0a163c" }}>
        Your kit is downloading, {firstName}!
      </h2>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Check your downloads folder for{" "}
        <strong>Medicare-Decision-Kit-{firstName}.pdf</strong>. If the download did not start
        automatically, please check your browser settings or call us and we will send it directly.
      </p>
      <div className="space-y-3">
        <Link
          href="/enrollment-timeline"
          className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-semibold transition-colors"
          style={{ background: "#f5c842", color: "#0a163c" }}
        >
          <Calendar className="h-4 w-4" />
          Explore Your Enrollment Timeline
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href="/get-started"
          className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-semibold border transition-colors"
          style={{ borderColor: "#1a3fa8", color: "#1a3fa8" }}
        >
          Talk to a Licensed Agent
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="text-xs text-gray-400 mt-5">
        Questions? Call us at{" "}
        <a href="tel:8136995559" className="font-semibold underline" style={{ color: "#1a3fa8" }}>
          {PHONE_DISPLAY}
        </a>
      </p>
    </div>
  );
}
