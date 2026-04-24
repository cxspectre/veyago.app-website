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

export default function Marquee() {
  const topLine = [...places, ...places];

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
        className="relative"
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
      </div>
    </section>
  );
}
