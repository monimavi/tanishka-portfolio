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
