import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  effectiveDate?: string;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, lastUpdated, effectiveDate, children }: Props) {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-xs uppercase tracking-widest text-ink-30 mb-5">{eyebrow}</div>
        <h1 className="font-display font-bold text-4xl sm:text-6xl mb-4 tracking-[-0.03em] text-ink-100">{title}</h1>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-30 mb-12">
          {effectiveDate && <span>Effective · {effectiveDate}</span>}
          <span>Last updated · {lastUpdated}</span>
        </div>
        <div className="prose-mono">{children}</div>
      </section>
    </div>
  );
}
