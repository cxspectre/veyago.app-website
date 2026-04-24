import Link from "next/link";
import type { ReactNode } from "react";
import SectionIndex from "@/components/SectionIndex";
import RevealHeadline from "@/components/RevealHeadline";

type Step = { n: string; title: string; body: string; icon: ReactNode };

const headlineClass =
  "display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[0.88] tracking-[-0.03em]";

const steps: Step[] = [
  {
    n: "01",
    title: "Pick a vibe",
    body: "Beach, city, nature, food — or let Veyago pick. Takes ten seconds, sets the whole deck.",
    icon: <IconVibe />,
  },
  {
    n: "02",
    title: "Swipe 20 places",
    body: "Right to save, left to pass, up to super-save. No ranking. No scoring. Just instinct.",
    icon: <IconSwipe />,
  },
  {
    n: "03",
    title: "Run the bracket",
    body: "Your top picks face off — 20 to 10 to 5 to 1. Head-to-head, never polled.",
    icon: <IconBracket />,
  },
  {
    n: "04",
    title: "Get the plan",
    body: "Day-by-day itinerary, budget breakdown, booking links. Done before the second coffee.",
    icon: <IconPlan />,
  },
];

type HowItWorksProps = {
  /** When true, omit top border/hairline (e.g. when stacked under another navy block). */
  embedded?: boolean;
};

export default function HowItWorks({ embedded }: HowItWorksProps) {
  return (
    <section
      className={`relative overflow-hidden bg-navy-deep py-20 sm:py-28 ${embedded ? "" : "border-t border-white/5"}`}
    >
      {!embedded && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionIndex n="07" label="How it works" />
            <RevealHeadline
              as="h2"
              className={headlineClass}
              lines={[
                { text: "Four steps from" },
                { text: "‘where should we go’", className: "italic text-gray-3" },
                { text: "to a plane ticket.", className: "text-gray-2" },
              ]}
            />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-1 sm:text-lg">
              Veyago is one flow: shortlist, decide, align the group, then ship a real itinerary. No spreadsheets,
              no five-star averages — just choices that converge.
            </p>
          </div>
          <Link
            href="/features"
            className="shrink-0 text-sm text-gray-1 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            Feature deep-dives →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative flex flex-col rounded-card border border-white/10 bg-surface/90 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.75)] transition-colors hover:border-white/20"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-btn border border-white/12 bg-navy text-white">
                  {s.icon}
                </div>
                <span className="display mt-2 text-[11px] tabular-nums tracking-[0.2em] text-gray-3">{s.n}</span>
              </div>
              <div className="display text-lg text-white sm:text-xl">{s.title}</div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-1">{s.body}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-1 top-1/2 hidden -translate-y-1/2 text-gray-3 select-none lg:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconVibe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 14c4-2 6-2 9 0s5 2 9 0" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconSwipe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="10" height="14" rx="2" />
      <rect x="9" y="3" width="10" height="14" rx="2" opacity="0.5" />
      <path d="M18 12l3 3-3 3" />
    </svg>
  );
}

function IconBracket() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h4v5h4M4 18h4v-5h4" />
      <path d="M12 11h4v2h4M12 13h4v-2" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPlan() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
      <path d="M8 14h4M8 17h7" />
    </svg>
  );
}
