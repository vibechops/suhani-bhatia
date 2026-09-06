import { Suspense } from "react";
import { WorkArchive } from "../components/WorkArchive";
import { PageHead, PageShell } from "../components/Shell";

export const metadata = {
  title: "Work",
  description: "Research, strategy, operations, data and writing by Suhani Bhatia.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead
          kicker="Work"
          title="Every piece of work, labelled by what it is"
          lede="Professional assignments, independent analysis and technical demonstrations. Each entry says who it was for, what I did, and what came out."
        />
        <Suspense fallback={null}>
          <WorkArchive />
        </Suspense>
      </div>
    </PageShell>
  );
}
