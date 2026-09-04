import Link from "next/link";
import {
  CostBars,
  MigrantFunnel,
  NationalBars,
  PhoneGapMap,
  StateScatter,
} from "../components/Charts";
import { EvidenceTool } from "../components/EvidenceTool";
import { Artefacts, CaseLayout } from "../components/Shell";
import { nfhsNational, nfhsStates } from "../lib/nfhs";
import { item } from "../lib/work";

export function AgencyPage() {
  const w = item("womens-agency");
  return (
    <CaseLayout item={w} subtitle="Measuring women’s agency beyond scheme enrolment">
      <h2>The question</h2>
      <p>
        Do the indicators Indian welfare uses as stand-ins for women’s
        empowerment move with the indicators the National Family Health Survey
        uses as stand-ins for agency? An op-ed with Prof. Namrata Chindarkar,
        JSW School of Public Policy, IIM Ahmedabad, is in progress on the
        monitoring half of that question. This page is the empirical companion.
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
        If financial inclusion were agency, the first movement would have shown
        up in the second. It did not. Own-use mobile phones moved 8.1 points.
        House or land ownership moved 4.9. Paid cash work, on a separate
        indicator, moved 6.3. Accounts are the outlier.
      </p>

      <NationalBars />

      <h2>Conceptual frame</h2>
      <p>
        Naila Kabeer’s distinction still earns its keep: resources, agency,
        achievements. An account is a resource. Decision-making, in the NFHS
        sense, is a thin measure of agency: currently married women who usually
        participate in own health care, major household purchases, and visits
        to family or relatives. Scheme dashboards typically count the resource
        (Jan Dhan, SHG membership, women as a share of MGNREGA persondays) and
        then speak in the language of the agency.
      </p>

      <h2>Data and variables</h2>
      <p>
        IIPS and MoHFW, NFHS-5 India report and Phase-II state factsheets;
        NFHS-4 India report for the earlier round. Published totals for women
        15–49. The state analysis uses eleven Phase-II states that carry the
        three indicators on the same factsheet. It is an ecological
        cross-section.
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

      <h2>Cross-section</h2>
      <p>
        Correlation between own-use accounts and decision-making: 0.72. Between
        own-use mobiles and decision-making: 0.22. OLS of decisions on accounts:
        intercept 63.37, slope 0.326, R² 0.52. Adding mobile phones takes R² to
        0.55 and returns a mobile coefficient of −0.038. A 10-point difference
        in accounts predicts about 3 points in decision-making. The national
        time series is stricter. The same slope applied to a 25.6-point jump in
        accounts would have predicted about 8 points of decision-making. The
        country recorded 4.7.
      </p>
      <StateScatter />

      <h2>What monitoring would have to ask</h2>
      <p>
        MGNREGA’s gender number is women’s share of persondays, about 58% in FY
        2024–25: labour days billed. DAY-NRLM counts members, loans, insurance
        covers. PMMVY counts portal instalments. Jean Drèze and Reetika Khera,
        using RTI figures in The Hindu (March 2025), put effective PMMVY
        coverage at about 9% of births in 2023–24. A short add-on to concurrent
        evaluation could ask whether she decided to apply, whether she knows
        the amount, whether the money landed in an account she operates, and
        whether she could refuse.
      </p>

      <h2>Limits of the evidence</h2>
      <p>
        Eleven states. Published factsheet totals, so ecological. No controls
        for wealth or education, because adding them on n = 11 is costume.
        Decision-making is asked of currently married women; bank and mobile of
        all women 15–49. The national comparison mixes Phase-I and Phase-II in
        the published all-India figures. The slope is not a causal estimate of
        what opening an account does to a woman. It is a description of how two
        published series fail to travel together.
      </p>

      <h2>Sources</h2>
      <ol>
        <li>IIPS and MoHFW, NFHS-5 (2019–21) and NFHS-4 (2015–16) India reports; NFHS-5 Phase-II factsheets.</li>
        <li>Ministry of Rural Development, MGNREGA dashboard, women’s persondays, FY 2024–25.</li>
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

      <aside className="discuss">
        <h2>Notes for conversation</h2>
        <ul>
          <li>Why these measures of agency?</li>
          <li>Why not unit-level DHS files?</li>
          <li>What would a stronger identification strategy look like?</li>
          <li>What evidence would change the monitoring recommendation?</li>
        </ul>
      </aside>
    </CaseLayout>
  );
}

