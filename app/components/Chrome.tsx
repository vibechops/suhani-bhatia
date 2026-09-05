"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="wordmark" href="/">
          Suhani Bhatia
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) =>
            item.external || item.href.startsWith("/#") ? (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-label="Primary mobile"
      >
        {nav.map((item) =>
          item.external || item.href.startsWith("/#") ? (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot wrap">
      <span>
        {site.name}
        <br />
        {site.tagline}
      </span>
      <span>
        {site.city} · 2026
      </span>
      <span>
        <a href={`mailto:${site.email}`}>Email</a>
        {" · "}
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {" · "}
        <Link href="/resume">Résumé</Link>
        {" · "}
        <Link href="/approach">Approach</Link>
        {" · "}
        <Link href="/writing">Writing</Link>
      </span>
    </footer>
  );
}
