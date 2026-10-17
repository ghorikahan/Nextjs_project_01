import Link from "next/link";
import { departments } from "../../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found — Campus Directory",
  description: "The department or specialization you requested could not be located.",
};

export default function DepartmentNotFound() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/departments">Departments</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current" style={{ color: "#ef4444" }}>Not Found</span>
      </nav>

      {/* 404 Hero */}
      <div className="dept-nf-hero">
        {/* Animated icon */}
        <div className="dept-nf-icon-wrap">
          <div className="dept-nf-icon-ring" />
          <div className="dept-nf-icon-ring dept-nf-icon-ring--2" />
          <div className="dept-nf-icon-inner">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="dept-nf-badge">
          <span className="dept-nf-badge-dot" />
          404 · ROUTE NOT FOUND
        </div>

        {/* Title & desc */}
        <h1 className="dept-nf-title">Department not found</h1>
        <p className="dept-nf-desc">
          The requested department or specialization could not be located.
          It may have moved or the identifier might be invalid.
        </p>

        {/* Action buttons */}
        <div className="dept-nf-actions">
          <Link href="/departments" className="dept-nf-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Browse All Departments
          </Link>
          <Link href="/students" className="dept-nf-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            View All Students
          </Link>
          <Link href="/" className="dept-nf-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
        </div>
      </div>

      {/* Suggested departments */}
      <div className="dept-nf-suggestions">
        <div className="dept-nf-suggestions-header">
          <span className="dept-nf-suggestions-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            SUGGESTED STARTING POINTS
          </span>
          <span className="dept-nf-suggestions-right">Internal Routes</span>
        </div>

        <div className="dept-nf-suggestions-list">
          {departments.map((dept) => (
            <Link
              key={dept.id}
              href={`/departments/${dept.id}`}
              className="dept-nf-suggestion-row"
            >
              {/* Icon */}
              <div
                className="dept-nf-suggestion-icon"
                style={{ background: dept.color }}
              >
                {dept.icon === "cs" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dept.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                )}
                {dept.icon === "design" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dept.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                )}
                {dept.icon === "business" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dept.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                )}
              </div>

              {/* Info */}
              <div className="dept-nf-suggestion-info">
                <span className="dept-nf-suggestion-name">{dept.name} Department</span>
                <span className="dept-nf-suggestion-meta">
                  {dept.specializations} specializations · {dept.enrolledStudents} students
                </span>
              </div>

              {/* Path + arrow */}
              <div className="dept-nf-suggestion-right">
                <code className="dept-nf-suggestion-path">/departments/{dept.id}</code>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="dept-page-footer" style={{ marginTop: 32 }}>
        <span>Campus Directory © Academic Informatics Core</span>
        <span style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 600 }}>
          ERROR 404 · PATH UNRESOLVED
        </span>
      </div>
    </div>
  );
}
