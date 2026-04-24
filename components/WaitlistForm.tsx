"use client";

import { useState, FormEvent, useMemo } from "react";
import CopyStyledEmailButton from "@/components/CopyStyledEmailButton";
import { buildWaitlistDraftBody } from "@/lib/emailDraftBodies";
import { buildWaitlistDraftHtml } from "@/lib/emailDraftHtml";
import { EMAIL_FLOW_DISCLAIMER_UI } from "@/lib/emailFlowDisclaimer";
import { openEmailDraft } from "@/lib/mailto";

type Props = {
  compact?: boolean;
  showReferredBy?: boolean;
};

const TO = "hello@veyago.app";

export default function WaitlistForm({ compact = false, showReferredBy = false }: Props) {
  const [email, setEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [hint, setHint] = useState(false);

  const plainDraft = useMemo(() => buildWaitlistDraftBody(email, referredBy), [email, referredBy]);
  const htmlDraft = useMemo(() => buildWaitlistDraftHtml(email, referredBy), [email, referredBy]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = "[Veyago] Waitlist — early access";
    openEmailDraft(TO, subject, plainDraft);
    setHint(true);
  }

  const inputBase =
    "bg-surface border border-white/10 rounded-input px-4 py-3 text-sm text-white placeholder:text-gray-3 focus:border-white/40 outline-none";
  const inputClass = compact ? `flex-1 ${inputBase}` : `w-full ${inputBase}`;

  return (
    <div className={compact ? "flex flex-col gap-2" : "space-y-3"}>
      <form onSubmit={onSubmit} className={compact ? "flex flex-col sm:flex-row gap-2" : "space-y-3"}>
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@somewhere.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        {showReferredBy && (
          <>
            <label className="sr-only" htmlFor="waitlist-ref">
              Referred by (optional)
            </label>
            <input
              id="waitlist-ref"
              type="text"
              placeholder="Referred by (optional)"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
              className={inputClass}
            />
          </>
        )}
        <button
          type="submit"
          className={`shrink-0 bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm hover:bg-ink-90 transition-colors ${compact ? "" : "w-full"}`}
        >
          Open in email app
        </button>
      </form>
      <CopyStyledEmailButton
        plain={plainDraft}
        html={htmlDraft}
        className={`rounded-btn border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors ${compact ? "w-full sm:w-auto" : "w-full"}`}
      />
      <div className="space-y-2 border-t border-white/10 pt-3">
        <p className="text-[11px] leading-snug text-gray-3">
          Plain text via mailto. For styled block: copy above → open Mail → select all in body → paste. To: {TO}
        </p>
        <p className="text-[11px] leading-snug text-gray-3">{EMAIL_FLOW_DISCLAIMER_UI}</p>
      </div>
      {hint ? (
        <p className="text-xs text-gray-2">
          If your mail app opened, send the message to finish the request. Referral details can follow from us by
          email.
        </p>
      ) : null}
    </div>
  );
}
