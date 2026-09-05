import Link from "next/link";
import { nfhsNational } from "../lib/nfhs";
import { steps } from "../lib/work";

function AgencyBody() {
  const bank = nfhsNational.bank.nfhs5 - nfhsNational.bank.nfhs4;
  const dec = nfhsNational.decisions.nfhs5 - nfhsNational.decisions.nfhs4;
  const rows = [
    {
      label: "Own-use bank or savings account",
      delta: bank,
      from: nfhsNational.bank.nfhs4,
      to: nfhsNational.bank.nfhs5,
    },
    {
      label: "Three household decisions",
      delta: dec,
      from: nfhsNational.decisions.nfhs4,
      to: nfhsNational.decisions.nfhs5,
    },
  ];

  return (
    <>
      <p className="kind">Independent · NFHS-4 to NFHS-5</p>
      <h3>Accounts moved. Agency did not keep pace.</h3>
      <div className="info-compare">
        {rows.map((r) => (
          <div className="info-row" key={r.label}>
            <div>
              <b>{r.label}</b>
              <span>
                {r.from.toFixed(1)}% to {r.to.toFixed(1)}%
              </span>
            </div>
            <div className="info-track" aria-hidden="true">
              <div className="info-fill" style={{ width: `${(r.delta / bank) * 100}%` }} />
            </div>
            <strong>+{r.delta.toFixed(1)} pp</strong>
          </div>
        ))}
      </div>
      <p className="note">Women 15–49. Decision-making is currently married women. Source: IIPS / MoHFW.</p>
    </>
  );
}

export function AgencyDelta({ linked = true }: { linked?: boolean }) {
  if (!linked) {
    return (
      <div className="info-card">
        <AgencyBody />
      </div>
    );
  }

  return (
    <Link href="/work/womens-agency" className="info-card">
      <AgencyBody />
    </Link>
  );
}

function CoverageBody() {
  return (
    <>
      <p className="kind">Independent · Drèze and Khera, 2025</p>
      <h3>About 9 in 100 births.</h3>
      <div className="dot-grid" aria-hidden="true">
        {Array.from({ length: 100 }, (_, i) => (
          <span key={i} className={i < 9 ? "on" : undefined} />
        ))}
      </div>
      <p className="note">
        Effective PMMVY coverage, 2023–24. Source: The Hindu, 11 March 2025.
      </p>
    </>
  );
}

export function CoverageGrid({ linked = true }: { linked?: boolean }) {
  if (!linked) {
    return (
      <div className="info-card">
        <CoverageBody />
      </div>
    );
  }

  return (
    <Link href="/work/womens-agency" className="info-card">
      <CoverageBody />
    </Link>
  );
}

export function PromisePath() {
  const nodes = [
    { n: "01", label: "Law", text: "A right is written." },
    { n: "02", label: "Institution", text: "A cell or office is created." },
    { n: "03", label: "Frontline", text: "Ordinary administration takes over." },
    { n: "04", label: "Citizen", text: "A person has to claim it." },
    { n: "05", label: "Outcome", text: "A result they can actually use." },
  ];

  return (
    <div className="info-path" aria-label="How a public promise travels">
      {nodes.map((node) => (
        <div className="info-node" key={node.label}>
          <span className="n">{node.n}</span>
          <strong>{node.label}</strong>
          <span>{node.text}</span>
        </div>
      ))}
    </div>
  );
}

export function MethodFlow() {
  return (
    <ol className="info-flow">
      {steps.map((s, i) => (
        <li key={s.label}>
          <span className="n">{String(i + 1).padStart(2, "0")}</span>
          <b>{s.label}</b>
          <span>{s.text}</span>
        </li>
      ))}
    </ol>
  );
}

export function RecordMarks() {
  const marks = [
    { href: "/work/rural-service-delivery", figure: "14", label: "interviews", note: "Six states, last-mile delivery" },
    { href: "/work/transgender-rights", figure: "4", label: "parts", note: "Implementation note for Telangana Police" },
    { href: "/work/migrant-welfare", figure: "₹5 cr", label: "grant", note: "Independent strategy, 24 months" },
    { href: "/work/green-apple", figure: "₹1 L", label: "a month", note: "Tuition centre, built from zero" },
  ];

  return (
    <div className="info-marks">
      {marks.map((m) => (
        <Link href={m.href} className="info-mark" key={m.href}>
          <strong>{m.figure}</strong>
          <b>{m.label}</b>
          <span>{m.note}</span>
        </Link>
      ))}
    </div>
  );
}
