import { Suspense } from "react";
import Link from "next/link";
import {
  getDepartmentById,
  getSpecById,
  getStudentById,
  departments,
} from "../../../lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
    specId: string;
  }>;
};

// Generate page metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id, specId } = await params;
  const spec = getSpecById(id, specId);

  if (!spec) {
    return { title: "Not Found" };
  }

  return {
    title: `${spec.name} — Campus Directory`,
    description: spec.description,
  };
}

// Generate static routes
export async function generateStaticParams() {
  return departments.flatMap((d) =>
    d.specs.map((s) => ({
      id: d.id,
      specId: s.id,
    }))
  );
}

// Main specialization content
async function SpecContent({
  id,
  specId,
}: {
  id: string;
  specId: string;
}) {
  const dept = getDepartmentById(id);
  const spec = getSpecById(id, specId);

  if (!dept || !spec) {
    notFound();
  }

  const specStudents = spec.students.map((ss) => ({
    ...ss,
    student: getStudentById(ss.studentId),
  }));

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/departments">Departments</Link>

        <span className="breadcrumb-sep">/</span>

        <Link href={`/departments/${dept.id}`}>
          {dept.name}
        </Link>

        <span className="breadcrumb-sep">/</span>

        <span className="breadcrumb-current">
          {spec.name}
        </span>
      </nav>

      {/* Navigation row */}
      <div className="spec-nav-row">
        <Link
          href={`/departments/${dept.id}`}
          className="back-link"
        >
          ← Return to {dept.name} Department
        </Link>

        <Link
          href="/students"
          className="spec-view-all-link"
        >
          View all students →
        </Link>
      </div>

      {/* Specialization hero card */}
      <div className="spec-hero-card">
        <div className="spec-hero-header">
          <div className="spec-hero-title-group">
            <h1 className="spec-hero-name">
              {spec.name}
            </h1>

            <span className="spec-hero-dept-badge">
              Specialization under {dept.name}
            </span>
          </div>

          <div className="spec-hero-track-group">
            <span className="spec-hero-track-label">
              DEPARTMENT TRACK
            </span>

            <code className="spec-hero-track-code">
              {spec.trackCode}
            </code>
          </div>
        </div>

        <p className="spec-hero-desc">
          {spec.description}
        </p>

        <div className="spec-hero-meta">
          <div className="spec-meta-item">
            <span className="spec-meta-label">
              Academic Lead
            </span>

            <span className="spec-meta-value">
              {spec.academicLead}
            </span>
          </div>

          <div className="spec-meta-item">
            <span className="spec-meta-label">
              Primary Core Lab
            </span>

            <span className="spec-meta-value">
              {spec.primaryCoreLab}
            </span>
          </div>

          <div className="spec-meta-item">
            <span className="spec-meta-label">
              Total Enrollment
            </span>

            <span className="spec-meta-value">
              {specStudents.length} Active{" "}
              {specStudents.length === 1
                ? "Enrollee"
                : "Enrollees"}
            </span>
          </div>

          <div className="spec-meta-item">
            <span className="spec-meta-label">
              Curriculum Cycle
            </span>

            <span className="spec-meta-value">
              {spec.curriculumCycle}
            </span>
          </div>
        </div>
      </div>

      {/* Students section */}
      <div className="spec-students-header">
        <div className="spec-students-title-row">
          <h2 className="spec-students-title">
            Students in this Specialization
          </h2>

          <span className="spec-students-count">
            {specStudents.length}
          </span>
        </div>

        <div className="spec-students-filter">
          <span className="spec-filter-label">
            Filtered by Track:
          </span>

          <span className="spec-filter-badge">
            {spec.name}
          </span>
        </div>
      </div>

      {/* Students grid */}
      <div className="spec-students-grid">
        {specStudents.map(
          ({ studentId, focus, student }) => (
            <div
              key={studentId}
              className="spec-student-card"
            >
              <div className="spec-student-card-top">
                <div className="spec-student-left">
                  <div
                    className="avatar-sm"
                    style={{
                      background:
                        student?.avatarColor ??
                        "#f1f5f9",
                      color:
                        student?.avatarTextColor ??
                        "#475569",
                    }}
                  >
                    {student?.initials ?? "??"}
                  </div>

                  <div>
                    <div className="spec-student-name">
                      {student?.name ?? studentId}
                    </div>

                    <div className="spec-student-id">
                      {student?.studentId ?? studentId}
                    </div>
                  </div>
                </div>

                <span className="spec-student-year">
                  {student?.studyYear?.replace(
                    " Year",
                    ""
                  ) ?? "—"}
                </span>
              </div>

              <div className="spec-student-divider" />

              <div className="spec-student-bottom">
                <span className="spec-student-focus">
                  {focus}
                </span>

                <Link
                  href={`/students/${studentId}`}
                  className="spec-student-link"
                >
                  View profile →
                </Link>
              </div>
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="dept-page-footer">
        <span>
          Campus Directory © Academic Informatics Core
        </span>

        <span className="dept-footer-path">
          Path: /departments/{dept.id}/{spec.id}

          <span className="dept-footer-dot" />
        </span>
      </div>
    </div>
  );
}

// Resolve URL parameters INSIDE Suspense
async function SpecContentWrapper({
  params,
}: Props) {
  const { id, specId } = await params;

  return (
    <SpecContent
      id={id}
      specId={specId}
    />
  );
}

// Page component
export default function SpecPage({
  params,
}: Props) {
  return (
    <Suspense
      fallback={
        <div className="page-wrapper">
          <p
            style={{
              color: "var(--muted)",
              padding: "40px 0",
            }}
          >
            Loading…
          </p>
        </div>
      }
    >
      <SpecContentWrapper params={params} />
    </Suspense>
  );
}
