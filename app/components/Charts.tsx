import { nfhsNational, nfhsStates } from "../lib/nfhs";

const accent = "#6f2430";
const ink = "#1c1814";
const muted = "#6a6158";
const line = "#d9d0c3";
const wash = "#e8dfd0";

export function NationalBars() {
  const rows = [
    { label: "Bank or savings account she herself uses", a: nfhsNational.bank.nfhs4, b: nfhsNational.bank.nfhs5 },
    { label: "Participates in three household decisions", a: nfhsNational.decisions.nfhs4, b: nfhsNational.decisions.nfhs5 },
    { label: "Mobile phone she herself uses", a: nfhsNational.mobile.nfhs4, b: nfhsNational.mobile.nfhs5 },
    { label: "Owns house or land, alone or jointly", a: nfhsNational.land.nfhs4, b: nfhsNational.land.nfhs5 },
    { label: "Worked in the last 12 months and was paid in cash", a: nfhsNational.paidCash.nfhs4, b: nfhsNational.paidCash.nfhs5 },
  ];
  const w = 640;
  const rowH = 52;
  const h = 8 + rows.length * rowH;

  return (
    <figure className="fig">
      <figcaption>
        Financial inclusion increased substantially faster than the agency and paid-work measures between NFHS-4 and NFHS-5.
      </figcaption>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="National NFHS comparison">
        {rows.map((r, i) => {
          const y = 8 + i * rowH;
          const usable = w - 56;
          return (
            <g key={r.label}>
              <text x={0} y={y + 12} fontSize="12" fill={ink} fontFamily="system-ui">
                {r.label}
              </text>
              <rect x={0} y={y + 18} width={usable} height="7" fill={line} />
              <rect x={0} y={y + 18} width={(r.a / 100) * usable} height="7" fill={wash} />
              <rect x={0} y={y + 28} width={usable} height="7" fill={line} />
              <rect x={0} y={y + 28} width={(r.b / 100) * usable} height="7" fill={accent} />
              <text x={w} y={y + 25} fontSize="10" fill={muted} textAnchor="end">
                {r.a.toFixed(1)}
              </text>
              <text x={w} y={y + 36} fontSize="10" fill={accent} textAnchor="end">
                {r.b.toFixed(1)}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">
        Pale bar: NFHS-4 (2015–16). Dark bar: NFHS-5 (2019–21). Women 15–49. Decision-making is currently married women who usually participate in three household decisions. Source: IIPS and MoHFW, NFHS India reports.
      </p>
    </figure>
  );
}

export function StateScatter() {
  const w = 640;
  const h = 360;
  const pad = { l: 44, r: 16, t: 16, b: 40 };
  const xmin = 70;
  const xmax = 95;
  const ymin = 84;
  const ymax = 95;
  const x = (v: number) => pad.l + ((v - xmin) / (xmax - xmin)) * (w - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - ymin) / (ymax - ymin)) * (h - pad.t - pad.b);
  const y1 = 63.37 + 0.326 * xmin;
  const y2 = 63.37 + 0.326 * xmax;

  return (
    <figure className="fig">
      <figcaption>
        Across eleven Phase-II states, a 10-point difference in own-use accounts predicts about 3 points in decision-making, not 10.
      </figcaption>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="State scatter of bank accounts and decision-making">
        <line x1={pad.l} y1={h - pad.b} x2={w - pad.r} y2={h - pad.b} stroke={line} />
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={h - pad.b} stroke={line} />
        <line x1={x(xmin)} y1={y(y1)} x2={x(xmax)} y2={y(y2)} stroke={muted} strokeDasharray="4 4" />
        {nfhsStates.map((s) => (
          <g key={s.code}>
            <circle cx={x(s.bank)} cy={y(s.dec)} r="5" fill={accent} />
            <text x={x(s.bank) + 7} y={y(s.dec) + 3} fontSize="10" fill={muted} fontFamily="system-ui">
              {s.code}
            </text>
          </g>
        ))}
        <text x={w / 2} y={h - 10} fontSize="11" fill={muted} textAnchor="middle" fontFamily="system-ui">
          Women with a bank or savings account they themselves use (%)
        </text>
        <text
          x="14"
          y={h / 2}
          fontSize="11"
          fill={muted}
          textAnchor="middle"
          fontFamily="system-ui"
          transform={`rotate(-90 14 ${h / 2})`}
        >
          Participates in three household decisions (%)
        </text>
      </svg>
      <p className="note">
        Fitted line: decision-making = 63.4 + 0.33 × bank account (R² = 0.52). n = 11 Phase-II states. Ecological cross-section. Source: NFHS-5 Phase-II factsheets.
      </p>
    </figure>
  );
}

export function PhoneGapMap() {
  const gaps = nfhsStates
    .map((s) => ({ ...s, gap: s.bank - s.mobile }))
    .sort((a, b) => b.gap - a.gap);
  const max = Math.max(...gaps.map((g) => g.gap));

  return (
    <figure className="fig">
      <figcaption>
        In Madhya Pradesh and Chhattisgarh, own-use accounts run more than 30 points ahead of own-use phones. Digital welfare that depends on OTP assumes the narrower number.
      </figcaption>
      <svg viewBox="0 0 640 420" width="100%" role="img" aria-label="Bank minus mobile gap by state">
        {gaps.map((s, i) => {
          const y = 12 + i * 36;
          const w = (s.gap / max) * 420;
          return (
            <g key={s.code}>
              <text x="0" y={y + 14} fontSize="12" fill={ink} fontFamily="system-ui">
                {s.name}
              </text>
              <rect x="180" y={y} width="420" height="16" fill={line} />
              <rect x="180" y={y} width={w} height="16" fill={accent} />
              <text x={188 + w} y={y + 13} fontSize="11" fill={ink} fontFamily="system-ui">
                {s.gap.toFixed(1)} pp
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">
        Gap = own-use bank account minus own-use mobile phone, women 15–49. Phase-II states only. Source: NFHS-5 factsheets. Spatial unit is the state. This is a ranked cartogram of the gap, published here as the map of the finding. A QGIS project file would use the same CSV.
      </p>
    </figure>
  );
}

export function MigrantFunnel() {
  const steps = [
    { label: "On a scheme list", v: 100 },
    { label: "Knows portability exists", v: 71 },
    { label: "Tried to claim", v: 51 },
    { label: "Actually served", v: 30 },
  ];
  return (
    <figure className="fig">
      <figcaption>
        Awareness of portability is 71 percent. Receipt is 30 percent. The grant has to buy the drop between those two numbers.
      </figcaption>
      <svg viewBox="0 0 640 220" width="100%" role="img" aria-label="Migrant welfare funnel">
        {steps.map((s, i) => {
          const y = 16 + i * 50;
          const bw = (s.v / 100) * 420;
          return (
            <g key={s.label}>
              <text x="0" y={y + 14} fontSize="13" fill={ink} fontFamily="system-ui">
                {s.label}
              </text>
              <rect x="200" y={y} width="420" height="16" fill={line} />
              <rect x="200" y={y} width={bw} height="16" fill={i === 3 ? accent : wash} />
              <text x={208 + bw} y={y + 13} fontSize="12" fill={ink} fontFamily="system-ui">
                {s.v}%
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">
        CLRA, One Nation Unequal Access (December 2024), n = 1,012 seasonal migrants. Registration at ~100% is an estimate relative to source-state lists. Mumbai’s own baseline is a diagnostic output, not assumed.
      </p>
    </figure>
  );
}

export function CostBars() {
  const rows = [
    { label: "Conservative", served: 12000, unit: 4167 },
    { label: "Base", served: 25000, unit: 2000 },
    { label: "Upside", served: 35000, unit: 1429 },
  ];
  return (
    <figure className="fig">
      <figcaption>
        In the base case, ₹5 crore unlocks 25,000 benefits at about ₹2,000 each. The conservative case more than doubles the unit cost.
      </figcaption>
      <svg viewBox="0 0 640 180" width="100%" role="img" aria-label="Cost scenarios">
        {rows.map((r, i) => {
          const y = 16 + i * 52;
          const w = (r.served / 35000) * 400;
          return (
            <g key={r.label}>
              <text x="0" y={y + 14} fontSize="13" fill={ink} fontFamily="system-ui">
                {r.label}
              </text>
              <rect x="130" y={y} width={w} height="18" fill={accent} />
              <text x={140 + w} y={y + 14} fontSize="12" fill={ink} fontFamily="system-ui">
                {r.served.toLocaleString("en-IN")} served · ₹{r.unit.toLocaleString("en-IN")}/benefit
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">
        Author estimates for an independent strategy model. Workbook: Inputs, Assumptions, Population, Coverage, Cost, Scenarios, Sensitivity. See artefacts.
      </p>
    </figure>
  );
}

export function AttritionFunnel() {
  const steps = [
    { label: "Joined (synthetic cohort)", v: 1000 },
    { label: "Still there at 90 days", v: 880 },
    { label: "Still there at 12 months", v: 820 },
  ];
  return (
    <figure className="fig">
      <figcaption>
        A 1,000-person synthetic cohort loses 180 people in a year. Early exit (first 90 days) accounts for two-thirds of that loss.
      </figcaption>
      <svg viewBox="0 0 640 170" width="100%" role="img" aria-label="Synthetic attrition funnel">
        {steps.map((s, i) => {
          const y = 12 + i * 50;
          const w = (s.v / 1000) * 420;
          return (
            <g key={s.label}>
              <text x="0" y={y + 14} fontSize="13" fill={ink} fontFamily="system-ui">
                {s.label}
              </text>
              <rect x="200" y={y} width={w} height="16" fill={i === 2 ? accent : wash} />
              <text x={208 + w} y={y + 13} fontSize="12" fill={ink} fontFamily="system-ui">
                {s.v}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">Synthetic data used for analytical demonstration. Not VIP Industries’ figures.</p>
    </figure>
  );
}
