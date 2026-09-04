import { AttritionFunnel } from "../components/Charts";
import { Artefacts, CaseLayout, NeedInfo } from "../components/Shell";
import { item } from "../lib/work";

export function MgnregaPage() {
  const w = item("mgnrega-sessions");
  return (
    <CaseLayout item={w}>
      <p>
        Beside the pension fieldwork, I facilitated MGNREGA and
        welfare-entitlement sessions for self-help group women, and helped
        organise eye-care camps for 250 or more residents with the local MP’s
        office and Axis Bank. This is beneficiary-facing work. It is not a
        large research project.
      </p>
      <p>
        The sessions sat at the information stage of a claim: what work a
        household can demand, what a job card is for, which other entitlements
        sit beside MGNREGA in the same life. Observed barriers in rooms of that
        kind are usually a mix of rumour, timing, and the distance to the
        worksite or the office. I do not promote those usual patterns into
        findings from these particular sessions.
      </p>
      <NeedInfo
        items={[
          "Session counts and locations Sanchay can share.",
          "Any feedback the organisation recorded from SHG women.",
        ]}
      />
    </CaseLayout>
  );
}

export function LeapPage() {
  const w = item("leap");
  return (
    <CaseLayout item={w}>
      <p>
        The résumé line is precise: I supported the team documenting TRI’s LEAP
        programme design. A public case worth reading would need the programme’s
        own bones: problem, target population, intervention, delivery model,
        theory of change, implementation, monitoring. I do not reconstruct LEAP
        from outside those documents.
      </p>
      <div className="impl-map">
        <div className="step"><b>Problem</b><span>Additional information required from TRI.</span></div>
        <div className="step"><b>Population</b><span>Additional information required.</span></div>
        <div className="step"><b>Intervention</b><span>Additional information required.</span></div>
        <div className="step"><b>Delivery</b><span>Additional information required.</span></div>
        <div className="step"><b>ToC</b><span>Additional information required.</span></div>
        <div className="step"><b>M&E</b><span>Additional information required.</span></div>
      </div>
      <NeedInfo
        items={[
          "LEAP concept note or ToC TRI is willing to excerpt.",
          "My specific drafting or research contribution.",
          "Whether the programme name can be expanded on a public site.",
        ]}
      />
    </CaseLayout>
  );
}

export function AiesecPage() {
  const w = item("aiesec");
  return (
    <CaseLayout item={w}>
      <p>
        From July 2022 to November 2023 I managed partnerships for AIESEC in
        Delhi IIT: 10 corporates, 5 NGOs, 3 academic institutions. The applicant
        pipeline grew 30 percent. I do not invent conversion rates or rupee
        figures on top of that.
      </p>
      <p>
        The work was segmentation and care. A company, an NGO and a campus
        office want different things from a student organisation. Pipeline
        growth of that size, in that period, usually comes from a wider top of
        funnel (more campuses, more visible roles) plus relationships that do
        not have to be re-sold every month. I cannot, from the résumé line
        alone, attribute the 30 percent to a single tactic.
      </p>
    </CaseLayout>
  );
}

export function AttritionPage() {
  const w = item("attrition");
  return (
    <CaseLayout item={w}>
      <p>
        From January to April 2025 I was an HR intern at VIP Industries. I
        analysed attrition drivers across Tier 2 and Tier 3 labour markets and
        supported frontline recruitment. Company figures stay inside the
        company. What follows is a methodological demonstration on synthetic
        data, so that a reader can see how I would structure the problem.
      </p>
      <p className="note">Synthetic data used for analytical demonstration.</p>
      <AttritionFunnel />
      <p>
        A useful driver framework in these markets, without claiming VIP’s
        mix, usually includes wage competitiveness against local alternatives,
        shift design, distance to plant, supervisor behaviour, and the first
        ninety days of induction. Segmentation would split new joiners from
        the rest, and women from men, because the local opportunity set is not
        the same. Cost of attrition is replacement plus lost ramp-up; a
        sensitivity table would move those two inputs. Interventions that
        typically survive that arithmetic are about the first three months,
        not about a poster on values.
      </p>
      <p>
        Business implication, stated as a hypothesis for a plant manager: if
        early exit is two-thirds of annual loss, spend the scarce HR hour on
        day-30 conversations and shift matching, and measure 90-day retention
        before arguing about brand. That is how I would start. It is not a
        report on VIP.
      </p>
    </CaseLayout>
  );
}

