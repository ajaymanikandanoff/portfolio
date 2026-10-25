/* ============================================================
   PORTFOLIO CONFIGURATION — AJAY M
   Editorial, Human, Recruiter-Friendly Portfolio Data
   ============================================================ */

export const content = {
  profile: {
    name: 'AJAY M',
    shortName: 'Ajay',
    role: 'Aspiring Full Stack Developer & Creative Technologist',
    tagline: 'Full-stack software engineering, UI/UX design in Figma, and video creation.',
    location: 'India',
    status: 'Available for Internships & Full-Time Roles',
    photo: '/me.png', // Transparent cutout
    resumeUrl: '/resume.pdf',
    bio: "I'm a computer science student and aspiring full stack developer. I build functional web applications across the stack with Java, React, Python, and JavaScript, design intuitive interfaces in Figma, and do video editing. I'm also an active lyrical video editor and meme creator.",
  },

  hero: {
    kicker: 'Portfolio / 2026',
    title: 'AJAY M',
    subtitle: 'Aspiring Full Stack Developer & Creative Technologist',
    summary:
      'I bridge clean software engineering with creative visual thinking. From building Spring Boot backends and React frontends to designing Figma interfaces and editing motion videos, I build products that are fast, intuitive, and human.',
    quickStats: [
      { label: 'Primary Focus', value: 'Full Stack Web & AI' },
      { label: 'Engineering Stacks', value: 'React • Java • Python' },
      { label: 'Creative Arsenal', value: 'Figma • CapCut • Photoshop' },
      { label: 'Availability', value: 'Open for Roles' },
    ],
  },

  about: {
    heading: 'The Developer Behind The Work',
    subheading: 'Focused on deep engineering, aesthetic interface design, and practical execution.',
    paragraphs: [
      "I'm an aspiring full stack developer based in India. As an introvert, I thrive in focused, deep-work environments where I can dive into code, tackle architecture challenges, and learn by shipping real software.",
      "My technical foundation spans HTML, CSS, JavaScript, Python, C, C++, and Java with Spring Boot. I leverage modern AI tools and prompt engineering to speed up prototyping and solve problems faster.",
      "Beyond engineering, I have a strong creative eye. I design UI/UX prototypes in Figma, edit video and photo content using Photoshop, CapCut, Alight Motion, and Canva, and create lyrical videos and memes.",
    ],
    highlights: [
      {
        title: 'Full Stack Engineering',
        desc: 'Developing end-to-end applications with React frontends, robust Java/Spring Boot backends, and REST APIs.',
      },
      {
        title: 'UI/UX & Visual Design',
        desc: 'Prototyping responsive web systems in Figma with focus on typography, negative space, and usability.',
      },
      {
        title: 'Video & Media Editing',
        desc: 'Skilled in CapCut, Photoshop, and Alight Motion for pacing, keyframing, and video motion.',
      },
      {
        title: 'Leadership & Mindset',
        desc: 'Strong team leadership, self-directed learning, and disciplined deep work on technical projects.',
      },
    ],
  },

  projects: [
    {
      id: 'cogniflow',
      title: 'CogniFlow AI',
      year: '2026',
      category: 'AI Application',
      purpose:
        "An adaptive revision coach that dynamically reshapes a student's study calendar around exam countdowns, topic difficulty, and quiz mistakes.",
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Dual-Engine AI'],
      aiAttribution: 'Gemini + OpenAI Dual AI Integration',
      link: '',
      repo: 'https://github.com/ajaymanikandanoff/CogniFlow-AI',
      featured: true,
    },
    {
      id: 'campus-parking',
      title: 'Campus Parking Management System',
      year: '2025',
      category: 'Full Stack Java',
      purpose:
        'A full-stack parking management system with slot reservations, booking workflows, and an administrative dashboard tracking occupied vs. vacant slots in real time.',
      tech: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'H2 Database', 'REST APIs'],
      aiAttribution: 'AI-assisted architecture & data modeling',
      link: '',
      repo: 'https://github.com/ajaymanikandanoff/campus-parking',
      featured: true,
    },
    {
      id: 'pdf-machan',
      title: 'PDF Machan',
      year: '2025',
      category: 'Web Utility',
      purpose:
        'A fast, ad-free PDF toolkit that processes files entirely on-device — 100% private with nothing ever uploaded or sent outside your browser.',
      tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Canvas API'],
      aiAttribution: 'AI-assisted algorithm design',
      link: 'https://ajaymanikandanoff.github.io/pdfmachan',
      repo: '',
      featured: true,
    },
    {
      id: 'handwritten-notes',
      title: 'Handwritten Notes Study Assistant',
      year: '2025',
      category: 'Computer Vision',
      purpose:
        'Reads camera photos of handwritten notes and turns them into step-by-step breakdowns, interactive quizzes, and a voice-interactive Q&A with source verification.',
      tech: ['Python', 'Computer Vision', 'Gemini Vision', 'Web Speech API'],
      aiAttribution: 'Google Gemini Vision OCR',
      link: '',
      repo: 'https://github.com/ajaymanikandanoff/Handwritten-Notes-study-assistant',
      featured: true,
    },
    {
      id: 'jx-cgpa',
      title: 'JX CGPA Calculator',
      year: '2024',
      category: 'Academic Tool',
      purpose:
        'A semester CGPA calculator designed for college students — enter course marks to receive real-time grade conversions and cumulative GPA calculations.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      aiAttribution: 'Clean algorithmic calculation',
      link: 'https://ajaymanikandanoff.github.io/jxmarkcalc/',
      repo: '',
      featured: false,
    },
    {
      id: 'fact-checker',
      title: 'AI Fact-Checking System',
      year: '2026',
      category: 'NLP Research',
      purpose:
        'An intelligent system for real-time claim validation, cross-referencing statements with knowledge bases and semantic fact verification.',
      tech: ['Python', 'NLP', 'Knowledge Graphs', 'LLM APIs'],
      aiAttribution: 'Dual-agent verification workflow',
      link: '',
      repo: '',
      featured: false,
    },
  ],

  skills: {
    engineering: [
      'HTML5 & Modern CSS',
      'JavaScript (ES6+)',
      'React & Vite',
      'Java (17+)',
      'Spring Boot 3',
      'Python',
      'C & C++',
      'Node.js & Express',
      'REST APIs',
      'MongoDB & H2 Database',
      'Git & GitHub',
    ],
    creative: [
      'Figma (UI/UX Design)',
      'Wireframing & Prototyping',
      'Design Systems & Tokens',
      'Adobe Photoshop',
      'CapCut Video Editing',
      'Alight Motion (Keyframing)',
      'Canva Graphic Design',
      'Lyrical Video Editing',
      'Meme Content Creation',
    ],
    aiAndTools: [
      'Prompt Engineering',
      'Google Gemini Vision',
      'OpenAI API Integration',
      'Antigravity IDE',
      'Claude 3.7 AI Assisting',
      'Autonomous Coding Workflows',
    ],
  },

  certifications: [
    { name: 'C Programming', level: 'Procedural Logic & Memory', issuer: 'Coursework Foundation' },
    { name: 'C++ Programming', level: 'Object-Oriented Programming & DSA', issuer: 'Coursework Foundation' },
    { name: 'Python for Developers', level: 'Scripting, Automation & AI Tools', issuer: 'Verified Coursework' },
    { name: 'JavaScript (Modern ES6+)', level: 'Dynamic Web Interfaces & DOM', issuer: 'Verified Coursework' },
    { name: 'HTML5 & CSS3', level: 'Responsive Layouts & Semantic Web', issuer: 'Verified Coursework' },
    { name: 'Java Programming', level: 'Backend Systems & Spring Boot Intro', issuer: 'Verified Coursework' },
  ],

  contact: {
    title: "Let's Build Something Together",
    subtitle:
      'Available for full-stack developer internships, junior engineering roles, and creative UI/UX collaborations. Based in India — open to remote or on-site opportunities.',
    email: 'ajaymanikandanoff@gmail.com',
    links: [
      {
        label: 'GitHub',
        handle: 'ajaymanikandanoff',
        href: 'https://github.com/ajaymanikandanoff',
        type: 'Code',
      },
      {
        label: 'LinkedIn',
        handle: 'ajaymanikandan-in',
        href: 'https://linkedin.com/in/ajaymanikandan-in',
        type: 'Professional',
      },
      {
        label: 'Instagram',
        handle: '@a.jx.y',
        href: 'https://www.instagram.com/a.jx.y',
        type: 'Social',
      },
      {
        label: 'Email',
        handle: 'ajaymanikandanoff@gmail.com',
        href: 'mailto:ajaymanikandanoff@gmail.com',
        type: 'Direct',
      },
    ],
  },
}
