import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../../components/Chrome";
import { MisVsAgency, NationalBars, StateScatter } from "../../components/Charts";
import { nfhsNational, nfhsStates } from "../../data";

export const metadata: Metadata = {
  title: "Who counts as empowered",
  description:
    "Working note: NFHS-5 on women’s agency versus what Indian welfare dashboards count as empowerment.",
};

export default function AgencyPage() {
  return (
    <>
      <Header />
      <main>
        <article className="wrap article">
          <a className="back" href="/#projects">
            ← Projects
          </a>
          <p className="kicker">Working note · NFHS-5 · September 2026</p>
          <h1>Who counts as empowered</h1>
          <p className="meta">
            Portfolio note, not a paper. Eleven Phase-II states from published
            NFHS-5 factsheets. Ordinary least squares on those eleven points.
            An op-ed with Prof. Namrata Chindarkar, JSW School of Public Policy,
            IIM Ahmedabad, is in progress on the same question.
          </p>

          <h2>The question</h2>
          <p>
            Indian welfare treats a woman with a Jan Dhan account as a woman
            who can decide. The National Family Health Survey asks both things.
            They do not move together.
          </p>
          <p>
            Between NFHS-4 (2015–16) and NFHS-5 (2019–21), the share of women
            aged 15–49 with a bank or savings account they themselves use rose
            from {nfhsNational.bank.nfhs4.toFixed(1)}% to{" "}
            {nfhsNational.bank.nfhs5.toFixed(1)}%: 25.6 points. The share who
            participate in three household decisions rose from{" "}
            {nfhsNational.decisions.nfhs4.toFixed(1)}% to{" "}
            {nfhsNational.decisions.nfhs5.toFixed(1)}%: 4.7 points. Own-use
            mobile phones moved 8.1 points. House or land ownership, 4.9.
          </p>
          <p>
            If financial inclusion were agency, the first jump would have
            shown up in the second. It did not. Scheme monitoring still
            scores the first.
          </p>

          <NationalBars />

          <h2>Why this, for me</h2>
          <p>
            I have been sitting with this question for an op-ed with Prof.
            Chindarkar: why measures of women’s agency are almost absent from
            Indian scheme monitoring. The note is the homework. Village Square
            writing is one kind of evidence. Fourteen interviews for TRI are
            another. This is the third kind: published tables, named variables,
            a regression small enough to show the work.
          </p>

          <h2>Data</h2>
          <p>
            Source: IIPS and MoHFW, NFHS-5 national report and Phase-II state
            factsheets; NFHS-4 national report for the earlier round. I use
            published totals for women 15–49. I do not have unit-level files
            here, so I do not pretend to. The state analysis is eleven
            Phase-II states that published the three indicators on the same
            factsheet. That is an ecological cross-section, not a woman-level
            model, and not a claim about the rest of India.
          </p>
          <p>
            Scheme monitoring numbers are from public dashboards and secondary
            reporting, named in the sources. They are there as a contrast,
            not as a second regression.
          </p>

          <h2>Variable construction</h2>
          <p>NFHS labels, used as published:</p>
          <ul>
            <li>
              <strong>Decision-making.</strong> Currently married women who
              usually participate in three household decisions: own health
              care, major household purchases, and visits to her family or
              relatives.
            </li>
            <li>
              <strong>Bank account.</strong> Women who have a bank or savings
              account that they themselves use. Not “a household has an
              account.” Not “her name is on a passbook in a cupboard.”
            </li>
            <li>
              <strong>Mobile phone.</strong> Women who have a mobile phone that
              they themselves use.
            </li>
            <li>
              <strong>Property.</strong> Women who own a house and/or land,
              alone or jointly.
            </li>
          </ul>
          <p>
            Agency here is Kabeer’s version, not a new index: the ability to
            define goals and act on them. NFHS decision-making is a thin
            proxy. It is still the proxy the survey actually fields, and it is
            still thicker than a personday count.
          </p>

          <h2>Descriptive statistics</h2>
          <p>
            Nationally, accounts ran ahead of every agency-adjacent item.
            Across the eleven states, decision-making is high and bunched
            (86.0 to 92.8). Bank accounts vary more (73.6 in Haryana to 92.2
            in Tamil Nadu). Mobile phones vary most (38.5 in Madhya Pradesh
            to 76.4 in Arunachal Pradesh).
          </p>
          <table>
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
          <p className="note">
            NFHS-5 Phase-II factsheet totals, women 15–49. Decision-making is
            currently married women.
          </p>

          <h2>What a cross-section can and cannot say</h2>
          <p>
            Identification, such as it is: ordinary least squares on eleven
            state points. No instrument. No district panel. No claim that
            opening an account causes decision-making. The useful output is
            the slope, not a p-value theatre.
          </p>
          <p>
            Correlation between own-use bank accounts and decision-making:
            0.72. Between own-use mobiles and decision-making: 0.22. Accounts
            and phones: 0.50.
          </p>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Intercept</th>
                <th>Bank</th>
                <th>Mobile</th>
                <th>R²</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decisions ~ bank</td>
                <td>63.37</td>
                <td>0.326</td>
                <td>n.a.</td>
                <td>0.52</td>
              </tr>
              <tr>
                <td>Decisions ~ bank + mobile</td>
                <td>61.86</td>
                <td>0.371</td>
                <td>−0.038</td>
                <td>0.55</td>
              </tr>
            </tbody>
          </table>
          <p className="note">
            n = 11 states. A 10-point rise in own-use accounts predicts about
            3 points in decision-making, not 10. Adding mobile phones raises
            R² from 0.52 to 0.55; the mobile coefficient is essentially zero.
          </p>
          <p>
            The national time series is the sharper test. A slope of 0.33
            applied to the 25.6-point jump in accounts would have predicted
            about 8 points of decision-making. The country got 4.7. Even the
            generous cross-section over-predicts. Phones do not close the
            gap.
          </p>

          <StateScatter />

          <h2>What the dashboard counts</h2>
          <p>
            MGNREGA’s gender number is women’s share of persondays: about 58%
            in FY 2024–25. That is labour days billed, not whether she decided
            to demand work or kept the wage. DAY-NRLM counts SHG members,
            loans, insurance covers. Membership is not voice. PMMVY counts
            enrolments and instalments on a portal. Drèze and Khera, using
            RTI figures in The Hindu (March 2025), put effective coverage at
            about 9% of births in 2023–24. The MIS can still look busy.
          </p>

          <MisVsAgency />

          <h2>What a monitoring cell would have to ask</h2>
          <p>
            Not a new survey architecture. A short add-on to concurrent
            evaluation, or to a social audit sample, once a year:
          </p>
          <ul>
            <li>Did she decide to apply, or did someone apply in her name?</li>
            <li>Does she know the amount she is owed?</li>
            <li>Did the money land in an account she operates?</li>
            <li>Could she refuse the worksite, the group, the instalment?</li>
          </ul>
          <p>
            Those four sit next to persondays and SHG counts without replacing
            them. They are closer to what NFHS already asks than to what
            MGNREGA currently reports. If the op-ed has a single ask, it is
            this: stop letting an account, a personday, or a group membership
            stand in for agency.
          </p>

          <h2>Limits</h2>
          <p>
            Eleven states. Published factsheet totals, so ecological. No
            controls for wealth, education, or rural share, because adding
            them on n = 11 is dressing. Decision-making is asked of currently
            married women; bank and mobile are asked of all women 15–49. The
            national comparison uses the published all-India figures, which
            mix Phase-I and Phase-II. None of that is a reason to keep using
            Jan Dhan as a synonym for empowerment. It is a reason not to
            over-claim the slope.
          </p>

          <h2>Sources</h2>
          <ol className="sources">
            <li>
              International Institute for Population Sciences (IIPS) and
              Ministry of Health and Family Welfare. National Family Health
              Survey (NFHS-5), 2019–21, India report; NFHS-4, 2015–16, India
              report; NFHS-5 Phase-II state factsheets.
            </li>
            <li>
              Ministry of Rural Development. MGNREGA public dashboard, women’s
              share of persondays, FY 2024–25.
            </li>
            <li>
              Deendayal Antyodaya Yojana – National Rural Livelihoods Mission.
              Public progress reports on SHG membership and financial
              inclusion.
            </li>
            <li>
              Jean Drèze and Reetika Khera. “A leap backward for maternity
              entitlements.” The Hindu, 11 March 2025. Effective PMMVY
              coverage estimated at about 9% of births in 2023–24.
            </li>
            <li>
              Naila Kabeer. “Resources, Agency, Achievements: Reflections on
              the Measurement of Women’s Empowerment.” Development and Change,
              1999.
            </li>
          </ol>

          <p className="next-work">
            Next:{" "}
            <Link href="/work/migrants">On the lists, not at the counter</Link>,
            a donor brief on Mumbai’s informal migrants.
          </p>
        </article>
        <Footer />
      </main>
    </>
  );
}
