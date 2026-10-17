import Link from "next/link";
import { students } from "../../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Student Not Found — Campus Directory",
  description: "The student profile requested could not be located.",
};

export default function StudentNotFound() {
  const suggestedStudents = students.slice(0, 4);

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/students">Students</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current" style={{ color: "#ef4444" }}>
          Not Found
        </span>
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
              <line x1="18" y1="8" x2="22" y2="12" />
              <line x1="22" y1="8" x2="18" y2="12" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="dept-nf-badge">
          <span className="dept-nf-badge-dot" />
          404 · STUDENT NOT FOUND
        </div>

        {/* Title & desc */}
        <h1 className="dept-nf-title">Student profile not found</h1>
        <p className="dept-nf-desc">
          The requested student record could not be found in the active campus registry.
          The ID may be typed incorrectly or the record may have been archived.
        </p>

        {/* Action buttons */}
        <div className="dept-nf-actions">
          <Link href="/students" className="dept-nf-btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Browse All Students
          </Link>
          <Link href="/departments" className="dept-nf-btn-secondary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Browse Departments
          </Link>
          <Link href="/" className="dept-nf-btn-secondary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
        </div>
      </div>

      {/* Suggested students */}
      <div className="dept-nf-suggestions">
        <div className="dept-nf-suggestions-header">
          <span className="dept-nf-suggestions-label">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            SUGGESTED ACTIVE STUDENTS
          </span>
          <span className="dept-nf-suggestions-right">Active Profiles</span>
        </div>

        <div className="dept-nf-suggestions-list">
          {suggestedStudents.map((student) => (
            <Link
              key={student.id}
              href={`/students/${student.id}`}
              className="dept-nf-suggestion-row"
            >
              {/* Avatar Icon */}
              <div
                className="dept-nf-suggestion-icon"
                style={{
                  background: student.avatarColor,
                  color: student.avatarTextColor,
                  fontWeight: 700,
                  fontSize: "0.8rem",
                }}
              >
                {student.initials}
              </div>

              {/* Info */}
              <div className="dept-nf-suggestion-info">
                <span className="dept-nf-suggestion-name">
                  {student.name}{" "}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--muted)",
                    }}
                  >
                    ({student.studentId})
                  </span>
                </span>
                <span className="dept-nf-suggestion-meta">
                  {student.department} · {student.studyYear}
                </span>
              </div>

              {/* Path + arrow */}
              <div className="dept-nf-suggestion-right">
                <code className="dept-nf-suggestion-path">/students/{student.id}</code>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
          ERROR 404 · STUDENT RECORD UNRESOLVED
        </span>
      </div>
    </div>
  );
}