export function MigrantPage() {
  const w = item("migrant-welfare");
  return (
    <CaseLayout item={w} subtitle="Independent strategy analysis · Mumbai · 2026">
      <h2>The decision</h2>
      <p>
        A private philanthropy has ₹5 crore and twenty-four months. Government
        is a partner, not the grantee. The question is how to improve access to
        existing welfare among low-income informal workers in three high-migrant
        wards of Mumbai (Kurla L, Govandi M-East, Andheri K-East), with success
        defined as benefits received at the frontline. Ten percent of the grant
        is ring-fenced for independent monitoring. Budgets and targets below are
        my estimates.
      </p>

      <h2>Current-state journey</h2>
      <p>
        The closest published funnel is CLRA’s survey of 1,012 seasonal
        migrants (2024). Mumbai’s own baseline is a diagnostic output. I do not
        treat the CLRA numbers as Mumbai’s numbers. I treat them as the reason
        a diagnostic is worth ninety days.
      </p>
      <MigrantFunnel />
      <p>
        Two breaks do most of the work. B1 is eligibility and documents at
        destination: household ration cards stay at source; 68% of migrants in
        the cited study do not carry theirs; a naka is not an address an FPS
        will always accept; BOCW boards want employer proof; NFSA lists still
        lean on an old census. B2 is the counter even when eligibility exists:
        interstate portability is 0.8% of PDS transactions; dealer refusal and
        biometric failure are common in the CLRA sample; many dealers never use
        exception handling (Dalberg / Kantar / Omidyar ONORC study, 2022).
      </p>

      <h2>Hypotheses the first ninety days have to test</h2>
      <ol>
        <li>Mumbai’s funnel breaks at served, or at attempt. Survey n≈1,200 plus ePoS pull.</li>
        <li>Maharashtra FCS will sign an MoU on dealer incentives within six months.</li>
        <li>Assisted access can unlock a benefit for under ₹2,000. Benchmark Haqdarshak, Aajeevika Bureau, MRC.</li>
        <li>Interstate migrants are the majority of the segment. Intrastate workers already draw rations in the state.</li>
      </ol>

      <h2>Options</h2>
      <p>
        <strong>A. Assisted access at the naka.</strong> Fifteen help desks,
        WhatsApp and IVR in Hindi, Bhojpuri and Marathi, case-managed claims
        (e-Shram to BOCW, ONORC splitting, PM-SYM, PM-JAY), a grievance on every
        refusal. Reach 60,000, benefits 25,000: estimates. Budget 3.5 cr
        operations, 1.0 cr tech, 0.5 cr M&E.
      </p>
      <p>
        <strong>B. Fix the counter.</strong> Dealer incentive for portability,
        flexible stock following the Andhra Pradesh precedent, notified
        exception handling, BMC residence attestation. Depends on an FCS
        memorandum within six months.
      </p>

      <h2>Weighted criteria</h2>
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

      <h2>Recommendation</h2>
      <p>
        Stage-gate. Months 0–3, ₹30 lakh: diagnostic on H1–H4, recruit a CSO
        partner, open the FCS conversation. Default to A in the three wards. If
        the survey shows the break at served and the MoU is signed, switch to B.
        Otherwise keep ₹50 lakh to pilot B’s dealer incentive in one ward so
        the systems option does not die. North star after H3: rupees of
        benefits received per rupee spent, target at least 3x, reset after the
        unit-cost test. Comparison ward for attribution.
      </p>
      <p>
        Who: a CSO with naka presence, FCS and BMC as partners. Where: three
        named wards. When: diagnostic immediately; operations from month 3.
        How much: ₹5 crore, 10% M&E. Dependency: for B, the MoU. Metric:
        successful receipts and a rebuilt funnel, quarterly.
      </p>

      <h2>Risks</h2>
      <p>
        The diagnostic could show that Mumbai’s interstate share is low, which
        shrinks B. Dealer incentives could be captured. Help desks could become
        a parallel bureaucracy that vanishes with the grant. e-Shram’s 31 crore
        registrations coexist, in one Gurugram survey of 400, with zero
        recorded benefits. Lists fail quietly.
      </p>

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
          { href: "/work/programme-costing", label: "Workbook narrative" },
          { href: "/work/evaluation-design", label: "Evaluation design" },
        ]}
      />
      <aside className="discuss">
        <h2>Notes for conversation</h2>
        <ul>
          <li>Why not digital-only?</li>
          <li>How did you allocate ₹5 crore?</li>
          <li>What would make the recommendation fail?</li>
          <li>Why three wards, not the whole city?</li>
        </ul>
      </aside>
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
        Financial inclusion and employment are different stories, even when
        policy speeches braid them. The agency note on this site asks about
        household decisions. This note asks about paid cash work. Both sit far
        behind accounts. I do not stack a causal model on two national points.
        The finding is descriptive and, for that reason, hard to wave away.
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
        Sensitivity: if conversion from reach to receipt falls by 30% in the
        base case, successful benefits drop from 25,000 to 17,500 and unit cost
        rises from ₹2,000 to about ₹2,860. If unit cost itself rises 30%, the
        25,000 target is not credible at ₹5 crore. Those two switches are the
        ones a donor should watch in months 0–3.
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
        Digitally mediated welfare (OTP, e-KYC, portability, many DBT
        corrections) assumes a woman can be reached on a phone she herself
        uses. NFHS-5 asks that question directly. It also asks whether she has
        a bank account she herself uses. Where the second exists and the first
        does not, the welfare system has an account it cannot easily speak to.
      </p>
      <PhoneGapMap />
      <p>
        Spatial unit: state. Sample: eleven NFHS-5 Phase-II states with
        published totals. Method: simple subtraction, mapped as a ranked
        cartogram. Madhya Pradesh and Chhattisgarh are the severe cases in this
        set. Tamil Nadu and Arunachal Pradesh are not. The policy implication
        is local: a digital-first grievance channel in Bhopal is a different
        object from the same channel in Chennai.
      </p>
      <p>
        This is basic QGIS work in spirit: a join of an attribute table to a
        geography. The geography here is represented as a ranked map because a
        national shapefile would overclaim completeness. The CSV in the
        artefacts folder is what one would join.
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
        I built this because literature tables rot in documents. The matrix
        keeps a research question tied to a source, a method, a finding, a
        confidence label and an implication. Add a row. Download CSV. The
        seed data is from work already on this site. Cursor and Claude helped
        write the interface. They did not choose the sources.
      </p>
      <EvidenceTool />
    </CaseLayout>
  );
}
