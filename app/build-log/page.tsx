import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build log",
  description: "Weekly progress on Veyago — what shipped, what broke, what changed.",
};

export default function BuildLogPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8 sm:py-36">
      <p className="text-[10px] uppercase tracking-[0.22em] text-gray-3">Build log</p>
      <h1 className="display mt-3 text-4xl leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl">In public.</h1>
      <p className="mt-6 text-base leading-relaxed text-gray-1 sm:text-lg">
        The first weekly post is not up yet. When it is, this page will hold dated entries — shipped features,
        regressions, scope cuts, and lessons — in plain language.
      </p>
      <p className="mt-4 text-sm text-gray-3">
        Until then, the <Link href="/about" className="text-gray-1 underline underline-offset-4 hover:text-white">About</Link> page
        points here so the URL is real.
      </p>
      <Link
        href="/waitlist"
        className="mt-10 inline-flex rounded-btn border border-white/20 px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
      >
        Join the waitlist for launch →
      </Link>
    </div>
  );
}
