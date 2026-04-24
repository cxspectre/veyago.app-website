import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description: "Press kit, boilerplate, founder contact, and coverage log.",
};

const assets = [
  "Logo pack (ZIP)",
  "Wordmark variants",
  "Founder headshots",
  "App screenshots",
  "Product video (MP4 + WebM)",
  "Brand-usage guidelines (PDF)",
];

export default function Press() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Press</div>
          <h1 className="display text-5xl sm:text-7xl mb-6">Veyago, for journalists.</h1>
          <p className="text-gray-1 text-lg max-w-2xl">
            Everything you need to file a story. If you need anything we haven’t thought of, email Cassian
            directly — there is no PR team.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 prose-mono">
          <h2>The story in 60 seconds</h2>
          <p>
            Veyago is a mobile travel app that replaces group-chat chaos with a swipe-and-bracket flow. Twenty
            destinations, four elimination rounds, one winner — and an auto-generated day-by-day plan. Built
            by one founder, Cassian Drefke. iOS and Android, early Q3 2026. Free forever; Premium €4.99/month.
            Based in the EU, incorporated in Delaware, privacy-first by default.
          </p>

          <h2>Boilerplate</h2>
          <blockquote>
            Veyago is a swipe-and-bracket travel app that ends group-chat deadlock and picks a destination in
            under five minutes. Based in the EU and incorporated in Delaware, Veyago Inc. is building a
            mobile-first planning tool with privacy-by-default architecture and a public build log.
            veyago.app.
          </blockquote>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Founder contact</div>
            <div className="text-white mb-1">Cassian Drefke — Founder & CEO</div>
            <a href="mailto:press@veyago.app" className="text-sm text-gray-1 underline">press@veyago.app</a>
            <div className="mt-4 text-sm text-gray-2">
              Or{" "}
              <a href="https://cal.com/veyago/press" className="underline">book a 20-min call</a>.
            </div>
          </div>

          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Assets</div>
            <ul className="space-y-2 text-sm text-gray-1">
              {assets.map((a) => (
                <li key={a} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>{a}</span>
                  <a href="#" className="text-gray-3 hover:text-white text-xs">Download ↓</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Coverage log</div>
          <p className="text-sm text-gray-2 max-w-xl">
            We’ll list every article, podcast, and video that features Veyago here. Post-launch.
          </p>
        </div>
      </section>
    </>
  );
}
