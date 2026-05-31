import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Clock } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/logo-white_bb567c3d.png";

const FOOTER_LINKS = [
  {
    heading: "Medicare Plans",
    links: [
      { label: "Original Medicare", href: "/medicare-part-a" },
      { label: "Medicare Advantage", href: "/medicare-advantage" },
      { label: "Medicare Supplement", href: "/do-i-need-a-supplement" },
      { label: "Part D Drug Plans", href: "/understanding-part-d" },
      { label: "Compare Plans", href: "/plan-comparison" },
    ],
  },
  {
    heading: "Enrollment",
    links: [
      { label: "Turning 65", href: "/enrollment-timeline#iep" },
      { label: "Annual Enrollment", href: "/enrollment-timeline#aep" },
      { label: "Special Enrollment", href: "/enrollment-timeline#sep" },
      { label: "Avoid Penalties", href: "/enrollment-timeline#penalty-partb" },
      { label: "How to Enroll", href: "/enrollment-calculator" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Articles", href: "/blog" },
      { label: "Coverage Search", href: "/coverage-qa" },
      { label: "Medicare 101", href: "/medicare-101" },
      { label: "FAQ Center", href: "/faq" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ background: "#0a1a4a" }}>
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="px-4 py-2 rounded-lg" style={{ background: "#1a3fa8" }}>
                <img src={LOGO_URL} alt="Medicare Information Project" className="h-10 w-auto object-contain" />
              </div>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-blue-200/70 mb-7 max-w-sm">
              Medicare Information Project is a campaign run by Insurance Central of Tampa Bay. We are a team of trusted, independent, licensed insurance professionals providing expert assistance in navigating your Medicare options.
            </p>
            <div className="space-y-3.5">
              <a href="tel:18138699559" className="flex items-center gap-3 text-[0.95rem] text-blue-200/80 hover:text-white transition-colors">
                <Phone size={16} className="text-amber-400 shrink-0" />
                813-699-5559
              </a>
              <a href="tel:18888865840" className="flex items-center gap-3 text-[0.95rem] text-blue-200/80 hover:text-white transition-colors">
                <Phone size={16} className="text-amber-400 shrink-0" />
                Toll-Free: 888-886-5840
              </a>
              <a href="mailto:info@medicareinfopro.com" className="flex items-center gap-3 text-[0.95rem] text-blue-200/80 hover:text-white transition-colors">
                <Mail size={16} className="text-amber-400 shrink-0" />
                info@medicareinfopro.com
              </a>
              <div className="flex items-start gap-3 text-[0.95rem] text-blue-200/80">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>915 Oakfield Dr, Suite A<br />Brandon, Florida 33511</span>
              </div>
              <div className="flex items-center gap-3 text-[0.95rem] text-blue-200/80">
                <Clock size={16} className="text-amber-400 shrink-0" />
                TTY: 800-955-8770
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-amber-400 mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[0.95rem] text-blue-200/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-7 border-t border-blue-900/50 mb-7">
          <div className="flex items-center gap-2.5 text-[0.9rem] text-blue-200/70">
            <Shield size={18} className="text-amber-400" />
            Licensed Independent Agents
          </div>
          <div className="flex items-center gap-2.5 text-[0.9rem] text-blue-200/70">
            <span className="text-amber-400 font-bold text-[0.95rem]">BBB</span>
            A+ Accredited Business
          </div>
          <div className="flex items-center gap-2.5 text-[0.9rem] text-blue-200/70">
            <Shield size={18} className="text-amber-400" />
            100+ Plans Represented
          </div>
          <div className="flex items-center gap-2.5 text-[0.9rem] text-blue-200/70">
            <Shield size={18} className="text-amber-400" />
            No-Cost Consultations
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/50 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-blue-300/50 text-center sm:text-left max-w-2xl">
            © {new Date().getFullYear()} Insurance Central of Tampa Bay. Not affiliated with, reviewed or endorsed by Medicare.gov, CMS, or the federal government. We represent 17 organizations.
          </p>
          <div className="flex gap-6 text-[0.8rem] text-blue-300/50">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
