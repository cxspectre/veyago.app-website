"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  PanInfo,
  animate,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { Destination } from "@/lib/destinations";
import { tryItDeck } from "@/lib/destinations";
import RevealHeadline from "@/components/RevealHeadline";
import AmbientLayer from "@/components/AmbientLayer";
import StatusChip from "@/components/StatusChip";
import MagneticLink from "@/components/MagneticLink";

type Decision = "save" | "pass" | "super";

const DECK: Destination[] = tryItDeck;
const DECK_LEN = DECK.length;

export default function InteractiveSwipe() {
  const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState({ save: 0, pass: 0, super: 0 });
  const [lastDecision, setLastDecision] = useState<Decision | null>(null);
  const [superUsed, setSuperUsed] = useState(false);
  const [history, setHistory] = useState<{ id: number; decision: Decision; name: string }[]>([]);

  const done = index >= DECK_LEN;
  const current = !done ? DECK[index] : null;
  const next = !done && index + 1 < DECK_LEN ? DECK[index + 1] : null;
  const next2 = !done && index + 2 < DECK_LEN ? DECK[index + 2] : null;

  const commit = useCallback((d: Decision) => {
    if (done || !current) return;
    setCounts((c) => ({ ...c, [d]: c[d] + 1 }));
    setLastDecision(d);
    if (d === "super") setSuperUsed(true);
    setHistory((h) => [{ id: Date.now(), decision: d, name: current.name }, ...h].slice(0, 4));
    setIndex((i) => i + 1);
  }, [current, done]);

  const reset = () => {
    setIndex(0);
    setCounts({ save: 0, pass: 0, super: 0 });
    setLastDecision(null);
    setSuperUsed(false);
    setHistory([]);
  };

  useEffect(() => {
    if (done) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        commit("pass");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        commit("save");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!superUsed) commit("super");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [commit, done, superUsed]);

  const swiped = Math.min(index, DECK_LEN);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <AmbientLayer variant="right" dots grid />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:pl-20 lg:pr-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 flex w-full max-w-xl items-start justify-between gap-4 text-left">
            <div className="flex min-w-0 items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-gray-3">
              <span className="display text-[11px] text-white/40 tabular-nums">01</span>
              <span aria-hidden className="block h-px w-8 shrink-0 bg-white/12" />
              <span className="text-gray-2">Try it</span>
            </div>
            <StatusChip kicker="Demo" label={`${swiped} / ${DECK_LEN} swiped`} pulse={false} />
          </div>

          {!done && (
            <>
              <div className="mb-3 max-w-xl text-center [&_h2]:display [&_h2]:text-[1.65rem] [&_h2]:leading-[0.95] [&_h2]:tracking-[-0.03em] [&_h2]:text-white sm:[&_h2]:text-[2rem] lg:[&_h2]:text-[2.35rem]">
                <RevealHeadline
                  as="h2"
                  lines={[
                    { text: "Drag a card." },
                    { text: "Feel the decision.", className: "italic text-gray-3" },
                  ]}
                />
              </div>
              <p className="mb-10 max-w-md text-sm leading-relaxed text-gray-1 sm:text-[0.9375rem]">
                Drag right to save, left to pass, or up for one super-save per run — same rhythm as the app.
              </p>
            </>
          )}
          {done && <div className="mb-8" />}
        </div>

        <div className="mx-auto flex w-full max-w-[min(100%,440px)] flex-col items-center">
          <div className="relative w-full">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-[40px] bg-white/[0.05] blur-[72px] sm:-inset-14 sm:blur-[88px]"
            />

            <div className="relative mx-auto aspect-[3/4.15] w-full max-w-[360px] select-none sm:max-w-[400px]">
              <CardAnchor />
              {next2 && <StackCard destination={next2} depth={2} />}
              {next && <StackCard destination={next} depth={1} />}
              <AnimatePresence mode="wait">
                {!done && current ? (
                  <SwipeCard
                    key={current.slug}
                    destination={current}
                    superAvailable={!superUsed}
                    onCommit={commit}
                  />
                ) : null}
              </AnimatePresence>

              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-[26px] border border-white/10 bg-surface/95 p-6 text-center backdrop-blur-md"
                >
                  <p className="display max-w-[16rem] text-xl leading-snug text-white sm:text-2xl">
                    You just swiped {DECK_LEN} places in a few seconds.
                  </p>
                  <p className="mt-2 text-sm text-gray-1">That&apos;s Veyago.</p>
                  <MagneticLink
                    href="/waitlist"
                    className="mt-6 bg-ink-100 px-5 py-2.5 text-sm font-medium text-ink-00 rounded-btn hover:bg-ink-90 transition-colors"
                  >
                    Get early access
                  </MagneticLink>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-4 text-[11px] uppercase tracking-widest text-gray-3 hover:text-white"
                  >
                    Run it again
                  </button>
                </motion.div>
              )}
            </div>

            {!done && (
              <>
                <div className="mt-8 flex w-full max-w-md justify-center gap-3 sm:gap-4">
                  <ActionPill
                    arrow="←"
                    label="Pass"
                    variant="ghost"
                    onClick={() => commit("pass")}
                  />
                  <ActionPill
                    arrow="↑"
                    label="Dream"
                    variant="gold"
                    disabled={superUsed}
                    onClick={() => !superUsed && commit("super")}
                  />
                  <ActionPill arrow="→" label="Save" variant="solid" onClick={() => commit("save")} />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-gray-3">
                  <span className={lastDecision === "save" ? "text-white" : ""}>
                    Save <span className="tabular-nums text-white/70">{String(counts.save).padStart(2, "0")}</span>
                  </span>
                  <span className={lastDecision === "super" ? "text-white" : ""}>
                    Dream{" "}
                    <span className="tabular-nums text-white/70">{String(counts.super).padStart(2, "0")}</span>
                    {superUsed && <span className="ml-1 text-[9px] normal-case text-gray-3">· used</span>}
                  </span>
                  <span className={lastDecision === "pass" ? "text-white" : ""}>
                    Pass <span className="tabular-nums text-white/70">{String(counts.pass).padStart(2, "0")}</span>
                  </span>
                </div>

                <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-gray-3">
                  <span className="tabular-nums">{swiped}</span> / {DECK_LEN} swiped ·{" "}
                  <kbd className="rounded border border-white/15 bg-white/[0.04] px-1 py-0.5 font-sans text-[9px] normal-case text-gray-2">
                    ←
                  </kbd>{" "}
                  <kbd className="rounded border border-white/15 bg-white/[0.04] px-1 py-0.5 font-sans text-[9px] normal-case text-gray-2">
                    →
                  </kbd>{" "}
                  <kbd className="rounded border border-white/15 bg-white/[0.04] px-1 py-0.5 font-sans text-[9px] normal-case text-gray-2">
                    ↑
                  </kbd>
                </p>
              </>
            )}

            {history.length > 0 && (
              <div className="mt-8 hidden w-full max-w-lg text-center text-[10px] text-gray-3 lg:block">
                <span className="uppercase tracking-widest text-gray-3">Last: </span>
                {history
                  .slice(0, 3)
                  .map((h) => h.name)
                  .join(" · ")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionPill({
  arrow,
  label,
  variant,
  onClick,
  disabled,
}: {
  arrow: string;
  label: string;
  variant: "ghost" | "solid" | "gold";
  onClick: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex min-w-[5.5rem] flex-col items-center justify-center gap-0.5 rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors disabled:pointer-events-none disabled:opacity-35";
  const styles =
    variant === "solid"
      ? "border-ink-90 bg-ink-100 text-ink-00 hover:bg-ink-90"
      : variant === "gold"
      ? "border-[rgba(212,168,83,0.55)] bg-[linear-gradient(180deg,rgba(212,168,83,0.18)_0%,rgba(212,168,83,0.06)_100%)] text-[#f3e6c8] hover:border-[rgba(212,168,83,0.85)]"
      : "border-white/20 bg-white/[0.04] text-gray-1 hover:border-white/40 hover:bg-white/[0.08] hover:text-white";
  return (
    <button type="button" disabled={disabled} onClick={onClick} className={`${base} ${styles}`}>
      <span aria-hidden className="text-sm leading-none opacity-80">
        {arrow}
      </span>
      {label}
    </button>
  );
}

function CardAnchor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-[30px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-3 -top-3 h-5 w-5 border-l border-t border-white/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-3 h-5 w-5 border-r border-t border-white/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-3 -left-3 h-5 w-5 border-b border-l border-white/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-3 -right-3 h-5 w-5 border-b border-r border-white/25"
      />
    </>
  );
}

function StackCard({ destination, depth }: { destination: Destination; depth: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px] bg-[#0a1424] ring-1 ring-white/10"
      style={{
        transform: `translateY(${depth * 12}px) scale(${1 - depth * 0.035})`,
        zIndex: 8 - depth,
        opacity: 1 - depth * 0.12,
      }}
      aria-hidden
    >
      <Image
        src={destination.image}
        alt=""
        fill
        sizes="400px"
        className="object-cover"
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
    </div>
  );
}

function SwipeCard({
  destination,
  superAvailable,
  onCommit,
}: {
  destination: Destination;
  superAvailable: boolean;
  onCommit: (d: Decision) => void;
}) {
  const [goldFlash, setGoldFlash] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-15, 0, 15]);
  const saveOpacity = useTransform(x, [28, 110], [0, 1]);
  const passOpacity = useTransform(x, [-110, -28], [1, 0]);
  const superOpacity = useTransform(y, [-120, -40], [1, 0]);

  const finish = async (d: Decision, targetX: number, targetY: number) => {
    if (d === "super") setGoldFlash(true);
    await Promise.all([
      animate(x, targetX, { duration: 0.28, ease: [0.22, 1, 0.36, 1] }),
      animate(y, targetY, { duration: 0.28, ease: [0.22, 1, 0.36, 1] }),
    ]);
    if (d === "super") window.setTimeout(() => setGoldFlash(false), 380);
    onCommit(d);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const ox = info.offset.x;
    const oy = info.offset.y;
    const thresholdX = 88;
    const thresholdY = -72;

    if (oy < thresholdY && ox < 70 && ox > -70 && superAvailable) {
      void finish("super", 0, -520);
      return;
    }
    if (ox > thresholdX) {
      void finish("save", 520, 0);
      return;
    }
    if (ox < -thresholdX) {
      void finish("pass", -520, 0);
      return;
    }
    void Promise.all([
      animate(x, 0, { type: "spring", stiffness: 420, damping: 34 }),
      animate(y, 0, { type: "spring", stiffness: 420, damping: 34 }),
    ]);
  };

  return (
    <motion.div
      drag
      dragElastic={0.08}
      dragConstraints={{ left: -200, right: 200, top: -140, bottom: 48 }}
      onDragEnd={onDragEnd}
      style={{ x, y, rotate, zIndex: 12 }}
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      data-cursor="drag"
      className="absolute inset-0 cursor-grab touch-none overflow-hidden rounded-[26px] bg-[#0a1424] shadow-[0_28px_64px_-28px_rgba(0,0,0,0.92)] ring-1 ring-white/15 active:cursor-grabbing"
    >
      <Image
        src={destination.image}
        alt={`${destination.name}, ${destination.country}`}
        fill
        sizes="400px"
        className="pointer-events-none object-cover"
        unoptimized
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 via-[35%] to-transparent" />

      {goldFlash && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.45, 0] }}
          transition={{ duration: 0.45 }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,168,83,0.55),transparent_65%)]"
        />
      )}

      <motion.div
        style={{ opacity: saveOpacity }}
        className="pointer-events-none absolute left-4 top-5 rounded-md border-2 border-white px-2.5 py-1 text-lg font-bold uppercase tracking-[0.12em] text-white display [-webkit-text-stroke:0] rotate-[-7deg]"
      >
        Save
      </motion.div>
      <motion.div
        style={{ opacity: passOpacity }}
        className="pointer-events-none absolute right-4 top-5 rounded-md border-2 border-white/55 px-2.5 py-1 text-lg font-bold uppercase tracking-[0.12em] text-white/90 display rotate-[7deg]"
      >
        Pass
      </motion.div>
      <motion.div
        style={{ opacity: superOpacity }}
        className="pointer-events-none absolute left-1/2 top-6 w-max -translate-x-1/2 rounded-md border-2 border-[rgba(212,168,83,0.85)] bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f3e6c8] backdrop-blur-sm"
      >
        Dream
      </motion.div>

      <div className="pointer-events-none absolute bottom-5 left-5 right-5 text-white">
        <div className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/75">{destination.country}</div>
        <div className="display mt-0.5 text-3xl leading-[0.95] tracking-[-0.03em] sm:text-4xl">{destination.name}</div>
        <div className="mt-1.5 text-[11px] leading-snug text-white/85">{destination.vibe}</div>
        <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/72">
          <span className="rounded-sm bg-black/45 px-2 py-0.5 backdrop-blur-sm">
            {destination.budget} · best {destination.bestTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
