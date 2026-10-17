import Link from "next/link";
import { students } from "./lib/data";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="hero">
        <h1 className="hero-title">Campus Directory</h1>
        <p className="hero-subtitle">
          Browse student profiles, explore departments, and access academic records across campus.
        </p>
        <Link href="/students" className="hero-btn">
          Browse Students →
        </Link>
      </div>

      {/* Quick stats */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #e4e7ef",
            borderRadius: "12px",
            padding: "20px 36px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "2rem", fontWeight: 800, color: "#2563eb" }}>
            {students.length}
          </span>
          <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#6b7280" }}>
            Registered Students
          </p>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e4e7ef",
            borderRadius: "12px",
            padding: "20px 36px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "2rem", fontWeight: 800, color: "#2563eb" }}>
            5
          </span>
          <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#6b7280" }}>
            Departments
          </p>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e4e7ef",
            borderRadius: "12px",
            padding: "20px 36px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "2rem", fontWeight: 800, color: "#2563eb" }}>
            100%
          </span>
          <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#6b7280" }}>
            Active Records
          </p>
        </div>
      </div>
    </div>
  );
}
