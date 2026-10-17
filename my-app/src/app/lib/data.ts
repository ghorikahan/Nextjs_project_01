export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface SpecStudent {
  studentId: string;
  focus: string;
}

export interface Spec {
  id: string;
  name: string;
  trackCode: string;
  description: string;
  academicLead: string;
  primaryCoreLab: string;
  curriculumCycle: string;
  students: SpecStudent[];
}

export interface Student {
  id: string;
  studentId: string;
  name: string;
  initials: string;
  avatarColor: string; // bg color
  avatarTextColor: string;
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
    avatarColor: "#dbeafe",
    avatarTextColor: "#1d4ed8",
    department: "Computer Science",
    studyYear: "3rd Year",
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
    id: "elena-rostova",
    studentId: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: "#e0e7ff",
    avatarTextColor: "#4338ca",
    department: "Design",
    studyYear: "2nd Year",
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Elena is a design student with a focus on human-computer interaction and typographic systems. She has interned at two product studios and contributes to open-source design systems.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DES-201", name: "Interaction Design Principles", credits: 3.5 },
      { code: "DES-215", name: "Typography & Visual Systems", credits: 3.0 },
      { code: "DES-230", name: "UX Research Methods", credits: 3.5 },
    ],
    systemRecordId: "1089-DES-ER",
    lastValidated: "Oct 20, 2024",
  },
  {
    id: "marcus-chen",
    studentId: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    avatarColor: "#ffedd5",
    avatarTextColor: "#c2410c",
    department: "Business",
    studyYear: "4th Year",
    email: "marcus.chen@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Marcus is a senior business student specializing in entrepreneurship and venture finance. He co-founded a campus startup accelerator and has led two successful fundraising rounds for student ventures.",
    academicStanding: "4th Year Undergraduate",
    subjects: [
      { code: "BUS-401", name: "Venture Capital & Private Equity", credits: 3.0 },
      { code: "BUS-420", name: "Strategic Management", credits: 3.5 },
      { code: "BUS-435", name: "Corporate Finance", credits: 4.0 },
    ],
    systemRecordId: "1120-BUS-MC",
    lastValidated: "Oct 23, 2024",
  },
  {
    id: "priya-sharma",
    studentId: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "#dbeafe",
    avatarTextColor: "#1d4ed8",
    department: "Computer Science",
    studyYear: "1st Year",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    status: "Active Student",
    about:
      "Priya is a first-year computer science student with a strong background in competitive programming. She has represented her school at national coding olympiads and is eager to explore AI research.",
    academicStanding: "1st Year Undergraduate",
    subjects: [
      { code: "CS-101", name: "Introduction to Programming", credits: 4.0 },
      { code: "CS-110", name: "Discrete Mathematics", credits: 3.5 },
      { code: "CS-120", name: "Computer Architecture Basics", credits: 3.0 },
    ],
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 25, 2024",
  },
  {
    id: "lucas-dubois",
    studentId: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    avatarColor: "#fce7f3",
    avatarTextColor: "#be185d",
    department: "Design",
    studyYear: "3rd Year",
    email: "lucas.dubois@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "Lucas is a third-year design student specializing in motion graphics and digital product design. He runs the campus creative media club and has designed campaigns for several student organizations.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "DES-301", name: "Motion Design & Animation", credits: 3.5 },
      { code: "DES-315", name: "Product Design Studio", credits: 4.0 },
      { code: "DES-320", name: "Brand Identity Systems", credits: 3.0 },
    ],
    systemRecordId: "1201-DES-LD",
    lastValidated: "Oct 19, 2024",
  },
  {
    id: "maya-lin",
    studentId: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: "#d1fae5",
    avatarTextColor: "#065f46",
    department: "Business",
    studyYear: "2nd Year",
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Maya is a business student focused on sustainable economics and impact investing. She leads the campus sustainability committee and is writing a paper on ESG reporting standards for emerging markets.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "BUS-201", name: "Principles of Accounting", credits: 3.5 },
      { code: "BUS-215", name: "Microeconomics", credits: 3.0 },
      { code: "BUS-230", name: "Sustainable Business Models", credits: 3.5 },
    ],
    systemRecordId: "1244-BUS-ML",
    lastValidated: "Oct 21, 2024",
  },
  {
    id: "tariq-al-mansoor",
    studentId: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: "#e0e7ff",
    avatarTextColor: "#4338ca",
    department: "Computer Science",
    studyYear: "4th Year",
    email: "tariq.almansoor@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Tariq is a senior CS student with a focus on machine learning and computer vision. He is completing his capstone on real-time object detection for autonomous vehicles and has two conference papers under review.",
    academicStanding: "4th Year Undergraduate",
    subjects: [
      { code: "CS-401", name: "Machine Learning Systems", credits: 4.0 },
      { code: "CS-415", name: "Computer Vision", credits: 4.0 },
      { code: "CS-430", name: "Capstone Project", credits: 3.0 },
    ],
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 22, 2024",
  },
  {
    id: "sophia-muller",
    studentId: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: "#dbeafe",
    avatarTextColor: "#1d4ed8",
    department: "Computer Science",
    studyYear: "2nd Year",
    email: "sophia.muller@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Sophia is a second-year student passionate about cybersecurity and formal verification. She participates in CTF competitions and is a member of the campus information security research group.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "CS-201", name: "Data Structures & Algorithms", credits: 4.0 },
      { code: "CS-220", name: "Systems Security", credits: 3.5 },
      { code: "CS-235", name: "Network Programming", credits: 3.5 },
    ],
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 24, 2024",
  },
];

