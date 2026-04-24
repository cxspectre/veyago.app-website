"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import { useEffect, useState, useRef, useCallback, MouseEvent } from "react";
import { destinations } from "@/lib/destinations";
import { heroBackdropImage } from "@/lib/marketingImagery";
import MagneticLink from "@/components/MagneticLink";
import HeroGroupChat from "@/components/home/HeroGroupChat";

const LINE_1 = "Pick a place.";
const LINE_2 = "Not a fight.";

export default function Hero() {
  const reduced = useReducedMotion();
  const reducedBool = !!reduced;
  const [phoneShowSwipe, setPhoneShowSwipe] = useState(reducedBool);

  const onHeroChatDone = useCallback(() => {
    setPhoneShowSwipe(true);
  }, []);

  useEffect(() => {
    if (reducedBool) setPhoneShowSwipe(true);
  }, [reducedBool]);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, -40]);
  const heroBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(4px)"]);

  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 14, mass: 0.6 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 14, mass: 0.6 });
  const line1X = useTransform(mx, [-1, 1], [-10, 10]);
  const line1Y = useTransform(my, [-1, 1], [-4, 4]);
  const line2X = useTransform(mx, [-1, 1], [8, -8]);
  const line2Y = useTransform(my, [-1, 1], [3, -3]);

  const onHeroMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mxRaw.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 1.5))));
    myRaw.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 1.5))));
  };

  const onHeroLeave = () => {
    mxRaw.set(0);
    myRaw.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onHeroMove}
      onMouseLeave={onHeroLeave}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink-00 pt-16 sm:pt-20 pb-8"
    >
      <HeroPhotoBackdrop />
      <Backdrop />
      <GridLines />

      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY, filter: heroBlur }}
        className="relative w-full mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12"
      >
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-center">
          <div className="min-w-0 relative z-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gray-3 mb-4 sm:mb-5 hidden sm:flex items-center gap-3">
              <span className="display text-white/35 tabular-nums">00</span>
              <span aria-hidden className="block w-8 h-px bg-white/12" />
              <span>Est. 2026</span>
            </p>
            <motion.h1
              style={{ x: line1X, y: line1Y }}
              className="display shimmer-text leading-[0.88] tracking-[-0.035em] text-[2.25rem] sm:text-[3.25rem] lg:text-[4.25rem] xl:text-[5rem]"
            >
              <KineticLine text={LINE_1} delay={0.1} reduced={reducedBool} />
            </motion.h1>
            <motion.h1
              style={{ x: line2X, y: line2Y }}
              className="display stroke-display italic leading-[0.88] tracking-[-0.035em] text-[2.25rem] sm:text-[3.25rem] lg:text-[4.25rem] xl:text-[5rem]"
            >
              <KineticLine text={LINE_2} delay={0.35} reduced={reducedBool} />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mt-8 lg:mt-10">
                <MagneticLink
                  href="/waitlist"
                  className="group bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm inline-flex items-center gap-2 hover:bg-ink-90 transition-colors"
                >
                  Get early access
                  <span aria-hidden>→</span>
                </MagneticLink>
              </div>

              <div className="mt-8 lg:mt-10 grid grid-cols-3 max-w-md gap-4 sm:gap-6">
                <Meta k="Launch" v="Early Q3 2026" />
                <Meta k="Platforms" v="iOS · Android" />
                <Meta k="Free tier" v="Forever" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-0 flex justify-center"
          >
            <PhoneWithParallax
              showSwipeApp={phoneShowSwipe}
              onChatComplete={onHeroChatDone}
            />
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center gap-3 absolute -bottom-2 left-12 text-[10px] uppercase tracking-[0.25em] text-gray-3">
          <span aria-hidden className="block w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
          <span>Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}

