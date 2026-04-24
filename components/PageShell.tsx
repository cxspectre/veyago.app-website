import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  narrow?: boolean;
};

export default function PageShell({ eyebrow, title, subtitle, children, narrow = false }: Props) {
  const max = narrow ? "max-w-3xl" : "max-w-5xl";
  return (
    <div className="pt-32 pb-8">
      <section className={`mx-auto ${max} px-5 sm:px-8`}>
        {eyebrow && (
          <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">{eyebrow}</div>
        )}
        <h1 className="display text-4xl sm:text-6xl mb-6">{title}</h1>
        {subtitle && <div className="text-lg text-gray-1 max-w-2xl">{subtitle}</div>}
      </section>
      {children}
    </div>
  );
}
