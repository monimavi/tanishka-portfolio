import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanishka | Full Stack Web Developer',
  description: 'Full Stack Web Developer building websites, admin dashboards, CMS platforms, registration systems, APIs and production-ready digital products.',
  metadataBase: new URL('https://tanishka-portfolio-gamma.vercel.app'),
  openGraph: {
    title: 'Tanishka | Full Stack Web Developer',
    description: 'Practical full-stack development, admin systems, CMS, APIs, event technology and production deployment.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
