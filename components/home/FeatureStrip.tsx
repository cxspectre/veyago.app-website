"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";
import { destinations } from "@/lib/destinations";

type Feature = {
  slug: string;
  n: string;
  name: string;
  one: string;
  long: string;
  preview: "swipe" | "bracket" | "group" | "itinerary" | "map";
};

const features: Feature[] = [
  {
    slug: "swipe",
    n: "01",
    name: "The swipe",
    one: "Right to save, left to pass, up to super-save.",
    long: "Twenty cards, twenty seconds. By card six you’re calibrated; by card twenty you have a ranked shortlist without having ranked anything.",
    preview: "swipe",
  },
  {
    slug: "bracket",
    n: "02",
    name: "The bracket",
    one: "Head-to-head elimination. Converges where voting doesn’t.",
    long: "Twenty destinations enter, one leaves. Pairwise comparison beats linear voting every time — no blandness, no Condorcet paradox, no endless polls.",
    preview: "bracket",
  },
  {
    slug: "group-mode",
    n: "03",
    name: "Group mode",
    one: "Up to 10 friends. Real-time. One six-character code.",
    long: "Hosts share a VYG code. Round 1 is blind. From Round 2 on, mutual matches appear as they happen. Drop in, drop out — state lives server-side.",
    preview: "group",
  },
  {
    slug: "itinerary",
    n: "04",
    name: "AI itinerary",
    one: "When you win, the plan writes itself.",
    long: "Day-by-day schedule tuned to your group size, budget, and vibe. Booking links disclosed, not buried. No hidden affiliates, no fake authenticity.",
    preview: "itinerary",
  },
  {
    slug: "map",
    n: "05",
    name: "Explorer map",
    one: "Fog-of-war world map. Every swipe paints a pixel.",
    long: "White = explored, dark = unknown. Your map fills in as you swipe, win, and travel. Background location off by default, fully GDPR opt-in.",
    preview: "map",
  },
];

