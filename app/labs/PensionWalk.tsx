"use client";

import { useMemo, useState } from "react";

type Office = "Panchayat" | "BDO" | "Bank";

type Friction = {
  id: string;
  office: Office;
  label: string;
  drop: number;
};

const FRICTIONS: Friction[] = [
  { id: "unaware", office: "Panchayat", label: "Does not know she is listed", drop: 0.08 },
  { id: "aadhaar", office: "Panchayat", label: "Aadhaar or name mismatch", drop: 0.18 },
  { id: "document", office: "Panchayat", label: "Document the office will not accept", drop: 0.1 },
  { id: "sits", office: "BDO", label: "Correction file sits", drop: 0.22 },
  { id: "window", office: "BDO", label: "Window closed that day", drop: 0.12 },
  { id: "biometric", office: "Bank", label: "Biometric fail", drop: 0.15 },
  { id: "account", office: "Bank", label: "Account dormant or wrong", drop: 0.1 },
];

const TYPICAL = ["aadhaar", "sits", "biometric"];
const LISTED = 100;
const OFFICES: Office[] = ["Panchayat", "BDO", "Bank"];

function apply(on: string[]) {
  const enabled = new Set(on);
  let remaining = LISTED;
  const at: Record<Office, number> = { Panchayat: LISTED, BDO: LISTED, Bank: LISTED };
  for (const office of OFFICES) {
    for (const f of FRICTIONS.filter((x) => x.office === office && enabled.has(x.id))) {
      remaining *= 1 - f.drop;
    }
    at[office] = remaining;
  }
  return {
    afterPanchayat: Math.round(at.Panchayat),
    afterBdo: Math.round(at.BDO),
    paid: Math.round(at.Bank),
  };
}

export function PensionWalk() {
  const [on, setOn] = useState<string[]>(TYPICAL);
  const funnel = useMemo(() => apply(on), [on]);
  const unpaid = LISTED - funnel.paid;

  function toggle(id: string) {
    setOn((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const stages = [
    { label: "Listed", n: LISTED },
    { label: "After panchayat", n: funnel.afterPanchayat },
    { label: "After BDO", n: funnel.afterBdo },
    { label: "Paid", n: funnel.paid },
  ];

  return (
    <div className="tool-wrap">
      <div className="btn-row" style={{ marginTop: 0, marginBottom: 28 }}>
        <button type="button" className="btn btn-primary" onClick={() => setOn(TYPICAL)}>
          Typical village
        </button>
        <button type="button" className="btn" onClick={() => setOn([])}>
          Clear path
        </button>
      </div>

      <div className="stats" style={{ marginBottom: 28, gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat">
          <strong>{LISTED}</strong>
          <b>Listed</b>
          <span>Name is on the payment file</span>
        </div>
        <div className="stat">
          <strong>{funnel.paid}</strong>
          <b>Paid</b>
          <span>The transfer arrives</span>
        </div>
        <div className="stat">
          <strong>{unpaid}</strong>
          <b>Listed but unpaid</b>
          <span>Success on the wrong dashboard</span>
        </div>
      </div>

      <h2>Where the file thins</h2>
      <div className="lab-funnel">
        {stages.map((s) => (
          <div className="row" key={s.label}>
            <span className="lbl">{s.label}</span>
            <span className="track">
              <span className="fill" style={{ width: `${s.n}%` }} />
            </span>
            <span className="n">{s.n}</span>
          </div>
        ))}
      </div>

      <h2>Frictions by office</h2>
      <p className="meta" style={{ marginBottom: 16 }}>
        Each toggle cuts a share of whoever is still in the file. Sequential, not additive.
      </p>
      <div className="lab-offices">
        {OFFICES.map((office) => (
          <div className="lab-office" key={office}>
            <h3>{office}</h3>
            {FRICTIONS.filter((f) => f.office === office).map((f) => {
              const pressed = on.includes(f.id);
              return (
                <button
                  key={f.id}
                  type="button"
                  className="lab-friction"
                  aria-pressed={pressed}
                  onClick={() => toggle(f.id)}
                >
                  <span className="lab-box" aria-hidden />
                  <span>
                    <b>{f.label}</b>
                    <span className="meta">−{Math.round(f.drop * 100)}% of remaining</span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <aside className="reco">
        <p className="kind">Illustrative, not field counts</p>
        <p>
          The mechanism is from the Sanchay work in two villages. The drop rates are invented
          for this sketch. Village-level numbers stay with the organisation.
        </p>
      </aside>
    </div>
  );
}
