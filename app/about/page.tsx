import Image from "next/image";
import Link from "next/link";
import { PageHead, PageShell } from "../components/Shell";
import { site } from "../lib/site";
import { education, timeline } from "../lib/work";

export const metadata = {
  title: "About",
  description: "About Suhani Bhatia, policy analyst based in Mumbai.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead
          kicker="About"
          title="Business, psychology, then public policy."
        />

        <div className="about-grid">
          <div>
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
                an organisation actually operates: pricing, staffing, retention, cash.
                Psychology taught me how a person decides or gives up. Public policy and
                law at TISS added statutes, budgets and the machinery of the Indian
                state.
              </p>
            </div>

            <h2 style={{ marginTop: 56 }}>Progression</h2>
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

            <div className="split-two" style={{ marginTop: 56 }}>
              <div>
                <h2>Education</h2>
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
                <h2>Practical</h2>
                <p className="prose">
                  English and Hindi. Based in Mumbai. {site.relocate}. {site.available}.
                </p>
                <div className="btn-row">
                  <Link className="btn btn-primary" href="/resume">
                    Résumé
                  </Link>
                  <a className="btn" href={`mailto:${site.email}`}>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <figure className="portrait">
            <Image
              src="/suhani.jpg"
              alt="Suhani Bhatia, wearing a black blazer and glasses"
              width={800}
              height={800}
              sizes="(max-width: 1080px) 360px, 340px"
            />
            <figcaption>Mumbai, 2026</figcaption>
          </figure>
        </div>
      </div>
    </PageShell>
  );
}
