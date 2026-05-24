import type { NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        background: "#f8f9fc",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#1a3fa8",
            marginBottom: "1rem",
          }}
        >
          {statusCode || "Error"}
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            marginBottom: "2rem",
          }}
        >
          {statusCode === 404
            ? "Page not found."
            : "An unexpected error occurred."}
        </p>
        <a
          href="/"
          style={{
            background: "#1a3fa8",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "0.75rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
