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
            travel-content writer who wants to be on the shortlist, drop a note.
          </p>
        </div>
      </section>

      <section className="pb-16">
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

      <section className="pb-24">
        <div className="mx-auto max-w-xl px-5 sm:px-8">
          <div className="rounded-card border border-white/10 bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Get on the list</div>
            <form className="space-y-3">
              <Input label="Name" />
              <Input label="Email" type="email" />
              <Input label="LinkedIn or portfolio URL" />
              <Select label="Role" options={roles} />
              <TextArea label="Short note (optional)" />
              <button className="w-full bg-white text-navy px-5 py-3 rounded-btn font-medium text-sm mt-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <input
        type={type}
        className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white focus:border-white/40 outline-none"
      />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <select className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white focus:border-white/40 outline-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <textarea
        rows={3}
        className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white focus:border-white/40 outline-none resize-none"
      />
    </label>
  );
}
