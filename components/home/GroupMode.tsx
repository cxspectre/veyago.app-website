"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { destinations } from "@/lib/destinations";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";
import CornerMarks from "@/components/CornerMarks";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";

type Participant = {
  initials: string;
  name: string;
  status: "saved" | "swiping" | "passed" | "super";
  target: string;
};

const participants: Participant[] = [
  { initials: "MR", name: "Mira", status: "saved", target: "Lisbon" },
  { initials: "JK", name: "Jakob", status: "swiping", target: "—" },
  { initials: "PS", name: "Priya", status: "super", target: "Tbilisi" },
  { initials: "TM", name: "Tom", status: "passed", target: "Porto" },
  { initials: "LN", name: "Lena", status: "saved", target: "Lisbon" },
];

const matches = [
  { slug: "lisbon", count: 4, of: 5 },
  { slug: "tbilisi", count: 3, of: 5 },
  { slug: "kyoto", count: 2, of: 5 },
];

const bySlug = Object.fromEntries(destinations.map((d) => [d.slug, d]));

export default function GroupMode() {
  return (
    <section className="py-20 sm:py-28 bg-navy-deep relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <AmbientLayer variant="center" dots />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center justify-between">
            <SectionIndex n="02" label="Group mode" />
            <StatusChip kicker="Demo" label="Session preview" />
          </div>
          <RevealHeadline
            className="display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[0.88] tracking-[-0.03em]"
            lines={[
              { text: "Ten friends." },
              { text: "One code.", className: "text-gray-3" },
              { text: "Real time.", className: "italic text-white/80" },
            ]}
          />
          <p className="text-gray-1 text-base sm:text-lg max-w-lg leading-relaxed mt-7">
            Share a six-character code. Everyone swipes at once. Round&nbsp;1 is blind — you don’t see what
            they picked. From Round&nbsp;2 on, matches appear as they happen.
          </p>

          <ul className="mt-10 space-y-4 max-w-sm">
            <Bullet>Up to 4 friends free, 10 on Premium.</Bullet>
            <Bullet>Drop in and out — state lives server-side.</Bullet>
            <Bullet>Each participant sees matches, not individual swipes.</Bullet>
          </ul>
        </div>

        <Dashboard />
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-1">
      <span aria-hidden className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function Dashboard() {
  return (
    <div className="relative rounded-card border border-white/10 bg-surface overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <CornerMarks code="VYG-02-7K2M" label="Session preview" />
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-btn border border-white/15 grid place-items-center">
            <span className="display text-xs">V</span>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-3">Session</div>
            <div className="display text-sm">VYG-7K2M</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-3">
          <RoundPips active={2} total={4} />
          <span>Round 2 of 4</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-[1.05fr_1fr] divide-y sm:divide-y-0 sm:divide-x divide-white/5">
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[10px] uppercase tracking-widest text-gray-3">Participants · 5 / 10</div>
            <div className="flex -space-x-2">
              {participants.map((p, i) => (
                <motion.div
                  key={p.initials}
                  initial={{ opacity: 0, scale: 0.8, x: -8 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="w-7 h-7 rounded-full bg-navy border border-white/20 grid place-items-center text-[10px] text-white/90 display"
                >
                  {p.initials}
                </motion.div>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {participants.map((p) => (
              <li key={p.initials} className="flex items-center gap-3">
                <StatusDot status={p.status} />
                <span className="text-sm text-white w-16">{p.name}</span>
                <span className="text-xs text-gray-2 flex-1">{describe(p)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-navy/40">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[10px] uppercase tracking-widest text-gray-3">Matches so far</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Example</div>
          </div>
          <ul className="space-y-3">
            {matches.map((m, i) => {
              const d = bySlug[m.slug];
              const pct = (m.count / m.of) * 100;
              return (
                <motion.li
                  key={m.slug}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-btn border border-white/10 p-3 flex items-center gap-3"
                >
                  <div className="relative w-10 h-10 rounded-btn overflow-hidden ring-1 ring-white/10 shrink-0">
                    <Image src={d.image} alt="" fill sizes="40px" className="object-cover" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm text-white truncate">{d.name}</span>
                      <span className="display text-xs tabular-nums">{m.count}/{m.of}</span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-gray-2">Ready to finish the round?</span>
            <button className="text-xs bg-ink-100 text-ink-00 px-3 py-2 rounded-btn font-medium">
              Finish round →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoundPips({ active, total }: { active: number; total: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`block h-1 w-4 rounded-full ${i < active ? "bg-white" : "bg-white/15"}`}
        />
      ))}
    </div>
  );
}

function StatusDot({ status }: { status: Participant["status"] }) {
  const cls =
    status === "swiping"
      ? "bg-white animate-pulse"
      : status === "super"
      ? "bg-white ring-2 ring-white/30"
      : status === "saved"
      ? "bg-white/80"
      : "bg-white/25";
  return <span className={`block w-1.5 h-1.5 rounded-full ${cls}`} />;
}

function describe(p: Participant) {
  switch (p.status) {
    case "swiping":
      return "Swiping now…";
    case "saved":
      return `Saved ${p.target}`;
    case "super":
      return `Super-saved ${p.target}`;
    case "passed":
      return `Passed on ${p.target}`;
  }
}
