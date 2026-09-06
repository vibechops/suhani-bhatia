"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => path === href || (href !== "/" && path.startsWith(href + "/"));

  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="wordmark" href="/">
          Suhani Bhatia <small>{site.role}</small>
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
          <a className="btn" href={`mailto:${site.email}`}>
            Contact
          </a>
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
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={`mailto:${site.email}`} onClick={() => setOpen(false)}>
          Contact
        </a>
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
            <p>{site.description}</p>
          </div>
          <ul>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/approach">Approach</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/resume">Résumé</Link></li>
            <li><Link href="/writing">Writing</Link></li>
            <li><Link href="/research">Research files</Link></li>
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
          <span>{site.available}</span>
        </div>
      </div>
    </footer>
  );
}
