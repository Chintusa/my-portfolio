import { Project, Service, Skill, TimelineItem } from '../types';

export const personalInfo = {
  name: 'Jhasaketan',
  fullName: 'Jhasaketan Sa',
  role: 'Full Stack Developer',
  subRole: 'MCA Student | Problem Solver',
  headline: 'I build modern, scalable and user-friendly web applications that solve real-world problems. Passionate about technology, open to opportunities, and always learning.',
  aboutHeading: 'Turning Ideas into Impact',
  aboutText: "I'm Jhasaketan Sa, an MCA student at ITER, SOA University (Class of 2026), passionate about building web applications, exploring new technologies, and solving real-world problems. I enjoy working with modern tech stacks like Java, Spring Boot, React, and cloud platforms. I'm a quick learner, a team player, and always excited to take on new challenges.",
  education: 'MCA (2024 – 2026)',
  university: 'ITER, SOA University',
  location: 'Bhubaneswar, Odisha',
  motto: 'Code | Learn | Build | Grow',
  email: 'jhasketansa86@gmail.com',
  github: 'https://github.com/Chintusa',
  linkedin: 'https://linkedin.com/in/jhasaketan-sa-a999bb219/',
  instagram: 'https://www.instagram.com/jhasaketan_sa/',
  twitter: 'https://twitter.com/',
  resume: '#',
  profileHeroImage: '/images/profile-about.jpg',
  profileAboutImage: '/images/profile-hero.jpg',
  profileImage: '/images/profile-about.jpg',
};

export const stats = [
  { label: 'Projects Built', value: '10+', icon: 'Sparkles' },
  { label: 'Technologies', value: 'Tools &', icon: 'Layers' },
  { label: 'Years of Experience\n(Freelance & Internship)', value: '3+', icon: 'Cpu' },
  { label: 'Opportunities', value: 'Open to', icon: 'Send' },
];

export interface FeaturedTool {
  id: string;
  name: string;
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  iconType: string;
}

export const featuredTools: FeaturedTool[] = [
  {
    id: 'java',
    name: 'Java',
    category: 'Core Backend',
    color: '#f89820',
    bgColor: 'rgba(248, 152, 32, 0.1)',
    borderColor: 'rgba(248, 152, 32, 0.25)',
    glowColor: 'rgba(248, 152, 32, 0.15)',
    iconType: 'java'
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'Framework',
    color: '#6db33f',
    bgColor: 'rgba(109, 179, 63, 0.1)',
    borderColor: 'rgba(109, 179, 63, 0.25)',
    glowColor: 'rgba(109, 179, 63, 0.15)',
    iconType: 'spring'
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend UI',
    color: '#61dafb',
    bgColor: 'rgba(97, 218, 251, 0.1)',
    borderColor: 'rgba(97, 218, 251, 0.25)',
    glowColor: 'rgba(97, 218, 251, 0.15)',
    iconType: 'react'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    color: '#f7df1e',
    bgColor: 'rgba(247, 223, 30, 0.1)',
    borderColor: 'rgba(247, 223, 30, 0.25)',
    glowColor: 'rgba(247, 223, 30, 0.15)',
    iconType: 'javascript'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Relational DB',
    color: '#00758f',
    bgColor: 'rgba(0, 117, 143, 0.1)',
    borderColor: 'rgba(0, 117, 143, 0.25)',
    glowColor: 'rgba(0, 117, 143, 0.15)',
    iconType: 'mysql'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & AI',
    color: '#3776ab',
    bgColor: 'rgba(55, 118, 171, 0.1)',
    borderColor: 'rgba(55, 118, 171, 0.25)',
    glowColor: 'rgba(55, 118, 171, 0.15)',
    iconType: 'python'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    color: '#f05032',
    bgColor: 'rgba(240, 80, 50, 0.1)',
    borderColor: 'rgba(240, 80, 50, 0.25)',
    glowColor: 'rgba(240, 80, 50, 0.15)',
    iconType: 'git'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud Services',
    color: '#ff9900',
    bgColor: 'rgba(255, 153, 0, 0.1)',
    borderColor: 'rgba(255, 153, 0, 0.25)',
    glowColor: 'rgba(255, 153, 0, 0.15)',
    iconType: 'aws'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Modern Styling',
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    borderColor: 'rgba(6, 182, 212, 0.25)',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    iconType: 'tailwind'
  },
];

