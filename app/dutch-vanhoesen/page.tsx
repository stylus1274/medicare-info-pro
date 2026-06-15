import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dutch VanHoesen | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Dutch VanHoesen, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Dutch helps clients in Brandon, Riverview, Valrico, and Hillsborough County navigate Medicare.",
  alternates: { canonical: "https://medicareinfopro.com/dutch-vanhoesen/" },
  openGraph: {
    title: "Dutch VanHoesen | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Dutch VanHoesen, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/dutch-vanhoesen/",
    type: "profile",
    images: [{ url: "https://medicareinfopro.com/wp-content/uploads/2022/12/Dutch-photo-2023-scaled.jpg", width: 800, height: 1000, alt: "Dutch VanHoesen" }],
  },
};

const member: TeamMemberData = {
  name: "Dutch VanHoesen",
  slug: "dutch-vanhoesen",
  title: "Licensed Independent Medicare Agent",
  photoUrl: "https://medicareinfopro.com/wp-content/uploads/2022/12/Dutch-photo-2023-scaled.jpg",
  phone: "813-699-5559",
  email: "info@medicareinfopro.com",
  bio: [
    "Dutch VanHoesen is a licensed independent Medicare agent at Medicare Information Project, based in Brandon, Florida. Dutch brings energy, clarity, and a genuine commitment to client service to every consultation, helping Medicare beneficiaries feel confident about their coverage choices.",
    "Dutch works with clients who are approaching Medicare eligibility for the first time as well as those who want to make sure their current plan still makes sense for their situation. He is particularly skilled at helping clients understand how Medicare Advantage and Medicare Supplement plans differ, and at identifying which option will provide the best protection at the lowest cost.",
    "As an independent agent, Dutch represents plans from over 17 insurance carriers, which allows him to compare options across all major plan types and recommend the one that best fits each client's doctors, prescriptions, and budget.",
    "Dutch serves clients throughout Brandon, Riverview, Valrico, and Hillsborough County, and is licensed in multiple states to assist clients who have moved or spend part of the year in other states.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "Turning 65 Consultations",
    "Annual Enrollment Period Reviews",
    "Medicare Advantage vs. Supplement Comparisons",
    "Prescription Drug Coverage Analysis",
    "Network and Provider Research",
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
