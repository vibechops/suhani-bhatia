"use client";

import { useMemo, useState } from "react";
import { nfhsNational, nfhsStates } from "../lib/nfhs";

type SortKey = "gap" | "bank" | "mobile";

function gapOf(bank: number, mobile: number) {
  return bank - mobile;
}

function implication(name: string, bank: number, mobile: number) {
  const gap = gapOf(bank, mobile);
  if (gap >= 30) {
    return `A scheme that OTPs the account holder is designed for ${bank.toFixed(1)}% and can actually reach ${mobile.toFixed(1)}%. ${name} is a severe mismatch.`;
  }
  if (gap >= 20) {
    return `Own-use accounts sit ${gap.toFixed(1)} points ahead of own-use phones. Digital welfare that needs an OTP is speaking to the narrower number.`;
  }
  return `The account-to-phone gap is ${gap.toFixed(1)} points. A digital-first channel in ${name} is closer to the population it assumes.`;
}

export function NfhsExplorer() {
  const [code, setCode] = useState("MP");
  const [sort, setSort] = useState<SortKey>("gap");

  const selected = nfhsStates.find((s) => s.code === code) ?? nfhsStates[4];
  const gap = gapOf(selected.bank, selected.mobile);

  const ranked = useMemo(() => {
    const rows = nfhsStates.map((s) => ({ ...s, gap: gapOf(s.bank, s.mobile) }));
    rows.sort((a, b) => {
      if (sort === "bank") return b.bank - a.bank;
      if (sort === "mobile") return b.mobile - a.mobile;
      return b.gap - a.gap;
    });
    return rows;
  }, [sort]);

  const max = Math.max(
    ...ranked.map((s) => (sort === "bank" ? s.bank : sort === "mobile" ? s.mobile : s.gap)),
  );

  const metric = (s: (typeof ranked)[number]) =>
    sort === "bank" ? s.bank : sort === "mobile" ? s.mobile : s.gap;

  const unit = sort === "gap" ? "pp" : "%";

  return (
    <div className="tool-wrap">
      <p className="kind">Phase-II state</p>
      <div className="lab-chips" role="group" aria-label="State">
        {nfhsStates.map((s) => (
          <button
            key={s.code}
            type="button"
            className="lab-chip"
            aria-pressed={s.code === code}
            onClick={() => setCode(s.code)}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="stats" style={{ marginBottom: 28 }}>
        <div className="stat">
          <strong>{selected.bank.toFixed(1)}%</strong>
          <b>Own-use account</b>
          <span>Women 15–49 who use their own bank account</span>
        </div>
        <div className="stat">
          <strong>{selected.mobile.toFixed(1)}%</strong>
          <b>Own-use phone</b>
          <span>Women 15–49 who use their own mobile phone</span>
        </div>
        <div className="stat">
          <strong>{gap.toFixed(1)} pp</strong>
          <b>Account-to-phone gap</b>
          <span>The population a digital channel assumes, minus the one it can reach</span>
        </div>
        <div className="stat">
          <strong>{selected.dec.toFixed(1)}%</strong>
          <b>Household decisions</b>
          <span>Participates in three household decisions</span>
        </div>
      </div>

      <aside className="reco">
        <p className="kind">{selected.name}</p>
        <p>{implication(selected.name, selected.bank, selected.mobile)}</p>
      </aside>

      <h2 style={{ marginTop: 48 }}>Against the national totals</h2>
      <p className="lab-legend">
        <span>
          <i /> {selected.name}
        </span>
        <span>
          <i className="nat" /> National NFHS-5
        </span>
      </p>
      <div className="lab-compare">
        {[
          { label: "Own-use account", a: selected.bank, b: nfhsNational.bank.nfhs5 },
          { label: "Own-use phone", a: selected.mobile, b: nfhsNational.mobile.nfhs5 },
          { label: "Household decisions", a: selected.dec, b: nfhsNational.decisions.nfhs5 },
        ].map((row) => (
          <div className="row" key={row.label}>
            <span className="lbl">{row.label}</span>
            <div className="lab-dual">
              <div className="track">
                <span className="fill" style={{ width: `${row.a}%` }} />
              </div>
              <div className="track">
                <span className="fill nat" style={{ width: `${row.b}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Eleven Phase-II states</h2>
      <p className="meta" style={{ marginBottom: 12 }}>
        Click a row to select it. Sorted by{" "}
        {sort === "gap" ? "account-to-phone gap" : sort === "bank" ? "own-use account" : "own-use phone"}.
      </p>
      <div className="lab-chips" role="group" aria-label="Sort">
        <button type="button" className="lab-chip" aria-pressed={sort === "gap"} onClick={() => setSort("gap")}>
          Gap
        </button>
        <button type="button" className="lab-chip" aria-pressed={sort === "bank"} onClick={() => setSort("bank")}>
          Account
        </button>
        <button type="button" className="lab-chip" aria-pressed={sort === "mobile"} onClick={() => setSort("mobile")}>
          Phone
        </button>
      </div>
      <div className="lab-ranks">
        {ranked.map((s) => (
          <button
            key={s.code}
            type="button"
            className="lab-rank"
            aria-pressed={s.code === code}
            onClick={() => setCode(s.code)}
          >
            <span className="name">{s.name}</span>
            <span className="lab-track">
              <span style={{ width: `${(metric(s) / max) * 100}%` }} />
            </span>
            <span className="val">
              {metric(s).toFixed(1)} {unit}
            </span>
          </button>
        ))}
      </div>
      <p className="note">
        Women 15–49. Source: IIPS / MoHFW, NFHS-5 Phase-II factsheets. Observed published
        totals, not estimates. Phase-II states only.
      </p>
    </div>
  );
}
