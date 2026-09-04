"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { filters, work, writing, type Filter } from "../lib/work";

export function WorkArchive() {
  const params = useSearchParams();
  const current = (params.get("filter") as Filter) || "all";

  const items = useMemo(() => {
    if (current === "all") return work;
    if (current === "writing") return [];
    return work.filter((w) => w.filters.includes(current));
  }, [current]);

  const showWriting = current === "all" || current === "writing";

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

      {items.map((item) => (
        <Link className="archive-item" href={`/work/${item.slug}`} key={item.slug}>
          <div className="visual" aria-hidden="true">
            <i style={{ height: "88%" }} />
            <i style={{ height: "62%" }} />
            <i style={{ height: "40%" }} />
          </div>
          <div>
            <p className="meta">
              {item.where} · {item.year}
            </p>
            <h3>{item.title}</h3>
            <p className="meta">{item.method}</p>
            <p>{item.dek}</p>
          </div>
          <p className="meta">{item.provenanceLabel}</p>
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
              <div className="visual" aria-hidden="true">
                <i style={{ height: "50%" }} />
                <i style={{ height: "70%" }} />
                <i style={{ height: "30%" }} />
              </div>
              <div>
                <p className="meta">
                  {piece.publication} · {piece.date}
                </p>
                <h3>{piece.title}</h3>
                <p>{piece.dek}</p>
              </div>
              <p className="meta">Published writing</p>
            </a>
          ))
        : null}

      {items.length === 0 && !showWriting ? (
        <p className="prose">Nothing in this category yet.</p>
      ) : null}
    </>
  );
}
