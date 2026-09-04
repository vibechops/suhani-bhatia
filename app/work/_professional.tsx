import { Artefacts, CaseLayout, NeedInfo } from "../components/Shell";
import { item } from "../lib/work";

export function TransgenderPage() {
  const w = item("transgender-rights");
  return (
    <CaseLayout item={w} subtitle="Statutory protection, ordinary police administration">
      <h2>The question</h2>
      <p>
        India has a rights statute for transgender persons. Telangana has a
        dedicated protection cell, Pride Place, inside the Women Safety Wing.
        The internship asked a practical question: where does the Transgender
        Persons (Protection of Rights) Act 2019 fail to convert into
        administrative delivery, once a person is actually in front of the
        police?
      </p>
      <p>
        The decision-maker was police leadership at the Cell. They needed a
        structured account they could act on, not a restatement of the Act.
      </p>

      <h2>The law, as written</h2>
      <p>
        The 2019 Act prohibits discrimination in, among other settings,
        education, employment, healthcare, and the ability to hold public
        office. It recognises identity through a process that runs via the
        District Magistrate. Offences against transgender persons are
        criminalised. The Transgender Persons (Protection of Rights) Rules,
        2020, require every state government to set up a Transgender Protection
        Cell under the Director General of Police to monitor offences. Pride
        Place is Telangana’s cell: inaugurated in 2022, housed in the Women
        Safety Wing, staffed (on the public description) by an inspector, head
        constable, woman constable, legal expert, data-entry operator and a
        coordinator from the trans community.
      </p>
      <p>
        The public SOP on the Women Safety Wing site describes a petition
        path: entry in a register; examination by a module officer; contact
        with the concerned station house officer; proformas to the unit;
        follow-up and action reports back to Pride Place. That is the intended
        process. It is a paper trail designed to keep a petition from dying in
        a station.
      </p>

      <div className="impl-map" aria-label="Intended administrative path">
        <div className="step">
          <b>Approach</b>
          <span>Person reaches Pride Place, or is referred, with a complaint that may or may not yet be an FIR.</span>
        </div>
        <div className="step">
          <b>Register</b>
          <span>Petition entered. The cell’s public description treats this as the start of protection work.</span>
        </div>
        <div className="step">
          <b>Module officer</b>
          <span>Facts examined; SHO contacted; disposal supposed to be speedy.</span>
        </div>
        <div className="step">
          <b>Unit</b>
          <span>Phase proformas travel to the concerned unit with a memo.</span>
        </div>
        <div className="step">
          <b>Follow-up</b>
          <span>WSW officers collect action reports. Leadership sees a file. The person may or may not see a result.</span>
        </div>
      </div>
      <p className="note">
        Intended path reconstructed from the public Pride Place SOP and Rules
        2020. It is not a finding from confidential case records.
      </p>

      <h2>What I did</h2>
      <p>
        Between May and July 2026 I wrote a four-part implementation analysis
        for police leadership. I reviewed case records and observed intake and
        referral directly. I compared Telangana’s protection mechanisms with
        Kerala and Tamil Nadu, two states with longer public transgender-welfare
        architecture (Kerala’s 2015 policy; Tamil Nadu’s Transgender Welfare
        Board, 2008). I presented the work as a structured deck.
      </p>
      <p>
        Case records are not reproduced here. They are confidential. The
        comparison with Kerala and Tamil Nadu, on this public page, is limited
        to what can be said from published policy: both states built welfare
        boards and identity documentation earlier; Telangana’s distinctive
        public move is a police cell with an SOP. Whether that cell closes
        cases, whether district cells exist, whether a petition becomes an FIR,
        and how long each step takes, are empirical questions. They were the
        subject of the internal note. They are not numbers I can publish from
        memory.
      </p>

      <h2>Comparative frame</h2>
      <table className="data">
        <thead>
          <tr>
            <th>State</th>
            <th>Public architecture</th>
            <th>What a comparison can ask</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Telangana</td>
            <td>Pride Place under Women Safety Wing; MHA-aligned protection cell; public SOP for petitions.</td>
            <td>Does the petition path produce registration, investigation and a result the person can use?</td>
          </tr>
          <tr>
            <td>Kerala</td>
            <td>State Transgender Policy, 2015; welfare and identity documentation through social justice institutions.</td>
            <td>How is police protection articulated beside a welfare department that has been in this work longer?</td>
          </tr>
          <tr>
            <td>Tamil Nadu</td>
            <td>Transgender Welfare Board, 2008, among the earliest in the country.</td>
            <td>What does a welfare-board model do that a police cell does not, and the reverse?</td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        Public sources: Women Safety Wing, Pride Place; Indian Express on the
        2022 inauguration; Rules 2020; state policy documents. Internal
        benchmarking from the internship is not tabulated here.
      </p>

      <h2>Implication for leadership</h2>
      <p>
        A protection cell can exist and still leave a person in the same
        position they were in at the station gate. The useful management
        question is operational: time from petition to SHO contact; share of
        petitions that become FIRs; share that receive an action report the
        petitioner is told about; whether district cells exist as the MHA
        framing requires. Those are the kinds of indicators the internal deck
        was built to support. Publishing the indicators themselves would require
        the Cell’s permission.
      </p>

      <NeedInfo
        items={[
          "Permission to summarise non-identifying process metrics from the four-part note (time-to-action, FIR conversion, district coverage).",
          "The four-part structure of the internal memo, if it can be titled publicly.",
          "Which Kerala and Tamil Nadu instruments were used as the operational benchmarks in the deck.",
          "Whether any anonymised process map from the presentation can be shown.",
        ]}
      />

      <h2>Artefacts</h2>
      <Artefacts
        items={[
          { href: "/decks/transgender-rights", label: "Stakeholder deck (public reconstruction)" },
        ]}
      />

      <aside className="discuss">
        <h2>Notes for conversation</h2>
        <h3>Questions I expect</h3>
        <ul>
          <li>What did you actually observe at intake?</li>
          <li>How did you keep case records confidential while still analysing them?</li>
          <li>Why compare Kerala and Tamil Nadu, specifically?</li>
          <li>What would you tell the DGP to do in the next quarter?</li>
          <li>Where is the line between a police cell and a welfare board?</li>
        </ul>
        <h3>Decisions</h3>
        <ul>
          <li>To write for leadership, not for a general LGBTQ+ advocacy audience.</li>
          <li>To treat the SOP as a hypothesis about delivery, open to observation.</li>
          <li>To withhold case-level findings from this website.</li>
        </ul>
        <h3>Limits</h3>
        <p>
          A three-month internship cannot evaluate the Cell. It can describe the
          path a petition is supposed to take, and it can show leadership where
          that path is empirically thin. The public page is thinner still.
        </p>
      </aside>
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
        another, even when both sit inside the same administrative boundary?
        Transform Rural India asked me to sit with that question across six
        states, in fourteen semi-structured interviews with self-help group
        members, panchayat representatives and development practitioners.
      </p>
      <p>
        The work fed two outputs: field synthesis for the team, and published
        writing for Village Square. I also supported documentation of TRI’s
        LEAP programme design, which has its own page.
      </p>
      <h2>Method</h2>
      <p>
        Semi-structured interviews. Respondents in three groups: women in SHGs,
        elected or sitting panchayat voices, and practitioners who watch
        delivery from the NGO or mission side. Geography: six states. I do not
        publish the state list or the names here without TRI’s say-so. Sampling
        was purposive, organised around the organisation’s work, which means
        the interviews are evidence about those rooms. They are not a random
        sample of rural India.
      </p>
      <p>
        A coding frame for this kind of study usually separates demand-side
        stories (information, time, social permission to claim) from
        supply-side stories (staff, last-mile presence, political priority,
        the habit of a particular block office). I used that distinction as a
        working scaffold. Theme frequencies are not on this page because I
        will not invent them.
      </p>
      <h2>What can be said without the transcripts</h2>
      <p>
        The question itself already contains a finding of sorts: everyone I was
        sent to speak with recognised the pattern. Unevenness was not a
        surprise to SHG members or to panchayat representatives. The argument
        was about cause. Some accounts pointed to the gram panchayat’s
        relationship with the block. Some pointed to the density of a local
        organisation. Some pointed to a scheme’s paperwork. Those are
        categories of explanation. They are not results.
      </p>
      <NeedInfo
        items={[
          "The six states, if they can be named.",
          "A cleaned codebook and theme counts.",
          "Two or three anonymised quotations TRI is willing to place on a public site.",
          "How the fourteen interviews sat inside a larger TRI evidence base.",
        ]}
      />
      <aside className="discuss">
        <h2>Notes for conversation</h2>
        <ul>
          <li>How do you know fourteen interviews are enough?</li>
          <li>What would a better sampling frame have looked like?</li>
          <li>How did Village Square writing use, or refuse to use, those interviews?</li>
        </ul>
      </aside>
    </CaseLayout>
  );
}

