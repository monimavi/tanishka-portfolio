# Tanishka Portfolio — Complete Source Code

This file contains the project source file-by-file with exact paths. Binary image files are referenced by path rather than embedded.

## `.gitignore`

```text
node_modules
.next
out
.env*
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

```

## `README.md`

```md
# Tanishka — Full Stack Web Developer Portfolio

A complete Next.js + Tailwind CSS portfolio built as a premium, production-ready developer site.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm start
```

## Folder structure

```text
tanishka-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Icons.tsx
│   ├── Navbar.tsx
│   ├── Process.tsx
│   ├── ProjectPreview.tsx
│   ├── Projects.tsx
│   ├── Reveal.tsx
│   ├── SectionHeading.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   └── WhyMe.tsx
├── data/
│   └── portfolio.ts
├── public/
│   ├── images/
│   │   └── tanishka-profile.png
│   └── projects/
│       └── README.md
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## What is already included

- Premium responsive hero using the generated professional profile photo
- About Me section
- Skills / technology stack
- 5 featured projects
- Working internal case-study pages for every project
- CSS screenshot placeholders for confidential / unavailable project images
- Services section
- Development process
- Why Work With Me section
- Contact form
- Footer with GitHub, LinkedIn and Freelancer links
- Responsive navigation
- Smooth scroll and lightweight reveal animations
- Next.js metadata, Open Graph metadata, robots.txt and sitemap
- No fake clients, reviews, statistics or company claims
- Confidential projects labelled as Private / Internal Business Application

## Replace your profile photo

Current profile photo path:

`public/images/tanishka-profile.png`

The generated professional image is already included there. To change it later, replace that file with another image using the same filename, or update `profileImage` inside:

`data/portfolio.ts`

## Replace email and social links

Open:

`data/portfolio.ts`

Edit the `siteConfig` object:

```ts
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
```

Replace `yourdomain.com` after deployment and replace the three placeholder social URLs with your real profiles.

## Replace project text / tech stack

All project data is kept in one file:

`data/portfolio.ts`

Edit the `projects` array to change title, description, problem, solution, features or tech stack.

## Add real project screenshots

Store screenshots inside:

`public/projects/`

Recommended image sizes:

- Main portfolio cover: **1600 × 1000 px**
- Dashboard screenshot: **1440 × 900 px**
- Listing/table screenshot: **1440 × 900 px**
- Form/workflow screenshot: **1200 × 900 px**
- Mobile responsive screenshot: **900 × 1600 px**

For Freelancer portfolio covers, use **1600 × 1000 px** or **1920 × 1080 px**. Keep important text and interface elements inside a central safe area because thumbnail crops can vary.

The current design intentionally uses code-based screenshot placeholders so the site remains complete even before real screenshots are available. When your screenshots are ready, replace the `ProjectPreview` usage with `next/image` using files from `public/projects/`, or extend each project entry in `data/portfolio.ts` with screenshot paths.

## Contact form behavior

The contact form is functional without an external backend. On submit, it opens the visitor's default email app with the entered project details pre-filled and addressed to the email in `data/portfolio.ts`.

If you later want direct server-side email delivery, connect the form to your preferred email/API service and keep the same UI.

## SEO

SEO configuration lives in:

- `app/layout.tsx` — title, description, Open Graph, Twitter and keywords
- `app/robots.ts` — robots rules
- `app/sitemap.ts` — homepage and project case-study URLs
- `data/portfolio.ts` — site URL

Update `siteUrl` before production deployment.

## Design notes

The website uses a premium dark/light visual system:

- Near-black hero and technical sections
- Warm light About / Services / Why Work With Me sections
- Violet + aqua accent gradients
- Large project showcase cards
- CSS-only animations and UI placeholders
- No animation library or icon package dependency

This keeps the bundle lighter and the project easier to maintain.

```

## `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #0a0c10;
  color: #ffffff;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: rgba(139, 92, 246, 0.32);
  color: #fff;
}

