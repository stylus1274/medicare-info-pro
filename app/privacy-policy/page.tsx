"use client";
/* ==========================================================================
   Privacy Policy — /privacy-policy
   Design: navy/gold MIP brand, clean legal layout
   ========================================================================== */
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LAST_UPDATED = "January 1, 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#f7f9fc", minHeight: "100vh" }}>
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", color: "#fff", padding: "3rem 0 4rem" }}>
          <div className="max-w-[860px] mx-auto px-5 sm:px-8">
            <nav style={{ fontSize: "0.8rem", color: "#93aee8", marginBottom: "1.25rem" }}>
              <Link href="/" style={{ color: "#93aee8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#fff" }}>Privacy Policy</span>
            </nav>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "#c8d6f5", fontSize: "0.95rem" }}>Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[860px] mx-auto px-5 sm:px-8 py-12">
          <div style={{ background: "#fff", borderRadius: 16, padding: "2.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <div style={{ color: "#374151", lineHeight: 1.85, fontSize: "0.97rem" }}>

              <p style={{ marginBottom: "1.5rem" }}>
                Medicare Information Project, operated by Insurance Central of Tampa Bay ("we," "us," or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at medicareinfopro.com or contact us for Medicare-related assistance.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>1. Information We Collect</h2>
              <p style={{ marginBottom: "1rem" }}>
                We may collect personal information that you voluntarily provide to us when you fill out a contact form, request a consultation, call our office, or otherwise interact with our website. This information may include your name, phone number, email address, zip code, date of birth, Medicare number, and information about your current health coverage.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We also automatically collect certain technical information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through standard web server logs and analytics tools and is used solely to improve our website and user experience.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>2. How We Use Your Information</h2>
              <p style={{ marginBottom: "1rem" }}>
                We use the information we collect to respond to your inquiries, provide Medicare plan comparisons and enrollment assistance, schedule consultations with our licensed agents, send you information you have requested about Medicare plans and options, and comply with applicable laws and regulations.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information with insurance carriers and plan administrators as necessary to provide the services you have requested, and with service providers who assist us in operating our website and business, subject to confidentiality agreements.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>3. Medicare and HIPAA Compliance</h2>
              <p style={{ marginBottom: "1rem" }}>
                As a licensed Medicare insurance agency, we handle health-related information with care. While we are not a covered entity under HIPAA in all circumstances, we treat all health information you share with us as confidential and use it only for the purpose of helping you select and enroll in a Medicare plan.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We are licensed by the Centers for Medicare and Medicaid Services (CMS) and comply with all applicable CMS marketing and privacy guidelines. We do not share your Medicare number or health information with unauthorized parties.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>4. Cookies and Tracking Technologies</h2>
              <p style={{ marginBottom: "1rem" }}>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand how visitors use our site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our site may not function properly.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We may use third-party analytics services such as Google Analytics to help us understand how visitors use our site. These services may collect information about your use of our site and other websites. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>5. Data Security</h2>
              <p style={{ marginBottom: "1rem" }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption for data transmission. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>6. Third-Party Links</h2>
              <p style={{ marginBottom: "1rem" }}>
                Our website may contain links to third-party websites, including Medicare.gov, Social Security Administration, and insurance carrier websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>7. Children's Privacy</h2>
              <p style={{ marginBottom: "1rem" }}>
                Our services are intended for adults aged 65 and older or individuals with qualifying disabilities. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>8. Your Rights and Choices</h2>
              <p style={{ marginBottom: "1rem" }}>
                You have the right to access, correct, or request deletion of your personal information that we hold. You may also opt out of receiving marketing communications from us at any time by contacting us directly or by following the unsubscribe instructions in any email we send you. To exercise these rights, please contact us using the information below.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>9. Changes to This Policy</h2>
              <p style={{ marginBottom: "1rem" }}>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>10. Contact Us</h2>
              <p style={{ marginBottom: "0.5rem" }}>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div style={{ background: "#f7f9fc", borderRadius: 10, padding: "1.25rem", marginTop: "0.75rem" }}>
                <div style={{ fontWeight: 700, color: "#0d1f5c", marginBottom: "0.5rem" }}>Medicare Information Project</div>
                <div style={{ color: "#374151", fontSize: "0.93rem", lineHeight: 1.8 }}>
                  Insurance Central of Tampa Bay<br />
                  915 Oakfield Dr, Suite A<br />
                  Brandon, Florida 33511<br />
                  Phone: <a href="tel:8136995559" style={{ color: "#1a3fa8" }}>813-699-5559</a><br />
                  Email: <a href="mailto:info@medicareinfopro.com" style={{ color: "#1a3fa8" }}>info@medicareinfopro.com</a>
                </div>
              </div>

              <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e8eaf0", fontSize: "0.85rem", color: "#6b7280" }}>
                <p>
                  We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
