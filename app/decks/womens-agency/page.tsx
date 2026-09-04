import { PageShell } from "../../components/Shell";

export const metadata = { title: "Women’s agency research slides" };

const slides = [
  "Own-use bank accounts rose 25.6 points between NFHS-4 and NFHS-5. Three household decisions rose 4.7.",
  "The indicator of agency used here is currently married women who usually participate in three household decisions.",
  "An account is a resource. Decision-making is a thin agency measure. Dashboards often count the first and speak the second.",
  "Eleven Phase-II states: correlation of accounts with decisions is 0.72. The slope is 0.33, not 1.",
  "Mobile phones add almost nothing once accounts are in the model (R² 0.52 to 0.55).",
  "National time series is stricter than the cross-section. The slope over-predicts the decision-making gain.",
  "MGNREGA persondays, NRLM membership and PMMVY portal counts are throughput. Drèze and Khera put PMMVY effective coverage near 9% of births in 2023–24.",
  "Ask four questions in concurrent evaluation: who decided to apply, who knows the amount, who operates the account, who could refuse.",
  "Limits: n=11, ecological, mixed denominators. The finding is descriptive. Monitoring can still stop using Jan Dhan as a synonym for empowerment.",
];

export default function Deck() {
  return (
    <PageShell>
      <div className="wrap deck">
        <p className="kicker">Independent research · 9 slides</p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "42px", fontWeight: 400, margin: "8px 0 28px" }}>
          Who counts as empowered?
        </h1>
        {slides.map((title, i) => (
          <section className="slide" key={i}>
            <p className="kicker">Slide {i + 1}</p>
            <h2>{title}</h2>
            <p>
              Tables and code: <a href="/work/womens-agency">research page</a>.
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
