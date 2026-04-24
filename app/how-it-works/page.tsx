import type { Metadata } from "next";
import Link from "next/link";
import HowItWorks from "@/components/home/HowItWorks";
import { WaitlistInline } from "@/components/CTABlocks";
import PageHeroBackdrop from "@/components/marketing/PageHeroBackdrop";
import { howItWorksHeroBackdropImage } from "@/lib/marketingImagery";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Pick a vibe, swipe twenty places, run the bracket, get the plan — four steps from indecision to a ticket.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeroBackdrop src={howItWorksHeroBackdropImage} objectClassName="object-cover object-[center_36%]">
        <div className="text-[10px] uppercase tracking-[0.22em] text-gray-3">Product · Flow</div>
        <h1 className="display mt-4 max-w-4xl text-[2.5rem] leading-[0.95] tracking-[-0.03em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.5)] sm:text-6xl sm:leading-[0.92] lg:text-7xl">
          How Veyago turns a vague trip idea into a booked plan.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/88 [text-shadow:0_1px_28px_rgba(0,0,0,0.45)] sm:text-lg">
          The app is built around one loop: constrain the world, feel out twenty options, eliminate until one
          place wins, then generate an itinerary your group can actually use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/features"
            className="rounded-btn border border-white/25 bg-black/20 px-4 py-2.5 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            All features
          </Link>
          <Link
            href="/waitlist"
            className="rounded-btn bg-white px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-offwhite"
          >
            Join waitlist
          </Link>
        </div>
      </PageHeroBackdrop>

      <HowItWorks embedded />

      <section className="border-t border-white/5 bg-navy-deep py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-sm leading-relaxed text-gray-1 sm:text-base">
            Ready to go deeper? Each step maps to a dedicated feature page — swipe physics, bracket math, group
            sessions, the itinerary engine, and the explorer map.
          </p>
          <Link
            href="/features"
            className="mt-6 inline-flex text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/60"
          >
            Explore the feature index →
          </Link>
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}
