"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Chapter = { id: string; num: string; label: string };

const CHAPTERS: Chapter[] = [
  { id: "chapter-try", num: "01", label: "Try it" },
  { id: "chapter-group", num: "02", label: "Group mode" },
  { id: "chapter-bracket", num: "03", label: "Bracket" },
  { id: "chapter-itinerary", num: "04", label: "Plan" },
  { id: "chapter-map", num: "05", label: "Explorer" },
  { id: "chapter-destinations", num: "06", label: "Destinations" },
  { id: "chapter-how-it-works", num: "07", label: "How it works" },
  { id: "chapter-features", num: "08", label: "Features" },
  { id: "chapter-faq", num: "09", label: "Questions" },
];

export default function ChapterRail() {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = CHAPTERS.map((c) => ({ id: c.id, el: document.getElementById(c.id) })).filter(
      (x): x is { id: string; el: HTMLElement } => !!x.el,
    );
    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (!visibleEntries.length) return;
        const top = visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        setActive(top.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.1, 0.5, 1] },
    );

    elements.forEach(({ el }) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="chapter-rail"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Chapter navigation"
          className="fixed left-5 lg:left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3 py-4 pl-1 pr-3"
        >
          {CHAPTERS.map((c) => {
            const isActive = active === c.id;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                data-cursor="dot"
                className="group relative flex items-center gap-3"
              >
                <span
                  className={`display text-[10px] tabular-nums transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/25 group-hover:text-white/70"
                  }`}
                >
                  {c.num}
                </span>
                <span
                  aria-hidden
                  className={`block h-px transition-all duration-500 ease-out ${
                    isActive ? "w-10 bg-white/70" : "w-5 bg-white/15 group-hover:bg-white/40"
                  }`}
                />
                <span
                  className={`text-[10px] uppercase tracking-[0.22em] whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0 text-white"
                      : "opacity-0 -translate-x-1 group-hover:opacity-80 group-hover:translate-x-0 text-gray-1"
                  }`}
                >
                  {c.label}
                </span>
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
