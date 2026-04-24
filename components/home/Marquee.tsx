const places = [
  "Lisbon · Portugal",
  "Kyoto · Japan",
  "Tbilisi · Georgia",
  "Porto · Portugal",
  "Mexico City · Mexico",
  "Cape Town · South Africa",
  "Barcelona · Spain",
  "Istanbul · Türkiye",
  "Chiang Mai · Thailand",
  "Medellín · Colombia",
  "Oaxaca · Mexico",
  "Kotor · Montenegro",
  "Valletta · Malta",
  "Split · Croatia",
  "Marrakech · Morocco",
  "Lyon · France",
];

const activity = [
  "Mira, Berlin saved Lisbon · 3s",
  "Jakob, Lyon super-saved Tbilisi · 12s",
  "Priya, Rotterdam joined VYG-7K2M · 38s",
  "Tom, Madrid passed on Porto · 1m",
  "Lena, Barcelona saved Kyoto · 2m",
  "Host in Milan started a session · 2m",
  "Noa, Helsinki super-saved Mexico City · 3m",
  "Group in Lisbon closed a bracket · 4m",
  "Eliot, Copenhagen saved Marrakech · 5m",
  "Bracket resolved: Kyoto beat Tokyo · 6m",
  "Aya, Amsterdam joined VYG-4HQP · 7m",
  "Sam, London saved Cape Town · 9m",
];

export default function Marquee() {
  const topLine = [...places, ...places];
  const bottomLine = [...activity, ...activity];

  return (
    <section className="relative border-y border-white/5 bg-navy-deep py-12 sm:py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-navy-deep to-transparent pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-navy-deep to-transparent pointer-events-none"
      />

      <div
        className="relative space-y-5"
        style={{ transform: "perspective(900px) rotateX(9deg)", transformOrigin: "center" }}
      >
        <div className="overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap will-change-transform">
            {topLine.map((p, i) => (
              <span
                key={`t-${i}`}
                className="display text-3xl sm:text-5xl lg:text-6xl text-gray-3 flex items-center gap-10 tracking-[-0.02em]"
              >
                {p}
                <span aria-hidden className="text-white/15">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap will-change-transform">
            {bottomLine.map((p, i) => (
              <span
                key={`b-${i}`}
                className="text-xs uppercase tracking-[0.22em] text-gray-2 flex items-center gap-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-5 top-3 sm:left-8 text-[10px] uppercase tracking-[0.22em] text-gray-3 flex items-center gap-2 z-20">
        <span className="display text-white/40 tabular-nums">Live</span>
        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
      </div>
    </section>
  );
}
