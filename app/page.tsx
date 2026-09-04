import Image from "next/image";
import Link from "next/link";
import { WorkLink } from "./components/WorkLink";
import { PageShell } from "./components/Shell";
import { site } from "./lib/site";
import {
  capabilities,
  education,
  evidence,
  homeItems,
  item,
  timeline,
  writing,
} from "./lib/work";

export default function Home() {
  const feature = item("transgender-rights");
  const beside = item("rural-service-delivery");
  const research = item("womens-agency");
  const full = item("migrant-welfare");
  const trio = homeItems("trio");
  const wide = item("green-apple");
  const model = item("programme-costing");
  const tool = item("evidence-matrix");
  const workflow = item("welfare-data-workflow");
  const more = homeItems("list");

  return (
    <PageShell>
      <div className="wrap">
        <section className="hero" id="top">
          <div>
            <p className="kicker">Public policy · research · strategy</p>
            <h1>Suhani Bhatia</h1>
            <p className="statement">Where policy meets the person it is supposed to serve.</p>
            <p className="essay">
              Public programmes rarely fail at the point where they are written. Their
              difficulties emerge later, in the ordinary transactions through which a
              person is expected to claim what the state has already promised: a form
              completed correctly, a document produced on time, an official willing to
              explain the next step, a payment that arrives in the account it was meant
              to reach. My work has increasingly been concerned with this space between
              policy as it is designed and policy as it is encountered. I study the
              institutions, incentives and everyday frictions that determine what
              survives that journey.
            </p>
            <p className="hero-facts">
              <span>{site.city}</span>
              <span>{site.cohort}</span>
              <span>{site.available}</span>
              <span>{site.relocate}</span>
            </p>
            <p className="hero-links">
              <Link href="/work">Work</Link>
              <Link href="/writing">Writing</Link>
              <a href={site.resume}>Résumé</a>
              <Link href="#contact">Contact</Link>
            </p>
          </div>
          <figure className="portrait">
            <Image
              src="/suhani.png"
              alt="Suhani Bhatia, photographed in natural light against a plain wall"
              width={400}
              height={500}
              priority
            />
            <figcaption>Mumbai, 2026</figcaption>
          </figure>
        </section>

        <section className="band" id="evidence">
          <p className="kicker">Evidence</p>
          <h2>From the record</h2>
          <div className="facts">
            {evidence.map((row) => (
              <Link key={row.figure + row.label} href={row.href} className="fact">
                <strong>{row.figure}</strong>
                <span>{row.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band" id="intro">
          <p className="kicker">Introduction</p>
          <h2>How the work holds together</h2>
          <div className="prose">
            <p>
              Over the last several years the work has moved between villages, a Block
              Development Officer’s office, a police protection cell, published survey
              tables, a philanthropic strategy problem, and a tuition centre I ran
              myself. The subjects have included pensions, MGNREGA, rural public
              services, women’s agency, transgender rights, urban migrant welfare and
              labour-market attrition. The settings have changed. Many of the questions
              have not. They return to a practical problem: what happens between an
              intervention as it is designed and the person who has to live with its
              consequences?
            </p>
            <p>
              Sometimes that question is qualitative. Fourteen interviews for Transform
              Rural India asked why a district service reaches one community and not
              the next. Two villages with Sanchay followed a pension through the last
              mile of paperwork. At Pride Place, inside the Telangana Police, a rights
              statute had to survive intake. Sometimes the question is quantitative:
              whether financial inclusion, as NFHS records it, travels with the thin
              measures of agency the same survey also records. Sometimes it is
              strategic: how a donor might spend a finite grant so that a migrant
              receives a benefit at the counter. Sometimes it is operational: whether
              a classroom still exists on a Tuesday because the fee was priced so that
              a household could continue.
            </p>
            <p>
              Gender, social protection, rural development and policing institutions
              are the fields in which those methods have had to earn their keep. I
              write so that an officer, an editor or a colleague who has to decide can
              use the result. The archive below is organised by that work.
            </p>
          </div>
        </section>

        <section className="band" id="work">
          <p className="kicker">Selected work</p>
          <h2>A body of work gathered over several years</h2>
          <p className="lede">
            Professional assignments sit first. Independent research, strategy and
            technical work follow. Each piece is labelled for what it is: work done
            for an organisation, analysis done independently, or a demonstration on
            synthetic data.
          </p>

          <div className="feature-grid">
            <WorkLink item={feature} kicker="Professional research · Telangana State Police · 2026" />
            <WorkLink item={beside} kicker="Professional research · Transform Rural India · 2025–present" />
          </div>

          <div className="research-work">
            <WorkLink item={research} kicker="Independent research · NFHS-4 and NFHS-5 · 2026" />
          </div>

          <div className="full-work">
            <WorkLink item={full} kicker="Independent strategy analysis · Mumbai · 2026" />
          </div>

          <div className="trio">
            {trio.map((w) => (
              <WorkLink key={w.slug} item={w} />
            ))}
          </div>

          <div className="wide-work">
            <WorkLink item={wide} kicker="Founder and educator · Delhi · 2018–2023" />
          </div>

          <ul className="list-work">
            {more.map((w) => (
              <li key={w.slug}>
                <Link href={`/work/${w.slug}`}>
                  <span className="year">{w.year}</span>
                  <strong>{w.title}</strong>
                  <span className="cat">{w.category}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="split-two">
            <WorkLink item={model} />
            <div>
              <WorkLink item={tool} />
              <WorkLink item={workflow} />
            </div>
          </div>

          <p className="hero-links" style={{ marginTop: 28 }}>
            <Link href="/work">The full archive</Link>
          </p>
        </section>

        <section className="band" id="capabilities">
          <p className="kicker">Capability</p>
          <h2>Where each kind of work lives</h2>
          <dl className="cap-map">
            {capabilities.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>
                  {row.items.map((item, i) => (
                    <span key={item.href}>
                      {i > 0 ? <span aria-hidden="true"> · </span> : null}
                      <Link href={item.href}>{item.title}</Link>
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="band" id="writing">
          <p className="kicker">Writing</p>
          <h2>Published work</h2>
          <p className="prose">
            Village Square is where field notes have to become readable. The op-ed
            with Prof. Namrata Chindarkar is where the NFHS work is trying to become
            an argument about monitoring. The full list lives in the{" "}
            <Link href="/writing">writing archive</Link>.
          </p>
          <ul className="piece-list">
            {writing.map((piece) => (
              <li key={piece.title}>
                <a href={piece.href} {...(piece.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
                  <div className="pub">
                    {piece.publication} · {piece.date}
                  </div>
                  <h3>{piece.title}</h3>
                  <p>{piece.dek}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="band" id="speaking">
          <p className="kicker">Speaking and conversations</p>
          <h2>India Rural Colloquy and Rural Renaissance</h2>
          <p className="prose">
            In 2025 I emceed Day 2 of the Delhi chapter of the India Rural Colloquy,
            and recorded conversations for TRI’s Rural Renaissance series. The{" "}
            <Link href="/speaking">speaking page</Link> describes that work without
            inflating it. Photographs from those rooms are not published here.
          </p>
        </section>

        <section className="band" id="methods">
          <p className="kicker">Methods</p>
          <h2>How a question is taken apart</h2>
          <p className="prose">
            Semi-structured interviews. Case files and circulars. Implementation maps.
            NFHS tables. Excel models. Stata at the scale of published factsheets and
            coursework regression. Python and SQL used to clean and join public
            tables. Spatial reading of state indicators. Decks for people who have to
            decide. The <Link href="/methods">methods essay</Link> describes the
            practice in full.
          </p>
        </section>

        <section className="band" id="education">
          <p className="kicker">Education</p>
          <h2>TISS, then the earlier degrees</h2>
          {education.map((e) => (
            <article className="edu" key={e.deg}>
              <h3>{e.deg}</h3>
              <p className="meta">
                {e.school} · {e.dates}
              </p>
              {e.note ? <p className="prose">{e.note}</p> : null}
            </article>
          ))}
        </section>

        <section className="band">
          <p className="kicker">Progression</p>
          <h2>Where the work sat, in order</h2>
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
        </section>

        <section className="band">
          <p className="kicker">Questions</p>
          <h2>Questions I keep returning to</h2>
          <ol className="q-list">
            <li>What happens after a policy is passed, in the office that has to implement it?</li>
            <li>Who bears the cost, in time and dignity, of accessing a public service?</li>
            <li>When does access become agency, and when does it remain a name on a list?</li>
            <li>Why do programmes written as universal produce such different ordinary lives?</li>
          </ol>
        </section>

        <section className="band contact" id="contact">
          <p className="kicker">Availability</p>
          <h2>Some questions are worth spending time on</h2>
          <p className="prose">
            I am interested in work that requires research to lead somewhere
            concrete, whether that means understanding a delivery problem, evaluating
            an intervention, or helping an institution make a difficult decision.{" "}
            {site.interest} {site.available}. {site.city}. {site.relocate}.
          </p>
          <div className="contact-row">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.resume}>Résumé</a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