export function PensionPage() {
  const w = item("pension-delivery");
  return (
    <CaseLayout item={w}>
      <h2>The question</h2>
      <p>
        A listed pensioner is not the same thing as a paid pensioner. In
        2023–24, with Sanchay, I looked at pension delivery across two
        villages, through field interviews and through the Block Development
        Officer’s office, and presented barriers to access.
      </p>
      <h2>The ordinary path</h2>
      <p>
        National social assistance pensions, and their state top-ups, typically
        ask a person to be eligible, listed, documented, and reachable by
        Direct Benefit Transfer. The last mile is a pile of ordinary possible
        failures: an account that is dormant, a mismatch with Aadhaar, a death
        not recorded, a village that is far from the office that can correct
        the list, a person who cannot spare the day. I used that public
        machinery as the map. I then walked it in two villages.
      </p>
      <div className="impl-map">
        <div className="step">
          <b>Eligible</b>
          <span>Age, widowhood, disability, or the relevant state category. Eligibility is a rule. Knowing one is eligible is a different fact.</span>
        </div>
        <div className="step">
          <b>Listed</b>
          <span>The name has to exist on the database the payment runs on.</span>
        </div>
        <div className="step">
          <b>Documented</b>
          <span>Aadhaar, account, sometimes a certificate that an office will accept.</span>
        </div>
        <div className="step">
          <b>Corrected</b>
          <span>Errors travel to the BDO. The intern’s useful work is often sitting in that office long enough to see which errors move.</span>
        </div>
        <div className="step">
          <b>Paid</b>
          <span>The transfer arrives. If it does not, the listed person is still a success on the wrong dashboard.</span>
        </div>
      </div>
      <p>
        I presented barriers to access. I do not reconstruct that presentation
        from memory as if it were a dataset. The honest public residue is the
        method: interviews plus the BDO office, two villages, a delivery
        problem rather than an awareness campaign.
      </p>
      <NeedInfo
        items={[
          "Village names or a geographic description Sanchay will allow.",
          "The barrier list as presented to the organisation.",
          "Whether pensions were NSAP, state, or both.",
          "Any non-identifying counts (listed versus paid) that can be used.",
        ]}
      />
    </CaseLayout>
  );
}

