import { AttritionFunnel } from "../components/Charts";
import { Artefacts, CaseLayout } from "../components/Shell";
import { item } from "../lib/work";

export function MgnregaPage() {
  const w = item("mgnrega-sessions");
  return (
    <CaseLayout item={w}>
      <p>
        Beside the pension fieldwork, I facilitated MGNREGA and welfare-entitlement
        sessions for self-help group women, and helped organise eye-care camps for
        250 or more residents with the local MP’s office and Axis Bank. The sessions
        sat at the information stage of a claim. Usual barriers in rooms of that
        kind are not promoted here into findings from these particular sessions.
      </p>
    </CaseLayout>
  );
}

export function LeapPage() {
  const w = item("leap");
  return (
    <CaseLayout item={w}>
      <p>
        I supported TRI’s documentation of the LEAP programme design. Programme
        internals stay with the organisation.
      </p>
    </CaseLayout>
  );
}

export function AiesecPage() {
  const w = item("aiesec");
  return (
    <CaseLayout item={w}>
      <div className="stat-row">
        <p>
          <strong>10 · 5 · 3</strong>
          <span>Corporate, NGO and academic partnerships, AIESEC in Delhi IIT, July 2022 to November 2023.</span>
        </p>
        <p>
          <strong>30%</strong>
          <span>Growth in the applicant pipeline. Conversion rates and rupee figures were not recorded for a public case.</span>
        </p>
      </div>
      <div className="impl-map">
        <div className="step">
          <b>Companies</b>
          <span>Roles a campus could actually fill, and a contact who did not have to be found again each term.</span>
        </div>
        <div className="step">
          <b>NGOs</b>
          <span>Work students could do without becoming unpaid staff.</span>
        </div>
        <div className="step">
          <b>Campuses</b>
          <span>A wider top of funnel: more visible roles, more places a student could hear about them.</span>
        </div>
      </div>
    </CaseLayout>
  );
}

export function AttritionPage() {
  const w = item("attrition");
  return (
    <CaseLayout item={w}>
      <p>
        HR intern, VIP Industries, January–April 2025. Attrition in Tier 2 and
        Tier 3 labour markets, plus frontline recruitment. Company figures stay
        inside the company. What follows is a method on synthetic data.
      </p>
      <p className="note">Synthetic data used for analytical demonstration.</p>
      <AttritionFunnel />
      <p>
        Structure: wage competitiveness, shift design, distance, supervisor
        behaviour, first ninety days. Segment new joiners from the rest, and
        women from men. If early exit is two-thirds of annual loss, spend the
        scarce hour on day-30 conversations and 90-day retention before arguing
        about brand. That is how I would start. It is not a report on VIP.
      </p>
    </CaseLayout>
  );
}

export function WorkflowPage() {
  const w = item("welfare-data-workflow");
  return (
    <CaseLayout item={w}>
      <p>
        Take NFHS-5 Phase-II totals, check them, compute a phone gap, write a
        clean extract. Python and SQL in the artefacts folder do that at the
        scale of a published table.
      </p>
      <Artefacts
        items={[
          { href: "/artefacts/workflow/clean.py", label: "clean.py" },
          { href: "/artefacts/workflow/query.sql", label: "query.sql" },
          { href: "/artefacts/agency/nfhs_phase2.csv", label: "Input CSV" },
        ]}
      />
    </CaseLayout>
  );
}

export function EvalPage() {
  const w = item("evaluation-design");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        Does assisted welfare access at labour nakas increase successful benefit
        receipt among informal interstate migrants in three Mumbai wards?
      </p>
      <p>
        Difference-in-differences with a matched comparison ward, plus a process
        evaluation. An RCT is a later instrument if a partner can actually
        randomise. Outcome is successful receipt, not registrations. If the
        diagnostic shows the break is at the counter, this design follows Option
        B instead.
      </p>
    </CaseLayout>
  );
}

export function ClaimingPage() {
  const w = item("claiming-benefits");
  return (
    <CaseLayout item={w}>
      <p>
        Eligibility is not a claim. Sequence after the administrative-burden
        literature (Herd and Moynihan) and the Indian welfare fieldwork on this site.
      </p>
      <div className="impl-map">
        <div className="step"><b>Awareness</b><span>Does the person know the programme exists?</span></div>
        <div className="step"><b>Eligibility</b><span>Does she believe it includes her?</span></div>
        <div className="step"><b>Intention</b><span>Is it worth a day?</span></div>
        <div className="step"><b>Application</b><span>Documents, intermediaries, digital gates.</span></div>
        <div className="step"><b>Completion</b><span>Biometrics, corrections, a file that does not stall.</span></div>
        <div className="step"><b>Receipt</b><span>Money or grain in hand. The stage most dashboards should care about.</span></div>
      </div>
    </CaseLayout>
  );
}

export function ColloquyPage() {
  const w = item("rural-colloquy");
  return (
    <CaseLayout item={w}>
      <p>
        Emcee, Day 2, India Rural Colloquy 2025, Delhi chapter. Recorded
        conversations for TRI’s Rural Renaissance series.
      </p>
    </CaseLayout>
  );
}
