import Link from "next/link";
import { PageShell } from "../components/Shell";

export const metadata = {
  title: "Research archive",
  description: "Downloadable notes, code, tables and models.",
};

const groups = [
  {
    title: "Women’s agency",
    links: [
      { href: "/artefacts/agency/agency.do", label: "Stata do-file" },
      { href: "/artefacts/agency/nfhs_phase2.csv", label: "Phase-II CSV" },
      { href: "/artefacts/agency/dictionary.csv", label: "Variable dictionary" },
      { href: "/work/womens-agency", label: "Research page" },
    ],
  },
  {
    title: "Migrant welfare",
    links: [
      { href: "/artefacts/migrants/cost-model.csv", label: "Cost model (CSV)" },
      { href: "/artefacts/migrants/decision-matrix.csv", label: "Decision matrix (CSV)" },
      { href: "/decks/migrant-welfare", label: "Strategy deck" },
      { href: "/work/migrant-welfare", label: "Strategy page" },
    ],
  },
  {
    title: "Spatial / QGIS-ready",
    links: [
      { href: "/artefacts/agency/nfhs_phase2.csv", label: "State indicators CSV" },
      { href: "/work/mobile-geography", label: "Map and note" },
    ],
  },
  {
    title: "Python and SQL",
    links: [
      { href: "/artefacts/workflow/clean.py", label: "Python workflow" },
      { href: "/artefacts/workflow/query.sql", label: "SQL queries" },
      { href: "/work/welfare-data-workflow", label: "Workflow page" },
    ],
  },
];

export default function ResearchPage() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">Research archive</p>
        <h1>Files</h1>
        <p className="lede" style={{ maxWidth: "28em" }}>
          Notes, code, tables and models. Pride Place case records and VIP figures
          are not included.
        </p>
        {groups.map((g) => (
          <section key={g.title} style={{ marginTop: 32 }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400 }}>
              {g.title}
            </h3>
            <p className="artefacts">
              {g.links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
