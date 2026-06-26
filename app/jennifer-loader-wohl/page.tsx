import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jennifer Loader-Wohl",
  "jobTitle": "Licensed Medicare Agent",
  "url": "https://medicareinfopro.com/jennifer-loader-wohl",
  "worksFor": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "knowsAbout": [
    "Medicare",
    "Medicare Advantage",
    "Medicare Supplement",
    "Medicare Part D",
    "Health Insurance"
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jennifer Loader-Wohl | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Jennifer Loader-Wohl, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Jennifer helps clients in Brandon, Riverview, Valrico, and Hillsborough County find the right Medicare plan.",
  alternates: { canonical: "https://medicareinfopro.com/jennifer-loader-wohl/" },
  openGraph: {
    title: "Jennifer Loader-Wohl | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Jennifer Loader-Wohl, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/jennifer-loader-wohl/",
    type: "profile",
    images: [{ url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/TSQcrEEFLcDPIxvF.jpeg", width: 800, height: 1000, alt: "Jennifer Loader-Wohl" }],
  },
};

const member: TeamMemberData = {
  name: "Jennifer Loader-Wohl",
  slug: "jennifer-loader-wohl",
  title: "Licensed Independent Medicare Agent",
  photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/TSQcrEEFLcDPIxvF.jpeg",
  phone: "813-699-5559",
  email: "info@medicareinfopro.com",
  bio: [
    "Jennifer Loader-Wohl is a licensed independent Medicare agent at Medicare Information Project, based in Brandon, Florida. Jennifer brings warmth, patience, and deep knowledge of Medicare to every client interaction, making her a trusted resource for beneficiaries navigating Medicare for the first time or reviewing their existing coverage.",
    "Jennifer specializes in helping clients understand the differences between Original Medicare, Medicare Advantage, and Medicare Supplement plans, and guiding them through the enrollment process with confidence. She takes pride in explaining complex Medicare rules in plain language, without jargon or pressure.",
    "As an independent agent, Jennifer represents over 17 insurance carriers and more than 149 plans, giving her the flexibility to find the right fit for each client's unique health needs and financial situation.",
    "Jennifer serves clients throughout Brandon, Riverview, Valrico, and the greater Hillsborough County area, and is also licensed to assist clients in multiple states.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "First-Time Medicare Enrollment",
    "Annual Plan Reviews",
    "Employer Coverage Transitions",
    "Turning 65 Consultations",
    "Network and Formulary Research",
  ],
  credentials: [
    "Florida Licensed Insurance Agent",
    "Licensed in FL, GA, NC, SC, VA, OH, MI, AL, AR, KS, MD, TN, TX",
    "Independent (Not Captive)",
    "BBB Accredited Business",
  ],
  serviceArea: "Brandon, Riverview, Valrico, Sun City Center, Apollo Beach, Plant City, and all of Hillsborough County, FL. Also licensed in Georgia, North Carolina, Arkansas, Kansas, and Texas.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <TeamMemberPage member={member} />
    </>
  );
}
