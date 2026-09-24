import Image from 'next/image';
import type { ReactNode } from 'react';
import type { ProjectPreviewVariant } from '@/data/portfolio';

function BrowserShell({ children, accent = 'violet' }: { children: ReactNode; accent?: 'violet' | 'aqua' }) {
  return (
    <div className="relative flex h-full min-h-[300px] flex-col rounded-2xl border border-white/10 bg-[#151923]/95 shadow-2xl sm:min-h-[350px]">
      <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 h-6 w-36 rounded-lg bg-white/5" />
        <span className={`ml-auto h-2 w-12 rounded-full ${accent === 'aqua' ? 'bg-aqua/30' : 'bg-violet-400/30'}`} />
      </div>
      {children}
    </div>
  );
}

function RealScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <BrowserShell accent="aqua">
      <div className="relative flex-1 overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 700px" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0E1118] via-[#0E1118]/55 to-transparent" />
      </div>
    </BrowserShell>
  );
}

function AdminMock({ aqua = false }: { aqua?: boolean }) {
  return (
    <BrowserShell accent={aqua ? 'aqua' : 'violet'}>
      <div className="grid flex-1 grid-cols-[76px_1fr] gap-4 p-4 sm:grid-cols-[112px_1fr] sm:p-5">
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
          <div className={`h-8 w-8 rounded-lg ${aqua ? 'bg-aqua/20' : 'bg-violet-500/30'}`} />
          <div className="mt-8 space-y-3">{[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-2 rounded bg-white/10" />)}</div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between"><div><div className="h-3 w-28 rounded bg-white/20" /><div className="mt-2 h-2 w-40 rounded bg-white/10" /></div><div className={`h-8 w-20 rounded-full ${aqua ? 'bg-aqua/15' : 'bg-violet-500/15'}`} /></div>
          <div className="grid grid-cols-3 gap-3">{[1, 2, 3].map((i) => <div key={i} className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><div className="h-2 w-12 rounded bg-white/10" /><div className="mt-4 h-6 w-14 rounded bg-white/20" /></div>)}</div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><div className="mb-4 h-2 w-28 rounded bg-white/10" /><div className="space-y-3">{[1, 2, 3, 4].map((i) => <div key={i} className="grid grid-cols-[1.2fr_.8fr_.6fr] gap-3"><div className="h-3 rounded bg-white/10" /><div className="h-3 rounded bg-white/[0.07]" /><div className={`h-3 rounded ${aqua ? 'bg-aqua/10' : 'bg-violet-500/15'}`} /></div>)}</div></div>
        </div>
      </div>
    </BrowserShell>
  );
}

function PublishingMock({ news = false }: { news?: boolean }) {
  return (
    <BrowserShell accent="aqua">
      <div className="flex-1 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between"><div className="h-4 w-28 rounded bg-white/20" /><div className="flex gap-3"><div className="h-2 w-12 rounded bg-white/10" /><div className="h-2 w-12 rounded bg-white/10" /><div className="h-2 w-12 rounded bg-white/10" /></div></div>
        <div className="grid gap-4 sm:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-aqua/10 p-5"><div className="h-3 w-20 rounded bg-aqua/30" /><div className="mt-4 h-5 w-4/5 rounded bg-white/25" /><div className="mt-2 h-5 w-3/5 rounded bg-white/15" /><div className="mt-6 h-28 rounded-lg bg-black/20" /></div>
          <div className="space-y-3">{[1, 2, 3].map((i) => <div key={i} className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><div className={`h-16 rounded-lg ${news ? 'bg-aqua/10' : 'bg-violet-500/10'}`} /><div className="mt-3 h-3 w-4/5 rounded bg-white/15" /><div className="mt-2 h-2 w-3/5 rounded bg-white/10" /></div>)}</div>
        </div>
      </div>
    </BrowserShell>
  );
}

function RegistrationMock() {
  return (
    <BrowserShell accent="aqua">
      <div className="grid flex-1 gap-4 p-4 sm:grid-cols-[.9fr_1.1fr] sm:p-5">
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-transparent p-5"><div className="h-3 w-24 rounded bg-aqua/25" /><div className="mt-4 h-6 w-4/5 rounded bg-white/20" /><div className="mt-3 h-3 w-3/5 rounded bg-white/10" /><div className="mt-8 grid grid-cols-2 gap-3">{[1,2,3,4].map(i => <div key={i} className="h-16 rounded-xl border border-white/10 bg-white/[0.04]" />)}</div></div>
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5"><div className="h-4 w-36 rounded bg-white/20" /><div className="mt-5 space-y-3">{[1,2,3,4].map(i => <div key={i} className="h-10 rounded-xl border border-white/10 bg-black/15" />)}</div><div className="mt-5 h-11 rounded-xl bg-aqua/15" /></div>
      </div>
    </BrowserShell>
  );
}

function MobileMock() {
  return (
    <div className="relative flex min-h-[350px] items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#11151D] p-6 sm:min-h-[390px]">
      {[0, 1].map((phone) => (
        <div key={phone} className={`w-[34%] max-w-[155px] rounded-[30px] border border-white/15 bg-[#171B24] p-2 shadow-2xl ${phone === 1 ? 'translate-y-5' : '-translate-y-3'}`}>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0E1118]">
            <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-white/10" />
            <div className="p-3"><div className="h-16 rounded-xl bg-gradient-to-br from-violet-500/25 to-aqua/15" /><div className="mt-3 h-3 w-3/4 rounded bg-white/20" /><div className="mt-2 h-2 w-1/2 rounded bg-white/10" /><div className="mt-4 grid grid-cols-2 gap-2">{[1,2,3,4].map(i => <div key={i} className="h-12 rounded-lg border border-white/10 bg-white/[0.04]" />)}</div><div className="mt-4 h-24 rounded-xl border border-white/10 bg-white/[0.035]" /></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SeoMock() {
  return (
    <BrowserShell accent="aqua">
      <div className="grid flex-1 gap-4 p-4 sm:grid-cols-[1fr_.8fr] sm:p-5">
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5"><div className="h-4 w-32 rounded bg-white/20" /><div className="mt-5 h-20 rounded-xl bg-gradient-to-r from-violet-500/15 to-aqua/10" /><div className="mt-5 space-y-3">{[1,2,3,4].map(i => <div key={i} className="flex items-center gap-3"><div className="h-6 w-6 rounded-full bg-aqua/10" /><div className="h-3 flex-1 rounded bg-white/10" /></div>)}</div></div>
        <div className="space-y-3"><div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><div className="h-3 w-24 rounded bg-white/20" /><div className="mt-4 flex items-end gap-2">{[35,55,75,48,88,65].map((h,i)=><div key={i} className="flex-1 rounded-t bg-aqua/15" style={{height:`${h}px`}} />)}</div></div><div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><div className="h-3 w-20 rounded bg-white/20" /><div className="mt-4 h-20 rounded-lg bg-violet-500/10" /></div></div>
      </div>
    </BrowserShell>
  );
}

export default function ProjectPreview({ label, variant, imageSrc }: { label: string; variant: ProjectPreviewVariant; imageSrc?: string }) {
  let preview: ReactNode;

  if (imageSrc) {
    preview = <RealScreenshot src={imageSrc} alt={label} />;
  } else {
    switch (variant) {
      case 'publishing': preview = <PublishingMock />; break;
      case 'news': preview = <PublishingMock news />; break;
      case 'registration': preview = <RegistrationMock />; break;
      case 'mobile-app': preview = <MobileMock />; break;
      case 'seo': preview = <SeoMock />; break;
      case 'event-admin': preview = <AdminMock aqua />; break;
      case 'cms':
      case 'admin':
      default: preview = <AdminMock />;
    }
  }

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0E1118] p-5 sm:min-h-[390px] sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.28),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(94,234,212,0.17),transparent_30%)]" />
      <div className="relative">{preview}</div>
      <span className="absolute bottom-4 right-5 max-w-[80%] rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/60 backdrop-blur sm:text-[11px]">
        Visual preview · {label}
      </span>
    </div>
  );
}
