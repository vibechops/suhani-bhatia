import Link from "next/link";
import { ReelStrip } from "../components/ReelStrip";
import { PageHead, PageShell } from "../components/Shell";

export const metadata = {
  title: "Speaking",
  description: "Moderation and recorded conversations.",
};

export default function SpeakingPage() {
  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead
          kicker="Speaking"
          title="Moderation and on-camera conversation"
          lede="Emcee, Day 2 of the Delhi chapter of the India Rural Colloquy 2025. Recorded conversations for Transform Rural India's Rural Renaissance series."
        />
        <ReelStrip note />
        <div className="btn-row">
          <Link className="btn" href="/work">
            All work
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
