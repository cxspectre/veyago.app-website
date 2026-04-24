import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help centre",
  description: "Answers to common questions about Veyago — swiping, brackets, group mode, billing, and privacy.",
};

const categories = [
  { title: "Getting started", items: ["Creating an account", "Your first session", "Inviting friends"] },
  { title: "Swiping & brackets", items: ["How swipes work", "Super-saves", "Bracket ties"] },
  { title: "Group mode", items: ["Starting a session", "6-character invite codes", "Session lifecycle"] },
  { title: "Subscription & billing", items: ["Free vs Premium", "How to cancel", "Restoring purchases"] },
  { title: "Itineraries & booking", items: ["How the AI works", "Affiliate disclosure", "Editing itineraries"] },
  { title: "Account & privacy", items: ["Exporting your data", "Deleting your account", "Email preferences"] },
  { title: "Troubleshooting", items: ["App crashes on launch", "Can’t receive invite code", "Session reconnect issues"] },
];

const mostViewed = [
  "How do I cancel my Premium subscription?",
  "Why can’t my friend join my session?",
  "Does Veyago store my location?",
  "How do I delete my account?",
  "What happens if two destinations tie?",
];

export default function Help() {
  return (
    <>
      <section className="pt-32 pb-10">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Help centre</div>
          <h1 className="display text-5xl sm:text-7xl mb-6">Still stuck? Let’s fix that.</h1>
          <div className="max-w-xl">
            <label htmlFor="help-search" className="sr-only">Search help articles</label>
            <input
              id="help-search"
              type="search"
              placeholder="Search all help articles…"
              className="w-full bg-surface border border-white/10 rounded-input px-4 py-3.5 text-sm placeholder:text-gray-3 focus:border-white/40 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Most viewed</div>
          <ul className="divide-y divide-white/10 border-t border-b border-white/10">
            {mostViewed.map((m) => (
              <li key={m}>
                <a href="#" className="flex justify-between py-3.5 text-sm hover:bg-white/[0.02] px-2 -mx-2 rounded">
                  <span className="text-white">{m}</span>
                  <span className="text-gray-3">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Categories</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((c) => (
              <div key={c.title} className="rounded-card border border-white/10 bg-surface p-6">
                <div className="display text-lg mb-4">{c.title}</div>
                <ul className="space-y-2 text-sm text-gray-1">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-white">· {i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-card border border-white/10 bg-surface p-6 text-center">
            <div className="text-sm text-gray-1 mb-1">Still stuck?</div>
            <a href="mailto:support@veyago.app" className="display text-xl underline underline-offset-4">
              support@veyago.app
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
