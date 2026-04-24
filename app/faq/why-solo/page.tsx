import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why solo",
  description: "Why Veyago is a team of one before product–market fit.",
};

export default function WhySoloFaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8 sm:py-36">
      <p className="text-[10px] uppercase tracking-[0.22em] text-gray-3">FAQ · stub</p>
      <h1 className="display mt-3 text-4xl leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl">Why solo</h1>
      <blockquote className="mt-10 border-l-2 border-white pl-6 text-lg leading-relaxed text-white/90 sm:text-xl">
        Every hire before product-market fit changes the thing you’re trying to find. A team of one is a
        decision, not a gap.
        <footer className="mt-4 text-sm text-gray-2">— Cassian Drefke</footer>
      </blockquote>
      <p className="mt-10 text-base leading-relaxed text-gray-1">
        A longer answer — cap table, velocity, when hiring starts — will live here. For now this page exists so
        the <Link href="/about" className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60">About</Link> quote
        has somewhere honest to point.
      </p>
      <Link
        href="/about#about-founder"
        className="mt-10 inline-flex text-sm font-medium text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/60"
      >
        ← Back to About
      </Link>
    </div>
  );
}
