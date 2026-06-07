"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, Phone, CheckCircle, Shield } from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────────
const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/logo-white_bb567c3d.png";
const PHONE_DISPLAY = "813-699-5559";
const PHONE_HREF = "tel:8136995559";
const TOTAL_STEPS = 7;

// ── Types ──────────────────────────────────────────────────────────────────────
interface FormData {
  zip: string;
  hasMedicare: string;
  dentalImportance: string;
  rxImportance: string;
  doctorImportance: string;
  name: string;
  phone: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ── Header ─────────────────────────────────────────────────────────────────────
function FunnelHeader() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "#0d1f5c",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 2px 12px rgba(10,22,60,0.18)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "0 1.5rem",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo — left */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
          <div style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8,
            padding: "0.35rem 0.85rem",
            display: "flex", alignItems: "center",
          }}>
            <img
              src={LOGO_URL}
              alt="Medicare Information Project"
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* Contact — right */}
        <a
          href={PHONE_HREF}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.45rem",
            background: "#f5a800", color: "#0d1f5c",
            padding: "0.5rem 1.1rem", borderRadius: 999,
            fontSize: "0.875rem", fontWeight: 700,
            textDecoration: "none", whiteSpace: "nowrap",
            boxShadow: "0 2px 10px rgba(245,168,0,0.35)",
            transition: "background 0.15s",
          }}
        >
          <Phone size={14} /> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function FunnelFooter() {
  return (
    <footer style={{
      background: "#0d1f5c",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "1.75rem 1.5rem",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
        textAlign: "center",
      }}>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.6, maxWidth: 600 }}>
          Medicare Information Project is an independent insurance agency licensed in FL, GA, NC, SC, VA, OH, MI, AL, AR, KS, MD, TN &amp; TX.
          We are not affiliated with or endorsed by the U.S. government or the federal Medicare program.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-and-conditions" },
            { label: "Contact Us", href: "/contact-us" },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
          &copy; {new Date().getFullYear()} Medicare Information Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ── Progress Bar ───────────────────────────────────────────────────────────────
function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ height: 6, background: "#e5e7eb", borderRadius: 999, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: "linear-gradient(90deg, #1a3a8f, #f5a800)",
          borderRadius: 999,
          transition: "width 0.4s ease",
        }} />
      </div>
      <p style={{ textAlign: "center", marginTop: "0.5rem", fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>
        {step} / {TOTAL_STEPS}
      </p>
    </div>
  );
}

// ── Nav Row ────────────────────────────────────────────────────────────────────
function NavRow({
  onBack, onSkip, showBack = true, showSkip = false,
}: {
  onBack?: () => void; onSkip?: () => void; showBack?: boolean; showSkip?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.25rem" }}>
      {showBack && onBack ? (
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", padding: 0 }}>
          <ChevronLeft size={16} /> Go Back
        </button>
      ) : <span />}
      {showSkip && onSkip ? (
        <button onClick={onSkip} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", padding: 0 }}>
          Skip <ChevronRight size={16} />
        </button>
      ) : <span />}
    </div>
  );
}

// ── Choice Button ──────────────────────────────────────────────────────────────
function ChoiceButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", padding: "0.9rem 1.25rem",
        background: "#0d1f5c", color: "#fff",
        border: "none", borderRadius: 10,
        fontSize: "1rem", fontWeight: 700,
        cursor: "pointer", transition: "background 0.15s, transform 0.1s",
        textAlign: "center",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1a3a8f"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#0d1f5c"; }}
      onMouseDown={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)"; }}
      onMouseUp={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
    >
      {label}
    </button>
  );
}

// ── Continue Button ────────────────────────────────────────────────────────────
function ContinueButton({ label = "Continue", onClick, disabled = false }: { label?: string; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%", padding: "0.9rem 1.25rem",
        background: disabled ? "#e5e7eb" : "#f5a800",
        color: disabled ? "#9ca3af" : "#0d1f5c",
        border: "none", borderRadius: 10,
        fontSize: "1rem", fontWeight: 700,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.15s",
        marginTop: "0.75rem",
      }}
    >
      {label}
    </button>
  );
}

