import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

export const metadata: Metadata = {
  title: "Paxton DeMent | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Paxton DeMent, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Paxton helps clients in Brandon, Riverview, Valrico, and Hillsborough County find the right Medicare plan.",
  alternates: { canonical: "https://medicareinfopro.com/paxton-dement/" },
  openGraph: {
    title: "Paxton DeMent | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Paxton DeMent, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/paxton-dement/",
    type: "profile",
    images: [{ url: "https://medicareinfopro.com/wp-content/uploads/2021/02/paxton-photo-1.jpg", width: 800, height: 1000, alt: "Paxton DeMent" }],
  },
};

const member: TeamMemberData = {
  name: "Paxton DeMent",
  slug: "paxton-dement",
  title: "Licensed Independent Medicare Agent",
  photoUrl: "https://medicareinfopro.com/wp-content/uploads/2021/02/paxton-photo-1.jpg",
  phone: "813-699-5559",
  email: "info@medicareinfopro.com",
  bio: [
    "Paxton DeMent is a licensed independent Medicare agent at Medicare Information Project, serving clients in Brandon, Florida and the surrounding communities. Paxton is dedicated to helping Medicare beneficiaries cut through the complexity of Medicare and find coverage that truly fits their lives.",
    "Paxton works with clients at every stage of the Medicare process, from initial eligibility and enrollment to annual plan reviews and coverage changes. He is committed to providing honest, unbiased guidance, and never recommends a plan without first understanding a client's specific doctors, medications, and financial goals.",
    "As an independent agent, Paxton has access to plans from over 17 insurance carriers, allowing him to compare options across Medicare Advantage, Medicare Supplement, and Part D plans to find the best fit for each client.",
    "Paxton serves clients throughout Brandon, Riverview, Valrico, and Hillsborough County, and is licensed in multiple states to assist clients wherever they need help.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "Turning 65 Enrollment",
    "Annual Enrollment Period Reviews",
    "Plan Comparisons",
    "Prescription Drug Formulary Research",
    "Special Enrollment Periods",
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
  return <TeamMemberPage member={member} />;
}
