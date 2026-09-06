import Link from "next/link";
import { work, type WorkItem } from "../lib/work";
import { Footer } from "./Chrome";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main">
      {children}
      <Footer />
    </main>
  );
}

export function PageHead({
  kicker,
  title,
  lede,
  aside,
}: {
  kicker: string;
  title: string;
  lede?: string;
  aside?: React.ReactNode;
}) {
  return (
    <header className={`page-head${aside ? " split" : ""}`}>
      <div>
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
      {aside}
    </header>
  );
}

function related(item: WorkItem) {
  const shared = work
    .filter((w) => w.slug !== item.slug && w.home !== false)
    .map((w) => ({
      w,
      score: w.filters.filter((f) => item.filters.includes(f)).length + (w.where === item.where ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.w);
  return shared;
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
  const next = related(item);
  return (
    <PageShell>
      <article className="wrap case">
        <Link className="back" href="/work">
          ← All work
        </Link>
        <header className="case-head">
          <p className="kicker">
            {item.provenanceLabel} · {item.year}
          </p>
          <h1>{item.title}</h1>
          <p className="sub">{item.problem}</p>
          {subtitle ? <p className="meta">{subtitle}</p> : null}
        </header>

        <dl className="case-facts">
          <div>
            <dt>Where</dt>
            <dd>{item.where}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{item.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{item.year}</dd>
          </div>
          <div>
            <dt>Methods</dt>
            <dd>{item.method}</dd>
          </div>
          <div className="out">
            <dt>Output</dt>
            <dd>{item.output}</dd>
          </div>
        </dl>

        <div className="case-grid">
          <div className="case-body">{children}</div>
          <aside className="case-aside">
            <h4>Skills shown</h4>
            <div className="skills">
              {item.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <h4>What this is</h4>
            <ul>
              <li>{item.category}</li>
              <li>{item.provenanceLabel}</li>
            </ul>
            {next.length ? (
              <div className="next">
                <h4>Related</h4>
                {next.map((n) => (
                  <Link key={n.slug} href={`/work/${n.slug}`}>
                    <strong>{n.title}</strong>
                    <span>
                      {n.where} · {n.year}
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
          </aside>
        </div>
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
