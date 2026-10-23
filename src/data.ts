// All site content lives here so pages and the terminal stay in sync.
// Sources: CV (Oct 2026) and github.com/James-Bragg.

export const profile = {
  name: 'James Bragg',
  role: 'Software Developer',
  tagline: 'Software developer across web, cloud & systems.',
  location: 'Corby, Northamptonshire, UK',
  email: 'jamesbragg01@outlook.com',
  phone: '07483 210270',
  github: 'https://github.com/James-Bragg',
  linkedin: 'https://www.linkedin.com/in/james-bragg-0a02a036a/',
  status: 'Open to entry-level roles',
  intro:
    "I'm a Computer Science graduate with a First-Class BSc and experience in software engineering, cloud computing, and project delivery. I'm currently working as a freelance developer, taking client projects from brief through to live deployment, alongside a shift management role where I lead teams and solve problems under pressure.",
};

export const stats = [
  { value: '1st', label: 'Class BSc (Hons) Computer Science' },
  { value: '97%', label: 'Average accuracy on my facial recognition model' },
  { value: '3×', label: 'Promoted in three years, to Shift Manager' },
  { value: '1', label: 'Live client website, designed and deployed solo' },
];

export const skillGroups = [
  { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'Rust'] },
  { name: 'Frameworks & Libraries', items: ['React', 'Django', 'scikit-learn', 'Tailwind CSS'] },
  { name: 'Cloud & Data', items: ['AWS', 'MySQL', 'SQL Server', 'SQLite', 'Wix'] },
  { name: 'Delivery & Tools', items: ['PRINCE2', 'Agile', 'Scrum', 'Git', 'Office 365'] },
  { name: 'People', items: ['Team leadership', 'Coaching & mentoring', 'Communication under pressure', 'Self-directed'] },
];

export interface Experience {
  role: string;
  org: string;
  period: string;
  progression?: { role: string; period: string }[];
  link?: { label: string; href: string };
  points: string[];
}

export const experience: Experience[] = [
  {
    role: 'Freelance Developer',
    org: 'Self-employed',
    period: '2026 — Present',
    link: { label: 'thaitawanmassage.co.uk', href: 'https://www.thaitawanmassage.co.uk/' },
    points: [
      'Designed, built and deployed a bespoke business website for a local client using Wix.',
      'Implemented an online booking system, service catalogue, and clear location and contact information.',
      'Responsive across desktop and mobile, and configured as a CMS so the client can update it independently.',
      'Managed the full lifecycle: requirements, client communication, design, delivery planning and deployment.',
    ],
  },
  {
    role: 'Shift Manager',
    org: "McDonald's",
    period: '2021 — Present',
    progression: [
      { role: 'Shift Manager', period: '2024 — Present' },
      { role: 'Crew Trainer', period: '2023 — 2024' },
      { role: 'Crew Member', period: '2021 — 2023' },
    ],
    points: [
      'Promoted three times in three years through consistent performance and leadership.',
      'Lead shift teams by delegating tasks, managing workflow and resolving issues in a fast-paced environment.',
      'Train and mentor new team members on procedures and systems.',
      'Track stock, waste, deliveries and ordering against demand forecasts, and troubleshoot equipment faults under time pressure.',
    ],
  },
];

export const education = [
  {
    title: 'BSc (Hons) Computer Science',
    grade: 'First Class Honours',
    org: 'University of Bedfordshire',
    period: '2019 — 2022',
    detail: 'Key modules: Databases, AI, Distributed Systems, Software Engineering, Project Management',
  },
  {
    title: 'BTEC Level 3 Extended Diploma in Computer Science',
    grade: 'Merit, Merit, Merit',
    org: 'Tresham College',
    period: '2017 — 2019',
  },
  {
    title: 'GCSEs & Level 2 BCS ECDL',
    grade: 'ECDL: Distinction',
    org: 'Corby Business Academy',
    period: '2017',
    detail: 'GCSEs including English, Maths and Computer Science',
  },
];

export const interests = [
  {
    title: 'Exploring Technologies',
    text: 'I keep up with new tech trends and experiment with emerging tools, both hardware and software.',
  },
  {
    title: 'Gaming & Tabletop RPGs',
    text: 'Digital and tabletop gaming, particularly D&D and strategy games, for the creative problem-solving they demand.',
  },
  {
    title: 'Film & Entertainment',
    text: 'Storytelling through film and other media, appreciating both cinematography and narrative depth.',
  },
  {
    title: 'Social & Community',
    text: 'Time with friends and family, whether collaborating on projects, sharing experiences, or building relationships.',
  },
];

