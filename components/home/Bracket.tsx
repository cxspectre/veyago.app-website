"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { destinations } from "@/lib/destinations";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";
import SectionIndex from "@/components/SectionIndex";

type MatchResult = { a: string; b: string; winner: "a" | "b" };

const round1: MatchResult[] = [
  { a: "lisbon", b: "porto", winner: "a" },
  { a: "kyoto", b: "tokyo", winner: "a" },
  { a: "tbilisi", b: "cape-town", winner: "a" },
  { a: "barcelona", b: "mexico-city", winner: "a" },
];

const round2: MatchResult[] = [
  { a: "lisbon", b: "kyoto", winner: "a" },
  { a: "tbilisi", b: "barcelona", winner: "b" },
];

const final: MatchResult = { a: "lisbon", b: "barcelona", winner: "a" };
const winnerSlug = "lisbon";
const MATCH_COUNT = 7;

const bySlug = Object.fromEntries(destinations.map((d) => [d.slug, d]));

const headlineClass =
  "display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[0.88] tracking-[-0.03em]";

export default function Bracket() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <AmbientLayer variant="left" dots warm />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <header className="text-left">
            <div className="flex items-center justify-between">
              <SectionIndex n="03" label="The bracket" />
              <StatusChip kicker="Demo" label={`${MATCH_COUNT} matches · 1 winner`} pulse={false} />
            </div>

            <RevealHeadline
              as="h2"
              className={headlineClass}
              lines={[
                { text: "Every round," },
                { text: "head-to-head.", className: "italic text-gray-3" },
              ]}
            />
            <p className="mt-7 max-w-lg text-base leading-relaxed text-gray-1 sm:text-lg">
              No averaged scores — your shortlist pairs off until one place is left. Same destinations you
              swiped; clearer winner.
            </p>
          </header>

          <div>
            <BracketViz />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BracketViz() {
  return (
    <div className="rounded-card border border-white/10 bg-surface/90 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:p-5 lg:p-6">
      <WinnerStrip />

      <div className="relative mt-8 border-t border-white/[0.08] pt-8">
        <div
          aria-hidden
          className="absolute left-[0.65rem] top-2 bottom-2 w-px bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-transparent sm:left-3"
        />

        <div className="space-y-10 sm:space-y-11">
          <RoundStack
            numeral="I"
            label="Round of 8"
            delay={0}
            columns="quad"
            matches={round1.map((m, i) => (
              <MatchDuel key={i} match={m} size="sm" delay={0.04 * i} />
            ))}
          />
          <RoundStack
            numeral="II"
            label="Round of 4"
            delay={0.2}
            columns="pair"
            matches={round2.map((m, i) => (
              <MatchDuel key={i} match={m} size="md" delay={0.32 + 0.06 * i} />
            ))}
          />
          <RoundStack
            numeral="III"
            label="Final"
            delay={0.55}
            columns="single"
            matches={[<MatchDuel key="f" match={final} size="lg" delay={0.72} />]}
          />
        </div>
      </div>
    </div>
  );
}

function WinnerStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-card border border-white/10"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 75% at 28% 45%, rgba(212,168,83,0.12) 0%, rgba(212,168,83,0) 62%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#0a1424]/95 via-[#0a1424]/85 to-[#0a1424]/95"
      />
      <div className="relative flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5">
        <div className="relative h-[3.75rem] w-[3.75rem] shrink-0 overflow-hidden rounded-card ring-1 ring-white/15 sm:h-[4rem] sm:w-[4rem]">
          <Image
            src={bySlug[winnerSlug].image}
            alt={bySlug[winnerSlug].name}
            fill
            sizes="80px"
            className="object-cover"
            unoptimized
          />
          <motion.span
            className="absolute inset-0 rounded-card ring-1 ring-[rgba(212,168,83,0.45)]"
            animate={{ opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-badge border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-[rgba(212,168,83,0.9)]" />
              Winner
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gray-3">
              {MATCH_COUNT} matches · 3 rounds
            </span>
          </div>
          <div className="display text-xl leading-[1.02] tracking-[-0.02em] text-white sm:text-2xl">
            {bySlug[winnerSlug].name}
            <span className="font-normal text-gray-2">, {bySlug[winnerSlug].country}</span>
          </div>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-1">
            Beat Porto, Kyoto, and Barcelona in this demo path — then the itinerary layer picks up the story.
          </p>
        </div>
        <div className="hidden shrink-0 text-right sm:block sm:pl-2">
          <div className="display text-2xl leading-none tabular-nums text-white/[0.12] sm:text-3xl">{MATCH_COUNT}</div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-gray-3">matches</div>
        </div>
      </div>
    </motion.div>
  );
}

