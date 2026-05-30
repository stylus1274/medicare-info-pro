import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

export const metadata: Metadata = {
  title: "Valerie Justin-Hall | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Valerie Justin-Hall, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Valerie helps clients in Brandon, Riverview, Valrico, and Hillsborough County navigate their Medicare options.",
  alternates: { canonical: "https://medicareinfopro.com/valerie-justin-hall/" },
  openGraph: {
    title: "Valerie Justin-Hall | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Valerie Justin-Hall, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/valerie-justin-hall/",
    type: "profile",
  },
};

const member: TeamMemberData = {
  name: "Valerie Justin-Hall",
  slug: "valerie-justin-hall",
  title: "Licensed Independent Medicare Agent",
  photoUrl: null,
  phone: "813-699-5559",
  email: "info@medicareinfopro.com",
  bio: [
    "Valerie Justin-Hall is a licensed independent Medicare agent at Medicare Information Project, based in Brandon, Florida. Valerie brings a compassionate and thorough approach to every client consultation, ensuring that each person she works with fully understands their Medicare options before making any decisions.",
    "Valerie specializes in helping clients who are new to Medicare, as well as those who want to review their current coverage to make sure it still meets their needs. She is particularly skilled at explaining the differences between plan types in clear, everyday language, and at identifying potential gaps in coverage that could lead to unexpected costs.",
    "As an independent agent, Valerie represents plans from over 17 insurance carriers, giving her the flexibility to recommend the option that best fits each client's health situation, preferred providers, and budget.",
    "Valerie serves clients throughout Brandon, Riverview, Valrico, and Hillsborough County, and is licensed in multiple states.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "New to Medicare Consultations",
    "Coverage Gap Analysis",
    "Annual Plan Reviews",
    "Employer-to-Medicare Transitions",
    "Eligibility and Enrollment Guidance",
  ],
  credentials: [
    "Florida Licensed Insurance Agent",
    "Licensed in FL, GA, NC, AR, KS, TX",
    "Independent (Not Captive)",
    "BBB Accredited Business",
  ],
  serviceArea: "Brandon, Riverview, Valrico, Sun City Center, Apollo Beach, Plant City, and all of Hillsborough County, FL. Also licensed in Georgia, North Carolina, Arkansas, Kansas, and Texas.",
};

export default function Page() {
  return <TeamMemberPage member={member} />;
}
