import Link from "next/link";
import { sketches } from "../lib/labs";

export function LabsStrip() {
  return (
    <section className="reel-strip" id="labs" aria-label="Labs">
      <div className="sec-head">
        <div>
          <p className="kicker">Labs</p>
          <h2>Working sketches</h2>
        </div>
      </div>
      <div className="cards lab-index">
        {sketches.map((s) => (
          <Link className="card" href={s.href} key={s.href}>
            <p className="kind">{s.kind}</p>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="go">Open →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
