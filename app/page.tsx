import Image from "next/image";
import Link from "next/link";
import { WorkLink } from "./components/WorkLink";
import { PageShell } from "./components/Shell";
import { site } from "./lib/site";
import { education, homeItems, item, timeline, writing } from "./lib/work";

export default function Home() {
  const feature = item("transgender-rights");
  const besideA = item("womens-agency");
  const full = item("migrant-welfare");
  const trio = homeItems("trio");
  const wide = item("green-apple");
  const model = item("programme-costing");
  const tool = item("evidence-matrix");
  const workflow = item("welfare-data-workflow");

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
              alt="Suhani Bhatia"
              width={400}
              height={500}
              priority
            />
            <figcaption>Mumbai, 2026</figcaption>
          </figure>
        </section>

        <section className="band" id="intro">
          <p className="kicker">Introduction</p>
          <h2>How I have come to look at public systems</h2>
          <div className="prose">
            <p>
              I came to public policy after running a small education business in Delhi
              and after reading psychology as a second degree. Those two educations
              still organise the way I look at a programme. One asks how an
              organisation actually works: who shows up, who pays, what breaks on a
              Tuesday. The other asks how a person decides, hesitates, trusts, or
              gives up. The MA in Public Policy and Law at TISS has given that
              combination a third vocabulary: statutes, budgets, evaluation designs,
              and the slow machinery of the Indian state.
            </p>
            <p>
              The fieldwork has been specific. A protection cell in the Telangana
              Police, where a rights law has to survive intake. Fourteen interviews
              for Transform Rural India, asking why a district service reaches one
              community and not the next. Two villages with Sanchay, following
              pensions through a Block Development Officer’s office. Writing for
              Village Square, which requires the same attention in a different
              register. Alongside that, independent work on NFHS tables, on migrant
              welfare in Mumbai, and on the cost of actually delivering a benefit
              rather than recording an enrolment.
            </p>
            <p>
              I am interested in gender, social protection, rural public services and
              the institutions that sit between a circular and a person. I use
              interviews, case files, published survey data, and simple models. I
              write the work so that an officer, an editor or a hiring panel can use
              it. I am available full-time from December 2026, based in Mumbai and
              open to relocating across India, for strategy, public-sector advisory,
              policy research, development and implementation roles.
            </p>
          </div>
        </section>

        <section className="band" id="work">
          <p className="kicker">Selected work</p>
          <h2>A body of work gathered over several years</h2>
          <p className="lede">
            Over the last several years the work has moved between villages,
            government offices, a police institution, published datasets and a small
            organisation I ran myself. The settings have changed. The question has
            been stubborn: what happens between an intervention as it is designed and
            the person who has to live with its consequences?
          </p>
          <p className="prose">
            The archive holds professional research, independent analysis, a
            programme-costing model, a spatial reading of NFHS, operating experience,
            writing and speaking. Some pieces are long because the evidence is long.
            Some are short because the résumé fact is short. Where the public record
            ends, the page says so.
          </p>
          <p className="kicker" style={{ marginTop: 28 }}>
            I want to see
          </p>
          <div className="cap-links">
            <Link href="/work?filter=policy">Policy research</Link>
            <Link href="/work?filter=field">Field research</Link>
            <Link href="/work?filter=quantitative">Quantitative analysis</Link>
            <Link href="/work?filter=strategy">Strategy</Link>
            <Link href="/work?filter=programme">Programme design</Link>
            <Link href="/work?filter=operations">Operations</Link>
            <Link href="/work?filter=data">Data</Link>
            <Link href="/work?filter=writing">Writing</Link>
            <Link href="/work?filter=speaking">Speaking</Link>
          </div>

          <div className="feature-grid" style={{ marginTop: 36 }}>
            <WorkLink item={feature} kicker="Professional research · Telangana · 2026" />
            <WorkLink item={besideA} kicker="Independent research · NFHS-5" />
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
            <WorkLink item={wide} kicker="Operations · Delhi · 2018–2023" />
          </div>

          <div className="split-two">
            <WorkLink item={model} />
            <div>
              <WorkLink item={tool} />
              <WorkLink item={workflow} />
            </div>
          </div>
        </section>

        <section className="band" id="writing">
          <p className="kicker">Writing</p>
          <h2>Policy, and other sentences</h2>
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
          <p className="kicker">Speaking</p>
          <h2>Rooms in which the work has to be said aloud</h2>
          <p className="prose">
            In 2025 I emceed Day 2 of the Delhi chapter of the India Rural Colloquy,
            and recorded conversations for TRI’s Rural Renaissance series. Holding a
            room is a different test from holding a paragraph.             The speaking note is short on purpose. Photographs from those rooms
            are not on this site.
          </p>
        </section>

        <section className="band" id="methods">
          <p className="kicker">Methods</p>
          <h2>How a question is taken apart</h2>
          <p className="prose">
            Semi-structured interviews. Case files and circulars. Implementation maps.
            NFHS and Census tables. Excel models. Stata at the level of coursework
            regression. Beginner Python and SQL, used honestly. QGIS-style spatial
            reasoning on published state totals. Decks for people who have to decide.
            The <Link href="/methods">methods essay</Link> describes the practice
            in full.
          </p>
        </section>

        <section className="band" id="education">
          <p className="kicker">Education</p>
          <h2>Three degrees, used as instruments</h2>
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
          <h2>A restrained timeline</h2>
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
          <p className="kicker">Questions I keep returning to</p>
          <h2>Four problems that do not expire</h2>
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
            I am interested in work that has to survive contact with implementation:
            social protection, gender, rural public services, and the strategy that
            sits around them. Consulting, research, foundations, government-facing
            organisations and fellowships are all plausible homes for that work. I am
            available full-time from December 2026. Mumbai, and open to relocation
            across India.
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
