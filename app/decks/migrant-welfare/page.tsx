import { PageShell } from "../../components/Shell";

export const metadata = {
  title: "Migrant welfare strategy deck",
};

const slides = [
  "Mumbai’s migrants are on lists. They are not at the counter. ₹5 crore should buy benefits received.",
  "Scope: three wards, informal workers under ₹15,000 a month, government as partner, 10% independent M&E.",
  "Published funnel (CLRA, n=1,012): awareness 71%, attempt 51%, served 30%. Mumbai baseline is a diagnostic, not this chart.",
  "B1 is paperwork at destination. Ration cards stay at source. Awareness campaigns do not open that gate.",
  "B2 is the FPS counter. Interstate portability is 0.8% of PDS. Dealer refusal and biometric failure are common in the cited studies.",
  "Four hypotheses in ninety days: where the funnel breaks; FCS MoU; unit cost under ₹2,000; interstate share.",
  "Option A: naka help desks and case management. Starts in month 3. Stops when the grant stops.",
  "Option B: dealer incentives and exception handling with FCS. Cheaper if the MoU exists. Hostage to the MoU.",
  "Weighted prior favours A (3.75 vs 2.95). The month-3 gate can reverse that if H1 and H2 both point to the counter.",
  "Recommendation: stage-gate. Default A. Buy the option on B with ₹50 lakh in one ward if the MoU is late.",
  "Operating model: CSO at the naka; FCS and BMC as partners; comparison ward; quarterly funnel; ePoS as tracer.",
  "Risks: low interstate share; captured incentives; desks as parallel bureaucracy. Lists fail quietly. e-Shram is not a benefit.",
];

export default function Deck() {
  return (
    <PageShell>
      <div className="wrap deck">
        <p className="kicker">Independent analysis · 12 slides</p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "42px", fontWeight: 400, margin: "8px 0 28px" }}>
          On the lists, not at the counter
        </h1>
        {slides.map((title, i) => (
          <section className="slide" key={i}>
            <p className="kicker">Slide {i + 1}</p>
            <h2>{title}</h2>
            <p>
              Numbers, sources, the weighted matrix and the cost model live on the{" "}
              <a href="/work/migrant-welfare">full strategy page</a>. Print this
              view as a leave-behind. Independent analysis. Author estimates.
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