export const departments = [
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "cs",
    color: "#dbeafe",
    iconColor: "#2563eb",
    description: "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    enrolledStudents: 320,
    specs: [
      {
        id: "web-development",
        name: "Web Development",
        trackCode: "CS-SPEC-04",
        description: "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        primaryCoreLab: "Turing Hall 408",
        curriculumCycle: "2024–2025 Revised",
        students: [
          { studentId: "aarav-mehta",       focus: "Full-Stack Architecture" },
          { studentId: "priya-sharma",      focus: "Reactive UI Design" },
          { studentId: "tariq-al-mansoor",  focus: "Distributed Web Systems" },
          { studentId: "sophia-muller",     focus: "Progressive Web Apps" },
        ],
      },
      {
        id: "ai-machine-learning",
        name: "AI & Machine Learning",
        trackCode: "CS-SPEC-01",
        description: "Exploring intelligent systems, deep learning, natural language processing, and autonomous decision-making frameworks.",
        academicLead: "Prof. David Kim",
        primaryCoreLab: "Neuro-AI Lab, Room 301",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "aarav-mehta",      focus: "ML Systems Design" },
          { studentId: "tariq-al-mansoor", focus: "Computer Vision Research" },
        ],
      },
      {
        id: "systems-security",
        name: "Systems & Security",
        trackCode: "CS-SPEC-02",
        description: "Advanced operating systems, cryptographic protocols, network security, and formal verification methods.",
        academicLead: "Prof. Nadia Hassan",
        primaryCoreLab: "SecLab, Room 215",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "sophia-muller",    focus: "Network Defense Systems" },
          { studentId: "tariq-al-mansoor", focus: "Secure System Design" },
        ],
      },
      {
        id: "cloud-infrastructure",
        name: "Cloud Infrastructure",
        trackCode: "CS-SPEC-03",
        description: "Distributed cloud computing, containerization, DevOps pipelines, and scalable architecture patterns.",
        academicLead: "Prof. James Okoye",
        primaryCoreLab: "Cloud Lab, Room 402",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "priya-sharma",  focus: "Cloud Architecture" },
          { studentId: "aarav-mehta",   focus: "Distributed Computing" },
        ],
      },
    ] as Spec[],
  },
  {
    id: "design",
    name: "Design",
    icon: "design",
    color: "#ede9fe",
    iconColor: "#7c3aed",
    description: "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    enrolledStudents: 185,
    specs: [
      {
        id: "interaction-design",
        name: "Interaction Design",
        trackCode: "DES-SPEC-01",
        description: "Human-computer interaction principles, usability testing, accessibility, and inclusive design methodologies.",
        academicLead: "Prof. Maria Santos",
        primaryCoreLab: "HCI Studio, Room 104",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "elena-rostova", focus: "Interaction Research" },
          { studentId: "lucas-dubois",  focus: "Product Strategy" },
        ],
      },
      {
        id: "motion-design",
        name: "Motion Design",
        trackCode: "DES-SPEC-02",
        description: "Animation principles, kinetic typography, interactive motion, and multimedia storytelling techniques.",
        academicLead: "Prof. Yuki Tanaka",
        primaryCoreLab: "Motion Lab, Room 212",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "lucas-dubois",  focus: "Motion Systems" },
          { studentId: "elena-rostova", focus: "Animation Research" },
        ],
      },
      {
        id: "brand-visual-systems",
        name: "Brand & Visual Systems",
        trackCode: "DES-SPEC-03",
        description: "Identity design, visual language development, systematic design thinking, and cross-platform brand strategy.",
        academicLead: "Prof. Ines Pereira",
        primaryCoreLab: "Visual Studio, Room 118",
        curriculumCycle: "2024–2025 Revised",
        students: [
          { studentId: "elena-rostova", focus: "Visual Language" },
          { studentId: "lucas-dubois",  focus: "Brand Identity" },
        ],
      },
    ] as Spec[],
  },
  {
    id: "business",
    name: "Business",
    icon: "business",
    color: "#dbeafe",
    iconColor: "#2563eb",
    description: "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    enrolledStudents: 240,
    specs: [
      {
        id: "venture-finance",
        name: "Venture Finance",
        trackCode: "BUS-SPEC-01",
        description: "Startup financing, venture capital deal structures, equity valuation, and investment portfolio management.",
        academicLead: "Prof. Alex Morgan",
        primaryCoreLab: "Finance Lab, Room 501",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "marcus-chen", focus: "VC Investment Strategy" },
        ],
      },
      {
        id: "strategic-management",
        name: "Strategic Management",
        trackCode: "BUS-SPEC-02",
        description: "Corporate strategy, competitive positioning, M&A analysis, and organizational leadership frameworks.",
        academicLead: "Prof. Clara Benson",
        primaryCoreLab: "Strategy Suite, Room 503",
        curriculumCycle: "2024–2025 Core",
        students: [
          { studentId: "marcus-chen", focus: "Corporate Growth Strategy" },
          { studentId: "maya-lin",    focus: "Business Analytics" },
        ],
      },
      {
        id: "sustainable-economics",
        name: "Sustainable Economics",
        trackCode: "BUS-SPEC-03",
        description: "ESG reporting, impact investing, green bond markets, and sustainability accounting for global enterprises.",
        academicLead: "Prof. Rajan Mehta",
        primaryCoreLab: "Eco-Finance Lab, Room 412",
        curriculumCycle: "2024–2025 Revised",
        students: [
          { studentId: "maya-lin",    focus: "ESG Finance" },
          { studentId: "marcus-chen", focus: "Impact Metrics" },
        ],
      },
    ] as Spec[],
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

export function getDepartmentById(id: string) {
  return departments.find((d) => d.id === id);
}

export function getSpecById(deptId: string, specId: string) {
  const dept = getDepartmentById(deptId);
  return dept?.specs.find((s) => s.id === specId);
}
