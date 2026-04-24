import type { Metadata } from "next";
import Link from "next/link";
import { MapVisualization } from "@/components/home/ExplorerMap";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "Explorer map",
  description:
    "Every swipe paints your map. A simple world view: continent landmasses and country outlines — no noisy basemap.",
};

export default function Map() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Feature · 05</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">
            Every swipe paints your map.
          </h1>
          <p className="text-lg text-gray-1 max-w-2xl">
            The explorer map stays deliberately quiet: Natural Earth land and country borders only. Your
            saves and trips layer on top later — no fake street tiles, no clutter.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <MapVisualization aspect="aspect-[16/9]" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16">
          <Section title="Outlines, not noise">
            <p>
              We start from a familiar globe: continents read as landmass fill, countries as thin admin
              lines. That keeps orientation obvious while your own progress (saves, trips, wins) can sit on
              top without fighting a busy basemap.
            </p>
            <p>
              Over time the map becomes a one-glance story of where you’ve been and where you’re leaning next
              — geography first, your signal second.
            </p>
          </Section>

          <Section title="Social layer">
            <p>
              You can compare maps with friends who opt in. Seeing that your friend has explored half of
              Southeast Asia while you haven’t turns the map into a planning surface all of its own.
            </p>
          </Section>

          <Section title="Your data, your map">
            <p>
              Background location is <strong>off by default</strong> and fully GDPR opt-in. Without it, the
              map fills in from your saves and your winners only. No silent tracking.
            </p>
            <p>
              The map is stored in Supabase against your account. When you delete your account, the map is
              deleted with it.
            </p>
          </Section>

          <div className="border-t border-white/10 pt-10">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Read next</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/features/swipe" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                The swipe →
              </Link>
              <Link href="/features/itinerary" className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5">
                AI itinerary →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-10">
      <h2 className="display text-2xl sm:text-3xl mb-5">{title}</h2>
      <div className="prose-mono">{children}</div>
    </div>
  );
}
