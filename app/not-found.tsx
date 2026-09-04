import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap" style={{ padding: "120px 0" }}>
      <p className="kicker muted">404</p>
      <h1 style={{ fontFamily: "var(--display)", fontSize: "48px", fontWeight: 400, letterSpacing: "-0.03em", marginTop: 12 }}>
        This page is not here.
      </h1>
      <p style={{ marginTop: 16 }}>
        <Link href="/" style={{ borderBottom: "1px solid var(--ink)" }}>
          Back to Suhani Bhatia
        </Link>
      </p>
    </main>
  );
}
