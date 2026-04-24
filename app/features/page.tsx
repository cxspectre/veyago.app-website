import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "Features",
  description: "Every feature in Veyago — swipe, bracket, group mode, AI itinerary, explorer map.",
};

const bySlug = Object.fromEntries(destinations.map((d) => [d.slug, d]));

const tiles = [
  {
    slug: "swipe",
    name: "The swipe",
    one: "Right to save, left to pass, up to super-save.",
    imageSlug: "lisbon" as const,
  },
  {
    slug: "bracket",
    name: "The bracket",
    one: "20 → 10 → 5 → 1 elimination. One winner.",
    imageSlug: "porto" as const,
  },
  {
    slug: "group-mode",
    name: "Group mode",
    one: "Up to 10 friends, real-time, one code.",
    imageSlug: "tbilisi" as const,
  },
  {
    slug: "itinerary",
    name: "AI itinerary",
    one: "When you win, the plan writes itself.",
    imageSlug: "kyoto" as const,
  },
  {
    slug: "map",
    name: "Explorer map",
    one: "Optional map of places you’ve visited.",
    imageSlug: "cape-town" as const,
  },
];

export default function FeaturesIndex() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5 bg-navy-deep pb-12 pt-32 sm:pb-16 sm:pt-40">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-[10px] uppercase tracking-[0.22em] text-gray-3">Product</div>
          <h1 className="display mt-4 max-w-4xl text-[2.5rem] leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl sm:leading-[0.92] lg:text-7xl">
            Five features. One flow.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-1 sm:text-lg">
            Each surface is one idea, executed simply. Pick any card to read how it works in production — then
            see how it connects to the four-step journey on{" "}
            <Link href="/how-it-works" className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white/50">
              How it works
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-navy-deep py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {tiles.map((t) => {
              const cover = bySlug[t.imageSlug];
              return (
                <Link
                  key={t.slug}
                  href={`/features/${t.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-card border border-white/10 bg-surface/90 shadow-[0_28px_70px_-42px_rgba(0,0,0,0.85)] transition-all hover:border-white/20 hover:shadow-[0_36px_90px_-40px_rgba(0,0,0,0.9)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06]">
                    <Image
                      src={cover.image}
                      alt={`${cover.name}, ${cover.country}`}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      unoptimized
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#09111F]/90 via-transparent to-transparent opacity-90"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="display text-xl text-white sm:text-2xl">{t.name}</div>
                        <p className="mt-2 text-sm leading-relaxed text-gray-1">{t.one}</p>
                      </div>
                      <span className="shrink-0 pt-1 text-gray-3 transition-colors group-hover:text-white" aria-hidden>
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}
