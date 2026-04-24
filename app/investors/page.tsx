import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Veyago is raising a €350k SAFE. App launch targeted for early Q3 2026. Request access to the data room.",
};

const round = [
  ["Instrument", "SAFE (YC standard, post-money)"],
  ["Target raise", "€350,000"],
  ["Valuation cap", "€6–8M"],
  ["Minimum check", "€5,000"],
  ["Close target", "July 2026"],
];

const inRoom = [
  "Pitch deck",
  "Business plan",
  "App documentation",
  "Design specification",
  "Financial projections (3-year monthly)",
  "Cap table",
  "SAFE template (YC standard)",
  "IP assignment agreement",
];

const fit = [
  "Backs consumer mobile apps at seed / pre-seed.",
  "Comfortable with a solo-founder round (pre-team).",
  "Can co-invest with a US Delaware C-Corp.",
];

export default function Investors() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Investors</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">
            The swipe-and-bracket travel app. Raising €350k SAFE.
          </h1>
          <p className="text-gray-1 text-lg max-w-2xl mb-8">
            Built by one founder. Backed by a 3-year business plan, a 31-page spec, and a working app.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#request-access"
              className="bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm"
            >
              Request access →
            </a>
            <Link
              href="https://cal.com/veyago/investor-call"
              className="border border-white/20 text-white px-5 py-3 rounded-btn text-sm hover:bg-white/5"
            >
              Book a 30-min call
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">The round</div>
            <ul className="divide-y divide-white/5">
              {round.map(([k, v]) => (
                <li key={k} className="flex justify-between py-3 text-sm">
                  <span className="text-gray-2">{k}</span>
                  <span className="text-white text-right">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Traction</div>
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Waitlist" value="1,284" />
              <Stat label="Destinations ready" value="162" />
              <Stat label="Built" value="62%" />
              <Stat label="Build-log subscribers" value="412" />
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-3">
              Live counters. Updated weekly.
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 grid md:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">The 30-second pitch</div>
            <p className="text-gray-1 text-lg leading-relaxed">
              Group travel planning is broken. Eight people, forty-three messages, zero decisions. Veyago
              replaces that with a swipe-and-bracket flow: 20 destinations, four elimination rounds, one
              winner, one auto-generated day-by-day plan. Premium is €4.99/mo. Booking links are
              affiliate-disclosed. EU-hosted, GDPR-first, iOS and Android at launch. Early Q3 2026.
            </p>
          </div>
          <div className="aspect-video bg-surface border border-white/10 rounded-card flex items-center justify-center text-gray-3 text-sm">
            60-second founder video
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">What’s in the data room</div>
          <div className="rounded-card border border-white/10 bg-surface p-8">
            <p className="text-sm text-gray-2 mb-5">
              A list, not the contents. Access granted on request.
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-2 text-sm text-gray-1">
              {inRoom.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="text-gray-3">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Who’s a fit</div>
          <ul className="space-y-3 text-gray-1">
            {fit.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-gray-3">·</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="request-access" className="pb-24">
        <div className="mx-auto max-w-xl px-5 sm:px-8">
          <div className="rounded-card border border-white/10 bg-surface p-8">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Request access</div>
            <h2 className="display text-3xl mb-5">A magic link to the data room.</h2>
            <p className="text-sm text-gray-1 mb-6">
              Submissions are approved manually. Links expire in 30 days. Documents are watermarked.
            </p>
            <form className="space-y-3">
              <Field label="Name" />
              <Field label="Email" type="email" />
              <Field label="Firm (optional)" />
              <Field label="LinkedIn URL" />
              <Field label="Check size range" placeholder="e.g. €25k–€100k" />
              <TextArea label="Anything you want Cassian to know" />
              <button type="submit" className="w-full bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm mt-2">
                Request access
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="display text-3xl">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-gray-3 mt-1">{label}</div>
    </div>
  );
}

function Field({ label, type = "text", placeholder = "" }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white placeholder:text-gray-3 focus:border-white/40 outline-none"
      />
    </label>
  );
}

function TextArea({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <textarea
        rows={3}
        className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white placeholder:text-gray-3 focus:border-white/40 outline-none resize-none"
      />
    </label>
  );
}
