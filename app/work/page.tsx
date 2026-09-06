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
          title="Work"
          lede="Professional, independent and technical. Each entry is labelled."
        />
        <Suspense fallback={null}>
          <WorkArchive />
        </Suspense>
      </div>
    </PageShell>
  );
}
