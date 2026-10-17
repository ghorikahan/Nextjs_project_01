import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrapper" style={{ textAlign: "center", paddingTop: "80px" }}>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          color: "#2563eb",
          margin: "0 0 8px 0",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#171717",
          margin: "0 0 12px 0",
        }}
      >
        Student Not Found
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "32px" }}>
        The student profile you&apos;re looking for doesn&apos;t exist or may have been removed.
      </p>
      <Link href="/students" className="hero-btn" style={{ display: "inline-flex" }}>
        ← Back to Students
      </Link>
    </div>
  );
}
