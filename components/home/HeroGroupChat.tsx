"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Sender = "f1" | "f2" | "f3" | "you";

type Bubble =
  | { kind: "typing"; id: string; sender: Sender }
  | { kind: "msg"; id: string; sender: Sender; text: string };

const FRIEND: Record<"f1" | "f2" | "f3", { label: string; avatar: string }> = {
  f1: { label: "Friend #1", avatar: "bg-[#5b9bd5]" },
  f2: { label: "Friend #2", avatar: "bg-[#c97bd0]" },
  f3: { label: "Friend #3", avatar: "bg-[#e8a84e]" },
};

/** Slower pacing so the hero story is easy to follow in the phone frame. */
const PAUSE_AFTER_INTRO = 1100;
const PAUSE_AFTER_MSG = (chars: number) => Math.min(2400, 1180 + Math.round(chars * 14));

function TypingDots() {
  return (
    <div className="flex items-center gap-[5px] px-0.5 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-[7px] w-[7px] rounded-full bg-white/[0.42]"
          animate={{ opacity: [0.25, 0.95, 0.25], scale: [0.92, 1, 0.92] }}
          transition={{ duration: 1.05, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function HeroGroupChat({ reduced, onDone }: { reduced: boolean; onDone: () => void }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const runGenRef = useRef(0);

  const push = useCallback((b: Bubble) => {
    setBubbles((prev) => [...prev, b]);
  }, []);

  const commitTyping = useCallback((tickId: string, sender: Sender, text: string) => {
    setBubbles((prev) =>
      prev.map((b) => (b.kind === "typing" && b.id === tickId ? { kind: "msg", id: `${tickId}-m`, sender, text } : b)),
    );
  }, []);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }

    const myGen = ++runGenRef.current;
    const wait = (ms: number) => new Promise((r) => window.setTimeout(r, ms));

    const typeThen = async (sender: Sender, tickId: string, typingMs: number, text: string) => {
      push({ kind: "typing", id: tickId, sender });
      await wait(typingMs);
      commitTyping(tickId, sender, text);
    };

    let cancelled = false;
    const guard = async <T,>(p: Promise<T>) => {
      const v = await p;
      if (cancelled || runGenRef.current !== myGen) throw new Error("cancel");
      return v;
    };

    const beat = async (sender: Sender, tickId: string, typingMs: number, text: string) => {
      await guard(typeThen(sender, tickId, typingMs, text));
      await guard(wait(PAUSE_AFTER_MSG(text.length)));
    };

    const run = async () => {
      try {
        await guard(wait(PAUSE_AFTER_INTRO));

        await guard(beat("f1", "a1", 2600, "Barcelona again?? We literally did Spain last year."));
        await guard(beat("f2", "a2", 2400, "I want Japan. Tokyo or Kyoto — pick one."));
        await guard(beat("f3", "a3", 2700, "Eleven weeks in this chat and we still have zero votes 😭"));
        await guard(beat("f1", "a4", 2200, "My mum keeps asking for dates. I have nothing to tell her."));
        await guard(beat("f2", "a5", 2000, "We’re going in circles. Someone pick."));
        await guard(beat("f3", "a6", 2400, "If we don’t decide tonight I’m muting this group."));
        await guard(
          typeThen(
            "you",
            "a7",
            3400,
            "Why aren’t we trying Veyago? We swipe places, it runs a bracket — a real decision in minutes. Pick a place, not a fight.",
          ),
        );
        await guard(wait(2600));
        await guard(wait(2000));
        if (cancelled || runGenRef.current !== myGen) return;
        onDone();
      } catch {
        /* cancelled */
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [commitTyping, onDone, push, reduced]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [bubbles]);

  if (reduced) return null;

  return (
    <div
      className="absolute inset-0 z-[14] flex flex-col bg-black pt-11"
      style={{
        WebkitFontSmoothing: "antialiased",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* iOS-style large title nav */}
      <div className="relative z-[16] flex min-h-[52px] shrink-0 items-center gap-1.5 border-b border-white/[0.06] bg-[#1c1c1e]/85 px-2.5 py-1.5 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#1c1c1e]/72">
        <span className="flex h-9 w-8 shrink-0 items-center justify-center text-[21px] font-normal leading-none text-[#0a84ff]" aria-hidden>
          ‹
        </span>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#2d6a4f]/90 to-[#1b4332] text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          ✈
        </div>
        <div className="min-w-0 flex-1 py-0.5">
          <div className="truncate text-[17px] font-semibold leading-[1.15] tracking-[-0.022em] text-white">
            Spring trip
          </div>
          <div className="truncate text-[12px] font-normal leading-tight text-white/48">Friend #1, Friend #2…</div>
        </div>
        <span className="flex h-9 w-8 shrink-0 items-center justify-center rounded-full text-[17px] text-[#0a84ff]" aria-hidden>
          ⓘ
        </span>
      </div>

      <div
        ref={scrollRef}
        className="relative z-[15] min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 pb-20 pt-4"
        style={{
          backgroundColor: "#000000",
          backgroundImage: `
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(44,90,160,0.12), transparent 55%),
            radial-gradient(ellipse 90% 60% at 100% 100%, rgba(30,80,50,0.08), transparent 50%)
          `,
        }}
      >
        <div className="mx-auto flex max-w-[100%] flex-col gap-3.5 pb-3">
          <p className="self-center rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/40">
            Today
          </p>
          <AnimatePresence initial={false}>
            {bubbles.map((b) => (
              <ChatRow key={b.id} bubble={b} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ChatRow({ bubble }: { bubble: Bubble }) {
  if (bubble.kind === "typing") {
    const outgoing = bubble.sender === "you";
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.25, 0.8, 0.25, 1] }}
        className={`flex w-full items-end gap-2.5 ${outgoing ? "flex-row-reverse" : ""}`}
      >
        {!outgoing && (
          <div
            className={`mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.35)] ${FRIEND[bubble.sender as "f1" | "f2" | "f3"].avatar}`}
          >
            {bubble.sender === "f1" ? "1" : bubble.sender === "f2" ? "2" : "3"}
          </div>
        )}
        <div
          className={`max-w-[min(100%,18rem)] rounded-[19px] px-3.5 py-2.5 ${
            outgoing
              ? "rounded-br-[5px] bg-[#1a7a5c] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_2px_8px_rgba(0,0,0,0.25)]"
              : "rounded-bl-[5px] bg-[#2c2c2e] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_2px_10px_rgba(0,0,0,0.2)]"
          }`}
        >
          {outgoing ? (
            <div className="mb-1.5 text-[11px] font-semibold text-white/75">You</div>
          ) : (
            <div className="mb-1.5 text-[11px] font-semibold text-white/45">
              {FRIEND[bubble.sender as "f1" | "f2" | "f3"].label}
            </div>
          )}
          <TypingDots />
        </div>
      </motion.div>
    );
  }

  const outgoing = bubble.sender === "you";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.25, 0.8, 0.25, 1] }}
      className={`flex w-full items-end gap-2.5 ${outgoing ? "flex-row-reverse" : ""}`}
    >
      {!outgoing && (
        <div
          className={`mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.35)] ${FRIEND[bubble.sender as "f1" | "f2" | "f3"].avatar}`}
        >
          {bubble.sender === "f1" ? "1" : bubble.sender === "f2" ? "2" : "3"}
        </div>
      )}
      <div
        className={`max-w-[min(100%,18rem)] rounded-[19px] px-3.5 py-2.5 ${
          outgoing
            ? "rounded-br-[5px] bg-[#1a7a5c] text-[13px] leading-[1.42] text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_2px_8px_rgba(0,0,0,0.25)]"
            : "rounded-bl-[5px] bg-[#2c2c2e] text-[13px] leading-[1.42] text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_2px_10px_rgba(0,0,0,0.2)]"
        }`}
      >
        {!outgoing && (
          <div className="mb-1 text-[11px] font-semibold text-white/42">{FRIEND[bubble.sender as "f1" | "f2" | "f3"].label}</div>
        )}
        {outgoing && <div className="mb-1 text-[11px] font-semibold text-white/72">You</div>}
        <p className="whitespace-pre-wrap">{bubble.text}</p>
        <div
          className={`mt-1.5 flex items-center justify-end gap-1 text-[11px] tabular-nums ${outgoing ? "text-white/55" : "text-white/35"}`}
        >
          <span>9:41</span>
          {outgoing && (
            <span className="ml-0.5 text-[12px] opacity-80" aria-hidden>
              ✓✓
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