export function GreenApplePage() {
  const w = item("green-apple");
  return (
    <CaseLayout item={w} subtitle="Curriculum, pricing, parents, and a fee that had to arrive">
      <h2>The problem</h2>
      <p>
        In 2018 I started a tuition centre in Delhi with no inherited classroom
        and no brand. The customer was a household that wanted a child to keep
        up at school and could pay a monthly fee if the class felt real. The
        value proposition was unromantic: a timetable, a teacher who knew the
        syllabus, a room that existed every week. Over five years the practice
        reached about ₹1 lakh a month in revenue. I owned curriculum,
        operations, pricing and student outcomes. I closed it in 2023.
      </p>
      <h2>How it had to work</h2>
      <p>
        Pricing was the first serious decision. Too low, and I could not pay
        for the room or for other teachers as the batch grew. Too high, and the
        household that actually needed the class would leave. I adjusted fees
        against retention rather than against a market-research document I did
        not have. Acquisition was local and conversational: parents, schools’
        word of mouth, the slow reputation of a child whose marks moved. I did
        not run a digital performance engine. I ran a neighbourhood.
      </p>
      <p>
        Operations were the Tuesday problem. Batches, substitutions, homework
        that someone would actually check, a parent who wanted a conversation
        at 8 p.m. Capacity was physical: one more batch meant one more evening
        I could still teach well. When I added teachers, I had to decide
        whether the quality would survive the hand-off. Student outcomes were
        the only advertisement that mattered, and they were slow. A child’s
        improvement is not a monthly OKR. It is a report card and a parent’s
        face.
      </p>
      <p>
        Constraints were cashflow, space, my own time, and the academic
        calendar. I do not publish profit margins because I will not invent
        them. Revenue of about ₹1 lakh a month is the verified figure. What
        that meant after rent and salaries changed by year. The useful lesson
        for later policy work is simple. An organisation that cannot price,
        staff and retain will not deliver, however elegant its theory of
        change. I learned that before I learned the phrase.
      </p>
      <NeedInfo
        items={[
          "Peak student numbers, if I reconstruct them from records.",
          "Fee bands by year.",
          "How teaching staff was organised in the last two years.",
        ]}
      />
      <aside className="discuss">
        <h2>Notes for conversation</h2>
        <ul>
          <li>How did you grow it without a marketing budget?</li>
          <li>What did you do when a teacher left mid-term?</li>
          <li>Why close it?</li>
          <li>What from Green Apple do you still use in a panchayat interview?</li>
        </ul>
      </aside>
    </CaseLayout>
  );
}