export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Modern, reactive web applications built with React, TypeScript, and clean modular component architectures.',
    icon: 'Globe',
    details: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs']
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Scalable backend architectures, secure RESTful microservices, and high-performance database schemas.',
    icon: 'Database',
    details: ['Java', 'Spring Boot', 'Python', 'Django']
  },
  {
    id: 'ai-ml',
    title: 'Machine Learning & AI',
    description: 'Data preprocessing, model training pipelines, geospatial image classification, and smart automated workflows.',
    icon: 'Brain',
    details: ['PyTorch', 'Data Pipelines', 'Geospatial ML', 'Scikit-learn']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & Database Systems',
    description: 'Optimized relational queries, containerized environments, secure authentication, and cloud deployments.',
    icon: 'Cpu',
    details: ['MySQL', 'PostgreSQL', 'Docker', 'AWS']
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'languages', level: 92 },
  { name: 'Python', category: 'languages', level: 90 },
  { name: 'JavaScript', category: 'languages', level: 88 },
  { name: 'TypeScript', category: 'languages', level: 85 },
  { name: 'SQL', category: 'languages', level: 88 },

  // Backend
  { name: 'Spring Boot', category: 'backend', level: 90 },
  { name: 'Spring Cloud / MVC', category: 'backend', level: 84 },
  { name: 'Django / DRF', category: 'backend', level: 88 },
  { name: 'Hibernate / JPA', category: 'backend', level: 86 },
  { name: 'RESTful Microservices', category: 'backend', level: 88 },

  // Databases
  { name: 'MySQL', category: 'backend', level: 90 },
  { name: 'PostgreSQL', category: 'backend', level: 86 },
  { name: 'MongoDB', category: 'backend', level: 80 },

  // Frontend
  { name: 'React', category: 'frontend', level: 88 },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 94 },
  { name: 'Tailwind CSS', category: 'frontend', level: 90 },
  { name: 'Three.js / WebGL', category: 'frontend', level: 80 },

  // Tools & Cloud
  { name: 'Git & GitHub', category: '3d-creative', level: 92 },
  { name: 'Docker', category: '3d-creative', level: 80 },
  { name: 'AWS Cloud', category: '3d-creative', level: 78 },
  { name: 'Linux OS', category: '3d-creative', level: 84 },
  { name: 'VS Code & Eclipse', category: '3d-creative', level: 90 },
];

