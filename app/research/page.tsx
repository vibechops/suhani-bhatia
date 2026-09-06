import Link from "next/link";
import { Artefacts, PageHead, PageShell } from "../components/Shell";

export const metadata = {
  title: "Research archive",
  description: "Downloadable notes, code, tables and models.",
};

const groups = [
  {
    title: "Women's agency",
    page: "/work/womens-agency",
    links: [
      { href: "/artefacts/agency/agency.do", label: "Stata do-file" },
      { href: "/artefacts/agency/nfhs_phase2.csv", label: "Phase-II CSV" },
      { href: "/artefacts/agency/dictionary.csv", label: "Variable dictionary" },
    ],
  },
  {
    title: "Migrant welfare",
    page: "/work/migrant-welfare",
    links: [
      { href: "/artefacts/migrants/cost-model.csv", label: "Cost model (CSV)" },
      { href: "/artefacts/migrants/decision-matrix.csv", label: "Decision matrix (CSV)" },
      { href: "/decks/migrant-welfare", label: "Strategy deck" },
    ],
  },
  {
    title: "Spatial / QGIS-ready",
    page: "/work/mobile-geography",
    links: [{ href: "/artefacts/agency/nfhs_phase2.csv", label: "State indicators CSV" }],
  },
  {
    title: "Python and SQL",
    page: "/work/welfare-data-workflow",
    links: [
      { href: "/artefacts/workflow/clean.py", label: "Python workflow" },
      { href: "/artefacts/workflow/query.sql", label: "SQL queries" },
    ],
  },
];

export default function ResearchPage() {
  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead
          kicker="Research archive"
          title="Files behind the work"
          lede="Notes, code, tables and models, downloadable and checkable. Pride Place case records and VIP Industries figures are not included."
        />
        {groups.map((g) => (
          <section key={g.title} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>
              <Link href={g.page} style={{ color: "inherit", textDecoration: "none" }}>
                {g.title}
              </Link>
            </h2>
            <Artefacts items={g.links} />
          </section>
        ))}
      </div>
    </PageShell>
  );
}
