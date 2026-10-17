import Link from "next/link";
import { notFound } from "next/navigation";
import { students, getStudentById } from "../../lib/data";
import type { Metadata } from "next";

// Generate static params for all students
export async function generateStaticParams() {
  return students.map((s) => ({ id: s.id }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const student = getStudentById(id);
  if (!student) return { title: "Student Not Found" };
  return {
    title: `${student.name} — Campus Directory`,
    description: `Profile page for ${student.name}, ${student.studyYear} in ${student.department}.`,
  };
}

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) notFound();

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/students">Students</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{student.name}</span>
      </div>

      {/* Back link */}
      <Link href="/students" className="back-link">
        ← Back to students
      </Link>

      {/* Profile card */}
      <div className="profile-card">
        {/* Header */}
        <div className="profile-header">
          <div className="avatar">{student.initials}</div>
          <div>
            <h1 className="profile-name">{student.name}</h1>
            <div className="badges">
              <span className="badge-id">{student.studentId}</span>
              <span className="badge-status">{student.status}</span>
            </div>
          </div>
        </div>

        {/* Info grid */}
        <div className="info-grid">
          <div className="info-item">
            <label>Department</label>
            <p>{student.department}</p>
          </div>
          <div className="info-item">
            <label>Study Year</label>
            <p>{student.studyYear}</p>
          </div>
          <div className="info-item">
            <label>Email</label>
            <p>
              <a href={`mailto:${student.email}`}>{student.email}</a>
            </p>
          </div>
          <div className="info-item">
            <label>Enrolled</label>
            <p>{student.enrolled}</p>
          </div>
        </div>

        {/* About */}
        <h2 className="section-title">About</h2>
        <p className="section-text">{student.about}</p>

        <hr className="section-divider" />

        {/* Academic Details */}
        <h2 className="section-title">Academic Details</h2>

        <div className="academic-row">
          <span className="academic-label">Department</span>
          <span className="academic-value">{student.department}</span>
        </div>
        <div className="academic-row">
          <span className="academic-label">Current Academic Standing</span>
          <span className="academic-value">{student.academicStanding}</span>
        </div>

        {/* Enrolled subjects */}
        <p className="subjects-label">Enrolled Subjects</p>
        <div className="subjects-table">
          {student.subjects.map((subj) => (
            <div key={subj.code} className="subject-row">
              <span className="subject-name">
                {subj.code}: {subj.name}
              </span>
              <span className="subject-credits">{subj.credits.toFixed(1)} Credits</span>
            </div>
          ))}
        </div>

        {/* Card footer */}
        <div className="card-footer">
          <span>System Record ID: {student.systemRecordId}</span>
          <span>Last validated: {student.lastValidated}</span>
        </div>
      </div>
    </div>
  );
}
