import Image from "next/image";
import {
  camera,
  education,
  nav,
  site,
  skills,
  work,
  writing,
} from "./data";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5v15l13-7.5L7 4.5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className="site-head">
        <div className="wrap">
          <a className="wordmark" href="#top">
            Suhani Bhatia
          </a>
          <nav className="nav" aria-label="Sections">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap">
          <section className="hero">
            <div className="hero-meta">
              <span>Mumbai Metropolitan Region</span>
              <span>Public policy · Implementation</span>
              <span>TISS ’27</span>
            </div>
            <hr className="hair" />
            <div className="hero-grid">
              <div>
                <p className="kicker muted">Researcher · writer</p>
                <h1>Suhani Bhatia</h1>
                <p className="lede">
                  I study the distance between what a public programme promises
                  and what a person actually receives.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-solid" href={`mailto:${site.email}`}>
                    Write
                  </a>
                  <a className="btn btn-ghost" href={site.resume}>
                    Resume, PDF
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <figure className="portrait">
                <div className="portrait-frame">
                  <Image
                    src="/suhani.png"
                    alt="Suhani Bhatia"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <figcaption>
                  <span>fig. 01 · portrait</span>
                  <span>Mumbai, 2026</span>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        <div className="wrap">
          <section id="work" className="section reveal">
            <div className="section-head">
              <h2>Selected work</h2>
              <span className="idx">§ A · Field and desk</span>
            </div>
            {work.map((job) => (
              <article className="job" key={job.num}>
                <span className="job-num">{job.num}</span>
                <div>
                  <h3>{job.title}</h3>
                  <p className="job-meta">
                    <span>{job.role}</span>
                    <span>{job.org}</span>
                    <span>{job.place}</span>
                    <span>{job.dates}</span>
                  </p>
                  <p>{job.body}</p>
                  {job.points.length > 0 && (
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </section>
        </div>

        <aside className="band">
          <div className="wrap">
            <blockquote>
              Their walls were not just built to impress, but to serve.
            </blockquote>
            <cite>On Chettinad mansions · Village Square, June 2025</cite>
          </div>
        </aside>

        <div className="wrap">
          <section id="writing" className="section reveal">
            <div className="section-head">
              <h2>Writing</h2>
              <a className="idx" href={site.villageSquare} target="_blank" rel="noopener noreferrer">
                Village Square index →
              </a>
            </div>
            <div className="writing-grid">
              {writing.map((piece) => (
                <a
                  className="piece"
                  key={piece.href}
                  href={piece.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <time>{piece.date}</time>
                  <h3>{piece.title}</h3>
                  <p>{piece.dek}</p>
                  <span className="more">{piece.outlet} · Read</span>
                </a>
              ))}
            </div>
          </section>

          <section id="camera" className="section reveal">
            <div className="section-head">
              <h2>On camera</h2>
              <span className="idx">§ B · Rural Renaissance / IRC</span>
            </div>
            <div className="camera-grid">
              {camera.map((item) => (
                <a
                  className="tape"
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="tape-top">
                    <span>{item.kind}</span>
                    <span>Watch on LinkedIn</span>
                  </div>
                  <div className="play" aria-hidden="true">
                    <PlayIcon />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="with">{item.with}</p>
                  <blockquote>“{item.quote}”</blockquote>
                  <p className="note">{item.note}</p>
                </a>
              ))}
            </div>
          </section>

          <section id="notes" className="section reveal">
            <div className="section-head">
              <h2>Notes</h2>
              <span className="idx">§ C · Education and method</span>
            </div>
            <div className="notes">
              <div>
                {education.map((item) => (
                  <article className="edu" key={item.deg}>
                    <h3>{item.deg}</h3>
                    <p className="school">{item.school}</p>
                    <p className="dates">{item.dates}</p>
                    {item.note ? <p>{item.note}</p> : null}
                  </article>
                ))}
              </div>
              <div>
                {skills.map((skill) => (
                  <div className="skill" key={skill.label}>
                    <p className="lbl">{skill.label}</p>
                    <p>{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="wrap">
          <section id="contact" className="contact reveal">
            <hr className="hair" />
            <p className="kicker muted" style={{ marginTop: 28 }}>
              Available
            </p>
            <h2>
              Six months,
              <br />
              from December 2026.
            </h2>
            <p className="avail">
              Looking for a full-time placement in strategy, advisory or
              implementation research. Happiest where a statute, a budget and a
              field note have to be made to talk to each other.
            </p>
            <div className="contact-row">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={site.resume}>Resume</a>
              <a href={site.villageSquare} target="_blank" rel="noopener noreferrer">
                Village Square
              </a>
            </div>
          </section>

          <footer className="foot">
            <span>{site.name}</span>
            <span>Mumbai · public policy</span>
            <span>© {new Date().getFullYear()}</span>
          </footer>
        </div>
      </main>
    </>
  );
}
