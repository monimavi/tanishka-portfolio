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
  screenshot?: string;
};

export const siteConfig = {
  name: 'Tanishka',
  role: 'Full Stack Web Developer',
  email: 'itsmavitanishka@gmail.com',
  siteUrl: 'https://yourdomain.com',
  profileImage: '/images/tanishka-profile.png',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/yourusername',
    freelancer: 'https://www.freelancer.com/u/yourusername',
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
    slug: 'event-management-registration-dashboard',
    title: 'Event Management & Registration Admin Dashboard',
    eyebrow: 'Private / Internal Business Application',
    description:
      'A centralized operational dashboard for managing exhibitors, visitors, delegates, approvals, passes, stalls, communication workflows and event data from one interface.',
    problem:
      'Event operations can become fragmented when registrations, approvals, passes, stall records and communication are handled across disconnected tools and manual processes.',
    solution:
      'Built a structured administration workflow that brings registration data, operational statuses, approvals and communication actions into a single management experience.',
    features: [
      'Exhibitor, visitor and delegate management',
      'Approval and status workflows',
      'QR/pass generation and pass management',
      'Stall and operational data management',
      'Email and WhatsApp-oriented workflow support',
      'Search, filters, reporting and admin actions',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'REST APIs'],
    confidential: true,
  },
  {
    slug: 'dynamic-news-portal-headless-cms',
    title: 'Dynamic News Portal & Headless CMS',
    eyebrow: 'Content Platform',
    description:
      'A modern news and publishing experience with dynamic articles, categories, SEO metadata, social sharing information and CMS/API-driven content delivery.',
    problem:
      'A content-heavy publication needs editors to publish quickly while keeping article pages structured, searchable, responsive and optimized for discoverability.',
    solution:
      'Implemented a CMS-connected frontend that separates editorial workflows from presentation while keeping routing, metadata and media handling consistent.',
    features: [
      'Dynamic article and category pages',
      'Headless CMS / API integration',
      'SEO titles, descriptions and canonical structure',
      'Social sharing metadata',
      'Responsive media and article layouts',
      'Editorial content workflow support',
    ],
    tech: ['Next.js', 'React', 'JavaScript', 'REST APIs', 'CMS Integration', 'SEO'],
  },
  {
    slug: 'conference-registration-payment-system',
    title: 'Conference Registration & Payment System',
    eyebrow: 'Transactional Web Application',
    description:
      'A registration workflow for conferences covering attendee data, pass selection, pricing calculations, payment handling and admin-side operational management.',
    problem:
      'Paid registrations require reliable validation, payment-state tracking, user confirmation and a clear admin view of each attendee and transaction state.',
    solution:
      'Created an end-to-end registration flow with structured forms, payment integration, status handling, automated communication and admin management.',
    features: [
      'Registration forms and validation',
      'Pass / registration type selection',
      'Tax and pricing calculations',
      'Payment gateway / payment-link workflow',
      'Payment-status handling',
      'Confirmation and admin-side management',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Payment Integration', 'REST APIs'],
  },
  {
    slug: 'role-based-business-admin-dashboard',
    title: 'Role-Based Business Admin Dashboard',
    eyebrow: 'Private / Internal Business Application',
    description:
      'A practical business dashboard for handling users, forms, approvals, reports and operational workflows with role-aware access and structured admin actions.',
    problem:
      'Teams need one controlled interface to manage operational records without giving every user unrestricted access to data or actions.',
    solution:
      'Designed a modular admin experience with role-based views, CRUD workflows, approval states and reporting-oriented data presentation.',
    features: [
      'Role-aware admin access',
      'User and record management',
      'Forms and CRUD workflows',
      'Approval and status actions',
      'Operational reports',
      'Responsive dashboard interface',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'REST APIs', 'Admin Dashboards'],
    confidential: true,
  },
  {
    slug: 'corporate-business-website',
    title: 'Corporate / Business Website',
    eyebrow: 'Business Website',
    description:
      'A responsive business website focused on strong presentation, fast access to information, CMS-manageable content and reliable enquiry workflows.',
    problem:
      'Businesses need a credible digital presence that works well across devices and makes it easy for prospects to understand services and get in touch.',
    solution:
      'Built a clean responsive website structure with reusable sections, CMS-ready content, contact flows and practical SEO foundations.',
    features: [
      'Responsive landing and inner pages',
      'Service and company sections',
      'CMS-manageable content structure',
      'Contact / enquiry forms',
      'SEO-friendly page structure',
      'Production deployment and maintenance',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'CMS Integration'],
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
    text: 'Registration, approval, attendee, pass and workflow systems for business and event use cases.',
  },
  {
    title: 'Payment Gateway Integration',
    text: 'Payment-flow implementation, status handling, confirmation and admin-side transaction workflows.',
  },
  {
    title: 'Maintenance & Bug Fixing',
    text: 'Production debugging, website maintenance, deployment support and practical issue resolution.',
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