function RoundStack({
  numeral,
  label,
  delay,
  columns,
  matches,
}: {
  numeral: string;
  label: string;
  delay: number;
  columns: "quad" | "pair" | "single";
  matches: ReactNode[];
}) {
  const gridClass =
    columns === "quad"
      ? "grid grid-cols-2 gap-2.5 sm:gap-3"
      : columns === "pair"
        ? "grid grid-cols-2 gap-2.5 sm:gap-3"
        : "grid grid-cols-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-7 sm:pl-9"
    >
      <div className="mb-3.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="display text-2xl tabular-nums leading-none text-white/[0.22] sm:text-3xl">{numeral}</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-2 sm:text-xs">
          {label}
        </span>
      </div>
      <div className={columns === "single" ? "mx-auto w-full max-w-md" : ""}>
        <div className={gridClass}>{matches}</div>
      </div>
    </motion.div>
  );
}

function MatchDuel({ match, size, delay }: { match: MatchResult; size: "sm" | "md" | "lg"; delay: number }) {
  const a = bySlug[match.a];
  const b = bySlug[match.b];
  const winner = match.winner;
  const h = size === "sm" ? "min-h-[3.5rem] sm:h-[3.75rem]" : size === "md" ? "min-h-[3.75rem] sm:h-16" : "min-h-[4rem] sm:h-[4.25rem]";
  const name = size === "lg" ? "text-sm sm:text-base" : size === "md" ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex w-full min-w-0 overflow-hidden rounded-btn ring-1 ring-white/[0.09] ${h}`}
    >
      <DuelHalf dest={a} winner={winner === "a"} nameClass={name} align="left" compact={size === "sm"} />
      <div className="relative z-20 flex w-7 shrink-0 flex-col items-center justify-center border-x border-white/[0.07] bg-black/55 text-[8px] font-semibold uppercase tracking-[0.14em] text-gray-3 backdrop-blur-sm sm:w-8">
        <span className="text-white/30">vs</span>
      </div>
      <DuelHalf dest={b} winner={winner === "b"} nameClass={name} align="right" compact={size === "sm"} />
    </motion.div>
  );
}

function DuelHalf({
  dest,
  winner,
  nameClass,
  align,
  compact,
}: {
  dest: (typeof destinations)[number];
  winner: boolean;
  nameClass: string;
  align: "left" | "right";
  compact?: boolean;
}) {
  return (
    <div
      className={`relative min-w-0 flex-1 overflow-hidden transition-opacity duration-500 ${
        winner
          ? "opacity-100 ring-1 ring-inset ring-[rgba(212,168,83,0.22)]"
          : "opacity-[0.5] ring-0"
      }`}
    >
      <Image src={dest.image} alt="" fill sizes="160px" className="object-cover" unoptimized />
      <div
        className={
          align === "left"
            ? "absolute inset-0 bg-gradient-to-r from-black/88 via-black/50 to-black/5"
            : "absolute inset-0 bg-gradient-to-l from-black/88 via-black/50 to-black/5"
        }
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center px-2 py-1 sm:px-2.5 ${
          align === "left" ? "items-start text-left pr-[22%]" : "items-end text-right pl-[22%]"
        } ${compact ? "py-1.5" : ""}`}
      >
        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[9px]">
          {dest.country}
        </span>
        <span
          className={`display ${nameClass} mt-0.5 min-w-0 max-w-full leading-[1.12] text-white [overflow-wrap:anywhere] line-clamp-2`}
        >
          {dest.name}
        </span>
        {winner && (
          <span className="mt-1 inline-flex items-center gap-0.5 rounded-badge border border-white/18 bg-black/45 px-1.5 py-0.5 text-[6px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm sm:text-[7px]">
            <span className="h-0.5 w-0.5 rounded-full bg-[rgba(212,168,83,0.95)]" />
            Won
          </span>
        )}
      </div>
    </div>
  );
}
