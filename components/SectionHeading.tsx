export default function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div><p>{eyebrow}</p><h2>{title}</h2>{text ? <p>{text}</p> : null}</div>;
}
