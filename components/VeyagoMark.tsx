import { SVGProps } from "react";

type MarkSize = 16 | 24 | 28 | 32 | 36 | 44 | 56 | 80;

interface VeyagoMarkProps extends SVGProps<SVGSVGElement> {
  size?: MarkSize;
  /** Override background fill. Defaults to ink-10 (#0E1A2E). */
  bg?: string;
}

/** Corner radius per size, matching the identity spec. */
const radii: Record<MarkSize, number> = {
  16: 6,
  24: 8,
  28: 9,
  32: 9,
  36: 10,
  44: 10,
  56: 10,
  80: 11,
};

/** Stroke width per size — thicker at small sizes to stay legible. */
const strokes: Record<MarkSize, number> = {
  16: 4,
  24: 3.2,
  28: 3,
  32: 3,
  36: 3,
  44: 2.8,
  56: 2.8,
  80: 2.8,
};

/** Dot radius per size. */
const dotR: Record<MarkSize, number> = {
  16: 4,
  24: 3.5,
  28: 3.2,
  32: 3.2,
  36: 3.2,
  44: 3,
  56: 3,
  80: 3,
};

export default function VeyagoMark({
  size = 44,
  bg = "#0E1A2E",
  ...props
}: VeyagoMarkProps) {
  const r = radii[size];
  const sw = strokes[size];
  const dr = dotR[size];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      focusable="false"
      {...props}
    >
      <rect width="44" height="44" rx={r} fill={bg} />
      <path
        d="M11 31 L22 13 L33 31"
        stroke="#F2F4F7"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="13" r={dr} fill="#D4C9A8" />
    </svg>
  );
}
