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
        <p className="kicker">Work</p>
        <h1>Work</h1>
        <p className="lede" style={{ maxWidth: "24em" }}>
          Professional, independent and technical work. Each is labelled.
        </p>
        <Suspense fallback={null}>
          <WorkArchive />
        </Suspense>
      </div>
    </PageShell>
  );
}
