import { Suspense } from "react";
import Link from "next/link";
import { getDepartmentById, departments, getStudentById } from "../../lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const dept = getDepartmentById(id);
  if (!dept) return { title: "Not Found" };
  return {
    title: `${dept.name} — Campus Directory`,
    description: dept.description,
  };
}

export async function generateStaticParams() {
  return departments.map((d) => ({ id: d.id }));
}

function DeptIcon({ type, color, bg }: { type: string; color: string; bg: string }) {
  const style = {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: bg,
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    flexShrink: 0 as const,
  };
  if (type === "cs") {
    return (
      <div style={style}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      </div>
    );
  }
  return (
    <div style={style}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    </div>
  );
}

async function DepartmentContent({ id }: { id: string }) {
  const dept = getDepartmentById(id);
  if (!dept) notFound();

  const totalStudents = dept.specs.reduce((acc, s) => acc + s.students.length, 0);

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/departments">Departments</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{dept.name}</span>
      </nav>

      {/* Back link */}
      <Link href="/departments" className="back-link">
        ← Back to All Departments
      </Link>

      {/* Dept Hero Card */}
      <div className="dept-hero-card">
        <div className="dept-hero-top">
          <DeptIcon type={dept.icon} color={dept.iconColor} bg={dept.color} />
          <div className="dept-hero-info">
            <h1 className="dept-hero-name">{dept.name}</h1>
            <p className="dept-hero-desc">{dept.description}</p>
          </div>
        </div>
        <div className="dept-hero-stats">
          <div className="dept-hero-stat">
            <span className="dept-hero-stat-num">{dept.specs.length}</span>
            <span className="dept-hero-stat-label">Specializations</span>
          </div>
          <div className="dept-hero-stat-divider" />
          <div className="dept-hero-stat">
            <span className="dept-hero-stat-num">{dept.enrolledStudents}</span>
            <span className="dept-hero-stat-label">Enrolled Students</span>
          </div>
          <div className="dept-hero-stat-divider" />
          <div className="dept-hero-stat">
            <span className="dept-hero-stat-num">{totalStudents}</span>
            <span className="dept-hero-stat-label">In Specializations</span>
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="dept-specs-header">
        <h2 className="dept-specs-title">Specializations</h2>
        <span className="dept-specs-badge">{dept.specs.length}</span>
      </div>

      <div className="dept-specs-tree">
        {dept.specs.map((spec, idx) => {
          const specStudents = spec.students.map((ss) => ({
            ...ss,
            student: getStudentById(ss.studentId),
          }));
          return (
            <div key={spec.id} className="dept-spec-node">
              {/* Tree connector line */}
              <div className="dept-spec-connector">
                <div className="dept-spec-connector-line" />
                <div className="dept-spec-connector-dot" />
              </div>

              <div className="dept-spec-card">
                {/* Spec header */}
                <div className="dept-spec-card-header">
                  <div className="dept-spec-card-header-left">
                    <div className="dept-spec-icon" style={{ background: dept.color }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dept.iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="dept-spec-name">{spec.name}</h3>
                      <code className="dept-spec-track">{spec.trackCode}</code>
                    </div>
                  </div>
                  <Link
                    href={`/departments/${dept.id}/${spec.id}`}
                    className="dept-spec-view-btn"
                  >
                    View Specialization →
                  </Link>
                </div>

                <p className="dept-spec-desc">{spec.description}</p>

                {/* Meta row */}
                <div className="dept-spec-meta">
                  <div className="dept-spec-meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {spec.academicLead}
                  </div>
                  <div className="dept-spec-meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {spec.primaryCoreLab}
                  </div>
                  <div className="dept-spec-meta-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {spec.curriculumCycle}
                  </div>
                </div>

                {/* Student mini-cards */}
                {specStudents.length > 0 && (
                  <div className="dept-spec-students">
                    <div className="dept-spec-students-label">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {specStudents.length} Enrolled {specStudents.length === 1 ? "Student" : "Students"}
                    </div>
                    <div className="dept-spec-students-list">
                      {specStudents.map(({ studentId, focus, student }) => (
                        <Link
                          key={studentId}
                          href={`/students/${studentId}`}
                          className="dept-spec-student-chip"
                        >
                          <div
                            className="dept-spec-student-avatar"
                            style={{
                              background: student?.avatarColor ?? "#f1f5f9",
                              color: student?.avatarTextColor ?? "#475569",
                            }}
                          >
                            {student?.initials ?? "??"}
                          </div>
                          <div className="dept-spec-student-info">
                            <span className="dept-spec-student-name">{student?.name ?? studentId}</span>
                            <span className="dept-spec-student-focus">{focus}</span>
                          </div>
                          <svg className="dept-spec-student-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="dept-page-footer">
        <span>Campus Directory © Academic Informatics Core</span>
        <span>Path: /departments/{dept.id}</span>
      </div>
    </div>
  );
}

export default async function DepartmentPage({ params }: Props) {
  const { id } = await params;
  return (
    <Suspense fallback={<div className="page-wrapper"><p style={{ color: "var(--muted)", padding: "40px 0" }}>Loading…</p></div>}>
      <DepartmentContent id={id} />
    </Suspense>
  );
}
