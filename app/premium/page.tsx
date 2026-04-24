import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium",
  description: "Veyago Free vs Premium. €4.99/month or €29.99/year. Subscribe in the app.",
};

type Row = { row: string; free: string; premium: string };

const rows: Row[] = [
  { row: "Sessions per month", free: "3", premium: "Unlimited" },
  { row: "Group size", free: "Up to 4 friends", premium: "Up to 10 friends" },
  { row: "AI itinerary", free: "Preview only", premium: "Full generated plan" },
  { row: "Hidden Gems pack", free: "Locked", premium: "Included" },
  { row: "Super-save boost", free: "1 per session", premium: "Unlimited" },
  { row: "Ads / sponsored cards", free: "Yes", premium: "Never" },
  { row: "Offline swipes", free: "Last 20", premium: "Last 200" },
];

export default function Premium() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-44 sm:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Pricing</div>
            <h1 className="display text-5xl sm:text-7xl leading-[0.98]">
              Free forever.
              <br />
              <span className="text-gray-3">Premium optional.</span>
            </h1>
          </div>
          <p className="text-gray-1 text-base sm:text-lg max-w-md">
            Two tiers. No dark patterns, no ‘most-popular’ badge nudging your eye. Pick the one that fits how
            often you travel with the people who can’t decide.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid md:grid-cols-2 gap-4">
          <PlanCard
            label="Free"
            price="€0"
            priceNote="Forever · No card · No catch"
            cta="Download the app"
            ctaHref="/download"
            outline
            blurb="Everything a friend group of four needs to turn ‘where should we go?’ into a winner. No trial, no gotcha."
            rows={rows}
            pick="free"
          />
          <PlanCard
            label="Premium"
            price="€4.99"
            priceSuffix="/mo"
            priceNote="€29.99/yr · Two months free"
            cta="Subscribe in the app"
            ctaHref="/download"
            blurb="For the kind of group that travels four times a year, not four times a decade. Unlimited, ad-free, max 10 friends."
            rows={rows}
            pick="premium"
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 border-t border-white/10 pt-12">
            <div className="text-xs uppercase tracking-widest text-gray-3">
              What you’d pay
              <br />
              for the same hours elsewhere
            </div>
            <ul className="space-y-4 text-gray-1 max-w-2xl">
              <CompareRow left="A dinner out to argue about Spain vs Portugal" right="≈ €45" />
              <CompareRow left="A 20-minute travel-agent phone call" right="≈ €35" />
              <CompareRow left="A year of Veyago Premium" right="€29.99" highlight />
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid md:grid-cols-3 gap-6 border-t border-white/10 pt-12">
          <QA q="Can I cancel?" a="Yes, in your device’s App Store / Play settings. No dark patterns." />
          <QA q="Do I pay on the website?" a="No — billing is Apple or Google only. Keeps compliance simple and cancellation one-tap." />
          <QA q="Student discount?" a="Not in v1. Referrals give free Premium months — send the app to three friends who join." />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 text-sm bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium"
          >
            Join the waitlist →
          </Link>
        </div>
      </section>
    </>
  );
}

function PlanCard({
  label,
  price,
  priceSuffix,
  priceNote,
  cta,
  ctaHref,
  blurb,
  rows,
  outline,
  pick,
}: {
  label: string;
  price: string;
  priceSuffix?: string;
  priceNote: string;
  cta: string;
  ctaHref: string;
  blurb: string;
  rows: Row[];
  outline?: boolean;
  pick: "free" | "premium";
}) {
  const isPremium = pick === "premium";
  return (
    <div
      className={`rounded-card p-8 relative overflow-hidden ${
        outline ? "border border-white/10 bg-surface" : "border border-ink-90 bg-ink-100 text-ink-00"
      }`}
    >
      <div className="flex items-baseline justify-between mb-4">
        <div
          className={`text-xs uppercase tracking-widest ${outline ? "text-gray-3" : "text-gray-3"}`}
        >
          {label}
        </div>
        {isPremium && (
          <span className="display text-[10px] uppercase tracking-widest px-2 py-1 rounded-badge bg-navy text-white">
            Ad-free
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="display text-6xl leading-none">{price}</span>
        {priceSuffix && (
          <span className={`text-base ${outline ? "text-gray-3" : "text-gray-3"}`}>{priceSuffix}</span>
        )}
      </div>
      <div className={`text-xs ${outline ? "text-gray-3" : "text-gray-3"}`}>{priceNote}</div>
      <p className={`text-sm mt-6 ${outline ? "text-gray-1" : "text-gray-3"}`}>{blurb}</p>

      <Link
        href={ctaHref}
        className={`mt-6 inline-flex items-center gap-2 text-sm px-5 py-3 rounded-btn font-medium transition-colors ${
          outline ? "border border-white/20 text-white hover:bg-white/5" : "bg-navy text-white hover:bg-black"
        }`}
      >
        {cta}
        <span aria-hidden>→</span>
      </Link>

      <ul className={`mt-8 space-y-3 text-sm ${outline ? "" : ""}`}>
        {rows.map((r) => (
          <li
            key={r.row}
            className={`flex justify-between items-baseline gap-4 border-b pb-3 ${
              outline ? "border-white/5 text-gray-1" : "border-black/10"
            }`}
          >
            <span className={outline ? "text-gray-2" : "text-gray-3"}>{r.row}</span>
            <span
              className={`text-right font-medium ${
                outline ? "text-white" : "text-navy"
              }`}
            >
              {pick === "free" ? r.free : r.premium}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareRow({
  left,
  right,
  highlight = false,
}: {
  left: string;
  right: string;
  highlight?: boolean;
}) {
  return (
    <li
      className={`flex items-baseline justify-between gap-6 pb-3 border-b border-white/5 ${
        highlight ? "text-white" : ""
      }`}
    >
      <span className={`${highlight ? "text-white" : "text-gray-1"} text-sm sm:text-base`}>{left}</span>
      <span className={`display ${highlight ? "text-3xl" : "text-xl text-gray-2"} tabular-nums`}>{right}</span>
    </li>
  );
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <div className="display text-sm text-white mb-2">{q}</div>
      <p className="text-sm text-gray-1 leading-relaxed">{a}</p>
    </div>
  );
}
