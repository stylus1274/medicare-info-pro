"use client";
/* ==========================================================================
   Medicare planning resources — /testimonials
   Design: navy/gold MIP brand, practical guidance cards, CTA
   ========================================================================== */
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Planning Resources",
  "url": "https://medicareinfopro.com/testimonials/",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export default function TestimonialsClient() {
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
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
            <div style={{ display: "inline-block", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.9rem", borderRadius: 999, marginBottom: "1rem" }}>
              Medicare planning
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} variant="light" className="mb-4 justify-center" />
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Medicare Planning Resources
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#c8d6f5", maxWidth: 600, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              Use these practical steps to prepare for questions about Medicare coverage, enrollment timing, doctors, pharmacies, and prescriptions.
            </p>
          </div>
        </div>

        {/* Preparation Grid */}
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Start with your timing", text: "Write down when you expect Medicare eligibility to begin and any questions you have about enrollment periods or employer coverage." },
              { title: "List your care priorities", text: "Bring the doctors, specialists, hospitals, and pharmacies you would like to keep using so you can ask targeted coverage questions." },
              { title: "Gather prescription details", text: "Prepare each prescription medication with its name, dosage, and frequency to support a clear discussion about drug coverage." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "1.75rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderTop: "3px solid #f5a800",
                }}
              >
                <div style={{ display: "inline-block", background: "#e8edf8", color: "#1a3fa8", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", padding: "0.2rem 0.6rem", borderRadius: 999, marginBottom: "0.9rem", width: "fit-content" }}>
                  Medicare preparation
                </div>
                <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.95rem", flex: 1, marginBottom: "1.25rem", fontStyle: "italic" }}>
                  {item.text}
                </p>
                <div style={{ borderTop: "1px solid #f0f2f7", paddingTop: "1rem" }}>
                  <div style={{ fontWeight: 700, color: "#0d1f5c", fontSize: "0.9rem" }}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation CTA */}
        <div style={{ background: "#fff", borderTop: "1px solid #e8eaf0", borderBottom: "1px solid #e8eaf0", padding: "3rem 0" }}>
          <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Need Help Preparing for Medicare?
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              A licensed Medicare advisor can help you organize the questions and plan details that matter most to you.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/free-consultation"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, padding: "0.85rem 1.5rem", borderRadius: 10, textDecoration: "none", fontSize: "0.92rem" }}
              >
                Get Your Free Consultation <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", color: "#fff", padding: "4rem 0" }}>
          <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ready to Discuss Your Medicare Options?
            </h2>
            <p style={{ color: "#c8d6f5", marginBottom: "2rem", lineHeight: 1.7 }}>
              Bring your questions, coverage details, and care priorities to a conversation with a licensed Medicare advisor.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="tel:8136995559"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, padding: "0.9rem 1.75rem", borderRadius: 10, textDecoration: "none", fontSize: "1rem" }}
              >
                <Phone size={16} /> 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", color: "#fff", fontWeight: 600, padding: "0.9rem 1.75rem", borderRadius: 10, textDecoration: "none", fontSize: "1rem", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
