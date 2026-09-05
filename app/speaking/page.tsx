import Link from "next/link";
import { PageShell } from "../components/Shell";

export const metadata = {
  title: "Speaking",
  description: "Moderation and recorded conversations.",
};

export default function SpeakingPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">Speaking</p>
        <h1>Speaking</h1>
        <p className="lede" style={{ maxWidth: "32em" }}>
          Emcee, Day 2 of the Delhi chapter of the India Rural Colloquy 2025.
          Recorded conversations for TRI’s Rural Renaissance series.
        </p>
        <p className="hero-links">
          <Link href="/work/rural-colloquy">Archive note</Link>
        </p>
      </div>
    </PageShell>
  );
}
