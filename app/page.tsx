import Image from "next/image";
import Link from "next/link";
import { PageShell } from "./components/Shell";
import { clients, site } from "./lib/site";
import { capabilities, item, writing } from "./lib/work";

const featured = item("transgender-rights");
const cards = ["migrant-welfare", "womens-agency", "rural-service-delivery"].map(item);
const more = ["pension-delivery", "green-apple", "programme-costing", "attrition"].map(item);

const stats = [
  {
    href: "/work/rural-service-delivery",
    figure: "14",
    label: "interviews, six states",
    note: "Last-mile delivery research for Transform Rural India",
  },
  {
    href: "/work/migrant-welfare",
    figure: "₹5 cr",
    label: "strategy costed",
    note: "24-month migrant welfare grant: options, gate, M&E",
  },
  {
    href: "/work/womens-agency",
    figure: "+25.6 pp",
    label: "accounts vs +4.7 pp decisions",
    note: "NFHS-4 to NFHS-5, women 15–49. Stata, published totals",
  },
  {
    href: "/work/green-apple",
    figure: "₹1 L",
    label: "a month, built from zero",
    note: "Five years running a tuition centre in Delhi",
  },
];

const method = [
  {
    n: "01",
    title: "Start with the decision",
    text: "Who has to act, on what, by when, with what budget. The method follows from the decision, not the other way round.",
  },
  {
    n: "02",
    title: "Trace the system to the person",
    text: "Statutes, offices, incentives, frontline behaviour, and the person who has to claim. Find where the promise actually breaks.",
  },
  {
    n: "03",
    title: "Recommend what survives implementation",
    text: "Options with explicit trade-offs, a test that can reverse the choice, and figures labelled observed, estimated or proposed.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="wrap hero" id="top">
        <div>
          <p className="kicker">Policy analyst · Mumbai</p>
          <h1>
            I find where public programmes fail the people they are meant to reach,
            <em> and what to do about it.</em>
          </h1>
          <p className="lede">
            Field and desk research across six Indian states. Quantitative work in
            Stata, NFHS data and Excel cost models. Outputs an organisation can act
            on: decks, one-pagers, evaluation designs.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/work">
              Selected work
            </Link>
            <a className="btn" href={site.resume} download="Suhani-Bhatia-Resume.pdf">
              Download résumé
            </a>
          </div>
          <p className="hero-facts">
            <span>{site.cohort}</span>
            <span>{site.available}</span>
            <span>{site.relocate}</span>
          </p>
        </div>
        <figure className="portrait">
          <Image
            src="/suhani.jpg"
            alt="Suhani Bhatia, wearing a black blazer and glasses"
            width={800}
            height={800}
            priority
            sizes="(max-width: 800px) 320px, 420px"
          />
          <figcaption>Suhani Bhatia · Mumbai, 2026</figcaption>
        </figure>
      </section>

      <section className="proof" aria-label="Organisations worked with">
        <div className="wrap">
          <span className="label">Worked with</span>
          <ul>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap band" id="record">
        <div className="stats">
          {stats.map((s) => (
            <Link className="stat" href={s.href} key={s.href}>
              <strong>{s.figure}</strong>
              <b>{s.label}</b>
              <span>{s.note}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap band" id="work">
        <div className="sec-head">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Four problems, and what came out of them</h2>
          </div>
          <p className="hero-links">
            <Link href="/work">All work</Link>
          </p>
        </div>

        <div className="cards">
          <Link className="card feature" href={`/work/${featured.slug}`}>
            <div>
              <p className="kind">
                {featured.where} · {featured.year}
              </p>
              <h3>{featured.title}</h3>
              <p>{featured.dek}</p>
            </div>
            <div className="card-side">
              <dl>
                <dt>Question</dt>
                <dd>{featured.problem}</dd>
                <dt>Role</dt>
                <dd>{featured.role}</dd>
                <dt>Output</dt>
                <dd>{featured.output}</dd>
              </dl>
              <span className="go">Read the case →</span>
            </div>
          </Link>

          {cards.map((w) => (
            <Link className="card" href={`/work/${w.slug}`} key={w.slug}>
              <p className="kind">
                {w.where} · {w.year}
              </p>
              <h3>{w.title}</h3>
              <p>{w.problem}</p>
              <dl>
                <dt>Output</dt>
                <dd>{w.output}</dd>
              </dl>
              <span className="go">Read the case →</span>
            </Link>
          ))}
          <Link className="card" href="/dalberg">
            <p className="kind">Analyst case · 2026</p>
            <h3>One page on welfare access for migrant construction workers</h3>
            <p>
              Two barriers, two options, and the evidence that would choose between
              them, inside a ₹5 crore, 24-month envelope.
            </p>
            <dl>
              <dt>Output</dt>
              <dd>A one-page slide, a note on method, and a 90-day test that gates the recommendation.</dd>
            </dl>
            <span className="go">Read the note →</span>
          </Link>
        </div>

        <ul className="more-list">
          {more.map((w) => (
            <li key={w.slug}>
              <Link href={`/work/${w.slug}`}>
                <span className="meta">
                  {w.where} · {w.year}
                </span>
                <strong>{w.title}</strong>
                <span>Read →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="band tint" id="method">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="kicker">How I work</p>
              <h2>Diagnosis before prescription</h2>
            </div>
            <p className="hero-links">
              <Link href="/approach">The full approach</Link>
            </p>
          </div>
          <div className="method">
            {method.map((m) => (
              <article key={m.n}>
                <span className="n">{m.n}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap band" id="capabilities">
        <div className="sec-head">
          <div>
            <p className="kicker">Capabilities</p>
            <h2>What I bring to a team</h2>
          </div>
        </div>
        <div className="caps">
          {capabilities.map((c) => (
            <div className="cap" key={c.label}>
              <h3>{c.label}</h3>
              <ul>
                {c.items.map((i) => (
                  <li key={i.href + i.title}>
                    <Link href={i.href}>{i.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap band" id="writing">
        <div className="sec-head">
          <div>
            <p className="kicker">Writing</p>
            <h2>Published and in progress</h2>
          </div>
          <p className="hero-links">
            <Link href="/writing">All writing</Link>
          </p>
        </div>
        <div className="writing-row">
          {writing
            .filter((w) => w.group === "policy")
            .map((w) => (
              <a
                key={w.title}
                href={w.href}
                {...("internal" in w && w.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className="pub">
                  {w.publication} · {w.date}
                </span>
                <h3>{w.title}</h3>
                <p>{w.dek}</p>
              </a>
            ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <div>
            <p className="kicker">Availability</p>
            <h2>{site.available}</h2>
            <p>{site.interest}</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Email Suhani
              </a>
              <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="cta-side">
            <strong>{site.name}</strong>
            <br />
            {site.cohort}
            <br />
            {site.city} · {site.relocate.toLowerCase()}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