a,
button,
input,
select,
textarea {
  outline-offset: 4px;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid #5eead4;
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 700ms cubic-bezier(.2,.65,.3,1),
    transform 700ms cubic-bezier(.2,.65,.3,1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.field-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #cbd5e1;
}

.field-input {
  margin-top: 0.55rem;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.045);
  padding: 0.9rem 1rem;
  color: #fff;
  font-size: 0.92rem;
  transition: border-color .2s ease, background .2s ease;
}

.field-input::placeholder {
  color: #64748b;
}

.field-input:focus {
  border-color: rgba(94,234,212,.55);
  background: rgba(255,255,255,.065);
}

select.field-input option {
  color: #111827;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal,
  .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

```

## `app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Tanishka | Full Stack Web Developer',
    template: '%s | Tanishka',
  },
  description:
    'Full Stack Web Developer building business websites, admin dashboards, CMS platforms, registration systems, payment workflows and API integrations.',
  keywords: [
    'Full Stack Web Developer',
    'PHP Developer',
    'MySQL Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Admin Dashboard Developer',
    'CMS Integration',
    'API Integration',
  ],
  openGraph: {
    title: 'Tanishka | Full Stack Web Developer',
    description:
      'Business websites, admin dashboards, CMS platforms, registration systems and API-connected workflows.',
    type: 'website',
    url: siteConfig.siteUrl,
    images: [{ url: siteConfig.profileImage, width: 1080, height: 1350, alt: 'Tanishka - Full Stack Web Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanishka | Full Stack Web Developer',
    description: 'Full stack web development, admin dashboards, CMS integrations and transactional web systems.',
    images: [siteConfig.profileImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

```

## `app/page.tsx`

```tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyMe from '@/components/WhyMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}

```

## `app/projects/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectPreview from '@/components/ProjectPreview';
import { ArrowUpRight, Check } from '@/components/Icons';
import { projects, siteConfig } from '@/data/portfolio';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteConfig.siteUrl}/projects/${project.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <section className="mx-auto max-w-content px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <Link href="/#projects" className="text-sm font-medium text-slate-400 transition hover:text-white">← Back to featured projects</Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="section-kicker text-aqua">{project.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ProjectPreview label={project.title} />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 sm:p-8">
            <p className="section-kicker text-violet-300">Problem</p>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.problem}</p>
          </article>
          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 sm:p-8">
            <p className="section-kicker text-aqua">Solution</p>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.solution}</p>
          </article>
        </div>

        <div className="mt-6 rounded-[30px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
          <p className="section-kicker text-aqua">Key features</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua/10 text-aqua"><Check className="h-4 w-4" /></span>
                <p className="text-sm leading-6 text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-violet-300">Screenshot gallery</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Replace these with real project screens.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-500">Recommended: cover 1600×1000, dashboard 1440×900, table/list 1440×900, form 1200×900 and mobile 900×1600.</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {['Main portfolio cover · 1600×1000', 'Dashboard screenshot · 1440×900', 'Listing / table · 1440×900', 'Form / workflow · 1200×900', 'Mobile responsive · 900×1600'].map((label, index) => (
              <div key={label} className={`grid min-h-64 place-items-center rounded-[24px] border border-dashed border-white/15 bg-white/[0.025] p-6 text-center ${index === 4 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">Add the real screenshot inside public/projects and wire its path in this page or the project data.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[30px] border border-violet-400/20 bg-violet-500/10 p-7 sm:flex sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-sm font-semibold text-violet-200">Need something similar?</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Tell me about the workflow, users and technical constraints. We can scope the right approach before development starts.</p>
          </div>
          <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink sm:mt-0">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

```

## `app/robots.ts`

```ts
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/portfolio';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}

```

## `app/sitemap.ts`

```ts
import type { MetadataRoute } from 'next';
import { projects, siteConfig } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectPages,
  ];
}

```

## `components/About.tsx`

```tsx
import Image from 'next/image';
import { siteConfig } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[32px] bg-white p-2 shadow-soft lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[27px]">
              <Image src={siteConfig.profileImage} alt="Tanishka professional portrait" fill className="object-cover object-top" sizes="420px" />
            </div>
          </div>
          <div className="absolute -bottom-5 right-3 max-w-[250px] rounded-2xl bg-slate-950 p-4 text-white shadow-xl sm:right-0">
            <p className="text-xs uppercase tracking-[0.2em] text-aqua">My approach</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Understand the workflow, build what matters, test the edge cases, then make it reliable in production.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading
            eyebrow="About me"
            title="I turn business workflows into usable web products."
            text="My work sits between development and real operations: websites that need to stay live, dashboards people use every day, content systems editors depend on, and registration/payment workflows that have to behave correctly under real-world conditions."
            light
          />
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-700">
            <p>
              I work hands-on across frontend, backend, databases, CMS integration, APIs, deployment and troubleshooting. I enjoy projects where the challenge is not just making a screen look good, but making the full workflow practical and maintainable.
            </p>
            <p>
              My goal is simple: understand the business problem clearly, choose an appropriate technical approach, build a responsive experience and stay accountable through deployment and production support.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Business websites', 'Admin dashboards', 'CMS platforms', 'Registration systems', 'API integrations'].map((item) => (
              <span key={item} className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

```

## `components/Contact.tsx`

```tsx
'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  const [status, setStatus] = useState('');

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const projectType = String(form.get('projectType') || '');
    const budget = String(form.get('budget') || '');
    const message = String(form.get('message') || '');

    const subject = encodeURIComponent(`Portfolio enquiry — ${projectType || 'Web project'} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\nBudget: ${budget}\n\nProject details:\n${message}`,
    );

    setStatus('Opening your email app with the project details…');
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B0E13] py-24 text-white sm:py-32">
      <div className="absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-kicker text-aqua">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Have a project in mind? Let&apos;s build it.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Tell me what you need, where the current bottleneck is and what a successful result should look like. I&apos;ll use that context to start a focused technical conversation.
          </p>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Direct email</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white hover:text-aqua">
              {siteConfig.email} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <form onSubmit={submitForm} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input name="name" required className="field-input" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input name="email" type="email" required className="field-input" placeholder="you@company.com" />
            </label>
            <label className="field-label">
              Project type
              <select name="projectType" required className="field-input">
                <option value="">Select project type</option>
                <option>Full Stack Web Development</option>
                <option>Admin Dashboard</option>
                <option>PHP / MySQL Development</option>
                <option>Next.js / React Development</option>
                <option>CMS / API Integration</option>
                <option>Registration / Payment System</option>
                <option>Maintenance / Bug Fixing</option>
              </select>
            </label>
            <label className="field-label">
              Budget
              <select name="budget" className="field-input">
                <option value="">Select budget range</option>
                <option>Under $500</option>
                <option>$500 – $1,500</option>
                <option>$1,500 – $3,000</option>
                <option>$3,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
            </label>
          </div>
          <label className="field-label mt-5 block">
            Message
            <textarea name="message" required rows={6} className="field-input resize-none" placeholder="Tell me about your project, current setup and what you need help with." />
          </label>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-sm text-xs leading-5 text-slate-500">This zero-backend form opens your default email client with all entered details pre-filled. Replace the email in data/portfolio.ts anytime.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
              Send project enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          {status ? <p className="mt-4 text-sm text-aqua">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}

```

## `components/Footer.tsx`

```tsx
import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  const socialLinks = [
    ['GitHub', siteConfig.social.github],
    ['LinkedIn', siteConfig.social.linkedin],
    ['Freelancer', siteConfig.social.freelancer],
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080A0E] text-white">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Tanishka</p>
          <p className="mt-1 text-sm text-slate-500">Full Stack Web Developer</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-white">{label}</a>
          ))}
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Tanishka. Built with Next.js.</p>
      </div>
    </footer>
  );
}

```

## `components/Hero.tsx`

```tsx
import Image from 'next/image';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight, CodeIcon } from './Icons';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 text-white sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-[-5%] top-40 h-96 w-96 rounded-full bg-teal-300/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:pb-32">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-aqua shadow-[0_0_18px_rgba(94,234,212,.8)]" />
            Available for freelance & web development projects
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">{siteConfig.name}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]">
            Full Stack Web Developer building practical digital systems.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I build business websites, admin dashboards, CMS platforms, registration systems and API-connected workflows with a focus on usability, reliability and production-ready delivery.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-xl">
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10">
              Let&apos;s work together
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {['Full Stack', 'Admin Systems', 'CMS & APIs', 'Deployment'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <CodeIcon className="h-5 w-5 text-aqua" />
                <p className="mt-3 text-sm font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-violet-500/20 via-transparent to-teal-300/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#13161E] p-2 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={siteConfig.profileImage}
                alt="Tanishka, Full Stack Web Developer"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 500px"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0b0d12] via-[#0b0d12]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold text-white">Tanishka</p>
                  <p className="mt-1 text-xs text-slate-300">Full Stack Web Developer</p>
                </div>
                <span className="rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-aqua">Web · CMS · Systems</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

```

## `components/Icons.tsx`

```tsx
import type { SVGProps } from 'react';

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

```

## `components/Navbar.tsx`

```tsx
'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons';

const links = [
  ['About', '/#about'],
  ['Skills', '/#skills'],
  ['Work', '/#projects'],
  ['Services', '/#services'],
  ['Process', '/#process'],
  ['Contact', '/#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="/#top" className="group flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white transition group-hover:border-aqua/50">
            T
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white">TANISHKA</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 lg:flex">
          Let&apos;s work together
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-content gap-1" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-2xl px-4 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

```

## `components/Process.tsx`

```tsx
import { process } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Development process"
            title="A clear path from requirement to deployment."
            text="Enough structure to keep delivery predictable, without turning a practical web project into unnecessary process overhead."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map(([number, title, text], index) => (
            <Reveal key={number} delay={(index % 3) * 50}>
              <article className="relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
                <span className="absolute right-5 top-3 text-7xl font-semibold tracking-[-0.08em] text-white/[0.035]">{number}</span>
                <div className="relative">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-xs font-semibold text-violet-200">{number}</span>
                  <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## `components/ProjectPreview.tsx`

```tsx
export default function ProjectPreview({ label }: { label: string }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0E1118] p-5 sm:min-h-[390px] sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.28),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(94,234,212,0.17),transparent_30%)]" />
      <div className="relative flex h-full min-h-[280px] flex-col rounded-2xl border border-white/10 bg-[#151923]/90 shadow-2xl sm:min-h-[335px]">
        <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="ml-3 h-6 w-36 rounded-lg bg-white/5" />
        </div>
        <div className="grid flex-1 grid-cols-[72px_1fr] gap-4 p-4 sm:grid-cols-[110px_1fr] sm:p-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
            <div className="h-7 w-7 rounded-lg bg-violet-500/30" />
            <div className="mt-8 space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-2 rounded bg-white/10" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-24 rounded bg-white/20" />
                <div className="mt-2 h-2 w-36 rounded bg-white/10" />
              </div>
              <div className="h-8 w-20 rounded-full bg-aqua/15" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                  <div className="h-2 w-12 rounded bg-white/10" />
                  <div className="mt-4 h-6 w-16 rounded bg-white/20" />
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <div className="mb-4 h-2 w-28 rounded bg-white/10" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="grid grid-cols-[1.2fr_.8fr_.6fr] gap-3">
                    <div className="h-3 rounded bg-white/10" />
                    <div className="h-3 rounded bg-white/[0.07]" />
                    <div className="h-3 rounded bg-violet-500/15" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-4 right-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/60 backdrop-blur">
        Screenshot placeholder · {label}
      </span>
    </div>
  );
}

