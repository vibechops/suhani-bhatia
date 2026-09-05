import Link from "next/link";
import { MethodFlow } from "../components/Infographics";
import { PageShell } from "../components/Shell";
import { territories } from "../lib/work";

export const metadata = {
  title: "Approach",
  description: "How Suhani Bhatia investigates a problem and turns a diagnosis into a recommendation.",
};

export default function ApproachPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">Approach</p>
        <h1>How I work</h1>
        <p className="lede" style={{ maxWidth: "28em" }}>
          Start with the decision someone has to take. Then choose the method.
        </p>

        <div className="territory">
          {territories.map((t) => (
            <article key={t.label}>
              <h3>{t.label}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>

        <p className="kicker" style={{ marginTop: 48 }}>
          Sequence
        </p>
        <MethodFlow />

        <h2 style={{ marginTop: 48 }}>Tools</h2>
        <dl className="cap-map">
          <div>
            <dt>Quantitative</dt>
            <dd>Excel, Stata, Python, SQL.</dd>
          </div>
          <div>
            <dt>Research</dt>
            <dd>Interviews, field observation, statutes, administrative documents, published surveys.</dd>
          </div>
          <div>
            <dt>Spatial</dt>
            <dd>State-level mapping of published indicators.</dd>
          </div>
          <div>
            <dt>Communication</dt>
            <dd>Written analysis, stakeholder decks, reporting, moderation.</dd>
          </div>
        </dl>
        <p className="hero-links" style={{ marginTop: 28 }}>
          <Link href="/research">Research files</Link>
        </p>
      </div>
    </PageShell>
  );
}
