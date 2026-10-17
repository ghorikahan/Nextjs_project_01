"use client";

import { useState } from "react";
import Link from "next/link";
import { students } from "../lib/data";

const PAGE_SIZE = 9;

export default function StudentsPage() {
  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [page, setPage] = useState(1);

  const departments = ["All", ...Array.from(new Set(students.map((s) => s.department)))];

  const filtered = students.filter((s) => {
    const matchName = s.name.toLowerCase().includes(query.toLowerCase());
    const matchDept = deptFilter === "All" || s.department === deptFilter;
    return matchName && matchDept;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleDeptChange = (d: string) => {
    setDeptFilter(d);
    setPage(1);
  };

  const handleSearch = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Students</h1>
      <p className="page-subtitle">Browse students and view their profiles.</p>

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
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="filter-label-wrap">
          <span className="filter-label">Department:</span>
          <select
            id="dept-filter"
            className="filter-select"
            value={deptFilter}
            onChange={(e) => handleDeptChange(e.target.value)}
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d === "All" ? "All departments" : d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">No students found matching your search.</div>
      ) : (
        <div className="students-grid">
          {paginated.map((student) => (
            <div key={student.id} className="student-card">
              <div className="student-card-top">
                <div
                  className="avatar-sm"
                  style={{
                    background: student.avatarColor,
                    color: student.avatarTextColor,
                  }}
                >
                  {student.initials}
                </div>
                <span className="student-card-id">{student.studentId}</span>
              </div>
              <p className="student-card-name">{student.name}</p>
              <div className="student-card-tags">
                <span className="dept-badge">{student.department}</span>
                <span className="student-card-year">{student.studyYear}</span>
              </div>
              <hr className="student-card-divider" />
              <Link
                href={`/students/${student.id}`}
                className="view-profile-link"
              >
                View profile →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination footer */}
      <div className="pagination-footer">
        <span className="pagination-info">
          Showing <strong>{filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}</strong>–
          <strong>{Math.min(currentPage * PAGE_SIZE, filtered.length)}</strong> of{" "}
          <strong>{filtered.length}</strong> students
        </span>
        <div className="pagination-btns">
          <button
            id="pagination-prev"
            className="pagination-btn"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            id="pagination-next"
            className="pagination-btn"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
