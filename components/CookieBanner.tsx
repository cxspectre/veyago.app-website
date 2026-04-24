"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("veyago.cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const choose = (choice: "accept" | "reject" | "manage") => {
    localStorage.setItem("veyago.cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-surface border border-white/10 rounded-card p-5 shadow-2xl"
    >
      <p className="text-sm text-gray-1 mb-4">
        We use first-party, cookie-less analytics. EU-hosted. You control what we keep.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => choose("accept")}
          className="text-sm bg-white text-navy px-3.5 py-2 rounded-btn font-medium"
        >
          Accept all
        </button>
        <button
          onClick={() => choose("reject")}
          className="text-sm border border-white/20 text-white px-3.5 py-2 rounded-btn"
        >
          Reject all
        </button>
        <button
          onClick={() => choose("manage")}
          className="text-sm text-gray-1 hover:text-white px-3.5 py-2 rounded-btn"
        >
          Manage preferences
        </button>
      </div>
    </div>
  );
}
