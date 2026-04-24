import type { Metadata } from "next";
import Link from "next/link";
import { MapVisualization } from "@/components/home/ExplorerMap";
import { WaitlistInline } from "@/components/CTABlocks";

export const metadata: Metadata = {
  title: "Explorer map",
  description:
    "Optional map of places you’ve visited — Natural Earth land and country outlines, no cluttered third-party map tiles. Opt in anytime.",
};

export default function Map() {
  return (
    <>
      <section className="pt-32 pb-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Feature · 05</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">Places you’ve actually been.</h1>
          <p className="text-lg text-gray-1 max-w-2xl">
            Explorer Map is an <strong className="text-white font-medium">opt-in</strong> view of countries and cities
            you’ve visited. We draw it on calm Natural Earth land and borders — not noisy commercial map tiles — so
            the geography reads clearly and the focus stays on your footprint.
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
              Continents read as landmass fill; countries read as thin admin lines. That keeps orientation obvious
              without a busy basemap fighting for attention.
            </p>
            <p>
              When you enable Explorer Map, your visited places are the story — geography first, your history second.
              Swiping and brackets stay in their own flow; this screen is for the footprint you choose to show.
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
              Precise location and photo imports are <strong>off by default</strong> and fully opt-in under GDPR. We
              only collect what you explicitly enable for Explorer Map — see the{" "}
              <Link href="/privacy" className="underline hover:text-white">
                privacy policy
              </Link>{" "}
              for categories and retention.
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
