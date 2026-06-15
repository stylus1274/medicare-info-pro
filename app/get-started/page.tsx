import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Find Your Medicare Plan | Medicare Information Project",
  description:
    "Answer a few quick questions and we'll help match you with the right Medicare plan for your needs. Free, no-obligation consultation.",
  robots: { index: false, follow: false },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
