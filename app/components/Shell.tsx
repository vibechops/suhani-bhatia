import Link from "next/link";
import type { WorkItem } from "../lib/work";
import { Footer } from "./Chrome";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main">
      {children}
      <Footer />
    </main>
  );
}

export function NeedInfo({ items }: { items: string[] }) {
  return (
    <aside className="need">
      <h2>Additional information required</h2>
      <p>
        The public case stops where the résumé and the published record stop.
        To take this page further I would need:
      </p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function CaseLayout({
  item,
  subtitle,
  children,
}: {
  item: WorkItem;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <article className="wrap case">
        <Link className="hero-links" href="/work" style={{ marginBottom: 20, display: "inline-block" }}>
          ← Work
        </Link>
        <header className="case-head">
          <p className="kicker">
            {item.provenanceLabel} · {item.year}
          </p>
          <h1>{item.title}</h1>
          {subtitle ? <p className="sub">{subtitle}</p> : null}
          <p className="meta">
            {item.where} · {item.method}
          </p>
        </header>
        <div className="case-body">{children}</div>
      </article>
    </PageShell>
  );
}

export function Artefacts({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <p className="artefacts">
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </p>
  );
}
