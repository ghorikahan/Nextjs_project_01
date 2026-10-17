"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/students", label: "Students" },
  { href: "/departments", label: "Departments" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-icon">🎓</span>
          Campus Directory
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link${isActive ? " active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <span className="navbar-right">Frontend Practice</span>
      </div>
    </nav>
  );
}
