"use client";

import { FormEvent, useMemo, useState } from "react";
import CopyStyledEmailButton from "@/components/CopyStyledEmailButton";
import { buildInvestorDataRoomDraftBody } from "@/lib/emailDraftBodies";
import { buildInvestorDataRoomDraftHtml } from "@/lib/emailDraftHtml";
import { EMAIL_FLOW_DISCLAIMER_UI } from "@/lib/emailFlowDisclaimer";
import { openEmailDraft } from "@/lib/mailto";

const INVEST_EMAIL = "invest@veyago.app";

/**
 * Opens the visitor’s default mail app with a pre-filled message.
 * (mailto bodies are plain text for broad client support — not HTML.)
 */
export default function InvestorsDataRoomForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [checkSize, setCheckSize] = useState("");
  const [note, setNote] = useState("");

  const draftParams = useMemo(
    () => ({ name, email, firm, linkedin, checkSize, note }),
    [name, email, firm, linkedin, checkSize, note],
  );

  const plainDraft = useMemo(() => buildInvestorDataRoomDraftBody(draftParams), [draftParams]);
  const htmlDraft = useMemo(() => buildInvestorDataRoomDraftHtml(draftParams), [draftParams]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = "[Veyago] Investor data room access";
    openEmailDraft(INVEST_EMAIL, subject, plainDraft);
  }

  const inputClass =
    "mt-1 w-full bg-navy border border-white/10 rounded-input px-4 py-3 text-sm text-white placeholder:text-gray-3 focus:border-white/40 outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-gray-3">Name</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-gray-3">Email</span>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-gray-3">Firm (optional)</span>
        <input value={firm} onChange={(e) => setFirm(e.target.value)} className={inputClass} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-gray-3">LinkedIn URL</span>
        <input required value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className={inputClass} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-gray-3">Check size range</span>
        <input
          value={checkSize}
          onChange={(e) => setCheckSize(e.target.value)}
          placeholder="e.g. €25k–€100k"
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-gray-3">Anything you want Cassian to know</span>
        <textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} className={`${inputClass} resize-none`} />
      </label>
      <div className="space-y-2 border-t border-white/10 pt-3">
        <p className="text-[11px] leading-snug text-gray-3">
          <strong className="text-white/70">mailto:</strong> only opens plain text (no colours). For the navy/gold
          layout: use <strong className="text-white/70">Copy styled draft</strong>, open your mail app, select all in the
          body, paste — then send. Nothing leaves your device until you hit Send.
        </p>
        <p className="text-[11px] leading-snug text-gray-3">{EMAIL_FLOW_DISCLAIMER_UI}</p>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <button type="submit" className="w-full bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm hover:bg-ink-90 transition-colors">
          Open in email app
        </button>
        <CopyStyledEmailButton plain={plainDraft} html={htmlDraft} />
      </div>
    </form>
  );
}
