import { ReactNode } from "react";
import Link from "next/link";
import { WaitlistInline } from "@/components/CTABlocks";

type Section = { title: string; body: ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  sub: string;
  sections: Section[];
  crossSell?: { href: string; label: string }[];
};

export default function FeaturePage({ eyebrow, title, sub, sections, crossSell }: Props) {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">{eyebrow}</div>
          <h1 className="display text-5xl sm:text-7xl mb-6 leading-[0.98]">{title}</h1>
          <p className="text-lg text-gray-1 max-w-2xl">{sub}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-16">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-white/10 pt-10">
              <h2 className="display text-2xl sm:text-3xl mb-5">{s.title}</h2>
              <div className="prose-mono">{s.body}</div>
            </div>
          ))}

          {crossSell && crossSell.length > 0 && (
            <div className="border-t border-white/10 pt-10">
              <div className="text-xs uppercase tracking-widest text-gray-3 mb-4">Read next</div>
              <div className="flex flex-wrap gap-3">
                {crossSell.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm border border-white/20 rounded-btn px-4 py-2 hover:bg-white/5"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <WaitlistInline />
    </>
  );
}
