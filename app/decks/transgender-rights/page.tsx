import Link from "next/link";
import { PageShell } from "../../components/Shell";

export const metadata = { title: "Pride Place stakeholder deck" };

const slides = [
  "Telangana has a protection cell. The question for leadership is whether a petition becomes protection.",
  "The 2019 Act and the 2020 Rules require a cell under the DGP to monitor offences against transgender persons.",
  "Pride Place’s public SOP is a petition path: register, module officer, SHO, unit proformas, follow-up.",
  "A path on paper is a hypothesis. Intake observation tests whether the person is still a petitioner at the end of it.",
  "Kerala’s 2015 policy and Tamil Nadu’s 2008 welfare board are longer public architectures. They answer a welfare question. The cell answers a police question.",
  "Confidential case review stays inside the Cell. Public recommendations have to be about process, not about named files.",
  "Useful operational metrics: time to SHO contact; FIR conversion; action reports the petitioner hears; district-cell coverage.",
  "A three-month internship cannot evaluate the Cell. It can show leadership where the file goes quiet.",
];

export default function Deck() {
  return (
    <PageShell>
      <div className="wrap deck">
        <p className="kicker">Public reconstruction · 8 slides</p>
        <h1>When a rights law meets a police station</h1>
        <p className="note" style={{ marginBottom: 24 }}>
          This is a public reconstruction of the argument, not a dump of the
          internal deck or of case records.
        </p>
        {slides.map((title, i) => (
          <section className="slide" key={i}>
            <p className="kicker">Slide {i + 1}</p>
            <h2>{title}</h2>
            <p>
              Full case: <Link href="/work/transgender-rights">implementation page</Link>.
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
