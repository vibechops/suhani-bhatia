import Link from "next/link";
import { PageShell } from "./components/Shell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="wrap band">
        <p className="kicker">404</p>
        <h1>This page is not here.</h1>
        <p className="prose">
          <Link href="/">Home</Link>
          {" · "}
          <Link href="/work">Work</Link>
        </p>
      </div>
    </PageShell>
  );
}
