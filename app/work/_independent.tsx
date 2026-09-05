import Link from "next/link";
import {
  BudgetSplit,
  CostBars,
  Diagnostic90,
  MigrantFunnel,
  NationalBars,
  OptionPair,
  PhoneGapMap,
  Roadmap24,
  StateScatter,
  WelfareJourney,
} from "../components/Charts";
import { CoverageGrid } from "../components/Infographics";
import { EvidenceTool } from "../components/EvidenceTool";
import { Artefacts, CaseLayout } from "../components/Shell";
import { nfhsNational, nfhsStates } from "../lib/nfhs";
import { item } from "../lib/work";

export function AgencyPage() {
  const w = item("womens-agency");
  return (
    <CaseLayout item={w}>
      <p>
        Financial inclusion rose sharply between NFHS-4 and NFHS-5. The change
        in the household decision-making measure was considerably smaller.
      </p>

      <div className="stat-row">
        <p>
          <strong>+25.6 pp</strong>
          <span>
            Women 15–49 with a bank or savings account they themselves use.
            NFHS-4 {nfhsNational.bank.nfhs4.toFixed(1)}% to NFHS-5{" "}
            {nfhsNational.bank.nfhs5.toFixed(1)}%.
          </span>
        </p>
        <p>
          <strong>+4.7 pp</strong>
          <span>
            Currently married women who usually participate in three household
            decisions. {nfhsNational.decisions.nfhs4.toFixed(1)}% to{" "}
            {nfhsNational.decisions.nfhs5.toFixed(1)}%.
          </span>
        </p>
      </div>
      <p>
        The two measures moved very differently. That divergence makes it
        difficult to treat financial inclusion as a sufficient proxy for agency.
        Own-use mobile phones moved 8.1 points. House or land ownership moved
        4.9. Paid cash work moved 6.3. Accounts are the outlier.
      </p>

      <NationalBars />

      <h2>The programme question</h2>
      <p>
        Can Indian welfare use financial inclusion as a stand-in for women’s
        agency? An account is a resource. Decision-making, in the NFHS sense, is
        a thin measure of agency. An op-ed with Prof. Namrata Chindarkar, JSW
        School of Public Policy, IIM Ahmedabad, is in progress on the monitoring
        half of that question.
      </p>

      <h2>How I investigated it</h2>
      <p>
        Published NFHS-4 and NFHS-5 totals for women 15–49. State cut: eleven
        Phase-II states that carry the three indicators on the same factsheet.
        Ecological cross-section, not a causal model.
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>State</th>
            <th>Decisions %</th>
            <th>Bank %</th>
            <th>Mobile %</th>
          </tr>
        </thead>
        <tbody>
          {nfhsStates.map((s) => (
            <tr key={s.code}>
              <td>{s.name}</td>
              <td>{s.dec.toFixed(1)}</td>
              <td>{s.bank.toFixed(1)}</td>
              <td>{s.mobile.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Interpretation</h2>
      <p>
        Accounts and decision-making correlate at 0.72; mobiles and
        decision-making at 0.22. A 10-point difference in accounts predicts
        about 3 points in decisions. Applied to the national 25.6-point jump,
        that slope would have predicted about 8 points. The country recorded
        4.7. The slope is a description of how two published series fail to
        travel together, not a causal estimate of what opening an account does.
      </p>
      <StateScatter />

      <h2>For monitoring</h2>
      <p>
        Scheme dashboards count labour days, members, loans, portal instalments.
        Drèze and Khera put effective PMMVY coverage at about 9% of births in
        2023–24. A short add-on could ask whether she decided to apply, knows
        the amount, operates the account, and could refuse.
      </p>
      <CoverageGrid linked={false} />
      <p className="note">
        n = 11 Phase-II states. Ecological. Decision-making is asked of currently
        married women; bank and mobile of all women 15–49. No wealth or education
        controls.
      </p>

      <h2>Sources</h2>
      <ol>
        <li>IIPS and MoHFW, NFHS-5 (2019–21) and NFHS-4 (2015–16) India reports; NFHS-5 Phase-II factsheets.</li>
        <li>Jean Drèze and Reetika Khera, “A leap backward for maternity entitlements,” The Hindu, 11 March 2025.</li>
        <li>Naila Kabeer, “Resources, Agency, Achievements,” Development and Change, 1999.</li>
      </ol>

      <Artefacts
        items={[
          { href: "/artefacts/agency/agency.do", label: "Stata do-file" },
          { href: "/artefacts/agency/nfhs_phase2.csv", label: "CSV" },
          { href: "/artefacts/agency/dictionary.csv", label: "Dictionary" },
          { href: "/decks/womens-agency", label: "Research slides" },
        ]}
      />
    </CaseLayout>
  );
}

export function MigrantPage() {
  const w = item("migrant-welfare");
  return (
    <CaseLayout item={w}>
      <h2>The decision</h2>
      <p>
        A philanthropy has ₹5 crore and 24 months. Government is a partner, not
        the grantee. How to improve access to existing welfare among low-income
        informal workers in Kurla L, Govandi M-East and Andheri K-East, with
        success defined as benefits received. Ten percent for independent M&E.
        Figures below are my estimates.
      </p>

      <h2>Current-state journey</h2>
      <p>
        Eligibility in principle is not receipt. Friction concentrates at
        documents and at the counter. Awareness campaigns do not open those gates.
      </p>
      <WelfareJourney />
      <p className="kind">Cited evidence · not a Mumbai baseline</p>
      <MigrantFunnel />
      <p>
        CLRA’s 2024 survey of 1,012 seasonal migrants is the closest published
        funnel, not Mumbai’s baseline. Two breaks do most of the work: documents
        at destination (68% in that study do not carry a ration card), and the
        counter even when eligibility exists (interstate PDS portability 0.8%;
        dealer refusal and unused exception handling in the 2022 Dalberg / Kantar
        / Omidyar ONORC study).
      </p>

      <h2>Two strategic hypotheses</h2>
      <OptionPair />

      <h2>Criteria</h2>
      <table className="data">
        <thead>
          <tr>
            <th>Criterion</th>
            <th>Weight</th>
            <th>A</th>
            <th>B</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Impact inside 24 months</td><td>0.20</td><td>5</td><td>2</td></tr>
          <tr><td>Reach / equity for interstate women</td><td>0.10</td><td>4</td><td>3</td></tr>
          <tr><td>Cost per successful receipt</td><td>0.15</td><td>2</td><td>4</td></tr>
          <tr><td>Feasibility, government dependence</td><td>0.15</td><td>5</td><td>1</td></tr>
          <tr><td>Scalability and systems change</td><td>0.15</td><td>1</td><td>5</td></tr>
          <tr><td>Technology requirement (lower is better)</td><td>0.05</td><td>3</td><td>4</td></tr>
          <tr><td>Adoption at the frontline</td><td>0.10</td><td>4</td><td>2</td></tr>
          <tr><td>Measurability</td><td>0.10</td><td>5</td><td>4</td></tr>
        </tbody>
      </table>
      <p className="note">
        Scores 1–5, author judgement before the diagnostic. Weighted totals: A
        3.75, B 2.95. The matrix is a prior. The gate at month 3 can reverse it
        if H1 and H2 both favour B.
      </p>

      <div className="reco">
        <p className="kind">Recommendation</p>
        <h2>Start with assisted access</h2>
        <p>
          Use the first 90 days to determine whether the binding constraint
          warrants a shift toward systems reform. Default to assisted access
          (Option A) in the three wards. If the survey shows the break at served
          and the MoU is signed, switch to fixing the counter (Option B).
          Otherwise keep ₹50 lakh to pilot B’s dealer incentive in one ward so
          the systems option does not die.
        </p>
        <p>
          Who: a CSO with naka presence, FCS and BMC as partners. Where: Kurla
          L, Govandi M-East, Andheri K-East. When: diagnostic immediately;
          operations from month 3. How much: ₹5 crore, 10% independent M&E.
          Dependency: for B, the MoU. Metric: successful receipts and a rebuilt
          funnel, quarterly.
        </p>
      </div>

      <h2>The 90-day diagnostic</h2>
      <Diagnostic90 />

      <h2>Twenty-four months</h2>
      <Roadmap24 />

      <h2>What ₹5 crore buys under Option A</h2>
      <BudgetSplit />

      <h2>What would be measured</h2>
      <ul className="kpi">
        <li>
          <b>North star</b>
          Rupees of benefits received per rupee of grant. Target ≥ 3 after the unit-cost test.
        </li>
        <li>
          <b>Outcome</b>
          Successful receipts at the frontline: rations, BOCW, insurance or pension.
        </li>
        <li>
          <b>Check</b>
          Comparison ward and a quarterly funnel re-survey. Help desks that vanish with the grant, or a low interstate share in the diagnostic, would reverse this.
        </li>
      </ul>

      <h2>Sources</h2>
      <ol>
        <li>Dalberg, Kantar, Omidyar Network India, ONORC frontline study (2022).</li>
        <li>IMPDS via IndiaSpend (2023), interstate portability 0.8% of PDS.</li>
        <li>CLRA, One Nation Unequal Access (Dec 2024).</li>
        <li>MPRA 114603 on document carry-rates.</li>
        <li>PRS on NFSA list vintage (2024).</li>
      </ol>
      <Artefacts
        items={[
          { href: "/decks/migrant-welfare", label: "12-slide strategy deck" },
          { href: "/artefacts/migrants/cost-model.csv", label: "Cost model CSV" },
          { href: "/artefacts/migrants/decision-matrix.csv", label: "Decision matrix CSV" },
          { href: "/work/programme-costing", label: "Workbook narrative" },
          { href: "/work/evaluation-design", label: "Evaluation design" },
        ]}
      />
    </CaseLayout>
  );
}

export function PaidWorkPage() {
  const w = item("paid-work");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        Own-use bank accounts among Indian women rose 25.6 points between NFHS-4
        and NFHS-5. Did paid work move with them?
      </p>
      <div className="stat-row">
        <p>
          <strong>+6.3 pp</strong>
          <span>
            Women who worked in the last 12 months and were paid in cash:{" "}
            {nfhsNational.paidCash.nfhs4.toFixed(1)}% to{" "}
            {nfhsNational.paidCash.nfhs5.toFixed(1)}%.
          </span>
        </p>
        <p>
          <strong>+25.6 pp</strong>
          <span>Own-use bank or savings account, same rounds, women 15–49.</span>
        </p>
      </div>
      <p>
        Accounts and paid work are different stories. Both sit far behind
        financial inclusion. Descriptive, two national points, no causal model.
      </p>
      <NationalBars />
      <p>
        Source: IIPS / MoHFW NFHS-4 and NFHS-5 India reports, indicators as
        published. Stata do-file in the agency artefacts folder reads the
        companion CSV; paid-work national totals are in the dictionary.
      </p>
    </CaseLayout>
  );
}

export function CostingPage() {
  const w = item("programme-costing");
  return (
    <CaseLayout item={w}>
      <p>
        The underlying programme is assisted welfare access for informal
        migrants in three Mumbai wards: the strategy described in{" "}
        <Link href="/work/migrant-welfare">On the lists, not at the counter</Link>.
        This page is the workbook.
      </p>
      <CostBars />
      <table className="data">
        <thead>
          <tr>
            <th>Sheet</th>
            <th>What it holds</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Inputs</td><td>Grant ₹5 cr, 24 months, 3 wards, 10% M&E.</td></tr>
          <tr><td>Assumptions</td><td>Unit cost, conversion from reach to receipt, staff load.</td></tr>
          <tr><td>Population</td><td>Informal workers under ₹15,000/month, majority interstate: planning totals, author estimates.</td></tr>
          <tr><td>Coverage</td><td>Eligible → reachable → enrolled → successful receipt.</td></tr>
          <tr><td>Cost</td><td>Fixed (tech, M&E, partnership) and variable (desk, casework).</td></tr>
          <tr><td>Scenarios</td><td>Conservative, base, upside.</td></tr>
          <tr><td>Sensitivity</td><td>Unit cost and conversion each moved ±30%.</td></tr>
        </tbody>
      </table>
      <p>
        If conversion from reach to receipt falls 30% in the base case,
        successful benefits drop from 25,000 to 17,500 and unit cost rises from
        ₹2,000 to about ₹2,860. If unit cost itself rises 30%, the 25,000 target
        is not credible at ₹5 crore. Those are the two switches to watch in
        months 0–3.
      </p>
      <p className="note">Independent analysis. Author estimates. CSV is auditable line by line.</p>
      <Artefacts items={[{ href: "/artefacts/migrants/cost-model.csv", label: "Download CSV workbook" }]} />
    </CaseLayout>
  );
}

export function MobileGeoPage() {
  const w = item("mobile-geography");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        OTP, e-KYC and portability assume a woman can be reached on a phone she
        herself uses. Where she has an account she uses and a phone she does not,
        the system has a number it cannot speak to.
      </p>
      <PhoneGapMap />
      <p>
        Eleven NFHS-5 Phase-II states. Ranked gap, not a national shapefile.
        Madhya Pradesh and Chhattisgarh are the severe cases in this set. A
        digital-first channel in Bhopal is a different object from the same
        channel in Chennai.
      </p>
      <Artefacts
        items={[
          { href: "/artefacts/agency/nfhs_phase2.csv", label: "State CSV" },
          { href: "/artefacts/workflow/clean.py", label: "Python that builds the gap" },
        ]}
      />
    </CaseLayout>
  );
}

export function EvidencePage() {
  const w = item("evidence-matrix");
  return (
    <CaseLayout item={w}>
      <p>
        A literature table that stays tied to a question, source, method,
        finding, confidence and implication. Seed data is from work already on
        this site. Add a row. Download CSV.
      </p>
      <EvidenceTool />
    </CaseLayout>
  );
}
