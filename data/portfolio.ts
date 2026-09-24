export type ProjectPreviewVariant = 'publishing' | 'news' | 'registration' | 'mobile-app' | 'seo' | 'event-admin' | 'cms' | 'admin';

export type Project = {
  title: string;
  type: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
  private?: boolean;
  // Compatibility fields for any older portfolio components still present in GitHub.
  slug: string;
  eyebrow: string;
  previewImage?: string;
  preview: ProjectPreviewVariant;
  liveUrl?: string;
  problem: string;
  solution: string;
  features: string[];
};

export const profile = {
  name: 'Tanishka',
  role: 'Full Stack Web Developer',
  email: 'itsmavitanishka@gmail.com',
  phone: '+91 93197 60877',
  github: 'https://github.com/monimavi',
};

export const siteConfig = {
  name: profile.name,
  role: profile.role,
  email: profile.email,
  phone: profile.phone,
  siteUrl: 'https://tanishka-portfolio-gamma.vercel.app',
  profileImage: '/images/profile/tanishka-hero.png',
  aboutImage: '/images/profile/tanishka-about.png',
  workImage: '/images/profile/tanishka-about.png',
  social: {
    github: profile.github,
    linkedin: '#',
    freelancer: '#',
  },
};

export const services = [
  {
    title: 'Web Development',
    body: 'Responsive business websites, publishing platforms and production-ready web applications.',
    text: 'Responsive business websites, publishing platforms and production-ready web applications.',
    points: ['Next.js / React', 'PHP / MySQL', 'Responsive UI', 'SEO-ready builds'],
  },
  {
    title: 'Admin Systems',
    body: 'Custom admin dashboards and CMS workflows for content, users, reports and operational processes.',
    text: 'Custom admin dashboards and CMS workflows for content, users, reports and operational processes.',
    points: ['Custom dashboards', 'Roles & approvals', 'CMS workflows', 'Reports & operations'],
  },
  {
    title: 'APIs & Integrations',
    body: 'Backend-connected experiences with forms, payments, email workflows, APIs and automation.',
    text: 'Backend-connected experiences with forms, payments, email workflows, APIs and automation.',
    points: ['REST APIs', 'Payment workflows', 'Email / SMTP', 'QR / pass systems'],
  },
  {
    title: 'Deployment & Support',
    body: 'Hands-on hosting, DNS, SSL, migrations, server troubleshooting and production maintenance.',
    text: 'Hands-on hosting, DNS, SSL, migrations, server troubleshooting and production maintenance.',
    points: ['Vercel / hosting', 'cPanel / Plesk', 'DNS / SSL', 'Production debugging'],
  },
];

const commonFeatures = ['Responsive interface', 'Production-ready workflow', 'API / data integration', 'Deployment and troubleshooting'];

