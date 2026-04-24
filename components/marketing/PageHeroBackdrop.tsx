import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  /** Tailwind classes for `object-*` positioning on the photo. */
  objectClassName?: string;
  children: ReactNode;
};

/**
 * Full-bleed hero band with photo + scrims — same visual language as the homepage hero.
 * Parent supplies min-height via content; section enforces a floor so `fill` imagery has room.
 */
export default function PageHeroBackdrop({
  src,
  objectClassName = "object-cover object-[center_34%]",
  children,
}: Props) {
  return (
    <section className="relative min-h-[min(72vh,640px)] overflow-hidden border-b border-white/5 bg-navy-deep sm:min-h-[min(68vh,700px)]">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className={`${objectClassName} opacity-[0.2] sm:opacity-[0.24]`}
          unoptimized
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(75% 58% at 50% 108%, rgba(255,168,99,0.26) 0%, rgba(255,168,99,0) 58%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,17,31,0.92) 0%, rgba(9,17,31,0.48) 40%, rgba(9,17,31,0.76) 70%, rgba(9,17,31,0.94) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        />
      </div>

      <div className="relative z-10 pb-12 pt-32 sm:pb-16 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
      </div>
    </section>
  );
}
