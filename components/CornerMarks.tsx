type Props = {
  code?: string;
  label?: string;
  className?: string;
};

export default function CornerMarks({ code = "VYG-01", label, className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20" />
      <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/20" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/20" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20" />

      <span className="absolute top-2 left-4 display text-[9px] text-white/30 tabular-nums tracking-[0.2em]">
        {code}
      </span>
      {label && (
        <span className="absolute bottom-2 right-4 text-[9px] uppercase tracking-[0.22em] text-white/30">
          {label}
        </span>
      )}
    </div>
  );
}
