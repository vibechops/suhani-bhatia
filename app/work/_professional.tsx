import { Artefacts, CaseLayout } from "../components/Shell";
import { item } from "../lib/work";

export function TransgenderPage() {
  const w = item("transgender-rights");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        Where does the Transgender Persons (Protection of Rights) Act 2019 fail
        to convert into delivery, once a person is in front of the police?
        Leadership at Pride Place needed a structured account they could act on,
        not a restatement of the Act.
      </p>

      <div className="impl-map" aria-label="From statute to outcome">
        <div className="step">
          <b>Law</b>
          <span>The 2019 Act and 2020 Rules create duties, including a protection cell under the DGP.</span>
        </div>
        <div className="step">
          <b>Institution</b>
          <span>Pride Place sits in the Women Safety Wing, with a public SOP for petitions.</span>
        </div>
        <div className="step">
          <b>Frontline</b>
          <span>Intake, referral, SHO contact and follow-up are ordinary police administration.</span>
        </div>
        <div className="step">
          <b>Citizen</b>
          <span>A petitioner still has to be believed, documented and told what happened next.</span>
        </div>
        <div className="step">
          <b>Outcome</b>
          <span>Protection is a result the person can use, not a file the cell can close.</span>
        </div>
      </div>

      <h2>How I worked</h2>
      <ul>
        <li>Four-part implementation analysis for police leadership, May–July 2026.</li>
        <li>Reviewed case records and observed intake and referral. Records stay internal.</li>
        <li>
          Compared Telangana’s police cell with Kerala (2015 policy) and Tamil Nadu
          (Welfare Board, 2008), using published architecture only.
        </li>
        <li>Presented the work as a structured deck.</li>
      </ul>

      <h2>What a comparison can ask</h2>
      <table className="data">
        <thead>
          <tr>
            <th>State</th>
            <th>Public architecture</th>
            <th>The operational question</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Telangana</td>
            <td>Pride Place; MHA-aligned cell; public SOP.</td>
            <td>Does the petition path produce registration, investigation and a result the person can use?</td>
          </tr>
          <tr>
            <td>Kerala</td>
            <td>State Transgender Policy, 2015; welfare and identity documentation.</td>
            <td>How is police protection articulated beside a longer-running welfare department?</td>
          </tr>
          <tr>
            <td>Tamil Nadu</td>
            <td>Transgender Welfare Board, 2008.</td>
            <td>What does a welfare-board model do that a police cell does not, and the reverse?</td>
          </tr>
        </tbody>
      </table>

      <h2>What leadership can act on</h2>
      <p>
        A protection cell can exist and still leave a person where they were at
        the station gate. The useful questions are operational: time from
        petition to SHO contact; share of petitions that become FIRs; share that
        receive an action report the petitioner is told about; whether district
        cells exist as the MHA framing requires. Those indicators sit in the
        internal deck. They are not published here.
      </p>
      <p className="note">
        Intended path reconstructed from the public Pride Place SOP and Rules
        2020. Case records and process metrics stay internal.
      </p>

      <Artefacts
        items={[
          { href: "/decks/transgender-rights", label: "Stakeholder deck (public reconstruction)" },
        ]}
      />
    </CaseLayout>
  );
}

export function RuralPage() {
  const w = item("rural-service-delivery");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        Why does a district-level public service reach one community and not
        another, even inside the same administrative boundary? Transform Rural
        India asked that across six states, in fourteen interviews with SHG
        members, panchayat representatives and practitioners.
      </p>

      <div className="impl-map">
        <div className="step">
          <b>SHG members</b>
          <span>Women who use, wait for, or give up on a service that officially exists.</span>
        </div>
        <div className="step">
          <b>Panchayat</b>
          <span>Representatives sitting between the block office and the hamlet.</span>
        </div>
        <div className="step">
          <b>Practitioners</b>
          <span>People who watch delivery from the mission or NGO side, and know where a file stalls.</span>
        </div>
      </div>

      <h2>What those rooms showed</h2>
      <p>
        Unevenness was familiar. The argument was about cause: the gram
        panchayat’s relationship with the block, the density of a local
        organisation, or a scheme’s paperwork. Those are categories of
        explanation, not results. Sampling was purposive, organised around TRI’s
        work. The state list stays with TRI.
      </p>
    </CaseLayout>
  );
}

export function PensionPage() {
  const w = item("pension-delivery");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        A name on a pension list and a payment in an account are different facts.
        With Sanchay in 2023–24 I walked that gap in two villages, through
        interviews and the Block Development Officer’s office.
      </p>
      <div className="impl-map">
        <div className="step">
          <b>Eligible</b>
          <span>A rule. Knowing one is eligible is a different fact.</span>
        </div>
        <div className="step">
          <b>Listed</b>
          <span>The name has to exist on the database the payment runs on.</span>
        </div>
        <div className="step">
          <b>Documented</b>
          <span>Aadhaar, account, sometimes a certificate an office will accept.</span>
        </div>
        <div className="step">
          <b>Corrected</b>
          <span>Errors travel to the BDO. The useful work is watching which ones move.</span>
        </div>
        <div className="step">
          <b>Paid</b>
          <span>The transfer arrives. If it does not, the listed person is still a success on the wrong dashboard.</span>
        </div>
      </div>
      <p className="note">
        Method: interviews plus the BDO office, two villages, a delivery problem.
        Village-level counts stay with Sanchay.
      </p>
    </CaseLayout>
  );
}

export function GreenApplePage() {
  const w = item("green-apple");
  return (
    <CaseLayout item={w}>
      <h2>The problem</h2>
      <p>
        A household wanted a child to keep up at school and could pay a monthly
        fee if the class felt real. Existing options were too expensive, too far,
        or too casual to trust with a working parent’s evening.
      </p>

      <h2>How it ran</h2>
      <p>
        Curriculum followed the board the children were already in. Acquisition
        was local: parents, schools, a child whose marks moved. Pricing was the
        first serious decision: too low and the room could not be staffed; too
        high and the household that needed the class left. I adjusted against
        retention, not a market-research document. Cashflow, space, my time, and
        the academic calendar set the limits.
      </p>

      <div className="stat-row">
        <p>
          <strong>2018–23</strong>
          <span>Founded a tuition centre in Delhi with no inherited classroom. Closed it in 2023 for the next degree of work.</span>
        </p>
        <p>
          <strong>₹1 lakh</strong>
          <span>Monthly revenue reached over five years. Margins are not published.</span>
        </p>
      </div>

      <h2>What it taught</h2>
      <p>
        An organisation that cannot price, staff and retain will not deliver,
        however elegant its theory of change. When I now sit in a panchayat
        interview or cost a help desk, I still ask whether this will exist next
        month for the person who has to use it.
      </p>
    </CaseLayout>
  );
}
