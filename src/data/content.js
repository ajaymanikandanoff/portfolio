/* ============================================================
   PORTFOLIO DATA CONFIGURATION — AJAY M
   Aspiring Full Stack Developer, Creative Technologist & Content Creator
   ============================================================ */

export const content = {
  profile: {
    fullName: 'Ajay M',
    displayName: 'Ajay',
    role: 'Aspiring Full Stack Developer & Creative Technologist',
    tagline: 'Code • Applied AI • UI/UX Design • Visual Creation',
    location: 'India',
    status: 'Available for Internships & Creative Collaborations',
    personality: 'Curious learner, introvert focused on deep work, and leader who loves turning ideas into digital reality.',
  },

  hero: {
    badge: 'Aspiring Full Stack Developer & Creative Builder',
    titleLine1: 'Building Digital Products',
    titleLine2: 'Code, AI & Creative Vision.',
    description:
      "Hi, I'm Ajay. I'm an aspiring full stack developer and creative technologist. I build responsive web apps with code and AI prompt engineering, design interfaces in Figma, and create visual content & video edits that tell stories.",
    stats: [
      { label: 'Core Projects', value: '6+' },
      { label: 'Creative Pages', value: '2 Active' },
      { label: 'Design & Code', value: 'Hybrid' },
      { label: 'AI Prompting', value: 'Advanced' },
    ],
  },

  about: {
    title: 'About Ajay',
    subtitle: 'Where technical engineering meets creative multimedia storytelling.',
    story: [
      "I'm an aspiring full stack developer and computer science student with a strong passion for technology, continuous learning, and digital art. I am an introvert who thrives in focused, deep-work environments — diving into code, exploring modern frameworks, and experimenting with AI tools.",
      "Beyond programming in HTML, CSS, JavaScript, Python, C, and C++, I have a deep creative side. I design UI/UX prototypes in Figma, edit aesthetic videos and photos using Photoshop, CapCut, Alight Motion, and Canva, and manage content pages on Instagram.",
      "As a team leader, I enjoy collaborating on projects, breaking down complex tasks, and using prompt engineering with AI assistants to accelerate prototypes into production-ready software.",
    ],
    traits: [
      { label: 'Focus Style', value: 'Introvert Deep Work & Problem Solving' },
      { label: 'Leadership', value: 'Team Leadership & Project Direction' },
      { label: 'Engineering', value: 'Full Stack Web & AI-Assisted Dev' },
      { label: 'Creative', value: 'UI/UX Design & Video Editing' },
    ],
    pillars: [
      {
        icon: 'code',
        title: 'Full Stack Engineering',
        desc: 'Writing clean code across HTML, CSS, JavaScript, Python, C, C++, Java, and React to build practical web applications.',
      },
      {
        icon: 'ai',
        title: 'Prompt Engineering & AI',
        desc: 'Mastering prompt design, multi-modal LLMs (Gemini, Claude, GPT), and agentic workflows to ship faster.',
      },
      {
        icon: 'layout',
        title: 'UI/UX Design (Figma)',
        desc: 'Designing user-first layouts, modern design tokens, interactive wireframes, and aesthetic glassmorphism prototypes.',
      },
      {
        icon: 'sparkles',
        title: 'Visual & Motion Creation',
        desc: 'Editing cinematic & lyrical videos in CapCut and Alight Motion, crafting posters in Photoshop & Canva, and producing memes.',
      },
    ],
  },

  creativeHub: {
    title: 'Creative Lab & Content Creation',
    subtitle: 'My visual side: video editing, motion design, music curation, and internet culture.',
    channels: [
      {
        name: 'asp.offx',
        platform: 'Instagram Lyrical Page',
        tag: 'Music & Lyrical Edits',
        desc: 'Dedicated to song curation and aesthetic lyrical video edits with synchronized typography and atmospheric visual motion.',
        tools: ['CapCut', 'Alight Motion', 'Canva'],
        link: 'https://www.instagram.com/asp.offx',
        accent: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      },
      {
        name: 'adangaathavanda',
        platform: 'Instagram Meme Page',
        tag: 'College & School Memes',
        desc: 'Relatable, viral campus humor, school & college meme reels that bring daily smiles and high community engagement.',
        tools: ['CapCut', 'Photoshop', 'Viral Editing'],
        link: 'https://www.instagram.com/adangaathavanda',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      },
      {
        name: '@a.jx.y',
        platform: 'Personal Instagram',
        tag: 'Personal & Creative Updates',
        desc: 'My personal space for life updates, behind-the-scenes building, creative experiments, and everyday moments.',
        tools: ['Photography', 'Aesthetics', 'Stories'],
        link: 'https://www.instagram.com/a.jx.y',
        accent: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      },
    ],
    designSkills: [
      { name: 'Figma', role: 'UI/UX Design & Prototyping', level: 'Advanced' },
      { name: 'Photoshop', role: 'Photo Manipulation & Graphics', level: 'Skilled' },
      { name: 'CapCut', role: 'Short-Form Reel & Video Editing', level: 'Expert' },
      { name: 'Alight Motion', role: 'Keyframing & Motion Graphics', level: 'Skilled' },
      { name: 'Canva', role: 'Social Media & Poster Layouts', level: 'Skilled' },
    ],
  },

  projects: [
    {
      id: 'cogniflow',
      title: 'CogniFlow AI',
      category: 'ai',
      badge: 'Featured AI Project',
      purpose:
        "An adaptive revision coach that dynamically reshapes a student's study calendar around exam countdowns, topic difficulty, and quiz mistakes.",
      tech: 'React, Vite, Tailwind CSS, Node.js, Express, MongoDB',
      techList: ['React', 'Node.js', 'Express', 'MongoDB', 'Dual AI'],
      aiTools: 'Dual-engine AI (Google Gemini + OpenAI) + Prompt Engineering',
      link: '',
      repo: 'https://github.com/ajaymanikandanoff/CogniFlow-AI',
      featured: true,
    },
    {
      id: 'handwritten-notes',
      title: 'Handwritten Notes Study Assistant',
      category: 'ai',
      badge: 'Computer Vision',
      purpose:
        'Reads camera photos of handwritten notes and turns them into step-by-step breakdowns, interactive quizzes, and a voice-interactive Q&A with source verification.',
      tech: 'Python, OCR / Computer Vision, Web Speech API',
      techList: ['Python', 'Gemini Vision', 'Computer Vision', 'Web Speech API'],
      aiTools: 'Google Gemini Vision + Prompt Architecture',
      link: '',
      repo: 'https://github.com/ajaymanikandanoff/Handwritten-Notes-study-assistant',
      featured: true,
    },
    {
      id: 'campus-parking',
      title: 'Campus Parking Management System',
      category: 'fullstack',
      badge: 'Full Stack Java',
      purpose:
        'A full-stack parking management system with slot reservations, booking workflows, and an administrative dashboard tracking occupied vs. vacant slots in real time.',
      tech: 'Java 17, Spring Boot 3, Spring Data JPA, H2 Database, Maven',
      techList: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'H2 Database', 'REST APIs'],
      aiTools: 'AI-assisted architecture & data modeling',
      link: '',
      repo: 'https://github.com/ajaymanikandanoff/campus-parking',
      featured: true,
    },
    {
      id: 'pdf-machan',
      title: 'PDF Machan',
      category: 'tools',
      badge: 'Live Utility',
      purpose:
        'A fast, ad-free PDF toolkit that processes files entirely on-device — 100% private with nothing ever uploaded or sent outside your browser.',
      tech: 'HTML5, CSS3, JavaScript (ES6+), Canvas API',
      techList: ['JavaScript', 'HTML5', 'CSS3', 'Privacy-First', 'Client-Side'],
      aiTools: 'AI-assisted UX & core logic',
      link: 'https://ajaymanikandanoff.github.io/pdfmachan',
      repo: '',
      featured: true,
    },
    {
      id: 'jx-cgpa',
      title: 'JX CGPA Calculator',
      category: 'tools',
      badge: 'Live Academic Tool',
      purpose:
        'A semester CGPA calculator designed for university students — enter course marks to receive real-time grade conversions and cumulative GPA calculations.',
      tech: 'HTML5, Responsive CSS3, Vanilla JavaScript',
      techList: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
      aiTools: 'AI-assisted algorithm design',
      link: 'https://ajaymanikandanoff.github.io/jxmarkcalc/',
      repo: '',
      featured: false,
    },
    {
      id: 'fact-checker',
      title: 'AI Fact-Checking System',
      category: 'ai',
      badge: 'In Active Development',
      purpose:
        'An intelligent system for real-time claim validation, cross-referencing statements with knowledge graphs and semantic fact verification.',
      tech: 'Python, Natural Language Processing, LLM APIs',
      techList: ['Python', 'NLP', 'Knowledge Graphs', 'Prompt Engineering'],
      aiTools: 'Dual-agent verification workflow',
      link: '',
      repo: '',
      featured: false,
    },
  ],

  skillCategories: [
    {
      name: 'Programming & Web Dev',
      icon: 'code',
      description: 'Core programming languages & responsive web technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Python', 'C', 'C++', 'Java (17+)', 'React', 'Node.js'],
    },
    {
      name: 'Prompt Engineering & AI',
      icon: 'brain',
      description: 'Leveraging AI engines and agentic systems to build products',
      skills: ['Prompt Engineering', 'Google Gemini Vision', 'OpenAI API', 'Antigravity IDE', 'Claude 3.7', 'AI Pair-Programming'],
    },
    {
      name: 'UI/UX & Design Tools',
      icon: 'layout',
      description: 'Interface design, wireframing & graphic layouts',
      skills: ['Figma (UI/UX)', 'Adobe Photoshop', 'Canva', 'Design Systems', 'Prototyping', 'Visual Hierarchy'],
    },
    {
      name: 'Video Editing & Motion',
      icon: 'sparkles',
      description: 'Short-form reel creation, motion graphics & audio sync',
      skills: ['CapCut', 'Alight Motion', 'Lyrical Typography', 'Audio/Video Sync', 'Motion Keyframing', 'Color Grading'],
    },
    {
      name: 'Backend & Databases',
      icon: 'database',
      description: 'Server logic, APIs & data persistence',
      skills: ['Spring Boot 3', 'RESTful APIs', 'Express', 'MongoDB', 'H2 Database', 'Maven'],
    },
    {
      name: 'Leadership & Soft Skills',
      icon: 'badge-check',
      description: 'Collaboration, mindset & problem-solving strengths',
      skills: ['Team Leadership', 'Introvert Deep Work', 'Fast Self-Learner', 'Creative Storytelling', 'Project Coordination'],
    },
  ],

  tools: [
    {
      name: 'Antigravity',
      role: 'Agentic Development Platform',
      desc: 'Autonomous agentic coding, multi-file synthesis, and rapid prototype generation.',
      tag: 'AI Workflow',
    },
    {
      name: 'Claude & Gemini',
      role: 'Reasoning & Vision Engines',
      desc: 'Pair-programming partners for algorithm debugging, API design, and OCR document extraction.',
      tag: 'LLM & Vision',
    },
    {
      name: 'VS Code & Git',
      role: 'Core Engineering Suite',
      desc: 'Version control, Git branch workflows, workspace automation, and modern code navigation.',
      tag: 'Dev Environment',
    },
  ],

  certifications: [
    { name: 'C Programming', level: 'Procedural Logic & Memory', issuer: 'Verified Coursework', tag: 'Core Logic' },
    { name: 'C++ Programming', level: 'Object-Oriented Programming & DSA', issuer: 'Verified Coursework', tag: 'OOP & DSA' },
    { name: 'Python for Developers', level: 'Scripting, Automation & AI Tools', issuer: 'Verified Coursework', tag: 'AI & Data' },
    { name: 'JavaScript (Modern ES6+)', level: 'Dynamic Web Interfaces & DOM', issuer: 'Verified Coursework', tag: 'Frontend' },
    { name: 'HTML5 & CSS3', level: 'Responsive Layouts & Semantic Web', issuer: 'Foundation', tag: 'Web Core' },
    { name: 'Java Programming', level: 'Backend Systems & Spring Boot Intro', issuer: 'Verified Coursework', tag: 'Backend' },
  ],

  contact: {
    heading: "Let's Connect & Create",
    subheading:
      "Whether you're looking for an aspiring full-stack developer, want to collaborate on an AI project, or talk about design, video editing & music — I'd love to hear from you.",
    email: 'ajaymanikandanoff@gmail.com',
    links: [
      {
        label: 'GitHub',
        handle: 'ajaymanikandanoff',
        href: 'https://github.com/ajaymanikandanoff',
        desc: 'Explore code repositories & full-stack projects',
      },
      {
        label: 'LinkedIn',
        handle: 'ajaymanikandan-in',
        href: 'https://linkedin.com/in/ajaymanikandan-in',
        desc: 'Professional network & career updates',
      },
      {
        label: 'Personal Instagram',
        handle: '@a.jx.y',
        href: 'https://www.instagram.com/a.jx.y',
        desc: 'Life, building journey & everyday updates',
      },
      {
        label: 'Lyrical Page',
        handle: '@asp.offx',
        href: 'https://www.instagram.com/asp.offx',
        desc: 'Aesthetic song curation & lyrical video edits',
      },
      {
        label: 'Meme Community',
        handle: '@adangaathavanda',
        href: 'https://www.instagram.com/adangaathavanda',
        desc: 'Relatable college & school humor reels',
      },
      {
        label: 'Direct Email',
        handle: 'ajaymanikandanoff@gmail.com',
        href: 'mailto:ajaymanikandanoff@gmail.com',
        desc: 'Send an inquiry or project proposal',
      },
    ],
  },
}
