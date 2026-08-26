import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kelly Webb",
  "jobTitle": "Licensed Medicare Agent",
  "url": "https://medicareinfopro.com/kelly-webb",
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
  title: "Kelly Webb | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Kelly Webb, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Kelly helps clients in Brandon, Riverview, Valrico, and Hillsborough County find the right Medicare coverage.",
  alternates: { canonical: "https://medicareinfopro.com/kelly-webb/" },
  openGraph: {
    title: "Kelly Webb | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Kelly Webb, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/kelly-webb/",
    type: "profile",
  },
};

const member: TeamMemberData = {
  name: "Kelly Webb",
  slug: "kelly-webb",
  title: "Licensed Independent Medicare Agent",
  photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/vHaBgismTMBqborq.jpg",
  phone: "727-560-8850",
  email: "info@medicareinfopro.com",
  bio: [
    "Kelly Webb is a licensed independent Medicare agent at Medicare Information Project, serving clients in Brandon, Florida and the surrounding communities. Kelly is known for her approachable style and her ability to make Medicare feel manageable, even for clients who find the system confusing or overwhelming.",
    "Kelly works with clients who are new to Medicare as well as those who want to review their existing coverage. She takes the time to understand each client's health priorities, preferred providers, and budget before making any recommendations, and she follows up to make sure clients are satisfied with their coverage throughout the year.",
    "As an independent agent, Kelly represents plans from over 17 insurance carriers, which means she can compare Medicare Advantage, Medicare Supplement, and Part D options side by side and recommend the plan that offers the best overall value.",
    "Kelly serves clients throughout Brandon, Riverview, Valrico, and Hillsborough County, and is licensed in multiple states.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "First-Time Medicare Enrollment",
    "Annual Plan Reviews",
    "Coverage Gap Identification",
    "Employer Coverage Transitions",
    "Client Follow-Up and Ongoing Support",
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
