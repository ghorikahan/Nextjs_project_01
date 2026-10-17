import Link from "next/link";
import { departments } from "../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments — Campus Directory",
  description: "Explore academic faculties, programs, and enrolled students.",
};

// SVG icons per department type
function DeptIcon({ type, color, bg }: { type: string; color: string; bg: string }) {
  const style = {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: bg,
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    flexShrink: 0 as const,
  };

  if (type === "cs") {
    return (
      <div style={style}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>
    );
  }
  if (type === "design") {
    return (
      <div style={style}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      </div>
    );
  }
  // business
  return (
    <div style={style}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    </div>
  );
}

export default function DepartmentsPage() {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="dept-page-header">
        <div>
          <h1 className="page-title">Departments</h1>
          <p className="page-subtitle">Explore academic faculties, programs, and enrolled students.</p>
        </div>
        <div className="dept-active-badge">
          <span className="dept-active-dot" />
          {departments.length} Active Academic Faculties
        </div>
      </div>

      {/* Divider */}
      <hr className="dept-page-divider" />

      {/* Department list */}
      <div className="dept-list-card">
        {departments.map((dept, idx) => (
          <div key={dept.id} className={`dept-list-row${idx < departments.length - 1 ? " dept-list-row--border" : ""}`}>
            {/* Left: icon + info */}
            <div className="dept-list-left">
              <DeptIcon type={dept.icon} color={dept.iconColor} bg={dept.color} />
              <div className="dept-list-info">
                <h2 className="dept-list-name">{dept.name}</h2>
                <p className="dept-list-desc">{dept.description}</p>
                <div className="dept-list-stats">
                  {/* Specializations */}
                  <span className="dept-stat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    {dept.specializations} Specializations
                  </span>
                  {/* Enrolled */}
                  <span className="dept-stat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    {dept.enrolledStudents} Enrolled Students
                  </span>
                </div>
              </div>
            </div>

            {/* Right: view link */}
            <Link
              href={`/students?dept=${encodeURIComponent(dept.name)}`}
              className="dept-view-link"
            >
              View students →
            </Link>
          </div>
        ))}

        {/* Card footer */}
        <div className="dept-card-footer">
          <span>Curriculum Year 2024–2025</span>
          <span>Updated daily via Campus Records API</span>
        </div>
      </div>
    </div>
  );
}
