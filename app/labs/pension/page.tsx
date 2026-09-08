import Link from "next/link";
import { PageHead, PageShell } from "../../components/Shell";
import { PensionWalk } from "../PensionWalk";

export const metadata = {
  title: "Pension last mile",
  description: "Where a listed pensioner still fails to become a paid pensioner.",
};

export default function PensionLabPage() {
  return (
    <PageShell>
      <div className="wrap lab">
        <Link className="back" href="/labs">
          ← Labs
        </Link>
        <PageHead
          kicker="Labs · sketch"
          title="On the list, still unpaid"
          lede="A name on a pension list and a payment in an account are different facts. Toggle a friction at each office. The conversion is the number that should move."
        />
        <PensionWalk />
      </div>
    </PageShell>
  );
}
