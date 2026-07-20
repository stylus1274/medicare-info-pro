import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mark VanHoesen",
  "jobTitle": "Licensed Medicare Agent",
  "url": "https://medicareinfopro.com/mark-vanhoesen",
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
  title: "Mark VanHoesen | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Mark VanHoesen, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Mark helps clients in Brandon, Riverview, Valrico, and Hillsborough County navigate Medicare.",
  alternates: { canonical: "https://medicareinfopro.com/mark-vanhoesen/" },
  openGraph: {
    title: "Mark VanHoesen | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Mark VanHoesen, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/mark-vanhoesen/",
    type: "profile",
  },
};

const member: TeamMemberData = {
  name: "Mark VanHoesen",
  slug: "mark-vanhoesen",
  title: "Licensed Independent Medicare Agent",
  photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/gISbkFqSnQEUvXao.jpg",
  phone: "727-560-8850",
  email: "info@medicareinfopro.com",
  bio: [
    "Mark VanHoesen is a licensed independent Medicare agent at Medicare Information Project, based in Brandon, Florida. Mark brings a detail-oriented approach to every client consultation, helping beneficiaries understand the full picture of their Medicare options before making any coverage decisions.",
    "Mark works with clients who are approaching Medicare eligibility for the first time, as well as those who want to review their existing coverage to ensure it still meets their needs. He is skilled at breaking down the differences between plan types and helping clients understand how their choices will affect their out-of-pocket costs.",
    "As an independent agent, Mark is not tied to any single insurance company. He represents plans from over 17 carriers, giving him the ability to compare options objectively and find the plan that best fits each client's situation.",
    "Mark serves clients throughout Brandon, Riverview, Valrico, and Hillsborough County, and is licensed in multiple states.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "New to Medicare Consultations",
    "Annual Enrollment Period Reviews",
    "Cost and Coverage Analysis",
    "Network and Provider Research",
    "Enrollment Assistance",
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
