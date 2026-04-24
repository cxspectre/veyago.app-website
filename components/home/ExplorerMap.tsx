"use client";

import type { ReactNode } from "react";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";
import CornerMarks from "@/components/CornerMarks";
import WorldOutlineMap from "@/components/home/WorldOutlineMap";

const headlineClass =
  "display text-[2rem] sm:text-[2.65rem] md:text-[3.15rem] lg:text-[3.6rem] xl:text-[4.1rem] leading-[0.9] tracking-[-0.03em] text-white [text-shadow:0_2px_48px_rgba(0,0,0,0.75)]";

export default function ExplorerMap() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <AmbientLayer variant="right" dots />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <MapVisualization
          aspect="aspect-[4/5] min-h-[22rem] sm:aspect-[16/11] sm:min-h-0 lg:aspect-[2.15/1]"
          narrative={
            <>
              <div className="pointer-events-none flex items-start justify-between gap-4">
                <div className="[&>div]:mb-0">
                  <SectionIndex n="05" label="Explorer map" />
                </div>
                <StatusChip kicker="Scope" label="Global" pulse={false} />
              </div>
              <div className="pointer-events-none mt-auto space-y-5 sm:space-y-6">
                <RevealHeadline
                  as="h2"
                  className={headlineClass}
                  lines={[
                    { text: "Places you’ve" },
                    { text: "actually been.", className: "italic text-white/78" },
                  ]}
                />
                <p className="max-w-xl text-[0.9375rem] leading-relaxed text-white/88 sm:text-lg sm:leading-relaxed [text-shadow:0_1px_32px_rgba(0,0,0,0.65)]">
                  Explorer Map is optional: when you turn it on, you get a quiet world view of countries and cities
                  you’ve visited — drawn from land and borders, not cluttered map tiles. Leave it off until you want
                  it; switch it off in Settings anytime.
                </p>
                <div className="flex max-w-md flex-wrap gap-2">
                  {["Opt-in only", "Natural Earth outlines", "No third-party map tiles"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.14] bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm sm:text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45 sm:text-[11px]">
                  Land + admin boundaries · public-domain geography data
                </div>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
}

export function MapVisualization({
  aspect = "aspect-[2/1]",
  narrative,
}: {
  aspect?: string;
  /** Renders over the map (e.g. homepage explorer story). */
  narrative?: ReactNode;
}) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-card border border-white/10 bg-surface/90 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
      <div className={`relative w-full shrink-0 ${aspect}`}>
        <WorldOutlineMap />
        {narrative ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[12] bg-gradient-to-b from-[#030a14]/90 via-transparent via-[45%] to-[#030a14]"
            />
            <div className="absolute inset-0 z-[18] flex flex-col justify-between gap-8 p-5 sm:p-7 lg:p-9">
              {narrative}
            </div>
          </>
        ) : null}
        <CornerMarks code="VYG-05-MAP" className="z-[1000]" />
        <div className="pointer-events-none absolute right-3 top-3 z-[1000] flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-gray-3 sm:right-4 sm:top-4">
          <span aria-hidden className="relative h-2 w-2 rounded-full border border-white/25">
            <span aria-hidden className="absolute left-1/2 top-[-4px] block h-2 w-px -translate-x-1/2 bg-white/55" />
          </span>
          N
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/[0.08] bg-black/35 px-3 py-2.5 sm:px-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 text-[9px] uppercase tracking-[0.2em] text-gray-3">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              Land
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full border border-white/35" />
              Borders
            </span>
          </div>
          <p className="max-w-xl text-[9px] leading-snug text-white/40 sm:text-right">
            <span className="uppercase tracking-[0.18em] text-white/28">Natural Earth</span>
            <span className="mt-0.5 block normal-case tracking-normal">
              Public-domain outlines · continents as landmass, countries as admin lines
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

