"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number;
  padDigits?: number;
  locale?: boolean;
  className?: string;
  suffix?: string;
};

function formatValue(v: number, padDigits?: number, locale = true) {
  const rounded = Math.round(v);
  if (padDigits) return rounded.toString().padStart(padDigits, "0");
  return locale ? rounded.toLocaleString() : rounded.toString();
}

export default function CountUp({
  to,
  duration = 1.4,
  padDigits,
  locale = true,
  className,
  suffix,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const reduced = useReducedMotion();
  const [val, setVal] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {formatValue(val, padDigits, locale)}
      {suffix}
    </span>
  );
}
