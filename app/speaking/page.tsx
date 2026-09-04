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
        <p className="kicker">Speaking and conversations</p>
        <h1>A room is a different instrument</h1>
        <div className="prose">
          <p>
            In 2025 I emceed Day 2 of the Delhi chapter of the India Rural Colloquy,
            a convening organised in the orbit of Transform Rural India. The work
            was to keep a long day of rural practice from collapsing into a sequence
            of disconnected remarks: introducing speakers, holding time, and making
            sure a question from the floor still had somewhere to land.
          </p>
          <p>
            The same year I recorded conversations for TRI’s Rural Renaissance
            series. On camera the temptation is to tidy the interviewee. The useful
            discipline is the opposite: let a panchayat member or a practitioner
            finish the thought, then ask the next question from what they actually
            said.
          </p>
          <p>
            I do not have photographs from those rooms on this site. If a recording
            becomes publicly shareable, it will be linked here. Until then the
            speaking work sits beside the{" "}
            <Link href="/work/rural-colloquy">short case in the archive</Link>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
