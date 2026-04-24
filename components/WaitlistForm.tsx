"use client";

import { useState, FormEvent } from "react";

type Props = {
  compact?: boolean;
  showReferredBy?: boolean;
};

export default function WaitlistForm({ compact = false, showReferredBy = false }: Props) {
  const [email, setEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="bg-surface border border-white/10 rounded-card p-6">
        <div className="text-sm uppercase tracking-widest text-gray-3 mb-2">You’re in</div>
        <div className="display text-2xl mb-2">See you early Q3.</div>
        <p className="text-gray-1 text-sm mb-5">
          One email at launch. That’s it. You can unsubscribe in one click.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="text-xs border border-white/20 rounded-btn px-3 py-2 hover:bg-white/5">Copy referral link</a>
          <a href="#" className="text-xs border border-white/20 rounded-btn px-3 py-2 hover:bg-white/5">Share to WhatsApp</a>
          <a href="#" className="text-xs border border-white/20 rounded-btn px-3 py-2 hover:bg-white/5">Share to iMessage</a>
          <a href="#" className="text-xs border border-white/20 rounded-btn px-3 py-2 hover:bg-white/5">Share to X</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "flex flex-col sm:flex-row gap-2" : "space-y-3"}>
      <label className="sr-only" htmlFor="waitlist-email">Email address</label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@somewhere.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-surface border border-white/10 rounded-input px-4 py-3 text-sm text-white placeholder:text-gray-3 focus:border-white/40 outline-none"
      />
      {showReferredBy && (
        <>
          <label className="sr-only" htmlFor="waitlist-ref">Referred by (optional)</label>
          <input
            id="waitlist-ref"
            type="text"
            placeholder="Referred by (optional)"
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
            className="flex-1 bg-surface border border-white/10 rounded-input px-4 py-3 text-sm text-white placeholder:text-gray-3 focus:border-white/40 outline-none"
          />
        </>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm disabled:opacity-60"
      >
        {state === "submitting" ? "Adding you…" : "Join the waitlist"}
      </button>
    </form>
  );
}
