import Link from "next/link";
import { PageShell } from "../components/Shell";
import { degrees, jobs, publications, skillBlocks, summary } from "../lib/resume";
import { site } from "../lib/site";

export const metadata = {
  title: "Résumé",
  description: "Résumé of Suhani Bhatia.",
};

export default function ResumePage() {
  return (
    <PageShell>
      <article className="wrap cv">
        <header className="cv-top">
          <div>
            <p className="kicker">Résumé</p>
            <h1>Suhani Bhatia</h1>
            <p className="cv-contact">
              {site.city}
              {" · "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {" · "}
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {" · "}
              <a href={site.url}>suhanibhatia.com</a>
            </p>
          </div>
          <a className="cv-download" href={site.resume} download="Suhani-Bhatia-Resume.pdf">
            Download PDF
          </a>
        </header>

        <h2>Summary</h2>
        <p className="cv-summary">{summary}</p>

        <h2>Experience</h2>
        {jobs.map((job) => (
          <section className="cv-job" key={job.title + job.dates}>
            <header>
              <div>
                <h3>{job.title}</h3>
                <p className="org">{job.org}</p>
              </div>
              <p className="when">{job.dates}</p>
            </header>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ))}

        <h2>Education</h2>
        {degrees.map((d) => (
          <section className="cv-job" key={d.deg}>
            <header>
              <h3>{d.deg}</h3>
              <p className="when">{d.dates}</p>
            </header>
            {d.note ? <p className="org">{d.note}</p> : null}
          </section>
        ))}

        <h2>Publications and writing</h2>
        <ul className="cv-pubs">
          {publications.map((p) => (
            <li key={p.href}>
              {p.external ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.text}
                </a>
              ) : (
                <Link href={p.href}>{p.text}</Link>
              )}
            </li>
          ))}
        </ul>

        <h2>Skills</h2>
        <dl className="cv-skills">
          {skillBlocks.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.text}</dd>
            </div>
          ))}
        </dl>
      </article>
    </PageShell>
  );
}
