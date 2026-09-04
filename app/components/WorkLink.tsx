import Link from "next/link";
import type { WorkItem } from "../lib/work";

export function WorkLink({
  item,
  kicker,
}: {
  item: WorkItem;
  kicker?: string;
}) {
  return (
    <Link className="work-link" href={`/work/${item.slug}`}>
      <p className="tag">{kicker ?? `${item.category} · ${item.year}`}</p>
      <h3>{item.title}</h3>
      <p>{item.dek}</p>
      <span className="go">Read →</span>
    </Link>
  );
}
