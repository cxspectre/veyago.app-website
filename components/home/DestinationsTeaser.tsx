import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";

export default function DestinationsTeaser() {
  const six = destinations.slice(0, 6);
  return (
    <section className="py-20 sm:py-28 bg-navy-deep relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <AmbientLayer variant="bottom" dots />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 mb-14 items-end">
          <div>
            <div className="flex items-center justify-between">
              <SectionIndex n="06" label="Destinations" />
              <StatusChip kicker="Curated" label="200 / 500 launch" pulse={false} />
            </div>
            <RevealHeadline
              className="display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[0.88] tracking-[-0.03em]"
              lines={[
                { text: "200 places." },
                { text: "Hand-picked.", className: "italic text-gray-3" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="text-base text-gray-1 max-w-md leading-relaxed">
              Curated, not scraped. Each destination gets a vibe line, a budget band, and a month we’d go.
              No ranked-by-ad, no SEO farm copy.
            </p>
            <Link
              href="/features"
              className="shrink-0 text-sm text-gray-1 hover:text-white underline underline-offset-4 decoration-white/20"
            >
              How we pick →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {six.map((d, i) => (
            <DestinationTile key={d.slug} d={d} large={i === 0} n={i + 1} />
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-4 text-xs uppercase tracking-[0.22em] text-gray-3">
          <div>Showing 6 of 200 · More at launch</div>
          <Link href="/features" className="text-gray-1 hover:text-white">
            See how destinations become a plan →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DestinationTile({
  d,
  large,
  n,
}: {
  d: (typeof destinations)[number];
  large: boolean;
  n: number;
}) {
  return (
    <div
      data-cursor="view"
      className={`group relative aspect-[4/5] rounded-card overflow-hidden ring-1 ring-white/10 ${
        large ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""
      }`}
    >
      <Image
        src={d.image}
        alt={`${d.name}, ${d.country}`}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
      <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-white/20 transition-all rounded-card pointer-events-none" />

      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
        <span className="display text-[10px] text-white/50 tabular-nums tracking-[0.2em]">
          № {n.toString().padStart(2, "0")}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/80 bg-white/10 backdrop-blur px-2 py-1 rounded-badge border border-white/15">
          {d.budget}
          <span aria-hidden className="w-1 h-1 rounded-full bg-white/40" />
          {d.bestTime}
        </span>
      </div>

      <div className="absolute left-5 right-5 bottom-5 text-white">
        <div className="text-[10px] uppercase tracking-[0.22em] text-white/70">{d.country}</div>
        <div className={`display mt-1.5 leading-none tracking-[-0.02em] ${large ? "text-5xl sm:text-7xl" : "text-2xl sm:text-3xl"}`}>
          {d.name}
        </div>
        <div
          className={`mt-3 text-white/80 leading-relaxed ${large ? "text-sm" : "text-[11px]"} transition-all duration-500 ease-out`}
        >
          {d.vibe}
        </div>

        <div
          className={`mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/0 group-hover:text-white/70 transition-colors duration-500 ${
            large ? "" : ""
          }`}
        >
          <span>Read the guide</span>
          <span
            aria-hidden
            className="block w-6 h-px bg-white/30 transition-all group-hover:w-10 group-hover:bg-white/70"
          />
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
