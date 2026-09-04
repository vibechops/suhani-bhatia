import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/Chrome";
import { education, roles, site, writing } from "./data";

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Header />
      <main>
        <div className="wrap">
          <section className="hero" id="top">
            <div>
              <h1>Suhani Bhatia</h1>
              <p className="standfirst">
                MA, Public Policy and Law, TISS. Writer at Village Square.
                Research assistant at Transform Rural India. The work is
                welfare, gender, and rural public services: what a circular
                says, and what a person at the counter actually gets.
              </p>
              <dl className="facts">
                <div>
                  <dt>What I do</dt>
                  <dd>
                    Field interviews and desk research on social protection,
                    gender, and rural public services. I write the work up so an
                    officer or an editor can use it.
                  </dd>
                </div>
                <div>
                  <dt>What I am good at</dt>
                  <dd>
                    Sitting with a case file. Reading a statute against intake.
                    Excel and Stata enough to not get lost. Decks for people who
                    have to decide.
                  </dd>
                </div>
                <div>
                  <dt>What I am looking for</dt>
                  <dd>
                    A six-month full-time placement from December 2026, in
                    strategy or advisory. Social protection, gender,
                    implementation. Mumbai, or wherever the work is.
                  </dd>
                </div>
              </dl>
              <div className="hero-actions">
                <a className="btn btn-solid" href={`mailto:${site.email}`}>
                  Email
                </a>
                <a className="btn btn-ghost" href={site.resume}>
                  Resume
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
              <Image
                src="/suhani.png"
                alt="Suhani Bhatia"
                width={400}
                height={400}
                priority
              />
              <figcaption>Mumbai, 2026</figcaption>
            </figure>
          </section>

          <section className="section" id="projects">
            <h2>Projects</h2>
            <p className="lede-s">
              Two pieces of analysis you can read. One from published survey
              data. One from a donor brief on Mumbai.
            </p>
            <div className="projects">
              <Link className="project" href="/work/agency">
                <div className="mini" aria-hidden="true">
                  <i style={{ height: "92%" }} />
                  <i style={{ height: "70%" }} />
                  <i style={{ height: "38%" }} />
                </div>
                <div>
                  <p className="tag">Working note · NFHS-5</p>
                  <h3>Who counts as empowered</h3>
                  <p>
                    Jan Dhan accounts jumped 26 points between NFHS-4 and NFHS-5.
                    Household decision-making jumped 5. Scheme dashboards still
                    treat the first number as the second. Research question,
                    variables, a small state-level OLS, and what a monitoring
                    cell would actually have to ask.
                  </p>
                  <span className="go">Read the case →</span>
                </div>
              </Link>
              <Link className="project alt" href="/work/migrants">
                <div className="mini" aria-hidden="true">
                  <i style={{ height: "100%" }} />
                  <i style={{ height: "71%" }} />
                  <i style={{ height: "30%" }} />
                </div>
                <div>
                  <p className="tag">Donor brief · Mumbai · Sep 2026</p>
                  <h3>On the lists, not at the counter</h3>
                  <p>
                    Informal migrants in Mumbai. A 100–71–51–30 funnel, two
                    bottlenecks, two options, a 90-day diagnostic. Written as a
                    one-slide strategy note: benefits received, not
                    registrations.
                  </p>
                  <span className="go">Read the brief →</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="section" id="work">
            <h2>Work</h2>
            <p className="lede-s">The jobs behind the notes.</p>
            {roles.map((role) => (
              <article className="role" key={role.title + role.dates}>
                <p className="when">{role.dates}</p>
                <h3>{role.title}</h3>
                <p className="org">
                  {role.org} · {role.where}
                </p>
                <p>{role.text}</p>
              </article>
            ))}
          </section>

          <section className="section" id="writing">
            <h2>Writing</h2>
            <p className="lede-s">
              For Village Square. More on the{" "}
              <a href={site.villageSquare} target="_blank" rel="noopener noreferrer">
                author page
              </a>.
            </p>
            <div className="pieces">
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
                </a>
              ))}
            </div>
          </section>

          <section className="section" id="about">
            <h2>About</h2>
            <div className="about-grid">
              <div>
                {education.map((item) => (
                  <article className="edu" key={item.deg}>
                    <h3>{item.deg}</h3>
                    <p className="meta">
                      {item.school} · {item.dates}
                    </p>
                    {item.note ? <p>{item.note}</p> : null}
                  </article>
                ))}
              </div>
              <div>
                <article className="edu">
                  <h3>Method</h3>
                  <p className="meta">What I reach for first</p>
                  <p>
                    Semi-structured interviews. Case files and circulars.
                    Implementation maps. NFHS and Census tables. Excel models.
                    Stata for coursework-level regression and
                    difference-in-differences. English and Hindi. Open to
                    relocating.
                  </p>
                </article>
                <article className="edu" style={{ marginTop: 18 }}>
                  <h3>Also</h3>
                  <p>
                    I filmed conversations for TRI’s Rural Renaissance series
                    and held the floor as emcee for Day 2 of the Delhi chapter
                    of the India Rural Colloquy 2025. An op-ed with Prof. Namrata
                    Chindarkar, IIM Ahmedabad, on women’s agency in scheme
                    monitoring, is in progress. That is the question in the
                    working note above.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="section contact" id="contact">
            <h2>If you want to talk</h2>
            <p>
              Best reached by email. Happy to send the resume, a writing sample,
              or the one-pager on either project.
            </p>
            <div className="contact-row">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={site.resume}>Resume</a>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
