'use client';

/**
 * Brandon-first homepage preview only.
 * Design reminder: this isolated noindex route treats the homepage as a real Brandon office front door.
 * It uses verified office information, practical Medicare decision support, and semantic links to core
 * Brandon resources. It deliberately excludes testimonials, rating graphics, client counts, savings claims,
 * plan-count claims, and generic cost-estimate outputs. Do not use this component for the live homepage
 * until the user approves it.
 */

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileText,
  MapPin,
  Phone,
  Pill,
  Stethoscope,
  UserRound,
} from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_PHOTO =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-hero-couple_181d53a9.jpg';

const BRANDON_CALLBACK =
  '/local-consultation/?city=Brandon&service=Medicare%20plan%20review&source=%2Fhomepage-local-preview%2F';

const RESOURCE_PATHS = [
  {
    icon: <BookOpen size={22} />,
    eyebrow: 'Start here',
    title: 'Medicare in Brandon',
    text: 'Get a local overview of Medicare choices, enrollment questions, and the help available from our Brandon office.',
    href: '/medicare-brandon-fl/',
    accent: '#1a3fa8',
  },
  {
    icon: <FileText size={22} />,
    eyebrow: 'Compare coverage',
    title: 'Compare Medicare Plans',
    text: 'Review the practical differences between Medicare Advantage, Medigap, and Part D before choosing a direction.',
    href: '/comparing-medicare-plans-brandon/',
    accent: '#0f766e',
  },
  {
    icon: <Stethoscope size={22} />,
    eyebrow: 'Doctors and networks',
    title: 'Medicare Advantage in Brandon',
    text: 'Understand the doctor, prescription, network, and plan-document questions to ask before enrolling.',
    href: '/medicare-advantage-plans-brandon-florida/',
    accent: '#7c3aed',
  },
  {
    icon: <ClipboardList size={22} />,
    eyebrow: 'Coverage gaps',
    title: 'Medicare Supplement Plans',
    text: 'Learn how Medigap works with Original Medicare and what to compare before you request plan information.',
    href: '/medicare-supplement-insurance-plans-brandon/',
    accent: '#b45309',
  },
  {
    icon: <CalendarDays size={22} />,
    eyebrow: 'Timing matters',
    title: 'Enrollment Help in Brandon',
    text: 'Review enrollment windows, late-enrollment questions, and the information to gather before you act.',
    href: '/medicare-enrollment-assistance-in-brandon-fl/',
    accent: '#be123c',
  },
  {
    icon: <UserRound size={22} />,
    eyebrow: 'Local guidance',
    title: 'Speak With a Brandon Agent',
    text: 'See how to prepare for a conversation about your doctors, prescriptions, current coverage, and next steps.',
    href: '/medicare-insurance-agent-brandon-fl/',
    accent: '#0369a1',
  },
];

const REVIEW_PREP = [
  {
    icon: <Pill size={24} />,
    title: 'Your medications',
    text: 'Bring a current medication list, dosage details, and your preferred pharmacy.',
  },
  {
    icon: <Stethoscope size={24} />,
    title: 'Your doctors and care',
    text: 'Write down your doctors, specialists, hospitals, and care you expect to need.',
  },
  {
    icon: <FileText size={24} />,
    title: 'Your current coverage',
    text: 'Keep your Medicare card and any current plan information nearby for reference.',
  },
];

