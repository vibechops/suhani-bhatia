import { nfhsNational, nfhsStates } from "../data";

const accent = "#a56b62";
const sage = "#6f8a78";
const muted = "#7a7268";
const ink = "#3a3530";
const line = "#e4dbd0";

export function NationalBars() {
  const rows = [
    { label: "Bank / savings account she uses", a: nfhsNational.bank.nfhs4, b: nfhsNational.bank.nfhs5 },
    { label: "Participates in three household decisions", a: nfhsNational.decisions.nfhs4, b: nfhsNational.decisions.nfhs5 },
    { label: "Mobile phone she uses", a: nfhsNational.mobile.nfhs4, b: nfhsNational.mobile.nfhs5 },
    { label: "Owns house or land, alone or jointly", a: nfhsNational.land.nfhs4, b: nfhsNational.land.nfhs5 },
  ];
  const w = 640;
  const rowH = 52;
  const h = 28 + rows.length * rowH;
  const barX = 8;
  const barW = w - 16;

  return (
    <div className="chart-card">
      <h3>Figure 1 · India, NFHS-4 (2015–16) vs NFHS-5 (2019–21), women 15–49</h3>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="National NFHS comparison bars">
        {rows.map((r, i) => {
          const y = 8 + i * rowH;
          return (
            <g key={r.label}>
              <text x={0} y={y + 12} fontSize="12" fill={ink} fontFamily="system-ui">
                {r.label}
              </text>
              <rect x={barX} y={y + 18} width={barW - 44} height="8" fill={line} rx="2" />
              <rect x={barX} y={y + 18} width={(r.a / 100) * (barW - 44)} height="8" fill={sage} rx="2" opacity="0.55" />
              <rect x={barX} y={y + 28} width={barW - 44} height="8" fill={line} rx="2" />
              <rect x={barX} y={y + 28} width={(r.b / 100) * (barW - 44)} height="8" fill={accent} rx="2" />
              <text x={w - 8} y={y + 26} fontSize="10" fill={muted} textAnchor="end">
                {r.a.toFixed(1)}
              </text>
              <text x={w - 8} y={y + 36} fontSize="10" fill={accent} textAnchor="end">
                {r.b.toFixed(1)}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">Pale bar: NFHS-4. Dark bar: NFHS-5. Bank accounts moved 25.6 points. Decision-making moved 4.7.</p>
    </div>
  );
}

export function StateScatter() {
  const w = 640;
  const h = 360;
  const pad = { l: 42, r: 16, t: 16, b: 36 };
  const xs = nfhsStates.map((s) => s.bank);
  const ys = nfhsStates.map((s) => s.dec);
  const xmin = 70;
  const xmax = 95;
  const ymin = 84;
  const ymax = 95;
  const x = (v: number) => pad.l + ((v - xmin) / (xmax - xmin)) * (w - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - ymin) / (ymax - ymin)) * (h - pad.t - pad.b);
  // OLS line: dec = 63.37 + 0.326 * bank
  const y1 = 63.37 + 0.326 * xmin;
  const y2 = 63.37 + 0.326 * xmax;

  return (
    <div className="chart-card">
      <h3>Figure 2 · Eleven Phase-II states: own-use bank account vs household decision-making</h3>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Scatter of bank accounts against decision making">
        <line x1={pad.l} y1={h - pad.b} x2={w - pad.r} y2={h - pad.b} stroke={line} />
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={h - pad.b} stroke={line} />
        <line
          x1={x(xmin)}
          y1={y(y1)}
          x2={x(xmax)}
          y2={y(y2)}
          stroke={sage}
          strokeDasharray="4 4"
        />
        {nfhsStates.map((s) => (
          <g key={s.name}>
            <circle cx={x(s.bank)} cy={y(s.dec)} r="5" fill={accent} />
            <text x={x(s.bank) + 7} y={y(s.dec) + 3} fontSize="10" fill={muted} fontFamily="system-ui">
              {s.code}
            </text>
          </g>
        ))}
        <text x={w / 2} y={h - 8} fontSize="11" fill={muted} textAnchor="middle" fontFamily="system-ui">
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
        Fitted line: decision-making = 63.4 + 0.33 × bank account (R² = 0.52). A 10-point rise in accounts predicts about 3 points in decision-making, not 10. Mobile-phone ownership adds almost nothing once accounts are in the model (R² rises only to 0.55).
      </p>
    </div>
  );
}

export function MisVsAgency() {
  const rows = [
    {
      scheme: "MGNREGA",
      mis: "Women as % of persondays (57.9% in FY 2024–25)",
      missing: "Whether she decided to demand work, kept the wage, or could refuse a worksite.",
    },
    {
      scheme: "DAY-NRLM",
      mis: "SHG members, loans, insurance covers",
      missing: "Whether the group could set its own purpose, or only meet a target for CIF.",
    },
    {
      scheme: "PMMVY",
      mis: "Enrolments and instalments pushed through the portal",
      missing: "Drèze and Khera (2025): effective coverage fell to about 9% of births in 2023–24. The portal still reads as delivery.",
    },
  ];

  return (
    <div className="chart-card">
      <h3>Figure 3 · What the dashboard counts, and what it cannot see</h3>
      <table>
        <thead>
          <tr>
            <th>Scheme</th>
            <th>On the MIS</th>
            <th>Not on the MIS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.scheme}>
              <td>{r.scheme}</td>
              <td>{r.mis}</td>
              <td>{r.missing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MigrantFunnel() {
  const steps = [
    { label: "On a scheme list", v: 100 },
    { label: "Knows portability exists", v: 71 },
    { label: "Tried to claim", v: 51 },
    { label: "Actually served", v: 30 },
  ];
  const w = 640;
  const h = 220;

  return (
    <div className="chart-card">
      <h3>Beneficiary journey · seasonal migrants (CLRA, n = 1,012)</h3>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Migrant welfare funnel">
        {steps.map((s, i) => {
          const y = 16 + i * 50;
          const bw = (s.v / 100) * 420;
          return (
            <g key={s.label}>
              <text x="0" y={y + 14} fontSize="12" fill={ink} fontFamily="system-ui">
                {s.label}
              </text>
              <rect x="200" y={y} width="420" height="18" fill={line} rx="3" />
              <rect x="200" y={y} width={bw} height="18" fill={i === 3 ? accent : sage} rx="3" />
              <text x={206 + bw} y={y + 13} fontSize="11" fill={ink} fontFamily="system-ui">
                {s.v}%
              </text>
            </g>
          );
        })}
      </svg>
      <p className="note">
        The drop from 71% awareness to 30% served is the brief. Registration is not the outcome. Sources on the project page.
      </p>
    </div>
  );
}
