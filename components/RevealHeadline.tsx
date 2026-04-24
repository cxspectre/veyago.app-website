"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type Line = { text: string; className?: string };

type Props = {
  lines: Line[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export default function RevealHeadline({
  lines,
  className = "",
  delay = 0,
  as = "h2",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduced = useReducedMotion();

  const Tag = as as "h2";
  let wordIndex = 0;

  return (
    <div ref={ref} className={className}>
      <Tag className="inline-block w-full">
        {lines.map((line, li) => {
          const words = line.text.split(" ");
          return (
            <span key={li} className={`block ${line.className ?? ""}`}>
              {words.map((w, wi) => {
                const currentIndex = wordIndex++;
                return (
                  <span
                    key={`${li}-${wi}`}
                    className="inline-block overflow-hidden align-bottom pb-[0.08em] leading-[0.9]"
                  >
                    <motion.span
                      initial={reduced ? { y: 0 } : { y: "115%" }}
                      animate={inView ? { y: 0 } : reduced ? { y: 0 } : { y: "115%" }}
                      transition={{
                        duration: 0.9,
                        delay: delay + currentIndex * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      {w}
                      {wi < words.length - 1 && <span>&nbsp;</span>}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </Tag>
      {children}
    </div>
  );
}
