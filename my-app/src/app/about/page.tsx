import type { Metadata } from "next";
import { students, departments } from "../lib/data";

export const metadata: Metadata = {
  title: "About — Campus Directory",
  description: "Learn about the Campus Directory platform and its mission.",
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">About Campus Directory</h1>
      <p className="page-subtitle">
        A central hub for academic records and student information
      </p>

      <div className="about-section">
        <h2 className="about-title">Our Mission</h2>
        <p className="about-text">
          Campus Directory is a modern student information platform designed to make
          academic records transparent, accessible, and well-organized. Faculty, staff,
          and authorized personnel can browse verified student profiles, department
          breakdowns, and enrolled course details in real time.
        </p>
        <p className="about-text">
          All records are validated regularly to ensure data accuracy and are
          maintained in strict compliance with campus privacy policies.
        </p>

        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">{students.length}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{departments.length}</span>
            <span className="stat-label">Departments</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {students.reduce((acc, s) => acc + s.subjects.length, 0)}
            </span>
            <span className="stat-label">Course Enrollments</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2021</span>
            <span className="stat-label">Earliest Cohort</span>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-title">Data & Privacy</h2>
        <p className="about-text">
          Student records displayed in this directory are managed and validated by the
          Office of the Registrar. Access is governed by FERPA-aligned policies.
          Personal contact information is only displayed to authorized campus users.
        </p>
        <p className="about-text" style={{ margin: 0 }}>
          For data corrections or access concerns, please contact the Registrar&apos;s
          Office at{" "}
          <a
            href="mailto:registrar@campus.edu"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            registrar@campus.edu
          </a>
          .
        </p>
      </div>

      <div className="about-section">
        <h2 className="about-title">Technology</h2>
        <p className="about-text" style={{ margin: 0 }}>
          This platform is built with Next.js (App Router) and TypeScript, providing
          fast server-rendered pages, dynamic routing, and a clean, responsive interface
          optimized for both desktop and mobile browsers.
        </p>
      </div>
    </div>
  );
}
