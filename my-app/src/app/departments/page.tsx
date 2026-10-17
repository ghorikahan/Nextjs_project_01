"use client";
import Link from "next/link";
import { departments } from "../lib/data";
import { useState } from "react";

// SVG icons per department type
function DeptIcon({ type, color, bg }: { type: string; color: string; bg: string }) {
  const style = {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: bg,
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    flexShrink: 0 as const,
  };
  if (type === "cs") {
    return (
      <div style={style}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      </div>
    );
  }
  return (
    <div style={style}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function DepartmentsPage() {
  const [openDepts, setOpenDepts] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setOpenDepts((prev) => ({ ...prev, [id]: !prev[id] }));
  }

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
        {departments.map((dept, idx) => {
          const isOpen = !!openDepts[dept.id];
          return (
            <div
              key={dept.id}
              className={`dept-list-row${idx < departments.length - 1 ? " dept-list-row--border" : ""}${isOpen ? " dept-list-row--open" : ""}`}
            >
              {/* Main row content */}
              <div className="dept-list-main">
                {/* Left: icon + info */}
                <div className="dept-list-left">
                  <DeptIcon type={dept.icon} color={dept.iconColor} bg={dept.color} />
                  <div className="dept-list-info">
                    <h2 className="dept-list-name">{dept.name}</h2>
                    <p className="dept-list-desc">{dept.description}</p>
                    <div className="dept-list-stats">
                      {/* Specializations */}
                      <span className="dept-stat">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                        </svg>
                        {dept.specializations} Specializations
                      </span>
                      {/* Enrolled */}
                      <span className="dept-stat">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

                {/* Right: actions */}
                <div className="dept-list-actions">
                  <Link href={`/departments/${dept.id}`} className="dept-view-link">
                    View department →
                  </Link>
                  <button
                    className={`dept-expand-btn${isOpen ? " dept-expand-btn--open" : ""}`}
                    onClick={() => toggle(dept.id)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse specializations" : "Expand specializations"}
                  >
                    <ChevronIcon open={isOpen} />
                    <span>{isOpen ? "Hide" : "Show"} Specs</span>
                  </button>
                </div>
              </div>

              {/* ── Nested specializations tree ── */}
              <div className={`dept-specs-panel${isOpen ? " dept-specs-panel--open" : ""}`}>
                <div className="dept-specs-panel-inner">
                  <div className="dept-specs-panel-label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                    Specialization Tracks
                  </div>
                  <div className="dept-nested-tree">
                    {dept.specs.map((spec, si) => (
                      <div key={spec.id} className="dept-nested-node">
                        {/* Tree lines */}
                        <div className="dept-nested-lines">
                          <div className="dept-nested-vert" style={{ visibility: si < dept.specs.length - 1 ? "visible" : "hidden" }} />
                          <div className="dept-nested-horiz" />
                          <div className="dept-nested-dot" style={{ background: dept.iconColor }} />
                        </div>

                        <Link href={`/departments/${dept.id}/${spec.id}`} className="dept-nested-card">
                          <div className="dept-nested-card-left">
                            <div className="dept-nested-spec-name">{spec.name}</div>
                            <div className="dept-nested-spec-desc">{spec.description}</div>
                            <div className="dept-nested-spec-meta">
                              <span className="dept-nested-meta-pill" style={{ background: dept.color, color: dept.iconColor }}>
                                {spec.trackCode}
                              </span>
                              <span className="dept-nested-meta-pill dept-nested-meta-pill--neutral">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                                {spec.students.length} {spec.students.length === 1 ? "student" : "students"}
                              </span>
                              <span className="dept-nested-meta-pill dept-nested-meta-pill--neutral">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                                {spec.academicLead}
                              </span>
                            </div>
                          </div>
                          <div className="dept-nested-card-arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Card footer */}
        <div className="dept-card-footer">
          <span>Curriculum Year 2024–2025</span>
          <span>Updated daily via Campus Records API</span>
        </div>
      </div>
    </div>
  );
}
