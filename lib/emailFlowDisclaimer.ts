/**
 * Why we use mailto / clipboard instead of silent server-side form posts.
 * Shown on the site and included in outbound drafts so senders and readers see the same rationale.
 */

/** Short copy for under forms (website). */
export const EMAIL_FLOW_DISCLAIMER_UI =
  "We use your own email app instead of a silent “send” through our servers so spam bots can’t spray our inboxes. " +
  "The message comes from an address you already sign in to with your provider — that helps us filter junk and verify you’re a real person before we reply or share anything sensitive.";

/** Full plain-text block appended to mailto drafts. */
export function emailFlowDisclaimerPlain(): string {
  return [
    "",
    "Why we use your mail app",
    "",
    "We do not collect this request through a hidden form post on our website.",
    "You compose and send from your own inbox so your email provider’s spam filters and reputation checks still apply.",
    "The message reaches us from an address you already control and authenticate to, which cuts automated abuse and helps us confirm identity and intent before we spend time on a reply, a call, or a data room.",
    "",
  ].join("\n");
}

const disclaimerHr = `<div style="height:1px;background:rgba(255,255,255,0.08);margin:12px 0 10px;"></div>`;

/** Styled block appended to HTML clipboard drafts. */
export function emailFlowDisclaimerHtml(): string {
  return `${disclaimerHr}<p style="margin:0;font-size:11px;line-height:1.5;color:#8b9ab5;"><strong style="display:block;margin-bottom:6px;color:#c9a86a;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;">Why your mail app</strong><span style="color:#9aa8bc;">We do not run a silent web submit. You send from an inbox you already verify with your provider, so their anti-spam and abuse signals still protect us, and we can treat the thread as a stronger signal that you are a real person — not a bot — before we respond or share materials.</span></p>`;
}
