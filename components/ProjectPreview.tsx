import Image from 'next/image';
import type { ProjectPreviewVariant } from '@/data/portfolio';
export default function ProjectPreview({ label, imageSrc }: { label: string; variant: ProjectPreviewVariant; imageSrc?: string }) {
  return <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-white/5">{imageSrc ? <Image src={imageSrc} alt={label} fill className="object-cover" /> : <div className="grid min-h-[320px] place-items-center">{label}</div>}</div>;
}
