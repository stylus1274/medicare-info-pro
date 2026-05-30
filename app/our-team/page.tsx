"use client";
/* ==========================================================================
   Our Team — /our-team
   Design: navy/gold MIP brand, card grid linking to individual profile pages
   ========================================================================== */
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Award, MapPin, ChevronRight, Users } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Gregory Wohl",
    title: "Founder & Licensed Medicare Agent",
    license: "FL License # D009743",
    phone: "813-699-5559",
    location: "Brandon, FL",
    bio: "Greg Wohl is a graduate of the University of South Florida with a Bachelor's Degree in Finance. He has been a licensed agent for 22 years and is an expert on Medicare, serving as one of the leading representatives for these plans in the area.",
    photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/Greg-Wohl.jpg",
    slug: "greg-wohl",
    badge: "CMIP Certified",
    specialties: ["Medicare Advantage", "Medigap", "Part D"],
  },
  {
    name: "Jennifer C. Loader-Wohl",
    title: "Licensed Medicare Agent",
    license: "FL License # W013380",
    phone: "813-756-1100",
    location: "Lithia, FL",
    bio: "Jennifer is a graduate of Florida State University and a licensed insurance agent representing the top carriers in the area. She is an expert on Medicare Advantage Plans, Medicare Supplements, and Part D Drug plans.",
    photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/Jennifer-Loader.jpg",
    slug: "jennifer-loader-wohl",
    badge: null,
    specialties: ["Medicare Advantage", "Medigap", "Part D"],
  },
  {
    name: "Jose F. Diaz \"JD\"",
    title: "Licensed Medicare Agent",
    license: "FL License # W613730",
    phone: "813-699-5559",
    location: "Plant City, FL",
    bio: "JD is a licensed insurance agent appointed with the most well-respected carriers in the area. As a third-generation Tampa Bay native, he is passionate about helping clients identify the most competitive plans through a consultative, needs-based approach.",
    photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/JD-Diaz.jpg",
    slug: "jd-diaz",
    badge: null,
    specialties: ["Medicare Advantage", "Special Needs Plans", "Part D"],
  },
  {
    name: "Chris Gallimore",
    title: "Licensed Medicare Agent",
    license: "FL License # P117166",
    phone: "727-504-0554",
    location: "Madeira Beach, FL",
    bio: "Chris is a licensed insurance agent and a native Floridian. He has been helping clients with Medicare for almost 10 years, bringing deep knowledge of plan options across the Tampa Bay region.",
    photo: null,
    slug: "chris-gallimore",
    badge: null,
    specialties: ["Medicare Advantage", "Medigap", "Part D"],
  },
  {
    name: "Paul Eckstein",
    title: "Licensed Medicare Agent",
    license: "FL License # A075214",
    phone: "813-756-1100",
    location: "Brandon, FL",
    bio: "Paul is a Florida licensed insurance agent with 20+ years of experience. He has utilized a broad spectrum of carriers in life and health disciplines and is an expert in Medicare with a primary goal of fitting the right plan to each client's needs.",
    photo: null,
    slug: "paul-eckstein",
    badge: null,
    specialties: ["Medicare Advantage", "Life Insurance", "Medigap"],
  },
  {
    name: "Kelly Webb",
    title: "Licensed Medicare Agent",
    license: "FL License # W127785",
    phone: "727-560-8850",
    location: "Hillsborough & Polk Counties, FL",
    bio: "Kelly was born in Canton, Ohio and graduated from Millsaps College in 1991 with a BBA. Her background is in Human Resources, Corporate Training, and Education. She has been a licensed insurance agent since 2013.",
    photo: null,
    slug: "kelly-webb",
    badge: null,
    specialties: ["Medicare Advantage", "Medigap", "Employer Coverage"],
  },
  {
    name: "Paxton Dement, CFP",
    title: "Licensed Medicare Agent, Certified Financial Planner",
    license: "GA License # 564308",
    phone: "678-557-7756",
    location: "Marietta, GA",
    bio: "Paxton holds the Certified Financial Planner designation and has lived in the Atlanta area for over 25 years. His background is in Investment Management, Financial Planning, and Risk Management. He has been a licensed agent since 1999.",
    photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/Paxton-Dement.jpg",
    slug: "paxton-dement",
    badge: "CFP",
    specialties: ["Medicare Advantage", "Financial Planning", "Medigap"],
  },
  {
    name: "Valerie Hall",
    title: "Licensed Medicare Agent",
    license: "AR License # 18041755 | FL License # W336278",
    phone: "479-225-9566",
    location: "Arkansas & Florida",
    bio: "Valerie is a licensed insurance agent in Arkansas and Florida and a graduate of the University of South Florida. Her goal is to build lasting relationships with clients by providing a pressure-free experience, dedicating herself to managing client needs with integrity, respect, and compassion.",
    photo: null,
    slug: "valerie-justin-hall",
    badge: null,
    specialties: ["Medicare Advantage", "Medigap", "Part D"],
  },
  {
    name: "Mark VanHoesen",
    title: "Licensed Medicare Agent",
    license: "FL License # W16104983",
    phone: "727-272-0943",
    location: "Florida",
    bio: "Mark is a seasoned customer advocate who relocated to Florida from Kansas to be closer to his family. He represents 13 different companies and looks forward to connecting clients with the right plan for today and for life.",
    photo: null,
    slug: "mark-vanhoesen",
    badge: null,
    specialties: ["Medicare Advantage", "Medigap", "Part D"],
  },
];

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#f7f9fc", minHeight: "100vh" }}>
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", color: "#fff", padding: "4rem 0 5rem" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
            <nav style={{ fontSize: "0.8rem", color: "#93aee8", marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "0.5rem" }}>
              <Link href="/" style={{ color: "#93aee8", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "#fff" }}>Our Team</span>
            </nav>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,168,0,0.15)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 999, padding: "0.35rem 1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#f5a800", marginBottom: "1.25rem" }}>
              <Users size={13} />
              MEET THE TEAM
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Your Local Medicare Experts
            </h1>
            <p style={{ color: "#c8d6f5", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto 2rem" }}>
              Our team of licensed, independent agents has helped thousands of Medicare beneficiaries across Florida and beyond find the right coverage at the right price.
            </p>
            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
              {[["9", "Licensed Agents"], ["22+", "Years Experience"], ["17", "Carriers Represented"], ["No Cost", "Consultations"]].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f5a800" }}>{val}</div>
                  <div style={{ fontSize: "0.8rem", color: "#93aee8", marginTop: "0.2rem" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.75rem" }}>
            {TEAM_MEMBERS.map((member) => (
              <div key={member.slug} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)"; }}
              >
                {/* Card Header */}
                <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(245,168,0,0.5)", flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "3px solid rgba(245,168,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f5a800" }}>{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                      <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", margin: 0 }}>{member.name}</h2>
                      {member.badge && (
                        <span style={{ background: "rgba(245,168,0,0.2)", border: "1px solid rgba(245,168,0,0.4)", borderRadius: 999, padding: "0.15rem 0.5rem", fontSize: "0.65rem", fontWeight: 700, color: "#f5a800" }}>{member.badge}</span>
                      )}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#93aee8", marginTop: "0.2rem" }}>{member.title}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(147,174,232,0.7)", marginTop: "0.2rem" }}>{member.license}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{member.bio}</p>

                  {/* Specialties */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {member.specialties.map(s => (
                      <span key={s} style={{ background: "#eef2ff", color: "#1a3fa8", borderRadius: 999, padding: "0.2rem 0.65rem", fontSize: "0.72rem", fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>

                  {/* Contact info */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <a href={`tel:${member.phone.replace(/\D/g, "")}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#374151", textDecoration: "none" }}>
                      <Phone size={13} style={{ color: "#1a3fa8" }} />
                      {member.phone}
                    </a>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#374151" }}>
                      <MapPin size={13} style={{ color: "#1a3fa8" }} />
                      {member.location}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/${member.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", background: "#0d1f5c", color: "#fff", borderRadius: 8, padding: "0.65rem 1rem", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", marginTop: "auto", transition: "background 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#1a3fa8")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#0d1f5c")}
                  >
                    View Full Profile
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", padding: "4rem 0" }}>
          <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
            <Award size={36} style={{ color: "#f5a800", margin: "0 auto 1rem" }} />
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ready to Talk to a Medicare Expert?
            </h2>
            <p style={{ color: "#c8d6f5", marginBottom: "2rem", fontSize: "1rem" }}>
              All consultations are free, with no obligation. Our agents are independent, so we work for you, not the insurance companies.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-consultation" style={{ background: "#f5a800", color: "#0d1f5c", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                Schedule a Free Consultation
              </Link>
              <a href="tel:8136995559" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                Call 813-699-5559
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
