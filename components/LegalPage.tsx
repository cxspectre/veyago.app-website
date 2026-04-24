import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, lastUpdated, children }: Props) {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">{eyebrow}</div>
        <h1 className="display text-4xl sm:text-6xl mb-4">{title}</h1>
        <div className="text-xs text-gray-3 mb-12">Last updated · {lastUpdated}</div>
        <div className="prose-mono">{children}</div>
      </section>
    </div>
  );
}
