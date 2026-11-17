import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MedicareCoverageCta({
  headingId = "explore-medicare-coverage",
  description = "Getting ready for Medicare? Explore coverage options in your area.",
}: { headingId?: string; description?: string }) {
  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border border-[#243974] border-t-4 border-t-[#f5a800] bg-gradient-to-br from-[#0d1f5c] to-[#1a3fa8] px-6 py-7 text-white shadow-sm sm:px-8 sm:py-8"
    >
      <h2 id={headingId} className="text-2xl font-bold leading-tight sm:text-3xl" style={{ fontFamily: "'Merriweather', serif" }}>
        Explore Your Medicare Coverage Options
      </h2>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-blue-50">
        {description}
      </p>
      <Link
        href="/get-started/"
        className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#f5a800] px-5 py-3 text-center text-base font-bold text-[#0d1f5c] transition-colors hover:bg-[#ffb31a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
      >
        Explore Medicare Options
        <ArrowRight size={19} className="shrink-0" aria-hidden="true" />
      </Link>
    </section>
  );
}
