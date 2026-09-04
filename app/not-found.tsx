import Link from "next/link";
import { Footer, Header } from "./components/Chrome";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap article">
          <p className="kicker">404</p>
          <h1>This page is not here.</h1>
          <p>
            <Link href="/">Back to the home page</Link>
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}
