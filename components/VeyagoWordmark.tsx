import { HTMLAttributes } from "react";

interface VeyagoWordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Text size variant. Maps to predefined size + tracking classes.
   * "xl" = 68px, "lg" = 42px, "md" = 26px, "sm" = 18px, "xs" = 12px
   */
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  /** On light background — uses navy text + parchment-dim 'o'. */
  onLight?: boolean;
}

const sizeClasses: Record<string, string> = {
  xl: "text-[68px] tracking-[-3.5px]",
  lg: "text-[42px] tracking-[-2px]",
  md: "text-[26px] tracking-[-1.2px]",
  sm: "text-[18px] tracking-[-0.6px]",
  xs: "text-[12px] tracking-[-0.3px]",
};

export default function VeyagoWordmark({
  size = "sm",
  onLight = false,
  className,
  ...props
}: VeyagoWordmarkProps) {
  return (
    <span
      className={[
        "font-display font-bold leading-none select-none",
        sizeClasses[size],
        onLight ? "text-ink-05" : "text-ink-100",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      veyag
      <span style={{ color: onLight ? "var(--parchment-dim)" : "var(--parchment)" }}>o</span>
    </span>
  );
}
