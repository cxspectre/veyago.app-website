import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor updates",
  description: "Gated archive of monthly updates. Access requires a valid magic link.",
  robots: { index: false, follow: false },
};

export default function InvestorUpdates() {
  return (
    <div className="min-h-[100dvh] flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-md px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Gated</div>
        <h1 className="display text-4xl mb-4">Investor updates</h1>
        <p className="text-gray-1 text-sm mb-8">
          Monthly updates live here. Each one follows the same fixed template — KPIs, cash, highlights,
          lowlights, asks — the same format cap-table investors will see post-close.
        </p>
        <a
          href="/investors"
          className="inline-flex text-sm border border-white/20 rounded-btn px-4 py-2.5 hover:bg-white/5"
        >
          ← Back to investor page
        </a>
      </div>
    </div>
  );
}
