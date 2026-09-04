import { PageShell } from "../components/Shell";

export const metadata = {
  title: "Methods",
  description: "How Suhani Bhatia works.",
};

export default function MethodsPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">Methods</p>
        <h1>A practice, described without software worship</h1>
        <div className="prose">
          <p>
            Most of my work begins with a decision someone has to take. A police
            leadership team has to know where a protection cell is leaking. A
            donor has to know whether to buy help desks or dealer incentives. A
            monitoring cell has to know whether an enrolment count is standing in
            for agency. The method follows the decision. I do not start with a
            favourite tool.
          </p>
          <p>
            Qualitative research, for me, is semi-structured interviewing and
            sitting with a process until it becomes visible. At Pride Place that
            meant case-record review and watching intake. At Sanchay it meant
            following a pensioner toward a BDO office. For TRI it meant fourteen
            interviews with SHG members, panchayat representatives and
            practitioners. I write interview guides. I try to code themes rather
            than harvest quotations. When the codebook is not public, I say so.
          </p>
          <p>
            Institutional and legal analysis is the other half of that fieldwork.
            A statute is a set of duties, not a mood. The Transgender Persons Act
            2019, the NFSA, MGNREGA guidelines, pension circulars: I read them as
            instructions that some office will have to perform. Implementation
            research is the comparison between that instruction and the ordinary
            day.
          </p>
          <p>
            Quantitative work is still, honestly, at the scale of published tables
            and coursework models. I use NFHS factsheets and national reports, and
            Stata for ordinary least squares on those tables. I can run a
            difference-in-differences in a classroom. I will not paste one onto a
            portfolio unless the design supports it. Excel is the stronger daily
            instrument: lookups, pivots, scenario and sensitivity analysis,
            programme cost and coverage models. The migrant costing workbook is
            the public example.
          </p>
          <p>
            Spatial work, at this stage, is state-level mapping of published
            indicators. The phone-gap cartogram is that practice: a policy
            question first, a map that answers it, a CSV that could be dropped
            into QGIS. Python and SQL are beginner skills on the résumé. The
            workflow page treats them that way: cleaning, joining, aggregating,
            writing out a file someone else could check.
          </p>
          <p>
            Strategy is the habit of refusing a recommendation until the
            diagnostic has earned it. Problem, decision-maker, hypotheses,
            evidence, options, criteria, operating model, measurement, risks. I
            have learned to distrust verbs such as “strengthen” unless they come
            with a who, a where, a when and a number. Communication is part of
            the method. A deck for police leadership and an essay for Village
            Square are different objects. Both have to be true.
          </p>
          <p>
            I use Cursor and Claude as research assistants: to organise sources,
            to draft tables, to build small tools such as the evidence matrix. I
            do not outsource the judgement about what a number means. If AI
            touched a page, the artefacts still have to stand without it.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