export const timeline: TimelineItem[] = [
  {
    id: 'exp-1',
    year: '09/2025 – 02/2026',
    role: 'Backend Developer Intern',
    company: 'Dream Wave Innovation, Bhubaneswar',
    description: 'Developed and maintained scalable backend services and RESTful APIs using Python, Django, and Django REST Framework. Designed database models, optimized query performance, and implemented secure authentication.',
    tags: ['Python', 'Django', 'DRF', 'API Optimization', 'Git', 'Agile'],
  },
  {
    id: 'exp-2',
    year: '01/2024 – 04/2024',
    role: 'Implementation Executive',
    company: 'Shivam Medisoft Services Pvt Ltd, Hyderabad',
    description: 'Managed implementation and support for 50+ clients, enhancing onboarding workflows and resolving client technical challenges with 40% increased resolution speed.',
    tags: ['Client Onboarding', 'Technical Support', 'Issue Resolution', 'Product Delivery'],
  },
  {
    id: 'exp-3',
    year: '2021 – 2023',
    role: 'Subject Matter Expert – Computer Science',
    company: 'Chegg',
    description: 'Provided academic guidance and structured problem-solving in Data Structures, Algorithms, Object-Oriented Programming, and Java core fundamentals.',
    tags: ['Computer Science', 'Algorithms', 'Java', 'Data Structures', 'Technical Mentorship'],
  },
  {
    id: 'edu-1',
    year: '10/2024 – 06/2026',
    role: 'Master of Computer Applications (MCA)',
    company: 'Institute of Technical Education and Research (ITER), SOA University, Bhubaneswar',
    description: 'Coursework in Advanced Software Engineering, Cloud Computing, Database Architectures, and Algorithms.',
    tags: ['MCA', 'Software Engineering', 'ITER', 'SOA University'],
  },
  {
    id: 'edu-2',
    year: '06/2020 – 05/2023',
    role: "Bachelor's Degree in Computer Science (B.Sc)",
    company: 'Government Autonomous College, Rourkela, Odisha',
    description: 'Foundations in Object-Oriented Programming, Database Management Systems, and Discrete Mathematics.',
    tags: ['B.Sc Computer Science', 'Foundations', 'OOP', 'Data Structures'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-luxury-lens',
    title: 'Luxury Lens Studio (Lumière)',
    description: 'An editorial luxury destination wedding photography and cinematography showcase with noir-gold aesthetic.',
    longDescription: 'Lumière Luxury Lens Studio is a world-class editorial photography and cinematography showcase platform engineered for luxury destination weddings across Paris, Lake Como, Udaipur, and Bali. Designed with a bespoke noir-and-champagne gold aesthetic, it features 60fps Framer Motion transitions, full-bleed film reels, client story showcases, and an interactive consultation booking interface.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Vite'],
    githubUrl: 'https://github.com/Chintusa/Luxury-Lens-Studio',
    liveUrl: 'https://chintusa.github.io/Luxury-Lens-Studio/',
    featured: true,
    category: 'frontend',
    categoryLabel: 'Luxury Showcase',
    role: 'Frontend Architect & UI Designer',
    primaryRuntime: 'React 19 / TypeScript / Vite',
    databaseCloud: 'GitHub Pages CI/CD & Netlify',
    highlights: [
      'Crafted bespoke noir-gold editorial typography and responsive glassmorphic cards with Radix UI primitives.',
      'Integrated 60fps Framer Motion scroll-driven reveals and fluid cinematic transitions.',
      'Constructed responsive multi-category photo/film reel galleries with modal viewports and consultation forms.',
      'Deployed via automated GitHub Actions workflow with zero layout shift and 100/100 Lighthouse performance.'
    ]
  },
  {
    id: 'proj-odisha-cover',
    title: 'Odisha Cover Studio',
    description: 'A specialized cultural lifestyle e-commerce and mobile cover customization studio showcasing Sambalpuri Ikat & Jagannath art.',
    longDescription: 'Odisha Cover Studio is an authentic lifestyle and mobile accessories digital platform celebrating Odishan culture and heritage. It features high-resolution Sambalpuri, Jagannath, and tribal artwork collections, an interactive custom printing inquiry flow, mobile back lamination appointment booking, and a dedicated wholesale partner program with 1-click WhatsApp checkout.',
    image: 'https://images.unsplash.com/photo-1598414726047-c0af34b33ab0?w=1000&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'E-Commerce', 'WhatsApp API'],
    githubUrl: 'https://github.com/Chintusa/Odisha-Cover-Studio',
    liveUrl: 'https://chintusa.github.io/Odisha-Cover-Studio/',
    featured: true,
    category: 'frontend',
    categoryLabel: 'Cultural E-Commerce',
    role: 'Lead Frontend Engineer',
    primaryRuntime: 'React 19 / TypeScript / Vite',
    databaseCloud: 'GitHub Pages & WhatsApp Business API',
    highlights: [
      'Engineered interactive Sambalpuri Ikat, Jagannath, and tribal pattern mobile skin customizer.',
      'Integrated 1-click instant WhatsApp checkout dispatching item SKU, phone model, and delivery address.',
      'Built mobile back lamination appointment booking system with real-time slot selection.',
      'Designed custom cultural vector icons and SVG branding with sub-second asset hydration.'
    ]
  },
  {
    id: 'proj-luxury-hospitality',
    title: 'AURA Sanctuary & Private Residences',
    description: 'An ultra-luxury hospitality destination web app featuring cliffside private villa showcases, Michelin dining, and concierge booking.',
    longDescription: 'AURA Sanctuary & Private Residences is a flagship ultra-luxury hospitality web platform designed for discerning global travelers. Features interactive cliffside villa tours, curated seasonal experience itineraries, holistic spa wellness booking, Michelin-starred fine dining menus, and an automated private concierge inquiry channel.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Hospitality'],
    githubUrl: 'https://github.com/Chintusa/luxury-hospitality',
    liveUrl: 'https://chintusa.github.io/luxury-hospitality/',
    featured: true,
    category: 'fullstack',
    categoryLabel: 'Luxury Hospitality',
    role: 'Full Stack Web Engineer',
    primaryRuntime: 'React 19 / TypeScript / Vite',
    databaseCloud: 'GitHub Pages & Cloud Infrastructure',
    highlights: [
      'Interactive luxury private villa showcase with full-bleed photography and virtual walk-throughs.',
      'Michelin-starred restaurant culinary menu showcase and private dining reservation desk.',
      'Holistic wellness spa treatment scheduler and seasonal experience itineraries.',
      'Concierge inquiry channel with automated form validation and responsive mobile layouts.'
    ]
  },
  {
    id: 'proj-pos-billing',
    title: 'Smart Bill — POS & Retail Billing App',
    description: 'A lightning-fast, offline-capable retail point-of-sale system built for Samaleswari Bastralaya.',
    longDescription: 'Smart Bill is a robust, offline-first enterprise retail billing and POS system developed for busy retail and garment stores. Built by CodeNPixels, it features instant barcode/item entry, automated multi-rate GST tax compliance, keyboard-driven express checkout (F2/Ctrl+P), instant thermal printer output, PDF generation, and direct 1-tap WhatsApp invoice delivery.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1000&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'POS / Billing', 'Netlify'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: 'https://samaleswari-bastralay-billing.netlify.app/',
    featured: true,
    category: 'fullstack',
    categoryLabel: 'POS & Billing SaaS',
    role: 'Lead Full Stack Engineer',
    primaryRuntime: 'React 19 / TypeScript / Vite',
    databaseCloud: 'Cloud Data Storage & Netlify',
    highlights: [
      'Engineered an ultra-fast retail checkout workflow with instant sub-second barcode and product search.',
      'Implemented automated GST calculation, discounts engine, and customized printable thermal invoice receipts.',
      'Designed a responsive offline-resilient architecture with state caching and real-time inventory ledger updates.',
      'Integrated 1-tap WhatsApp invoice delivery and PDF generation for customers.'
    ]
  },
  {
    id: 'proj-genspark',
    title: 'GenSpark',
    description: 'Microservices based scalable application with modern architecture.',
    longDescription: 'GenSpark is an enterprise-grade scalable microservices application engineered for high-throughput workload orchestration. Featuring decoupled services, automated routing via Spring Cloud Gateway, and distributed caching.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Spring Cloud', 'MySQL', 'Java 17'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: '#',
    featured: true,
    category: 'fullstack',
    categoryLabel: 'Microservices',
    role: 'Lead Backend Architect',
    primaryRuntime: 'Spring Cloud / Java 17 / React',
    databaseCloud: 'MySQL & Redis Cache',
    highlights: [
      'Architected decentralized microservice modules coordinated through Spring Cloud edge routing.',
      'Implemented distributed Redis caching layers achieving sub-30ms response latencies.',
      'Engineered responsive analytical dashboards in React with dynamic state updates.',
      'Configured containerized Docker workflows for seamless scaling.'
    ]
  },
  {
    id: 'proj-eonverse',
    title: 'Eonverse Time Capsule',
    description: 'An immersive 3D digital memory preservation platform rendered with WebGL and Three.js.',
    longDescription: 'Eonverse Time Capsule is an immersive 3D digital memory preservation platform. Users store digital artifacts, messages, and milestones inside interactive celestial orbits rendered through WebGL and Three.js, backed by secure Spring Boot APIs.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Three.js', 'Spring Boot', 'WebGL'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: '#',
    featured: true,
    category: '3d-webgl',
    categoryLabel: '3D WebGL',
    role: 'Creative Developer & Architect',
    primaryRuntime: 'Three.js / React / Spring Boot',
    databaseCloud: 'Cloud Asset Storage & MySQL',
    highlights: [
      'Developed 3D interactive celestial scene using Three.js and React Three Fiber.',
      'Implemented custom shaders, particle constellations, and smooth camera transitions.',
      'Constructed secure backend endpoints in Spring Boot for time-locked asset decryption.',
      'Achieved 60fps rendering performance with GPU memory optimization.'
    ]
  },
  {
    id: 'proj-harry-visuals',
    title: 'Harry Visuals — Actor & Model Portfolio',
    description: 'A high-octane personal branding platform for Sambalpuri film star Harry (250M+ views, 147K+ fans).',
    longDescription: 'Harry Visuals is a high-impact personal media portfolio engineered for leading Sambalpuri actor, dancer, and fitness influencer Harry. It features categorized editorial galleries (Fashion, Fitness, Expressions, Calisthenics), integrated high-stream YouTube music video showcases with real-time analytics, and an integrated booking and commercial representation desk.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'YouTube API', 'Netlify'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: 'https://harry-visuals.netlify.app/',
    featured: false,
    category: 'frontend',
    categoryLabel: 'Celebrity Media Platform',
    role: 'Frontend Developer & UI Designer',
    primaryRuntime: 'React / Vite / Tailwind CSS',
    databaseCloud: 'Netlify Edge & YouTube Data API',
    highlights: [
      'Curated high-resolution editorial photoshoot galleries with responsive lightboxes and categorized filters.',
      'Embedded YouTube music video reels and performance analytics metrics across 250M+ views.',
      'Commercial collaboration, sponsorship, and brand inquiry booking desk with validation.',
      'Fully responsive touch-friendly layout built for mobile devices and social traffic.'
    ]
  },
  {
    id: 'proj-alambana',
    title: 'Alambana Home Services Platform',
    description: 'A multi-service on-demand marketplace connecting households with verified local service professionals.',
    longDescription: 'Alambana is a community-focused gig economy and household services marketplace platform. It allows users to quickly search, hire, and schedule trusted local professionals for home tutoring, plumbing, car washing, yoga instruction, and housekeeping, supported by dedicated dual registration portals for customers and gig workers.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST API', 'Netlify'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: 'https://alambana.netlify.app/',
    featured: false,
    category: 'fullstack',
    categoryLabel: 'Gig Economy Marketplace',
    role: 'Full Stack Web Developer',
    primaryRuntime: 'HTML5 / CSS3 / JavaScript ES6',
    databaseCloud: 'Netlify Hosting & REST API',
    highlights: [
      'Developed multi-service directory covering home tutoring, plumbing, car cleaning, and yoga instruction.',
      'Built dual onboarding portals for customer hiring and professional gig-worker applications.',
      'Implemented location-aware service filtering and appointment scheduling.',
      'Deployed on Netlify with automated CI/CD and optimized asset compression.'
    ]
  },
  {
    id: 'proj-twogoco',
    title: 'TwoGoCo Travel Portal',
    description: 'A modern travel and booking interface designed for seamless holiday and tour package exploration.',
    longDescription: 'TwoGoCo Clone is a modern travel and booking interface designed for seamless holiday and tour package exploration. It features responsive layouts, clean visual hierarchy, smooth navigation, and professional section-based design with zero layout shift.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Vercel'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: 'https://twogoco-clone-nohjy699e-prangyanjali-mehers-projects.vercel.app/',
    featured: false,
    category: 'frontend',
    categoryLabel: 'Travel & Tourism',
    role: 'Frontend UI Developer',
    primaryRuntime: 'React / Vite / Tailwind CSS',
    databaseCloud: 'Vercel Edge Network',
    highlights: [
      'Interactive tour package showcase cards with pricing and destination highlights.',
      'High-performance responsive image grids optimized for mobile and desktop screens.',
      'Smooth section-based navigation and call-to-action booking flows.',
      'Deployed globally on Vercel with automated Git integration.'
    ]
  },
  {
    id: 'proj-mocktail-bar',
    title: 'Artisan Mocktail & Bistro Bar',
    description: 'A beverage brand website with interactive drink menus, promotional carousels, and table reservations.',
    longDescription: 'Artisan Mocktail Bar is a food and beverage website designed for a luxury refreshment brand. Includes fluid animations, menu carousels, customer review highlights, and an online table reservation module.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'Responsive UI', 'Vercel'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: 'https://mocktailbar-beta.vercel.app/',
    featured: false,
    category: 'frontend',
    categoryLabel: 'Food & Beverage',
    role: 'Frontend Web Developer',
    primaryRuntime: 'React / Tailwind CSS / Vite',
    databaseCloud: 'Vercel Edge Network',
    highlights: [
      'Interactive drink and beverage menu with categorized visual items and ingredient tags.',
      'Smooth micro-interactions and seasonal promotional carousels.',
      'Table reservation request and inquiry flow with responsive layout.',
      'Mobile-first responsive design tailored for cafe and restaurant patrons.'
    ]
  },
  {
    id: 'proj-quotient',
    title: 'Quotient',
    description: 'Scalable RESTful APIs using Python, Django, and Django REST Framework for task, workflow, and user management.',
    longDescription: 'Designed and developed scalable RESTful APIs using Python, Django, and Django REST Framework for task, workflow, and user management. Architected relational database schemas using Django ORM and implemented JWT-based authentication.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Django', 'Django REST Framework', 'JWT Auth', 'PostgreSQL'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: '#',
    featured: false,
    category: 'fullstack',
    categoryLabel: 'Python / Django',
    role: 'Lead Backend Architect',
    primaryRuntime: 'Python 3.10 / Django / DRF',
    databaseCloud: 'PostgreSQL Database',
    highlights: [
      'Architected high-performance Django REST Framework backend structures utilizing secure JWT authentications.',
      'Designed detailed relational schemas in PostgreSQL and refined index parameters for lightning-fast sub-50ms API responses.',
      'Engineered workflow and task pipeline engines optimized with lazy query execution to prevent standard N+1 bottlenecks.',
      'Created fully containerized development configurations using multi-stage Docker profiles.'
    ]
  },
  {
    id: 'proj-lulc',
    title: 'LULC (Land Use Land Cover Classification)',
    description: 'A machine learning solution for satellite image classification using Python, data processing pipelines, and geospatial analysis.',
    longDescription: 'Developed a machine learning solution for satellite image classification using Python and data processing pipelines. Performed image preprocessing, feature engineering, model training, and evaluation for accurate land-cover prediction.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Machine Learning', 'Data Pipelines', 'Geospatial Data'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: '#',
    featured: false,
    category: 'ml-ai',
    categoryLabel: 'AI / ML',
    role: 'ML & Geospatial Engineer',
    primaryRuntime: 'Python / PyTorch / Rasterio',
    databaseCloud: 'Geospatial Data Files',
    highlights: [
      'Processed large-scale satellite and remote-sensing data through automated PyTorch transformation streams.',
      'Developed robust classification models optimizing convolution filter weights to isolate specific cover regions.',
      'Achieved high accuracy metrics on complex geospatial mapping domains using custom feature maps.',
      'Constructed RESTful database APIs to serve classification coordinates for client-facing tools.'
    ]
  },
  {
    id: 'proj-school-mgmt',
    title: 'School Management System',
    description: 'A web-based Java J2EE application to manage student records, staff, and administrative operations.',
    longDescription: 'Engineered a highly stable, web-based School Management System leveraging robust Java J2EE enterprise technologies. Designed detailed systems to track, manage, and audit student data records, academic registers, and staff workloads.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    tags: ['Java', 'J2EE', 'MySQL', 'JSP', 'Servlets'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: '#',
    featured: false,
    category: 'fullstack',
    categoryLabel: 'Java / J2EE',
    role: 'Full Stack Java Developer',
    primaryRuntime: 'Java 8 / J2EE Enterprise',
    databaseCloud: 'MySQL Relational DB',
    highlights: [
      'Designed and developed school records tracking databases using strict relational MySQL configurations.',
      'Constructed dynamic, reusable view modules using JSP custom tags and Servlets backend routing patterns.',
      'Engineered administrative dashboards with session tracking and access restriction layers for robust security.'
    ]
  },
  {
    id: 'proj-movie-tracker',
    title: 'Movie Tracker API',
    description: 'A RESTful Spring Boot API to track, manage, and retrieve movie details with secure endpoints and data storage.',
    longDescription: 'Built a RESTful web service using Spring Boot, Spring Data JPA, and MySQL with complete CRUD functionality. Implemented layered architecture, exception handling, validation, and service abstraction following OOP principles.',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Maven'],
    githubUrl: 'https://github.com/Chintusa',
    liveUrl: '#',
    featured: false,
    category: 'fullstack',
    categoryLabel: 'Java / Spring Boot',
    role: 'Backend API Developer',
    primaryRuntime: 'Java 17 / Spring Boot',
    databaseCloud: 'MySQL Relational DB',
    highlights: [
      'Engineered high-throughput relational services via Spring Boot and Hibernate ORM patterns.',
      'Formulated clean service layers, generic response wrappers, and centralized exception handling pipelines.',
      'Reduced MySQL query overhead using lazy associations and tuned JPA cache strategies.'
    ]
  }
];
