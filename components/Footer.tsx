import { siteConfig } from '@/data/portfolio';

export default function Footer() {
  const socialLinks = [
    ['GitHub', siteConfig.social.github],
    ['LinkedIn', siteConfig.social.linkedin],
    ['Freelancer', siteConfig.social.freelancer],
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080A0E] text-white">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold">Tanishka</p>
          <p className="mt-1 text-sm text-slate-500">Full Stack Web Developer</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href={`mailto:${siteConfig.email}`} className="text-slate-400 transition hover:text-white">{siteConfig.email}</a>
          <a href={siteConfig.phoneHref} className="text-slate-400 transition hover:text-white">{siteConfig.phone}</a>
        </div>
        <div className="flex flex-wrap gap-5">
          {socialLinks.map(([label, href]) => (
            href === '#' ? (
              <span key={label} className="cursor-default text-sm text-slate-600" title="Add your profile URL in data/portfolio.ts">{label}</span>
            ) : (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-white">{label}</a>
            )
          ))}
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Tanishka. Built with Next.js.</p>
      </div>
    </footer>
  );
}