const PLAN_CHANGE_RESOURCES = [
  {
    category: 'Coverage decisions',
    title: 'Prior Authorization and Appeals',
    text: 'Learn what to save, what written notices mean, and how to approach a coverage decision.',
    href: '/medicare-prior-authorization-appeals/',
  },
  {
    category: 'Plan changes',
    title: 'Plan Non-Renewal Notice',
    text: 'Understand what a non-renewal notice means and the next plan-review steps to consider.',
    href: '/faqs/medicare-plan-non-renewal-notice/',
  },
  {
    category: 'Action checklist',
    title: 'Dropped Doctor or Medication',
    text: 'Use an action-first guide when a plan no longer covers a doctor or medication as expected.',
    href: '/faqs/what-to-do-if-medicare-plan-drops-doctor-or-drug/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HomeLocalPreviewClient() {
  return (
    <div style={{ background: '#f8f7f4', color: '#10255e', minHeight: '100vh' }}>
      <Header />

      <main>
        <section className="relative overflow-hidden" style={{ background: '#10255e' }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)', backgroundSize: '28px 28px' }}
          />
          <div className="relative max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-7"
              style={{ background: 'rgba(245,168,0,0.14)', border: '1px solid rgba(245,168,0,0.38)', color: '#f9c74f', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              <BadgeCheck size={15} /> Brandon-first homepage preview
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-10 lg:gap-14 items-stretch">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="flex flex-col justify-center py-3 lg:py-7">
                <div className="flex items-center gap-2.5 mb-5" style={{ color: '#bcd0ff', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}>
                  <MapPin size={16} style={{ color: '#f5a800' }} /> Brandon, Florida Medicare Guidance
                </div>
                <h1 className="max-w-3xl text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.55rem, 5vw, 4.55rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.04em', margin: 0 }}>
                  Medicare Help for <span style={{ color: '#f5a800' }}>Brandon, FL</span> Residents
                </h1>
                <p className="max-w-2xl mt-6" style={{ color: '#d7e2ff', fontSize: 'clamp(1rem, 1.5vw, 1.14rem)', lineHeight: 1.75 }}>
                  Get clear Medicare guidance from a licensed team based at 915 Oakfield Dr Ste A in Brandon. Review your doctors, prescriptions, enrollment timing, and plan options before you make a decision.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a
                    href="tel:8136995559"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-extrabold text-[0.98rem] transition-transform active:scale-[0.97]"
                    style={{ background: '#f5a800', color: '#10255e', textDecoration: 'none' }}
                  >
                    <Phone size={18} /> Call the Brandon Office: (813) 699-5559
                  </a>
                  <Link
                    href="/medicare-brandon-fl/"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-[0.98rem] text-white border border-white/35 hover:border-white transition-colors"
                  >
                    Explore Brandon Medicare Options <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7" style={{ color: '#c9d8ff', fontSize: '0.84rem', fontWeight: 600 }}>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={15} style={{ color: '#f5a800' }} /> 915 Oakfield Dr Ste A, Brandon, FL 33511</span>
                  <a href={BRANDON_CALLBACK} className="underline underline-offset-4" style={{ color: '#ffffff' }}>Request a Brandon callback</a>
                </div>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.12} className="relative min-h-[390px] lg:min-h-0 rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
                <img src={HERO_PHOTO} alt="A couple reviewing Medicare options with an advisor" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(16,37,94,0.04) 25%, rgba(16,37,94,0.88) 100%)' }} />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                  <div className="rounded-2xl p-5 sm:p-6" style={{ background: 'rgba(255,255,255,0.95)', color: '#10255e', boxShadow: '0 16px 42px rgba(0,0,0,0.22)' }}>
                    <div className="flex items-center gap-2" style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a3fa8' }}>
                      <MapPin size={15} /> A real Brandon office
                    </div>
                    <p className="mt-3 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.2 }}>Start with the details that matter to your coverage.</p>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>Bring your doctors, prescriptions, current coverage, and questions. The goal is a clearer next step, not a one-size-fits-all answer.</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=915%20Oakfield%20Dr%20Ste%20A%2C%20Brandon%2C%20FL%2033511"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 font-bold text-[0.87rem]"
                      style={{ color: '#1a3fa8', textDecoration: 'underline', textUnderlineOffset: 4 }}
                    >
                      Get directions to the Brandon office <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative -mt-1" style={{ background: '#ffffff' }}>
          <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 py-12 lg:py-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} custom={0} className="max-w-3xl">
              <p style={{ color: '#1a3fa8', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Choose the Brandon Medicare help you need</p>
              <h2 className="mt-3" style={{ fontFamily: 'var(--font-heading)', color: '#10255e', fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em' }}>A clearer path for the question in front of you.</h2>
              <p className="mt-4 max-w-2xl" style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7 }}>Choose a Brandon resource based on the decision you are making. Each path is built to help you prepare with the information that applies to your situation.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
              {RESOURCE_PATHS.map((item, index) => (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} custom={0.04 * index}>
                  <Link
                    href={item.href}
                    className="group h-full block rounded-2xl p-6 sm:p-7 border transition-all duration-200 hover:-translate-y-1"
                    style={{ background: '#ffffff', borderColor: '#e6e9f1', boxShadow: '0 6px 22px rgba(15, 37, 94, 0.06)', textDecoration: 'none' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${item.accent}12`, color: item.accent }}>
                        {item.icon}
                      </div>
                      <ChevronRight size={20} className="mt-1 transition-transform group-hover:translate-x-1" style={{ color: item.accent }} />
                    </div>
                    <p className="mt-6" style={{ color: item.accent, fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}>{item.eyebrow}</p>
                    <h3 className="mt-2" style={{ color: '#10255e', fontFamily: 'var(--font-heading)', fontSize: '1.28rem', fontWeight: 800, lineHeight: 1.2 }}>{item.title}</h3>
                    <p className="mt-3" style={{ color: '#5b6679', fontSize: '0.92rem', lineHeight: 1.65 }}>{item.text}</p>
                    <span className="inline-flex items-center gap-1.5 mt-5 font-bold text-[0.9rem]" style={{ color: item.accent }}>Explore this Brandon resource <ArrowRight size={15} /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#eef4ff' }}>
          <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} custom={0}>
                <p style={{ color: '#1a3fa8', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Prepare for your Medicare review</p>
                <h2 className="mt-3" style={{ fontFamily: 'var(--font-heading)', color: '#10255e', fontSize: 'clamp(2rem, 3.2vw, 2.85rem)', fontWeight: 800, lineHeight: 1.13, letterSpacing: '-0.03em' }}>Make the conversation more useful from the start.</h2>
                <p className="mt-4" style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7 }}>The most useful Medicare review starts with the practical details of your care and coverage. Gather these items before you call or request a Brandon callback.</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-7">
                  <a href="tel:8136995559" className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold" style={{ background: '#1a3fa8', color: '#ffffff', textDecoration: 'none' }}><Phone size={17} /> Call the Brandon Office</a>
                  <Link href={BRANDON_CALLBACK} className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold border" style={{ borderColor: '#1a3fa8', color: '#1a3fa8', textDecoration: 'none' }}>Request a Callback <ArrowRight size={17} /></Link>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {REVIEW_PREP.map((item, index) => (
                  <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0.08 * index} className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid #dbe4f6' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#e6efff', color: '#1a3fa8' }}>{item.icon}</div>
                    <h3 className="mt-5" style={{ color: '#10255e', fontWeight: 800, fontSize: '1.03rem' }}>{item.title}</h3>
                    <p className="mt-2" style={{ color: '#5b6679', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#ffffff' }}>
          <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} custom={0} className="max-w-3xl">
              <p style={{ color: '#1a3fa8', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>When your coverage changes</p>
              <h2 className="mt-3" style={{ fontFamily: 'var(--font-heading)', color: '#10255e', fontSize: 'clamp(2rem, 3.2vw, 2.85rem)', fontWeight: 800, lineHeight: 1.13, letterSpacing: '-0.03em' }}>Get clear next steps before you make a coverage decision.</h2>
              <p className="mt-4" style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7 }}>If a doctor, medication, or plan is changing, start with accurate information, your plan documents, and the questions that matter to your care.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              {PLAN_CHANGE_RESOURCES.map((item, index) => (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0.05 * index}>
                  <Link href={item.href} className="group h-full flex flex-col rounded-2xl p-6 border transition-colors hover:border-[#1a3fa8]" style={{ background: '#f8fafc', borderColor: '#e6e9f1', textDecoration: 'none' }}>
                    <span style={{ color: '#1a3fa8', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{item.category}</span>
                    <h3 className="mt-3" style={{ fontFamily: 'var(--font-heading)', color: '#10255e', fontSize: '1.28rem', fontWeight: 800, lineHeight: 1.22 }}>{item.title}</h3>
                    <p className="mt-3 flex-1" style={{ color: '#5b6679', fontSize: '0.92rem', lineHeight: 1.65 }}>{item.text}</p>
                    <span className="inline-flex items-center gap-1.5 mt-5 font-bold text-[0.9rem]" style={{ color: '#1a3fa8' }}>Read the guide <ArrowRight size={15} /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #10255e 0%, #1a3fa8 100%)' }}>
          <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2" style={{ color: '#f5a800', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}><MapPin size={16} /> Brandon office</div>
                <h2 className="mt-3 text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em' }}>Ready to talk through your Medicare questions?</h2>
                <p className="mt-3 max-w-2xl" style={{ color: '#d7e2ff', fontSize: '1rem', lineHeight: 1.7 }}>Call the Brandon office, request a callback, or start with a Brandon resource that matches the decision you are facing.</p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[244px]">
                <a href="tel:8136995559" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-extrabold" style={{ background: '#f5a800', color: '#10255e', textDecoration: 'none' }}><Phone size={18} /> (813) 699-5559</a>
                <Link href={BRANDON_CALLBACK} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold border border-white/35 text-white hover:border-white transition-colors">Request a Brandon Callback <ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
