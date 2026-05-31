"use client";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { Phone, Mail, MapPin, Calendar, Award, CheckCircle, ChevronRight, User } from "lucide-react";

export interface TeamMemberData {
  name: string;
  slug: string;
  title: string;
  photoUrl: string | null;
  phone: string;
  email: string;
  bio: string[];
  specialties: string[];
  credentials: string[];
  serviceArea: string;
  yearsExperience?: number;
}

const GREG_PHOTO = "https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg";

const RELATED_TEAM: { name: string; slug: string; photo: string | null }[] = [
  { name: "Greg Wohl", slug: "greg-wohl", photo: "https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg" },
  { name: "Jennifer Loader-Wohl", slug: "jennifer-loader-wohl", photo: "https://medicareinfopro.com/wp-content/uploads/2022/12/Jennifer-web-02.jpg" },
  { name: "JD Diaz", slug: "jd-diaz", photo: "https://medicareinfopro.com/wp-content/uploads/2022/12/JD.jpg" },
  { name: "Paxton DeMent", slug: "paxton-dement", photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/paxton-photo-1.jpg" },
  { name: "Dutch VanHoesen", slug: "dutch-vanhoesen", photo: "https://medicareinfopro.com/wp-content/uploads/2022/12/Dutch-photo-2023-scaled.jpg" },
  { name: "Valerie Justin-Hall", slug: "valerie-justin-hall", photo: null },
  { name: "Mark VanHoesen", slug: "mark-vanhoesen", photo: null },
  { name: "Kelly Webb", slug: "kelly-webb", photo: null },
];

function Avatar({ photo, name, size = 48 }: { photo: string | null; name: string; size?: number }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "2px solid #e8eaf0" }}
      />
    );
  }
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: "#e8edf8", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e8eaf0" }}>
      <User size={size * 0.45} color="#1a3fa8" />
    </div>
  );
}

export default function TeamMemberPage({ member }: { member: TeamMemberData }) {
  const others = RELATED_TEAM.filter((t) => t.slug !== member.slug).slice(0, 4);

  return (
    <>
      <Header />
      <main style={{ background: "#f7f9fc", minHeight: "100vh" }}>
        {/* Breadcrumb */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-3" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "#6b7280" }}>
            <Link href="/" style={{ color: "#1a3fa8", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={12} />
            <Link href="/about-us" style={{ color: "#1a3fa8", textDecoration: "none" }}>Our Team</Link>
            <ChevronRight size={12} />
            <span style={{ color: "#374151", fontWeight: 600 }}>{member.name}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", color: "#fff", padding: "3.5rem 0 4rem" }}>
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}>
              {/* Photo */}
              <div style={{ flexShrink: 0 }}>
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    style={{
                      width: 180, height: 220, objectFit: "cover", objectPosition: "top",
                      borderRadius: 16, border: "4px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    }}
                  />
                ) : (
                  <div style={{
                    width: 180, height: 220, borderRadius: 16, border: "4px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                  }}>
                    <User size={80} color="rgba(255,255,255,0.5)" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ display: "inline-block", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.9rem", borderRadius: 999, marginBottom: "0.75rem" }}>
                  Licensed Independent Agent
                </div>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.5rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {member.name}
                </h1>
                <p style={{ fontSize: "1.05rem", color: "#c8d6f5", marginBottom: "1.25rem" }}>{member.title}</p>

                {/* Contact chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <a href={`tel:${member.phone.replace(/\D/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(255,255,255,0.12)", color: "#fff", textDecoration: "none", padding: "0.45rem 1rem", borderRadius: 999, fontSize: "0.88rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)" }}>
                    <Phone size={13} /> {member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(255,255,255,0.12)", color: "#fff", textDecoration: "none", padding: "0.45rem 1rem", borderRadius: 999, fontSize: "0.88rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)" }}>
                    <Mail size={13} /> {member.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "2.5rem", alignItems: "start" }} className="lg:grid-cols-[1fr_340px] grid-cols-1">

            {/* Main */}
            <div>
              {/* Bio */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  About {member.name.split(" ")[0]}
                </h2>
                {member.bio.map((para, i) => (
                  <p key={i} style={{ color: "#374151", lineHeight: 1.75, marginBottom: i < member.bio.length - 1 ? "1rem" : 0, fontSize: "0.97rem" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Specialties */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1.25rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Areas of Expertise
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.75rem" }}>
                  {member.specialties.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <CheckCircle size={16} style={{ color: "#1a3fa8", flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: "0.9rem", color: "#374151" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1.25rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Credentials and Licensing
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {member.credentials.map((c) => (
                    <div key={c} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#e8edf8", color: "#1a3fa8", padding: "0.4rem 0.9rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 600 }}>
                      <Award size={13} /> {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Area */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Service Area
                </h2>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#374151", fontSize: "0.95rem" }}>
                  <MapPin size={16} style={{ color: "#1a3fa8", flexShrink: 0, marginTop: 2 }} />
                  <span>{member.serviceArea}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* CTA Card */}
              <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", borderRadius: 16, padding: "1.75rem", color: "#fff", boxShadow: "0 8px 32px rgba(13,31,92,0.25)" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f5a800", marginBottom: "0.5rem" }}>
                  Free Consultation
                </p>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  Ready to talk with {member.name.split(" ")[0]}?
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#c8d6f5", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                  No cost, no pressure. Get a personalized Medicare review from a licensed local advisor.
                </p>
                <a
                  href={`tel:${member.phone.replace(/\D/g, "")}`}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#f5a800", color: "#0d1f5c", fontWeight: 700, fontSize: "0.95rem", padding: "0.85rem 1.25rem", borderRadius: 10, textDecoration: "none", marginBottom: "0.75rem" }}
                >
                  <Phone size={16} /> {member.phone}
                </a>
                <Link
                  href="/free-consultation"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.12)", color: "#fff", fontWeight: 600, fontSize: "0.88rem", padding: "0.75rem 1.25rem", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  Request a Consultation
                </Link>
              </div>

              {/* Office Info */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "1.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem" }}>Office Information</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <MapPin size={15} style={{ color: "#1a3fa8", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.88rem", color: "#374151" }}>915 Oakfield Dr, Suite A<br />Brandon, FL 33511</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                    <Phone size={15} style={{ color: "#1a3fa8", flexShrink: 0 }} />
                    <a href="tel:8136995559" style={{ fontSize: "0.88rem", color: "#1a3fa8", textDecoration: "none", fontWeight: 600 }}>813-699-5559</a>
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                    <Calendar size={15} style={{ color: "#1a3fa8", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.88rem", color: "#374151" }}>Mon-Fri 9am-5pm ET</span>
                  </div>
                </div>
              </div>

              {/* Meet the Team */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "1.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0d1f5c", marginBottom: "1rem" }}>Meet the Team</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {others.map((t) => (
                    <Link key={t.slug} href={`/${t.slug}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", padding: "0.5rem", borderRadius: 10, transition: "background 0.15s" }}>
                      <Avatar photo={t.photo} name={t.name} size={40} />
                      <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1a2340" }}>{t.name}</span>
                    </Link>
                  ))}
                  <Link href="/about-us" style={{ fontSize: "0.82rem", color: "#1a3fa8", textDecoration: "none", fontWeight: 600, marginTop: "0.25rem" }}>
                    View Full Team
                  </Link>
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
