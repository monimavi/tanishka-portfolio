export type ProjectPreviewVariant =
  | 'publishing'
  | 'cms'
  | 'news'
  | 'admin'
  | 'registration'
  | 'event-admin'
  | 'mobile-app'
  | 'seo';

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  confidential?: boolean;
  liveUrl?: string;
  preview: ProjectPreviewVariant;
  previewImage?: string;
};

export const siteConfig = {
  name: 'Tanishka',
  role: 'Full Stack Web Developer',
  email: 'itsmavitanishka@gmail.com',
  phone: '+91 93197 60877',
  phoneHref: 'tel:+919319760877',
  siteUrl: 'https://tanishka-portfolio-gamma.vercel.app',
  profileImage: '/images/tanishka-hero-dark.png',
  aboutImage: '/images/tanishka-about-white.png',
  workImage: '/images/tanishka-work-standing.png',
  social: {
    github: 'https://github.com/monimavi',
    linkedin: '#',
    freelancer: '#',
  },
};

export const skills = [
  'PHP',
  'MySQL',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Next.js',
  'React',
  'Node.js',
  'REST APIs',
  'Admin Dashboards',
  'CMS Integration',
  'Payment Integrations',
  'Registration Systems',
  'Responsive UI',
  'SEO Implementation',
  'Deployment & Debugging',
];