export type Category = 'Web' | 'Python' | 'Rust' | 'Machine Learning' | 'Team';

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  tech: string[];
  categories: Category[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'hostdeath-link',
    title: 'Host Death Link',
    kicker: 'Personal · Rust',
    summary: 'An Elden Ring Seamless Co-op add-on: when the host dies, every other player in the session dies too.',
    points: [
      'Built as a native Windows DLL in Rust, loaded through ModEngine2 and hooking into game state via the fromsoftware-rs crates.',
      'Per-player TOML configuration identifies the host, including sessions with three or more players.',
      'Catches panics in the main loop so errors never crash the game.',
    ],
    tech: ['Rust', 'Windows API', 'DLL', 'Game Modding'],
    categories: ['Rust'],
    repo: 'https://github.com/James-Bragg/hostdeath-link',
    featured: true,
  },
  {
    slug: 'local-business',
    title: 'Local Business Website',
    kicker: 'Freelance client',
    summary: 'A live, client-facing website with online booking that improved a local business’s online visibility.',
    points: [
      'Designed, built and deployed a bespoke website for a local client using Wix.',
      'Online booking system, service catalogue, and clear location and contact information.',
      'Responsive across desktop and mobile, and configured as a CMS so the client can update content independently.',
      'Managed the full project lifecycle, from requirements gathering and client communication through to deployment.',
    ],
    tech: ['Wix', 'CMS', 'Responsive Design', 'Client Management'],
    categories: ['Web'],
    demo: 'https://www.thaitawanmassage.co.uk/',
    featured: true,
  },
  {
    slug: 'dissertation',
    title: 'Cloud Computing for E-learning',
    kicker: 'BSc final year project',
    summary: 'A cloud-based social and forum platform that helps students collaborate during remote learning.',
    points: [
      'Based on research into gaps in peer-collaboration tools during remote learning.',
      'Role-based access for Students, Teachers and Admins, with forum creation/moderation, user profiles and direct messaging.',
      'Python/Django back end with a MySQL database; HTML, CSS and JavaScript front end.',
      'Deployed and configured a cloud-hosted MySQL database on AWS with access control for secure remote connections.',
      'Led the end-to-end SDLC: requirements, competitor analysis, design, development and testing.',
    ],
    tech: ['Python', 'Django', 'MySQL', 'AWS', 'JavaScript'],
    categories: ['Web', 'Python'],
    repo: 'https://github.com/James-Bragg/StudentSocialWeb',
    featured: true,
  },
  {
    slug: 'facial-recognition',
    title: 'Facial Recognition with ML',
    kicker: 'BSc individual project',
    summary: 'Raised a neural network’s accuracy from an 89% baseline to a 97% average, peaking at 99%.',
    points: [
      'Systematic hyperparameter tuning of batch size, solver selection, principal components and hidden neuron count.',
      'Built with Python and scikit-learn (MLPClassifier) on Google Colab.',
    ],
    tech: ['Python', 'scikit-learn', 'Neural Networks', 'Google Colab'],
    categories: ['Python', 'Machine Learning'],
  },
  {
    slug: 'algorithm-visualizer',
    title: 'Algorithm Visualizer',
    kicker: 'BSc group project · Project Manager',
    summary: 'A Python GUI that animates sorting algorithms and compares their execution speed.',
    points: [
      'Led the team from initiation to completion as Project Manager, applying PRINCE2 principles to deliver on schedule.',
      'Managed scope, timelines and responsibilities with Gantt charts and regular team meetings.',
      'Built with Python, Tkinter, Pygame and an SQLite database.',
    ],
    tech: ['Python', 'Tkinter', 'Pygame', 'SQLite', 'PRINCE2'],
    categories: ['Python', 'Team'],
    repo: 'https://github.com/James-Bragg/Y3-GroupProject',
  },
  {
    slug: 'student-kiosk',
    title: 'Student Kiosk System',
    kicker: 'BSc group project',
    summary: 'A web kiosk for the University of Bedfordshire to view and book campus events and services.',
    points: [
      'Built on Oracle APEX with a SQL back end.',
      'Led market research and requirements gathering, applying Scrum sprints and Soft Systems Methodology (CATWOE).',
      'Designed the SQL database, including triggers, sequences and normalised table structures.',
      'Developed authentication and authorisation, including secure password hashing.',
    ],
    tech: ['Oracle APEX', 'SQL', 'Scrum'],
    categories: ['Web', 'Team'],
  },
  {
    slug: 'dnd-companion',
    title: 'DnD Companion',
    kicker: 'Personal project',
    summary: 'An initiative tracker for running tabletop combat encounters, with saved players and bonuses.',
    points: [
      'Manage combat encounters with the built-in initiative tracker.',
      'Save players and their initiative bonuses between sessions.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    categories: ['Web'],
    repo: 'https://github.com/James-Bragg/DnD-Initiative-Tracker',
    demo: 'https://james-bragg.github.io/DnD-Initiative-Tracker/',
  },
];

export const ongoing = [
  {
    title: 'Learning Rust',
    text: 'Continuing to develop my Rust and systems programming skills, building on projects like Host Death Link.',
    tech: ['Rust', 'Systems Programming'],
  },
];
