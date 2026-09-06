import Link from "next/link";
import { MethodFlow } from "../components/Infographics";
import { PageHead, PageShell } from "../components/Shell";
import { territories } from "../lib/work";

export const metadata = {
  title: "Approach",
  description: "How Suhani Bhatia investigates a problem and turns a diagnosis into a recommendation.",
};

export default function ApproachPage() {
  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead
          kicker="Approach"
          title="Start with the decision someone has to take. Then choose the method."
          lede="Four kinds of question I keep coming back to, a six-step sequence for getting from question to recommendation, and the tools that carry it."
        />

        <h2>Where the questions sit</h2>
        <div className="territory">
          {territories.map((t) => (
            <article key={t.label}>
              <h3>{t.label}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>

        <h2 style={{ marginTop: 64 }}>Sequence</h2>
        <MethodFlow />

        <h2 style={{ marginTop: 64 }}>Tools</h2>
        <dl className="cap-map">
          <div>
            <dt>Quantitative</dt>
            <dd>Excel (scenario, sensitivity, cost and coverage models), Stata (regression, difference-in-differences), Python and SQL for reproducible extracts.</dd>
          </div>
          <div>
            <dt>Research</dt>
            <dd>Semi-structured interviews, field observation, statutes and rules, administrative documents, published surveys (NFHS, Census).</dd>
          </div>
          <div>
            <dt>Spatial</dt>
            <dd>State-level mapping of published indicators; QGIS-ready outputs.</dd>
          </div>
          <div>
            <dt>Communication</dt>
            <dd>Stakeholder decks, one-page cases, written analysis, moderation.</dd>
          </div>
          <div>
            <dt>Standards</dt>
            <dd>Every figure labelled observed, calculated, estimated or proposed. Confidential material stays with the organisation.</dd>
          </div>
        </dl>
        <div className="btn-row" style={{ marginTop: 40 }}>
          <Link className="btn btn-primary" href="/work">
            See the work
          </Link>
          <Link className="btn" href="/research">
            Research files
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
