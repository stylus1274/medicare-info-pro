"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpen?: number | null;
  className?: string;
}

export default function FaqAccordion({
  items,
  defaultOpen = 0,
  className = "",
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <div className={`flex flex-col gap-0 rounded-2xl overflow-hidden border border-gray-200 ${className}`}>
      {items.map((faq, i) => (
        <div key={i} className="border-b border-gray-200 last:border-b-0 transition-colors">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
              open === i ? "bg-[#0d1f5c]" : "bg-white hover:bg-gray-50"
            }`}
          >
            <span className={`font-semibold pr-4 text-[0.92rem] leading-snug transition-colors ${
              open === i ? "text-white" : "text-[#0d1f5c]"
            }`}>
              {faq.q}
            </span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              open === i ? "bg-white/20" : "bg-[#f0f4ff]"
            }`}>
              <ChevronDown
                size={15}
                className={`transition-transform ${open === i ? "rotate-180 text-white" : "text-[#1a3fa8]"}`}
              />
            </div>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-4 bg-[#f5f7ff] border-t border-[#1a3fa8]/10">
              <p className="text-[#1a3fa8]/80 text-[0.88rem] leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
