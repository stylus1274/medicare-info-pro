"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", background: "#f8f9fc" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a3fa8", marginBottom: "1rem" }}>Something went wrong</h1>
          <p style={{ color: "#6b7280", marginBottom: "2rem" }}>An unexpected error occurred. Please try again.</p>
          <button
            onClick={reset}
            style={{ background: "#1a3fa8", color: "white", padding: "0.75rem 2rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", fontWeight: "bold" }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
