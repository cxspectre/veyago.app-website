"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  external?: boolean;
};

export default function MagneticLink({
  href,
  children,
  className,
  strength = 0.35,
  external,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 12, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 12, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {content}
    </Link>
  );
}
