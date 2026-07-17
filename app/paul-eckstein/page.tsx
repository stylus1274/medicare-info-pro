import { Metadata } from "next";
import TeamMemberPage from "@/components/TeamMemberPage";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Paul Eckstein",
  "jobTitle": "Licensed Medicare Agent",
  "url": "https://medicareinfopro.com/paul-eckstein",
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
  title: "Paul Eckstein | Licensed Medicare Agent | Medicare Information Project",
  description: "Meet Paul Eckstein, a licensed Medicare insurance agent with 20+ years of experience serving the Brandon and Tampa Bay area. Free consultations available.",
};

const MEMBER = {
  name: "Paul Eckstein",
  title: "Licensed Medicare Agent",
  license: "FL License # A075214",
  phone: "813-499-9771",
  email: "info@medicareinfopro.com",
  location: "Brandon, FL",
  serviceArea: "Hillsborough County, Brandon, Riverview, Valrico, and surrounding communities",
  photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/LCWjVjohdZHMUbko.jpeg",
  photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/LCWjVjohdZHMUbko.jpeg",
  bio: [
    "Paul Eckstein is a Florida licensed insurance agent who has been a resident of the Tampa Bay area since 1983. With more than 20 years of experience in the insurance industry, Paul brings a depth of knowledge that few agents can match. He is originally from Ohio and a graduate of the University of Dayton.",
    "Throughout his career, Paul has worked with a broad spectrum of carriers across life and health insurance disciplines. Today, his focus is squarely on Medicare, where his primary goal is fitting the right plan to each client's unique needs. He believes that no two Medicare situations are exactly alike, and he takes the time to understand each client's health history, budget, and preferred doctors before making any recommendation.",
    "Paul is an expert in Medicare Advantage plans, Medicare Supplement (Medigap) policies, and Part D prescription drug coverage. He is known for his straightforward, no-pressure approach and his ability to explain complex Medicare rules in plain language.",
    "As an independent agent, Paul represents multiple insurance carriers, which allows him to provide truly objective guidance. He currently resides in the Tampa Bay area with his wife and is actively serving clients throughout Hillsborough County.",
  ],
  specialties: ["Medicare Advantage", "Medicare Supplement (Medigap)", "Part D Drug Plans", "Life Insurance", "Plan Comparisons"],
  credentials: ["Florida Licensed Insurance Agent", "20+ Years Experience", "Independent Agent", "Medicare Certified"],
  slug: "paul-eckstein",
};

export default function PaulEcksteinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <TeamMemberPage member={MEMBER} />
    </>
  );
}
