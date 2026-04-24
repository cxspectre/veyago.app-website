import CountUp from "@/components/CountUp";
import Sparkline from "@/components/Sparkline";

export default function ProofStrip() {
  return (
    <section className="border-y border-white/5 bg-navy-deep py-12 sm:py-16 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><circle cx='1' cy='1' r='0.6' fill='white'/></svg>\")",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x divide-white/5">
        <Stat
          valueNode={
            <CountUp to={200} className="display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] tabular-nums" />
          }
          label="Destinations hand-picked"
          note="Curated, not scraped"
          viz={<Sparkline points={[12, 24, 38, 47, 63, 71, 82, 98, 120, 142, 168, 200]} />}
        />
        <Stat
          valueNode={
            <span className="display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] tabular-nums">
              <CountUp to={10} />
            </span>
          }
          label="Max friends per session"
          note="Real-time, EU-hosted"
          viz={<DotFill filled={10} total={10} />}
        />
        <Stat
          valueNode={
            <span className="display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] tabular-nums">
              <CountUp to={4} />
              <span className="text-gray-3">:</span>
              <CountUp to={32} padDigits={2} />
            </span>
          }
          label="Median time to decision"
          note="From ‘anywhere’ to ‘Lisbon’"
          viz={<DurationBar />}
        />
      </div>
    </section>
  );
}

function Stat({
  valueNode,
  label,
  note,
  viz,
}: {
  valueNode: React.ReactNode;
  label: string;
  note: string;
  viz?: React.ReactNode;
}) {
  return (
    <div className="sm:px-10 first:sm:pl-0 last:sm:pr-0">
      <div className="flex items-baseline gap-1">{valueNode}</div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-gray-2">{label}</div>
      <div className="mt-1 text-xs text-gray-3">{note}</div>
      {viz && <div className="mt-5 opacity-80">{viz}</div>}
    </div>
  );
}

function DotFill({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${i < filled ? "bg-white" : "bg-white/15"}`}
        />
      ))}
    </div>
  );
}

function DurationBar() {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-gray-3">
      <div className="flex-1 h-1 rounded-full bg-white/10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[36%] bg-white rounded-full" />
      </div>
      <span className="tabular-nums">36%</span>
      <span>faster than a vote</span>
    </div>
  );
}
