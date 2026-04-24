"use client";

import { useState } from "react";

export default function ContactAddressActions({ address }: { address: string }) {
  const [state, setState] = useState<"idle" | "copied" | "fail">("idle");

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setState("copied");
      window.setTimeout(() => setState("idle"), 2200);
    } catch {
      setState("fail");
      window.setTimeout(() => setState("idle"), 2200);
    }
  }

  const label = state === "copied" ? "Copied" : state === "fail" ? "Copy failed" : "Copy address";

  return (
    <div className="flex flex-col items-start gap-2 sm:items-end">
      <a
        href={`mailto:${address}`}
        className="text-sm underline underline-offset-4 text-white hover:text-offwhite break-all"
      >
        {address}
      </a>
      <button
        type="button"
        onClick={copyAddress}
        className="rounded-btn border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-2 hover:border-white/25 hover:text-white transition-colors"
      >
        {label}
      </button>
      <p className="max-w-[14rem] text-left text-[10px] leading-snug text-gray-3 sm:text-right">
        Use when you paste a styled draft — put this in <span className="text-white/80">To:</span>
      </p>
    </div>
  );
}
