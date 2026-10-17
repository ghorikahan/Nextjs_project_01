"use client";

import { useState } from "react";
import Link from "next/link";
import { students } from "../lib/data";

export default function StudentsPage() {
  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");

  const departments = ["All", ...Array.from(new Set(students.map((s) => s.department)))];

  const filtered = students.filter((s) => {
    const matchName = s.name.toLowerCase().includes(query.toLowerCase());
    const matchDept = deptFilter === "All" || s.department === deptFilter;
    return matchName && matchDept;
  });

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Students</h1>
      <p className="page-subtitle">
        {students.length} registered students across all departments
      </p>

      {/* Search & filter */}
      <div className="search-bar">
        <div className="search-input-wrap">
          <svg
            className="search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="student-search"
            type="text"
            className="search-input"
            placeholder="Search students..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          id="dept-filter"
          className="filter-select"
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
        >
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">No students found matching your search.</div>
      ) : (
        <div className="students-grid">
          {filtered.map((student) => (
            <Link key={student.id} href={`/students/${student.id}`} className="student-card">
              <div className="student-card-header">
                <div className="avatar-sm">{student.initials}</div>
                <div>
                  <p className="student-card-name">{student.name}</p>
                  <p className="student-card-dept">{student.department}</p>
                </div>
                <span
                  className="badge-status"
                  style={{ marginLeft: "auto", flexShrink: 0 }}
                >
                  {student.status}
                </span>
              </div>
              <div className="student-card-meta">
                <span>{student.studentId}</span>
                <span className="student-card-year">{student.studyYear}</span>
                <span>{student.enrolled}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
