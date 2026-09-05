import { PageShell } from "../components/Shell";
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
      <div className="wrap band">
        <p className="kicker">Writing</p>
        <h1>Writing</h1>

        <h2 style={{ marginTop: 40 }}>Policy and research</h2>
        <ul className="piece-list">
          {policy.map((piece) => (
            <li key={piece.title}>
              <a
                href={piece.href}
                {...(piece.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <div className="pub">
                  {piece.publication} · {piece.date}
                </div>
                <h3>{piece.title}</h3>
              </a>
            </li>
          ))}
        </ul>

        <h2 style={{ marginTop: 40 }}>Other writing</h2>
        <ul className="piece-list">
          {other.map((piece) => (
            <li key={piece.title}>
              <a href={piece.href} target="_blank" rel="noopener noreferrer">
                <div className="pub">
                  {piece.publication} · {piece.date}
                </div>
                <h3>{piece.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
