import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "We’re not hiring yet — but we will be. Tell us who you are.",
};

const roles = [
  "Senior iOS engineer",
  "Senior Android engineer",
  "Product designer (mobile)",
  "Travel-content editor",
  "Growth / marketing lead",
];

export default function Careers() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Careers</div>
          <h1 className="display text-5xl sm:text-7xl mb-6">We’re not hiring yet — but we will be.</h1>
          <p className="text-gray-1 text-lg max-w-2xl">
            Veyago is a team of one. That changes when we raise. If you’re a developer, designer, or
            travel-content writer who wants to be on the shortlist, send us a note from your own email.
          </p>
          <p className="mt-8 text-base text-gray-1 max-w-2xl leading-relaxed">
            <a
              href="mailto:hello@veyago.app?subject=Careers%20%E2%80%94%20shortlist"
              className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-white"
            >
              hello@veyago.app
            </a>{" "}
            — include your background and which role below you care about most.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Roles when we raise</div>
          <ul className="divide-y divide-white/10 border-t border-b border-white/10">
            {roles.map((r) => (
              <li key={r} className="py-4 flex justify-between items-baseline text-sm">
                <span>{r}</span>
                <span className="text-gray-3 text-xs">When we raise</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
