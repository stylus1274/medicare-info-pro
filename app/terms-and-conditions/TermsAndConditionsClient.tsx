"use client";
/* ==========================================================================
   Terms and Conditions — /terms-and-conditions
   Design: navy/gold MIP brand, clean legal layout
   ========================================================================== */
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LAST_UPDATED = "January 1, 2025";


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms and Conditions",
  "url": "https://medicareinfopro.com/terms-and-conditions",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export default function TermsAndConditionsClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Header />
      <main style={{ background: "#f7f9fc", minHeight: "100vh" }}>
        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)", color: "#fff", padding: "3rem 0 4rem" }}>
          <div className="max-w-[860px] mx-auto px-5 sm:px-8">
            <nav style={{ fontSize: "0.8rem", color: "#93aee8", marginBottom: "1.25rem" }}>
              <Link href="/" style={{ color: "#93aee8", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <span style={{ color: "#fff" }}>Terms and Conditions</span>
            </nav>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.75rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Terms and Conditions
            </h1>
            <p style={{ color: "#c8d6f5", fontSize: "0.95rem" }}>Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[860px] mx-auto px-5 sm:px-8 py-12">
          <div style={{ background: "#fff", borderRadius: 16, padding: "2.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <div style={{ color: "#374151", lineHeight: 1.85, fontSize: "0.97rem" }}>

              <p style={{ marginBottom: "1.5rem" }}>
                Please read these Terms and Conditions carefully before using the Medicare Information Project website at medicareinfopro.com, operated by Insurance Central of Tampa Bay. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>1. Use of the Website</h2>
              <p style={{ marginBottom: "1rem" }}>
                This website is provided for informational purposes related to Medicare insurance options available to eligible beneficiaries. The content on this site is intended to help you understand Medicare and make informed decisions about your health coverage. It does not constitute legal, medical, or financial advice.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. You may not use this site to transmit any unsolicited commercial communications, attempt to gain unauthorized access to any part of the site, or engage in any conduct that could damage, disable, or impair the site.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>2. Medicare Disclaimer</h2>
              <p style={{ marginBottom: "1rem" }}>
                Medicare Information Project is a licensed, independent insurance agency. We are not affiliated with, endorsed by, or a part of the federal government, the Centers for Medicare and Medicaid Services (CMS), or any government agency. We are a non-government entity.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE (1-800-633-4227), or your local State Health Insurance Program (SHIP) to get information on all of your options.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Plan availability, benefits, premiums, and cost-sharing information presented on this website is subject to change. Always verify current plan details directly with the insurance carrier or at Medicare.gov before making enrollment decisions.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>3. Accuracy of Information</h2>
              <p style={{ marginBottom: "1rem" }}>
                We make every effort to ensure that the information on this website is accurate and up to date. However, Medicare rules, premiums, deductibles, and plan details change annually and sometimes mid-year. We cannot guarantee that all information on this site reflects the most current Medicare regulations or plan offerings.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                The information provided on this site is for general educational purposes only. Individual circumstances vary, and you should consult with one of our licensed agents or contact Medicare.gov for advice specific to your situation.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>4. Intellectual Property</h2>
              <p style={{ marginBottom: "1rem" }}>
                All content on this website, including text, graphics, logos, images, and software, is the property of Insurance Central of Tampa Bay or its content suppliers and is protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>5. Third-Party Links</h2>
              <p style={{ marginBottom: "1rem" }}>
                This website may contain links to third-party websites, including Medicare.gov, Social Security Administration, and insurance carrier websites. These links are provided for your convenience and informational purposes only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any external sites you visit.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>6. Limitation of Liability</h2>
              <p style={{ marginBottom: "1rem" }}>
                To the fullest extent permitted by law, Insurance Central of Tampa Bay and its agents, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein. Our total liability to you for any claim arising from your use of this site shall not exceed the amount you paid to us, if any, in the twelve months preceding the claim.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>7. Indemnification</h2>
              <p style={{ marginBottom: "1rem" }}>
                You agree to indemnify, defend, and hold harmless Insurance Central of Tampa Bay and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of this website, your violation of these Terms, or your violation of any rights of a third party.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>8. Governing Law</h2>
              <p style={{ marginBottom: "1rem" }}>
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of this website shall be subject to the exclusive jurisdiction of the state and federal courts located in Hillsborough County, Florida.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>9. Changes to These Terms</h2>
              <p style={{ marginBottom: "1rem" }}>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>

              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d1f5c", marginTop: "2rem", marginBottom: "0.75rem" }}>10. Contact Us</h2>
              <p style={{ marginBottom: "0.5rem" }}>
                If you have questions about these Terms and Conditions, please contact us:
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
