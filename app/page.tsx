import Image from "next/image";
import Link from "next/link";
import { PageShell } from "./components/Shell";
import { site } from "./lib/site";
import { evidence, item } from "./lib/work";

const selected = [
  { slug: "transgender-rights", kicker: "Telangana Police" },
  { slug: "rural-service-delivery", kicker: "Transform Rural India" },
  { slug: "womens-agency", kicker: "Independent · NFHS" },
  { slug: "migrant-welfare", kicker: "Independent · Mumbai" },
  { slug: "green-apple", kicker: "Founder" },
] as const;

export default function Home() {
  const figures = evidence.slice(0, 4);

  return (
    <PageShell>
      <div className="wrap home">
        <section className="hero" id="top">
          <div>
            <p className="kicker">{site.tagline}</p>
            <h1>Suhani Bhatia</h1>
            <p className="statement">Where policy meets the person it is supposed to serve.</p>
            <p className="function">
              I diagnose where policy, institutions and implementation come apart,
              and recommend what can actually be done under real constraints.
            </p>
            <p className="hero-facts">
              <span>{site.city}</span>
              <span>{site.cohort}</span>
              <span>{site.available}</span>
              <span>{site.relocate}</span>
            </p>
            <p className="hero-links">
              <Link href="/approach">How I work</Link>
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

        <blockquote className="pull">
          Public programmes rarely fail at the point where they are written. Their
          difficulties emerge later, in the ordinary transactions through which a
          person is expected to claim what the state has already promised.
        </blockquote>

        <section className="band" id="work">
          <p className="kicker">Selected work</p>
          <h2>Five problems</h2>
          <ul className="work-scan">
            {selected.map((row) => {
              const w = item(row.slug);
              return (
                <li key={w.slug}>
                  <Link href={`/work/${w.slug}`}>
                    <span className="tag">{row.kicker}</span>
                    <strong>{w.title}</strong>
                    <span>{w.problem}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="hero-links">
            <Link href="/work">All work</Link>
          </p>
        </section>

        <section className="band" id="evidence">
          <p className="kicker">From the record</p>
          <h2>Selected figures</h2>
          <div className="facts">
            {figures.map((row) => (
              <Link key={row.figure + row.label} href={row.href} className="fact">
                <strong>{row.figure}</strong>
                <span>{row.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band contact" id="contact">
          <p className="kicker">Availability</p>
          <h2>Available full-time from December 2026</h2>
          <p className="prose">
            Open to strategy, public-sector advisory, policy research and
            implementation work.
          </p>
          <div className="contact-row">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <Link href="/resume">Résumé</Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
