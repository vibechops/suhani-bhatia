"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = {
  id: string;
  title: string;
  done: boolean;
};

const KEY = "suhani-companion-pwa-v1";

const DUMMY: Item[] = [
  { id: "d1", title: "Submit Dalberg application", done: false },
  { id: "d2", title: "Finish the case study", done: false },
  { id: "d3", title: "Email the professor", done: false },
  { id: "d4", title: "Attach transcript", done: false },
  { id: "d5", title: "Call mom", done: true },
];

export function CompanionApp() {
  const [items, setItems] = useState<Item[]>(DUMMY);
  const [listening, setListening] = useState(false);
  const [standalone, setStandalone] = useState(false);

  useEffect(() => {
    document.body.classList.add("companion-pwa");
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Item[];
        if (parsed.length) setItems(parsed);
      }
    } catch {
      /* ignore */
    }
    setStandalone(
      window.matchMedia("(display-mode: standalone)").matches ||
        Boolean((navigator as unknown as { standalone?: boolean }).standalone),
    );
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/labs/companion/sw.js").catch(() => undefined);
    }
    return () => document.body.classList.remove("companion-pwa");
  }, []);

  const open = items.filter((i) => !i.done);
  const done = items.filter((i) => i.done);

  return (
    <div className="pwa-stage">
      <div className="pwa-phone">
        <div className="pwa-sky" aria-hidden />
        <div className="pwa-glass">
          <header className="pwa-head">
            <span className="pwa-avatar" aria-hidden />
            <div className="pwa-who">
              <p className="pwa-kicker">Today</p>
              <div className="pwa-pills">
                <span>{open.length === 0 ? "Clear" : `${open.length} open`}</span>
                <span>Voice</span>
              </div>
            </div>
          </header>

          <ul className="pwa-list">
            {open.map((i) => (
              <li key={i.id} className="pwa-item">
                <span className="pwa-dot" />
                <span>{i.title}</span>
              </li>
            ))}
            {done.map((i) => (
              <li key={i.id} className="pwa-item is-done">
                <span className="pwa-dot" />
                <span>{i.title}</span>
              </li>
            ))}
          </ul>

          <div className="pwa-micwrap">
            <button
              type="button"
              className={`pwa-mic-orb${listening ? " is-on" : ""}`}
              onClick={() => setListening((on) => !on)}
              aria-pressed={listening}
              aria-label={listening ? "Stop" : "Start"}
            >
              <span className="pwa-ring" />
              <span className="pwa-ring" />
              <span className="pwa-mic">
                <svg viewBox="0 0 64 64" aria-hidden>
                  <rect x="24" y="10" width="16" height="26" rx="8" />
                  <path d="M18 32a14 14 0 0 0 28 0" fill="none" stroke="currentColor" strokeWidth="3.2" />
                  <path d="M32 46v8M23 54h18" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {!standalone && (
          <p className="pwa-install">
            Add to Home Screen to use it like an app.
            <Link href="/labs"> Labs</Link>
          </p>
        )}
      </div>
    </div>
  );
}
