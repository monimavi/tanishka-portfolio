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