```

## `components/Projects.tsx`

```tsx
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectPreview from './ProjectPreview';
import { ArrowUpRight } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0D1016] py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="Built around real workflows, not demo-only screens."
            text="Selected project types covering administration, publishing, registration, payments and business websites. Confidential systems are clearly labelled."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#11151D] lg:grid-cols-[1.03fr_.97fr]">
                <div className={`p-4 sm:p-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ProjectPreview label={project.title} />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">{project.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-aqua">
                    View case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## `components/Reveal.tsx`

```tsx
'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

```

## `components/SectionHeading.tsx`

```tsx
export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`section-kicker ${light ? 'text-violet-700' : 'text-aqua'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${light ? 'text-slate-950' : 'text-white'}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? 'text-slate-600' : 'text-slate-400'}`}>{text}</p>
      ) : null}
    </div>
  );
}

```

## `components/Services.tsx`

```tsx
import { services } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Development support from idea to production."
            text="Focused services for businesses that need dependable websites, dashboards, CMS workflows, integrations and ongoing technical support."
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 55}>
              <article className="h-full rounded-[26px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white hover:shadow-soft">
                <span className="text-xs font-semibold tracking-[0.2em] text-violet-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## `components/Skills.tsx`

```tsx
import { skills } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills / Tech stack"
            title="A practical stack for end-to-end web delivery."
            text="Tools I use across interface development, backend workflows, data, CMS integrations, transactional systems and live production support."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={(index % 4) * 45}>
              <div className="group flex min-h-24 items-end justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.055]">
                <p className="text-base font-medium text-slate-100">{skill}</p>
                <span className="text-xs font-semibold text-white/30 transition group-hover:text-aqua">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## `components/WhyMe.tsx`

```tsx
import { reasons } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Check } from './Icons';

