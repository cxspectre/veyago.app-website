"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type Props = {
  points: number[];
  width?: number;
  height?: number;
};

export default function Sparkline({ points, width = 180, height = 36 }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const { path, area, dots } = useMemo(() => {
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = Math.max(1, max - min);
    const step = width / (points.length - 1);
    const y = (v: number) => height - ((v - min) / range) * (height - 4) - 2;
    const ps = points.map((p, i) => `${i * step},${y(p)}`);
    const pathStr = "M " + ps.join(" L ");
    const areaStr = `M 0,${height} L ${ps.join(" L ")} L ${width},${height} Z`;
    const dotList = points.map((p, i) => ({ x: i * step, y: y(p), v: p }));
    return { path: pathStr, area: areaStr, dots: dotList };
  }, [points, width, height]);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="overflow-visible"
    >
      <defs>
        <linearGradient id="sparkArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#sparkArea)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={dots[dots.length - 1].x}
        cy={dots[dots.length - 1].y}
        r="2.5"
        fill="white"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={dots[dots.length - 1].x}
        cy={dots[dots.length - 1].y}
        r="2.5"
        fill="none"
        stroke="white"
        strokeWidth="0.8"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 1.8, delay: 1.4, ease: "easeOut", repeat: Infinity, repeatDelay: 1.4 }}
        style={{ transformOrigin: `${dots[dots.length - 1].x}px ${dots[dots.length - 1].y}px` }}
      />
    </svg>
  );
}
