import { PageShell } from "../components/Shell";
import { education, timeline } from "../lib/work";

export const metadata = {
  title: "About",
  description: "About Suhani Bhatia.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">About</p>
        <h1>About</h1>
        <div className="prose">
          <p>
            I work on problems where a public system has to deliver something to a
            person: a pension, a protection order, a rural service, a welfare
            benefit. I want to know what is getting in the way, what the evidence
            actually shows, and what an organisation can do about it under real
            constraints.
          </p>
          <p>
            Public programmes rarely fail at the point where they are written. Their
            difficulties emerge later, in the ordinary transactions through which a
            person is expected to claim what the state has already promised. I study
            the institutions, incentives and everyday frictions that determine what
            survives that journey.
          </p>
          <p>
            A business degree and five years running a tuition centre taught me how
            an organisation actually operates. Psychology taught me how a person
            decides or gives up. Public policy and law at TISS added statutes,
            budgets and the machinery of the Indian state.
          </p>
        </div>

        <p className="kicker" style={{ marginTop: 48 }}>
          Progression
        </p>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.dates + t.title}>
              <span className="when">{t.dates}</span>
              <span>
                <strong>{t.title}</strong>
                <br />
                {t.where}
              </span>
            </li>
          ))}
        </ol>

        <div className="split-two" style={{ marginTop: 48 }}>
          <div>
            <p className="kicker">Education</p>
            {education.map((e) => (
              <article className="edu" key={e.deg}>
                <h3>{e.deg}</h3>
                <p className="meta">
                  {e.school} · {e.dates}
                </p>
                {e.note ? <p>{e.note}</p> : null}
              </article>
            ))}
          </div>
          <div>
            <p className="kicker">Languages and mobility</p>
            <p className="prose">
              English and Hindi. Based in Mumbai. Open to relocation across India.
              Available full-time from December 2026.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
