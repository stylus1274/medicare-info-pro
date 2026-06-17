"use client";
/* ==========================================================================
   Still Working — /still-working
   Design: navy/gold MIP brand, editorial layout, decision guide
   Content: working past 65, employer coverage, creditable coverage, SEP
   ========================================================================== */
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, AlertTriangle, Phone, ChevronRight, Building2, Users, Clock } from "lucide-react";

const SCENARIOS = [
  {
    icon: Building2,
    title: "Employer Has 20+ Employees",
    description: "Your employer must offer you the same coverage as younger employees. You can delay Medicare Parts A and B without penalty as long as you have active employer coverage. You will receive a Special Enrollment Period (SEP) when you or your spouse stops working or loses that coverage.",
    recommendation: "You likely can delay Medicare safely. Compare costs before deciding.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: Users,
    title: "Employer Has Fewer Than 20 Employees",
    description: "Medicare becomes the primary payer and your employer plan becomes secondary. In this situation, your employer coverage may pay very little or nothing at all. Most people in this situation should enroll in Medicare Parts A and B at 65 to avoid significant out-of-pocket costs.",
    recommendation: "Enroll in Medicare at 65. Delaying could leave you underinsured.",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
  {
    icon: Clock,
    title: "COBRA or Retiree Coverage",
    description: "COBRA and retiree benefits do NOT count as creditable coverage for the purpose of delaying Medicare enrollment. If you are relying on either of these, you must enroll in Medicare during your Initial Enrollment Period (IEP) or face a late enrollment penalty.",
    recommendation: "Enroll during your IEP. Do not delay based on COBRA or retiree benefits.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
];

const DECISION_STEPS = [
  { step: "1", title: "Are You Still Actively Working?", body: "If yes, you may qualify to delay Medicare without penalty. The key word is 'actively.' Retiree benefits and COBRA do not count." },
  { step: "2", title: "How Many Employees Does Your Employer Have?", body: "Employers with 20 or more employees: Medicare is secondary and you can delay. Fewer than 20 employees: Medicare is primary and you should enroll at 65." },
  { step: "3", title: "Is Your Coverage Creditable?", body: "Creditable coverage means your employer plan is at least as good as Medicare. Most large employer plans qualify. Ask your HR department for a creditable coverage notice." },
  { step: "4", title: "When Does Your Coverage End?", body: "When you retire or lose employer coverage, you have 8 months to enroll in Part B without penalty. This is your Special Enrollment Period (SEP). Do not miss it." },
  { step: "5", title: "What About Part D (Prescription Drugs)?", body: "If your employer plan includes drug coverage, it must also be creditable. If it is not, you should enroll in a Part D plan to avoid the drug coverage late penalty." },
];

const PENALTIES = [
  { part: "Part B", penalty: "10% added to your monthly premium for each full 12-month period you were eligible but did not enroll.", duration: "For life" },
  { part: "Part D", penalty: "1% of the national base beneficiary premium per month you went without creditable drug coverage.", duration: "For life" },
];


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Employer Has 20+ Employees",
  "url": "https://medicareinfopro.com/still-working",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Your employer must offer you the same coverage as younger employees. You can delay Medicare Parts A and B without penalty as long as you have active employer coverage. You will receive a Special Enrollment Period (SEP) when you or your spouse stops working or loses that coverage.",
  "about": {
    "@type": "MedicalCondition",
    "name": "Medicare"
  },
  "audience": {
    "@type": "Patient"
  }
} as const;

export default function StillWorkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Header />
      <main style={{ background: "#f7f9fc", minHeight: "100vh" }}>
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", color: "#fff", padding: "4rem 0 5rem" }}>
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
            {/* Breadcrumb */}
            <nav style={{ fontSize: "0.8rem", color: "#93aee8", marginBottom: "1.5rem" }}>
              <Link href="/" style={{ color: "#93aee8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#fff" }}>Still Working?</span>
            </nav>
            <div style={{ display: "inline-block", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.9rem", borderRadius: 999, marginBottom: "1rem" }}>
              Working Past 65
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: 700 }}>
              Still Working? Here Is What You Need to Know About Medicare
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#c8d6f5", maxWidth: 640, lineHeight: 1.7, marginBottom: "2rem" }}>
              To enroll or not to enroll? It is one of the most common questions we hear. The answer depends on your specific situation, and getting it wrong can cost you permanently.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:8136995559" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, padding: "0.85rem 1.5rem", borderRadius: 10, textDecoration: "none", fontSize: "0.95rem" }}>
                <Phone size={16} /> Talk to an Agent: 813-699-5559
              </a>
              <Link href="/free-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", color: "#fff", fontWeight: 600, padding: "0.85rem 1.5rem", borderRadius: 10, textDecoration: "none", fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.25)" }}>
                Free Consultation <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2.5rem", alignItems: "start" }}>
            {/* Main content */}
            <div>
              {/* Intro */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: "2rem", borderLeft: "4px solid #f5a800" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  The Key Question: Do You Have Creditable Coverage?
                </h2>
                <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
                  When you turn 65, Medicare becomes available to you. But if you are still actively working and covered by an employer-sponsored health plan, you may be able to delay enrollment without facing a late penalty. The critical factor is whether your current coverage qualifies as <strong>creditable coverage</strong>.
                </p>
                <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
                  Creditable coverage simply means your employer plan is at least as good as what Medicare provides. Most large employer plans meet this standard. However, there is an important catch: the coverage must come from a current employer where you or your spouse is actively working. Retiree benefits and COBRA do not qualify.
                </p>
                <p style={{ color: "#374151", lineHeight: 1.8 }}>
                  The size of your employer also matters significantly. Whether your employer has more or fewer than 20 employees determines whether Medicare is primary or secondary, and that changes everything about your decision.
                </p>
              </div>

              {/* Scenarios */}
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1.25rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                Your Situation Determines Your Decision
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {SCENARIOS.map((s) => (
                  <div key={s.title} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 14, padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ background: s.color, borderRadius: 10, padding: "0.6rem", flexShrink: 0 }}>
                        <s.icon size={20} color="#fff" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 700, color: "#0d1f5c", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                        <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: "0.75rem" }}>{s.description}</p>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", background: "#fff", borderRadius: 8, padding: "0.6rem 0.85rem" }}>
                          <CheckCircle size={15} color={s.color} style={{ marginTop: 2, flexShrink: 0 }} />
                          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#374151" }}>{s.recommendation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decision steps */}
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1.25rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                How to Make the Right Decision: 5 Steps
              </h2>
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {DECISION_STEPS.map((step) => (
                    <div key={step.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                      <div style={{ background: "#1a3fa8", color: "#fff", fontWeight: 800, fontSize: "0.9rem", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {step.step}
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 700, color: "#0d1f5c", marginBottom: "0.35rem", fontSize: "1rem" }}>{step.title}</h3>
                        <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: "0.93rem" }}>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Penalties */}
              <div style={{ background: "#fff3cd", border: "1px solid #fde68a", borderRadius: 14, padding: "1.5rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <AlertTriangle size={20} color="#d97706" />
                  <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#92400e" }}>Late Enrollment Penalties Are Permanent</h2>
                </div>
                <p style={{ color: "#78350f", lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                  If you miss your enrollment window without qualifying creditable coverage, you will pay a penalty added to your premium for the rest of your life. There is no way to remove it.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {PENALTIES.map((p) => (
                    <div key={p.part} style={{ background: "#fff", borderRadius: 10, padding: "1rem", border: "1px solid #fde68a" }}>
                      <div style={{ fontWeight: 700, color: "#0d1f5c", marginBottom: "0.35rem" }}>Medicare {p.part} Penalty</div>
                      <div style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.6, marginBottom: "0.5rem" }}>{p.penalty}</div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#dc2626" }}>Duration: {p.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Enrollment Period */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Your Special Enrollment Period (SEP)
                </h2>
                <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
                  When you or your spouse retires or loses employer coverage, you trigger a Special Enrollment Period. You have <strong>8 months</strong> to enroll in Medicare Part B without penalty. This window begins the month after employment ends or coverage ends, whichever comes first.
                </p>
                <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
                  For Part D drug coverage, the SEP is shorter: you have <strong>63 days</strong> from when your creditable drug coverage ends to enroll in a Part D plan without penalty.
                </p>
                <p style={{ color: "#374151", lineHeight: 1.8 }}>
                  Do not wait until the last minute. Contacting a licensed Medicare specialist before you retire gives you time to compare plans, understand your costs, and enroll on the date that works best for you.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Greg CTA */}
              <div style={{ background: "#0d1f5c", borderRadius: 16, padding: "1.5rem", color: "#fff", textAlign: "center" }}>
                <img
                  src="https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg"
                  alt="Greg Wohl, Licensed Medicare Specialist"
                  style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "3px solid #f5a800", margin: "0 auto 1rem" }}
                />
                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>Greg Wohl</div>
                <div style={{ fontSize: "0.8rem", color: "#93aee8", marginBottom: "1rem" }}>Licensed Medicare Specialist</div>
                <p style={{ fontSize: "0.88rem", color: "#c8d6f5", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Still working and not sure what to do? I help people in your exact situation every week. Call me and we will figure it out together.
                </p>
                <a href="tel:8136995559" style={{ display: "block", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, padding: "0.75rem", borderRadius: 10, textDecoration: "none", fontSize: "0.92rem", marginBottom: "0.75rem" }}>
                  <Phone size={14} style={{ display: "inline", marginRight: 6 }} />
                  813-699-5559
                </a>
                <Link href="/free-consultation" style={{ display: "block", background: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, padding: "0.75rem", borderRadius: 10, textDecoration: "none", fontSize: "0.88rem", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Schedule a Free Consultation
                </Link>
              </div>

              {/* Quick facts */}
              <div style={{ background: "#fff", borderRadius: 14, padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem", fontSize: "0.95rem" }}>Key Numbers to Remember</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { num: "7 months", label: "Initial Enrollment Period window" },
                    { num: "20 employees", label: "Employer size threshold that matters" },
                    { num: "8 months", label: "SEP window for Part B after job loss" },
                    { num: "63 days", label: "SEP window for Part D after coverage ends" },
                    { num: "10%", label: "Part B penalty per year without coverage" },
                  ].map((f) => (
                    <div key={f.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <div style={{ background: "#e8edf8", color: "#1a3fa8", fontWeight: 800, fontSize: "0.85rem", padding: "0.25rem 0.6rem", borderRadius: 6, flexShrink: 0, whiteSpace: "nowrap" }}>{f.num}</div>
                      <div style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.5 }}>{f.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related links */}
              <div style={{ background: "#fff", borderRadius: 14, padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem", fontSize: "0.95rem" }}>Related Pages</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { href: "/enrollment-timeline", label: "Enrollment Timeline" },
                    { href: "/enrollment-calculator", label: "Penalty Calculator" },
                    { href: "/am-i-eligible", label: "Am I Eligible?" },
                    { href: "/medicare-part-b", label: "Medicare Part B Guide" },
                    { href: "/do-i-need-a-supplement", label: "Do I Need a Supplement?" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#1a3fa8", textDecoration: "none", fontSize: "0.88rem", fontWeight: 500 }}>
                      <ChevronRight size={14} /> {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
