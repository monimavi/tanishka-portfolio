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
