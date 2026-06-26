"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, Phone, ArrowRight, Shield, Award, MapPin, CheckCircle, Users
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Gregory Wohl",
    title: "Founder & Licensed Medicare Agent",
    license: "FL License # D009743",
    phone: "813-699-5559",
    location: "Brandon, FL",
    bio: "Greg Wohl is a graduate of the University of South Florida with a Bachelor's Degree in Finance. He has been a licensed agent for 22 years and is an expert on Medicare, serving as one of the leading representatives for these plans in the area.",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
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
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/TSQcrEEFLcDPIxvF.jpeg",
    slug: "jennifer-loader-wohl",
    badge: null,
    specialties: ["Medicare Advantage", "Medigap", "Part D"],
  },
  {
    name: 'Jose F. Diaz "JD"',
    title: "Licensed Medicare Agent",
    license: "FL License # W613730",
    phone: "813-699-5559",
    location: "Plant City, FL",
    bio: "JD is a licensed insurance agent appointed with the most well-respected carriers in the area. As a third-generation Tampa Bay native, he is passionate about helping clients identify the most competitive plans through a consultative, needs-based approach.",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/umTZhAAQfOQACkLq.jpg",
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
    name: "Valerie Hall",
    title: "Licensed Medicare Agent",
    license: "AR License # 18041755 | FL License # W336278",
    phone: "813-699-5559",
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

const CODE_OF_ETHICS = [
  "Represent at least 75% of the Medicare plans in their counties",
  "Protect the confidential personal and health information of every client (HIPAA)",
  "Seek more knowledge and the most up-to-date information about the products and plans they represent, maintaining a high level of professional competence",
  "Do what is in the best interest of the client, leaving the client in a better healthcare situation than they were before the meeting",
  "If an agent does not represent a plan that best meets a client's needs, direct them to someone who may help them enroll in the most suitable plan",
  "Fully disclose the advantages as well as the limitations of the plans discussed",
  "Fully disclose the agent compensation arrangement to every client",
  "Take the time to answer all of the client's questions so that the client fully understands the Medicare system and the plan in which they are enrolling",
];

function initials(name: string) {
  return name.split(" ").filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join("");
}

export default function AdvisorsClient() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">Home</Link>
              <ChevronRight size={13} className="text-blue-500" />
              <span className="text-blue-200 text-sm">Advisors</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Users size={12} /> Our Expert Team
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Our Medicare Advisors
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Every advisor in our network is a licensed Medicare specialist bound by a strict Code of Ethics. We are independent agents — which means our only obligation is to you, not to any insurance company.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Schedule a Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Code of Ethics */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#e8edf8] rounded-xl flex items-center justify-center">
                    <Shield size={18} className="text-[#1a3fa8]" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-gray-900">Our Code of Ethics</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Medicare Information Project, our network of agents has an obligation to recommend the product that best meets each client's needs, goals, and financial resources.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We understand that choosing a healthcare plan is one of the most important decisions a person can make. Our agents take the time to ensure peace of mind for every client.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In order to become part of the Agent Network for Medicare Information Project, all agents must agree to our Code of Ethics — and we hold them to it.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award size={16} className="text-[#f5a800]" /> All Agents Agree To:
                </div>
                <ol className="space-y-3">
                  {CODE_OF_ETHICS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0d2260] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                      <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Meet Our Advisors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team of licensed agents serves clients across Florida, Georgia, and Arkansas. Each advisor brings specialized expertise and a commitment to putting clients first.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.slug} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-[#0d2260] px-5 py-5 flex items-center gap-4">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-14 h-14 rounded-xl object-cover border-2 border-white/20" />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-[#1a3fa8] border-2 border-white/20 flex items-center justify-center text-white font-black text-lg">
                        {initials(member.name)}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-white text-sm leading-tight">{member.name}</div>
                      {member.badge && (
                        <div className="mt-1 inline-flex items-center gap-1 bg-[#f5a800] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          <Award size={9} /> {member.badge}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="text-xs font-semibold text-[#1a3fa8] mb-1">{member.title}</div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                      <MapPin size={11} /> {member.location}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member.specialties.map((s) => (
                        <span key={s} className="bg-[#e8edf8] text-[#1a3fa8] text-xs font-medium px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <a href={`tel:${member.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-1.5 text-xs font-semibold text-[#0d2260] hover:text-[#1a3fa8] transition-colors">
                        <Phone size={11} /> {member.phone}
                      </a>
                      <Link href={`/${member.slug}`} className="text-xs font-semibold text-[#1a3fa8] hover:underline flex items-center gap-1">
                        Profile <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Independent */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Why Independent Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Working with an independent agent is fundamentally different from working with a captive agent who only represents one company.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: "We Represent 17 Carriers", desc: "Our agents are appointed with 17 insurance organizations offering 149 Medicare products. We compare all of them to find the best fit for you.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { title: "No Pressure, No Quotas", desc: "We are not incentivized to push any particular plan. Our recommendation is based solely on what is best for your health needs and budget.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { title: "Free for You, Always", desc: "Our services are completely free to you. We are compensated by insurance companies when you enroll, but this never influences our recommendations.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border p-6" style={{ background: item.bg, borderColor: item.border }}>
                  <div className="font-bold text-gray-900 mb-2" style={{ color: item.color }}>{item.title}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Speak with an Advisor?
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our advisors are available by phone or for a scheduled consultation. There is no cost, no obligation, and no pressure. Just honest, expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base">
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">
              We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
