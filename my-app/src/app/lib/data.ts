export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;
  studentId: string;
  name: string;
  initials: string;
  department: string;
  studyYear: string;
  email: string;
  enrolled: string;
  status: "Active Student" | "Inactive" | "Graduated";
  about: string;
  academicStanding: string;
  subjects: Subject[];
  systemRecordId: string;
  lastValidated: string;
}

export const students: Student[] = [
  {
    id: "aarav-mehta",
    studentId: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    department: "Computer Science",
    studyYear: "3rd Year (Junior)",
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: 4.0 },
      { code: "CS-340", name: "Web Application Architecture", credits: 4.0 },
      { code: "CS-280", name: "Algorithms & Complexity", credits: 3.5 },
    ],
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
  },
  {
    id: "priya-sharma",
    studentId: "STU-1087",
    name: "Priya Sharma",
    initials: "PS",
    department: "Electrical Engineering",
    studyYear: "2nd Year (Sophomore)",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Priya is passionate about embedded systems and IoT. She leads the campus robotics club and has published research on low-power sensor networks. Her goal is to design smarter cities through connected infrastructure.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "EE-201", name: "Circuit Analysis & Design", credits: 4.0 },
      { code: "EE-215", name: "Embedded Systems Programming", credits: 3.5 },
      { code: "EE-230", name: "Signal Processing Fundamentals", credits: 4.0 },
    ],
    systemRecordId: "1102-EE-PS",
    lastValidated: "Oct 20, 2024",
  },
  {
    id: "lucas-kim",
    studentId: "STU-1056",
    name: "Lucas Kim",
    initials: "LK",
    department: "Mathematics",
    studyYear: "4th Year (Senior)",
    email: "lucas.kim@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Lucas specializes in applied mathematics and cryptography. He is currently writing his senior thesis on post-quantum cryptographic schemes and is a teaching assistant for Linear Algebra.",
    academicStanding: "4th Year Undergraduate",
    subjects: [
      { code: "MATH-401", name: "Abstract Algebra", credits: 3.0 },
      { code: "MATH-435", name: "Cryptography & Number Theory", credits: 3.5 },
      { code: "MATH-450", name: "Topology", credits: 3.0 },
    ],
    systemRecordId: "0732-MATH-LK",
    lastValidated: "Oct 18, 2024",
  },
  {
    id: "sofia-garcia",
    studentId: "STU-1103",
    name: "Sofia Garcia",
    initials: "SG",
    department: "Data Science",
    studyYear: "1st Year (Freshman)",
    email: "sofia.garcia@campus.edu",
    enrolled: "Fall 2024",
    status: "Active Student",
    about:
      "Sofia brings a background in competitive mathematics to her studies in data science. She is particularly interested in natural language processing and is already contributing to a campus AI research group.",
    academicStanding: "1st Year Undergraduate",
    subjects: [
      { code: "DS-101", name: "Introduction to Data Science", credits: 3.0 },
      { code: "DS-110", name: "Python for Data Analysis", credits: 3.5 },
      { code: "MATH-120", name: "Statistics & Probability", credits: 4.0 },
    ],
    systemRecordId: "1245-DS-SG",
    lastValidated: "Oct 25, 2024",
  },
  {
    id: "james-okafor",
    studentId: "STU-1071",
    name: "James Okafor",
    initials: "JO",
    department: "Physics",
    studyYear: "3rd Year (Junior)",
    email: "james.okafor@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "James is a junior researcher in the condensed matter physics lab. He is exploring superconducting materials and quantum phenomena at low temperatures. Outside of the lab, he enjoys playing the saxophone.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "PHYS-310", name: "Quantum Mechanics I", credits: 4.0 },
      { code: "PHYS-325", name: "Thermodynamics & Statistical Physics", credits: 3.5 },
      { code: "PHYS-340", name: "Condensed Matter Physics", credits: 4.0 },
    ],
    systemRecordId: "0989-PHY-JO",
    lastValidated: "Oct 22, 2024",
  },
  {
    id: "mei-chen",
    studentId: "STU-1094",
    name: "Mei Chen",
    initials: "MC",
    department: "Computer Science",
    studyYear: "2nd Year (Sophomore)",
    email: "mei.chen@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Mei is a full-stack developer with a strong interest in UI/UX design. She contributes to open-source projects in her free time and has won two campus hackathons. She is a peer tutor for introductory programming courses.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "CS-201", name: "Data Structures & Algorithms", credits: 4.0 },
      { code: "CS-215", name: "Object-Oriented Programming", credits: 3.5 },
      { code: "CS-250", name: "UI/UX Design Principles", credits: 3.0 },
    ],
    systemRecordId: "1178-CS-MC",
    lastValidated: "Oct 21, 2024",
  },
];

export const departments = [
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "💻",
    color: "#dbeafe",
    description:
      "Covering algorithms, systems programming, software engineering, AI, and more.",
  },
  {
    id: "electrical-engineering",
    name: "Electrical Engineering",
    icon: "⚡",
    color: "#fef9c3",
    description:
      "From circuit design to power systems, signal processing, and embedded systems.",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "∑",
    color: "#fce7f3",
    description:
      "Pure and applied math including algebra, topology, analysis, and cryptography.",
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: "📊",
    color: "#dcfce7",
    description:
      "Statistical learning, data engineering, machine learning, and visualization.",
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚛️",
    color: "#ede9fe",
    description:
      "Quantum mechanics, condensed matter, astrophysics, and experimental physics.",
  },
];

export function getStudentById(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}

export function getStudentsByDepartment(dept: string): Student[] {
  return students.filter(
    (s) => s.department.toLowerCase() === dept.toLowerCase()
  );
}
