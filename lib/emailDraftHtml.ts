import { escapeHtml } from "@/lib/escapeHtml";
import { emailFlowDisclaimerHtml } from "@/lib/emailFlowDisclaimer";

const wrap = (inner: string) =>
  `<div xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:14px 16px;background:#0b1424;border-radius:10px;border:1px solid rgba(255,255,255,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,sans-serif;color:#e4eaf4;font-size:14px;line-height:1.42;max-width:520px;">
${inner}
</div>`;

const hr = `<div style="height:1px;background:rgba(255,255,255,0.1);margin:10px 0;"></div>`;

function kv(label: string, value: string): string {
  const v = escapeHtml(value.trim() || "—");
  return `<p style="margin:0 0 2px;font-size:11px;font-weight:600;letter-spacing:0.06em;color:#8b9ab5;text-transform:uppercase;">${escapeHtml(label)}</p>
<p style="margin:0 0 10px;color:#f7f9fc;font-size:14px;">${v}</p>`;
}

export function buildInvestorDataRoomDraftHtml(params: {
  name: string;
  email: string;
  firm: string;
  linkedin: string;
  checkSize: string;
  note: string;
}): string {
  const { name, email, firm, linkedin, checkSize, note } = params;
  const firmBlock = firm.trim() ? kv("Firm", firm.trim()) : "";
  const inner = [
    `<p style="margin:0 0 2px;font-size:11px;font-weight:600;letter-spacing:0.08em;color:#c9a86a;">VEYAGO</p>`,
    `<p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#fff;">Investors · data room</p>`,
    hr,
    `<p style="margin:0 0 8px;">Hello,<br/>I'm requesting access to the Veyago investor data room. Please point me to the next step or any pre-reading you'd like — happy to move at your pace.</p>`,
    kv("Name", name),
    kv("Email", email),
    firmBlock,
    kv("LinkedIn", linkedin),
    kv("Check size (range)", checkSize.trim() || "—"),
    `<p style="margin:0 0 2px;font-size:11px;font-weight:600;letter-spacing:0.06em;color:#8b9ab5;text-transform:uppercase;">Additional context</p>`,
    `<p style="margin:0 0 10px;color:#f7f9fc;font-size:14px;">${escapeHtml(note.trim() || "—")}</p>`,
    hr,
    `<p style="margin:0;font-size:14px;color:#e4eaf4;">Best regards,<br/><strong style="color:#fff;">${escapeHtml(name.trim())}</strong><br/><a href="mailto:${escapeHtml(email.trim())}" style="color:#9dc5ff;text-decoration:none;">${escapeHtml(email.trim())}</a></p>`,
    emailFlowDisclaimerHtml(),
    `<p style="margin:12px 0 0;font-size:11px;color:#7d8da8;">veyago.app/investors · Veyago Inc.</p>`,
  ].join("");

  return wrap(inner);
}

export function buildWaitlistDraftHtml(email: string, referredBy: string): string {
  const ref = referredBy.trim()
    ? kv("Referred by", referredBy.trim())
    : "";
  const inner = [
    `<p style="margin:0 0 2px;font-size:11px;font-weight:600;letter-spacing:0.08em;color:#c9a86a;">VEYAGO</p>`,
    `<p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#fff;">Early access · waitlist</p>`,
    hr,
    `<p style="margin:0 0 8px;">Hello,<br/>Please add me to the early-access waitlist. One short email when you ship is enough (e.g. TestFlight + a brief note).</p>`,
    kv("Email", email),
    ref,
    `<p style="margin:8px 0 0;font-size:12px;color:#b4c0d6;">One message when ready · Unsubscribe anytime · Referrals if you offer them later.</p>`,
    hr,
    `<p style="margin:0;font-size:14px;color:#e4eaf4;">Best regards</p>`,
    emailFlowDisclaimerHtml(),
    `<p style="margin:12px 0 0;font-size:11px;color:#7d8da8;">veyago.app/waitlist · Veyago Inc.</p>`,
  ].join("");
  return wrap(inner);
}

export function buildTeamSignInDraftHtml(workEmail: string, accessNote: string): string {
  const note = accessNote.trim()
    ? `<p style="margin:0 0 2px;font-size:11px;font-weight:600;letter-spacing:0.06em;color:#8b9ab5;text-transform:uppercase;">Note</p>
<p style="margin:0 0 10px;color:#f7f9fc;font-size:14px;">${escapeHtml(accessNote.trim())}</p>`
    : "";
  const inner = [
    `<p style="margin:0 0 2px;font-size:11px;font-weight:600;letter-spacing:0.08em;color:#c9a86a;">VEYAGO</p>`,
    `<p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#fff;">Team · access</p>`,
    hr,
    `<p style="margin:0 0 8px;">Hello,<br/>I'm reaching out about employee or contractor access (sign-in, SSO, or provisioning). I won't put passwords in email.</p>`,
    kv("Work email", workEmail),
    note,
    hr,
    `<p style="margin:0;font-size:14px;color:#e4eaf4;">Best regards</p>`,
    emailFlowDisclaimerHtml(),
    `<p style="margin:12px 0 0;font-size:11px;color:#7d8da8;">veyago.app/sign-in · Veyago Inc.</p>`,
  ].join("");
  return wrap(inner);
}