export function WorkflowPage() {
  const w = item("welfare-data-workflow");
  return (
    <CaseLayout item={w}>
      <p>
        Python and SQL are beginner skills on my résumé. This page treats them
        that way. The task is modest: take published NFHS-5 Phase-II totals,
        check them, compute a phone gap, and write a clean extract. The scripts
        in the artefacts folder do that. They do not scrape, they do not
        pretend to be a pipeline at a fund.
      </p>
      <p>
        Raw input: <code>nfhs_phase2.csv</code>. Cleaning: types, range checks
        (percentages between 0 and 100), a uniqueness check on state codes.
        SQL: order states by <code>bank - mobile</code>. Python: the same join
        in pandas, a CSV out. Chart: the ranked map on the mobile-geography
        page. Implication: a digital welfare channel should be costed against
        the phone number, not the account number.
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
        Does assisted welfare access at labour nakas increase successful
        benefit receipt among informal interstate migrants in three Mumbai
        wards?
      </p>
      <p>
        I do not choose a randomised trial by default. Randomising help desks
        across nakas is possible in principle and politically expensive in
        practice. The strategy paper already wants a comparison ward and
        quarterly funnel re-surveys. That points to a difference-in-differences
        with a matched comparison ward, plus a process evaluation, not to an
        RCT as the first instrument.
      </p>
      <p>
        Treatment: naka help desks and case management, as in Option A.
        Outcome: successful receipt (rations, BOCW, insurance, pension)
        among a defined segment, not registrations. Process indicators:
        time-to-case-close, refusal grievances filed, dealer exception-handling
        use if ePoS can be pulled. Identification: parallel trends is an
        assumption, and a short pre-period from ePoS is the check. Threats:
        spillover if migrants move between wards; contamination if FCS
        reforms hit both; selection if desks attract the already-informed.
        Measurement: household survey plus administrative traces. If the
        diagnostic in months 0–3 shows the break is at the counter, this
        design is the wrong one, and the evaluation should follow Option B
        instead.
      </p>
    </CaseLayout>
  );
}

export function ClaimingPage() {
  const w = item("claiming-benefits");
  return (
    <CaseLayout item={w}>
      <p>
        Psychology and public policy share a stubborn fact: eligibility is not
        a claim. I use a simple sequence, after the administrative-burden
        literature (Herd and Moynihan) and the Indian welfare fieldwork
        already on this site.
      </p>
      <div className="impl-map">
        <div className="step"><b>Awareness</b><span>Does the person know the programme exists? Information costs, rumour, literacy, language.</span></div>
        <div className="step"><b>Eligibility</b><span>Does she believe it includes her? Uncertainty and stigma sit here.</span></div>
        <div className="step"><b>Intention</b><span>Is it worth a day? Opportunity cost, trust that the state will pay.</span></div>
        <div className="step"><b>Application</b><span>Documents, intermediaries, digital gates, an official who will explain the next step.</span></div>
        <div className="step"><b>Completion</b><span>Biometrics, corrections, a file that does not stall.</span></div>
        <div className="step"><b>Receipt</b><span>Money or grain in hand. The only stage most dashboards should care about, and often do not.</span></div>
      </div>
      <p>
        Established evidence, on this site and in the sources it cites: CLRA’s
        funnel; ONORC dealer behaviour; NFHS gaps between accounts and
        decision-making; Drèze and Khera on PMMVY coverage. Hypotheses, not
        yet evidence: that shame at a police station or a BDO office has a
        larger effect on completion than missing information does; that
        intermediaries raise completion and skim; that women with accounts
        but without phones drop out at the OTP step. Those last three would
        need original fieldwork. I will not present them as results.
      </p>
    </CaseLayout>
  );
}

export function ColloquyPage() {
  const w = item("rural-colloquy");
  return (
    <CaseLayout item={w}>
      <p>
        Emcee, Day 2, India Rural Colloquy 2025, Delhi chapter. Recorded
        conversations for TRI’s Rural Renaissance series. The speaking page
        holds the longer note. This archive entry exists so that communication
        work is visible beside research work, without inflating it.
      </p>
    </CaseLayout>
  );
}
