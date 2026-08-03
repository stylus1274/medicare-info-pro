"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = ["/free-medicare-kit", "/get-started"];

export default function KitSlideIn() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const isExcluded = EXCLUDED_PATHS.some((p) => pathname?.startsWith(p));

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("kit-slide-dismissed")) setDismissed(true);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (dismissed || visible || isExcluded) return;
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0 && scrolled / total >= 0.40) setVisible(true);
  }, [dismissed, visible, isExcluded]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("kit-slide-dismissed", "1");
  };

  if (isExcluded || dismissed || !visible) return null;

  return (
    <>
      <div className="kit-slide-in" role="dialog" aria-label="Get your free Medicare kit">
        <button onClick={dismiss} className="kit-slide-close" aria-label="Dismiss">✕</button>

        <div className="kit-slide-eyebrow">FREE DOWNLOAD</div>

        <h3 className="kit-slide-title">
          Get Your Free<br />Medicare Decision Kit
        </h3>

        <p className="kit-slide-body">
          A 14-page personalized workbook with your exact enrollment dates, coverage comparison, and action plan — delivered as an instant PDF.
        </p>

        <a href="https://medicareinfopro.com/free-medicare-kit/" className="kit-slide-btn">
          Download My Free Kit →
        </a>

        <p className="kit-slide-disclaimer">No cost. No obligation. No sales calls.</p>
      </div>

      <style>{`
        .kit-slide-in {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 340px;
          background: #0a1a3c;
          border-radius: 14px;
          box-shadow: 0 12px 48px rgba(10, 26, 60, 0.35), 0 2px 8px rgba(10, 26, 60, 0.18);
          padding: 32px 28px 24px;
          z-index: 9999;
          animation: kitSlideUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          border-top: 4px solid #f5c841;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        @keyframes kitSlideUp {
          from { transform: translateY(120%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .kit-slide-close {
          position: absolute;
          top: 12px;
          right: 14px;
          background: rgba(255,255,255,0.08);
          border: none;
          cursor: pointer;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1;
          padding: 5px 7px;
          border-radius: 5px;
          transition: color 0.15s, background 0.15s;
        }
        .kit-slide-close:hover { color: #fff; background: rgba(255,255,255,0.15); }
        .kit-slide-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #f5c841;
          margin-bottom: 10px;
        }
        .kit-slide-title {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 14px;
        }
        .kit-slide-body {
          font-size: 13.5px;
          color: rgba(255,255,255,0.72);
          line-height: 1.55;
          margin: 0 0 22px;
        }
        .kit-slide-btn {
          display: block;
          width: 100%;
          padding: 14px 16px;
          background: #f5c841;
          color: #0a1a3c;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          transition: background 0.15s, transform 0.1s;
          margin-bottom: 12px;
        }
        .kit-slide-btn:hover {
          background: #ffd84d;
          transform: translateY(-1px);
        }
        .kit-slide-disclaimer {
          font-size: 10.5px;
          color: rgba(255,255,255,0.38);
          text-align: center;
          margin: 0;
        }

        /* Mobile: full-width bottom sheet */
        @media (max-width: 480px) {
          .kit-slide-in {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            border-radius: 18px 18px 0 0;
            border-top: 4px solid #f5c841;
          }
        }
      `}</style>
    </>
  );
}
