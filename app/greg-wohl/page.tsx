import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

export const metadata: Metadata = {
  title: "Greg Wohl | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet Greg Wohl, founder and licensed independent Medicare agent at Medicare Information Project in Brandon, FL. Greg helps residents of Brandon, Riverview, Valrico, and Hillsborough County navigate Medicare with confidence.",
  alternates: { canonical: "https://medicareinfopro.com/greg-wohl/" },
  openGraph: {
    title: "Greg Wohl | Licensed Medicare Agent | Brandon, FL",
    description: "Meet Greg Wohl, founder and licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/greg-wohl/",
    type: "profile",
    images: [{ url: "https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg", width: 800, height: 1000, alt: "Greg Wohl" }],
  },
};

const member: TeamMemberData = {
  name: "Greg Wohl",
  slug: "greg-wohl",
  title: "Founder and Licensed Independent Medicare Agent",
  photoUrl: "https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg",
  phone: "813-699-5559",
  email: "info@medicareinfopro.com",
  bio: [
    "Greg Wohl is the founder of Medicare Information Project and a licensed independent insurance agent based in Brandon, Florida. With years of experience helping Medicare beneficiaries across Florida and beyond, Greg has built a reputation for making Medicare simple, clear, and stress-free.",
    "Greg founded Medicare Information Project on a simple belief: every person deserves a one-on-one consultation with a trusted advisor who puts their health and financial well-being first. He takes a consultative approach, listening carefully to each client's situation before recommending any plan.",
    "As an independent agent, Greg is not tied to any single insurance company. He represents over 17 carriers and more than 149 plans, which means he can compare options objectively and find the plan that truly fits each client's doctors, prescriptions, and budget.",
    "Greg and his team serve clients in Brandon, Riverview, Valrico, Sun City Center, Apollo Beach, Plant City, and throughout Hillsborough County. He is also licensed in Georgia, North Carolina, Arkansas, Kansas, and Texas.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "Original Medicare Enrollment",
    "Annual Enrollment Period Reviews",
    "IRMAA and Cost Analysis",
    "Employer-to-Medicare Transitions",
    "Turning 65 Consultations",
  ],
  credentials: [
    "Florida Licensed Insurance Agent",
    "Licensed in FL, GA, NC, SC, VA, OH, MI, AL, AR, KS, MD, TN",
    "Independent (Not Captive)",
    "BBB Accredited Business",
  ],
  serviceArea: "Brandon, Riverview, Valrico, Sun City Center, Apollo Beach, Plant City, Ruskin, Wimauma, and all of Hillsborough County, FL. Also licensed in Georgia, North Carolina, Arkansas, Kansas, and Texas.",
  yearsExperience: 10,
};

export default function Page() {
  return <TeamMemberPage member={member} />;
}