// ── Inner Component ────────────────────────────────────────────────────────────
function GetStartedInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    zip: "", hasMedicare: "", dentalImportance: "",
    rxImportance: "", doctorImportance: "", name: "", phone: "",
  });
  const [done, setDone] = useState(false);

  // Pre-fill ZIP from query string (?zip=33602)
  useEffect(() => {
    if (!searchParams) return;
    const zipParam = searchParams.get("zip");
    if (zipParam && /^\d{5}$/.test(zipParam)) {
      setForm(f => ({ ...f, zip: zipParam }));
    }
  }, [searchParams]);

  const next = () => setStep(s => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep(s => Math.max(s - 1, 1));
  const set = (key: keyof FormData, val: string) => setForm(f => ({ ...f, [key]: val }));

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 4px 32px rgba(10,22,60,0.10)",
    padding: "2.5rem 2rem",
    width: "100%",
    maxWidth: 520,
    margin: "0 auto",
  };

  const questionStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#0d1f5c",
    lineHeight: 1.25,
    marginBottom: "0.5rem",
    fontFamily: "'Merriweather', serif",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "#6b7280",
    marginBottom: "1.5rem",
    lineHeight: 1.5,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1.5px solid #d1d5db",
    borderRadius: 10,
    fontSize: "1rem",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const stepLabel = (n: number) => (
    <p style={{ ...subtitleStyle, marginBottom: "0.25rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#f5a800" }}>
      Step {n} of {TOTAL_STEPS}
    </p>
  );

  // ── Thank-you screen ──
  if (done) {
    return (
      <div style={{ minHeight: "100vh", background: "#f0f4ff", display: "flex", flexDirection: "column" }}>
        <FunnelHeader />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1rem" }}>
          <div style={{ ...cardStyle, textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
              <CheckCircle size={56} style={{ color: "#22c55e" }} />
            </div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0d1f5c", marginBottom: "0.75rem", fontFamily: "'Merriweather', serif" }}>
              {form.name ? `Thanks, ${form.name.split(" ")[0]}!` : "Thank You!"}
            </h1>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              We have your information and are ready to help you find the right Medicare plan. One of our licensed agents will reach out to you shortly.
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
              In the meantime, feel free to call us directly:
            </p>
            <a
              href={PHONE_HREF}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "#0d1f5c", color: "#fff",
                padding: "0.85rem 2rem", borderRadius: 999,
                fontSize: "1.1rem", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 4px 16px rgba(10,22,60,0.2)",
                marginBottom: "1.5rem",
              }}
            >
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1.25rem", marginTop: "0.5rem" }}>
              <Link href="/" style={{ color: "#1a3a8f", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
                ← Return to home
              </Link>
            </div>
          </div>
        </div>
        <FunnelFooter />
      </div>
    );
  }

  // ── Funnel steps ──
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff", display: "flex", flexDirection: "column" }}>
      <FunnelHeader />

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1rem" }}>
        <div style={cardStyle}>

          {/* Step 1: ZIP */}
          {step === 1 && (
            <>
              {stepLabel(1)}
              <h2 style={questionStyle}>What&apos;s your ZIP code?</h2>
              <p style={subtitleStyle}>We use this to find plans available in your area.</p>
              <div style={{ position: "relative" }}>
                <MapPin size={16} style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="e.g. 33602"
                  value={form.zip}
                  onChange={e => set("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                  onKeyDown={e => { if (e.key === "Enter" && form.zip.length === 5) next(); }}
                  style={{ ...inputStyle, paddingLeft: "2.25rem" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#1a3a8f"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#d1d5db"; }}
                  autoFocus
                />
              </div>
              <ContinueButton onClick={next} disabled={form.zip.length !== 5} />
              <ProgressBar step={1} />
            </>
          )}

          {/* Step 2: Have Medicare? */}
          {step === 2 && (
            <>
              {stepLabel(2)}
              <h2 style={questionStyle}>Do you currently have Medicare?</h2>
              <p style={subtitleStyle}>This helps us understand where you are in the process.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <ChoiceButton label="Yes" onClick={() => { set("hasMedicare", "yes"); next(); }} />
                <ChoiceButton label="No" onClick={() => { set("hasMedicare", "no"); next(); }} />
              </div>
              <NavRow onBack={back} />
              <ProgressBar step={2} />
            </>
          )}

          {/* Step 3: Dental */}
          {step === 3 && (
            <>
              {stepLabel(3)}
              <h2 style={questionStyle}>How important is dental coverage?</h2>
              <p style={subtitleStyle}>These details will help us find plans that maximize dental benefits.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <ChoiceButton label="Very Important" onClick={() => { set("dentalImportance", "very"); next(); }} />
                <ChoiceButton label="Not Important" onClick={() => { set("dentalImportance", "not"); next(); }} />
              </div>
              <NavRow onBack={back} onSkip={() => { set("dentalImportance", ""); next(); }} showSkip />
              <ProgressBar step={3} />
            </>
          )}

          {/* Step 4: Rx */}
          {step === 4 && (
            <>
              {stepLabel(4)}
              <h2 style={questionStyle}>How important is prescription drug coverage?</h2>
              <p style={subtitleStyle}>These details will help us find plans that offer drug coverage.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <ChoiceButton label="Very Important" onClick={() => { set("rxImportance", "very"); next(); }} />
                <ChoiceButton label="Not Important" onClick={() => { set("rxImportance", "not"); next(); }} />
              </div>
              <NavRow onBack={back} onSkip={() => { set("rxImportance", ""); next(); }} showSkip />
              <ProgressBar step={4} />
            </>
          )}

          {/* Step 5: Doctor */}
          {step === 5 && (
            <>
              {stepLabel(5)}
              <h2 style={questionStyle}>How important is keeping the same doctor?</h2>
              <p style={subtitleStyle}>These details will help us find plans that have your doctor in network.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <ChoiceButton label="Very Important" onClick={() => { set("doctorImportance", "very"); next(); }} />
                <ChoiceButton label="Not Important" onClick={() => { set("doctorImportance", "not"); next(); }} />
              </div>
              <NavRow onBack={back} onSkip={() => { set("doctorImportance", ""); next(); }} showSkip />
              <ProgressBar step={5} />
            </>
          )}

          {/* Step 6: Name */}
          {step === 6 && (
            <>
              {stepLabel(6)}
              <h2 style={questionStyle}>What&apos;s your name?</h2>
              <p style={subtitleStyle}>This will help us personalize your Medicare experience.</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={e => set("name", e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") next(); }}
                style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor = "#1a3a8f"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#d1d5db"; }}
                autoFocus
              />
              <ContinueButton onClick={next} />
              <NavRow onBack={back} onSkip={next} showSkip />
              <ProgressBar step={6} />
            </>
          )}

          {/* Step 7: Phone */}
          {step === 7 && (
            <>
              {stepLabel(7)}
              <h2 style={questionStyle}>How can we reach you?</h2>
              <p style={subtitleStyle}>A licensed agent will call you to review your matches — no obligation.</p>
              <div style={{ position: "relative" }}>
                <Phone size={16} style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={e => set("phone", formatPhone(e.target.value))}
                  onKeyDown={e => { if (e.key === "Enter" && form.phone.replace(/\D/g, "").length === 10) setDone(true); }}
                  style={{ ...inputStyle, paddingLeft: "2.25rem" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#1a3a8f"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#d1d5db"; }}
                  autoFocus
                />
              </div>
              <ContinueButton
                label="Find My Plans"
                onClick={() => setDone(true)}
                disabled={form.phone.replace(/\D/g, "").length !== 10}
              />
              <NavRow onBack={back} />
              <ProgressBar step={7} />
              {/* TCPA Disclaimer */}
              <p style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: "1.25rem", lineHeight: 1.5 }}>
                By clicking &ldquo;Find My Plans&rdquo; you agree to receive calls and texts from Medicare Information Project at the number provided. Standard message and data rates may apply. You may opt out at any time.{" "}
                <Link href="/privacy-policy" style={{ color: "#6b7280", textDecoration: "underline" }}>Privacy Policy</Link>.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.75rem", justifyContent: "center" }}>
                <Shield size={13} style={{ color: "#9ca3af" }} />
                <span style={{ fontSize: "0.78rem", color: "#9ca3af", fontWeight: 600 }}>We never share or sell your information</span>
              </div>
            </>
          )}

        </div>
      </div>

      <FunnelFooter />
    </div>
  );
}

// ── Public export wrapped in Suspense (required for useSearchParams) ───────────
export default function GetStartedClient() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", background: "#f0f4ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 40, height: 40, border: "3px solid #e5e7eb", borderTopColor: "#1a3a8f", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      </div>
    }>
      <GetStartedInner />
    </Suspense>
  );
}