export default function WhyMe() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-start lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Why work with me"
            title="Practical development with ownership beyond the first commit."
            text="I care about how the system behaves after launch: whether the workflow makes sense, whether the interface works on real devices, and whether issues can be diagnosed quickly when something breaks."
            light
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="space-y-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-6 text-slate-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

```

## `data/portfolio.ts`

```ts
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

```

## `next-env.d.ts`

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

## `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

```

## `package.json`

```json
{
  "name": "tanishka-full-stack-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.25",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.5",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}

```

## `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

## `public/projects/README.md`

```md
# Project screenshot folder

Place your real screenshots in this folder. Suggested names:

- event-dashboard-cover.webp
- event-dashboard-dashboard.webp
- event-dashboard-listing.webp
- event-dashboard-form.webp
- event-dashboard-mobile.webp
- news-portal-cover.webp
- news-portal-dashboard.webp
- conference-registration-cover.webp
- business-admin-cover.webp
- corporate-website-cover.webp

Recommended dimensions:

- Main portfolio cover: 1600 x 1000 px (8:5)
- Desktop dashboard: 1440 x 900 px (16:10)
- Listing / table: 1440 x 900 px
- Form / workflow: 1200 x 900 px (4:3)
- Mobile responsive: 900 x 1600 px (9:16)

For Freelancer portfolio uploads, a 1600 x 1000 or 1920 x 1080 cover works well. Keep important UI/text away from the extreme edges because marketplaces may crop thumbnails.

```

## `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C10',
        panel: '#11141B',
        line: '#252A35',
        cream: '#F3F0E8',
        electric: '#8B5CF6',
        aqua: '#5EEAD4',
      },
      boxShadow: {
        glow: '0 30px 90px rgba(139, 92, 246, 0.16)',
        soft: '0 20px 60px rgba(10, 12, 16, 0.10)',
      },
      maxWidth: {
        content: '1180px',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

```

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", ".next/types/**/*.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

```

## Binary asset included

`public/images/tanishka-profile.png` — generated professional profile photo already included in the project.
