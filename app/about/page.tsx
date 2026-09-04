import { PageShell } from "../components/Shell";
import { education } from "../lib/work";

export const metadata = {
  title: "About",
  description: "About Suhani Bhatia.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">About</p>
        <h1>A person who keeps following the form</h1>
        <div className="prose">
          <p>
            I became interested in public systems in a slightly sideways way. For
            five years I ran a tuition centre in Delhi. The work was unglamorous
            and very exacting. A parent would arrive with a child who had already
            been told, in one register or another, that they were behind. The
            question was never the mission statement. It was whether Tuesday’s
            class would still exist in March, whether the fee was priced so that
            the household could continue, whether I had built a timetable that a
            tired child could actually inhabit. That is still how I look at a
            public programme. I look for the Tuesday.
          </p>
          <p>
            Psychology, which I read alongside the business degree, gave me a
            second habit. People do not fail to claim a benefit only because a
            form is long, though forms are often long. They also fail because the
            office feels unreadable, because a neighbour’s story of humiliation
            travels faster than a circular, because the payment is promised in a
            voice that no longer sounds like it belongs to them. Administrative
            burden and shame are cousins. I do not treat that as a soft insight. I
            treat it as a design constraint.
          </p>
          <p>
            The move into public policy and law was a decision to take those two
            habits somewhere they would be tested by institutions larger than a
            classroom. TISS has been that test: econometrics and impact evaluation
            on one side of the week, regulatory governance and the slow language
            of the state on the other. I like the combination. A regression that
            cannot survive a panchayat meeting is unfinished. A field story that
            cannot say what would count as evidence is also unfinished.
          </p>
          <p>
            Fieldwork changed the questions I ask. In Hyderabad, at Pride Place,
            the Transgender Persons Act was not an abstract commitment. It was a
            petition register, a module officer, a station house that might or
            might not treat the person in front of them as a rights-holder. In two
            villages with Sanchay, a pension was a journey through a Block
            Development Officer’s office. For Transform Rural India, fourteen
            interviews across six states kept returning to a simple geographic
            unfairness: a service that exists in the district and still does not
            arrive. I left those rooms less interested in announcing programmes
            and more interested in the last mile of them.
          </p>
          <p>
            I combine qualitative and quantitative methods because the problems I
            care about do not sit politely in one of those boxes. NFHS can tell
            you that own-use bank accounts raced ahead of household
            decision-making. It cannot tell you what a woman did with the account.
            An interview can tell you why a ration card stayed in another state. It
            cannot tell you how large the pattern is. I want both, and I want the
            writing to be honest about which one I have.
          </p>
          <p>
            The problems I want to work on are concentrated, even when the
            methods are not. Social protection. Gender, including the
            implementation of rights that exist on paper. Rural public services
            and the panchayat as a site of delivery. Policing institutions where
            they are asked to do protection work. Strategy around those problems,
            including the unromantic work of costing and sequencing. I am early
            in the career. The work already has a grain. I would like the next
            few years to deepen it rather than decorate it.
          </p>
        </div>

        <div className="split-two" style={{ marginTop: 48 }}>
          <div>
            <p className="kicker">Education</p>
            {education.map((e) => (
              <article className="edu" key={e.deg}>
                <h3>{e.deg}</h3>
                <p className="meta">
                  {e.school} · {e.dates}
                </p>
                {e.note ? <p>{e.note}</p> : null}
              </article>
            ))}
          </div>
          <div>
            <p className="kicker">Languages and mobility</p>
            <p className="prose">
              English and Hindi. Based in Mumbai. Open to relocation across India.
              Available full-time from December 2026.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
