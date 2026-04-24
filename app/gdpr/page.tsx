import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "GDPR",
  description: "Export or delete your Veyago data. Request forms and the lawful bases we rely on.",
};

export default function GDPR() {
  return (
    <LegalPage eyebrow="Legal" title="GDPR & data requests" lastUpdated="20 April 2026">
      <h2>Your rights under GDPR</h2>
      <ul>
        <li><strong>Access</strong> — get a copy of your personal data.</li>
        <li><strong>Rectification</strong> — correct inaccurate data.</li>
        <li><strong>Erasure</strong> — ask us to delete your data.</li>
        <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
        <li><strong>Object / restrict</strong> — limit certain processing.</li>
      </ul>

      <h2>How to exercise them</h2>
      <p>
        If you have a Veyago account, the fastest path is the app or <code>/account</code>, which has
        one-tap export and delete. Otherwise, email{" "}
        <a href="mailto:privacy@veyago.app">privacy@veyago.app</a> with the request and the email associated
        with your account. We respond within 30 days.
      </p>

      <h2>Lawful bases we rely on</h2>
      <ul>
        <li>Contract — to operate your account and deliver sessions/itineraries.</li>
        <li>Consent — for marketing email, background location, and analytics opt-in.</li>
        <li>Legitimate interest — for security, fraud prevention, and product improvement.</li>
      </ul>

      <h2>Data Protection Officer</h2>
      <p>
        Cassian Drefke — <a href="mailto:privacy@veyago.app">privacy@veyago.app</a>.
      </p>

      <h2>Request form</h2>
      <form className="not-prose space-y-3">
        <Input label="Your email" type="email" />
        <Select label="Request type" options={["Export", "Deletion", "Correction", "Objection", "Other"]} />
        <TextArea label="Details" />
        <button className="bg-white text-navy px-5 py-3 rounded-btn font-medium text-sm">
          Submit request
        </button>
      </form>
    </LegalPage>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <input type={type} className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white focus:border-white/40 outline-none" />
    </label>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <select className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white focus:border-white/40 outline-none">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function TextArea({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gray-3">{label}</span>
      <textarea rows={4} className="mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white focus:border-white/40 outline-none resize-none" />
    </label>
  );
}
