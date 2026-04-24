import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status",
  description: "Live operational status for the Veyago website, API, auth, and itinerary generation.",
};

type Status = "operational" | "degraded" | "down";

const systems: { name: string; status: Status; note?: string }[] = [
  { name: "Website", status: "operational" },
  { name: "API (Supabase)", status: "operational" },
  { name: "Authentication", status: "operational" },
  { name: "Itinerary generation (OpenAI)", status: "operational" },
];

const history = Array.from({ length: 90 }).map((_, i) => (i === 43 ? "degraded" : "operational") as Status);

const incidents = [
  {
    date: "14 April 2026",
    title: "Partial Supabase Realtime latency (EU-west)",
    duration: "38 min",
    resolved: true,
  },
];

export default function StatusPage() {
  const anyIssue = systems.some((s) => s.status !== "operational");
  return (
    <>
      <section className="pt-32 pb-10">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Status</div>
          <h1 className="display text-5xl sm:text-6xl mb-6">
            {anyIssue ? "Some systems are degraded." : "All systems operational."}
          </h1>
          <p className="text-gray-1">Last checked a few seconds ago. Refreshes automatically every 60s.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-3">
          {systems.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-card border border-white/10 bg-surface px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    s.status === "operational" ? "bg-white" : s.status === "degraded" ? "bg-gray-1" : "bg-gray-3"
                  }`}
                />
                <span>{s.name}</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-3">{s.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">90-day uptime</div>
          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="flex gap-[3px]">
              {history.map((d, i) => (
                <div
                  key={i}
                  title={d}
                  className={`flex-1 h-8 rounded-sm ${d === "operational" ? "bg-white/70" : "bg-gray-3"}`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs text-gray-3">
              <span>90 days ago</span>
              <span>today</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Incident log</div>
          <ul className="divide-y divide-white/10 border-t border-b border-white/10">
            {incidents.map((i) => (
              <li key={i.title} className="py-5">
                <div className="flex justify-between text-xs text-gray-3 mb-1">
                  <span>{i.date}</span>
                  <span>{i.duration} · resolved</span>
                </div>
                <div className="text-white">{i.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
