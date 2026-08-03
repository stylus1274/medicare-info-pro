"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

// Pages where the slide-in should NOT appear
const EXCLUDED_PATHS = ["/free-medicare-kit", "/get-started"];

export default function KitSlideIn() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isExcluded = EXCLUDED_PATHS.some((p) => pathname?.startsWith(p));

  // Check if already dismissed this session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const d = sessionStorage.getItem("kit-slide-dismissed");
      if (d) setDismissed(true);
    }
  }, []);

  // Scroll listener — show at 40%
  const handleScroll = useCallback(() => {
    if (dismissed || visible || isExcluded) return;
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0 && scrolled / total >= 0.40) {
      setVisible(true);
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    setLoading(true);
    try {
      // Redirect to the full kit page with prefilled params
      const params = new URLSearchParams({ firstName, email });
      window.location.href = `/free-medicare-kit?${params.toString()}`;
    } catch {
      setLoading(false);
    }
  };

  if (isExcluded || dismissed || !visible) return null;

  return (
    <>
      {/* Slide-in card */}
      <div
        className="kit-slide-in"
        role="dialog"
        aria-label="Get your free Medicare kit"
        aria-modal="false"
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="kit-slide-close"
          aria-label="Dismiss"
        >
          ✕
        </button>

        {/* Icon + headline */}
        <div className="kit-slide-header">
          <div className="kit-slide-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div>
            <p className="kit-slide-eyebrow">Free Download</p>
            <h3 className="kit-slide-title">Your Medicare Decision Kit</h3>
          </div>
        </div>

        <p className="kit-slide-body">
          A 14-page personalized workbook with your exact enrollment dates, coverage comparison, and action plan.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="kit-slide-form">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="kit-slide-input"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="kit-slide-input"
            />
            <button type="submit" disabled={loading} className="kit-slide-btn">
              {loading ? "One moment…" : "Get My Free Kit →"}
            </button>
          </form>
        ) : (
          <div className="kit-slide-success">
            <span>✓</span> Redirecting to your kit…
          </div>
        )}

        <p className="kit-slide-disclaimer">No cost. No obligation. No sales calls.</p>
      </div>

      <style>{`
        .kit-slide-in {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 320px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 40px rgba(10, 26, 60, 0.18), 0 2px 8px rgba(10, 26, 60, 0.10);
          padding: 20px;
          z-index: 9999;
          animation: kitSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
          border-top: 3px solid #f5c841;
        }
        @keyframes kitSlideUp {
          from { transform: translateY(120%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .kit-slide-close {
          position: absolute;
          top: 10px;
          right: 12px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 13px;
          color: #9ca3af;
          line-height: 1;
          padding: 4px 6px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
        }
        .kit-slide-close:hover { color: #374151; background: #f3f4f6; }
        .kit-slide-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
        }
        .kit-slide-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          background: #0a1a3c;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5c841;
        }
        .kit-slide-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a3fa8;
          margin: 0 0 2px;
        }
        .kit-slide-title {
          font-size: 15px;
          font-weight: 700;
          color: #0a1a3c;
          margin: 0;
          line-height: 1.3;
        }
        .kit-slide-body {
          font-size: 12.5px;
          color: #4b5563;
          margin: 0 0 12px;
          line-height: 1.5;
        }
        .kit-slide-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .kit-slide-input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 13px;
          color: #111827;
          outline: none;
          transition: border-color 0.15s;
          box-sizing: border-box;
        }
        .kit-slide-input:focus { border-color: #1a3fa8; }
        .kit-slide-btn {
          width: 100%;
          padding: 10px;
          background: #0a1a3c;
          color: #f5c841;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s;
          margin-top: 2px;
        }
        .kit-slide-btn:hover:not(:disabled) { background: #1a3fa8; }
        .kit-slide-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .kit-slide-success {
          background: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 6px;
          padding: 10px 12px;
          font-size: 13px;
          color: #166534;
          font-weight: 600;
        }
        .kit-slide-disclaimer {
          font-size: 10.5px;
          color: #9ca3af;
          text-align: center;
          margin: 8px 0 0;
        }

        /* Mobile: full-width bottom sheet */
        @media (max-width: 480px) {
          .kit-slide-in {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            border-radius: 16px 16px 0 0;
            border-top: 3px solid #f5c841;
          }
        }
      `}</style>
    </>
  );
}
