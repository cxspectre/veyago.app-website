"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "hover" | "drag" | "view" | "dot";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-all");
    return () => document.documentElement.classList.remove("cursor-none-all");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const detectVariant = (el: Element | null): Variant => {
      if (!el) return "default";
      const cur = (el as HTMLElement).dataset?.cursor as Variant | undefined;
      if (cur) return cur;
      const tag = el.tagName;
      if (tag === "A" || tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "LABEL")
        return "hover";
      if ((el as HTMLElement).getAttribute("role") === "button") return "hover";
      return detectVariant(el.parentElement);
    };

    const onOver = (e: MouseEvent) => setVariant(detectVariant(e.target as Element));
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVariant("default");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const isDot = variant === "dot" || variant === "default";
  const size = variant === "drag" ? 72 : variant === "view" ? 60 : variant === "hover" ? 44 : 30;
  const hasLabel = variant === "drag" || variant === "view";
  const label = variant === "drag" ? "DRAG" : variant === "view" ? "VIEW" : "";

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`fixed left-0 top-0 pointer-events-none z-[100] rounded-full bg-white transition-[width,height,opacity] duration-200 ${
          isDot ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-100px,-100px,0)", width: 6, height: 6 }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed left-0 top-0 pointer-events-none z-[100] rounded-full border border-white mix-blend-difference flex items-center justify-center transition-[width,height,opacity,background-color] duration-200 ease-out"
        style={{
          width: size,
          height: size,
          opacity: pressed ? 0.4 : hasLabel ? 1 : 0.85,
          backgroundColor: hasLabel ? "rgba(255,255,255,1)" : "transparent",
          transform: "translate3d(-100px,-100px,0)",
        }}
      >
        <span
          ref={labelRef}
          className={`display text-[9px] tracking-[0.22em] transition-opacity duration-200 ${
            hasLabel ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: hasLabel ? "#09111F" : "transparent" }}
        >
          {label}
        </span>
      </div>
    </>
  );
}
