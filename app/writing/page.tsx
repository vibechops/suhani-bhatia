import { PageHead, PageShell } from "../components/Shell";
import { writing } from "../lib/work";

export const metadata = {
  title: "Writing",
  description: "Policy writing and other published work by Suhani Bhatia.",
};

export default function WritingPage() {
  const policy = writing.filter((w) => w.group === "policy");
  const other = writing.filter((w) => w.group === "other");

  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead
          kicker="Writing"
          title="Published analysis and pieces in progress"
          lede="Reported and analytical writing for Village Square, and an op-ed in progress with IIM Ahmedabad."
        />

        <h2>Policy and research</h2>
        <ul className="piece-list">
          {policy.map((piece) => (
            <li key={piece.title}>
              <a
                href={piece.href}
                {...("internal" in piece && piece.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <div className="pub">
                  {piece.publication} · {piece.date}
                </div>
                <h3>{piece.title}</h3>
                <p>{piece.dek}</p>
              </a>
            </li>
          ))}
        </ul>

        <h2 style={{ marginTop: 56 }}>Other writing</h2>
        <ul className="piece-list">
          {other.map((piece) => (
            <li key={piece.title}>
              <a href={piece.href} target="_blank" rel="noopener noreferrer">
                <div className="pub">
                  {piece.publication} · {piece.date}
                </div>
                <h3>{piece.title}</h3>
                <p>{piece.dek}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
