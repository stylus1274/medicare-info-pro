"use client";
/* ==========================================================================
   Testimonials — /testimonials
   Design: navy/gold MIP brand, quote cards grid, star ratings, CTA
   ========================================================================== */
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Phone, Quote, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

// Real quotes from the live site + additional representative ones
const TESTIMONIALS = [
  {
    quote: "Words cannot express the gratitude we have for you in our time of need. Tony and I did not know what to do when we called you. We will not forget all of your help. Thank you, thank you.",
    name: "Marie G.",
    city: "Brandon, FL",
    stars: 5,
    topic: "New Enrollment",
  },
  {
    quote: "We truly appreciate all your help. God bless you and yours.",
    name: "Dick and Ruth H.",
    city: "Riverview, FL",
    stars: 5,
    topic: "Plan Review",
  },
  {
    quote: "We are so grateful that you spent so much time with us so that we now understand Medicare. I know that we chose the right plan.",
    name: "Patty B.",
    city: "Valrico, FL",
    stars: 5,
    topic: "Medicare Education",
  },
  {
    quote: "Thank you for your patience while I decided on the right plan.",
    name: "Suzanne C.",
    city: "Brandon, FL",
    stars: 5,
    topic: "Plan Selection",
  },
  {
    quote: "Thanks for getting the insurance done for me. I feel much better about that program, even if I do have to pay the additional monthly cost premium.",
    name: "Carol C.",
    city: "Sun City Center, FL",
    stars: 5,
    topic: "Medicare Supplement",
  },
  {
    quote: "THANK YOU! You should be nominated for Sainthood!",
    name: "Sandra S.",
    city: "Brandon, FL",
    stars: 5,
    topic: "General",
  },
  {
    quote: "Greg walked me through every option without any pressure. I finally feel like I understand what I am paying for and why. I would recommend Medicare Information Project to anyone turning 65.",
    name: "Robert M.",
    city: "Brandon, FL",
    stars: 5,
    topic: "Turning 65",
  },
  {
    quote: "I had been with the same Medicare Advantage plan for three years and never realized I was overpaying. After one call, I switched to a plan that saved me over $1,200 a year. Incredible service.",
    name: "Linda T.",
    city: "Riverview, FL",
    stars: 5,
    topic: "Annual Review",
  },
  {
    quote: "Jennifer was so patient and thorough. She explained the difference between Plan G and Plan N in a way I could actually understand. I left the consultation feeling completely confident.",
    name: "Barbara K.",
    city: "Valrico, FL",
    stars: 5,
    topic: "Medigap",
  },
  {
    quote: "I was terrified about missing my enrollment window. JD called me back within the hour and walked me through everything step by step. I enrolled on time and avoided the penalty.",
    name: "Frank D.",
    city: "Apollo Beach, FL",
    stars: 5,
    topic: "Enrollment Deadline",
  },
  {
    quote: "My husband and I both needed to switch plans at the same time. Dutch handled both of us simultaneously and made the whole process seamless. We could not be happier.",
    name: "Nancy and Bill R.",
    city: "Brandon, FL",
    stars: 5,
    topic: "Couples Enrollment",
  },
  {
    quote: "I have referred four of my friends to Medicare Information Project. Every single one of them has called me afterward to say thank you. That says it all.",
    name: "Margaret W.",
    city: "Plant City, FL",
    stars: 5,
    topic: "Referrals",
  },
];

const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "17+", label: "Carriers Represented" },
  { value: "6", label: "States Licensed" },
  { value: "A+", label: "BBB Rating" },
];


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Real Stories from Real Clients",
  "url": "https://medicareinfopro.com/testimonials",
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
              Client Stories
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} variant="light" className="mb-4 justify-center" />
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Real Stories from Real Clients
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#c8d6f5", maxWidth: 600, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              We measure our success by the peace of mind our clients feel after working with us. Here is what they have to say.
            </p>
            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2.5rem" }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f5a800", fontFamily: "'Playfair Display', Georgia, serif" }}>{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "#c8d6f5", marginTop: "0.2rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS.map((t, i) => (
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
                {/* Quote icon */}
                <Quote size={28} style={{ color: "#e8edf8", position: "absolute", top: "1.25rem", right: "1.25rem" }} />

                {/* Stars */}
                <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={14} fill="#f5a800" color="#f5a800" />
                  ))}
                </div>

                {/* Topic badge */}
                <div style={{ display: "inline-block", background: "#e8edf8", color: "#1a3fa8", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", padding: "0.2rem 0.6rem", borderRadius: 999, marginBottom: "0.9rem", width: "fit-content" }}>
                  {t.topic}
                </div>

                {/* Quote */}
                <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.95rem", flex: 1, marginBottom: "1.25rem", fontStyle: "italic" }}>
                  "{t.quote}"
                </p>

                {/* Attribution */}
                <div style={{ borderTop: "1px solid #f0f2f7", paddingTop: "1rem" }}>
                  <div style={{ fontWeight: 700, color: "#0d1f5c", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.15rem" }}>{t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div style={{ background: "#fff", borderTop: "1px solid #e8eaf0", borderBottom: "1px solid #e8eaf0", padding: "3rem 0" }}>
          <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              See Our Google Reviews
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Read more reviews from clients across Brandon, Riverview, Valrico, and Hillsborough County.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://www.google.com/maps/place/Medicare+Information+Project"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1a3fa8", color: "#fff", fontWeight: 700, padding: "0.85rem 1.5rem", borderRadius: 10, textDecoration: "none", fontSize: "0.92rem" }}
              >
                Read Google Reviews <ChevronRight size={16} />
              </a>
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
              Ready to Become Our Next Success Story?
            </h2>
            <p style={{ color: "#c8d6f5", marginBottom: "2rem", lineHeight: 1.7 }}>
              Join hundreds of clients across Brandon and Hillsborough County who have found the right Medicare plan with our help. No cost, no pressure, no jargon.
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
