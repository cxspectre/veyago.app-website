"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ease-out ${
          scrolled || open
            ? "bg-ink-05/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Veyago home">
            <VeyagoWordmark size="sm" />
          </Link>

          {/* Desktop links */}
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

          {/* Desktop CTAs */}
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

          {/* Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden w-10 h-10 inline-flex items-center justify-center -mr-2 relative z-50"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-ink-100 transition-all duration-300 origin-center ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-ink-100 transition-all duration-300 ${
                  open ? "opacity-0 scale-x-50" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-ink-100 transition-all duration-300 origin-center ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile drawer — rendered outside <header> to avoid stacking context issues */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-16 z-50 flex flex-col bg-ink-05 border-t border-white/5 overflow-y-auto"
          >
            {/* Nav links */}
            <nav className="flex-1 px-5 pt-6 pb-4">
              <ul className="flex flex-col">
                {links.map((l, i) => {
                  const active = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-white/5 transition-colors ${
                          active ? "text-ink-100" : "text-ink-70 hover:text-ink-100"
                        }`}
                      >
                        <span className="font-display font-bold text-2xl tracking-[-0.04em]">
                          {l.label}
                        </span>
                        {active ? (
                          <span
                            aria-hidden
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "var(--parchment)" }}
                          />
                        ) : (
                          <span aria-hidden className="text-ink-30 text-sm">→</span>
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA area */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="px-5 pb-10 pt-4 flex flex-col gap-3"
            >
              <Link
                href="/waitlist"
                onClick={() => setOpen(false)}
                className="w-full text-center text-sm font-medium bg-ink-100 text-ink-00 px-4 py-3.5 rounded-btn transition-colors hover:bg-ink-90"
              >
                Get early access
              </Link>
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="w-full text-center text-sm text-ink-70 border border-white/10 px-4 py-3.5 rounded-btn transition-colors hover:text-ink-100 hover:border-white/20"
              >
                Sign in
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
