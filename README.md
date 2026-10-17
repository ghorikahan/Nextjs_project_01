# 🎓 Campus Directory — Academic & Student Information Portal

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Styling-Vanilla%20CSS-ff69b4?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

An elegant, high-performance academic registry and student management platform built with **Next.js 15 App Router**, **React 19**, and a custom **Vanilla CSS** design system. Designed with deep nested routing, dynamic metadata, React Suspense boundaries, and scoped 404 recovery routes.

---

## 📸 Overview & Key Features

- **⚡ Next.js 15 Architecture**: Implements modern async route params (`await params`), static generation (`generateStaticParams`), dynamic metadata (`generateMetadata`), and React `<Suspense>` streaming boundaries.
- **📂 Deep Nested Routing**:
  - Multi-tier dynamic department paths: `/departments` ➔ `/departments/[id]` ➔ `/departments/[id]/[specId]`.
  - Scoped breadcrumb navigation reflecting hierarchy with zero layout shift.
- **👨‍🎓 Student Management & Registry**:
  - Comprehensive student directory with search, filtering, and enrollment status.
  - Granular student profile pages with academic credits, subjects, and verification metadata.
- **🛡️ Multi-Level Scoped 404 Pages**:
  - Global `not-found.tsx` fallback for broken URLs.
  - Department-scoped `departments/[id]/not-found.tsx` with dynamic suggestions for active academic faculties.
  - Student-scoped `students/[id]/not-found.tsx` with suggested student profiles and quick directory actions.
- **🎨 Bespoke Design System**:
  - Custom Vanilla CSS (`globals.css`) with CSS custom properties for effortless theming.
  - Micro-animations: pulsing radar rings on error states, interactive hover cards, and clean typography.
  - Fully responsive from mobile devices to ultra-wide displays.

---

## 🗺️ Route Architecture

| Route | Dynamic Params | Type | Description |
| :--- | :--- | :--- | :--- |
| `/` | — | Static | Dashboard with quick stats, highlights, and direct navigation hubs |
| `/students` | — | Client Filtered | Complete student directory with live search and filter tags |
| `/students/[id]` | `id` | Dynamic / Suspense | Detailed individual student profile, credits, courses, and status |
| `/departments` | — | Static | Overview of faculties, chairs, student counts, and specializations |
| `/departments/[id]` | `id` | Dynamic / Suspense | Department portal with faculty info, courses, and specialization lists |
| `/departments/[id]/[specId]` | `id`, `specId` | Nested Dynamic | Deep specialization track page with lab info, lead, and student roster |
| `/about` | — | Static | Platform architecture, tech stack details, and institutional background |

---

## 📁 Project Structure

```text
Nextjs_project_01/
└── my-app/
    ├── public/                 # Static assets & icons
    ├── src/
    │   └── app/
    │       ├── layout.tsx      # Root HTML shell & navigation bar
    │       ├── page.tsx        # Campus dashboard home
    │       ├── globals.css     # Bespoke design system & utility tokens
    │       ├── not-found.tsx   # Global 404 not-found page
    │       ├── about/
    │       │   └── page.tsx    # Platform about page
    │       ├── departments/
    │       │   ├── page.tsx    # Departments directory
    │       │   ├── not-found.tsx
    │       │   └── [id]/
    │       │       ├── page.tsx        # Department detail page
    │       │       ├── not-found.tsx   # Scoped department 404 page
    │       │       └── [specId]/
    │       │           └── page.tsx    # Nested specialization detail page
    │       ├── students/
    │       │   ├── page.tsx    # Student search & directory
    │       │   ├── not-found.tsx
    │       │   └── [id]/
    │       │       ├── page.tsx        # Student profile page
    │       │       └── not-found.tsx   # Scoped student 404 page
    │       └── lib/
    │           └── data.ts     # Academic database models, mock data, & helper utilities
    ├── next.config.ts          # Next.js configuration
    ├── tsconfig.json           # TypeScript configuration
    └── package.json            # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher
- **npm**, **pnpm**, or **yarn**

### Quick Start

1. **Navigate to the application folder**:
   ```bash
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🛠️ Build & Production

To verify types, compile static pages, and produce an optimized production bundle:

```bash
cd my-app

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
