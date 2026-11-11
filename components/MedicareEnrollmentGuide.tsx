import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://medicareinfopro.com";

export type EnrollmentGuide = {
  path: string;
  title: string;
  headline: string;
  description: string;
  city: string;
  intro: string;
  steps: { title: string; text: string; link: { label: string; href: string } }[];
  checklistTitle: string;
  checklist: string[];
  servicePath: string;
};

export function enrollmentGuideMetadata(guide: EnrollmentGuide): Metadata {
  const url = siteUrl + guide.path;
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url, type: "website" },
  };
}

export default function MedicareEnrollmentGuide({ guide }: { guide: EnrollmentGuide }) {
  const url = siteUrl + guide.path;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url + "#webpage",
    name: guide.headline,
    description: guide.description,
    url,
    isPartOf: { "@id": siteUrl + "/#website" },
    publisher: { "@id": siteUrl + "/#organization" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="bg-[#0d2260] text-white py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight">{guide.headline}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">{guide.intro}</p>
          </div>
        </section>
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 space-y-10">
          <ol className="space-y-8">
            {guide.steps.map((step, index) => (
              <li key={step.title}>
                <h2 className="font-serif text-2xl font-bold text-gray-900">{index + 1}. {step.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-700">{step.text}</p>
                <Link href={step.link.href} className="inline-block mt-3 font-semibold text-[#1a3fa8] underline underline-offset-2">
                  {step.link.label}
                </Link>
              </li>
            ))}
          </ol>
          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="font-serif text-2xl font-bold text-gray-900">{guide.checklistTitle}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
              {guide.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="font-serif text-2xl font-bold text-gray-900">Want help with your next step?</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              Request a consultation with Medicare Information Project for help reviewing your situation and the plans the agency represents.
            </p>
            <Link href={guide.servicePath} className="mt-4 inline-block rounded-lg bg-[#1a3fa8] px-5 py-3 font-semibold text-white hover:bg-[#0d2260]">
              Get Medicare enrollment help in {guide.city}
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
