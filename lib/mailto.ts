/** Opens the default mail client with a pre-filled draft (plain-text body; broad client support). */
export function openEmailDraft(to: string, subject: string, body: string) {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
