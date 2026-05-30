import type { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";
import type { TeamMemberData } from "@/components/TeamMemberPage";

export const metadata: Metadata = {
  title: "JD Diaz | Licensed Medicare Agent | Brandon, FL | Medicare Information Project",
  description: "Meet JD Diaz, licensed independent Medicare agent at Medicare Information Project in Brandon, FL. JD helps clients in Brandon, Riverview, Valrico, and Hillsborough County find the right Medicare coverage.",
  alternates: { canonical: "https://medicareinfopro.com/jd-diaz/" },
  openGraph: {
    title: "JD Diaz | Licensed Medicare Agent | Brandon, FL",
    description: "Meet JD Diaz, licensed independent Medicare agent serving Brandon, Riverview, Valrico, and Hillsborough County.",
    url: "https://medicareinfopro.com/jd-diaz/",
    type: "profile",
    images: [{ url: "https://medicareinfopro.com/wp-content/uploads/2022/12/JD.jpg", width: 800, height: 1000, alt: "JD Diaz" }],
  },
};

const member: TeamMemberData = {
  name: "JD Diaz",
  slug: "jd-diaz",
  title: "Licensed Independent Medicare Agent",
  photoUrl: "https://medicareinfopro.com/wp-content/uploads/2022/12/JD.jpg",
  phone: "813-699-5559",
  email: "info@medicareinfopro.com",
  bio: [
    "JD Diaz is a licensed independent Medicare agent at Medicare Information Project, serving clients throughout the Brandon, Florida area and surrounding communities. JD is known for his straightforward communication style and his commitment to helping clients find Medicare coverage that truly works for their lifestyle and budget.",
    "JD works with clients at every stage of the Medicare journey, from those turning 65 and enrolling for the first time to those looking to review and update their existing coverage during the Annual Enrollment Period. He takes the time to understand each client's specific doctors, medications, and financial priorities before making any recommendations.",
    "As an independent agent, JD is not tied to any single carrier. He has access to plans from over 17 insurance organizations, which allows him to compare options side by side and recommend the plan that offers the best value for each individual client.",
    "JD serves clients in Brandon, Riverview, Valrico, and throughout Hillsborough County, and is licensed in multiple states to assist clients who have relocated or spend time in other parts of the country.",
  ],
  specialties: [
    "Medicare Advantage Plans",
    "Medicare Supplement (Medigap) Plans",
    "Part D Prescription Drug Plans",
    "Turning 65 Enrollment",
    "Annual Enrollment Period Reviews",
    "Plan Comparisons and Cost Analysis",
    "Network and Provider Research",
    "Special Enrollment Periods",
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
