"use client";

import { useState } from "react";
import { copyRichEmailDraft } from "@/lib/copyRichEmailDraft";

type Props = {
  plain: string;
  html: string;
  className?: string;
  disabled?: boolean;
};

export default function CopyStyledEmailButton({ plain, html, className, disabled }: Props) {
  const [state, setState] = useState<"idle" | "ok" | "plain" | "fail">("idle");

  async function onClick() {
    if (disabled) return;
    const r = await copyRichEmailDraft(plain, html);
    setState(r === "ok" ? "ok" : r === "plain-only" ? "plain" : "fail");
    if (r !== "fail") window.setTimeout(() => setState("idle"), 2800);
  }

  const label =
    state === "ok"
      ? "Copied — paste into the message body"
      : state === "plain"
        ? "Copied plain text (browser limited HTML)"
        : state === "fail"
          ? "Copy failed — try again"
          : "Copy styled draft (for paste in Mail)";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={
        className ??
        "w-full rounded-btn border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors disabled:cursor-not-allowed disabled:opacity-45"
      }
    >
      {label}
    </button>
  );
}
