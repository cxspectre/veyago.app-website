"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  chapter: string;
  number: string;
  line1: string;
  line2: string;
  footnote?: string;
};

export default function ChapterDivider({ chapter, number, line1, line2, footnote }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bigNumScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const bigNumY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const bigNumOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.08, 0.08, 0]);

  return (
    <section ref={ref} className="relative py-28 sm:py-40 overflow-hidden">
      <motion.div
        aria-hidden
        style={{ scale: bigNumScale, y: bigNumY, opacity: bigNumOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="display leading-none text-[16rem] sm:text-[26rem] tracking-[-0.05em] text-white select-none">
          {number}
        </span>
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-gray-3 mb-10 justify-center">
          <span className="display text-white/40 tabular-nums">{chapter}</span>
          <span aria-hidden className="block w-10 h-px bg-white/15" />
          <span>Transition</span>
        </div>

        <h2 className="display text-center leading-[0.86] tracking-[-0.035em] text-[2.25rem] sm:text-[4.5rem] lg:text-[6rem]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {line1}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-3"
          >
            {line2}
          </motion.div>
        </h2>

        {footnote && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 text-center text-[11px] uppercase tracking-[0.22em] text-gray-3"
          >
            {footnote}
          </motion.div>
        )}
      </div>
    </section>
  );
}
