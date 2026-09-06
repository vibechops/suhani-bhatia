import Link from "next/link";
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
        <div className="btn-row">
          <Link className="btn btn-primary" href="/work/rural-colloquy">
            Archive note
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
