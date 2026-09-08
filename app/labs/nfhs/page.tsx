import Link from "next/link";
import { PageHead, PageShell } from "../../components/Shell";
import { NfhsExplorer } from "../NfhsExplorer";

export const metadata = {
  title: "NFHS state explorer",
  description: "Own-use accounts versus own-use phones across NFHS-5 Phase-II states.",
};

export default function NfhsLabPage() {
  return (
    <PageShell>
      <div className="wrap lab">
        <Link className="back" href="/labs">
          ← Labs
        </Link>
        <PageHead
          kicker="Labs · sketch"
          title="A phone the welfare system assumes"
          lede="OTP, e-KYC and portability assume a woman can be reached on a phone she herself uses. Pick a state. The gap is the policy."
        />
        <NfhsExplorer />
      </div>
    </PageShell>
  );
}
