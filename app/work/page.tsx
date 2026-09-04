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
          This archive collects the work I am prepared to discuss: professional
          research, independent analysis, models, operating cases, writing and
          speaking. Each entry carries its provenance. Synthetic data is labelled
          where it is used. Published writing is listed with its publication.
        </p>
        <p className="prose">
          The filters change which pieces are visible. They do not create separate
          websites. Professional work is the work done for organisations.
          Independent work is analysis I undertook myself. The strongest cases have
          their own pages. Shorter notes exist so that the résumé line is not the
          only public record of that assignment.
        </p>
        <Suspense fallback={null}>
          <WorkArchive />
        </Suspense>
      </div>
    </PageShell>
  );
}