function KineticLine({ text, delay, reduced }: { text: string; delay: number; reduced: boolean }) {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap gap-x-[0.25em]">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] leading-[0.9]">
          <motion.span
            initial={reduced ? { y: 0 } : { y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-3">{k}</div>
      <div className="display text-sm mt-1.5 text-white">{v}</div>
    </div>
  );
}

/** Full-bleed photo + scrims — on-brand travel imagery (see `lib/marketingImagery.ts`). */
function HeroPhotoBackdrop() {
  return (
    <>
      <Image
        src={heroBackdropImage}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-[center_32%] opacity-[0.2] sm:opacity-[0.24]"
        unoptimized
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(75% 58% at 50% 108%, rgba(255,168,99,0.26) 0%, rgba(255,168,99,0) 58%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,8,16,0.92) 0%, rgba(6,8,16,0.5) 42%, rgba(6,8,16,0.78) 72%, rgba(6,8,16,0.94) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />
    </>
  );
}

function Backdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(68% 50% at 78% 22%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
}

function GridLines() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "8rem 100%",
        }}
      />
      <FloatingDots />
    </>
  );
}

function FloatingDots() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  const dots = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 73) % 100}%`,
    top: `${(i * 37) % 100}%`,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.7,
    duration: 8 + (i % 4),
  }));
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.5, 0.5, 0],
            y: [0, -40, -70, -100],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function PhoneWithParallax({
  showSwipeApp,
  onChatComplete,
}: {
  showSwipeApp: boolean;
  onChatComplete: () => void;
}) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-1, 1], [6, -6]), { stiffness: 90, damping: 14 });
  const rotY = useSpring(useTransform(mx, [-1, 1], [-10, 10]), { stiffness: 90, damping: 14 });
  const transX = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 90, damping: 14 });
  const transY = useSpring(useTransform(my, [-1, 1], [-4, 4]), { stiffness: 90, damping: 14 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 1.4))));
    my.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 1.4))));
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{
          rotateX: rotX,
          rotateY: rotY,
          x: transX,
          y: transY,
          transformStyle: "preserve-3d",
        }}
      >
        <Phone showSwipeApp={showSwipeApp} onChatComplete={onChatComplete} reduced={!!reduced} />
      </motion.div>
    </div>
  );
}

function Phone({
  showSwipeApp,
  onChatComplete,
  reduced,
}: {
  showSwipeApp: boolean;
  onChatComplete: () => void;
  reduced: boolean;
}) {
  return (
    <div className="relative w-[218px] sm:w-[248px] lg:w-[278px] aspect-[9/19.5] isolate">
      <div
        aria-hidden
        className="absolute -inset-14 sm:-inset-18 lg:-inset-22 bg-white/[0.05] sm:bg-white/[0.06] blur-[80px] sm:blur-[92px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -inset-7 sm:-inset-9 bg-gradient-to-tr from-white/[0.08] via-white/[0.02] to-transparent blur-2xl rounded-[60px] pointer-events-none"
      />
      <div className="relative w-full h-full rounded-[42px] bg-ink-00 border border-white/10 p-[9px] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.04)_inset,0_0_60px_-20px_rgba(255,255,255,0.06)_inset]">
        <div aria-hidden className="absolute inset-[3px] rounded-[40px] ring-1 ring-white/[0.06] pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-[3px] rounded-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(130deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 18%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.05) 82%, rgba(255,255,255,0.14) 100%)",
            mixBlendMode: "screen",
          }}
        />
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-ink-05">
          <DynamicIsland />
          <StatusBar />
          <AnimatePresence mode="wait">
            {!showSwipeApp ? (
              <motion.div
                key="hero-chat"
                className="absolute inset-0 z-[12]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeroGroupChat reduced={reduced} onDone={onChatComplete} />
              </motion.div>
            ) : (
              <motion.div
                key="hero-swipe"
                className="absolute inset-0 z-[12]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <AppChrome />
                <CardStack />
                <Glare />
                <GestureHint />
              </motion.div>
            )}
          </AnimatePresence>
          <HomeIndicator />
        </div>
      </div>
    </div>
  );
}

function Glare() {
  return (
    <motion.div
      aria-hidden
      initial={{ x: "-120%", opacity: 0 }}
      animate={{ x: "140%", opacity: [0, 0.14, 0] }}
      transition={{ duration: 2.6, delay: 1.4, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatDelay: 7 }}
      className="pointer-events-none absolute inset-0 z-[18]"
      style={{
        background:
          "linear-gradient(110deg, rgba(255,255,255,0) 42%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 58%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

function DynamicIsland() {
  return (
    <div className="absolute top-2 left-1/2 z-30 h-[26px] w-[84px] -translate-x-1/2 rounded-full border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.5)]" />
  );
}

function StatusBar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-[26] flex h-9 items-center justify-between px-6 pt-[10px] text-[10px] font-semibold text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="14" height="9" viewBox="0 0 16 10" fill="currentColor" aria-hidden>
          <rect x="0" y="6" width="3" height="4" rx="0.5" />
          <rect x="4" y="4" width="3" height="6" rx="0.5" />
          <rect x="8" y="2" width="3" height="8" rx="0.5" />
          <rect x="12" y="0" width="3" height="10" rx="0.5" />
        </svg>
        <svg width="13" height="9" viewBox="0 0 14 10" aria-hidden>
          <path d="M7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" />
          <path d="M3.2 5.5a5.4 5.4 0 017.6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M0.8 3a8.8 8.8 0 0112.4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
        <div className="w-5 h-2 rounded-sm border border-white/80 relative">
          <div className="absolute inset-[1px] bg-white rounded-[1px] w-[80%]" />
          <div className="absolute -right-[2px] top-[2px] w-[1.5px] h-[4px] bg-white/80 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}

function AppChrome() {
  return (
    <div className="absolute left-0 right-0 top-10 z-[25] border-b border-white/[0.05] bg-gradient-to-b from-black/38 via-black/12 to-transparent px-5 pb-2 pt-0.5 backdrop-blur-[8px]">
      <div className="flex items-center justify-between">
        <span className="font-display font-bold text-xs tracking-[-0.6px] text-ink-100 [text-shadow:0_1px_14px_rgba(0,0,0,0.92)]">
          veyag<span style={{ color: "var(--parchment)" }}>o</span>
        </span>
        <div className="flex items-center gap-2.5 text-white/[0.92] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const SWIPE_TEASE_DURATION = 4.8;

function CardStack() {
  const reduced = useReducedMotion();
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setCursor((c) => c + 1), 3400);
    return () => clearInterval(id);
  }, [reduced]);

  const visible = [0, 1, 2].map((offset) => {
    const abs = cursor + offset;
    return { abs, dest: destinations[abs % destinations.length] };
  });

  return (
    <div className="absolute inset-0 z-[14] flex items-center justify-center px-3 pb-[72px] pt-[72px]">
      <AnimatePresence initial={false}>
        {visible
          .slice()
          .reverse()
          .map(({ abs, dest }, revIndex) => {
            const pos = visible.length - 1 - revIndex;
            const rotate = (pos - 1) * -2.2;
            const y = pos * 10;
            const scale = 1 - pos * 0.04;
            const isTop = pos === 0;
            const exitRight = abs % 2 === 1;

            return (
              <motion.div
                key={abs}
                initial={{ opacity: 0, y: y + 34, scale: scale - 0.04, rotate }}
                animate={{ opacity: 1, y, scale, rotate }}
                exit={{
                  opacity: 0,
                  x: exitRight ? 320 : -320,
                  rotate: rotate + (exitRight ? 18 : -18),
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: 10 - pos }}
                className="absolute w-[88%] aspect-[3/4.3] rounded-[24px] overflow-hidden shadow-[0_26px_56px_-14px_rgba(0,0,0,0.88),0_0_0_1px_rgba(255,255,255,0.06)_inset] ring-1 ring-white/14"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={
                    reduced || !isTop
                      ? { x: 0, rotate: 0 }
                      : {
                          x: [0, 9, 0, -9, 0],
                          rotate: [0, 0.65, 0, -0.65, 0],
                        }
                  }
                  transition={{
                    duration: SWIPE_TEASE_DURATION,
                    repeat: reduced || !isTop ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 320px"
                    className="object-cover saturate-[1.02]"
                    priority={isTop}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/38 via-[36%] to-transparent" />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent"
                  />
                  {isTop && (
                    <>
                      <span className="absolute right-2.5 top-2.5 rounded-badge border border-white/22 bg-black/50 px-2 py-0.5 text-[8px] font-medium uppercase tracking-[0.14em] text-white/95 backdrop-blur-md">
                        {dest.budget} · {dest.bestTime}
                      </span>
                      <CardSwipeHints reduced={!!reduced} />
                      <div className="absolute bottom-4 left-3 max-w-[92%] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.9)]">
                        <div className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/75">{dest.country}</div>
                        <div className="display mt-0.5 text-[1.35rem] leading-[0.98] tracking-[-0.03em] sm:text-[1.5rem]">
                          {dest.name}
                        </div>
                        <div className="mt-1 text-[9px] leading-snug text-white/82">{dest.vibe}</div>
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
}

function PassDismissIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}

function SaveHeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
      <path
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardSwipeHints({ reduced }: { reduced: boolean }) {
  const circle =
    "pointer-events-none absolute top-1/2 z-[5] flex h-[56px] w-[56px] -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/28 bg-gradient-to-b from-white/[0.22] to-white/[0.05] text-white shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-md";
  const label = "mt-1 text-[6px] font-bold uppercase tracking-[0.2em] text-white/90";
  if (reduced) {
    return (
      <>
        <span aria-hidden className={`${circle} left-1.5`}>
          <PassDismissIcon />
          <span className={label}>Pass</span>
        </span>
        <span aria-hidden className={`${circle} right-1.5`}>
          <SaveHeartIcon />
          <span className={label}>Save</span>
        </span>
      </>
    );
  }
  return (
    <>
      <motion.span
        aria-hidden
        className={`${circle} left-1.5`}
        initial={false}
        animate={{ opacity: [0.78, 0.78, 0.78, 1, 0.88, 0.78], scale: [1, 1, 1, 1.05, 1, 1] }}
        transition={{
          duration: SWIPE_TEASE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.22, 0.48, 0.62, 0.82, 1],
        }}
      >
        <PassDismissIcon />
        <span className={label}>Pass</span>
      </motion.span>
      <motion.span
        aria-hidden
        className={`${circle} right-1.5`}
        initial={false}
        animate={{ opacity: [0.78, 0.78, 1, 0.9, 0.78, 0.78], scale: [1, 1, 1.05, 1, 1, 1] }}
        transition={{
          duration: SWIPE_TEASE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.16, 0.3, 0.44, 0.55, 1],
        }}
      >
        <SaveHeartIcon />
        <span className={label}>Save</span>
      </motion.span>
    </>
  );
}

function GestureHint() {
  return (
    <div className="pointer-events-none absolute inset-x-3 bottom-7 z-[24] flex justify-center">
      <div className="max-w-[min(100%,14rem)] rounded-full border border-white/20 bg-gradient-to-b from-white/[0.14] to-black/55 px-5 py-2 text-[7px] font-semibold uppercase tracking-[0.22em] text-white/95 shadow-[0_14px_44px_rgba(0,0,0,0.6)] backdrop-blur-xl [text-shadow:0_1px_12px_rgba(0,0,0,0.75)]">
        <span aria-hidden className="mr-2 text-white/40">
          ←
        </span>
        Swipe to decide
        <span aria-hidden className="ml-2 text-white/40">
          →
        </span>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-[28] h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/95 opacity-95 shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
  );
}
