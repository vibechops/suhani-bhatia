import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components/Shell";
import { site } from "../lib/site";

const title = "For Dalberg";
const description =
  "How Suhani Bhatia approached the Analyst case on welfare access for migrant construction workers in Greater Mumbai.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dalberg" },
  openGraph: {
    title: `${title} · ${site.name}`,
    description,
    url: "/dalberg",
    images: [
      {
        url: "/dalberg-assignment.png",
        width: 2134,
        height: 1200,
        alt: "One-page Analyst case on Greater Mumbai BOCW",
      },
    ],
  },
};

export default function DalbergPage() {
  return (
    <PageShell>
      <article className="wrap note">
        <header className="cv-top">
          <div>
            <p className="kicker">For Dalberg</p>
            <h1>The Analyst case, and how I got to the one page</h1>
          </div>
          <a
            className="cv-download"
            href={site.dalbergPdf}
            download="Suhani-Bhatia-Dalberg-Assignment.pdf"
          >
            Download the one-pager
          </a>
        </header>

        <p className="lede">
          A note for the Analyst team. The assignment asked for two barriers,
          two options, and the evidence that would choose. This page is the
          method. The slide is the output.
        </p>

        <div className="note-body">
          <h2>The question I actually answered</h2>
          <p>
            The brief is low-income urban migrants in Mumbai, a ₹5 crore donor,
            and 24 months. I did not try to repair “migrant welfare.” Greater
            Mumbai already has schemes, portals, and a construction-worker
            welfare board. The useful question was: given that machinery, where
            do workers still fall out of actual benefit receipt, and what can
            this budget change?
          </p>
          <p>
            I narrowed to migrant construction workers, especially naka and
            short-tenure workers without a cooperative contractor. BOCW is the
            destination scheme keyed to them. Food, identity, and health systems
            exist. They are not the residual this rupee should buy.
          </p>

          <h2>How I worked</h2>
          <p>
            I started with what the Board already does, then asked what still
            has no owner. Active Greater Mumbai registrations sat near 28,000
            from July 2023 to May 2026 while statewide stock grew. That is
            consistent with an entry gap. The eligible migrant
            construction-worker population is an estimate (1.3 to 4.5 lakh),
            not an administrative count. CAG claim figures are Maharashtra-wide
            and pre-RTS. I did not treat them as Mumbai’s current conversion
            rate.
          </p>
          <p>
            Every figure on the slide is labelled: observed, calculated,
            estimated, or a proposed test. I did not invent a donor preference
            beyond the brief. I did not recommend an app. Technology sits under
            the operating model.
          </p>

          <h2>What I would not claim</h2>
          <p>
            I did not pick a permanent winner. Option 1, entry and first-benefit
            support, is preferred because the addressable population is larger
            and the Mumbai-specific entry evidence is stronger. It proceeds only
            if a 90-day test can secure an accepted proof route and verification
            capacity. If that fails, and the Board will share individual-level
            IWBMS records, the page switches to claims-to-receipt case
            management. The recommendation is a gate, not a slogan.
          </p>

          <h2>What to look at on the page</h2>
          <ol>
            <li>
              The funnel: eligible, proof, registration, claim, receipt. Two
              barriers sit on that path: entry, then conversion.
            </li>
            <li>
              Two options that do not hybridise. One finds unregistered naka
              workers. The other works the existing registrant stock.
            </li>
            <li>
              Five tests in 90 days. The metric throughout is incremental
              benefits received.
            </li>
          </ol>
        </div>

        <figure className="slide-card">
          <a
            href={site.dalbergPdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the one-pager PDF"
          >
            <Image
              src="/dalberg-assignment.png"
              alt="One-page Analyst case: prioritise entry-to-benefit support for migrant construction workers in Greater Mumbai, subject to a 90-day feasibility test."
              width={2134}
              height={1200}
              sizes="(max-width: 1180px) calc(100vw - 36px), 1180px"
              unoptimized
              preload
            />
          </a>
          <figcaption>
            One page, Greater Mumbai BOCW. Click the slide to open the PDF, or{" "}
            <a
              href={site.dalbergPdf}
              download="Suhani-Bhatia-Dalberg-Assignment.pdf"
            >
              download it
            </a>
            .
          </figcaption>
        </figure>

        <p className="note-foot">
          {site.name}
          {" · "}
          {site.city}
          {" · "}
          {site.available}
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {" · "}
          <Link href="/resume">Résumé</Link>
          {" · "}
          <Link href="/work">Work</Link>
          {" · "}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </article>
    </PageShell>
  );
}
