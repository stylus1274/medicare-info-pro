"use client";
/* ===========================================================================
   Privacy Policy | /privacy-policy
   =========================================================================== */
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LAST_UPDATED = "June 2026";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "url": "https://medicareinfopro.com/privacy-policy/",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Project",
    "@id": "https://medicareinfopro.com/#organization",
  },
} as const;

const sectionHeadingStyle = {
  fontSize: "1.2rem",
  fontWeight: 700,
  color: "#0d1f5c",
  marginTop: "2rem",
  marginBottom: "0.75rem",
} as const;

const paragraphStyle = { marginBottom: "1rem" } as const;
const listStyle = { margin: "0 0 1rem 1.25rem", paddingLeft: "0.75rem" } as const;

export default function PrivacyPolicyClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Header />
      <main style={{ background: "#f7f9fc", minHeight: "100vh" }}>
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

        <div className="max-w-[860px] mx-auto px-5 sm:px-8 py-12">
          <article style={{ background: "#fff", borderRadius: 16, padding: "2.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <div style={{ color: "#374151", lineHeight: 1.85, fontSize: "0.97rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Medicare Information Project ("Company," "we," "our," or "us") is committed to protecting and preserving the privacy of visitors to our website, social media pages, and any individuals who communicate with us electronically.
              </p>
              <p style={paragraphStyle}>
                This Privacy Policy explains how we collect, use, protect, and disclose personal information that you voluntarily provide to us, as well as certain information that may be collected automatically when you visit our website. By using our website, submitting information through our website or social media pages, or otherwise communicating with us electronically, you consent to the practices described in this Privacy Policy.
              </p>

              <h2 style={sectionHeadingStyle}>Information We Collect</h2>
              <p style={paragraphStyle}>
                We may collect personal information from you when you register on our site, subscribe to our newsletter, fill out a form, submit a contact or inquiry request, communicate with us through our website or social media pages, or otherwise provide information to us.
              </p>
              <p style={paragraphStyle}>The information you provide may include, but is not limited to:</p>
              <ul style={listStyle}>
                <li>Name</li>
                <li>Mailing address</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information related to a Medicare inquiry or request for services</li>
                <li>Other information you voluntarily choose to provide</li>
              </ul>
              <p style={paragraphStyle}>Any information requested that is not required will be identified as voluntary or optional when appropriate.</p>
              <p style={paragraphStyle}>
                You may also visit our website anonymously. However, like many websites, we may use cookies and similar technologies to enhance your experience, gather general visitor information, and track visits to our website.
              </p>

              <h2 style={sectionHeadingStyle}>How We Use Your Information</h2>
              <p style={paragraphStyle}>We may use the information we collect from you for the following purposes:</p>
              <ul style={listStyle}>
                <li>To provide information, products, or services that you request from us</li>
                <li>To contact you regarding your inquiry or service request</li>
                <li>To personalize your experience and better respond to your individual needs</li>
                <li>To improve our website, services, communications, and customer experience</li>
                <li>To improve customer service and respond more effectively to requests and support needs</li>
                <li>To send periodic emails, newsletters, updates, or other communications</li>
                <li>To comply with applicable laws, regulations, and legal obligations</li>
                <li>To enforce our site policies and protect our rights, property, safety, and the rights, property, and safety of others</li>
              </ul>

              <h2 style={sectionHeadingStyle}>Medicare Insurance Contact Consent</h2>
              <p style={paragraphStyle}>
                By submitting your phone number or other contact information through a contact request form, inquiry form, or similar form, and by clicking the applicable submit button, you acknowledge and agree that such action may constitute your written consent for Medicare Information Project, its representatives, affiliates, or authorized advocates to contact you regarding Medicare insurance products, services, or related information.
              </p>
              <p style={paragraphStyle}>
                You agree that we may contact you by phone, email, text message/SMS, prerecorded message, or other electronic communication at any phone number or email address you provide, including wireless numbers. This consent applies even if your phone number is listed on a federal, state, or internal do-not-call list.
              </p>
              <p style={paragraphStyle}>
                You represent and warrant that you are the primary user and subscriber of any phone number you submit. You also agree that we may contact you using automated technology, including an autodialer, where permitted by law.
              </p>
              <p style={paragraphStyle}>
                You understand that you are not required to submit a form or agree to receive marketing communications as a condition of purchasing or receiving any property, goods, or services. You may revoke your consent at any time by contacting us using reasonable means, including by calling <a href="tel:8136995559" style={{ color: "#1a3fa8" }}>813.699.5559</a> or emailing <a href="mailto:info@medicareinfopro.com" style={{ color: "#1a3fa8" }}>info@medicareinfopro.com</a> with the subject line "REVOKE."
              </p>
              <p style={paragraphStyle}>By submitting a contact request form, you also agree to be bound by this Privacy Policy.</p>

              <h2 style={sectionHeadingStyle}>Cookies</h2>
              <p style={paragraphStyle}>
                Yes, we use cookies. Cookies are small files that a website or its service provider transfers to your computer&apos;s hard drive through your web browser, if you allow, that enable the website&apos;s systems to recognize your browser and capture and remember certain information.
              </p>
              <p style={paragraphStyle}>We may use cookies to:</p>
              <ul style={listStyle}>
                <li>Enhance your browsing experience</li>
                <li>Understand and save user preferences for future visits</li>
                <li>Gather general website traffic and visitor information</li>
                <li>Track visits to our website</li>
                <li>Improve our website and services</li>
              </ul>
              <p style={paragraphStyle}>You may choose to disable cookies through your browser settings. However, disabling cookies may affect how certain parts of our website function.</p>

              <h2 style={sectionHeadingStyle}>How We Protect Your Information</h2>
              <p style={paragraphStyle}>
                We implement a variety of reasonable security measures to help maintain the safety of your personal information when you submit a request or enter, submit, or access your personal information.
              </p>
              <p style={paragraphStyle}>
                These measures may include password-protected directories and databases, secure servers, SSL encryption, and other security practices designed to help protect against unauthorized access, misuse, disclosure, alteration, or destruction of personal information.
              </p>
              <p style={paragraphStyle}>
                Any sensitive information submitted through our website is transmitted using Secure Sockets Layer (SSL) technology where available and is intended to be accessible only by those authorized with special access rights to our systems who are required to keep the information confidential.
              </p>
              <p style={paragraphStyle}>
                Although we take reasonable steps to protect your information, transmission of information over the internet is not completely secure. We cannot guarantee the security of information transmitted to our website, and any transmission is made at your own risk. Once we receive your information, we use reasonable procedures and security features to help prevent unauthorized access.
              </p>
              <p style={paragraphStyle}>
                After a transaction, private information such as credit card numbers, Social Security numbers, financial information, or similar sensitive information will not be stored on our servers unless retention is required or permitted by law and appropriate safeguards are in place.
              </p>

              <h2 style={sectionHeadingStyle}>Disclosure of Your Information</h2>
              <p style={paragraphStyle}>We do not sell, rent, trade, or otherwise transfer your personally identifiable information to outside parties for their independent marketing purposes.</p>
              <p style={paragraphStyle}>
                This does not include trusted third parties who assist us in operating our website, conducting our business, servicing you, responding to your requests, or providing services on our behalf, so long as these parties agree to keep this information confidential and use it only for authorized purposes.
              </p>
              <p style={paragraphStyle}>We may also disclose your information when we believe disclosure is appropriate or necessary to:</p>
              <ul style={listStyle}>
                <li>Comply with applicable law, regulation, legal process, or governmental request</li>
                <li>Enforce our site policies</li>
                <li>Protect our rights, property, or safety</li>
                <li>Protect the rights, property, or safety of others</li>
                <li>Prevent fraud, abuse, security threats, or other harmful activity</li>
              </ul>
              <p style={paragraphStyle}>Non-personally identifiable visitor information may be used or shared for marketing, advertising, analytics, or other lawful business purposes.</p>

              <h2 style={sectionHeadingStyle}>Third-Party Links</h2>
              <p style={paragraphStyle}>
                Occasionally, at our discretion, we may include or offer third-party products, services, links, or resources on our website or social media pages. These third-party websites and services have separate and independent privacy policies.
              </p>
              <p style={paragraphStyle}>
                We are not responsible or liable for the content, privacy practices, or activities of these third-party websites or services. Nonetheless, we seek to protect the integrity of our website and welcome feedback about any third-party links or resources we provide.
              </p>

              <h2 style={sectionHeadingStyle}>Social Media Sites</h2>
              <p style={paragraphStyle}>
                If you interact with us through social media platforms, the information you provide may also be subject to the privacy policies, terms, and data practices of those third-party platforms. We encourage you to review the privacy policies of any social media platform you use to communicate with us.
              </p>

              <h2 style={sectionHeadingStyle}>Your Rights and Access to Your Personal Information</h2>
              <p style={paragraphStyle}>
                You may contact us to request access to, correction of, or deletion of personal information that we may maintain about you, subject to applicable legal, regulatory, contractual, and recordkeeping requirements.
              </p>
              <p style={paragraphStyle}>If you believe we have handled your information improperly, you may contact us so that we can review and respond to your concern.</p>

              <h2 style={sectionHeadingStyle}>Email Communications and CAN-SPAM Compliance</h2>
              <p style={paragraphStyle}>We are committed to complying with the CAN-SPAM Act and other applicable email marketing laws. We do not knowingly send misleading email communications.</p>
              <p style={paragraphStyle}>If you receive marketing or newsletter emails from us, you may unsubscribe or opt out by following the instructions included in the email or by contacting us directly.</p>

              <h2 style={sectionHeadingStyle}>Children&apos;s Privacy</h2>
              <p style={paragraphStyle}>
                We comply with the requirements of the Children&apos;s Online Privacy Protection Act. We do not knowingly collect information from anyone under 18 years of age. Our website, products, and services are directed to individuals who are at least 18 years old.
              </p>

              <h2 style={sectionHeadingStyle}>Online Privacy Policy Only</h2>
              <p style={paragraphStyle}>This Privacy Policy applies to information collected through our website, social media pages, electronic communications, and online forms. It does not apply to information collected offline unless otherwise stated.</p>

              <h2 style={sectionHeadingStyle}>Your Consent</h2>
              <p style={paragraphStyle}>By using our website, submitting information through our website or social media pages, or communicating with us electronically, you consent to this Privacy Policy.</p>

              <h2 style={sectionHeadingStyle}>Changes to This Privacy Policy</h2>
              <p style={paragraphStyle}>We may update this Privacy Policy from time to time. If we make changes, we will post the revised Privacy Policy on this page and update the date below. Where appropriate, we may also notify you by email.</p>
              <p style={paragraphStyle}>Policy changes will apply only to information collected after the effective date of the change unless otherwise stated. Please check this page periodically for updates.</p>

              <h2 style={sectionHeadingStyle}>Privacy Policy Customer Pledge</h2>
              <p style={paragraphStyle}>We pledge to our customers and website visitors that we make a dedicated effort to maintain privacy practices consistent with applicable privacy laws, regulations, and recognized privacy principles, including:</p>
              <ul style={listStyle}>
                <li>Federal Trade Commission Fair Information Practices</li>
                <li>Children&apos;s Online Privacy Protection Act</li>
                <li>CAN-SPAM Act</li>
                <li>Applicable privacy and marketing laws and regulations</li>
              </ul>
              <p style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e8eaf0", fontSize: "0.9rem", color: "#4b5563", fontWeight: 700 }}>
                This policy was last modified in June 2026.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
