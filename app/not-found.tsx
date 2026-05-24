export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#1a3fa8", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "2rem" }}>Page not found.</p>
        <a href="/" style={{ background: "#1a3fa8", color: "white", padding: "0.75rem 2rem", borderRadius: "0.75rem", textDecoration: "none", fontWeight: "bold" }}>
          Return Home
        </a>
      </div>
    </div>
  );
}
