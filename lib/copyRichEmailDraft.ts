/**
 * Copies HTML + plain text to the clipboard so pasting into Apple Mail / Gmail
 * can preserve colours and layout. (mailto: cannot do HTML.)
 */
export async function copyRichEmailDraft(plain: string, html: string): Promise<"ok" | "plain-only" | "fail"> {
  if (typeof navigator === "undefined" || !navigator.clipboard) return "fail";

  try {
    if (typeof ClipboardItem !== "undefined" && navigator.clipboard.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plain], { type: "text/plain" }),
        }),
      ]);
      return "ok";
    }
  } catch {
    /* fall through */
  }

  try {
    await navigator.clipboard.writeText(plain);
    return "plain-only";
  } catch {
    return "fail";
  }
}
