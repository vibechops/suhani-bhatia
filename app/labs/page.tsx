import Link from "next/link";
import { PageHead, PageShell } from "../components/Shell";

export const metadata = {
  title: "Labs",
  description: "Working sketches. Not client deliverables.",
};

const sketches = [
  {
    href: "/labs/nfhs",
    kind: "Prototype · NFHS-5",
    title: "State explorer",
    text: "Pick a Phase-II state. Own-use accounts, own-use phones, and the gap a digital welfare channel has to live with.",
  },
  {
    href: "/labs/pension",
    kind: "Prototype · last mile",
    title: "Pension walk",
    text: "A listed pensioner at the panchayat, the BDO, and the bank. Toggle a friction. Watch listed-to-paid move.",
  },
  {
    href: "/labs/companion",
    kind: "Prototype · PWA",
    title: "Assistant",
    text: "Phone-sized voice list. Speak to add. Speak again when it is done. No typing.",
  },
  {
    href: "/labs/companion/sky",
    kind: "Prototype · saved",
    title: "Assistant · sunset glass",
    text: "Frosted glass over pink clouds. The version we liked.",
  },
];

export default function LabsPage() {
  return (
    <PageShell>
      <div className="wrap lab">
        <PageHead
          kicker="Labs"
          title="Working sketches"
          lede="Interactive, independent, and labelled. These are not client deliverables. They show how a problem is structured."
        />
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
      </div>
    </PageShell>
  );
}