export const projects: Project[] = [
  {
    slug: 'industrial-outlook',
    title: 'Industrial Outlook',
    type: 'Publishing Platform',
    eyebrow: 'Web Platform',
    image: '/images/projects/industrial-outlook.png',
    previewImage: '/images/projects/industrial-outlook.png',
    preview: 'publishing',
    description: 'Industrial news and editorial platform with dynamic content, interviews, sectors, media and SEO-focused publishing.',
    tech: ['Next.js', 'CMS', 'REST APIs', 'SEO'],
    link: 'https://industrialoutlook.in',
    liveUrl: 'https://industrialoutlook.in',
    problem: 'A publishing platform needs structured content, reliable editorial workflows and strong search visibility while remaining fast and responsive.',
    solution: 'Built and maintained a dynamic publishing experience connected to CMS workflows, SEO metadata, media handling and production deployment.',
    features: [...commonFeatures, 'Editorial publishing workflow', 'SEO metadata and clean URLs'],
  },
  {
    slug: 'construction-chronicle',
    title: 'Construction Chronicle',
    type: 'Media Website',
    eyebrow: 'Web Platform',
    image: '/images/projects/construction-chronicle.png',
    previewImage: '/images/projects/construction-chronicle.png',
    preview: 'news',
    description: 'Construction-industry publication with articles, interviews, categories, search, newsletter and responsive content pages.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'SEO'],
    link: 'https://constructionchronicle.in',
    liveUrl: 'https://constructionchronicle.in',
    problem: 'A media website needs practical publishing, search, categorization and responsive article delivery instead of a static brochure experience.',
    solution: 'Developed and managed a PHP/MySQL publishing system with dynamic pages, custom administration and production troubleshooting.',
    features: [...commonFeatures, 'Article and interview management', 'Search and newsletter support'],
  },
  {
    slug: 'industrial-outlook-cms',
    title: 'Industrial Outlook CMS',
    type: 'Admin / CMS',
    eyebrow: 'Private / Internal Business Application',
    image: '/images/projects/industrial-outlook-admin.png',
    previewImage: '/images/projects/industrial-outlook-admin.png',
    preview: 'cms',
    description: 'Custom editorial CMS for publishing, media, roles, SEO, approvals and day-to-day content operations.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    private: true,
    problem: 'Editorial teams need a structured backend for content, media, SEO, permissions and approval workflows.',
    solution: 'Worked on a custom Strapi-style administration system and integration between the public website and the new CMS stack.',
    features: [...commonFeatures, 'Roles and permissions', 'Media and SEO management'],
  },
  {
    slug: 'construction-chronicle-admin',
    title: 'Construction Chronicle Admin',
    type: 'Admin Panel',
    eyebrow: 'Private / Internal Business Application',
    image: '/images/projects/construction-admin.png',
    previewImage: '/images/projects/construction-admin.png',
    preview: 'admin',
    description: 'Custom publishing backend supporting article CRUD, categories, interviews, media uploads and subscriber management.',
    tech: ['PHP', 'MySQL', 'Custom CMS'],
    private: true,
    problem: 'The publishing team needs direct control over articles, categories, media, interviews and subscriber operations.',
    solution: 'Built and maintained a custom PHP/MySQL administration workflow with CRUD, uploads, content management and production fixes.',
    features: [...commonFeatures, 'Article CRUD and categories', 'Media upload and subscriber management'],
  },
  {
    slug: 'eps-expo-admin',
    title: 'EPS Expo Admin Panel',
    type: 'Event Management System',
    eyebrow: 'Current / Ongoing Development',
    image: '/images/projects/eps-admin.png',
    previewImage: '/images/projects/eps-admin.png',
    preview: 'event-admin',
    description: 'Event operations system for conferences, delegates, visitors, exhibitors, awards, approvals, passes and reporting.',
    tech: ['PHP', 'MySQL', 'REST APIs', 'Email'],
    private: true,
    problem: 'Expo operations require one system to manage multiple user groups, approvals, passes, communication and reporting.',
    solution: 'Building an operational admin system that centralizes conference and expo workflows with backend data and approval logic.',
    features: [...commonFeatures, 'Delegate / visitor / exhibitor management', 'Approvals, passes and reporting'],
  },
  {
    slug: 'eps-visitor-app',
    title: 'EPS Visitor App',
    type: 'Mobile Experience',
    eyebrow: 'Current / Ongoing Development',
    image: '/images/projects/eps-visitor-app.png',
    previewImage: '/images/projects/eps-visitor-app.png',
    preview: 'mobile-app',
    description: 'Visitor experience with QR pass, exhibitors, floor map, schedule, meetings and event navigation.',
    tech: ['Flutter', 'APIs', 'QR', 'Event Workflows'],
    private: true,
    problem: 'Visitors need a single mobile experience for access, discovery, schedules, meetings and navigation during the expo.',
    solution: 'Developing the visitor application interface and event workflows while preserving the existing backend and data contracts.',
    features: [...commonFeatures, 'QR visitor pass', 'Exhibitors, floor map and schedule'],
  },
  {
    slug: 'eps-exhibitor-app',
    title: 'EPS Exhibitor App',
    type: 'Mobile Experience',
    eyebrow: 'Current / Ongoing Development',
    image: '/images/projects/eps-exhibitor-app.png',
    previewImage: '/images/projects/eps-exhibitor-app.png',
    preview: 'mobile-app',
    description: 'Exhibitor workflow for lead scanning, meetings, visitor engagement and company profile management.',
    tech: ['Flutter', 'APIs', 'Lead Capture', 'QR'],
    private: true,
    problem: 'Exhibitors need quick lead capture, meeting management and profile tools during a high-volume live event.',
    solution: 'Developing a dedicated exhibitor flow with scan, lead, meeting and company-profile interfaces connected to event operations.',
    features: [...commonFeatures, 'Lead scanning and capture', 'Meetings and company profile'],
  },
  {
    slug: 'perfect-home-tutor',
    title: 'Perfect Home Tutor',
    type: 'Business Website / Local SEO',
    eyebrow: 'Business Website / Technical SEO',
    image: '/images/projects/perfect-home-tutor.png',
    previewImage: '/images/projects/perfect-home-tutor.png',
    preview: 'seo',
    description: 'Service website with location landing pages, technical SEO, enquiries and scalable local-search architecture.',
    tech: ['PHP', 'JavaScript', 'SEO', 'Search Console'],
    problem: 'A local service business needs scalable location pages and consistent technical SEO without duplicate URL and indexing problems.',
    solution: 'Implemented a structured local-SEO foundation with landing pages, canonical handling, redirects, sitemap and indexing workflows.',
    features: [...commonFeatures, 'Location landing pages', 'Canonical, sitemap and indexing workflow'],
  },
];

export const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Next.js', 'React', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'Prisma', 'REST APIs', 'Custom CMS', 'SEO', 'Google Search Console', 'Linux',
  'cPanel', 'Plesk', 'SSL / DNS', 'SMTP', 'Payment Workflows', 'QR / Pass Systems'
];

export const reasons = [
  'End-to-end project ownership',
  'Hands-on development and troubleshooting',
  'Responsive, production-focused implementation',
  'CMS, database and API integration experience',
  'Deployment, hosting and server troubleshooting',
  'Clear focus on real business workflows',
];
