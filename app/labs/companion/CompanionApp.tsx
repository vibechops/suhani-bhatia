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
    document.body.classList.add("companion-pink");
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
    return () => document.body.classList.remove("companion-pink");
  }, []);

  const open = items.filter((i) => !i.done);
  const done = items.filter((i) => i.done);
  const dots = [...open, ...done, ...open, ...done].slice(0, 10);

  return (
    <div className="pink-stage">
      <div className="pink-phone">
        <span className="pink-void" aria-hidden />
        <div className="pink-glass">
          <header className="pink-head">
            <p className="pink-kicker">Today</p>
            <div className={`pink-dots${listening ? " is-on" : ""}`} aria-hidden>
              {dots.map((item, n) => (
                <i key={`${item.id}-${n}`} className={item.done ? "is-done" : undefined} />
              ))}
            </div>
          </header>

          <ul className="pink-list">
            {open.map((i) => (
              <li key={i.id} className="pink-item">
                <span>{i.title}</span>
              </li>
            ))}
            {done.map((i) => (
              <li key={i.id} className="pink-item is-done">
                <span>{i.title}</span>
              </li>
            ))}
          </ul>

          <div className="pink-foot">
            <p className="pink-stat">
              <strong>{open.length}</strong>
              <span>open</span>
            </p>
            <button
              type="button"
              className={`pink-mic-orb${listening ? " is-on" : ""}`}
              onClick={() => setListening((on) => !on)}
              aria-pressed={listening}
              aria-label={listening ? "Stop" : "Start"}
            >
              <span className="pink-ring" />
              <span className="pink-ring" />
              <span className="pink-mic">
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
          <p className="pink-install">
            Add to Home Screen to use it like an app.
            <Link href="/labs"> Labs</Link>
          </p>
        )}
      </div>
    </div>
  );
}
