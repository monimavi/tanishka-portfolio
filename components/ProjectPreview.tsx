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
