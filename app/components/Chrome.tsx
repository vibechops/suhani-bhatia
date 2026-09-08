"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => path === href || (href !== "/" && path.startsWith(href + "/"));
  if (path.startsWith("/labs/companion")) return null;

  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="wordmark" href="/">
          Suhani Bhatia
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="head-end">
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
      </div>
      <nav
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-label="Primary mobile"
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <strong>{site.name}</strong>
            <p>
              {site.role} · {site.city}
            </p>
          </div>
          <ul>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/work#labs">Labs</Link></li>
            <li><Link href="/approach">Approach</Link></li>
            <li><Link href="/about">Resume</Link></li>
            <li><Link href="/writing">Writing</Link></li>
          </ul>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.resume} download="Suhani-Bhatia-Resume.pdf">
                Résumé (PDF)
              </a>
            </li>
            <li>{site.city}</li>
          </ul>
        </div>
        <div className="fine">
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
