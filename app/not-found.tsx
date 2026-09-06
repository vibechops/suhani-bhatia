import Link from "next/link";
import { PageHead, PageShell } from "./components/Shell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <PageHead kicker="404" title="This page is not here." />
        <div className="btn-row">
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
          <Link className="btn" href="/work">
            Work
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
