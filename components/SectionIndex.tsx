type Props = {
  n: string;
  label: string;
  align?: "left" | "center";
};

export default function SectionIndex({ n, label, align = "left" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-gray-3 mb-6 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="display text-[11px] text-white/40 tabular-nums">§ {n}</span>
      <span aria-hidden className="block w-10 h-px bg-white/10" />
      <span className="text-gray-2">{label}</span>
    </div>
  );
}
