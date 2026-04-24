import type { Metadata } from "next";
import ContactAddressActions from "@/components/ContactAddressActions";

export const metadata: Metadata = {
  title: "Contact",
  description: "The right inbox for the right question. No generic contact form.",
};

const rows = [
  { route: "General", use: "Anything that doesn’t fit the others", address: "hello@veyago.app" },
  { route: "Press", use: "Quotes, interviews, coverage", address: "press@veyago.app" },
  { route: "Investors", use: "The round, the data room", address: "invest@veyago.app" },
  { route: "Partners", use: "Affiliates, destinations, integrations", address: "partners@veyago.app" },
  { route: "Support", use: "Help with the app", address: "support@veyago.app" },
];

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">Contact</div>
          <h1 className="display text-5xl sm:text-7xl mb-6">The right inbox.</h1>
          <p className="text-gray-1 text-lg max-w-2xl">
            No ‘hello@’ catch-all that disappears. Pick the one that matches what you’re writing about and
            you’ll get a real answer, usually the same day. If you pasted a styled message from elsewhere on the site,
            use <strong className="text-white font-medium">Copy address</strong> on the matching row so the right
            inbox lands in <strong className="text-white font-medium">To:</strong>
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ul className="divide-y divide-white/10 border-t border-b border-white/10">
            {rows.map((r) => (
              <li key={r.route} className="grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-6 py-5 items-start sm:items-center">
                <div className="display text-lg">{r.route}</div>
                <div className="text-sm text-gray-1">{r.use}</div>
                <ContactAddressActions address={r.address} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
