import { Suspense } from "react";
import { WorkArchive } from "../components/WorkArchive";
import { PageShell } from "../components/Shell";

export const metadata = {
  title: "Work",
  description: "Research, strategy, operations, data and writing by Suhani Bhatia.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">Archive</p>
        <h1>Work</h1>
        <p className="lede">
          This archive holds the professional assignments, independent analyses,
          models, writing and speaking that I am prepared to discuss. Professional
          research is labelled as such. Independent work is labelled as such.
          Synthetic data is labelled as such. Published writing is listed with its
          publication.
        </p>
        <p className="prose">
          A consulting recruiter will find strategy, costing, attrition and Green
          Apple. A researcher will find the police implementation study, the TRI
          interviews, the NFHS notes and the methods essay. A development
          organisation will find pensions, MGNREGA sessions, migrant welfare and
          rural service delivery. The filters change the list. They do not create
          separate websites.
        </p>
        <Suspense fallback={<p>Loading the archive.</p>}>
          <WorkArchive />
        </Suspense>
      </div>
    </PageShell>
  );
}