export default function FeatureStrip() {
  const [active, setActive] = useState(0);
  const activeFeature = features[active];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <AmbientLayer variant="left" dots />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4">
              <SectionIndex n="08" label="Features" />
              <StatusChip kicker="Index" label="05 of 05" pulse={false} />
            </div>
            <RevealHeadline
              className="display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[0.88] tracking-[-0.03em]"
              lines={[
                { text: "Five surfaces." },
                { text: "One decision.", className: "italic text-gray-3" },
              ]}
            />
          </div>
          <Link
            href="/features"
            className="shrink-0 text-sm text-gray-1 hover:text-white underline underline-offset-4 decoration-white/20"
          >
            All features →
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          <ul
            className="border-t border-white/10"
            onMouseLeave={() => setActive(0)}
          >
            {features.map((f, i) => {
              const isActive = active === i;
              return (
                <li
                  key={f.slug}
                  className="border-b border-white/10"
                  onMouseEnter={() => setActive(i)}
                >
                  <Link
                    href={`/features/${f.slug}`}
                    className="group block relative py-6 sm:py-8"
                  >
                    <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-5 sm:gap-8">
                      <span className="display text-[11px] text-white/40 tabular-nums w-8 shrink-0">
                        {f.n}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-6">
                          <span
                            className={`display text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.02em] transition-all duration-500 ${
                              isActive ? "text-white translate-x-2" : "text-gray-1 translate-x-0"
                            }`}
                          >
                            {f.name}
                          </span>
                          <span className="hidden lg:block flex-1 h-px bg-white/10" />
                        </div>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key="desc"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-sm text-gray-1 leading-relaxed max-w-lg">
                                {f.long}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <span
                        className={`text-sm transition-all duration-500 ${
                          isActive ? "text-white translate-x-1" : "text-gray-3 translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className={`absolute left-0 top-0 h-px bg-white/70 transition-all duration-[700ms] ease-out ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block sticky top-28">
            <div className="relative rounded-card border border-white/10 bg-surface/60 backdrop-blur-sm overflow-hidden aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.slug}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Preview kind={activeFeature.preview} />
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <span className="display text-[10px] text-white/60 tabular-nums tracking-[0.2em]">
                  VYG-{activeFeature.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Preview
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                  {activeFeature.name}
                </div>
                <div className="text-sm text-white mt-1">{activeFeature.one}</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-gray-3">
              <span>Hover a row →</span>
              <span className="display tabular-nums">
                {activeFeature.n} / 05
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Preview({ kind }: { kind: Feature["preview"] }) {
  switch (kind) {
    case "swipe":
      return <SwipePreview />;
    case "bracket":
      return <BracketPreview />;
    case "group":
      return <GroupPreview />;
    case "itinerary":
      return <ItineraryPreview />;
    case "map":
      return <MapPreview />;
  }
}

function SwipePreview() {
  const cards = destinations.slice(0, 3);
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {cards.map((d, i) => (
        <div
          key={d.slug}
          className="absolute w-[62%] aspect-[3/4.2] rounded-[22px] overflow-hidden ring-1 ring-white/10"
          style={{
            transform: `translateY(${i * 12}px) rotate(${(i - 1) * 2.2}deg) scale(${1 - i * 0.04})`,
            zIndex: 10 - i,
            opacity: 1 - i * 0.2,
          }}
        >
          <Image src={d.image} alt="" fill sizes="300px" className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          {i === 0 && (
            <div className="absolute left-3 right-3 bottom-3 text-white">
              <div className="display text-xl leading-none">{d.name}</div>
              <div className="text-[10px] text-white/70 mt-1">{d.vibe}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function BracketPreview() {
  const pairs = [
    ["Lisbon", "Porto", 0],
    ["Kyoto", "Tokyo", 0],
    ["Tbilisi", "Cape", 0],
    ["Barcelona", "Mexico", 0],
  ];
  return (
    <div className="absolute inset-0 p-8 flex flex-col justify-center gap-4">
      {pairs.map(([a, b], i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <div className="h-10 rounded-btn bg-white/10 flex items-center px-3">
            <span className="display text-sm text-white">{a}</span>
            <span className="ml-auto text-[9px] uppercase tracking-widest text-white/70 border border-white/30 px-2 py-0.5 rounded-badge">
              Won
            </span>
          </div>
          <div className="h-10 rounded-btn bg-white/5 flex items-center px-3 opacity-50">
            <span className="display text-sm text-gray-1">{b}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function GroupPreview() {
  const people = ["MR", "JK", "PS", "TM", "LN"];
  return (
    <div className="absolute inset-0 p-6 flex flex-col justify-center gap-4">
      <div className="text-[10px] uppercase tracking-[0.22em] text-gray-3">VYG-7K2M</div>
      <div className="flex -space-x-3">
        {people.map((p, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full bg-navy border border-white/25 grid place-items-center text-[11px] display"
          >
            {p}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {["Mira saved Lisbon", "Jakob swiping", "Priya super-saved Tbilisi"].map((t, i) => (
          <div key={i} className="text-xs text-gray-1 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-white animate-pulse" : "bg-white/50"}`} />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function ItineraryPreview() {
  return (
    <div className="absolute inset-0 p-6 flex flex-col gap-3 justify-center">
      <div className="text-[10px] uppercase tracking-[0.22em] text-gray-3">Day 01 · Alfama</div>
      {[
        { t: "Morning", x: "Sunrise at Sr. do Monte" },
        { t: "Afternoon", x: "Walk through Alfama" },
        { t: "Evening", x: "Fado dinner, €32pp" },
      ].map((b, i) => (
        <div key={i} className="rounded-btn border border-white/10 p-3">
          <div className="text-[9px] uppercase tracking-widest text-gray-3">{b.t}</div>
          <div className="text-sm mt-0.5">{b.x}</div>
        </div>
      ))}
    </div>
  );
}

function MapPreview() {
  const pins = [
    { x: 30, y: 45 },
    { x: 55, y: 40 },
    { x: 72, y: 55 },
    { x: 25, y: 65 },
    { x: 60, y: 70 },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {Array.from({ length: 80 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 89) % 100}
            cy={(i * 53) % 100}
            r="0.25"
            fill="white"
            opacity="0.15"
          />
        ))}
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="2.5" fill="white" opacity="0.3" />
            <circle cx={p.x} cy={p.y} r="1" fill="white" />
          </g>
        ))}
      </svg>
    </div>
  );
}
