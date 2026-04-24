import { emailFlowDisclaimerPlain } from "@/lib/emailFlowDisclaimer";

/**
 * Plain-text email bodies for mailto: drafts (tight spacing, no ASCII boxes).
 * For colours / HTML, use copyRichEmailDraft + lib/emailDraftHtml.ts (paste into Mail).
 */

const RULE = "________________________________________";

function masthead(primary: string, secondary: string): string {
  return `${primary}\n${secondary}\n${RULE}\n`;
}

function field(label: string, value: string): string {
  const v = value.trim() || "—";
  return `${label}\n    ${v}`;
}

function section(title: string, body: string): string {
  return `${title}\n${body.trim()}\n`;
}

function footer(path: string): string {
  return `${RULE}\nhttps://veyago.app${path}\nVeyago Inc. · Delaware C-Corp · veyago.app`;
}

export function buildWaitlistDraftBody(email: string, referredBy: string): string {
  const details = [field("Email", email), referredBy.trim() ? field("Referred by", referredBy.trim()) : ""]
    .filter(Boolean)
    .join("\n");

  return [
    masthead("Veyago", "Early access · waitlist"),
    section(
      "Request",
      [
        "Hello,",
        "Please add me to the early-access waitlist for Veyago.",
        "One short email when you ship is enough (e.g. TestFlight + a brief note).",
        "",
        details,
      ].join("\n"),
    ),
    section(
      "What to expect",
      "• One message when ready · Unsubscribe anytime · Referrals later if you offer them.",
    ),
    "Thanks — looking forward to it.\nBest regards,\n",
    emailFlowDisclaimerPlain(),
    footer("/waitlist"),
  ].join("\n");
}

export function buildInvestorDataRoomDraftBody(params: {
  name: string;
  email: string;
  firm: string;
  linkedin: string;
  checkSize: string;
  note: string;
}): string {
  const { name, email, firm, linkedin, checkSize, note } = params;

  const details = [
    field("Name", name),
    field("Email", email),
    ...(firm.trim() ? [field("Firm", firm.trim())] : []),
    field("LinkedIn", linkedin),
    field("Check size (range)", checkSize.trim() || "—"),
  ].join("\n");

  return [
    masthead("Veyago", "Investors · data room"),
    section(
      "Request",
      [
        "Hello,",
        "I'm requesting access to the Veyago investor data room.",
        "Please point me to the next step or any pre-reading — happy to move at your pace.",
        "",
        details,
        "",
        "Additional context",
        "    " + (note.trim() || "—"),
      ].join("\n"),
    ),
    "Best regards,",
    name.trim(),
    email.trim(),
    "",
    emailFlowDisclaimerPlain(),
    footer("/investors"),
  ].join("\n");
}

export function buildTeamSignInDraftBody(workEmail: string, accessNote: string): string {
  const noteBlock = accessNote.trim()
    ? ["", "Note", "    " + accessNote.trim()].join("\n")
    : "";

  return [
    masthead("Veyago", "Team · access"),
    section(
      "Request",
      [
        "Hello,",
        "I'm reaching out about employee or contractor access (sign-in, SSO, or provisioning).",
        "",
        field("Work email", workEmail),
        noteBlock,
        "",
        "I won't put passwords in email — happy to use whatever secure channel you prefer.",
      ].join("\n"),
    ),
    "Best regards,\n",
    emailFlowDisclaimerPlain(),
    footer("/sign-in"),
  ].join("\n");
}
