export type Project = {
  title: string;
  type: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
  private?: boolean;
};

export const profile = {
  name: 'Tanishka',
  role: 'Full Stack Web Developer',
  email: 'itsmavitanishka@gmail.com',
  phone: '+91 93197 60877',
  github: 'https://github.com/monimavi',
};

export const services = [
  {
    title: 'Web Development',
    body: 'Responsive business websites, publishing platforms and production-ready web applications.',
    points: ['Next.js / React', 'PHP / MySQL', 'Responsive UI', 'SEO-ready builds'],
  },
  {
    title: 'Admin Systems',
    body: 'Custom admin dashboards and CMS workflows for content, users, reports and operational processes.',
    points: ['Custom dashboards', 'Roles & approvals', 'CMS workflows', 'Reports & operations'],
  },
  {
    title: 'APIs & Integrations',
    body: 'Backend-connected experiences with forms, payments, email workflows, APIs and automation.',
    points: ['REST APIs', 'Payment workflows', 'Email / SMTP', 'QR / pass systems'],
  },
  {
    title: 'Deployment & Support',
    body: 'Hands-on hosting, DNS, SSL, migrations, server troubleshooting and production maintenance.',
    points: ['Vercel / hosting', 'cPanel / Plesk', 'DNS / SSL', 'Production debugging'],
  },
];

export const projects: Project[] = [
  {
    title: 'Industrial Outlook',
    type: 'Publishing Platform',
    image: '/images/projects/industrial-outlook.png',
    description: 'Industrial news and editorial platform with dynamic content, interviews, sectors, media and SEO-focused publishing.',
    tech: ['Next.js', 'CMS', 'REST APIs', 'SEO'],
    link: 'https://industrialoutlook.in',
  },
  {
    title: 'Construction Chronicle',
    type: 'Media Website',
    image: '/images/projects/construction-chronicle.png',
    description: 'Construction-industry publication with articles, interviews, categories, search, newsletter and responsive content pages.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'SEO'],
    link: 'https://constructionchronicle.in',
  },
  {
    title: 'Industrial Outlook CMS',
    type: 'Admin / CMS',
    image: '/images/projects/industrial-outlook-admin.png',
    description: 'Custom editorial CMS for publishing, media, roles, SEO, approvals and day-to-day content operations.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    private: true,
  },
  {
    title: 'Construction Chronicle Admin',
    type: 'Admin Panel',
    image: '/images/projects/construction-admin.png',
    description: 'Custom publishing backend supporting article CRUD, categories, interviews, media uploads and subscriber management.',
    tech: ['PHP', 'MySQL', 'Custom CMS'],
    private: true,
  },
  {
    title: 'EPS Expo Admin Panel',
    type: 'Event Management System',
    image: '/images/projects/eps-admin.png',
    description: 'Event operations system for conferences, delegates, visitors, exhibitors, awards, approvals, passes and reporting.',
    tech: ['PHP', 'MySQL', 'REST APIs', 'Email'],
    private: true,
  },
  {
    title: 'EPS Visitor App',
    type: 'Mobile Experience',
    image: '/images/projects/eps-visitor-app.png',
    description: 'Visitor experience with QR pass, exhibitors, floor map, schedule, meetings and event navigation.',
    tech: ['Flutter', 'APIs', 'QR', 'Event Workflows'],
    private: true,
  },
  {
    title: 'EPS Exhibitor App',
    type: 'Mobile Experience',
    image: '/images/projects/eps-exhibitor-app.png',
    description: 'Exhibitor workflow for lead scanning, meetings, visitor engagement and company profile management.',
    tech: ['Flutter', 'APIs', 'Lead Capture', 'QR'],
    private: true,
  },
  {
    title: 'Perfect Home Tutor',
    type: 'Business Website / Local SEO',
    image: '/images/projects/perfect-home-tutor.png',
    description: 'Service website with location landing pages, technical SEO, enquiries and scalable local-search architecture.',
    tech: ['PHP', 'JavaScript', 'SEO', 'Search Console'],
  },
];

export const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Next.js', 'React', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'Prisma', 'REST APIs', 'Custom CMS', 'SEO', 'Google Search Console', 'Linux',
  'cPanel', 'Plesk', 'SSL / DNS', 'SMTP', 'Payment Workflows', 'QR / Pass Systems'
];
