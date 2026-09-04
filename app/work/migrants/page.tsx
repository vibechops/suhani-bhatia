import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/Chrome";
import { MigrantFunnel } from "../../components/Charts";

export const metadata: Metadata = {
  title: "On the lists, not at the counter",
  description:
    "Donor brief: welfare access for informal migrants in Mumbai. Benefits received, not registrations.",
};

export default function MigrantsPage() {
  return (
    <>
      <Header />
      <main>
        <article className="wrap article">
          <a className="back" href="/#projects">
            ← Projects
          </a>
          <p className="kicker">
            Donor brief · Mumbai · INR 5 crore · 24 months · September 2026
          </p>
          <h1>On the lists, not at the counter</h1>
          <p className="meta">
            Written as a one-slide strategy note for a Dalberg Analyst
            application. Informal workers in three high-migrant wards. Success
            is benefits received at the frontline, not enrolments. Budgets and
            targets below are my estimates, labelled as such.
          </p>

          <h2>The brief</h2>
          <p>
            A private philanthropy has INR 5 crore and two years. Government
            is a partner, not the grantee. The target is informal workers
            earning under INR 15,000 a month in Kurla (L), Govandi (M-East)
            and Andheri (K-East). Most of them are interstate. Ten percent of
            the grant is ring-fenced for independent monitoring.
          </p>
          <p>
            Mumbai’s migrants are already on e-Shram and, often, on an NFSA
            list at source. They are not at the ration shop. The money should
            buy the last mile, not another registration drive.
          </p>

          <h2>Where the funnel breaks</h2>
          <p>
            Closest published journey: Centre for Labour Research and Action,
            1,012 seasonal migrants (2024). I treat Mumbai’s own baseline as
            something the first 90 days have to measure, not something I
            invent.
          </p>

          <MigrantFunnel />

          <p>
            <strong>B1. Eligibility and documents at destination.</strong>{" "}
            Ration cards are household-based and stay at source. Sixty-eight
            percent of migrants do not carry theirs. A naka or a worksite is
            not an address the FPS will accept. BOCW boards want employer
            proof contractors rarely give. NFSA lists still lean on Census
            2011. Awareness campaigns do not open a paperwork gate.
          </p>
          <p>
            <strong>B2. The counter, even when she is eligible.</strong>{" "}
            Interstate portability is 0.8% of PDS transactions. Maharashtra
            logged about 1.7 lakh portability transactions in all of FY
            2022–23; Delhi logged 1.6 lakh in a month. Fifty-three percent of
            migrants report dealer refusal; 30% report biometric failure.
            Fifty-two percent of dealers never use exception handling.
          </p>
          <p>
            Why these two of many: they sit at different touchpoints
            (enrolment versus transaction), they explain most of the drop from
            71% awareness to 30% served, and both can be measured inside 24
            months.
          </p>

          <h2>Two options, one gate</h2>
          <p>
            Choose one at month 3. Do not run both at full budget. They answer
            different breaks.
          </p>
          <p>
            <strong>Option A. Assisted access at the naka.</strong> Demand
            side. A civil-society partner, with a WhatsApp and IVR assistant
            in Hindi, Bhojpuri and Marathi. Fifteen help desks at labour nakas
            and worksites. Case-managed claims: e-Shram to BOCW, ONORC
            ration-splitting, PM-SYM, PM-JAY. A grievance filed on every
            refusal.
          </p>
          <ul>
            <li>Reach: 60,000 workers. Benefits unlocked: 25,000. Estimate.</li>
            <li>
              Budget: 3.5 crore operations, 1.0 crore tech, 0.5 crore M&E.
              Estimate.
            </li>
            <li>
              Unit cost to test: about INR 2,000 per benefit unlocked.
            </li>
          </ul>
          <p>
            <strong>Option B. Fix the counter.</strong> Supply side, with
            Maharashtra Food, Civil Supplies and BMC. A per-transaction dealer
            incentive for portability. Flexible stock requisition, following
            the Andhra Pradesh model. Notified exception handling for
            biometric failure. BMC residence attestation through a naka
            registry.
          </p>
          <ul>
            <li>
              Portability transactions per FPS: 5 a month to 40. Dealer
              refusal under 15%. 20,000 attestations. Estimate.
            </li>
            <li>
              Budget: 2.0 crore incentives and systems, 2.0 crore partnership
              and training, 1.0 crore M&E. Estimate.
            </li>
            <li>Dependency: an FCS memorandum of understanding within six months.</li>
          </ul>

          <table>
            <thead>
              <tr>
                <th>Against the donor’s criteria</th>
                <th>A</th>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Impact inside 24 months</td>
                <td>Strong. A can start in month 3.</td>
                <td>Weaker. The clock starts at the MoU.</td>
              </tr>
              <tr>
                <td>Cost per person served</td>
                <td>Higher unless caseloads are dense.</td>
                <td>Lower only if FCS co-funds incentives.</td>
              </tr>
              <tr>
                <td>Feasibility</td>
                <td>Needs no government sign-off.</td>
                <td>Hostage to FCS.</td>
              </tr>
              <tr>
                <td>Systems change</td>
                <td>Stops when the grant stops.</td>
                <td>Changes the rule at the shop.</td>
              </tr>
              <tr>
                <td>Attribution</td>
                <td>Case files, if they are kept.</td>
                <td>ePoS data against a comparison ward.</td>
              </tr>
            </tbody>
          </table>

          <h2>What would need to be true</h2>
          <p>
            Ninety days, INR 30 lakh. Four tests, then a gate. Recruit the CSO
            partner and open the FCS conversation in parallel, so month 3 is
            not a dead month.
          </p>
          <ol>
            <li>
              <strong>Mumbai’s funnel breaks at “served”, not at “attempt”.</strong>{" "}
              Household survey, about 1,200, across the three wards, copying
              the CLRA steps. Pull IMPDS and ePoS for every FPS in those
              wards. A break at attempt favours A. A break at served favours
              B.
            </li>
            <li>
              <strong>FCS will sign an MoU on dealer incentives within six months.</strong>{" "}
              Two consultation rounds with FCS and BMC, against the Andhra
              Pradesh flexible-requisition precedent. No MoU by month 6, no B.
            </li>
            <li>
              <strong>A can unlock a benefit for under INR 2,000.</strong>{" "}
              Benchmark Haqdarshak, Aajeevika Bureau, and the Migrant
              Resilience Collaborative. Above INR 3,000, the 25,000 target is
              not credible at 5 crore.
            </li>
            <li>
              <strong>Interstate migrants are the majority of the segment.</strong>{" "}
              Origin-state split in the survey. Intrastate workers already
              draw rations in Maharashtra. Below half interstate, B’s upside
              shrinks and A’s pension and insurance bundle matters more.
            </li>
          </ol>
          <p>
            Those 90 days also fill two gaps Dalberg, Kantar and Omidyar left
            open in the 2022 five-state ONORC study: dealer incentives and
            behaviour, and the destination-side experience of interstate
            migrants on a corridor. Publish the diagnostic either way.
          </p>

          <h2>Recommendation</h2>
          <p>
            Stage-gate the grant. Default to A. Buy the option on B.
          </p>
          <p>
            If the survey shows the break at served, and the MoU is signed:
            run B in the three wards. Otherwise run A, and keep INR 50 lakh
            to pilot B’s dealer incentive in one ward, so the systems-change
            option does not die in month 3.
          </p>
          <p>
            North star after the diagnostic: rupees of benefits received per
            rupee spent, with a target of at least 3x, reset after the unit
            cost test. Quarterly funnel re-survey. ePoS as the supply-side
            tracer. A comparison ward for attribution.
          </p>
          <p>
            e-Shram has registered 31 crore workers. A Gurugram survey of 400
            found that none had received a benefit. Lists are not the outcome.
            The counter is.
          </p>

          <h2>Sources</h2>
          <ol className="sources">
            <li>
              Dalberg, Kantar, Omidyar Network India. <em>Fulfilling the
              promise of ONORC: a frontline perspective from 5 states</em>{" "}
              (2022). 6,750 households, 1,540 dealers.
            </li>
            <li>
              IMPDS transaction data reported via IndiaSpend (2023), including
              interstate portability at 0.8% of PDS.
            </li>
            <li>
              Centre for Labour Research and Action. <em>One Nation Unequal
              Access</em> (December 2024). n = 1,012 seasonal migrants.
            </li>
            <li>
              Document carry-rate among migrants: MPRA paper 114603.
            </li>
            <li>
              e-Shram registration versus benefit receipt: Mainstream Weekly,
              Gurugram survey (January 2026).
            </li>
            <li>PRS Legislative Research on NFSA list vintage (2024).</li>
            <li>
              KPMG. Gender-responsive social protection for migrants (2024),
              including the Migrant Resilience Collaborative caseload.
            </li>
          </ol>
          <p className="note">
            Scope, budgets, unit costs and output targets are the author’s
            estimates for a hiring assignment, not a commissioned project.
          </p>

          <p className="next-work">
            Other project:{" "}
            <Link href="/work/agency">Who counts as empowered</Link>, a working
            note on NFHS-5 and scheme monitoring.
          </p>
        </article>
        <Footer />
      </main>
    </>
  );
}
