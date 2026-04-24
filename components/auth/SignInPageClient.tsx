"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState, useMemo, FormEvent } from "react";
import CopyStyledEmailButton from "@/components/CopyStyledEmailButton";
import { destinations } from "@/lib/destinations";
import { buildTeamSignInDraftBody } from "@/lib/emailDraftBodies";
import { buildTeamSignInDraftHtml } from "@/lib/emailDraftHtml";
import { EMAIL_FLOW_DISCLAIMER_UI } from "@/lib/emailFlowDisclaimer";
import { openEmailDraft } from "@/lib/mailto";

const slides = destinations.slice(0, 5);

const TEAM_EMAIL = "cassian@veyago.app";

export default function SignInPageClient() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [workEmail, setWorkEmail] = useState("");
  const [accessNote, setAccessNote] = useState("");

  const plainDraft = useMemo(() => buildTeamSignInDraftBody(workEmail, accessNote), [workEmail, accessNote]);
  const htmlDraft = useMemo(() => buildTeamSignInDraftHtml(workEmail, accessNote), [workEmail, accessNote]);

  const next = useCallback(() => setI((v) => (v + 1) % slides.length), []);
  const prev = useCallback(() => setI((v) => (v - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(next, 5200);
    return () => window.clearInterval(t);
  }, [next, reduced]);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="mb-12 max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.22em] text-gray-3">Account</p>
        <h1 className="display mt-3 text-4xl leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl">Sign in</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-1 sm:text-lg">
          Team access is live on a leash. Traveler sign-in is on the stove — something good is brewing.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:items-start">
        <section className="rounded-card border border-white/10 bg-surface/80 p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:p-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-amber-200/90">Employees · internal</div>
          <h2 className="display mt-2 text-xl text-white sm:text-2xl">Team sign-in</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-1">
            Use your <strong className="text-white/90">@veyago.app</strong> email only. Personal accounts are not
            provisioned yet.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
            }}
          >
            <label className="block">
              <span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-gray-3">Work email</span>
              <input
                type="email"
                name="email"
                autoComplete="username"
                placeholder="you@veyago.app"
                className="w-full rounded-btn border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-white/20 placeholder:text-gray-3 focus:border-white/30 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-gray-3">Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-btn border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-white/20 placeholder:text-gray-3 focus:border-white/30 focus:ring-2"
              />
            </label>
            <button
              type="submit"
              disabled
              className="w-full cursor-not-allowed rounded-btn border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/50"
            >
              Sign in
            </button>
            <p className="text-center text-[11px] leading-relaxed text-gray-3">
              SSO and password handoff are being wired. If you need access today, use the section below or email{" "}
              <a
                href={`mailto:${TEAM_EMAIL}`}
                className="text-gray-1 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                {TEAM_EMAIL}
              </a>
              .
            </p>
          </form>

          <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-3">Need access before SSO lands?</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-1">
                Not a login form — this opens a pre-filled email so we can route you without running your message
                through our web servers.
              </p>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-gray-3">Email for this request</span>
              <input
                type="email"
                autoComplete="email"
                placeholder="you@veyago.app"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                className="w-full rounded-btn border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-white/20 placeholder:text-gray-3 focus:border-white/30 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-gray-3">Short note (optional)</span>
              <textarea
                rows={2}
                placeholder="e.g. role, what you need access to"
                value={accessNote}
                onChange={(e) => setAccessNote(e.target.value)}
                className="w-full resize-none rounded-btn border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-white/20 placeholder:text-gray-3 focus:border-white/30 focus:ring-2"
              />
            </label>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!workEmail.trim()) return;
                  const subject = "[Veyago] Team sign-in / access";
                  openEmailDraft(TEAM_EMAIL, subject, plainDraft);
                }}
                disabled={!workEmail.trim()}
                className="w-full rounded-btn border border-white/15 bg-ink-100 px-4 py-3 text-sm font-medium text-ink-00 hover:bg-ink-90 transition-colors disabled:cursor-not-allowed disabled:opacity-45"
              >
                Open in email app
              </button>
              <CopyStyledEmailButton plain={plainDraft} html={htmlDraft} disabled={!workEmail.trim()} />
            </div>
            <div className="space-y-2 border-t border-white/10 pt-3 text-center">
              <p className="text-[11px] leading-relaxed text-gray-3">
                Plain mailto to {TEAM_EMAIL}. Styled block: copy, then select all in the body and paste. Slack works too
                if you already have a thread.
              </p>
              <p className="text-[11px] leading-relaxed text-gray-3">{EMAIL_FLOW_DISCLAIMER_UI}</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-card border border-white/10 bg-[#050c18] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.88)]">
          <div className="absolute right-4 top-4 z-20 rounded-full border border-amber-200/25 bg-amber-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-100/95 backdrop-blur-sm">
            Coming soon
          </div>

          <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slides[i].slug}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[i].image}
                  alt=""
                  fill
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover"
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-[#050c18]/55 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">Preview</p>
                  <p className="display mt-1 text-2xl text-white sm:text-3xl">{slides[i].name}</p>
                  <p className="mt-1 text-sm text-white/70">{slides[i].country}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-1">{slides[i].vibe}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] bg-black/35 px-4 py-3 sm:px-5">
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Show slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/45"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-btn border border-white/15 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-btn border border-white/15 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Next
              </button>
            </div>
          </div>

          <div className="border-t border-white/[0.06] bg-black/25 px-5 py-5 sm:px-8 sm:py-6">
            <p className="text-sm leading-relaxed text-gray-1">
              <span className="font-medium text-white/90">Something&apos;s brewing here.</span> Traveler accounts,
              magic links, and Apple / Google sign-in ship with the public app — we&apos;ll retire this teaser the
              day you can log in for real.
            </p>
            <Link
              href="/waitlist"
              className="mt-4 inline-flex text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60"
            >
              Join the waitlist instead →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
