import { departments, students } from "../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments — Campus Directory",
  description: "Explore academic departments and the students enrolled in each.",
};

export default function DepartmentsPage() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">Departments</h1>
      <p className="page-subtitle">
        {departments.length} academic departments across campus
      </p>

      <div className="dept-grid">
        {departments.map((dept) => {
          const count = students.filter((s) => s.department === dept.name).length;
          return (
            <div key={dept.id} className="dept-card">
              <div
                className="dept-icon"
                style={{ background: dept.color }}
              >
                {dept.icon}
              </div>
              <h2 className="dept-name">{dept.name}</h2>
              <p className="dept-count">
                {count} student{count !== 1 ? "s" : ""} enrolled
              </p>
              <p className="dept-desc">{dept.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
