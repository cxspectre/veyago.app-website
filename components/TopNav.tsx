"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MagneticLink from "@/components/MagneticLink";
import VeyagoWordmark from "@/components/VeyagoWordmark";

const links = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/premium", label: "Premium" },
  { href: "/about", label: "About" },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ease-out ${
        scrolled || open
          ? "bg-ink-05/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Veyago home" onClick={() => setOpen(false)}>
          <VeyagoWordmark size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-ink-50">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-2 transition-colors ${
                  active ? "text-ink-70" : "hover:text-ink-90"
                }`}
              >
                {l.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-ink-70"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-ink-50 hover:text-ink-90 px-3 py-2 rounded-btn transition-colors"
          >
            Sign in
          </Link>
          <MagneticLink
            href="/waitlist"
            className="text-sm bg-ink-100 text-ink-00 px-4 py-2 rounded-btn font-medium hover:bg-ink-90 transition-colors"
          >
            Get early access
          </MagneticLink>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden w-10 h-10 inline-flex items-center justify-center -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 bg-ink-100 transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-ink-100 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-ink-100 transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-ink-05 z-30 px-5 py-8 flex flex-col gap-6 text-2xl font-display">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 pb-4 text-ink-100"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="flex-1 text-center text-base border border-white/20 px-4 py-3 rounded-btn text-ink-90"
            >
              Sign in
            </Link>
            <Link
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="flex-1 text-center text-base bg-ink-100 text-ink-00 px-4 py-3 rounded-btn font-medium"
            >
              Get early access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