export const projects: Project[] = [
  {
    slug: 'industrial-outlook-publishing-platform',
    title: 'Industrial Outlook — Digital Publishing Website',
    eyebrow: 'Live Publishing Platform',
    description:
      'A content-rich industry media website covering news, reports, interviews, sector pages and editorial content with responsive layouts, CMS/API connectivity and technical SEO.',
    problem:
      'A high-volume publishing website needs fast editorial updates, consistent article layouts, clean routing, reliable media handling and strong search/social metadata without making content operations difficult.',
    solution:
      'Worked across the public website, content structures and CMS integration to improve responsive publishing flows, article presentation, SEO metadata, routing and day-to-day production reliability.',
    features: [
      'Dynamic news, reports and interview pages',
      'News, E-Desk, Voice of Industry and sector content workflows',
      'CMS/API-connected publishing',
      'Meta titles, descriptions, canonical tags and Open Graph metadata',
      'Responsive article and media layouts',
      'Hosting, deployment and production troubleshooting',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'Strapi CMS', 'REST APIs', 'SEO'],
    liveUrl: 'https://industrialoutlook.in',
    preview: 'publishing',
  },
  {
    slug: 'industrial-outlook-custom-cms',
    title: 'Industrial Outlook — Custom CMS & Admin Panel',
    eyebrow: 'Private / Internal Business Application',
    description:
      'A newsroom-style editorial admin panel for content publishing, media management, SEO controls, quick actions and structured operational workflows.',
    problem:
      'The editorial team needed a more controlled and flexible content-management environment capable of supporting publishing, media, SEO and approval workflows from one admin interface.',
    solution:
      'Worked on the custom CMS ecosystem and its integration with the public website, including admin workflows, database/API coordination, deployment and production debugging.',
    features: [
      'Admin dashboard and structured content management',
      'News, reports, interviews and voice-of-industry workflows',
      'Media library, categories, tags and authors management',
      'SEO fields and publishing controls',
      'Roles, permissions and approval workflows',
      'Public website integration and deployment support',
    ],
    tech: ['Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL / Neon', 'Prisma'],
    confidential: true,
    preview: 'cms',
    previewImage: '/projects/io-admin-dashboard.png',
  },
  {
    slug: 'construction-chronicle-news-portal',
    title: 'Construction Chronicle — Dynamic News Portal',
    eyebrow: 'Live PHP / MySQL Publishing Website',
    description:
      'A dynamic construction-industry publication built around PHP/MySQL content delivery, responsive article pages, interviews, search, categories and media-rich editorial publishing.',
    problem:
      'The platform required a practical publishing website that could handle continuously updated articles and editorial content instead of operating as a static brochure website.',
    solution:
      'Developed and managed the frontend, PHP/MySQL content workflows and production behavior needed for article publishing, search, media handling and responsive browsing.',
    features: [
      'Dynamic article, news and interview pages',
      'Category-based content browsing',
      'Search functionality',
      'Responsive frontend and article layouts',
      'Image and article-media handling',
      'SEO-oriented content structure and live deployment',
    ],
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'SEO'],
    liveUrl: 'https://constructionchronicle.in',
    preview: 'news',
  },
  {
    slug: 'construction-chronicle-admin-panel',
    title: 'Construction Chronicle — Custom Admin Panel',
    eyebrow: 'Private / Internal Business Application',
    description:
      'A custom publishing administration system for managing articles, categories, interviews, images, newsletter subscribers and operational content workflows.',
    problem:
      'Editors needed a simple internal interface to create, update and manage publication content without manually changing database records or frontend code.',
    solution:
      'Built and maintained practical CRUD-based admin workflows connected to the MySQL database, including content, images, categories, interview records and subscriber management.',
    features: [
      'Article/news CRUD management',
      'Category and interview management',
      'Image uploads and article-body media',
      'Newsletter subscriber management',
      'Search and content administration',
      'Database troubleshooting and production fixes',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Custom CMS'],
    confidential: true,
    preview: 'admin',
  },
  {
    slug: 'eps-energy-expo-registration-platform',
    title: 'EPS Energy Expo — Website, Registration & Payment System',
    eyebrow: 'Live Event Technology Platform',
    description:
      'A conference and exhibition web ecosystem covering event pages, visitor/delegate registration, paid workflows, payment status, automated communication and QR/pass delivery.',
    problem:
      'Event registrations need more than a form: attendee data, payment states, approvals, passes and communication all have to stay synchronized during live campaigns.',
    solution:
      'Built and managed connected registration and event workflows covering forms, payments, backend/database actions, SMTP communication, passes and production support.',
    features: [
      'Visitor and delegate registration flows',
      'Paid registration and payment-status handling',
      'Razorpay / payment-link workflows',
      'GST and registration calculations where required',
      'Automated email and SMTP workflows',
      'QR/pass generation and production troubleshooting',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'REST APIs', 'Payment Integration', 'SMTP'],
    liveUrl: 'https://epsenergyexpo.com',
    preview: 'registration',
  },
  {
    slug: 'eps-expo-event-management-admin',
    title: 'EPS Expo — Event Management Admin Panel',
    eyebrow: 'Current / Ongoing Development',
    description:
      'A centralized administration system for managing conferences, delegates, visitors, exhibitors, awards, approvals, passes, reporting and event operations.',
    problem:
      'Operational teams need a single source of truth for attendee records, approvals, passes, payments and event actions instead of fragmented spreadsheets and manual follow-ups.',
    solution:
      'Developing a structured admin workflow that centralizes event data and operational actions while supporting database-backed reporting, approvals, communication and production management.',
    features: [
      'Conference, delegate, visitor and exhibitor management',
      'Registrations, approvals and pass workflows',
      'Awards, media and expo awards modules',
      'Payment-related status management',
      'Admin reporting, filters and production management',
      'Single-dashboard event operations',
    ],
    tech: ['Admin Dashboard', 'PHP', 'MySQL', 'JavaScript', 'REST APIs'],
    confidential: true,
    preview: 'event-admin',
    previewImage: '/projects/eps-admin-dashboard.png',
  },
  {
    slug: 'eps-expo-visitor-exhibitor-app',
    title: 'EPS Expo — Visitor & Exhibitor Application',
    eyebrow: 'Current / Ongoing Development',
    description:
      'A dedicated event application experience for visitor and exhibitor journeys including digital passes, exhibitor discovery, schedules, lead workflows, QR interactions and meeting-related interfaces.',
    problem:
      'Visitors and exhibitors need a focused mobile experience that brings event discovery and operational actions together without making the live event journey complicated.',
    solution:
      'Working on the application UI and event workflows with separate visitor/exhibitor experiences while preserving existing backend integrations and live operational behavior.',
    features: [
      'Visitor and exhibitor user journeys',
      'Digital pass and QR interfaces',
      'Exhibitor listing and detail flows',
      'Lead / scan-oriented workflows',
      'Meeting and schedule interfaces',
      'Responsive event-focused UI and production integration',
    ],
    tech: ['Flutter UI', 'REST APIs', 'QR / Pass Systems', 'Event Workflows'],
    confidential: true,
    preview: 'mobile-app',
  },
  {
    slug: 'perfect-home-tutor-local-seo',
    title: 'Perfect Home Tutor — Website & Local SEO System',
    eyebrow: 'Business Website / Technical SEO',
    description:
      'A service website with location-focused landing pages and hands-on technical SEO covering canonicalization, HTTPS, redirects, sitemap, robots, structured content and indexing workflows.',
    problem:
      'A local service website needed scalable city and service landing pages while avoiding duplicate URLs, indexing problems and inconsistent technical SEO signals.',
    solution:
      'Worked on the PHP website structure and implemented a practical local-SEO foundation with clean URLs, canonical handling, redirects, sitemaps, indexing checks and search-console monitoring.',
    features: [
      'City and service landing-page structure',
      'SEO-friendly URLs and internal linking',
      'Canonical tags and HTTPS enforcement',
      'Sitemap.xml and robots.txt management',
      'Redirects, 404 handling and duplicate URL cleanup',
      'Google Search Console indexing workflow',
    ],
    tech: ['PHP', 'HTML/CSS', 'Technical SEO', 'Search Console', '.htaccess'],
    preview: 'seo',
  },
  {
    slug: 'perfect-home-tutor-business-website',
    title: 'Perfect Home Tutor — Corporate / Service Website',
    eyebrow: 'Business Website',
    description:
      'A service-oriented website designed to present tutoring services clearly, generate local leads and support enquiry workflows with scalable landing pages and a responsive interface.',
    problem:
      'A tutoring business required a simple but conversion-focused web presence that could support location pages, service discovery, mobile responsiveness and lead generation.',
    solution:
      'Created a practical business website structure with service sections, enquiry-first layouts, trust-building content areas and SEO-ready page architecture for future scale.',
    features: [
      'Responsive business website pages',
      'Location and service landing-page structure',
      'Lead/enquiry-focused content flow',
      'SEO-friendly page architecture',
      'Simple content management support',
      'Optimized mobile browsing experience',
    ],
    tech: ['PHP', 'HTML/CSS', 'JavaScript', 'Responsive UI', 'SEO'],
    preview: 'seo',
  },
  {
    slug: 'tanishka-developer-portfolio',
    title: 'Tanishka — Personal Developer Portfolio Website',
    eyebrow: 'Portfolio / Branding Website',
    description:
      "A premium portfolio website built to present Tanishka's profile, services, production projects, case studies and contact details in a polished international-style layout.",
    problem:
      'A portfolio should do more than list skills — it must look premium, communicate credibility and present both real work and services in a structured, conversion-friendly way.',
    solution:
      'Built a responsive portfolio experience using Next.js and Tailwind CSS with premium visual styling, project storytelling, direct contact access and clear personal branding.',
    features: [
      'Premium hero and about sections using branded portraits',
      'Detailed project case studies and tech stacks',
      'Responsive design for desktop and mobile',
      'Contact form with direct mail handling',
      'SEO metadata, sitemap and robots support',
      'Reusable component-based architecture',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive UI', 'SEO'],
    liveUrl: 'https://tanishka-portfolio-gamma.vercel.app',
    preview: 'publishing',
  },
];

export const services = [
  {
    title: 'Full Stack Web Development',
    text: 'Business-focused web applications built across frontend, backend, database and deployment layers.',
  },
  {
    title: 'Admin Dashboard Development',
    text: 'Operational dashboards for users, forms, approvals, reporting and day-to-day management workflows.',
  },
  {
    title: 'PHP / MySQL Development',
    text: 'Custom dynamic websites, backend workflows, CRUD modules and database-backed business functionality.',
  },
  {
    title: 'Next.js / React Development',
    text: 'Fast, responsive interfaces for modern websites, content portals and API-connected applications.',
  },
  {
    title: 'API Integration',
    text: 'REST API integration between web interfaces, CMS platforms, backend services and third-party tools.',
  },
  {
    title: 'CMS Development & Integration',
    text: 'Custom and headless CMS workflows that make publishing and content operations easier to manage.',
  },
  {
    title: 'Registration Systems',
    text: 'Event, delegate, visitor and application forms with approvals, passes and admin-side workflow control.',
  },
  {
    title: 'Payment Gateway Integration',
    text: 'Payment workflows including pricing logic, GST calculations, status handling and post-payment actions.',
  },
  {
    title: 'Website Maintenance & Bug Fixing',
    text: 'Troubleshooting, production debugging, deployment fixes and ongoing improvement of live websites.',
  },
];

export const process = [
  ['01', 'Requirement', 'Understand the business goal, users, workflows and delivery constraints.'],
  ['02', 'Planning', 'Map pages, data, integrations, admin needs and technical approach before coding.'],
  ['03', 'Design', 'Create a clean responsive interface with practical UX and a consistent visual system.'],
  ['04', 'Development', 'Build reusable frontend, backend, database and integration components.'],
  ['05', 'Testing', 'Validate responsive behavior, forms, workflows, edge cases and production readiness.'],
  ['06', 'Deployment', 'Deploy, verify the live environment and support production fixes after launch.'],
];

export const reasons = [
  'Clean, maintainable implementation',
  'Responsive UI across desktop and mobile',
  'Clear, practical communication',
  'Business-focused development decisions',
  'Testing before delivery',
  'Post-delivery support and production troubleshooting',
];
