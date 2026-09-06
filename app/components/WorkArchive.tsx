"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { filters, work, writing, type Filter, type Provenance } from "../lib/work";

function tagClass(p: Provenance) {
  if (p === "professional" || p === "published") return "tag pro";
  return "tag ind";
}

export function WorkArchive() {
  const params = useSearchParams();
  const raw = params.get("filter");
  const current: Filter = filters.some((f) => f.id === raw) ? (raw as Filter) : "all";

  const items = useMemo(() => {
    if (current === "all") return work;
    if (current === "professional") {
      return work.filter(
        (w) => w.provenance === "professional" || w.filters.includes("professional")
      );
    }
    if (current === "independent") {
      return work.filter((w) => w.provenance === "independent");
    }
    return work.filter((w) => w.filters.includes(current));
  }, [current]);

  const showWriting = current === "all";

  return (
    <>
      <div className="filters" role="navigation" aria-label="Filter work">
        {filters.map((f) => (
          <Link
            key={f.id}
            href={f.id === "all" ? "/work" : `/work?filter=${f.id}`}
            className={current === f.id ? "on" : undefined}
            aria-current={current === f.id ? "page" : undefined}
            scroll={false}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <p className="meta" style={{ margin: "16px 0 24px" }}>
        {items.length} {items.length === 1 ? "item" : "items"}
        {showWriting ? ` · ${writing.length} pieces of writing` : ""}
      </p>

      {items.map((item) => (
        <Link className="archive-item" href={`/work/${item.slug}`} key={item.slug}>
          <div className="year-mark" aria-hidden="true">
            {item.year.split("–")[0]}
          </div>
          <div>
            <p className="meta">
              {item.where} · {item.year} · {item.role}
            </p>
            <h3>{item.title}</h3>
            <p>{item.problem}</p>
            <p className="out">
              <b>Output · </b>
              {item.output}
            </p>
          </div>
          <div className="tagcol">
            <span className={tagClass(item.provenance)}>{item.provenanceLabel}</span>
            {item.category.toLowerCase() !== item.provenanceLabel.toLowerCase() ? (
              <span className="meta">{item.category}</span>
            ) : null}
          </div>
        </Link>
      ))}

      {showWriting
        ? writing.map((piece) => (
            <a
              className="archive-item"
              href={piece.href}
              key={piece.title}
              {...("internal" in piece && piece.internal
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <div className="year-mark" aria-hidden="true">
                {piece.date.replace(/[^0-9]/g, "").slice(-4) || "2025"}
              </div>
              <div>
                <p className="meta">
                  {piece.publication} · {piece.date}
                </p>
                <h3>{piece.title}</h3>
                <p>{piece.dek}</p>
              </div>
              <div className="tagcol">
                <span className="tag pro">Published writing</span>
              </div>
            </a>
          ))
        : null}

      {items.length === 0 && !showWriting ? (
        <p className="prose">Nothing in this category yet.</p>
      ) : null}
    </>
  );
}
